<script lang="ts">
	let name = '';
	let email = '';
	let message = '';

	// Function to submit the form data
	const submitForm = () => {
		const form = document.createElement('form');
		form.action = 'https://formspree.io/f/movqornb';
		form.method = 'POST';

		// Append form fields
		[
			{ name: 'name', value: name },
			{ name: 'email', value: email },
			{ name: 'message', value: message }
		].forEach(({ name, value }) => {
			const input = document.createElement('input');
			input.type = 'hidden';
			input.name = name;
			input.value = value;
			form.appendChild(input);
		});

		document.body.appendChild(form);
		form.submit();
	};

	// Handle form submission
	const handleSubmit = (event: Event) => {
		event.preventDefault();
		submitForm();
	};
</script>

<section class="bg-gray-50 px-6 py-20 text-gray-800" id="contact">
	<div class="mx-auto max-w-3xl text-center">
		<h2 class="mb-6 text-4xl font-semibold text-black">Contact Me</h2>
		<p class="mb-12 text-lg text-gray-600">
			Feel free to reach out to discuss your project, collaboration opportunities, or any questions
			you have.
		</p>

		<form on:submit={handleSubmit} class="space-y-6">
			<!-- Honeypot field to trap bots -->
			<input type="text" name="_gotcha" style="display:none" />

			<div>
				<label for="name" class="mb-2 block text-left text-gray-600">Name</label>
				<input
					id="name"
					type="text"
					bind:value={name}
					class="w-full rounded-lg border border-gray-300 px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-black"
					placeholder="Your Name"
					required
				/>
			</div>

			<div>
				<label for="email" class="mb-2 block text-left text-gray-600">Email</label>
				<input
					id="email"
					type="email"
					bind:value={email}
					class="w-full rounded-lg border border-gray-300 px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-black"
					placeholder="Your Email"
					required
				/>
			</div>

			<div>
				<label for="message" class="mb-2 block text-left text-gray-600">Message</label>
				<textarea
					id="message"
					bind:value={message}
					class="w-full rounded-lg border border-gray-300 px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-black"
					placeholder="Your Message"
					required
				></textarea>
			</div>

			<button
				type="submit"
				class="w-full rounded-full bg-black py-3 text-white hover:bg-gray-900 focus:outline-none"
			>
				Send Message
			</button>
		</form>
	</div>
</section>

<style>
	.bg-gray-50 {
		background-color: #f9fafb;
	}
	.text-black {
		color: #111827;
	}
	.text-gray-600 {
		color: #4b5563;
	}
	.rounded-lg {
		border-radius: 0.5rem;
	}
	.rounded-full {
		border-radius: 9999px;
	}
	.focus\:ring-2 {
		box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.5);
	}
</style>
