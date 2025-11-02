import{d as i,r,j as e,N as a}from"./index-CQ_xjxjH.js";import{H as l}from"./index-C8nEF-Cf.js";const s={Page:i.main`
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
    <title>no div for headings/lists — try it</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui,-apple-system,Segoe UI,Roboto,sans-serif; }
      .grid { display: grid; gap: 14px; }
      .card { border: 1px solid #ccc; border-radius: 12px; padding: 12px; }
      .bad  { background: color-mix(in oklab, #dc2626, transparent 92%); border-color:#f2a6a6; }
      .good { background: color-mix(in oklab, #16a34a, transparent 92%); border-color:#8ed09b; }
      .muted { color: #6b7280; }
      .fake-h { font-size: 24px; font-weight: 700; } /* visually big but not a real heading */
      .fake-bullet::before { content: "• "; }
      code { background: #f5f5f5; padding: 0 6px; border-radius: 6px; }
    </style>
  </head>
  <body>
    <main class="grid">
      <header>
        <h1>No <div> for headings/lists</h1>
        <p class="muted">Use real <code>&lt;h1&gt;…&lt;h6&gt;</code> and real lists <code>&lt;ul&gt;</code>/<code>&lt;ol&gt;</code> with <code>&lt;li&gt;</code>.</p>
      </header>

      <section class="card bad">
        <h2>Bad: fake heading in a div</h2>
        <div class="fake-h">Features</div>
        <p>This looks like a heading but isn’t announced as one.</p>
      </section>

      <section class="card good">
        <h2>Good: real heading</h2>
        <h3>Features</h3>
        <p>Now screen readers can jump to this heading.</p>
      </section>

      <section class="card bad">
        <h2>Bad: fake list</h2>
        <div class="fake-bullet">Fast</div>
        <div class="fake-bullet">Secure</div>
        <div class="fake-bullet">Accessible</div>
        <p class="muted">These are just three separate paragraphs visually styled as bullets.</p>
      </section>

      <section class="card good">
        <h2>Good: real list</h2>
        <ul>
          <li>Fast</li>
          <li>Secure</li>
          <li>Accessible</li>
        </ul>
        <p class="muted">Assistive tech announces "list with 3 items" and supports list navigation.</p>
      </section>

      <footer class="muted">
        Tip: If you’re tempted to use a <code>&lt;div&gt;</code> for a heading or bullets, stop and switch to the native element.
      </footer>
    </main>
  </body>
</html>`;function t(){return r.useEffect(()=>{document.title="Pitfalls · No <div> for headings/lists"},[]),e.jsxs(s.Page,{children:[e.jsxs("header",{className:"pageHeader",id:"top",children:[e.jsxs("h1",{children:["No ",e.jsx("code",{children:"<div>"})," for headings/lists"]}),e.jsxs("p",{className:"lede",children:["Headings must use ",e.jsx("code",{children:"<h1>…<h6>"}),". Lists must use ",e.jsx("code",{children:"<ul>"}),"/",e.jsx("code",{children:"<ol>"})," with"," ",e.jsx("code",{children:"<li>"}),". Styling a ",e.jsx("code",{children:"<div>"})," to look like a heading or bullets breaks navigation, outline, and accessibility."]})]}),e.jsxs("nav",{className:"toc","aria-label":"On this page",children:[e.jsx("a",{href:"#why",children:"Why div is wrong here"}),e.jsx("a",{href:"#correct",children:"Correct patterns"}),e.jsx("a",{href:"#sr-notes",children:"Screen reader & outline notes"}),e.jsx("a",{href:"#refactors",children:"Refactor examples"}),e.jsx("a",{href:"#faq",children:"FAQ"}),e.jsx("a",{href:"#play",children:"Playground"})]}),e.jsxs("section",{id:"why",children:[e.jsxs("h2",{children:["Why ",e.jsx("code",{children:"div"})," is wrong for headings or lists"]}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Loss of semantics:"})," A big, bold ",e.jsx("code",{children:"div"})," isn’t a heading in the DOM."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Broken navigation:"})," Users can’t jump by heading or list items with keyboards or screen readers."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Weaker SEO & outline:"})," Headings structure your document meaningfully for crawlers and tools."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Harder maintenance:"})," Re-creating native behavior with ARIA/CSS is fragile and incomplete."]})]})})]}),e.jsxs("section",{id:"correct",children:[e.jsx("h2",{children:"Correct patterns"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Real headings"}),e.jsx(s.Code,{"aria-label":"Heading example",children:e.jsx("pre",{children:String.raw`<section>
  <h2>Specifications</h2>
  <p>Details…</p>
</section>`})}),e.jsx("p",{className:"note",children:"Pick the level that fits your outline. Don’t skip levels purely for size—use CSS for size."})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Real lists"}),e.jsx(s.Code,{"aria-label":"List example",children:e.jsx("pre",{children:String.raw`<h2>Key points</h2>
<ul>
  <li>Fast</li>
  <li>Secure</li>
  <li>Accessible</li>
</ul>`})}),e.jsxs("p",{className:"note",children:["Use ",e.jsx("code",{children:"ol"})," only when order matters (steps, rankings)."]})]})]})]}),e.jsxs("section",{id:"sr-notes",children:[e.jsx("h2",{children:"Screen reader & outline notes"}),e.jsxs("ul",{className:"badges",children:[e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Good"})," Real headings appear in “Headings list” shortcuts."]}),e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Good"})," Real lists announce “list with N items”."]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Bad"})," Fake headings/lists are invisible to these features."]})]})]}),e.jsxs("section",{id:"refactors",children:[e.jsx("h2",{children:"Refactor examples"}),e.jsx("h3",{children:"1) Fake heading → real heading"}),e.jsx(s.Code,{children:e.jsx("pre",{children:String.raw`<!-- ❌ before -->
<div class="title">Pricing</div>
<p>Pick a plan…</p>

<!-- ✅ after -->
<h2>Pricing</h2>
<p>Pick a plan…</p>`})}),e.jsx("h3",{children:"2) Styled bullets → real list"}),e.jsx(s.Code,{children:e.jsx("pre",{children:String.raw`<!-- ❌ before -->
<div class="bullet">One</div>
<div class="bullet">Two</div>
<div class="bullet">Three</div>

<!-- ✅ after -->
<ul>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
</ul>`})}),e.jsx("h3",{children:"3) Grid of features → still a list"}),e.jsx(s.Code,{children:e.jsx("pre",{children:String.raw`<!-- ❌ before -->
<div class="grid">
  <div class="feature">Fast</div>
  <div class="feature">Secure</div>
  <div class="feature">Reliable</div>
</div>

<!-- ✅ after -->
<ul class="grid">
  <li class="feature">Fast</li>
  <li class="feature">Secure</li>
  <li class="feature">Reliable</li>
</ul>`})}),e.jsxs("p",{className:"note",children:["Layout doesn’t change semantics. A grid can still be a list: just style the ",e.jsx("code",{children:"ul"})," and ",e.jsx("code",{children:"li"}),"."]})]}),e.jsxs("section",{id:"faq",children:[e.jsx("h2",{children:"FAQ"}),e.jsxs("details",{children:[e.jsx("summary",{children:"Can I fix a fake heading with role or aria-level?"}),e.jsx("div",{className:"ans",children:"Use a real heading whenever possible. ARIA roles are for special cases, not replacements for proper elements."})]}),e.jsxs("details",{children:[e.jsx("summary",{children:"What if I need custom styles?"}),e.jsxs("div",{className:"ans",children:["Use CSS on the semantic element: ",e.jsxs("code",{children:["h2 ","{ font-size: 28px; }"]}),"."]})]})]}),e.jsxs("section",{id:"play",children:[e.jsx("h2",{children:"Try it live"}),e.jsx("p",{className:"lede",children:"Replace fake headings and fake bullets with semantic elements. Validate by using a screen reader or a “Headings”/“Landmarks” browser extension."}),e.jsx(l,{storageKey:"core-html:pitfalls:no-div-for-headings:v1",initialHtml:d,height:640})]}),e.jsxs("nav",{className:"nextPrev","aria-label":"Lesson navigation",children:[e.jsx(a,{to:"/pitfalls/button-vs-link",className:"prev","aria-label":"Go to Button vs Link",children:"← Button vs Link"}),e.jsx(a,{to:"/pitfalls/text-inside-images",className:"next","aria-label":"Go to Avoid text inside images",children:"Next: Avoid text inside images →"})]}),e.jsx("div",{className:"backTop",children:e.jsx("a",{href:"#top",children:"Back to top ↑"})})]})}export{t as default};
