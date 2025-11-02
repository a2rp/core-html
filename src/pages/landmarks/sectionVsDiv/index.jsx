import React, { useEffect } from "react";
import { Styled } from "./styled";
import { NavLink } from "react-router-dom";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";

/**
 * When to use <section> vs <div>
 * - Mental model: named thematic grouping vs neutral box
 * - Headings & accessible names
 * - When a section is NOT appropriate
 * - ARIA notes (role="region" sparingly)
 * - Examples and pitfalls
 * - Monaco playground LAST
 */

const STARTER_HTML = String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>section vs div — demo</title>
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
      .k { display:inline-block; border:1px solid #bbb; border-radius:999px; padding:2px 8px; font-size:12px; }
      .ex { border:1px dashed #aaa; padding:8px; border-radius:10px; margin-top:6px; }
      code { background: #f5f5f5; padding:0 6px; border-radius:6px; }
    </style>
  </head>
  <body>
    <main class="grid">
      <header>
        <h1>&lt;section&gt; vs &lt;div&gt;</h1>
        <p class="muted">Use <code>section</code> when the block has a natural title (would appear in a table of contents). Use <code>div</code> for styling/grouping with no thematic label.</p>
      </header>

      <section class="card good">
        <h2>Good <small>(named thematic group)</small></h2>
        <p>This block has a purpose and a heading, so <code>&lt;section&gt;</code> is appropriate.</p>
        <div class="ex">
          <section>
            <h3>Features</h3>
            <ul><li>Fast</li><li>Secure</li><li>Accessible</li></ul>
          </section>
        </div>
      </section>

      <section class="card bad">
        <h2>Bad <small>(section with no heading)</small></h2>
        <p>Sections should have an accessible name, usually a visible heading.</p>
        <div class="ex">
          <section>
            <!-- ⚠ no heading here -->
            <p>Random content with no label.</p>
          </section>
        </div>
      </section>

      <section class="card">
        <h2>Neutral grouping <small>(use div)</small></h2>
        <p>Boxes used purely for layout/hooks should be <code>div</code>s.</p>
        <div class="ex">
          <div class="row">
            <div class="col">A</div>
            <div class="col">B</div>
            <div class="col">C</div>
          </div>
        </div>
      </section>

      <section class="card">
        <h2>ARIA note</h2>
        <p>
          If a grouping needs to be a landmark but isn’t a good fit for native ones, you may add
          <code>role="region"</code> and an accessible name <code>aria-labelledby</code> /
          <code>aria-label</code>. Use sparingly.
        </p>
        <div class="ex">
          <div role="region" aria-labelledby="rec-title">
            <h3 id="rec-title">Recommended articles</h3>
            <ul><li>One</li><li>Two</li></ul>
          </div>
        </div>
      </section>

      <footer class="muted">
        Tip: When you don’t know which to pick, ask: “Would I title this block?” If yes → section. If not → div.
      </footer>
    </main>
  </body>
</html>`;

export default function SectionVsDiv() {
    useEffect(() => {
        document.title = "Landmarks · When to use <section> vs <div>";
    }, []);

    return (
        <Styled.Page>
            <header className="pageHeader" id="top">
                <h1>When to use <code>&lt;section&gt;</code> vs <code>&lt;div&gt;</code></h1>
                <p className="lede">
                    <code>&lt;section&gt;</code> groups related content that has a natural title. <code>&lt;div&gt;</code> is a neutral
                    wrapper used for styling or generic grouping. Choose the one that matches intent.
                </p>
            </header>

            <nav className="toc" aria-label="On this page">
                <a href="#model">Mental model</a>
                <a href="#rules">Rules of thumb</a>
                <a href="#aria">ARIA & naming</a>
                <a href="#pitfalls">Pitfalls</a>
                <a href="#faq">FAQ</a>
                <a href="#play">Playground</a>
            </nav>

            <section id="model">
                <h2>Mental model</h2>
                <div className="card">
                    <ul className="bullets">
                        <li><strong>Section</strong> = thematic group you would place in a Table of Contents.</li>
                        <li><strong>Div</strong> = generic box to hook style or layout. Carries no meaning.</li>
                        <li>Structure first, presentation second. Don’t “style your semantics.”</li>
                    </ul>
                </div>
            </section>

            <section id="rules">
                <h2>Rules of thumb</h2>
                <div className="grid2">
                    <div className="card">
                        <h3>Use <code>section</code> when…</h3>
                        <ul className="bullets">
                            <li>You’d give the block a heading (visible or off-screen).</li>
                            <li>It’s a logical part of the document: <em>Features</em>, <em>Pricing</em>, <em>FAQ</em>.</li>
                            <li>It helps the outline and navigation.</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h3>Use <code>div</code> when…</h3>
                        <ul className="bullets">
                            <li>It’s purely for layout or hooks (<code>.row</code>, <code>.grid</code>, wrappers).</li>
                            <li>It has no meaningful title or standalone purpose.</li>
                            <li>You’re grouping a few inline/blocks for styling only.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="aria">
                <h2>ARIA & accessible names</h2>
                <Styled.Code role="region" aria-label="Named section example">
                    <pre>{String.raw`<section aria-labelledby="features-heading">
  <h2 id="features-heading">Features</h2>
  …
</section>`}</pre>
                </Styled.Code>
                <p className="note">
                    Prefer a real heading. Only add <code>role="region"</code> to a <code>div</code> if you need a navigable landmark and no native element fits.
                </p>
            </section>

            <section id="pitfalls">
                <h2>Pitfalls</h2>
                <ul className="badges">
                    <li><span className="bad">Wrong</span> Using <code>section</code> everywhere as a fancy div.</li>
                    <li><span className="bad">Wrong</span> <code>section</code> with no heading/name.</li>
                    <li><span className="good">Good</span> <code>div</code> for neutral wrappers; <code>section</code> for named groups.</li>
                </ul>
            </section>

            <section id="faq">
                <h2>FAQ</h2>
                <details>
                    <summary>Can a section contain articles (and vice versa)?</summary>
                    <div className="ans">Yes. Use whichever represents the content best. Articles are self-contained units; sections are thematic groups.</div>
                </details>
                <details>
                    <summary>Do I need a heading if I already have an aria-label?</summary>
                    <div className="ans">A visible heading is better for everyone. Use aria-labels when headings can’t be visible.</div>
                </details>
            </section>

            {/* LAST: Monaco playground */}
            <section id="play">
                <h2>Try it live</h2>
                <p className="lede">
                    Convert neutral wrappers to sections where appropriate, add headings or ARIA names,
                    and trim overused sections. Autosaves to this lesson.
                </p>
                <HtmlPlayground
                    storageKey="core-html:landmarks:section-vs-div:v1"
                    initialHtml={STARTER_HTML}
                    height={640}
                />
            </section>

            {/* Prev + Next */}
            <nav className="nextPrev" aria-label="Lesson navigation">
                <NavLink to="/landmarks/core-landmarks" className="prev" aria-label="Go to Core landmarks">
                    ← Core landmarks
                </NavLink>
                <NavLink to="/landmarks/nesting-outline" className="next" aria-label="Go to Nesting & heading outline">
                    Next: Nesting &amp; heading outline →
                </NavLink>
            </nav>

            <div className="backTop"><a href="#top">Back to top ↑</a></div>
        </Styled.Page>
    );
}
