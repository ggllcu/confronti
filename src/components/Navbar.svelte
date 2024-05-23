<script>
	let isActive = false;

	function toggleMenu() {
		isActive = !isActive;
	}

	function closeMenu() {
		isActive = false;
	}
</script>

<nav class="navbar is-primary has-text-white is-fixed-top has-shadow py-3" aria-label="main navigation">
	<div class="container is-max-desktop">
		<div class="navbar-brand">
			<a class="navbar-item" href="/">
				<img
					src="https://a.storyblok.com/f/266884/430x61/5a814f3e3a/logo_confronti.png"
					width="215"
					height="30"
					alt="Logo Confronti 2024"
				/>
			</a>

			<button
				class="navbar-burger {isActive ? 'is-active' : ''} has-text-white"
				aria-label="menu"
				aria-expanded="false"
				data-target="navbar"
				on:click={toggleMenu}
			>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
			</button>
		</div>

		<div id="navbar" class="navbar-menu {isActive ? 'is-active' : ''}">
			<div class="navbar-start">
				<a on:click={closeMenu} class="navbar-item has-text-white" href="/"> Home </a>

				<!-- <a on:click={closeMenu} class="navbar-item has-text-white" href="/chi-siamo">
        Chi siamo
      </a> -->

				<a on:click={closeMenu} class="navbar-item has-text-white" href="/programma"> Programma </a>

				<a on:click={closeMenu} class="navbar-item has-text-white" href="/candidati"> La lista </a>

				<a on:click={closeMenu} class="navbar-item has-text-white" href="/eventi"> Eventi </a>

				<!-- <a on:click={closeMenu} class="navbar-item has-text-white" href="/notizie">
        Notizie
      </a> -->
			</div>
			<div class="navbar-end">
        <a on:click={closeMenu} class="navbar-item has-text-white" href="https://www.facebook.com/confrontilab"> <span class="icon">
          <svg class="svg-icon" viewBox="0 0 20 20">
            <path fill="none" d="M11.344,5.71c0-0.73,0.074-1.122,1.199-1.122h1.502V1.871h-2.404c-2.886,0-3.903,1.36-3.903,3.646v1.765h-1.8V10h1.8v8.128h3.601V10h2.403l0.32-2.718h-2.724L11.344,5.71z"></path>
          </svg>
        </span> </a>
        <a on:click={closeMenu} class="navbar-item has-text-white" href="https://www.instagram.com/confronti.fumane/"> <span class="icon">
          <i class="fas fa-home"><svg class="svg-icon" viewBox="0 0 20 20">
            <path fill="none" d="M14.52,2.469H5.482c-1.664,0-3.013,1.349-3.013,3.013v9.038c0,1.662,1.349,3.012,3.013,3.012h9.038c1.662,0,3.012-1.35,3.012-3.012V5.482C17.531,3.818,16.182,2.469,14.52,2.469 M13.012,4.729h2.26v2.259h-2.26V4.729z M10,6.988c1.664,0,3.012,1.349,3.012,3.012c0,1.664-1.348,3.013-3.012,3.013c-1.664,0-3.012-1.349-3.012-3.013C6.988,8.336,8.336,6.988,10,6.988 M16.025,14.52c0,0.831-0.676,1.506-1.506,1.506H5.482c-0.831,0-1.507-0.675-1.507-1.506V9.247h1.583C5.516,9.494,5.482,9.743,5.482,10c0,2.497,2.023,4.52,4.518,4.52c2.494,0,4.52-2.022,4.52-4.52c0-0.257-0.035-0.506-0.076-0.753h1.582V14.52z"></path>
          </svg></i>
        </span> </a>
        
        
      </div>
		</div>
	</div>
</nav>
