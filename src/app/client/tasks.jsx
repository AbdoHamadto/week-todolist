"use client"

import { useTaske } from "../store/abdoStore";

const MapTaskesClient = () => {

  const {data, stateTask} = useTaske();
  // localStorage.clear()

  return(
    <>
      {data.map((it, index) => 
        <div key={index} className="h-[370px] mt-12 p-3 rounded-3xl bg-bgCard">
            <p className="w-4/5 p-3 rounded-lg text-xl font-bold mt-3 mb-4 mx-auto text-center bg-bgNav text-white">{it.day}</p>
            <ul className="py-3 px-4 bg-bgTaske rounded-b-3xl h-64 overflow-y-auto">
                {it.tasks.map((item, index) => {return(
                  <li key={index} onClick={() => stateTask(it.id, item.id)} className="relative group overflow-hidden text-lg bg-bgTaskes mt-2 mb-3 py-2 cursor-pointer">
                    <p className={`${item.state && "text-bgDone line-through"} mx-3 text-darkblue`}>{item.task}</p>
                    <div className="absolute w-1 h-full bg-bgText duration-300 -translate-y-20 group-hover:-translate-y-9"/>
                  </li>
                )})}
            </ul>
        </div>
      )}
    </>
  )
}

export default MapTaskesClient;