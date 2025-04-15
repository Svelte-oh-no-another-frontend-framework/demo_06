export async function loadChuckFact() {
    try {
        const response = await fetch('/api/joke?endpoint=chuckfact');
        if (!response.ok) {
            throw new Error('Failed to fetch Chuck Norris fact');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching Chuck Norris fact:', error);
    }
}

export async function loadRandomJokes(numberOfJokes: number) {
    try {
        const response = await fetch('/api/joke?endpoint=array&amount=' + numberOfJokes);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching jokes:', error);
    }
}