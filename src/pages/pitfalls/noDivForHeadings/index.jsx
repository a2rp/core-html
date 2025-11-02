import React, { useEffect } from "react";
import { Styled } from "./styled";
import { NavLink } from "react-router-dom";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";

/*
  Topic: No <div> for headings/lists — use semantic elements

  Summary:
  - Headings must be real headings (<h1>.. <h6>), not <div> with big font.
  - Lists must be real lists (<ul>/<ol> with <li>), not <div> rows with bullets via CSS.
  - Semantics unlock built-in accessibility (navigation, outline, shortcuts, list semantics).
  - Screen readers and assistive tech rely on these elements for fast navigation.

  Structure of this lesson:
  1) Why <div> is wrong for headings/lists
  2) Correct patterns
  3) Screen reader & outline notes
  4) Refactor examples (before → after)
  5) FAQ
  6) Live playground (Monaco + autosave)
*/

const STARTER_HTML = String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>no div for headings/lists — try it</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui,-apple-system,Segoe UI,Roboto,sans-serif; }
      .grid { display: grid; gap: 14px; }
      .card { border: 1px solid #ccc; border-radius: 12px; padding: 12px; }
      .bad  { background: color-mix(in oklab, #dc2626, transparent 92%); border-color:#f2a6a6; }
      .good { background: color-mix(in oklab, #16a34a, transparent 92%); border-color:#8ed09b; }
      .muted { color: #6b7280; }
      .fake-h { font-size: 24px; font-weight: 700; } /* visually big but not a real heading */
      .fake-bullet::before { content: "• "; }
      code { background: #f5f5f5; padding: 0 6px; border-radius: 6px; }
    </style>
  </head>
  <body>
    <main class="grid">
      <header>
        <h1>No <div> for headings/lists</h1>
        <p class="muted">Use real <code>&lt;h1&gt;…&lt;h6&gt;</code> and real lists <code>&lt;ul&gt;</code>/<code>&lt;ol&gt;</code> with <code>&lt;li&gt;</code>.</p>
      </header>

      <section class="card bad">
        <h2>Bad: fake heading in a div</h2>
        <div class="fake-h">Features</div>
        <p>This looks like a heading but isn’t announced as one.</p>
      </section>

      <section class="card good">
        <h2>Good: real heading</h2>
        <h3>Features</h3>
        <p>Now screen readers can jump to this heading.</p>
      </section>

      <section class="card bad">
        <h2>Bad: fake list</h2>
        <div class="fake-bullet">Fast</div>
        <div class="fake-bullet">Secure</div>
        <div class="fake-bullet">Accessible</div>
        <p class="muted">These are just three separate paragraphs visually styled as bullets.</p>
      </section>

      <section class="card good">
        <h2>Good: real list</h2>
        <ul>
          <li>Fast</li>
          <li>Secure</li>
          <li>Accessible</li>
        </ul>
        <p class="muted">Assistive tech announces "list with 3 items" and supports list navigation.</p>
      </section>

      <footer class="muted">
        Tip: If you’re tempted to use a <code>&lt;div&gt;</code> for a heading or bullets, stop and switch to the native element.
      </footer>
    </main>
  </body>
</html>`;

export default function NoDivForHeadings() {
    useEffect(() => {
        document.title = "Pitfalls · No <div> for headings/lists";
    }, []);

    return (
        <Styled.Page>
            <header className="pageHeader" id="top">
                <h1>No <code>&lt;div&gt;</code> for headings/lists</h1>
                <p className="lede">
                    Headings must use <code>&lt;h1&gt;…&lt;h6&gt;</code>. Lists must use <code>&lt;ul&gt;</code>/<code>&lt;ol&gt;</code> with{" "}
                    <code>&lt;li&gt;</code>. Styling a <code>&lt;div&gt;</code> to look like a heading or bullets breaks navigation,
                    outline, and accessibility.
                </p>
            </header>

            <nav className="toc" aria-label="On this page">
                <a href="#why">Why div is wrong here</a>
                <a href="#correct">Correct patterns</a>
                <a href="#sr-notes">Screen reader & outline notes</a>
                <a href="#refactors">Refactor examples</a>
                <a href="#faq">FAQ</a>
                <a href="#play">Playground</a>
            </nav>

            <section id="why">
                <h2>Why <code>div</code> is wrong for headings or lists</h2>
                <div className="card">
                    <ul className="bullets">
                        <li><strong>Loss of semantics:</strong> A big, bold <code>div</code> isn’t a heading in the DOM.</li>
                        <li><strong>Broken navigation:</strong> Users can’t jump by heading or list items with keyboards or screen readers.</li>
                        <li><strong>Weaker SEO & outline:</strong> Headings structure your document meaningfully for crawlers and tools.</li>
                        <li><strong>Harder maintenance:</strong> Re-creating native behavior with ARIA/CSS is fragile and incomplete.</li>
                    </ul>
                </div>
            </section>

            <section id="correct">
                <h2>Correct patterns</h2>
                <div className="grid2">
                    <div className="card">
                        <h3>Real headings</h3>
                        <Styled.Code aria-label="Heading example">
                            <pre>{String.raw`<section>
  <h2>Specifications</h2>
  <p>Details…</p>
</section>`}</pre>
                        </Styled.Code>
                        <p className="note">Pick the level that fits your outline. Don’t skip levels purely for size—use CSS for size.</p>
                    </div>
                    <div className="card">
                        <h3>Real lists</h3>
                        <Styled.Code aria-label="List example">
                            <pre>{String.raw`<h2>Key points</h2>
<ul>
  <li>Fast</li>
  <li>Secure</li>
  <li>Accessible</li>
</ul>`}</pre>
                        </Styled.Code>
                        <p className="note">Use <code>ol</code> only when order matters (steps, rankings).</p>
                    </div>
                </div>
            </section>

            <section id="sr-notes">
                <h2>Screen reader & outline notes</h2>
                <ul className="badges">
                    <li><span className="good">Good</span> Real headings appear in “Headings list” shortcuts.</li>
                    <li><span className="good">Good</span> Real lists announce “list with N items”.</li>
                    <li><span className="bad">Bad</span> Fake headings/lists are invisible to these features.</li>
                </ul>
            </section>

            <section id="refactors">
                <h2>Refactor examples</h2>

                <h3>1) Fake heading → real heading</h3>
                <Styled.Code>
                    <pre>{String.raw`<!-- ❌ before -->
<div class="title">Pricing</div>
<p>Pick a plan…</p>

<!-- ✅ after -->
<h2>Pricing</h2>
<p>Pick a plan…</p>`}</pre>
                </Styled.Code>

                <h3>2) Styled bullets → real list</h3>
                <Styled.Code>
                    <pre>{String.raw`<!-- ❌ before -->
<div class="bullet">One</div>
<div class="bullet">Two</div>
<div class="bullet">Three</div>

<!-- ✅ after -->
<ul>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
</ul>`}</pre>
                </Styled.Code>

                <h3>3) Grid of features → still a list</h3>
                <Styled.Code>
                    <pre>{String.raw`<!-- ❌ before -->
<div class="grid">
  <div class="feature">Fast</div>
  <div class="feature">Secure</div>
  <div class="feature">Reliable</div>
</div>

<!-- ✅ after -->
<ul class="grid">
  <li class="feature">Fast</li>
  <li class="feature">Secure</li>
  <li class="feature">Reliable</li>
</ul>`}</pre>
                </Styled.Code>
                <p className="note">Layout doesn’t change semantics. A grid can still be a list: just style the <code>ul</code> and <code>li</code>.</p>
            </section>

            <section id="faq">
                <h2>FAQ</h2>
                <details>
                    <summary>Can I fix a fake heading with role or aria-level?</summary>
                    <div className="ans">
                        Use a real heading whenever possible. ARIA roles are for special cases, not replacements for proper elements.
                    </div>
                </details>
                <details>
                    <summary>What if I need custom styles?</summary>
                    <div className="ans">
                        Use CSS on the semantic element: <code>h2 {`{ font-size: 28px; }`}</code>.
                    </div>
                </details>
            </section>

            <section id="play">
                <h2>Try it live</h2>
                <p className="lede">
                    Replace fake headings and fake bullets with semantic elements. Validate by using a screen reader or a “Headings”/“Landmarks”
                    browser extension.
                </p>
                <HtmlPlayground
                    storageKey="core-html:pitfalls:no-div-for-headings:v1"
                    initialHtml={STARTER_HTML}
                    height={640}
                />
            </section>

            {/* Prev + Next */}
            <nav className="nextPrev" aria-label="Lesson navigation">
                <NavLink to="/pitfalls/button-vs-link" className="prev" aria-label="Go to Button vs Link">
                    ← Button vs Link
                </NavLink>
                <NavLink to="/pitfalls/text-inside-images" className="next" aria-label="Go to Avoid text inside images">
                    Next: Avoid text inside images →
                </NavLink>
            </nav>

            <div className="backTop"><a href="#top">Back to top ↑</a></div>
        </Styled.Page>
    );
}
