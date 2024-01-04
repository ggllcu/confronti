<script lang="ts">
	import { renderRichText } from '@storyblok/svelte';
    import { Card, Button, Tabs, TabItem } from 'flowbite-svelte';
    import { ArrowRightOutline } from 'flowbite-svelte-icons';

    export let data;
</script>

<div>  
  <Tabs style="underline">
    <TabItem open title="In arrivo">
        {#each data.stories?.incoming ?? [] as story}
        <Card img={story.content.image?.filename} horizontal class="mb-4 horizontal-card">
            <h1 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{story.content.title}</h1>
            <h5 class="mb-2 text-l font-bold tracking-tight text-gray-900 dark:text-white">{story.content.date}</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">{@html renderRichText(story.content.description)}</p>
            <Button href={story.full_slug}>
                Scopri di piu' <ArrowRightOutline class="w-3.5 h-3.5 ms-2 text-white" />
              </Button>
          </Card>
        {/each}
    </TabItem>
    <TabItem title="Passati">
        {#each data.stories?.passed ?? [] as story}
        <Card img={story.content.image?.filename} horizontal class="mb-4 horizontal-card">
          <h1 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{story.content.title}</h1>
          <h5 class="mb-2 text-l font-bold tracking-tight text-gray-900 dark:text-white">{story.content.date}</h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">{@html renderRichText(story.content.description)}</p>
          <Button href={story.full_slug}>
              Scopri di piu' <ArrowRightOutline class="w-3.5 h-3.5 ms-2 text-white" />
            </Button>
        </Card>
        {/each}
    </TabItem>
  </Tabs>
</div>
