<script lang="ts">
	import { renderRichText } from '@storyblok/svelte';

	export let data;
</script>

<figure class="image is-2by1 block">
	<img
		src={`${data.candidates?.content.image?.filename}/m/1104x552/smart`}
		alt={data.candidates?.content.image?.alt}
	/>
</figure>
<section class="section content">
	<h1 class="title is-1">{data.candidates?.content.title}</h1>
	{@html renderRichText(data.candidates?.content.description)}
</section>

<div class="columns is-multiline">
	{#each data.stories ?? [] as story}
		<div class="column {story.content.mayor? "is-full" : "is-half"}">
			<div class="card">
				<div class="card-image">
					<figure class="image is-3by2">
						<img src={`${story.content.image?.filename}/m/1104x736/smart`} alt={story.content.image?.filename} />
					</figure>
				</div>
				<div class="card-content">
					<div class="content">
						<h2 class="title is-4">{story.content.title}</h2>
						<p>{story.content.intro}</p>
					</div>
				</div>
				<footer class="card-footer">
					<a href={story.full_slug} class="card-footer-item">Scopri di più</a>
				</footer>
			</div>
		</div>
	{/each}
</div>
