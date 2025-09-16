export type Subscriber = () => void;

/** Ingredient keys allowed by TheCocktailDB (1–15) */
export type IngredientKeys =
  `strIngredient${1|2|3|4|5|6|7|8|9|10|11|12|13|14|15}`;

/** Raw DTO from API */
export type DrinkDTO = {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string | null;
  strInstructions: string | null;
} & {
  [key in IngredientKeys]?: string | null;
};


/** Internal clean domain model */
export interface Ingredient {
  name: string;
  measure: string | null;
}
export interface Drink {
  id: string;
  name: string;
  thumbnail: string | null;
  instructions: string | null;
  ingredients: Ingredient[];
}

export interface ShoppingItem {
  key: string;   // normalized, e.g. "tequila"
  label: string; // display, e.g. "Tequila"
}

class StoreClass {
  private _subscribers: Subscriber[] = [];
  public query = "";
  public results: Drink[] = [];   // ✅ store only clean Drinks
  public shopping: ShoppingItem[] = [];

  setQuery(q: string) {
    this.query = q;
    this._notify();
  }

  setResults(r: Drink[]) {
    this.results = r;
    this._notify();
  }

  addToShopping(items: ShoppingItem[]) {
    const existing = new Set(this.shopping.map((s) => s.key));
    for (const it of items) {
      if (!it.key) continue;
      if (!existing.has(it.key)) {
        existing.add(it.key);
        this.shopping.push(it);
      }
    }
    this._notify();
  }

  removeShopping(key: string) {
    this.shopping = this.shopping.filter((i) => i.key !== key);
    this._notify();
  }

  clearShopping() {
    this.shopping = [];
    this._notify();
  }

  subscribe(fn: Subscriber) {
    if (!this._subscribers.includes(fn)) {
      this._subscribers.push(fn);
    }
    return () => {
      this._subscribers = this._subscribers.filter((f) => f !== fn);
    };
  }

  private _notify() {
    this._subscribers.forEach((fn) => fn());
  }
}

export const Store = new StoreClass();
