module.exports=[20614,(e,t,r)=>{t.exports=e.x("esbuild-b0eaee24078f6af5",()=>require("esbuild-b0eaee24078f6af5"))},83873,e=>{"use strict";var t=e.i(77066),r=e.i(54940),a=e.i(46543),n=e.i(92891),i=e.i(20961),o=e.i(89987),s=e.i(8150),l=e.i(22694),d=e.i(82817),c=e.i(88035),u=e.i(48621),p=e.i(73061),f=e.i(2429),h=e.i(87481),m=e.i(50517),g=e.i(93695);e.i(64146);var v=e.i(40154),x=e.i(42746),y=e.i(86864),b=e.i(20614);let w={"shims/next-image.tsx":`import React from "react";
export default function Image({ src, alt, width, height, fill, style, className, ...rest }: any) {
  const imgStyle = fill
    ? { position: "absolute" as const, inset: 0, width: "100%", height: "100%", objectFit: "cover" as const, ...style }
    : { width, height, ...style };
  return React.createElement("img", { src, alt, style: imgStyle, className, ...rest });
}
`,"shims/next-link.tsx":`import React from "react";
export default function Link({ href, children, className, style, ...rest }: any) {
  return React.createElement("a", { href, className, style, ...rest }, children);
}
`,"shims/next-navigation.ts":`export function useRouter() {
  return { push() {}, replace() {}, back() {}, forward() {}, refresh() {}, prefetch() {} };
}
export function usePathname() { return "/"; }
export function useSearchParams() { return new URLSearchParams(); }
export function useParams() { return {}; }
export function notFound() { throw new Error("Not found"); }
export function redirect(url: string) { window.location.href = url; }
`,"shims/next-router.ts":`export function useRouter() {
  return { push() {}, replace() {}, back() {}, query: {}, pathname: "/", asPath: "/" };
}
export default { push() {}, replace() {}, back() {} };
`,"shims/next-head.tsx":`import React from "react";
export default function Head({ children }: any) { return null; }
`,"shims/next-font-google.ts":`const stub = () => ({ className: "" });
export const Inter = stub;
export const Roboto = stub;
export const Open_Sans = stub;
export const Lato = stub;
export const Montserrat = stub;
export const Poppins = stub;
export default stub;
`},R=["react","react-dom","react-dom/client","react/jsx-runtime","react/jsx-dev-runtime","lucide-react"];function E(e,t){let r=e?e.split("/"):[];for(let e of t.split("/"))".."===e?r.pop():"."!==e&&r.push(e);return r.join("/")}let S=`
(function() {
  // ── CSS ──────────────────────────────────────────────────────────────
  var style = document.createElement('style');
  style.textContent = [
    '.review-highlight {',
    '  outline: 3px solid #3b82f6 !important;',
    '  outline-offset: 2px;',
    '  animation: review-pulse 0.5s ease-in-out 2;',
    '}',
    '@keyframes review-pulse {',
    '  0%, 100% { outline-color: #3b82f6; }',
    '  50% { outline-color: #60a5fa; }',
    '}',
    '.review-indicator-btn {',
    '  position: absolute;',
    '  width: 24px; height: 24px;',
    '  border-radius: 50%;',
    '  pointer-events: auto;',
    '  cursor: pointer;',
    '  display: flex; align-items: center; justify-content: center;',
    '  font-size: 12px; font-weight: bold; font-family: sans-serif;',
    '  color: white; padding: 0;',
    '  box-shadow: 0 2px 8px rgba(0,0,0,0.2);',
    '  border: 2px solid white;',
    '  transform: scale(1);',
    '  transition: transform 0.15s ease-in-out, border 0.15s ease-in-out;',
    '}',
    '.review-indicator-btn[data-selected="true"] {',
    '  border: 3px solid rgba(0,0,0,0.8);',
    '  transform: scale(1.2);',
    '}',
    '.state-transition-trigger {',
    '  outline: 2px solid #6366f1 !important;',
    '  outline-offset: 2px;',
    '  cursor: pointer !important;',
    '  transition: outline-color 0.15s ease, box-shadow 0.15s ease;',
    '}',
    '.state-transition-trigger:hover {',
    '  outline-color: #818cf8 !important;',
    '  box-shadow: 0 0 0 4px rgba(99,102,241,0.15);',
    '}',
    '.click-ripple {',
    '  position: fixed;',
    '  border-radius: 50%;',
    '  background: rgba(99,102,241,0.3);',
    '  pointer-events: none;',
    '  z-index: 99999;',
    '  animation: click-ripple-anim 0.4s ease-out forwards;',
    '}',
    '@keyframes click-ripple-anim {',
    '  0% { width: 0; height: 0; opacity: 1; }',
    '  100% { width: 80px; height: 80px; opacity: 0; }',
    '}',
    '.state-transition-out {',
    '  animation: state-fade-out 0.25s ease-in forwards;',
    '}',
    '@keyframes state-fade-out {',
    '  0% { opacity: 1; }',
    '  100% { opacity: 0; }',
    '}'
  ].join('\\n');
  document.head.appendChild(style);

  // ── Overlay container ────────────────────────────────────────────────
  var overlay = document.createElement('div');
  overlay.style.cssText = 'position:absolute;top:0;left:0;width:0;height:0;overflow:visible;pointer-events:none;z-index:9999;';
  document.body.appendChild(overlay);

  // ── State ────────────────────────────────────────────────────────────
  var indicators = [];
  var selectedId = null;
  var transitions = [];

  // ── Transition trigger classes ─────────────────────────────────────
  function applyTransitionClasses() {
    // Remove old classes
    var old = document.querySelectorAll('.state-transition-trigger');
    for (var i = 0; i < old.length; i++) old[i].classList.remove('state-transition-trigger');
    // Add to matching elements
    for (var t = 0; t < transitions.length; t++) {
      var sel = transitions[t].triggerSelector;
      if (!sel) continue;
      var els = document.querySelectorAll(sel);
      for (var j = 0; j < els.length; j++) els[j].classList.add('state-transition-trigger');
    }
  }

  // ── Global click interceptor (capture phase) ──────────────────────
  document.addEventListener('click', function(e) {
    var target = e.target;

    // 1) Check for transition trigger match
    for (var t = 0; t < transitions.length; t++) {
      var sel = transitions[t].triggerSelector;
      if (!sel) continue;
      var triggerEl = target.closest(sel);
      if (triggerEl) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        // Ripple effect
        var ripple = document.createElement('div');
        ripple.className = 'click-ripple';
        ripple.style.left = (e.clientX - 40) + 'px';
        ripple.style.top = (e.clientY - 40) + 'px';
        document.body.appendChild(ripple);
        setTimeout(function() { ripple.remove(); }, 400);
        // Fade out
        document.body.classList.add('state-transition-out');
        // Notify parent
        parent.postMessage({
          type: 'review-bridge:transitionTriggered',
          toState: transitions[t].toState
        }, '*');
        return;
      }
    }

    // 2) Block any <a> navigation
    var anchor = target.closest('a');
    if (anchor) {
      e.preventDefault();
      e.stopPropagation();
    }
  }, true);

  // ── Indicator rendering ──────────────────────────────────────────────
  function renderIndicators() {
    overlay.innerHTML = '';
    indicators.forEach(function(ind) {
      var target = document.querySelector('[data-review-target="' + ind.target + '"]');
      if (!target) return;
      var rect = target.getBoundingClientRect();
      var x = rect.right + window.scrollX - 12;
      var y = rect.top + window.scrollY - 12;

      var btn = document.createElement('button');
      btn.className = 'review-indicator-btn';
      btn.setAttribute('data-indicator-id', ind.id);
      btn.setAttribute('data-selected', ind.id === selectedId ? 'true' : 'false');
      btn.style.left = x + 'px';
      btn.style.top = y + 'px';
      btn.style.backgroundColor = ind.color;
      btn.textContent = ind.severity === 'critical' ? '!' : '';
      btn.title = ind.title || '';
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        parent.postMessage({ type: 'review-bridge:indicatorClicked', id: ind.id }, '*');
      });
      overlay.appendChild(btn);
    });
    pushSelectedPosition();
  }

  function repositionIndicators() {
    indicators.forEach(function(ind) {
      var target = document.querySelector('[data-review-target="' + ind.target + '"]');
      var btn = overlay.querySelector('[data-indicator-id="' + ind.id + '"]');
      if (!target || !btn) return;
      var rect = target.getBoundingClientRect();
      btn.style.left = (rect.right + window.scrollX - 12) + 'px';
      btn.style.top = (rect.top + window.scrollY - 12) + 'px';
    });
    pushSelectedPosition();
  }

  // ── Selected indicator position (for parent tooltip) ─────────────────
  function pushSelectedPosition() {
    if (!selectedId) return;
    var btn = overlay.querySelector('[data-indicator-id="' + selectedId + '"]');
    if (!btn) {
      parent.postMessage({ type: 'review-bridge:selectedPosition', position: null }, '*');
      return;
    }
    var r = btn.getBoundingClientRect();
    if (r.bottom < 0 || r.top > window.innerHeight || r.right < 0 || r.left > window.innerWidth) {
      parent.postMessage({ type: 'review-bridge:selectedPosition', position: null }, '*');
    } else {
      parent.postMessage({ type: 'review-bridge:selectedPosition', position: { x: r.right, y: r.top + r.height / 2 } }, '*');
    }
  }

  // ── Message handlers ─────────────────────────────────────────────────
  window.addEventListener('message', function(e) {
    var data = e.data;
    if (!data || typeof data.type !== 'string') return;

    if (data.type === 'review-bridge:setTransitions') {
      transitions = data.transitions || [];
      applyTransitionClasses();
    }

    if (data.type === 'review-bridge:setIndicators') {
      indicators = data.indicators || [];
      renderIndicators();
    }

    if (data.type === 'review-bridge:setSelectedId') {
      selectedId = data.id || null;
      // Update selected attribute on existing buttons
      var btns = overlay.querySelectorAll('[data-indicator-id]');
      for (var i = 0; i < btns.length; i++) {
        btns[i].setAttribute('data-selected', btns[i].getAttribute('data-indicator-id') === selectedId ? 'true' : 'false');
      }
      pushSelectedPosition();
    }

    if (data.type === 'review-bridge:highlight') {
      var el = document.querySelector('[data-review-target="' + data.target + '"]');
      if (el) el.classList.add('review-highlight');
    }

    if (data.type === 'review-bridge:unhighlight') {
      var el = document.querySelector('[data-review-target="' + data.target + '"]');
      if (el) el.classList.remove('review-highlight');
    }

    if (data.type === 'review-bridge:scrollTo') {
      var el = document.querySelector('[data-review-target="' + data.target + '"]');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });

  // ── Forward navigation keys to parent ───────────────────────────────
  var NAV_KEYS = { ArrowLeft: 1, ArrowRight: 1, ArrowUp: 1, ArrowDown: 1 };
  document.addEventListener('keydown', function(e) {
    if (NAV_KEYS[e.key] && !(e.target instanceof HTMLInputElement) && !(e.target instanceof HTMLTextAreaElement)) {
      parent.postMessage({ type: 'review-bridge:keydown', key: e.key }, '*');
    }
  });

  // ── Scroll: update selected indicator position ───────────────────────
  var scrollRafId = null;
  window.addEventListener('scroll', function() {
    if (!selectedId || scrollRafId) return;
    scrollRafId = requestAnimationFrame(function() {
      scrollRafId = null;
      pushSelectedPosition();
    });
  }, true);

  // ── Resize / mutations: reposition all indicators ────────────────────
  window.addEventListener('resize', repositionIndicators);

  var mutationRafId = null;
  var observer = new MutationObserver(function(mutations) {
    // Ignore mutations from our own overlay
    for (var i = 0; i < mutations.length; i++) {
      if (mutations[i].target === overlay || overlay.contains(mutations[i].target)) return;
    }
    if (mutationRafId) return;
    mutationRafId = requestAnimationFrame(function() {
      mutationRafId = null;
      repositionIndicators();
      applyTransitionClasses();
    });
  });
  observer.observe(document.documentElement, { childList: true, subtree: true, attributes: true, attributeFilter: ['data-review-target'] });
})();
`;async function C(e,t,r){var a;let n,i,o={};for(let[t,r]of Object.entries(e)){let e=r.replace(/^\s*['"]use client['"];?\s*\n?/m,"");e=e.replace(/(from\s+['"])next\/image(['"])/g,"$1__shims/next-image$2").replace(/(from\s+['"])next\/link(['"])/g,"$1__shims/next-link$2").replace(/(from\s+['"])next\/navigation(['"])/g,"$1__shims/next-navigation$2").replace(/(from\s+['"])next\/router(['"])/g,"$1__shims/next-router$2").replace(/(from\s+['"])next\/head(['"])/g,"$1__shims/next-head$2").replace(/(from\s+['"])next\/font\/google(['"])/g,"$1__shims/next-font-google$2"),o[t]=e}for(let[e,t]of Object.entries(w))o[e]=t;let s=function(e,t){if(!e)return"DefaultState";let r=RegExp(`['"]${t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}['"]\\s*:\\s*(\\w+)`,"m"),a=e.match(r);return a?.[1]??"DefaultState"}(r,t),{path:l,isNamed:d}=function(e,t){if(!e)return{path:"./states/DefaultState",isNamed:!1};let r=RegExp(`import\\s+${t}\\s+from\\s+['"](.+?)['"]`),a=e.match(r);if(a)return{path:a[1],isNamed:!1};let n=RegExp(`import\\s+\\{[^}]*\\b${t}\\b[^}]*\\}\\s+from\\s+['"](.+?)['"]`),i=e.match(n);return i?{path:i[1],isNamed:!0}:{path:`./${t}`,isNamed:!1}}(r,s),c=l;(c.startsWith("./")||c.startsWith("../"))&&(c=`./states/${c.replace(/^\.\//,"")}`);let u=d?`import { ${s} } from "${c}";`:`import ${s} from "${c}";`,p=`import React from "react";
import { createRoot } from "react-dom/client";
${u}

const root = createRoot(document.getElementById("root"));
root.render(React.createElement(${s}));
`;o["__entry__.tsx"]=p;let f=[];for(let[t,r]of Object.entries(e))t.endsWith(".css")&&f.push(r);try{n=await $(o)}catch(t){let e;return e=(t instanceof Error?t.message:String(t)).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),`<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<style>
body { font-family: -apple-system, BlinkMacSystemFont, sans-serif; padding: 2rem; background: #1e1e1e; color: #f8f8f8; }
h2 { color: #ff6b6b; margin-bottom: 1rem; }
pre { background: #2d2d2d; padding: 1.5rem; border-radius: 8px; overflow-x: auto; white-space: pre-wrap; word-break: break-word; font-size: 13px; line-height: 1.5; border: 1px solid #444; }
</style>
</head>
<body>
<h2>Build Error</h2>
<pre>${e}</pre>
</body>
</html>`}return a=n,i=f.join("\n"),`<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<script src="https://cdn.tailwindcss.com"></script>
<script type="importmap">
{
  "imports": {
    "react": "https://esm.sh/react@19?dev",
    "react/jsx-runtime": "https://esm.sh/react@19/jsx-runtime?dev",
    "react/jsx-dev-runtime": "https://esm.sh/react@19/jsx-dev-runtime?dev",
    "react-dom": "https://esm.sh/react-dom@19?dev&deps=react@19",
    "react-dom/client": "https://esm.sh/react-dom@19/client?dev&deps=react@19",
    "lucide-react": "https://esm.sh/lucide-react@latest?deps=react@19"
  }
}
</script>
<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
${i}
</style>
</head>
<body>
<div id="root"></div>
<script type="module">
${a}
</script>
<script>${S}</script>
</body>
</html>`}async function $(e){let t=await b.build({entryPoints:["__entry__.tsx"],bundle:!0,write:!1,format:"esm",jsx:"automatic",jsxImportSource:"react",target:"es2020",plugins:[{name:"virtual-fs",setup(t){t.onResolve({filter:/.*/},t=>{if(R.some(e=>t.path===e||t.path.startsWith(e+"/")))return{path:t.path,external:!0};if("entry-point"===t.kind)return{path:t.path,namespace:"virtual"};if(t.path.startsWith("./")||t.path.startsWith("../")){let r=t.importer||"",a=r.lastIndexOf("/"),n=E(a>=0?r.substring(0,a):"",t.path);for(let t of[n,`${n}.tsx`,`${n}.ts`,`${n}.jsx`,`${n}.js`,`${n}/index.tsx`,`${n}/index.ts`,`${n}/index.jsx`,`${n}/index.js`])if(e[t])return{path:t,namespace:"virtual"}}if(t.path.startsWith("__shims/")){let r="shims/"+t.path.slice(8);for(let t of[`${r}.tsx`,`${r}.ts`,`${r}.jsx`,`${r}.js`])if(e[t])return{path:t,namespace:"virtual"}}if(!t.path.startsWith(".")&&!t.path.startsWith("/"))return{path:t.path,external:!0}}),t.onLoad({filter:/.*/,namespace:"virtual"},t=>{let r=e[t.path];if(void 0===r)return{errors:[{text:`File not found: ${t.path}`}]};let a=t.path.split(".").pop()||"tsx",n=t.path.lastIndexOf("/");return{contents:r,loader:({tsx:"tsx",ts:"ts",jsx:"jsx",js:"js",css:"css"})[a]||"tsx",resolveDir:n>=0?t.path.substring(0,n):""}})}}],logLevel:"silent"});if(t.errors.length>0)throw Error(t.errors.map(e=>e.text).join("\n"));return t.outputFiles[0].text}async function I(e,t,r){let{sources:a,assets:n}=e,i={};for(let[e,t]of Object.entries(a))i[e]=function(e,t,r){return e.replace(/import\s+(\w+)\s+from\s+['"]([^'"]+\.(svg|png|jpe?g|gif|webp|ico))['"]\s*;?/g,(e,a,n)=>{let i=r[E(t.includes("/")?t.substring(0,t.lastIndexOf("/")):"",n)];return i?`const ${a} = ${JSON.stringify(i)};`:`const ${a} = "";`})}(t,e,n);return C(i,t,a["states/index.ts"])}var k=e.i(22734),N=e.i(14747);let A=(0,e.i(68076).resolveProductsDir)();async function P(e,{params:t}){let r=(await t).path;if(r.length<4)return new x.NextResponse("Invalid path — expected /api/preview/{product}/{type}/{name}/{stateId}",{status:400});let[a,n,i,o]=r;if("prototypes"!==n&&"clones"!==n)return new x.NextResponse("Invalid type — must be prototypes or clones",{status:400});let s="prototypes"===n?function(e,t){let r=N.default.join(A,e,"prototypes",t,"prototype.json");if(!k.default.existsSync(r))return null;try{return JSON.parse(k.default.readFileSync(r,"utf-8"))}catch(e){return null}}(a,i):function(e,t){let r=N.default.join(A,e,"clones",t,"clone.json");if(!k.default.existsSync(r))return null;try{return JSON.parse(k.default.readFileSync(r,"utf-8"))}catch(e){return null}}(a,i);if(!s)return new x.NextResponse("Prototype not found",{status:404});let l=(0,y.loadSourceFiles)(a,n,i);if(!l)return new x.NextResponse("No source files found (missing states/index.ts)",{status:404});let d=await I(l,o,s.states);return new x.NextResponse(d,{headers:{"Content-Type":"text/html; charset=utf-8","Cache-Control":"no-store"}})}e.s(["GET",()=>P],47586);var _=e.i(47586);let j=new t.AppRouteRouteModule({definition:{kind:r.RouteKind.APP_ROUTE,page:"/api/preview/[...path]/route",pathname:"/api/preview/[...path]",filename:"route",bundlePath:""},distDir:".next",relativeProjectDir:"",resolvedPagePath:"[project]/packages/local-viewer/app/api/preview/[...path]/route.ts",nextConfigOutput:"standalone",userland:_}),{workAsyncStorage:T,workUnitAsyncStorage:O,serverHooks:q}=j;function L(){return(0,a.patchFetch)({workAsyncStorage:T,workUnitAsyncStorage:O})}async function M(e,t,a){j.isDev&&(0,n.addRequestMeta)(e,"devRequestTimingInternalsEnd",process.hrtime.bigint());let x="/api/preview/[...path]/route";x=x.replace(/\/index$/,"")||"/";let y=await j.prepare(e,t,{srcPage:x,multiZoneDraftMode:!1});if(!y)return t.statusCode=400,t.end("Bad Request"),null==a.waitUntil||a.waitUntil.call(a,Promise.resolve()),null;let{buildId:b,params:w,nextConfig:R,parsedUrl:E,isDraftMode:S,prerenderManifest:C,routerServerContext:$,isOnDemandRevalidate:I,revalidateOnlyGenerated:k,resolvedPathname:N,clientReferenceManifest:A,serverActionsManifest:P}=y,_=(0,s.normalizeAppPath)(x),T=!!(C.dynamicRoutes[_]||C.routes[N]),O=async()=>((null==$?void 0:$.render404)?await $.render404(e,t,E,!1):t.end("This page could not be found"),null);if(T&&!S){let e=!!C.routes[N],t=C.dynamicRoutes[_];if(t&&!1===t.fallback&&!e){if(R.experimental.adapterPath)return await O();throw new g.NoFallbackError}}let q=null;!T||j.isDev||S||(q="/index"===(q=N)?"/":q);let L=!0===j.isDev||!T,M=T&&!L;P&&A&&(0,o.setManifestsSingleton)({page:x,clientReferenceManifest:A,serverActionsManifest:P});let D=e.method||"GET",H=(0,i.getTracer)(),F=H.getActiveScopeSpan(),U={params:w,prerenderManifest:C,renderOpts:{experimental:{authInterrupts:!!R.experimental.authInterrupts},cacheComponents:!!R.cacheComponents,supportsDynamicResponse:L,incrementalCache:(0,n.getRequestMeta)(e,"incrementalCache"),cacheLifeProfiles:R.cacheLife,waitUntil:a.waitUntil,onClose:e=>{t.on("close",e)},onAfterTaskError:void 0,onInstrumentationRequestError:(t,r,a,n)=>j.onRequestError(e,t,a,n,$)},sharedContext:{buildId:b}},B=new l.NodeNextRequest(e),W=new l.NodeNextResponse(t),K=d.NextRequestAdapter.fromNodeNextRequest(B,(0,d.signalFromNodeResponse)(t));try{let o=async e=>j.handle(K,U).finally(()=>{if(!e)return;e.setAttributes({"http.status_code":t.statusCode,"next.rsc":!1});let r=H.getRootSpanAttributes();if(!r)return;if(r.get("next.span_type")!==c.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${r.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let a=r.get("next.route");if(a){let t=`${D} ${a}`;e.setAttributes({"next.route":a,"http.route":a,"next.span_name":t}),e.updateName(t)}else e.updateName(`${D} ${x}`)}),s=!!(0,n.getRequestMeta)(e,"minimalMode"),l=async n=>{var i,l;let d=async({previousCacheEntry:r})=>{try{if(!s&&I&&k&&!r)return t.statusCode=404,t.setHeader("x-nextjs-cache","REVALIDATED"),t.end("This page could not be found"),null;let i=await o(n);e.fetchMetrics=U.renderOpts.fetchMetrics;let l=U.renderOpts.pendingWaitUntil;l&&a.waitUntil&&(a.waitUntil(l),l=void 0);let d=U.renderOpts.collectedTags;if(!T)return await (0,p.sendResponse)(B,W,i,U.renderOpts.pendingWaitUntil),null;{let e=await i.blob(),t=(0,f.toNodeOutgoingHttpHeaders)(i.headers);d&&(t[m.NEXT_CACHE_TAGS_HEADER]=d),!t["content-type"]&&e.type&&(t["content-type"]=e.type);let r=void 0!==U.renderOpts.collectedRevalidate&&!(U.renderOpts.collectedRevalidate>=m.INFINITE_CACHE)&&U.renderOpts.collectedRevalidate,a=void 0===U.renderOpts.collectedExpire||U.renderOpts.collectedExpire>=m.INFINITE_CACHE?void 0:U.renderOpts.collectedExpire;return{value:{kind:v.CachedRouteKind.APP_ROUTE,status:i.status,body:Buffer.from(await e.arrayBuffer()),headers:t},cacheControl:{revalidate:r,expire:a}}}}catch(t){throw(null==r?void 0:r.isStale)&&await j.onRequestError(e,t,{routerKind:"App Router",routePath:x,routeType:"route",revalidateReason:(0,u.getRevalidateReason)({isStaticGeneration:M,isOnDemandRevalidate:I})},!1,$),t}},c=await j.handleResponse({req:e,nextConfig:R,cacheKey:q,routeKind:r.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:C,isRoutePPREnabled:!1,isOnDemandRevalidate:I,revalidateOnlyGenerated:k,responseGenerator:d,waitUntil:a.waitUntil,isMinimalMode:s});if(!T)return null;if((null==c||null==(i=c.value)?void 0:i.kind)!==v.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==c||null==(l=c.value)?void 0:l.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});s||t.setHeader("x-nextjs-cache",I?"REVALIDATED":c.isMiss?"MISS":c.isStale?"STALE":"HIT"),S&&t.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let g=(0,f.fromNodeOutgoingHttpHeaders)(c.value.headers);return s&&T||g.delete(m.NEXT_CACHE_TAGS_HEADER),!c.cacheControl||t.getHeader("Cache-Control")||g.get("Cache-Control")||g.set("Cache-Control",(0,h.getCacheControlHeader)(c.cacheControl)),await (0,p.sendResponse)(B,W,new Response(c.value.body,{headers:g,status:c.value.status||200})),null};F?await l(F):await H.withPropagatedContext(e.headers,()=>H.trace(c.BaseServerSpan.handleRequest,{spanName:`${D} ${x}`,kind:i.SpanKind.SERVER,attributes:{"http.method":D,"http.target":e.url}},l))}catch(t){if(t instanceof g.NoFallbackError||await j.onRequestError(e,t,{routerKind:"App Router",routePath:_,routeType:"route",revalidateReason:(0,u.getRevalidateReason)({isStaticGeneration:M,isOnDemandRevalidate:I})},!1,$),T)throw t;return await (0,p.sendResponse)(B,W,new Response(null,{status:500})),null}}e.s(["handler",()=>M,"patchFetch",()=>L,"routeModule",()=>j,"serverHooks",()=>q,"workAsyncStorage",()=>T,"workUnitAsyncStorage",()=>O],83873)}];

//# sourceMappingURL=%5Broot-of-the-server%5D__14092b93._.js.map