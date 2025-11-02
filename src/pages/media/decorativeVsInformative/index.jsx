import React, { useEffect } from "react";
import { Styled } from "./styled";
import { NavLink } from "react-router-dom";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";

/**
 * Decorative vs Informative images — when alt can be empty ("")
 * - Mental model: does the image add meaning the text does not already convey?
 * - Rules for alt=""
 * - When to write meaningful alt
 * - Figures and captions
 * - Icons and SVGs
 * - Background images in CSS
 * - Pitfalls and quick checks
 * - Monaco playground (last)
 */

const STARTER_HTML = String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>decorative vs informative — demo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui,-apple-system,Segoe UI,Roboto,sans-serif; }
      .grid { display: grid; gap: 14px; }
      .card { border: 1px solid #ccc; border-radius: 12px; padding: 12px; }
      .muted { color: #6b7280; }
      .good { background: color-mix(in oklab, #16a34a, transparent 92%); border-color:#8ed09b; }
      .bad  { background: color-mix(in oklab, #dc2626, transparent 92%); border-color:#f2a6a6; }
      code { background: #f5f5f5; padding:0 6px; border-radius:6px; }
      .ex { border:1px dashed #aaa; padding:8px; border-radius:10px; margin-top:6px; }
      .row { display:grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap:10px; }
      @media (max-width: 800px){ .row { grid-template-columns: 1fr; } }
      figure { margin: 0; }
      figcaption { font-size: 13px; color:#6b7280; margin-top:6px; }
    </style>
  </head>
  <body>
    <main class="grid">
      <header>
        <h1>Decorative vs informative <small class="muted">(when alt can be empty)</small></h1>
        <p class="muted">If the image adds no new information, use <code>alt=""</code>. If it communicates meaning, write a concise, truthful <code>alt</code> description.</p>
      </header>

      <section class="card good">
        <h2>Decorative → <code>alt=""</code></h2>
        <p>Pure ornament, repeated logos, divider flourishes, aesthetic backgrounds. Screen readers should skip these.</p>
        <div class="ex row">
          <div>
            <p class="muted">Correct</p>
            <img src="banner-swoosh.png" alt="" />
          </div>
          <div>
            <p class="muted">Also fine (CSS)</p>
            <div style="height:70px;border:1px solid #ccc;background:url(banner-swoosh.png) center/cover"></div>
          </div>
        </div>
      </section>

      <section class="card">
        <h2>Informative → meaningful <code>alt</code></h2>
        <p>Product photos, charts, photos that convey context, icons used as labels.</p>
        <div class="ex row">
          <div>
            <p class="muted">Product image</p>
            <img src="shoe-red.png" alt="Red running shoe, side view" />
          </div>
          <div>
            <p class="muted">Icon as label</p>
            <button>
              <img src="icon-download.svg" alt="Download" />
              Download
            </button>
          </div>
        </div>
      </section>

      <section class="card">
        <h2>Figures & captions</h2>
        <p>Use <code>&lt;figure&gt;</code> + <code>&lt;figcaption&gt;</code> when the caption is important. The <code>alt</code> should still be useful.</p>
        <div class="ex">
          <figure>
            <img src="graph-q3.png" alt="Line chart of Q3 revenue rising from 2.1 to 3.4 crore" />
            <figcaption>Q3 revenue trend (Apr–Jun).</figcaption>
          </figure>
        </div>
      </section>

      <section class="card">
        <h2>Icons and SVG</h2>
        <div class="ex row">
          <div>
            <p class="muted">Decorative icon</p>
            <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
            <span>Dashboard</span>
          </div>
          <div>
            <p class="muted">Icon that <em>is</em> the label</p>
            <a href="/home" aria-label="Home">
              <svg role="img" aria-label="Home" width="22" height="22" viewBox="0 0 24 24"><path d="M3 12L12 3l9 9"/></svg>
            </a>
          </div>
        </div>
      </section>

      <section class="card bad">
        <h2>Pitfalls</h2>
        <ul>
          <li><strong>Wrong:</strong> <code>alt="image of"</code>, <code>alt="photo"</code> — adds no value.</li>
          <li><strong>Wrong:</strong> Leaving <code>alt</code> off entirely on <code>&lt;img&gt;</code>.</li>
          <li><strong>Wrong:</strong> Stuffing keywords unrelated to the image.</li>
          <li><strong>Careful:</strong> Text in images. Prefer real text; if unavoidable, ensure the <code>alt</code> conveys the same text.</li>
        </ul>
      </section>

      <footer class="muted">
        Quick check: If you removed the image, would users miss information? If yes → write useful <code>alt</code>. If no → consider <code>alt=""</code> or CSS background.
      </footer>
    </main>
  </body>
</html>`;

export default function DecorativeVsInformative() {
    useEffect(() => {
        document.title = 'Media · Decorative vs informative (alt="")';
    }, []);

    return (
        <Styled.Page>
            <header className="pageHeader" id="top">
                <h1>
                    Decorative vs informative images <small className="muted">(when <code>alt=""</code> is correct)</small>
                </h1>
                <p className="lede">
                    Images either convey meaning or they don’t. If an image adds information not already in nearby text, write a concise
                    <code> alt</code>. If it’s purely decorative, use an empty <code>alt=""</code> so assistive tech skips it.
                </p>
            </header>

            <nav className="toc" aria-label="On this page">
                <a href="#model">Mental model</a>
                <a href="#rules">Rules for alt</a>
                <a href="#figure">Figures & captions</a>
                <a href="#icons">Icons & SVG</a>
                <a href="#css">Background images</a>
                <a href="#pitfalls">Pitfalls</a>
                <a href="#play">Playground</a>
            </nav>

            <section id="model">
                <h2>Mental model</h2>
                <div className="card">
                    <ul className="bullets">
                        <li><strong>Informative</strong>: the image communicates content the text does not. Write a useful <code>alt</code>.</li>
                        <li><strong>Decorative</strong>: the image is ornamental or redundant. Use <code>alt=""</code> so it’s ignored by screen readers.</li>
                        <li><strong>Functional</strong>: the image is a control (e.g., icon-only button). Provide the action label via <code>alt</code> or <code>aria-label</code>.</li>
                    </ul>
                </div>
            </section>

            <section id="rules">
                <h2>Rules for <code>alt</code></h2>
                <div className="grid2">
                    <div className="card">
                        <h3>When to use <code>alt=""</code></h3>
                        <ul className="bullets">
                            <li>Pure decoration: borders, separators, flourishes.</li>
                            <li>Textual duplicate: a logo next to the site name already in text.</li>
                            <li>Redundant preview: a thumbnail with the same caption immediately adjacent.</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h3>When to describe</h3>
                        <ul className="bullets">
                            <li>Photos that set context: “Crowded market street at dusk.”</li>
                            <li>UI icons used as labels: <code>alt="Search"</code>.</li>
                            <li>Charts: summarize the key pattern or conclusion.</li>
                        </ul>
                    </div>
                </div>

                <Styled.Code role="region" aria-label="Examples of alt text">
                    <pre>{String.raw`<!-- Decorative banner flourish -->
<img src="/img/flare.png" alt="" />

<!-- Informative product photo -->
<img src="/img/mug-blue.jpg" alt="Blue ceramic mug, 350 ml" />

<!-- Icon acting as label -->
<button type="button">
  <img src="/icons/download.svg" alt="Download" />
</button>`}</pre>
                </Styled.Code>
            </section>

            <section id="figure">
                <h2>Figures & captions</h2>
                <p className="note">
                    Use <code>&lt;figure&gt;</code> when the image and its caption form a single unit. The <code>alt</code> should still be helpful on its own.
                </p>

                <Styled.Code>
                    <pre>{String.raw`<figure>
  <img src="/charts/revenue-q3.png" alt="Q3 revenue increased 28 percent over Q2" />
  <figcaption>Quarterly revenue (Apr–Jun).</figcaption>
</figure>`}</pre>
                </Styled.Code>
            </section>

            <section id="icons">
                <h2>Icons & SVG</h2>
                <div className="grid2">
                    <div className="card">
                        <h3>Decorative icon</h3>
                        <p>If the icon is purely visual, hide it from AT.</p>
                        <Styled.Code>
                            <pre>{String.raw`<svg aria-hidden="true" focusable="false" width="20" height="20" ...>…</svg>`}</pre>
                        </Styled.Code>
                    </div>
                    <div className="card">
                        <h3>Icon-only control</h3>
                        <p>Provide the label via <code>aria-label</code> or linked text.</p>
                        <Styled.Code>
                            <pre>{String.raw`<button aria-label="Close">
  <svg role="img" aria-label="Close" width="20" height="20">…</svg>
</button>`}</pre>
                        </Styled.Code>
                    </div>
                </div>
            </section>

            <section id="css">
                <h2>Background images (CSS)</h2>
                <div className="card">
                    <ul className="bullets">
                        <li>Purely decorative backgrounds belong in CSS; no <code>alt</code> needed.</li>
                        <li>If the image carries meaning, prefer an actual <code>&lt;img&gt;</code> with real <code>alt</code>.</li>
                    </ul>
                </div>
                <Styled.Code>
                    <pre>{String.raw`.hero {
  background: url("/img/texture.png") center/cover no-repeat;
}`}</pre>
                </Styled.Code>
            </section>

            <section id="pitfalls">
                <h2>Pitfalls</h2>
                <ul className="badges">
                    <li><span className="bad">Wrong</span> Omitting <code>alt</code> entirely on <code>&lt;img&gt;</code>.</li>
                    <li><span className="bad">Wrong</span> “Image of…”, “Photo of…” boilerplate.</li>
                    <li><span className="bad">Wrong</span> Using images to render important text without reflecting it in <code>alt</code>.</li>
                    <li><span className="good">Good</span> Keep <code>alt</code> brief and factual; avoid SEO stuffing.</li>
                </ul>
            </section>

            {/* LAST: Monaco playground */}
            <section id="play">
                <h2>Try it live</h2>
                <p className="lede">
                    Decide which images are decorative and which are informative. Add <code>alt=""</code> where appropriate, and improve
                    descriptive alt text for meaningful images. Autosaves to this lesson.
                </p>
                <HtmlPlayground
                    storageKey="core-html:media:decorative-vs-informative:v1"
                    initialHtml={STARTER_HTML}
                    height={640}
                />
            </section>

            {/* Prev + Next */}
            <nav className="nextPrev" aria-label="Lesson navigation">
                <NavLink to="/media/img-basics" className="prev" aria-label="Go to Image basics">
                    ← Image basics
                </NavLink>
                <NavLink to="/media/figure-figcaption" className="next" aria-label="Go to Figure + Figcaption">
                    Next: Figure + Figcaption →
                </NavLink>
            </nav>

            <div className="backTop"><a href="#top">Back to top ↑</a></div>
        </Styled.Page>
    );
}
