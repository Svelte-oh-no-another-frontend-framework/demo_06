// In-memory storage for the counter value
let counterValue = 0;

export async function increment() {
    console.log("im incrementing the counter on the server");
    counterValue += 1; 
    return counterValue; 
}

export function getCounter() {
    return counterValue; 
}