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
                console.log(count)
            }
        }

        if (count == 1 ) {
            console.log(count)
            for (let i = 0; i <all.length; i++) {
                if (all[i].dayName == item.dayName) {
                    all[i] = item
                }
            }
        }else {
            all = [...all, item]
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