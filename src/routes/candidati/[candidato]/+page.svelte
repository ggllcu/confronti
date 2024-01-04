<script lang="ts">
	import { renderRichText } from '@storyblok/svelte';
    import { Card, Blockquote } from 'flowbite-svelte';

	export let data;
</script>

<article>
	<Card img={data.story?.content.image?.filename} class="mb-4" size="xl">
        <h1 class="mb-2 text-6xl font-bold tracking-tight text-gray-900 dark:text-white">{data.story?.content.title}</h1>
        <Blockquote bg italic={false} class="p-4 my-4">{data.story?.content.intro}</Blockquote>
        <div class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight rich-text">{@html renderRichText(data.story?.content.description)}</div>
    </Card>
</article>
