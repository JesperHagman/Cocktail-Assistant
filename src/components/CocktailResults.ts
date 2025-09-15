import { html } from "lit-html";
import { component, useState, useEffect } from "haunted";
import { Store, Drink, extractIngredients } from "../services/Store";
import { Toaster } from "../services/Toaster";

function CocktailResults(this: HTMLElement) {
  const [results, setResults] = useState<Drink[]>(Store.results);

  useEffect(() => {
    const unsub = Store.subscribe(() => setResults([...Store.results]));
    return unsub;
  }, []);

  function addDrinkToShopping(drink: Drink) {
    const ingredients = extractIngredients(drink); // returns ShoppingItem[]
    if (ingredients.length === 0) {
      Toaster.push("No ingredients found in this recipe.");
      return;
    }
    Store.addToShopping(ingredients);
    Toaster.push("Ingredients added to shopping list.");
  }

  return html`
    ${results.length === 0
      ? html`<p class="small">
          No cocktails to show. Try searching for "margarita".
        </p>`
      : results.map(
          (drink) => html`
            <div class="card">
              <div class="thumb">
                <img
                  src="${drink.strDrinkThumb ?? ""}"
                  alt="${drink.strDrink ?? ""}"
                />
              </div>
              <div class="meta">
                <h3>${drink.strDrink}</h3>
                <div class="instructions">${drink.strInstructions ?? ""}</div>
                <div class="card-buttons">
                  <button @click=${() => addDrinkToShopping(drink)}>
                    + Add ingredients
                  </button>
                </div>
              </div>
            </div>
          `
        )}
  `;
}

// Disable Shadow DOM so we can style with global main.css
customElements.define(
  "cocktail-results",
  component(CocktailResults, { useShadowDOM: false })
);
