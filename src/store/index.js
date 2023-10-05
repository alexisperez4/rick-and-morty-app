import { createStore } from 'vuex'


export default createStore({
    state: {
        characteres: [],
        characterFilter: []
    },
    mutations: {
        setCharacters(state, payload) {
            state.characteres = payload
        },
        setCharacterFilter(state, payload) {
            state.characterFilter = payload
        }
    },
    actions: {
        async getCharacters({commit}){
            try {
                const response = await fetch("https://rickandmortyapi.com/api/character")
                const data = await response.json()
                
                console.log(data)
                commit('setCharacters', data.results)
                
            } catch (error) {
                console.log(error)
            }
        }
    },
    modules: {
    
    }
})
