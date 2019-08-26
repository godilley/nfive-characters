<template>
	<section class="container-fluid mt-4">
		<div class="row justify-content-center">
			<div v-for="character in characters" :key="character.Id" class="col-4 mb-3">
				<character :character="character" />
			</div>
			<div class="col-4 mb-3">
				<div class="card border-0 bg-transparent text-center pt-5">
					<div class="card-body">
						<router-link to="/create" class="text-success" href="#">
						<span class="fa-stack fa-7x fa-fw">
							<i class="fas fa-stack-1x fa-square text-white" />
							<i class="fas fa-stack-1x fa-plus-square" />
						</span>
						</router-link>
					</div>
				</div>
			</div>
		</div>

	</section>
</template>

<script>
    import Vuex from "vuex"
	import Character from "./Character";

    export default {
        name: "CharactersList",
		components: {
            Character,
		},

        computed: {
            ...Vuex.mapGetters([
                'characters'
            ]),
            actionCreate() {
                return this.action === ACTION_CREATE;
            },
            actionList() {
                return this.action === ACTION_LIST;
            },
            characterCount() {
                return this.characters.length;
            }
        },

        mounted() {
        },

        methods: {
            async selectCharacter(id) {
                await this.$store.dispatch('selectCharacter', id);

                nfive.send('select', id)
            },

            async deleteCharacter(id) {
                await this.$store.dispatch('deleteCharacter', id);

                nfive.send('delete', id)
            },
        }
    }
</script>

<style scoped>
</style>
