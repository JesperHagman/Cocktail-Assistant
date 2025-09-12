export type Subscriber = () => void;

export interface Drink {
  idDrink?: string;
  strDrink?: string;
  strDrinkThumb?: string | null;
  strInstructions?: string | null;
  [key: string]: any;
}

class StoreClass {
  private _subscribers: Subscriber[] = [];
  public query = '';
  public results: Drink[] = [];
  public shopping: string[] = [];

  setQuery(q: string) {
    this.query = q;
    this._notify();
  }

  setResults(r: Drink[]) {
    this.results = r;
    this._notify();
  }

  addToShopping(items: string[]) {
    const normalize = (s: string) => s.trim().toLowerCase();
    const existing = new Set(this.shopping.map(normalize));
    items.forEach(it => {
      const n = normalize(it);
      if (n && !existing.has(n)) {
        existing.add(n);
        this.shopping.push(it.trim());
      }
    });
    this._notify();
  }

  removeShopping(item: string) {
    const idx = this.shopping.findIndex(i => i.trim().toLowerCase() === item.trim().toLowerCase());
    if (idx >= 0) this.shopping.splice(idx, 1);
    this._notify();
  }

  clearShopping() {
    this.shopping = [];
    this._notify();
  }

  subscribe(fn: Subscriber) {
    this._subscribers.push(fn);
    return () => {
      const idx = this._subscribers.indexOf(fn);
      if (idx >= 0) this._subscribers.splice(idx, 1);
    };
  }

  private _notify() {
    this._subscribers.forEach(fn => fn());
  }
}

export const Store = new StoreClass();

// reusable helper to extract ingredients
export function extractIngredients(d: Drink): string[] {
  const list: string[] = [];
  for (let i = 1; i <= 15; i++) {
    const name = d[`strIngredient${i}`];
    const measure = d[`strMeasure${i}`];
    if (name && String(name).trim()) {
      list.push((measure ? String(measure).trim() + ' ' : '') + String(name).trim());
    }
  }
  return list;
}
