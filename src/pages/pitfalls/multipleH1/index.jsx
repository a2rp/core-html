import React, { useEffect } from "react";
import { Styled } from "./styled";
import { NavLink } from "react-router-dom";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";

/**
 * Multiple <h1> per context — pitfalls & sane usage
 *
 * Key ideas:
 * - HTML5 technically allows multiple <h1> if each lives in its own sectioning context (article/section/aside/nav).
 * - Browsers and assistive tech do NOT use the old "outline algorithm". They rely on actual h1–h6 ranks.
 * - For regular pages, prefer a single document-level <h1>, then h2…h6 in proper order.
 * - Inside independently reusable units (e.g., <article> cards, blog posts), a local <h1> is acceptable.
 * - Don’t sprinkle multiple h1s in one flat region. It confuses screen reader heading navigation and SEO signals.
 */

const STARTER_HTML = String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Multiple h1 — playground</title>
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
      code { background: #f5f5f5; padding:0 6px; border-radius:6px; }
      .ex { border:1px dashed #aaa; padding:8px; border-radius:10px; margin-top:6px; }
      .two { display:grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap:12px; }
      @media (max-width: 840px){ .two{ grid-template-columns: 1fr; } }
    </style>
  </head>
  <body>
    <main class="grid">
      <header>
        <h1>Multiple <code>h1</code> per context</h1>
        <p class="muted">One document-level <code>h1</code> is the safe default. Additional <code>h1</code> elements are fine inside independent sections like <code>&lt;article&gt;</code>, but keep heading levels meaningful.</p>
      </header>

      <section class="card good">
        <h2>Good (document h1 + local h1 in articles)</h2>
        <p>The page has one top-level <code>h1</code>. Each article is a self-contained unit with its own <code>h1</code>.</p>
        <div class="ex two">
          <article>
            <h1>How to brew coffee</h1>
            <p>Per-article title.</p>
          </article>
          <article>
            <h1>How to steam milk</h1>
            <p>Per-article title.</p>
          </article>
        </div>
      </section>

      <section class="card bad">
        <h2>Bad (flat region with many h1s)</h2>
        <p>Multiple <code>h1</code>s inside the same non-sectioned container. Screen reader "heading level 1" navigation becomes noisy.</p>
        <div class="ex">
          <div class="list">
            <h1>Features</h1>
            <p>…</p>
            <h1>Pricing</h1>
            <p>…</p>
            <h1>FAQ</h1>
            <p>…</p>
          </div>
        </div>
      </section>

      <section class="card">
        <h2>Better (use descending ranks)</h2>
        <p>Keep the document outline honest: one <code>h1</code> for the page, then <code>h2</code> for major sections, <code>h3</code> for subsections, and so on.</p>
        <div class="ex">
          <h1>Product</h1>
          <h2>Features</h2>
          <h3>Fast</h3>
          <h3>Secure</h3>
          <h2>Pricing</h2>
          <h2>FAQ</h2>
        </div>
      </section>

      <section class="card">
        <h2>Component caveat</h2>
        <p>If you build a reusable "Card" component, don’t hardcode <code>&lt;h1&gt;</code> inside it. Accept a <code>as</code>/<code>level</code> prop and render the right rank where used.</p>
      </section>

      <footer class="muted">
        Rule of thumb: One document <code>h1</code>; additional <code>h1</code>s only inside self-contained sections like <code>&lt;article&gt;</code>. Otherwise, use <code>h2…h6</code>.
      </footer>
    </main>
  </body>
</html>`;

export default function PitfallMultipleH1() {
    useEffect(() => {
        document.title = "Pitfalls · Multiple <h1> per context";
    }, []);

    return (
        <Styled.Page>
            <header className="pageHeader" id="top">
                <h1>Multiple <code>&lt;h1&gt;</code> per context</h1>
                <p className="lede">
                    HTML allows more than one <code>h1</code>, but assistive tech and SEO rely on real heading ranks.
                    Use a single document-level <code>h1</code>, then descend with <code>h2…h6</code>. Reserve extra <code>h1</code>s
                    for self-contained sections such as <code>&lt;article&gt;</code>.
                </p>
            </header>

            <nav className="toc" aria-label="On this page">
                <a href="#model">Mental model</a>
                <a href="#rules">Rules of thumb</a>
                <a href="#a11y">Accessibility & SEO notes</a>
                <a href="#components">Component guidance</a>
                <a href="#faq">FAQ</a>
                <a href="#play">Playground</a>
            </nav>

            <section id="model">
                <h2>Mental model</h2>
                <div className="card">
                    <ul className="bullets">
                        <li><strong>Document level:</strong> Prefer exactly one <code>h1</code> that names the page.</li>
                        <li><strong>Section level:</strong> In truly independent sections (<code>article</code>, <code>aside</code>), a local <code>h1</code> can be appropriate.</li>
                        <li><strong>Hierarchy matters:</strong> Most UAs and ATs use literal h1–h6 levels, not the abandoned “outline algorithm”.</li>
                    </ul>
                </div>
            </section>

            <section id="rules">
                <h2>Rules of thumb</h2>
                <div className="grid2">
                    <div className="card">
                        <h3>Do</h3>
                        <ul className="bullets">
                            <li>Use one <code>h1</code> for the page title.</li>
                            <li>Use <code>h2</code> for major sections, <code>h3</code> for subsections, etc.</li>
                            <li>Within an <code>article</code>, using <code>h1</code> for that article’s title is acceptable.</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h3>Avoid</h3>
                        <ul className="bullets">
                            <li>Sprinkling multiple <code>h1</code>s within the same flat container.</li>
                            <li>Skipping levels arbitrarily (e.g., <code>h1 → h3</code> with no <code>h2</code>).</li>
                            <li>Hardcoding <code>h1</code> inside generic, reusable components.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="a11y">
                <h2>Accessibility & SEO notes</h2>
                <Styled.Code role="region" aria-label="Heading ranks example">
                    <pre>{String.raw`<!-- Screen reader users navigate by heading level -->
<h1>Docs</h1>
  <h2>Getting started</h2>
    <h3>Install</h3>
    <h3>Configure</h3>
  <h2>Guides</h2>`}</pre>
                </Styled.Code>
                <p className="note">
                    Search engines can parse multiple <code>h1</code>s, but inconsistent ranks dilute signals. Clear hierarchy helps both readers and crawlers.
                </p>
            </section>

            <section id="components">
                <h2>Component guidance</h2>
                <Styled.Code>
                    <pre>{String.raw`// Pseudocode: pass the desired heading level
function CardTitle({ as: Tag = "h3", children }) {
  return <Tag className="cardTitle">{children}</Tag>;
}

// Usage decides the rank:
<CardTitle as="h2">Features</CardTitle>`}</pre>
                </Styled.Code>
            </section>

            <section id="faq">
                <h2>FAQ</h2>
                <details>
                    <summary>Is multiple <code>h1</code> invalid HTML?</summary>
                    <div className="ans">No. It’s valid, especially inside sectioning content like <code>&lt;article&gt;</code>. It’s still risky for flat layouts.</div>
                </details>
                <details>
                    <summary>Should I ever use <code>role="heading"</code> with <code>aria-level</code>?</summary>
                    <div className="ans">Only for edge cases (e.g., custom widgets). Prefer native <code>h1–h6</code> so AT gets levels automatically.</div>
                </details>
            </section>

            <section id="play">
                <h2>Try it live</h2>
                <p className="lede">
                    Fix the “Bad” example by replacing extra <code>h1</code>s with <code>h2/h3</code> or by wrapping each block in an <code>article</code> with its own <code>h1</code>.
                </p>
                <HtmlPlayground
                    storageKey="core-html:pitfalls:multiple-h1:v1"
                    initialHtml={STARTER_HTML}
                    height={640}
                />
            </section>

            <nav className="nextPrev" aria-label="Lesson navigation">
                <NavLink to="/pitfalls/void-elements" className="prev" aria-label="Go to Void elements not self-closing">
                    ← Void elements not self-closing
                </NavLink>
                <NavLink to="/pitfalls/button-vs-link" className="next" aria-label="Go to Button for actions, link for navigation">
                    Next: Button vs link →
                </NavLink>
            </nav>

            <div className="backTop"><a href="#top">Back to top ↑</a></div>
        </Styled.Page>
    );
}
