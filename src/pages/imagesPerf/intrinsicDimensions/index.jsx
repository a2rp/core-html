import React, { useEffect } from "react";
import { Styled } from "./styled";
import { NavLink } from "react-router-dom";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";

/**
 * Intrinsic dimensions (prevent CLS with width/height or aspect-ratio)
 * - Why CLS (Cumulative Layout Shift) happens with images
 * - Modern behavior: width/height as aspect-ratio hints (not fixed pixels)
 * - Techniques: width/height attributes, CSS aspect-ratio, placeholders
 * - Edge cases: responsive images, SVGs, background images
 * - Monaco playground at bottom
 */

const STARTER_HTML = String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Intrinsic dimensions — prevent CLS</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui, -apple-system, Segoe UI, Roboto, sans-serif; }
      main { display: grid; gap: 18px; }

      .grid2 { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; }
      @media (max-width: 900px) { .grid2 { grid-template-columns: 1fr; } }

      .card { border: 1px solid #ccc; border-radius: 12px; padding: 12px; background: #fff; }
      .muted { color: #6b7280; }

      .slot { border: 1px dashed #aaa; padding: 8px; border-radius: 10px; background: #fafafa; }

      /* Demo helpers */
      .demoRow { display: grid; gap: 12px; }
      .frame { border: 1px solid #ddd; border-radius: 10px; padding: 10px; background: #fff; }
      .hbox { display: grid; grid-template-columns: 160px 1fr; gap: 12px; align-items: center; }
      .label { font-size: 12px; color: #555; }

      /* Simulated slow image: use a large embedded SVG data URI */
      .imgWrap { border: 1px solid #e5e7eb; border-radius: 10px; padding: 8px; background: #f9fafb; }

      /* Comparison blocks */
      .bad { background: #fff1f2; border: 1px solid #fecdd3; }
      .good { background: #ecfdf5; border: 1px solid #bbf7d0; }

      /* Responsive image sizing for the examples */
      img { max-width: 100%; height: auto; display: block; }

      /* Aspect-ratio placeholder example */
      .ratioBox { width: 100%; aspect-ratio: 16 / 9; background: #f3f4f6; border: 1px dashed #94a3b8; border-radius: 10px; display: grid; place-items: center; color: #475569; }

      .note { font-size: 13px; color: #475569; }
      code { background: #f5f5f5; padding: 0 6px; border-radius: 6px; }
      .k { display:inline-block; border:1px solid #bbb; border-radius:999px; padding:2px 8px; font-size:12px; }
    </style>
  </head>
  <body>
    <main>
      <header>
        <h1>Intrinsic dimensions (stop layout shifts)</h1>
        <p class="muted">
          When images don't declare a size, the browser can't reserve space. The image loads later and pushes content,
          causing <strong>CLS</strong> (Cumulative Layout Shift). Give the browser aspect-ratio hints.
        </p>
      </header>

      <section class="card">
        <h2>Key idea</h2>
        <ul>
          <li><span class="k">Modern behavior</span> If an <code>&lt;img&gt;</code> has both <code>width</code> and <code>height</code> attributes, the browser treats them as an <em>aspect ratio</em>. CSS can still scale it responsively.</li>
          <li><span class="k">No attributes?</span> Use CSS <code>aspect-ratio</code> on a wrapper to reserve space.</li>
          <li><span class="k">Placeholders</span> Low-quality preview (LQIP) or solid color can occupy the slot while the real image streams in.</li>
        </ul>
      </section>

      <section id="compare" class="grid2">
        <div class="card bad">
          <h3>❌ Missing intrinsic size (will shift)</h3>
          <div class="demoRow">
            <div class="frame">
              <div class="hbox">
                <div class="label">Markup</div>
                <pre>&lt;img src="data:image/svg+xml;utf8,
&lt;svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800'&gt;
  &lt;rect width='100%' height='100%' fill='%23c7d2fe'/&gt;
  &lt;text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='64' fill='%233256a8'&gt;1200×800&lt;/text&gt;
&lt;/svg&gt;" alt="Demo" /&gt;</pre>
              </div>
              <div class="imgWrap">
                <!-- No width/height → browser can't reserve space -->
                <img
                  src="data:image/svg+xml;utf8,<?xml version='1.0' encoding='UTF-8'?><svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800'><rect width='100%' height='100%' fill='%23c7d2fe'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='64' fill='%233256a8'>1200×800</text></svg>"
                  alt="Demo no intrinsic size"
                  loading="lazy"
                />
              </div>
            </div>
            <p class="note">Until the image data arrives, layout doesn't know the height. Content below may jump.</p>
          </div>
        </div>

        <div class="card good">
          <h3>✅ Width & height attributes (no shift)</h3>
          <div class="demoRow">
            <div class="frame">
              <div class="hbox">
                <div class="label">Markup</div>
                <pre>&lt;img src="..." width="1200" height="800" alt="Demo" /&gt;</pre>
              </div>
              <div class="imgWrap">
                <!-- Width/height declare aspect ratio 1200:800 (3:2). CSS can still scale to fit. -->
                <img
                  src="data:image/svg+xml;utf8,<?xml version='1.0' encoding='UTF-8'?><svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800'><rect width='100%' height='100%' fill='%23bbf7d0'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='64' fill='%23065f46'>1200×800</text></svg>"
                  alt="Demo with intrinsic size"
                  width="1200"
                  height="800"
                  loading="lazy"
                />
              </div>
            </div>
            <p class="note">Browser reserves space from day 0 using the aspect ratio. No surprise jumps.</p>
          </div>
        </div>
      </section>

      <section class="card">
        <h2>CSS <code>aspect-ratio</code> fallback (when attrs are hard)</h2>
        <p>Sometimes you don't control the HTML. Use a wrapper with a reserved ratio:</p>
        <div class="slot">
<pre>&lt;figure class="ratioBox"&gt;16:9 slot&lt;/figure&gt;</pre>
        </div>
        <div class="ratioBox">16:9 reserved slot</div>
        <p class="note">Later, absolutely position the image/video inside, or set it as <code>object-fit: cover;</code>.</p>
      </section>

      <section class="grid2">
        <div class="card">
          <h2>Responsive scaling (attrs + CSS)</h2>
          <p>Attributes define ratio; CSS defines display size. Common pattern:</p>
          <div class="slot">
<pre>&lt;img src="..." width="1600" height="900" style="width: 100%; height: auto;" alt=""&gt;</pre>
          </div>
          <p class="note">No fixed pixels! The element will fill container width while preserving the 16:9 ratio.</p>
        </div>

        <div class="card">
          <h2>SVG specifics</h2>
          <p>Prefer an intrinsic size via <code>width</code>/<code>height</code> or a <code>viewBox</code>. For inline <code>&lt;svg&gt;</code>, set <code>width</code> + <code>height</code> or <code>aspect-ratio</code> in CSS.</p>
          <div class="slot">
<pre>&lt;svg viewBox="0 0 100 100" width="100" height="100"&gt;...&lt;/svg&gt;</pre>
          </div>
        </div>
      </section>

      <section class="card">
        <h2>Background images ≠ reserved slot</h2>
        <p>CSS <code>background-image</code> doesn't reserve height. Always size the box explicitly (height or <code>aspect-ratio</code>).</p>
        <div class="slot">
<pre>.hero { aspect-ratio: 3 / 1; background: url(hero.jpg) center/cover no-repeat; }</pre>
        </div>
      </section>

      <footer class="muted">
        TL;DR: Add <code>width</code> + <code>height</code> to <code>&lt;img&gt;</code>, or use a CSS <code>aspect-ratio</code> slot. Your layout (and users) will stay calm.
      </footer>
    </main>
  </body>
</html>`;

export default function IntrinsicDimensions() {
    useEffect(() => {
        document.title = "Images & Performance · Intrinsic dimensions (prevent CLS)";
    }, []);

    return (
        <Styled.Page>
            <header className="pageHeader" id="top">
                <h1>Intrinsic dimensions</h1>
                <p className="lede">
                    Declare an image’s size so the browser can reserve space and avoid{" "}
                    <abbr title="Cumulative Layout Shift">CLS</abbr>. Easiest path: set{" "}
                    <code>width</code> and <code>height</code> attributes that reflect the
                    image’s natural ratio, then scale with CSS.
                </p>
            </header>

            <nav className="toc" aria-label="On this page">
                <a href="#why">Why layout shifts happen</a>
                <a href="#how">How to reserve space</a>
                <a href="#compare">Before vs after</a>
                <a href="#edge">Edge cases</a>
                <a href="#play">Playground</a>
            </nav>

            <section id="why">
                <h2>Why layout shifts happen</h2>
                <div className="card">
                    <ul className="bullets">
                        <li>Without an intrinsic size, the browser lays out text first. When the image arrives, it changes the flow.</li>
                        <li>CLS penalizes visual stability; users lose their place and may click the wrong thing.</li>
                        <li>Fix: provide an aspect-ratio up front so the slot is stable from the start.</li>
                    </ul>
                </div>
            </section>

            <section id="how">
                <h2>How to reserve space</h2>
                <div className="grid2">
                    <div className="card">
                        <h3>1) Width & height attributes</h3>
                        <ul className="bullets">
                            <li>Set the real pixel dimensions of the source file.</li>
                            <li>The browser uses them as an aspect-ratio hint, not a fixed display size.</li>
                            <li>Combine with CSS <code>width: 100%; height: auto;</code> for responsiveness.</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h3>2) CSS <code>aspect-ratio</code> wrapper</h3>
                        <ul className="bullets">
                            <li>When you can’t edit HTML, wrap the media and reserve a ratio.</li>
                            <li>Place the media inside (absolute or normal flow) with <code>object-fit</code> as needed.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="edge">
                <h2>Edge cases & notes</h2>
                <ul className="badges">
                    <li><span className="good">Good</span> Use <code>sizes</code>/<code>srcset</code> for responsive files; keep <code>width</code>/<code>height</code> attributes for ratio.</li>
                    <li><span className="good">Good</span> SVGs: include <code>viewBox</code> and consider <code>width</code>/<code>height</code>.</li>
                    <li><span className="bad">Wrong</span> Relying on <code>background-image</code> for content images—no intrinsic sizing.</li>
                    <li><span className="bad">Wrong</span> Removing attributes thinking they “force pixels.” They don’t; CSS wins on display size.</li>
                </ul>
            </section>

            {/* LAST: Monaco playground */}
            <section id="play">
                <h2>Try it live</h2>
                <p className="lede">
                    Add <code>width</code>/<code>height</code> attributes to the images below, or wrap them in a{" "}
                    <code>aspect-ratio</code> slot. Watch the layout stabilize.
                </p>
                <HtmlPlayground
                    storageKey="core-html:images-perf:intrinsic-dimensions:v1"
                    initialHtml={STARTER_HTML}
                    height={680}
                />
            </section>

            {/* Prev + Next */}
            <nav className="nextPrev" aria-label="Lesson navigation">
                <NavLink to="/images-perf/lazy-decoding" className="prev" aria-label="Go to loading=lazy & decoding=async">
                    ← loading="lazy", decoding="async"
                </NavLink>
                <NavLink to="/images-perf/fetchpriority-note" className="next" aria-label="Go to fetchpriority note">
                    Next: fetchpriority (concept) →
                </NavLink>
            </nav>

            <div className="backTop"><a href="#top">Back to top ↑</a></div>
        </Styled.Page>
    );
}
