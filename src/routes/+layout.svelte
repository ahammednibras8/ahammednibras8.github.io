<script>
	import '../app.css';
	import { onMount } from 'svelte';

	let isMenuOpen = false;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	onMount(() => {
		document.addEventListener('click', (e) => {
			if (isMenuOpen && !e.target.closest('nav')) {
				isMenuOpen = false;
			}
		});
	});
</script>

<svelte:head>
	<title>Ahammed Nibras | FrontEnd Developer</title>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<nav class="fixed top-0 z-50 w-full bg-[#222222] p-4 text-white">
	<div class="container mx-auto flex items-center justify-between">
		<!-- Logo -->
		<div class="h-8">
			<img
				src="/assets/signature.png"
				alt="Ahammed Nibras"
				class="h-full object-contain brightness-0 invert filter"
			/>
		</div>

		<!-- Desktop Menu -->
		<div class="hidden items-center space-x-12 font-jakarta text-[15px] font-semibold md:flex">
			<a href="/" class="text-lg transition-colors hover:text-gray-300">Home</a>
			<a href="/projects" class="text-lg transition-colors hover:text-gray-300">Projects</a>
			<a href="/contact" class="text-lg transition-colors hover:text-gray-300">Contact</a>
		</div>

		<!-- Mobile Menu -->
		<!-- Button -->
		<button class="md:hidden" on:click|stopPropagation={toggleMenu}>
			<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				{#if !isMenuOpen}
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					/>
				{:else}
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				{/if}
			</svg>
		</button>
		<!-- Menu -->
		{#if isMenuOpen}
			<div class="absolute left-0 right-0 top-16 bg-[#222222] p-4 md:hidden">
				<div class="flex flex-col space-y-4">
					<a href="/" class="text-lg transition-colors hover:text-gray-300">Home</a>
					<a href="/projects" class="text-lg transition-colors hover:text-gray-300">Projects</a>
					<a href="/contact" class="text-lg transition-colors hover:text-gray-300">Contact</a>
				</div>
			</div>
		{/if}
	</div>
</nav>

<main>
	<slot />
</main>

<footer class="bg-[#222222] py-6 text-white">
	<div class="container mx-auto px-4 text-center">
		<p class="text-sm text-gray-400">
			© {new Date().getFullYear()} Ahammed Nibras. All rights reserved.
		</p>
	</div>
</footer>
