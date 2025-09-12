import { html } from 'lit-html';
import { component, useState, useEffect } from 'haunted';
import { Toaster } from '../services/Toaster';

function AppToaster(this: HTMLElement) {
  const [msgs, setMsgs] = useState(Toaster.messages);

  useEffect(() => {
    const unsub = Toaster.subscribe(() => setMsgs([...Toaster.messages]));
    return unsub;
  }, []);

  return html`${msgs.map(m => html`<div class="toast">${m.text}</div>`)}`;
}

customElements.define('app-toaster', component(AppToaster));
