import React, { useEffect } from "react";
import { Styled } from "./styled";
import { NavLink } from "react-router-dom";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";

/**
 * Core Landmarks — Structure & a11y
 * Covers:
 * - Landmark elements: <main>, <header>, <nav>, <section>, <article>, <aside>, <footer>
 * - When to use each; how many per page; nesting rules & scopes
 * - Skip link pattern; multiple <header>/<footer> in sections
 * - ARIA landmark roles (mapping; when NOT to add roles)
 * - Mini FAQ + pitfalls
 * - Monaco playground LAST
 */

const STARTER_HTML = String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Core Landmarks — demo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; font: 14px/1.6 system-ui,-apple-system,Segoe UI,Roboto,sans-serif; }
      a { color: #0ea5e9; }
      .skip { position:absolute; left:-9999px; top:auto; width:1px; height:1px; overflow:hidden; }
      .skip:focus { position:static; width:auto; height:auto; padding:8px 12px; display:inline-block; background:#0ea5e9; color:#fff; border-radius:8px; margin:8px; }
      header.site { display:flex; gap:12px; align-items:center; padding:12px 16px; border-bottom:1px solid #ddd; }
      nav.primary a { margin-right:10px; text-decoration:none; }
      main { padding:16px; display:grid; gap:16px; grid-template-columns: 1fr 280px; }
      @media (max-width: 900px){ main { grid-template-columns: 1fr; } }
      .card { border:1px solid #ccc; border-radius:10px; padding:12px; }
      aside { background: color-mix(in oklab, #0ea5e9, transparent 92%); border:1px solid #9ccff3; border-radius:10px; padding:12px; }
      footer.site { margin-top:20px; padding:12px 16px; border-top:1px solid #ddd; font-size:12px; color:#6b7280; }
      .articleHead { font-size:13px; color:#6b7280; margin:0 0 6px; }
    </style>
  </head>
  <body>
    <a class="skip" href="#main">Skip to main content</a>

    <header class="site">
      <strong>Brand</strong>
      <nav class="primary" aria-label="Primary">
        <a href="#">Home</a>
        <a href="#">Docs</a>
        <a href="#">Blog</a>
      </nav>
      <!-- search could be here -->
    </header>

    <main id="main">
      <article class="card">
        <header>
          <p class="articleHead">Article header (local)</p>
          <h1>Landmarks keep structure discoverable</h1>
        </header>

        <section class="card">
          <h2>Section inside the article</h2>
          <p>Use <code>&lt;section&gt;</code> for thematic grouping with a heading.</p>
        </section>

        <footer>
          <p class="articleHead">Article footer (meta)</p>
        </footer>
      </article>

      <aside aria-label="On this page">
        <h2>On this page</h2>
        <ul>
          <li><a href="#">Intro</a></li>
          <li><a href="#">Section</a></li>
          <li><a href="#">FAQ</a></li>
        </ul>
      </aside>
    </main>

    <footer class="site">
      <p>© 2025 Brand — global footer at the end of the document</p>
    </footer>
  </body>
</html>`;

export default function CoreLandmarks() {
    useEffect(() => {
        document.title = "Landmarks · Core landmarks & structure";
    }, []);

    return (
        <Styled.Page>
            <header className="pageHeader" id="top">
                <h1>Core landmarks</h1>
                <p className="lede">
                    Use semantic landmarks to make structure obvious to users, screen readers, and tools:
                    <code>&lt;main&gt;</code>, <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>,
                    <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;aside&gt;</code>, <code>&lt;footer&gt;</code>.
                </p>
            </header>

            <nav className="toc" aria-label="On this page">
                <a href="#map">Landmark map</a>
                <a href="#usage">Usage rules</a>
                <a href="#roles">ARIA roles</a>
                <a href="#skip">Skip link</a>
                <a href="#pitfalls">Pitfalls</a>
                <a href="#faq">FAQ</a>
                <a href="#play">Playground</a>
            </nav>

            <section id="map">
                <h2>Landmark map (quick reference)</h2>
                <div role="table" className="table">
                    <div role="row" className="thead">
                        <span role="columnheader">Element</span>
                        <span role="columnheader">Meaning</span>
                        <span role="columnheader">Count</span>
                        <span role="columnheader">Notes</span>
                    </div>

                    <div role="row">
                        <span><code>header</code></span>
                        <span>Introductory content for page or section</span>
                        <span>Many</span>
                        <span>Allowed inside <em>most</em> sectioning content; not inside <code>footer</code> or <code>address</code>.</span>
                    </div>
                    <div role="row">
                        <span><code>nav</code></span>
                        <span>Major navigation links</span>
                        <span>Few</span>
                        <span>Prefer one “Primary” nav; label others with <code>aria-label</code>.</span>
                    </div>
                    <div role="row">
                        <span><code>main</code></span>
                        <span>Main content unique to page</span>
                        <span>One</span>
                        <span>Exactly one per page; do not nest inside article/section.</span>
                    </div>
                    <div role="row">
                        <span><code>section</code></span>
                        <span>Thematic grouping with heading</span>
                        <span>Many</span>
                        <span>Needs an accessible name (usually a heading).</span>
                    </div>
                    <div role="row">
                        <span><code>article</code></span>
                        <span>Self-contained composition (can be syndicated)</span>
                        <span>Many</span>
                        <span>Comments, cards, posts, docs; can nest articles.</span>
                    </div>
                    <div role="row">
                        <span><code>aside</code></span>
                        <span>Tangential content</span>
                        <span>Few</span>
                        <span>Use for sidebars, callouts, related links.</span>
                    </div>
                    <div role="row">
                        <span><code>footer</code></span>
                        <span>End matter for page or section</span>
                        <span>Many</span>
                        <span>Legal, author, related links. Allowed in sections and articles too.</span>
                    </div>
                </div>
                <p className="note">Landmarks are about structure and navigation — they don’t dictate visual layout.</p>
            </section>

            <section id="usage">
                <h2>Usage rules &amp; patterns</h2>
                <div className="grid2">
                    <div className="card">
                        <h3>One <code>main</code></h3>
                        <ul className="bullets">
                            <li>Exactly one per document; unique to the page.</li>
                            <li>Place a “Skip to main” link that targets it.</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h3><code>header</code>/<code>footer</code></h3>
                        <ul className="bullets">
                            <li>Can be global or local (inside section/article).</li>
                            <li>Use local headers/footers for per-section intros/meta.</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h3><code>nav</code> landmarks</h3>
                        <ul className="bullets">
                            <li>Label non-primary navigations: <code>aria-label="Breadcrumb"</code>.</li>
                            <li>Don’t wrap every list in <code>nav</code>; only major navigation blocks.</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h3><code>section</code> vs grouping</h3>
                        <ul className="bullets">
                            <li>Use <code>section</code> if you’d name it in a TOC; otherwise <code>div</code> is fine.</li>
                            <li>Every <code>section</code> needs a heading (visible or off-screen).</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="roles">
                <h2>ARIA roles (mapping)</h2>
                <Styled.Code role="region" aria-label="Role mapping">
                    <pre>{String.raw`header (page-level) → banner
nav → navigation
main → main
footer (page-level) → contentinfo
aside → complementary
form (top-level) → form
search landmark → role="search"`}</pre>
                </Styled.Code>
                <p className="note">
                    Native landmarks already expose roles. <strong>Do not add redundant roles</strong> unless needed to disambiguate.
                </p>
            </section>

            <section id="skip">
                <h2>Skip link pattern</h2>
                <Styled.Code role="region" aria-label="Skip link">
                    <pre>{String.raw`<a class="skip" href="#main">Skip to main content</a>
<main id="main">…</main>`}</pre>
                </Styled.Code>
                <ul className="bullets">
                    <li>Place as the first focusable item in the document.</li>
                    <li>Reveal on focus via CSS; keep it keyboard-discoverable.</li>
                </ul>
            </section>

            <section id="pitfalls">
                <h2>Pitfalls</h2>
                <ul className="badges">
                    <li><span className="bad">Wrong</span> Multiple <code>main</code> elements.</li>
                    <li><span className="bad">Wrong</span> Using <code>nav</code> for any list of links.</li>
                    <li><span className="bad">Wrong</span> <code>section</code> with no heading.</li>
                    <li><span className="good">Good</span> Clear, labeled structure + skip link.</li>
                </ul>
            </section>

            <section id="faq">
                <h2>FAQ</h2>
                <details>
                    <summary>Can a page have multiple <code>header</code>s?</summary>
                    <div className="ans">Yes — one global site header and local headers inside sections/articles.</div>
                </details>
                <details>
                    <summary>Should I add roles to every landmark?</summary>
                    <div className="ans">No. Native semantics are enough. Add roles only to clarify scope/labels.</div>
                </details>
            </section>

            {/* LAST: Monaco playground */}
            <section id="play">
                <h2>Try it live</h2>
                <p className="lede">
                    Edit the landmarks, add local headers/footers, label navigations, and try a working skip link.
                    Your code autosaves for this lesson.
                </p>
                <HtmlPlayground
                    storageKey="core-html:landmarks:core-landmarks:v1"
                    initialHtml={STARTER_HTML}
                    height={650}
                />
            </section>

            {/* Prev + Next */}
            <nav className="nextPrev" aria-label="Lesson navigation">
                <NavLink to="/skeleton/scripts-styles-placement" className="prev" aria-label="Go to Scripts/styles placement">
                    ← Scripts/styles placement
                </NavLink>
                <NavLink to="/landmarks/section-vs-div" className="next" aria-label="Go to When to use section vs div">
                    Next: When to use &lt;section&gt; vs &lt;div&gt; →
                </NavLink>
            </nav>

            <div className="backTop"><a href="#top">Back to top ↑</a></div>
        </Styled.Page>
    );
}
