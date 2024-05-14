<script lang="ts">
	import { renderRichText } from '@storyblok/svelte';

	function createSlug(title) {
		return title
			.toLowerCase()
			.replace(/\s+/g, '-')
			.replace(/[^a-z0-9-]/g, '');
	}
	export let data;
</script>

<svelte:head>
	<title>Confronti 2024</title>
	<meta
		name="description"
		content="Il sito del gruppo di Fumane Confronti per le elezioni comunali 2024"
	/>
</svelte:head>

<div>
	<section id="title" class="section has-text-centered">
		<h1 class="title is-1">{data.home?.content.title}</h1>
		<h2 class="subtitle is-2">{data.home?.content.subtitle}</h2>
	</section>

	<section id="quote" class="section content is-medium has-background-primary">
		<!-- <section id="hero" class="hero is-primary is-medium has-background-primary"> -->
		<blockquote>
			<p class="subtitle is-4 is-italic">
				La vera forza di una società risiede nella sua capacità di inclusione e solidarietà.
				Dobbiamo lavorare insieme per costruire un futuro migliore per ogni cittadino, senza
				lasciare nessuno indietro, specialmente i piu' deboli ed emarginati.
			</p>
			<p class="subtitle has-text-right is-5">Tina Anselmi</p>
		</blockquote>
	</section>
	<section id="home" class="section content">
		<figure class="image is-3by2 block">
			<img src={data.home?.content.image?.filename} alt={data.program?.content.image?.alt} />
		</figure>
		<p>
			{@html renderRichText(data.home?.content.description)}
		</p>
	</section>

	<section id="programma" class="section content">
		<h2 class="title is-2">{data.program?.content.title}</h2>
		<figure class="image is-2by1 block">
			<img
				src={`${data.program?.content.image?.filename}/m/1104x552/smart`}
				alt={data.program?.content.image?.alt}
			/>
		</figure>
		<p>
			{@html renderRichText(data.program?.content.description)}
		</p>
		<div class="buttons">
			{#each data.program?.content.sections ?? [] as section, i}
				<a href="/programma#{createSlug(section.title)}">
					<button class="button is-primary is-outlined is-fullwidth">{section.title}</button>
				</a>
			{/each}
		</div>
	</section>

	<section id="candidati" class="section content">
		<h2 class="title is-2">{data.candidates?.content.title}</h2>
		<figure class="image is-2by1 block">
			<img
				src={`${data.candidates?.content.image?.filename}/m/1104x552/smart`}
				alt={data.candidates?.content.image?.alt}
			/>
		</figure>
		<p>
			{@html renderRichText(data.candidates?.content.description)}
		</p>
		<a href="/{data.candidates?.content.link}">
			<button class="button is-primary is-fullwidth">{data.candidates?.content.button}</button>
		</a>
	</section>

	<section id="eventi" class="section content">
		<h2 class="title is-2">{data.events?.content.title}</h2>
		<figure class="image is-2by1 block">
			<img
				src={`${data.events?.content.image?.filename}/m/1104x552/smart`}
				alt={data.events?.content.image?.alt}
			/>
		</figure>
		<p>
			{@html renderRichText(data.events?.content.description)}
		</p>
		<a href="/{data.events?.content.link}">
			<button class="button is-primary is-fullwidth">{data.events?.content.button}</button>
		</a>
	</section>
</div>
