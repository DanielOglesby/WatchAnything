<script lang="ts">
	import Header from '../../components/Header.svelte';
	import Footer from '../../components/Footer.svelte';
</script>

<section class="about-page">
	<h1>Welcome to WatchAnything!</h1>
	<p>
		WatchAnything is a web application built using Svelte/SvelteKit, TailwindCSS, Vite, and Vercel
	</p>
</section>

<style>
	.about-page {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		background: linear-gradient(250deg, rgb(50, 50, 255), rgb(150, 150, 250));
	}

	:global(p, h1, h2, div) {
		font-family: 'Courier New', Courier, monospace;
		color: white;
		font-size: 20px;
	}

	h1 {
		font-size: 50px;
	}
</style>
