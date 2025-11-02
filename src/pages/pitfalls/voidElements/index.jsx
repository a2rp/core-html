import React, { useEffect } from "react";
import { Styled } from "./styled";
import { NavLink } from "react-router-dom";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";

/**
 * Pitfall: Void elements are NOT self-closing in HTML
 * - What is a void element
 * - Complete list
 * - Rules: no closing tag, no children, whitespace-only content is still content (don’t)
 * - The XHTML slash myth (why `/>` is ignored in HTML and should be avoided)
 * - Differences in JSX/TSX (self-closing is required there—separate world)
 * - Common gotchas: <img>, <input>, <br>, <hr>, <meta>, <link>, <source>, <track>
 * - A11y nudges for <img>, <hr>, <br>
 * - Monaco playground last
 */

const STARTER_HTML = String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Void elements — live notes</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui,-apple-system,Segoe UI,Roboto,sans-serif; }
      .grid { display: grid; gap: 14px; }
      .card { border: 1px solid #ccc; border-radius: 12px; padding: 12px; }
      .bad  { background: color-mix(in oklab, #dc2626, transparent 92%); border-color:#f2a6a6; }
      .good { background: color-mix(in oklab, #16a34a, transparent 92%); border-color:#8ed09b; }
      code { background: #f5f5f5; padding: 0 6px; border-radius: 6px; }
      .ex { border:1px dashed #aaa; padding:8px; border-radius:10px; margin-top:6px; }
      .muted { color:#6b7280; }
    </style>
  </head>
  <body>
    <main class="grid">

      <section class="card">
        <h2>Task</h2>
        <p>Fix the invalid HTML by removing fake closing tags and children from void elements.</p>
      </section>

      <section class="card bad">
        <h2>Broken examples</h2>
        <div class="ex">
          <!-- ❌ void elements with children/closing tags -->
          <img src="photo.jpg" alt="A cat"></img>
          <input type="text">Your name</input>
          <br>line</br>
          <hr>rule</hr>
          <meta charset="utf-8"></meta>
          <link rel="stylesheet" href="x.css"></link>
        </div>
      </section>

      <section class="card good">
        <h2>Fix them</h2>
        <div class="ex">
          <!-- ✅ correct HTML -->
          <img src="photo.jpg" alt="A cat">
          <input type="text" name="username">
          <br>
          <hr>
          <meta charset="utf-8">
          <link rel="stylesheet" href="x.css">
        </div>
      </section>

      <footer class="muted">
        Hint: If an element is void, it never has an end tag and never wraps content—ever.
      </footer>
    </main>
  </body>
</html>`;

export default function VoidElements() {
    useEffect(() => {
        document.title = "Pitfalls · Void elements not self-closing";
    }, []);

    return (
        <Styled.Page>
            <header className="pageHeader" id="top">
                <h1>Void elements are <em>not</em> self-closing in HTML</h1>
                <p className="lede">
                    A <strong>void element</strong> is one that never has content. It has no closing tag and
                    cannot wrap children. Writing a trailing slash (<code>/&gt;</code>) is an XHTML leftover
                    and is ignored by HTML parsers—skip it.
                </p>
            </header>

            <nav className="toc" aria-label="On this page">
                <a href="#what">What is a void element</a>
                <a href="#list">Complete list</a>
                <a href="#rules">Rules</a>
                <a href="#gotchas">Common gotchas</a>
                <a href="#jsx">Note on JSX/TSX</a>
                <a href="#play">Playground</a>
            </nav>

            <section id="what">
                <h2>What is a void element</h2>
                <div className="card">
                    <p>
                        “Void” means the element’s content model is <em>empty</em>. In HTML, these elements end
                        right where they begin. No end tag. No children. Whitespace or text placed inside is
                        still content and therefore invalid.
                    </p>
                </div>
            </section>

            <section id="list">
                <h2>Complete list</h2>
                <div className="card">
                    <ul className="chips">
                        <li><code>area</code></li>
                        <li><code>base</code></li>
                        <li><code>br</code></li>
                        <li><code>col</code></li>
                        <li><code>embed</code></li>
                        <li><code>hr</code></li>
                        <li><code>img</code></li>
                        <li><code>input</code></li>
                        <li><code>link</code></li>
                        <li><code>meta</code></li>
                        <li><code>source</code></li>
                        <li><code>track</code></li>
                        <li><code>wbr</code></li>
                    </ul>
                    <p className="note">
                        Historical XHTML used a trailing slash (<code>&lt;img … /&gt;</code>) to mark emptiness.
                        HTML doesn’t need this. The slash is treated as stray markup and ignored.
                    </p>
                </div>
            </section>

            <section id="rules">
                <h2>Rules</h2>
                <div className="grid2">
                    <div className="card">
                        <h3>Do</h3>
                        <ul className="bullets">
                            <li>Use <code>&lt;img&gt;</code>, <code>&lt;input&gt;</code>, <code>&lt;br&gt;</code>, <code>&lt;hr&gt;</code> without end tags.</li>
                            <li>Provide <code>alt</code> on images; use empty <code>alt=""</code> for purely decorative images.</li>
                            <li>Set intrinsic <code>width</code>/<code>height</code> on images to avoid layout shift.</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h3>Don’t</h3>
                        <ul className="bullets">
                            <li>Write <code>&lt;img&gt;…&lt;/img&gt;</code> or put text inside a void element.</li>
                            <li>Rely on <code>/&gt;</code> to mean “self-closing” in HTML—browsers ignore it.</li>
                            <li>Use <code>&lt;br&gt;</code> to create vertical spacing; use CSS margins instead.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="gotchas">
                <h2>Common gotchas</h2>
                <ul className="badges">
                    <li><span className="bad">Wrong</span> <code>&lt;input&gt;Your name&lt;/input&gt;</code> — inputs can’t wrap labels or hints.</li>
                    <li><span className="bad">Wrong</span> <code>&lt;br&gt;text&lt;/br&gt;</code> — no closing tag for line breaks.</li>
                    <li><span className="bad">Wrong</span> <code>&lt;img src="x.png"&gt;Caption&lt;/img&gt;</code> — use <code>&lt;figure&gt;</code> + <code>&lt;figcaption&gt;</code> for captions.</li>
                    <li><span className="good">Good</span> <code>&lt;img src="x.png" alt="…" width="800" height="600"&gt;</code> — intrinsic size set.</li>
                    <li><span className="good">Good</span> <code>&lt;hr&gt;</code> to mark a thematic break (scene change, topic shift), not as a styling line.</li>
                </ul>
            </section>

            <section id="jsx">
                <h2>Note on JSX/TSX</h2>
                <Styled.Code role="region" aria-label="JSX note">
                    <pre>{String.raw`// JSX/TSX requires self-closing syntax for empty tags:
<img src="x.png" alt="" />     // ✅ in JSX
<input type="text" />          // ✅ in JSX

// But this is just JSX grammar. The emitted HTML is <img> and <input> without closing tags.`}</pre>
                </Styled.Code>
                <p className="note">
                    JSX is a compile-time syntax for JavaScript UI libraries. HTML rules at runtime are the
                    same: void elements don’t have closing tags and don’t contain children.
                </p>
            </section>

            {/* LAST: Monaco playground */}
            <section id="play">
                <h2>Try it live</h2>
                <p className="lede">
                    Remove fake closing tags and any children from void elements. Add missing attributes
                    like <code>alt</code> and intrinsic sizes where relevant. Autosaves to this lesson.
                </p>
                <HtmlPlayground
                    storageKey="core-html:pitfalls:void-elements:v1"
                    initialHtml={STARTER_HTML}
                    height={640}
                />
            </section>

            {/* Prev + Next */}
            <nav className="nextPrev" aria-label="Lesson navigation">
                <NavLink to="/landmarks/section-vs-div" className="prev" aria-label="Go to When to use section vs div">
                    ← When to use &lt;section&gt; vs &lt;div&gt;
                </NavLink>
                <NavLink to="/pitfalls/multiple-h1" className="next" aria-label="Go to Multiple H1 per context">
                    Next: Multiple H1 per context →
                </NavLink>
            </nav>

            <div className="backTop"><a href="#top">Back to top ↑</a></div>
        </Styled.Page>
    );
}
