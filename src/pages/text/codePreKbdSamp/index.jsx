// src/pages/text/codePreKbdSamp/index.jsx
import React, { useEffect } from "react";
import { Styled } from "./styled";
import { NavLink } from "react-router-dom";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";

/**
 * Topic: <code>, <pre>, <kbd>, <samp>
 * Goal: Understand when to use each element, how to combine them,
 *       and how to keep markup accessible and readable.
 */

const STARTER_HTML = String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>&lt;code&gt;, &lt;pre&gt;, &lt;kbd&gt;, &lt;samp&gt; — live demo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui,-apple-system,Segoe UI,Roboto,sans-serif; }
      main { display: grid; gap: 12px; }

      /* Demo helpers */
      .card { border: 1px solid #ccc; border-radius: 12px; padding: 12px; }
      .muted { color: #6b7280; }

      pre, code, kbd, samp {
        font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
        font-size: 0.95rem;
      }
      code { background: #f6f7f9; padding: 0 6px; border-radius: 6px; }
      kbd {
        background: #111; color: #fff; border-radius: 6px;
        padding: 2px 6px; border: 1px solid #333; box-shadow: inset 0 -1px 0 #0005;
        white-space: nowrap;
      }
      .keys kbd + kbd::before { content: " + "; color: #6b7280; }
      pre {
        margin: 0; padding: 12px; border: 1px solid #ddd; border-radius: 10px; background: #f9fafb;
        overflow: auto;
      }
      .cols { display: grid; gap: 12px; grid-template-columns: repeat(2, minmax(0, 1fr)); }
      @media (max-width: 900px) { .cols { grid-template-columns: 1fr; } }
      .good { background: color-mix(in oklab, #16a34a, transparent 92%); border-color:#8ed09b; }
      .bad  { background: color-mix(in oklab, #dc2626, transparent 92%); border-color:#f2a6a6; }
      .ex { border:1px dashed #aaa; padding:8px; border-radius:10px; margin-top:6px; }

      /* Table */
      table { width: 100%; border-collapse: collapse; }
      th, td { border: 1px solid #ddd; padding: 8px; }
      th { text-align: left; background: #f3f4f6; }
    </style>
  </head>
  <body>
    <main>
      <header>
        <h1>&lt;code&gt;, &lt;pre&gt;, &lt;kbd&gt;, &lt;samp&gt;</h1>
        <p class="muted">Four small tags that do a lot of clarity work for technical text.</p>
      </header>

      <section class="card">
        <h2>Inline vs block</h2>
        <div class="cols">
          <div class="card good">
            <h3>Good</h3>
            <p>Inline <code>&lt;code&gt;</code> inside a paragraph when referring to tokens, e.g. <code>Array.prototype.map</code>.</p>
            <p>Use a block <code>&lt;pre&gt;</code> with nested <code>&lt;code&gt;</code> for multi-line snippets:</p>
            <div class="ex">
              <pre><code>function greet(name) {
  return \`Hello, \${name}\`;
}</code></pre>
            </div>
          </div>
          <div class="card bad">
            <h3>Bad</h3>
            <p>Don’t put long blocks inside plain <code>&lt;code&gt;</code> without <code>&lt;pre&gt;</code>—you’ll lose formatting and wrapping.</p>
            <div class="ex">
              <code>function long() { /* … 20 lines … */ }</code>
            </div>
          </div>
        </div>
      </section>

      <section class="card">
        <h2>Keyboard input with &lt;kbd&gt;</h2>
        <p>Mark the exact keys a user should press:</p>
        <p class="keys"><kbd>Ctrl</kbd><kbd>K</kbd> • <kbd>Cmd</kbd><kbd>Shift</kbd><kbd>P</kbd> • <kbd>Esc</kbd></p>
        <p>Explain alternatives per OS if needed.</p>
      </section>

      <section class="card">
        <h2>Sample output with &lt;samp&gt;</h2>
        <p>Show what the system prints or returns:</p>
        <div class="ex">
          <p>$ <kbd>node</kbd> app.js</p>
          <p>→ <samp>Server listening on http://localhost:3000</samp></p>
          <p>→ <samp>Error: permission denied</samp></p>
        </div>
      </section>

      <section class="card">
        <h2>&lt;pre&gt; + &lt;code&gt; combo</h2>
        <p>Use together for blocks. <code>&lt;pre&gt;</code> preserves whitespace; <code>&lt;code&gt;</code> semantically marks code.</p>
        <div class="ex">
<pre><code>&lt;pre&gt;&lt;code class="language-js"&gt;
const nums = [1,2,3];
console.log(nums.map(n =&gt; n*2));
&lt;/code&gt;&lt;/pre&gt;</code></pre>
        </div>
      </section>

      <section class="card">
        <h2>Quick reference</h2>
        <table>
          <thead>
            <tr><th>Element</th><th>Purpose</th><th>Typical content</th></tr>
          </thead>
          <tbody>
            <tr><td><code>&lt;code&gt;</code></td><td>Inline code fragment</td><td>Identifiers, file names, CLI flags</td></tr>
            <tr><td><code>&lt;pre&gt;</code></td><td>Preformatted block</td><td>Multi-line code, logs</td></tr>
            <tr><td><code>&lt;kbd&gt;</code></td><td>User input (keys)</td><td><kbd>Ctrl</kbd><kbd>C</kbd>, <kbd>⌘</kbd><kbd>K</kbd></td></tr>
            <tr><td><code>&lt;samp&gt;</code></td><td>Program output</td><td><samp>404 Not Found</samp></td></tr>
          </tbody>
        </table>
      </section>

      <section class="card">
        <h2>Escaping angle brackets</h2>
        <p>When you want to show tags literally, escape them: <code>&amp;lt;div&amp;gt;</code> renders as <code>&lt;div&gt;</code>.</p>
      </section>

      <footer class="muted">
        Tip: Keep instructions predictable—“press <kbd>Ctrl</kbd><kbd>/</kbd> to toggle comments.”
      </footer>
    </main>
  </body>
</html>`;

export default function CodePreKbdSamp() {
    useEffect(() => {
        document.title = "Text · <code>, <pre>, <kbd>, <samp>";
    }, []);

    return (
        <Styled.Page>
            <header className="pageHeader" id="top">
                <h1>
                    <code>&lt;code&gt;</code>, <code>&lt;pre&gt;</code>, <code>&lt;kbd&gt;</code>,{" "}
                    <code>&lt;samp&gt;</code>
                </h1>
                <p className="lede">
                    Use these four elements to separate <em>what you type</em>, <em>what the system prints</em>,
                    and <em>how multi-line code keeps its formatting</em>. Clear semantics → clearer docs.
                </p>
            </header>

            <nav className="toc" aria-label="On this page">
                <a href="#inline-block">Inline vs block</a>
                <a href="#kbd">Keyboard input</a>
                <a href="#samp">Sample output</a>
                <a href="#combo">pre + code combo</a>
                <a href="#escape">Escaping</a>
                <a href="#pitfalls">Pitfalls</a>
                <a href="#play">Playground</a>
            </nav>

            <section id="inline-block">
                <h2>Inline vs block</h2>
                <div className="grid2">
                    <div className="card">
                        <h3>Inline <code>&lt;code&gt;</code></h3>
                        <p>
                            Use inline <code>code</code> for short tokens inside sentences:
                            <code> npm run build</code>, <code>fetch(url)</code>, <code>style.css</code>.
                        </p>
                    </div>
                    <div className="card">
                        <h3>Block <code>&lt;pre&gt;</code></h3>
                        <p>
                            Use <code>pre</code> (often wrapping <code>code</code>) for multi-line blocks where
                            whitespace matters—source code, stack traces, log excerpts.
                        </p>
                    </div>
                </div>
            </section>

            <section id="kbd">
                <h2>Keyboard input with <code>&lt;kbd&gt;</code></h2>
                <div className="card">
                    <p>
                        Represent key presses with <code>kbd</code>. For combos, nest multiple{" "}
                        <code>kbd</code> elements:
                    </p>
                    <Styled.Keys>
                        <kbd>Ctrl</kbd>
                        <kbd>K</kbd>
                    </Styled.Keys>
                    <p className="note">
                        Label platform differences explicitly: <code>Ctrl</code> on Windows/Linux,{" "}
                        <code>Cmd</code> on macOS.
                    </p>
                </div>
            </section>

            <section id="samp">
                <h2>Program output with <code>&lt;samp&gt;</code></h2>
                <div className="card">
                    <p>
                        Wrap terminal or program output in <code>samp</code> so readers can tell input from
                        output at a glance.
                    </p>
                    <Styled.Code aria-label="Sample output">
                        <pre>{`$ curl -I https://example.com
HTTP/2 200
server: Example
content-type: text/html; charset=utf-8
`}</pre>
                    </Styled.Code>
                </div>
            </section>

            <section id="combo">
                <h2><code>&lt;pre&gt;</code> + <code>&lt;code&gt;</code> combo</h2>
                <Styled.Code aria-label="pre + code example">
                    <pre>{String.raw`<pre><code class="language-js">
const nums = [1,2,3];
console.log(nums.map(n => n * 2));
</code></pre>`}</pre>
                </Styled.Code>
                <p className="note">
                    The <code>class="language-…"</code> hook lets highlighters (Prism, Highlight.js, etc.) do
                    their thing without extra attributes.
                </p>
            </section>

            <section id="escape">
                <h2>Escaping angle brackets</h2>
                <div className="card">
                    <p>
                        To display literal tags, escape them: <code>&amp;lt;h1&amp;gt;</code> →{" "}
                        <code>&lt;h1&gt;</code>. Inside <code>pre</code>, you still need to escape angle
                        brackets when you want to show code <em>as text</em> rather than let the browser parse it.
                    </p>
                </div>
            </section>

            <section id="pitfalls">
                <h2>Pitfalls</h2>
                <ul className="badges">
                    <li>
                        <span className="bad">Wrong</span> Using <code>div</code> with monospace font to fake
                        code semantics.
                    </li>
                    <li>
                        <span className="bad">Wrong</span> Long blocks with only <code>code</code> (no{" "}
                        <code>pre</code>) → whitespace lost.
                    </li>
                    <li>
                        <span className="good">Good</span> <code>kbd</code> = user input, <code>samp</code> =
                        program output.
                    </li>
                </ul>
            </section>

            {/* LAST: Monaco playground */}
            <section id="play">
                <h2>Try it live</h2>
                <p className="lede">
                    Convert long inline snippets to <code>pre</code> blocks, mark keys with{" "}
                    <code>kbd</code>, and label output with <code>samp</code>. Autosaves to this lesson.
                </p>
                <HtmlPlayground
                    storageKey="core-html:text:code-pre-kbd-samp:v1"
                    initialHtml={STARTER_HTML}
                    height={680}
                />
            </section>

            {/* Prev + Next */}
            <nav className="nextPrev" aria-label="Lesson navigation">
                <NavLink
                    to="/text/inline-semantics"
                    className="prev"
                    aria-label="Go to Inline semantic elements"
                >
                    ← Inline semantic elements
                </NavLink>
                <NavLink
                    to="/links/minimal-anatomy"
                    className="next"
                    aria-label="Go to Anchor anatomy"
                >
                    Next: Anchor anatomy →
                </NavLink>
            </nav>

            <div className="backTop">
                <a href="#top">Back to top ↑</a>
            </div>
        </Styled.Page>
    );
}
