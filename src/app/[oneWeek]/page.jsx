"use client"
import NavBar from "../components/nav-bar";
import { useDayStore } from "../store/data";

export default function OneWeek({params}) {

    const ind = params.oneWeek;
    const weeks = useDayStore(state => state.weeks)

  return (
    <div>
        <NavBar />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-11/12 mx-auto md:grid-cols-3 xl:grid-cols-4 mb-5">
        {weeks[ind].daysWeek.map((it, index) => 
         {
            return (
                <div key={index} className="h-[370px] mt-12 p-3 rounded-3xl bg-bgCard">
            <p className="w-4/5 p-3 rounded-lg text-xl font-bold mt-3 mb-4 mx-auto text-center bg-bgNav text-white">{it.dayName}</p>
            <ul className="py-3 px-4 bg-bgTaske rounded-b-3xl h-64 overflow-y-auto">
                {it.tasks.length != 0?it.tasks.map((item, index) => {return(
                    <li key={index} className="relative group overflow-hidden text-lg bg-bgTaskes mt-2 mb-3 py-2 cursor-pointer">
                    <p className={`mx-3 text-darkblue`}>{item.task}</p>
                    <div className="absolute w-1 h-full bg-bgText duration-300 -translate-y-20 group-hover:-translate-y-9"/>
                    </li>
                )}):<p className="text-2xl text-white font-bold text-center">يوم اجازة...</p>}
            </ul>
        </div>
            )
         }
      )}
      </div>
    </div>
  )
}
