import {defineStore} from "pinia";

export const useNavState = defineStore('nav', {
    state: () => ({ absolute: false }),
    getters: {
        getState: (state) => state.absolute,
    },
    actions: {
        setAbsolute(type) {
            this.absolute = type
        },
    },
})