import axios from 'axios'

export default {
    actions: {
        async getChargeTypes({commit}) {
            axios.get('/api/charges/types').then(resp => {
                commit('setChargeTypes', resp.data)
            }).catch(resp => {
                console.log(resp);
            });
        }
    },
    mutations: {
        setChargeTypes(state, chargeTypes) {
            state.chargeTypes = chargeTypes
        }
    },
    state: {
        chargeTypes: []
    },
    getters: {
        allChargeTypes(state) {
            return state.chargeTypes
        }
    }
}