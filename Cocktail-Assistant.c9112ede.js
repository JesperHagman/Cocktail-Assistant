// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"eZFTg":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "9eacdeebc9112ede";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"9Fk10":[function(require,module,exports,__globalThis) {
// src/app.ts
var _searchPanel = require("./components/SearchPanel");
var _cocktailResults = require("./components/CocktailResults");
var _shoppingList = require("./components/ShoppingList");
var _appToaster = require("./components/AppToaster");

},{"./components/SearchPanel":"jQc89","./components/CocktailResults":"eYwB0","./components/ShoppingList":"8TNTQ","./components/AppToaster":"iL5hM"}],"jQc89":[function(require,module,exports,__globalThis) {
var _litHtml = require("lit-html");
var _haunted = require("haunted");
var _store = require("../services/Store");
var _toaster = require("../services/Toaster");
var _api = require("../services/api");
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
    border-radius: 6px; /* keep this if search buttons need special rounding */
  }
`);
function SearchPanel() {
    const [q, setQ] = (0, _haunted.useState)("");
    // Attach stylesheet to shadow DOM when mounted
    (0, _haunted.useEffect)(()=>{
        if (this.shadowRoot) this.shadowRoot.adoptedStyleSheets = [
            sheet
        ];
    }, []);
    async function doSearch(query) {
        const searchQuery = (query ?? q).trim();
        if (!searchQuery) return;
        (0, _toaster.Toaster).push('Searching...');
        (0, _store.Store).setQuery(searchQuery);
        try {
            const drinks = await (0, _api.searchCocktails)(searchQuery);
            (0, _store.Store).setResults(drinks);
            (0, _toaster.Toaster).push(drinks.length ? 'Here are the results.' : 'No results found.');
        } catch (err) {
            console.error(err);
            (0, _store.Store).setResults([]);
            (0, _toaster.Toaster).push('Search failed.');
        }
    }
    // Default search on mount
    (0, _haunted.useEffect)(()=>{
        doSearch("margarita");
    }, []);
    return (0, _litHtml.html)`
    <div class="search">
      <input
        type="search"
        placeholder="Search cocktails"
        .value=${q}
        @input=${(e)=>setQ(e.target.value)}
        @keydown=${(e)=>e.key === "Enter" && doSearch()}
      />
      <button @click=${()=>doSearch()}>Search</button>
    </div>
  `;
}
customElements.define("search-panel", (0, _haunted.component)(SearchPanel));

},{"lit-html":"l15as","haunted":"afv1t","../services/Store":"1aP41","../services/Toaster":"bOIxB","../services/api":"2B9zK"}],"l15as":[function(require,module,exports,__globalThis) {
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_$LH", ()=>j);
parcelHelpers.export(exports, "html", ()=>x);
parcelHelpers.export(exports, "noChange", ()=>T);
parcelHelpers.export(exports, "nothing", ()=>A);
parcelHelpers.export(exports, "render", ()=>D);
parcelHelpers.export(exports, "svg", ()=>b);
var t;
const i = window, s = i.trustedTypes, e = s ? s.createPolicy("lit-html", {
    createHTML: (t)=>t
}) : void 0, o = "$lit$", n = `lit$${(Math.random() + "").slice(9)}$`, l = "?" + n, h = `<${l}>`, r = document, u = ()=>r.createComment(""), d = (t)=>null === t || "object" != typeof t && "function" != typeof t, c = Array.isArray, v = (t)=>c(t) || "function" == typeof (null == t ? void 0 : t[Symbol.iterator]), a = "[ \t\n\f\r]", f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, _ = /-->/g, m = />/g, p = RegExp(`>|${a}(?:([^\\s"'>=/]+)(${a}*=${a}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), g = /'/g, $ = /"/g, y = /^(?:script|style|textarea|title)$/i, w = (t)=>(i, ...s)=>({
            _$litType$: t,
            strings: i,
            values: s
        }), x = w(1), b = w(2), T = Symbol.for("lit-noChange"), A = Symbol.for("lit-nothing"), E = new WeakMap, C = r.createTreeWalker(r, 129, null, !1);
function P(t, i) {
    if (!Array.isArray(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== e ? e.createHTML(i) : i;
}
const V = (t, i)=>{
    const s = t.length - 1, e = [];
    let l, r = 2 === i ? "<svg>" : "", u = f;
    for(let i = 0; i < s; i++){
        const s = t[i];
        let d, c, v = -1, a = 0;
        for(; a < s.length && (u.lastIndex = a, c = u.exec(s), null !== c);)a = u.lastIndex, u === f ? "!--" === c[1] ? u = _ : void 0 !== c[1] ? u = m : void 0 !== c[2] ? (y.test(c[2]) && (l = RegExp("</" + c[2], "g")), u = p) : void 0 !== c[3] && (u = p) : u === p ? ">" === c[0] ? (u = null != l ? l : f, v = -1) : void 0 === c[1] ? v = -2 : (v = u.lastIndex - c[2].length, d = c[1], u = void 0 === c[3] ? p : '"' === c[3] ? $ : g) : u === $ || u === g ? u = p : u === _ || u === m ? u = f : (u = p, l = void 0);
        const w = u === p && t[i + 1].startsWith("/>") ? " " : "";
        r += u === f ? s + h : v >= 0 ? (e.push(d), s.slice(0, v) + o + s.slice(v) + n + w) : s + n + (-2 === v ? (e.push(void 0), i) : w);
    }
    return [
        P(t, r + (t[s] || "<?>") + (2 === i ? "</svg>" : "")),
        e
    ];
};
class N {
    constructor({ strings: t, _$litType$: i }, e){
        let h;
        this.parts = [];
        let r = 0, d = 0;
        const c = t.length - 1, v = this.parts, [a, f] = V(t, i);
        if (this.el = N.createElement(a, e), C.currentNode = this.el.content, 2 === i) {
            const t = this.el.content, i = t.firstChild;
            i.remove(), t.append(...i.childNodes);
        }
        for(; null !== (h = C.nextNode()) && v.length < c;){
            if (1 === h.nodeType) {
                if (h.hasAttributes()) {
                    const t = [];
                    for (const i of h.getAttributeNames())if (i.endsWith(o) || i.startsWith(n)) {
                        const s = f[d++];
                        if (t.push(i), void 0 !== s) {
                            const t = h.getAttribute(s.toLowerCase() + o).split(n), i = /([.?@])?(.*)/.exec(s);
                            v.push({
                                type: 1,
                                index: r,
                                name: i[2],
                                strings: t,
                                ctor: "." === i[1] ? H : "?" === i[1] ? L : "@" === i[1] ? z : k
                            });
                        } else v.push({
                            type: 6,
                            index: r
                        });
                    }
                    for (const i of t)h.removeAttribute(i);
                }
                if (y.test(h.tagName)) {
                    const t = h.textContent.split(n), i = t.length - 1;
                    if (i > 0) {
                        h.textContent = s ? s.emptyScript : "";
                        for(let s = 0; s < i; s++)h.append(t[s], u()), C.nextNode(), v.push({
                            type: 2,
                            index: ++r
                        });
                        h.append(t[i], u());
                    }
                }
            } else if (8 === h.nodeType) {
                if (h.data === l) v.push({
                    type: 2,
                    index: r
                });
                else {
                    let t = -1;
                    for(; -1 !== (t = h.data.indexOf(n, t + 1));)v.push({
                        type: 7,
                        index: r
                    }), t += n.length - 1;
                }
            }
            r++;
        }
    }
    static createElement(t, i) {
        const s = r.createElement("template");
        return s.innerHTML = t, s;
    }
}
function S(t, i, s = t, e) {
    var o, n, l, h;
    if (i === T) return i;
    let r = void 0 !== e ? null === (o = s._$Co) || void 0 === o ? void 0 : o[e] : s._$Cl;
    const u = d(i) ? void 0 : i._$litDirective$;
    return (null == r ? void 0 : r.constructor) !== u && (null === (n = null == r ? void 0 : r._$AO) || void 0 === n || n.call(r, !1), void 0 === u ? r = void 0 : (r = new u(t), r._$AT(t, s, e)), void 0 !== e ? (null !== (l = (h = s)._$Co) && void 0 !== l ? l : h._$Co = [])[e] = r : s._$Cl = r), void 0 !== r && (i = S(t, r._$AS(t, i.values), r, e)), i;
}
class M {
    constructor(t, i){
        this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
    }
    get parentNode() {
        return this._$AM.parentNode;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    u(t) {
        var i;
        const { el: { content: s }, parts: e } = this._$AD, o = (null !== (i = null == t ? void 0 : t.creationScope) && void 0 !== i ? i : r).importNode(s, !0);
        C.currentNode = o;
        let n = C.nextNode(), l = 0, h = 0, u = e[0];
        for(; void 0 !== u;){
            if (l === u.index) {
                let i;
                2 === u.type ? i = new R(n, n.nextSibling, this, t) : 1 === u.type ? i = new u.ctor(n, u.name, u.strings, this, t) : 6 === u.type && (i = new Z(n, this, t)), this._$AV.push(i), u = e[++h];
            }
            l !== (null == u ? void 0 : u.index) && (n = C.nextNode(), l++);
        }
        return C.currentNode = r, o;
    }
    v(t) {
        let i = 0;
        for (const s of this._$AV)void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
    }
}
class R {
    constructor(t, i, s, e){
        var o;
        this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cp = null === (o = null == e ? void 0 : e.isConnected) || void 0 === o || o;
    }
    get _$AU() {
        var t, i;
        return null !== (i = null === (t = this._$AM) || void 0 === t ? void 0 : t._$AU) && void 0 !== i ? i : this._$Cp;
    }
    get parentNode() {
        let t = this._$AA.parentNode;
        const i = this._$AM;
        return void 0 !== i && 11 === (null == t ? void 0 : t.nodeType) && (t = i.parentNode), t;
    }
    get startNode() {
        return this._$AA;
    }
    get endNode() {
        return this._$AB;
    }
    _$AI(t, i = this) {
        t = S(this, t, i), d(t) ? t === A || null == t || "" === t ? (this._$AH !== A && this._$AR(), this._$AH = A) : t !== this._$AH && t !== T && this._(t) : void 0 !== t._$litType$ ? this.g(t) : void 0 !== t.nodeType ? this.$(t) : v(t) ? this.T(t) : this._(t);
    }
    k(t) {
        return this._$AA.parentNode.insertBefore(t, this._$AB);
    }
    $(t) {
        this._$AH !== t && (this._$AR(), this._$AH = this.k(t));
    }
    _(t) {
        this._$AH !== A && d(this._$AH) ? this._$AA.nextSibling.data = t : this.$(r.createTextNode(t)), this._$AH = t;
    }
    g(t) {
        var i;
        const { values: s, _$litType$: e } = t, o = "number" == typeof e ? this._$AC(t) : (void 0 === e.el && (e.el = N.createElement(P(e.h, e.h[0]), this.options)), e);
        if ((null === (i = this._$AH) || void 0 === i ? void 0 : i._$AD) === o) this._$AH.v(s);
        else {
            const t = new M(o, this), i = t.u(this.options);
            t.v(s), this.$(i), this._$AH = t;
        }
    }
    _$AC(t) {
        let i = E.get(t.strings);
        return void 0 === i && E.set(t.strings, i = new N(t)), i;
    }
    T(t) {
        c(this._$AH) || (this._$AH = [], this._$AR());
        const i = this._$AH;
        let s, e = 0;
        for (const o of t)e === i.length ? i.push(s = new R(this.k(u()), this.k(u()), this, this.options)) : s = i[e], s._$AI(o), e++;
        e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
    }
    _$AR(t = this._$AA.nextSibling, i) {
        var s;
        for(null === (s = this._$AP) || void 0 === s || s.call(this, !1, !0, i); t && t !== this._$AB;){
            const i = t.nextSibling;
            t.remove(), t = i;
        }
    }
    setConnected(t) {
        var i;
        void 0 === this._$AM && (this._$Cp = t, null === (i = this._$AP) || void 0 === i || i.call(this, t));
    }
}
class k {
    constructor(t, i, s, e, o){
        this.type = 1, this._$AH = A, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = o, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String), this.strings = s) : this._$AH = A;
    }
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t, i = this, s, e) {
        const o = this.strings;
        let n = !1;
        if (void 0 === o) t = S(this, t, i, 0), n = !d(t) || t !== this._$AH && t !== T, n && (this._$AH = t);
        else {
            const e = t;
            let l, h;
            for(t = o[0], l = 0; l < o.length - 1; l++)h = S(this, e[s + l], i, l), h === T && (h = this._$AH[l]), n || (n = !d(h) || h !== this._$AH[l]), h === A ? t = A : t !== A && (t += (null != h ? h : "") + o[l + 1]), this._$AH[l] = h;
        }
        n && !e && this.j(t);
    }
    j(t) {
        t === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t ? t : "");
    }
}
class H extends k {
    constructor(){
        super(...arguments), this.type = 3;
    }
    j(t) {
        this.element[this.name] = t === A ? void 0 : t;
    }
}
const I = s ? s.emptyScript : "";
class L extends k {
    constructor(){
        super(...arguments), this.type = 4;
    }
    j(t) {
        t && t !== A ? this.element.setAttribute(this.name, I) : this.element.removeAttribute(this.name);
    }
}
class z extends k {
    constructor(t, i, s, e, o){
        super(t, i, s, e, o), this.type = 5;
    }
    _$AI(t, i = this) {
        var s;
        if ((t = null !== (s = S(this, t, i, 0)) && void 0 !== s ? s : A) === T) return;
        const e = this._$AH, o = t === A && e !== A || t.capture !== e.capture || t.once !== e.once || t.passive !== e.passive, n = t !== A && (e === A || o);
        o && this.element.removeEventListener(this.name, this, e), n && this.element.addEventListener(this.name, this, t), this._$AH = t;
    }
    handleEvent(t) {
        var i, s;
        "function" == typeof this._$AH ? this._$AH.call(null !== (s = null === (i = this.options) || void 0 === i ? void 0 : i.host) && void 0 !== s ? s : this.element, t) : this._$AH.handleEvent(t);
    }
}
class Z {
    constructor(t, i, s){
        this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t) {
        S(this, t);
    }
}
const j = {
    O: o,
    P: n,
    A: l,
    C: 1,
    M: V,
    L: M,
    R: v,
    D: S,
    I: R,
    V: k,
    H: L,
    N: z,
    U: H,
    F: Z
}, B = i.litHtmlPolyfillSupport;
null == B || B(N, R), (null !== (t = i.litHtmlVersions) && void 0 !== t ? t : i.litHtmlVersions = []).push("2.8.0");
const D = (t, i, s)=>{
    var e, o;
    const n = null !== (e = null == s ? void 0 : s.renderBefore) && void 0 !== e ? e : i;
    let l = n._$litPart$;
    if (void 0 === l) {
        const t = null !== (o = null == s ? void 0 : s.renderBefore) && void 0 !== o ? o : null;
        n._$litPart$ = l = new R(i.insertBefore(u(), t), t, void 0, null != s ? s : {});
    }
    return l._$AI(t), l;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"afv1t":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "html", ()=>(0, _litHaunted.html));
parcelHelpers.export(exports, "render", ()=>(0, _litHaunted.render));
parcelHelpers.export(exports, "component", ()=>(0, _litHaunted.component));
parcelHelpers.export(exports, "createContext", ()=>(0, _litHaunted.createContext));
parcelHelpers.export(exports, "virtual", ()=>(0, _litHaunted.virtual));
parcelHelpers.export(exports, "default", ()=>(0, _coreDefault.default));
var _litHaunted = require("./lit-haunted");
var _core = require("./core");
parcelHelpers.exportAll(_core, exports);
var _coreDefault = parcelHelpers.interopDefault(_core);

},{"./lit-haunted":"a1XsS","./core":"1HAvh","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"a1XsS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "component", ()=>component);
parcelHelpers.export(exports, "createContext", ()=>createContext);
parcelHelpers.export(exports, "virtual", ()=>virtual);
parcelHelpers.export(exports, "html", ()=>(0, _litHtml.html));
parcelHelpers.export(exports, "render", ()=>(0, _litHtml.render));
var _litHtml = require("lit-html");
var _core = require("./core");
var _coreDefault = parcelHelpers.interopDefault(_core);
var _virtual = require("./virtual");
const { component, createContext } = (0, _coreDefault.default)({
    render: (0, _litHtml.render)
});
const virtual = (0, _virtual.makeVirtual)();

},{"lit-html":"7JyoS","./core":"1HAvh","./virtual":"3ZLoq","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7JyoS":[function(require,module,exports,__globalThis) {
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_$LH", ()=>Z);
parcelHelpers.export(exports, "html", ()=>x);
parcelHelpers.export(exports, "mathml", ()=>w);
parcelHelpers.export(exports, "noChange", ()=>T);
parcelHelpers.export(exports, "nothing", ()=>E);
parcelHelpers.export(exports, "render", ()=>B);
parcelHelpers.export(exports, "svg", ()=>b);
const t = globalThis, i = t.trustedTypes, s = i ? i.createPolicy("lit-html", {
    createHTML: (t)=>t
}) : void 0, e = "$lit$", h = `lit$${Math.random().toFixed(9).slice(2)}$`, o = "?" + h, n = `<${o}>`, r = document, l = ()=>r.createComment(""), c = (t)=>null === t || "object" != typeof t && "function" != typeof t, a = Array.isArray, u = (t)=>a(t) || "function" == typeof t?.[Symbol.iterator], d = "[ \t\n\f\r]", f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, v = /-->/g, _ = />/g, m = RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), p = /'/g, g = /"/g, $ = /^(?:script|style|textarea|title)$/i, y = (t)=>(i, ...s)=>({
            _$litType$: t,
            strings: i,
            values: s
        }), x = y(1), b = y(2), w = y(3), T = Symbol.for("lit-noChange"), E = Symbol.for("lit-nothing"), A = new WeakMap, C = r.createTreeWalker(r, 129);
function P(t, i) {
    if (!a(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== s ? s.createHTML(i) : i;
}
const V = (t, i)=>{
    const s = t.length - 1, o = [];
    let r, l = 2 === i ? "<svg>" : 3 === i ? "<math>" : "", c = f;
    for(let i = 0; i < s; i++){
        const s = t[i];
        let a, u, d = -1, y = 0;
        for(; y < s.length && (c.lastIndex = y, u = c.exec(s), null !== u);)y = c.lastIndex, c === f ? "!--" === u[1] ? c = v : void 0 !== u[1] ? c = _ : void 0 !== u[2] ? ($.test(u[2]) && (r = RegExp("</" + u[2], "g")), c = m) : void 0 !== u[3] && (c = m) : c === m ? ">" === u[0] ? (c = r ?? f, d = -1) : void 0 === u[1] ? d = -2 : (d = c.lastIndex - u[2].length, a = u[1], c = void 0 === u[3] ? m : '"' === u[3] ? g : p) : c === g || c === p ? c = m : c === v || c === _ ? c = f : (c = m, r = void 0);
        const x = c === m && t[i + 1].startsWith("/>") ? " " : "";
        l += c === f ? s + n : d >= 0 ? (o.push(a), s.slice(0, d) + e + s.slice(d) + h + x) : s + h + (-2 === d ? i : x);
    }
    return [
        P(t, l + (t[s] || "<?>") + (2 === i ? "</svg>" : 3 === i ? "</math>" : "")),
        o
    ];
};
class N {
    constructor({ strings: t, _$litType$: s }, n){
        let r;
        this.parts = [];
        let c = 0, a = 0;
        const u = t.length - 1, d = this.parts, [f, v] = V(t, s);
        if (this.el = N.createElement(f, n), C.currentNode = this.el.content, 2 === s || 3 === s) {
            const t = this.el.content.firstChild;
            t.replaceWith(...t.childNodes);
        }
        for(; null !== (r = C.nextNode()) && d.length < u;){
            if (1 === r.nodeType) {
                if (r.hasAttributes()) for (const t of r.getAttributeNames())if (t.endsWith(e)) {
                    const i = v[a++], s = r.getAttribute(t).split(h), e = /([.?@])?(.*)/.exec(i);
                    d.push({
                        type: 1,
                        index: c,
                        name: e[2],
                        strings: s,
                        ctor: "." === e[1] ? H : "?" === e[1] ? I : "@" === e[1] ? L : k
                    }), r.removeAttribute(t);
                } else t.startsWith(h) && (d.push({
                    type: 6,
                    index: c
                }), r.removeAttribute(t));
                if ($.test(r.tagName)) {
                    const t = r.textContent.split(h), s = t.length - 1;
                    if (s > 0) {
                        r.textContent = i ? i.emptyScript : "";
                        for(let i = 0; i < s; i++)r.append(t[i], l()), C.nextNode(), d.push({
                            type: 2,
                            index: ++c
                        });
                        r.append(t[s], l());
                    }
                }
            } else if (8 === r.nodeType) {
                if (r.data === o) d.push({
                    type: 2,
                    index: c
                });
                else {
                    let t = -1;
                    for(; -1 !== (t = r.data.indexOf(h, t + 1));)d.push({
                        type: 7,
                        index: c
                    }), t += h.length - 1;
                }
            }
            c++;
        }
    }
    static createElement(t, i) {
        const s = r.createElement("template");
        return s.innerHTML = t, s;
    }
}
function S(t, i, s = t, e) {
    if (i === T) return i;
    let h = void 0 !== e ? s._$Co?.[e] : s._$Cl;
    const o = c(i) ? void 0 : i._$litDirective$;
    return h?.constructor !== o && (h?._$AO?.(!1), void 0 === o ? h = void 0 : (h = new o(t), h._$AT(t, s, e)), void 0 !== e ? (s._$Co ??= [])[e] = h : s._$Cl = h), void 0 !== h && (i = S(t, h._$AS(t, i.values), h, e)), i;
}
class M {
    constructor(t, i){
        this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
    }
    get parentNode() {
        return this._$AM.parentNode;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    u(t) {
        const { el: { content: i }, parts: s } = this._$AD, e = (t?.creationScope ?? r).importNode(i, !0);
        C.currentNode = e;
        let h = C.nextNode(), o = 0, n = 0, l = s[0];
        for(; void 0 !== l;){
            if (o === l.index) {
                let i;
                2 === l.type ? i = new R(h, h.nextSibling, this, t) : 1 === l.type ? i = new l.ctor(h, l.name, l.strings, this, t) : 6 === l.type && (i = new z(h, this, t)), this._$AV.push(i), l = s[++n];
            }
            o !== l?.index && (h = C.nextNode(), o++);
        }
        return C.currentNode = r, e;
    }
    p(t) {
        let i = 0;
        for (const s of this._$AV)void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
    }
}
class R {
    get _$AU() {
        return this._$AM?._$AU ?? this._$Cv;
    }
    constructor(t, i, s, e){
        this.type = 2, this._$AH = E, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cv = e?.isConnected ?? !0;
    }
    get parentNode() {
        let t = this._$AA.parentNode;
        const i = this._$AM;
        return void 0 !== i && 11 === t?.nodeType && (t = i.parentNode), t;
    }
    get startNode() {
        return this._$AA;
    }
    get endNode() {
        return this._$AB;
    }
    _$AI(t, i = this) {
        t = S(this, t, i), c(t) ? t === E || null == t || "" === t ? (this._$AH !== E && this._$AR(), this._$AH = E) : t !== this._$AH && t !== T && this._(t) : void 0 !== t._$litType$ ? this.$(t) : void 0 !== t.nodeType ? this.T(t) : u(t) ? this.k(t) : this._(t);
    }
    O(t) {
        return this._$AA.parentNode.insertBefore(t, this._$AB);
    }
    T(t) {
        this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
    }
    _(t) {
        this._$AH !== E && c(this._$AH) ? this._$AA.nextSibling.data = t : this.T(r.createTextNode(t)), this._$AH = t;
    }
    $(t) {
        const { values: i, _$litType$: s } = t, e = "number" == typeof s ? this._$AC(t) : (void 0 === s.el && (s.el = N.createElement(P(s.h, s.h[0]), this.options)), s);
        if (this._$AH?._$AD === e) this._$AH.p(i);
        else {
            const t = new M(e, this), s = t.u(this.options);
            t.p(i), this.T(s), this._$AH = t;
        }
    }
    _$AC(t) {
        let i = A.get(t.strings);
        return void 0 === i && A.set(t.strings, i = new N(t)), i;
    }
    k(t) {
        a(this._$AH) || (this._$AH = [], this._$AR());
        const i = this._$AH;
        let s, e = 0;
        for (const h of t)e === i.length ? i.push(s = new R(this.O(l()), this.O(l()), this, this.options)) : s = i[e], s._$AI(h), e++;
        e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
    }
    _$AR(t = this._$AA.nextSibling, i) {
        for(this._$AP?.(!1, !0, i); t !== this._$AB;){
            const i = t.nextSibling;
            t.remove(), t = i;
        }
    }
    setConnected(t) {
        void 0 === this._$AM && (this._$Cv = t, this._$AP?.(t));
    }
}
class k {
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    constructor(t, i, s, e, h){
        this.type = 1, this._$AH = E, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = h, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String), this.strings = s) : this._$AH = E;
    }
    _$AI(t, i = this, s, e) {
        const h = this.strings;
        let o = !1;
        if (void 0 === h) t = S(this, t, i, 0), o = !c(t) || t !== this._$AH && t !== T, o && (this._$AH = t);
        else {
            const e = t;
            let n, r;
            for(t = h[0], n = 0; n < h.length - 1; n++)r = S(this, e[s + n], i, n), r === T && (r = this._$AH[n]), o ||= !c(r) || r !== this._$AH[n], r === E ? t = E : t !== E && (t += (r ?? "") + h[n + 1]), this._$AH[n] = r;
        }
        o && !e && this.j(t);
    }
    j(t) {
        t === E ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
    }
}
class H extends k {
    constructor(){
        super(...arguments), this.type = 3;
    }
    j(t) {
        this.element[this.name] = t === E ? void 0 : t;
    }
}
class I extends k {
    constructor(){
        super(...arguments), this.type = 4;
    }
    j(t) {
        this.element.toggleAttribute(this.name, !!t && t !== E);
    }
}
class L extends k {
    constructor(t, i, s, e, h){
        super(t, i, s, e, h), this.type = 5;
    }
    _$AI(t, i = this) {
        if ((t = S(this, t, i, 0) ?? E) === T) return;
        const s = this._$AH, e = t === E && s !== E || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, h = t !== E && (s === E || e);
        e && this.element.removeEventListener(this.name, this, s), h && this.element.addEventListener(this.name, this, t), this._$AH = t;
    }
    handleEvent(t) {
        "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
    }
}
class z {
    constructor(t, i, s){
        this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t) {
        S(this, t);
    }
}
const Z = {
    M: e,
    P: h,
    A: o,
    C: 1,
    L: V,
    R: M,
    D: u,
    V: S,
    I: R,
    H: k,
    N: I,
    U: L,
    B: H,
    F: z
}, j = t.litHtmlPolyfillSupport;
j?.(N, R), (t.litHtmlVersions ??= []).push("3.3.1");
const B = (t, i, s)=>{
    const e = s?.renderBefore ?? i;
    let h = e._$litPart$;
    if (void 0 === h) {
        const t = s?.renderBefore ?? null;
        e._$litPart$ = h = new R(i.insertBefore(l(), t), t, void 0, s ?? {});
    }
    return h._$AI(t), h;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1HAvh":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useCallback", ()=>(0, _useCallback.useCallback));
parcelHelpers.export(exports, "useController", ()=>(0, _useController.useController));
parcelHelpers.export(exports, "useEffect", ()=>(0, _useEffect.useEffect));
parcelHelpers.export(exports, "useLayoutEffect", ()=>(0, _useLayoutEffect.useLayoutEffect));
parcelHelpers.export(exports, "useState", ()=>(0, _useState.useState));
parcelHelpers.export(exports, "useReducer", ()=>(0, _useReducer.useReducer));
parcelHelpers.export(exports, "useMemo", ()=>(0, _useMemo.useMemo));
parcelHelpers.export(exports, "useContext", ()=>(0, _useContext.useContext));
parcelHelpers.export(exports, "useRef", ()=>(0, _useRef.useRef));
parcelHelpers.export(exports, "hook", ()=>(0, _hook.hook));
parcelHelpers.export(exports, "Hook", ()=>(0, _hook.Hook));
parcelHelpers.export(exports, "BaseScheduler", ()=>(0, _scheduler.BaseScheduler));
parcelHelpers.export(exports, "State", ()=>(0, _state.State));
parcelHelpers.export(exports, "default", ()=>haunted);
var _component = require("./component");
var _createContext = require("./create-context");
var _useCallback = require("./use-callback");
var _useController = require("./use-controller");
var _useEffect = require("./use-effect");
var _useLayoutEffect = require("./use-layout-effect");
var _useState = require("./use-state");
var _useReducer = require("./use-reducer");
var _useMemo = require("./use-memo");
var _useContext = require("./use-context");
var _useRef = require("./use-ref");
var _hook = require("./hook");
var _scheduler = require("./scheduler");
var _state = require("./state");
function haunted({ render }) {
    const component = (0, _component.makeComponent)(render);
    const createContext = (0, _createContext.makeContext)(component);
    return {
        component,
        createContext
    };
}

},{"./component":"aHRS8","./create-context":"bZm5J","./use-callback":"80qJk","./use-controller":"3bGqa","./use-effect":"eccwu","./use-layout-effect":"gNJyq","./use-state":"gM7fu","./use-reducer":"hzkb4","./use-memo":"igHqy","./use-context":"aPKDY","./use-ref":"6OJl5","./hook":"7u9gV","./scheduler":"ezKel","./state":"c2qAX","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"aHRS8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "makeComponent", ()=>makeComponent);
var _scheduler = require("./scheduler");
const toCamelCase = (val = "")=>val.replace(/-+([a-z])?/g, (_, char)=>char ? char.toUpperCase() : "");
function makeComponent(render) {
    class Scheduler extends (0, _scheduler.BaseScheduler) {
        frag;
        constructor(renderer, frag, host){
            super(renderer, host || frag);
            this.frag = frag;
        }
        commit(result) {
            render(result, this.frag);
        }
    }
    function component(renderer, baseElementOrOptions, options) {
        const BaseElement = (options || baseElementOrOptions || {}).baseElement || HTMLElement;
        const { observedAttributes = [], useShadowDOM = true, shadowRootInit = {} } = options || baseElementOrOptions || {};
        class Element extends BaseElement {
            _scheduler;
            static get observedAttributes() {
                return renderer.observedAttributes || observedAttributes || [];
            }
            constructor(){
                super();
                if (useShadowDOM === false) this._scheduler = new Scheduler(renderer, this);
                else {
                    this.attachShadow({
                        mode: "open",
                        ...shadowRootInit
                    });
                    this._scheduler = new Scheduler(renderer, this.shadowRoot, this);
                }
            }
            connectedCallback() {
                this._scheduler.update();
            }
            disconnectedCallback() {
                this._scheduler.teardown();
            }
            attributeChangedCallback(name, oldValue, newValue) {
                if (oldValue === newValue) return;
                let val = newValue === "" ? true : newValue;
                Reflect.set(this, toCamelCase(name), val);
            }
        }
        function reflectiveProp(initialValue) {
            let value = initialValue;
            let isSetup = false;
            return Object.freeze({
                enumerable: true,
                configurable: true,
                get () {
                    return value;
                },
                set (newValue) {
                    // Avoid scheduling update when prop value hasn't changed
                    if (isSetup && value === newValue) return;
                    isSetup = true;
                    value = newValue;
                    if (this._scheduler) this._scheduler.update();
                }
            });
        }
        const proto = new Proxy(BaseElement.prototype, {
            getPrototypeOf (target) {
                return target;
            },
            set (target, key, value, receiver) {
                let desc;
                if (key in target) {
                    desc = Object.getOwnPropertyDescriptor(target, key);
                    if (desc && desc.set) {
                        desc.set.call(receiver, value);
                        return true;
                    }
                    Reflect.set(target, key, value, receiver);
                    return true;
                }
                if (typeof key === "symbol" || key[0] === "_") desc = {
                    enumerable: true,
                    configurable: true,
                    writable: true,
                    value
                };
                else desc = reflectiveProp(value);
                Object.defineProperty(receiver, key, desc);
                if (desc.set) desc.set.call(receiver, value);
                return true;
            }
        });
        Object.setPrototypeOf(Element.prototype, proto);
        return Element;
    }
    return component;
}

},{"./scheduler":"ezKel","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"ezKel":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BaseScheduler", ()=>BaseScheduler);
var _state = require("./state");
var _symbols = require("./symbols");
const defer = Promise.resolve().then.bind(Promise.resolve());
function runner() {
    let tasks = [];
    let id;
    function runTasks() {
        id = null;
        let t = tasks;
        tasks = [];
        for(var i = 0, len = t.length; i < len; i++)t[i]();
    }
    return function(task) {
        tasks.push(task);
        if (id == null) id = defer(runTasks);
    };
}
const read = runner();
const write = runner();
class BaseScheduler {
    renderer;
    host;
    state;
    [(0, _symbols.phaseSymbol)];
    _updateQueued;
    constructor(renderer, host){
        this.renderer = renderer;
        this.host = host;
        this.state = new (0, _state.State)(this.update.bind(this), host);
        this[0, _symbols.phaseSymbol] = null;
        this._updateQueued = false;
    }
    update() {
        if (this._updateQueued) return;
        read(()=>{
            let result = this.handlePhase((0, _symbols.updateSymbol));
            write(()=>{
                this.handlePhase((0, _symbols.commitSymbol), result);
                write(()=>{
                    this.handlePhase((0, _symbols.effectsSymbol));
                });
            });
            this._updateQueued = false;
        });
        this._updateQueued = true;
    }
    handlePhase(phase, arg) {
        this[0, _symbols.phaseSymbol] = phase;
        switch(phase){
            case 0, _symbols.commitSymbol:
                this.commit(arg);
                this.runEffects((0, _symbols.layoutEffectsSymbol));
                return;
            case 0, _symbols.updateSymbol:
                return this.render();
            case 0, _symbols.effectsSymbol:
                return this.runEffects((0, _symbols.effectsSymbol));
        }
    }
    render() {
        return this.state.run(()=>this.renderer.call(this.host, this.host));
    }
    runEffects(phase) {
        this.state._runEffects(phase);
    }
    teardown() {
        this.state.teardown();
    }
}

},{"./state":"c2qAX","./symbols":"9Kfa3","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"c2qAX":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "State", ()=>State);
var _interface = require("./interface");
var _symbols = require("./symbols");
class State {
    update;
    host;
    virtual;
    [(0, _symbols.hookSymbol)];
    [(0, _symbols.effectsSymbol)];
    [(0, _symbols.layoutEffectsSymbol)];
    constructor(update, host){
        this.update = update;
        this.host = host;
        this[0, _symbols.hookSymbol] = new Map();
        this[0, _symbols.effectsSymbol] = [];
        this[0, _symbols.layoutEffectsSymbol] = [];
    }
    run(cb) {
        (0, _interface.setCurrent)(this);
        let res = cb();
        (0, _interface.clear)();
        return res;
    }
    _runEffects(phase) {
        let effects = this[phase];
        (0, _interface.setCurrent)(this);
        for (let effect of effects)effect.call(this);
        (0, _interface.clear)();
    }
    runEffects() {
        this._runEffects((0, _symbols.effectsSymbol));
    }
    runLayoutEffects() {
        this._runEffects((0, _symbols.layoutEffectsSymbol));
    }
    teardown() {
        let hooks = this[0, _symbols.hookSymbol];
        hooks.forEach((hook)=>{
            if (typeof hook.teardown === "function") hook.teardown();
        });
    }
}

},{"./interface":"eu5Ki","./symbols":"9Kfa3","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"eu5Ki":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "clear", ()=>clear);
parcelHelpers.export(exports, "current", ()=>current);
parcelHelpers.export(exports, "setCurrent", ()=>setCurrent);
parcelHelpers.export(exports, "notify", ()=>notify);
let current;
let currentId = 0;
function setCurrent(state) {
    current = state;
}
function clear() {
    current = null;
    currentId = 0;
}
function notify() {
    return currentId++;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9Kfa3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "phaseSymbol", ()=>phaseSymbol);
parcelHelpers.export(exports, "hookSymbol", ()=>hookSymbol);
parcelHelpers.export(exports, "updateSymbol", ()=>updateSymbol);
parcelHelpers.export(exports, "commitSymbol", ()=>commitSymbol);
parcelHelpers.export(exports, "effectsSymbol", ()=>effectsSymbol);
parcelHelpers.export(exports, "layoutEffectsSymbol", ()=>layoutEffectsSymbol);
parcelHelpers.export(exports, "contextEvent", ()=>contextEvent);
const phaseSymbol = Symbol("haunted.phase");
const hookSymbol = Symbol("haunted.hook");
const updateSymbol = Symbol("haunted.update");
const commitSymbol = Symbol("haunted.commit");
const effectsSymbol = Symbol("haunted.effects");
const layoutEffectsSymbol = Symbol("haunted.layoutEffects");
const contextEvent = "haunted.context";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"bZm5J":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "makeContext", ()=>makeContext);
var _symbols = require("./symbols");
var _useContext = require("./use-context");
function makeContext(component) {
    return (defaultValue)=>{
        const Context = {
            Provider: class extends HTMLElement {
                listeners;
                _value;
                constructor(){
                    super();
                    this.listeners = new Set();
                    this.addEventListener((0, _symbols.contextEvent), this);
                }
                disconnectedCallback() {
                    this.removeEventListener((0, _symbols.contextEvent), this);
                }
                handleEvent(event) {
                    const { detail } = event;
                    if (detail.Context === Context) {
                        detail.value = this.value;
                        detail.unsubscribe = this.unsubscribe.bind(this, detail.callback);
                        this.listeners.add(detail.callback);
                        event.stopPropagation();
                    }
                }
                unsubscribe(callback) {
                    this.listeners.delete(callback);
                }
                set value(value) {
                    this._value = value;
                    for (let callback of this.listeners)callback(value);
                }
                get value() {
                    return this._value;
                }
            },
            Consumer: component(function({ render }) {
                const context = (0, _useContext.useContext)(Context);
                return render(context);
            }, {
                useShadowDOM: false
            }),
            defaultValue
        };
        return Context;
    };
}

},{"./symbols":"9Kfa3","./use-context":"aPKDY","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"aPKDY":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useContext", ()=>useContext);
var _hook = require("./hook");
var _symbols = require("./symbols");
var _useEffect = require("./use-effect");
/**
 * @function
 * @template T
 * @param    {Context<T>} context
 * @return   {T}
 */ const useContext = (0, _hook.hook)(class extends (0, _hook.Hook) {
    Context;
    value;
    _ranEffect;
    _unsubscribe;
    constructor(id, state, _){
        super(id, state);
        this._updater = this._updater.bind(this);
        this._ranEffect = false;
        this._unsubscribe = null;
        (0, _useEffect.setEffects)(state, this);
    }
    update(Context) {
        if (this.state.virtual) throw new Error("can't be used with virtual components");
        if (this.Context !== Context) {
            this._subscribe(Context);
            this.Context = Context;
        }
        return this.value;
    }
    call() {
        if (!this._ranEffect) {
            this._ranEffect = true;
            if (this._unsubscribe) this._unsubscribe();
            this._subscribe(this.Context);
            this.state.update();
        }
    }
    _updater(value) {
        this.value = value;
        this.state.update();
    }
    _subscribe(Context) {
        const detail = {
            Context,
            callback: this._updater
        };
        this.state.host.dispatchEvent(new CustomEvent((0, _symbols.contextEvent), {
            detail,
            bubbles: true,
            cancelable: true,
            composed: true
        }));
        const { unsubscribe = null, value } = detail;
        this.value = unsubscribe ? value : Context.defaultValue;
        this._unsubscribe = unsubscribe;
    }
    teardown() {
        if (this._unsubscribe) this._unsubscribe();
    }
});

},{"./hook":"7u9gV","./symbols":"9Kfa3","./use-effect":"eccwu","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7u9gV":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hook", ()=>hook);
parcelHelpers.export(exports, "Hook", ()=>Hook);
var _interface = require("./interface");
var _symbols = require("./symbols");
class Hook {
    id;
    state;
    constructor(id, state){
        this.id = id;
        this.state = state;
    }
}
function use(Hook, ...args) {
    let id = (0, _interface.notify)();
    let hooks = (0, _interface.current)[0, _symbols.hookSymbol];
    let hook = hooks.get(id);
    if (!hook) {
        hook = new Hook(id, (0, _interface.current), ...args);
        hooks.set(id, hook);
    }
    return hook.update(...args);
}
function hook(Hook) {
    return use.bind(null, Hook);
}

},{"./interface":"eu5Ki","./symbols":"9Kfa3","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"eccwu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setEffects", ()=>setEffects);
parcelHelpers.export(exports, "useEffect", ()=>useEffect);
var _symbols = require("./symbols");
var _createEffect = require("./create-effect");
function setEffects(state, cb) {
    state[0, _symbols.effectsSymbol].push(cb);
}
/**
 * @function
 * @param {() => void} effect - callback function that runs each time dependencies change
 * @param {unknown[]} [dependencies] - list of dependencies to the effect
 * @return {void}
 */ const useEffect = (0, _createEffect.createEffect)(setEffects);

},{"./symbols":"9Kfa3","./create-effect":"c4KGK","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"c4KGK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createEffect", ()=>createEffect);
var _hook = require("./hook");
function createEffect(setEffects) {
    return (0, _hook.hook)(class extends (0, _hook.Hook) {
        callback;
        lastValues;
        values;
        _teardown;
        constructor(id, state, ignored1, ignored2){
            super(id, state);
            setEffects(state, this);
        }
        update(callback, values) {
            this.callback = callback;
            this.values = values;
        }
        call() {
            const hasChanged = !this.values || this.hasChanged();
            this.lastValues = this.values;
            if (hasChanged) this.run();
        }
        run() {
            this.teardown();
            this._teardown = this.callback.call(this.state);
        }
        teardown() {
            if (typeof this._teardown === "function") this._teardown();
        }
        hasChanged() {
            return !this.lastValues || this.values.some((value, i)=>this.lastValues[i] !== value);
        }
    });
}

},{"./hook":"7u9gV","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"80qJk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useCallback", ()=>useCallback);
var _useMemo = require("./use-memo");
/**
 * @function
 * @template {Function} T
 * @param    {T} fn - callback to memoize
 * @param    {unknown[]} inputs - dependencies to callback memoization
 * @return   {T}
 */ const useCallback = (fn, inputs)=>(0, _useMemo.useMemo)(()=>fn, inputs);

},{"./use-memo":"igHqy","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"igHqy":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useMemo", ()=>useMemo);
var _hook = require("./hook");
/**
 * @function
 * @template T
 * @param  {() => T} fn function to memoize
 * @param  {unknown[]} values dependencies to the memoized computation
 * @return {T} The next computed value
 */ const useMemo = (0, _hook.hook)(class extends (0, _hook.Hook) {
    value;
    values;
    constructor(id, state, fn, values){
        super(id, state);
        this.value = fn();
        this.values = values;
    }
    update(fn, values) {
        if (this.hasChanged(values)) {
            this.values = values;
            this.value = fn();
        }
        return this.value;
    }
    hasChanged(values = []) {
        return values.some((value, i)=>this.values[i] !== value);
    }
});

},{"./hook":"7u9gV","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"3bGqa":[function(require,module,exports,__globalThis) {
/**
 * @license
 * Portions Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Creates and stores a stateful ReactiveController instance and provides it
 * with a ReactiveControllerHost that drives the controller lifecycle.
 *
 * Use this hook to convert a ReactiveController into a Haunted hook.
 *
 * @param {<C extends ReactiveController>(host: ReactiveControllerHost) => C} createController A function that creates a controller instance.
 * This function is given a HauntedControllerHost to pass to the controller. The
 * create function is only called once per component.
 * @return {ReactiveController} the controller instance
 */ parcelHelpers.export(exports, "useController", ()=>useController);
var _useLayoutEffect = require("./use-layout-effect");
var _useState = require("./use-state");
const microtask = Promise.resolve();
/**
 * An implementation of ReactiveControllerHost that is driven by Haunted hooks
 * and `useController()`.
 */ class HauntedControllerHost {
    count;
    kick;
    _controllers = [];
    _updatePending = true;
    _updateCompletePromise;
    _resolveUpdate;
    constructor(count, kick){
        this.count = count;
        this.kick = kick;
        this._updateCompletePromise = new Promise((res)=>{
            this._resolveUpdate = res;
        });
    }
    addController(controller) {
        this._controllers.push(controller);
    }
    removeController(controller) {
        // Note, if the indexOf is -1, the >>> will flip the sign which makes the
        // splice do nothing.
        this._controllers && this._controllers.splice(this._controllers.indexOf(controller) >>> 0, 1);
    }
    requestUpdate() {
        if (!this._updatePending) {
            this._updatePending = true;
            microtask.then(()=>this.kick(this.count += 1));
        }
    }
    get updateComplete() {
        return this._updateCompletePromise;
    }
    connected() {
        this._controllers.forEach((c)=>c.hostConnected && c.hostConnected());
    }
    disconnected() {
        this._controllers.forEach((c)=>c.hostDisconnected && c.hostDisconnected());
    }
    update() {
        this._controllers.forEach((c)=>c.hostUpdate && c.hostUpdate());
    }
    updated() {
        this._updatePending = false;
        const resolve = this._resolveUpdate;
        // Create a new updateComplete Promise for the next update,
        // before resolving the current one.
        this._updateCompletePromise = new Promise((res)=>{
            this._resolveUpdate = res;
        });
        this._controllers.forEach((c)=>c.hostUpdated && c.hostUpdated());
        resolve(this._updatePending);
    }
}
function useController(createController) {
    const [count, kick] = (0, _useState.useState)(0);
    const [host] = (0, _useState.useState)(()=>{
        const host = new HauntedControllerHost(count, kick);
        const controller = createController(host);
        host.primaryController = controller;
        host.connected();
        return host;
    });
    // We use useLayoutEffect because we need updated() called synchronously
    // after rendering.
    (0, _useLayoutEffect.useLayoutEffect)(()=>host.updated());
    // Returning a cleanup function simulates hostDisconnected timing. An empty
    // deps array tells Haunted to only call this once: on mount with the cleanup
    // called on unmount.
    (0, _useLayoutEffect.useLayoutEffect)(()=>()=>host.disconnected(), []);
    host.update();
    return host.primaryController;
}

},{"./use-layout-effect":"gNJyq","./use-state":"gM7fu","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"gNJyq":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useLayoutEffect", ()=>useLayoutEffect);
var _symbols = require("./symbols");
var _createEffect = require("./create-effect");
function setLayoutEffects(state, cb) {
    state[0, _symbols.layoutEffectsSymbol].push(cb);
}
/**
 * @function
 * @param  {Effect} callback effecting callback
 * @param  {unknown[]} [values] dependencies to the effect
 * @return {void}
 */ const useLayoutEffect = (0, _createEffect.createEffect)(setLayoutEffects);

},{"./symbols":"9Kfa3","./create-effect":"c4KGK","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"gM7fu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useState", ()=>useState);
var _hook = require("./hook");
/**
 * @function
 * @template {*} T
 * @param {T} [initialState] - Optional initial state
 * @return {StateTuple<T>} stateTuple - Tuple of current state and state updater function
 */ const useState = (0, _hook.hook)(class extends (0, _hook.Hook) {
    args;
    constructor(id, state, initialValue){
        super(id, state);
        this.updater = this.updater.bind(this);
        if (typeof initialValue === "function") {
            const initFn = initialValue;
            initialValue = initFn();
        }
        this.makeArgs(initialValue);
    }
    update() {
        return this.args;
    }
    updater(value) {
        const [previousValue] = this.args;
        if (typeof value === "function") {
            const updaterFn = value;
            value = updaterFn(previousValue);
        }
        if (Object.is(previousValue, value)) return;
        this.makeArgs(value);
        this.state.update();
    }
    makeArgs(value) {
        this.args = Object.freeze([
            value,
            this.updater
        ]);
    }
});

},{"./hook":"7u9gV","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"hzkb4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useReducer", ()=>useReducer);
var _hook = require("./hook");
/**
 * Given a reducer function, initial state, and optional state initializer function, returns a tuple of state and dispatch function.
 * @function
 * @template S State
 * @template I Initial State
 * @template A Action
 * @param {Reducer<S, A>} reducer - reducer function to compute the next state given the previous state and the action
 * @param {I} initialState - the initial state of the reducer
 * @param {(init: I) => S} [init=undefined] - Optional initializer function, called on initialState if provided
 * @return {readonly [S, (action: A) => void]}
 */ const useReducer = (0, _hook.hook)(class extends (0, _hook.Hook) {
    reducer;
    currentState;
    constructor(id, state, _, initialState, init){
        super(id, state);
        this.dispatch = this.dispatch.bind(this);
        this.currentState = init !== undefined ? init(initialState) : initialState;
    }
    update(reducer) {
        this.reducer = reducer;
        return [
            this.currentState,
            this.dispatch
        ];
    }
    dispatch(action) {
        this.currentState = this.reducer(this.currentState, action);
        this.state.update();
    }
});

},{"./hook":"7u9gV","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"6OJl5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useRef", ()=>useRef);
var _useMemo = require("./use-memo");
function useRef(initialValue) {
    return (0, _useMemo.useMemo)(()=>({
            current: initialValue
        }), []);
}

},{"./use-memo":"igHqy","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"3ZLoq":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "makeVirtual", ()=>makeVirtual);
var _directiveJs = require("lit/directive.js");
var _lit = require("lit");
var _asyncDirectiveJs = require("lit/async-directive.js");
var _scheduler = require("./scheduler");
const includes = Array.prototype.includes;
const partToScheduler = new WeakMap();
const schedulerToPart = new WeakMap();
class Scheduler extends (0, _scheduler.BaseScheduler) {
    args;
    setValue;
    constructor(renderer, part, setValue){
        super(renderer, part);
        this.state.virtual = true;
        this.setValue = setValue;
    }
    render() {
        return this.state.run(()=>this.renderer.apply(this.host, this.args));
    }
    commit(result) {
        this.setValue(result);
    }
    teardown() {
        super.teardown();
        let part = schedulerToPart.get(this);
        partToScheduler.delete(part);
    }
}
function makeVirtual() {
    function virtual(renderer) {
        class VirtualDirective extends (0, _asyncDirectiveJs.AsyncDirective) {
            cont;
            constructor(partInfo){
                super(partInfo);
                this.cont = undefined;
            }
            update(part, args) {
                this.cont = partToScheduler.get(part);
                if (!this.cont || this.cont.renderer !== renderer) {
                    this.cont = new Scheduler(renderer, part, (r)=>{
                        this.setValue(r);
                    });
                    partToScheduler.set(part, this.cont);
                    schedulerToPart.set(this.cont, part);
                    teardownOnRemove(this.cont, part);
                }
                this.cont.args = args;
                this.cont.update();
                return this.render(...args);
            }
            render(...args) {
                return 0, _lit.noChange;
            }
        }
        return (0, _directiveJs.directive)(VirtualDirective);
    }
    return virtual;
}
function teardownOnRemove(cont, part, node = part.startNode) {
    let frag = node.parentNode;
    let mo = new MutationObserver((mutations)=>{
        for (let mutation of mutations){
            if (includes.call(mutation.removedNodes, node)) {
                mo.disconnect();
                if (node.parentNode instanceof ShadowRoot) teardownOnRemove(cont, part);
                else cont.teardown();
                break;
            } else if (includes.call(mutation.addedNodes, node.nextSibling)) {
                mo.disconnect();
                teardownOnRemove(cont, part, node.nextSibling || undefined);
                break;
            }
        }
    });
    mo.observe(frag, {
        childList: true
    });
}

},{"lit/directive.js":"eJI3m","lit":"hh14x","lit/async-directive.js":"k72g6","./scheduler":"ezKel","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"eJI3m":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _directiveJs = require("lit-html/directive.js");
parcelHelpers.exportAll(_directiveJs, exports);

},{"lit-html/directive.js":"g2JOH","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"g2JOH":[function(require,module,exports,__globalThis) {
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Directive", ()=>i);
parcelHelpers.export(exports, "PartType", ()=>t);
parcelHelpers.export(exports, "directive", ()=>e);
const t = {
    ATTRIBUTE: 1,
    CHILD: 2,
    PROPERTY: 3,
    BOOLEAN_ATTRIBUTE: 4,
    EVENT: 5,
    ELEMENT: 6
}, e = (t)=>(...e)=>({
            _$litDirective$: t,
            values: e
        });
class i {
    constructor(t){}
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AT(t, e, i) {
        this._$Ct = t, this._$AM = e, this._$Ci = i;
    }
    _$AS(t, e) {
        return this.update(t, e);
    }
    update(t, e) {
        return this.render(...e);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"hh14x":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _reactiveElement = require("@lit/reactive-element");
var _litHtml = require("lit-html");
var _litElementJs = require("lit-element/lit-element.js");
parcelHelpers.exportAll(_litElementJs, exports);
var _isServerJs = require("lit-html/is-server.js");
parcelHelpers.exportAll(_isServerJs, exports);

},{"@lit/reactive-element":"c9cs8","lit-html":"jPNGZ","lit-element/lit-element.js":"aJ236","lit-html/is-server.js":"4HfcG","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"c9cs8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CSSResult", ()=>(0, _cssTagJs.CSSResult));
parcelHelpers.export(exports, "css", ()=>(0, _cssTagJs.css));
parcelHelpers.export(exports, "supportsAdoptingStyleSheets", ()=>(0, _cssTagJs.supportsAdoptingStyleSheets));
parcelHelpers.export(exports, "unsafeCSS", ()=>(0, _cssTagJs.unsafeCSS));
parcelHelpers.export(exports, "ReactiveElement", ()=>y);
parcelHelpers.export(exports, "adoptStyles", ()=>(0, _cssTagJs.adoptStyles));
parcelHelpers.export(exports, "defaultConverter", ()=>u);
parcelHelpers.export(exports, "getCompatibleStyle", ()=>(0, _cssTagJs.getCompatibleStyle));
parcelHelpers.export(exports, "notEqual", ()=>f);
var _cssTagJs = require("./css-tag.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const { is: i, defineProperty: e, getOwnPropertyDescriptor: h, getOwnPropertyNames: r, getOwnPropertySymbols: o, getPrototypeOf: n } = Object, a = globalThis, c = a.trustedTypes, l = c ? c.emptyScript : "", p = a.reactiveElementPolyfillSupport, d = (t, s)=>t, u = {
    toAttribute (t, s) {
        switch(s){
            case Boolean:
                t = t ? l : null;
                break;
            case Object:
            case Array:
                t = null == t ? t : JSON.stringify(t);
        }
        return t;
    },
    fromAttribute (t, s) {
        let i = t;
        switch(s){
            case Boolean:
                i = null !== t;
                break;
            case Number:
                i = null === t ? null : Number(t);
                break;
            case Object:
            case Array:
                try {
                    i = JSON.parse(t);
                } catch (t) {
                    i = null;
                }
        }
        return i;
    }
}, f = (t, s)=>!i(t, s), b = {
    attribute: !0,
    type: String,
    converter: u,
    reflect: !1,
    useDefault: !1,
    hasChanged: f
};
Symbol.metadata ??= Symbol("metadata"), a.litPropertyMetadata ??= new WeakMap;
class y extends HTMLElement {
    static addInitializer(t) {
        this._$Ei(), (this.l ??= []).push(t);
    }
    static get observedAttributes() {
        return this.finalize(), this._$Eh && [
            ...this._$Eh.keys()
        ];
    }
    static createProperty(t, s = b) {
        if (s.state && (s.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((s = Object.create(s)).wrapped = !0), this.elementProperties.set(t, s), !s.noAccessor) {
            const i = Symbol(), h = this.getPropertyDescriptor(t, i, s);
            void 0 !== h && e(this.prototype, t, h);
        }
    }
    static getPropertyDescriptor(t, s, i) {
        const { get: e, set: r } = h(this.prototype, t) ?? {
            get () {
                return this[s];
            },
            set (t) {
                this[s] = t;
            }
        };
        return {
            get: e,
            set (s) {
                const h = e?.call(this);
                r?.call(this, s), this.requestUpdate(t, h, i);
            },
            configurable: !0,
            enumerable: !0
        };
    }
    static getPropertyOptions(t) {
        return this.elementProperties.get(t) ?? b;
    }
    static _$Ei() {
        if (this.hasOwnProperty(d("elementProperties"))) return;
        const t = n(this);
        t.finalize(), void 0 !== t.l && (this.l = [
            ...t.l
        ]), this.elementProperties = new Map(t.elementProperties);
    }
    static finalize() {
        if (this.hasOwnProperty(d("finalized"))) return;
        if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(d("properties"))) {
            const t = this.properties, s = [
                ...r(t),
                ...o(t)
            ];
            for (const i of s)this.createProperty(i, t[i]);
        }
        const t = this[Symbol.metadata];
        if (null !== t) {
            const s = litPropertyMetadata.get(t);
            if (void 0 !== s) for (const [t, i] of s)this.elementProperties.set(t, i);
        }
        this._$Eh = new Map;
        for (const [t, s] of this.elementProperties){
            const i = this._$Eu(t, s);
            void 0 !== i && this._$Eh.set(i, t);
        }
        this.elementStyles = this.finalizeStyles(this.styles);
    }
    static finalizeStyles(s) {
        const i = [];
        if (Array.isArray(s)) {
            const e = new Set(s.flat(1 / 0).reverse());
            for (const s of e)i.unshift((0, _cssTagJs.getCompatibleStyle)(s));
        } else void 0 !== s && i.push((0, _cssTagJs.getCompatibleStyle)(s));
        return i;
    }
    static _$Eu(t, s) {
        const i = s.attribute;
        return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof t ? t.toLowerCase() : void 0;
    }
    constructor(){
        super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
    }
    _$Ev() {
        this._$ES = new Promise((t)=>this.enableUpdating = t), this._$AL = new Map, this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t)=>t(this));
    }
    addController(t) {
        (this._$EO ??= new Set).add(t), void 0 !== this.renderRoot && this.isConnected && t.hostConnected?.();
    }
    removeController(t) {
        this._$EO?.delete(t);
    }
    _$E_() {
        const t = new Map, s = this.constructor.elementProperties;
        for (const i of s.keys())this.hasOwnProperty(i) && (t.set(i, this[i]), delete this[i]);
        t.size > 0 && (this._$Ep = t);
    }
    createRenderRoot() {
        const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
        return (0, _cssTagJs.adoptStyles)(t, this.constructor.elementStyles), t;
    }
    connectedCallback() {
        this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((t)=>t.hostConnected?.());
    }
    enableUpdating(t) {}
    disconnectedCallback() {
        this._$EO?.forEach((t)=>t.hostDisconnected?.());
    }
    attributeChangedCallback(t, s, i) {
        this._$AK(t, i);
    }
    _$ET(t, s) {
        const i = this.constructor.elementProperties.get(t), e = this.constructor._$Eu(t, i);
        if (void 0 !== e && !0 === i.reflect) {
            const h = (void 0 !== i.converter?.toAttribute ? i.converter : u).toAttribute(s, i.type);
            this._$Em = t, null == h ? this.removeAttribute(e) : this.setAttribute(e, h), this._$Em = null;
        }
    }
    _$AK(t, s) {
        const i = this.constructor, e = i._$Eh.get(t);
        if (void 0 !== e && this._$Em !== e) {
            const t = i.getPropertyOptions(e), h = "function" == typeof t.converter ? {
                fromAttribute: t.converter
            } : void 0 !== t.converter?.fromAttribute ? t.converter : u;
            this._$Em = e;
            const r = h.fromAttribute(s, t.type);
            this[e] = r ?? this._$Ej?.get(e) ?? r, this._$Em = null;
        }
    }
    requestUpdate(t, s, i) {
        if (void 0 !== t) {
            const e = this.constructor, h = this[t];
            if (i ??= e.getPropertyOptions(t), !((i.hasChanged ?? f)(h, s) || i.useDefault && i.reflect && h === this._$Ej?.get(t) && !this.hasAttribute(e._$Eu(t, i)))) return;
            this.C(t, s, i);
        }
        !1 === this.isUpdatePending && (this._$ES = this._$EP());
    }
    C(t, s, { useDefault: i, reflect: e, wrapped: h }, r) {
        i && !(this._$Ej ??= new Map).has(t) && (this._$Ej.set(t, r ?? s ?? this[t]), !0 !== h || void 0 !== r) || (this._$AL.has(t) || (this.hasUpdated || i || (s = void 0), this._$AL.set(t, s)), !0 === e && this._$Em !== t && (this._$Eq ??= new Set).add(t));
    }
    async _$EP() {
        this.isUpdatePending = !0;
        try {
            await this._$ES;
        } catch (t) {
            Promise.reject(t);
        }
        const t = this.scheduleUpdate();
        return null != t && await t, !this.isUpdatePending;
    }
    scheduleUpdate() {
        return this.performUpdate();
    }
    performUpdate() {
        if (!this.isUpdatePending) return;
        if (!this.hasUpdated) {
            if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
                for (const [t, s] of this._$Ep)this[t] = s;
                this._$Ep = void 0;
            }
            const t = this.constructor.elementProperties;
            if (t.size > 0) for (const [s, i] of t){
                const { wrapped: t } = i, e = this[s];
                !0 !== t || this._$AL.has(s) || void 0 === e || this.C(s, void 0, i, e);
            }
        }
        let t = !1;
        const s = this._$AL;
        try {
            t = this.shouldUpdate(s), t ? (this.willUpdate(s), this._$EO?.forEach((t)=>t.hostUpdate?.()), this.update(s)) : this._$EM();
        } catch (s) {
            throw t = !1, this._$EM(), s;
        }
        t && this._$AE(s);
    }
    willUpdate(t) {}
    _$AE(t) {
        this._$EO?.forEach((t)=>t.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
    }
    _$EM() {
        this._$AL = new Map, this.isUpdatePending = !1;
    }
    get updateComplete() {
        return this.getUpdateComplete();
    }
    getUpdateComplete() {
        return this._$ES;
    }
    shouldUpdate(t) {
        return !0;
    }
    update(t) {
        this._$Eq &&= this._$Eq.forEach((t)=>this._$ET(t, this[t])), this._$EM();
    }
    updated(t) {}
    firstUpdated(t) {}
}
y.elementStyles = [], y.shadowRootOptions = {
    mode: "open"
}, y[d("elementProperties")] = new Map, y[d("finalized")] = new Map, p?.({
    ReactiveElement: y
}), (a.reactiveElementVersions ??= []).push("2.1.1");

},{"./css-tag.js":"8ZIf7","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8ZIf7":[function(require,module,exports,__globalThis) {
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CSSResult", ()=>n);
parcelHelpers.export(exports, "adoptStyles", ()=>S);
parcelHelpers.export(exports, "css", ()=>i);
parcelHelpers.export(exports, "getCompatibleStyle", ()=>c);
parcelHelpers.export(exports, "supportsAdoptingStyleSheets", ()=>e);
parcelHelpers.export(exports, "unsafeCSS", ()=>r);
const t = globalThis, e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, s = Symbol(), o = new WeakMap;
class n {
    constructor(t, e, o){
        if (this._$cssResult$ = !0, o !== s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t, this.t = e;
    }
    get styleSheet() {
        let t = this.o;
        const s = this.t;
        if (e && void 0 === t) {
            const e = void 0 !== s && 1 === s.length;
            e && (t = o.get(s)), void 0 === t && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText), e && o.set(s, t));
        }
        return t;
    }
    toString() {
        return this.cssText;
    }
}
const r = (t)=>new n("string" == typeof t ? t : t + "", void 0, s), i = (t, ...e)=>{
    const o = 1 === t.length ? t[0] : e.reduce((e, s, o)=>e + ((t)=>{
            if (!0 === t._$cssResult$) return t.cssText;
            if ("number" == typeof t) return t;
            throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
        })(s) + t[o + 1], t[0]);
    return new n(o, t, s);
}, S = (s, o)=>{
    if (e) s.adoptedStyleSheets = o.map((t)=>t instanceof CSSStyleSheet ? t : t.styleSheet);
    else for (const e of o){
        const o = document.createElement("style"), n = t.litNonce;
        void 0 !== n && o.setAttribute("nonce", n), o.textContent = e.cssText, s.appendChild(o);
    }
}, c = e ? (t)=>t : (t)=>t instanceof CSSStyleSheet ? ((t)=>{
        let e = "";
        for (const s of t.cssRules)e += s.cssText;
        return r(e);
    })(t) : t;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jPNGZ":[function(require,module,exports,__globalThis) {
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_$LH", ()=>Z);
parcelHelpers.export(exports, "html", ()=>x);
parcelHelpers.export(exports, "mathml", ()=>w);
parcelHelpers.export(exports, "noChange", ()=>T);
parcelHelpers.export(exports, "nothing", ()=>E);
parcelHelpers.export(exports, "render", ()=>B);
parcelHelpers.export(exports, "svg", ()=>b);
const t = globalThis, i = t.trustedTypes, s = i ? i.createPolicy("lit-html", {
    createHTML: (t)=>t
}) : void 0, e = "$lit$", h = `lit$${Math.random().toFixed(9).slice(2)}$`, o = "?" + h, n = `<${o}>`, r = document, l = ()=>r.createComment(""), c = (t)=>null === t || "object" != typeof t && "function" != typeof t, a = Array.isArray, u = (t)=>a(t) || "function" == typeof t?.[Symbol.iterator], d = "[ \t\n\f\r]", f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, v = /-->/g, _ = />/g, m = RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), p = /'/g, g = /"/g, $ = /^(?:script|style|textarea|title)$/i, y = (t)=>(i, ...s)=>({
            _$litType$: t,
            strings: i,
            values: s
        }), x = y(1), b = y(2), w = y(3), T = Symbol.for("lit-noChange"), E = Symbol.for("lit-nothing"), A = new WeakMap, C = r.createTreeWalker(r, 129);
function P(t, i) {
    if (!a(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== s ? s.createHTML(i) : i;
}
const V = (t, i)=>{
    const s = t.length - 1, o = [];
    let r, l = 2 === i ? "<svg>" : 3 === i ? "<math>" : "", c = f;
    for(let i = 0; i < s; i++){
        const s = t[i];
        let a, u, d = -1, y = 0;
        for(; y < s.length && (c.lastIndex = y, u = c.exec(s), null !== u);)y = c.lastIndex, c === f ? "!--" === u[1] ? c = v : void 0 !== u[1] ? c = _ : void 0 !== u[2] ? ($.test(u[2]) && (r = RegExp("</" + u[2], "g")), c = m) : void 0 !== u[3] && (c = m) : c === m ? ">" === u[0] ? (c = r ?? f, d = -1) : void 0 === u[1] ? d = -2 : (d = c.lastIndex - u[2].length, a = u[1], c = void 0 === u[3] ? m : '"' === u[3] ? g : p) : c === g || c === p ? c = m : c === v || c === _ ? c = f : (c = m, r = void 0);
        const x = c === m && t[i + 1].startsWith("/>") ? " " : "";
        l += c === f ? s + n : d >= 0 ? (o.push(a), s.slice(0, d) + e + s.slice(d) + h + x) : s + h + (-2 === d ? i : x);
    }
    return [
        P(t, l + (t[s] || "<?>") + (2 === i ? "</svg>" : 3 === i ? "</math>" : "")),
        o
    ];
};
class N {
    constructor({ strings: t, _$litType$: s }, n){
        let r;
        this.parts = [];
        let c = 0, a = 0;
        const u = t.length - 1, d = this.parts, [f, v] = V(t, s);
        if (this.el = N.createElement(f, n), C.currentNode = this.el.content, 2 === s || 3 === s) {
            const t = this.el.content.firstChild;
            t.replaceWith(...t.childNodes);
        }
        for(; null !== (r = C.nextNode()) && d.length < u;){
            if (1 === r.nodeType) {
                if (r.hasAttributes()) for (const t of r.getAttributeNames())if (t.endsWith(e)) {
                    const i = v[a++], s = r.getAttribute(t).split(h), e = /([.?@])?(.*)/.exec(i);
                    d.push({
                        type: 1,
                        index: c,
                        name: e[2],
                        strings: s,
                        ctor: "." === e[1] ? H : "?" === e[1] ? I : "@" === e[1] ? L : k
                    }), r.removeAttribute(t);
                } else t.startsWith(h) && (d.push({
                    type: 6,
                    index: c
                }), r.removeAttribute(t));
                if ($.test(r.tagName)) {
                    const t = r.textContent.split(h), s = t.length - 1;
                    if (s > 0) {
                        r.textContent = i ? i.emptyScript : "";
                        for(let i = 0; i < s; i++)r.append(t[i], l()), C.nextNode(), d.push({
                            type: 2,
                            index: ++c
                        });
                        r.append(t[s], l());
                    }
                }
            } else if (8 === r.nodeType) {
                if (r.data === o) d.push({
                    type: 2,
                    index: c
                });
                else {
                    let t = -1;
                    for(; -1 !== (t = r.data.indexOf(h, t + 1));)d.push({
                        type: 7,
                        index: c
                    }), t += h.length - 1;
                }
            }
            c++;
        }
    }
    static createElement(t, i) {
        const s = r.createElement("template");
        return s.innerHTML = t, s;
    }
}
function S(t, i, s = t, e) {
    if (i === T) return i;
    let h = void 0 !== e ? s._$Co?.[e] : s._$Cl;
    const o = c(i) ? void 0 : i._$litDirective$;
    return h?.constructor !== o && (h?._$AO?.(!1), void 0 === o ? h = void 0 : (h = new o(t), h._$AT(t, s, e)), void 0 !== e ? (s._$Co ??= [])[e] = h : s._$Cl = h), void 0 !== h && (i = S(t, h._$AS(t, i.values), h, e)), i;
}
class M {
    constructor(t, i){
        this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
    }
    get parentNode() {
        return this._$AM.parentNode;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    u(t) {
        const { el: { content: i }, parts: s } = this._$AD, e = (t?.creationScope ?? r).importNode(i, !0);
        C.currentNode = e;
        let h = C.nextNode(), o = 0, n = 0, l = s[0];
        for(; void 0 !== l;){
            if (o === l.index) {
                let i;
                2 === l.type ? i = new R(h, h.nextSibling, this, t) : 1 === l.type ? i = new l.ctor(h, l.name, l.strings, this, t) : 6 === l.type && (i = new z(h, this, t)), this._$AV.push(i), l = s[++n];
            }
            o !== l?.index && (h = C.nextNode(), o++);
        }
        return C.currentNode = r, e;
    }
    p(t) {
        let i = 0;
        for (const s of this._$AV)void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
    }
}
class R {
    get _$AU() {
        return this._$AM?._$AU ?? this._$Cv;
    }
    constructor(t, i, s, e){
        this.type = 2, this._$AH = E, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cv = e?.isConnected ?? !0;
    }
    get parentNode() {
        let t = this._$AA.parentNode;
        const i = this._$AM;
        return void 0 !== i && 11 === t?.nodeType && (t = i.parentNode), t;
    }
    get startNode() {
        return this._$AA;
    }
    get endNode() {
        return this._$AB;
    }
    _$AI(t, i = this) {
        t = S(this, t, i), c(t) ? t === E || null == t || "" === t ? (this._$AH !== E && this._$AR(), this._$AH = E) : t !== this._$AH && t !== T && this._(t) : void 0 !== t._$litType$ ? this.$(t) : void 0 !== t.nodeType ? this.T(t) : u(t) ? this.k(t) : this._(t);
    }
    O(t) {
        return this._$AA.parentNode.insertBefore(t, this._$AB);
    }
    T(t) {
        this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
    }
    _(t) {
        this._$AH !== E && c(this._$AH) ? this._$AA.nextSibling.data = t : this.T(r.createTextNode(t)), this._$AH = t;
    }
    $(t) {
        const { values: i, _$litType$: s } = t, e = "number" == typeof s ? this._$AC(t) : (void 0 === s.el && (s.el = N.createElement(P(s.h, s.h[0]), this.options)), s);
        if (this._$AH?._$AD === e) this._$AH.p(i);
        else {
            const t = new M(e, this), s = t.u(this.options);
            t.p(i), this.T(s), this._$AH = t;
        }
    }
    _$AC(t) {
        let i = A.get(t.strings);
        return void 0 === i && A.set(t.strings, i = new N(t)), i;
    }
    k(t) {
        a(this._$AH) || (this._$AH = [], this._$AR());
        const i = this._$AH;
        let s, e = 0;
        for (const h of t)e === i.length ? i.push(s = new R(this.O(l()), this.O(l()), this, this.options)) : s = i[e], s._$AI(h), e++;
        e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
    }
    _$AR(t = this._$AA.nextSibling, i) {
        for(this._$AP?.(!1, !0, i); t !== this._$AB;){
            const i = t.nextSibling;
            t.remove(), t = i;
        }
    }
    setConnected(t) {
        void 0 === this._$AM && (this._$Cv = t, this._$AP?.(t));
    }
}
class k {
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    constructor(t, i, s, e, h){
        this.type = 1, this._$AH = E, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = h, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String), this.strings = s) : this._$AH = E;
    }
    _$AI(t, i = this, s, e) {
        const h = this.strings;
        let o = !1;
        if (void 0 === h) t = S(this, t, i, 0), o = !c(t) || t !== this._$AH && t !== T, o && (this._$AH = t);
        else {
            const e = t;
            let n, r;
            for(t = h[0], n = 0; n < h.length - 1; n++)r = S(this, e[s + n], i, n), r === T && (r = this._$AH[n]), o ||= !c(r) || r !== this._$AH[n], r === E ? t = E : t !== E && (t += (r ?? "") + h[n + 1]), this._$AH[n] = r;
        }
        o && !e && this.j(t);
    }
    j(t) {
        t === E ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
    }
}
class H extends k {
    constructor(){
        super(...arguments), this.type = 3;
    }
    j(t) {
        this.element[this.name] = t === E ? void 0 : t;
    }
}
class I extends k {
    constructor(){
        super(...arguments), this.type = 4;
    }
    j(t) {
        this.element.toggleAttribute(this.name, !!t && t !== E);
    }
}
class L extends k {
    constructor(t, i, s, e, h){
        super(t, i, s, e, h), this.type = 5;
    }
    _$AI(t, i = this) {
        if ((t = S(this, t, i, 0) ?? E) === T) return;
        const s = this._$AH, e = t === E && s !== E || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, h = t !== E && (s === E || e);
        e && this.element.removeEventListener(this.name, this, s), h && this.element.addEventListener(this.name, this, t), this._$AH = t;
    }
    handleEvent(t) {
        "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
    }
}
class z {
    constructor(t, i, s){
        this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t) {
        S(this, t);
    }
}
const Z = {
    M: e,
    P: h,
    A: o,
    C: 1,
    L: V,
    R: M,
    D: u,
    V: S,
    I: R,
    H: k,
    N: I,
    U: L,
    B: H,
    F: z
}, j = t.litHtmlPolyfillSupport;
j?.(N, R), (t.litHtmlVersions ??= []).push("3.3.1");
const B = (t, i, s)=>{
    const e = s?.renderBefore ?? i;
    let h = e._$litPart$;
    if (void 0 === h) {
        const t = s?.renderBefore ?? null;
        e._$litPart$ = h = new R(i.insertBefore(l(), t), t, void 0, s ?? {});
    }
    return h._$AI(t), h;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"aJ236":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LitElement", ()=>i);
parcelHelpers.export(exports, "_$LE", ()=>n);
var _reactiveElement = require("@lit/reactive-element");
parcelHelpers.exportAll(_reactiveElement, exports);
var _litHtml = require("lit-html");
parcelHelpers.exportAll(_litHtml, exports);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const s = globalThis;
class i extends (0, _reactiveElement.ReactiveElement) {
    constructor(){
        super(...arguments), this.renderOptions = {
            host: this
        }, this._$Do = void 0;
    }
    createRenderRoot() {
        const t = super.createRenderRoot();
        return this.renderOptions.renderBefore ??= t.firstChild, t;
    }
    update(t) {
        const r = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = (0, _litHtml.render)(r, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
        super.connectedCallback(), this._$Do?.setConnected(!0);
    }
    disconnectedCallback() {
        super.disconnectedCallback(), this._$Do?.setConnected(!1);
    }
    render() {
        return 0, _litHtml.noChange;
    }
}
i._$litElement$ = !0, i["finalized"] = !0, s.litElementHydrateSupport?.({
    LitElement: i
});
const o = s.litElementPolyfillSupport;
o?.({
    LitElement: i
});
const n = {
    _$AK: (t, e, r)=>{
        t._$AK(e, r);
    },
    _$AL: (t)=>t._$AL
};
(s.litElementVersions ??= []).push("4.2.1");

},{"@lit/reactive-element":"c9cs8","lit-html":"53YFa","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"53YFa":[function(require,module,exports,__globalThis) {
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_$LH", ()=>Z);
parcelHelpers.export(exports, "html", ()=>x);
parcelHelpers.export(exports, "mathml", ()=>w);
parcelHelpers.export(exports, "noChange", ()=>T);
parcelHelpers.export(exports, "nothing", ()=>E);
parcelHelpers.export(exports, "render", ()=>B);
parcelHelpers.export(exports, "svg", ()=>b);
const t = globalThis, i = t.trustedTypes, s = i ? i.createPolicy("lit-html", {
    createHTML: (t)=>t
}) : void 0, e = "$lit$", h = `lit$${Math.random().toFixed(9).slice(2)}$`, o = "?" + h, n = `<${o}>`, r = document, l = ()=>r.createComment(""), c = (t)=>null === t || "object" != typeof t && "function" != typeof t, a = Array.isArray, u = (t)=>a(t) || "function" == typeof t?.[Symbol.iterator], d = "[ \t\n\f\r]", f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, v = /-->/g, _ = />/g, m = RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), p = /'/g, g = /"/g, $ = /^(?:script|style|textarea|title)$/i, y = (t)=>(i, ...s)=>({
            _$litType$: t,
            strings: i,
            values: s
        }), x = y(1), b = y(2), w = y(3), T = Symbol.for("lit-noChange"), E = Symbol.for("lit-nothing"), A = new WeakMap, C = r.createTreeWalker(r, 129);
function P(t, i) {
    if (!a(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== s ? s.createHTML(i) : i;
}
const V = (t, i)=>{
    const s = t.length - 1, o = [];
    let r, l = 2 === i ? "<svg>" : 3 === i ? "<math>" : "", c = f;
    for(let i = 0; i < s; i++){
        const s = t[i];
        let a, u, d = -1, y = 0;
        for(; y < s.length && (c.lastIndex = y, u = c.exec(s), null !== u);)y = c.lastIndex, c === f ? "!--" === u[1] ? c = v : void 0 !== u[1] ? c = _ : void 0 !== u[2] ? ($.test(u[2]) && (r = RegExp("</" + u[2], "g")), c = m) : void 0 !== u[3] && (c = m) : c === m ? ">" === u[0] ? (c = r ?? f, d = -1) : void 0 === u[1] ? d = -2 : (d = c.lastIndex - u[2].length, a = u[1], c = void 0 === u[3] ? m : '"' === u[3] ? g : p) : c === g || c === p ? c = m : c === v || c === _ ? c = f : (c = m, r = void 0);
        const x = c === m && t[i + 1].startsWith("/>") ? " " : "";
        l += c === f ? s + n : d >= 0 ? (o.push(a), s.slice(0, d) + e + s.slice(d) + h + x) : s + h + (-2 === d ? i : x);
    }
    return [
        P(t, l + (t[s] || "<?>") + (2 === i ? "</svg>" : 3 === i ? "</math>" : "")),
        o
    ];
};
class N {
    constructor({ strings: t, _$litType$: s }, n){
        let r;
        this.parts = [];
        let c = 0, a = 0;
        const u = t.length - 1, d = this.parts, [f, v] = V(t, s);
        if (this.el = N.createElement(f, n), C.currentNode = this.el.content, 2 === s || 3 === s) {
            const t = this.el.content.firstChild;
            t.replaceWith(...t.childNodes);
        }
        for(; null !== (r = C.nextNode()) && d.length < u;){
            if (1 === r.nodeType) {
                if (r.hasAttributes()) for (const t of r.getAttributeNames())if (t.endsWith(e)) {
                    const i = v[a++], s = r.getAttribute(t).split(h), e = /([.?@])?(.*)/.exec(i);
                    d.push({
                        type: 1,
                        index: c,
                        name: e[2],
                        strings: s,
                        ctor: "." === e[1] ? H : "?" === e[1] ? I : "@" === e[1] ? L : k
                    }), r.removeAttribute(t);
                } else t.startsWith(h) && (d.push({
                    type: 6,
                    index: c
                }), r.removeAttribute(t));
                if ($.test(r.tagName)) {
                    const t = r.textContent.split(h), s = t.length - 1;
                    if (s > 0) {
                        r.textContent = i ? i.emptyScript : "";
                        for(let i = 0; i < s; i++)r.append(t[i], l()), C.nextNode(), d.push({
                            type: 2,
                            index: ++c
                        });
                        r.append(t[s], l());
                    }
                }
            } else if (8 === r.nodeType) {
                if (r.data === o) d.push({
                    type: 2,
                    index: c
                });
                else {
                    let t = -1;
                    for(; -1 !== (t = r.data.indexOf(h, t + 1));)d.push({
                        type: 7,
                        index: c
                    }), t += h.length - 1;
                }
            }
            c++;
        }
    }
    static createElement(t, i) {
        const s = r.createElement("template");
        return s.innerHTML = t, s;
    }
}
function S(t, i, s = t, e) {
    if (i === T) return i;
    let h = void 0 !== e ? s._$Co?.[e] : s._$Cl;
    const o = c(i) ? void 0 : i._$litDirective$;
    return h?.constructor !== o && (h?._$AO?.(!1), void 0 === o ? h = void 0 : (h = new o(t), h._$AT(t, s, e)), void 0 !== e ? (s._$Co ??= [])[e] = h : s._$Cl = h), void 0 !== h && (i = S(t, h._$AS(t, i.values), h, e)), i;
}
class M {
    constructor(t, i){
        this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
    }
    get parentNode() {
        return this._$AM.parentNode;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    u(t) {
        const { el: { content: i }, parts: s } = this._$AD, e = (t?.creationScope ?? r).importNode(i, !0);
        C.currentNode = e;
        let h = C.nextNode(), o = 0, n = 0, l = s[0];
        for(; void 0 !== l;){
            if (o === l.index) {
                let i;
                2 === l.type ? i = new R(h, h.nextSibling, this, t) : 1 === l.type ? i = new l.ctor(h, l.name, l.strings, this, t) : 6 === l.type && (i = new z(h, this, t)), this._$AV.push(i), l = s[++n];
            }
            o !== l?.index && (h = C.nextNode(), o++);
        }
        return C.currentNode = r, e;
    }
    p(t) {
        let i = 0;
        for (const s of this._$AV)void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
    }
}
class R {
    get _$AU() {
        return this._$AM?._$AU ?? this._$Cv;
    }
    constructor(t, i, s, e){
        this.type = 2, this._$AH = E, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cv = e?.isConnected ?? !0;
    }
    get parentNode() {
        let t = this._$AA.parentNode;
        const i = this._$AM;
        return void 0 !== i && 11 === t?.nodeType && (t = i.parentNode), t;
    }
    get startNode() {
        return this._$AA;
    }
    get endNode() {
        return this._$AB;
    }
    _$AI(t, i = this) {
        t = S(this, t, i), c(t) ? t === E || null == t || "" === t ? (this._$AH !== E && this._$AR(), this._$AH = E) : t !== this._$AH && t !== T && this._(t) : void 0 !== t._$litType$ ? this.$(t) : void 0 !== t.nodeType ? this.T(t) : u(t) ? this.k(t) : this._(t);
    }
    O(t) {
        return this._$AA.parentNode.insertBefore(t, this._$AB);
    }
    T(t) {
        this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
    }
    _(t) {
        this._$AH !== E && c(this._$AH) ? this._$AA.nextSibling.data = t : this.T(r.createTextNode(t)), this._$AH = t;
    }
    $(t) {
        const { values: i, _$litType$: s } = t, e = "number" == typeof s ? this._$AC(t) : (void 0 === s.el && (s.el = N.createElement(P(s.h, s.h[0]), this.options)), s);
        if (this._$AH?._$AD === e) this._$AH.p(i);
        else {
            const t = new M(e, this), s = t.u(this.options);
            t.p(i), this.T(s), this._$AH = t;
        }
    }
    _$AC(t) {
        let i = A.get(t.strings);
        return void 0 === i && A.set(t.strings, i = new N(t)), i;
    }
    k(t) {
        a(this._$AH) || (this._$AH = [], this._$AR());
        const i = this._$AH;
        let s, e = 0;
        for (const h of t)e === i.length ? i.push(s = new R(this.O(l()), this.O(l()), this, this.options)) : s = i[e], s._$AI(h), e++;
        e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
    }
    _$AR(t = this._$AA.nextSibling, i) {
        for(this._$AP?.(!1, !0, i); t !== this._$AB;){
            const i = t.nextSibling;
            t.remove(), t = i;
        }
    }
    setConnected(t) {
        void 0 === this._$AM && (this._$Cv = t, this._$AP?.(t));
    }
}
class k {
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    constructor(t, i, s, e, h){
        this.type = 1, this._$AH = E, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = h, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String), this.strings = s) : this._$AH = E;
    }
    _$AI(t, i = this, s, e) {
        const h = this.strings;
        let o = !1;
        if (void 0 === h) t = S(this, t, i, 0), o = !c(t) || t !== this._$AH && t !== T, o && (this._$AH = t);
        else {
            const e = t;
            let n, r;
            for(t = h[0], n = 0; n < h.length - 1; n++)r = S(this, e[s + n], i, n), r === T && (r = this._$AH[n]), o ||= !c(r) || r !== this._$AH[n], r === E ? t = E : t !== E && (t += (r ?? "") + h[n + 1]), this._$AH[n] = r;
        }
        o && !e && this.j(t);
    }
    j(t) {
        t === E ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
    }
}
class H extends k {
    constructor(){
        super(...arguments), this.type = 3;
    }
    j(t) {
        this.element[this.name] = t === E ? void 0 : t;
    }
}
class I extends k {
    constructor(){
        super(...arguments), this.type = 4;
    }
    j(t) {
        this.element.toggleAttribute(this.name, !!t && t !== E);
    }
}
class L extends k {
    constructor(t, i, s, e, h){
        super(t, i, s, e, h), this.type = 5;
    }
    _$AI(t, i = this) {
        if ((t = S(this, t, i, 0) ?? E) === T) return;
        const s = this._$AH, e = t === E && s !== E || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, h = t !== E && (s === E || e);
        e && this.element.removeEventListener(this.name, this, s), h && this.element.addEventListener(this.name, this, t), this._$AH = t;
    }
    handleEvent(t) {
        "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
    }
}
class z {
    constructor(t, i, s){
        this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t) {
        S(this, t);
    }
}
const Z = {
    M: e,
    P: h,
    A: o,
    C: 1,
    L: V,
    R: M,
    D: u,
    V: S,
    I: R,
    H: k,
    N: I,
    U: L,
    B: H,
    F: z
}, j = t.litHtmlPolyfillSupport;
j?.(N, R), (t.litHtmlVersions ??= []).push("3.3.1");
const B = (t, i, s)=>{
    const e = s?.renderBefore ?? i;
    let h = e._$litPart$;
    if (void 0 === h) {
        const t = s?.renderBefore ?? null;
        e._$litPart$ = h = new R(i.insertBefore(l(), t), t, void 0, s ?? {});
    }
    return h._$AI(t), h;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"4HfcG":[function(require,module,exports,__globalThis) {
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isServer", ()=>o);
const o = !1;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"k72g6":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _asyncDirectiveJs = require("lit-html/async-directive.js");
parcelHelpers.exportAll(_asyncDirectiveJs, exports);

},{"lit-html/async-directive.js":"kjgd1","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"kjgd1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "directive", ()=>(0, _directiveJs.directive));
parcelHelpers.export(exports, "AsyncDirective", ()=>f);
parcelHelpers.export(exports, "Directive", ()=>(0, _directiveJs.Directive));
parcelHelpers.export(exports, "PartType", ()=>(0, _directiveJs.PartType));
var _directiveHelpersJs = require("./directive-helpers.js");
var _directiveJs = require("./directive.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const s = (i, t)=>{
    const e = i._$AN;
    if (void 0 === e) return !1;
    for (const i of e)i._$AO?.(t, !1), s(i, t);
    return !0;
}, o = (i)=>{
    let t, e;
    do {
        if (void 0 === (t = i._$AM)) break;
        e = t._$AN, e.delete(i), i = t;
    }while (0 === e?.size);
}, r = (i)=>{
    for(let t; t = i._$AM; i = t){
        let e = t._$AN;
        if (void 0 === e) t._$AN = e = new Set;
        else if (e.has(i)) break;
        e.add(i), c(t);
    }
};
function h(i) {
    void 0 !== this._$AN ? (o(this), this._$AM = i, r(this)) : this._$AM = i;
}
function n(i, t = !1, e = 0) {
    const r = this._$AH, h = this._$AN;
    if (void 0 !== h && 0 !== h.size) {
        if (t) {
            if (Array.isArray(r)) for(let i = e; i < r.length; i++)s(r[i], !1), o(r[i]);
            else null != r && (s(r, !1), o(r));
        } else s(this, i);
    }
}
const c = (i)=>{
    i.type == (0, _directiveJs.PartType).CHILD && (i._$AP ??= n, i._$AQ ??= h);
};
class f extends (0, _directiveJs.Directive) {
    constructor(){
        super(...arguments), this._$AN = void 0;
    }
    _$AT(i, t, e) {
        super._$AT(i, t, e), r(this), this.isConnected = i._$AU;
    }
    _$AO(i, t = !0) {
        i !== this.isConnected && (this.isConnected = i, i ? this.reconnected?.() : this.disconnected?.()), t && (s(this, i), o(this));
    }
    setValue(t) {
        if ((0, _directiveHelpersJs.isSingleExpression)(this._$Ct)) this._$Ct._$AI(t, this);
        else {
            const i = [
                ...this._$Ct._$AH
            ];
            i[this._$Ci] = t, this._$Ct._$AI(i, this, 0);
        }
    }
    disconnected() {}
    reconnected() {}
}

},{"./directive-helpers.js":"hpTMB","./directive.js":"g2JOH","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"hpTMB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TemplateResultType", ()=>n);
parcelHelpers.export(exports, "clearPart", ()=>h);
parcelHelpers.export(exports, "getCommittedValue", ()=>p);
parcelHelpers.export(exports, "getDirectiveClass", ()=>c);
parcelHelpers.export(exports, "insertPart", ()=>s);
parcelHelpers.export(exports, "isCompiledTemplateResult", ()=>l);
parcelHelpers.export(exports, "isDirectiveResult", ()=>d);
parcelHelpers.export(exports, "isPrimitive", ()=>i);
parcelHelpers.export(exports, "isSingleExpression", ()=>f);
parcelHelpers.export(exports, "isTemplateResult", ()=>e);
parcelHelpers.export(exports, "removePart", ()=>M);
parcelHelpers.export(exports, "setChildPartValue", ()=>v);
parcelHelpers.export(exports, "setCommittedValue", ()=>m);
var _litHtmlJs = require("./lit-html.js");
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const { I: t } = (0, _litHtmlJs._$LH), i = (o)=>null === o || "object" != typeof o && "function" != typeof o, n = {
    HTML: 1,
    SVG: 2,
    MATHML: 3
}, e = (o, t)=>void 0 === t ? void 0 !== o?._$litType$ : o?._$litType$ === t, l = (o)=>null != o?._$litType$?.h, d = (o)=>void 0 !== o?._$litDirective$, c = (o)=>o?._$litDirective$, f = (o)=>void 0 === o.strings, r = ()=>document.createComment(""), s = (o, i, n)=>{
    const e = o._$AA.parentNode, l = void 0 === i ? o._$AB : i._$AA;
    if (void 0 === n) {
        const i = e.insertBefore(r(), l), d = e.insertBefore(r(), l);
        n = new t(i, d, o, o.options);
    } else {
        const t = n._$AB.nextSibling, i = n._$AM, d = i !== o;
        if (d) {
            let t;
            n._$AQ?.(o), n._$AM = o, void 0 !== n._$AP && (t = o._$AU) !== i._$AU && n._$AP(t);
        }
        if (t !== l || d) {
            let o = n._$AA;
            for(; o !== t;){
                const t = o.nextSibling;
                e.insertBefore(o, l), o = t;
            }
        }
    }
    return n;
}, v = (o, t, i = o)=>(o._$AI(t, i), o), u = {}, m = (o, t = u)=>o._$AH = t, p = (o)=>o._$AH, M = (o)=>{
    o._$AR(), o._$AA.remove();
}, h = (o)=>{
    o._$AR();
};

},{"./lit-html.js":"jPNGZ","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1aP41":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Store", ()=>Store);
/** Extract ingredients as ShoppingItem[], dropping measures */ parcelHelpers.export(exports, "extractIngredients", ()=>extractIngredients);
class StoreClass {
    setQuery(q) {
        this.query = q;
        this._notify();
    }
    setResults(r) {
        this.results = r;
        this._notify();
    }
    /** Dedup by ingredient name (key), show only the name (label) */ addToShopping(items) {
        const existing = new Set(this.shopping.map((s)=>s.key));
        for (const it of items){
            if (!it.key) continue;
            if (!existing.has(it.key)) {
                existing.add(it.key);
                this.shopping.push({
                    key: it.key,
                    label: it.label
                });
            }
        }
        this._notify();
    }
    removeShopping(key) {
        const idx = this.shopping.findIndex((i)=>i.key === key);
        if (idx >= 0) this.shopping.splice(idx, 1);
        this._notify();
    }
    clearShopping() {
        this.shopping = [];
        this._notify();
    }
    subscribe(fn) {
        if (!this._subscribers.includes(fn)) this._subscribers.push(fn);
        return ()=>{
            const idx = this._subscribers.indexOf(fn);
            if (idx >= 0) this._subscribers.splice(idx, 1);
        };
    }
    _notify() {
        this._subscribers.forEach((fn)=>fn());
    }
    constructor(){
        this._subscribers = [];
        this.query = "";
        this.results = [];
        this.shopping = [];
    }
}
const Store = new StoreClass();
function extractIngredients(d) {
    const out = [];
    for(let i = 1; i <= 15; i++){
        const keyName = `strIngredient${i}`;
        const name = d[keyName];
        if (!name || !String(name).trim()) continue;
        const cleanName = String(name).trim();
        const key = cleanName.toLowerCase();
        const label = cleanName;
        out.push({
            key,
            label
        });
    }
    return out;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"bOIxB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Toaster", ()=>Toaster);
class ToasterClass {
    push(msg) {
        const m = {
            id: Date.now() + Math.random(),
            text: msg
        };
        this.messages.push(m);
        this._notify();
        setTimeout(()=>{
            const idx = this.messages.findIndex((x)=>x.id === m.id);
            if (idx >= 0) {
                this.messages.splice(idx, 1);
                this._notify();
            }
        }, 3200);
    }
    subscribe(fn) {
        if (!this._subscribers.includes(fn)) this._subscribers.push(fn);
        return ()=>{
            const idx = this._subscribers.indexOf(fn);
            if (idx >= 0) this._subscribers.splice(idx, 1);
        };
    }
    _notify() {
        this._subscribers.forEach((fn)=>fn());
    }
    constructor(){
        this._subscribers = [];
        this.messages = [];
    }
}
const Toaster = new ToasterClass();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2B9zK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "searchCocktails", ()=>searchCocktails);
const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1';
async function searchCocktails(query) {
    const res = await fetch(`${BASE_URL}/search.php?s=${encodeURIComponent(query)}`);
    const json = await res.json();
    return json.drinks ?? [];
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"eYwB0":[function(require,module,exports,__globalThis) {
var _litHtml = require("lit-html");
var _haunted = require("haunted");
var _store = require("../services/Store");
var _toaster = require("../services/Toaster");
const sheet = new CSSStyleSheet();
sheet.replaceSync(`
  .card {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
    transition: box-shadow 0.3s ease, transform 0.3s ease;
    overflow: hidden;
    min-height: 220px;
    margin-bottom: 16px;
  }

  .card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }

  .thumb {
    flex: 1 1 50%;
    max-width: 50%;
    overflow: hidden;
    aspect-ratio: 4 / 3;
  }

  .thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .meta {
    flex: 1 1 50%;
    max-width: 50%;
    display: flex;
    flex-direction: column;
    padding: 16px;
    gap: 8px;
  }

  .card-buttons {
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: auto;
  }

  .card-buttons button {
    border-radius: 6px;
    padding: 4px 8px;
  }
`);
function CocktailResults() {
    const [results, setResults] = (0, _haunted.useState)((0, _store.Store).results);
    (0, _haunted.useEffect)(()=>{
        if (this.shadowRoot) this.shadowRoot.adoptedStyleSheets = [
            sheet
        ];
        const unsub = (0, _store.Store).subscribe(()=>setResults([
                ...(0, _store.Store).results
            ]));
        return unsub;
    }, []);
    function addDrinkToShopping(drink) {
        const ingredients = (0, _store.extractIngredients)(drink);
        if (ingredients.length === 0) {
            (0, _toaster.Toaster).push("No ingredients found in this recipe.");
            return;
        }
        (0, _store.Store).addToShopping(ingredients);
        (0, _toaster.Toaster).push("Ingredients added to shopping list.");
    }
    return (0, _litHtml.html)`
    ${results.length === 0 ? (0, _litHtml.html)`<p class="small">No cocktails to show. Try searching for "margarita".</p>` : results.map((drink)=>(0, _litHtml.html)`
            <div class="card">
              <div class="thumb">
                <img src="${drink.strDrinkThumb ?? ""}" alt="${drink.strDrink ?? ""}" />
              </div>
              <div class="meta">
                <h3>${drink.strDrink}</h3>
                <div class="instructions">${drink.strInstructions ?? ""}</div>
                <div class="card-buttons">
                  <button @click=${()=>addDrinkToShopping(drink)}>+ Add ingredients</button>
                </div>
              </div>
            </div>
          `)}
  `;
}
customElements.define("cocktail-results", (0, _haunted.component)(CocktailResults));

},{"lit-html":"l15as","haunted":"afv1t","../services/Store":"1aP41","../services/Toaster":"bOIxB"}],"8TNTQ":[function(require,module,exports,__globalThis) {
var _litHtml = require("lit-html");
var _haunted = require("haunted");
var _store = require("../services/Store");
var _toaster = require("../services/Toaster");
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

  .list-item button,
  button {
    padding: 4px 8px;
    cursor: pointer;
    border-radius: 6px;
  }

  .actions {
    display: flex;
    gap: 8px;
    margin-top: 10px;
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
function ShoppingList() {
    const [items, setItems] = (0, _haunted.useState)((0, _store.Store).shopping);
    (0, _haunted.useEffect)(()=>{
        const unsub = (0, _store.Store).subscribe(()=>setItems([
                ...(0, _store.Store).shopping
            ]));
        return unsub;
    }, []);
    (0, _haunted.useEffect)(()=>{
        if (this.shadowRoot) this.shadowRoot.adoptedStyleSheets = [
            sheet
        ];
    }, []);
    return (0, _litHtml.html)`
    <div class="list">
      ${items.length === 0 ? (0, _litHtml.html)`<p class="small">No items yet — add some cocktails.</p>` : items.map((item)=>(0, _litHtml.html)`
              <div class="list-item">
                <div>${item.label}</div>
                <div>
                  <button
                    @click=${()=>{
            (0, _store.Store).removeShopping(item.key);
            (0, _toaster.Toaster).push("Ingredient removed from shopping list.");
        }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            `)}
    </div>

    <div class="actions">
      <button @click=${()=>window.print()}>Print</button>
      <button
        @click=${()=>{
        (0, _store.Store).clearShopping();
        (0, _toaster.Toaster).push("Shopping list cleared.");
    }}
      >
        Clear
      </button>
    </div>
  `;
}
customElements.define("shopping-list", (0, _haunted.component)(ShoppingList));

},{"lit-html":"l15as","haunted":"afv1t","../services/Store":"1aP41","../services/Toaster":"bOIxB"}],"iL5hM":[function(require,module,exports,__globalThis) {
var _litHtml = require("lit-html");
var _haunted = require("haunted");
var _toaster = require("../services/Toaster");
function AppToaster() {
    const [msgs, setMsgs] = (0, _haunted.useState)((0, _toaster.Toaster).messages);
    (0, _haunted.useEffect)(()=>{
        const unsub = (0, _toaster.Toaster).subscribe(()=>setMsgs([
                ...(0, _toaster.Toaster).messages
            ]));
        return unsub;
    }, []);
    return (0, _litHtml.html)`
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

    ${msgs.length > 0 ? (0, _litHtml.html)`
          <div class="toaster-box">
            ${msgs.map((m)=>(0, _litHtml.html)`<div class="toast">${m.text}</div>`)}
          </div>
        ` : null}
  `;
}
customElements.define("app-toaster", (0, _haunted.component)(AppToaster));

},{"lit-html":"l15as","haunted":"afv1t","../services/Toaster":"bOIxB"}]},["eZFTg","9Fk10"], "9Fk10", "parcelRequire99d0", {})

//# sourceMappingURL=Cocktail-Assistant.c9112ede.js.map
