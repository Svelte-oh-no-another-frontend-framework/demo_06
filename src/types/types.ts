import type { JokeCategory } from "./enums";

export type Joke = {
    id: number;
    type: 'single' | 'twopart';
    joke?: string;
    setup?: string;
    delivery?: string;
    category?: string;    
    image?: string;
  };

export type Category = {
    name: string;
    value: JokeCategory; // Use the enum here
  };