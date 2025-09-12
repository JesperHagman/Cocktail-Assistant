import { html } from 'lit-html';
import { component, useState, useEffect } from 'haunted';
import { Store } from '../services/Store';
import { Toaster } from '../services/Toaster';

function ShoppingList(this: HTMLElement) {
  const [items, setItems] = useState<string[]>(Store.shopping);

  useEffect(() => {
    const unsub = Store.subscribe(() => setItems([...Store.shopping]));
    return unsub;
  }, []);

  useEffect(() => {
    const printBtn = document.getElementById('print-btn');
    const clearBtn = document.getElementById('clear-btn');
    if (printBtn) printBtn.onclick = () => window.print();
    if (clearBtn) clearBtn.onclick = () => { Store.clearShopping(); Toaster.push('Shopping list cleared.'); };
  }, []);

  return html`
    <div class="list">
      ${items.length === 0
        ? html`<p class="small">No items yet — add some cocktails.</p>`
        : items.map(i => html`
          <div class="list-item">
            <div>${i}</div>
            <div><button @click=${() => { Store.removeShopping(i); Toaster.push('Ingredient removed from shopping list.'); }}>Remove</button></div>
          </div>
        `)
      }
    </div>
  `;
}

customElements.define('shopping-list', component(ShoppingList));
