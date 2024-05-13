<script lang="ts">
	import { createTabs, melt } from '@melt-ui/svelte';
	import { cubicInOut } from 'svelte/easing';
	import { crossfade } from 'svelte/transition';

	const {
		elements: { root, list, content, trigger },
		states: { value }
	} = createTabs({
		defaultValue: 'incoming'
	});

	const triggers = [
		{ id: 'incoming', title: 'In arrivo' },
		{ id: 'passed', title: 'Passati' }
	];

	const [send, receive] = crossfade({
		duration: 250,
		easing: cubicInOut
	});

	export let data;
</script>

<div use:melt={$root}>
	<div use:melt={$list} aria-label="Eventi Confronti" class="tabs is-centered">
		<ul>
			{#each triggers as triggerItem}
				<li
					use:melt={$trigger(triggerItem.id)}
					class={$value === triggerItem.id ? 'is-active' : ''}
				>
					<a>{triggerItem.title}</a>
					{#if $value === triggerItem.id}
						<div in:send={{ key: 'trigger' }} out:receive={{ key: 'trigger' }} />
					{/if}
				</li>
			{/each}
		</ul>
	</div>
	<div use:melt={$content('incoming')}>
		<div class="columns">
			{#each data.stories?.incoming ?? [] as story}
				<div class="column is-half">
					<div class="card">
						<div class="card-image">
							<figure class="image is-3by2">
								<img src={story.content.image?.filename} alt={story.content.image?.filename} />
							</figure>
						</div>
						<div class="card-content">
							<div class="content">
								<h2 class="title is-4">{story.content.title}</h2>
								<p class="subtitle is-5">{story.content.date}</p>
								<p class="subtitle is-5">{story.content.place}</p>
								{story.content.description}
							</div>
						</div>
						<footer class="card-footer">
							<a href={story.full_slug} class="card-footer-item"> Scopri di più </a>
							{#if story?.content.asset?.filename}
								<a href={story?.content.asset?.filename} class="card-footer-item" target="_blank">
									Scarica allegato
								</a>
							{/if}
						</footer>
					</div>
				</div>
			{/each}
		</div>
	</div>
	<div use:melt={$content('passed')}>
		<div class="columns">
			{#each data.stories?.passed ?? [] as story}
				<div class="column is-half">
					<div class="card">
						<div class="card-image">
							<figure class="image is-3by2">
								<img src={story.content.image?.filename} alt={story.content.image?.filename} />
							</figure>
						</div>
						<div class="card-content">
							<div class="content">
								<h2 class="title is-4">{story.content.title}</h2>
								<p class="subtitle is-5">{story.content.date}</p>
								<p class="subtitle is-5">{story.content.place}</p>
								{story.content.description}
							</div>
						</div>
						<footer class="card-footer">
							<a href={story.full_slug} class="card-footer-item"> Scopri di più </a>
							{#if story?.content.asset?.filename}
								<a href={story?.content.asset?.filename} class="card-footer-item" target="_blank">
									Scarica allegato
								</a>
							{/if}
						</footer>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
