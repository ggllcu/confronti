<script lang="ts">
  	import { renderRichText } from '@storyblok/svelte';
    import { AccordionItem, Accordion, Hr } from 'flowbite-svelte';

    export let data;
</script>

<div>
    <h1 class="mb-2 text-6xl font-bold tracking-tight text-gray-900 dark:text-white">{data.story?.content.title}</h1>
    <div class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">{@html renderRichText(data.story?.content.description)}</div>
    <Hr classHr="my-8" />

    <Accordion>
    {#each data.story?.content.sections ?? [] as section}
        <AccordionItem>
          <span slot="header">{section.title}</span>
          <p class="mb-2 text-gray-500 dark:text-gray-400">{@html renderRichText(section.content)}</p>
        </AccordionItem>
    {/each}
    </Accordion>
  </div>