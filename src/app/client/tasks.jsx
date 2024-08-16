"use client"

import Image from "next/image";
import round from "./image/loop.png"
import moment from 'moment';
import { useState } from "react";
import { useDayStore } from "../store/data";

const MapTaskesClient = () => {

  const {data, stateTask, stateFlip, weeks} = useDayStore();
  // localStorage.clear() 

  const date = new Date()
  const numWeek = moment(date).week();
  console.log(numWeek)

  const arr = weeks.filter((item) => item.numberWewk === numWeek)
  console.log(arr)


  return(
    <>
      {data.map((item, indexDay) => 
        <div key={indexDay} className={`${item.flip && "flip"} card relative mt-12 h-[370px]`}>
          <div className="face p-3 rounded-3xl h-full absolute w-full bg-bgCard">
            <div className="flex items-center justify-center">
            <p className="w-4/5 p-3 rounded-lg text-xl font-bold mt-3 mb-4 mx-auto text-center bg-bgNav text-white">{item.day}</p>
            <Image src={round} alt="round" onClick={() => stateFlip(indexDay)} className="w-12 h-12 cursor-pointer hover:animate-spin " />
            </div>
            <ul className="py-3 px-4 bg-bgTaske rounded-b-3xl h-64 overflow-y-auto">
                {item.tasks.map((item, index) => {return(
                  <li key={index} onClick={() => stateTask(indexDay, index)} className="relative group overflow-hidden text-lg bg-bgTaskes mt-2 mb-3 py-2 cursor-pointer">
                    <p className={`${item.state && "text-red-900 line-through"} mx-3 text-darkblue`}>{item.task}</p>
                    <div className="absolute w-1 h-full bg-bgText duration-300 -translate-y-20 group-hover:-translate-y-9"/>
                  </li>
                )})}
            </ul>
          </div>
          <div className="face back p-3 absolute bg-bgCard rounded-3xl top-0 lef-0 w-full h-full">
            <div className="w-full h-5/6 flex flex-col rounded-3xl items-center text-4xl mt-16">
              <p className="my-4 text-darkblue">5</p>
              <div className="w-2/4 h-1 bg-bgNav"/>
              <p className="my-4 text-darkblue">10</p>
              <div className="w-full relative p-2 flex justify-center items-center">
                <div className={`absolute bg-green-200 h-full right-0 -z-10`}></div>
                <p className="bg-bgNav p-2 w-full rounded-xl text-center text-white font-bold">{pa}</p>
                <div className={`absolute bg-red-200 w-[calc(100%-${pa})] h-full left-0 -z-10`}></div>
              </div>
            </div>
            <Image src={round} alt="round" onClick={() => stateFlip(item.id)} className="w-12 h-12 cursor-pointer hover:animate-spin absolute top-4 left-4"/>
          </div>
        </div>
      )}
    </>
  )
}

export default MapTaskesClient;