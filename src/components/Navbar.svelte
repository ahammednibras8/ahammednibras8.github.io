<script>
	let isMenuOpen = false;
</script>

<header class="sticky top-0 z-50 bg-white text-black shadow-md">
	<!-- Navbar Container -->
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="relative flex h-16 items-center justify-between">
			<!-- Logo Section -->
			<div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
				<button
					class="inline-flex items-center justify-center rounded-md p-2 text-black hover:text-indigo-600 focus:outline-none"
					aria-expanded={isMenuOpen ? 'true' : 'false'}
					on:click={() => (isMenuOpen = !isMenuOpen)}
				>
					<span class="sr-only">Open main menu</span>
					<svg
						class="block h-6 w-6 transform transition-transform duration-300"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						></path>
					</svg>
				</button>
			</div>

			<!-- Navbar Links for Larger Screens -->
			<div class="flex flex-1 items-center justify-center sm:justify-start">
				<div class="flex-shrink-0">
					<a href="/" class="text-2xl font-bold tracking-wide text-black">Ahammed Nibras</a>
				</div>
				<div class="hidden sm:ml-6 sm:block">
					<div class="flex space-x-6">
						<a
							href="/"
							class="rounded-md px-3 py-2 text-base font-medium text-black transition-colors duration-300 ease-in-out hover:text-gray-600"
							>Home</a
						>
						<a
							href="about"
							class="rounded-md px-3 py-2 text-base font-medium text-black transition-colors duration-300 ease-in-out hover:text-gray-600"
							>About</a
						>
						<a
							href="portfolio"
							class="rounded-md px-3 py-2 text-base font-medium text-black transition-colors duration-300 ease-in-out hover:text-gray-600"
							>Portfolio</a
						>
						<a
							href="contact"
							class="rounded-md px-3 py-2 text-base font-medium text-black transition-colors duration-300 ease-in-out hover:text-gray-600"
							>Contact</a
						>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Mobile Menu -->
	{#if isMenuOpen}
		<div
			class="z-50 block translate-y-0 transform bg-black bg-opacity-70 opacity-100 transition-all duration-500 ease-in-out sm:hidden"
		>
			<div class="space-y-4 px-2 pb-3 pt-2">
				<a
					href="#home"
					class="block rounded-md px-3 py-2 text-lg font-medium text-white hover:text-gray-600"
					>Home</a
				>
				<a
					href="#about"
					class="block rounded-md px-3 py-2 text-lg font-medium text-white hover:text-gray-600"
					>About</a
				>
				<a
					href="#portfolio"
					class="block rounded-md px-3 py-2 text-lg font-medium text-white hover:text-gray-600"
					>Portfolio</a
				>
				<a
					href="#contact"
					class="block rounded-md px-3 py-2 text-lg font-medium text-white hover:text-gray-600"
					>Contact</a
				>
			</div>
		</div>
	{/if}
</header>
