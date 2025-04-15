import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import type { Joke, JokeCategory } from '$types';

const BASE_URL = 'https://v2.jokeapi.dev/joke';
const CHUCK_URL = 'https://api.chucknorris.io/jokes';

// Handle GET requests
export const GET: RequestHandler = async ({ url }) => {
    const endpoint = url.searchParams.get('endpoint') || 'random';
    const category = url.searchParams.get('category') as JokeCategory || 'Any';	
    const amount = url.searchParams.get('amount') || '1';

    try {
        let apiUrl = '';

        switch (endpoint) {
            case 'random':
                apiUrl = `${BASE_URL}/Any?amount=1`;
                break;
            case 'category':
                if (!category) {
                    return json({ error: 'Invalid category' }, { status: 400 });
                }
                apiUrl = `${BASE_URL}/${category}?amount=1`;
                break;
            case 'array':
                apiUrl = `${BASE_URL}/Any?amount=${amount}`;
                break;
            case 'array-category':
                if (!category) {
                    return json({ error: 'Invalid category' }, { status: 400 });
                }
                apiUrl = `${BASE_URL}/${category}?amount=${amount}`;
                break;
            case 'chuckfact':
                apiUrl = `${CHUCK_URL}/random`;
                break;
            default:
                return json({ error: 'Invalid endpoint' }, { status: 400 });
        }

        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.statusText}`);
        }

        const responseData = await response.json();

        // Handle Chuck Norris fact separately
        if (endpoint === 'chuckfact') {
            const joke: Joke = {
                id: -1,
                type: 'single',
                joke: responseData.value,
                category: 'Chuck Norris',
                image: responseData.icon_url,
            };
            return json(joke);
        }

        // Handle other endpoints
        const jokes = endpoint === 'random' || endpoint === 'category' ? responseData : responseData.jokes;

        // Populate the image property for each joke
        if (Array.isArray(jokes)) {
            jokes.forEach((joke: Joke) => {
                joke.image = `https://robohash.org/${joke.id}${joke.category}`;
            });
        } else if (jokes) {
            jokes.image = `https://robohash.org/${jokes.id}${jokes.category}`;
        }

        return json(jokes);
    } catch (error) {
        console.error(`Error fetching data for endpoint "${endpoint}":`, error);
        return json({ error: `Failed to fetch data for endpoint "${endpoint}"` }, { status: 500 });
    }
};
