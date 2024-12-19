<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap';

	const projects = [
		{
			title: 'Chat App',
			description: 'A real-time chat application built with Flutter and Firebase.',
			techStack: ['flutter', 'firebase', 'dart'],
			githubRepo: 'https://github.com/ahammednibras8/flutter-chat-app'
		},
		{
			title: 'Portfolio Website',
			description: 'A sleek portfolio website to showcase skills and projects.',
			techStack: ['svelte', 'tailwindcss', 'typescript'],
			githubRepo: 'https://github.com/ahammednibras8/ahammednibras8.github.io'
		},
		{
			title: 'MyGit',
			description: 'I developed my own Git version control system.',
			techStack: ['rust'],
			githubRepo: 'https://github.com/ahammednibras8/mygit'
		}
	];

	let container: HTMLElement;

	// Animation on mount
	onMount(() => {
		gsap.fromTo(
			'.project-card',
			{ opacity: 0, y: 30 },
			{ opacity: 1, y: 0, stagger: 0.2, duration: 1, ease: 'power3.out' }
		);
	});
</script>

<section class="bg-gray-50 px-6 py-20">
	<div class="mx-auto max-w-7xl" bind:this={container}>
		<h2 class="mb-10 text-center text-4xl font-bold text-black md:text-5xl">
			Featured Projects
		</h2>
		<p class="mx-auto mb-12 max-w-2xl text-center text-lg text-gray-600">
			Explore my top projects showcasing expertise in cross-platform development and modern
			technologies.
		</p>

		<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
			{#each projects as project}
				<div
					class="project-card transform rounded-lg border border-gray-200 bg-white p-6 shadow transition-all duration-300 hover:-translate-y-2 hover:border-[#007AFF]"
				>
					<div class="mb-6 flex items-center gap-4">
						<div
							class="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-xl text-black"
						>
							<i class="devicon-{project.techStack[0]}-plain"></i>
						</div>
						<h3 class="text-xl font-semibold text-black">{project.title}</h3>
					</div>
					<p class="mb-6 text-gray-600">{project.description}</p>
					<div class="mb-4 flex flex-wrap gap-3">
						{#each project.techStack as tech}
							<div
								class="flex items-center gap-2 rounded-full bg-gray-200 px-3 py-2 text-sm font-medium text-gray-700"
							>
								<i class="devicon-{tech}-plain text-lg"></i>
								{tech}
							</div>
						{/each}
					</div>
					<div>
						<a
							href={project.githubRepo}
							target="_blank"
							class="inline-block rounded border border-[#007AFF] px-4 py-2 text-sm font-medium text-[#007AFF] transition-transform hover:bg-[#007AFF] hover:text-white"
						>
							View GitHub Repo
						</a>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.project-card {
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
		background-clip: padding-box;
	}
	.project-card:hover {
		background-color: #f9f9f9;
	}
</style>