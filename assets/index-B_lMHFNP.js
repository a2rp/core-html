import{d as a,r,j as e,N as t}from"./index-CQ_xjxjH.js";import{H as o}from"./index-C8nEF-Cf.js";const i={Page:a.main`
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
        .badges .good {
            display: inline-block;
            font-size: 12px;
            padding: 2px 8px;
            border-radius: 999px;
            border: 1px solid var(--border);
            margin-right: 6px;
            background: #152417;
            color: #b6f3c1;
            border-color: #264a2b;
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
    <title>figure + figcaption — pattern</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui,-apple-system,Segoe UI,Roboto,sans-serif; }
      .grid { display: grid; gap: 16px; }
      figure { margin: 0; border: 1px solid #ccc; border-radius: 12px; padding: 10px; background: #fff; }
      figcaption { font-size: 13px; color: #555; margin-top: 8px; }
      .muted { color: #6b7280; }
      .row { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; }
      @media (max-width: 900px) { .row { grid-template-columns: 1fr; } }
      .credit { font-size: 12px; color: #666; }
      .oklab { background: color-mix(in oklab, #22c55e, transparent 92%); border: 1px solid #9ee3b2; padding: 8px; border-radius: 10px; }
      .warn { background: color-mix(in oklab, #f59e0b, transparent 90%); border: 1px solid #f6c66a; padding: 8px; border-radius: 10px; }
      code { background:#f5f5f5; padding:0 6px; border-radius:6px; }
    </style>
  </head>
  <body>
    <main class="grid">
      <header>
        <h1><code>&lt;figure&gt;</code> with <code>&lt;figcaption&gt;</code></h1>
        <p class="muted">
          Pair media and its caption to help meaning and navigation. Keep <code>alt</code> for the image's purpose,
          and the caption for extra context/credit/source.
        </p>
      </header>

      <section class="row">
        <div>
          <h2>Basic usage</h2>
          <figure>
            <!-- Always include width/height to prevent layout shift -->
            <img
              src="https://picsum.photos/id/1015/600/400"
              alt="A river cutting through a forested valley at sunrise"
              width="600" height="400"
              loading="lazy" decoding="async"
            >
            <figcaption>
              Morning light over the valley. Photo by <a href="https://picsum.photos" target="_blank" rel="noopener">Picsum</a>.
            </figcaption>
          </figure>
        </div>

        <div>
          <h2>Decorative image</h2>
          <div class="warn">
            If the image is purely decorative, set <code>alt=""</code> and you may omit figure/figcaption entirely.
          </div>
          <figure>
            <img
              src="https://picsum.photos/id/1025/600/400"
              alt="" width="600" height="400" loading="lazy" decoding="async"
            >
            <figcaption>Decorative background texture (no essential info).</figcaption>
          </figure>
        </div>
      </section>

      <section class="row">
        <div>
          <h2>Picture sources (art direction)</h2>
          <figure>
            <picture>
              <source srcset="https://picsum.photos/id/1035/900/600" media="(min-width: 900px)">
              <source srcset="https://picsum.photos/id/1035/600/400" media="(min-width: 600px)">
              <img
                src="https://picsum.photos/id/1035/480/320"
                alt="Rocky coastline with waves and clouds"
                width="480" height="320" loading="lazy" decoding="async"
              >
            </picture>
            <figcaption>
              Alternate crops for different viewports. Art direction via <code>&lt;picture&gt;</code>.
            </figcaption>
          </figure>
        </div>

        <div>
          <h2>Linking the figure</h2>
          <figure>
            <a href="https://picsum.photos/id/1016/1200/800" target="_blank" rel="noopener">
              <img
                src="https://picsum.photos/id/1016/600/400"
                alt="Snowy mountain range under a clear sky"
                width="600" height="400" loading="lazy" decoding="async"
              >
            </a>
            <figcaption>
              Click to open full resolution. Include source/credit in the caption when required.
              <span class="credit">© Example License</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section>
        <h2>Multiple media in one figure</h2>
        <div class="oklab">
          A <code>figure</code> can bundle more than one thing (e.g., image + legend/table, or image + code).
          The caption describes the set.
        </div>
        <figure>
          <img
            src="https://picsum.photos/id/1029/560/360"
            alt="Bar chart illustrating quarterly sales with Q3 peak"
            width="560" height="360" loading="lazy" decoding="async"
          >
          <pre aria-label="Data shown in the chart"><code>Q1: 120
Q2: 150
Q3: 210
Q4: 160</code></pre>
          <figcaption>
            Quarterly sales visualization with raw values. Provide the same insight in text for accessibility.
          </figcaption>
        </figure>
      </section>

      <section>
        <h2>Common mistakes</h2>
        <ul>
          <li>Putting the caption as text below an image without <code>&lt;figure&gt;</code>/<code>&lt;figcaption&gt;</code> semantics.</li>
          <li>Using a caption to replace missing <code>alt</code> (they serve different purposes).</li>
          <li>Omitting width/height, causing layout shift when images load.</li>
        </ul>
      </section>

      <footer class="muted">
        Tip: Describe the image meaning via <code>alt</code>, and everything extra (context, credit, link) in <code>figcaption</code>.
      </footer>
    </main>
  </body>
</html>`;function c(){return r.useEffect(()=>{document.title="Patterns · Figure with caption"},[]),e.jsxs(i.Page,{children:[e.jsxs("header",{className:"pageHeader",id:"top",children:[e.jsx("h1",{children:"Figure with caption"}),e.jsxs("p",{className:"lede",children:["Use ",e.jsx("code",{children:"<figure>"})," to group media with its ",e.jsx("code",{children:"<figcaption>"}),". Keep the image’s"," ",e.jsx("code",{children:"alt"})," focused on meaning, and move credits/context/links to the caption. Always set"," ",e.jsx("code",{children:"width"}),"/",e.jsx("code",{children:"height"})," to avoid layout shift."]})]}),e.jsxs("nav",{className:"toc","aria-label":"On this page",children:[e.jsx("a",{href:"#why",children:"Why this pattern"}),e.jsx("a",{href:"#alt-vs-caption",children:"Alt vs caption"}),e.jsx("a",{href:"#intrinsic",children:"Prevent layout shift"}),e.jsx("a",{href:"#decorative",children:"Decorative vs informative"}),e.jsx("a",{href:"#multi",children:"Multiple media in one figure"}),e.jsx("a",{href:"#play",children:"Playground"})]}),e.jsxs("section",{id:"why",children:[e.jsx("h2",{children:"Why this pattern"}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"Semantically binds an image (or chart/video) with its explanation or credit."}),e.jsx("li",{children:"Improves navigation for assistive tech via a single grouped region."}),e.jsx("li",{children:"Makes styling/placement of image + caption predictable."})]})})]}),e.jsxs("section",{id:"alt-vs-caption",children:[e.jsx("h2",{children:"Alt text vs caption"}),e.jsx(i.Code,{role:"region","aria-label":"Alt vs caption example",children:e.jsx("pre",{children:String.raw`<figure>
  <img src="map.png" alt="India map highlighting Ganga basin">
  <figcaption>Study area: Ganga basin extent with major tributaries.</figcaption>
</figure>`})}),e.jsxs("p",{className:"note",children:[e.jsx("strong",{children:"Alt"})," describes the image’s purpose for non-visual users; ",e.jsx("strong",{children:"caption"})," adds context, source, credit, or links. Don’t duplicate the alt inside the caption."]})]}),e.jsxs("section",{id:"intrinsic",children:[e.jsx("h2",{children:"Prevent layout shift (CLS)"}),e.jsx(i.Code,{role:"region","aria-label":"Intrinsic size example",children:e.jsx("pre",{children:String.raw`<img src="photo.jpg" alt="…" width="800" height="533" loading="lazy" decoding="async">`})}),e.jsxs("p",{className:"note",children:["Provide ",e.jsx("code",{children:"width"}),"/",e.jsx("code",{children:"height"})," so browsers can reserve space. The image still scales with CSS (it’s just the intrinsic ratio)."]})]}),e.jsxs("section",{id:"decorative",children:[e.jsx("h2",{children:"Decorative vs informative"}),e.jsxs("ul",{className:"badges",children:[e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Decorative"})," ",e.jsx("code",{children:'alt=""'})," and usually no caption."]}),e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Informative"})," Meaningful ",e.jsx("code",{children:"alt"})," + caption for extra context/credit."]})]})]}),e.jsxs("section",{id:"multi",children:[e.jsx("h2",{children:"Multiple media in one figure"}),e.jsxs("div",{className:"card",children:["Bundle image + legend, or image + code/table in a single ",e.jsx("code",{children:"figure"}),". The caption explains the set."]})]}),e.jsxs("section",{id:"play",children:[e.jsx("h2",{children:"Try it live"}),e.jsxs("p",{className:"lede",children:["Add width/height, tighten alt text, move extra info into figcaption, try linking the figure, and test an art-direction example with ",e.jsx("code",{children:"<picture>"}),"."]}),e.jsx(o,{storageKey:"core-html:patterns:figure-with-caption:v1",initialHtml:n,height:640})]}),e.jsxs("nav",{className:"nextPrev","aria-label":"Lesson navigation",children:[e.jsx(t,{to:"/patterns/data-table-with-scope",className:"prev","aria-label":"Go to Data table with scope",children:"← Data table with scope"}),e.jsx(t,{to:"/patterns/basic-page-skeleton",className:"next","aria-label":"Go to Page skeleton + skip link",children:"Next: Page skeleton + skip link →"})]}),e.jsx("div",{className:"backTop",children:e.jsx("a",{href:"#top",children:"Back to top ↑"})})]})}export{c as default};
