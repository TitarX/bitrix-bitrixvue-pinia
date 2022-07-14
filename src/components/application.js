import "./application.css";
import { mapState, mapActions } from "ui.vue3.pinia";
import { counterStore } from "../stores/counter";
import { statusStore } from "../stores/status";

export const Application =
{
    computed: {
        ...mapState(counterStore, ['counter', 'double']),
        lastAction: () => statusStore().lastAction,
    },
    methods: {
        ...mapActions(counterStore, ['increaseCounter', 'decreaseCounter', 'resetCounter']),
    },
    // language=Vue
    template: `
        <div class="demo-header">{{$Bitrix.Loc.getMessage('DEMO_PINIA_TITLE')}}</div>
        <div>
            <div>{{ $Bitrix.Loc.getMessage('DEMO_PINIA_COUNTER', {'#COUNTER#': this.counter, '#DOUBLE#': this.double}) }}</div> 
            <div>{{ $Bitrix.Loc.getMessage('DEMO_PINIA_LAST_ACTION', {'#COUNTER#': this.lastAction}) }}</div> 
            <div>
                <button @click="increaseCounter">+</button>
                <button @click="decreaseCounter">-</button>
            </div>
        </div>
    `
};
