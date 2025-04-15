<script lang="ts">
    import { Button } from '$lib';
    import { counterValue } from '$lib/stores/globalState';
    import { get } from 'svelte/store';
    import { increment } from '$utils/publicCounter';

    let currentCount = get(counterValue); 
    async function handleIncrement() {
        await increment();
        currentCount = get(counterValue); 
    }
</script>

<main>
    <h1>Client side function demonstration</h1>
    <p>
        Funkcija koja računa novi broj je na klijentu
    </p>
    <p>Client counter: {currentCount}</p>
    <Button onclick={handleIncrement}>Add</Button>
</main>