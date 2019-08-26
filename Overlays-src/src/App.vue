<template>
	<main>
		<div class="row">
			<div class="col-8">
				<h1 class="display-3 mb-5 text-white">Characters</h1>
			</div>

			<div class="col-4 text-right">
				<button type="button" class="btn px-5 btn-lg btn-danger" @click="disconnectAction">{{ confirmDisconnect ? 'Are you sure?' : 'Disconnect' }}</button>
				<router-link v-if="showCancelButton" to="/list" class="ml-1 btn px-5 btn-lg btn-primary">Cancel</router-link>
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
			isDebug() {
                return typeof nfive === "undefined";
			},
			showCancelButton() {
				let pathCheck = this.$route.path !== '/list';
				let characterCountCheck = this.$store.getters.characterCount > 0;

                return pathCheck && characterCountCheck;
			}
        },
		created() {
            if (this.isDebug) {
                this.$router.push('create');
            } else {
                this.$router.push('list');
            }

            nfive.on('load', async (characters) => {
                await this.$store.dispatch('setCharacters', characters);

                if (characters.length <= 0) {
                    await this.$router.push('create');
                }

                nfive.show()
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
