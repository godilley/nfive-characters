<template>
	<div class="characters-wrapper">
	</div>
</template>

<script>

export default {
	name: 'Characters',
}
</script>

<style>
	html,
	body {
		width: 100vw;
		height: 100vh;
		margin: 0;
		overflow: hidden;
		font-size: 1.5vh;
		user-select: none;
		outline: none;
		background: url('../assets/background.jpg') center;
		background-size: cover;
	}

	body > main {
		width: 80vw;
		height: 90vh;
		margin: 5vh auto;
		overflow: hidden;
	}
</style>

<style scoped>
	h1 {
		margin-left: 0.15vh;
		font-family: pricedown, sans-serif;
		-webkit-text-stroke: 0.15vh #000;
		color: #fff;
		text-shadow:
			0.4vh 0.4vh 0 #000,
			-0.15vh -0.15vh 0 #000,
			0.15vh -0.15vh 0 #000,
			-0.15vh 0.15vh 0 #000,
			0.15vh 0.15vh 0 #000;
		letter-spacing: -0.3vh;
	}

	::-webkit-scrollbar {
		width: 1vw;
		height: 1vw;
	}

	::-webkit-scrollbar-thumb {
		background-color: #000;
		border-radius: 0.5rem;
	}
</style>
