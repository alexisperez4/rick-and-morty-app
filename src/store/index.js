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
                
                commit('setCharacters', data.results)
                commit('setCharacterFilter', data.results)
                
            } catch (error) {
                console.log(error)
            }
        },
        filterByStatus({commit, state}, status){
            console.log(status)
            const results = state.characteres.filter(character => {
                return character.status.includes(status)
            })
            commit('setCharacterFilter', results)
        },
        filterByName({commit, state}, name){
            const formatName = name.toLowerCase()
            const results = state.characteres.filter(character => {
                const characterName = character.name.toLowerCase()
                if(characterName.includes(formatName)){
                    return character
                }
            })
            commit('setCharacterFilter', results)
        }
    },
    modules: {
    
    }
})
