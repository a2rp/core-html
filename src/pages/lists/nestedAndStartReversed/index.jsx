import React, { useEffect } from "react";
import { Styled } from "./styled";
import { NavLink } from "react-router-dom";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";

/**
 * Ordered lists: nested, start, reversed (and value/type)
 * - Mental model & when to use each
 * - Attributes: start, reversed, value, type
 * - Nested lists semantics & outline
 * - Practical patterns (chapter/section, steps with sub-steps)
 * - A11y notes (announce counts; avoid fake numbers with plain <p>)
 * - Pitfalls (don’t style your semantics)
 * - Monaco playground LAST
 */

const STARTER_HTML = String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Ordered lists — nested, start, reversed</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui,-apple-system,Segoe UI,Roboto,sans-serif; }
      main { display: grid; gap: 16px; }
      .card { border: 1px solid #ccc; border-radius: 12px; padding: 12px; }
      .muted { color: #6b7280; }
      .grid2 { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px; }
      @media (max-width: 900px) { .grid2 { grid-template-columns: 1fr; } }

      /* Demo helpers */
      ol.demo { padding-left: 24px; }
      ol.demo ol { margin-top: 6px; }
      .ex { border:1px dashed #aaa; padding:10px; border-radius:10px; margin-top:6px; }
      code { background: #f5f5f5; padding: 0 6px; border-radius: 6px; }

      /* Optional: use type for roman/alpha */
      .roman { list-style-type: lower-roman; }
      .alpha { list-style-type: lower-alpha; }
    </style>
  </head>
  <body>
    <main>
      <header>
        <h1>Ordered lists — nested, start, reversed</h1>
        <p class="muted">Use <code>&lt;ol&gt;</code> whenever the order matters (steps, rankings, sequences). Control numbering with native attributes, not hard-coded text.</p>
      </header>

      <section class="card">
        <h2>Nested lists</h2>
        <div class="ex">
          <ol class="demo">
            <li>Install tools
              <ol>
                <li>Download</li>
                <li>Verify checksum</li>
                <li>Run installer</li>
              </ol>
            </li>
            <li>Configure project</li>
            <li>Build and test</li>
          </ol>
        </div>
      </section>

      <section class="card">
        <h2>start attribute</h2>
        <p>Continue numbering from a specific value:</p>
        <div class="ex">
          <ol class="demo start" start="4">
            <li>Fourth</li>
            <li>Fifth</li>
          </ol>
        </div>
      </section>

      <section class="card">
        <h2>reversed attribute</h2>
        <p>Count down from a given start (defaults to list length if no start):</p>
        <div class="ex">
          <ol class="demo" reversed>
            <li>Top priority</li>
            <li>Medium</li>
            <li>Low</li>
          </ol>
          <p class="muted">Tip: combine with <code>start</code> if you know total items: <code>&lt;ol reversed start="5"&gt;</code></p>
        </div>
      </section>

      <section class="card">
        <h2>value on &lt;li&gt;</h2>
        <p>Jump individual numbers for headings/sections:</p>
        <div class="ex">
          <ol class="demo">
            <li>Intro</li>
            <li>Basics</li>
            <li value="10">Advanced (skip to 10)</li>
            <li>Expert</li>
          </ol>
        </div>
      </section>

      <section class="card">
        <h2>type or CSS</h2>
        <p>Choose numeric/alpha/roman. Prefer CSS <code>list-style-type</code> for full control.</p>
        <div class="ex">
          <ol class="demo alpha">
            <li>Alpha A</li>
            <li>Alpha B</li>
          </ol>
          <ol class="demo roman">
            <li>Roman i</li>
            <li>Roman ii</li>
          </ol>
        </div>
      </section>

      <footer class="muted">
        Screen readers announce positions and counts automatically when using real <code>&lt;ol&gt;</code>. Avoid faking numbers with paragraphs.
      </footer>
    </main>
  </body>
</html>`;

export default function NestedAndStartReversed() {
    useEffect(() => {
        document.title = "Lists · Nested, start, reversed (and value/type)";
    }, []);

    return (
        <Styled.Page>
            <header className="pageHeader" id="top">
                <h1>Ordered lists: nested, start, reversed</h1>
                <p className="lede">
                    Use <code>&lt;ol&gt;</code> when order matters. Native attributes like{" "}
                    <code>start</code>, <code>reversed</code>, and <code>value</code> let the browser handle numbering—better for
                    accessibility, copy-paste, and maintenance.
                </p>
            </header>

            <nav className="toc" aria-label="On this page">
                <a href="#model">Mental model</a>
                <a href="#attrs">Attributes</a>
                <a href="#nested">Nested lists</a>
                <a href="#patterns">Patterns</a>
                <a href="#a11y">Accessibility</a>
                <a href="#pitfalls">Pitfalls</a>
                <a href="#faq">FAQ</a>
                <a href="#play">Playground</a>
            </nav>

            <section id="model">
                <h2>Mental model</h2>
                <div className="card">
                    <ul className="bullets">
                        <li>
                            <strong>Ordered lists</strong> communicate position: step 1 → step 2, rank 1 → rank 2, Chapter 1 → 2.
                        </li>
                        <li>
                            <strong>Let the browser count.</strong> Don’t hard-code “1., 2., 3.” as text; use real <code>&lt;ol&gt;</code>/<code>&lt;li&gt;</code>.
                        </li>
                        <li>
                            <strong>Nested lists</strong> express sub-steps or sub-topics inside a step, not side-by-side columns.
                        </li>
                    </ul>
                </div>
            </section>

            <section id="attrs">
                <h2>Attributes (quick tour)</h2>
                <div className="grid2">
                    <div className="card">
                        <h3><code>start</code></h3>
                        <p>Begin numbering at a given integer.</p>
                        <Styled.Code><pre>{`<ol start="4">
  <li>Fourth</li>
  <li>Fifth</li>
</ol>`}</pre></Styled.Code>
                    </div>

                    <div className="card">
                        <h3><code>reversed</code></h3>
                        <p>Count down. Without <code>start</code>, it starts at the item count.</p>
                        <Styled.Code><pre>{`<ol reversed>
  <li>Top</li>
  <li>Middle</li>
  <li>Low</li>
</ol>`}</pre></Styled.Code>
                    </div>

                    <div className="card">
                        <h3><code>value</code> (on <code>&lt;li&gt;</code>)</h3>
                        <p>Force a specific number for a particular <code>&lt;li&gt;</code>.</p>
                        <Styled.Code><pre>{`<ol>
  <li>Intro</li>
  <li value="10">Jump to ten</li>
  <li>Next</li>
</ol>`}</pre></Styled.Code>
                    </div>

                    <div className="card">
                        <h3><code>type</code> or CSS</h3>
                        <p>
                            Use <code>type="1|a|A|i|I"</code> for simple styles; prefer CSS{" "}
                            <code>list-style-type</code> for flexibility.
                        </p>
                        <Styled.Code><pre>{`<ol type="a">…</ol>
<ol style="list-style-type: lower-roman">…</ol>`}</pre></Styled.Code>
                    </div>
                </div>
            </section>

            <section id="nested">
                <h2>Nested lists</h2>
                <div className="card">
                    <p>
                        Place a child <code>&lt;ol&gt;</code> inside an <code>&lt;li&gt;</code> when you have sub-steps for that step.
                        Don’t put a sibling <code>&lt;ol&gt;</code> directly under the parent—nest inside the list item.
                    </p>
                    <Styled.Code aria-label="Nested list example"><pre>{`<ol>
  <li>Prepare
    <ol>
      <li>Gather materials</li>
      <li>Check tools</li>
    </ol>
  </li>
  <li>Execute</li>
  <li>Review</li>
</ol>`}</pre></Styled.Code>
                    <p className="note">
                        Visual spacing is just CSS. The semantics come from where the child list lives (inside the parent{" "}
                        <code>&lt;li&gt;</code>).
                    </p>
                </div>
            </section>

            <section id="patterns">
                <h2>Patterns</h2>
                <div className="grid2">
                    <div className="card">
                        <h3>Chapters across pages</h3>
                        <p>Split chapters with <code>start</code> to continue numbering in later sections.</p>
                        <Styled.Code><pre>{`<ol start="6">
  <li>Chapter Six</li>
  <li>Chapter Seven</li>
</ol>`}</pre></Styled.Code>
                    </div>

                    <div className="card">
                        <h3>Countdown checklist</h3>
                        <p>Use <code>reversed</code> for top-N lists.</p>
                        <Styled.Code><pre>{`<ol reversed start="5">
  <li>#5</li>
  <li>#4</li>
  <li>#3</li>
  <li>#2</li>
  <li>#1</li>
</ol>`}</pre></Styled.Code>
                    </div>
                </div>
            </section>

            <section id="a11y">
                <h2>Accessibility</h2>
                <ul className="badges">
                    <li><span className="good">Good</span> Real <code>&lt;ol&gt;</code> exposes position/length to assistive tech.</li>
                    <li><span className="good">Good</span> Use <code>start</code>/<code>reversed</code>/<code>value</code>—don’t prefix numbers in plain text.</li>
                    <li><span className="bad">Wrong</span> Simulating numbering with CSS counters on <code>&lt;div&gt;</code> when true order semantics are required.</li>
                </ul>
            </section>

            <section id="pitfalls">
                <h2>Pitfalls</h2>
                <ul className="bullets">
                    <li>Don’t place a nested <code>&lt;ol&gt;</code> as a sibling to the parent—nest inside the relevant <code>&lt;li&gt;</code>.</li>
                    <li>Avoid mixing <code>type</code> with heavy CSS overrides that contradict it; pick one approach.</li>
                    <li>Keep numbers meaningful: if order doesn’t matter, use <code>&lt;ul&gt;</code>.</li>
                </ul>
            </section>

            <section id="faq">
                <h2>FAQ</h2>
                <details>
                    <summary>Can I style the marker (number) with CSS?</summary>
                    <div className="ans">
                        Yes. Use <code>list-style</code>/<code>list-style-type</code> or the <code>::marker</code> pseudo-element for
                        color/weight. Keep semantics intact.
                    </div>
                </details>
                <details>
                    <summary>What if I need 1.1, 1.2, 2.1 numbering?</summary>
                    <div className="ans">
                        Consider CSS counters for visual multilevel schemes, but keep real <code>&lt;ol&gt;</code> nesting for semantics.
                    </div>
                </details>
            </section>

            {/* LAST: Monaco playground */}
            <section id="play">
                <h2>Try it live</h2>
                <p className="lede">
                    Practice nested lists, continue numbering with <code>start</code>, create countdowns with{" "}
                    <code>reversed</code>, and jump with <code>value</code>. Autosaves to this lesson.
                </p>
                <HtmlPlayground
                    storageKey="core-html:lists:nested-start-reversed:v1"
                    initialHtml={STARTER_HTML}
                    height={640}
                />
            </section>

            {/* Prev + Next */}
            <nav className="nextPrev" aria-label="Lesson navigation">
                <NavLink to="/lists/ul-ol-li" className="prev" aria-label="Go to UL/OL/LI semantics">
                    ← UL, OL, LI semantics
                </NavLink>
                <NavLink to="/lists/dl-dt-dd" className="next" aria-label="Go to Definition lists">
                    Next: Definition lists →
                </NavLink>
            </nav>

            <div className="backTop"><a href="#top">Back to top ↑</a></div>
        </Styled.Page>
    );
}
