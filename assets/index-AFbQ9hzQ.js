import{d as i,r as s,j as e,N as a}from"./index-CQ_xjxjH.js";import{H as o}from"./index-C8nEF-Cf.js";const r={Page:i.main`
        display: grid;
        gap: 16px;
        padding: 16px;
        max-width: 1100px;
        margin: 0 auto;

        .pageHeader {
            display: grid;
            gap: 8px;
        }
        .muted {
            color: var(--text-muted);
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
    <title>decorative vs informative — demo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui,-apple-system,Segoe UI,Roboto,sans-serif; }
      .grid { display: grid; gap: 14px; }
      .card { border: 1px solid #ccc; border-radius: 12px; padding: 12px; }
      .muted { color: #6b7280; }
      .good { background: color-mix(in oklab, #16a34a, transparent 92%); border-color:#8ed09b; }
      .bad  { background: color-mix(in oklab, #dc2626, transparent 92%); border-color:#f2a6a6; }
      code { background: #f5f5f5; padding:0 6px; border-radius:6px; }
      .ex { border:1px dashed #aaa; padding:8px; border-radius:10px; margin-top:6px; }
      .row { display:grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap:10px; }
      @media (max-width: 800px){ .row { grid-template-columns: 1fr; } }
      figure { margin: 0; }
      figcaption { font-size: 13px; color:#6b7280; margin-top:6px; }
    </style>
  </head>
  <body>
    <main class="grid">
      <header>
        <h1>Decorative vs informative <small class="muted">(when alt can be empty)</small></h1>
        <p class="muted">If the image adds no new information, use <code>alt=""</code>. If it communicates meaning, write a concise, truthful <code>alt</code> description.</p>
      </header>

      <section class="card good">
        <h2>Decorative → <code>alt=""</code></h2>
        <p>Pure ornament, repeated logos, divider flourishes, aesthetic backgrounds. Screen readers should skip these.</p>
        <div class="ex row">
          <div>
            <p class="muted">Correct</p>
            <img src="banner-swoosh.png" alt="" />
          </div>
          <div>
            <p class="muted">Also fine (CSS)</p>
            <div style="height:70px;border:1px solid #ccc;background:url(banner-swoosh.png) center/cover"></div>
          </div>
        </div>
      </section>

      <section class="card">
        <h2>Informative → meaningful <code>alt</code></h2>
        <p>Product photos, charts, photos that convey context, icons used as labels.</p>
        <div class="ex row">
          <div>
            <p class="muted">Product image</p>
            <img src="shoe-red.png" alt="Red running shoe, side view" />
          </div>
          <div>
            <p class="muted">Icon as label</p>
            <button>
              <img src="icon-download.svg" alt="Download" />
              Download
            </button>
          </div>
        </div>
      </section>

      <section class="card">
        <h2>Figures & captions</h2>
        <p>Use <code>&lt;figure&gt;</code> + <code>&lt;figcaption&gt;</code> when the caption is important. The <code>alt</code> should still be useful.</p>
        <div class="ex">
          <figure>
            <img src="graph-q3.png" alt="Line chart of Q3 revenue rising from 2.1 to 3.4 crore" />
            <figcaption>Q3 revenue trend (Apr–Jun).</figcaption>
          </figure>
        </div>
      </section>

      <section class="card">
        <h2>Icons and SVG</h2>
        <div class="ex row">
          <div>
            <p class="muted">Decorative icon</p>
            <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
            <span>Dashboard</span>
          </div>
          <div>
            <p class="muted">Icon that <em>is</em> the label</p>
            <a href="/home" aria-label="Home">
              <svg role="img" aria-label="Home" width="22" height="22" viewBox="0 0 24 24"><path d="M3 12L12 3l9 9"/></svg>
            </a>
          </div>
        </div>
      </section>

      <section class="card bad">
        <h2>Pitfalls</h2>
        <ul>
          <li><strong>Wrong:</strong> <code>alt="image of"</code>, <code>alt="photo"</code> — adds no value.</li>
          <li><strong>Wrong:</strong> Leaving <code>alt</code> off entirely on <code>&lt;img&gt;</code>.</li>
          <li><strong>Wrong:</strong> Stuffing keywords unrelated to the image.</li>
          <li><strong>Careful:</strong> Text in images. Prefer real text; if unavoidable, ensure the <code>alt</code> conveys the same text.</li>
        </ul>
      </section>

      <footer class="muted">
        Quick check: If you removed the image, would users miss information? If yes → write useful <code>alt</code>. If no → consider <code>alt=""</code> or CSS background.
      </footer>
    </main>
  </body>
</html>`;function l(){return s.useEffect(()=>{document.title='Media · Decorative vs informative (alt="")'},[]),e.jsxs(r.Page,{children:[e.jsxs("header",{className:"pageHeader",id:"top",children:[e.jsxs("h1",{children:["Decorative vs informative images ",e.jsxs("small",{className:"muted",children:["(when ",e.jsx("code",{children:'alt=""'})," is correct)"]})]}),e.jsxs("p",{className:"lede",children:["Images either convey meaning or they don’t. If an image adds information not already in nearby text, write a concise",e.jsx("code",{children:" alt"}),". If it’s purely decorative, use an empty ",e.jsx("code",{children:'alt=""'})," so assistive tech skips it."]})]}),e.jsxs("nav",{className:"toc","aria-label":"On this page",children:[e.jsx("a",{href:"#model",children:"Mental model"}),e.jsx("a",{href:"#rules",children:"Rules for alt"}),e.jsx("a",{href:"#figure",children:"Figures & captions"}),e.jsx("a",{href:"#icons",children:"Icons & SVG"}),e.jsx("a",{href:"#css",children:"Background images"}),e.jsx("a",{href:"#pitfalls",children:"Pitfalls"}),e.jsx("a",{href:"#play",children:"Playground"})]}),e.jsxs("section",{id:"model",children:[e.jsx("h2",{children:"Mental model"}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Informative"}),": the image communicates content the text does not. Write a useful ",e.jsx("code",{children:"alt"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Decorative"}),": the image is ornamental or redundant. Use ",e.jsx("code",{children:'alt=""'})," so it’s ignored by screen readers."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Functional"}),": the image is a control (e.g., icon-only button). Provide the action label via ",e.jsx("code",{children:"alt"})," or ",e.jsx("code",{children:"aria-label"}),"."]})]})})]}),e.jsxs("section",{id:"rules",children:[e.jsxs("h2",{children:["Rules for ",e.jsx("code",{children:"alt"})]}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsxs("h3",{children:["When to use ",e.jsx("code",{children:'alt=""'})]}),e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"Pure decoration: borders, separators, flourishes."}),e.jsx("li",{children:"Textual duplicate: a logo next to the site name already in text."}),e.jsx("li",{children:"Redundant preview: a thumbnail with the same caption immediately adjacent."})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"When to describe"}),e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"Photos that set context: “Crowded market street at dusk.”"}),e.jsxs("li",{children:["UI icons used as labels: ",e.jsx("code",{children:'alt="Search"'}),"."]}),e.jsx("li",{children:"Charts: summarize the key pattern or conclusion."})]})]})]}),e.jsx(r.Code,{role:"region","aria-label":"Examples of alt text",children:e.jsx("pre",{children:String.raw`<!-- Decorative banner flourish -->
<img src="/img/flare.png" alt="" />

<!-- Informative product photo -->
<img src="/img/mug-blue.jpg" alt="Blue ceramic mug, 350 ml" />

<!-- Icon acting as label -->
<button type="button">
  <img src="/icons/download.svg" alt="Download" />
</button>`})})]}),e.jsxs("section",{id:"figure",children:[e.jsx("h2",{children:"Figures & captions"}),e.jsxs("p",{className:"note",children:["Use ",e.jsx("code",{children:"<figure>"})," when the image and its caption form a single unit. The ",e.jsx("code",{children:"alt"})," should still be helpful on its own."]}),e.jsx(r.Code,{children:e.jsx("pre",{children:String.raw`<figure>
  <img src="/charts/revenue-q3.png" alt="Q3 revenue increased 28 percent over Q2" />
  <figcaption>Quarterly revenue (Apr–Jun).</figcaption>
</figure>`})})]}),e.jsxs("section",{id:"icons",children:[e.jsx("h2",{children:"Icons & SVG"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Decorative icon"}),e.jsx("p",{children:"If the icon is purely visual, hide it from AT."}),e.jsx(r.Code,{children:e.jsx("pre",{children:String.raw`<svg aria-hidden="true" focusable="false" width="20" height="20" ...>…</svg>`})})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Icon-only control"}),e.jsxs("p",{children:["Provide the label via ",e.jsx("code",{children:"aria-label"})," or linked text."]}),e.jsx(r.Code,{children:e.jsx("pre",{children:String.raw`<button aria-label="Close">
  <svg role="img" aria-label="Close" width="20" height="20">…</svg>
</button>`})})]})]})]}),e.jsxs("section",{id:"css",children:[e.jsx("h2",{children:"Background images (CSS)"}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["Purely decorative backgrounds belong in CSS; no ",e.jsx("code",{children:"alt"})," needed."]}),e.jsxs("li",{children:["If the image carries meaning, prefer an actual ",e.jsx("code",{children:"<img>"})," with real ",e.jsx("code",{children:"alt"}),"."]})]})}),e.jsx(r.Code,{children:e.jsx("pre",{children:String.raw`.hero {
  background: url("/img/texture.png") center/cover no-repeat;
}`})})]}),e.jsxs("section",{id:"pitfalls",children:[e.jsx("h2",{children:"Pitfalls"}),e.jsxs("ul",{className:"badges",children:[e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Omitting ",e.jsx("code",{children:"alt"})," entirely on ",e.jsx("code",{children:"<img>"}),"."]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," “Image of…”, “Photo of…” boilerplate."]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Using images to render important text without reflecting it in ",e.jsx("code",{children:"alt"}),"."]}),e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Good"})," Keep ",e.jsx("code",{children:"alt"})," brief and factual; avoid SEO stuffing."]})]})]}),e.jsxs("section",{id:"play",children:[e.jsx("h2",{children:"Try it live"}),e.jsxs("p",{className:"lede",children:["Decide which images are decorative and which are informative. Add ",e.jsx("code",{children:'alt=""'})," where appropriate, and improve descriptive alt text for meaningful images. Autosaves to this lesson."]}),e.jsx(o,{storageKey:"core-html:media:decorative-vs-informative:v1",initialHtml:d,height:640})]}),e.jsxs("nav",{className:"nextPrev","aria-label":"Lesson navigation",children:[e.jsx(a,{to:"/media/img-basics",className:"prev","aria-label":"Go to Image basics",children:"← Image basics"}),e.jsx(a,{to:"/media/figure-figcaption",className:"next","aria-label":"Go to Figure + Figcaption",children:"Next: Figure + Figcaption →"})]}),e.jsx("div",{className:"backTop",children:e.jsx("a",{href:"#top",children:"Back to top ↑"})})]})}export{l as default};
