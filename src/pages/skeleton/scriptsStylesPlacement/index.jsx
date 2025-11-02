import React, { useEffect } from "react";
import { Styled } from "./styled";
import { NavLink } from "react-router-dom";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";

/**
 * Scripts / Styles Placement
 * Scope:
 * - Where CSS and JS belong and why (head vs body)
 * - render-blocking vs non-blocking
 * - <script defer>, async, type="module" patterns
 * - CSS delivery patterns: <link rel="stylesheet">, @import (avoid), media, preload
 * - Critical CSS (when/why), FOUC/FOIT quick notes
 * - Monaco playground LAST
 */

const STARTER_HTML = String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Scripts & Styles — placement demo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <!-- CSS: link stylesheets in head (render depends on them) -->
    <link rel="stylesheet"
          href="data:text/css,body{font:14px/1.6 system-ui,-apple-system,Segoe UI,Roboto,sans-serif;padding:24px} .card{border:1px solid #bbb;padding:12px;border-radius:10px} .muted{color:#777} .grid{display:grid;gap:12px} .pill{display:inline-block;border:1px solid #bbb;padding:2px 8px;border-radius:999px} code{background:#f5f5f5;padding:1px 6px;border-radius:6px}">

    <!-- Optional: preload a crucial stylesheet, then use it normally -->
    <!-- <link rel="preload" as="style" href="/above-the-fold.css"> -->
    <!-- <link rel="stylesheet" href="/above-the-fold.css"> -->

    <!-- Avoid @import inside CSS for performance; it delays fetches. -->

    <!-- JS: prefer defer so parsing isn't blocked -->
    <script defer>
      document.addEventListener('DOMContentLoaded', () => {
        const log = (m) => (document.getElementById('log').innerHTML += '<div>' + m + '</div>');
        log('DOMContentLoaded ✓ (defer)');
        document.getElementById('btn')?.addEventListener('click', () => log('Clicked!'));
      });
    </script>

    <!-- Module scripts are deferred by default -->
    <!-- <script type="module">
      import { sum } from './sum.js';
      console.log('module loaded', sum(2,3));
    </script> -->

    <!-- Async is fine for independent scripts (no order/dom dependency) -->
    <!-- <script async src="https://analytics.example.com/sdk.js"></script> -->
  </head>

  <body>
    <main class="grid">
      <header>
        <h1>Scripts / Styles — placement</h1>
        <p class="muted">Keep CSS in <code>&lt;head&gt;</code>, prefer <code>defer</code> (or modules) for JS. Use async only when order doesn’t matter.</p>
      </header>

      <section class="card">
        <h2>Why this matters</h2>
        <ul>
          <li><span class="pill">Blocking</span> CSS blocks rendering; JS without <code>defer/async</code> blocks parsing.</li>
          <li><span class="pill">Perceived speed</span> Good placement improves time-to-first-paint and interactivity.</li>
          <li><span class="pill">Determinism</span> <code>defer</code> preserves order; <code>async</code> does not.</li>
        </ul>
      </section>

      <section class="card">
        <h2>Compare patterns</h2>
        <h3>Good</h3>
        <pre><code>&lt;link rel="stylesheet" href="/site.css"&gt;
&lt;script defer src="/app.js"&gt;&lt;/script&gt;
&lt;script type="module" src="/main.js"&gt;&lt;/script&gt;</code></pre>

        <h3>Sometimes</h3>
        <pre><code>&lt;script async src="https://analytics.example.com/sdk.js"&gt;&lt;/script&gt;</code></pre>

        <h3>Avoid</h3>
        <pre><code>&lt;script src="/large-legacy.js"&gt;&lt;/script&gt;  <!-- blocks parsing -->
@import url('/more.css');                          /* fetch-blocking, chained */</code></pre>
      </section>

      <section class="card">
        <h2>Fonts, FOUC/FOIT</h2>
        <ul>
          <li>Use <code>font-display: swap</code> to prevent invisible text (FOIT).</li>
          <li>Limit webfont weights/styles; test fallback stacks.</li>
          <li>Consider preloading a single critical font file if it improves CLS/FOIT.</li>
        </ul>
      </section>

      <section class="card">
        <h2>Try the button</h2>
        <button id="btn" type="button">Click</button>
        <div id="log" class="muted"></div>
      </section>
    </main>
  </body>
</html>`;

export default function ScriptsStylesPlacement() {
    useEffect(() => {
        document.title = "Document Skeleton · Scripts / styles placement";
    }, []);

    return (
        <Styled.Page>
            <header className="pageHeader" id="top">
                <h1>Scripts / styles placement</h1>
                <p className="lede">
                    CSS belongs in <code>&lt;head&gt;</code>; JavaScript should avoid blocking HTML parsing. Prefer{" "}
                    <code>defer</code> (or <code>type="module"</code>) for app code, and reserve <code>async</code> for independent scripts.
                </p>
            </header>

            <nav className="toc" aria-label="On this page">
                <a href="#css">CSS placement</a>
                <a href="#js">JS placement</a>
                <a href="#preload">Preload &amp; hints</a>
                <a href="#fonts">Fonts &amp; flashes</a>
                <a href="#play">Playground</a>
            </nav>

            <section id="css">
                <h2>CSS: where and how</h2>
                <ul className="bullets">
                    <li>Link stylesheets in <code>&lt;head&gt;</code> with <code>rel="stylesheet"</code>.</li>
                    <li>Avoid <code>@import</code> in CSS; it delays subsequent fetches.</li>
                    <li>Inline only truly critical CSS; keep it tiny and audited.</li>
                    <li>Use media queries on non-critical styles: <code>media="print"</code>, etc.</li>
                </ul>
            </section>

            <section id="js">
                <h2>JS: defer, async, module</h2>
                <div role="table" className="table">
                    <div role="row" className="thead">
                        <span role="columnheader">Pattern</span>
                        <span role="columnheader">When it runs</span>
                        <span role="columnheader">Order</span>
                        <span role="columnheader">Use for</span>
                    </div>
                    <div role="row">
                        <span><code>&lt;script defer&gt;</code></span>
                        <span>After parse, before <code>DOMContentLoaded</code></span>
                        <span>Preserved</span>
                        <span>App bundles needing DOM / predictable order</span>
                    </div>
                    <div role="row">
                        <span><code>&lt;script async&gt;</code></span>
                        <span>As soon as loaded</span>
                        <span>Not preserved</span>
                        <span>Analytics, ads, independent widgets</span>
                    </div>
                    <div role="row">
                        <span><code>type="module"</code></span>
                        <span>Deferred by default</span>
                        <span>ESM graph</span>
                        <span>Modern modular code and splitting</span>
                    </div>
                </div>
                <p className="note">Avoid blocking scripts (no <code>defer</code>/<code>async</code>) unless you absolutely must gate parsing.</p>
            </section>

            <section id="preload">
                <h2>Preload &amp; resource hints</h2>
                <Styled.Code role="region" aria-label="Preload examples">
                    <pre>{String.raw`<!-- Preload a critical stylesheet, then include it normally -->
<link rel="preload" as="style" href="/critical.css">
<link rel="stylesheet" href="/critical.css">

<!-- Preconnect a third-party origin you know you'll hit -->
<link rel="preconnect" href="https://cdn.example.com" crossorigin>`}</pre>
                </Styled.Code>
                <ul className="bullets">
                    <li>Always include preloaded CSS again as a normal <code>rel="stylesheet"</code>.</li>
                    <li>Use preconnect selectively; avoid shotgun hints.</li>
                </ul>
            </section>

            <section id="fonts">
                <h2>Fonts, FOUC/FOIT</h2>
                <ul className="bullets">
                    <li>Set <code>@font-face {`{ font-display: swap; }`}</code> to avoid invisible text.</li>
                    <li>Check CLS with and without fonts; adjust fallback stacks.</li>
                </ul>
            </section>

            {/* LAST: Monaco playground */}
            <section id="play">
                <h2>Try it live</h2>
                <p className="lede">
                    Tweak CSS/JS placement, experiment with <code>defer</code>/<code>async</code>, and add/remove preloads.
                    Your changes autosave for this lesson.
                </p>
                <HtmlPlayground
                    storageKey="core-html:skeleton:scripts-styles-placement:v1"
                    initialHtml={STARTER_HTML}
                    height={640}
                />
            </section>

            {/* Prev + Next */}
            <nav className="nextPrev" aria-label="Lesson navigation">
                <NavLink to="/skeleton/favicons-min" className="prev" aria-label="Go to Favicons (minimal)">
                    ← Favicons (minimal)
                </NavLink>
                <NavLink to="/landmarks/core-landmarks" className="next" aria-label="Go to Core landmarks">
                    Next: Core landmarks →
                </NavLink>
            </nav>

            <div className="backTop"><a href="#top">Back to top ↑</a></div>
        </Styled.Page>
    );
}
