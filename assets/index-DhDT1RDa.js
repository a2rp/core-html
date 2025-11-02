import{d as s,r,j as e,N as l}from"./index-D3QNcmKe.js";import{H as a}from"./index-CAjihRuM.js";const i={Page:s.main`
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
    `},d=String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>globals — id, class, style, title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui, -apple-system, Segoe UI, Roboto, sans-serif; }
      .grid { display: grid; gap: 14px; }
      .card { border: 1px solid #ccc; border-radius: 12px; padding: 12px; }
      .good { background: color-mix(in oklab, #16a34a, transparent 92%); border-color:#8ed09b; }
      .bad  { background: color-mix(in oklab, #dc2626, transparent 92%); border-color:#f2a6a6; }
      .muted { color: #6b7280; }
      code { background: #f5f5f5; padding:0 6px; border-radius:6px; }
      .ex { border:1px dashed #aaa; padding:8px; border-radius:10px; margin-top:6px; }
      .k { display:inline-block; border:1px solid #bbb; border-radius:999px; padding:2px 8px; font-size:12px; }
      .btn { display:inline-block; padding:6px 10px; border:1px solid #bbb; border-radius:8px; background:#fff; }
      .btn--primary { border-color:#2563eb; background: color-mix(in oklab, #2563eb, #fff 86%); }
      .u-text-muted { color:#6b7280; }
      .productCard { border:1px solid #ddd; border-radius:12px; padding:10px; }
      /* show :target behavior */
      :target { outline: 3px solid #f59e0b; scroll-margin-top: 24px; }
    </style>
  </head>
  <body>
    <main class="grid">
      <header>
        <h1>Global attributes: <code>id</code>, <code>class</code>, <code>style</code>, <code>title</code></h1>
        <p class="muted">These four are everywhere. Use them intentionally.</p>
      </header>

      <section class="card good" id="id-unique">
        <h2><code>id</code> — unique and linkable</h2>
        <ul>
          <li>Must be unique in the document.</li>
          <li>Enables deep-linking: try <a href="#buy">#buy</a>.</li>
          <li>Great for form labels: <code>&lt;label for="email"&gt;</code> → <code>&lt;input id="email"&gt;</code>.</li>
        </ul>
        <div class="ex">
          <a class="k" href="#id-unique">Jump to this section via #id</a>
          <form>
            <label for="email">Email</label>
            <input id="email" name="email" type="email" />
          </form>
        </div>
      </section>

      <section class="card bad">
        <h2>Common <code>id</code> mistakes</h2>
        <ul>
          <li>Reusing the same id on multiple elements (breaks a11y & JS).</li>
          <li>Styling by id selectors only (specificity trap).</li>
        </ul>
        <div class="ex">
          <p class="u-text-muted">Bad CSS habit: <code>#button { … }</code> → hard to override later.</p>
        </div>
      </section>

      <section class="card good">
        <h2><code>class</code> — your styling workhorse</h2>
        <ul>
          <li>Multiple classes allowed; order doesn't matter: <code>class="btn btn--primary u-text-muted"</code></li>
          <li>Prefer class selectors over ids (manageable specificity).</li>
          <li>Consider a light naming convention (BEM-ish or utilities).</li>
        </ul>
        <div class="ex">
          <button class="btn btn--primary">Buy now</button>
          <span class="k">class="btn btn--primary"</span>
        </div>
      </section>

      <section class="card bad">
        <h2>Class pitfalls</h2>
        <ul>
          <li>Encoding state in class names without removing old ones → stale styles.</li>
          <li>Over-specific combos like <code>.card.productCard.featured.primary.large</code> → fragile.</li>
        </ul>
      </section>

      <section class="card">
        <h2><code>style</code> — inline CSS (use rarely)</h2>
        <p class="muted">Inline styles override many rules and ignore media/themes. Okay for examples, email HTML, or quick experiments.</p>
        <div class="ex">
          <div class="productCard" style="border:2px dashed #f59e0b; padding:12px;">
            Inline-styled promo box (hard to theme later).
          </div>
        </div>
        <ul>
          <li><strong>Pros:</strong> fast, local to element, great for teaching/demos.</li>
          <li><strong>Cons:</strong> specificity wall, duplication, no media queries/custom props scoping.</li>
        </ul>
      </section>

      <section class="card">
        <h2><code>title</code> — tooltip with caveats</h2>
        <ul>
          <li>Browsers show it as a tooltip on hover; keyboard/touch often miss it.</li>
          <li>Not a reliable a11y label; prefer a visible label or <code>aria-label</code> for controls.</li>
        </ul>
        <div class="ex">
          <button class="btn" title="Adds item to cart">🛒 Add</button>
          <span class="u-text-muted">Tooltip may not be exposed to all users.</span>
        </div>
      </section>

      <footer class="muted">
        Quick rule: <code>id</code> for identity and linking; <code>class</code> for styling/hooks; use <code>style</code> sparingly; use <code>title</code> as a hint, not a label.
      </footer>

      <section class="card" id="buy">
        <h2>Deep link target example</h2>
        <p>This block highlights when navigated via <code>#buy</code> thanks to <code>:target</code>.</p>
      </section>
    </main>
  </body>
</html>`;function n(){return r.useEffect(()=>{document.title="Globals · id, class, style, title"},[]),e.jsxs(i.Page,{children:[e.jsxs("header",{className:"pageHeader",id:"top",children:[e.jsxs("h1",{children:["Global attributes: ",e.jsx("code",{children:"id"}),", ",e.jsx("code",{children:"class"}),", ",e.jsx("code",{children:"style"}),", ",e.jsx("code",{children:"title"})]}),e.jsxs("p",{className:"lede",children:["These four attributes are everywhere. Use ",e.jsx("code",{children:"id"})," for identity and linking, ",e.jsx("code",{children:"class"})," for styling and hooks, keep ",e.jsx("code",{children:"style"})," for rare one-offs, and treat ",e.jsx("code",{children:"title"})," as a hint—not a label."]})]}),e.jsxs("nav",{className:"toc","aria-label":"On this page",children:[e.jsx("a",{href:"#id",children:"id"}),e.jsx("a",{href:"#class",children:"class"}),e.jsx("a",{href:"#style",children:"style"}),e.jsx("a",{href:"#title",children:"title"}),e.jsx("a",{href:"#ref",children:"Quick reference"}),e.jsx("a",{href:"#play",children:"Playground"})]}),e.jsxs("section",{id:"id",children:[e.jsxs("h2",{children:[e.jsx("code",{children:"id"})," — identity & anchoring"]}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["Unique per document; enables URL fragments (",e.jsx("code",{children:"#section"}),") and ",e.jsx("code",{children:"for"}),"/",e.jsx("code",{children:"aria-labelledby"})," relations."]}),e.jsx("li",{children:"Avoid styling by id; prefer classes to keep specificity tame."}),e.jsxs("li",{children:["Good patterns: ",e.jsx("code",{children:'id="site-header"'}),", ",e.jsx("code",{children:'id="toc"'}),", ",e.jsx("code",{children:'id="faq-shipping"'}),"."]})]})})]}),e.jsxs("section",{id:"class",children:[e.jsxs("h2",{children:[e.jsx("code",{children:"class"})," — semantics for styling"]}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Multiple classes"}),e.jsxs("p",{children:["Order doesn’t matter; think “mix and match.” Example: ",e.jsx("code",{children:'class="btn btn--primary u-text-muted"'})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Naming sanity"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["Keep names descriptive but short: ",e.jsx("code",{children:".productCard"}),", ",e.jsx("code",{children:".hero"}),", ",e.jsx("code",{children:".nav"}),"."]}),e.jsxs("li",{children:["Variants with a prefix: ",e.jsx("code",{children:".btn--primary"}),", ",e.jsx("code",{children:".card--featured"}),"."]}),e.jsx("li",{children:"Avoid over-encoding structure in names."})]})]})]})]}),e.jsxs("section",{id:"style",children:[e.jsxs("h2",{children:[e.jsx("code",{children:"style"})," — inline CSS (use sparingly)"]}),e.jsx(i.Code,{"aria-label":"Inline style example",children:e.jsx("pre",{children:String.raw`<div class="promo" style="border:2px dashed #f59e0b; padding:12px">
  Limited offer!
</div>`})}),e.jsx("p",{className:"note",children:"Inline styles are fine for demos, CMS snippets, or emails. For apps/sites, prefer class-based CSS (tokens, themes)."})]}),e.jsxs("section",{id:"title",children:[e.jsxs("h2",{children:[e.jsx("code",{children:"title"})," — tooltip with limits"]}),e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"Mouse users see a tooltip; keyboard/touch may not."}),e.jsxs("li",{children:["Don’t rely on ",e.jsx("code",{children:"title"})," for essential labels or instructions."]}),e.jsxs("li",{children:["Better: visible label or ",e.jsx("code",{children:"aria-label"})," on interactive controls."]})]}),e.jsx(i.Code,{"aria-label":"Title attribute example",children:e.jsx("pre",{children:String.raw`<button aria-label="Add to cart">🛒</button>
<!-- Using title alone is not reliable:
<button title="Add to cart">🛒</button> -->`})})]}),e.jsxs("section",{id:"ref",children:[e.jsx("h2",{children:"Quick reference"}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"id"}),": unique, linkable, relations (",e.jsx("code",{children:"for"}),", ",e.jsx("code",{children:"aria-labelledby"}),"). Avoid using for styling."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"class"}),": multiple, composable, primary styling hook."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"style"}),": inline CSS; high specificity; avoid for long-term UI."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"title"}),": tooltip only; not a reliable label."]})]})})]}),e.jsxs("section",{id:"play",children:[e.jsx("h2",{children:"Try it live"}),e.jsxs("p",{className:"lede",children:["Add useful ids for deep links, refactor inline ",e.jsx("code",{children:"style"})," into classes, and replace ",e.jsx("code",{children:"title"})," with visible labels. Autosaves to this lesson."]}),e.jsx(a,{storageKey:"core-html:globals:id-class-style-title:v1",initialHtml:d,height:640})]}),e.jsxs("nav",{className:"nextPrev","aria-label":"Lesson navigation",children:[e.jsx(l,{to:"/metadata/links-scripts",className:"prev","aria-label":"Go to Links & scripts",children:"← Links & scripts"}),e.jsx(l,{to:"/globals/hidden-tabindex-contenteditable",className:"next","aria-label":"Go to hidden, tabindex, contenteditable",children:"Next: hidden, tabindex, contenteditable →"})]}),e.jsx("div",{className:"backTop",children:e.jsx("a",{href:"#top",children:"Back to top ↑"})})]})}export{n as default};
