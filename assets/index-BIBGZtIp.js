import{d as i,r,j as e,N as l}from"./index-D3QNcmKe.js";import{H as a}from"./index-CAjihRuM.js";const s={Page:i.main`
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
    `},d=String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>&lt;ul&gt;, &lt;ol&gt;, &lt;li&gt; — core lists</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui,-apple-system,Segoe UI,Roboto,sans-serif; }
      .grid { display: grid; gap: 14px; }
      .card { border: 1px solid #ccc; border-radius: 12px; padding: 12px; }
      .good { background: color-mix(in oklab, #16a34a, transparent 92%); border-color:#8ed09b; }
      .bad  { background: color-mix(in oklab, #dc2626, transparent 92%); border-color:#f2a6a6; }
      .muted { color: #6b7280; }
      .ex { border:1px dashed #aaa; padding:8px; border-radius:10px; margin-top:6px; }
      code { background: #f5f5f5; padding:0 6px; border-radius:6px; }
      .two { display:grid; grid-template-columns: 1fr 1fr; gap:12px; }
      @media (max-width: 900px) { .two { grid-template-columns: 1fr; } }
      .tight { line-height: 1.4; }
      .demo-roman { list-style: lower-roman; }
      .demo-inside { list-style-position: inside; background:#f7f7f7; padding:8px; border-radius:8px; }
      .custom-marker li::marker { content: "→ "; }
    </style>
  </head>
  <body>
    <main class="grid">
      <header>
        <h1>Core lists: <code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code>, <code>&lt;li&gt;</code></h1>
        <p class="muted">Lists represent a set of related items. Use <code>&lt;ul&gt;</code> when order doesn’t matter, and <code>&lt;ol&gt;</code> when order or step numbers do.</p>
      </header>

      <section class="card good">
        <h2>Good: semantic unordered list</h2>
        <p>Items with no intrinsic order → <code>&lt;ul&gt;</code>.</p>
        <div class="ex">
          <ul>
            <li>Apples</li>
            <li>Bananas</li>
            <li>Cherries</li>
          </ul>
        </div>
      </section>

      <section class="card good">
        <h2>Good: ordered steps</h2>
        <p>Where sequence matters → <code>&lt;ol&gt;</code>.</p>
        <div class="ex">
          <ol>
            <li>Preheat oven to 180°C</li>
            <li>Mix batter</li>
            <li>Bake for 25 minutes</li>
          </ol>
        </div>
      </section>

      <section class="card">
        <h2>Ordered attributes</h2>
        <div class="two">
          <div class="ex">
            <h3>start + type</h3>
            <ol start="3" type="A" class="tight">
              <li>Alpha (3)</li>
              <li>Bravo (4)</li>
              <li>Charlie (5)</li>
            </ol>
          </div>
          <div class="ex">
            <h3>reversed + li[value]</h3>
            <ol reversed class="tight">
              <li>Three (3)</li>
              <li value="1">Forced One (1)</li>
              <li>Zero (0)</li>
            </ol>
          </div>
        </div>
      </section>

      <section class="card">
        <h2>Nesting (sub-lists inside <code>&lt;li&gt;</code>)</h2>
        <div class="ex">
          <ul>
            <li>Frontend
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
              </ul>
            </li>
            <li>Backend
              <ol class="demo-roman">
                <li>Node</li>
                <li>Python</li>
              </ol>
            </li>
          </ul>
        </div>
      </section>

      <section class="card">
        <h2>Styling markers</h2>
        <div class="two">
          <div class="ex">
            <h3>list-style-position</h3>
            <ul class="demo-inside tight">
              <li>Inside places bullets within the content box.</li>
              <li>Useful for narrow sidebars.</li>
            </ul>
          </div>
          <div class="ex">
            <h3>::marker</h3>
            <ul class="custom-marker tight">
              <li>Custom arrow marker</li>
              <li>Keep it minimal</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="card">
        <h2>Navigation pattern</h2>
        <p>Menus are often <code>&lt;nav&gt;</code> + <code>&lt;ul&gt;</code> with inline list items.</p>
        <div class="ex">
          <nav aria-label="Main">
            <ul style="display:flex; gap:12px; list-style:none; padding:0; margin:0;">
              <li><a href="#">Home</a></li>
              <li><a href="#">Docs</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </nav>
        </div>
      </section>

      <section class="card bad">
        <h2>Bad: fake lists</h2>
        <p>Don’t fake lists with line breaks or paragraphs. Screen readers lose structure.</p>
        <div class="ex">
          <!-- ❌ wrong -->
          <p>- Apples<br>- Bananas<br>- Cherries</p>
        </div>
      </section>

      <footer class="muted">
        Tip: If readers must follow a sequence, choose <code>&lt;ol&gt;</code>. If order is incidental, choose <code>&lt;ul&gt;</code>.
      </footer>
    </main>
  </body>
</html>`;function n(){return r.useEffect(()=>{document.title="Lists · <ul>, <ol>, <li> semantics"},[]),e.jsxs(s.Page,{children:[e.jsxs("header",{className:"pageHeader",id:"top",children:[e.jsxs("h1",{children:[e.jsx("code",{children:"<ul>"}),", ",e.jsx("code",{children:"<ol>"}),", ",e.jsx("code",{children:"<li>"})," semantics"]}),e.jsx("p",{className:"lede",children:"Lists represent related items. Use an unordered list when order is irrelevant, and an ordered list when sequence communicates meaning (steps, rankings, chronology)."})]}),e.jsxs("nav",{className:"toc","aria-label":"On this page",children:[e.jsx("a",{href:"#model",children:"Mental model"}),e.jsx("a",{href:"#anatomy",children:"Anatomy"}),e.jsx("a",{href:"#ordered",children:"Ordered options"}),e.jsx("a",{href:"#nesting",children:"Nesting"}),e.jsx("a",{href:"#markers",children:"Markers & styling"}),e.jsx("a",{href:"#a11y",children:"Accessibility"}),e.jsx("a",{href:"#pitfalls",children:"Pitfalls"}),e.jsx("a",{href:"#faq",children:"FAQ"}),e.jsx("a",{href:"#play",children:"Playground"})]}),e.jsxs("section",{id:"model",children:[e.jsx("h2",{children:"Mental model"}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Unordered list"})," (",e.jsx("code",{children:"ul"}),") is for sets where sequence doesn’t matter."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Ordered list"})," (",e.jsx("code",{children:"ol"}),") is for steps, ranking, or time-based flows."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Item"})," (",e.jsx("code",{children:"li"}),") is the atomic child of either list type."]})]})})]}),e.jsxs("section",{id:"anatomy",children:[e.jsx("h2",{children:"Anatomy"}),e.jsx(s.Code,{children:e.jsx("pre",{children:String.raw`<ul>
  <li>Item A</li>
  <li>Item B</li>
  <li>Item C</li>
</ul>

<ol>
  <li>Step 1</li>
  <li>Step 2</li>
  <li>Step 3</li>
</ol>`})}),e.jsxs("p",{className:"note",children:["Only ",e.jsx("code",{children:"li"})," elements belong directly under ",e.jsx("code",{children:"ul"}),"/",e.jsx("code",{children:"ol"}),". Sub-lists must be nested inside a parent ",e.jsx("code",{children:"li"}),", not as siblings to it."]})]}),e.jsxs("section",{id:"ordered",children:[e.jsx("h2",{children:"Ordered options"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Attributes"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("code",{children:"start"}),": first number to display."]}),e.jsxs("li",{children:[e.jsx("code",{children:"reversed"}),": descending order."]}),e.jsxs("li",{children:[e.jsx("code",{children:"type"}),": preset numbering style (",e.jsx("code",{children:"1"}),", ",e.jsx("code",{children:"a"}),", ",e.jsx("code",{children:"A"}),", ",e.jsx("code",{children:"i"}),", ",e.jsx("code",{children:"I"}),")."]}),e.jsxs("li",{children:[e.jsx("code",{children:"li[value]"}),": override the ordinal for a specific item."]})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Example"}),e.jsx(s.Code,{children:e.jsx("pre",{children:String.raw`<ol start="10" reversed type="I">
  <li>Ten</li>
  <li value="3">Three</li>
  <li>Two</li>
</ol>`})})]})]})]}),e.jsxs("section",{id:"nesting",children:[e.jsx("h2",{children:"Nesting"}),e.jsx(s.Code,{children:e.jsx("pre",{children:String.raw`<ul>
  <li>Languages
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JS</li>
    </ul>
  </li>
  <li>Tools
    <ol type="a">
      <li>Vite</li>
      <li>Webpack</li>
    </ol>
  </li>
</ul>`})}),e.jsxs("p",{className:"note",children:["Nest the child list inside the relevant ",e.jsx("code",{children:"li"})," to keep semantics intact."]})]}),e.jsxs("section",{id:"markers",children:[e.jsx("h2",{children:"Markers & styling"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"CSS list-style"}),e.jsx(s.Code,{children:e.jsx("pre",{children:String.raw`ul { list-style: disc; }
ol { list-style: decimal; }
ul.square { list-style: square; }
ol.roman { list-style: upper-roman; }`})}),e.jsxs("p",{className:"note",children:["Removing bullets (",e.jsx("code",{children:"list-style: none"}),") is fine for components like menus—just keep the semantics and keyboard focus intact."]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"::marker"}),e.jsx(s.Code,{children:e.jsx("pre",{children:String.raw`li::marker { content: "• "; }
ol > li::marker { font-variant-numeric: tabular-nums; }`})}),e.jsxs("p",{className:"note",children:[e.jsx("code",{children:"::marker"})," targets the bullet/number glyph itself. Keep content minimal; it’s not a full layout box."]})]})]})]}),e.jsxs("section",{id:"a11y",children:[e.jsx("h2",{children:"Accessibility & patterns"}),e.jsxs("ul",{className:"badges",children:[e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Good"})," Use ",e.jsx("code",{children:"nav"})," + ",e.jsx("code",{children:"ul"})," for menus; items remain list items for screen readers."]}),e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Good"})," Prefer real lists over “fake” line-broken text."]}),e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Good"})," Use headings above lists to name groups."]})]}),e.jsxs("p",{className:"note",children:["For custom controls that behave like lists but aren’t ",e.jsx("code",{children:"ul/ol"}),", consider ARIA ",e.jsx("code",{children:'role="list"'})," / ",e.jsx("code",{children:'role="listitem"'})," carefully. Native HTML is usually better."]})]}),e.jsxs("section",{id:"pitfalls",children:[e.jsx("h2",{children:"Pitfalls"}),e.jsxs("ul",{className:"badges",children:[e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Sibling nested lists that aren’t inside a parent ",e.jsx("code",{children:"li"}),"."]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Using lists for grid layout (use CSS grid/flex)."]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Faking bullets with hyphens and ",e.jsx("code",{children:"<br>"}),"s."]})]})]}),e.jsxs("section",{id:"faq",children:[e.jsx("h2",{children:"FAQ"}),e.jsxs("details",{children:[e.jsx("summary",{children:"Can a list item contain block elements?"}),e.jsxs("div",{className:"ans",children:["Yes. An ",e.jsx("code",{children:"li"})," can contain flow content: paragraphs, nested lists, figures, etc."]})]}),e.jsxs("details",{children:[e.jsxs("summary",{children:["Should I style numbers with CSS counters instead of ",e.jsx("code",{children:"ol"}),"?"]}),e.jsxs("div",{className:"ans",children:["Use real ",e.jsx("code",{children:"ol"})," when the sequence matters. CSS counters are fine for decorative numbering in components, but they don’t carry the same semantics."]})]})]}),e.jsxs("section",{id:"play",children:[e.jsx("h2",{children:"Try it live"}),e.jsxs("p",{className:"lede",children:["Convert fake lists into semantic ones, try ",e.jsx("code",{children:"start"}),"/",e.jsx("code",{children:"reversed"}),", and adjust markers with ",e.jsx("code",{children:"::marker"}),". Autosaves to this lesson."]}),e.jsx(a,{storageKey:"core-html:lists:ul-ol-li:v1",initialHtml:d,height:640})]}),e.jsxs("nav",{className:"nextPrev","aria-label":"Lesson navigation",children:[e.jsx(l,{to:"/links/link-text-quality",className:"prev","aria-label":"Go to Link text quality",children:"← Link text quality"}),e.jsx(l,{to:"/lists/nested-and-start-reversed",className:"next","aria-label":"Go to Nested, start/reversed",children:"Next: Nested, start/reversed →"})]}),e.jsx("div",{className:"backTop",children:e.jsx("a",{href:"#top",children:"Back to top ↑"})})]})}export{n as default};
