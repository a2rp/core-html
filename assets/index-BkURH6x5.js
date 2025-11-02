import{d as a,r as t,j as e,N as i}from"./index-D3QNcmKe.js";import{H as s}from"./index-CAjihRuM.js";const r={Page:a.main`
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

        .note {
            font-size: 14px;
            color: var(--text-muted);
            border-left: 3px solid var(--primary);
            padding: 8px 12px;
            background: color-mix(in oklab, var(--primary), transparent 92%);
            border-radius: 8px;
            margin-top: 8px;
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
    <title>Avoid text inside images — live practice</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui,-apple-system,Segoe UI,Roboto,sans-serif; }
      main { display: grid; gap: 16px; max-width: 1100px; margin: 0 auto; }

      .grid2 { display: grid; gap: 14px; grid-template-columns: repeat(2, minmax(0,1fr)); }
      @media (max-width: 900px) { .grid2 { grid-template-columns: 1fr; } }

      .card { border: 1px solid #ccc; border-radius: 12px; padding: 12px; background: #fff; }
      @media (prefers-color-scheme: dark) { .card { background: #111; border-color: #333; } }

      .muted { color: #6b7280; }
      .k { display:inline-block; border:1px solid #bbb; border-radius:999px; padding:2px 8px; font-size:12px; }
      code { background: #f5f5f5; padding:0 6px; border-radius:6px; }
      @media (prefers-color-scheme: dark) { code { background: #1d1d1d; } }

      /* Demo blocks */
      .bannerBad {
        border: 1px dashed #999; border-radius: 10px; padding: 8px;
        display: grid; place-items: center; background: #f7f7f7;
      }
      .bannerBad img { max-width: 100%; height: auto; display: block; }

      .bannerGood {
        border: 1px dashed #999; border-radius: 10px; padding: 0; overflow: clip;
        position: relative; min-height: 140px; display: grid; place-items: center; text-align: center;
        /* decorative background (SVG gradient) */
        background-image: radial-gradient(1200px 400px at 50% 0%, #cde6ff 0, transparent 60%),
                         linear-gradient(135deg, #0070f3 0%, #00b7ff 100%);
        color: #fff;
      }
      .bannerGood h2 { margin: 18px 8px 0; line-height: 1.2; }
      .bannerGood p  { margin: 6px 12px 14px; opacity: .95; }
      .bannerGood a.button {
        display:inline-block; margin: 4px 0 16px; padding: 8px 14px; border-radius: 999px;
        background: rgba(255,255,255,.15); color: #fff; text-decoration: none; border: 1px solid rgba(255,255,255,.3);
      }
      .bannerGood a.button:focus { outline: 2px solid #fff; outline-offset: 2px; }

      /* Figure pattern */
      figure { margin: 0; }
      figcaption { font-size: 13px; color: #6b7280; margin-top: 6px; }

      /* Utility */
      .good { background: color-mix(in oklab, #16a34a, transparent 92%); border-color:#8ed09b; }
      .bad  { background: color-mix(in oklab, #dc2626, transparent 92%); border-color:#f2a6a6; }
      .ex { border:1px dashed #aaa; padding:8px; border-radius:10px; margin-top:6px; }
    </style>
  </head>
  <body>
    <main>
      <header>
        <h1>Avoid text inside images</h1>
        <p class="muted">Prefer real, selectable text. Keep images decorative or illustrative, then label them correctly.</p>
      </header>

      <div class="grid2">
        <section class="card bad">
          <h2>Bad: text baked into image</h2>
          <p>Screen readers see only the <code>alt</code>. Zooming blurs the text, theming doesn’t apply, and translation/search suffer.</p>
          <div class="ex bannerBad" role="img" aria-label="This box simulates a raster banner containing the words 'Mega Sale - 50% OFF Today'">
            <!-- Simulation: an <img> that already contains text pixels -->
            <img
              src="data:image/svg+xml;utf8,${encodeURIComponent(`
                <svg xmlns='http://www.w3.org/2000/svg' width='640' height='180'>
                  <defs>
                    <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
                      <stop offset='0%' stop-color='#222'/>
                      <stop offset='100%' stop-color='#555'/>
                    </linearGradient>
                  </defs>
                  <rect width='100%' height='100%' fill='url(#g)'/>
                  <text x='50%' y='50%' fill='#fff' font-family='Segoe UI, Roboto, sans-serif' font-size='42' text-anchor='middle' dominant-baseline='middle'>
                    Mega Sale — 50% OFF Today
                  </text>
                </svg>
              `)}"
              alt="Mega Sale — 50% OFF Today"
            />
          </div>
          <ul>
            <li>Text is part of pixels → not selectable, not themeable.</li>
            <li>Zoom causes blur; languages can’t change easily.</li>
            <li>Search engines and assistive tech lose structure.</li>
          </ul>
        </section>

        <section class="card good">
          <h2>Good: real text + decorative background</h2>
          <div class="bannerGood" aria-labelledby="sale-title" aria-describedby="sale-desc">
            <div>
              <h2 id="sale-title">Mega Sale</h2>
              <p id="sale-desc">Get 50% off today. Limited time. Terms apply.</p>
              <a class="button" href="#">Shop deals</a>
            </div>
          </div>
          <ul>
            <li>Headings and paragraphs are accessible and selectable.</li>
            <li>High-DPI crispness, theme-friendly, translatable.</li>
            <li>Smaller payload vs large raster banners.</li>
          </ul>
        </section>
      </div>

      <section class="card">
        <h2>When image text can be acceptable</h2>
        <ul>
          <li><span class="k">Logos</span> — company marks often contain stylized text. Provide <code>alt</code> with the organization name.</li>
          <li><span class="k">Screenshots</span> — use a caption and describe what matters; don’t rely only on pixels.</li>
          <li><span class="k">Diagrams</span> — prefer real SVG with <code>&lt;text&gt;</code> elements that remain selectable.</li>
        </ul>
      </section>

      <section class="card">
        <h2>Figure pattern for informative images</h2>
        <figure>
          <img
            src="data:image/svg+xml;utf8,${encodeURIComponent(`
              <svg xmlns='http://www.w3.org/2000/svg' width='640' height='220'>
                <rect width='100%' height='100%' fill='#eef2ff'/>
                <g font-family='Segoe UI, Roboto, sans-serif' fill='#1f2937'>
                  <text x='24' y='48' font-size='22'>Bar chart: Quarterly growth</text>
                  <rect x='40' y='140' width='80' height='60' fill='#60a5fa'/>
                  <rect x='140' y='110' width='80' height='90' fill='#93c5fd'/>
                  <rect x='240' y='80'  width='80' height='120' fill='#60a5fa'/>
                  <rect x='340' y='100' width='80' height='100' fill='#93c5fd'/>
                </g>
              </svg>
            `)}"
            alt="Bar chart showing quarterly growth; Q3 is tallest"
            width="640" height="220"
          />
          <figcaption>Use <code>&lt;figure&gt;</code> + <code>&lt;figcaption&gt;</code> to explain what the image conveys.</figcaption>
        </figure>
      </section>

      <section class="card">
        <h2>Practice: convert text-in-image to real text</h2>
        <p>Replace the raster banner below with semantic HTML: a heading, a paragraph, and a button. Keep a decorative background only.</p>
        <div class="ex bannerBad">
          <img
            src="data:image/svg+xml;utf8,${encodeURIComponent(`
              <svg xmlns='http://www.w3.org/2000/svg' width='640' height='180'>
                <defs>
                  <linearGradient id='g2' x1='0' y1='0' x2='1' y2='1'>
                    <stop offset='0%' stop-color='#7c3aed'/>
                    <stop offset='100%' stop-color='#22d3ee'/>
                  </linearGradient>
                </defs>
                <rect width='100%' height='100%' fill='url(#g2)'/>
                <text x='50%' y='50%' fill='#fff' font-family='Segoe UI, Roboto, sans-serif' font-size='40' text-anchor='middle' dominant-baseline='middle'>
                  New Arrivals — Shop Now
                </text>
              </svg>
            `)}"
            alt="New Arrivals — Shop Now"
          />
        </div>
        <!-- Your turn: add a semantic banner below this comment -->
      </section>

      <footer class="muted">Rule of thumb: If users need to read it, it should be real text, not pixels.</footer>
    </main>
  </body>
</html>`;function l(){return t.useEffect(()=>{document.title="Pitfalls · Avoid text inside images"},[]),e.jsxs(r.Page,{children:[e.jsxs("header",{className:"pageHeader",id:"top",children:[e.jsx("h1",{children:"Avoid text inside images"}),e.jsx("p",{className:"lede",children:"Put readable content in HTML, not pixels. Use images for illustration and keep the message as real, selectable text with proper semantics."})]}),e.jsxs("nav",{className:"toc","aria-label":"On this page",children:[e.jsx("a",{href:"#why",children:"Why it’s a problem"}),e.jsx("a",{href:"#patterns",children:"Safer patterns"}),e.jsx("a",{href:"#figure",children:"Figure + caption"}),e.jsx("a",{href:"#tips",children:"Authoring tips"}),e.jsx("a",{href:"#play",children:"Playground"})]}),e.jsxs("section",{id:"why",children:[e.jsx("h2",{children:"Why baking text into images hurts"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Accessibility & UX"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["Screen readers can’t parse pixels; ",e.jsx("code",{children:"alt"})," is not equal to structured text."]}),e.jsx("li",{children:"Zooming blurs raster text; users can’t select/copy it."}),e.jsx("li",{children:"High-contrast modes and themes won’t restyle pixels."})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"SEO, i18n & perf"}),e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"Search engines don’t reliably read text from images."}),e.jsx("li",{children:"Text-in-image can’t be translated without re-artwork."}),e.jsx("li",{children:"Heavy banners slow paint; HTML+CSS is lighter."})]})]})]})]}),e.jsxs("section",{id:"patterns",children:[e.jsx("h2",{children:"Safer patterns"}),e.jsxs("ul",{className:"badges",children:[e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Good"})," Real text over decorative backgrounds."]}),e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Good"})," SVG with actual ",e.jsx("code",{children:"<text>"})," nodes when text must be part of the graphic."]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Shipping announcements as raster posters containing all the copy."]})]}),e.jsxs("p",{className:"note",children:["Logos can keep stylized text, but set ",e.jsx("code",{children:"alt"})," to the organization name. Avoid putting slogans/CTA copy inside the logo image; place that as HTML nearby."]})]}),e.jsxs("section",{id:"figure",children:[e.jsx("h2",{children:"Figure + caption"}),e.jsx(r.Code,{role:"region","aria-label":"Figure pattern",children:e.jsx("pre",{children:String.raw`<figure>
  <img src="…" alt="What the visual shows">
  <figcaption>Concise explanation that complements, not repeats, the alt.</figcaption>
</figure>`})})]}),e.jsxs("section",{id:"tips",children:[e.jsx("h2",{children:"Authoring tips"}),e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"If users need to read it, render it as HTML text, not pixels."}),e.jsxs("li",{children:["Keep images responsive and provide intrinsic ",e.jsx("code",{children:"width"}),"/",e.jsx("code",{children:"height"})," to avoid layout shift."]}),e.jsx("li",{children:"Prefer SVG for diagrams with labels; the text remains crisp and accessible."}),e.jsx("li",{children:"Always review with keyboard and a screen reader once."})]})]}),e.jsxs("section",{id:"play",children:[e.jsx("h2",{children:"Try it live"}),e.jsx("p",{className:"lede",children:"Convert the “text-in-image” banners into semantic HTML with a heading, a paragraph, and a proper button. Keep backgrounds decorative only."}),e.jsx(s,{storageKey:"core-html:pitfalls:text-inside-images:v1",initialHtml:o,height:680})]}),e.jsxs("nav",{className:"nextPrev","aria-label":"Lesson navigation",children:[e.jsx(i,{to:"/pitfalls/no-div-for-headings",className:"prev","aria-label":"Go to No div for headings/lists",children:"← No <div> for headings/lists"}),e.jsx(i,{to:"/patterns/button-vs-link-decision",className:"next","aria-label":"Go to Button vs Link decision",children:"Next: Button vs Link decision →"})]}),e.jsx("div",{className:"backTop",children:e.jsx("a",{href:"#top",children:"Back to top ↑"})})]})}export{l as default};
