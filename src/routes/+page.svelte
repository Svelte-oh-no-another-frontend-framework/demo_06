<script lang="ts">
	import { Button, JokeDetails } from '$lib';
	import type { Joke } from '$types';
	import { writable } from 'svelte/store';
	import { loadChuckFact } from '$lib/utils/jokeHelper';

	const chuckFactJoke = writable<Joke | null>(null);

	async function fetchChuckFact() {
		try {
			const data = await loadChuckFact();
			chuckFactJoke.set(data);
		} catch (error) {
			console.error('Error fetching Chuck Norris fact:', error);
		}
	}

	function refreshJoke() {
		fetchChuckFact();
	}

	fetchChuckFact();
</script>

<h1>Chuck Norris fact of the day</h1>
<main>
	{#if $chuckFactJoke}
		<JokeDetails details={$chuckFactJoke} onRefresh={refreshJoke} />
	{:else}
		<p>Loading...</p>
	{/if}
	<Button onclick={refreshJoke}>Get new fact</Button>
</main>
