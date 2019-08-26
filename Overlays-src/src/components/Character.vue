<template>
	<div class="card character-card bg-white float-left">
        <img v-if="hasCharacterMugshot(character) !== false" class="card-img-top" :src="getCharacterMugshot(character)" />
        <img v-else class="card-img-top" src="../assets/defaultHeader.png" />
        <button type="button" class="btn btn-danger float-right mt-1 mr-2 btn-delete" @click="deleteCharacter(character)"><i class="fas fa-trash fa-fw" /></button>
		<h4 class="card-header">{{ character.Forename }} {{ character.Middlename }} {{ character.Surname }}</h4>
		<ul class="list-group list-group-flush">
			<li class="list-group-item"><i class="fas fa-transgender fa-fw mr-2" /> {{ character.GenderString }}</li>
			<li class="list-group-item"><i class="fas fa-calendar fa-fw mr-2" /> {{ character.DateOfBirthFormatted }}</li>
			<li class="list-group-item"><i class="fas fa-gamepad fa-fw mr-2" /> {{ character.LastPlayedFormatted }}</li>
		</ul>

		<div class="card-body">
			<button type="button" class="btn btn-block btn-lg px-5 btn-load"
                :class="{ 'btn-success': !confirmSelect, 'btn-outline-success': confirmSelect }"
                @click="selectCharacter(character.Id)"
            >
                {{ selectText }}
            </button>
		</div>
	</div>
</template>

<script>
	import Vuex from "vuex";
	export default {
		name: 'Character',
		props: {
			character: {
				type: Object,
				required: true
			}
		},
        data() {
		    return {
		        confirmSelect: false,
            }
        },
		computed: {
			...Vuex.mapGetters([
				'characters'
			]),
            selectText() {
			    return this.confirmSelect ? 'Confirm Select Character?' : 'Select Character';
            }
		},
		methods: {
            hasCharacterMugshot(character) {
		        return false;
            },
            getCharacterMugshot(character) {
		        return false;
            },
			async selectCharacter(id) {
                if (this.confirmSelect) {
                    // Play!
                    await this.$store.dispatch('selectCharacter', id);

                    nfive.send('select', id);
                    return;
                }

                this.confirmSelect = true;
                setTimeout(() => this.confirmSelect = false, 3000);
			},

			async deleteCharacter(character) {
                let title = `Delete Character ${character.Forename}${character.Middlename ? ' ' + character.Middlename : ''} ${character.Surname}?`;
                this.$swal({
                    title: title,
                    text: "You won't be able to revert this!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then(async (result) => {
                    if (result.value) {
                        await this.$store.dispatch('deleteCharacter', character.Id);
                        nfive.send('delete', character.Id);
                    }
                });
			},
		}
	}
</script>

<style scoped lang="scss">
	.card {
		width: 100%;
	}

    .card-img-top {
        display: block;
        max-height: 45vh;
        max-width: 100%;
        margin: 0 auto;
        height: auto !important;
        width: auto !important;
    }

    .btn-delete {
        opacity: 0;
        position: absolute;
        right: 0;
        padding: 0px 3px;
        font-size: 25px;
        transition: opacity 0.3s;
        -webkit-transition: opacity 0.3s;
    }

    .btn-delete:hover,
    .card-img-top:hover+.btn-delete {
        opacity: 1;
        transition: opacity 0.3s;
        -webkit-transition: opacity 0.3s;
    }
</style>
