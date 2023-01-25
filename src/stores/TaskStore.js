import { defineStore } from "pinia";

export const UseTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [
            { id: 1, title: "Buy Some Milk!", isFav: true },
            { id: 2 , title: "Buy Some Veggies!", isFav: false },

        ],
        name: "Pinia Tasks"
    }),
    getters: {
        favs() {
            return this.tasks.filter(t => t.isFav)
        }
    }
});