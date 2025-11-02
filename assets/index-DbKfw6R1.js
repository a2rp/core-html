import{d as a,r as o,j as e,N as r}from"./index-CQ_xjxjH.js";import{H as s}from"./index-C8nEF-Cf.js";const i={Page:a.main`
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
    `},t=String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title><figure> + <figcaption> — demo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui,-apple-system,Segoe UI,Roboto,sans-serif; }
      .grid { display: grid; gap: 14px; }
      .card { border: 1px solid #ccc; border-radius: 12px; padding: 12px; background: #fff; }
      @media (prefers-color-scheme: dark) {
        .card { background: color-mix(in oklab, white, transparent 94%); border-color: #444; }
        code { background: #1f2328; color: #e6edf3; }
      }
      .muted { color: #6b7280; }
      code { background: #f5f5f5; padding: 0 6px; border-radius: 6px; }

      /* Figure presets */
      figure { margin: 0; border: 1px solid #ddd; border-radius: 10px; overflow: clip; background: #fafafa; }
      figure img { display: block; width: 100%; height: auto; }
      figcaption { padding: 8px 10px; font-size: 13px; color: #374151; background: #f0f2f5; border-top: 1px solid #e5e7eb; }
      .capTop figcaption { border-top: none; border-bottom: 1px solid #e5e7eb; }
      .capTop figcaption { order: -1; } /* when used with display:flex on figure */
      .overlayDemo { position: relative; }
      .overlayDemo img { display: block; }
      .overlayDemo figcaption {
        position: absolute; inset: auto 8px 8px 8px;
        background: color-mix(in oklab, black, transparent 65%);
        color: white; border: 1px solid color-mix(in oklab, white, transparent 75%);
        border-radius: 8px; padding: 6px 10px;
      }
      .twoCols { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 12px; }
      @media (max-width: 900px) { .twoCols { grid-template-columns: 1fr; } }

      .bad { background: #fff3f3; border: 1px solid #f3b7b7; }
      .good { background: #f4fff6; border: 1px solid #9ed3a9; }

      .k { display:inline-block; border:1px solid #bbb; border-radius:999px; padding:2px 8px; font-size:12px; }
      .ex { border:1px dashed #aaa; padding:8px; border-radius:10px; margin-top:6px; }

      /* Flex helper for top caption variant */
      figure.capTop { display: flex; flex-direction: column; }
      .sr-only {
        position: absolute !important; width: 1px; height: 1px; padding: 0; margin: -1px;
        overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0;
      }
    </style>
  </head>
  <body>
    <main class="grid">
      <header>
        <h1>&lt;figure&gt; + &lt;figcaption&gt;</h1>
        <p class="muted">
          Use <code>&lt;figure&gt;</code> for self-contained content (image, diagram, code listing, chart) that
          benefits from a caption. The caption goes in <code>&lt;figcaption&gt;</code>.
        </p>
      </header>

      <section class="card good">
        <h2>Basic figure with caption</h2>
        <div class="ex">
          <figure>
            <img src="https://picsum.photos/800/400?grayscale" alt="Mountain range under a cloudy sky" width="800" height="400">
            <figcaption>Fig. 1 — Cloud cover over a mountain range during sunset.</figcaption>
          </figure>
        </div>
      </section>

      <section class="card">
        <h2>Caption at the top</h2>
        <p>Place <code>&lt;figcaption&gt;</code> before/after the content. Visually placing it on top is just CSS.</p>
        <div class="ex">
          <figure class="capTop">
            <figcaption>Fig. 2 — Caption before the image (rendered on top).</figcaption>
            <img src="https://picsum.photos/seed/capTop/800/400" alt="City skyline reflected in a river at dusk" width="800" height="400">
          </figure>
        </div>
      </section>

      <section class="card">
        <h2>Overlay caption</h2>
        <p>For photo credits or short labels, you can overlay the caption.</p>
        <div class="ex">
          <figure class="overlayDemo">
            <img src="https://picsum.photos/seed/overlay/800/400" alt="Forest path with tall trees on both sides" width="800" height="400">
            <figcaption>Photo: Example Credits — CC0</figcaption>
          </figure>
        </div>
      </section>

      <section class="card">
        <h2>Multiple images in one figure</h2>
        <p>Use one figure when the images collectively share a single caption.</p>
        <div class="ex">
          <figure>
            <div class="twoCols">
              <img src="https://picsum.photos/seed/a/600/400" alt="Close-up of a leaf with visible veins" width="600" height="400">
              <img src="https://picsum.photos/seed/b/600/400" alt="Water ripple forming concentric circles" width="600" height="400">
            </div>
            <figcaption>Fig. 3 — Texture & motion: leaf structure and water ripple compared.</figcaption>
          </figure>
        </div>
      </section>

      <section class="card">
        <h2>Alt vs caption (different jobs)</h2>
        <ul>
          <li><b>Alt</b> = concise replacement if the image fails or is not loaded. Describes function/purpose.</li>
          <li><b>Caption</b> = visible prose giving context, credit, or commentary.</li>
        </ul>
        <div class="ex">
          <figure aria-labelledby="cap-roles">
            <img src="https://picsum.photos/seed/roles/800/400" alt="Bar chart of monthly sales from Jan to Jun trending upward" width="800" height="400">
            <figcaption id="cap-roles">Fig. 4 — Sales trend: +45% over six months (data: sample CSV).</figcaption>
          </figure>
        </div>
      </section>

      <section class="card bad">
        <h2>Common mistakes</h2>
        <ul>
          <li>Wrapping every image in a figure even when no caption exists.</li>
          <li>Using figcaption without figure or placing it in the middle of other children (must be first or last).</li>
          <li>Writing long, novel-length alt text (keep alt succinct; elaborate in caption or nearby text).</li>
        </ul>
        <div class="ex">
          <!-- ❌ Bad: figcaption not first/last -->
          <figure>
            <img src="https://picsum.photos/seed/oops/600/300" alt="…" width="600" height="300">
            <p>Some random paragraph in between (invalid position).</p>
            <figcaption>Fig. X — This caption is in the wrong place.</figcaption>
          </figure>
        </div>
      </section>

      <section class="card">
        <h2>Non-image content works too</h2>
        <p>Figures can wrap code listings, tables, diagrams — anything self-contained with a caption.</p>
        <div class="ex">
          <figure>
            <pre><code>const mean = arr =&gt; arr.reduce((a,b) =&gt; a + b, 0) / arr.length;</code></pre>
            <figcaption>Fig. 5 — One-liner to compute arithmetic mean in JavaScript.</figcaption>
          </figure>
        </div>
      </section>

      <footer class="muted">
        Tips:
        <span class="k">figure ≠ required for all images</span>
        <span class="k">figcaption: first or last only</span>
        <span class="k">One caption per figure</span>
      </footer>
    </main>
  </body>
</html>`;function d(){return o.useEffect(()=>{document.title="Media · <figure> + <figcaption>"},[]),e.jsxs(i.Page,{children:[e.jsxs("header",{className:"pageHeader",id:"top",children:[e.jsxs("h1",{children:[e.jsx("code",{children:"<figure>"})," + ",e.jsx("code",{children:"<figcaption>"})]}),e.jsxs("p",{className:"lede",children:["Use a figure when media (or another self-contained block) needs a visible caption. Leave it as a plain"," ",e.jsx("code",{children:"<img>"})," when a caption is unnecessary."]})]}),e.jsxs("nav",{className:"toc","aria-label":"On this page",children:[e.jsx("a",{href:"#model",children:"Mental model"}),e.jsx("a",{href:"#rules",children:"Rules"}),e.jsx("a",{href:"#alt-vs-cap",children:"Alt vs caption"}),e.jsx("a",{href:"#multi",children:"Multiple images"}),e.jsx("a",{href:"#css",children:"CSS patterns"}),e.jsx("a",{href:"#pitfalls",children:"Pitfalls"}),e.jsx("a",{href:"#faq",children:"FAQ"}),e.jsx("a",{href:"#play",children:"Playground"})]}),e.jsxs("section",{id:"model",children:[e.jsx("h2",{children:"Mental model"}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Figure"})," is for self-contained content that could be referenced from the main flow."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Figcaption"})," is the caption for that content—context, credit, summary."]}),e.jsx("li",{children:"Don’t wrap every image in a figure. If there’s no caption, a plain image is usually correct."})]})})]}),e.jsxs("section",{id:"rules",children:[e.jsx("h2",{children:"Rules"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Structure"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["Caption must be the ",e.jsx("em",{children:"first or last"})," child of the figure."]}),e.jsxs("li",{children:["Only one ",e.jsx("code",{children:"<figcaption>"})," per figure."]}),e.jsx("li",{children:"Figures can be referenced in text: “see Fig. 2”."})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Accessibility"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["Write concise, purposeful ",e.jsx("code",{children:"alt"})," text for images."]}),e.jsxs("li",{children:["Link caption and content via proximity; for explicit relation, use ",e.jsx("code",{children:"aria-labelledby"})," on the figure that points to the caption’s id."]}),e.jsxs("li",{children:["Decorative images should have empty alt (",e.jsx("code",{children:'alt=""'}),") and usually no figure."]})]})]})]})]}),e.jsxs("section",{id:"alt-vs-cap",children:[e.jsx("h2",{children:"Alt vs caption"}),e.jsx(i.Code,{role:"region","aria-label":"Alt vs caption example",children:e.jsx("pre",{children:String.raw`<figure aria-labelledby="chart-cap">
  <img src="chart.png" alt="Line chart of quarterly revenue rising from Q1 to Q4">
  <figcaption id="chart-cap">Fig. A — Revenue increased 28% year-over-year.</figcaption>
</figure>`})}),e.jsx("p",{className:"note",children:"Alt replaces the image if it fails to render or for screen readers; the caption is extra context for everyone."})]}),e.jsxs("section",{id:"multi",children:[e.jsx("h2",{children:"Multiple images, one caption"}),e.jsx(i.Code,{children:e.jsx("pre",{children:String.raw`<figure>
  <img src="left.jpg" alt="Early prototype of the device on a desk">
  <img src="right.jpg" alt="Shipping unit in its retail packaging">
  <figcaption>Prototype vs production unit comparison.</figcaption>
</figure>`})})]}),e.jsxs("section",{id:"css",children:[e.jsx("h2",{children:"CSS patterns"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Top caption"}),e.jsx(i.Code,{children:e.jsx("pre",{children:String.raw`figure.capTop { display: flex; flex-direction: column; }
figure.capTop figcaption { order: -1; }`})})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Overlay label"}),e.jsx(i.Code,{children:e.jsx("pre",{children:String.raw`.overlayDemo { position: relative; }
.overlayDemo figcaption { position: absolute; inset: auto 8px 8px 8px; }`})})]})]})]}),e.jsxs("section",{id:"pitfalls",children:[e.jsx("h2",{children:"Pitfalls"}),e.jsxs("ul",{className:"badges",children:[e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Figcaption in the middle of children."]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Figure with no need for a caption."]}),e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Good"})," Clear alt + concise caption when needed."]})]})]}),e.jsxs("section",{id:"faq",children:[e.jsx("h2",{children:"FAQ"}),e.jsxs("details",{children:[e.jsx("summary",{children:"Should product thumbnails use figure?"}),e.jsxs("div",{className:"ans",children:["Usually not. Thumbnails rarely need captions; use plain ",e.jsx("code",{children:"<img>"})," with good alt."]})]}),e.jsxs("details",{children:[e.jsx("summary",{children:"Can I place a table or code block inside a figure?"}),e.jsx("div",{className:"ans",children:"Yes. Figure is for any self-contained content that benefits from a caption."})]}),e.jsxs("details",{children:[e.jsx("summary",{children:"What about very long descriptions?"}),e.jsxs("div",{className:"ans",children:["Keep ",e.jsx("code",{children:"alt"})," succinct. Put long prose near the image or link to a detailed description."]})]})]}),e.jsxs("section",{id:"play",children:[e.jsx("h2",{children:"Try it live"}),e.jsx("p",{className:"lede",children:"Add captions where they help, keep alt concise, and experiment with top/overlay styles. Autosaves to this lesson."}),e.jsx(s,{storageKey:"core-html:media:figure-figcaption:v1",initialHtml:t,height:720})]}),e.jsxs("nav",{className:"nextPrev","aria-label":"Lesson navigation",children:[e.jsx(r,{to:"/media/decorative-vs-informative",className:"prev","aria-label":"Go to Decorative vs informative images",children:"← Decorative vs informative"}),e.jsx(r,{to:"/media/audio-video-simple",className:"next","aria-label":"Go to Simple audio/video",children:"Next: Simple audio/video →"})]}),e.jsx("div",{className:"backTop",children:e.jsx("a",{href:"#top",children:"Back to top ↑"})})]})}export{d as default};
