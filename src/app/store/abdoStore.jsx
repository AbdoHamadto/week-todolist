import { create } from "zustand";
// import {persist} from 'zustand/middleware'
// import {immer} from "zustand/middleware/immer"
import { produce } from "immer";


export const useTaske = create(
  // persist(
    (set) => ({
      data: [ {id: 0,day: "السبت", tasks: [{id: 0,task: "one", state: false}, {id: 1,task: "two in sat", state: false}]},
              {id: 1,day: "الأحد", tasks: [{id: 0,task: "two", state: false}]},
              {id: 2,day: "الإثنين", tasks: [{id: 0,task: "three", state: false}]},
              {id: 3,day: "الثلاثاء", tasks: [{id: 0,task: "four", state: false}]},
              {id: 4,day: "الأربعاء", tasks:[{id: 0,task: "five", state: false}]},
              {id: 5,day: "الخميس", tasks:[{id: 0,task: "six", state: false}]},
              {id: 6,day: "الجمعة", tasks: [{id: 0,task: "seven", state: false}]},
              {id: 7,day: "تحديات الأسبوع", tasks: [{task: "chang", state: false}]}],
      stateTask: (dayId, taskId) => set(
        produce((draft) => {
          draft.data[dayId].tasks[taskId].state = !draft.data[dayId].tasks[taskId].state
        })
      )
    }), {
      name: "todolist-week"
    }
  // )
)