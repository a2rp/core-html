import{d as a,r as s,j as e,N as t}from"./index-D3QNcmKe.js";import{H as r}from"./index-CAjihRuM.js";const o={Page:a.main`
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
    `,Code:a.div`
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
    <title>Tables — Accessibility & No-Layout</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui,-apple-system,Segoe UI,Roboto,sans-serif; }
      .wrap { display: grid; gap: 16px; }
      .card { border: 1px solid #ccc; border-radius: 12px; padding: 12px; }
      .muted { color: #6b7280; }
      .good { background: color-mix(in oklab, #16a34a, transparent 92%); border-color:#8ed09b; }
      .bad  { background: color-mix(in oklab, #dc2626, transparent 92%); border-color:#f2a6a6; }
      .sr-only {
        position:absolute !important; width:1px; height:1px; padding:0; margin:-1px; overflow:hidden;
        clip:rect(0,0,0,0); white-space:nowrap; border:0;
      }
      .scroll {
        overflow:auto; -webkit-overflow-scrolling:touch;
        border: 1px solid #ccc; border-radius: 10px;
      }
      table { border-collapse: collapse; width: 100%; min-width: 560px; }
      caption {
        text-align: left; padding: 8px 10px; font-weight: 600;
      }
      th, td { border: 1px solid #ddd; padding: 8px 10px; text-align: left; }
      thead th { background: #f7f7f7; }
      tfoot td { font-weight: 600; }
      code { background: #f5f5f5; padding:0 6px; border-radius:6px; }
      .ex { border:1px dashed #aaa; padding:8px; border-radius:10px; margin-top:6px; }
    </style>
  </head>
  <body>
    <main class="wrap">
      <header>
        <h1>Accessible data tables (and why not for layout)</h1>
        <p class="muted">Use tables only for data with proper headers. Never for page layout.</p>
      </header>

      <section class="card good">
        <h2>Simple data table (use <code>&lt;th scope="col|row"&gt;</code>)</h2>
        <div class="scroll">
          <table>
            <caption>Monthly Sales — Q1 2025</caption>
            <thead>
              <tr>
                <th scope="col">Month</th>
                <th scope="col">Orders</th>
                <th scope="col">Revenue</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Jan</th>
                <td>120</td>
                <td>₹1,80,000</td>
              </tr>
              <tr>
                <th scope="row">Feb</th>
                <td>135</td>
                <td>₹2,10,000</td>
              </tr>
              <tr>
                <th scope="row">Mar</th>
                <td>150</td>
                <td>₹2,40,000</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td class="muted" colspan="3">Numbers are illustrative.</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>

      <section class="card good">
        <h2>Complex table (multi-level headers via <code>id</code>/<code>headers</code>)</h2>
        <p>When column groups exist (e.g., North/South with subcolumns), give <code>id</code> to header cells and point data cells’ <code>headers</code> to all applicable header ids.</p>
        <div class="scroll">
          <table>
            <caption>Regional Metrics — 2025</caption>
            <thead>
              <tr>
                <th id="h-metric" scope="col">Metric</th>
                <th id="h-north" scope="col" colspan="2">North</th>
                <th id="h-south" scope="col" colspan="2">South</th>
              </tr>
              <tr>
                <th id="h-blank" scope="col" aria-hidden="true"></th>
                <th id="h-n-q1" scope="col">Q1</th>
                <th id="h-n-q2" scope="col">Q2</th>
                <th id="h-s-q1" scope="col">Q1</th>
                <th id="h-s-q2" scope="col">Q2</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th id="m-orders" scope="row">Orders</th>
                <td headers="h-north h-n-q1 m-orders">210</td>
                <td headers="h-north h-n-q2 m-orders">240</td>
                <td headers="h-south h-s-q1 m-orders">190</td>
                <td headers="h-south h-s-q2 m-orders">220</td>
              </tr>
              <tr>
                <th id="m-rev" scope="row">Revenue</th>
                <td headers="h-north h-n-q1 m-rev">₹3.1L</td>
                <td headers="h-north h-n-q2 m-rev">₹3.6L</td>
                <td headers="h-south h-s-q1 m-rev">₹2.8L</td>
                <td headers="h-south h-s-q2 m-rev">₹3.3L</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="card bad">
        <h2>Never for layout</h2>
        <p>These are anti-patterns:</p>
        <div class="ex">
          <!-- ❌ layout table used for columns -->
          <table>
            <tr>
              <td style="width:30%">Sidebar</td>
              <td>Main content</td>
            </tr>
          </table>
        </div>
        <p class="muted">Use CSS Grid/Flexbox for page layout, not tables.</p>
      </section>

      <section class="card">
        <h2>Responsive tips</h2>
        <ul>
          <li><strong>Scrollable container</strong> (preferred): wrap table in a div with <code>overflow:auto</code> and a min-width table.</li>
          <li><strong>Compact</strong>: hide non-essential columns at narrow widths (but keep data discoverable).</li>
          <li><strong>Stacked</strong>: for small screens, each row becomes a block and cells show <code>data-label</code> via CSS.</li>
        </ul>
        <div class="ex">
          <table class="stacked" aria-describedby="stackNote">
            <caption>Inventory (stacked demo)</caption>
            <thead>
              <tr>
                <th scope="col">SKU</th>
                <th scope="col">Name</th>
                <th scope="col">Qty</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" data-label="SKU">A-101</th>
                <td data-label="Name">Thermal Printer</td>
                <td data-label="Qty">8</td>
                <td data-label="Status">In stock</td>
              </tr>
              <tr>
                <th scope="row" data-label="SKU">B-220</th>
                <td data-label="Name">Label Rolls</td>
                <td data-label="Qty">42</td>
                <td data-label="Status">Low</td>
              </tr>
            </tbody>
          </table>
          <p id="stackNote" class="sr-only">On narrow screens each cell is labeled using data-label for clarity.</p>
        </div>
        <style>
          @media (max-width: 560px) {
            table.stacked thead { display: none; }
            table.stacked tr { display: grid; padding: 8px; border:1px solid #ddd; border-radius: 10px; margin-block: 8px; }
            table.stacked td, table.stacked th[scope="row"] { display: grid; grid-template-columns: 9ch 1fr; gap: 8px; border:0; }
            table.stacked td::before, table.stacked th[scope="row"]::before { content: attr(data-label); font-weight: 600; }
          }
        </style>
      </section>

      <section class="card">
        <h2>Presentational tables (edge case)</h2>
        <p>If you absolutely must use table markup for visual alignment only, add <code>role="presentation"</code> or <code>role="none"</code> so assistive tech doesn’t treat it as data. Prefer semantic lists, grids, or CSS instead.</p>
        <div class="ex">
          <table role="presentation">
            <tr><td>Icon</td><td>Label</td></tr>
            <tr><td>⭐</td><td>Favorites</td></tr>
          </table>
        </div>
      </section>

      <section class="card">
        <h2>Quick checks</h2>
        <ul>
          <li>Is there a <code>&lt;caption&gt;</code> that summarizes the table?</li>
          <li>Are header cells <code>&lt;th&gt;</code> with correct <code>scope</code> or <code>id/headers</code>?</li>
          <li>Did you use <code>thead</code>, <code>tbody</code>, <code>tfoot</code> appropriately?</li>
          <li>No layout tables anywhere.</li>
          <li>Keyboard: can you navigate cells/headers meaningfully?</li>
        </ul>
      </section>

      <footer class="muted">
        Rule: If it’s not data, don’t use a table. If it is data, wire the headers correctly.
      </footer>
    </main>
  </body>
</html>`;function c(){return s.useEffect(()=>{document.title="Tables · Accessibility & no layout tables"},[]),e.jsxs(o.Page,{children:[e.jsxs("header",{className:"pageHeader",id:"top",children:[e.jsx("h1",{children:"Accessibility & no layout tables"}),e.jsxs("p",{className:"lede",children:["Tables are for ",e.jsx("em",{children:"data"}),"—with proper headers, captions, and regions. Page layout belongs to CSS (Grid/Flex). This lesson shows the right patterns and common traps."]})]}),e.jsxs("nav",{className:"toc","aria-label":"On this page",children:[e.jsx("a",{href:"#structure",children:"Structure"}),e.jsx("a",{href:"#headers",children:"Headers"}),e.jsx("a",{href:"#responsive",children:"Responsive"}),e.jsx("a",{href:"#presentational",children:"Presentational"}),e.jsx("a",{href:"#pitfalls",children:"Pitfalls"}),e.jsx("a",{href:"#play",children:"Playground"})]}),e.jsxs("section",{id:"structure",children:[e.jsx("h2",{children:"Structure"}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["Use ",e.jsx("code",{children:"<caption>"})," to describe the table’s purpose."]}),e.jsxs("li",{children:["Split with ",e.jsx("code",{children:"<thead>"}),", ",e.jsx("code",{children:"<tbody>"}),", and ",e.jsx("code",{children:"<tfoot>"})," when it adds clarity."]}),e.jsx("li",{children:"Keep column meanings stable; avoid mixing units in one column."})]})})]}),e.jsxs("section",{id:"headers",children:[e.jsx("h2",{children:"Headers"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Simple tables"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["Mark column headers: ",e.jsx("code",{children:'<th scope="col">'})]}),e.jsxs("li",{children:["Mark row headers: ",e.jsx("code",{children:'<th scope="row">'})]}),e.jsx("li",{children:"One row/column of headers is enough for many cases."})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Complex tables"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["Give each header an ",e.jsx("code",{children:"id"}),"."]}),e.jsxs("li",{children:["Each ",e.jsx("code",{children:"<td>"})," lists all relevant header ids in ",e.jsx("code",{children:"headers"}),"."]}),e.jsx("li",{children:"Screen readers will announce the full header chain."})]})]})]})]}),e.jsxs("section",{id:"responsive",children:[e.jsx("h2",{children:"Responsive strategies"}),e.jsxs("ul",{className:"badges",children:[e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Good"})," Horizontal scroll wrapper"]}),e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Good"})," Compact columns"]}),e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Good"})," Stacked rows with labels"]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Convert to a non-table without preserving semantics"]})]})]}),e.jsxs("section",{id:"presentational",children:[e.jsx("h2",{children:"Presentational tables"}),e.jsxs("p",{className:"note",children:["If it’s not tabular data, use lists, definition lists, or cards. If you inherited a presentational table, add ",e.jsx("code",{children:'role="presentation"'})," and replace it in a refactor."]})]}),e.jsxs("section",{id:"pitfalls",children:[e.jsx("h2",{children:"Pitfalls"}),e.jsxs("ul",{className:"badges",children:[e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Using tables to position sidebars/columns."]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Omitting ",e.jsx("code",{children:"th"})," entirely (only ",e.jsx("code",{children:"td"}),")."]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Nesting interactive controls in headers without labels."]}),e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Good"})," Provide a clear ",e.jsx("code",{children:"caption"})," and consistent header mapping."]})]})]}),e.jsxs("section",{id:"play",children:[e.jsx("h2",{children:"Try it live"}),e.jsxs("p",{className:"lede",children:["Fix the anti-patterns, add ",e.jsx("code",{children:"caption"}),", correct header associations, and try the stacked pattern on small screens."]}),e.jsx(r,{storageKey:"core-html:tables:a11y-dos-donts:v1",initialHtml:d,height:720})]}),e.jsxs("nav",{className:"nextPrev","aria-label":"Lesson navigation",children:[e.jsx(t,{to:"/tables/colgroup-col",className:"prev","aria-label":"Go to colgroup/col",children:"← colgroup & col"}),e.jsx(t,{to:"/forms/form-basics",className:"next","aria-label":"Go to form basics",children:"Next: Form basics →"})]}),e.jsx("div",{className:"backTop",children:e.jsx("a",{href:"#top",children:"Back to top ↑"})})]})}export{c as default};
