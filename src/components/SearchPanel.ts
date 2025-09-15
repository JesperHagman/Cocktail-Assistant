import { html } from "lit-html";
import { component, useState, useEffect } from "haunted";
import { Store, Drink } from "../services/Store";
import { Toaster } from "../services/Toaster";

// Constructable stylesheet
const sheet = new CSSStyleSheet();
sheet.replaceSync(`
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
  }

  .search button {
    border-radius: 6px;
  }

  button {
  transition: background-color 0.2s ease, transform 0.1s ease, box-shadow 0.2s ease;
  }

  button:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* lifted */
  }

  button:active {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* flatter shadow */
  }
`);

function SearchPanel(this: HTMLElement) {
  const [q, setQ] = useState<string>("");

  // Attach stylesheet to shadow DOM when mounted
  useEffect(() => {
    if (this.shadowRoot) {
      this.shadowRoot.adoptedStyleSheets = [sheet];
    }
  }, []);

  async function doSearch(query?: string) {
    const searchQuery = (query ?? q).trim();
    if (!searchQuery) return;

    Toaster.push("Searching...");
    Store.setQuery(searchQuery);

    try {
      const res = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${encodeURIComponent(
          searchQuery
        )}`
      );
      const json = await res.json();

      if (!json.drinks) {
        Store.setResults([]);
        Toaster.push("No results found.");
      } else {
        Store.setResults(json.drinks as Drink[]);
        Toaster.push("Here are the results.");
      }
    } catch (err) {
      console.error(err);
      Store.setResults([]);
      Toaster.push("Search failed.");
    }
  }

  // Default search on mount
  useEffect(() => {
    doSearch("margarita");
  }, []);

  return html`
    <div class="search">
      <input
        type="search"
        placeholder="Search cocktails"
        .value=${q}
        @input=${(e: Event) => setQ((e.target as HTMLInputElement).value)}
        @keydown=${(e: KeyboardEvent) => e.key === "Enter" && doSearch()}
      />
      <button @click=${() => doSearch()}>Search</button>
    </div>
  `;
}

customElements.define("search-panel", component(SearchPanel));
