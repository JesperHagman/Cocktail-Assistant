import { Drink } from './Store';

const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1';

export async function searchCocktails(query: string): Promise<Drink[]> {
  const res = await fetch(`${BASE_URL}/search.php?s=${encodeURIComponent(query)}`);
  const json = await res.json();
  return json.drinks ?? [];
}
