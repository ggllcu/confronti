<script lang="ts"> 
  	import { renderRichText } from '@storyblok/svelte';
    $: resolvedRichText = renderRichText(data.story?.content.description);

    export let data;
</script>
 
<div>
  <h1 class="mb-2 text-6xl font-bold tracking-tight text-gray-900 dark:text-white">{data.story?.content.title}</h1>
  <div class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight rich-text">{@html resolvedRichText}</div>
  <p></p>

  <hr>

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
</div>