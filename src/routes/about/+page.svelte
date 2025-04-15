<script lang="ts">
	import { Button } from '$lib';
	import { numberOfItems } from '$lib/stores/globalState';
	import { get } from 'svelte/store';

	let currentNumber = get(numberOfItems);

	function updateNumberOfItems(newNumber: number) {
		numberOfItems.set(newNumber);
		currentNumber = newNumber;
		console.log('call');
	}
</script>

<main>
	<h1>About Page</h1>
	<p>
		Welcome to the about page! This is a simple SvelteKit application created for Notch conference
		and demonstration purposes.
	</p>

	<p>
		It showcases the use of SvelteKit, TypeScript, and various components to create a dynamic and
		interactive user experience.
	</p>
	<br />
	<p>Current number of jokes: {currentNumber}</p>
	<input
		type="number"
		bind:value={currentNumber}
		on:input={() => updateNumberOfItems(currentNumber)}
	/>
	<br />
	<br />
	<Button onclick={() => updateNumberOfItems(currentNumber)}>Update</Button>
</main>
