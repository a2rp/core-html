import React, { useEffect } from "react";
import { Styled } from "./styled";
import { NavLink } from "react-router-dom";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";

/**
 * Globals: id, class, style, title
 * - id: uniqueness, URL fragments, a11y hooks; pitfalls (reused ids)
 * - class: multiple classes, naming, specificity strategy; BEM-ish sanity
 * - style: inline CSS, when okay (one-off demos), why avoid (specificity, dup, theming)
 * - title: tooltip limitations, a11y caveats; better alternatives
 * - Examples, good/bad, quick reference
 * - Monaco playground LAST
 */

const STARTER_HTML = String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>globals — id, class, style, title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui, -apple-system, Segoe UI, Roboto, sans-serif; }
      .grid { display: grid; gap: 14px; }
      .card { border: 1px solid #ccc; border-radius: 12px; padding: 12px; }
      .good { background: color-mix(in oklab, #16a34a, transparent 92%); border-color:#8ed09b; }
      .bad  { background: color-mix(in oklab, #dc2626, transparent 92%); border-color:#f2a6a6; }
      .muted { color: #6b7280; }
      code { background: #f5f5f5; padding:0 6px; border-radius:6px; }
      .ex { border:1px dashed #aaa; padding:8px; border-radius:10px; margin-top:6px; }
      .k { display:inline-block; border:1px solid #bbb; border-radius:999px; padding:2px 8px; font-size:12px; }
      .btn { display:inline-block; padding:6px 10px; border:1px solid #bbb; border-radius:8px; background:#fff; }
      .btn--primary { border-color:#2563eb; background: color-mix(in oklab, #2563eb, #fff 86%); }
      .u-text-muted { color:#6b7280; }
      .productCard { border:1px solid #ddd; border-radius:12px; padding:10px; }
      /* show :target behavior */
      :target { outline: 3px solid #f59e0b; scroll-margin-top: 24px; }
    </style>
  </head>
  <body>
    <main class="grid">
      <header>
        <h1>Global attributes: <code>id</code>, <code>class</code>, <code>style</code>, <code>title</code></h1>
        <p class="muted">These four are everywhere. Use them intentionally.</p>
      </header>

      <section class="card good" id="id-unique">
        <h2><code>id</code> — unique and linkable</h2>
        <ul>
          <li>Must be unique in the document.</li>
          <li>Enables deep-linking: try <a href="#buy">#buy</a>.</li>
          <li>Great for form labels: <code>&lt;label for="email"&gt;</code> → <code>&lt;input id="email"&gt;</code>.</li>
        </ul>
        <div class="ex">
          <a class="k" href="#id-unique">Jump to this section via #id</a>
          <form>
            <label for="email">Email</label>
            <input id="email" name="email" type="email" />
          </form>
        </div>
      </section>

      <section class="card bad">
        <h2>Common <code>id</code> mistakes</h2>
        <ul>
          <li>Reusing the same id on multiple elements (breaks a11y & JS).</li>
          <li>Styling by id selectors only (specificity trap).</li>
        </ul>
        <div class="ex">
          <p class="u-text-muted">Bad CSS habit: <code>#button { … }</code> → hard to override later.</p>
        </div>
      </section>

      <section class="card good">
        <h2><code>class</code> — your styling workhorse</h2>
        <ul>
          <li>Multiple classes allowed; order doesn't matter: <code>class="btn btn--primary u-text-muted"</code></li>
          <li>Prefer class selectors over ids (manageable specificity).</li>
          <li>Consider a light naming convention (BEM-ish or utilities).</li>
        </ul>
        <div class="ex">
          <button class="btn btn--primary">Buy now</button>
          <span class="k">class="btn btn--primary"</span>
        </div>
      </section>

      <section class="card bad">
        <h2>Class pitfalls</h2>
        <ul>
          <li>Encoding state in class names without removing old ones → stale styles.</li>
          <li>Over-specific combos like <code>.card.productCard.featured.primary.large</code> → fragile.</li>
        </ul>
      </section>

      <section class="card">
        <h2><code>style</code> — inline CSS (use rarely)</h2>
        <p class="muted">Inline styles override many rules and ignore media/themes. Okay for examples, email HTML, or quick experiments.</p>
        <div class="ex">
          <div class="productCard" style="border:2px dashed #f59e0b; padding:12px;">
            Inline-styled promo box (hard to theme later).
          </div>
        </div>
        <ul>
          <li><strong>Pros:</strong> fast, local to element, great for teaching/demos.</li>
          <li><strong>Cons:</strong> specificity wall, duplication, no media queries/custom props scoping.</li>
        </ul>
      </section>

      <section class="card">
        <h2><code>title</code> — tooltip with caveats</h2>
        <ul>
          <li>Browsers show it as a tooltip on hover; keyboard/touch often miss it.</li>
          <li>Not a reliable a11y label; prefer a visible label or <code>aria-label</code> for controls.</li>
        </ul>
        <div class="ex">
          <button class="btn" title="Adds item to cart">🛒 Add</button>
          <span class="u-text-muted">Tooltip may not be exposed to all users.</span>
        </div>
      </section>

      <footer class="muted">
        Quick rule: <code>id</code> for identity and linking; <code>class</code> for styling/hooks; use <code>style</code> sparingly; use <code>title</code> as a hint, not a label.
      </footer>

      <section class="card" id="buy">
        <h2>Deep link target example</h2>
        <p>This block highlights when navigated via <code>#buy</code> thanks to <code>:target</code>.</p>
      </section>
    </main>
  </body>
</html>`;

export default function IdClassStyleTitle() {
    useEffect(() => {
        document.title = "Globals · id, class, style, title";
    }, []);

    return (
        <Styled.Page>
            <header className="pageHeader" id="top">
                <h1>Global attributes: <code>id</code>, <code>class</code>, <code>style</code>, <code>title</code></h1>
                <p className="lede">
                    These four attributes are everywhere. Use <code>id</code> for identity and linking, <code>class</code> for styling
                    and hooks, keep <code>style</code> for rare one-offs, and treat <code>title</code> as a hint—not a label.
                </p>
            </header>

            <nav className="toc" aria-label="On this page">
                <a href="#id">id</a>
                <a href="#class">class</a>
                <a href="#style">style</a>
                <a href="#title">title</a>
                <a href="#ref">Quick reference</a>
                <a href="#play">Playground</a>
            </nav>

            <section id="id">
                <h2><code>id</code> — identity & anchoring</h2>
                <div className="card">
                    <ul className="bullets">
                        <li>Unique per document; enables URL fragments (<code>#section</code>) and <code>for</code>/<code>aria-labelledby</code> relations.</li>
                        <li>Avoid styling by id; prefer classes to keep specificity tame.</li>
                        <li>Good patterns: <code>id="site-header"</code>, <code>id="toc"</code>, <code>id="faq-shipping"</code>.</li>
                    </ul>
                </div>
            </section>

            <section id="class">
                <h2><code>class</code> — semantics for styling</h2>
                <div className="grid2">
                    <div className="card">
                        <h3>Multiple classes</h3>
                        <p>Order doesn’t matter; think “mix and match.” Example: <code>class="btn btn--primary u-text-muted"</code></p>
                    </div>
                    <div className="card">
                        <h3>Naming sanity</h3>
                        <ul className="bullets">
                            <li>Keep names descriptive but short: <code>.productCard</code>, <code>.hero</code>, <code>.nav</code>.</li>
                            <li>Variants with a prefix: <code>.btn--primary</code>, <code>.card--featured</code>.</li>
                            <li>Avoid over-encoding structure in names.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="style">
                <h2><code>style</code> — inline CSS (use sparingly)</h2>
                <Styled.Code aria-label="Inline style example">
                    <pre>{String.raw`<div class="promo" style="border:2px dashed #f59e0b; padding:12px">
  Limited offer!
</div>`}</pre>
                </Styled.Code>
                <p className="note">
                    Inline styles are fine for demos, CMS snippets, or emails. For apps/sites, prefer class-based CSS (tokens, themes).
                </p>
            </section>

            <section id="title">
                <h2><code>title</code> — tooltip with limits</h2>
                <ul className="bullets">
                    <li>Mouse users see a tooltip; keyboard/touch may not.</li>
                    <li>Don’t rely on <code>title</code> for essential labels or instructions.</li>
                    <li>Better: visible label or <code>aria-label</code> on interactive controls.</li>
                </ul>
                <Styled.Code aria-label="Title attribute example">
                    <pre>{String.raw`<button aria-label="Add to cart">🛒</button>
<!-- Using title alone is not reliable:
<button title="Add to cart">🛒</button> -->`}</pre>
                </Styled.Code>
            </section>

            <section id="ref">
                <h2>Quick reference</h2>
                <div className="card">
                    <ul className="bullets">
                        <li><strong>id</strong>: unique, linkable, relations (<code>for</code>, <code>aria-labelledby</code>). Avoid using for styling.</li>
                        <li><strong>class</strong>: multiple, composable, primary styling hook.</li>
                        <li><strong>style</strong>: inline CSS; high specificity; avoid for long-term UI.</li>
                        <li><strong>title</strong>: tooltip only; not a reliable label.</li>
                    </ul>
                </div>
            </section>

            {/* LAST: Monaco playground */}
            <section id="play">
                <h2>Try it live</h2>
                <p className="lede">
                    Add useful ids for deep links, refactor inline <code>style</code> into classes, and replace <code>title</code> with visible labels.
                    Autosaves to this lesson.
                </p>
                <HtmlPlayground
                    storageKey="core-html:globals:id-class-style-title:v1"
                    initialHtml={STARTER_HTML}
                    height={640}
                />
            </section>

            {/* Prev + Next */}
            <nav className="nextPrev" aria-label="Lesson navigation">
                <NavLink to="/metadata/links-scripts" className="prev" aria-label="Go to Links & scripts">
                    ← Links &amp; scripts
                </NavLink>
                <NavLink to="/globals/hidden-tabindex-contenteditable" className="next" aria-label="Go to hidden, tabindex, contenteditable">
                    Next: hidden, tabindex, contenteditable →
                </NavLink>
            </nav>

            <div className="backTop"><a href="#top">Back to top ↑</a></div>
        </Styled.Page>
    );
}
