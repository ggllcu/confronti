<script lang="ts">
	import { renderRichText } from '@storyblok/svelte';
	$: resolvedRichText = renderRichText(data.story?.content.description);

	export let data;
</script>

<figure class="image is-2by1 block">
	<img src={data.story?.content.image?.filename} alt={data.story?.content.image?.alt} />
</figure>

<section class="section content">
	<h1 class="title is-1">{data.story?.content.title}</h1>
	<p>{@html resolvedRichText}</p>

	<hr />

	<div class="timeline is-centered">
		<header class="timeline-header">
			<span class="tag is-medium is-primary">Iniziamo</span>
		</header>
		{#each data.story?.content.steps ?? [] as step}
			<div class="timeline-item">
				<div class="timeline-marker is-primary"></div>
				<div class="timeline-content">
					<h2 class="title is-4">{step.title}</h2>
					<p class="heading">{step.date}</p>
					<p>{step.description}</p>
				</div>
			</div>
		{/each}
	</div>
</section>
