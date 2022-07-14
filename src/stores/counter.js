import { defineStore } from "ui.vue3.pinia";
import { statusStore } from "./status";

export const counterStore = defineStore('counter', {
	state: () => ({
		counter: 0
	}),
	getters: {
		double()
		{
			return this.counter * 2;
		},
	},
	actions: {
		increaseCounter()
		{
			this.counter++;
			statusStore().setAction('Plus');
		},
		decreaseCounter()
		{
			this.counter--;
			statusStore().setAction('Minus');
		},
        resetCounter()
        {
            this.counter = 0;
            statusStore.setAction('Reset');
        }
	},
});
