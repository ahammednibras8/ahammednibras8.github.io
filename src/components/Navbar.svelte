<script>
    let isMenuOpen = false;
  </script>
  
  <header class="bg-white text-black shadow-md sticky top-0 z-50">
    <!-- Navbar Container -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <!-- Logo Section -->
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <button
            class="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-indigo-600 focus:outline-none"
            aria-expanded={isMenuOpen ? 'true' : 'false'}
            on:click={() => isMenuOpen = !isMenuOpen}
          >
            <span class="sr-only">Open main menu</span>
            <svg class="block h-6 w-6 transform transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
  
        <!-- Navbar Links for Larger Screens -->
        <div class="flex flex-1 items-center justify-center sm:justify-start">
          <div class="flex-shrink-0">
            <a href="/" class="text-2xl font-bold text-black tracking-wide">Ahammed Nibras</a>
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-6">
              <a href="#home" class="text-black hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ease-in-out">Home</a>
              <a href="#about" class="text-black hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ease-in-out">About</a>
              <a href="#portfolio" class="text-black hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ease-in-out">Portfolio</a>
              <a href="#contact" class="text-black hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ease-in-out">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    <!-- Mobile Menu -->
    {#if isMenuOpen}
      <div class="sm:hidden block bg-black bg-opacity-70 transition-all duration-500 ease-in-out transform opacity-100 translate-y-0 z-50">
        <div class="px-2 pt-2 pb-3 space-y-4">
          <a href="#home" class="text-white hover:text-indigo-600 block px-3 py-2 rounded-md text-lg font-medium">Home</a>
          <a href="#about" class="text-white hover:text-indigo-600 block px-3 py-2 rounded-md text-lg font-medium">About</a>
          <a href="#portfolio" class="text-white hover:text-indigo-600 block px-3 py-2 rounded-md text-lg font-medium">Portfolio</a>
          <a href="#contact" class="text-white hover:text-indigo-600 block px-3 py-2 rounded-md text-lg font-medium">Contact</a>
        </div>
      </div>
    {/if}
  </header>