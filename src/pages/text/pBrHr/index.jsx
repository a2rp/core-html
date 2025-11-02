import React, { useEffect } from "react";
import { Styled } from "./styled";
import { NavLink } from "react-router-dom";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";

/**
 * <p>, <br>, <hr> usage
 * - Paragraphs are block-level text containers.
 * - <br> is a line-break inside the same paragraph (poetry, addresses).
 * - <hr> is a thematic break (scene change, topic shift), not a styling line.
 * - Demo covers basic rules, good vs bad patterns, and pitfalls.
 * - Monaco playground LAST.
 */

const STARTER_HTML = String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title><p>, <br>, <hr> — core text semantics</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui,-apple-system,Segoe UI,Roboto,sans-serif; }
      main { display: grid; gap: 16px; }
      .card { border: 1px solid #ccc; border-radius: 12px; padding: 12px; }
      .muted { color: #6b7280; }
      .ex { border:1px dashed #aaa; padding:10px; border-radius:10px; margin-top:8px; }
      code { background:#f5f5f5; padding:0 6px; border-radius:6px; }
      hr { border: none; border-top: 1px solid #bbb; margin-block: 1rem; }
      .bad { background: color-mix(in oklab, #dc2626, transparent 92%); border-color:#f2a6a6; }
      .good { background: color-mix(in oklab, #16a34a, transparent 92%); border-color:#8ed09b; }
      .two { columns: 2; column-gap: 24px; }
      @media (max-width: 900px) { .two { columns: 1; } }
    </style>
  </head>
  <body>
    <main>
      <header>
        <h1>&lt;p&gt;, &lt;br&gt;, &lt;hr&gt;</h1>
        <p class="muted">Paragraphs form the narrative flow. Use <code>&lt;br&gt;</code> for a single logical line break inside the same thought, and <code>&lt;hr&gt;</code> to signal a thematic shift.</p>
      </header>

      <section class="card good">
        <h2>Paragraphs: the default text block</h2>
        <div class="two">
          <div>
            <p>Each paragraph should express one idea. Avoid stacking multiple <code>&lt;br&gt;</code>s to simulate spacing; that’s a CSS job.</p>
            <p>Keep your HTML semantic: structure with elements, style with CSS. Screen readers and search engines rely on this separation.</p>
          </div>
          <div class="ex">
            <p>This is a paragraph.</p>
            <p>This is another paragraph. It’s a separate thought.</p>
          </div>
        </div>
      </section>

      <section class="card">
        <h2>Line breaks with &lt;br&gt;</h2>
        <p>Use <code>&lt;br&gt;</code> only when a real line break is part of the content (poetry, addresses, signatures).</p>
        <div class="ex">
          <p>Address example:<br>
             221B Baker Street<br>
             London NW1 6XE<br>
             United Kingdom
          </p>
        </div>
      </section>

      <section class="card">
        <h2>Thematic break with &lt;hr&gt;</h2>
        <p><code>&lt;hr&gt;</code> indicates a shift in topic or scene. It’s not a decorative line; it carries meaning.</p>
        <div class="ex">
          <p>We wrapped up breakfast and headed out.</p>
          <hr>
          <p>By noon, the storm had cleared and the trail opened up.</p>
        </div>
      </section>

      <section class="card bad">
        <h2>Common mistakes</h2>
        <div class="ex">
          <!-- ❌ Using <br><br><br> for spacing instead of CSS -->
          <p>Don’t stack breaks for vertical space.<br><br><br>
             Use margin/padding in CSS instead.</p>
        </div>
        <div class="ex" style="margin-top:8px">
          <!-- ❌ Using <hr> as a pretty divider with no thematic shift -->
          <p>Here’s a random line just for looks.</p>
          <hr>
          <p>This isn’t a new topic; it’s the same thought.</p>
        </div>
      </section>

      <footer class="muted">
        Tip: If the content would appear on separate lines when printed (address, poem), <code>&lt;br&gt;</code> fits. If the topic shifts, <code>&lt;hr&gt;</code> fits. Otherwise, new paragraph.
      </footer>
    </main>
  </body>
</html>`;

export default function PBrHr() {
    useEffect(() => {
        document.title = "Text · <p>, <br>, <hr> usage";
    }, []);

    return (
        <Styled.Page>
            <header className="pageHeader" id="top">
                <h1>
                    <code>&lt;p&gt;</code>, <code>&lt;br&gt;</code>, <code>&lt;hr&gt;</code> usage
                </h1>
                <p className="lede">
                    Paragraphs for ideas, <code>&lt;br&gt;</code> for line breaks within that idea, and{" "}
                    <code>&lt;hr&gt;</code> for a meaningful pause between ideas. That’s the mental model.
                </p>
            </header>

            <nav className="toc" aria-label="On this page">
                <a href="#model">Mental model</a>
                <a href="#rules">Rules of thumb</a>
                <a href="#br">When to use &lt;br&gt;</a>
                <a href="#hr">When to use &lt;hr&gt;</a>
                <a href="#pitfalls">Pitfalls</a>
                <a href="#faq">FAQ</a>
                <a href="#play">Playground</a>
            </nav>

            <section id="model">
                <h2>Mental model</h2>
                <div className="card">
                    <ul className="bullets">
                        <li><strong>Paragraph</strong>: one cohesive idea in running text.</li>
                        <li><strong>Line break</strong>: same idea, new line (addresses, poetry).</li>
                        <li><strong>Thematic break</strong>: new scene/topic boundary.</li>
                    </ul>
                </div>
            </section>

            <section id="rules">
                <h2>Rules of thumb</h2>
                <div className="grid2">
                    <div className="card">
                        <h3>Use <code>&lt;p&gt;</code> when…</h3>
                        <ul className="bullets">
                            <li>You’re writing prose or explanatory text.</li>
                            <li>You want default spacing between text blocks.</li>
                            <li>You need a unit of meaning for assistive tech.</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h3>Use <code>&lt;br&gt;</code> when…</h3>
                        <ul className="bullets">
                            <li>A single forced break belongs to the content.</li>
                            <li>Poetry, addresses, lyrics (public domain), signatures.</li>
                            <li>Small labels needing a controlled wrap.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="br">
                <h2>Line breaks with <code>&lt;br&gt;</code></h2>
                <Styled.Code aria-label="br examples">
                    <pre>{String.raw`<!-- Address -->
<p>
  Ashish Ranjan<br>
  2nd Floor, Tech Park<br>
  Patna 800001
</p>

<!-- Short label -->
<p>Upload status:<br><strong>Processing</strong></p>

<!-- Poetry -->
<p>
  Two roads diverged in a yellow wood,<br>
  And sorry I could not travel both
</p>`}</pre>
                </Styled.Code>
                <p className="note">
                    Don’t chain multiple <code>&lt;br&gt;</code> for spacing. Use CSS margin utilities or a dedicated class.
                </p>
            </section>

            <section id="hr">
                <h2>Thematic breaks with <code>&lt;hr&gt;</code></h2>
                <Styled.Code aria-label="hr examples">
                    <pre>{String.raw`<p>Morning stand-up covered blockers and a quick demo.</p>
<hr>
<p>In the afternoon, the team switched to release prep.</p>

<!-- Styling is fine, meaning stays the same -->
<hr class="thin">`}</pre>
                </Styled.Code>
                <p className="note">
                    You can style <code>&lt;hr&gt;</code> via CSS, but keep its semantic meaning: a change in scene or topic.
                </p>
            </section>

            <section id="pitfalls">
                <h2>Pitfalls</h2>
                <ul className="badges">
                    <li><span className="bad">Wrong</span> Using <code>&lt;br&gt;</code> to create vertical spacing.</li>
                    <li><span className="bad">Wrong</span> Inserting <code>&lt;hr&gt;</code> as a decorative line with no topic shift.</li>
                    <li><span className="good">Good</span> One idea per <code>&lt;p&gt;</code>, a single <code>&lt;br&gt;</code> for intentional line breaks, <code>&lt;hr&gt;</code> for thematic boundaries.</li>
                </ul>
            </section>

            <section id="faq">
                <h2>FAQ</h2>
                <details>
                    <summary>Can I nest a paragraph inside another paragraph?</summary>
                    <div className="ans">No. Paragraphs can contain phrasing content, not other block-level paragraphs.</div>
                </details>
                <details>
                    <summary>Is multiple &lt;br&gt; ever okay?</summary>
                    <div className="ans">Avoid it. If spacing is the goal, use CSS margins/padding or utility classes.</div>
                </details>
                <details>
                    <summary>Can I replace &lt;hr&gt; with a styled div?</summary>
                    <div className="ans">You can visually, but you’ll lose the semantic meaning. Prefer <code>&lt;hr&gt;</code> and style it.</div>
                </details>
            </section>

            {/* LAST: Monaco playground */}
            <section id="play">
                <h2>Try it live</h2>
                <p className="lede">
                    Convert break stacks to margins, change decorative lines to meaningful <code>&lt;hr&gt;</code>, and align paragraphs to ideas.
                </p>
                <HtmlPlayground
                    storageKey="core-html:text:p-br-hr:v1"
                    initialHtml={STARTER_HTML}
                    height={640}
                />
            </section>

            {/* Prev + Next within “Headings & Text Semantics” */}
            <nav className="nextPrev" aria-label="Lesson navigation">
                <NavLink to="/headings/h1-h6-hierarchy" className="prev" aria-label="Go to H1–H6 hierarchy">
                    ← H1–H6 hierarchy
                </NavLink>
                <NavLink to="/text/em-vs-strong" className="next" aria-label="Go to Emphasis vs Strong">
                    Next: Emphasis vs Strong →
                </NavLink>
            </nav>

            <div className="backTop"><a href="#top">Back to top ↑</a></div>
        </Styled.Page>
    );
}
