import {defineStore} from "ui.vue3.pinia";

export const statusStore = defineStore('status', {
	state: () => ({
		lastAction: 'None'
	}),
	actions: {
		setAction(action)
		{
			this.lastAction = action.toString();
		},
	},
});