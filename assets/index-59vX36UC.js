import{d as a,r,j as e,N as s}from"./index-CQ_xjxjH.js";import{H as o}from"./index-C8nEF-Cf.js";const i={Page:a.main`
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
    <title>section vs div — demo</title>
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
      h2 small { font-weight: normal; color: #6b7280; }
      .k { display:inline-block; border:1px solid #bbb; border-radius:999px; padding:2px 8px; font-size:12px; }
      .ex { border:1px dashed #aaa; padding:8px; border-radius:10px; margin-top:6px; }
      code { background: #f5f5f5; padding:0 6px; border-radius:6px; }
    </style>
  </head>
  <body>
    <main class="grid">
      <header>
        <h1>&lt;section&gt; vs &lt;div&gt;</h1>
        <p class="muted">Use <code>section</code> when the block has a natural title (would appear in a table of contents). Use <code>div</code> for styling/grouping with no thematic label.</p>
      </header>

      <section class="card good">
        <h2>Good <small>(named thematic group)</small></h2>
        <p>This block has a purpose and a heading, so <code>&lt;section&gt;</code> is appropriate.</p>
        <div class="ex">
          <section>
            <h3>Features</h3>
            <ul><li>Fast</li><li>Secure</li><li>Accessible</li></ul>
          </section>
        </div>
      </section>

      <section class="card bad">
        <h2>Bad <small>(section with no heading)</small></h2>
        <p>Sections should have an accessible name, usually a visible heading.</p>
        <div class="ex">
          <section>
            <!-- ⚠ no heading here -->
            <p>Random content with no label.</p>
          </section>
        </div>
      </section>

      <section class="card">
        <h2>Neutral grouping <small>(use div)</small></h2>
        <p>Boxes used purely for layout/hooks should be <code>div</code>s.</p>
        <div class="ex">
          <div class="row">
            <div class="col">A</div>
            <div class="col">B</div>
            <div class="col">C</div>
          </div>
        </div>
      </section>

      <section class="card">
        <h2>ARIA note</h2>
        <p>
          If a grouping needs to be a landmark but isn’t a good fit for native ones, you may add
          <code>role="region"</code> and an accessible name <code>aria-labelledby</code> /
          <code>aria-label</code>. Use sparingly.
        </p>
        <div class="ex">
          <div role="region" aria-labelledby="rec-title">
            <h3 id="rec-title">Recommended articles</h3>
            <ul><li>One</li><li>Two</li></ul>
          </div>
        </div>
      </section>

      <footer class="muted">
        Tip: When you don’t know which to pick, ask: “Would I title this block?” If yes → section. If not → div.
      </footer>
    </main>
  </body>
</html>`;function t(){return r.useEffect(()=>{document.title="Landmarks · When to use <section> vs <div>"},[]),e.jsxs(i.Page,{children:[e.jsxs("header",{className:"pageHeader",id:"top",children:[e.jsxs("h1",{children:["When to use ",e.jsx("code",{children:"<section>"})," vs ",e.jsx("code",{children:"<div>"})]}),e.jsxs("p",{className:"lede",children:[e.jsx("code",{children:"<section>"})," groups related content that has a natural title. ",e.jsx("code",{children:"<div>"})," is a neutral wrapper used for styling or generic grouping. Choose the one that matches intent."]})]}),e.jsxs("nav",{className:"toc","aria-label":"On this page",children:[e.jsx("a",{href:"#model",children:"Mental model"}),e.jsx("a",{href:"#rules",children:"Rules of thumb"}),e.jsx("a",{href:"#aria",children:"ARIA & naming"}),e.jsx("a",{href:"#pitfalls",children:"Pitfalls"}),e.jsx("a",{href:"#faq",children:"FAQ"}),e.jsx("a",{href:"#play",children:"Playground"})]}),e.jsxs("section",{id:"model",children:[e.jsx("h2",{children:"Mental model"}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Section"})," = thematic group you would place in a Table of Contents."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Div"})," = generic box to hook style or layout. Carries no meaning."]}),e.jsx("li",{children:"Structure first, presentation second. Don’t “style your semantics.”"})]})})]}),e.jsxs("section",{id:"rules",children:[e.jsx("h2",{children:"Rules of thumb"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsxs("h3",{children:["Use ",e.jsx("code",{children:"section"})," when…"]}),e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"You’d give the block a heading (visible or off-screen)."}),e.jsxs("li",{children:["It’s a logical part of the document: ",e.jsx("em",{children:"Features"}),", ",e.jsx("em",{children:"Pricing"}),", ",e.jsx("em",{children:"FAQ"}),"."]}),e.jsx("li",{children:"It helps the outline and navigation."})]})]}),e.jsxs("div",{className:"card",children:[e.jsxs("h3",{children:["Use ",e.jsx("code",{children:"div"})," when…"]}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["It’s purely for layout or hooks (",e.jsx("code",{children:".row"}),", ",e.jsx("code",{children:".grid"}),", wrappers)."]}),e.jsx("li",{children:"It has no meaningful title or standalone purpose."}),e.jsx("li",{children:"You’re grouping a few inline/blocks for styling only."})]})]})]})]}),e.jsxs("section",{id:"aria",children:[e.jsx("h2",{children:"ARIA & accessible names"}),e.jsx(i.Code,{role:"region","aria-label":"Named section example",children:e.jsx("pre",{children:String.raw`<section aria-labelledby="features-heading">
  <h2 id="features-heading">Features</h2>
  …
</section>`})}),e.jsxs("p",{className:"note",children:["Prefer a real heading. Only add ",e.jsx("code",{children:'role="region"'})," to a ",e.jsx("code",{children:"div"})," if you need a navigable landmark and no native element fits."]})]}),e.jsxs("section",{id:"pitfalls",children:[e.jsx("h2",{children:"Pitfalls"}),e.jsxs("ul",{className:"badges",children:[e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Using ",e.jsx("code",{children:"section"})," everywhere as a fancy div."]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," ",e.jsx("code",{children:"section"})," with no heading/name."]}),e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Good"})," ",e.jsx("code",{children:"div"})," for neutral wrappers; ",e.jsx("code",{children:"section"})," for named groups."]})]})]}),e.jsxs("section",{id:"faq",children:[e.jsx("h2",{children:"FAQ"}),e.jsxs("details",{children:[e.jsx("summary",{children:"Can a section contain articles (and vice versa)?"}),e.jsx("div",{className:"ans",children:"Yes. Use whichever represents the content best. Articles are self-contained units; sections are thematic groups."})]}),e.jsxs("details",{children:[e.jsx("summary",{children:"Do I need a heading if I already have an aria-label?"}),e.jsx("div",{className:"ans",children:"A visible heading is better for everyone. Use aria-labels when headings can’t be visible."})]})]}),e.jsxs("section",{id:"play",children:[e.jsx("h2",{children:"Try it live"}),e.jsx("p",{className:"lede",children:"Convert neutral wrappers to sections where appropriate, add headings or ARIA names, and trim overused sections. Autosaves to this lesson."}),e.jsx(o,{storageKey:"core-html:landmarks:section-vs-div:v1",initialHtml:d,height:640})]}),e.jsxs("nav",{className:"nextPrev","aria-label":"Lesson navigation",children:[e.jsx(s,{to:"/landmarks/core-landmarks",className:"prev","aria-label":"Go to Core landmarks",children:"← Core landmarks"}),e.jsx(s,{to:"/landmarks/nesting-outline",className:"next","aria-label":"Go to Nesting & heading outline",children:"Next: Nesting & heading outline →"})]}),e.jsx("div",{className:"backTop",children:e.jsx("a",{href:"#top",children:"Back to top ↑"})})]})}export{t as default};
