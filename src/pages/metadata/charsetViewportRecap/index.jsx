import React, { useEffect } from "react";
import { Styled } from "./styled";
import { NavLink } from "react-router-dom";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";

/*
  Goal:
  - Quick refresher on <meta charset="utf-8"> and <meta name="viewport" ...>
  - Why they matter, correct placement, common pitfalls, and practical presets
  - Live Monaco playground last (autosave key unique to this lesson)
*/

const STARTER_HTML = String.raw`<!doctype html>
<html lang="en">
  <head>
    <!-- ✅ Keep charset first inside <head> -->
    <meta charset="utf-8" />

    <title>charset & viewport — recap</title>

    <!-- Minimal, good default viewport -->
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <meta name="description" content="Recap of HTML charset and viewport basics with live examples." />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui, -apple-system, Segoe UI, Roboto, sans-serif; }
      .grid { display: grid; gap: 14px; }
      .card { border: 1px solid #ccc; border-radius: 12px; padding: 12px; background: color-mix(in oklab, canvas, canvasText 3%); }
      .muted { color: #6b7280; }
      code { background: color-mix(in oklab, canvasText, transparent 92%); padding: 0 6px; border-radius: 6px; }
      .ex { border: 1px dashed #aaa; padding: 10px; border-radius: 10px; margin-top: 8px; }
      .bad { background: color-mix(in oklab, #dc2626, transparent 90%); border-color: #ef9a9a; }
      .good { background: color-mix(in oklab, #16a34a, transparent 90%); border-color: #a7f3d0; }
    </style>
  </head>
  <body>
    <main class="grid">
      <header>
        <h1>charset & viewport — recap</h1>
        <p class="muted">Correct encoding avoids mojibake (garbled text). Viewport sets initial layout scale on mobile.</p>
      </header>

      <section class="card good">
        <h2>UTF-8 everywhere</h2>
        <p>Use <code>&lt;meta charset="utf-8"&gt;</code> as the first thing inside <code>&lt;head&gt;</code>. This lets the parser decode bytes correctly from the start.</p>
        <div class="ex">
          Examples to test:
          <ul>
            <li>Emoji: 😀🔥✨</li>
            <li>Hindi: नमस्ते दुनिया</li>
            <li>Bangla: স্বাগতম</li>
            <li>Math: ∑, π, √, ≈</li>
          </ul>
        </div>
      </section>

      <section class="card">
        <h2>Viewport basics</h2>
        <p>Use a simple, inclusive default:</p>
        <pre class="ex"><code>&lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;</code></pre>
        <p class="muted">This maps CSS pixels to device width and sets a sane initial zoom.</p>
      </section>

      <section class="card bad">
        <h2>Common mistakes</h2>
        <ul>
          <li>Placing <code>charset</code> after styles/scripts — parser already guessed by then.</li>
          <li>Forgetting <code>initial-scale=1</code> leading to odd zoom defaults.</li>
          <li>Using <code>user-scalable=no</code> or <code>maximum-scale=1</code> without a real a11y reason.</li>
          <li>Typos like <code>UTF8</code> or bad quotes.</li>
        </ul>
      </section>

      <section class="card">
        <h2>Presets</h2>
        <div class="ex">
          <h3>Minimal (recommended)</h3>
          <pre><code>&lt;meta charset="utf-8"&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;</code></pre>

          <h3>Content-heavy app (allow user zoom)</h3>
          <pre><code>&lt;meta name="viewport" content="width=device-width, initial-scale=1, interactive-widget=resizes-content"&gt;</code></pre>

          <h3>Avoid (hurts accessibility)</h3>
          <pre><code>&lt;meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1"&gt;</code></pre>
        </div>
      </section>

      <footer class="muted">
        Tip: If you ever see garbled characters, check: (1) file is saved as UTF-8; (2) <code>charset</code> is first in <code>&lt;head&gt;</code>; (3) server doesn't override encoding headers incorrectly.
      </footer>
    </main>
  </body>
</html>`;

export default function CharsetViewportRecap() {
    useEffect(() => {
        document.title = "Metadata · charset & viewport recap";
    }, []);

    return (
        <Styled.Page>
            <header className="pageHeader" id="top">
                <h1>charset & viewport — recap</h1>
                <p className="lede">
                    <code>&lt;meta charset="utf-8"&gt;</code> ensures the HTML parser decodes bytes into the right characters.
                    The viewport meta controls initial scaling and CSS pixel mapping on mobile. Keep both minimal and correct.
                </p>
            </header>

            <nav className="toc" aria-label="On this page">
                <a href="#charset">Charset (UTF-8)</a>
                <a href="#placement">Placement rules</a>
                <a href="#viewport">Viewport basics</a>
                <a href="#presets">Presets</a>
                <a href="#pitfalls">Pitfalls</a>
                <a href="#faq">FAQ</a>
                <a href="#play">Playground</a>
            </nav>

            <section id="charset">
                <h2>Charset: why UTF-8</h2>
                <div className="card">
                    <ul className="bullets">
                        <li>Supports virtually all human scripts + symbols (emoji, math, etc.).</li>
                        <li>Consistent across OS/devices; avoids mojibake (garbled text).</li>
                        <li>Short, modern form is <code>&lt;meta charset="utf-8"&gt;</code> (not http-equiv).</li>
                    </ul>
                </div>
            </section>

            <section id="placement">
                <h2>Placement rules</h2>
                <div className="grid2">
                    <div className="card">
                        <h3>Do</h3>
                        <ul className="bullets">
                            <li>Put <code>charset</code> as the first child in <code>&lt;head&gt;</code>.</li>
                            <li>Ensure the file is saved as UTF-8 in your editor.</li>
                            <li>Keep server headers consistent (don’t override with legacy encodings).</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h3>Don’t</h3>
                        <ul className="bullets">
                            <li>Place <code>charset</code> after CSS/JS tags.</li>
                            <li>Use <code>user-scalable=no</code> casually—hurts accessibility.</li>
                            <li>Mix different encodings across templates/partials.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="viewport">
                <h2>Viewport basics</h2>
                <Styled.Code aria-label="Recommended viewport">
                    <pre>{String.raw`<meta name="viewport" content="width=device-width, initial-scale=1">`}</pre>
                </Styled.Code>
                <p className="note">
                    This lets layouts size to the device width and starts at a sensible zoom. Allow user zoom unless there’s a
                    very strong reason not to.
                </p>
            </section>

            <section id="presets">
                <h2>Practical presets</h2>
                <div className="grid2">
                    <div className="card">
                        <h3>Minimal (most sites)</h3>
                        <Styled.Code>
                            <pre>{String.raw`<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">`}</pre>
                        </Styled.Code>
                    </div>
                    <div className="card">
                        <h3>Keyboard-safe (modern UIs)</h3>
                        <Styled.Code>
                            <pre>{String.raw`<meta name="viewport"
      content="width=device-width, initial-scale=1, interactive-widget=resizes-content">`}</pre>
                        </Styled.Code>
                        <p className="muted">Helps when on-screen keyboards overlap inputs in some browsers.</p>
                    </div>
                </div>
            </section>

            <section id="pitfalls">
                <h2>Pitfalls</h2>
                <ul className="badges">
                    <li><span className="bad">Wrong</span> <code>UTF8</code> (missing hyphen) or smart quotes.</li>
                    <li><span className="bad">Wrong</span> Multiple conflicting viewport tags.</li>
                    <li><span className="good">Good</span> One charset first, one viewport, kept simple.</li>
                </ul>
            </section>

            <section id="faq">
                <h2>FAQ</h2>
                <details>
                    <summary>Do I still need http-equiv for charset?</summary>
                    <div className="ans">No. Use the short form <code>meta charset="utf-8"</code>. It’s standard and faster to parse.</div>
                </details>
                <details>
                    <summary>What if server sets a different encoding header?</summary>
                    <div className="ans">Ensure server sends UTF-8 or remove conflicting headers. Server headers can override your meta.</div>
                </details>
                <details>
                    <summary>Can I block zoom for a web app feel?</summary>
                    <div className="ans">Avoid blocking zoom. It harms accessibility. Design for zoom instead.</div>
                </details>
            </section>

            <section id="play">
                <h2>Try it live</h2>
                <p className="lede">
                    Edit charset position, tweak viewport values, and test non-ASCII characters below.
                    Autosaves to this lesson’s storage key.
                </p>
                <HtmlPlayground
                    storageKey="core-html:metadata:charset-viewport-recap:v1"
                    initialHtml={STARTER_HTML}
                    height={640}
                />
            </section>

            <nav className="nextPrev" aria-label="Lesson navigation">
                <NavLink to="/metadata/meta-description" className="prev" aria-label="Go to meta description">
                    ← meta description
                </NavLink>
                <NavLink to="/metadata/robots-basics" className="next" aria-label="Go to robots basics">
                    Next: robots basics →
                </NavLink>
            </nav>

            <div className="backTop"><a href="#top">Back to top ↑</a></div>
        </Styled.Page>
    );
}
