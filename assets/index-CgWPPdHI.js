import{d as i,r,j as e,N as s}from"./index-D3QNcmKe.js";import{H as a}from"./index-CAjihRuM.js";const d={Page:i.main`
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
    `},t=String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Definition lists — demo</title>
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
      .k { display:inline-block; border:1px solid #bbb; border-radius:999px; padding:2px 8px; font-size:12px; }
      .ex { border:1px dashed #aaa; padding:8px; border-radius:10px; margin-top:6px; }
      code { background: #f5f5f5; padding:0 6px; border-radius:6px; }
      dl { margin: 0; }
      dl.compact dt { font-weight: 600; }
      dl.compact dd { margin: 0 0 8px 0; }
      .props dt { float: left; min-width: 160px; font-weight: 600; }
      .props dd { margin-left: 160px; }
      .props::after { content: ""; display: table; clear: both; }
    </style>
  </head>
  <body>
    <main class="grid">
      <header>
        <h1>Definition lists (<code>&lt;dl&gt;</code>)</h1>
        <p class="muted">Use for term–definition or name–value pairs. Children must be <code>&lt;dt&gt;</code> and <code>&lt;dd&gt;</code> only.</p>
      </header>

      <section class="card good">
        <h2>Glossary</h2>
        <div class="ex">
          <dl class="compact">
            <dt>ARIA</dt>
            <dd>Accessible Rich Internet Applications, a set of attributes for better accessibility.</dd>

            <dt>CLS</dt>
            <dd>Cumulative Layout Shift; a Core Web Vitals metric.</dd>
          </dl>
        </div>
      </section>

      <section class="card good">
        <h2>Property sheet (name–value pairs)</h2>
        <p>Multiple terms can share one definition, or one term can have multiple definitions.</p>
        <div class="ex">
          <dl class="props">
            <dt>Author</dt><dd>Jane Doe</dd>
            <dt>License</dt><dd>MIT</dd>
            <dt>Tags</dt>
            <dd>HTML, Semantics</dd>
            <dd>Accessibility</dd>
            <dt>Aliases</dt>
            <dt>Also known as</dt>
            <dd>Definition list, Desc list</dd>
          </dl>
        </div>
      </section>

      <section class="card bad">
        <h2>Don’t use for layout-only grids</h2>
        <p>Using <code>&lt;dl&gt;</code> to fake two-column layout without true term–definition meaning is misleading.</p>
        <div class="ex">
          <!-- Wrong: divs inside dl, and no real term–definition relationship -->
          <dl>
            <div>Left column</div>
            <div>Right column</div>
          </dl>
        </div>
      </section>

      <section class="card bad">
        <h2>Invalid children</h2>
        <p>Only <code>&lt;dt&gt;</code> or <code>&lt;dd&gt;</code> may be direct children of <code>&lt;dl&gt;</code>.</p>
        <div class="ex">
          <dl>
            <!-- ⚠ invalid: p as a direct child -->
            <p>This is invalid</p>
          </dl>
        </div>
      </section>

      <section class="card">
        <h2>FAQs: sometimes okay, sometimes not</h2>
        <p>
          If each question (term) has exactly one answer (definition), a <code>&lt;dl&gt;</code> can be fine.
          If it’s more like a list of expandable panels, consider <code>&lt;section&gt;</code> + headings or
          <code>&lt;details&gt;</code>/<code>&lt;summary&gt;</code>.
        </p>
        <div class="ex">
          <dl class="compact">
            <dt>Can I use dl for FAQs?</dt>
            <dd>Yes, when it’s truly question → answer pairs.</dd>
            <dt>What if answers are long and structured?</dt>
            <dd>You can include paragraphs, lists, or even figures inside <code>dd</code>.</dd>
          </dl>
        </div>
      </section>

      <footer class="muted">
        Tips:
        <span class="k">dt</span> term → <span class="k">dd</span> definition.
        Valid pattern is one-or-more <code>dt</code> followed by one-or-more <code>dd</code>.
        Direct children only.
      </footer>
    </main>
  </body>
</html>`;function l(){return r.useEffect(()=>{document.title="Lists · Definition lists (<dl>, <dt>, <dd>)"},[]),e.jsxs(d.Page,{children:[e.jsxs("header",{className:"pageHeader",id:"top",children:[e.jsxs("h1",{children:["Definition lists ",e.jsx("code",{children:"<dl>"}),", ",e.jsx("code",{children:"<dt>"}),", ",e.jsx("code",{children:"<dd>"})]}),e.jsxs("p",{className:"lede",children:["Use definition lists for true term–definition or name–value pairs: glossaries, property sheets, metadata panels. Keep structure valid: only ",e.jsx("code",{children:"dt"})," and ",e.jsx("code",{children:"dd"})," as direct children of",e.jsx("code",{children:" dl"}),", in groups of one-or-more ",e.jsx("code",{children:"dt"})," followed by one-or-more ",e.jsx("code",{children:"dd"}),"."]})]}),e.jsxs("nav",{className:"toc","aria-label":"On this page",children:[e.jsx("a",{href:"#when",children:"When to use"}),e.jsx("a",{href:"#anatomy",children:"Anatomy"}),e.jsx("a",{href:"#patterns",children:"Valid patterns"}),e.jsx("a",{href:"#content",children:"What can go in dd"}),e.jsx("a",{href:"#a11y",children:"Accessibility"}),e.jsx("a",{href:"#pitfalls",children:"Pitfalls"}),e.jsx("a",{href:"#play",children:"Playground"})]}),e.jsxs("section",{id:"when",children:[e.jsx("h2",{children:"When to use"}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"Glossaries: term → definition."}),e.jsx("li",{children:"Property sheets: label → value (e.g., Author, License, Version)."}),e.jsx("li",{children:"Key–value UI: invoice totals, product specs, metadata panels."}),e.jsxs("li",{children:["FAQs that are strictly Q → A pairs (for collapsible UI consider ",e.jsx("code",{children:"<details>"}),")."]})]})})]}),e.jsxs("section",{id:"anatomy",children:[e.jsx("h2",{children:"Anatomy"}),e.jsx(d.Code,{role:"region","aria-label":"Basic definition list",children:e.jsx("pre",{children:String.raw`<dl>
  <dt>Term</dt>
  <dd>Definition of the term.</dd>
</dl>`})}),e.jsxs("p",{className:"note",children:["Only ",e.jsx("code",{children:"<dt>"})," and ",e.jsx("code",{children:"<dd>"})," are allowed as direct children of"," ",e.jsx("code",{children:"<dl>"}),". Wrap extra layout inside the ",e.jsx("code",{children:"dd"}),", not around the ",e.jsx("code",{children:"dl"}),"."]})]}),e.jsxs("section",{id:"patterns",children:[e.jsx("h2",{children:"Valid patterns"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Multiple terms → one definition"}),e.jsx(d.Code,{children:e.jsx("pre",{children:String.raw`<dl>
  <dt>Aliases</dt>
  <dt>Also known as</dt>
  <dd>Definition list, Desc list</dd>
</dl>`})})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"One term → multiple definitions"}),e.jsx(d.Code,{children:e.jsx("pre",{children:String.raw`<dl>
  <dt>Accessibility</dt>
  <dd>Making interfaces usable by people with disabilities.</dd>
  <dd>Often shortened to “a11y”.</dd>
</dl>`})})]})]})]}),e.jsxs("section",{id:"content",children:[e.jsxs("h2",{children:["What can go inside ",e.jsx("code",{children:"dd"}),"?"]}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"Paragraphs, lists, figures, tables—structured content is fine."}),e.jsx("li",{children:"You can style pairs with CSS (grid/floats) but keep semantics intact."}),e.jsxs("li",{children:["Avoid putting block wrappers as direct children of ",e.jsx("code",{children:"dl"}),"—they belong inside ",e.jsx("code",{children:"dd"}),"."]})]})})]}),e.jsxs("section",{id:"a11y",children:[e.jsx("h2",{children:"Accessibility"}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["Screen readers announce ",e.jsx("code",{children:"dt"})," as a term and associate following ",e.jsx("code",{children:"dd"}),"(s) as definitions."]}),e.jsxs("li",{children:["Don’t leave ",e.jsx("code",{children:"dt"})," empty; each group must be meaningful."]}),e.jsxs("li",{children:["If you add headings, keep them inside ",e.jsx("code",{children:"dd"})," content. The relationship is still term ↔ definition."]})]})})]}),e.jsxs("section",{id:"pitfalls",children:[e.jsx("h2",{children:"Pitfalls"}),e.jsxs("ul",{className:"badges",children:[e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Divs or paragraphs as direct children of ",e.jsx("code",{children:"dl"}),"."]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Using ",e.jsx("code",{children:"dl"})," for arbitrary two-column layout."]}),e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Good"})," Use when there’s a genuine name–value or term–definition relationship."]})]})]}),e.jsxs("section",{id:"play",children:[e.jsx("h2",{children:"Try it live"}),e.jsxs("p",{className:"lede",children:["Fix invalid children, group ",e.jsx("code",{children:"dt"}),"/",e.jsx("code",{children:"dd"})," correctly, and adapt layout without breaking semantics. Autosaves to this lesson."]}),e.jsx(a,{storageKey:"core-html:lists:dl-dt-dd:v1",initialHtml:t,height:640})]}),e.jsxs("nav",{className:"nextPrev","aria-label":"Lesson navigation",children:[e.jsx(s,{to:"/lists/nested-and-start-reversed",className:"prev","aria-label":"Go to Nested, start/reversed",children:"← Nested, start/reversed"}),e.jsx(s,{to:"/media/img-basics",className:"next","aria-label":"Go to <img> basics",children:"Next: <img> basics →"})]}),e.jsx("div",{className:"backTop",children:e.jsx("a",{href:"#top",children:"Back to top ↑"})})]})}export{l as default};
