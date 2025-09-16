export type Subscriber = () => void;

/** Ingredient keys allowed by TheCocktailDB (1–15) */
type IngredientKeys = `strIngredient${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15}`;

/** Raw DTO from API */
export type DrinkDTO = {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string | null;
  strInstructions: string | null;
} & {
  [key in IngredientKeys]?: string | null;
};

/** Internal simplified type */
export interface ShoppingItem {
  /** normalized ingredient name, e.g. "tequila" */
  key: string;
  /** display label, e.g. "Tequila" */
  label: string;
}

class StoreClass {
  private _subscribers: Subscriber[] = [];
  public query = "";
  public results: DrinkDTO[] = [];
  public shopping: ShoppingItem[] = [];

  setQuery(q: string) {
    this.query = q;
    this._notify();
  }

  setResults(r: DrinkDTO[]) {
    this.results = r;
    this._notify();
  }

  /** Dedup by ingredient name (key), show only the name (label) */
  addToShopping(items: ShoppingItem[]) {
    const existing = new Set(this.shopping.map((s) => s.key));
    for (const it of items) {
      if (!it.key) continue;
      if (!existing.has(it.key)) {
        existing.add(it.key);
        this.shopping.push({ key: it.key, label: it.label });
      }
    }
    this._notify();
  }

  removeShopping(key: string) {
    const idx = this.shopping.findIndex((i) => i.key === key);
    if (idx >= 0) this.shopping.splice(idx, 1);
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
      const idx = this._subscribers.indexOf(fn);
      if (idx >= 0) this._subscribers.splice(idx, 1);
    };
  }

  private _notify() {
    this._subscribers.forEach((fn) => fn());
  }
}

export const Store = new StoreClass();

/** Extract ingredients as ShoppingItem[], dropping measures */
export function extractIngredients(d: DrinkDTO): ShoppingItem[] {
  const out: ShoppingItem[] = [];
  for (let i = 1; i <= 15; i++) {
    const keyName = `strIngredient${i}` as keyof DrinkDTO;
    const name = d[keyName];
    if (!name || !String(name).trim()) continue;

    const cleanName = String(name).trim();
    const key = cleanName.toLowerCase();
    const label = cleanName;

    out.push({ key, label });
  }
  return out;
}
