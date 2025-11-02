import{d as a,r,j as e,N as o}from"./index-D3QNcmKe.js";import{H as s}from"./index-CAjihRuM.js";const i={Page:a.main`
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
    `},d=String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Images — loading="lazy", decoding="async"</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui, -apple-system, Segoe UI, Roboto, sans-serif; }
      .grid { display: grid; gap: 16px; }
      .card { border: 1px solid #ccc; border-radius: 12px; padding: 12px; }
      .muted { color: #6b7280; }
      .row { display: grid; grid-template-columns: 160px 1fr; gap: 12px; align-items: start; }
      .bad { background: color-mix(in oklab, #dc2626, transparent 92%); border-color:#f2a6a6; }
      .good { background: color-mix(in oklab, #16a34a, transparent 92%); border-color:#8ed09b; }
      figure { margin: 0; }
      figcaption { font-size: 12px; color: #6b7280; margin-top: 6px; }
      .spacer { height: 800px; background: repeating-linear-gradient( 45deg, #eee 0 10px, #f7f7f7 10px 20px ); border-radius: 8px; display: grid; place-items: center; color:#777; }
      code { background: #f5f5f5; padding:0 6px; border-radius:6px; }
      .ex { border:1px dashed #aaa; padding:8px; border-radius:10px; margin-top:6px; }
      .row img { border-radius: 10px; display:block; }
    </style>
  </head>
  <body>
    <main class="grid">
      <header>
        <h1>Images: <code>loading="lazy"</code> + <code>decoding="async"</code></h1>
        <p class="muted">
          Lazy-load images that are off-screen to save bandwidth and time-to-interactive. Let decoding happen off the critical path.
        </p>
      </header>

      <section class="card">
        <h2>Two independent toggles</h2>
        <ul>
          <li><code>loading="lazy"</code> ⇒ network deferral for off-screen images; fetched near viewport.</li>
          <li><code>decoding="async"</code> ⇒ decode off the main rendering step; paints later without blocking.</li>
        </ul>
        <p class="muted">They can be used together or separately.</p>
      </section>

      <section class="card good">
        <h2>Good: gallery below the fold</h2>
        <div class="row">
          <figure>
            <!-- Provide intrinsic width/height to reserve space and avoid CLS -->
            <img
              src="https://picsum.photos/id/1015/640/360"
              alt="River valley"
              width="640" height="360"
              loading="lazy"
              decoding="async"
            />
            <figcaption>Off-screen image with lazy + async.</figcaption>
          </figure>
          <div>
            <p>A card farther down the page shouldn't load immediately. The browser fetches it as it approaches the viewport, and decoding doesn't block layout.</p>
            <p class="muted">Tip: Always include <code>width</code>/<code>height</code> to prevent layout shift.</p>
          </div>
        </div>
      </section>

      <section class="card bad">
        <h2>Bad: LCP (hero) made lazy</h2>
        <div class="row">
          <figure>
            <!-- Simulate a hero image (should NOT be lazy) -->
            <img
              src="https://picsum.photos/id/1003/960/540"
              alt="Hero mountain"
              width="960" height="540"
              loading="lazy"  <!-- ⚠️ avoid on the hero/LCP -->
              decoding="async"
            />
            <figcaption>Don't lazy-load your primary hero image.</figcaption>
          </figure>
          <div>
            <p>Lazy on the hero delays Largest Contentful Paint (LCP). Prefer no <code>loading</code> (eager default) and consider <code>fetchpriority="high"</code>.</p>
          </div>
        </div>
      </section>

      <section class="card">
        <h2>Patterns</h2>
        <div class="ex">
          <ul>
            <li>Blog list / product grid thumbnails → <code>loading="lazy" decoding="async"</code></li>
            <li>Comments with avatars far below → <code>loading="lazy"</code> (avatars can be small; async decode optional)</li>
            <li>Above-the-fold icon sprites → usually no lazy; they should be ready immediately.</li>
          </ul>
        </div>
      </section>

      <section class="card">
        <h2>fetchpriority note</h2>
        <p>
          You can hint importance with <code>fetchpriority</code>:
        </p>
        <pre><code>&lt;img src="hero.jpg" width="1200" height="630" alt="Hero" fetchpriority="high"&gt;</code></pre>
        <p class="muted">
          Combine wisely: hero = eager + maybe <code>fetchpriority="high"</code>. Off-screen = <code>loading="lazy"</code> (don't set high).
        </p>
      </section>

      <section class="card">
        <h2>Try scrolling</h2>
        <p class="muted">Images below will load only when near viewport. Open DevTools → Network to see requests.</p>
        <div class="spacer">Scroll down…</div>

        <div class="row">
          <figure>
            <img
              src="https://picsum.photos/id/1025/640/360"
              alt="Puppy"
              width="640" height="360"
              loading="lazy"
              decoding="async"
            />
            <figcaption>Lazy + async (below fold).</figcaption>
          </figure>
          <div>
            <p>Decoding async avoids blocking rendering. The pixel data is applied when ready.</p>
          </div>
        </div>

        <div class="spacer">Keep scrolling…</div>

        <div class="row">
          <figure>
            <img
              src="https://picsum.photos/id/1043/640/360"
              alt="Forest"
              width="640" height="360"
              loading="lazy"
              decoding="async"
            />
            <figcaption>Another off-screen example.</figcaption>
          </figure>
          <div>
            <p>All images have width/height to reserve space, so no content jumps.</p>
          </div>
        </div>
      </section>

      <section class="card">
        <h2>Pitfalls</h2>
        <ul>
          <li>Lazy on LCP/hero → slower paint. Avoid.</li>
          <li>No intrinsic dimensions → CLS. Always add <code>width</code>/<code>height</code> (or CSS aspect-ratio).</li>
          <li>Lazy on very small above-the-fold icons → unnecessary overhead.</li>
          <li>Overusing <code>fetchpriority="high"</code> cancels the benefit of lazy ordering.</li>
        </ul>
      </section>

      <section class="card">
        <h2>FAQ</h2>
        <details>
          <summary>Do I need JS for lazy-loading?</summary>
          <div>Native <code>loading="lazy"</code> covers most cases. Custom IntersectionObserver is for special logic or non-img elements.</div>
        </details>
        <details>
          <summary>Does decoding async change image quality?</summary>
          <div>No. It only defers decode so rendering isn't blocked; quality is unaffected.</div>
        </details>
        <details>
          <summary>Should I use both lazy and async together?</summary>
          <div>Often yes for off-screen images. For on-screen but non-critical images, you might use only <code>decoding="async"</code>.</div>
        </details>
      </section>

      <footer class="muted">
        Rule of thumb: Hero/LCP eager, everything else off-screen → lazy + async, always keep intrinsic dimensions.
      </footer>
    </main>
  </body>
</html>`;function l(){return r.useEffect(()=>{document.title='Images & Performance · loading="lazy", decoding="async"'},[]),e.jsxs(i.Page,{children:[e.jsxs("header",{className:"pageHeader",id:"top",children:[e.jsxs("h1",{children:[e.jsx("code",{children:'loading="lazy"'})," और ",e.jsx("code",{children:'decoding="async"'})]}),e.jsxs("p",{className:"lede",children:["Off-screen images को बाद में लाना और decoding को render-blocking से अलग करना पेज को तेज महसूस कराता है—बशर्ते hero/LCP को कभी lazy न करें और",e.jsx("code",{children:" width"}),"/",e.jsx("code",{children:" height"})," से space reserve करें।"]})]}),e.jsxs("nav",{className:"toc","aria-label":"On this page",children:[e.jsx("a",{href:"#model",children:"Concepts"}),e.jsx("a",{href:"#when",children:"When to use / avoid"}),e.jsx("a",{href:"#patterns",children:"Patterns"}),e.jsx("a",{href:"#fetch",children:"fetchpriority"}),e.jsx("a",{href:"#play",children:"Playground"}),e.jsx("a",{href:"#faq",children:"FAQ"})]}),e.jsxs("section",{id:"model",children:[e.jsx("h2",{children:"Concepts"}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Lazy-load"})," = viewport के पास आने पर ही fetch."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Async decode"})," = paint को block किए बिना decode."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"CLS safety"})," = हमेशा intrinsic ",e.jsx("code",{children:"width"}),"/",e.jsx("code",{children:"height"})," दें (या CSS ",e.jsx("code",{children:"aspect-ratio"}),")."]})]})})]}),e.jsxs("section",{id:"when",children:[e.jsx("h2",{children:"When to use / avoid"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Use"}),e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"Long pages/galleries, article thumbnails, product cards (below the fold)."}),e.jsx("li",{children:"Avatars/comments जो नीचे हैं."}),e.jsx("li",{children:"Inline images जो तुरंत जरूरी नहीं."})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Avoid"}),e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"Hero/LCP media (मुख्य दृश्य सामग्री)."}),e.jsx("li",{children:"ऊपर-के-fold icons/branding."}),e.jsx("li",{children:"क्रिटिकल illustrations जिनपर ऊपर का layout/CTA निर्भर है."})]})]})]})]}),e.jsxs("section",{id:"patterns",children:[e.jsx("h2",{children:"Common patterns"}),e.jsxs("div",{className:"card",children:[e.jsx(i.Code,{role:"region","aria-label":"Card list pattern",children:e.jsx("pre",{children:String.raw`<!-- Card thumbnail -->
<img
  src="/images/product-123-320.jpg"
  srcset="/images/product-123-320.jpg 320w, /images/product-123-640.jpg 640w"
  sizes="(min-width: 900px) 320px, 50vw"
  width="320" height="200"
  alt="Product 123 thumbnail"
  loading="lazy"
  decoding="async"
/>`})}),e.jsx("p",{className:"note",children:"Responsive images के साथ भी lazy/async पूरी तरह compatible हैं. बस हमेशा dimensions दें."})]})]}),e.jsxs("section",{id:"fetch",children:[e.jsx("h2",{children:"fetchpriority"}),e.jsx(i.Code,{role:"region","aria-label":"fetchpriority example",children:e.jsx("pre",{children:String.raw`<!-- Hero (do not lazy) -->
<img
  src="/images/hero-1600.jpg"
  width="1600" height="900"
  alt="Landing hero"
  fetchpriority="high"
/>`})}),e.jsxs("p",{className:"note",children:["Off-screen पर ",e.jsx("code",{children:'fetchpriority="low"'})," rarely needed—native lazy पहले से defer करता है."]})]}),e.jsxs("section",{id:"play",children:[e.jsx("h2",{children:"Try it live"}),e.jsx("p",{className:"lede",children:"नीचे के HTML में hero और below-the-fold images हैं. Inspect करके देखें कौन-सा कब load/paint होता है."}),e.jsx(s,{storageKey:"core-html:images-perf:lazy-decoding:v1",initialHtml:d,height:720})]}),e.jsxs("section",{id:"faq",children:[e.jsx("h2",{children:"FAQ"}),e.jsxs("details",{children:[e.jsx("summary",{children:"क्या lazy SEO को hurt करता है?"}),e.jsxs("div",{className:"ans",children:["Search engines lazy images को render कर लेते हैं. Proper ",e.jsx("code",{children:"alt"})," और semantic context रखें."]})]}),e.jsxs("details",{children:[e.jsx("summary",{children:"placeholder vs blurred preview?"}),e.jsx("div",{className:"ans",children:"UI choice है. Placeholder से layout stable रहता है; blur-up UX smooth बनाता है."})]})]}),e.jsxs("nav",{className:"nextPrev","aria-label":"Lesson navigation",children:[e.jsx(o,{to:"/landmarks/section-vs-div",className:"prev","aria-label":"Go to Section vs Div",children:"← When to use <section> vs <div>"}),e.jsx(o,{to:"/images-perf/intrinsic-dimensions",className:"next","aria-label":"Go to Intrinsic dimensions",children:"Next: Intrinsic dimensions →"})]}),e.jsx("div",{className:"backTop",children:e.jsx("a",{href:"#top",children:"Back to top ↑"})})]})}export{l as default};
