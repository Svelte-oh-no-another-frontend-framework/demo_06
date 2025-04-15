<script lang="ts">
	import { List } from '$lib';
	import { numberOfItems } from '$lib/stores/globalState';
import { get } from 'svelte/store';

let currentNumber = get(numberOfItems); 

	import { loadRandomJokes } from '$utils/jokeHelper';
	export let data;
	async function handleRefreshJoke() {
		const response = await loadRandomJokes(currentNumber);
		data.jokes = response;
	}
	
</script>

<main>
	<h1>Jokes List</h1>
	<List title="Daily jokes" items={data.jokes} fetchItems={handleRefreshJoke} />
</main>
