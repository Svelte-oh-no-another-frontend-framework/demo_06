import { counterValue } from '$lib/stores/globalState';
import { get } from 'svelte/store';

export async function increment() {
    console.log("im incrementing the counter on the client");
    let currentNumber = get(counterValue);
    let newNumber = currentNumber +1;
    counterValue.set(newNumber);

}