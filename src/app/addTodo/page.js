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
    const ref0 = useRef()

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
            addWeek(weekarray)
        }
    }


    

  return (
    <div>
        <div className="w-full flex justify-center mt-5">
            <input ref={ref0} type="number" placeholder="ادخل رقم الاسبوع..." className="p-3 appearance-none bg-black text-white font-bold rounded-md"/>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-11/12 mx-auto md:grid-cols-3 xl:grid-cols-4 mb-5">
            <Card day={day[0]}/>
            <Card day={day[1]}/>
            <Card day={day[2]}/>
            <Card day={day[3]}/>
            <Card day={day[4]}/>
            <Card day={day[5]}/>
            <Card day={day[6]}/>
            <Card day={day[7]}/>
        </div>
        <div className="w-full flex justify-center mb-5">
            <div onClick={saveWeek} className="p-2 bg-black text-white font-bold text-2xl rounded-md hover:bg-zinc-900 transti hover:p-3 cursor-pointer ml-5">حفظ الكل</div>
            <Link href="/"><div onClick={deleteAll} className="p-2 bg-black text-white font-bold text-2xl rounded-md hover:bg-zinc-900 transti hover:p-3 cursor-pointer">رجوع</div></Link>
        </div>
    </div>
  )
}
