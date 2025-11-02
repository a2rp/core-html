import{d as t,r as a,j as e,N as l}from"./index-D3QNcmKe.js";import{H as s}from"./index-CAjihRuM.js";const o={Page:t.main`
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
    `},d=String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title><colgroup>/<col> — demo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui,-apple-system,Segoe UI,Roboto,sans-serif; }
      table { border-collapse: collapse; width: 100%; }
      caption { text-align: left; font-weight: 600; margin-bottom: 8px; }
      th, td { border: 1px solid #999; padding: 8px 10px; }
      thead th { background: color-mix(in oklab, #2563eb, transparent 85%); }
      tfoot td { background: color-mix(in oklab, #16a34a, transparent 90%); font-weight: 600; }

      /* Column identities via <col> classes */
      col.idx  { width: 56px; background: color-mix(in oklab, #64748b, transparent 92%); }
      col.name { width: 30%; }
      col.num  { text-align: right; }
      col.total{ background: color-mix(in oklab, #f59e0b, transparent 90%); font-weight: 600; }

      /* Text alignment applied by column */
      td, th { text-align: inherit; } /* inherit from column if set */

      /* Toggle this to see how column width behavior changes */
      /* table { table-layout: fixed; } */
    </style>
  </head>
  <body>
    <main>
      <header>
        <h1>&lt;colgroup&gt;/&lt;col&gt; — identify columns for styling/width</h1>
        <p class="muted">
          Use <code>&lt;colgroup&gt;</code> and <code>&lt;col&gt;</code> to set widths or styles for a whole column at once.
          These elements contain no content; they just describe columns.
        </p>
      </header>

      <section class="card">
        <h2>Example table</h2>

        <table>
          <!-- Identify columns BEFORE thead/tbody/tfoot -->
          <colgroup>
            <col class="idx">
            <col class="name" span="1">
            <col class="num">
            <col class="num">
            <col class="total">
          </colgroup>

          <caption>Quarterly Sales (Demo)</caption>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product</th>
              <th scope="col">Q1</th>
              <th scope="col">Q2</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Widget A</td>
              <td>1,250</td>
              <td>1,600</td>
              <td>2,850</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Widget B</td>
              <td>980</td>
              <td>1,120</td>
              <td>2,100</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Widget C</td>
              <td>1,640</td>
              <td>1,320</td>
              <td>2,960</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="4" style="text-align:right">Grand total</td>
              <td>7,910</td>
            </tr>
          </tfoot>
        </table>

        <p class="muted">
          Try adding <code>table { table-layout: fixed; }</code> above; widths from <code>&lt;col&gt;</code> are taken
          strictly in fixed layout and as hints in auto layout.
        </p>
      </section>

      <section class="card">
        <h2>Grouping multiple columns</h2>
        <p>
          A single <code>&lt;col&gt;</code> can cover multiple adjacent columns with <code>span</code>. You can also
          use multiple <code>&lt;colgroup&gt;</code> blocks to segment the table.
        </p>

        <table>
          <colgroup>
            <col class="idx">
            <col class="name">
          </colgroup>
          <colgroup>
            <col class="num" span="2">
            <col class="total">
          </colgroup>

          <caption>Same table split into groups</caption>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product</th>
              <th scope="col">Q1</th>
              <th scope="col">Q2</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr><th scope="row">1</th><td>Widget A</td><td>1,250</td><td>1,600</td><td>2,850</td></tr>
            <tr><th scope="row">2</th><td>Widget B</td><td>980</td><td>1,120</td><td>2,100</td></tr>
            <tr><th scope="row">3</th><td>Widget C</td><td>1,640</td><td>1,320</td><td>2,960</td></tr>
          </tbody>
        </table>
      </section>

      <section class="card">
        <h2>What columns can/can't do</h2>
        <ul class="bullets">
          <li><strong>Good for:</strong> default <code>width</code>, alignment (<code>text-align</code>), background, filters.</li>
          <li><strong>Not for content:</strong> <code>&lt;col&gt;</code> can’t contain text or headers.</li>
          <li><strong>Accessibility:</strong> Still use <code>&lt;th scope="col"</code> for headers and relationships.</li>
          <li><strong>Math matters:</strong> Total columns defined by your header/data must match the number covered by your
              <code>&lt;col&gt;</code> definitions (including <code>span</code>).</li>
        </ul>
      </section>

      <footer class="muted">Tip: Set alignment on the column and inherit in cells to keep markup clean.</footer>
    </main>
  </body>
</html>`;function n(){return a.useEffect(()=>{document.title="Tables · <colgroup>/<col> — Column groups"},[]),e.jsxs(o.Page,{children:[e.jsxs("header",{className:"pageHeader",id:"top",children:[e.jsxs("h1",{children:[e.jsx("code",{children:"<colgroup>"}),"/",e.jsx("code",{children:"<col>"})," — Column groups"]}),e.jsx("p",{className:"lede",children:"Identify and style table columns as a unit. Perfect for setting widths, alignment, and visual grouping without sprinkling classes on every cell."})]}),e.jsxs("nav",{className:"toc","aria-label":"On this page",children:[e.jsx("a",{href:"#model",children:"Mental model"}),e.jsx("a",{href:"#syntax",children:"Syntax & placement"}),e.jsx("a",{href:"#layout",children:"Layout behavior"}),e.jsx("a",{href:"#styling",children:"Styling patterns"}),e.jsx("a",{href:"#pitfalls",children:"Pitfalls"}),e.jsx("a",{href:"#play",children:"Playground"})]}),e.jsxs("section",{id:"model",children:[e.jsx("h2",{children:"Mental model"}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Column identity:"})," ",e.jsx("code",{children:"<colgroup>"})," wraps one or more"," ",e.jsx("code",{children:"<col>"})," elements. Each ",e.jsx("code",{children:"<col>"})," maps to one or more physical columns."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Separation of concerns:"})," data stays in ",e.jsx("code",{children:"thead/tbody/tfoot"}),"; structure/width/alignment live in column definitions."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Semantics assist styling:"})," you get one place to change a column’s presentation."]})]})})]}),e.jsxs("section",{id:"syntax",children:[e.jsx("h2",{children:"Syntax & placement"}),e.jsx(o.Code,{role:"region","aria-label":"Basic colgroup syntax",children:e.jsx("pre",{children:String.raw`<table>
  <colgroup>
    <col class="idx">
    <col class="name">
    <col class="num" span="2">
  </colgroup>
  <thead>…</thead>
  <tbody>…</tbody>
</table>`})}),e.jsxs("p",{className:"note",children:["Place ",e.jsx("code",{children:"<colgroup>"})," right after ",e.jsx("code",{children:"<caption>"})," (if any) and before ",e.jsx("code",{children:"<thead/><tbody/><tfoot>"}),". Use ",e.jsx("code",{children:"span"})," on"," ",e.jsx("code",{children:"<col>"})," to cover multiple adjacent columns."]})]}),e.jsxs("section",{id:"layout",children:[e.jsx("h2",{children:"Layout behavior"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Auto layout (default)"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["Content drives width; ",e.jsx("code",{children:"<col>"})," widths act as hints."]}),e.jsx("li",{children:"Very wide content can override your hints to avoid overflow."})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:e.jsx("code",{children:"table-layout: fixed"})}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["Column widths from ",e.jsx("code",{children:"<col>"})," are honored up-front."]}),e.jsx("li",{children:"Layout is faster/predictable; text may truncate/wrap instead."})]})]})]})]}),e.jsxs("section",{id:"styling",children:[e.jsx("h2",{children:"Styling patterns"}),e.jsx(o.Code,{role:"region","aria-label":"Styling columns",children:e.jsx("pre",{children:String.raw`/* Align numbers without touching every <td> */
col.num { text-align: right; }
td, th { text-align: inherit; }

/* Set a narrow index column */
col.idx { width: 56px; }

/* Group with multiple colgroups */
<table>
  <colgroup><col class="idx"><col class="name"></colgroup>
  <colgroup><col class="num" span="2"><col class="total"></colgroup>
  …
</table>`})}),e.jsxs("p",{className:"note",children:["You can target ",e.jsx("code",{children:"col"})," or ",e.jsx("code",{children:"colgroup"})," in CSS. Remember: columns don’t hold content—think of them like “column selectors.”"]})]}),e.jsxs("section",{id:"pitfalls",children:[e.jsx("h2",{children:"Pitfalls"}),e.jsxs("ul",{className:"badges",children:[e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," More columns in data than covered by your ",e.jsx("code",{children:"col"}),"s."]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Expecting ",e.jsx("code",{children:"<col>"})," to add headers or text."]}),e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Good"})," Keep ",e.jsx("code",{children:'th scope="col"'})," for header semantics."]}),e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Good"})," Use ",e.jsx("code",{children:"table-layout: fixed"})," for strict width control."]})]})]}),e.jsxs("section",{id:"play",children:[e.jsx("h2",{children:"Try it live"}),e.jsxs("p",{className:"lede",children:["Adjust spans, add a second ",e.jsx("code",{children:"<colgroup>"}),", or flip to"," ",e.jsx("code",{children:"table-layout: fixed"})," to feel how widths resolve. Autosaves to this lesson."]}),e.jsx(s,{storageKey:"core-html:tables:colgroup-col:v1",initialHtml:d,height:680})]}),e.jsxs("nav",{className:"nextPrev","aria-label":"Lesson navigation",children:[e.jsx(l,{to:"/tables/th-vs-td-scope",className:"prev","aria-label":"Go to <th> vs <td>, scope",children:"← <th> vs <td>, scope"}),e.jsx(l,{to:"/tables/a11y-dos-donts",className:"next","aria-label":"Go to Table a11y do's and don'ts",children:"Next: Table a11y do’s & don’ts →"})]}),e.jsx("div",{className:"backTop",children:e.jsx("a",{href:"#top",children:"Back to top ↑"})})]})}export{n as default};
