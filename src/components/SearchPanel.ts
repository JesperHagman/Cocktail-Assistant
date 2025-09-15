import { html } from 'lit-html';
import { component, useState, useEffect } from 'haunted';
import { Store, Drink } from '../services/Store';
import { Toaster } from '../services/Toaster';

function SearchPanel(this: HTMLElement) {
  const [q, setQ] = useState<string>('');

  // Fetch function
  async function doSearch(query?: string) {
    const searchQuery = (query ?? q).trim();
    if (!searchQuery) return;

    Toaster.push('Searching...');
    Store.setQuery(searchQuery);

    try {
      const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${encodeURIComponent(searchQuery)}`);
      const json = await res.json();

      if (!json.drinks) {
        Store.setResults([]);
        Toaster.push('No results found.');
      } else {
        Store.setResults(json.drinks as Drink[]);
        Toaster.push('Here are the results.');
      }
    } catch (err) {
      console.error(err);
      Store.setResults([]);
      Toaster.push('Search failed.');
    }
  }

  // Run on mount: fetch default drinks
  useEffect(() => {
    doSearch('margarita'); // default search on page load
  }, []);

  return html`
    <style>
    .search {
      display: flex;
      gap: 8px;
      width: 100%;
    }
    .search input[type="search"] {
      flex: 1;
      padding: 10px 12px;
      border-radius: 6px;
      border: 1px solid #ddd;
      font-size: 16px;
    }
    </style>

    <div class="search">
      <input
        type="search"
        placeholder="Search cocktails"
        .value=${q}
        @input=${(e: Event) => setQ((e.target as HTMLInputElement).value)}
        @keydown=${(e: KeyboardEvent) => e.key === 'Enter' && doSearch()}
      />
      <button @click=${() => doSearch()}>Search</button>
    </div>
  `;
}

customElements.define('search-panel', component(SearchPanel));