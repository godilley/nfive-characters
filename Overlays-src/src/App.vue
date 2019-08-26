<template>
	<main>
		<div class="row">
			<div class="col-5">
                <h1 class="display-3 mb-5 text-white">Characters <span class="text-warning">({{ characterCount }}/{{ characterLimit }})</span></h1>
			</div>

			<div class="col-7 text-right">
				<button type="button" class="btn px-5 btn-lg btn-danger" @click="disconnectAction">{{ confirmDisconnect ? 'Are you sure?' : 'Disconnect' }}</button>
				<router-link v-if="showCancelButton" to="/list" class="ml-1 btn px-5 btn-lg btn-primary">Cancel</router-link>
				<router-link v-if="showCreateButton" to="/create" class="ml-1 btn px-5 btn-lg btn-success">Create New</router-link>
			</div>
		</div>

		<router-view />
	</main>
</template>

<script>
	import Vuex from "vuex";
	import router from "./router";
	export default {
		name: 'App',
		router,
        data() {
            return {
                confirmDisconnect: false,
            }
        },
        computed: {
            ...Vuex.mapGetters([
                'characters'
            ]),
            characterLimit() {
                return 10;
            },
            characterCount() {
                return this.characters.length;
            },
			isDebug() {
                return typeof nfive === "undefined";
			},
			showCancelButton() {
				let pathCheck = this.$route.path !== '/list';
				let characterCountCheck = this.$store.getters.characterCount > 0;

                return pathCheck && characterCountCheck;
			},
            showCreateButton() {
                return this.$route.path === '/list';
			},
        },
		created() {
            if (this.isDebug) {
                this.$router.push('create');
                let characters = [
                    {
                        Alive: true,
                        Armor: 0,
                        Created: "2019-08-26T14:18:15",
                        DateOfBirth: "1999-01-01T00:00:00",
                        DateOfBirthFormatted: "1 January 1999",
                        Deleted: null,
                        FacialTraitId: "39efe077-828a-c617-e85a-47d7b455fa6f",
                        Forename: "Test",
                        Gender: 0,
                        GenderString: "Male",
                        Health: 10000,
                        HeritageId: "39efe077-828a-b5df-531a-98ae4b2d467e",
                        Id: "39efe077-8287-a59d-6562-f24857c5a8d5",
                        LastPlayed: "2019-08-26T14:18:15",
                        Middlename: null,
                        Model: "1885233650",
                        Ssn: 290309005,
                        StyleId: "39efe077-828a-d6db-8d47-831e71249499",
                        Surname: "Test",
                        TraitId: "39efe077-828a-d763-ccc5-87d29fca7d9a",
                        UserId: "39efdc67-f9f7-a410-44a6-65ce16be3e6e",
                        WalkingStyle: "move_m@generic",
                    },
                    {
                        Alive: true,
                        Armor: 0,
                        Created: "2019-08-26T14:18:15",
                        DateOfBirth: "1999-01-01T00:00:00",
                        DateOfBirthFormatted: "1 January 1999",
                        Deleted: null,
                        FacialTraitId: "39efe077-828a-c617-e85a-47d7b455fa6f",
                        Forename: "Test",
                        Gender: 0,
                        GenderString: "Male",
                        Health: 10000,
                        HeritageId: "39efe077-828a-b5df-531a-98ae4b2d467e",
                        Id: "39efe077-8287-a59d-6562-f24857c5a8d5",
                        LastPlayed: "2019-08-26T14:18:15",
                        Middlename: null,
                        Model: "1885233650",
                        Ssn: 290309005,
                        StyleId: "39efe077-828a-d6db-8d47-831e71249499",
                        Surname: "Test",
                        TraitId: "39efe077-828a-d763-ccc5-87d29fca7d9a",
                        UserId: "39efdc67-f9f7-a410-44a6-65ce16be3e6e",
                        WalkingStyle: "move_m@generic",
                    },
                    {
                        Alive: true,
                        Armor: 0,
                        Created: "2019-08-26T14:18:15",
                        DateOfBirth: "1999-01-01T00:00:00",
                        DateOfBirthFormatted: "1 January 1999",
                        Deleted: null,
                        FacialTraitId: "39efe077-828a-c617-e85a-47d7b455fa6f",
                        Forename: "Test",
                        Gender: 0,
                        GenderString: "Male",
                        Health: 10000,
                        HeritageId: "39efe077-828a-b5df-531a-98ae4b2d467e",
                        Id: "39efe077-8287-a59d-6562-f24857c5a8d5",
                        LastPlayed: "2019-08-26T14:18:15",
                        Middlename: null,
                        Model: "1885233650",
                        Ssn: 290309005,
                        StyleId: "39efe077-828a-d6db-8d47-831e71249499",
                        Surname: "Test",
                        TraitId: "39efe077-828a-d763-ccc5-87d29fca7d9a",
                        UserId: "39efdc67-f9f7-a410-44a6-65ce16be3e6e",
                        WalkingStyle: "move_m@generic",
                    },
                    {
                        Alive: true,
                        Armor: 0,
                        Created: "2019-08-26T14:18:15",
                        DateOfBirth: "1999-01-01T00:00:00",
                        DateOfBirthFormatted: "1 January 1999",
                        Deleted: null,
                        FacialTraitId: "39efe077-828a-c617-e85a-47d7b455fa6f",
                        Forename: "Test",
                        Gender: 0,
                        GenderString: "Male",
                        Health: 10000,
                        HeritageId: "39efe077-828a-b5df-531a-98ae4b2d467e",
                        Id: "39efe077-8287-a59d-6562-f24857c5a8d5",
                        LastPlayed: "2019-08-26T14:18:15",
                        Middlename: null,
                        Model: "1885233650",
                        Ssn: 290309005,
                        StyleId: "39efe077-828a-d6db-8d47-831e71249499",
                        Surname: "Test",
                        TraitId: "39efe077-828a-d763-ccc5-87d29fca7d9a",
                        UserId: "39efdc67-f9f7-a410-44a6-65ce16be3e6e",
                        WalkingStyle: "move_m@generic",
                    },
                    {
                        Alive: true,
                        Armor: 0,
                        Created: "2019-08-26T14:18:15",
                        DateOfBirth: "1999-01-01T00:00:00",
                        DateOfBirthFormatted: "1 January 1999",
                        Deleted: null,
                        FacialTraitId: "39efe077-828a-c617-e85a-47d7b455fa6f",
                        Forename: "Test",
                        Gender: 0,
                        GenderString: "Male",
                        Health: 10000,
                        HeritageId: "39efe077-828a-b5df-531a-98ae4b2d467e",
                        Id: "39efe077-8287-a59d-6562-f24857c5a8d5",
                        LastPlayed: "2019-08-26T14:18:15",
                        Middlename: null,
                        Model: "1885233650",
                        Ssn: 290309005,
                        StyleId: "39efe077-828a-d6db-8d47-831e71249499",
                        Surname: "Test",
                        TraitId: "39efe077-828a-d763-ccc5-87d29fca7d9a",
                        UserId: "39efdc67-f9f7-a410-44a6-65ce16be3e6e",
                        WalkingStyle: "move_m@generic",
                    },
                    {
                        Alive: true,
                        Armor: 0,
                        Created: "2019-08-26T14:18:15",
                        DateOfBirth: "1999-01-01T00:00:00",
                        DateOfBirthFormatted: "1 January 1999",
                        Deleted: null,
                        FacialTraitId: "39efe077-828a-c617-e85a-47d7b455fa6f",
                        Forename: "Test",
                        Gender: 0,
                        GenderString: "Male",
                        Health: 10000,
                        HeritageId: "39efe077-828a-b5df-531a-98ae4b2d467e",
                        Id: "39efe077-8287-a59d-6562-f24857c5a8d5",
                        LastPlayed: "2019-08-26T14:18:15",
                        Middlename: null,
                        Model: "1885233650",
                        Ssn: 290309005,
                        StyleId: "39efe077-828a-d6db-8d47-831e71249499",
                        Surname: "Test",
                        TraitId: "39efe077-828a-d763-ccc5-87d29fca7d9a",
                        UserId: "39efdc67-f9f7-a410-44a6-65ce16be3e6e",
                        WalkingStyle: "move_m@generic",
                    },
                ];
                this.$store.dispatch('setCharacters', characters);
            }

            nfive.on('load', async (characters) => {
                await this.$store.dispatch('setCharacters', characters);

                console.log('Received Characters', characters);

                if (characters.length <= 0) {
                    await this.$router.push('create');
                } else {
                    this.$router.push('list');
                }

                nfive.show();
            });

            nfive.send('load')
		},
		methods: {
            disconnectAction() {
                if (this.confirmDisconnect) {
                    // dc them
                    this.disconnect();
                    return;
                }

                this.confirmDisconnect = true;
                setTimeout(() => this.confirmDisconnect = false, 3000);
            },
            async disconnect() {
                nfive.send('disconnect')
            },
		}
	}
</script>
