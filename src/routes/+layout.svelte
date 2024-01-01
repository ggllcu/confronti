<script lang="ts">
	// import { HomeOutline, NewspapperOutline, UsersGroupOutline, UsersOutline, RectangleListOutline } from 'flowbite-svelte-icons';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, DarkMode } from 'flowbite-svelte';

	import { page } from '$app/stores';
	let btnClass = 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-xl p-2';
	$: activeUrl = $page.url.pathname;

	import '../app.pcss';
</script>

<Navbar>
	<NavBrand href="/">
	  <img src="https://placehold.co/200x80" class="me-3 h-6 sm:h-9" alt="Confronti Logo" />
	</NavBrand>
	<div class="flex md:order-2">
		<DarkMode {btnClass} />
	  <NavHamburger />
	</div>
	<NavUl class="order-1">
	  <NavLi href="/" active={true}>Home</NavLi>
	  <NavLi href="/chi-siamo">Chi siamo</NavLi>
	  <NavLi href="/programma">Programma</NavLi>
	  <NavLi href="/candidati">Candidati</NavLi>
	  <NavLi href="/notizie">Notizie</NavLi>
	  <NavLi href="/eventi">Eventi</NavLi>
	</NavUl>
  </Navbar>

<!-- <nav class="desktop-navbar">
	<Sidebar {activeUrl}>
		<SidebarWrapper>
			<SidebarGroup>
				<SidebarItem label="Home" href="/">
					<svelte:fragment slot="icon">
						<HomeOutline
							class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
						/>
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Candidati" href="/candidati">
					<svelte:fragment slot="icon">
						<UsersGroupOutline
							class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
						/>
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Notizie" href="/notizie">
					<svelte:fragment slot="icon">
						<NewspapperOutline
							class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
						/>
					</svelte:fragment>
				</SidebarItem>
        <SidebarItem label="Chi siamo" href="/chi-siamo">
					<svelte:fragment slot="icon">
						<UsersOutline
							class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
						/>
					</svelte:fragment>
				</SidebarItem>
        <SidebarItem label="Programma" href="/programma">
					<svelte:fragment slot="icon">
						<RectangleListOutline
							class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
						/>
					</svelte:fragment>
				</SidebarItem>
			</SidebarGroup>
		</SidebarWrapper>
	</Sidebar>
</nav> -->
<main class="container mb-6">
	<slot />
</main>

<style>
  main {
    margin-left: auto;
    margin-right: auto;
    max-width: 960px;
  }
</style>
