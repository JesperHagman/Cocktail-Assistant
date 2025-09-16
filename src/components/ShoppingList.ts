import { html } from "lit-html";
import { component, useState, useEffect } from "haunted";
import { Store } from "../services/Store";
import { Toaster } from "../services/Toaster";

// Constructable stylesheet with your existing CSS
const sheet = new CSSStyleSheet();
sheet.replaceSync(`
  .list {
    margin: 8px 0;
    max-height: calc(100vh - 220px);
    overflow: auto;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 8px;
    background: #fff;
  }

  .list-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    padding: 6px 0;
    border-bottom: 1px dashed #eee;
  }

  .list-item:last-child {
    border-bottom: none;
  }

  .list-item button {
    padding: 4px 8px;
    cursor: pointer;
    border-radius: 6px;
  }

  .actions {
    display: flex;
    gap: 8px;
    margin-top: 10px;
  }

  button {
  border-radius:6px;
  }

  @media print {
    /* Hide remove/clear/print buttons in print */
    .list-item button,
    .actions {
      display: none;
    }
    .list {
      max-height: none;
      overflow: visible;
      border: none;
    }
  }
`);

function ShoppingList(this: HTMLElement) {
  const [items, setItems] = useState(Store.shopping);

  useEffect(() => {
    const unsub = Store.subscribe(() => setItems([...Store.shopping]));
    return unsub;
  }, []);

  useEffect(() => {
    if (this.shadowRoot) {
      this.shadowRoot.adoptedStyleSheets = [sheet];
    }
  }, []);

  return html`
    <div class="list">
      ${items.length === 0
        ? html`<p class="small">No items yet — add some cocktails.</p>`
        : items.map(
            (item) => html`
              <div class="list-item">
                <div>${item.label}</div>
                <div>
                  <button
                    @click=${() => {
                      Store.removeShopping(item.key);
                      Toaster.push("Ingredient removed from shopping list.");
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            `
          )}
    </div>

    <div class="actions">
      <button @click=${() => window.print()}>Print</button>
      <button
        @click=${() => {
          Store.clearShopping();
          Toaster.push("Shopping list cleared.");
        }}
      >
        Clear
      </button>
    </div>
  `;
}

customElements.define("shopping-list", component(ShoppingList));
