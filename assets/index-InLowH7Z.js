import{d as i,r,j as e,N as s}from"./index-CQ_xjxjH.js";import{H as o}from"./index-C8nEF-Cf.js";const a={Page:i.main`
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
    <title>Nesting & heading outline — demo</title>
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
      code { background: #f5f5f5; padding:0 6px; border-radius:6px; }
      .ex { border:1px dashed #aaa; padding:8px; border-radius:10px; margin-top:6px; }
      .two { display:grid; grid-template-columns: 1fr 1fr; gap:14px; }
      @media (max-width: 900px) { .two { grid-template-columns: 1fr; } }
    </style>
  </head>
  <body>
    <main class="grid" id="top">
      <header>
        <h1>Nesting & heading outline</h1>
        <p class="muted">Sectioning creates structure; headings label that structure.</p>
      </header>

      <!-- ✅ Good outline -->
      <section class="card good">
        <h2>Good outline <small>(sectioning with clear headings)</small></h2>
        <div class="ex">
          <header>
            <h1>Site Title</h1>
            <nav aria-label="Primary">
              <ul><li><a href="#">Home</a></li><li><a href="#">Blog</a></li></ul>
            </nav>
          </header>

          <main id="content">
            <article>
              <header>
                <h2>Post title</h2>
                <p class="muted">By Sam • 2025-11-02</p>
              </header>
              <section>
                <h3>Introduction</h3>
                <p>Why this topic matters…</p>
              </section>
              <section>
                <h3>Results</h3>
                <p>What we found…</p>
              </section>
              <footer>
                <p>Tags: HTML, semantics</p>
              </footer>
            </article>
          </main>

          <footer>
            <p>© 2025 Demo</p>
          </footer>
        </div>
      </section>

      <!-- ❌ Bad outline -->
      <section class="card bad">
        <h2>Bad outline <small>(skips levels + meaningless wrappers)</small></h2>
        <div class="ex two">
          <div>
            <h4>Jumped heading level</h4>
            <p>Starting at <code>&lt;h4&gt;</code> without a higher-level context confuses the structure.</p>
            <div class="ex">
              <!-- bad -->
              <div class="post">
                <h4>My Blog</h4> <!-- ❌ should be the page/brand title (h1) or section title (h2) -->
                <div class="wrap">
                  <h4>Intro</h4>  <!-- ❌ jumping / repeating same level for nested sections -->
                </div>
              </div>
            </div>
          </div>
          <div>
            <h4>Headings used for style</h4>
            <p>Using <code>h2</code> “because it’s big” without section meaning.</p>
            <div class="ex">
              <!-- bad -->
              <section>
                <div class="big"> <!-- ❌ style-only wrapper -->
                  <h2 class="big-text">Large text but no section meaning</h2>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <section class="card">
        <h2>Fixes</h2>
        <ol>
          <li>Use one logical <code>&lt;h1&gt;</code> per page (usually site or page title).</li>
          <li>Within each section/article, start its heading at the next level (commonly <code>h2</code>), then descend (<code>h3</code>, <code>h4</code>…).</li>
          <li>Don’t pick heading levels for size—pick for structure; style with CSS.</li>
        </ol>
      </section>

      <footer class="muted">
        Tip: If a block deserves a heading, it probably deserves a sectioning element (<code>section</code> / <code>article</code>).
      </footer>
    </main>
  </body>
</html>`;function l(){return r.useEffect(()=>{document.title="Landmarks · Nesting & heading outline"},[]),e.jsxs(a.Page,{children:[e.jsxs("header",{className:"pageHeader",id:"top",children:[e.jsx("h1",{children:"Nesting & heading outline"}),e.jsx("p",{className:"lede",children:"Sectioning elements create the skeleton of the page. Headings label each part so humans and assistive tech can navigate the structure. Choose heading levels for meaning, not size."})]}),e.jsxs("nav",{className:"toc","aria-label":"On this page",children:[e.jsx("a",{href:"#model",children:"Mental model"}),e.jsx("a",{href:"#rules",children:"Outline rules"}),e.jsx("a",{href:"#nesting",children:"Valid nesting"}),e.jsx("a",{href:"#pitfalls",children:"Pitfalls"}),e.jsx("a",{href:"#faq",children:"FAQ"}),e.jsx("a",{href:"#play",children:"Playground"})]}),e.jsxs("section",{id:"model",children:[e.jsx("h2",{children:"Mental model"}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Sectioning"})," elements (",e.jsx("code",{children:"main"}),", ",e.jsx("code",{children:"section"}),", ",e.jsx("code",{children:"article"}),", ",e.jsx("code",{children:"aside"}),", ",e.jsx("code",{children:"nav"}),") define the document parts."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Headings"})," (",e.jsx("code",{children:"h1"}),"…",e.jsx("code",{children:"h6"}),") name those parts and reflect depth."]}),e.jsxs("li",{children:["Pick levels top-down: page ",e.jsx("code",{children:"h1"})," → major sections ",e.jsx("code",{children:"h2"})," → subsections ",e.jsx("code",{children:"h3"}),", and so on."]})]})})]}),e.jsxs("section",{id:"rules",children:[e.jsx("h2",{children:"Outline rules"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Headings"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["Use one logical ",e.jsx("code",{children:"h1"})," per document."]}),e.jsxs("li",{children:["Don’t skip levels when descending: ",e.jsx("code",{children:"h2"})," → ",e.jsx("code",{children:"h3"})," → ",e.jsx("code",{children:"h4"}),"."]}),e.jsx("li",{children:"It’s fine to go back up when you exit a subsection."})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Sectioning"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("code",{children:"header"}),"/",e.jsx("code",{children:"footer"})," are contextual; they don’t change outline depth."]}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"article"})," for self-contained units (blog post, card that stands alone)."]}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"section"})," for thematic groups inside a page or article."]})]})]})]})]}),e.jsxs("section",{id:"nesting",children:[e.jsx("h2",{children:"Valid nesting"}),e.jsx(a.Code,{role:"region","aria-label":"Valid nesting example",children:e.jsx("pre",{children:String.raw`<header>
  <h1>Site title</h1>
  <nav aria-label="Primary">…</nav>
</header>

<main id="content">
  <section>
    <h2>Overview</h2>
    <p>Summary…</p>
  </section>

  <article>
    <h2>Case study</h2>
    <section>
      <h3>Background</h3>
      <p>Context…</p>
    </section>
    <section>
      <h3>Outcome</h3>
      <p>Results…</p>
    </section>
  </article>
</main>

<footer>© 2025</footer>`})})]}),e.jsxs("section",{id:"pitfalls",children:[e.jsx("h2",{children:"Pitfalls"}),e.jsxs("ul",{className:"badges",children:[e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Picking ",e.jsx("code",{children:"h4"})," because it “looks right.”"]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Deep nesting of anonymous ",e.jsx("code",{children:"div"})," wrappers."]}),e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Good"})," Use CSS to style; keep semantic outline clean."]})]})]}),e.jsxs("section",{id:"faq",children:[e.jsx("h2",{children:"FAQ"}),e.jsxs("details",{children:[e.jsx("summary",{children:"Can I use multiple h1 elements?"}),e.jsxs("div",{className:"ans",children:["Technically allowed inside separate sectioning contexts, but a single document-level ",e.jsx("code",{children:"h1"})," is the most practical and widely supported pattern."]})]}),e.jsxs("details",{children:[e.jsx("summary",{children:"Do header/footer change the outline?"}),e.jsx("div",{className:"ans",children:"No. They provide context within their nearest section/article/body but don’t alter heading levels."})]})]}),e.jsxs("section",{id:"play",children:[e.jsx("h2",{children:"Try it live"}),e.jsx("p",{className:"lede",children:"Fix heading levels, convert style-only wrappers to semantic sections, and ensure each section has a clear heading. Autosaves to this lesson."}),e.jsx(o,{storageKey:"core-html:landmarks:nesting-outline:v1",initialHtml:d,height:700})]}),e.jsxs("nav",{className:"nextPrev","aria-label":"Lesson navigation",children:[e.jsx(s,{to:"/landmarks/section-vs-div",className:"prev","aria-label":"Go to Section vs Div",children:"← When to use <section> vs <div>"}),e.jsx(s,{to:"/headings/h1-h6-hierarchy",className:"next","aria-label":"Go to H1–H6 hierarchy",children:"Next: H1–H6 hierarchy →"})]}),e.jsx("div",{className:"backTop",children:e.jsx("a",{href:"#top",children:"Back to top ↑"})})]})}export{l as default};
