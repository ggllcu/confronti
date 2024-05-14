<script lang="ts">
	import { createAccordion, melt } from '@melt-ui/svelte';
	import { slide } from 'svelte/transition';
	import { renderRichText } from '@storyblok/svelte';

	const {
		elements: { content, item, trigger, root },
		helpers: { isSelected }
	} = createAccordion();

	function createSlug(title) {
		return title
			.toLowerCase()
			.replace(/\s+/g, '-')
			.replace(/[^a-z0-9-]/g, '');
	}

	export let data;
</script>

<figure class="image is-2by1 block">
	<img
		src={`${data.story?.content.image?.filename}/m/1104x552/smart`}
		alt={data.story?.content.image?.alt}
	/>
</figure>
<section class="content">
	<h1 class="title is-1">{data.story?.content.title}</h1>
	{@html renderRichText(data.story?.content.description)}
</section>

<hr />

<section class="content">
	<div {...$root}>
		{#each data.story?.content.sections ?? [] as section, i}
			{@const id = { value: section._uid }}
			<div id={createSlug(section.title)} class="block" use:melt={$item(id)}>
				<div class="card">
					<header class="card-header has-background-primary" use:melt={$trigger(id)}>
						<p class="card-header-title has-text-white">
							{section.title}
						</p>
					</header>
					{#if $isSelected(section._uid)}
						<div use:melt={$content(id)} transition:slide>
							<div class="card-content">
								<div class="content">
									{data.story?.content.description}
								</div>
							</div>
						</div>
					{/if}
				</div>
			</div>
		{/each}
	</div>
</section>
