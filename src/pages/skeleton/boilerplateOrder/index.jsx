import React, { useEffect } from "react";
import { Styled } from "./styled";
import { NavLink } from "react-router-dom";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";

/**
* Boilerplate Order — Skeleton
* Focus:
* - Minimal correct ordering for

<head> items
    * - Recommended extras (favicons, preconnect, fonts)
    * - CSS/JS loading notes (blocking vs non-blocking)
    * - Print-friendly + color-scheme hints
    * - Monaco playground at the end
    */

    const STARTER_HTML = String.raw`
    <!doctype html>
    <html lang="en">

    <head>
        <!-- 1) Charset early so bytes decode correctly -->
        <meta charset="utf-8" />

        <!-- 2) Title -->
        <title>Boilerplate Order — demo</title>

        <!-- 3) Viewport for mobile baseline -->
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <!-- 4) Meta description (SEO) -->
        <meta name="description" content="Minimal, correct head ordering for fast, predictable pages." />

        <!-- 5) Favicons / app icons (minimal set) -->
        <link rel="icon" sizes="32x32" href="data:image/x-icon;base64," />
        <link rel="apple-touch-icon" sizes="180x180" href="data:image/png;base64," />

        <!-- 6) Resource hints (optional, use judiciously) -->
        <link rel="preconnect" href="https://example-cdn.com" crossorigin>

        <!-- 7) Critical CSS: prefer external stylesheet; inline only the truly critical -->
        <link rel="stylesheet"
            href="data:text/css,body{font:14px/1.6 system-ui,-apple-system,Segoe UI,Roboto,sans-serif;padding:24px} .card{border:1px solid #bbb;padding:12px;border-radius:10px} .muted{color:#777}">
        <style media="print">
            /* keep print rules minimal */
            @page {
                margin: 12mm;
            }

            body {
                background: white !important;
            }
        </style>

        <!-- 8) Scripts: defer avoids blocking parse -->
        <script defer>
            document.addEventListener('DOMContentLoaded', () => {
                const log = (m) => (document.getElementById('log').innerHTML += '<div>' + m + '</div>');
                log('DOMContentLoaded ✓ (defer)');
            });
        </script>

        <!-- 9) Color scheme hint helps UA choose light/dark form controls -->
        <meta name="color-scheme" content="light dark">
    </head>

<body>
    <main>
        <h1>Boilerplate Order — live mini playground</h1>
        <p class="muted">Reorder, remove, or add items and see how it behaves.</p>
        <section class="card">
            <h2>Checklist (thin start)</h2>
            <ul>
                <li>charset → title → viewport at the top</li>
                <li>description &amp; icons</li>
                <li>stylesheets (keep render non-blocking sensible)</li>
                <li>scripts with <code>defer</code> or modules</li>
            </ul>
        </section>

        <section class="card">
            <h2>Log</h2>
            <div id="log" class="muted"></div>
        </section>
    </main>
</body>

</html>`;

export default function BoilerplateOrder() {
useEffect(() => {
document.title = "Document Skeleton · Boilerplate order";
}, []);

return (
<Styled.Page>
    <header className="pageHeader" id="top">
        <h1>Boilerplate order</h1>
        <p className="lede">
            A clean, predictable order in <code>&lt;head&gt;</code> prevents quirky bugs and improves perceived
            performance.
            Start small, then add only what you need.
        </p>
    </header>

    <nav className="toc" aria-label="On this page">
        <a href="#minimal">Minimal correct order</a>
        <a href="#recommended">Recommended add-ons</a>
        <a href="#styles-scripts">Loading CSS &amp; JS</a>
        <a href="#prints-colors">Print &amp; color hints</a>
        <a href="#play">Playground</a>
    </nav>

    <section id="minimal">
        <h2>Minimal correct order</h2>
        <Styled.Code role="region" aria-label="Minimal head ordering">
            <pre>{String.raw`<head>
  <meta charset="utf-8">
  <title>Page title</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>`}</pre>
        </Styled.Code>
        <ul className="bullets">
            <li><strong>charset</strong> first, so decoding is correct from byte 1.</li>
            <li><strong>title</strong> is required and should be specific.</li>
            <li><strong>viewport</strong> sets the mobile baseline; keep it simple.</li>
        </ul>
    </section>

    <section id="recommended">
        <h2>Recommended add-ons (thin)</h2>
        <div className="grid2">
            <div className="card">
                <h3>Discovery</h3>
                <ul className="bullets">
                    <li><code>&lt;meta name="description"&gt;</code> — concise summary.</li>
                    <li>Social tags (OG/Twitter) when sharing matters.</li>
                </ul>
            </div>
            <div className="card">
                <h3>Identity</h3>
                <ul className="bullets">
                    <li>Favicons &amp; touch icons (sizes 16/32 + 180 is a minimal trio).</li>
                    <li><code>theme-color</code> to tint browser UI where supported.</li>
                </ul>
            </div>
            <div className="card">
                <h3>Hints</h3>
                <ul className="bullets">
                    <li><code>preconnect</code> to warm up other origins.</li>
                    <li><code>preload</code> for truly critical assets (and use them again normally).</li>
                </ul>
            </div>
            <div className="card">
                <h3>Standards</h3>
                <ul className="bullets">
                    <li><code>color-scheme</code> to inform UA light/dark affordances.</li>
                    <li>Manifest &amp; canonical link when needed.</li>
                </ul>
            </div>
        </div>
    </section>

    <section id="styles-scripts">
        <h2>Loading CSS &amp; JS</h2>
        <div className="grid2">
            <div className="card">
                <h3>Styles</h3>
                <ul className="bullets">
                    <li>Prefer external CSS via <code>rel="stylesheet"</code>.</li>
                    <li>Inline only tiny critical CSS; keep it truly small.</li>
                    <li>Don’t block rendering with unused CSS — audit regularly.</li>
                </ul>
            </div>
            <div className="card">
                <h3>Scripts</h3>
                <ul className="bullets">
                    <li><code>&lt;script defer&gt;</code> — runs after parse, preserves order.</li>
                    <li><code>&lt;script async&gt;</code> — for independent scripts (no order guarantees).</li>
                    <li><code>type="module"</code> — deferred by default; use modern ESM.</li>
                </ul>
            </div>
        </div>
        <Styled.Code role="region" aria-label="JS loading patterns">
            <pre>{String.raw`<!-- Good -->
<script defer src="/app.js"></script>
<script type="module" src="/main.js"></script>

<!-- Sometimes -->
<script async src="https://analytics.example.com/sdk.js"></script>

<!-- Avoid (blocks parsing) -->
<!-- <script src="/large-legacy.js"></script> -->`}</pre>
        </Styled.Code>
    </section>

    <section id="prints-colors">
        <h2>Print &amp; color scheme hints</h2>
        <ul className="bullets">
            <li><code>@page</code> and minimal print rules help keep output tidy.</li>
            <li><code>color-scheme: light dark</code> allows UA to pick matching form-control theming.</li>
        </ul>
        <Styled.Code role="region" aria-label="Print rules">
            <pre>{String.raw`<style media="print">
  @page { margin: 12mm; }
  body { background: white !important; color: black; }
</style>

<meta name="color-scheme" content="light dark">`}</pre>
        </Styled.Code>
    </section>

    {/* LAST: Monaco playground */}
    <section id="play">
        <h2>Try it live</h2>
        <p className="lede">
            Edit the order, add/remove hints, switch script strategies, and see how it impacts behavior.
            Your changes autosave for this lesson.
        </p>
        <HtmlPlayground storageKey="core-html:skeleton:boilerplate-order:v1" initialHtml={STARTER_HTML} height={640} />
    </section>

    {/* Prev + Next */}
    <nav className="nextPrev" aria-label="Lesson navigation">
        <NavLink to="/skeleton/head-vs-body" className="prev" aria-label="Go to head vs body">
            ← &lt;head&gt; vs &lt;body&gt;
        </NavLink>
        <NavLink to="/skeleton/favicons-min" className="next" aria-label="Go to Favicons (minimal)">
            Next: Favicons (16/32 + 180) →
        </NavLink>
    </nav>

    <div className="backTop"><a href="#top">Back to top ↑</a></div>
</Styled.Page>
);
}