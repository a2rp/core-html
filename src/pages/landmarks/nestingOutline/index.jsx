import React, { useEffect } from "react";
import { Styled } from "./styled";
import { NavLink } from "react-router-dom";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";

/**
 * Nesting & heading outline
 * - Mental model: sectioning elements create outline contexts
 * - Valid nesting: header/main/nav/section/article/aside/footer
 * - Headings: one logical H1 per page (practical), H2–H6 reflect depth
 * - Don’t “style the outline”: structure first; CSS later
 * - Common pitfalls and fixes
 * - Monaco playground LAST
 */

const STARTER_HTML = String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Nesting & heading outline — demo</title>
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
      h2 small { font-weight: normal; color: #6b7280; }
      code { background: #f5f5f5; padding:0 6px; border-radius:6px; }
      .ex { border:1px dashed #aaa; padding:8px; border-radius:10px; margin-top:6px; }
      .two { display:grid; grid-template-columns: 1fr 1fr; gap:14px; }
      @media (max-width: 900px) { .two { grid-template-columns: 1fr; } }
    </style>
  </head>
  <body>
    <main class="grid" id="top">
      <header>
        <h1>Nesting & heading outline</h1>
        <p class="muted">Sectioning creates structure; headings label that structure.</p>
      </header>

      <!-- ✅ Good outline -->
      <section class="card good">
        <h2>Good outline <small>(sectioning with clear headings)</small></h2>
        <div class="ex">
          <header>
            <h1>Site Title</h1>
            <nav aria-label="Primary">
              <ul><li><a href="#">Home</a></li><li><a href="#">Blog</a></li></ul>
            </nav>
          </header>

          <main id="content">
            <article>
              <header>
                <h2>Post title</h2>
                <p class="muted">By Sam • 2025-11-02</p>
              </header>
              <section>
                <h3>Introduction</h3>
                <p>Why this topic matters…</p>
              </section>
              <section>
                <h3>Results</h3>
                <p>What we found…</p>
              </section>
              <footer>
                <p>Tags: HTML, semantics</p>
              </footer>
            </article>
          </main>

          <footer>
            <p>© 2025 Demo</p>
          </footer>
        </div>
      </section>

      <!-- ❌ Bad outline -->
      <section class="card bad">
        <h2>Bad outline <small>(skips levels + meaningless wrappers)</small></h2>
        <div class="ex two">
          <div>
            <h4>Jumped heading level</h4>
            <p>Starting at <code>&lt;h4&gt;</code> without a higher-level context confuses the structure.</p>
            <div class="ex">
              <!-- bad -->
              <div class="post">
                <h4>My Blog</h4> <!-- ❌ should be the page/brand title (h1) or section title (h2) -->
                <div class="wrap">
                  <h4>Intro</h4>  <!-- ❌ jumping / repeating same level for nested sections -->
                </div>
              </div>
            </div>
          </div>
          <div>
            <h4>Headings used for style</h4>
            <p>Using <code>h2</code> “because it’s big” without section meaning.</p>
            <div class="ex">
              <!-- bad -->
              <section>
                <div class="big"> <!-- ❌ style-only wrapper -->
                  <h2 class="big-text">Large text but no section meaning</h2>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <section class="card">
        <h2>Fixes</h2>
        <ol>
          <li>Use one logical <code>&lt;h1&gt;</code> per page (usually site or page title).</li>
          <li>Within each section/article, start its heading at the next level (commonly <code>h2</code>), then descend (<code>h3</code>, <code>h4</code>…).</li>
          <li>Don’t pick heading levels for size—pick for structure; style with CSS.</li>
        </ol>
      </section>

      <footer class="muted">
        Tip: If a block deserves a heading, it probably deserves a sectioning element (<code>section</code> / <code>article</code>).
      </footer>
    </main>
  </body>
</html>`;

export default function NestingOutline() {
    useEffect(() => {
        document.title = "Landmarks · Nesting & heading outline";
    }, []);

    return (
        <Styled.Page>
            <header className="pageHeader" id="top">
                <h1>Nesting & heading outline</h1>
                <p className="lede">
                    Sectioning elements create the skeleton of the page. Headings label each part so humans and assistive
                    tech can navigate the structure. Choose heading levels for meaning, not size.
                </p>
            </header>

            <nav className="toc" aria-label="On this page">
                <a href="#model">Mental model</a>
                <a href="#rules">Outline rules</a>
                <a href="#nesting">Valid nesting</a>
                <a href="#pitfalls">Pitfalls</a>
                <a href="#faq">FAQ</a>
                <a href="#play">Playground</a>
            </nav>

            <section id="model">
                <h2>Mental model</h2>
                <div className="card">
                    <ul className="bullets">
                        <li><strong>Sectioning</strong> elements (<code>main</code>, <code>section</code>, <code>article</code>, <code>aside</code>, <code>nav</code>) define the document parts.</li>
                        <li><strong>Headings</strong> (<code>h1</code>…<code>h6</code>) name those parts and reflect depth.</li>
                        <li>Pick levels top-down: page <code>h1</code> → major sections <code>h2</code> → subsections <code>h3</code>, and so on.</li>
                    </ul>
                </div>
            </section>

            <section id="rules">
                <h2>Outline rules</h2>
                <div className="grid2">
                    <div className="card">
                        <h3>Headings</h3>
                        <ul className="bullets">
                            <li>Use one logical <code>h1</code> per document.</li>
                            <li>Don’t skip levels when descending: <code>h2</code> → <code>h3</code> → <code>h4</code>.</li>
                            <li>It’s fine to go back up when you exit a subsection.</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h3>Sectioning</h3>
                        <ul className="bullets">
                            <li><code>header</code>/<code>footer</code> are contextual; they don’t change outline depth.</li>
                            <li>Use <code>article</code> for self-contained units (blog post, card that stands alone).</li>
                            <li>Use <code>section</code> for thematic groups inside a page or article.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="nesting">
                <h2>Valid nesting</h2>
                <Styled.Code role="region" aria-label="Valid nesting example">
                    <pre>{String.raw`<header>
  <h1>Site title</h1>
  <nav aria-label="Primary">…</nav>
</header>

<main id="content">
  <section>
    <h2>Overview</h2>
    <p>Summary…</p>
  </section>

  <article>
    <h2>Case study</h2>
    <section>
      <h3>Background</h3>
      <p>Context…</p>
    </section>
    <section>
      <h3>Outcome</h3>
      <p>Results…</p>
    </section>
  </article>
</main>

<footer>© 2025</footer>`}</pre>
                </Styled.Code>
            </section>

            <section id="pitfalls">
                <h2>Pitfalls</h2>
                <ul className="badges">
                    <li><span className="bad">Wrong</span> Picking <code>h4</code> because it “looks right.”</li>
                    <li><span className="bad">Wrong</span> Deep nesting of anonymous <code>div</code> wrappers.</li>
                    <li><span className="good">Good</span> Use CSS to style; keep semantic outline clean.</li>
                </ul>
            </section>

            <section id="faq">
                <h2>FAQ</h2>
                <details>
                    <summary>Can I use multiple h1 elements?</summary>
                    <div className="ans">Technically allowed inside separate sectioning contexts, but a single document-level <code>h1</code> is the most practical and widely supported pattern.</div>
                </details>
                <details>
                    <summary>Do header/footer change the outline?</summary>
                    <div className="ans">No. They provide context within their nearest section/article/body but don’t alter heading levels.</div>
                </details>
            </section>

            {/* LAST: Monaco playground */}
            <section id="play">
                <h2>Try it live</h2>
                <p className="lede">
                    Fix heading levels, convert style-only wrappers to semantic sections, and ensure each section has a clear heading.
                    Autosaves to this lesson.
                </p>
                <HtmlPlayground
                    storageKey="core-html:landmarks:nesting-outline:v1"
                    initialHtml={STARTER_HTML}
                    height={700}
                />
            </section>

            {/* Prev + Next */}
            <nav className="nextPrev" aria-label="Lesson navigation">
                <NavLink to="/landmarks/section-vs-div" className="prev" aria-label="Go to Section vs Div">
                    ← When to use &lt;section&gt; vs &lt;div&gt;
                </NavLink>
                <NavLink to="/headings/h1-h6-hierarchy" className="next" aria-label="Go to H1–H6 hierarchy">
                    Next: H1–H6 hierarchy →
                </NavLink>
            </nav>

            <div className="backTop"><a href="#top">Back to top ↑</a></div>
        </Styled.Page>
    );
}
