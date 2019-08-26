<template>
	<div class="card character-card bg-white float-left m-3">
		<h4 class="card-header">{{ character.Forename }} {{ character.Middlename }} {{ character.Surname }}</h4>

		<ul class="list-group list-group-flush">
			<li class="list-group-item"><i class="fas fa-transgender fa-fw mr-2" /> {{ character.GenderString }}</li>
			<li class="list-group-item"><i class="fas fa-calendar fa-fw mr-2" /> {{ character.DateOfBirthFormatted }}</li>
		</ul>

		<div class="card-body">
			<button type="button" class="btn btn-success btn-lg px-5 btn-load" @click="selectCharacter(character.Id)">Play</button>
			<button :data-target="'.delete-modal.id-' + character.Id" type="button" class="btn btn-danger float-right mt-1 mr-2 btn-delete" data-toggle="modal"><i class="fas fa-trash fa-fw" /></button>
		</div>

		<div ref="deleteModal" :class="['modal', 'fade', 'delete-modal', 'id-' + character.Id]" data-backdrop="static" tabindex="-1" role="dialog" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h3 class="modal-title">Delete Character</h3>

						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>

					<div class="modal-body">
						<p>Are you sure you want to delete <b>{{ character.Forename }} {{ character.Middlename }} {{ character.Surname }}</b>? This cannot easily be undone.</p>
					</div>

					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
						<button type="submit" class="btn btn-danger" @click="deleteCharacter(character.Id)">Delete Character</button>
					</div>
				</div>
			</div>
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
		computed: {
			...Vuex.mapGetters([
				'characters'
			]),
		},

		methods: {
			async selectCharacter(id) {
				await this.$store.dispatch('selectCharacter', id);

				nfive.send('select', id);
			},

			async deleteCharacter(id) {
				await this.$store.dispatch('deleteCharacter', id);

				nfive.send('delete', id);
			},
		}
	}
</script>

<style scoped lang="scss">
	.card {
		width: 100%;
	}
</style>
