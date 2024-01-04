<script lang="ts"> 
  	import { renderRichText } from '@storyblok/svelte';
    import { Hr, Img, Timeline, TimelineItem} from 'flowbite-svelte';
    $: resolvedRichText = renderRichText(data.story?.content.description);

    export let data;
</script>
 
<div>
  <Img src="https://placehold.co/1200x800" alt="sample 1" />
  <h1 class="mb-2 text-6xl font-bold tracking-tight text-gray-900 dark:text-white">{data.story?.content.title}</h1>
  <div class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight rich-text">{@html resolvedRichText}</div>
  <p></p>
  <Hr classHr="my-8" />
  <Timeline>
    {#each data.story?.content.steps ?? [] as step}
    <TimelineItem title={step.title} date={step.date}>
      <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{step.description}</p>
    </TimelineItem>
    {/each}
  </Timeline>
</div>