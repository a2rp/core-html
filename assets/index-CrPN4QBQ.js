import{d as s,r as a,j as e,N as r}from"./index-CQ_xjxjH.js";import{H as d}from"./index-C8nEF-Cf.js";const i={Page:s.main`
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
    `,Code:s.div`
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
    `},o=String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Multiple h1 — playground</title>
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
      code { background: #f5f5f5; padding:0 6px; border-radius:6px; }
      .ex { border:1px dashed #aaa; padding:8px; border-radius:10px; margin-top:6px; }
      .two { display:grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap:12px; }
      @media (max-width: 840px){ .two{ grid-template-columns: 1fr; } }
    </style>
  </head>
  <body>
    <main class="grid">
      <header>
        <h1>Multiple <code>h1</code> per context</h1>
        <p class="muted">One document-level <code>h1</code> is the safe default. Additional <code>h1</code> elements are fine inside independent sections like <code>&lt;article&gt;</code>, but keep heading levels meaningful.</p>
      </header>

      <section class="card good">
        <h2>Good (document h1 + local h1 in articles)</h2>
        <p>The page has one top-level <code>h1</code>. Each article is a self-contained unit with its own <code>h1</code>.</p>
        <div class="ex two">
          <article>
            <h1>How to brew coffee</h1>
            <p>Per-article title.</p>
          </article>
          <article>
            <h1>How to steam milk</h1>
            <p>Per-article title.</p>
          </article>
        </div>
      </section>

      <section class="card bad">
        <h2>Bad (flat region with many h1s)</h2>
        <p>Multiple <code>h1</code>s inside the same non-sectioned container. Screen reader "heading level 1" navigation becomes noisy.</p>
        <div class="ex">
          <div class="list">
            <h1>Features</h1>
            <p>…</p>
            <h1>Pricing</h1>
            <p>…</p>
            <h1>FAQ</h1>
            <p>…</p>
          </div>
        </div>
      </section>

      <section class="card">
        <h2>Better (use descending ranks)</h2>
        <p>Keep the document outline honest: one <code>h1</code> for the page, then <code>h2</code> for major sections, <code>h3</code> for subsections, and so on.</p>
        <div class="ex">
          <h1>Product</h1>
          <h2>Features</h2>
          <h3>Fast</h3>
          <h3>Secure</h3>
          <h2>Pricing</h2>
          <h2>FAQ</h2>
        </div>
      </section>

      <section class="card">
        <h2>Component caveat</h2>
        <p>If you build a reusable "Card" component, don’t hardcode <code>&lt;h1&gt;</code> inside it. Accept a <code>as</code>/<code>level</code> prop and render the right rank where used.</p>
      </section>

      <footer class="muted">
        Rule of thumb: One document <code>h1</code>; additional <code>h1</code>s only inside self-contained sections like <code>&lt;article&gt;</code>. Otherwise, use <code>h2…h6</code>.
      </footer>
    </main>
  </body>
</html>`;function t(){return a.useEffect(()=>{document.title="Pitfalls · Multiple <h1> per context"},[]),e.jsxs(i.Page,{children:[e.jsxs("header",{className:"pageHeader",id:"top",children:[e.jsxs("h1",{children:["Multiple ",e.jsx("code",{children:"<h1>"})," per context"]}),e.jsxs("p",{className:"lede",children:["HTML allows more than one ",e.jsx("code",{children:"h1"}),", but assistive tech and SEO rely on real heading ranks. Use a single document-level ",e.jsx("code",{children:"h1"}),", then descend with ",e.jsx("code",{children:"h2…h6"}),". Reserve extra ",e.jsx("code",{children:"h1"}),"s for self-contained sections such as ",e.jsx("code",{children:"<article>"}),"."]})]}),e.jsxs("nav",{className:"toc","aria-label":"On this page",children:[e.jsx("a",{href:"#model",children:"Mental model"}),e.jsx("a",{href:"#rules",children:"Rules of thumb"}),e.jsx("a",{href:"#a11y",children:"Accessibility & SEO notes"}),e.jsx("a",{href:"#components",children:"Component guidance"}),e.jsx("a",{href:"#faq",children:"FAQ"}),e.jsx("a",{href:"#play",children:"Playground"})]}),e.jsxs("section",{id:"model",children:[e.jsx("h2",{children:"Mental model"}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Document level:"})," Prefer exactly one ",e.jsx("code",{children:"h1"})," that names the page."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Section level:"})," In truly independent sections (",e.jsx("code",{children:"article"}),", ",e.jsx("code",{children:"aside"}),"), a local ",e.jsx("code",{children:"h1"})," can be appropriate."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Hierarchy matters:"})," Most UAs and ATs use literal h1–h6 levels, not the abandoned “outline algorithm”."]})]})})]}),e.jsxs("section",{id:"rules",children:[e.jsx("h2",{children:"Rules of thumb"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Do"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["Use one ",e.jsx("code",{children:"h1"})," for the page title."]}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"h2"})," for major sections, ",e.jsx("code",{children:"h3"})," for subsections, etc."]}),e.jsxs("li",{children:["Within an ",e.jsx("code",{children:"article"}),", using ",e.jsx("code",{children:"h1"})," for that article’s title is acceptable."]})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Avoid"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["Sprinkling multiple ",e.jsx("code",{children:"h1"}),"s within the same flat container."]}),e.jsxs("li",{children:["Skipping levels arbitrarily (e.g., ",e.jsx("code",{children:"h1 → h3"})," with no ",e.jsx("code",{children:"h2"}),")."]}),e.jsxs("li",{children:["Hardcoding ",e.jsx("code",{children:"h1"})," inside generic, reusable components."]})]})]})]})]}),e.jsxs("section",{id:"a11y",children:[e.jsx("h2",{children:"Accessibility & SEO notes"}),e.jsx(i.Code,{role:"region","aria-label":"Heading ranks example",children:e.jsx("pre",{children:String.raw`<!-- Screen reader users navigate by heading level -->
<h1>Docs</h1>
  <h2>Getting started</h2>
    <h3>Install</h3>
    <h3>Configure</h3>
  <h2>Guides</h2>`})}),e.jsxs("p",{className:"note",children:["Search engines can parse multiple ",e.jsx("code",{children:"h1"}),"s, but inconsistent ranks dilute signals. Clear hierarchy helps both readers and crawlers."]})]}),e.jsxs("section",{id:"components",children:[e.jsx("h2",{children:"Component guidance"}),e.jsx(i.Code,{children:e.jsx("pre",{children:String.raw`// Pseudocode: pass the desired heading level
function CardTitle({ as: Tag = "h3", children }) {
  return <Tag className="cardTitle">{children}</Tag>;
}

// Usage decides the rank:
<CardTitle as="h2">Features</CardTitle>`})})]}),e.jsxs("section",{id:"faq",children:[e.jsx("h2",{children:"FAQ"}),e.jsxs("details",{children:[e.jsxs("summary",{children:["Is multiple ",e.jsx("code",{children:"h1"})," invalid HTML?"]}),e.jsxs("div",{className:"ans",children:["No. It’s valid, especially inside sectioning content like ",e.jsx("code",{children:"<article>"}),". It’s still risky for flat layouts."]})]}),e.jsxs("details",{children:[e.jsxs("summary",{children:["Should I ever use ",e.jsx("code",{children:'role="heading"'})," with ",e.jsx("code",{children:"aria-level"}),"?"]}),e.jsxs("div",{className:"ans",children:["Only for edge cases (e.g., custom widgets). Prefer native ",e.jsx("code",{children:"h1–h6"})," so AT gets levels automatically."]})]})]}),e.jsxs("section",{id:"play",children:[e.jsx("h2",{children:"Try it live"}),e.jsxs("p",{className:"lede",children:["Fix the “Bad” example by replacing extra ",e.jsx("code",{children:"h1"}),"s with ",e.jsx("code",{children:"h2/h3"})," or by wrapping each block in an ",e.jsx("code",{children:"article"})," with its own ",e.jsx("code",{children:"h1"}),"."]}),e.jsx(d,{storageKey:"core-html:pitfalls:multiple-h1:v1",initialHtml:o,height:640})]}),e.jsxs("nav",{className:"nextPrev","aria-label":"Lesson navigation",children:[e.jsx(r,{to:"/pitfalls/void-elements",className:"prev","aria-label":"Go to Void elements not self-closing",children:"← Void elements not self-closing"}),e.jsx(r,{to:"/pitfalls/button-vs-link",className:"next","aria-label":"Go to Button for actions, link for navigation",children:"Next: Button vs link →"})]}),e.jsx("div",{className:"backTop",children:e.jsx("a",{href:"#top",children:"Back to top ↑"})})]})}export{t as default};
