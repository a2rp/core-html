import{d as e,r,j as t,N as s}from"./index-CQ_xjxjH.js";import{H as o}from"./index-C8nEF-Cf.js";const a={Page:e.main`
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
    `,Code:e.div`
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
    <title>Table structure — live demo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui, -apple-system, Segoe UI, Roboto, sans-serif; }
      .wrap { max-width: 920px; margin: 0 auto; display: grid; gap: 16px; }
      table { border-collapse: collapse; width: 100%; background: Canvas; color: CanvasText; }
      caption { text-align: left; font-weight: 600; padding: 10px 0; }
      thead th { position: sticky; top: 0; background: color-mix(in oklab, #333, transparent 80%); backdrop-filter: blur(2px); }
      tfoot th, tfoot td { position: sticky; bottom: 0; background: color-mix(in oklab, #333, transparent 85%); }
      th, td { border: 1px solid #ccc; padding: 8px 10px; vertical-align: top; }
      tbody tr:nth-child(odd) td { background: color-mix(in oklab, #999, transparent 92%); }
      .num { text-align: right; font-variant-numeric: tabular-nums; }
      .muted { color: #6b7280; }
      .note { border-left: 3px solid #16a34a; padding: 8px 10px; border-radius: 8px; background: color-mix(in oklab, #16a34a, transparent 92%); }
      .tall { max-height: 280px; overflow: auto; border: 1px solid #ccc; border-radius: 10px; }
    </style>
  </head>
  <body>
    <div class="wrap">
      <p class="muted">Try: scroll the table; header stays at the top and totals stay at the bottom. That’s the benefit of regions.</p>

      <div class="tall">
        <table>
          <caption>Monthly Sales by Region (Q1)</caption>
          <thead>
            <tr>
              <th scope="col">Region</th>
              <th scope="col">Month</th>
              <th scope="col" class="num">Units</th>
              <th scope="col" class="num">Revenue (₹)</th>
            </tr>
          </thead>
          <tbody>
            <tr><th scope="row">North</th><td>Jan</td><td class="num">120</td><td class="num">240,000</td></tr>
            <tr><th scope="row">North</th><td>Feb</td><td class="num">140</td><td class="num">280,000</td></tr>
            <tr><th scope="row">North</th><td>Mar</td><td class="num">130</td><td class="num">260,000</td></tr>

            <tr><th scope="row">South</th><td>Jan</td><td class="num">110</td><td class="num">220,000</td></tr>
            <tr><th scope="row">South</th><td>Feb</td><td class="num">150</td><td class="num">300,000</td></tr>
            <tr><th scope="row">South</th><td>Mar</td><td class="num">160</td><td class="num">320,000</td></tr>

            <tr><th scope="row">East</th><td>Jan</td><td class="num">90</td><td class="num">180,000</td></tr>
            <tr><th scope="row">East</th><td>Feb</td><td class="num">100</td><td class="num">200,000</td></tr>
            <tr><th scope="row">East</th><td>Mar</td><td class="num">95</td><td class="num">190,000</td></tr>

            <tr><th scope="row">West</th><td>Jan</td><td class="num">130</td><td class="num">260,000</td></tr>
            <tr><th scope="row">West</th><td>Feb</td><td class="num">120</td><td class="num">240,000</td></tr>
            <tr><th scope="row">West</th><td>Mar</td><td class="num">125</td><td class="num">250,000</td></tr>
          </tbody>
          <tfoot>
            <tr>
              <th scope="row" colspan="2">Total</th>
              <td class="num"><strong>1,480</strong></td>
              <td class="num"><strong>2,960,000</strong></td>
            </tr>
          </tfoot>
        </table>
      </div>

      <p class="note">
        Put <strong>totals/summary</strong> in <code>&lt;tfoot&gt;</code> even if it appears visually at the bottom. The region is semantic;
        you’re free to style where it lands.
      </p>
    </div>
  </body>
</html>`;function n(){return r.useEffect(()=>{document.title="Tables · Structure: caption, thead, tbody, tfoot"},[]),t.jsxs(a.Page,{children:[t.jsxs("header",{className:"pageHeader",id:"top",children:[t.jsxs("h1",{children:["Table structure: ",t.jsx("code",{children:"<caption>"}),", ",t.jsx("code",{children:"<thead>"}),","," ",t.jsx("code",{children:"<tbody>"}),", ",t.jsx("code",{children:"<tfoot>"})]}),t.jsxs("p",{className:"lede",children:["Tables have a few key regions. Use a ",t.jsx("code",{children:"caption"})," to title the table, and group rows into ",t.jsx("code",{children:"thead"}),", ",t.jsx("code",{children:"tbody"}),", and ",t.jsx("code",{children:"tfoot"}),". This helps accessibility, printing, sticky headers, and mental clarity."]})]}),t.jsxs("nav",{className:"toc","aria-label":"On this page",children:[t.jsx("a",{href:"#anatomy",children:"Anatomy & order"}),t.jsx("a",{href:"#semantics",children:"Why regions matter"}),t.jsx("a",{href:"#best-practices",children:"Best practices"}),t.jsx("a",{href:"#pitfalls",children:"Pitfalls"}),t.jsx("a",{href:"#play",children:"Playground"})]}),t.jsxs("section",{id:"anatomy",children:[t.jsx("h2",{children:"Anatomy & order"}),t.jsxs("div",{className:"card",children:[t.jsx(a.Code,{children:t.jsx("pre",{children:String.raw`<table>
  <caption>Describes the table’s purpose</caption>
  <thead>   <!-- column headers go here -->
    <tr>
      <th scope="col">…</th>
      <th scope="col">…</th>
    </tr>
  </thead>
  <tbody>   <!-- the actual data rows -->
    <tr>
      <th scope="row">Row header</th>
      <td>…</td>
      <td>…</td>
    </tr>
  </tbody>
  <tfoot>   <!-- totals / summary -->
    <tr>
      <th scope="row" colspan="2">Total</th>
      <td>…</td>
    </tr>
  </tfoot>
</table>`})}),t.jsxs("ul",{className:"bullets",children:[t.jsxs("li",{children:[t.jsx("strong",{children:"caption"})," is the first child and acts like a table title. It’s announced by screen readers, and it’s visible text for everyone."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"thead"})," contains header rows (usually ",t.jsx("code",{children:'<th scope="col">'}),")."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"tbody"})," contains data rows."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"tfoot"})," contains totals/summary. Put totals here semantically even if you style it to appear below."]})]})]})]}),t.jsxs("section",{id:"semantics",children:[t.jsx("h2",{children:"Why regions matter"}),t.jsxs("div",{className:"grid2",children:[t.jsxs("div",{className:"card",children:[t.jsx("h3",{children:"Usability & a11y"}),t.jsxs("ul",{className:"bullets",children:[t.jsx("li",{children:"Assistive tech can announce table title and navigate regions."}),t.jsxs("li",{children:["Sticky headers/footers are simpler when rows live in ",t.jsx("code",{children:"thead"}),"/",t.jsx("code",{children:"tfoot"}),"."]}),t.jsx("li",{children:"Print styles can repeat header rows on each page automatically in many UAs."})]})]}),t.jsxs("div",{className:"card",children:[t.jsx("h3",{children:"Maintenance"}),t.jsxs("ul",{className:"bullets",children:[t.jsxs("li",{children:["Teams know where to add columns (in ",t.jsx("code",{children:"thead"}),") vs. data (in ",t.jsx("code",{children:"tbody"}),")."]}),t.jsxs("li",{children:["Totals logic has a stable home in ",t.jsx("code",{children:"tfoot"}),"."]}),t.jsx("li",{children:"Clear separation reduces layout hacks and fragile selectors."})]})]})]})]}),t.jsxs("section",{id:"best-practices",children:[t.jsx("h2",{children:"Best practices"}),t.jsxs("ul",{className:"badges",children:[t.jsxs("li",{children:[t.jsx("span",{className:"good",children:"Do"})," Give every data table a concise ",t.jsx("code",{children:"caption"}),"."]}),t.jsxs("li",{children:[t.jsx("span",{className:"good",children:"Do"})," Keep header cells inside ",t.jsx("code",{children:"thead"}),"; totals in ",t.jsx("code",{children:"tfoot"}),"."]}),t.jsxs("li",{children:[t.jsx("span",{className:"good",children:"Do"})," Use ",t.jsx("code",{children:"th"})," for headers and ",t.jsx("code",{children:"td"})," for data."]}),t.jsxs("li",{children:[t.jsx("span",{className:"bad",children:"Avoid"})," layout tables. Use CSS Grid/Flexbox for page layout."]}),t.jsxs("li",{children:[t.jsx("span",{className:"bad",children:"Avoid"})," mixing unrelated datasets into one mega-table."]})]})]}),t.jsxs("section",{id:"pitfalls",children:[t.jsx("h2",{children:"Pitfalls"}),t.jsxs("ul",{className:"bullets",children:[t.jsxs("li",{children:["Putting the table title ",t.jsx("em",{children:"outside"})," the table. Use ",t.jsx("code",{children:"caption"}),"—it’s the right home and gets announced."]}),t.jsxs("li",{children:["Using only ",t.jsx("code",{children:"tbody"})," for everything. Regions are cheap and unlock useful behaviors."]}),t.jsxs("li",{children:["Styling totals as the last ",t.jsx("code",{children:"tbody"})," row. It’s more robust in ",t.jsx("code",{children:"tfoot"}),"."]})]})]}),t.jsxs("section",{id:"play",children:[t.jsx("h2",{children:"Try it live"}),t.jsxs("p",{className:"lede",children:["Add a ",t.jsx("code",{children:"caption"}),", split rows into ",t.jsx("code",{children:"thead"}),"/",t.jsx("code",{children:"tbody"}),"/",t.jsx("code",{children:"tfoot"}),", and try sticky headers. Save your version for quick recall later."]}),t.jsx(o,{storageKey:"core-html:tables:structure:v1",initialHtml:d,height:640})]}),t.jsxs("nav",{className:"nextPrev","aria-label":"Lesson navigation",children:[t.jsx(s,{to:"/media/track-basics",className:"prev","aria-label":"Go to Track basics",children:"← Track basics"}),t.jsx(s,{to:"/tables/th-vs-td-scope",className:"next","aria-label":"Go to th vs td and scope",children:"Next: <th> vs <td> and scope →"})]}),t.jsx("div",{className:"backTop",children:t.jsx("a",{href:"#top",children:"Back to top ↑"})})]})}export{n as default};
