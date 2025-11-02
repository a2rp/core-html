import React, { useEffect } from "react";
import { Styled } from "./styled";
import { NavLink } from "react-router-dom";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";

/**
 * Pattern: <figure> with <figcaption>
 * - Why use it: semantic pairing of media + caption
 * - Alt text vs caption responsibility
 * - Prevent CLS (intrinsic width/height)
 * - Decorative vs informative images
 * - Linking figure + credit/attribution
 * - Multiple media in one figure (image + code or image + table)
 * - Live playground at the end
 */

const STARTER_HTML = String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>figure + figcaption — pattern</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui,-apple-system,Segoe UI,Roboto,sans-serif; }
      .grid { display: grid; gap: 16px; }
      figure { margin: 0; border: 1px solid #ccc; border-radius: 12px; padding: 10px; background: #fff; }
      figcaption { font-size: 13px; color: #555; margin-top: 8px; }
      .muted { color: #6b7280; }
      .row { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; }
      @media (max-width: 900px) { .row { grid-template-columns: 1fr; } }
      .credit { font-size: 12px; color: #666; }
      .oklab { background: color-mix(in oklab, #22c55e, transparent 92%); border: 1px solid #9ee3b2; padding: 8px; border-radius: 10px; }
      .warn { background: color-mix(in oklab, #f59e0b, transparent 90%); border: 1px solid #f6c66a; padding: 8px; border-radius: 10px; }
      code { background:#f5f5f5; padding:0 6px; border-radius:6px; }
    </style>
  </head>
  <body>
    <main class="grid">
      <header>
        <h1><code>&lt;figure&gt;</code> with <code>&lt;figcaption&gt;</code></h1>
        <p class="muted">
          Pair media and its caption to help meaning and navigation. Keep <code>alt</code> for the image's purpose,
          and the caption for extra context/credit/source.
        </p>
      </header>

      <section class="row">
        <div>
          <h2>Basic usage</h2>
          <figure>
            <!-- Always include width/height to prevent layout shift -->
            <img
              src="https://picsum.photos/id/1015/600/400"
              alt="A river cutting through a forested valley at sunrise"
              width="600" height="400"
              loading="lazy" decoding="async"
            >
            <figcaption>
              Morning light over the valley. Photo by <a href="https://picsum.photos" target="_blank" rel="noopener">Picsum</a>.
            </figcaption>
          </figure>
        </div>

        <div>
          <h2>Decorative image</h2>
          <div class="warn">
            If the image is purely decorative, set <code>alt=""</code> and you may omit figure/figcaption entirely.
          </div>
          <figure>
            <img
              src="https://picsum.photos/id/1025/600/400"
              alt="" width="600" height="400" loading="lazy" decoding="async"
            >
            <figcaption>Decorative background texture (no essential info).</figcaption>
          </figure>
        </div>
      </section>

      <section class="row">
        <div>
          <h2>Picture sources (art direction)</h2>
          <figure>
            <picture>
              <source srcset="https://picsum.photos/id/1035/900/600" media="(min-width: 900px)">
              <source srcset="https://picsum.photos/id/1035/600/400" media="(min-width: 600px)">
              <img
                src="https://picsum.photos/id/1035/480/320"
                alt="Rocky coastline with waves and clouds"
                width="480" height="320" loading="lazy" decoding="async"
              >
            </picture>
            <figcaption>
              Alternate crops for different viewports. Art direction via <code>&lt;picture&gt;</code>.
            </figcaption>
          </figure>
        </div>

        <div>
          <h2>Linking the figure</h2>
          <figure>
            <a href="https://picsum.photos/id/1016/1200/800" target="_blank" rel="noopener">
              <img
                src="https://picsum.photos/id/1016/600/400"
                alt="Snowy mountain range under a clear sky"
                width="600" height="400" loading="lazy" decoding="async"
              >
            </a>
            <figcaption>
              Click to open full resolution. Include source/credit in the caption when required.
              <span class="credit">© Example License</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section>
        <h2>Multiple media in one figure</h2>
        <div class="oklab">
          A <code>figure</code> can bundle more than one thing (e.g., image + legend/table, or image + code).
          The caption describes the set.
        </div>
        <figure>
          <img
            src="https://picsum.photos/id/1029/560/360"
            alt="Bar chart illustrating quarterly sales with Q3 peak"
            width="560" height="360" loading="lazy" decoding="async"
          >
          <pre aria-label="Data shown in the chart"><code>Q1: 120
Q2: 150
Q3: 210
Q4: 160</code></pre>
          <figcaption>
            Quarterly sales visualization with raw values. Provide the same insight in text for accessibility.
          </figcaption>
        </figure>
      </section>

      <section>
        <h2>Common mistakes</h2>
        <ul>
          <li>Putting the caption as text below an image without <code>&lt;figure&gt;</code>/<code>&lt;figcaption&gt;</code> semantics.</li>
          <li>Using a caption to replace missing <code>alt</code> (they serve different purposes).</li>
          <li>Omitting width/height, causing layout shift when images load.</li>
        </ul>
      </section>

      <footer class="muted">
        Tip: Describe the image meaning via <code>alt</code>, and everything extra (context, credit, link) in <code>figcaption</code>.
      </footer>
    </main>
  </body>
</html>`;

export default function FigureWithCaption() {
    useEffect(() => {
        document.title = "Patterns · Figure with caption";
    }, []);

    return (
        <Styled.Page>
            <header className="pageHeader" id="top">
                <h1>Figure with caption</h1>
                <p className="lede">
                    Use <code>&lt;figure&gt;</code> to group media with its <code>&lt;figcaption&gt;</code>. Keep the image’s{" "}
                    <code>alt</code> focused on meaning, and move credits/context/links to the caption. Always set{" "}
                    <code>width</code>/<code>height</code> to avoid layout shift.
                </p>
            </header>

            <nav className="toc" aria-label="On this page">
                <a href="#why">Why this pattern</a>
                <a href="#alt-vs-caption">Alt vs caption</a>
                <a href="#intrinsic">Prevent layout shift</a>
                <a href="#decorative">Decorative vs informative</a>
                <a href="#multi">Multiple media in one figure</a>
                <a href="#play">Playground</a>
            </nav>

            <section id="why">
                <h2>Why this pattern</h2>
                <div className="card">
                    <ul className="bullets">
                        <li>Semantically binds an image (or chart/video) with its explanation or credit.</li>
                        <li>Improves navigation for assistive tech via a single grouped region.</li>
                        <li>Makes styling/placement of image + caption predictable.</li>
                    </ul>
                </div>
            </section>

            <section id="alt-vs-caption">
                <h2>Alt text vs caption</h2>
                <Styled.Code role="region" aria-label="Alt vs caption example">
                    <pre>{String.raw`<figure>
  <img src="map.png" alt="India map highlighting Ganga basin">
  <figcaption>Study area: Ganga basin extent with major tributaries.</figcaption>
</figure>`}</pre>
                </Styled.Code>
                <p className="note">
                    <strong>Alt</strong> describes the image’s purpose for non-visual users; <strong>caption</strong> adds context,
                    source, credit, or links. Don’t duplicate the alt inside the caption.
                </p>
            </section>

            <section id="intrinsic">
                <h2>Prevent layout shift (CLS)</h2>
                <Styled.Code role="region" aria-label="Intrinsic size example">
                    <pre>{String.raw`<img src="photo.jpg" alt="…" width="800" height="533" loading="lazy" decoding="async">`}</pre>
                </Styled.Code>
                <p className="note">
                    Provide <code>width</code>/<code>height</code> so browsers can reserve space. The image still scales with CSS
                    (it’s just the intrinsic ratio).
                </p>
            </section>

            <section id="decorative">
                <h2>Decorative vs informative</h2>
                <ul className="badges">
                    <li><span className="good">Decorative</span> <code>alt=""</code> and usually no caption.</li>
                    <li><span className="good">Informative</span> Meaningful <code>alt</code> + caption for extra context/credit.</li>
                </ul>
            </section>

            <section id="multi">
                <h2>Multiple media in one figure</h2>
                <div className="card">
                    Bundle image + legend, or image + code/table in a single <code>figure</code>. The caption explains the set.
                </div>
            </section>

            {/* LAST: Monaco playground */}
            <section id="play">
                <h2>Try it live</h2>
                <p className="lede">
                    Add width/height, tighten alt text, move extra info into figcaption, try linking the figure, and test an art-direction
                    example with <code>&lt;picture&gt;</code>.
                </p>
                <HtmlPlayground
                    storageKey="core-html:patterns:figure-with-caption:v1"
                    initialHtml={STARTER_HTML}
                    height={640}
                />
            </section>

            {/* Prev + Next */}
            <nav className="nextPrev" aria-label="Lesson navigation">
                <NavLink to="/patterns/data-table-with-scope" className="prev" aria-label="Go to Data table with scope">
                    ← Data table with scope
                </NavLink>
                <NavLink to="/patterns/basic-page-skeleton" className="next" aria-label="Go to Page skeleton + skip link">
                    Next: Page skeleton + skip link →
                </NavLink>
            </nav>

            <div className="backTop"><a href="#top">Back to top ↑</a></div>
        </Styled.Page>
    );
}
