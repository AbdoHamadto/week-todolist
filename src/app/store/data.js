import { create } from "zustand";
import {persist} from 'zustand/middleware'
import { produce } from "immer";
import moment from 'moment';

export const useDayStore = create(persist((set) => ({
    day: [{dayName: "السبت", tasks: []}, {dayName: "الاحد", tasks: []},{dayName: "الاثنين", tasks: []}, {dayName: "الثلاثاء", tasks: []}, {dayName: "الاربعاء", tasks: []}, {dayName: "الخميس", tasks: []}, {dayName: "الجمعة", tasks: []}, {dayName: "تحديات الاسبوع", tasks: []}],
    addDay: (item) => set((state) => {
        let all = state.day;
        let count = 0;

        for (let i = 0; i <all.length; i++) {
            if (all[i].dayName === item.dayName) {
                count = 1;
            }
        }

        if (count == 1 ) {
            for (let i = 0; i <all.length; i++) {
                if (all[i].dayName == item.dayName) {
                    all[i].tasks = [...all[i].tasks, item.tasks[0]]
                }
            }
        }else {
            all = [...all, item]
        }

        return ({day: all})
      }),

      deleteOne: (item, index) => set((state) => {
        let all = state.day;

        for (let i = 0; i <all.length; i++) {
            if (all[i].dayName === item) {
                console.log(all[i].tasks[index]);
                let test = all[i].tasks[index].task
                all[i].tasks = all[i].tasks.filter((one) => one.task != test)
                console.log(all[i])
            }
        }

        
        return ({day: all})
      }),

      deleteAllDay: () => set(() => ({day: [{dayName: "السبت", tasks: []}, {dayName: "الاحد", tasks: []},{dayName: "الاثنين", tasks: []}, {dayName: "الثلاثاء", tasks: []}, {dayName: "الاربعاء", tasks: []}, {dayName: "الخميس", tasks: []}, {dayName: "الجمعة", tasks: []}, {dayName: "تحديات الاسبوع", tasks: []}]})),

    weeks: [],
    addWeek: (item) => set((state) => {
        let all = state.weeks;
        let count = 0;

        for (let i = 0; i <all.length; i++) {
            if (all[i].numberWeek === item.numberWeek) {
                count = 1;
            }
        }

        if (count == 1 ) {
            for (let i = 0; i <all.length; i++) {
                if (all[i].numberWeek == item.numberWeek) {
                    all[i] = item
                }
            }
        }else {
            all = [...all, item]
        }

        return ({weeks: all})
      }),
        // abdo
        // data: [ {id: 0,flip: false,day: "السبت", tasks: [{id: 0,task: "one", state: false}, {id: 1,task: "two in sat", state: false}]},
        //       {id: 1,flip: false,day: "الأحد", tasks: [{id: 0,task: "two", state: false}]},
        //       {id: 2,flip: false,day: "الإثنين", tasks: [{id: 0,task: "three", state: false}]},
        //       {id: 3,flip: false,day: "الثلاثاء", tasks: [{id: 0,task: "four", state: false}]},
        //       {id: 4,flip: false,day: "الأربعاء", tasks:[{id: 0,task: "five", state: false}]},
        //       {id: 5,flip: false,day: "الخميس", tasks:[{id: 0,task: "six", state: false}]},
        //       {id: 6,flip: false,day: "الجمعة", tasks: [{id: 0,task: "seven", state: false}]},
        //       {id: 7,flip: false,day: "تحديات الأسبوع", tasks: [{id: 0,task: "chang", state: false}]}],
        data: [],
        thisWeek: () => set(
            (state) => {
                const arr = state.weeks.filter((item) => item.numberWeek === state.numWeek())
                return(console.log(arr))
            }
        ),
        stateTask: (dayId, taskId) => set(
        produce((draft) => {
            draft.data[dayId].tasks[taskId].state = !draft.data[dayId].tasks[taskId].state
        })
      ),
      stateFlip: (dayId) => set(
        produce((draft) => {
          draft.data[dayId].flip = !draft.data[dayId].flip
        })
      )
  }), {
      name: "week"
  }))