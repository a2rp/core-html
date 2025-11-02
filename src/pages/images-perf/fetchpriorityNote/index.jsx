import React, { useEffect } from "react";
import { Styled } from "./styled";
import { NavLink } from "react-router-dom";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";

/**
 * fetchpriority (concept)
 * - What it is: a browser hint to bump a resource up/down the fetch queue.
 * - Where it applies: <img>, <link rel="preload"> (and some UA-specifics for scripts).
 * - Values: high | low | auto (default).
 * - When to use: hero image above the fold (high), clearly non-critical items (low).
 * - How it interacts: with loading="lazy", width/height, decoding, and preload.
 * - Guardrails: measure first, don't overuse, progressive enhancement mindset.
 *
 * This page keeps the scope HTML-first. The goal is to understand the intent signal,
 * not to micro-opt every edge case.
 */

const STARTER_HTML = String.raw`<!doctype html>
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
</html>`;

export default function FetchpriorityNote() {
    useEffect(() => {
        document.title = "Images & Performance · fetchpriority (concept)";
    }, []);

    return (
        <Styled.Page>
            <header className="pageHeader" id="top">
                <h1>
                    <code>fetchpriority</code> (concept)
                </h1>
                <p className="lede">
                    A small attribute that nudges the browser’s fetch scheduler. Use{" "}
                    <code>high</code> for your true hero/LCP image and <code>low</code> for clearly
                    non-critical items. It’s a hint, not a hammer—measure before and after.
                </p>
            </header>

            <nav className="toc" aria-label="On this page">
                <a href="#what">What & where</a>
                <a href="#when">When to use</a>
                <a href="#interactions">Interactions</a>
                <a href="#demos">Demos</a>
                <a href="#pitfalls">Pitfalls</a>
                <a href="#play">Playground</a>
            </nav>

            <section id="what">
                <h2>What is it, and where does it apply?</h2>
                <div className="card">
                    <ul className="bullets">
                        <li>
                            <code>fetchpriority</code> is an HTML attribute that suggests network priority for a
                            resource.
                        </li>
                        <li>
                            Works on <code>&lt;img&gt;</code> and <code>&lt;link rel="preload"&gt;</code> for images in modern
                            Chromium-based browsers. Others ignore it gracefully.
                        </li>
                        <li>Values: <code>auto</code> (default), <code>high</code>, <code>low</code>.</li>
                    </ul>
                </div>
            </section>

            <section id="when">
                <h2>When to use it</h2>
                <div className="grid2">
                    <div className="card">
                        <h3>Use <code>high</code> when…</h3>
                        <ul className="bullets">
                            <li>The image is your LCP (Largest Contentful Paint) candidate.</li>
                            <li>It’s visible immediately on first paint (above the fold).</li>
                            <li>It’s essential to perceived completeness of the page shell.</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h3>Use <code>low</code> when…</h3>
                        <ul className="bullets">
                            <li>The image is clearly non-critical or below the fold.</li>
                            <li>You already use <code>loading="lazy"</code> and want to avoid queue jumping.</li>
                            <li>It’s a carousel/gallery not needed for first interaction.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="interactions">
                <h2>How it interacts with other attributes</h2>
                <ul className="badges">
                    <li>
                        <span className="good">Good</span> <code>high</code> + explicit <code>width/height</code> on a hero image.
                    </li>
                    <li>
                        <span className="good">Good</span> <code>low</code> + <code>loading="lazy"</code> on below-the-fold thumbs.
                    </li>
                    <li>
                        <span className="bad">Caution</span> Preloading too many images can starve CSS/JS.
                    </li>
                </ul>

                <Styled.Code role="region" aria-label="Hero example">
                    <pre>{String.raw`<img
  src="/images/hero.webp"
  alt="Page hero"
  width="1200" height="440"
  decoding="async"
  fetchpriority="high"
/>`}</pre>
                </Styled.Code>
            </section>

            <section id="demos">
                <h2>Quick demos (inline snippets)</h2>
                <div className="grid2">
                    <div className="card">
                        <h3>Lazy + low</h3>
                        <Styled.Code>
                            <pre>{String.raw`<img
  src="/images/thumb-1.webp"
  alt="Gallery thumbnail"
  width="600" height="338"
  loading="lazy"
  decoding="async"
  fetchpriority="low"
/>`}</pre>
                        </Styled.Code>
                    </div>
                    <div className="card">
                        <h3>Preload + high</h3>
                        <Styled.Code>
                            <pre>{String.raw`<link
  rel="preload"
  as="image"
  href="/images/hero.webp"
  imagesrcset="/images/hero-800.webp 800w, /images/hero-1200.webp 1200w"
  imagesizes="100vw"
  fetchpriority="high"
/>`}</pre>
                        </Styled.Code>
                    </div>
                </div>
            </section>

            <section id="pitfalls">
                <h2>Pitfalls</h2>
                <ul className="badges">
                    <li><span className="bad">Wrong</span> Setting <code>high</code> on lots of images.</li>
                    <li><span className="bad">Wrong</span> Using it to fix layout-shift (that’s <code>width/height</code>).</li>
                    <li><span className="good">Good</span> Treat it as a hint you validate with real measurements.</li>
                </ul>
            </section>

            {/* LAST: Monaco playground with practical, scrolly demo */}
            <section id="play">
                <h2>Try it live</h2>
                <p className="lede">
                    Toggle <code>fetchpriority</code> values, switch <code>loading</code> between{" "}
                    <code>eager</code> and <code>lazy</code>, and observe behavior in the network waterfall.
                </p>
                <HtmlPlayground
                    storageKey="core-html:images-perf:fetchpriority-note:v1"
                    initialHtml={STARTER_HTML}
                    height={720}
                />
            </section>

            {/* Prev + Next */}
            <nav className="nextPrev" aria-label="Lesson navigation">
                <NavLink to="/images-perf/intrinsic-dimensions" className="prev" aria-label="Go to Intrinsic dimensions">
                    ← Intrinsic dimensions
                </NavLink>
                <NavLink to="/a11y/language-landmarks" className="next" aria-label="Go to Language & landmarks">
                    Next: Language &amp; landmarks →
                </NavLink>
            </nav>

            <div className="backTop"><a href="#top">Back to top ↑</a></div>
        </Styled.Page>
    );
}
