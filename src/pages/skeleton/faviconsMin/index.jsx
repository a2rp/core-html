import React, { useEffect } from "react";
import { Styled } from "./styled";
import { NavLink } from "react-router-dom";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";

/**
 * Favicons (minimal set)
 * Focus:
 * - What sizes and formats actually matter today
 * - Minimal cross-browser set (16/32 .ico or .png + 180 apple-touch-icon)
 * - Optional: mask-icon (Safari pinned tab), theme-color, manifest (if PWA)
 * - Pathing/caching tips, data-URL demo
 * - Monaco playground LAST
 */

const STARTER_HTML = String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Favicons — minimal set demo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <!-- ─────────────────────────────────────────────────────────────────────
      ✅ Minimal pragmatic set:
      1) .ico that contains 16x16 and 32x32 (most legacy + desktop browsers)
      2) 180x180 PNG for iOS "Add to Home Screen"
      Optional: 48/192/512 via manifest for PWA, mask-icon for Safari pinned
    ──────────────────────────────────────────────────────────────────────── -->

    <!-- Favicon (.ico). Use a real .ico in production; data URL here for demo -->
    <link rel="icon" href="data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAGAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A
////AP///wD///8A////AP///wD///8A////AP///wD///8A" sizes="16x16 32x32" />

    <!-- Apple touch icon (180x180). Real PNG recommended; data URL for demo -->
    <link rel="apple-touch-icon" sizes="180x180"
          href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAC0CAYAAAB4k5r2AAA..." />

    <!-- Optional (nice): Safari pinned tab monochrome SVG + color -->
    <link rel="mask-icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cpath fill='%23000' d='M8 8h48v48H8z'/%3E%3C/svg%3E" color="#0EA5E9">

    <!-- Optional (PWA): manifest gives 48/192/512 etc. -->
    <link rel="manifest" href="data:application/manifest+json,%7B%22name%22%3A%22Demo%22%2C%22icons%22%3A%5B%7B%22src%22%3A%22icon-192.png%22%2C%22sizes%22%3A%22192x192%22%2C%22type%22%3A%22image%2Fpng%22%7D%2C%7B%22src%22%3A%22icon-512.png%22%2C%22sizes%22%3A%22512x512%22%2C%22type%22%3A%22image%2Fpng%22%7D%5D%7D" />

    <!-- Optional: tint browser UI on some platforms -->
    <meta name="theme-color" content="#0ea5e9">

    <style>
      :root { color-scheme: light dark; }
      body { font: 14px/1.6 system-ui, -apple-system, Segoe UI, Roboto, sans-serif; padding: 24px; }
      .grid { display: grid; gap: 12px; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); }
      .card { border: 1px solid #bbb; padding: 12px; border-radius: 10px; }
      .row { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
      .swatch { width: 36px; height: 36px; border-radius: 8px; border: 1px solid #aaa; }
      .muted { color: #777; }
      .demoIcon { width: 48px; height: 48px; border-radius: 12px; display: inline-grid; place-items: center; font-weight: 700; }
      .darkBg { background: #0b1220; color: white; padding: 12px; border-radius: 10px; }
      .small { font-size: 12px; }
    </style>
  </head>
  <body>
    <h1>Favicons — minimal, pragmatic set</h1>
    <p class="muted">This page includes a tiny data-URL favicon, a 180x180 iOS icon, an optional mask icon, and a manifest.</p>

    <div class="grid">
      <section class="card">
        <h2>Minimal set</h2>
        <ul>
          <li><strong>favicon.ico</strong> with 16x16 and 32x32 (Windows/desktop/legacy support).</li>
          <li><strong>apple-touch-icon 180x180</strong> (iOS home screen).</li>
        </ul>
        <p class="small muted">Keep filenames predictable and at web root to avoid path issues.</p>
      </section>

      <section class="card">
        <h2>Optional</h2>
        <ul>
          <li><strong>mask-icon</strong> (Safari pinned tab) — monochrome SVG + <code>color</code>.</li>
          <li><strong>manifest</strong> (PWA) — include 48/192/512 icons.</li>
          <li><strong>theme-color</strong> for browser UI tinting where supported.</li>
        </ul>
      </section>

      <section class="card">
        <h2>Background test</h2>
        <div class="row">
          <span class="demoIcon" style="background:#0ea5e9;color:white">A</span>
          <span class="demoIcon" style="background:#ffd166;color:black">B</span>
          <span class="demoIcon" style="background:#111827;color:white">C</span>
        </div>
        <p class="small muted">Test your icon on light and dark surfaces. Avoid text-heavy icons; prefer bold shapes.</p>
      </section>

      <section class="card">
        <h2>Caching &amp; updates</h2>
        <p class="small muted">
          Browsers cache favicons aggressively. When updating, change filenames or use query strings (e.g., <code>favicon.ico?v=2</code>).
        </p>
      </section>

      <section class="card">
        <h2>Dark surface preview</h2>
        <div class="darkBg">
          <span class="demoIcon" style="background:white;color:#111827">W</span>
          <span class="demoIcon" style="background:#0ea5e9;color:white">E</span>
          <span class="demoIcon" style="background:#111827;color:white;border:1px solid #334155">D</span>
        </div>
      </section>
    </div>
  </body>
</html>`;

export default function FaviconsMin() {
    useEffect(() => {
        document.title = "Document Skeleton · Favicons (minimal set)";
    }, []);

    return (
        <Styled.Page>
            <header className="pageHeader" id="top">
                <h1>Favicons (16/32 + 180)</h1>
                <p className="lede">
                    Ship a pragmatic favicon set that works everywhere without bloat: a multi-size{" "}
                    <code>.ico</code> and a 180×180 Apple touch icon. Add optional pieces only when you need them.
                </p>
            </header>

            <nav className="toc" aria-label="On this page">
                <a href="#why">Why these sizes</a>
                <a href="#minimal">Minimal set</a>
                <a href="#optional">Optional extras</a>
                <a href="#paths-cache">Paths &amp; caching</a>
                <a href="#design">Design notes</a>
                <a href="#play">Playground</a>
            </nav>

            <section id="why">
                <h2>Why these sizes</h2>
                <ul className="bullets">
                    <li><strong>16x16</strong> and <strong>32x32</strong> cover most desktop UI affordances and legacy pickers.</li>
                    <li><strong>180x180</strong> is used by iOS for “Add to Home Screen”.</li>
                    <li><strong>192/512</strong> live in the manifest for PWA installs (optional if you’re not a PWA).</li>
                </ul>
            </section>

            <section id="minimal">
                <h2>Minimal HTML</h2>
                <Styled.Code role="region" aria-label="Minimal favicon markup">
                    <pre>{String.raw`<link rel="icon" href="/favicon.ico" sizes="16x16 32x32">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">`}</pre>
                </Styled.Code>
                <p className="note">Place these at the site root to dodge path surprises, or update <code>href</code> accordingly.</p>
            </section>

            <section id="optional">
                <h2>Optional extras</h2>
                <div className="grid2">
                    <div className="card">
                        <h3>Safari pinned tab</h3>
                        <Styled.Code role="region" aria-label="Mask icon example">
                            <pre>{String.raw`<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0ea5e9">`}</pre>
                        </Styled.Code>
                        <p className="small muted">SVG must be single-color (monochrome). Safari tints it using <code>color</code>.</p>
                    </div>
                    <div className="card">
                        <h3>PWA manifest</h3>
                        <Styled.Code role="region" aria-label="Manifest example">
                            <pre>{String.raw`<link rel="manifest" href="/site.webmanifest">`}</pre>
                        </Styled.Code>
                        <p className="small muted">Put 48/72/96/128/192/256/384/512 in the manifest as needed.</p>
                    </div>
                    <div className="card">
                        <h3>Theme color</h3>
                        <Styled.Code role="region" aria-label="Theme-color example">
                            <pre>{String.raw`<meta name="theme-color" content="#0ea5e9">`}</pre>
                        </Styled.Code>
                        <p className="small muted">Tints browser UI on some platforms; choose a contrast-safe color.</p>
                    </div>
                </div>
            </section>

            <section id="paths-cache">
                <h2>Paths &amp; caching</h2>
                <ul className="bullets">
                    <li>Keep icons at <code>/</code> or set a consistent <code>&lt;base&gt;</code> URL.</li>
                    <li>Version updated files: <code>favicon.ico?v=2</code> to bust stale caches.</li>
                    <li>CDN headers may extend cache TTLs — plan for rollouts.</li>
                </ul>
            </section>

            <section id="design">
                <h2>Design notes</h2>
                <ul className="bullets">
                    <li>Prefer bold shapes; minimize small text and thin strokes.</li>
                    <li>Test on light/dark backgrounds and at 16px — it must still read.</li>
                    <li>Consider simple negative-space shapes for mask icons.</li>
                </ul>
            </section>

            {/* LAST: Monaco playground */}
            <section id="play">
                <h2>Try it live</h2>
                <p className="lede">
                    Edit the link tags, swap colors, and simulate different backgrounds. The data-URL icons are only for this demo;
                    use real files in production. Your changes autosave for this lesson.
                </p>
                <HtmlPlayground
                    storageKey="core-html:skeleton:favicons-min:v1"
                    initialHtml={STARTER_HTML}
                    height={640}
                />
            </section>

            {/* Prev + Next */}
            <nav className="nextPrev" aria-label="Lesson navigation">
                <NavLink to="/skeleton/boilerplate-order" className="prev" aria-label="Go to Boilerplate order">
                    ← Boilerplate order
                </NavLink>
                <NavLink to="/skeleton/scripts-styles-placement" className="next" aria-label="Go to Scripts/styles placement">
                    Next: Scripts/styles placement →
                </NavLink>
            </nav>

            <div className="backTop"><a href="#top">Back to top ↑</a></div>
        </Styled.Page>
    );
}
