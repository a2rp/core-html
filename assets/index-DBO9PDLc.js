import{d as o,r,j as e,N as d}from"./index-D3QNcmKe.js";import{H as a}from"./index-CAjihRuM.js";const t={Page:o.main`
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
    `,Code:o.div`
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
    `},s=String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Data table with scope — demo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui,-apple-system,Segoe UI,Roboto,sans-serif; }
      table { border-collapse: collapse; width: 100%; }
      caption { text-align: left; padding: 8px 0; font-weight: 600; }
      th, td { border: 1px solid #ccc; padding: 8px 10px; }
      thead th { background: color-mix(in oklab, #0ea5e9, transparent 90%); }
      tfoot th, tfoot td { background: color-mix(in oklab, #10b981, transparent 92%); }
      .k { display:inline-block; border:1px solid #bbb; border-radius:999px; padding:2px 8px; font-size:12px; }
      .muted { color: #6b7280; }
      .grid { display: grid; gap: 16px; }
      .ex { border:1px dashed #aaa; padding:8px; border-radius:10px; }
      .bad { background: color-mix(in oklab, #dc2626, transparent 92%); border:1px solid #f2a6a6; padding:8px; border-radius:10px; }
      code { background: #f5f5f5; padding:0 6px; border-radius:6px; }
    </style>
  </head>
  <body>
    <main class="grid">
      <header>
        <h1>Data table with accessible headers</h1>
        <p class="muted">Use <code>&lt;th&gt;</code> for headers and set <code>scope</code> so assistive tech can map cells correctly.</p>
      </header>

      <section class="ex">
        <h2>1) Simple header row (use <code>scope="col"</code>)</h2>
        <table>
          <caption>Monthly Sales (Units)</caption>
          <thead>
            <tr>
              <th scope="col">Month</th>
              <th scope="col">North</th>
              <th scope="col">South</th>
              <th scope="col">East</th>
              <th scope="col">West</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Jan</th>
              <td>120</td><td>90</td><td>80</td><td>70</td>
            </tr>
            <tr>
              <th scope="row">Feb</th>
              <td>140</td><td>95</td><td>88</td><td>76</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th scope="row">Total</th>
              <td>260</td><td>185</td><td>168</td><td>146</td>
            </tr>
          </tfoot>
        </table>
        <p class="muted">Row headers use <code>scope="row"</code>, column headers use <code>scope="col"</code>.</p>
      </section>

      <section class="ex">
        <h2>2) Grouped headers (<code>colgroup</code> / <code>rowgroup</code>)</h2>
        <p class="muted">When headers span multiple rows/cols, use <code>scope="colgroup"</code> or <code>scope="rowgroup"</code> for the spanning cell plus normal <code>scope</code> on the leaves.</p>

        <table>
          <caption>Quarterly Revenue (₹ lakhs)</caption>
          <thead>
            <tr>
              <th rowspan="2" scope="col">Quarter</th>
              <th colspan="3" scope="colgroup">Product A</th>
              <th colspan="2" scope="colgroup">Product B</th>
            </tr>
            <tr>
              <th scope="col">Online</th>
              <th scope="col">Retail</th>
              <th scope="col">Wholesale</th>
              <th scope="col">Online</th>
              <th scope="col">Retail</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Q1</th>
              <td>12</td><td>9</td><td>7</td>
              <td>10</td><td>8</td>
            </tr>
            <tr>
              <th scope="row">Q2</th>
              <td>13</td><td>10</td><td>8</td>
              <td>11</td><td>9</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section class="ex">
        <h2>3) Very complex tables (use <code>id</code>/<code>headers</code>)</h2>
        <p class="muted">If simple scope isn’t enough, give each <code>&lt;th&gt;</code> an <code>id</code>, and each <code>&lt;td&gt;</code> a <code>headers</code> list of the relevant ids.</p>

        <table>
          <caption>Research Metrics (demo)</caption>
          <thead>
            <tr>
              <th id="m1" scope="col">Metric</th>
              <th id="grpA" colspan="2" scope="colgroup">Group A</th>
              <th id="grpB" colspan="2" scope="colgroup">Group B</th>
            </tr>
            <tr>
              <th id="m2" scope="col">—</th>
              <th id="avgA" scope="col">Avg</th>
              <th id="sdA" scope="col">SD</th>
              <th id="avgB" scope="col">Avg</th>
              <th id="sdB" scope="col">SD</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th id="metric1" scope="row">Latency (ms)</th>
              <td headers="metric1 grpA avgA">23</td>
              <td headers="metric1 grpA sdA">3.1</td>
              <td headers="metric1 grpB avgB">27</td>
              <td headers="metric1 grpB sdB">3.4</td>
            </tr>
            <tr>
              <th id="metric2" scope="row">Throughput (ops/s)</th>
              <td headers="metric2 grpA avgA">115</td>
              <td headers="metric2 grpA sdA">8.2</td>
              <td headers="metric2 grpB avgB">109</td>
              <td headers="metric2 grpB sdB">9.0</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section class="bad">
        <h2>Common mistakes</h2>
        <ul>
          <li>Using <code>&lt;td&gt;</code> for headers instead of <code>&lt;th&gt;</code>.</li>
          <li>Omitting <code>scope</code> on <code>&lt;th&gt;</code> cells.</li>
          <li>Wrapping the whole table in extra divs that break scroll semantics.</li>
          <li>Using tables for page layout (don’t).</li>
        </ul>
      </section>

      <footer class="muted">
        Tip: Start with <span class="k">col</span>/<span class="k">row</span> scope. Only if it gets hairy, switch to precise <code>id</code>/<code>headers</code>.
      </footer>
    </main>
  </body>
</html>`;function i(){return r.useEffect(()=>{document.title="Patterns · Data table with scope"},[]),e.jsxs(t.Page,{children:[e.jsxs("header",{className:"pageHeader",id:"top",children:[e.jsx("h1",{children:"Data table with scope"}),e.jsxs("p",{className:"lede",children:["Mark header cells with ",e.jsx("code",{children:"<th>"})," and set ",e.jsx("code",{children:"scope"})," so screen readers can compute the right header for each data cell. Use ",e.jsx("code",{children:"id"}),"/",e.jsx("code",{children:"headers"})," when the structure is too complex for simple scope values."]})]}),e.jsxs("nav",{className:"toc","aria-label":"On this page",children:[e.jsx("a",{href:"#why-scope",children:"Why scope"}),e.jsx("a",{href:"#anatomy",children:"Table anatomy"}),e.jsx("a",{href:"#simple",children:"Simple headers"}),e.jsx("a",{href:"#grouped",children:"Grouped headers"}),e.jsx("a",{href:"#complex",children:"Complex via id/headers"}),e.jsx("a",{href:"#play",children:"Playground"})]}),e.jsxs("section",{id:"why-scope",children:[e.jsx("h2",{children:"Why scope matters"}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Scope"})," tells assistive tech whether a header applies to a row, a column, or a group."]}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:'scope="row"'}),", ",e.jsx("code",{children:'scope="col"'})," for basic tables."]}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:'scope="rowgroup"'}),", ",e.jsx("code",{children:'scope="colgroup"'})," when a header spans multiple rows/columns that form a group."]}),e.jsx("li",{children:"When in doubt, keep it simple and test with a screen reader."})]})})]}),e.jsxs("section",{id:"anatomy",children:[e.jsx("h2",{children:"Table anatomy"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Region elements"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("code",{children:"<caption>"})," — short title for the table."]}),e.jsxs("li",{children:[e.jsx("code",{children:"<thead>"}),", ",e.jsx("code",{children:"<tbody>"}),", ",e.jsx("code",{children:"<tfoot>"})," — structure and summary rows."]}),e.jsxs("li",{children:[e.jsx("code",{children:"<th>"})," — header cells; ",e.jsx("code",{children:"<td>"})," — data cells."]})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Rules"}),e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"Every header cell should have a meaningful scope or id."}),e.jsxs("li",{children:["Row labels belong in ",e.jsx("code",{children:'<th scope="row">'}),", not in ",e.jsx("code",{children:"<td>"}),"."]}),e.jsx("li",{children:"Don’t use tables for page layout."})]})]})]})]}),e.jsxs("section",{id:"simple",children:[e.jsx("h2",{children:"Simple table (row/col scope)"}),e.jsx(t.Code,{role:"region","aria-label":"Simple scope example",children:e.jsx("pre",{children:String.raw`<table>
  <caption>Attendance</caption>
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Mon</th>
      <th scope="col">Tue</th>
      <th scope="col">Wed</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Ananya</th>
      <td>P</td><td>A</td><td>P</td>
    </tr>
    <tr>
      <th scope="row">Rohit</th>
      <td>P</td><td>P</td><td>P</td>
    </tr>
  </tbody>
</table>`})})]}),e.jsxs("section",{id:"grouped",children:[e.jsx("h2",{children:"Grouped headers (colgroup/rowgroup)"}),e.jsx(t.Code,{role:"region","aria-label":"Grouped scope example",children:e.jsx("pre",{children:String.raw`<table>
  <caption>Results</caption>
  <thead>
    <tr>
      <th rowspan="2" scope="col">Team</th>
      <th colspan="2" scope="colgroup">Round 1</th>
      <th colspan="2" scope="colgroup">Round 2</th>
    </tr>
    <tr>
      <th scope="col">Score</th>
      <th scope="col">Rank</th>
      <th scope="col">Score</th>
      <th scope="col">Rank</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Alpha</th>
      <td>78</td><td>2</td><td>82</td><td>1</td>
    </tr>
    <tr>
      <th scope="row">Beta</th>
      <td>70</td><td>3</td><td>76</td><td>3</td>
    </tr>
  </tbody>
</table>`})})]}),e.jsxs("section",{id:"complex",children:[e.jsx("h2",{children:"When to switch to id/headers"}),e.jsxs("p",{className:"note",children:["If users can’t reliably infer a cell’s header through scope alone (e.g., deeply nested spans), assign ",e.jsx("code",{children:"id"})," to each relevant ",e.jsx("code",{children:"<th>"})," and reference them from the ",e.jsx("code",{children:"headers"})," attribute on ",e.jsx("code",{children:"<td>"}),"."]}),e.jsx(t.Code,{role:"region","aria-label":"id/headers association",children:e.jsx("pre",{children:String.raw`<table>
  <caption>Benchmarks</caption>
  <thead>
    <tr>
      <th id="h-metric" scope="col">Metric</th>
      <th id="h-a" scope="colgroup" colspan="2">Impl A</th>
      <th id="h-b" scope="colgroup" colspan="2">Impl B</th>
    </tr>
    <tr>
      <th id="h-blank" scope="col">—</th>
      <th id="h-a-avg" scope="col">Avg</th>
      <th id="h-a-p95" scope="col">p95</th>
      <th id="h-b-avg" scope="col">Avg</th>
      <th id="h-b-p95" scope="col">p95</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th id="m-lat" scope="row">Latency</th>
      <td headers="m-lat h-a h-a-avg">21</td>
      <td headers="m-lat h-a h-a-p95">30</td>
      <td headers="m-lat h-b h-b-avg">24</td>
      <td headers="m-lat h-b h-b-p95">34</td>
    </tr>
  </tbody>
</table>`})})]}),e.jsxs("section",{id:"play",children:[e.jsx("h2",{children:"Try it live"}),e.jsxs("p",{className:"lede",children:["Add missing ",e.jsx("code",{children:"scope"})," values, convert row labels from ",e.jsx("code",{children:"<td>"})," to ",e.jsx("code",{children:'<th scope="row">'}),", and practice ",e.jsx("code",{children:"id"}),"/",e.jsx("code",{children:"headers"})," for complex cases. Autosaves to this lesson."]}),e.jsx(a,{storageKey:"core-html:patterns:data-table-with-scope:v1",initialHtml:s,height:640})]}),e.jsxs("nav",{className:"nextPrev","aria-label":"Lesson navigation",children:[e.jsx(d,{to:"/patterns/labeled-form-row",className:"prev","aria-label":"Go to Labeled form row",children:"← Labeled form row"}),e.jsx(d,{to:"/patterns/figure-with-caption",className:"next","aria-label":"Go to Figure with caption",children:"Next: Figure with caption →"})]}),e.jsx("div",{className:"backTop",children:e.jsx("a",{href:"#top",children:"Back to top ↑"})})]})}export{i as default};
