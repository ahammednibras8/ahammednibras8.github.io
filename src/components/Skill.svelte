<script lang="ts">
  import { onMount } from 'svelte';
  import gsap from 'gsap';

  const skills = [
    { name: 'Rust', icon: 'rust', color: '#000000' },
    { name: 'Dart', icon: 'dart', color: '#00B4AB' },
    { name: 'TypeScript', icon: 'typescript', color: '#3178C6' },
    { name: 'Flutter', icon: 'flutter', color: '#02569B' },
    { name: 'Svelte', icon: 'svelte', color: '#FF3E00' },
    { name: 'Firebase', icon: 'firebase', color: '#FFCA28' },
    { name: 'Git', icon: 'git', color: '#F05032' },
    { name: 'GitHub', icon: 'github', color: '#181717' }
  ];

  let container: HTMLElement;

  // GSAP animation onMount
  onMount(() => {
    skills.forEach((_, index) => {
      gsap.fromTo(
        `.skill-card-${index}`,
        {
          scale: 0.95,
          opacity: 0,
          y: 20,
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.1,
          ease: 'power3.out',
        }
      );
    });
  });
</script>

<section class="bg-gradient-to-r from-gray-100 to-gray-200 py-20 px-6">
  <div class="max-w-6xl mx-auto" bind:this={container}>
    <h2 class="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-8">
      Technical Stack
    </h2>
    <p class="text-gray-600 text-center max-w-2xl mx-auto mb-12">
      Proficient in modern technologies for delivering innovative and seamless solutions.
    </p>
  
    <div class="pb-4">
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8 px-4">
        {#each skills as skill, index}
          <div
            class="skill-card skill-card-{index} bg-white rounded-2xl p-6
                   flex flex-col items-center justify-center gap-4
                   shadow-md hover:shadow-lg transition-all duration-300
                   hover:scale-105 hover:-translate-y-2 transform
                   group"
          >
            <div class="text-5xl md:text-6xl transition-transform duration-300 group-hover:scale-110">
              <i
                class="devicon-{skill.icon}-plain"
                style="color: {skill.color};"
              ></i>
            </div>
            <span class="font-medium text-gray-700 text-center text-base md:text-lg">
              {skill.name}
            </span>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>