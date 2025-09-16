import { html } from "lit-html";
import { component, useState, useEffect } from "haunted";
import { Toaster } from "../services/Toaster";

function AppToaster(this: HTMLElement) {
  const [msgs, setMsgs] = useState(Toaster.messages);

  useEffect(() => {
    const unsub = Toaster.subscribe(() => setMsgs([...Toaster.messages]));
    return unsub;
  }, []);

  return html`
    <style>
      .toaster-box {
        background: white;
        padding: 8px 12px;
        border-radius: 8px;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
      }

      .toast {
        padding: 8px 10px;
        border-radius: 6px;
        margin: 6px 0;
        opacity: 0.95;
      }
    </style>

    ${msgs.length > 0
      ? html`
          <div class="toaster-box">
            ${msgs.map((m) => html`<div class="toast">${m.text}</div>`)}
          </div>
        `
      : null}
  `;
}

customElements.define("app-toaster", component(AppToaster));
