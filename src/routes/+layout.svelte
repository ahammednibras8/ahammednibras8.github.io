<script>
	import '../app.css';

	let isMenuOpen = false;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>
<nav class="bg-[#222222] text-white p-4 fixed w-full top-0 z-50">
	<div class="container mx-auto flex justify-between items-center">
		<!-- Logo -->
		<div class="h-8">
			<img src="/assets/signature.png" alt="Ahammed Nibras" class="h-full object-contain filter brightness-0 invert" />
		</div>

		<!-- Desktop Menu -->
		<div class="hidden md:flex items-center space-x-12 font-jakarta font-semibold text-[15px]">
			<a href="/" class="hover:text-gray-300 transition-colors text-lg">Home</a>
			<a href="/projects" class="hover:text-gray-300 transition-colors text-lg">Projects</a>
			<a href="/contact" class="hover:text-gray-300 transition-colors text-lg">Contact</a>
		</div>
	</div>
</nav>