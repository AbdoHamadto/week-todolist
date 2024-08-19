"use client"

import moment from 'moment';
import { useTaske } from '../store/abdoStore';
import Image from 'next/image';
import pluse from './image/plus.png'
import Link from 'next/link';
import { useState } from 'react';
import deleteTask from "./image/delete.png"

const FocusDay = ({id}) => {
  
  const {data, stateTask, removeAll, addTask, removeTask} = useTaske()
  const [word, setWord] = useState("")
  const add = () => {
    if(word.trim()){
      addTask(id, word)
      setWord("")
    }
  }
  const handleKeyDown = (event) => {
    const key = event.key;
    if (key === 'Enter' && word.trim()) {
      addTask(id, word)
      setWord("")
    }
  };

  const date = new Date()
  const numWeek = moment(date).week();

  const day = 6 - date.getDay()
  const hour = 24 - date.getHours()

  let rating = data[id].tasks.filter((item) => item.state === true).length / data[id].tasks.length * 100 | 0;
  if(rating < 50) {
    rating = "قوم شوف اللي وراك 😡"
  } else if(rating < 65 && rating >= 50) {
    rating = "هعدهالك 😐"
  } else if(rating < 75 && rating >= 65) {
    rating = "كويس نوعا ما 😌"
  } else if(rating < 85 && rating >= 75){
    rating = "جامد 😊"
  } else if (rating >= 85) {
    rating = "انت مفيش منك اتنين 🥰"
  }

  return(
    <div className="w-11/12 flex justify-center items-center">
      <div className="click-no w-2/6 flex flex-col items-center">
        <div className="w-3/5 bg-bgCard my-4 p-2 flex flex-col rounded-lg">
          <p className="w-4/5 p-2 rounded-lg text-xl font-bold mt-2 mb-4 mx-auto text-center bg-bgNav text-white">الإسبوع</p>
          <p className="w-3/5 p-2 rounded-lg text-xl font-bold mb-2 mx-auto text-center bg-bgNav text-white">{numWeek}</p>
        </div>
        <div className="click-no w-3/5 bg-bgCard p-2 rounded-lg">
          <p className="w-4/5 p-2 rounded-lg text-xl font-bold my-2 mx-auto text-center bg-bgNav text-white">{data[id].day}</p>
        </div>
        <div className="click-no w-3/5 bg-bgCard my-4 p-2 rounded-lg">
          <p className="w-4/5 p-2 rounded-lg text-xl font-bold my-2 mx-auto text-center bg-bgNav text-white">الوقت المتبقي</p>
          <div className="flex flex-col items-center justify-center">
            <p className="text-darkblue text-2xl">{day} أيام</p>
            <p className="text-darkblue text-2xl">{hour} ساعات</p>
          </div>
        </div>
        <div className="click-no w-3/5 bg-bgCard p-2 rounded-lg flex flex-col items-center">
          <p className="my-4 text-darkblue text-3xl">{data[id].tasks.filter((item) => item.state === true).length}</p>
          <div className="w-2/4 h-1 bg-bgNav"/>
          <p className="my-4 text-darkblue text-3xl">{data[id].tasks.length}</p>
        </div>
        <div className="click-no w-3/5 bg-bgCard my-4 p-2 flex flex-col rounded-lg">
          <p className="w-4/5 p-2 rounded-lg text-xl font-bold my-2 mx-auto text-center bg-bgNav text-white">{ data[id].tasks.filter((item) => item.state === true).length / data[id].tasks.length * 100 | 0 }%</p>
          <p className="w-3/5 p-2 rounded-lg text-xl font-bold mb-2 mx-auto text-center bg-bgNav text-white">{rating}</p>
        </div>
      </div>

      <div className="click-details w-4/6 bg-bgCard flex flex-col items-center h-[800px] rounded-lg">
        <div className="my-4 w-4/5 flex justify-center items-center">
          <input 
            type="text" 
            placeholder="أضف مهمه جديده" 
            className="p-2 outline-none ml-4 w-full text-xl text-darkblue"
            onChange={(e) => setWord(e.target.value)}
            value={word}
            onKeyDown={handleKeyDown} 
          />
          <Image 
            src={pluse}
            alt='add'
            className='click w-8 h-8 cursor-pointer'
            onClick={add}
          />
        </div>
        <ul className="py-3 px-4 bg-bgTaske rounded-b-3xl h-[550px] overflow-y-auto w-4/5">
          {data[id].tasks.map((item, index) => {return(
            <li key={index} className="relative group overflow-hidden text-lg bg-bgTaskes mt-2 mb-3 py-2 flex justify-between items-center">
              <p onClick={() => stateTask(id, index)} className={`${item.state && "text-red-900 line-through"} click-task w-full cursor-pointer mx-3 text-darkblue text-xl`}>{item.task}</p>
              <Image 
                src={deleteTask}
                alt='removeTask'
                className="click w-5 h-5 ml-4 cursor-pointer"
                onClick={() => removeTask(id, item.id)}
              />
              <div className="absolute w-1 h-full bg-bgText duration-300 -translate-y-12 group-hover:translate-y-0"/>
            </li>
          )})}
        </ul>
        <button 
          onClick={() => removeAll(id)}
          className="click-rubbish w-3/5 p-2 bg-bgTaske hover:bg-bgTaskes hover:text-bgRemove my-8 font-bold text-xl"
        >
          حذف الكل
        </button>
        <Link href="/" className="click-undo w-2/5 p-2 bg-bgTaske hover:bg-bgTaskes hover:text-bgRemove font-bold text-center">رجوع</Link>
      </div>
    </div>
  )
}

export default FocusDay;