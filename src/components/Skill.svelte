<script lang="ts">
    import { onMount } from 'svelte';
    import gsap from 'gsap';
  
    const skills = [
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
            scale: 0,
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
  
      // Mouse movement effect
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX: mouseX, clientY: mouseY } = e;
        const { offsetWidth: width, offsetHeight: height } = container;
        const tiltX = (mouseY / height - 0.5) * 10; // range of -5 to 5
        const tiltY = (mouseX / width - 0.5) * -10; // range of -5 to 5
  
        // Apply tilt to each card based on mouse position
        const skillCards = container.querySelectorAll('.skill-card');
        skillCards.forEach((card) => {
          const htmlCard = card as HTMLElement; // Cast to HTMLElement to access `style`
          htmlCard.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
          htmlCard.style.transition = 'transform 0.1s ease-out';
        });
      };
  
      // Attach mousemove event listener
      container.addEventListener('mousemove', handleMouseMove);
      
      // Cleanup listener on unmount
      return () => {
        container.removeEventListener('mousemove', handleMouseMove);
      };
    });
  </script>
  
  <section class="bg-gradient-to-r from-indigo-100 to-teal-100 py-20 px-6">
    <div class="max-w-7xl mx-auto" bind:this={container}>
      <h2 class="text-5xl md:text-6xl font-semibold text-gray-800 text-center mb-8">
        Technical Stack
      </h2>
      <p class="text-gray-500 text-center max-w-2xl mx-auto mb-12">
        Specializing in modern frameworks for cross-platform development to deliver seamless solutions.
      </p>
    
      <div class="pb-4">
        <div class="flex justify-center flex-wrap gap-8 px-4">
          {#each skills as skill, index}
            <div
              class="skill-card skill-card-{index} bg-white backdrop-blur-lg bg-opacity-80 rounded-3xl p-8
                     flex flex-col items-center justify-center gap-6
                     shadow-xl hover:shadow-2xl transition-all duration-300
                     hover:scale-105 hover:-translate-y-2 transform
                     w-[160px] sm:w-[180px] md:w-[200px] group"
            >
              <div class="text-5xl md:text-6xl transition-all duration-300 group-hover:scale-110">
                <i
                  class="devicon-{skill.icon}-plain"
                  style="color: {skill.color};"
                ></i>
              </div>
              <span class="font-semibold text-gray-700 text-center text-base md:text-lg">
                {skill.name}
              </span>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </section>