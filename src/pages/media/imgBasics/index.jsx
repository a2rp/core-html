import React, { useEffect } from "react";
import { Styled } from "./styled";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";
import { NavLink } from "react-router-dom";

/*
  Topic: <img> src, alt, width/height (Prevent CLS; proper alt text)

  Goals
  - Understand why width/height (or aspect-ratio) avoids CLS (layout shift).
  - Write good alt text for informative images; alt="" for decorative.
  - Know when to use loading="lazy" and decoding="async".
  - See real patterns: fixed-dimension images, responsive images, decorative images, figures.
*/

const STARTER_HTML = String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>&lt;img&gt; basics — src, alt, width/height</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui, -apple-system, Segoe UI, Roboto, sans-serif; }
      main { display: grid; gap: 16px; }
      .grid { display: grid; gap: 14px; }
      @media (min-width: 900px) { .grid { grid-template-columns: 1fr 1fr; } }

      .card { border: 1px solid #ccc; border-radius: 12px; padding: 12px; background: color-mix(in oklab, CanvasText, transparent 96%); }
      .muted { color: #6b7280; }
      .goodTag, .badTag {
        display:inline-block; font-size:12px; padding:2px 8px; border-radius:999px; border:1px solid #aaa; margin-bottom:8px;
      }
      .goodTag { background:#152417; color:#b6f3c1; border-color:#264a2b; }
      .badTag  { background:#2b1a1a; color:#ffb4b4; border-color:#553; }

      .demoRow { display:grid; gap:8px; }
      .frame {
        border:1px dashed #aaa; padding:8px; border-radius:10px;
        display:grid; gap:8px; align-items:start; justify-items:start;
      }

      /* Simulated content skeleton to visualize CLS */
      .skeleton {
        height: 18px; width: 100%;
        background: linear-gradient(90deg, #e3e3e3 0%, #f5f5f5 50%, #e3e3e3 100%);
        background-size: 200% 100%;
        animation: sh 1.2s infinite linear;
        border-radius: 6px;
      }
      @keyframes sh { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }

      .imgBox { display:grid; gap:6px; width:100%; }

      /* Responsive container keeps aspect ratio using CSS (for the "responsive" example) */
      .ratioBox {
        position: relative;
        width: 100%;
        aspect-ratio: 16 / 9;
        overflow: hidden;
        border-radius: 8px;
        border: 1px solid #d0d0d0;
      }
      .ratioBox > img {
        position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover;
      }

      figure { margin: 0; }
      figcaption { font-size: 12px; color: #6b7280; margin-top: 6px; }
      code { background: #f5f5f5; padding: 0 6px; border-radius: 6px; }

      /* Tiny gallery grid to show good/bad CLS behavior side-by-side */
      .twoCol { display:grid; gap:12px; }
      @media (min-width: 900px) { .twoCol { grid-template-columns: 1fr 1fr; } }
    </style>
  </head>
  <body>
    <main>
      <header>
        <h1>&lt;img&gt; basics: src, alt, width/height</h1>
        <p class="muted">Give images dimensions (or an aspect ratio) to reserve space and avoid layout shift. Write alt text that matches purpose. Use lazy/decoding wisely.</p>
      </header>

      <!-- Demo images use embedded SVG data URLs so they always load -->
      <!-- 800×450 SVG -->
      <template id="svg800x450">
        data:image/svg+xml;utf8,
        <svg xmlns='http://www.w3.org/2000/svg' width='800' height='450'>
          <rect width='100%' height='100%' fill='#d1e8ff'/>
          <text x='50%' y='50%' text-anchor='middle' fill='#094067' font-size='32' font-family='system-ui'>800 × 450</text>
        </svg>
      </template>

      <!-- 1200×800 SVG -->
      <template id="svg1200x800">
        data:image/svg+xml;utf8,
        <svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800'>
          <rect width='100%' height='100%' fill='#fde68a'/>
          <text x='50%' y='50%' text-anchor='middle' fill='#7c2d12' font-size='32' font-family='system-ui'>1200 × 800</text>
        </svg>
      </template>

      <section class="card">
        <h2>Prevent layout shift (CLS) with width/height</h2>
        <div class="twoCol">
          <div class="frame">
            <span class="goodTag">Good</span>
            <div class="imgBox">
              <img
                src="" alt="Blue placeholder 800 by 450"
                id="imgGood1"
                width="800" height="450"
                loading="lazy" decoding="async"
                style="max-width:100%; height:auto"
              />
              <div class="skeleton"></div>
              <div class="skeleton" style="width:70%"></div>
            </div>
            <p class="muted">Space is reserved because width/height are set. No jump.</p>
          </div>

          <div class="frame">
            <span class="badTag">Bad</span>
            <div class="imgBox">
              <img
                src="" alt="Blue placeholder 800 by 450"
                id="imgBad1"
                loading="lazy" decoding="async"
                style="max-width:100%; height:auto"
              />
              <div class="skeleton"></div>
              <div class="skeleton" style="width:70%"></div>
            </div>
            <p class="muted">No intrinsic dimensions. Content will jump when image loads.</p>
          </div>
        </div>
      </section>

      <section class="card">
        <h2>Responsive layout with CSS aspect-ratio</h2>
        <div class="grid">
          <div class="frame">
            <span class="goodTag">Good</span>
            <div class="ratioBox">
              <img id="imgGood2" src="" alt="Yellow placeholder 1200 by 800" loading="lazy" decoding="async" />
            </div>
            <p class="muted">Container enforces aspect-ratio. No layout shift.</p>
          </div>

          <div class="frame">
            <span class="badTag">Bad</span>
            <div>
              <img id="imgBad2" src="" alt="Yellow placeholder 1200 by 800" loading="lazy" decoding="async" style="max-width:100%; height:auto" />
            </div>
            <p class="muted">No width/height or aspect-ratio → the page reflows when the image appears.</p>
          </div>
        </div>
      </section>

      <section class="card">
        <h2>Alt text: informative vs decorative</h2>
        <div class="grid">
          <div class="frame">
            <span class="goodTag">Informative</span>
            <figure>
              <img id="imgAlt1" src="" width="800" height="450" alt="Product screenshot showing the dashboard's analytics cards" loading="lazy" decoding="async" style="max-width:100%; height:auto" />
              <figcaption>Describe the image's purpose or content. Avoid "image of…".</figcaption>
            </figure>
          </div>

          <div class="frame">
            <span class="goodTag">Decorative</span>
            <figure>
              <img id="imgAlt2" src="" width="800" height="450" alt="" aria-hidden="true" loading="lazy" decoding="async" style="max-width:100%; height:auto" />
              <figcaption>Decorative: use <code>alt=""</code> (and optionally <code>aria-hidden="true"</code>) so screen readers skip it.</figcaption>
            </figure>
          </div>
        </div>
        <p class="muted">
          If the surrounding text already conveys the same information, the image can be decorative. Otherwise, write concise, specific alt text that captures purpose.
        </p>
      </section>

      <section class="card">
        <h2>Figure + caption</h2>
        <figure>
          <img id="imgFig" src="" width="1200" height="800" alt="City skyline at dusk with warm lights" loading="lazy" decoding="async" style="max-width:100%; height:auto" />
          <figcaption>Use <code>&lt;figure&gt;</code> for self-contained content and <code>&lt;figcaption&gt;</code> to describe or credit it.</figcaption>
        </figure>
      </section>

      <section class="card">
        <h2>Quick checklist</h2>
        <ul>
          <li>Set <code>width</code>/<code>height</code> (or a stable aspect ratio) to reserve space.</li>
          <li>Write alt text that matches the image's purpose; use <code>alt=""</code> for decorative images.</li>
          <li><code>loading="lazy"</code> is good for below-the-fold images; keep LCP images eager.</li>
          <li><code>decoding="async"</code> avoids blocking; the browser may decode off the main path.</li>
        </ul>
      </section>

      <footer class="muted">Tip: You can also provide <code>width</code>/<code>height</code> for responsive images; the browser scales them while keeping the intrinsic ratio, preventing CLS.</footer>

      <script>
        // Fill images from templates (so the HTML stays readable above)
        function data(id) {
          const t = document.getElementById(id);
          return (t && t.textContent || "").trim().replace(/\\n\\s*/g, "");
        }
        const BLUE = data("svg800x450");
        const YEL  = data("svg1200x800");

        document.getElementById("imgGood1").src = BLUE;
        document.getElementById("imgBad1").src  = BLUE;

        document.getElementById("imgGood2").src = YEL;
        document.getElementById("imgBad2").src  = YEL;

        document.getElementById("imgAlt1").src  = BLUE;
        document.getElementById("imgAlt2").src  = BLUE;

        document.getElementById("imgFig").src   = YEL;
      </script>
    </main>
  </body>
</html>`;

export default function ImgBasics() {
    useEffect(() => {
        document.title = "Media · <img> src, alt, width/height";
    }, []);

    return (
        <Styled.Page>
            <header className="pageHeader" id="top">
                <h1>
                    <code>&lt;img&gt;</code> src, alt, width/height
                </h1>
                <p className="lede">
                    Reserve space to prevent layout shift, then add alt text that matches intent.
                    Use lazy loading and async decoding where they help, not blindly.
                </p>
            </header>

            <nav className="toc" aria-label="On this page">
                <a href="#intrinsic">Intrinsic dimensions & CLS</a>
                <a href="#alt">Alt text basics</a>
                <a href="#figure">Figure & caption</a>
                <a href="#play">Playground</a>
            </nav>

            <section id="intrinsic">
                <h2>Intrinsic dimensions & CLS</h2>
                <div className="card">
                    <ul className="bullets">
                        <li>
                            Give images <code>width</code> and <code>height</code> that reflect their intrinsic size.
                            Browsers preserve aspect ratio and scale them via CSS.
                        </li>
                        <li>
                            Without intrinsic dimensions, the browser can't reserve space → content jumps when the image loads.
                        </li>
                        <li>
                            For responsive layouts, a wrapper with <code>aspect-ratio</code> also prevents reflow.
                        </li>
                    </ul>
                </div>
            </section>

            <section id="alt">
                <h2>Alt text basics</h2>
                <div className="grid2">
                    <div className="card">
                        <h3>Informative images</h3>
                        <p>
                            Write what a sighted user would learn that's not already in nearby text.
                            Keep it brief and relevant.
                        </p>
                        <Styled.Code>
                            <pre>{String.raw`<img src="…" width="800" height="450"
     alt="Product screenshot showing analytics cards"
     loading="lazy" decoding="async">`}</pre>
                        </Styled.Code>
                    </div>
                    <div className="card">
                        <h3>Decorative images</h3>
                        <p>
                            If the image adds no information (pure decoration), set <code>alt=""</code>.
                            Screen readers will skip it.
                        </p>
                        <Styled.Code>
                            <pre>{String.raw`<img src="…" width="800" height="450"
     alt="" aria-hidden="true"
     loading="lazy" decoding="async">`}</pre>
                        </Styled.Code>
                    </div>
                </div>
            </section>

            <section id="figure">
                <h2>Figure & caption</h2>
                <div className="card">
                    <p>
                        Use <code>&lt;figure&gt;</code> for self-contained media. Pair it with
                        <code> &lt;figcaption&gt;</code> to describe, credit, or label the image.
                    </p>
                    <Styled.Code>
                        <pre>{String.raw`<figure>
  <img src="…" width="1200" height="800" alt="City skyline at dusk">
  <figcaption>Sunset over the skyline — Photo by Someone.</figcaption>
</figure>`}</pre>
                    </Styled.Code>
                </div>
            </section>

            <section id="play">
                <h2>Try it live</h2>
                <p className="lede">
                    Add width/height to the “Bad” examples, or wrap the image in a ratio box. Tweak alt text to match purpose.
                    Notice how the page stops jumping.
                </p>
                <HtmlPlayground
                    storageKey="core-html:media:img-basics:v1"
                    initialHtml={STARTER_HTML}
                    height={720}
                />
            </section>

            <nav className="nextPrev" aria-label="Lesson navigation">
                <NavLink to="/links/link-text-quality" className="prev" aria-label="Go to Link text quality">
                    ← Link text quality
                </NavLink>
                <NavLink to="/media/decorative-vs-informative" className="next" aria-label="Go to Decorative vs informative">
                    Next: Decorative vs informative →
                </NavLink>
            </nav>

            <div className="backTop"><a href="#top">Back to top ↑</a></div>
        </Styled.Page>
    );
}
