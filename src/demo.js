/**
 * Pinia demo
 *
 * @package pinia
 * @subpackage local
 * @copyright 2001-2022 Bitrix
 */

import { BitrixVue } from 'ui.vue3';
import { Application } from './components/application';
import { createPinia, setActivePinia } from 'ui.vue3.pinia';
import { counterStore } from './stores/counter';

export class PiniaDemo
{

	#store;
	#rootNode
	#application;

	constructor(rootNode): void
	{
		this.#store = createPinia();
		this.#rootNode = document.querySelector(rootNode);
	}

	start(): void
	{
		this.#application = BitrixVue.createApp({
			name: 'Pinia Application',
			components: {
				Application
			},
			template: '<Application/>'
		})
		this.#application.use(this.#store);
		this.#application.mount(this.#rootNode);
	}

	initStorageBeforeStartApplication(): void
	{
		setActivePinia(this.#store);
	}

	getCounterStore(): Object
	{
		return counterStore;
	}
}