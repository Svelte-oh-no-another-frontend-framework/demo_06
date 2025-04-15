import type { PageLoad } from './$types';
import { counterValue } from '$lib/stores/globalState';
import { get } from 'svelte/store';

let currentCount = get(counterValue); 

export const load: PageLoad = async ({ fetch }) => {
    const currentCount =get(counterValue);
    return { currentCount };
};