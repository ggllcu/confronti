<script lang="ts">
	import { renderRichText } from '@storyblok/svelte';
    import { Button, Card } from 'flowbite-svelte';
    import { ArrowDownOutline } from 'flowbite-svelte-icons';

	export let data;
</script>

<article>
	<Card img={data.story?.content.image?.filename} class="mb-4" size="xl">
        <h1 class="mb-2 text-6xl font-bold tracking-tight text-gray-900 dark:text-white">{data.story?.content.title}</h1>
        <div class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight rich-text">{@html renderRichText(data.story?.content.description)}</div>
        
        {#if data.story?.content.asset?.filename}
        <Button href={data.story?.content.asset?.filename} target="_blank">
            Scarica allegato <ArrowDownOutline class="w-3.5 h-3.5 ms-2 text-white" />
          </Button>
        {/if}

    </Card>
</article>
