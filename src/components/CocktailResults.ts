import { html } from "lit-html";
import { component, useState, useEffect } from "haunted";
import { Store, DrinkDTO, extractIngredients } from "../services/Store";
import { Toaster } from "../services/Toaster";

const sheet = new CSSStyleSheet();
sheet.replaceSync(`
  .card {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
    transition: box-shadow 0.3s ease, transform 0.3s ease;
    overflow: hidden;
    min-height: 220px;
    margin-bottom: 16px;
  }

  .card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }

  .thumb {
    flex: 1 1 50%;
    max-width: 50%;
    overflow: hidden;
    aspect-ratio: 4 / 3;
  }

  .thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .meta {
    flex: 1 1 50%;
    max-width: 50%;
    display: flex;
    flex-direction: column;
    padding: 16px;
    gap: 8px;
  }

  .card-buttons {
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: auto;
  }

  .card-buttons button {
    border-radius: 6px;
    padding: 4px 8px;
  }
`);

function CocktailResults(this: HTMLElement) {
  const [results, setResults] = useState<DrinkDTO[]>(Store.results);

  useEffect(() => {
    if (this.shadowRoot) {
      this.shadowRoot.adoptedStyleSheets = [sheet];
    }

    const unsub = Store.subscribe(() => setResults([...Store.results]));
    return unsub;
  }, []);

  function addDrinkToShopping(drink: DrinkDTO) {
    const ingredients = extractIngredients(drink);
    if (ingredients.length === 0) {
      Toaster.push("No ingredients found in this recipe.");
      return;
    }
    Store.addToShopping(ingredients);
    Toaster.push("Ingredients added to shopping list.");
  }

  return html`
    ${results.length === 0
      ? html`<p class="small">No cocktails to show. Try searching for "margarita".</p>`
      : results.map(
          (drink) => html`
            <div class="card">
              <div class="thumb">
                <img src="${drink.strDrinkThumb ?? ""}" alt="${drink.strDrink ?? ""}" />
              </div>
              <div class="meta">
                <h3>${drink.strDrink}</h3>
                <div class="instructions">${drink.strInstructions ?? ""}</div>
                <div class="card-buttons">
                  <button @click=${() => addDrinkToShopping(drink)}>+ Add ingredients</button>
                </div>
              </div>
            </div>
          `
        )}
  `;
}

customElements.define("cocktail-results", component(CocktailResults));
