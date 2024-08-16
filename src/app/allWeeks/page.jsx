"use client"
import Link from 'next/link';
import NavBar from '../components/nav-bar';
import { useDayStore } from '../store/data';


export default function AllWeeks() {

    const weeks = useDayStore(state => state.weeks)


  return (
    <div>
      <NavBar />
       <div className="flex flex-wrap gap-5 mt-6 justify-center">
        {weeks.map((item, index) => {
            return(
                <Link href={`/${index}`} key={index}>
                    <div className="flex justify-between items-center  bg-bgCard rounded-lg text-2xl font-bold text-white p-4 w-80 mx-auto hover:bg-bgNav transition-colors cursor-pointer" key={index}>
                        <p>الاسبوع: {item.numberWeek}</p>
                        <p>التقييم: {item.evaluation}</p>
                    </div>
                </Link>
            )
        })}
      </div> 
    </div>
  )
}
