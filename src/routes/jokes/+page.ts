import type { PageLoad } from './$types';
import { loadRandomJokes } from '$utils/jokeHelper';
import { numberOfItems } from '$lib/stores/globalState';
import { get } from 'svelte/store';

let currentNumber = get(numberOfItems); 

export const load: PageLoad = async ({ fetch }) => {
    const response = await loadRandomJokes(currentNumber);
    const jokes = await response;
    return { jokes };
};