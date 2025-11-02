// src/pages/media/figureFigcaption/index.jsx
import React, { useEffect } from "react";
import { Styled } from "./styled";
import { NavLink } from "react-router-dom";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";

/**
 * <figure> + <figcaption>
 * - Mental model: media (or self-contained content) with an optional caption
 * - When to use figure vs plain img
 * - Rules: figcaption position (first/last), one caption per figure
 * - Alt vs caption: purpose vs prose
 * - Multiple images in a single figure
 * - A11y: descriptive alt, caption semantics, aria-labelledby
 * - CSS patterns: top/bottom caption, overlay
 * - Pitfalls and FAQ
 * - Live playground LAST
 */

const STARTER_HTML = String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title><figure> + <figcaption> — demo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui,-apple-system,Segoe UI,Roboto,sans-serif; }
      .grid { display: grid; gap: 14px; }
      .card { border: 1px solid #ccc; border-radius: 12px; padding: 12px; background: #fff; }
      @media (prefers-color-scheme: dark) {
        .card { background: color-mix(in oklab, white, transparent 94%); border-color: #444; }
        code { background: #1f2328; color: #e6edf3; }
      }
      .muted { color: #6b7280; }
      code { background: #f5f5f5; padding: 0 6px; border-radius: 6px; }

      /* Figure presets */
      figure { margin: 0; border: 1px solid #ddd; border-radius: 10px; overflow: clip; background: #fafafa; }
      figure img { display: block; width: 100%; height: auto; }
      figcaption { padding: 8px 10px; font-size: 13px; color: #374151; background: #f0f2f5; border-top: 1px solid #e5e7eb; }
      .capTop figcaption { border-top: none; border-bottom: 1px solid #e5e7eb; }
      .capTop figcaption { order: -1; } /* when used with display:flex on figure */
      .overlayDemo { position: relative; }
      .overlayDemo img { display: block; }
      .overlayDemo figcaption {
        position: absolute; inset: auto 8px 8px 8px;
        background: color-mix(in oklab, black, transparent 65%);
        color: white; border: 1px solid color-mix(in oklab, white, transparent 75%);
        border-radius: 8px; padding: 6px 10px;
      }
      .twoCols { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 12px; }
      @media (max-width: 900px) { .twoCols { grid-template-columns: 1fr; } }

      .bad { background: #fff3f3; border: 1px solid #f3b7b7; }
      .good { background: #f4fff6; border: 1px solid #9ed3a9; }

      .k { display:inline-block; border:1px solid #bbb; border-radius:999px; padding:2px 8px; font-size:12px; }
      .ex { border:1px dashed #aaa; padding:8px; border-radius:10px; margin-top:6px; }

      /* Flex helper for top caption variant */
      figure.capTop { display: flex; flex-direction: column; }
      .sr-only {
        position: absolute !important; width: 1px; height: 1px; padding: 0; margin: -1px;
        overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0;
      }
    </style>
  </head>
  <body>
    <main class="grid">
      <header>
        <h1>&lt;figure&gt; + &lt;figcaption&gt;</h1>
        <p class="muted">
          Use <code>&lt;figure&gt;</code> for self-contained content (image, diagram, code listing, chart) that
          benefits from a caption. The caption goes in <code>&lt;figcaption&gt;</code>.
        </p>
      </header>

      <section class="card good">
        <h2>Basic figure with caption</h2>
        <div class="ex">
          <figure>
            <img src="https://picsum.photos/800/400?grayscale" alt="Mountain range under a cloudy sky" width="800" height="400">
            <figcaption>Fig. 1 — Cloud cover over a mountain range during sunset.</figcaption>
          </figure>
        </div>
      </section>

      <section class="card">
        <h2>Caption at the top</h2>
        <p>Place <code>&lt;figcaption&gt;</code> before/after the content. Visually placing it on top is just CSS.</p>
        <div class="ex">
          <figure class="capTop">
            <figcaption>Fig. 2 — Caption before the image (rendered on top).</figcaption>
            <img src="https://picsum.photos/seed/capTop/800/400" alt="City skyline reflected in a river at dusk" width="800" height="400">
          </figure>
        </div>
      </section>

      <section class="card">
        <h2>Overlay caption</h2>
        <p>For photo credits or short labels, you can overlay the caption.</p>
        <div class="ex">
          <figure class="overlayDemo">
            <img src="https://picsum.photos/seed/overlay/800/400" alt="Forest path with tall trees on both sides" width="800" height="400">
            <figcaption>Photo: Example Credits — CC0</figcaption>
          </figure>
        </div>
      </section>

      <section class="card">
        <h2>Multiple images in one figure</h2>
        <p>Use one figure when the images collectively share a single caption.</p>
        <div class="ex">
          <figure>
            <div class="twoCols">
              <img src="https://picsum.photos/seed/a/600/400" alt="Close-up of a leaf with visible veins" width="600" height="400">
              <img src="https://picsum.photos/seed/b/600/400" alt="Water ripple forming concentric circles" width="600" height="400">
            </div>
            <figcaption>Fig. 3 — Texture & motion: leaf structure and water ripple compared.</figcaption>
          </figure>
        </div>
      </section>

      <section class="card">
        <h2>Alt vs caption (different jobs)</h2>
        <ul>
          <li><b>Alt</b> = concise replacement if the image fails or is not loaded. Describes function/purpose.</li>
          <li><b>Caption</b> = visible prose giving context, credit, or commentary.</li>
        </ul>
        <div class="ex">
          <figure aria-labelledby="cap-roles">
            <img src="https://picsum.photos/seed/roles/800/400" alt="Bar chart of monthly sales from Jan to Jun trending upward" width="800" height="400">
            <figcaption id="cap-roles">Fig. 4 — Sales trend: +45% over six months (data: sample CSV).</figcaption>
          </figure>
        </div>
      </section>

      <section class="card bad">
        <h2>Common mistakes</h2>
        <ul>
          <li>Wrapping every image in a figure even when no caption exists.</li>
          <li>Using figcaption without figure or placing it in the middle of other children (must be first or last).</li>
          <li>Writing long, novel-length alt text (keep alt succinct; elaborate in caption or nearby text).</li>
        </ul>
        <div class="ex">
          <!-- ❌ Bad: figcaption not first/last -->
          <figure>
            <img src="https://picsum.photos/seed/oops/600/300" alt="…" width="600" height="300">
            <p>Some random paragraph in between (invalid position).</p>
            <figcaption>Fig. X — This caption is in the wrong place.</figcaption>
          </figure>
        </div>
      </section>

      <section class="card">
        <h2>Non-image content works too</h2>
        <p>Figures can wrap code listings, tables, diagrams — anything self-contained with a caption.</p>
        <div class="ex">
          <figure>
            <pre><code>const mean = arr =&gt; arr.reduce((a,b) =&gt; a + b, 0) / arr.length;</code></pre>
            <figcaption>Fig. 5 — One-liner to compute arithmetic mean in JavaScript.</figcaption>
          </figure>
        </div>
      </section>

      <footer class="muted">
        Tips:
        <span class="k">figure ≠ required for all images</span>
        <span class="k">figcaption: first or last only</span>
        <span class="k">One caption per figure</span>
      </footer>
    </main>
  </body>
</html>`;

export default function FigureFigcaption() {
    useEffect(() => {
        document.title = "Media · <figure> + <figcaption>";
    }, []);

    return (
        <Styled.Page>
            <header className="pageHeader" id="top">
                <h1>
                    <code>&lt;figure&gt;</code> + <code>&lt;figcaption&gt;</code>
                </h1>
                <p className="lede">
                    Use a figure when media (or another self-contained block) needs a visible caption. Leave it as a plain{" "}
                    <code>&lt;img&gt;</code> when a caption is unnecessary.
                </p>
            </header>

            <nav className="toc" aria-label="On this page">
                <a href="#model">Mental model</a>
                <a href="#rules">Rules</a>
                <a href="#alt-vs-cap">Alt vs caption</a>
                <a href="#multi">Multiple images</a>
                <a href="#css">CSS patterns</a>
                <a href="#pitfalls">Pitfalls</a>
                <a href="#faq">FAQ</a>
                <a href="#play">Playground</a>
            </nav>

            <section id="model">
                <h2>Mental model</h2>
                <div className="card">
                    <ul className="bullets">
                        <li>
                            <strong>Figure</strong> is for self-contained content that could be referenced from the main flow.
                        </li>
                        <li>
                            <strong>Figcaption</strong> is the caption for that content—context, credit, summary.
                        </li>
                        <li>Don’t wrap every image in a figure. If there’s no caption, a plain image is usually correct.</li>
                    </ul>
                </div>
            </section>

            <section id="rules">
                <h2>Rules</h2>
                <div className="grid2">
                    <div className="card">
                        <h3>Structure</h3>
                        <ul className="bullets">
                            <li>Caption must be the <em>first or last</em> child of the figure.</li>
                            <li>Only one <code>&lt;figcaption&gt;</code> per figure.</li>
                            <li>Figures can be referenced in text: “see Fig. 2”.</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h3>Accessibility</h3>
                        <ul className="bullets">
                            <li>Write concise, purposeful <code>alt</code> text for images.</li>
                            <li>
                                Link caption and content via proximity; for explicit relation, use <code>aria-labelledby</code> on the
                                figure that points to the caption’s id.
                            </li>
                            <li>Decorative images should have empty alt (<code>alt=""</code>) and usually no figure.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="alt-vs-cap">
                <h2>Alt vs caption</h2>
                <Styled.Code role="region" aria-label="Alt vs caption example">
                    <pre>{String.raw`<figure aria-labelledby="chart-cap">
  <img src="chart.png" alt="Line chart of quarterly revenue rising from Q1 to Q4">
  <figcaption id="chart-cap">Fig. A — Revenue increased 28% year-over-year.</figcaption>
</figure>`}</pre>
                </Styled.Code>
                <p className="note">
                    Alt replaces the image if it fails to render or for screen readers; the caption is extra context for everyone.
                </p>
            </section>

            <section id="multi">
                <h2>Multiple images, one caption</h2>
                <Styled.Code>
                    <pre>{String.raw`<figure>
  <img src="left.jpg" alt="Early prototype of the device on a desk">
  <img src="right.jpg" alt="Shipping unit in its retail packaging">
  <figcaption>Prototype vs production unit comparison.</figcaption>
</figure>`}</pre>
                </Styled.Code>
            </section>

            <section id="css">
                <h2>CSS patterns</h2>
                <div className="grid2">
                    <div className="card">
                        <h3>Top caption</h3>
                        <Styled.Code>
                            <pre>{String.raw`figure.capTop { display: flex; flex-direction: column; }
figure.capTop figcaption { order: -1; }`}</pre>
                        </Styled.Code>
                    </div>
                    <div className="card">
                        <h3>Overlay label</h3>
                        <Styled.Code>
                            <pre>{String.raw`.overlayDemo { position: relative; }
.overlayDemo figcaption { position: absolute; inset: auto 8px 8px 8px; }`}</pre>
                        </Styled.Code>
                    </div>
                </div>
            </section>

            <section id="pitfalls">
                <h2>Pitfalls</h2>
                <ul className="badges">
                    <li><span className="bad">Wrong</span> Figcaption in the middle of children.</li>
                    <li><span className="bad">Wrong</span> Figure with no need for a caption.</li>
                    <li><span className="good">Good</span> Clear alt + concise caption when needed.</li>
                </ul>
            </section>

            <section id="faq">
                <h2>FAQ</h2>
                <details>
                    <summary>Should product thumbnails use figure?</summary>
                    <div className="ans">Usually not. Thumbnails rarely need captions; use plain <code>&lt;img&gt;</code> with good alt.</div>
                </details>
                <details>
                    <summary>Can I place a table or code block inside a figure?</summary>
                    <div className="ans">Yes. Figure is for any self-contained content that benefits from a caption.</div>
                </details>
                <details>
                    <summary>What about very long descriptions?</summary>
                    <div className="ans">Keep <code>alt</code> succinct. Put long prose near the image or link to a detailed description.</div>
                </details>
            </section>

            {/* LAST: Monaco playground */}
            <section id="play">
                <h2>Try it live</h2>
                <p className="lede">
                    Add captions where they help, keep alt concise, and experiment with top/overlay styles. Autosaves to this lesson.
                </p>
                <HtmlPlayground
                    storageKey="core-html:media:figure-figcaption:v1"
                    initialHtml={STARTER_HTML}
                    height={720}
                />
            </section>

            {/* Prev + Next */}
            <nav className="nextPrev" aria-label="Lesson navigation">
                <NavLink to="/media/decorative-vs-informative" className="prev" aria-label="Go to Decorative vs informative images">
                    ← Decorative vs informative
                </NavLink>
                <NavLink to="/media/audio-video-simple" className="next" aria-label="Go to Simple audio/video">
                    Next: Simple audio/video →
                </NavLink>
            </nav>

            <div className="backTop"><a href="#top">Back to top ↑</a></div>
        </Styled.Page>
    );
}
