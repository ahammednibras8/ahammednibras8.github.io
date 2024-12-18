<script lang="ts">
    import { onMount } from 'svelte';
    import { gsap } from 'gsap';
    import ContactModal from './ContactModal.svelte';
  
    // @ts-ignore
    let hero: HTMLElement | null = null;
  
    let isModalOpen = false;
  
    onMount(() => {
      gsap.fromTo(
        hero,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.5, ease: 'power4.out' }
      );
    });
  
    function toggleModal() {
      isModalOpen = !isModalOpen;
    }
  </script>
  
  <section
    bind:this={hero}
    class="relative flex h-screen flex-col items-center justify-center bg-white px-6 py-12 text-black"
  >
    <!-- Profile Circle -->
    <div class="mb-8 h-40 w-40 overflow-hidden rounded-full shadow-xl">
      <img
        src="/images/ahammednibras.jpeg"
        alt="Ahammed Nibras"
        class="h-full w-full rounded-full object-cover"
      />
    </div>
  
    <!-- Content -->
    <div class="mx-auto max-w-3xl text-center">
      <h1 class="mb-3 text-5xl font-semibold tracking-tight text-black">Ahammed Nibras</h1>
      <p class="mb-8 text-lg text-gray-600 sm:text-xl">
        Frontend Developer | Svelte, Flutter (Android/iOS)
      </p>
  
      <!-- About Me Paragraph -->
      <p class="mb-8 text-lg leading-relaxed text-gray-600 sm:text-xl">
        I'm passionate about crafting beautiful, responsive, and user-friendly interfaces. With a
        strong foundation in frontend technologies like Svelte, Tailwind CSS, and JavaScript, as well
        as mobile app development using Flutter for both Android and iOS, I strive to build seamless
        digital experiences that meet user needs and exceed expectations.
      </p>
  
      <!-- Contact Button -->
      <button
        on:click={toggleModal}
        class="rounded-full bg-black px-10 py-4 text-lg font-medium text-white shadow-lg transition-all duration-300 ease-in-out hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2"
      >
        Contact Me
      </button>
  
      <!-- Pass the props to the modal component -->
      <ContactModal {isModalOpen} {toggleModal} />
    </div>
  </section>