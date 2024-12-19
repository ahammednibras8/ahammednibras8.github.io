<script lang="ts">
	export let isModalOpen: boolean;
	export let toggleModal: () => void;

	// If you need to load external scripts (like Google reCAPTCHA), you can do it here.
	import { onMount } from 'svelte';

	onMount(() => {
		// Dynamically loading the Google reCAPTCHA script
		const script = document.createElement('script');
		script.src = 'https://www.google.com/recaptcha/api.js';
		script.async = true;
		script.defer = true;
		document.head.appendChild(script);
	});
</script>

{#if isModalOpen}
	<div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
		<div class="relative w-96 rounded-lg bg-white p-8 shadow-xl">
			<!-- Close Button Positioned Top Left -->
			<button
				class="absolute left-4 top-4 text-2xl font-semibold text-gray-500"
				on:click={toggleModal}
			>
				&#10005;
			</button>
			<h2 class="mb-4 text-xl font-semibold text-black">Contact Me</h2>
			<form action="https://formspree.io/f/movqornb" method="POST">
				<!-- Honeypot field to trap bots -->
				<input type="text" name="_gotcha" style="display:none" />

				<div class="mb-4">
					<label for="name" class="mb-2 block text-gray-600">Name</label>
					<input
						id="name"
						type="text"
						name="name"
						class="w-full rounded-lg border border-gray-300 px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-black"
						placeholder="Your Name"
						required
					/>
				</div>

				<div class="mb-4">
					<label for="email" class="mb-2 block text-gray-600">Email</label>
					<input
						id="email"
						type="email"
						name="email"
						class="w-full rounded-lg border border-gray-300 px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-black"
						placeholder="Your Email"
						required
					/>
				</div>

				<div class="mb-4">
					<label for="message" class="mb-2 block text-gray-600">Message</label>
					<textarea
						id="message"
						name="message"
						class="w-full rounded-lg border border-gray-300 px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-black"
						placeholder="Your Message"
						required
					></textarea>
				</div>

				<!-- Google reCAPTCHA -->
				<div class="g-recaptcha" data-sitekey="your-site-key"></div>

				<button
					type="submit"
					class="w-full rounded-full bg-black py-3 text-white hover:bg-gray-900 focus:outline-none"
				>
					Send Message
				</button>
			</form>
		</div>
	</div>
{/if}
