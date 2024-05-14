<script lang="ts">
	import { renderRichText } from '@storyblok/svelte';

	export let data;
</script>

<article>
	<figure class="image is-2by1 block">
		<img src={data.story?.content.image?.filename} alt={data.story?.content.image?.alt} />
	</figure>

	<section class="section content">
		<h1 class="title is-2">{data.story?.content.title}</h1>
		<blockquote>{data.story?.content.intro}</blockquote>

		<p>{@html renderRichText(data.story?.content.description)}</p>
	</section>
</article>
