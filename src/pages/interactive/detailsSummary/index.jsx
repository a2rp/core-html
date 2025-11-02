// src/pages/interactive/detailsSummary/index.jsx
import React, { useEffect } from "react";
import { Styled } from "./styled";
import { NavLink } from "react-router-dom";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";

/**
 * <details> + <summary> — native disclosure widget
 * - What it is, when to use
 * - Keyboard & accessibility behavior (Enter/Space, focus)
 * - Markup rules (summary as first child)
 * - Open state & URL fragments
 * - Styling the marker safely
 * - Patterns: FAQ, code example blocks, “more info” drawers
 * - Pitfalls to avoid
 * - Monaco playground LAST
 */

const STARTER_HTML = String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title><details> + <summary> — demo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui,-apple-system,Segoe UI,Roboto,sans-serif; }
      .grid { display: grid; gap: 14px; }
      .card { border: 1px solid #ccc; border-radius: 12px; padding: 12px; }
      .muted { color: #6b7280; }
      code { background: #f5f5f5; padding: 0 6px; border-radius: 6px; }

      /* Basic details styling */
      details {
        border: 1px solid #d1d5db;
        border-radius: 10px;
        background: #fafafa;
        padding: 8px 10px;
      }
      details + details { margin-top: 8px; }

      summary {
        cursor: pointer;
        list-style: none; /* Firefox marker removal */
        outline: none;
      }
      /* Hide default marker cross-browser */
      summary::-webkit-details-marker { display: none; }

      /* Custom marker */
      summary .marker {
        display: inline-block;
        inline-size: 1.2em;
        text-align: center;
        margin-right: 8px;
        transition: transform .2s ease;
      }
      details[open] summary .marker { transform: rotate(90deg); }

      /* Content wrapper for simple transition (max-height) */
      .content {
        overflow: clip;
        transition: grid-template-rows .25s ease, opacity .2s ease;
        display: grid;
        grid-template-rows: 0fr; /* collapsed */
        opacity: .9;
      }
      details[open] .content {
        grid-template-rows: 1fr; /* expanded */
        opacity: 1;
      }
      .content > div { min-height: 0; }

      .hint {
        font-size: 13px;
        color: #6b7280;
        border-left: 3px solid #2563eb;
        background: #eff6ff;
        padding: 8px 10px;
        border-radius: 8px;
      }

      .badges { display: grid; gap: 6px; list-style: none; padding: 0; }
      .bad, .good {
        display: inline-block; font-size: 12px; padding: 2px 8px; border-radius: 999px; border: 1px solid #ddd;
      }
      .bad { background: #2b1a1a; color: #ffb4b4; border-color: #553; }
      .good { background: #152417; color: #b6f3c1; border-color: #264a2b; }

      /* Focus styles for summary (important for keyboard users) */
      summary:focus-visible {
        outline: 2px solid #2563eb;
        border-radius: 6px;
      }
    </style>
  </head>
  <body>
    <main class="grid">
      <header>
        <h1>&lt;details&gt; + &lt;summary&gt;</h1>
        <p class="muted">Native disclosure widget for “show more / show less”, FAQ answers, expandable notes, and code reveals.</p>
      </header>

      <section class="card">
        <h2>Basic example</h2>
        <details>
          <summary><span class="marker">▸</span>What is the purpose of <code>&lt;details&gt;</code>?</summary>
          <div class="content"><div>
            <p>It provides a built-in, accessible toggle. The first child <code>&lt;summary&gt;</code> acts as the button. </p>
          </div></div>
        </details>
      </section>

      <section class="card">
        <h2>FAQ group</h2>
        <details>
          <summary><span class="marker">▸</span>Can I open it by default?</summary>
          <div class="content"><div>
            <p>Yes, add the boolean <code>open</code> attribute to <code>&lt;details open&gt;</code>.</p>
          </div></div>
        </details>
        <details open>
          <summary><span class="marker">▸</span>How do keyboard users toggle?</summary>
          <div class="content"><div>
            <p>Focus the <code>&lt;summary&gt;</code> and press <strong>Enter</strong> or <strong>Space</strong>. Screen readers announce expanded/collapsed state.</p>
          </div></div>
        </details>
        <details>
          <summary><span class="marker">▸</span>Can I link into an open panel?</summary>
          <div class="content"><div>
            <p>Give the panel content an <code>id</code> and link to <code>#that-id</code>. Consider opening the appropriate details on load with JS if needed.</p>
          </div></div>
        </details>
      </section>

      <section class="card">
        <h2>Nesting (legal but be thoughtful)</h2>
        <details>
          <summary><span class="marker">▸</span>Release Notes</summary>
          <div class="content"><div>
            <p>Each nested group has its own toggle state.</p>
            <details>
              <summary><span class="marker">▸</span>v1.2.0 — Highlights</summary>
              <div class="content"><div>
                <ul>
                  <li>Improved performance</li>
                  <li>New theming options</li>
                </ul>
              </div></div>
            </details>
          </div></div>
        </details>
      </section>

      <section class="card">
        <h2>Do / Don’t</h2>
        <ul class="badges">
          <li><span class="good">Good</span> Keep a clear, concise <strong>summary</strong> label.</li>
          <li><span class="good">Good</span> Use for optional details that don’t disrupt reading flow.</li>
          <li><span class="bad">Wrong</span> Replacing buttons/menus that have complex states or ARIA menus.</li>
          <li><span class="bad">Wrong</span> Putting <code>&lt;summary&gt;</code> anywhere except as the first child.</li>
        </ul>
      </section>

      <section class="card">
        <h2>Styling the marker</h2>
        <p class="hint">Hiding the default marker must remain accessible. Keep a visible affordance (icon/chevron) and keyboard focus styles.</p>
<pre><code>&lt;details&gt;
  &lt;summary&gt;&lt;span class="marker"&gt;▸&lt;/span&gt; Advanced options&lt;/summary&gt;
  &lt;div class="content"&gt;&lt;div&gt;...&lt;/div&gt;&lt;/div&gt;
&lt;/details&gt;</code></pre>
      </section>

      <footer class="muted">
        Tip: Prefer this native widget over custom JS “accordion” for simple disclosure patterns.
      </footer>
    </main>
  </body>
</html>`;

export default function DetailsSummary() {
    useEffect(() => {
        document.title = "Interactive · <details> + <summary>";
    }, []);

    return (
        <Styled.Page>
            <header className="pageHeader" id="top">
                <h1>
                    Native disclosure: <code>&lt;details&gt;</code> + <code>&lt;summary&gt;</code>
                </h1>
                <p className="lede">
                    Use for simple “show more” sections, FAQs, expandable notes, and code reveals. It’s keyboard-friendly,
                    screen reader–aware, and needs no JavaScript for basic toggling.
                </p>
            </header>

            <nav className="toc" aria-label="On this page">
                <a href="#model">What & when</a>
                <a href="#markup">Essential markup</a>
                <a href="#keyboard">Keyboard & a11y</a>
                <a href="#styling">Styling the marker</a>
                <a href="#pitfalls">Pitfalls</a>
                <a href="#play">Playground</a>
            </nav>

            <section id="model">
                <h2>What & when</h2>
                <div className="card">
                    <ul className="bullets">
                        <li><strong>Disclosure widget:</strong> Click or press Enter/Space on <code>&lt;summary&gt;</code> to toggle.</li>
                        <li><strong>Great for:</strong> FAQs, “more info”, snippets, expandable tips.</li>
                        <li><strong>Not for:</strong> complex menus, multi-select accordions with advanced ARIA.</li>
                    </ul>
                </div>
            </section>

            <section id="markup">
                <h2>Essential markup</h2>
                <Styled.Code role="region" aria-label="Essential markup">
                    <pre>{String.raw`<details>
  <summary>Why use details?</summary>
  <p>Because it’s native, accessible, and needs no JS for toggling.</p>
</details>`}</pre>
                </Styled.Code>
                <p className="note">
                    <code>&lt;summary&gt;</code> should be the first child of <code>&lt;details&gt;</code>. Add
                    the <code>open</code> attribute for expanded by default.
                </p>
            </section>

            <section id="keyboard">
                <h2>Keyboard & accessibility</h2>
                <ul className="badges">
                    <li><span className="good">Good</span> Summary is focusable; Enter/Space toggles.</li>
                    <li><span className="good">Good</span> Screen readers announce expanded/collapsed state.</li>
                    <li><span className="bad">Wrong</span> Hiding focus rings; always keep <code>:focus-visible</code> styling.</li>
                </ul>
            </section>

            <section id="styling">
                <h2>Styling the marker</h2>
                <Styled.Code role="region" aria-label="Marker CSS">
                    <pre>{String.raw`summary::-webkit-details-marker { display: none; }
summary { list-style: none; } /* Firefox */

summary .marker { inline-size: 1.2em; display: inline-block; transition: transform .2s; }
details[open] summary .marker { transform: rotate(90deg); }`}</pre>
                </Styled.Code>
                <p className="note">
                    If you hide the default triangle, provide your own visible affordance and retain keyboard focus styles.
                </p>
            </section>

            <section id="pitfalls">
                <h2>Pitfalls</h2>
                <ul className="badges">
                    <li><span className="bad">Wrong</span> Putting <code>&lt;summary&gt;</code> after other content.</li>
                    <li><span className="bad">Wrong</span> Using it for navigation menus that need complex ARIA.</li>
                    <li><span className="good">Good</span> Simple expand/collapse content blocks.</li>
                </ul>
            </section>

            {/* LAST: Monaco playground */}
            <section id="play">
                <h2>Try it live</h2>
                <p className="lede">
                    Edit the examples, swap markers, or experiment with the <code>open</code> attribute. Autosaves to this lesson.
                </p>
                <HtmlPlayground
                    storageKey="core-html:interactive:details-summary:v1"
                    initialHtml={STARTER_HTML}
                    height={640}
                />
            </section>

            {/* Prev + Next */}
            <nav className="nextPrev" aria-label="Lesson navigation">
                <NavLink to="/interactive/button-types" className="prev" aria-label="Go to Button types">
                    ← Button types
                </NavLink>
                <NavLink to="/interactive/dialog-open" className="next" aria-label="Go to Dialog basics">
                    Next: Dialog basics →
                </NavLink>
            </nav>

            <div className="backTop"><a href="#top">Back to top ↑</a></div>
        </Styled.Page>
    );
}
