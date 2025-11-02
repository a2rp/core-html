import{d as r,r as o,j as e,N as d}from"./index-CQ_xjxjH.js";import{H as a}from"./index-C8nEF-Cf.js";const t={Page:r.main`
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
    `,Code:r.div`
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
    <title><th> vs <td>, scope — demo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui,-apple-system,Segoe UI,Roboto,sans-serif; }
      table { border-collapse: collapse; width: 100%; }
      caption { text-align: left; font-weight: 600; margin-bottom: 8px; }
      thead th { background: color-mix(in oklab, #3b82f6, transparent 88%); }
      th, td { border: 1px solid #ccc; padding: 8px 10px; text-align: left; }
      tbody th[scope=row] { background: color-mix(in oklab, #16a34a, transparent 90%); }
      .note { margin-top: 10px; color: #6b7280; }
      .bad { background: color-mix(in oklab, #dc2626, transparent 92%); }
      .good { background: color-mix(in oklab, #16a34a, transparent 92%); }
      code { background: #f5f5f5; padding: 0 6px; border-radius: 6px; }
    </style>
  </head>
  <body>
    <main>
      <!-- Ideal basic data table -->
      <table>
        <caption>Monthly sales by region (Q1)</caption>
        <thead>
          <tr>
            <th scope="col">Region</th>
            <th scope="col">Jan</th>
            <th scope="col">Feb</th>
            <th scope="col">Mar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">North</th>
            <td>12.4k</td>
            <td>13.1k</td>
            <td>14.0k</td>
          </tr>
          <tr>
            <th scope="row">South</th>
            <td>9.8k</td>
            <td>10.2k</td>
            <td>10.7k</td>
          </tr>
          <tr>
            <th scope="row">West</th>
            <td>11.1k</td>
            <td>11.5k</td>
            <td>12.2k</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th scope="row">Total</th>
            <td>33.3k</td>
            <td>34.8k</td>
            <td>36.9k</td>
          </tr>
        </tfoot>
      </table>

      <p class="note">
        Tip: Column headers use <code>scope="col"</code> (usually in <code>&lt;thead&gt;</code>), row headers use
        <code>scope="row"</code> (first cell in each data row).
      </p>

      <!-- A common mistake (bad) -->
      <h2>Common mistake</h2>
      <table class="bad">
        <caption>BAD: Using &lt;td&gt; for headers</caption>
        <thead>
          <tr>
            <td>Region</td>
            <td>Jan</td>
            <td>Feb</td>
            <td>Mar</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>North</td><td>12.4k</td><td>13.1k</td><td>14.0k</td>
          </tr>
        </tbody>
      </table>
      <p class="note">Header cells must be <code>&lt;th&gt;</code>, not <code>&lt;td&gt;</code>. Without proper headers, assistive tech loses context.</p>

      <!-- Grouped headers -->
      <h2>Grouped headers</h2>
      <table>
        <caption>Scores by subject and term</caption>
        <thead>
          <tr>
            <th scope="col">Student</th>
            <th scope="colgroup" colspan="2">Math</th>
            <th scope="colgroup" colspan="2">Science</th>
          </tr>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Term 1</th>
            <th scope="col">Term 2</th>
            <th scope="col">Term 1</th>
            <th scope="col">Term 2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Aditi</th>
            <td>88</td><td>91</td><td>85</td><td>89</td>
          </tr>
          <tr>
            <th scope="row">Rahul</th>
            <td>76</td><td>80</td><td>79</td><td>82</td>
          </tr>
        </tbody>
      </table>

      <!-- Irregular layout that needs headers/id -->
      <h2>Irregular table (use headers/id)</h2>
      <table class="good">
        <caption>Lab results (irregular headings)</caption>
        <thead>
          <tr>
            <th id="t-test">Test</th>
            <th id="t-ref">Reference</th>
            <th id="t-sub">Subject</th>
            <th id="t-notes">Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th id="row1" headers="t-test">Hemoglobin</th>
            <td headers="t-ref row1">13–17 g/dL</td>
            <td headers="t-sub row1">14.2</td>
            <td headers="t-notes row1" rowspan="2">Subject fasting; repeat next week</td>
          </tr>
          <tr>
            <th id="row2" headers="t-test">WBC</th>
            <td headers="t-ref row2">4–11 ×10^9/L</td>
            <td headers="t-sub row2">10.3</td>
          </tr>
        </tbody>
      </table>
      <p class="note">
        When the structure is complex (spans, missing headers, mixed groups), use <code>id</code> on header cells and
        <code>headers</code> on data cells to explicitly map associations.
      </p>
    </main>
  </body>
</html>`;function i(){return o.useEffect(()=>{document.title="Tables · <th> vs <td>, and scope"},[]),e.jsxs(t.Page,{children:[e.jsxs("header",{className:"pageHeader",id:"top",children:[e.jsxs("h1",{children:[e.jsx("code",{children:"<th>"})," vs ",e.jsx("code",{children:"<td>"}),", and the"," ",e.jsx("code",{children:"scope"})," attribute"]}),e.jsxs("p",{className:"lede",children:[e.jsx("code",{children:"<th>"})," marks header cells;"," ",e.jsx("code",{children:"<td>"})," marks data cells. Add"," ",e.jsx("code",{children:"scope"})," so assistive tech can map each data cell to the correct headers—making tables understandable and navigable."]})]}),e.jsxs("nav",{className:"toc","aria-label":"On this page",children:[e.jsx("a",{href:"#anatomy",children:"Header vs data cells"}),e.jsxs("a",{href:"#scope",children:["How ",e.jsx("code",{children:"scope"})," works"]}),e.jsx("a",{href:"#groups",children:"Grouped headers"}),e.jsx("a",{href:"#complex",children:"Complex tables (headers/id)"}),e.jsx("a",{href:"#pitfalls",children:"Pitfalls"}),e.jsx("a",{href:"#play",children:"Playground"})]}),e.jsxs("section",{id:"anatomy",children:[e.jsx("h2",{children:"Header vs data cells"}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["Use ",e.jsx("code",{children:"<th>"})," for headers that label rows/columns."]}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"<td>"})," for the values."]}),e.jsxs("li",{children:["Provide a brief ",e.jsx("code",{children:"<caption>"})," and structural regions via ",e.jsx("code",{children:"<thead>"}),", ",e.jsx("code",{children:"<tbody>"}),", and ",e.jsx("code",{children:"<tfoot>"}),"."]})]})})]}),e.jsxs("section",{id:"scope",children:[e.jsxs("h2",{children:["The ",e.jsx("code",{children:"scope"})," attribute"]}),e.jsx(t.Code,{role:"region","aria-label":"Scope examples",children:e.jsx("pre",{children:String.raw`<!-- Column headers (top row) -->
<th scope="col">Price</th>

<!-- Row header (first cell in row) -->
<th scope="row">Plan A</th>

<!-- Header spans a group of columns/rows -->
<th scope="colgroup" colspan="3">Quarter 1</th>
<th scope="rowgroup" rowspan="4">West Zone</th>`})}),e.jsxs("p",{className:"note",children:["Screen readers use ",e.jsx("code",{children:"scope"})," to announce the correct header while moving across the grid. It also helps everyone understand the structure at a glance."]})]}),e.jsxs("section",{id:"groups",children:[e.jsx("h2",{children:"Grouped headers (colgroup/rowgroup)"}),e.jsx("div",{className:"card",children:e.jsxs("p",{children:["When a header labels a group of columns or rows, keep the visual merge (",e.jsx("code",{children:"colspan/rowspan"}),") and declare"," ",e.jsx("code",{children:'scope="colgroup"'})," or ",e.jsx("code",{children:'scope="rowgroup"'}),"."]})})]}),e.jsxs("section",{id:"complex",children:[e.jsxs("h2",{children:["Complex/irregular tables: use ",e.jsx("code",{children:"headers"}),"/",e.jsx("code",{children:"id"})]}),e.jsx(t.Code,{role:"region","aria-label":"headers/id mapping",children:e.jsx("pre",{children:String.raw`<table>
  <thead>
    <tr>
      <th id="h-prod">Product</th>
      <th id="h-q1">Q1</th>
      <th id="h-q2">Q2</th>
      <th id="h-remarks">Remarks</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th id="r-a" headers="h-prod">Alpha</th>
      <td headers="h-q1 r-a">120</td>
      <td headers="h-q2 r-a">140</td>
      <td headers="h-remarks r-a" rowspan="2">Promo applied</td>
    </tr>
    <tr>
      <th id="r-b" headers="h-prod">Beta</th>
      <td headers="h-q1 r-b">90</td>
      <td headers="h-q2 r-b">95</td>
      <!-- remark is merged above -->
    </tr>
  </tbody>
</table>`})}),e.jsxs("p",{className:"note",children:["Prefer ",e.jsx("code",{children:"scope"})," for simple rectangles. Switch to explicit"," ",e.jsx("code",{children:"headers/id"})," when spans or missing headers make relations ambiguous."]})]}),e.jsxs("section",{id:"pitfalls",children:[e.jsx("h2",{children:"Pitfalls"}),e.jsxs("ul",{className:"badges",children:[e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Using ",e.jsx("code",{children:"<td>"})," for header cells."]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Omitting"," ",e.jsx("code",{children:"scope"})," on header cells in simple tables."]}),e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Good"})," Use"," ",e.jsx("code",{children:"headers/id"})," only when necessary."]})]})]}),e.jsxs("section",{id:"play",children:[e.jsx("h2",{children:"Try it live"}),e.jsxs("p",{className:"lede",children:["Fix the “BAD” table by changing header cells to"," ",e.jsx("code",{children:"<th>"}),", adding proper ",e.jsx("code",{children:"scope"}),", and verifying with a screen reader or by keyboard navigation."]}),e.jsx(a,{storageKey:"core-html:tables:th-vs-td-scope:v1",initialHtml:s,height:700})]}),e.jsxs("nav",{className:"nextPrev","aria-label":"Lesson navigation",children:[e.jsx(d,{to:"/tables/structure",className:"prev","aria-label":"Go to Table structure",children:"← Table structure"}),e.jsx(d,{to:"/tables/colgroup-col",className:"next","aria-label":"Go to colgroup/col",children:"Next: colgroup and col →"})]}),e.jsx("div",{className:"backTop",children:e.jsx("a",{href:"#top",children:"Back to top ↑"})})]})}export{i as default};
