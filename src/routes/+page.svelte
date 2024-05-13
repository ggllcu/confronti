<script lang="ts">
	function createSlug(title) {
		return title
			.toLowerCase()
			.replace(/\s+/g, '-')
			.replace(/[^a-z0-9-]/g, '');
	}
	export let data;
</script>

<svelte:head>
	<title>Confronti 2024</title>
	<meta
		name="description"
		content="Il sito del gruppo di Fumane Confronti per le elezioni comunali 2024"
	/>
</svelte:head>

<main class="content">
	<section id="hero" class="hero is-link is-medium has-background-primary">
		<div class="hero-body">
			<p class="title">
				La vera forza di una società risiede nella sua capacità di inclusione e solidarietà.
				Dobbiamo lavorare insieme per costruire un futuro migliore per ogni cittadino, senza
				lasciare nessuno indietro, specialmente i piu' deboli ed emarginati.
			</p>
			<p class="subtitle">Tina Anselmi</p>
		</div>
	</section>
	<section id="title" class="section">
		<h1 class="title is-1">Confronti - Lista civica Fumane</h1>
		<h2 class="subtitle is-2">Elezioni amministrative 8-9 Giugno 2024</h2>
		<figure class="image is-3by2 block">
			<img
				src="https://a.storyblok.com/f/266884/1104x736/763158d47c/copertina_crop.jpg"
			/>
		</figure>
		<p>
			In questi mesi abbiamo trascorso insieme molte giornate intense di confronti, per capire le
			esigenze, i desideri, i problemi del Comune di Fumane, raccogliendo idee ed elaborando
			progetti, per rivitalizzare il nostro amato territorio, capoluogo e frazioni.
		</p>

		<p>
			È nata così l’idea di chiamare la nostra lista civica Confronti, un gruppo di persone animate
			dall’interesse per il proprio Comune, lontane dalla classica logica di opposizione politica,
			che vogliono concentrarsi per una nuova idea di gestione amministrativa, tenendo conto delle
			esigenze dei cittadini e cittadine.
		</p>
	</section>

	<section id="programma" class="section">
		<h2 class="title is-2">Programma</h2>
		<figure class="image is-2by1 block">
			<img
				src={`${data.program.content.image?.filename}/m/1104x552/smart`}
				alt={data.story?.content.image?.alt}
			/>
		</figure>
		<p>
			Abbiamo lavorato intensamente sui temi più attuali - la sostenibilità ambientale, l'educazione
			civica e sociale, il valore del tempo e delle risorse umane, dei rapporti sociali e degli
			spazi che ci circondano - per trovare e valorizzare il "genius loci", l'anima di Fumane.
			Potete leggere il nostro programma, realizzato con il contributo di tante persone.
		</p>
		<div class="buttons">
			{#each data.program?.content.sections ?? [] as section, i}
				<a href="/programma#{createSlug(section.title)}">
					<button class="button is-primary is-outlined is-fullwidth">{section.title}</button>
				</a>
			{/each}
		</div>
	</section>

	<section id="candidati" class="section">
		<h2 class="title is-2">Candidati</h2>
		<figure class="image is-2by1 block">
			<img
				src={`${data.candidates.content.image?.filename}/m/1104x552/smart`}
			/>
		</figure>
		<p>Questa è la squadra che si è formata in vari incontri e contatti.</p>

		<p>
			Sono orgogliosa di questo gruppo costituito da persone sia giovani che mature, ma tutte ricche
			di entusiasmo e competenze e rappresentative del territorio.
		</p>
		<a href="/candidati">
			<button class="button is-primary is-fullwidth">Scopri la nostra lista</button>
		</a>
	</section>
</main>
