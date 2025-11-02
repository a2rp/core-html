import React, { useEffect } from "react";
import { Styled } from "./styled";
import { NavLink } from "react-router-dom";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";

/**
 * Pitfall: Avoid putting text inside images
 * Why it's a problem:
 * - Screen readers can’t parse pixels. Alt text is not a replacement for real, selectable text.
 * - Text in images is blurry on scaling, not theme-aware, and hard to translate.
 * - Search engines can’t reliably index text baked into images.
 * - Performance: raster banners are heavier than HTML+CSS.
 *
 * Use real text + CSS. Keep images purely illustrative, then label them with headings, paragraphs, and captions.
 */

const STARTER_HTML = String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Avoid text inside images — live practice</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui,-apple-system,Segoe UI,Roboto,sans-serif; }
      main { display: grid; gap: 16px; max-width: 1100px; margin: 0 auto; }

      .grid2 { display: grid; gap: 14px; grid-template-columns: repeat(2, minmax(0,1fr)); }
      @media (max-width: 900px) { .grid2 { grid-template-columns: 1fr; } }

      .card { border: 1px solid #ccc; border-radius: 12px; padding: 12px; background: #fff; }
      @media (prefers-color-scheme: dark) { .card { background: #111; border-color: #333; } }

      .muted { color: #6b7280; }
      .k { display:inline-block; border:1px solid #bbb; border-radius:999px; padding:2px 8px; font-size:12px; }
      code { background: #f5f5f5; padding:0 6px; border-radius:6px; }
      @media (prefers-color-scheme: dark) { code { background: #1d1d1d; } }

      /* Demo blocks */
      .bannerBad {
        border: 1px dashed #999; border-radius: 10px; padding: 8px;
        display: grid; place-items: center; background: #f7f7f7;
      }
      .bannerBad img { max-width: 100%; height: auto; display: block; }

      .bannerGood {
        border: 1px dashed #999; border-radius: 10px; padding: 0; overflow: clip;
        position: relative; min-height: 140px; display: grid; place-items: center; text-align: center;
        /* decorative background (SVG gradient) */
        background-image: radial-gradient(1200px 400px at 50% 0%, #cde6ff 0, transparent 60%),
                         linear-gradient(135deg, #0070f3 0%, #00b7ff 100%);
        color: #fff;
      }
      .bannerGood h2 { margin: 18px 8px 0; line-height: 1.2; }
      .bannerGood p  { margin: 6px 12px 14px; opacity: .95; }
      .bannerGood a.button {
        display:inline-block; margin: 4px 0 16px; padding: 8px 14px; border-radius: 999px;
        background: rgba(255,255,255,.15); color: #fff; text-decoration: none; border: 1px solid rgba(255,255,255,.3);
      }
      .bannerGood a.button:focus { outline: 2px solid #fff; outline-offset: 2px; }

      /* Figure pattern */
      figure { margin: 0; }
      figcaption { font-size: 13px; color: #6b7280; margin-top: 6px; }

      /* Utility */
      .good { background: color-mix(in oklab, #16a34a, transparent 92%); border-color:#8ed09b; }
      .bad  { background: color-mix(in oklab, #dc2626, transparent 92%); border-color:#f2a6a6; }
      .ex { border:1px dashed #aaa; padding:8px; border-radius:10px; margin-top:6px; }
    </style>
  </head>
  <body>
    <main>
      <header>
        <h1>Avoid text inside images</h1>
        <p class="muted">Prefer real, selectable text. Keep images decorative or illustrative, then label them correctly.</p>
      </header>

      <div class="grid2">
        <section class="card bad">
          <h2>Bad: text baked into image</h2>
          <p>Screen readers see only the <code>alt</code>. Zooming blurs the text, theming doesn’t apply, and translation/search suffer.</p>
          <div class="ex bannerBad" role="img" aria-label="This box simulates a raster banner containing the words 'Mega Sale - 50% OFF Today'">
            <!-- Simulation: an <img> that already contains text pixels -->
            <img
              src="data:image/svg+xml;utf8,${encodeURIComponent(`
                <svg xmlns='http://www.w3.org/2000/svg' width='640' height='180'>
                  <defs>
                    <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
                      <stop offset='0%' stop-color='#222'/>
                      <stop offset='100%' stop-color='#555'/>
                    </linearGradient>
                  </defs>
                  <rect width='100%' height='100%' fill='url(#g)'/>
                  <text x='50%' y='50%' fill='#fff' font-family='Segoe UI, Roboto, sans-serif' font-size='42' text-anchor='middle' dominant-baseline='middle'>
                    Mega Sale — 50% OFF Today
                  </text>
                </svg>
              `)}"
              alt="Mega Sale — 50% OFF Today"
            />
          </div>
          <ul>
            <li>Text is part of pixels → not selectable, not themeable.</li>
            <li>Zoom causes blur; languages can’t change easily.</li>
            <li>Search engines and assistive tech lose structure.</li>
          </ul>
        </section>

        <section class="card good">
          <h2>Good: real text + decorative background</h2>
          <div class="bannerGood" aria-labelledby="sale-title" aria-describedby="sale-desc">
            <div>
              <h2 id="sale-title">Mega Sale</h2>
              <p id="sale-desc">Get 50% off today. Limited time. Terms apply.</p>
              <a class="button" href="#">Shop deals</a>
            </div>
          </div>
          <ul>
            <li>Headings and paragraphs are accessible and selectable.</li>
            <li>High-DPI crispness, theme-friendly, translatable.</li>
            <li>Smaller payload vs large raster banners.</li>
          </ul>
        </section>
      </div>

      <section class="card">
        <h2>When image text can be acceptable</h2>
        <ul>
          <li><span class="k">Logos</span> — company marks often contain stylized text. Provide <code>alt</code> with the organization name.</li>
          <li><span class="k">Screenshots</span> — use a caption and describe what matters; don’t rely only on pixels.</li>
          <li><span class="k">Diagrams</span> — prefer real SVG with <code>&lt;text&gt;</code> elements that remain selectable.</li>
        </ul>
      </section>

      <section class="card">
        <h2>Figure pattern for informative images</h2>
        <figure>
          <img
            src="data:image/svg+xml;utf8,${encodeURIComponent(`
              <svg xmlns='http://www.w3.org/2000/svg' width='640' height='220'>
                <rect width='100%' height='100%' fill='#eef2ff'/>
                <g font-family='Segoe UI, Roboto, sans-serif' fill='#1f2937'>
                  <text x='24' y='48' font-size='22'>Bar chart: Quarterly growth</text>
                  <rect x='40' y='140' width='80' height='60' fill='#60a5fa'/>
                  <rect x='140' y='110' width='80' height='90' fill='#93c5fd'/>
                  <rect x='240' y='80'  width='80' height='120' fill='#60a5fa'/>
                  <rect x='340' y='100' width='80' height='100' fill='#93c5fd'/>
                </g>
              </svg>
            `)}"
            alt="Bar chart showing quarterly growth; Q3 is tallest"
            width="640" height="220"
          />
          <figcaption>Use <code>&lt;figure&gt;</code> + <code>&lt;figcaption&gt;</code> to explain what the image conveys.</figcaption>
        </figure>
      </section>

      <section class="card">
        <h2>Practice: convert text-in-image to real text</h2>
        <p>Replace the raster banner below with semantic HTML: a heading, a paragraph, and a button. Keep a decorative background only.</p>
        <div class="ex bannerBad">
          <img
            src="data:image/svg+xml;utf8,${encodeURIComponent(`
              <svg xmlns='http://www.w3.org/2000/svg' width='640' height='180'>
                <defs>
                  <linearGradient id='g2' x1='0' y1='0' x2='1' y2='1'>
                    <stop offset='0%' stop-color='#7c3aed'/>
                    <stop offset='100%' stop-color='#22d3ee'/>
                  </linearGradient>
                </defs>
                <rect width='100%' height='100%' fill='url(#g2)'/>
                <text x='50%' y='50%' fill='#fff' font-family='Segoe UI, Roboto, sans-serif' font-size='40' text-anchor='middle' dominant-baseline='middle'>
                  New Arrivals — Shop Now
                </text>
              </svg>
            `)}"
            alt="New Arrivals — Shop Now"
          />
        </div>
        <!-- Your turn: add a semantic banner below this comment -->
      </section>

      <footer class="muted">Rule of thumb: If users need to read it, it should be real text, not pixels.</footer>
    </main>
  </body>
</html>`;

export default function TextInsideImages() {
    useEffect(() => {
        document.title = "Pitfalls · Avoid text inside images";
    }, []);

    return (
        <Styled.Page>
            <header className="pageHeader" id="top">
                <h1>Avoid text inside images</h1>
                <p className="lede">
                    Put readable content in HTML, not pixels. Use images for illustration and keep the message as real, selectable text with proper semantics.
                </p>
            </header>

            <nav className="toc" aria-label="On this page">
                <a href="#why">Why it’s a problem</a>
                <a href="#patterns">Safer patterns</a>
                <a href="#figure">Figure + caption</a>
                <a href="#tips">Authoring tips</a>
                <a href="#play">Playground</a>
            </nav>

            <section id="why">
                <h2>Why baking text into images hurts</h2>
                <div className="grid2">
                    <div className="card">
                        <h3>Accessibility & UX</h3>
                        <ul className="bullets">
                            <li>Screen readers can’t parse pixels; <code>alt</code> is not equal to structured text.</li>
                            <li>Zooming blurs raster text; users can’t select/copy it.</li>
                            <li>High-contrast modes and themes won’t restyle pixels.</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h3>SEO, i18n & perf</h3>
                        <ul className="bullets">
                            <li>Search engines don’t reliably read text from images.</li>
                            <li>Text-in-image can’t be translated without re-artwork.</li>
                            <li>Heavy banners slow paint; HTML+CSS is lighter.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="patterns">
                <h2>Safer patterns</h2>
                <ul className="badges">
                    <li><span className="good">Good</span> Real text over decorative backgrounds.</li>
                    <li><span className="good">Good</span> SVG with actual <code>&lt;text&gt;</code> nodes when text must be part of the graphic.</li>
                    <li><span className="bad">Wrong</span> Shipping announcements as raster posters containing all the copy.</li>
                </ul>
                <p className="note">
                    Logos can keep stylized text, but set <code>alt</code> to the organization name. Avoid putting slogans/CTA copy inside the logo image; place that as HTML nearby.
                </p>
            </section>

            <section id="figure">
                <h2>Figure + caption</h2>
                <Styled.Code role="region" aria-label="Figure pattern">
                    <pre>{String.raw`<figure>
  <img src="…" alt="What the visual shows">
  <figcaption>Concise explanation that complements, not repeats, the alt.</figcaption>
</figure>`}</pre>
                </Styled.Code>
            </section>

            <section id="tips">
                <h2>Authoring tips</h2>
                <ul className="bullets">
                    <li>If users need to read it, render it as HTML text, not pixels.</li>
                    <li>Keep images responsive and provide intrinsic <code>width</code>/<code>height</code> to avoid layout shift.</li>
                    <li>Prefer SVG for diagrams with labels; the text remains crisp and accessible.</li>
                    <li>Always review with keyboard and a screen reader once.</li>
                </ul>
            </section>

            <section id="play">
                <h2>Try it live</h2>
                <p className="lede">
                    Convert the “text-in-image” banners into semantic HTML with a heading, a paragraph, and a proper button. Keep backgrounds decorative only.
                </p>
                <HtmlPlayground
                    storageKey="core-html:pitfalls:text-inside-images:v1"
                    initialHtml={STARTER_HTML}
                    height={680}
                />
            </section>

            {/* Prev + Next */}
            <nav className="nextPrev" aria-label="Lesson navigation">
                <NavLink to="/pitfalls/no-div-for-headings" className="prev" aria-label="Go to No div for headings/lists">
                    ← No &lt;div&gt; for headings/lists
                </NavLink>
                <NavLink to="/patterns/button-vs-link-decision" className="next" aria-label="Go to Button vs Link decision">
                    Next: Button vs Link decision →
                </NavLink>
            </nav>

            <div className="backTop"><a href="#top">Back to top ↑</a></div>
        </Styled.Page>
    );
}
