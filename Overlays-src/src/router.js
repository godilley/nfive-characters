import VueRouter from "vue-router"
import Characters from "./components/Characters";
import CharactersList from "./components/CharactersList";
import CreateCharacter from "./components/CreateCharacter";

export default new VueRouter({
	routes: [
		{
			path: '/',
			component: Characters
		},
		{
			path: '/list',
			component: CharactersList
		},
		{
			path: '/create',
			component: CreateCharacter
		},
	]
});
