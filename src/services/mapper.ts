import { DrinkDTO, IngredientKeys, Drink } from "../services/Store";

const MAX_INGREDIENTS = 15;

export function mapDrink(dto: DrinkDTO): Drink {
  const ingredients = [];
  for (let i = 1; i <= MAX_INGREDIENTS; i++) {
    const key = `strIngredient${i}` as IngredientKeys; // ✅ now works
    const name = dto[key];
    if (!name || !name.trim()) continue;
    ingredients.push({ name: name.trim(), measure: null });
  }
  return {
    id: dto.idDrink,
    name: dto.strDrink,
    thumbnail: dto.strDrinkThumb,
    instructions: dto.strInstructions,
    ingredients,
  };
}
