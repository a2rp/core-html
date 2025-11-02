import React, { useEffect } from "react";
import { Styled } from "./styled";
import { NavLink } from "react-router-dom";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";

/**
 * <ul>, <ol>, <li> semantics (core lists)
 * - Mental model (unordered vs ordered)
 * - Anatomy of a list (parent + items)
 * - Ordered list attributes (start, reversed, type, li[value])
 * - Nesting lists (sub-lists inside li)
 * - Marker styling (::marker, list-style)
 * - Accessibility & common patterns (nav lists, ARIA list role)
 * - Pitfalls (layout tables, fake lists with <br>, bullets removed for aesthetics)
 * - Monaco playground LAST
 */

const STARTER_HTML = String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>&lt;ul&gt;, &lt;ol&gt;, &lt;li&gt; — core lists</title>
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
      .ex { border:1px dashed #aaa; padding:8px; border-radius:10px; margin-top:6px; }
      code { background: #f5f5f5; padding:0 6px; border-radius:6px; }
      .two { display:grid; grid-template-columns: 1fr 1fr; gap:12px; }
      @media (max-width: 900px) { .two { grid-template-columns: 1fr; } }
      .tight { line-height: 1.4; }
      .demo-roman { list-style: lower-roman; }
      .demo-inside { list-style-position: inside; background:#f7f7f7; padding:8px; border-radius:8px; }
      .custom-marker li::marker { content: "→ "; }
    </style>
  </head>
  <body>
    <main class="grid">
      <header>
        <h1>Core lists: <code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code>, <code>&lt;li&gt;</code></h1>
        <p class="muted">Lists represent a set of related items. Use <code>&lt;ul&gt;</code> when order doesn’t matter, and <code>&lt;ol&gt;</code> when order or step numbers do.</p>
      </header>

      <section class="card good">
        <h2>Good: semantic unordered list</h2>
        <p>Items with no intrinsic order → <code>&lt;ul&gt;</code>.</p>
        <div class="ex">
          <ul>
            <li>Apples</li>
            <li>Bananas</li>
            <li>Cherries</li>
          </ul>
        </div>
      </section>

      <section class="card good">
        <h2>Good: ordered steps</h2>
        <p>Where sequence matters → <code>&lt;ol&gt;</code>.</p>
        <div class="ex">
          <ol>
            <li>Preheat oven to 180°C</li>
            <li>Mix batter</li>
            <li>Bake for 25 minutes</li>
          </ol>
        </div>
      </section>

      <section class="card">
        <h2>Ordered attributes</h2>
        <div class="two">
          <div class="ex">
            <h3>start + type</h3>
            <ol start="3" type="A" class="tight">
              <li>Alpha (3)</li>
              <li>Bravo (4)</li>
              <li>Charlie (5)</li>
            </ol>
          </div>
          <div class="ex">
            <h3>reversed + li[value]</h3>
            <ol reversed class="tight">
              <li>Three (3)</li>
              <li value="1">Forced One (1)</li>
              <li>Zero (0)</li>
            </ol>
          </div>
        </div>
      </section>

      <section class="card">
        <h2>Nesting (sub-lists inside <code>&lt;li&gt;</code>)</h2>
        <div class="ex">
          <ul>
            <li>Frontend
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
              </ul>
            </li>
            <li>Backend
              <ol class="demo-roman">
                <li>Node</li>
                <li>Python</li>
              </ol>
            </li>
          </ul>
        </div>
      </section>

      <section class="card">
        <h2>Styling markers</h2>
        <div class="two">
          <div class="ex">
            <h3>list-style-position</h3>
            <ul class="demo-inside tight">
              <li>Inside places bullets within the content box.</li>
              <li>Useful for narrow sidebars.</li>
            </ul>
          </div>
          <div class="ex">
            <h3>::marker</h3>
            <ul class="custom-marker tight">
              <li>Custom arrow marker</li>
              <li>Keep it minimal</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="card">
        <h2>Navigation pattern</h2>
        <p>Menus are often <code>&lt;nav&gt;</code> + <code>&lt;ul&gt;</code> with inline list items.</p>
        <div class="ex">
          <nav aria-label="Main">
            <ul style="display:flex; gap:12px; list-style:none; padding:0; margin:0;">
              <li><a href="#">Home</a></li>
              <li><a href="#">Docs</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </nav>
        </div>
      </section>

      <section class="card bad">
        <h2>Bad: fake lists</h2>
        <p>Don’t fake lists with line breaks or paragraphs. Screen readers lose structure.</p>
        <div class="ex">
          <!-- ❌ wrong -->
          <p>- Apples<br>- Bananas<br>- Cherries</p>
        </div>
      </section>

      <footer class="muted">
        Tip: If readers must follow a sequence, choose <code>&lt;ol&gt;</code>. If order is incidental, choose <code>&lt;ul&gt;</code>.
      </footer>
    </main>
  </body>
</html>`;

export default function UlOlLi() {
    useEffect(() => {
        document.title = "Lists · <ul>, <ol>, <li> semantics";
    }, []);

    return (
        <Styled.Page>
            <header className="pageHeader" id="top">
                <h1>
                    <code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code>, <code>&lt;li&gt;</code> semantics
                </h1>
                <p className="lede">
                    Lists represent related items. Use an unordered list when order is irrelevant, and an ordered
                    list when sequence communicates meaning (steps, rankings, chronology).
                </p>
            </header>

            <nav className="toc" aria-label="On this page">
                <a href="#model">Mental model</a>
                <a href="#anatomy">Anatomy</a>
                <a href="#ordered">Ordered options</a>
                <a href="#nesting">Nesting</a>
                <a href="#markers">Markers & styling</a>
                <a href="#a11y">Accessibility</a>
                <a href="#pitfalls">Pitfalls</a>
                <a href="#faq">FAQ</a>
                <a href="#play">Playground</a>
            </nav>

            <section id="model">
                <h2>Mental model</h2>
                <div className="card">
                    <ul className="bullets">
                        <li><strong>Unordered list</strong> (<code>ul</code>) is for sets where sequence doesn’t matter.</li>
                        <li><strong>Ordered list</strong> (<code>ol</code>) is for steps, ranking, or time-based flows.</li>
                        <li><strong>Item</strong> (<code>li</code>) is the atomic child of either list type.</li>
                    </ul>
                </div>
            </section>

            <section id="anatomy">
                <h2>Anatomy</h2>
                <Styled.Code>
                    <pre>{String.raw`<ul>
  <li>Item A</li>
  <li>Item B</li>
  <li>Item C</li>
</ul>

<ol>
  <li>Step 1</li>
  <li>Step 2</li>
  <li>Step 3</li>
</ol>`}</pre>
                </Styled.Code>
                <p className="note">
                    Only <code>li</code> elements belong directly under <code>ul</code>/<code>ol</code>. Sub-lists must be nested
                    inside a parent <code>li</code>, not as siblings to it.
                </p>
            </section>

            <section id="ordered">
                <h2>Ordered options</h2>
                <div className="grid2">
                    <div className="card">
                        <h3>Attributes</h3>
                        <ul className="bullets">
                            <li><code>start</code>: first number to display.</li>
                            <li><code>reversed</code>: descending order.</li>
                            <li><code>type</code>: preset numbering style (<code>1</code>, <code>a</code>, <code>A</code>, <code>i</code>, <code>I</code>).</li>
                            <li><code>li[value]</code>: override the ordinal for a specific item.</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h3>Example</h3>
                        <Styled.Code>
                            <pre>{String.raw`<ol start="10" reversed type="I">
  <li>Ten</li>
  <li value="3">Three</li>
  <li>Two</li>
</ol>`}</pre>
                        </Styled.Code>
                    </div>
                </div>
            </section>

            <section id="nesting">
                <h2>Nesting</h2>
                <Styled.Code>
                    <pre>{String.raw`<ul>
  <li>Languages
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JS</li>
    </ul>
  </li>
  <li>Tools
    <ol type="a">
      <li>Vite</li>
      <li>Webpack</li>
    </ol>
  </li>
</ul>`}</pre>
                </Styled.Code>
                <p className="note">Nest the child list inside the relevant <code>li</code> to keep semantics intact.</p>
            </section>

            <section id="markers">
                <h2>Markers & styling</h2>
                <div className="grid2">
                    <div className="card">
                        <h3>CSS list-style</h3>
                        <Styled.Code>
                            <pre>{String.raw`ul { list-style: disc; }
ol { list-style: decimal; }
ul.square { list-style: square; }
ol.roman { list-style: upper-roman; }`}</pre>
                        </Styled.Code>
                        <p className="note">
                            Removing bullets (<code>list-style: none</code>) is fine for components like menus—just keep the semantics and keyboard focus intact.
                        </p>
                    </div>
                    <div className="card">
                        <h3>::marker</h3>
                        <Styled.Code>
                            <pre>{String.raw`li::marker { content: "• "; }
ol > li::marker { font-variant-numeric: tabular-nums; }`}</pre>
                        </Styled.Code>
                        <p className="note">
                            <code>::marker</code> targets the bullet/number glyph itself. Keep content minimal; it’s not a full layout box.
                        </p>
                    </div>
                </div>
            </section>

            <section id="a11y">
                <h2>Accessibility & patterns</h2>
                <ul className="badges">
                    <li><span className="good">Good</span> Use <code>nav</code> + <code>ul</code> for menus; items remain list items for screen readers.</li>
                    <li><span className="good">Good</span> Prefer real lists over “fake” line-broken text.</li>
                    <li><span className="good">Good</span> Use headings above lists to name groups.</li>
                </ul>
                <p className="note">
                    For custom controls that behave like lists but aren’t <code>ul/ol</code>, consider ARIA <code>role="list"</code> / <code>role="listitem"</code> carefully. Native HTML is usually better.
                </p>
            </section>

            <section id="pitfalls">
                <h2>Pitfalls</h2>
                <ul className="badges">
                    <li><span className="bad">Wrong</span> Sibling nested lists that aren’t inside a parent <code>li</code>.</li>
                    <li><span className="bad">Wrong</span> Using lists for grid layout (use CSS grid/flex).</li>
                    <li><span className="bad">Wrong</span> Faking bullets with hyphens and <code>&lt;br&gt;</code>s.</li>
                </ul>
            </section>

            <section id="faq">
                <h2>FAQ</h2>
                <details>
                    <summary>Can a list item contain block elements?</summary>
                    <div className="ans">
                        Yes. An <code>li</code> can contain flow content: paragraphs, nested lists, figures, etc.
                    </div>
                </details>
                <details>
                    <summary>Should I style numbers with CSS counters instead of <code>ol</code>?</summary>
                    <div className="ans">
                        Use real <code>ol</code> when the sequence matters. CSS counters are fine for decorative numbering in components, but they don’t carry the same semantics.
                    </div>
                </details>
            </section>

            {/* LAST: Monaco playground */}
            <section id="play">
                <h2>Try it live</h2>
                <p className="lede">
                    Convert fake lists into semantic ones, try <code>start</code>/<code>reversed</code>, and adjust markers with <code>::marker</code>.
                    Autosaves to this lesson.
                </p>
                <HtmlPlayground
                    storageKey="core-html:lists:ul-ol-li:v1"
                    initialHtml={STARTER_HTML}
                    height={640}
                />
            </section>

            {/* Prev + Next */}
            <nav className="nextPrev" aria-label="Lesson navigation">
                <NavLink to="/links/link-text-quality" className="prev" aria-label="Go to Link text quality">
                    ← Link text quality
                </NavLink>
                <NavLink to="/lists/nested-and-start-reversed" className="next" aria-label="Go to Nested, start/reversed">
                    Next: Nested, start/reversed →
                </NavLink>
            </nav>

            <div className="backTop"><a href="#top">Back to top ↑</a></div>
        </Styled.Page>
    );
}
