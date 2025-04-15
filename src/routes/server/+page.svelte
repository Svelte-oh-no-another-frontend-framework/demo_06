<script lang="ts">
    import { Button } from '$lib';
    export let data; 
    let currentCount: number = data.counter; 

    console.log('Initial data from server:', data);
    console.log('Initial currentCount:', currentCount);

    async function addOnServer() {
        try {
            const response = await fetch('/api/privateCounter', {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const responseData = await response.json();
            console.log('New count from server:', responseData.new);
            currentCount = responseData.new; 
        } catch (error) {
            console.error('Error fetching new count:', error);
        }
    }
</script>

<main>
    <h1>Server side function demonstration</h1>
    <p>
        Funkcija koja računa novi broj je na serveru
    </p>
    {#if currentCount !== null}
        <p>Server counter: {currentCount}</p>
        <Button onclick={addOnServer}>Add</Button>
    {:else}
        <p>Loading...</p>
    {/if}
</main>
