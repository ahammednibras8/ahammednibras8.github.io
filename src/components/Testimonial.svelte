<script lang="ts">
	import { onMount } from 'svelte';

	interface Testimonial {
		name: string;
		role: string;
		image: string;
		testimonial: string;
	}

	let testimonials: Testimonial[] = [];

	onMount(() => {
		// Add your testimonials here or fetch them from an API
		testimonials = [];
	});
</script>

<section class="bg-gray-50 px-6 py-20 text-gray-800">
	<div class="mx-auto max-w-7xl">
		<h2 class="mb-10 text-center text-4xl font-semibold text-gray-900">What People Say</h2>
		<p class="mx-auto mb-12 max-w-2xl text-center text-lg text-gray-600">
			Here's what my clients and colleagues have to say about working with me.
		</p>

		<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
			{#each testimonials as { name, role, image, testimonial }}
				<div class="testimonial-card rounded-lg bg-white p-8 shadow-md hover:shadow-lg">
					<div class="mb-4 flex items-center space-x-4">
						<img src={image} alt={name} class="h-16 w-16 rounded-full object-cover shadow-md" />
						<div>
							<h3 class="text-lg font-medium text-gray-900">{name}</h3>
							<p class="text-sm text-gray-500">{role}</p>
						</div>
					</div>
					<p class="text-gray-700">"{testimonial}"</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.testimonial-card {
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
	}
	.testimonial-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
	}
</style>
