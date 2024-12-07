<script>
  import '../app.css';
  import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

  injectSpeedInsights();
</script>

<div class="min-h-screen bg-[#161513] font-sans text-white">
  <!-- Navigation -->
  <nav class="fixed top-0 z-50 w-full bg-[#161513]/80 px-6 py-4 backdrop-blur-sm">
    <div class="mx-auto flex max-w-7xl items-center justify-between">
      <a href="/" class="text-2xl font-bold text-white">AN.</a>
      <div class="flex gap-8">
        <a href="#home" class="text-sm text-white/80 hover:text-white">Home</a>
        <a href="#projects" class="text-sm text-white/80 hover:text-white">Projects</a>
        <a href="#experience" class="text-sm text-white/80 hover:text-white">Experience</a>
        <a href="#contact" class="text-sm text-white/80 hover:text-white">Contact</a>
      </div>
    </div>
  </nav>

  <!-- Main Content -->
  <main>
    <slot />
  </main>
</div>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }
</style>
