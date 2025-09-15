import { Subscriber } from "./Store";

class ToasterClass {
  private _subscribers: Subscriber[] = [];
  public messages: { id: number; text: string }[] = [];

  push(msg: string) {
    const m = { id: Date.now() + Math.random(), text: msg };
    this.messages.push(m);
    this._notify();
    setTimeout(() => {
      const idx = this.messages.findIndex((x) => x.id === m.id);
      if (idx >= 0) {
        this.messages.splice(idx, 1);
        this._notify();
      }
    }, 3200);
  }

  subscribe(fn: Subscriber) {
    this._subscribers.push(fn);
    return () => {
      const idx = this._subscribers.indexOf(fn);
      if (idx >= 0) this._subscribers.splice(idx, 1);
    };
  }

  private _notify() {
    this._subscribers.forEach((fn) => fn());
  }
}

export const Toaster = new ToasterClass();
