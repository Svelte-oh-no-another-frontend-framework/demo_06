import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
    const response = await fetch('/api/privateCounter');
    const data = await response.json();
    return { counter: data.counter };
};