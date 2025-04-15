<script lang="ts">
	import { JokeDetails, Button } from '$lib';

	let { items = [], title, fetchItems, ...props } = $props();

	let selectJokeId = $state(-1);

	const selectedJoke = $derived(items.find((item) => item.id === selectJokeId) || null);

	function selectJoke(id: number) {
		selectJokeId = id;
	}

	function refresh() {
		fetchItems();
		selectJoke(-1);
	}
</script>

<section class="item-list default-margin">
	<h2 class="mb-l">{title} <Button onclick={() => refresh()}>Fetch new items</Button></h2>

	<div class="item-row">
		{#if items.length === 0}
			<p>No jokes available.</p>
		{:else}
			<ul>
				{#each items as item (item.id)}
					<li>
						<button
							class="item-title"
							class:selected-item-title={item.id === selectJokeId}
							aria-controls={`item-details-${item.id}`}
							aria-expanded={selectJokeId === item.id}
							onclick={() => selectJoke(item.id)}
						>
							<div class="image-container">
								<img
									src={item.image}
									alt={item.category}
									onload={() => handleLoad(item)}
									class:item-loaded={!item.loading}
								/>
							</div>
							<h3>{item.category} joke no {item.id}</h3>
						</button>
					</li>
				{/each}
			</ul>
		{/if}
		<div class="item-details">
			{#if items.length === 0}
				<p>No jokes available.</p>
			{:else if selectedJoke === null}
				<p>Select a joke to see the details.</p>
			{:else}
				<JokeDetails details={selectedJoke} />
			{/if}
		</div>
	</div>
</section>

<style>
	.item-list {
		padding: 0 0;
		margin-left: 2vw;
		margin-right: 20vw;
		max-width: 1150px;
	}

	.item-row {
		display: flex;
		justify-content: space-between;
	}

	.item-row ul {
		width: 40%;
	}

	.item-row button {
		display: flex;
		align-items: center;
		gap: 10px;
		padding: 10px 15px;
		cursor: pointer;
	}

	.item-details {
		width: 45%;
	}

	.item-title {
		border-bottom: 1px solid grey;
		width: 100%;
		display: block;
		padding: 12px;
		text-align: left;
	}

	.selected-item-title {
		background: black;
		color: white;
		border: none;
		box-shadow:
			0 4px 6px rgba(0, 0, 0, 0.1),
			0 1px 3px rgba(0, 0, 0.08);
	}

	.image-container {
		position: relative;
		width: 50px;
		height: 50px;
	}

	img {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		border: 3px solid purple;
		opacity: 1;
	}
</style>
