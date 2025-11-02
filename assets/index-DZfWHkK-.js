import{d as t,r as i,j as e,N as a}from"./index-D3QNcmKe.js";import{H as s}from"./index-CAjihRuM.js";const n={Page:t.main`
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
    `,Code:t.div`
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
    `},r=String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Don’t nest interactive in interactive — demo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui,-apple-system,Segoe UI,Roboto,sans-serif; }
      .grid { display: grid; gap: 14px; }
      .card { border: 1px solid #ccc; border-radius: 12px; padding: 12px; }
      .bad  { background: color-mix(in oklab, #dc2626, transparent 92%); border-color:#f2a6a6; }
      .good { background: color-mix(in oklab, #16a34a, transparent 92%); border-color:#8ed09b; }
      .muted { color: #6b7280; }
      .ex { border:1px dashed #aaa; padding:10px; border-radius:10px; margin-top:8px; }
      code { background: #f5f5f5; padding:0 6px; border-radius:6px; }
      .row { display:flex; gap:10px; flex-wrap:wrap; align-items:center; }
      .btn { padding:.5rem .8rem; border-radius:10px; border:1px solid #bbb; background:#fff; cursor:pointer; }
      .link { color:#2563eb; }
      a, button, summary, input, select, textarea { font: inherit; }
      details { border:1px solid #bbb; border-radius:10px; padding:6px 10px; background:#fff; }
    </style>
  </head>
  <body>
    <main class="grid">
      <header>
        <h1>Don’t nest interactive in interactive</h1>
        <p class="muted">Keep each interactive control separate so focus, activation, and semantics are unambiguous.</p>
      </header>

      <!-- 1) Link inside button (BAD) -->
      <section class="card bad">
        <h2>Anti-pattern: <small>link inside button</small></h2>
        <p>Two click targets collide; keyboard users get conflicting activation.</p>
        <div class="ex">
          <button class="btn">
            <a class="link" href="https://example.com">Open docs</a>
          </button>
        </div>
      </section>

      <!-- Fixed -->
      <section class="card good">
        <h2>Fix</h2>
        <p>Use one control. If navigation is the intent, prefer a link styled like a button.</p>
        <div class="ex row">
          <a class="btn link" href="https://example.com">Open docs</a>
          <!-- or: one button with JS navigation -->
          <button class="btn" onclick="location.href='https://example.com'">Open docs</button>
        </div>
      </section>

      <!-- 2) Button inside link (BAD) -->
      <section class="card bad">
        <h2>Anti-pattern: <small>button inside link</small></h2>
        <div class="ex">
          <a href="https://example.com" class="link">
            <button class="btn">Go</button>
          </a>
        </div>
      </section>

      <!-- Fixed -->
      <section class="card good">
        <h2>Fix</h2>
        <div class="ex row">
          <a class="btn link" href="https://example.com">Go</a>
        </div>
      </section>

      <!-- 3) Interactive inside label (surprise nested control) -->
      <section class="card bad">
        <h2>Anti-pattern: <small>extra control inside a label</small></h2>
        <p>Clicking label should activate its input, not a nested button.</p>
        <div class="ex">
          <label>
            Email
            <input type="email" name="email" />
            <button class="btn">Check</button>
          </label>
        </div>
      </section>

      <!-- Fixed -->
      <section class="card good">
        <h2>Fix</h2>
        <div class="ex">
          <label for="email">Email</label>
          <div class="row">
            <input id="email" type="email" name="email" />
            <button class="btn" type="button">Check</button>
          </div>
        </div>
      </section>

      <!-- 4) Details/summary wrapping controls (BAD) -->
      <section class="card bad">
        <h2>Anti-pattern: <small>nesting buttons inside summary text</small></h2>
        <p>Pressing <code>Enter/Space</code> on a button inside <code>&lt;summary&gt;</code> toggles the disclosure unexpectedly.</p>
        <div class="ex">
          <details>
            <summary>More actions <button class="btn">Danger</button></summary>
            <div>Hidden area…</div>
          </details>
        </div>
      </section>

      <!-- Fixed -->
      <section class="card good">
        <h2>Fix</h2>
        <div class="ex">
          <details>
            <summary>More actions</summary>
            <div class="row">
              <button class="btn">Safe</button>
              <button class="btn">Danger</button>
            </div>
          </details>
        </div>
      </section>

      <!-- 5) Role-based wrapper around real controls (BAD) -->
      <section class="card bad">
        <h2>Anti-pattern: <small>div[role=button] wrapping real buttons/links</small></h2>
        <p>Don’t create nested, conflicting roles.</p>
        <div class="ex">
          <div role="button" tabindex="0" class="btn">
            <button class="btn">Inner button</button>
          </div>
        </div>
      </section>

      <!-- Fixed -->
      <section class="card good">
        <h2>Fix</h2>
        <div class="ex row">
          <button class="btn">Single button</button>
          <a class="btn link" href="#">Single link</a>
        </div>
      </section>

      <footer class="muted">
        Rule: One interactive ancestor per click target. If you need multiple actions, place them as siblings.
      </footer>
    </main>
  </body>
</html>`;function d(){return i.useEffect(()=>{document.title="Interactive · Don’t nest interactive in interactive"},[]),e.jsxs(n.Page,{children:[e.jsxs("header",{className:"pageHeader",id:"top",children:[e.jsx("h1",{children:"Don’t nest interactive in interactive"}),e.jsxs("p",{className:"lede",children:["Interactive elements are those users can focus and activate: links, buttons, form controls, ",e.jsx("code",{children:"<summary>"}),", and more. Nesting one inside another creates ambiguous focus and confusing behavior. Keep each control standalone."]})]}),e.jsxs("nav",{className:"toc","aria-label":"On this page",children:[e.jsx("a",{href:"#what",children:"What counts as interactive"}),e.jsx("a",{href:"#why",children:"Why nesting breaks"}),e.jsx("a",{href:"#patterns",children:"Common anti-patterns"}),e.jsx("a",{href:"#aria",children:"ARIA notes"}),e.jsx("a",{href:"#faq",children:"FAQ"}),e.jsx("a",{href:"#play",children:"Playground"})]}),e.jsxs("section",{id:"what",children:[e.jsx("h2",{children:"What counts as interactive"}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["Native controls: ",e.jsx("code",{children:"<button>"}),", ",e.jsx("code",{children:"<input>"}),", ",e.jsx("code",{children:"<select>"}),", ",e.jsx("code",{children:"<textarea>"}),"."]}),e.jsxs("li",{children:["Links & disclosure: ",e.jsx("code",{children:"<a href>"}),", ",e.jsx("code",{children:"<summary>"})," inside ",e.jsx("code",{children:"<details>"}),"."]}),e.jsxs("li",{children:["Other interactive elements: ",e.jsx("code",{children:"<audio controls>"}),", ",e.jsx("code",{children:"<video controls>"}),"."]}),e.jsx("li",{children:"Avoid role-based clones unless absolutely necessary; prefer native elements."})]})})]}),e.jsxs("section",{id:"why",children:[e.jsx("h2",{children:"Why nesting breaks"}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Focus ambiguity:"})," Which element should receive focus and activation?"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Event conflicts:"})," Key presses like Space/Enter may trigger both parent and child."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Assistive tech confusion:"})," Screen readers announce contradictory roles/names."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Platform invariants:"})," HTML spec defines interactive content that must not be nested."]})]})})]}),e.jsxs("section",{id:"patterns",children:[e.jsx("h2",{children:"Common anti-patterns & fixes"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Link inside Button"}),e.jsx("p",{children:"Pick one. If the action navigates, style the link like a button."})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Button inside Link"}),e.jsx("p",{children:"Same story — one element should own the click target."})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Extra controls inside Label"}),e.jsx("p",{children:"Labels should activate their control, not unrelated buttons."})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Controls inside Summary"}),e.jsxs("p",{children:[e.jsx("code",{children:"<summary>"})," toggles the disclosure; keep actions in the revealed content."]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:'role="button" wrappers'}),e.jsx("p",{children:"Don’t wrap real buttons/links inside another button role."})]})]})]}),e.jsxs("section",{id:"aria",children:[e.jsx("h2",{children:"ARIA notes"}),e.jsx(n.Code,{role:"region","aria-label":"Pattern alternatives",children:e.jsx("pre",{children:String.raw`<!-- Use one interactive element per target -->
<!-- Navigation -->
<a class="btn" href="/pricing">View pricing</a>

<!-- Button with JS side-effect -->
<button type="button" class="btn" data-action="save">Save</button>

<!-- Label associates with input via for/id; extra actions placed as siblings -->
<label for="email">Email</label>
<div class="row">
  <input id="email" type="email" />
  <button type="button" class="btn">Check</button>
</div>

<!-- Details with actions inside the panel, not inside summary -->
<details>
  <summary>More actions</summary>
  <button class="btn">One</button>
  <button class="btn">Two</button>
</details>`})}),e.jsxs("p",{className:"note",children:["If you must simulate a button with a non-button element, ensure correct ",e.jsx("code",{children:'role="button"'}),", keyboard handling for ",e.jsx("code",{children:"Enter"}),"/",e.jsx("code",{children:"Space"}),", and no nested interactive descendants. But prefer real buttons."]})]}),e.jsxs("section",{id:"faq",children:[e.jsx("h2",{children:"FAQ"}),e.jsxs("details",{children:[e.jsx("summary",{children:"Can I put an icon link inside a button?"}),e.jsx("div",{className:"ans",children:"Use a single button and handle click in JS, or use a single link. The icon should be decorative or part of the same control, not a separate link."})]}),e.jsxs("details",{children:[e.jsx("summary",{children:"What about a menu button containing menu items?"}),e.jsxs("div",{className:"ans",children:["The button should ",e.jsx("em",{children:"control"})," a separate popup menu element. Place items as siblings or portal content, not as children of the button."]})]}),e.jsxs("details",{children:[e.jsx("summary",{children:"Is an anchor wrapping a whole card okay?"}),e.jsx("div",{className:"ans",children:"Yes, if the card contains no other interactive elements. If the card needs internal buttons/links, don’t wrap the whole card in a link; instead, make the title a link."})]})]}),e.jsxs("section",{id:"play",children:[e.jsx("h2",{children:"Try it live"}),e.jsx("p",{className:"lede",children:"Fix the anti-patterns below by choosing a single control for each action, moving extra actions to siblings, and keeping labels pure."}),e.jsx(s,{storageKey:"core-html:interactive:no-nesting:v1",initialHtml:r,height:680})]}),e.jsxs("nav",{className:"nextPrev","aria-label":"Lesson navigation",children:[e.jsx(a,{to:"/interactive/dialog-open",className:"prev","aria-label":"Go to Dialog basics",children:"← Dialog basics"}),e.jsx(a,{to:"/metadata/title-quality",className:"next","aria-label":"Go to Title quality",children:"Next: Title quality →"})]}),e.jsx("div",{className:"backTop",children:e.jsx("a",{href:"#top",children:"Back to top ↑"})})]})}export{d as default};
