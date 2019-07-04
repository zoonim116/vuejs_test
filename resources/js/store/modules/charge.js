import axios from 'axios'
import router from '@/routes/index'

export default {
    actions: {
        async getCharges({commit,  getters}) {
            const paginationSettings = getters.paginationSettings;
            const searchParams = getters.searchParams;
            axios.get('/api/charges?per_page=' + paginationSettings.perPage
                + '&page=' + paginationSettings.currentPage
                + '&searchType=' + searchParams.searchType
                + '&searchQuery=' + searchParams.searchQuery).then(resp => {
                commit('SET_CHARGES', resp.data);
                commit('SET_PAGINATION_DATA', resp.data)
            }).catch(resp => {
                console.log(resp);
            });
        },
        async createCharge({commit, dispatch}, data) {
            axios.post('/api/charges', data).then(resp => {
                dispatch('getCharges');
                router.replace('/');
                // commit('createCharge', data)
            }).catch(resp => {
                console.log(resp)
            });
        },
        async deleteCharge({commit}, id) {
            axios.delete('/api/charges/' + id).then( resp => {
                commit('DELETE_CHARGE', id);
            }).catch(resp => {
                console.log(resp);
            });
        },
        async updateCharge({commit, dispatch}, data) {
            axios.put('/api/charges/' + data.id, data).then(resp => {
                dispatch('getCharges');
                router.replace('/');
            }).catch(resp => {
                console.log(resp);
            })
        },
        async getCharge({commit}, id) {
            axios.get('/api/charges/' + id).then(resp => {
                commit('SET_CURRENT_CHARGE', resp.data);
            }).catch(resp => {
                console.log(resp);
            })
        },
        setPaginationSettings({commit, dispatch}, {perPage, page}) {
            commit('SET_PER_PAGE', perPage);
            commit('SET_CURRENT_PAGE', page);
            dispatch('getCharges')
        },
        setSearchType({commit, dispatch}, searchType) {
            commit('SET_SEARCH_TYPE', searchType);
            dispatch('getCharges')
        },
        searchResults({commit, dispatch}, searchQuery) {
            commit('SET_SEARCH_QUERY', searchQuery);
            dispatch('getCharges')
        }
    },
    mutations: {
        SET_CHARGES(state, charges) {
            state.charges = charges.data
        },
        SET_PAGINATION_DATA(state, paginationData) {
            state.paginationData = paginationData
        },
        CREATE_CHARGE(state, data) {
            state.charges.unshift(data);
            router.replace('/');
        },
        DELETE_CHARGE(state, id) {
            state.charges = state.charges.filter(charge => {
                return charge.id !== id
            });
        },
        SET_PER_PAGE(state, perPage) {
            state.perPage = perPage;
        },
        SET_CURRENT_PAGE(state, currentPage) {
            state.currentPage = currentPage;
        },
        SET_SEARCH_TYPE(state, searchType) {
            state.searchType = searchType;
        },
        SET_SEARCH_QUERY(state, searchQuery) {
            state.searchQuery = searchQuery;
        },
        SET_CURRENT_CHARGE(state, charge) {
            state.currentCharge = charge;
        }
    },
    state: {
        charges: [],
        currentCharge: {

        },
        perPage: 3,
        currentPage: 1,
        paginationData: {},
        searchQuery: '',
        searchType: ''
    },
    getters: {
        allCharges(state) {
            return state.charges
        },
        paginationData(state) {
            return state.paginationData;
        },
        paginationSettings(state) {
          return {
              perPage: state.perPage,
              currentPage: state.currentPage
          }
        },
        searchParams(state) {
            return {
                searchQuery: state.searchQuery,
                searchType: state.searchType
            }
        },
        currentCharge(state) {
            return state.currentCharge
        }
    }
}