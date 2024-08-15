import { create } from "zustand";
import {persist} from 'zustand/middleware'


export const useDayStore = create(persist((set) => ({
    day: [],
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

      deleteAllDay: () => set(() => ({day: []})),

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
   
  }), {
      name: "week"
  }))