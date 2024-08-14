const MapTaskes = () => {
  const data = [{day: "السبت", taskes: ["اهلا", "عامل ايه", "الحمد لله", "اهلا", "عامل ايه", "الحمد لله", "الحمد لله", "اهلا", "عامل ايه", "الحمد لله"]},
                {day: "الأحد", taskes: ["اهلا", "عامل ايه", "الحمد لله"]},
                {day: "الإثنين", taskes: ["اهلا", "عامل ايه", "الحمد لله"]},
                {day: "الثلاثاء", taskes: ["اهلا", "عامل ايه", "الحمد لله"]},
                {day: "الأربعاء", taskes: ["اهلا", "عامل ايه", "الحمد لله"]},
                {day: "الخميس", taskes: ["اهلا", "عامل ايه", "الحمد لله"]},
                {day: "الجمعة", taskes: ["اهلا", "عامل ايه", "الحمد لله"]},
                {day: "تحديات الأسبوع", taskes: ["اهلا", "عامل ايه", "الحمد لله"]}]
  return(
    <div className="grid grid-cols-4 gap-5 w-11/12 mx-auto">
      {data.map((item, index) => 
        <div key={index} className="h-[370px] mt-12 p-3 rounded-3xl bg-bgCard">
            <p className="w-4/5 p-3 rounded-lg text-xl font-bold mt-3 mb-4 mx-auto text-center bg-bgNav text-white">{item.day}</p>
            <ul className="py-3 px-4 bg-bgTaske rounded-b-3xl h-64 overflow-y-auto">
                {item.taskes.map((item, index) => {return(
                  <li key={index} className="relative group overflow-hidden text-lg bg-bgTaskes mt-2 mb-3 py-2 cursor-pointer">
                    <p className="mx-3 text-darkblue hover:text-bgDone hover:line-through ">{item}</p>
                    <div className="absolute w-1 h-full bg-bgText duration-300 -translate-y-20 group-hover:-translate-y-9"/>
                  </li>
                )})}
            </ul>
        </div>
      )} 
    </div>
  )
}

export default MapTaskes;