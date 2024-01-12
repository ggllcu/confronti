<script lang="ts">
  import "../app.scss";
  import { page } from '$app/stores';
  import Navbar from '../components/Navbar.svelte';
</script>



<main class="container mb-6">
  <Navbar></Navbar>
<slot></slot>
</main>

<style>
  main {
  margin-left: auto;
  margin-right: auto;
  max-width: 960px;
  }
</style>
