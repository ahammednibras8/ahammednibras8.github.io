<script>
	export let type = 'button';
	export let variant = 'primary';
	export let size = 'md';
	export let disabled = false;
	export let fullWidth = false;
	export let href = undefined;

	const variants = {
		primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
		secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500',
		outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500',
		ghost: 'text-blue-600 hover:bg-blue-50 focus:ring-blue-500'
	};

	const sizes = {
		sm: 'px-3 py-1.5 text-sm',
		md: 'px-4 py-2 text-base',
		lg: 'px-6 py-3 text-lg'
	};

	$: classes = `
    inline-flex items-center justify-center
    font-medium rounded-lg
    transition-colors duration-200
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    ${variants[variant]}
    ${sizes[size]}
    ${fullWidth ? 'w-full' : ''}
  `;
</script>

{#if href}
  <a
    {href}
    class="inline-flex items-center justify-center rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 {variant === 'primary'
      ? 'bg-gradient-to-r from-[#E84545] to-[#904E95] text-white hover:opacity-90'
      : 'border border-white/20 bg-transparent text-white hover:border-white/40 hover:bg-white/5'}"
  >
    <slot />
  </a>
{:else}
  <button
    {type} {disabled} class={`{classes}`}
    on:click
  >
    <slot />
  </button>
{/if}
