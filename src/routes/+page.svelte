<script lang="ts">
	import { onMount } from 'svelte';
	import Hero from '../components/Hero.svelte';
	import { fadeIn } from '../utils/animations';
	import Skill from '../components/Skill.svelte';

	let hero: HTMLElement | null = null; // Correctly typed reference to the hero section

	onMount(() => {
		// Trigger fade-in animation on mount
		if (hero) {
			fadeIn(hero); // Applying the animation to the hero element
		}
	});
</script>

<section bind:this={hero}>
	<Hero />
	<Skill />
</section>
