import React, { useEffect } from "react";
import { Styled } from "./styled";
import { NavLink } from "react-router-dom";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";

/**
 * Definition lists (<dl>, <dt>, <dd>)
 * - When to use them (true term–definition / name–value pairs)
 * - Valid anatomy (direct children are dt and dd only)
 * - Grouping rules (one or more <dt> followed by one or more <dd>)
 * - Multiple terms sharing one definition and vice-versa
 * - Marking up glossaries, property sheets, FAQs (careful), key–value UI
 * - A11y notes and common pitfalls
 * - Live playground (last)
 */

const STARTER_HTML = String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Definition lists — demo</title>
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
      dl { margin: 0; }
      dl.compact dt { font-weight: 600; }
      dl.compact dd { margin: 0 0 8px 0; }
      .props dt { float: left; min-width: 160px; font-weight: 600; }
      .props dd { margin-left: 160px; }
      .props::after { content: ""; display: table; clear: both; }
    </style>
  </head>
  <body>
    <main class="grid">
      <header>
        <h1>Definition lists (<code>&lt;dl&gt;</code>)</h1>
        <p class="muted">Use for term–definition or name–value pairs. Children must be <code>&lt;dt&gt;</code> and <code>&lt;dd&gt;</code> only.</p>
      </header>

      <section class="card good">
        <h2>Glossary</h2>
        <div class="ex">
          <dl class="compact">
            <dt>ARIA</dt>
            <dd>Accessible Rich Internet Applications, a set of attributes for better accessibility.</dd>

            <dt>CLS</dt>
            <dd>Cumulative Layout Shift; a Core Web Vitals metric.</dd>
          </dl>
        </div>
      </section>

      <section class="card good">
        <h2>Property sheet (name–value pairs)</h2>
        <p>Multiple terms can share one definition, or one term can have multiple definitions.</p>
        <div class="ex">
          <dl class="props">
            <dt>Author</dt><dd>Jane Doe</dd>
            <dt>License</dt><dd>MIT</dd>
            <dt>Tags</dt>
            <dd>HTML, Semantics</dd>
            <dd>Accessibility</dd>
            <dt>Aliases</dt>
            <dt>Also known as</dt>
            <dd>Definition list, Desc list</dd>
          </dl>
        </div>
      </section>

      <section class="card bad">
        <h2>Don’t use for layout-only grids</h2>
        <p>Using <code>&lt;dl&gt;</code> to fake two-column layout without true term–definition meaning is misleading.</p>
        <div class="ex">
          <!-- Wrong: divs inside dl, and no real term–definition relationship -->
          <dl>
            <div>Left column</div>
            <div>Right column</div>
          </dl>
        </div>
      </section>

      <section class="card bad">
        <h2>Invalid children</h2>
        <p>Only <code>&lt;dt&gt;</code> or <code>&lt;dd&gt;</code> may be direct children of <code>&lt;dl&gt;</code>.</p>
        <div class="ex">
          <dl>
            <!-- ⚠ invalid: p as a direct child -->
            <p>This is invalid</p>
          </dl>
        </div>
      </section>

      <section class="card">
        <h2>FAQs: sometimes okay, sometimes not</h2>
        <p>
          If each question (term) has exactly one answer (definition), a <code>&lt;dl&gt;</code> can be fine.
          If it’s more like a list of expandable panels, consider <code>&lt;section&gt;</code> + headings or
          <code>&lt;details&gt;</code>/<code>&lt;summary&gt;</code>.
        </p>
        <div class="ex">
          <dl class="compact">
            <dt>Can I use dl for FAQs?</dt>
            <dd>Yes, when it’s truly question → answer pairs.</dd>
            <dt>What if answers are long and structured?</dt>
            <dd>You can include paragraphs, lists, or even figures inside <code>dd</code>.</dd>
          </dl>
        </div>
      </section>

      <footer class="muted">
        Tips:
        <span class="k">dt</span> term → <span class="k">dd</span> definition.
        Valid pattern is one-or-more <code>dt</code> followed by one-or-more <code>dd</code>.
        Direct children only.
      </footer>
    </main>
  </body>
</html>`;

export default function DlDtDd() {
    useEffect(() => {
        document.title = "Lists · Definition lists (<dl>, <dt>, <dd>)";
    }, []);

    return (
        <Styled.Page>
            <header className="pageHeader" id="top">
                <h1>
                    Definition lists <code>&lt;dl&gt;</code>, <code>&lt;dt&gt;</code>, <code>&lt;dd&gt;</code>
                </h1>
                <p className="lede">
                    Use definition lists for true term–definition or name–value pairs: glossaries, property sheets,
                    metadata panels. Keep structure valid: only <code>dt</code> and <code>dd</code> as direct children of
                    <code> dl</code>, in groups of one-or-more <code>dt</code> followed by one-or-more <code>dd</code>.
                </p>
            </header>

            <nav className="toc" aria-label="On this page">
                <a href="#when">When to use</a>
                <a href="#anatomy">Anatomy</a>
                <a href="#patterns">Valid patterns</a>
                <a href="#content">What can go in dd</a>
                <a href="#a11y">Accessibility</a>
                <a href="#pitfalls">Pitfalls</a>
                <a href="#play">Playground</a>
            </nav>

            <section id="when">
                <h2>When to use</h2>
                <div className="card">
                    <ul className="bullets">
                        <li>Glossaries: term → definition.</li>
                        <li>Property sheets: label → value (e.g., Author, License, Version).</li>
                        <li>Key–value UI: invoice totals, product specs, metadata panels.</li>
                        <li>FAQs that are strictly Q → A pairs (for collapsible UI consider <code>&lt;details&gt;</code>).</li>
                    </ul>
                </div>
            </section>

            <section id="anatomy">
                <h2>Anatomy</h2>
                <Styled.Code role="region" aria-label="Basic definition list">
                    <pre>{String.raw`<dl>
  <dt>Term</dt>
  <dd>Definition of the term.</dd>
</dl>`}</pre>
                </Styled.Code>
                <p className="note">
                    Only <code>&lt;dt&gt;</code> and <code>&lt;dd&gt;</code> are allowed as direct children of{" "}
                    <code>&lt;dl&gt;</code>. Wrap extra layout inside the <code>dd</code>, not around the <code>dl</code>.
                </p>
            </section>

            <section id="patterns">
                <h2>Valid patterns</h2>
                <div className="grid2">
                    <div className="card">
                        <h3>Multiple terms → one definition</h3>
                        <Styled.Code>
                            <pre>{String.raw`<dl>
  <dt>Aliases</dt>
  <dt>Also known as</dt>
  <dd>Definition list, Desc list</dd>
</dl>`}</pre>
                        </Styled.Code>
                    </div>
                    <div className="card">
                        <h3>One term → multiple definitions</h3>
                        <Styled.Code>
                            <pre>{String.raw`<dl>
  <dt>Accessibility</dt>
  <dd>Making interfaces usable by people with disabilities.</dd>
  <dd>Often shortened to “a11y”.</dd>
</dl>`}</pre>
                        </Styled.Code>
                    </div>
                </div>
            </section>

            <section id="content">
                <h2>What can go inside <code>dd</code>?</h2>
                <div className="card">
                    <ul className="bullets">
                        <li>Paragraphs, lists, figures, tables—structured content is fine.</li>
                        <li>You can style pairs with CSS (grid/floats) but keep semantics intact.</li>
                        <li>Avoid putting block wrappers as direct children of <code>dl</code>—they belong inside <code>dd</code>.</li>
                    </ul>
                </div>
            </section>

            <section id="a11y">
                <h2>Accessibility</h2>
                <div className="card">
                    <ul className="bullets">
                        <li>
                            Screen readers announce <code>dt</code> as a term and associate following <code>dd</code>(s) as definitions.
                        </li>
                        <li>Don’t leave <code>dt</code> empty; each group must be meaningful.</li>
                        <li>
                            If you add headings, keep them inside <code>dd</code> content. The relationship is still term ↔ definition.
                        </li>
                    </ul>
                </div>
            </section>

            <section id="pitfalls">
                <h2>Pitfalls</h2>
                <ul className="badges">
                    <li><span className="bad">Wrong</span> Divs or paragraphs as direct children of <code>dl</code>.</li>
                    <li><span className="bad">Wrong</span> Using <code>dl</code> for arbitrary two-column layout.</li>
                    <li><span className="good">Good</span> Use when there’s a genuine name–value or term–definition relationship.</li>
                </ul>
            </section>

            {/* LAST: Monaco playground */}
            <section id="play">
                <h2>Try it live</h2>
                <p className="lede">
                    Fix invalid children, group <code>dt</code>/<code>dd</code> correctly, and adapt layout without breaking semantics.
                    Autosaves to this lesson.
                </p>
                <HtmlPlayground
                    storageKey="core-html:lists:dl-dt-dd:v1"
                    initialHtml={STARTER_HTML}
                    height={640}
                />
            </section>

            {/* Prev + Next */}
            <nav className="nextPrev" aria-label="Lesson navigation">
                <NavLink to="/lists/nested-and-start-reversed" className="prev" aria-label="Go to Nested, start/reversed">
                    ← Nested, start/reversed
                </NavLink>
                <NavLink to="/media/img-basics" className="next" aria-label="Go to &lt;img&gt; basics">
                    Next: &lt;img&gt; basics →
                </NavLink>
            </nav>

            <div className="backTop"><a href="#top">Back to top ↑</a></div>
        </Styled.Page>
    );
}
