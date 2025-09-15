import { html } from 'lit-html';
import { component, useState, useEffect } from 'haunted';
import { Store } from '../services/Store';
import { Toaster } from '../services/Toaster';

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

  @media print {
    /* Hide remove buttons in print */
    .list-item button {
      display: none !important;
    }
    .list {
      max-height: none !important;
      overflow: visible !important;
      border: none !important;
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
    // attach stylesheet to shadowRoot when mounted
    if (this.shadowRoot) {
      this.shadowRoot.adoptedStyleSheets = [sheet];
    }

    const printBtn = document.getElementById('print-btn');
    const clearBtn = document.getElementById('clear-btn');
    if (printBtn) printBtn.onclick = () => window.print();
    if (clearBtn) {
      clearBtn.onclick = () => {
        Store.clearShopping();
        Toaster.push('Shopping list cleared.');
      };
    }
  }, []);

  return html`
    <div class="list">
      ${items.length === 0
        ? html`<p class="small">No items yet — add some cocktails.</p>`
        : items.map(item => html`
          <div class="list-item">
            <div>${item.label}</div>
            <div>
              <button
                @click=${() => {
                  Store.removeShopping(item.key);
                  Toaster.push('Ingredient removed from shopping list.');
                }}>
                Remove
              </button>
            </div>
          </div>
        `)
      }
    </div>
  `;
}

customElements.define('shopping-list', component(ShoppingList));