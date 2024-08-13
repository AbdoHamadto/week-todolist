"use client"

import { useRef } from "react"
import { useDayStore } from "../store/data"; 


export default function Card({day}) {

    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const ref4 = useRef();
    const ref5 = useRef();
    const ref6 = useRef();
    const ref7 = useRef();
    const addDay = useDayStore(state => state.addDay)

    const done = () => {
        const dataDay = {dayName: day, tasks: [{task: ref1.current.value, done: false}, {task: ref2.current.value, done: false},{task: ref3.current.value, done: false},{task: ref4.current.value, done: false},{task: ref5.current.value, done: false},{task: ref6.current.value, done: false}]};
        addDay(dataDay);
        ref7.current.style.backgroundColor = "green"
    }

  return (
    <div className="h-[370px] mt-12 p-3 rounded-3xl bg-zinc-900 ">
                <p className="w-4/5 p-3 rounded-lg text-xl text-white font-bold mt-2 mb-2 mx-auto text-center bg-black">{day}</p>
                <ul className={`test py-3 px-4 bg-black text-white rounded-b-3xl h-64 overflow-y-auto`}>
                  <li className="relative group overflow-hidden text-lg mt-2 mb-3 py-2 cursor-pointer">
                    <input ref={ref1} type="text" placeholder="اضف مهمة..." className="w-full h-full bg-zinc-900 text-white p-3 appearance-none "/>
                  </li>
                  <li className="relative group overflow-hidden text-lg mt-2 mb-3 py-2 cursor-pointer">
                    <input ref={ref2} type="text" placeholder="اضف مهمة..." className="w-full h-full bg-zinc-900 text-white p-3 appearance-none "/>
                  </li>
                  <li className="relative group overflow-hidden text-lg mt-2 mb-3 py-2 cursor-pointer">
                    <input ref={ref3} type="text" placeholder="اضف مهمة..." className="w-full h-full bg-zinc-900 text-white p-3 appearance-none "/>
                  </li>
                  <li className="relative group overflow-hidden text-lg mt-2 mb-3 py-2 cursor-pointer">
                    <input ref={ref4} type="text" placeholder="اضف مهمة..." className="w-full h-full bg-zinc-900 text-white p-3 appearance-none "/>
                  </li>
                  <li className="relative group overflow-hidden text-lg mt-2 mb-3 py-2 cursor-pointer">
                    <input ref={ref5} type="text" placeholder="اضف مهمة..." className="w-full h-full bg-zinc-900 text-white p-3 appearance-none "/>
                  </li>
                  <li className="relative group overflow-hidden text-lg mt-2 mb-3 py-2 cursor-pointer">
                    <input ref={ref6} type="text" placeholder="اضف مهمة..." className="w-full h-full bg-zinc-900 text-white p-3 appearance-none "/>
                  </li>
                </ul>
                <div ref={ref7} onClick={done} className="p-1 bg-black mx-auto text-center text-white rounded-md hover:bg-zinc-700 transti cursor-pointer w-20">تم</div>
            </div>
  )
}
