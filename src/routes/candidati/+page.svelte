<script lang="ts">
    import { Card, Button } from 'flowbite-svelte';
    import { ArrowRightOutline } from 'flowbite-svelte-icons';

    export let data;
</script>
 
<div class="list-container">
    {#each data.stories as story}
    <Card img={story.content.image.filename} class="mb-4 card" size="md">
        <h1 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{story.content.title}</h1>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">{story.content.intro}</p>
        <Button href={story.full_slug}>
          Scopri di piu' <ArrowRightOutline class="w-3.5 h-3.5 ms-2 text-white" />
        </Button>
      </Card>
    {/each}
</div>

<style lang="scss">
  .list-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 20px;

    div {
        flex: 1;
        margin: 20px;
        border-radius: 100px;
    }
}

@media (max-width: 768px) {
    .list-container {
        flex-direction: column;

        div {
            margin-left: 0;
            margin-right: 0;
            flex: none;
            width: 100%;
        }
    }
}
</style>