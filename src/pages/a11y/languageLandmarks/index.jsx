import React, { useEffect } from "react";
import { Styled } from "./styled";
import { NavLink } from "react-router-dom";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";

/**
 * A11y · Language & landmarks
 * - Why language matters (screen readers, hyphenation, speech rules)
 * - Set document language on <html lang>
 * - Inline language changes on elements
 * - Core landmarks: <main>, <header>, <nav>, <section>, <article>, <aside>, <footer>
 * - Name your <nav> when multiple exist (aria-label)
 * - Only one <main> visible; avoid nesting landmarks inside interactive controls
 * - Minimal patterns + pitfalls
 * - Try-it playground (Monaco)
 */

const STARTER_HTML = String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>a11y — language & landmarks</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui,-apple-system,Segoe UI,Roboto,sans-serif; }
      .grid { display: grid; gap: 14px; }
      .card { border: 1px solid #ccc; border-radius: 12px; padding: 12px; }
      .good { background: color-mix(in oklab, #16a34a, transparent 92%); border-color:#8ed09b; }
      .bad  { background: color-mix(in oklab, #dc2626, transparent 92%); border-color:#f2a6a6; }
      .muted { color: #6b7280; }
      .k { display:inline-block; border:1px solid #bbb; border-radius:999px; padding:2px 8px; font-size:12px; }
      .ex { border:1px dashed #aaa; padding:8px; border-radius:10px; margin-top:6px; }
      code { background: #f5f5f5; padding:0 6px; border-radius:6px; }
    </style>
  </head>
  <body>
    <header class="card">
      <h1>Language &amp; landmarks</h1>
      <p class="muted">Give assistive tech the right map (<strong>landmarks</strong>) and dictionary (<strong>lang</strong>).</p>
    </header>

    <main class="grid">
      <section class="card good">
        <h2>Set page language</h2>
        <p>Always declare the page language on <code>&lt;html&gt;</code>.</p>
        <div class="ex">
          <pre><code>&lt;html lang="en"&gt;</code></pre>
        </div>
      </section>

      <section class="card good">
        <h2>Inline language changes</h2>
        <p>Mark words/phrases in another language.</p>
        <div class="ex">
          <p>We say <span lang="fr">bonjour</span> and <span lang="hi">नमस्ते</span>.</p>
        </div>
      </section>

      <section class="card good">
        <h2>Core landmarks</h2>
        <ul>
          <li><code>&lt;header&gt;</code> top banner for a page/section</li>
          <li><code>&lt;nav&gt;</code> major navigation (name it if there are many)</li>
          <li><code>&lt;main&gt;</code> unique primary content (one per page)</li>
          <li><code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;aside&gt;</code> for structure</li>
          <li><code>&lt;footer&gt;</code> footer for page/section</li>
        </ul>
      </section>

      <section class="card bad">
        <h2>Common mistakes</h2>
        <ul>
          <li>No <code>lang</code> on <code>&lt;html&gt;</code> → wrong voice/pronunciation.</li>
          <li>Multiple visible <code>&lt;main&gt;</code> → confusing primary region.</li>
          <li>Multiple <code>&lt;nav&gt;</code> without names → hard to choose in screen reader rotor.</li>
        </ul>
      </section>

      <section class="card">
        <h2>Named navigation example</h2>
        <div class="ex">
          <nav aria-label="Primary">
            <a href="#home">Home</a> · <a href="#products">Products</a> · <a href="#contact">Contact</a>
          </nav>
          <aside>
            <nav aria-label="Breadcrumb">
              <a href="/">Home</a> › <a href="/products">Products</a> › <span>Widget</span>
            </nav>
          </aside>
        </div>
      </section>

      <section class="card">
        <h2>Role mapping (FYI)</h2>
        <p>Native elements already expose roles. Prefer them over ARIA:</p>
        <ul class="muted">
          <li><code>header</code> → banner (if not inside article/section)</li>
          <li><code>nav</code> → navigation</li>
          <li><code>main</code> → main</li>
          <li><code>aside</code> → complementary</li>
          <li><code>footer</code> → contentinfo (if not inside article/section)</li>
        </ul>
      </section>
    </main>

    <footer class="muted">
      Keep it simple: one <code>&lt;main&gt;</code>, named <code>&lt;nav&gt;</code>s when many, correct <code>lang</code>.
    </footer>
  </body>
</html>`;

export default function A11yLanguageLandmarks() {
    useEffect(() => {
        document.title = "A11y · Language & landmarks";
    }, []);

    return (
        <Styled.Page>
            <header className="pageHeader" id="top">
                <h1>Language &amp; landmarks</h1>
                <p className="lede">
                    Two quick wins for accessible HTML: set language correctly and use native landmarks.
                    This improves pronunciation, search, and keyboard navigation for assistive tech.
                </p>
            </header>

            <nav className="toc" aria-label="On this page">
                <a href="#why-lang">Why language matters</a>
                <a href="#page-lang">Set page language</a>
                <a href="#inline-lang">Inline language changes</a>
                <a href="#landmarks">Core landmarks</a>
                <a href="#naming-nav">Naming navigation</a>
                <a href="#pitfalls">Pitfalls</a>
                <a href="#play">Playground</a>
            </nav>

            <section id="why-lang">
                <h2>Why language matters</h2>
                <div className="card">
                    <ul className="bullets">
                        <li>Screen readers choose voices and pronunciation from <code>lang</code>.</li>
                        <li>Hyphenation, dictionary lookups, and spellcheck become more accurate.</li>
                        <li>Search and translation tools infer content language reliably.</li>
                    </ul>
                </div>
            </section>

            <section id="page-lang">
                <h2>Set page language on <code>&lt;html&gt;</code></h2>
                <Styled.Code role="region" aria-label="Page language example">
                    <pre>{String.raw`<!doctype html>
<html lang="en">`}</pre>
                </Styled.Code>
                <p className="note">
                    Use BCP 47 tags like <code>en</code>, <code>en-GB</code>, <code>hi</code>, <code>fr-CA</code>. One primary language per page.
                </p>
            </section>

            <section id="inline-lang">
                <h2>Inline language changes</h2>
                <p>For phrases in a different language, annotate the element carrying the words:</p>
                <Styled.Code role="region" aria-label="Inline language example">
                    <pre>{String.raw`<p>Try saying <span lang="fr">crème brûlée</span> and <span lang="hi">नमस्ते</span>.</p>`}</pre>
                </Styled.Code>
            </section>

            <section id="landmarks">
                <h2>Core landmarks</h2>
                <div className="grid2">
                    <div className="card">
                        <h3>Page-level</h3>
                        <ul className="bullets">
                            <li><code>&lt;header&gt;</code> – site/banner area (not inside article/section)</li>
                            <li><code>&lt;nav&gt;</code> – major navigation</li>
                            <li><code>&lt;main&gt;</code> – primary content (only one visible)</li>
                            <li><code>&lt;footer&gt;</code> – site footer (not inside article/section)</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h3>Content structure</h3>
                        <ul className="bullets">
                            <li><code>&lt;section&gt;</code> – thematic group (usually titled)</li>
                            <li><code>&lt;article&gt;</code> – standalone item (post, card)</li>
                            <li><code>&lt;aside&gt;</code> – complementary content</li>
                        </ul>
                    </div>
                </div>
                <p className="note">
                    Use native elements first. Add ARIA roles only when no native matches your intent.
                </p>
            </section>

            <section id="naming-nav">
                <h2>Name your navigations</h2>
                <p>When you have more than one <code>&lt;nav&gt;</code>, give each an accessible name.</p>
                <Styled.Code role="region" aria-label="Named nav examples">
                    <pre>{String.raw`<nav aria-label="Primary">…</nav>
<nav aria-label="Footer">…</nav>
<aside>
  <nav aria-label="Breadcrumb">…</nav>
</aside>`}</pre>
                </Styled.Code>
            </section>

            <section id="pitfalls">
                <h2>Pitfalls</h2>
                <ul className="badges">
                    <li><span className="bad">Wrong</span> Missing <code>lang</code> on <code>&lt;html&gt;</code>.</li>
                    <li><span className="bad">Wrong</span> Two <code>&lt;main&gt;</code> regions on one page.</li>
                    <li><span className="good">Good</span> Multiple <code>&lt;nav&gt;</code> with clear labels.</li>
                    <li><span className="good">Good</span> Use native landmarks; add ARIA only if necessary.</li>
                </ul>
            </section>

            {/* LAST: Monaco playground */}
            <section id="play">
                <h2>Try it live</h2>
                <p className="lede">
                    Add <code>lang</code> to <code>&lt;html&gt;</code>, mark inline language changes, ensure a single <code>&lt;main&gt;</code>,
                    and name your navigations. Autosaves to this lesson.
                </p>
                <HtmlPlayground
                    storageKey="core-html:a11y:language-landmarks:v1"
                    initialHtml={STARTER_HTML}
                    height={640}
                />
            </section>

            {/* Prev + Next */}
            <nav className="nextPrev" aria-label="Lesson navigation">
                <NavLink
                    to="/images-perf/fetchpriority-note"
                    className="prev"
                    aria-label="Go to fetchpriority (concept)"
                >
                    ← fetchpriority (concept)
                </NavLink>
                <NavLink
                    to="/a11y/form-labels-errors"
                    className="next"
                    aria-label="Go to Form labels & errors"
                >
                    Next: Form labels &amp; errors →
                </NavLink>
            </nav>

            <div className="backTop"><a href="#top">Back to top ↑</a></div>
        </Styled.Page>
    );
}
