<script>
	import { page } from '$app/state'; // For active tab highlighting
</script>

<nav>
	<a href="/" class={page.url.pathname === '/' ? 'active' : ''}>Home</a>
	<a href="/server" class={page.url.pathname === '/server' ? 'active' : ''}>Server function</a>
	<a href="/client" class={page.url.pathname === '/client' ? 'active' : ''}>Client function</a>
	<a href="/jokes" class={page.url.pathname === '/jokes' ? 'active' : ''}>Daily Jokes</a>
	<a href="/about" class={page.url.pathname === '/about' ? 'active' : ''}>About</a>
	<p>Welcome to Notch conference 01 : Svelte</p>
</nav>

<slot />

<style>
	nav {
		display: flex;
		gap: 20px;
		background-color: purple;
		padding: 10px;
	}
	a {
		background: #51d6a9;
		color: #2e2e3a;
		text-decoration: none;
		padding: 8px 12px;
		border-radius: 4px;
		align-content: center;
	}
	a.active {
		background: white;
		color: #2e2e3a;
		font-weight: bold;
	}
	p {
		color: white;
		font-size: 42px;
		margin-top: 0px;
		margin-bottom: 0px;
	}
</style>
