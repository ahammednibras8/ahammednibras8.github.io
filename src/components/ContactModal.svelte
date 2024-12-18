<script lang="ts">
    export let isModalOpen: boolean;
    export let toggleModal: () => void;
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
        <form>
          <div class="mb-4">
            <label for="name" class="block text-gray-600 mb-2">Name</label>
            <input
              id="name"
              type="text"
              class="w-full rounded-lg border border-gray-300 px-4 py-2 text-black focus:ring-2 focus:ring-black focus:outline-none"
              placeholder="Your Name"
            />
          </div>
  
          <div class="mb-4">
            <label for="email" class="block text-gray-600 mb-2">Email</label>
            <input
              id="email"
              type="email"
              class="w-full rounded-lg border border-gray-300 px-4 py-2 text-black focus:ring-2 focus:ring-black focus:outline-none"
              placeholder="Your Email"
            />
          </div>
  
          <div class="mb-4">
            <label for="message" class="block text-gray-600 mb-2">Message</label>
            <textarea
              id="message"
              class="w-full rounded-lg border border-gray-300 px-4 py-2 text-black focus:ring-2 focus:ring-black focus:outline-none"
              placeholder="Your Message"
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
    </div>
  {/if}