<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap';

	const projects = [
		{
			title: 'Chat App',
			description:
				'A real-time chat application built with Flutter and Firebase. This app features real-time messaging, cross-platform support, and user authentication.',
			techStack: ['flutter', 'firebase', 'dart'],
			githubRepo: 'https://github.com/ahammednibras8/flutter-chat-app',
			features: [
				'Real-time messaging',
				'Cross-platform support (iOS and Android)',
				'User authentication (sign up, login)',
				'Push notifications',
				'Chat groups and direct messaging'
			]
		},
		{
			title: 'Portfolio Website',
			description:
				'A sleek portfolio website to showcase skills, projects, and expertise using modern technologies like Svelte and TailwindCSS.',
			techStack: ['svelte', 'tailwindcss', 'typescript'],
			githubRepo: 'https://github.com/ahammednibras8/ahammednibras8.github.io',
			features: [
				'Responsive design for all screen sizes',
				'Fast loading times',
				'Showcase of personal projects and skills',
				'Interactive UI with animations',
				'Simple navigation and clean layout'
			]
		},
		{
			title: 'MyGit',
			description:
				'A custom Git version control system built using Rust. It includes basic functionalities like committing, tracking file history, and managing repositories.',
			techStack: ['rust'],
			githubRepo: 'https://github.com/ahammednibras8/mygit',
			features: [
				'Commit and track file changes',
				'Version history management',
				'Repository creation and management',
				'Command-line interface for efficient usage',
				'Built with Rust for high performance'
			]
		}
	];

	let container: HTMLElement;

	onMount(() => {
		gsap.fromTo(
			'.project-card',
			{ opacity: 0, scale: 0.95 },
			{ opacity: 1, scale: 1, stagger: 0.2, duration: 1.2, ease: 'power3.out' }
		);
	});
</script>

<section class="bg-gradient-to-b from-[#ffffff] to-[#f0f0f0] px-8 py-20">
	<div class="mx-auto max-w-7xl" bind:this={container}>
		<h2 class="mb-10 text-center text-5xl font-extrabold tracking-tight text-black">My Projects</h2>
		<p class="mx-auto mb-12 max-w-2xl text-center text-xl text-gray-700">
			Explore the projects that demonstrate my passion, skill, and attention to detail in creating
			impactful software.
		</p>

		<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
			{#each projects as project}
				<div
					class="project-card transform overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl"
				>
					<div class="p-8">
						<div class="mb-8 flex items-center gap-6">
							<div
								class="flex h-16 w-16 items-center justify-center rounded-full bg-black text-white shadow-lg"
							>
								<i class="devicon-{project.techStack[0]}-plain text-2xl"></i>
							</div>
							<h3 class="text-3xl font-semibold text-black">{project.title}</h3>
						</div>
						<p class="mb-6 text-lg text-gray-700">{project.description}</p>
						<div class="mb-6 flex flex-wrap gap-4">
							{#each project.techStack as tech}
								<div
									class="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-base font-medium text-black"
								>
									<i class="devicon-{tech}-plain text-xl"></i>
									{tech}
								</div>
							{/each}
						</div>
						<ul class="list-disc pl-6 text-base italic text-gray-600">
							{#each project.features as feature}
								<li>{feature}</li>
							{/each}
						</ul>
					</div>
					<div class="border-t border-gray-200 p-6">
						<a
							href={project.githubRepo}
							target="_blank"
							class="block rounded-full bg-black px-6 py-3 text-center text-base font-medium text-white shadow-md transition-all hover:scale-105 hover:shadow-2xl"
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
		border: 1px solid rgba(0, 0, 0, 0.1);
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
	}
	.project-card:hover {
		box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
		transform: scale(1.05);
	}
	.project-card h3 {
		font-weight: 600;
		color: #000;
	}
	.project-card p {
		line-height: 1.7;
		color: #444;
	}
	.project-card a {
		transition: transform 0.3s ease;
	}
	.project-card a:hover {
		transform: scale(1.05);
	}
	.project-card .devicon {
		color: #fff;
	}
</style>
