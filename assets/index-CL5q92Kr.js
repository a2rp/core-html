import{d as a,r,j as e,N as i}from"./index-CQ_xjxjH.js";import{H as t}from"./index-C8nEF-Cf.js";const s={Page:a.main`
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
    `},o=String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Link text quality — demo</title>
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
      .k { display:inline-block; border:1px solid #bbb; border-radius:999px; padding:2px 8px; font-size:12px; }
      .ex { border:1px dashed #aaa; padding:8px; border-radius:10px; margin-top:6px; }
      .row.two { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:10px; }
      @media (max-width: 860px) { .row.two { grid-template-columns:1fr; } }
      .visually-hidden {
        position:absolute; width:1px; height:1px; padding:0; margin:-1px; overflow:hidden;
        clip:rect(0 0 0 0); white-space:nowrap; border:0;
      }
      a.icon {
        display:inline-flex; align-items:center; gap:6px;
        text-underline-offset: 3px;
      }
      .pill { display:inline-block; padding:2px 8px; font-size:12px; border-radius:999px; border:1px solid #bbb; }
      .list { padding-left: 18px; line-height: 1.8; }
      .small { font-size: 12px; color: #6b7280; }
    </style>
  </head>
  <body>
    <main class="grid">
      <header>
        <h1>Make your link text do the work</h1>
        <p class="muted">Describe the destination or action. Links should stand alone when read out of context.</p>
      </header>

      <section class="card bad">
        <h2>Weak patterns <small class="k">avoid</small></h2>
        <div class="ex list">
          <p>Our pricing is now live — <a href="#">click here</a>.</p>
          <p>Documentation: <a href="https://example.com/docs">https://example.com/docs</a></p>
          <p>To learn more, <a href="#">read more</a>.</p>
        </div>
        <p class="small">Screen reader users often skim links; vague text forces them to guess.</p>
      </section>

      <section class="card good">
        <h2>Stronger patterns <small class="k">do this</small></h2>
        <div class="ex list">
          <p>Explore <a href="#">pricing plans</a>.</p>
          <p>Read the <a href="https://example.com/docs">API documentation</a>.</p>
          <p>Compare <a href="#">Starter vs Pro features</a>.</p>
        </div>
        <p class="small">Front-load meaning: put the unique, descriptive words early.</p>
      </section>

      <section class="card">
        <h2>Keep the action inside the link</h2>
        <div class="row two">
          <div class="ex bad">
            <p>To download the report, <a href="#">click here</a>.</p>
          </div>
          <div class="ex good">
            <p><a href="#">Download the Q4 report</a>.</p>
          </div>
        </div>
      </section>

      <section class="card">
        <h2>Adjacent links & repeated text</h2>
        <div class="row two">
          <div class="ex bad">
            <p><a href="#">Details</a> | <a href="#">Details</a> | <a href="#">Details</a></p>
            <p class="small">Three links with the same text → indistinguishable in a links list.</p>
          </div>
          <div class="ex good">
            <p>
              <a href="#">Product A details</a> |
              <a href="#">Product B details</a> |
              <a href="#">Product C details</a>
            </p>
          </div>
        </div>
      </section>

      <section class="card">
        <h2>Icons & hidden helpers</h2>
        <div class="ex">
          <p>
            <a class="icon" href="https://example.com" target="_blank" rel="noopener">
              <span aria-hidden="true">🌐</span>
              Visit project site
              <span class="visually-hidden">(opens in a new tab)</span>
            </a>
          </p>
          <p class="small">Use an inline note for screen readers instead of stuffing “(new tab)” into visible text everywhere.</p>
        </div>
      </section>

      <section class="card">
        <h2>Don’t rely on surrounding text</h2>
        <div class="row two">
          <div class="ex bad">
            <p>For keyboard shortcuts, see <a href="#">this page</a>.</p>
          </div>
          <div class="ex good">
            <p>See <a href="#">keyboard shortcuts</a>.</p>
          </div>
        </div>
      </section>

      <section class="card">
        <h2>Quick checklist</h2>
        <ul class="list">
          <li>Would the link make sense if read alone? If not, reword.</li>
          <li>Make the most meaningful words part of the link itself.</li>
          <li>Avoid bare URLs; use human-readable text.</li>
          <li>Keep links concise (roughly 1–8 words).</li>
          <li>For <code>_blank</code>, add <code>rel="noopener"</code> and a hidden “opens in new tab” note.</li>
        </ul>
      </section>

      <section class="card">
        <h2>FAQ</h2>
        <details>
          <summary>Is “Read more” ever OK?</summary>
          <div class="ex"><p>Only if you include context in the link, e.g., <a href="#">Read more about performance budgets</a>.</p></div>
        </details>
        <details>
          <summary>Should I add icons to every external link?</summary>
          <div class="ex"><p>No. Use them where it adds clarity; avoid visual noise. Always keep text readable without the icon.</p></div>
        </details>
      </section>

      <footer class="muted">
        Rule of thumb: link text should name the destination or describe the action—without requiring extra context.
      </footer>
    </main>
  </body>
</html>`;function n(){return r.useEffect(()=>{document.title="Links · Link text quality"},[]),e.jsxs(s.Page,{children:[e.jsxs("header",{className:"pageHeader",id:"top",children:[e.jsx("h1",{children:"Link text quality"}),e.jsx("p",{className:"lede",children:"Write link text that stands on its own. Avoid “click here” and bare URLs. Front-load meaning and keep the action inside the link."})]}),e.jsxs("nav",{className:"toc","aria-label":"On this page",children:[e.jsx("a",{href:"#principles",children:"Principles"}),e.jsx("a",{href:"#patterns",children:"Patterns"}),e.jsx("a",{href:"#pitfalls",children:"Pitfalls"}),e.jsx("a",{href:"#play",children:"Playground"})]}),e.jsxs("section",{id:"principles",children:[e.jsx("h2",{children:"Principles"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Descriptive"}),e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"Name the destination or action in the link."}),e.jsx("li",{children:"Front-load keywords; keep scannable."}),e.jsx("li",{children:"Prefer human text over raw URLs."})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Accessible"}),e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"Links should make sense out of context."}),e.jsx("li",{children:"Don’t repeat identical text for different targets."}),e.jsx("li",{children:"Use hidden helpers for “opens in new tab”."})]})]})]})]}),e.jsxs("section",{id:"patterns",children:[e.jsx("h2",{children:"Patterns"}),e.jsx("div",{className:"card",children:e.jsx(s.Code,{"aria-label":"Good vs poor link text examples",children:e.jsx("pre",{children:String.raw`<!-- Poor -->
<p>For details, <a href="#">click here</a>.</p>

<!-- Better -->
<p>See <a href="#">deployment checklist</a>.</p>

<!-- External with safe new tab -->
<p><a href="https://web.dev/" target="_blank" rel="noopener">
  Performance guidelines <span class="visually-hidden">(opens in a new tab)</span>
</a></p>`})})})]}),e.jsxs("section",{id:"pitfalls",children:[e.jsx("h2",{children:"Pitfalls"}),e.jsxs("ul",{className:"badges",children:[e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," “Click here”, “More”, “This”, “Link”."]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Bare URLs as visible link text."]}),e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Good"})," Keep unique, succinct, action-oriented text."]})]})]}),e.jsxs("section",{id:"play",children:[e.jsx("h2",{children:"Try it live"}),e.jsx("p",{className:"lede",children:"Rewrite weak links into strong, descriptive ones. Add hidden notes for new-tab links. Autosaves to this lesson."}),e.jsx(t,{storageKey:"core-html:links:link-text-quality:v1",initialHtml:o,height:680})]}),e.jsxs("nav",{className:"nextPrev","aria-label":"Lesson navigation",children:[e.jsx(i,{to:"/links/target-rel-safety",className:"prev","aria-label":"Go to target & rel safety",children:"← target & rel safety"}),e.jsx(i,{to:"/lists/ul-ol-li",className:"next","aria-label":"Go to UL, OL, LI semantics",children:"Next: UL, OL, LI semantics →"})]}),e.jsx("div",{className:"backTop",children:e.jsx("a",{href:"#top",children:"Back to top ↑"})})]})}export{n as default};
