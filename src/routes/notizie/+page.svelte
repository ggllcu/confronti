<script lang="ts">
    export let data;
</script>
<div class="columns is-multiline">
	{#each data.stories ?? [] as story}
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
						<p>{story.content.intro}</p>
					</div>
				</div>
				<footer class="card-footer">
					<a href={story.full_slug} class="card-footer-item">Scopri di più</a>
				</footer>
			</div>
		</div>
	{/each}
</div>
