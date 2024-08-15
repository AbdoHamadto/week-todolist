"use client"

import { useRef, useReducer } from "react"
import { useDayStore } from "../store/data"; 


export default function Card({dayy, days}) {


  const ref1 = useRef();
  const addDay = useDayStore(state => state.addDay);
  const [, forceUpdate] = useReducer(x => x + 1, 0);
  const deleteOne = useDayStore(state => state.deleteOne)


  

    const done = () => {
        if (ref1.current.value != "") {
          const dataDay = {dayName: dayy, tasks: [{task: ref1.current.value, done: false}]};
          addDay(dataDay);
          ref1.current.value = ""
          forceUpdate()
        }
        
    }

    
    

  return (
    <div className="h-[370px] mt-12 p-3 rounded-3xl bg-zinc-900 ">
                <p className="w-4/5 p-3 rounded-lg text-xl text-white font-bold mt-2 mb-2 mx-auto text-center bg-black">{dayy}</p>
                <div className={`test py-3 px-4 bg-black text-white rounded-b-3xl h-64 overflow-y-auto`}>
                  <div className="flex  text-lg mt-2 mb-3 py-2 cursor-pointer">
                    <input ref={ref1} type="text" placeholder="اضف مهمة..." className="w-4/5 h-full bg-zinc-900 text-white p-3 appearance-none "/>
                    <div onClick={done} className="bg-zinc-900 min-w-8 mx-auto text-center text-white rounded-md hover:bg-zinc-700 transti cursor-pointer p-1 ">تم</div>
                  </div>
                  {days[0] !== undefined? days[0].tasks.map((item, index) => {
          
                    return(
                      <div key={index} className="flex justify-between items-center w-full transition-all bg-zinc-900 text-white p-2 mb-1 cursor-pointer hover:bg-zinc-950 rounded-sm">
                        <p>{item.task}</p>
                        <p onClick={() => {deleteOne(dayy, index); forceUpdate()}} className="text-2xl hover:text-red-700">X</p>
                      </div>
                    )
                  }):<p>لايوجد مهمات...</p>}
                  
                </div>
            </div>
  )
}
