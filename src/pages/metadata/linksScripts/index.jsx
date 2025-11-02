// src/pages/metadata/linksScripts/index.jsx
import React, { useEffect } from "react";
import { Styled } from "./styled";
import { NavLink } from "react-router-dom";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";

/**
 * Loading CSS/JS sanely
 * - CSS is render-blocking; load only what’s needed up front
 * - JS can block parsing; prefer defer/module; avoid inline blocking
 * - Patterns: critical CSS, print CSS, preconnect, preload, modulepreload
 * - When to use async vs defer
 * - ES Modules: type="module" (implicitly deferred)
 * - Integrity, crossorigin, referrerpolicy basics
 * - Small live playground at the end (autosaves)
 */

const STARTER_HTML = String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Loading CSS/JS sanely — demo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; font: 14px/1.6 system-ui, -apple-system, Segoe UI, Roboto, sans-serif; }
      main { padding: 20px; display: grid; gap: 14px; max-width: 900px; margin: 0 auto; }
      .card { border: 1px solid #ccc; border-radius: 12px; padding: 12px; }
      .muted { color: #6b7280; }
      code { background: #f5f5f5; padding: 0 6px; border-radius: 6px; }
      .row { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
      @media (max-width: 800px) { .row { grid-template-columns: 1fr; } }
    </style>

    <!-- 1) Core render CSS in <head> -->
    <link rel="stylesheet" href="styles/core.css" />

    <!-- 2) Non-critical/print CSS: -->
    <link rel="stylesheet" href="styles/print.css" media="print" />
    <!-- OR: load non-critical CSS without blocking render (onload swap) -->
    <!--
    <link
      rel="preload"
      href="styles/noncritical.css"
      as="style"
      onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="styles/noncritical.css"></noscript>
    -->

    <!-- 3) Preconnect to CDNs if you’ll fetch from them: -->
    <!-- <link rel="preconnect" href="https://cdn.example.com" crossorigin> -->

    <!-- 4) Preload a critical font (with proper type + crossorigin): -->
    <!--
    <link rel="preload" as="font" type="font/woff2" href="/fonts/inter.woff2" crossorigin>
    -->

    <!-- 5) Module graph warmup (for large ESM bundles): -->
    <!-- <link rel="modulepreload" href="/scripts/app.js"> -->
  </head>
  <body>
    <main>
      <header>
        <h1>Loading CSS/JS sanely</h1>
        <p class="muted">
          CSS in head, keep it minimal; non-critical later. JavaScript with <code>defer</code> or
          <code>type="module"</code> so parsing isn’t blocked. Use <code>async</code> only for scripts
          that don’t depend on DOM readiness or each other.
        </p>
      </header>

      <section class="card">
        <h2>CSS quick rules</h2>
        <ul>
          <li><strong>Critical CSS</strong> only in head. Everything else can wait.</li>
          <li>Use <code>media="print"</code> for print-only sheets, or the <em>preload → rel swap</em> trick above.</li>
          <li>Fonts: preload key fonts; always include <code>type</code> and <code>crossorigin</code> for WOFF2.</li>
        </ul>
      </section>

      <section class="card">
        <h2>JS quick rules</h2>
        <div class="row">
          <div>
            <h3>Classic scripts</h3>
            <pre><code>&lt;script src="/scripts/classic.js" defer&gt;&lt;/script&gt;</code></pre>
            <ul>
              <li><code>defer</code> = download during parse, execute after HTML is parsed.</li>
              <li><code>async</code> = execute ASAP when ready; order not guaranteed.</li>
            </ul>
          </div>
          <div>
            <h3>ES modules</h3>
            <pre><code>&lt;script type="module" src="/scripts/app.js"&gt;&lt;/script&gt;</code></pre>
            <ul>
              <li>Modules act like deferred by default (no blocking).</li>
              <li>Use <code>&lt;link rel="modulepreload"&gt;</code> for large graphs.</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="card">
        <h2>Integrity & CORS (CDN safety)</h2>
        <pre><code>&lt;script
  src="https://cdn.example.com/lib.min.js"
  integrity="sha384-BASE64HASH"
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
  defer&gt;&lt;/script&gt;</code></pre>
        <p class="muted">
          Subresource Integrity (<code>integrity</code>) makes sure the file wasn't tampered with.
          <code>crossorigin</code> must be set for SRI with CORS, and <code>referrerpolicy</code> controls what referrer is sent.
        </p>
      </section>

      <section class="card">
        <h2>Tiny demo</h2>
        <p id="status">JS hasn’t run yet…</p>
        <button id="btn">Click me</button>
      </section>

      <footer class="muted">Tip: prefer one modern bundle (ESM) over many tiny classic scripts.</footer>
    </main>

    <!-- Place scripts at the end (still fine), but prefer defer/module anywhere -->
    <script defer>
      // Classic inline script with defer-equivalent timing (executes after parse)
      document.addEventListener('DOMContentLoaded', () => {
        const s = document.getElementById('status');
        if (s) s.textContent = 'DOM ready ✅';
        const btn = document.getElementById('btn');
        btn?.addEventListener('click', () => alert('Works without blocking render!'));
      });
    </script>

    <!-- ESM example (implicitly deferred) -->
    <script type="module">
      // Example: split code into modules if it helps maintainability
      const msg = 'Module script loaded ✅';
      console.log(msg);
    </script>
  </body>
</html>`;

export default function LinksScripts() {
    useEffect(() => {
        document.title = "Metadata · Loading CSS/JS sanely";
    }, []);

    return (
        <Styled.Page>
            <header className="pageHeader" id="top">
                <h1>Loading CSS and JavaScript sanely</h1>
                <p className="lede">
                    Keep first paint fast: minimal critical CSS in <code>&lt;head&gt;</code>, push non-critical
                    styles later, and load scripts with <code>defer</code> or <code>type="module"</code>. Use
                    <code>async</code> only for scripts that can execute anytime without order guarantees.
                </p>
            </header>

            <nav className="toc" aria-label="On this page">
                <a href="#css">CSS basics</a>
                <a href="#js">JavaScript basics</a>
                <a href="#modules">ES Modules</a>
                <a href="#hints">Network hints</a>
                <a href="#security">Integrity & CORS</a>
                <a href="#play">Playground</a>
            </nav>

            <section id="css">
                <h2>CSS basics (render-blocking)</h2>
                <div className="card">
                    <ul className="bullets">
                        <li>Every <code>&lt;link rel="stylesheet"&gt;</code> in head blocks render until it arrives.</li>
                        <li>Ship only core layout/typography up front. Defer extras.</li>
                        <li>Pattern for non-critical CSS:
                            <Styled.Code as="div">
                                <pre>{String.raw`<link rel="preload" href="/css/extra.css" as="style"
      onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="/css/extra.css"></noscript>`}</pre>
                            </Styled.Code>
                        </li>
                        <li>Print styles should use <code>media="print"</code>, so they don’t slow initial paint.</li>
                    </ul>
                </div>
            </section>

            <section id="js">
                <h2>JavaScript basics (don’t block parsing)</h2>
                <div className="grid2">
                    <div className="card">
                        <h3><code>defer</code> (classic scripts)</h3>
                        <p>Downloads during HTML parse, executes after parsing (in order).</p>
                        <Styled.Code><pre>{String.raw`<script src="/js/vendor.js" defer></script>
<script src="/js/app.js" defer></script>`}</pre></Styled.Code>
                    </div>
                    <div className="card">
                        <h3><code>async</code> (fire whenever ready)</h3>
                        <p>No order guarantee; use only for analytics/ads/widgets that don't depend on DOM or other scripts.</p>
                        <Styled.Code><pre>{String.raw`<script src="https://example.com/ads.js" async></script>`}</pre></Styled.Code>
                    </div>
                </div>
            </section>

            <section id="modules">
                <h2>ES Modules (modern default)</h2>
                <div className="card">
                    <ul className="bullets">
                        <li><code>type="module"</code> is implicitly deferred, supports <code>import</code>/<code>export</code>.</li>
                        <li>Warm up with <code>&lt;link rel="modulepreload"&gt;</code> for large graphs if TTFB is fine but hydration is slow.</li>
                        <li>Optional legacy fallback:
                            <Styled.Code><pre>{String.raw`<script type="module" src="/js/app.mjs"></script>
<script nomodule src="/js/legacy.bundle.js" defer></script>`}</pre></Styled.Code>
                        </li>
                    </ul>
                </div>
            </section>

            <section id="hints">
                <h2>Network hints (carefully)</h2>
                <div className="grid2">
                    <div className="card">
                        <h3>Preconnect</h3>
                        <p>Use when you know you’ll fetch from a new origin soon.</p>
                        <Styled.Code><pre>{String.raw`<link rel="preconnect" href="https://cdn.example.com" crossorigin>`}</pre></Styled.Code>
                    </div>
                    <div className="card">
                        <h3>Preload</h3>
                        <p>Reserve for assets needed in the next couple of seconds; match correct <code>as</code>/<code>type</code>.</p>
                        <Styled.Code><pre>{String.raw`<link rel="preload" as="font" type="font/woff2"
      href="/fonts/inter.woff2" crossorigin>`}</pre></Styled.Code>
                    </div>
                </div>
            </section>

            <section id="security">
                <h2>Integrity, CORS, referrer policy</h2>
                <Styled.Code><pre>{String.raw`<script
  src="https://cdn.example.com/lib.min.js"
  integrity="sha384-BASE64HASH"
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
  defer></script>`}</pre></Styled.Code>
                <p className="note">
                    SRI verifies content; for cross-origin with SRI, set <code>crossorigin</code>. Use
                    <code>referrerpolicy</code> to limit referrer leakage when pulling from CDNs.
                </p>
            </section>

            <section id="play">
                <h2>Try it live</h2>
                <p className="lede">
                    Toggle <code>async</code> / <code>defer</code>, add <code>type="module"</code>, and experiment with
                    preload/modulepreload to feel how timing changes. Autosaves to this lesson.
                </p>
                <HtmlPlayground
                    storageKey="core-html:metadata:links-scripts:v1"
                    initialHtml={STARTER_HTML}
                    height={680}
                />
            </section>

            {/* Prev + Next */}
            <nav className="nextPrev" aria-label="Lesson navigation">
                <NavLink to="/metadata/canonical-concept" className="prev" aria-label="Go to Canonical link (concept)">
                    ← Canonical link (concept)
                </NavLink>
                <NavLink to="/globals/id-class-style-title" className="next" aria-label="Go to Global attributes: id, class, style, title">
                    Next: Global attributes — id, class, style, title →
                </NavLink>
            </nav>

            <div className="backTop"><a href="#top">Back to top ↑</a></div>
        </Styled.Page>
    );
}
