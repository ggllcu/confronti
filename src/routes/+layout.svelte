<script lang="ts">
	import '../app.scss';
	import { page } from '$app/stores';
	import Navbar from '../components/Navbar.svelte';
</script>

<Navbar></Navbar>
<main class="container is-max-desktop has-background-white p-0">
		<slot />
</main>
<footer class="footer">
	<div class="content has-text-centered">
		<p>
			<strong>Confronti 2024</strong>.
		</p>
	</div>
</footer>

<style>
  main {
    padding: 1.5rem;
  }
</style>
