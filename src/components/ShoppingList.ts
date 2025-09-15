import { html } from 'lit-html';
import { component, useState, useEffect } from 'haunted';
import { Store } from '../services/Store';
import { Toaster } from '../services/Toaster';

function ShoppingList(this: HTMLElement) {
  const [items, setItems] = useState(Store.shopping);

  useEffect(() => {
    const unsub = Store.subscribe(() => setItems([...Store.shopping]));
    return unsub;
  }, []);

  useEffect(() => {
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
    <style>
      .shopping {
        background: white;
        padding: 12px;
        border-radius: 8px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.06);
        height: max-content;
      }

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
        font-size: 14px;
      }

    </style>

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
