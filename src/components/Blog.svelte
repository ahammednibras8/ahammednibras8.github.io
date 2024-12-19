<script lang="ts">
	import { onMount } from 'svelte';

	interface Blog {
		title: string;
		content: string;
		date: string;
		link: string;
	}

	let blogs: Blog[] = [];
	let loading = true;

	onMount(async () => {
		const ref = 'Z2Q8SxIAACwAKXLm';  // The reference ID for the master branch (from your response)

		try {
			const response = await fetch(
				`https://ahammednibras8-portfolio.cdn.prismic.io/api/v2/documents/search?ref=${ref}&q=[[at(document.type,"blog")]]&lang=en-us&pageSize=5`
			);
			const data = await response.json();
			
			// Debug: Log the data structure to inspect the title field
			console.log(data);

			blogs = data.results
				.map((blog: {
					data: { title: { text: any }[]; content: { text: any }[]; date: string | number | Date };
					uid: any;
				}) => ({
					title: blog.data.title, // Access title text from the first item
					content: blog.data.content[0].text.slice(0, 100) + '...', // Truncate content for preview
					date: new Date(blog.data.date).toLocaleDateString(), // Format the date
					link: `/blog/${blog.uid}` // Generate the link to the full blog
				}))
				.slice(0, 4); // Limit to 4 blogs

			loading = false;
		} catch (error) {
			console.error('Error fetching blogs:', error);
		}
	});
</script>

<section class="bg-white px-6 py-20 text-black">
	<div class="mx-auto max-w-7xl">
		<h2 class="mb-10 text-center text-4xl font-semibold text-black md:text-5xl">Latest Blogs</h2>
		<p class="mx-auto mb-12 max-w-2xl text-center text-lg text-gray-600">
			Explore insights into modern technologies and development approaches.
		</p>

		{#if loading}
			<div class="text-center">Loading blogs...</div>
		{:else}
			<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
				{#each blogs as blog}
					<div class="blog-card transform rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 p-8 shadow-sm transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg">
						<h3 class="mb-4 text-xl font-medium text-black">{blog.title}</h3>
						<p class="mb-6 text-gray-500">{blog.content}</p> <!-- Display short content -->
						<div class="mt-4 flex items-center justify-between">
							<a href={blog.link} class="inline-flex items-center font-medium text-blue-600 hover:underline">
								Read More
								<svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<line x1="5" y1="12" x2="19" y2="12" />
									<polyline points="12 5 19 12 12 19" />
								</svg>
							</a>
							<span class="text-sm text-gray-400">{blog.date}</span> <!-- Display date -->
						</div>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</section>

<style>
	.blog-card {
		border: 1px solid rgba(0, 0, 0, 0.05);
		transition:
			box-shadow 0.3s ease,
			transform 0.3s ease;
	}

	.blog-card:hover {
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
	}
</style>