<script lang="ts">
    import { onMount } from "svelte";
    import { gsap } from "gsap";
    
    // @ts-ignore
    let hero: HTMLElement | null = null;

    onMount(() => {
        gsap.fromTo(
            hero,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" }
        );
    });
</script>

<section
    bind:this={hero}
    class="relative flex flex-col items-center justify-center h-screen bg-white px-6 py-12 text-black"
>
    <!-- Profile Circle -->
    <div class="w-40 h-40 mb-6 rounded-full overflow-hidden shadow-lg">
        <img src="/images/ahammednibras.jpeg" alt="Ahammed Nibras" class="object-cover w-full h-full rounded-full"/>
    </div>

    <!-- Content -->
    <div class="text-center max-w-3xl mx-auto">
        <h1 class="text-5xl font-semibold text-black mb-3 tracking-tight">
            Ahammed Nibras
        </h1>
        <p class="text-lg sm:text-xl text-gray-600 mb-8">
            Frontend Developer | Svelte, Flutter (Android/iOS)
        </p>

        <!-- About Me Paragraph -->
        <p class="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
            I'm passionate about crafting beautiful, responsive, and user-friendly interfaces. With a strong foundation in frontend technologies like Svelte, Tailwind CSS, and JavaScript, as well as mobile app development using Flutter for both Android and iOS, I strive to build seamless digital experiences that meet user needs and exceed expectations.
        </p>

        <!-- Contact Button -->
        <a href="#contact-form">
            <button
                class="rounded-full bg-black text-white px-10 py-4 text-lg font-medium transition-all duration-200 ease-in-out transform hover:scale-102 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 shadow-lg"
            >
                Contact Me
            </button>
        </a>
    </div>
</section>