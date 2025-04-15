<script lang="ts">
	let { details } = $props();
</script>

<section>
	<div class="joke-container">
		<div class="joke-character">
			<img id={details.id} src={details.image} alt={details.category} />
		</div>
		<div class="joke-content">
			{#if details.category === 'Chuck Norris'}
				<h3 class="chapter-strapline italic mb-s">
					{details.joke}
				</h3>
			{:else if details.type === 'single'}
				<p>{details.joke}</p>
			{:else}
				<strong>{details.setup}</strong>
				<br />
				<p>{details.delivery}</p>
			{/if}
		</div>
	</div>
</section>

<style>
	.joke-container {
		display: flex;
		align-items: center;
		gap: 15px;
	}

	.joke-character img {
		width: 100px;
		height: 100px;
		border-radius: 50%;
		border: 3px solid purple;
	}

	.joke-content {
		position: relative;
		background-color: #f0f0f0;
		padding: 10px 15px;
		border-radius: 10px;
		max-width: 300px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		border: 3px solid #purple;
	}
</style>
