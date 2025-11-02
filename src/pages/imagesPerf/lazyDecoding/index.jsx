import React, { useEffect } from "react";
import { Styled } from "./styled";
import { NavLink } from "react-router-dom";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";

/**
 * loading="lazy" + decoding="async"
 * - What these attributes do (network deferral vs decode timing)
 * - When to use, when to avoid (LCP/above-the-fold)
 * - Intrinsic dimensions (width/height) to prevent CLS
 * - fetchpriority note and interaction
 * - Real patterns (teaser cards, long content, comment threads)
 * - Pitfalls and FAQ
 * - Monaco playground LAST
 */

const STARTER_HTML = String.raw`<!doctype html>
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
</html>`;

export default function LazyDecoding() {
    useEffect(() => {
        document.title = 'Images & Performance · loading="lazy", decoding="async"';
    }, []);

    return (
        <Styled.Page>
            <header className="pageHeader" id="top">
                <h1>
                    <code>loading="lazy"</code> और <code>decoding="async"</code>
                </h1>
                <p className="lede">
                    Off-screen images को बाद में लाना और decoding को render-blocking से अलग करना
                    पेज को तेज महसूस कराता है—बशर्ते hero/LCP को कभी lazy न करें और
                    <code> width</code>/<code> height</code> से space reserve करें।
                </p>
            </header>

            <nav className="toc" aria-label="On this page">
                <a href="#model">Concepts</a>
                <a href="#when">When to use / avoid</a>
                <a href="#patterns">Patterns</a>
                <a href="#fetch">fetchpriority</a>
                <a href="#play">Playground</a>
                <a href="#faq">FAQ</a>
            </nav>

            <section id="model">
                <h2>Concepts</h2>
                <div className="card">
                    <ul className="bullets">
                        <li><strong>Lazy-load</strong> = viewport के पास आने पर ही fetch.</li>
                        <li><strong>Async decode</strong> = paint को block किए बिना decode.</li>
                        <li><strong>CLS safety</strong> = हमेशा intrinsic <code>width</code>/<code>height</code> दें (या CSS <code>aspect-ratio</code>).</li>
                    </ul>
                </div>
            </section>

            <section id="when">
                <h2>When to use / avoid</h2>
                <div className="grid2">
                    <div className="card">
                        <h3>Use</h3>
                        <ul className="bullets">
                            <li>Long pages/galleries, article thumbnails, product cards (below the fold).</li>
                            <li>Avatars/comments जो नीचे हैं.</li>
                            <li>Inline images जो तुरंत जरूरी नहीं.</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h3>Avoid</h3>
                        <ul className="bullets">
                            <li>Hero/LCP media (मुख्य दृश्य सामग्री).</li>
                            <li>ऊपर-के-fold icons/branding.</li>
                            <li>क्रिटिकल illustrations जिनपर ऊपर का layout/CTA निर्भर है.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="patterns">
                <h2>Common patterns</h2>
                <div className="card">
                    <Styled.Code role="region" aria-label="Card list pattern">
                        <pre>{String.raw`<!-- Card thumbnail -->
<img
  src="/images/product-123-320.jpg"
  srcset="/images/product-123-320.jpg 320w, /images/product-123-640.jpg 640w"
  sizes="(min-width: 900px) 320px, 50vw"
  width="320" height="200"
  alt="Product 123 thumbnail"
  loading="lazy"
  decoding="async"
/>`}</pre>
                    </Styled.Code>
                    <p className="note">
                        Responsive images के साथ भी lazy/async पूरी तरह compatible हैं. बस हमेशा dimensions दें.
                    </p>
                </div>
            </section>

            <section id="fetch">
                <h2>fetchpriority</h2>
                <Styled.Code role="region" aria-label="fetchpriority example">
                    <pre>{String.raw`<!-- Hero (do not lazy) -->
<img
  src="/images/hero-1600.jpg"
  width="1600" height="900"
  alt="Landing hero"
  fetchpriority="high"
/>`}</pre>
                </Styled.Code>
                <p className="note">
                    Off-screen पर <code>fetchpriority="low"</code> rarely needed—native lazy पहले से defer करता है.
                </p>
            </section>

            {/* LAST: Monaco playground */}
            <section id="play">
                <h2>Try it live</h2>
                <p className="lede">
                    नीचे के HTML में hero और below-the-fold images हैं. Inspect करके देखें कौन-सा कब load/paint होता है.
                </p>
                <HtmlPlayground
                    storageKey="core-html:images-perf:lazy-decoding:v1"
                    initialHtml={STARTER_HTML}
                    height={720}
                />
            </section>

            <section id="faq">
                <h2>FAQ</h2>
                <details>
                    <summary>क्या lazy SEO को hurt करता है?</summary>
                    <div className="ans">Search engines lazy images को render कर लेते हैं. Proper <code>alt</code> और semantic context रखें.</div>
                </details>
                <details>
                    <summary>placeholder vs blurred preview?</summary>
                    <div className="ans">UI choice है. Placeholder से layout stable रहता है; blur-up UX smooth बनाता है.</div>
                </details>
            </section>

            {/* Prev + Next */}
            <nav className="nextPrev" aria-label="Lesson navigation">
                <NavLink to="/landmarks/section-vs-div" className="prev" aria-label="Go to Section vs Div">
                    ← When to use &lt;section&gt; vs &lt;div&gt;
                </NavLink>
                <NavLink to="/images-perf/intrinsic-dimensions" className="next" aria-label="Go to Intrinsic dimensions">
                    Next: Intrinsic dimensions →
                </NavLink>
            </nav>

            <div className="backTop"><a href="#top">Back to top ↑</a></div>
        </Styled.Page>
    );
}
