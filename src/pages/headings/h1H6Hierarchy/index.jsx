import React, { useEffect } from "react";
import { Styled } from "./styled";
import { NavLink } from "react-router-dom";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";

/**
 * <h1>…<h6> hierarchy — heading levels and structure
 * - Mental model: one top heading for the main context; subheadings step down by one
 * - Multiple <h1> are valid when sectioning creates new outline contexts
 * - Don’t skip levels for visual size; use CSS for appearance
 * - Landmarks often need a heading for navigation
 * - Examples, pitfalls, and a live playground
 */

const STARTER_HTML = String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Heading hierarchy — demo</title>
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
      .visually-hidden {
        position: absolute !important; width: 1px; height: 1px; padding: 0; margin: -1px;
        overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; border: 0;
      }
      code { background: #f5f5f5; padding:0 6px; border-radius:6px; }
    </style>
  </head>
  <body>
    <main class="grid" id="main">
      <header>
        <h1>Heading hierarchy</h1>
        <p class="muted">Structure content with levels; style with CSS, not heading numbers.</p>
      </header>

      <section class="card good">
        <h2>Good: step down one level at a time</h2>
        <div class="ex">
          <h1>Page title</h1>
          <h2>Section A</h2>
          <h3>Topic A.1</h3>
          <h3>Topic A.2</h3>
          <h2>Section B</h2>
          <h3>Topic B.1</h3>
        </div>
      </section>

      <section class="card bad">
        <h2>Bad: skip levels for visual size</h2>
        <p>Use CSS to change size; keep semantic level correct.</p>
        <div class="ex">
          <!-- ⚠ skipping from h2 to h5 just to look smaller -->
          <h1>Page title</h1>
          <h2>Section</h2>
          <h5>Subtopic (wrong level)</h5>
        </div>
      </section>

      <section class="card good">
        <h2>Good: multiple <code>&lt;h1&gt;</code> in nested sectioning</h2>
        <p>Each <code>&lt;article&gt;</code> or similar can have its own top heading.</p>
        <div class="ex">
          <h1>Blog</h1>
          <article>
            <h1>Post A</h1>
            <p>…content…</p>
          </article>
          <article>
            <h1>Post B</h1>
            <p>…content…</p>
          </article>
        </div>
      </section>

      <section class="card">
        <h2>Landmarks and headings</h2>
        <p>Landmarks like <code>&lt;nav&gt;</code>, <code>&lt;aside&gt;</code>, and <code>&lt;main&gt;</code> benefit from an accessible name.</p>
        <div class="ex">
          <nav aria-labelledby="site-nav-h">
            <h2 id="site-nav-h" class="visually-hidden">Site navigation</h2>
            <ul><li><a href="#">Home</a></li><li><a href="#">Docs</a></li></ul>
          </nav>
        </div>
      </section>

      <section class="card">
        <h2>Visual size ≠ semantic level</h2>
        <p>Adjust appearance with CSS (e.g., <code>font-size</code>) instead of picking a smaller heading number.</p>
      </section>

      <footer class="muted">
        Tip: If a heading feels out of place, check its parent section and sibling levels.
      </footer>
    </main>
  </body>
</html>`;

export default function H1H6Hierarchy() {
    useEffect(() => {
        document.title = "Headings & Text · <h1>…<h6> hierarchy";
    }, []);

    return (
        <Styled.Page>
            <header className="pageHeader" id="top">
                <h1>
                    <code>&lt;h1&gt;</code>…<code>&lt;h6&gt;</code> hierarchy
                </h1>
                <p className="lede">
                    Heading levels convey structure. Use levels to reflect nesting, not visual size.
                    Multiple <code>&lt;h1&gt;</code> are valid in modern HTML when sectioning elements
                    create new contexts.
                </p>
            </header>

            <nav className="toc" aria-label="On this page">
                <a href="#model">Mental model</a>
                <a href="#rules">Rules of thumb</a>
                <a href="#multi-h1">Multiple h1</a>
                <a href="#landmarks">Landmarks</a>
                <a href="#pitfalls">Pitfalls</a>
                <a href="#play">Playground</a>
            </nav>

            <section id="model">
                <h2>Mental model</h2>
                <div className="card">
                    <ul className="bullets">
                        <li><strong>One top heading per context.</strong> A page or an article starts with a top heading.</li>
                        <li><strong>Step down one level at a time.</strong> h2 under h1, h3 under h2, and so on.</li>
                        <li><strong>Style ≠ semantics.</strong> Use CSS for size/weight, keep levels for structure.</li>
                    </ul>
                </div>
            </section>

            <section id="rules">
                <h2>Rules of thumb</h2>
                <div className="grid2">
                    <div className="card">
                        <h3>Do</h3>
                        <ul className="bullets">
                            <li>Start a section with a heading that summarizes its content.</li>
                            <li>Move from <code>h2</code> to <code>h3</code> for subtopics; go back up when exiting a subsection.</li>
                            <li>Use visually hidden text if a heading must be present but shouldn’t be visible.</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h3>Avoid</h3>
                        <ul className="bullets">
                            <li>Skipping levels for style (e.g., <code>h2</code> → <code>h5</code>).</li>
                            <li>Using headings to style non-headings (logos, random bold lines).</li>
                            <li>Creating empty headings or headings with only icons/emojis.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="multi-h1">
                <h2>Multiple <code>&lt;h1&gt;</code></h2>
                <Styled.Code role="region" aria-label="Multiple h1 in articles example">
                    <pre>{String.raw`<h1>Blog</h1>
<article>
  <h1>Post title</h1>
  <p>…</p>
</article>`}</pre>
                </Styled.Code>
                <p className="note">
                    This is valid because each <code>&lt;article&gt;</code> is a self-contained context.
                    Screen readers and navigation tools use landmarks and headings together.
                </p>
            </section>

            <section id="landmarks">
                <h2>Landmarks</h2>
                <p>
                    Landmarks (<code>&lt;main&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;aside&gt;</code>, <code>&lt;footer&gt;</code>) are easier to navigate with headings.
                    Provide a visible or visually hidden heading to name the region.
                </p>
            </section>

            <section id="pitfalls">
                <h2>Pitfalls</h2>
                <ul className="badges">
                    <li><span className="bad">Wrong</span> Skipping levels for visual size only.</li>
                    <li><span className="bad">Wrong</span> Using headings for styling non-headings.</li>
                    <li><span className="good">Good</span> Keep levels consistent with the nesting of sections.</li>
                </ul>
            </section>

            {/* LAST: Monaco playground */}
            <section id="play">
                <h2>Try it live</h2>
                <p className="lede">
                    Fix heading levels, add missing section headings, and ensure landmarks have accessible names.
                    Autosaves to this lesson.
                </p>
                <HtmlPlayground
                    storageKey="core-html:headings:h1-h6-hierarchy:v1"
                    initialHtml={STARTER_HTML}
                    height={640}
                />
            </section>

            {/* Prev + Next */}
            <nav className="nextPrev" aria-label="Lesson navigation">
                <NavLink to="/landmarks/section-vs-div" className="prev" aria-label="Go to When to use section vs div">
                    ← When to use &lt;section&gt; vs &lt;div&gt;
                </NavLink>
                <NavLink to="/text/p-br-hr" className="next" aria-label="Go to Paragraphs, br, hr usage">
                    Next: &lt;p&gt;, &lt;br&gt;, &lt;hr&gt; usage →
                </NavLink>
            </nav>

            <div className="backTop"><a href="#top">Back to top ↑</a></div>
        </Styled.Page>
    );
}
