<script lang="ts">
    import { onMount } from 'svelte';
  
    interface BlogContent {
      type: string;
      text: string;
      spans: Array<{ start: number; end: number; type: string }>;
    }
  
    interface Blog {
      title: string;
      content: BlogContent[];
      date: string;
    }
  
    let blog: Blog | null = null;
    let loading = true;
    let errorMessage = '';
  
    // Extracting the Blog ID from the URL
    let blogId: string = '';
  
    onMount(async () => {
      blogId = window.location.pathname.split('/').pop() || '';
  
      const ref = 'Z2Q8SxIAACwAKXLm'; // Prismic API reference ID
      const apiUrl = `https://ahammednibras8-portfolio.cdn.prismic.io/api/v2/documents/search?ref=${ref}&q=[[at(document.type,"blog")]]`;
  
      try {
        const response = await fetch(apiUrl);
  
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }
  
        const data = await response.json();
  
        // Log the response for debugging
        console.log('API Response:', data);
  
        // Find the blog matching the provided ID
        const matchingBlog = data.results.find((b: { uid: string }) => b.uid === blogId);
  
        if (matchingBlog) {
          blog = {
            title: matchingBlog.data.title || 'Untitled Blog',
            content: matchingBlog.data.content.map((content: BlogContent) => ({
              type: content.type,
              text: formatTextWithSpans(content.text, content.spans),
            })),
            date: new Date(matchingBlog.first_publication_date).toLocaleDateString(),
          };
        } else {
          errorMessage = 'Blog not found.';
        }
      } catch (error) {
        console.error('Error fetching blog:', error);
        errorMessage = 'Failed to load the blog.';
      } finally {
        loading = false;
      }
    });
  
    /**
     * Format text with spans (e.g., bold, italic).
     * @param text The raw text content.
     * @param spans Array of spans for formatting.
     * @returns The formatted text as an HTML string.
     */
    function formatTextWithSpans(text: string, spans: Array<{ start: number; end: number; type: string }>): string {
      let formattedText = text;
  
      spans.forEach(span => {
        if (span.type === 'strong') {
          formattedText = `${formattedText.slice(0, span.start)}<strong>${formattedText.slice(span.start, span.end)}</strong>${formattedText.slice(span.end)}`;
        }
        // Additional span types (e.g., 'em', 'underline') can be handled here
      });
  
      return formattedText;
    }
  </script>
  
  <section class="bg-white px-6 py-20 text-black">
    <div class="mx-auto max-w-7xl">
      {#if loading}
        <div class="text-center">Loading blog...</div>
      {:else if blog}
        <div class="mx-auto mb-12 max-w-2xl">
          <h1 class="mb-4 text-3xl font-semibold">{blog.title}</h1>
          <p class="mb-4 text-gray-500">{blog.date}</p>
          <div class="prose prose-lg text-gray-700">
            <!-- Render each paragraph -->
            {#each blog.content as content}
              {#if content.type === 'paragraph'}
                <p>{@html content.text}</p>
              {:else if content.type === 'list-item'}
                <ul>
                  <li>{@html content.text}</li>
                </ul>
              {/if}
            {/each}
          </div>
        </div>
      {:else}
        <div class="text-center">{errorMessage}</div>
      {/if}
    </div>
  </section>