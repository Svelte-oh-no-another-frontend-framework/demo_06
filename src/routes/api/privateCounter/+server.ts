import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { increment, getCounter } from '$utils/privateCounter.server';

export const GET: RequestHandler = async () => {
    const currentNumber = getCounter(); 
    return json({ counter: currentNumber });
};

export const POST: RequestHandler = async () => {
    const currentNumber = getCounter(); 
    const newNumber = await increment(); 
    return json({ old: currentNumber, new: newNumber });
};