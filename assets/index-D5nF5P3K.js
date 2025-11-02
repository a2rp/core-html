import{d as r,r as o,j as e,N as a}from"./index-CQ_xjxjH.js";import{H as s}from"./index-C8nEF-Cf.js";const i={Page:r.main`
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
    `,Code:r.div`
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
    <title>fetchpriority — concept & mini demos</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif; }
      .grid { display: grid; gap: 16px; max-width: 1100px; margin: 0 auto; }
      .card { border: 1px solid #ccc; border-radius: 12px; padding: 12px; background: color-mix(in oklab, Canvas, CanvasText 2%); }
      .muted { color: #6b7280; }
      .row { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 12px; }
      @media (max-width: 900px) { .row { grid-template-columns: 1fr; } }

      figure { margin: 0; border: 1px dashed #aaa; border-radius: 10px; padding: 8px; display: grid; gap: 8px; background: color-mix(in oklab, #9ca3af, transparent 92%); }
      figcaption { font-size: 12px; color: #475569; }
      img { display: block; width: 100%; height: auto; background: #e5e7eb; }

      .hero { aspect-ratio: 3 / 1; object-fit: cover; }
      .thumb { aspect-ratio: 16 / 9; object-fit: cover; }

      .k { display:inline-block; border:1px solid #bbb; border-radius:999px; padding:2px 8px; font-size:12px; }
      .tip { font-size: 13px; color: #374151; border-left: 3px solid #3b82f6; padding: 8px 12px; background: color-mix(in oklab, #3b82f6, transparent 92%); border-radius: 8px; }
      .warn { font-size: 13px; color: #7f1d1d; border-left: 3px solid #ef4444; padding: 8px 12px; background: color-mix(in oklab, #ef4444, transparent 92%); border-radius: 8px; }

      /* Fake big page to demo lazy vs priority */
      .spacer { height: 120vh; display:grid; place-items:center; color:#6b7280; border:1px dashed #d1d5db; border-radius:12px; }
    </style>
  </head>
  <body>
    <main class="grid">
      <header>
        <h1>fetchpriority <small class="muted">(concept)</small></h1>
        <p class="muted">
          A hint you give the browser to fetch some resources sooner or later. Values are
          <code>high</code>, <code>low</code>, and <code>auto</code>.
        </p>
      </header>

      <section class="card">
        <h2>1) Above-the-fold hero → <span class="k">fetchpriority="high"</span></h2>
        <p>
          Your main banner image is visible immediately and sets the page tone. Help the browser prioritize it.
          Keep proper <code>width</code>/<code>height</code> to avoid layout shift, and prefer <code>decoding="async"</code>.
        </p>

        <figure>
          <!-- In production, replace placeholder with your real hero URL -->
          <img
            src="https://picsum.photos/1200/400"
            alt="Scenic banner placeholder"
            width="1200" height="400"
            decoding="async"
            fetchpriority="high"
            class="hero"
          />
          <figcaption>
            <code>&lt;img fetchpriority="high"&gt;</code> for the primary, on-screen hero. Set explicit dimensions.
          </figcaption>
        </figure>

        <p class="tip">
          This is a <em>hint</em>, not a command. The browser may still balance bandwidth with CSS/JS/font needs.
        </p>
      </section>

      <section class="card">
        <h2>2) Below-the-fold gallery → <span class="k">loading="lazy"</span> + <span class="k">fetchpriority="low"</span></h2>
        <p>
          Thumbnails not visible on load can be low priority. <code>loading="lazy"</code> delays the fetch until near viewport;
          <code>fetchpriority="low"</code> says “even when eligible, please don’t jump the line.”
        </p>

        <div class="spacer">Scroll to load gallery 👇</div>

        <div class="row">
          <!-- Repeat thumbs; the key is the attribute combo -->
          <figure>
            <img
              src="https://picsum.photos/600/338?1"
              alt="Sample thumbnail 1"
              width="600" height="338"
              loading="lazy"
              decoding="async"
              fetchpriority="low"
              class="thumb"
            />
            <figcaption>Lazy + low priority thumbnail.</figcaption>
          </figure>

          <figure>
            <img
              src="https://picsum.photos/600/338?2"
              alt="Sample thumbnail 2"
              width="600" height="338"
              loading="lazy"
              decoding="async"
              fetchpriority="low"
              class="thumb"
            />
            <figcaption>Same combo on a second image.</figcaption>
          </figure>
        </div>

        <p class="tip">
          <strong>Order matters less than intent:</strong> give the browser enough context (dimensions, lazy intent, priority hint).
        </p>
      </section>

      <section class="card">
        <h2>3) Preload + fetchpriority on critical image</h2>
        <p>
          If you already use <code>&lt;link rel="preload"&gt;</code> for a critical image (like a hero in CSS backgrounds or a LCP image),
          pair it with <code>fetchpriority</code> to make intent explicit.
        </p>

<pre class="code ex"><code>&lt;!-- In &lt;head&gt; --&gt;
&lt;link
  rel="preload"
  as="image"
  href="/images/hero.webp"
  imagesrcset="/images/hero-800.webp 800w, /images/hero-1200.webp 1200w"
  imagesizes="100vw"
  fetchpriority="high"
/&gt;</code></pre>

        <p class="warn">
          Don’t preload images that aren’t truly critical: extra preloads can crowd out CSS/JS needed for first render.
        </p>
      </section>

      <section class="card">
        <h2>Behavior cheat-sheet</h2>
        <ul>
          <li><strong>Default</strong>: <code>auto</code>. The browser decides based on visibility heuristics.</li>
          <li><strong>high</strong>: ask for earlier network scheduling. Good for LCP/hero.</li>
          <li><strong>low</strong>: de-prioritize non-critical work. Good for carousels below the fold.</li>
          <li><strong>loading="lazy"</strong>: defers fetching until near viewport; combines well with <code>low</code>.</li>
          <li><strong>width/height</strong>: always set to avoid layout shift (CLS).</li>
          <li><strong>decoding="async"</strong>: decode off the main path when possible.</li>
        </ul>
      </section>

      <section class="card">
        <h2>Measure, don’t guess</h2>
        <p>Use your browser’s Performance panel / Network waterfall to verify that:</p>
        <ol>
          <li>Hero/LCP image starts early (look for a shorter queue time).</li>
          <li>Lazy thumbnails don’t contend with above-the-fold resources.</li>
          <li>CLS is near zero thanks to proper dimensions.</li>
        </ol>
      </section>

      <footer class="muted">
        Progressive enhancement mindset: unsupported browsers will ignore the attribute without breaking layout.
      </footer>
    </main>
  </body>
</html>`;function n(){return o.useEffect(()=>{document.title="Images & Performance · fetchpriority (concept)"},[]),e.jsxs(i.Page,{children:[e.jsxs("header",{className:"pageHeader",id:"top",children:[e.jsxs("h1",{children:[e.jsx("code",{children:"fetchpriority"})," (concept)"]}),e.jsxs("p",{className:"lede",children:["A small attribute that nudges the browser’s fetch scheduler. Use"," ",e.jsx("code",{children:"high"})," for your true hero/LCP image and ",e.jsx("code",{children:"low"})," for clearly non-critical items. It’s a hint, not a hammer—measure before and after."]})]}),e.jsxs("nav",{className:"toc","aria-label":"On this page",children:[e.jsx("a",{href:"#what",children:"What & where"}),e.jsx("a",{href:"#when",children:"When to use"}),e.jsx("a",{href:"#interactions",children:"Interactions"}),e.jsx("a",{href:"#demos",children:"Demos"}),e.jsx("a",{href:"#pitfalls",children:"Pitfalls"}),e.jsx("a",{href:"#play",children:"Playground"})]}),e.jsxs("section",{id:"what",children:[e.jsx("h2",{children:"What is it, and where does it apply?"}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("code",{children:"fetchpriority"})," is an HTML attribute that suggests network priority for a resource."]}),e.jsxs("li",{children:["Works on ",e.jsx("code",{children:"<img>"})," and ",e.jsx("code",{children:'<link rel="preload">'})," for images in modern Chromium-based browsers. Others ignore it gracefully."]}),e.jsxs("li",{children:["Values: ",e.jsx("code",{children:"auto"})," (default), ",e.jsx("code",{children:"high"}),", ",e.jsx("code",{children:"low"}),"."]})]})})]}),e.jsxs("section",{id:"when",children:[e.jsx("h2",{children:"When to use it"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsxs("h3",{children:["Use ",e.jsx("code",{children:"high"})," when…"]}),e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"The image is your LCP (Largest Contentful Paint) candidate."}),e.jsx("li",{children:"It’s visible immediately on first paint (above the fold)."}),e.jsx("li",{children:"It’s essential to perceived completeness of the page shell."})]})]}),e.jsxs("div",{className:"card",children:[e.jsxs("h3",{children:["Use ",e.jsx("code",{children:"low"})," when…"]}),e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"The image is clearly non-critical or below the fold."}),e.jsxs("li",{children:["You already use ",e.jsx("code",{children:'loading="lazy"'})," and want to avoid queue jumping."]}),e.jsx("li",{children:"It’s a carousel/gallery not needed for first interaction."})]})]})]})]}),e.jsxs("section",{id:"interactions",children:[e.jsx("h2",{children:"How it interacts with other attributes"}),e.jsxs("ul",{className:"badges",children:[e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Good"})," ",e.jsx("code",{children:"high"})," + explicit ",e.jsx("code",{children:"width/height"})," on a hero image."]}),e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Good"})," ",e.jsx("code",{children:"low"})," + ",e.jsx("code",{children:'loading="lazy"'})," on below-the-fold thumbs."]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Caution"})," Preloading too many images can starve CSS/JS."]})]}),e.jsx(i.Code,{role:"region","aria-label":"Hero example",children:e.jsx("pre",{children:String.raw`<img
  src="/images/hero.webp"
  alt="Page hero"
  width="1200" height="440"
  decoding="async"
  fetchpriority="high"
/>`})})]}),e.jsxs("section",{id:"demos",children:[e.jsx("h2",{children:"Quick demos (inline snippets)"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Lazy + low"}),e.jsx(i.Code,{children:e.jsx("pre",{children:String.raw`<img
  src="/images/thumb-1.webp"
  alt="Gallery thumbnail"
  width="600" height="338"
  loading="lazy"
  decoding="async"
  fetchpriority="low"
/>`})})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Preload + high"}),e.jsx(i.Code,{children:e.jsx("pre",{children:String.raw`<link
  rel="preload"
  as="image"
  href="/images/hero.webp"
  imagesrcset="/images/hero-800.webp 800w, /images/hero-1200.webp 1200w"
  imagesizes="100vw"
  fetchpriority="high"
/>`})})]})]})]}),e.jsxs("section",{id:"pitfalls",children:[e.jsx("h2",{children:"Pitfalls"}),e.jsxs("ul",{className:"badges",children:[e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Setting ",e.jsx("code",{children:"high"})," on lots of images."]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Using it to fix layout-shift (that’s ",e.jsx("code",{children:"width/height"}),")."]}),e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Good"})," Treat it as a hint you validate with real measurements."]})]})]}),e.jsxs("section",{id:"play",children:[e.jsx("h2",{children:"Try it live"}),e.jsxs("p",{className:"lede",children:["Toggle ",e.jsx("code",{children:"fetchpriority"})," values, switch ",e.jsx("code",{children:"loading"})," between"," ",e.jsx("code",{children:"eager"})," and ",e.jsx("code",{children:"lazy"}),", and observe behavior in the network waterfall."]}),e.jsx(s,{storageKey:"core-html:images-perf:fetchpriority-note:v1",initialHtml:t,height:720})]}),e.jsxs("nav",{className:"nextPrev","aria-label":"Lesson navigation",children:[e.jsx(a,{to:"/images-perf/intrinsic-dimensions",className:"prev","aria-label":"Go to Intrinsic dimensions",children:"← Intrinsic dimensions"}),e.jsx(a,{to:"/a11y/language-landmarks",className:"next","aria-label":"Go to Language & landmarks",children:"Next: Language & landmarks →"})]}),e.jsx("div",{className:"backTop",children:e.jsx("a",{href:"#top",children:"Back to top ↑"})})]})}export{n as default};
