import React, { useEffect } from "react";
import { Styled } from "./styled";
import { NavLink } from "react-router-dom";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";

/**
 * <em> vs <strong>
 * - Semantics: emphasis (stress) vs importance (weight)
 * - Visuals are defaults; meaning survives style changes
 * - Nesting levels: layered emphasis/importance
 * - <i>/<b> vs <em>/<strong>
 * - A11y: screen reader stress & connotation
 * - Common pitfalls & patterns
 * - Playground LAST
 */

const STARTER_HTML = String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>&lt;em&gt; vs &lt;strong&gt; — demo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui,-apple-system,Segoe UI,Roboto,sans-serif; }
      main { display: grid; gap: 14px; }
      .card { border: 1px solid #ccc; border-radius: 12px; padding: 12px; }
      .muted { color: #6b7280; }
      .ex { border:1px dashed #aaa; padding:10px; border-radius:10px; margin-top:8px; }
      code { background:#f5f5f5; padding:0 6px; border-radius:6px; }
      .good { background: color-mix(in oklab, #16a34a, transparent 92%); border-color:#8ed09b; }
      .bad  { background: color-mix(in oklab, #dc2626, transparent 92%); border-color:#f2a6a6; }
    </style>
  </head>
  <body>
    <main>
      <header>
        <h1>&lt;em&gt; vs &lt;strong&gt;</h1>
        <p class="muted">Use <code>&lt;em&gt;</code> for stress emphasis (how something is said). Use <code>&lt;strong&gt;</code> for importance/urgency.</p>
      </header>

      <section class="card good">
        <h2>Emphasis (stress) — <code>&lt;em&gt;</code></h2>
        <p>Changing the meaning by stressing a word:</p>
        <div class="ex">
          <p>I <em>did</em> send the email. (contrast on “did”)</p>
          <p>I did send the <em>email</em>. (contrast on “email” vs something else)</p>
        </div>
      </section>

      <section class="card good">
        <h2>Importance (weight) — <code>&lt;strong&gt;</code></h2>
        <p>Flagging priority/seriousness:</p>
        <div class="ex">
          <p><strong>Warning:</strong> Deleting a project is permanent.</p>
          <p><strong>Required:</strong> Provide a billing email.</p>
        </div>
      </section>

      <section class="card">
        <h2>Nesting levels</h2>
        <p>Nesting compounds the effect:</p>
        <div class="ex">
          <p>This is <em>really <em>really</em></em> late. (double stress)</p>
          <p><strong>Important: <strong>Critical:</strong></strong> Rotate credentials now. (double importance)</p>
        </div>
      </section>

      <section class="card bad">
        <h2>Don’t style semantics backward</h2>
        <p>Using <code>&lt;em&gt;</code> just to italicize or <code>&lt;strong&gt;</code> just to bold is backwards. Use CSS for visuals, elements for meaning.</p>
        <div class="ex">
          <p><!-- ❌ wrong -->
            <em class="bad">Product</em> list title (no stress intended)
          </p>
          <p><!-- ✅ ok -->
            <span style="font-style:italic">Product</span> list title (purely visual)
          </p>
        </div>
      </section>

      <section class="card">
        <h2><code>&lt;i&gt;</code>/<code>&lt;b&gt;</code> vs <code>&lt;em&gt;</code>/<code>&lt;strong&gt;</code></h2>
        <p><code>&lt;i&gt;</code>/<code>&lt;b&gt;</code> are presentational (voice, taxonomy, keywords, pull-quotes). Prefer semantic <code>&lt;em&gt;</code>/<code>&lt;strong&gt;</code> when you mean stress/importance.</p>
        <div class="ex">
          <p>Ship name <i>INS Vikrant</i> (a title in a different voice — <i>ok</i>).</p>
          <p><strong>Heads up:</strong> Maintenance tonight. (importance — use <code>&lt;strong&gt;</code>).</p>
        </div>
      </section>

      <footer class="muted">
        Tip: Ask “Am I changing how the sentence is heard?” → <code>&lt;em&gt;</code>. “Am I marking priority?” → <code>&lt;strong&gt;</code>.
      </footer>
    </main>
  </body>
</html>`;

export default function EmVsStrong() {
    useEffect(() => {
        document.title = "Text semantics · <em> vs <strong>";
    }, []);

    return (
        <Styled.Page>
            <header className="pageHeader" id="top">
                <h1>
                    <code>&lt;em&gt;</code> vs <code>&lt;strong&gt;</code>
                </h1>
                <p className="lede">
                    <code>&lt;em&gt;</code> adds <em>stress</em> to change interpretation;{" "}
                    <code>&lt;strong&gt;</code> marks <strong>importance</strong> or urgency.
                    Their default italics/bold are just visuals—meaning survives even if styles change.
                </p>
            </header>

            <nav className="toc" aria-label="On this page">
                <a href="#model">Mental model</a>
                <a href="#levels">Nesting levels</a>
                <a href="#ib">i/b vs em/strong</a>
                <a href="#a11y">Accessibility</a>
                <a href="#pitfalls">Pitfalls</a>
                <a href="#play">Playground</a>
            </nav>

            <section id="model">
                <h2>Mental model</h2>
                <div className="card">
                    <ul className="bullets">
                        <li>
                            <strong>Emphasis = stress</strong> (how it’s said). Example: <code>I <em>did</em> call.</code>
                        </li>
                        <li>
                            <strong>Importance = weight</strong> (priority/severity). Example: <code><strong>Warning:</strong> High voltage.</code>
                        </li>
                        <li>
                            Use CSS for italics/bold if you only want style; use <code>&lt;em&gt;</code>/<code>&lt;strong&gt;</code> for meaning.
                        </li>
                    </ul>
                </div>
            </section>

            <section id="levels">
                <h2>Nesting levels</h2>
                <div className="grid2">
                    <div className="card">
                        <h3>Layered emphasis</h3>
                        <Styled.Code role="region" aria-label="Nested em example">
                            <pre>{String.raw`I am <em>really <em>sorry</em></em>.`}</pre>
                        </Styled.Code>
                        <p className="note">Inner <code>&lt;em&gt;</code> increases stress further; screen readers may change prosody.</p>
                    </div>
                    <div className="card">
                        <h3>Layered importance</h3>
                        <Styled.Code role="region" aria-label="Nested strong example">
                            <pre>{String.raw`<strong>Important: <strong>Critical:</strong></strong> Apply patch now.`}</pre>
                        </Styled.Code>
                        <p className="note">Use sparingly; overuse dulls the signal.</p>
                    </div>
                </div>
            </section>

            <section id="ib">
                <h2><code>&lt;i&gt;</code>/<code>&lt;b&gt;</code> vs semantics</h2>
                <Styled.Code role="region" aria-label="i/b vs em/strong">
                    <pre>{String.raw`<!-- Presentational -->
<i>INS Vikrant</i> departed.   <!-- voice/offset text -->
<b>In short</b>, caching helps. <!-- keyword style only -->

<!-- Semantic -->
<em>I did</em> file the report.  <!-- stress -->
<strong>Required:</strong> Name.  <!-- importance -->`}</pre>
                </Styled.Code>
                <p className="note">
                    If a screen reader ignores styles, <code>&lt;i&gt;</code>/<code>&lt;b&gt;</code> may add little;{" "}
                    <code>&lt;em&gt;</code>/<code>&lt;strong&gt;</code> still communicate intent.
                </p>
            </section>

            <section id="a11y">
                <h2>Accessibility notes</h2>
                <ul className="bullets">
                    <li>AT (assistive tech) can change prosody for <code>&lt;em&gt;</code> and announce importance for <code>&lt;strong&gt;</code>.</li>
                    <li>Don’t stack importance everywhere; prioritize real warnings, errors, deadlines.</li>
                    <li>Avoid using <code>&lt;em&gt;</code> for mere italics in navigation or labels.</li>
                </ul>
            </section>

            <section id="pitfalls">
                <h2>Pitfalls</h2>
                <ul className="badges">
                    <li><span className="bad">Wrong</span> Using <code>&lt;em&gt;</code> to make headings italic.</li>
                    <li><span className="bad">Wrong</span> Using <code>&lt;strong&gt;</code> to bold every keyword.</li>
                    <li><span className="good">Good</span> Keep semantics aligned with intent; use CSS for pure styling.</li>
                </ul>
            </section>

            <section id="play">
                <h2>Try it live</h2>
                <p className="lede">
                    Convert presentational italics/bold to proper semantics where meaning is intended.
                    Reduce overuse. Add nested levels only when justified.
                </p>
                <HtmlPlayground
                    storageKey="core-html:text:em-vs-strong:v1"
                    initialHtml={STARTER_HTML}
                    height={640}
                />
            </section>

            <nav className="nextPrev" aria-label="Lesson navigation">
                <NavLink to="/text/p-br-hr" className="prev" aria-label="Go to Paragraphs, br, hr">
                    ← Paragraphs, br, hr
                </NavLink>
                <NavLink to="/text/inline-semantics" className="next" aria-label="Go to Inline semantics">
                    Next: Inline semantics →
                </NavLink>
            </nav>

            <div className="backTop"><a href="#top">Back to top ↑</a></div>
        </Styled.Page>
    );
}
