<template>
	<div class="container-fluid w-50">
		<div class="card card-1">
			<form @submit.prevent="submitNew">
				<div class="card-heading"><h2 class="title text-center display-4 pt-5">New Character</h2></div>
				<div class="card-body">
					<div class="modal-body">
						<div class="form-group">
							<label for="forename">Forename<span class="text-danger">*</span></label>
							<input id="forename" v-model="newCharacter.forename" class="form-control" type="text" name="forename" placeholder="required" pattern="^[a-zA-Z- ]{2,}$" title="Full forename, must be at least 2 characters" autocomplete="given-name" required />
						</div>

						<div class="form-group">
							<label for="middlename">Middle Name(s)</label>
							<input id="middlename" v-model="newCharacter.middlename" class="form-control" type="text" name="middlename" placeholder="optional" pattern="^[a-zA-Z- ]+$" title="Full middle name(s), separated by a space" autocomplete="additional-name" />
						</div>

						<div class="form-group">
							<label for="surname">Surname<span class="text-danger">*</span></label>
							<input id="surname" v-model="newCharacter.surname" class="form-control" type="text" name="surname" placeholder="required" pattern="^[a-zA-Z- ]{2,}$" title="Full surname, must be at least 2 characters" autocomplete="family-name" required />
						</div>

						<div class="form-group">
							<label for="dateofbirth">Date of Birth</label>
							<datepicker id="dateofbirth" v-model="newCharacter.dateofbirth" input-class="form-control" name="dateofbirth" required />
						</div>

						<label>Gender</label>
						<div class="form-group">
							<div class="custom-control custom-radio custom-control-inline">
								<input id="genderMale" v-model.number="newCharacter.gender" class="custom-control-input" type="radio" name="gender" value="0" required />
								<label class="custom-control-label" for="genderMale">Male</label>
							</div>

							<div class="custom-control custom-radio custom-control-inline">
								<input id="genderFemale" v-model.number="newCharacter.gender" class="custom-control-input" type="radio" name="gender" value="1" required />
								<label class="custom-control-label" for="genderFemale">Female</label>
							</div>
						</div>
					</div>
				</div>
				<div class="card-footer">
					<button type="submit" class="btn btn-block text-uppercase btn-lg btn-success">Create Character</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
	import Vuex from "vuex";
	import datepicker from "vuejs-datepicker";

    export default {
		data() {
			return {
                newCharacter: {
                    forename: '',
                    middlename: '',
                    surname: '',
                    gender: 0,
                    dateofbirth: '1999-01-01'
                }
			}
		},
		components: {
            datepicker
		},
		methods: {
            async submitNew() {
                this.$emit('finishCreate');
                nfive.send('create', this.newCharacter);
            }
		}
    }
</script>

<style scoped>
	.form-group {
		/*padding: 0.1rem 0;*/
	}
</style>
