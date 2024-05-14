<script lang="ts">
	// import { renderRichText } from '@storyblok/svelte';

	export let data;
</script>

<article>
	<section class="intro block">
		<div class="container">
			<div class="columns">
				<div class="column is-two-thirds">
					<div class="content">
                        <h1 class="title is-2">{data.story?.content.title}</h1>
						<blockquote>{data.story?.content.intro}</blockquote>
					</div>
				</div>
                <div class="column is-one-third">
					<figure class="image is-square">
						<img
							class="is-rounded"
							src={`${data.story.content.image?.filename}/m/352x352/smart`}
							alt={data.story?.content.image?.alt}
						/>
					</figure>
				</div>
			</div>
		</div>
	</section>
	<section class="section content">
		<div class="container">
			<p>{data.story?.content.description}</p>
		</div>
	</section>
</article>
