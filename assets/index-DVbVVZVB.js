import{d as a,r,j as e,N as i}from"./index-CQ_xjxjH.js";import{H as d}from"./index-C8nEF-Cf.js";const s={Page:a.main`
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
    `},n=String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Heading hierarchy — demo</title>
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
      .visually-hidden {
        position: absolute !important; width: 1px; height: 1px; padding: 0; margin: -1px;
        overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; border: 0;
      }
      code { background: #f5f5f5; padding:0 6px; border-radius:6px; }
    </style>
  </head>
  <body>
    <main class="grid" id="main">
      <header>
        <h1>Heading hierarchy</h1>
        <p class="muted">Structure content with levels; style with CSS, not heading numbers.</p>
      </header>

      <section class="card good">
        <h2>Good: step down one level at a time</h2>
        <div class="ex">
          <h1>Page title</h1>
          <h2>Section A</h2>
          <h3>Topic A.1</h3>
          <h3>Topic A.2</h3>
          <h2>Section B</h2>
          <h3>Topic B.1</h3>
        </div>
      </section>

      <section class="card bad">
        <h2>Bad: skip levels for visual size</h2>
        <p>Use CSS to change size; keep semantic level correct.</p>
        <div class="ex">
          <!-- ⚠ skipping from h2 to h5 just to look smaller -->
          <h1>Page title</h1>
          <h2>Section</h2>
          <h5>Subtopic (wrong level)</h5>
        </div>
      </section>

      <section class="card good">
        <h2>Good: multiple <code>&lt;h1&gt;</code> in nested sectioning</h2>
        <p>Each <code>&lt;article&gt;</code> or similar can have its own top heading.</p>
        <div class="ex">
          <h1>Blog</h1>
          <article>
            <h1>Post A</h1>
            <p>…content…</p>
          </article>
          <article>
            <h1>Post B</h1>
            <p>…content…</p>
          </article>
        </div>
      </section>

      <section class="card">
        <h2>Landmarks and headings</h2>
        <p>Landmarks like <code>&lt;nav&gt;</code>, <code>&lt;aside&gt;</code>, and <code>&lt;main&gt;</code> benefit from an accessible name.</p>
        <div class="ex">
          <nav aria-labelledby="site-nav-h">
            <h2 id="site-nav-h" class="visually-hidden">Site navigation</h2>
            <ul><li><a href="#">Home</a></li><li><a href="#">Docs</a></li></ul>
          </nav>
        </div>
      </section>

      <section class="card">
        <h2>Visual size ≠ semantic level</h2>
        <p>Adjust appearance with CSS (e.g., <code>font-size</code>) instead of picking a smaller heading number.</p>
      </section>

      <footer class="muted">
        Tip: If a heading feels out of place, check its parent section and sibling levels.
      </footer>
    </main>
  </body>
</html>`;function t(){return r.useEffect(()=>{document.title="Headings & Text · <h1>…<h6> hierarchy"},[]),e.jsxs(s.Page,{children:[e.jsxs("header",{className:"pageHeader",id:"top",children:[e.jsxs("h1",{children:[e.jsx("code",{children:"<h1>"}),"…",e.jsx("code",{children:"<h6>"})," hierarchy"]}),e.jsxs("p",{className:"lede",children:["Heading levels convey structure. Use levels to reflect nesting, not visual size. Multiple ",e.jsx("code",{children:"<h1>"})," are valid in modern HTML when sectioning elements create new contexts."]})]}),e.jsxs("nav",{className:"toc","aria-label":"On this page",children:[e.jsx("a",{href:"#model",children:"Mental model"}),e.jsx("a",{href:"#rules",children:"Rules of thumb"}),e.jsx("a",{href:"#multi-h1",children:"Multiple h1"}),e.jsx("a",{href:"#landmarks",children:"Landmarks"}),e.jsx("a",{href:"#pitfalls",children:"Pitfalls"}),e.jsx("a",{href:"#play",children:"Playground"})]}),e.jsxs("section",{id:"model",children:[e.jsx("h2",{children:"Mental model"}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"One top heading per context."})," A page or an article starts with a top heading."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Step down one level at a time."})," h2 under h1, h3 under h2, and so on."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Style ≠ semantics."})," Use CSS for size/weight, keep levels for structure."]})]})})]}),e.jsxs("section",{id:"rules",children:[e.jsx("h2",{children:"Rules of thumb"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Do"}),e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"Start a section with a heading that summarizes its content."}),e.jsxs("li",{children:["Move from ",e.jsx("code",{children:"h2"})," to ",e.jsx("code",{children:"h3"})," for subtopics; go back up when exiting a subsection."]}),e.jsx("li",{children:"Use visually hidden text if a heading must be present but shouldn’t be visible."})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Avoid"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["Skipping levels for style (e.g., ",e.jsx("code",{children:"h2"})," → ",e.jsx("code",{children:"h5"}),")."]}),e.jsx("li",{children:"Using headings to style non-headings (logos, random bold lines)."}),e.jsx("li",{children:"Creating empty headings or headings with only icons/emojis."})]})]})]})]}),e.jsxs("section",{id:"multi-h1",children:[e.jsxs("h2",{children:["Multiple ",e.jsx("code",{children:"<h1>"})]}),e.jsx(s.Code,{role:"region","aria-label":"Multiple h1 in articles example",children:e.jsx("pre",{children:String.raw`<h1>Blog</h1>
<article>
  <h1>Post title</h1>
  <p>…</p>
</article>`})}),e.jsxs("p",{className:"note",children:["This is valid because each ",e.jsx("code",{children:"<article>"})," is a self-contained context. Screen readers and navigation tools use landmarks and headings together."]})]}),e.jsxs("section",{id:"landmarks",children:[e.jsx("h2",{children:"Landmarks"}),e.jsxs("p",{children:["Landmarks (",e.jsx("code",{children:"<main>"}),", ",e.jsx("code",{children:"<nav>"}),", ",e.jsx("code",{children:"<aside>"}),", ",e.jsx("code",{children:"<footer>"}),") are easier to navigate with headings. Provide a visible or visually hidden heading to name the region."]})]}),e.jsxs("section",{id:"pitfalls",children:[e.jsx("h2",{children:"Pitfalls"}),e.jsxs("ul",{className:"badges",children:[e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Skipping levels for visual size only."]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Using headings for styling non-headings."]}),e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Good"})," Keep levels consistent with the nesting of sections."]})]})]}),e.jsxs("section",{id:"play",children:[e.jsx("h2",{children:"Try it live"}),e.jsx("p",{className:"lede",children:"Fix heading levels, add missing section headings, and ensure landmarks have accessible names. Autosaves to this lesson."}),e.jsx(d,{storageKey:"core-html:headings:h1-h6-hierarchy:v1",initialHtml:n,height:640})]}),e.jsxs("nav",{className:"nextPrev","aria-label":"Lesson navigation",children:[e.jsx(i,{to:"/landmarks/section-vs-div",className:"prev","aria-label":"Go to When to use section vs div",children:"← When to use <section> vs <div>"}),e.jsx(i,{to:"/text/p-br-hr",className:"next","aria-label":"Go to Paragraphs, br, hr usage",children:"Next: <p>, <br>, <hr> usage →"})]}),e.jsx("div",{className:"backTop",children:e.jsx("a",{href:"#top",children:"Back to top ↑"})})]})}export{t as default};
