<script lang="ts">
	import { createAccordion, melt } from '@melt-ui/svelte';
	import { slide } from 'svelte/transition';
	import { renderRichText } from '@storyblok/svelte';

  const {
    elements: { content, item, trigger, root },
    helpers: { isSelected },
  } = createAccordion();

	export let data;
</script>

<div>
	<h1 class="title is-2">{data.story?.content.title}</h1>
	<div class="content">{@html renderRichText(data.story?.content.description)}</div>

	<hr />

  <div {...$root}>
		{#each data.story?.content.sections ?? [] as section, i}
    {@const props = { value: section._uid }}
    <div
      class="block"
      use:melt={$item(props)}
    >
      <div class="card">
        <header class="card-header has-background-primary" use:melt={$trigger(props)}>
          <p class="card-header-title">
            {section.title}
          </p>
        </header>
        {#if $isSelected(section._uid)}
          <div
            use:melt={$content(props)}
            transition:slide
          >
            <div class="card-content">
              <div class="content">
                {@html renderRichText(data.story?.content.description)}
              </div>
            </div>
          </div>
        {/if}
      </div>
    </div>
    {/each}
  </div>
</div>
