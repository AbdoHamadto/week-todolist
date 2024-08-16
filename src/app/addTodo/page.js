"use client"
import Link from "next/link"
import Card from "../components/Card"
import { useDayStore } from "../store/data";
import { useRef } from "react";

export default function Page() {

    const day = ["السبت","الاحد","الاثنين","الثلاثاء","الاربعاء","الخميس","الجمعة","تحديات الاسبوع",];
    const days = useDayStore(state => state.day);
    const addWeek = useDayStore(state => state.addWeek);
    const deleteAll = useDayStore(state => state.deleteAllDay)
    const ref0 = useRef();
    const ref00 = useRef();

    const saveWeek = () => {
        if(ref0.current.value === "") {
            scroll({
                top: 0,
                behavior: "smooth"
            });
            ref0.current.classList.add("no")
        }else {
            if ( ref0.current.classList.contains("no")) {
                ref0.current.classList.remove("no")
            }

            const weekarray = {numberWeek: ref0.current.value, weekDone: false, evaluation: 0, daysWeek: days};
            addWeek(weekarray);
            ref00.current.style.backgroundColor = "green"
        }
    }


    

  return (
    <div className=" h-full w-full m-0 py-10">
        <div className="w-full flex justify-center ">
            <input ref={ref0} type="number" placeholder="ادخل رقم الاسبوع..." className="p-3 appearance-none bg-inherit focus:outline-white text-white font-bold rounded-md"/>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-11/12 mx-auto md:grid-cols-3 xl:grid-cols-4 mb-5">
           {day.map((item, index) => {
            return(
                <Card key={index} dayy={item} days={days.filter((itemm) => itemm.dayName == item)}/>
            )
           })}
        </div>
        <div className="w-full flex justify-center">
            <div onClick={saveWeek} className="p-2 bg-bgTaskes text-white font-bold text-2xl rounded-md hover:bg-bgNav transition-all hover:p-3 cursor-pointer ml-5">حفظ الكل</div>
            <Link href="/"><div onClick={deleteAll} ref={ref00} className="p-2 bg-bgTaskes text-white font-bold text-2xl rounded-md hover:bg-bgNav transition-all hover:p-3 cursor-pointer">رجوع</div></Link>
        </div>
    </div>
  )
}
