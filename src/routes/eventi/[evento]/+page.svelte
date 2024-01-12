<script lang="ts">
	import { renderRichText } from '@storyblok/svelte';

	export let data;
</script>

<article>
	<figure class="image is-2by1 block">
		<img src={data.story?.content.image?.filename} alt={data.story?.content.image?.alt} />
	</figure>

	<section class="content">
		<h1 class="title is-2">{data.story?.content.title}</h1>
		<blockquote>
      {data.story?.content.date} <br/>
      {data.story?.content.place}
    </blockquote>

		<p>{@html renderRichText(data.story?.content.description)}</p>
	</section>

  {#if data.story?.content.asset?.filename}
  <a href={data.story?.content.asset?.filename} class="button is-primary" target="_blank">
      Scarica allegato
  </a>
  {/if}
</article>