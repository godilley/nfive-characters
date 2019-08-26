<template>
	<section class="container-fluid mt-2">
        <div class="row">
            <div class="col-12">
                <carousel ref="carousel" :autoplay="false" :items="3">
                    <div v-for="character in characters" :key="character.Id" class="px-2 mb-3">
                        <character :character="character" />
                    </div>
                </carousel>
            </div>
        </div>
	</section>
</template>

<script>
    import Vuex from "vuex"
	import Character from "./Character";
    import Carousel from 'vue-owl-carousel'

    export default {
        name: "CharactersList",
		components: {
            Character,
            Carousel,
		},
        computed: {
            ...Vuex.mapGetters([
                'characters'
            ]),
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

<style>
    .owl-nav {
        display: none;
    }

    .owl-theme .owl-dots .owl-dot span {
        width: 15px;
        height: 15px;
    }

    .owl-dots {
        margin-top: 20px;
    }

    .owl-stage {
        margin: 0 auto;
    }
</style>
