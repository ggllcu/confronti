<script lang="ts">
	import { BottomNav, BottomNavItem } from 'flowbite-svelte';
	import { HomeOutline, NewspapperOutline, UsersGroupOutline, UsersOutline, RectangleListOutline } from 'flowbite-svelte-icons';
	import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper } from 'flowbite-svelte';

	import { page } from '$app/stores';
	$: activeUrl = $page.url.pathname;

	import '../app.pcss';
</script>

<nav class="desktop-navbar">
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
</nav>
<main class="container mb-6">
	<slot />
</main>

<!-- <BottomNav {activeUrl} position="fixed" classInner="grid-cols-4">
	<BottomNavItem btnName="Home" href="/">
		<HomeOutline
			class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500"
		/>
	</BottomNavItem>
	<BottomNavItem btnName="Candidati" href="/candidati">
		<UsersGroupOutline
			class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500"
		/>
	</BottomNavItem>
	<BottomNavItem btnName="Notizie" href="/notizie">
		<NewspapperOutline
			class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500"
		/>
	</BottomNavItem>
</BottomNav> -->

<style>
  .desktop-navbar {
    position: fixed;
  }

  main {
    margin-left: auto;
    margin-right: auto;
    max-width: 960px;
  }
</style>
