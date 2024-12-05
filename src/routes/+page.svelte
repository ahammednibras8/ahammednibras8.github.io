<script>
	import '../app.css';
	import Button from '$lib/componets/Button.svelte';
</script>

<div class="flex min-h-screen items-center justify-center bg-[#161513] font-jakarta text-white">
	<div class="container mx-auto px-4">
		<div class="mx-auto flex max-w-4xl flex-col items-center text-center">
			<!-- Avatar -->
			<div class="mb-6 h-48 w-48 overflow-hidden rounded-full bg-[#161513] p-1">
				<img src="/assets/profile.jpeg" alt="profile" class="h-full w-full object-cover" />
			</div>

			<!-- Name and Role -->
			<h1 class="mb-2 text-4xl font-bold text-white">Ahammed Nibras</h1>
			<h2
				class="mb-6 bg-gradient-to-r from-rose-400 to-blue-500 bg-clip-text text-2xl font-semibold text-transparent"
			>
				Frontend Developer
			</h2>

			<!-- Description -->
			<p class="max-w-2xl text-lg leading-relaxed text-gray-500">
				I am a passionate Frontend Developer specializing in building seamless mobile and web
				applications. I use Flutter to craft intuitive mobile experiences, Svelte for dynamic web
				interfaces, and Firebase for robust backend solutions. With a keen eye for design and
				functionality, I strive to deliver scalable, user-centric applications that solve real-world
				problems.
			</p>

			<!-- Social Links -->
			<div class="mt-8 flex items-center gap-6">
				<!-- GitHub -->
				<a
					href="https://github.com/ahammednibras8"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Visit my GitHub profile"
					class="text-gray-500 transition-colors duration-300 hover:text-white"
				>
					<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						<path
							fill-rule="evenodd"
							d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
						/>
					</svg>
				</a>

				<!-- LinkedIn -->
				<a
					href="https://www.linkedin.com/in/ahammednibras8"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Connect with me on LinkedIn"
					class="text-gray-500 transition-colors duration-300 hover:text-white"
				>
					<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						<path
							d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
						/>
					</svg>
				</a>

				<!-- Medium -->
				<a
					href="https://medium.com/@ahammednibras"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Read my articles on Medium"
					class="text-gray-500 transition-colors duration-300 hover:text-white"
				>
					<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						<path
							d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"
						/>
					</svg>
				</a>
			</div>

			<!-- Action Buttons -->
			<div class="mt-8 flex flex-wrap items-center justify-center gap-4">
				<Button variant="primary">Get in Touch</Button>
				<Button variant="outline">Download CV</Button>
			</div>
		</div>
	</div>
</div>
