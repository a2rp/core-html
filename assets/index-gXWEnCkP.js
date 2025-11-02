import{d as i,r as l,j as e,N as r}from"./index-CQ_xjxjH.js";import{H as d}from"./index-C8nEF-Cf.js";const s={Page:i.main`
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
            justify-content: space-between; /* prev left, next right */
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
    `,Code:i.div`
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
    `},t=String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Ordered lists — nested, start, reversed</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui,-apple-system,Segoe UI,Roboto,sans-serif; }
      main { display: grid; gap: 16px; }
      .card { border: 1px solid #ccc; border-radius: 12px; padding: 12px; }
      .muted { color: #6b7280; }
      .grid2 { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px; }
      @media (max-width: 900px) { .grid2 { grid-template-columns: 1fr; } }

      /* Demo helpers */
      ol.demo { padding-left: 24px; }
      ol.demo ol { margin-top: 6px; }
      .ex { border:1px dashed #aaa; padding:10px; border-radius:10px; margin-top:6px; }
      code { background: #f5f5f5; padding: 0 6px; border-radius: 6px; }

      /* Optional: use type for roman/alpha */
      .roman { list-style-type: lower-roman; }
      .alpha { list-style-type: lower-alpha; }
    </style>
  </head>
  <body>
    <main>
      <header>
        <h1>Ordered lists — nested, start, reversed</h1>
        <p class="muted">Use <code>&lt;ol&gt;</code> whenever the order matters (steps, rankings, sequences). Control numbering with native attributes, not hard-coded text.</p>
      </header>

      <section class="card">
        <h2>Nested lists</h2>
        <div class="ex">
          <ol class="demo">
            <li>Install tools
              <ol>
                <li>Download</li>
                <li>Verify checksum</li>
                <li>Run installer</li>
              </ol>
            </li>
            <li>Configure project</li>
            <li>Build and test</li>
          </ol>
        </div>
      </section>

      <section class="card">
        <h2>start attribute</h2>
        <p>Continue numbering from a specific value:</p>
        <div class="ex">
          <ol class="demo start" start="4">
            <li>Fourth</li>
            <li>Fifth</li>
          </ol>
        </div>
      </section>

      <section class="card">
        <h2>reversed attribute</h2>
        <p>Count down from a given start (defaults to list length if no start):</p>
        <div class="ex">
          <ol class="demo" reversed>
            <li>Top priority</li>
            <li>Medium</li>
            <li>Low</li>
          </ol>
          <p class="muted">Tip: combine with <code>start</code> if you know total items: <code>&lt;ol reversed start="5"&gt;</code></p>
        </div>
      </section>

      <section class="card">
        <h2>value on &lt;li&gt;</h2>
        <p>Jump individual numbers for headings/sections:</p>
        <div class="ex">
          <ol class="demo">
            <li>Intro</li>
            <li>Basics</li>
            <li value="10">Advanced (skip to 10)</li>
            <li>Expert</li>
          </ol>
        </div>
      </section>

      <section class="card">
        <h2>type or CSS</h2>
        <p>Choose numeric/alpha/roman. Prefer CSS <code>list-style-type</code> for full control.</p>
        <div class="ex">
          <ol class="demo alpha">
            <li>Alpha A</li>
            <li>Alpha B</li>
          </ol>
          <ol class="demo roman">
            <li>Roman i</li>
            <li>Roman ii</li>
          </ol>
        </div>
      </section>

      <footer class="muted">
        Screen readers announce positions and counts automatically when using real <code>&lt;ol&gt;</code>. Avoid faking numbers with paragraphs.
      </footer>
    </main>
  </body>
</html>`;function n(){return l.useEffect(()=>{document.title="Lists · Nested, start, reversed (and value/type)"},[]),e.jsxs(s.Page,{children:[e.jsxs("header",{className:"pageHeader",id:"top",children:[e.jsx("h1",{children:"Ordered lists: nested, start, reversed"}),e.jsxs("p",{className:"lede",children:["Use ",e.jsx("code",{children:"<ol>"})," when order matters. Native attributes like"," ",e.jsx("code",{children:"start"}),", ",e.jsx("code",{children:"reversed"}),", and ",e.jsx("code",{children:"value"})," let the browser handle numbering—better for accessibility, copy-paste, and maintenance."]})]}),e.jsxs("nav",{className:"toc","aria-label":"On this page",children:[e.jsx("a",{href:"#model",children:"Mental model"}),e.jsx("a",{href:"#attrs",children:"Attributes"}),e.jsx("a",{href:"#nested",children:"Nested lists"}),e.jsx("a",{href:"#patterns",children:"Patterns"}),e.jsx("a",{href:"#a11y",children:"Accessibility"}),e.jsx("a",{href:"#pitfalls",children:"Pitfalls"}),e.jsx("a",{href:"#faq",children:"FAQ"}),e.jsx("a",{href:"#play",children:"Playground"})]}),e.jsxs("section",{id:"model",children:[e.jsx("h2",{children:"Mental model"}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Ordered lists"})," communicate position: step 1 → step 2, rank 1 → rank 2, Chapter 1 → 2."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Let the browser count."})," Don’t hard-code “1., 2., 3.” as text; use real ",e.jsx("code",{children:"<ol>"}),"/",e.jsx("code",{children:"<li>"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Nested lists"})," express sub-steps or sub-topics inside a step, not side-by-side columns."]})]})})]}),e.jsxs("section",{id:"attrs",children:[e.jsx("h2",{children:"Attributes (quick tour)"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:e.jsx("code",{children:"start"})}),e.jsx("p",{children:"Begin numbering at a given integer."}),e.jsx(s.Code,{children:e.jsx("pre",{children:`<ol start="4">
  <li>Fourth</li>
  <li>Fifth</li>
</ol>`})})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:e.jsx("code",{children:"reversed"})}),e.jsxs("p",{children:["Count down. Without ",e.jsx("code",{children:"start"}),", it starts at the item count."]}),e.jsx(s.Code,{children:e.jsx("pre",{children:`<ol reversed>
  <li>Top</li>
  <li>Middle</li>
  <li>Low</li>
</ol>`})})]}),e.jsxs("div",{className:"card",children:[e.jsxs("h3",{children:[e.jsx("code",{children:"value"})," (on ",e.jsx("code",{children:"<li>"}),")"]}),e.jsxs("p",{children:["Force a specific number for a particular ",e.jsx("code",{children:"<li>"}),"."]}),e.jsx(s.Code,{children:e.jsx("pre",{children:`<ol>
  <li>Intro</li>
  <li value="10">Jump to ten</li>
  <li>Next</li>
</ol>`})})]}),e.jsxs("div",{className:"card",children:[e.jsxs("h3",{children:[e.jsx("code",{children:"type"})," or CSS"]}),e.jsxs("p",{children:["Use ",e.jsx("code",{children:'type="1|a|A|i|I"'})," for simple styles; prefer CSS"," ",e.jsx("code",{children:"list-style-type"})," for flexibility."]}),e.jsx(s.Code,{children:e.jsx("pre",{children:`<ol type="a">…</ol>
<ol style="list-style-type: lower-roman">…</ol>`})})]})]})]}),e.jsxs("section",{id:"nested",children:[e.jsx("h2",{children:"Nested lists"}),e.jsxs("div",{className:"card",children:[e.jsxs("p",{children:["Place a child ",e.jsx("code",{children:"<ol>"})," inside an ",e.jsx("code",{children:"<li>"})," when you have sub-steps for that step. Don’t put a sibling ",e.jsx("code",{children:"<ol>"})," directly under the parent—nest inside the list item."]}),e.jsx(s.Code,{"aria-label":"Nested list example",children:e.jsx("pre",{children:`<ol>
  <li>Prepare
    <ol>
      <li>Gather materials</li>
      <li>Check tools</li>
    </ol>
  </li>
  <li>Execute</li>
  <li>Review</li>
</ol>`})}),e.jsxs("p",{className:"note",children:["Visual spacing is just CSS. The semantics come from where the child list lives (inside the parent"," ",e.jsx("code",{children:"<li>"}),")."]})]})]}),e.jsxs("section",{id:"patterns",children:[e.jsx("h2",{children:"Patterns"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Chapters across pages"}),e.jsxs("p",{children:["Split chapters with ",e.jsx("code",{children:"start"})," to continue numbering in later sections."]}),e.jsx(s.Code,{children:e.jsx("pre",{children:`<ol start="6">
  <li>Chapter Six</li>
  <li>Chapter Seven</li>
</ol>`})})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Countdown checklist"}),e.jsxs("p",{children:["Use ",e.jsx("code",{children:"reversed"})," for top-N lists."]}),e.jsx(s.Code,{children:e.jsx("pre",{children:`<ol reversed start="5">
  <li>#5</li>
  <li>#4</li>
  <li>#3</li>
  <li>#2</li>
  <li>#1</li>
</ol>`})})]})]})]}),e.jsxs("section",{id:"a11y",children:[e.jsx("h2",{children:"Accessibility"}),e.jsxs("ul",{className:"badges",children:[e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Good"})," Real ",e.jsx("code",{children:"<ol>"})," exposes position/length to assistive tech."]}),e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Good"})," Use ",e.jsx("code",{children:"start"}),"/",e.jsx("code",{children:"reversed"}),"/",e.jsx("code",{children:"value"}),"—don’t prefix numbers in plain text."]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Simulating numbering with CSS counters on ",e.jsx("code",{children:"<div>"})," when true order semantics are required."]})]})]}),e.jsxs("section",{id:"pitfalls",children:[e.jsx("h2",{children:"Pitfalls"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["Don’t place a nested ",e.jsx("code",{children:"<ol>"})," as a sibling to the parent—nest inside the relevant ",e.jsx("code",{children:"<li>"}),"."]}),e.jsxs("li",{children:["Avoid mixing ",e.jsx("code",{children:"type"})," with heavy CSS overrides that contradict it; pick one approach."]}),e.jsxs("li",{children:["Keep numbers meaningful: if order doesn’t matter, use ",e.jsx("code",{children:"<ul>"}),"."]})]})]}),e.jsxs("section",{id:"faq",children:[e.jsx("h2",{children:"FAQ"}),e.jsxs("details",{children:[e.jsx("summary",{children:"Can I style the marker (number) with CSS?"}),e.jsxs("div",{className:"ans",children:["Yes. Use ",e.jsx("code",{children:"list-style"}),"/",e.jsx("code",{children:"list-style-type"})," or the ",e.jsx("code",{children:"::marker"})," pseudo-element for color/weight. Keep semantics intact."]})]}),e.jsxs("details",{children:[e.jsx("summary",{children:"What if I need 1.1, 1.2, 2.1 numbering?"}),e.jsxs("div",{className:"ans",children:["Consider CSS counters for visual multilevel schemes, but keep real ",e.jsx("code",{children:"<ol>"})," nesting for semantics."]})]})]}),e.jsxs("section",{id:"play",children:[e.jsx("h2",{children:"Try it live"}),e.jsxs("p",{className:"lede",children:["Practice nested lists, continue numbering with ",e.jsx("code",{children:"start"}),", create countdowns with"," ",e.jsx("code",{children:"reversed"}),", and jump with ",e.jsx("code",{children:"value"}),". Autosaves to this lesson."]}),e.jsx(d,{storageKey:"core-html:lists:nested-start-reversed:v1",initialHtml:t,height:640})]}),e.jsxs("nav",{className:"nextPrev","aria-label":"Lesson navigation",children:[e.jsx(r,{to:"/lists/ul-ol-li",className:"prev","aria-label":"Go to UL/OL/LI semantics",children:"← UL, OL, LI semantics"}),e.jsx(r,{to:"/lists/dl-dt-dd",className:"next","aria-label":"Go to Definition lists",children:"Next: Definition lists →"})]}),e.jsx("div",{className:"backTop",children:e.jsx("a",{href:"#top",children:"Back to top ↑"})})]})}export{n as default};
