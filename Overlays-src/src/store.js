import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		all: [],
		selected: ''
	},

	getters: {
		characters: state => state.all,
		characterCount: state => state.all.length,
		character: state => state.all.find(c => c.Id == state.selected) || null
	},

	actions: {
		async selectCharacter({ commit }, id) {
			//await Nui.send('character-load', id)

			commit('setCharacter', id)
		},

		async deleteCharacter({ commit }, id) {
			//await Nui.send('character-delete', id)

			commit('setCharacter', null)
		},

		async setCharacters({ commit }, characters) {
			commit('setCharacters', characters)
		}
	},

	mutations: {
		setCharacter(state, id) {
			state.selected = id
		},

		setCharacters(state, characters) {
			state.all = [];

			for (let i = 0; i < characters.length; i++) {
				const character = characters[i];

				character.GenderString = character.Gender === 0 ? 'Male' : 'Female';

				const dob = new Date(character.DateOfBirth);
				character.DateOfBirthFormatted = dob.getDate() + ' ' + dob.toLocaleString('en-US', { month: 'long' }) + ' ' + dob.getFullYear();

				const lastPlayed = new Date(character.LastPlayed);
				character.LastPlayedFormatted = lastPlayed.getDate() + ' ' + lastPlayed.toLocaleString('en-US', { month: 'long' }) + ' ' + lastPlayed.getFullYear();
                character.LastPlayedFormatted = character.LastPlayedFormatted + ' @ ' + lastPlayed.getHours() + ':' + lastPlayed.getMinutes();

				state.all.push(character)
			}
		}
	}
})
