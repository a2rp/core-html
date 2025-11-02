import{d as s,r as n,j as e,N as d}from"./index-CQ_xjxjH.js";import{H as l}from"./index-C8nEF-Cf.js";const t={Page:s.main`
        display: grid;
        gap: 16px;
        padding: 16px;
        max-width: 1100px;
        margin: 0 auto;

        .pageHeader {
            display: grid;
            gap: 8px;
        }
        .lede {
            color: var(--text-muted);
            font-size: 15px;
        }
        .muted {
            color: var(--text-muted);
        }

        .toc {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            padding: 8px;
            border: 1px solid var(--border);
            border-radius: 12px;
            background: var(--surface);
        }
        .toc a {
            border: 1px solid var(--border);
            background: var(--card);
            color: var(--text);
            padding: 6px 10px;
            border-radius: 999px;
            font-size: 13px;
            text-decoration: none;
        }

        .grid2 {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
        }
        @media (max-width: 900px) {
            .grid2 {
                grid-template-columns: 1fr;
            }
        }

        .card {
            border: 1px solid var(--border);
            background: var(--card);
            border-radius: 12px;
            padding: 12px;
        }

        .bullets {
            padding-left: 18px;
            line-height: 1.8;
        }
        .bullets code {
            font-size: 92%;
        }

        .badges {
            display: grid;
            gap: 8px;
            list-style: none;
            padding: 0;
        }
        .badges .bad,
        .badges .good {
            display: inline-block;
            font-size: 12px;
            padding: 2px 8px;
            border-radius: 999px;
            border: 1px solid var(--border);
            margin-right: 6px;
        }
        .badges .bad {
            background: #2b1a1a;
            color: #ffb4b4;
            border-color: #553;
        }
        .badges .good {
            background: #152417;
            color: #b6f3c1;
            border-color: #264a2b;
        }

        details {
            border: 1px solid var(--border);
            border-radius: 10px;
            padding: 8px 10px;
            background: var(--card);
        }
        details + details {
            margin-top: 8px;
        }
        summary {
            cursor: pointer;
        }

        .note {
            font-size: 14px;
            color: var(--text-muted);
            border-left: 3px solid var(--primary);
            padding: 8px 12px;
            background: color-mix(in oklab, var(--primary), transparent 92%);
            border-radius: 8px;
            margin-top: 8px;
        }

        .backTop {
            text-align: right;
            font-size: 13px;
        }
        .backTop a {
            color: var(--text-muted);
            text-decoration: none;
        }

        pre,
        code {
            font-family: ui-monospace, SFMono-Regular, Menlo, Consolas,
                monospace;
        }
        pre {
            font-size: 0.92rem;
            line-height: 1.5;
            margin: 0;
        }

        .nextPrev {
            margin-top: 24px;
            display: flex;
            justify-content: space-between;
            gap: 12px;
        }
        .nextPrev a {
            color: var(--primary);
            text-decoration: none;
            border: 1px solid var(--surface-400, #333);
            padding: 8px 12px;
            border-radius: 10px;
        }
        .nextPrev a:hover {
            background: var(--surface);
        }
    `,Code:s.div`
        position: relative;
        border: 1px solid var(--surface-400, #333);
        background: var(--surface-200, rgba(255, 255, 255, 0.02));
        border-radius: 10px;
        overflow: hidden;

        pre {
            margin: 0;
            padding: 12px 14px;
            font-family: Consolas, Monaco, "SFMono-Regular", Menlo, monospace;
            font-size: 0.9rem;
            line-height: 1.5;
            color: var(--text);
            overflow-x: auto;
            white-space: pre;
            -webkit-overflow-scrolling: touch;
        }
    `};var i=Object.freeze,c=Object.defineProperty,p=(a,o)=>i(c(a,"raw",{value:i(o||a.slice())})),r;const h=String.raw(r||(r=p([`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>data-* hooks — live demo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui, -apple-system, Segoe UI, Roboto, sans-serif; }
      .grid { display: grid; gap: 14px; }
      .row { display: flex; gap: 8px; flex-wrap: wrap; }

      .card { border: 1px solid #ccc; border-radius: 12px; padding: 12px; }
      .muted { color: #6b7280; }

      button { padding: 8px 12px; border-radius: 10px; border: 1px solid #aaa; background: #f6f6f6; }
      button[data-active="true"] { outline: 2px solid #22c55e; background: #eafff2; }
      [data-theme="dark"] .panel { background: #0f172a; color: #e2e8f0; }
      [data-theme="light"] .panel { background: #f8fafc; color: #0f172a; }

      .panel { border: 1px dashed #aaa; border-radius: 10px; padding: 10px; }
      .k { display:inline-block; border:1px solid #bbb; border-radius:999px; padding:2px 8px; font-size:12px; }

      .log { font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: 13px; white-space: pre-wrap; background: #1118270d; padding: 10px; border-radius: 8px; border: 1px solid #ddd; }
    </style>
  </head>
  <body>
    <main class="grid">
      <header>
        <h1>data-* hooks <small class="muted">custom attributes for your app</small></h1>
        <p class="muted">Use <code>data-*</code> to attach small, semantic-safe hooks—without inventing new semantics or misusing real attributes.</p>
      </header>

      <section class="card">
        <h2>CSS hooks</h2>
        <p>Style by state or config: <span class="k">[data-active="true"]</span>, <span class="k">[data-variant="outline"]</span>, <span class="k">[data-theme]</span>.</p>
        <div class="row">
          <button id="a" data-active="true">A (active)</button>
          <button id="b" data-active="false">B</button>
          <button id="c" data-variant="outline">C (outline)</button>
        </div>
      </section>

      <section class="card" id="app" data-theme="light" data-user-id="42" data-options='{"collapsible":true,"speed":300}'>
        <h2>JS dataset</h2>
        <p>Click to toggle theme and inspect <code>dataset</code> mapping (kebab → camelCase).</p>
        <div class="panel">Panel uses <code>data-theme</code> on parent.</div>
        <div class="row" style="margin-top:8px;">
          <button id="toggleTheme">Toggle theme</button>
          <button id="readData">Read dataset</button>
          <button id="writeData">Write data-action</button>
        </div>
        <div id="out" class="log" aria-live="polite" style="margin-top:10px;"></div>
      </section>

      <footer class="muted">
        Tip: Prefer real attributes for real meaning (<code>aria-*</code>, <code>role</code>, <code>type</code>, <code>disabled</code>). Use <code>data-*</code> for app-specific hints.
      </footer>
    </main>

    <script>
      const el = document.getElementById('app');
      const out = document.getElementById('out');

      function log(obj, title = 'dataset') {
        out.textContent = title + ":\\n" + JSON.stringify(obj, null, 2);
      }

      // dataset mirrors data-* as camelCase keys
      document.getElementById('readData').addEventListener('click', () => {
        // Reading via dataset:
        const info = {
          theme: el.dataset.theme,
          userId: el.dataset.userId,
          optionsRaw: el.dataset.options,
          parsedOptions: (() => { try { return JSON.parse(el.dataset.options || '{}'); } catch { return { error: 'bad JSON'}}; })(),
        };
        log(info, 'read');
      });

      // Writing via dataset sets/updates attributes
      document.getElementById('writeData').addEventListener('click', () => {
        el.dataset.action = 'refresh';
        log({ afterWrite_action: el.dataset.action }, 'write');
      });

      // Toggle theme value and reflect in UI using CSS selectors
      document.getElementById('toggleTheme').addEventListener('click', () => {
        const next = el.dataset.theme === 'light' ? 'dark' : 'light';
        el.dataset.theme = next;
        log({ theme: next }, 'toggle');
      });

      // Bonus: attribute mutation toggles button state
      const btnB = document.getElementById('b');
      btnB.addEventListener('click', () => {
        const prev = btnB.getAttribute('data-active') === 'true';
        btnB.setAttribute('data-active', prev ? 'false' : 'true');
      });

      // Also accessible via getAttribute/setAttribute
      // el.setAttribute('data-user-id', '100');
      // el.getAttribute('data-user-id');
    <\/script>
  </body>
</html>`],[`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>data-* hooks — live demo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui, -apple-system, Segoe UI, Roboto, sans-serif; }
      .grid { display: grid; gap: 14px; }
      .row { display: flex; gap: 8px; flex-wrap: wrap; }

      .card { border: 1px solid #ccc; border-radius: 12px; padding: 12px; }
      .muted { color: #6b7280; }

      button { padding: 8px 12px; border-radius: 10px; border: 1px solid #aaa; background: #f6f6f6; }
      button[data-active="true"] { outline: 2px solid #22c55e; background: #eafff2; }
      [data-theme="dark"] .panel { background: #0f172a; color: #e2e8f0; }
      [data-theme="light"] .panel { background: #f8fafc; color: #0f172a; }

      .panel { border: 1px dashed #aaa; border-radius: 10px; padding: 10px; }
      .k { display:inline-block; border:1px solid #bbb; border-radius:999px; padding:2px 8px; font-size:12px; }

      .log { font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: 13px; white-space: pre-wrap; background: #1118270d; padding: 10px; border-radius: 8px; border: 1px solid #ddd; }
    </style>
  </head>
  <body>
    <main class="grid">
      <header>
        <h1>data-* hooks <small class="muted">custom attributes for your app</small></h1>
        <p class="muted">Use <code>data-*</code> to attach small, semantic-safe hooks—without inventing new semantics or misusing real attributes.</p>
      </header>

      <section class="card">
        <h2>CSS hooks</h2>
        <p>Style by state or config: <span class="k">[data-active="true"]</span>, <span class="k">[data-variant="outline"]</span>, <span class="k">[data-theme]</span>.</p>
        <div class="row">
          <button id="a" data-active="true">A (active)</button>
          <button id="b" data-active="false">B</button>
          <button id="c" data-variant="outline">C (outline)</button>
        </div>
      </section>

      <section class="card" id="app" data-theme="light" data-user-id="42" data-options='{"collapsible":true,"speed":300}'>
        <h2>JS dataset</h2>
        <p>Click to toggle theme and inspect <code>dataset</code> mapping (kebab → camelCase).</p>
        <div class="panel">Panel uses <code>data-theme</code> on parent.</div>
        <div class="row" style="margin-top:8px;">
          <button id="toggleTheme">Toggle theme</button>
          <button id="readData">Read dataset</button>
          <button id="writeData">Write data-action</button>
        </div>
        <div id="out" class="log" aria-live="polite" style="margin-top:10px;"></div>
      </section>

      <footer class="muted">
        Tip: Prefer real attributes for real meaning (<code>aria-*</code>, <code>role</code>, <code>type</code>, <code>disabled</code>). Use <code>data-*</code> for app-specific hints.
      </footer>
    </main>

    <script>
      const el = document.getElementById('app');
      const out = document.getElementById('out');

      function log(obj, title = 'dataset') {
        out.textContent = title + ":\\\\n" + JSON.stringify(obj, null, 2);
      }

      // dataset mirrors data-* as camelCase keys
      document.getElementById('readData').addEventListener('click', () => {
        // Reading via dataset:
        const info = {
          theme: el.dataset.theme,
          userId: el.dataset.userId,
          optionsRaw: el.dataset.options,
          parsedOptions: (() => { try { return JSON.parse(el.dataset.options || '{}'); } catch { return { error: 'bad JSON'}}; })(),
        };
        log(info, 'read');
      });

      // Writing via dataset sets/updates attributes
      document.getElementById('writeData').addEventListener('click', () => {
        el.dataset.action = 'refresh';
        log({ afterWrite_action: el.dataset.action }, 'write');
      });

      // Toggle theme value and reflect in UI using CSS selectors
      document.getElementById('toggleTheme').addEventListener('click', () => {
        const next = el.dataset.theme === 'light' ? 'dark' : 'light';
        el.dataset.theme = next;
        log({ theme: next }, 'toggle');
      });

      // Bonus: attribute mutation toggles button state
      const btnB = document.getElementById('b');
      btnB.addEventListener('click', () => {
        const prev = btnB.getAttribute('data-active') === 'true';
        btnB.setAttribute('data-active', prev ? 'false' : 'true');
      });

      // Also accessible via getAttribute/setAttribute
      // el.setAttribute('data-user-id', '100');
      // el.getAttribute('data-user-id');
    <\/script>
  </body>
</html>`])));function b(){return n.useEffect(()=>{document.title="Global Attributes · data-* hooks (Semantics-safe)"},[]),e.jsxs(t.Page,{children:[e.jsxs("header",{className:"pageHeader",id:"top",children:[e.jsxs("h1",{children:[e.jsx("code",{children:"data-*"})," hooks ",e.jsx("small",{className:"muted",children:"Semantics-safe app data"})]}),e.jsxs("p",{className:"lede",children:[e.jsx("code",{children:"data-*"})," lets you attach tiny, custom data to elements—safe for HTML validation and ignored by browsers/assistive tech as “non-semantic.” Read/write them in JS via ",e.jsx("code",{children:"element.dataset"}),", or style them with CSS attribute selectors."]})]}),e.jsxs("nav",{className:"toc","aria-label":"On this page",children:[e.jsx("a",{href:"#what",children:"What & why"}),e.jsx("a",{href:"#rules",children:"Naming rules"}),e.jsx("a",{href:"#css",children:"CSS hooks"}),e.jsx("a",{href:"#js",children:"JS access (dataset)"}),e.jsx("a",{href:"#a11y",children:"Semantics & a11y"}),e.jsx("a",{href:"#security",children:"Security & perf"}),e.jsx("a",{href:"#patterns",children:"Useful patterns"}),e.jsx("a",{href:"#anti",children:"Anti-patterns"}),e.jsx("a",{href:"#play",children:"Playground"})]}),e.jsxs("section",{id:"what",children:[e.jsx("h2",{children:"What & why"}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Custom attributes"})," that start with ",e.jsx("code",{children:"data-"}),". They’re valid HTML and safe for interoperability."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"For app hints, not meaning."})," Use them to thread small state/config values through the DOM."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Stable hooks."})," Unlike classes (which are purely stylistic), data values can be descriptive, typed (JSON), and queryable."]})]})})]}),e.jsxs("section",{id:"rules",children:[e.jsx("h2",{children:"Naming rules"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"HTML side"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["Must begin with ",e.jsx("code",{children:"data-"}),", followed by a name: ",e.jsx("code",{children:"data-user-id"}),", ",e.jsx("code",{children:"data-theme"}),"."]}),e.jsxs("li",{children:["Use ",e.jsx("strong",{children:"kebab-case"})," for multiword names: ",e.jsx("code",{children:"data-panel-state"}),"."]}),e.jsx("li",{children:"Values are strings. You can store JSON, but parse carefully."})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"JS side (dataset)"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("code",{children:"element.dataset"})," exposes ",e.jsx("strong",{children:"camelCase"})," keys:",e.jsx("br",{}),e.jsx("code",{children:"data-user-id"})," → ",e.jsx("code",{children:"dataset.userId"})]}),e.jsxs("li",{children:["Setting ",e.jsx("code",{children:'dataset.userId = "42"'})," updates the attribute in HTML."]}),e.jsx("li",{children:"Avoid uppercase or underscores in attribute names; stick to kebab."})]})]})]})]}),e.jsxs("section",{id:"css",children:[e.jsx("h2",{children:"CSS hooks"}),e.jsx(t.Code,{role:"region","aria-label":"CSS attribute selector examples",children:e.jsx("pre",{children:String.raw`/* Basic presence/value selectors */
[data-loading] { cursor: progress; }
[data-variant="outline"] { border-style: dashed; }

/* Parent-driven theming */
[data-theme="dark"] .card { background: #0b1220; color: #e5e7eb; }

/* Range-ish values */
[data-size="sm"] { font-size: 12px; }
[data-size="lg"] { font-size: 18px; }`})}),e.jsx("p",{className:"note",children:"Attribute selectors are great for small, declarative state. If state flips frequently per frame, prefer a class toggle to minimize style recalculation churn."})]}),e.jsxs("section",{id:"js",children:[e.jsx("h2",{children:"JS access"}),e.jsx(t.Code,{role:"region","aria-label":"dataset read/write examples",children:e.jsx("pre",{children:String.raw`const el = document.querySelector('[data-user-id]');
/* Read */
const id = el.dataset.userId;          // "42"
/* Write */
el.dataset.state = 'open';             // sets data-state="open"
/* Raw attributes (alternate) */
el.setAttribute('data-json', JSON.stringify({ a: 1 }));
const parsed = JSON.parse(el.getAttribute('data-json') || '{}');`})})]}),e.jsxs("section",{id:"a11y",children:[e.jsx("h2",{children:"Semantics & accessibility"}),e.jsxs("ul",{className:"badges",children:[e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Do"})," keep ",e.jsx("code",{children:"data-*"})," invisible to meaning—use them alongside proper tags."]}),e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Do"})," pair with ",e.jsx("code",{children:"aria-*"})," or real attributes when conveying roles/state."]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Don’t"})," invent fake meanings (e.g., ",e.jsx("code",{children:"data-disabled"})," instead of ",e.jsx("code",{children:"disabled"}),")."]})]})]}),e.jsxs("section",{id:"security",children:[e.jsx("h2",{children:"Security & performance notes"}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Public data only."})," Attributes are readable by anyone—never store secrets."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Parsing cost."})," JSON in attributes is fine for tiny blobs; don’t ship kilobytes."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Mutation ripple."})," Attribute changes can trigger style recalculation; batch updates if needed."]})]})})]}),e.jsxs("section",{id:"patterns",children:[e.jsx("h2",{children:"Useful patterns"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"State flags"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("code",{children:"data-open"}),", ",e.jsx("code",{children:"data-active"}),", ",e.jsx("code",{children:"data-loading"})," for simple UI modes."]}),e.jsxs("li",{children:["Combine with ",e.jsx("code",{children:'[data-open="true"]'})," in CSS."]})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Init/config"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsxs("code",{children:["data-options='","{",'"scroll":true',"}","'"]})," to bootstrap widgets without global JS."]}),e.jsx("li",{children:"Prefer small, stable option sets."})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"IDs & refs"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["Store tiny ids: ",e.jsx("code",{children:"data-user-id"}),", ",e.jsx("code",{children:"data-post-id"}),"."]}),e.jsx("li",{children:"Use for event delegation and analytics."})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Feature flags (static)"}),e.jsx("ul",{className:"bullets",children:e.jsxs("li",{children:[e.jsx("code",{children:'data-feature="betaX"'})," to gate CSS or opt-in behavior."]})})]})]})]}),e.jsxs("section",{id:"anti",children:[e.jsx("h2",{children:"Anti-patterns"}),e.jsxs("ul",{className:"badges",children:[e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Replacing native attributes (",e.jsx("code",{children:"data-disabled"})," vs ",e.jsx("code",{children:"disabled"}),")."]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Huge JSON blobs or user PII in attributes."]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Depending on ",e.jsx("code",{children:"data-*"})," for accessibility names/roles."]})]})]}),e.jsxs("section",{id:"play",children:[e.jsx("h2",{children:"Try it live"}),e.jsxs("p",{className:"lede",children:["Toggle data attributes, read/write via ",e.jsx("code",{children:"dataset"}),", and style based on attribute values. Autosaves to this lesson."]}),e.jsx(l,{storageKey:"core-html:globals:data-attributes:v1",initialHtml:h,height:660})]}),e.jsxs("nav",{className:"nextPrev","aria-label":"Lesson navigation",children:[e.jsx(d,{to:"/globals/hidden-tabindex-contenteditable",className:"prev","aria-label":"Go to hidden, tabindex, contenteditable",children:"← hidden, tabindex, contenteditable"}),e.jsx(d,{to:"/globals/lang-on-elements",className:"next","aria-label":"Go to lang on elements",children:"Next: lang on elements →"})]}),e.jsx("div",{className:"backTop",children:e.jsx("a",{href:"#top",children:"Back to top ↑"})})]})}export{b as default};
