<script lang="ts">
    import { Card, Button, Toggle } from 'flowbite-svelte';
    import { ArrowRightOutline } from 'flowbite-svelte-icons';
    let vCard = false;

    export let data;
</script>
 
<div class="list-container">
    {#each data.stories as story}
    <Card img={story.content.image.filename} reverse={vCard} class="mb-4">
        <h1 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{story.content.title}</h1>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">{story.content.intro}</p>
        <Button href={story.full_slug}>
          Scopri di piu' <ArrowRightOutline class="w-3.5 h-3.5 ms-2 text-white" />
        </Button>
      </Card>
    {/each}
</div>