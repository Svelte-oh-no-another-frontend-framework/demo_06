import { writable } from 'svelte/store';
export const numberOfItems = writable(5);
export const counterValue = writable(0);