import React, { useEffect } from "react";
import { Styled } from "./styled";
import { NavLink } from "react-router-dom";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";

/**
 * Document Skeleton — <head> vs <body>
 * Scope:
 * - Clear responsibilities of head vs body
 * - What belongs / what never belongs
 * - Minimal skeleton + recommended inclusions
 * - <script> (defer/async) placement basics
 * - <link> rel types (stylesheet, preload, preconnect) at a glance
 * - <base>, <noscript> quick notes
 * - Monaco playground LAST
 */

const STARTER_HTML = String.raw`<!doctype html>
<html lang="en">
  <head>
    <!-- HEAD: document configuration, not visible page content -->
    <meta charset="utf-8" />
    <title>Head vs Body — live demo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <!-- Preconnect example (safe demo, does nothing harmful here) -->
    <link rel="preconnect" href="https://example.com" crossorigin />

    <!-- Styles belong in <head> (or linked via <link rel="stylesheet">) -->
    <style>
      :root { color-scheme: light dark; }
      body { font: 14px/1.6 system-ui, -apple-system, Segoe UI, Roboto, sans-serif; padding: 24px; }
      .wrap { display: grid; gap: 10px; }
      .card { border: 1px solid #bbb; padding: 12px; border-radius: 10px; }
      .muted { color: #777 }
      button { padding: 6px 10px; border-radius: 8px; }
      code { background: #f5f5f5; padding: 1px 5px; border-radius: 6px; }
    </style>

    <!-- Prefer defer for scripts that access the DOM after parse -->
    <script defer>
      // Runs after parsing, before DOMContentLoaded fires
      document.addEventListener('DOMContentLoaded', () => {
        const log = msg => {
          const el = document.getElementById('log');
          el && (el.innerHTML += '<div>' + msg + '</div>');
        };
        log('DOMContentLoaded fired ✓ (defer script ready)');

        const btn = document.getElementById('helloBtn');
        if (btn) btn.addEventListener('click', () => log('Button clicked!'));
      });
    </script>
  </head>

  <body>
    <!-- BODY: perceptible page content (headings, text, media, UI) -->
    <main class="wrap" aria-label="Demo content">
      <h1>Head vs Body — mini playground</h1>
      <p class="muted">
        <strong>Head</strong> configures the document; <strong>Body</strong> contains perceivable content.
        Open the markup and move things around to see what’s valid.
      </p>

      <section class="card">
        <h2>Visible content lives in <code>&lt;body&gt;</code></h2>
        <p>
          Use headings, paragraphs, images, links, buttons, forms, etc. here.
          Avoid putting these inside <code>&lt;head&gt;</code>.
        </p>
        <button id="helloBtn" type="button">Click me</button>
      </section>

      <section class="card">
        <h2>Console log</h2>
        <div id="log" class="muted"></div>
      </section>

      <noscript class="card">
        <strong>Note:</strong> JavaScript appears to be disabled; interactive features are limited.
      </noscript>
    </main>
  </body>
</html>`;

export default function HeadVsBody() {
    useEffect(() => {
        document.title = "Document Skeleton · <head> vs <body>";
    }, []);

    return (
        <Styled.Page>
            <header className="pageHeader" id="top">
                <h1>&lt;head&gt; vs &lt;body&gt;</h1>
                <p className="lede">
                    <code>&lt;head&gt;</code> configures the document (metadata, links, scripts, styles).{" "}
                    <code>&lt;body&gt;</code> holds perceivable content (what users see and interact with).
                    Keep this separation clean for semantics, performance, and accessibility.
                </p>
            </header>

            <nav className="toc" aria-label="On this page">
                <a href="#roles">Roles at a glance</a>
                <a href="#head-belongs">Head: belongs here</a>
                <a href="#head-avoid">Head: avoid putting</a>
                <a href="#body-belongs">Body: belongs here</a>
                <a href="#scripts">Scripts: defer/async</a>
                <a href="#links">Useful link rels</a>
                <a href="#base-noscript">Base &amp; Noscript</a>
                <a href="#play">Playground</a>
            </nav>

            <section id="roles">
                <h2>Roles at a glance</h2>
                <div className="grid2">
                    <div className="card">
                        <h3>&lt;head&gt;</h3>
                        <ul className="bullets">
                            <li>Document metadata: <code>charset</code>, <code>title</code>, <code>description</code>.</li>
                            <li>Resource hints &amp; relationships: <code>&lt;link&gt;</code> (stylesheet, preconnect, preload, icon…).</li>
                            <li>Styles: <code>&lt;style&gt;</code> or <code>&lt;link rel="stylesheet"&gt;</code>.</li>
                            <li>Scripts that shouldn’t block rendering: prefer <code>defer</code> or <code>async</code>.</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h3>&lt;body&gt;</h3>
                        <ul className="bullets">
                            <li>Perceivable content: headings, paragraphs, media, widgets.</li>
                            <li>Interactive controls: links, buttons, forms, dialogs.</li>
                            <li>Application containers: <code>&lt;main&gt;</code>, sections, components.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="head-belongs">
                <h2>What belongs in &lt;head&gt;</h2>
                <ul className="bullets">
                    <li><code>&lt;meta charset="utf-8"&gt;</code> at the top, then <code>&lt;title&gt;</code>, then viewport.</li>
                    <li>SEO/social tags (description, Open Graph/Twitter cards), canonical link.</li>
                    <li>Stylesheets and <code>&lt;style&gt;</code> blocks.</li>
                    <li>Icons/favicons, manifest, theme-color.</li>
                    <li>Script tags with <code>defer</code>/<code>async</code> (or module scripts).</li>
                    <li>Resource hints: <code>preconnect</code>, <code>dns-prefetch</code>, <code>preload</code> (use judiciously).</li>
                </ul>
            </section>

            <section id="head-avoid">
                <h2>What to avoid in &lt;head&gt;</h2>
                <ul className="badges">
                    <li><span className="bad">Wrong</span> Visible content like <code>&lt;h1&gt;</code>, <code>&lt;p&gt;</code>, images, buttons.</li>
                    <li><span className="bad">Wrong</span> App markup roots (<code>&lt;main&gt;</code>, <code>&lt;div id="app"&gt;</code>) — belong in body.</li>
                    <li><span className="good">Good</span> Keep <code>&lt;head&gt;</code> focused on configuration and loading strategy.</li>
                </ul>
            </section>

            <section id="body-belongs">
                <h2>What belongs in &lt;body&gt;</h2>
                <ul className="bullets">
                    <li>All perceivable UI: content, forms, dialogs, navigation.</li>
                    <li>Analytics “noscript” pixel fallbacks (as needed) — keep minimal and respectful.</li>
                    <li>Progressive enhancement roots (your app’s <code>#root</code>/<code>#app</code> container).</li>
                </ul>
                <p className="note">Inline scripts inside <code>&lt;body&gt;</code> are allowed, but prefer <code>defer</code> in <code>&lt;head&gt;</code> for predictable ordering and performance.</p>
            </section>

            <section id="scripts">
                <h2>Scripts: defer vs async (quick guide)</h2>
                <div role="table" className="table">
                    <div role="row" className="thead">
                        <span role="columnheader">Type</span>
                        <span role="columnheader">When it runs</span>
                        <span role="columnheader">Order guaranteed?</span>
                        <span role="columnheader">Good for</span>
                    </div>
                    <div role="row">
                        <span><code>&lt;script defer&gt;</code></span>
                        <span>After parsing, before <code>DOMContentLoaded</code></span>
                        <span>Yes (document order)</span>
                        <span>App code needing DOM; multiple files in sequence</span>
                    </div>
                    <div role="row">
                        <span><code>&lt;script async&gt;</code></span>
                        <span>As soon as loaded (may be before parse ends)</span>
                        <span>No</span>
                        <span>Independent scripts (analytics, widgets)</span>
                    </div>
                    <div role="row">
                        <span><code>&lt;script type="module"&gt;</code></span>
                        <span>Deferred by default</span>
                        <span>ESM handles imports</span>
                        <span>Modern modular code</span>
                    </div>
                </div>
                <p className="note">Avoid blocking scripts without <code>defer</code>/<code>async</code> — they halt HTML parsing and delay rendering.</p>
            </section>

            <section id="links">
                <h2>Useful <code>&lt;link&gt;</code> rel values (at a glance)</h2>
                <ul className="bullets">
                    <li><code>stylesheet</code> — load CSS: <code>&lt;link rel="stylesheet" href="…"&gt;</code></li>
                    <li><code>icon</code>/<code>apple-touch-icon</code> — favicons and touch icons.</li>
                    <li><code>preconnect</code> — warm up a connection to another origin.</li>
                    <li><code>preload</code> — fetch a critical resource early (must also be used normally later).</li>
                    <li><code>canonical</code> — preferred URL for the page.</li>
                    <li><code>manifest</code> — PWA manifest.</li>
                </ul>
            </section>

            <section id="base-noscript">
                <h2>&lt;base&gt; and &lt;noscript&gt;</h2>
                <div className="grid2">
                    <div className="card">
                        <h3>&lt;base&gt;</h3>
                        <p>Sets a base URL for resolving relative links in the document.</p>
                        <Styled.Code role="region" aria-label="base example">
                            <pre>{String.raw`<head>
  <base href="https://example.com/docs/">
  <link rel="stylesheet" href="assets/site.css"> <!-- resolves to /docs/assets/site.css -->
</head>`}</pre>
                        </Styled.Code>
                        <p className="note">Only one <code>&lt;base&gt;</code> allowed; it affects all relative URLs (links, images, scripts, CSS).</p>
                    </div>
                    <div className="card">
                        <h3>&lt;noscript&gt;</h3>
                        <p>Fallback content for when scripting is disabled.</p>
                        <Styled.Code role="region" aria-label="noscript example">
                            <pre>{String.raw`<noscript>
  <p>Please enable JavaScript for the full experience.</p>
</noscript>`}</pre>
                        </Styled.Code>
                        <p className="note">Keep it concise and helpful. Don’t duplicate entire apps here.</p>
                    </div>
                </div>
            </section>

            {/* LAST: Monaco playground */}
            <section id="play">
                <h2>Try it live</h2>
                <p className="lede">
                    Edit the skeleton: move elements between head/body and observe what’s valid. Try
                    swapping <code>defer</code>/<code>async</code>, add a stylesheet link, or test a <code>&lt;base&gt;</code>.
                    Your code autosaves for this lesson.
                </p>
                <HtmlPlayground
                    storageKey="core-html:skeleton:head-vs-body:v1"
                    initialHtml={STARTER_HTML}
                    height={640}
                />
            </section>

            {/* Prev + Next */}
            <nav className="nextPrev" aria-label="Lesson navigation">
                <NavLink to="/foundations/content-categories" className="prev" aria-label="Go to Content Categories">
                    ← Content Categories
                </NavLink>
                <NavLink to="/skeleton/boilerplate-order" className="next" aria-label="Go to Boilerplate order">
                    Next: Boilerplate order →
                </NavLink>
            </nav>

            <div className="backTop"><a href="#top">Back to top ↑</a></div>
        </Styled.Page>
    );
}
