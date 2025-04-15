<script>
	let { children, ...props } = $props();
</script>

<button {...props}>{@render children()}</button>

<style>
	button {
		background: #51d6a9;
		color: #2e2e3a;
		padding: 20px 24px;
		font-size: 22px;
		border-radius: 5rem;
		border: none;
		font-weight: normal;
		text-transform: uppercase;
		transition: all 0.3s;
	}

	button:hover {
		background: #2e2e3a;
		color: white;
	}
</style>
