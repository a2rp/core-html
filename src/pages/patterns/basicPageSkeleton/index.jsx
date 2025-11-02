import React, { useEffect } from "react";
import { Styled } from "./styled";
import { NavLink } from "react-router-dom";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";

/**
 * Pattern: Basic page skeleton + skip link
 * - Minimal, semantic landmarks: header, nav, main, aside, footer
 * - A11y: visible-on-focus "Skip to content" link
 * - Headings outline sanity
 * - Notes on multiple navs, logo as home, aria-current
 * - Monaco playground LAST
 */

const STARTER_HTML = String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Page skeleton + skip link — demo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; font: 15px/1.6 system-ui,-apple-system,Segoe UI,Roboto,sans-serif; }
      a { color: inherit; }
      .wrap { display: grid; grid-template-columns: 1fr; min-height: 100dvh; }

      /* ── Skip link (visibly hidden until focus) ─────────────────────────── */
      .skip-link {
        position: absolute;
        left: 8px;
        top: -48px;
        padding: 8px 12px;
        border-radius: 10px;
        background: #111;
        color: #fff;
        text-decoration: none;
        transition: top .2s ease;
      }
      .skip-link:focus { top: 8px; outline: 2px solid Highlight; }

      header[role="banner"] {
        padding: 12px 16px;
        border-bottom: 1px solid #ccc;
        display: flex; gap: 12px; align-items: center; justify-content: space-between;
        position: sticky; top: 0; background: canvas; backdrop-filter: blur(6px);
      }
      nav[aria-label="Primary"] a {
        display: inline-block; padding: 6px 10px; border-radius: 8px; text-decoration: none;
      }
      nav[aria-label="Primary"] a[aria-current="page"] { outline: 2px solid #999; }

      main { display: grid; grid-template-columns: 1fr 280px; gap: 16px; padding: 16px; }
      @media (max-width: 900px) { main { grid-template-columns: 1fr; } }

      .card { border: 1px solid #ccc; border-radius: 12px; padding: 12px; }
      aside[aria-labelledby] { background: color-mix(in oklab, #0ea5e9, transparent 92%); border-color: #9ad7f1; }
      footer { margin-top: auto; border-top: 1px solid #ccc; padding: 16px; text-align: center; }

      /* Visually-hidden helper for off-screen headings when needed */
      .vh {
        position: absolute !important; width: 1px; height: 1px; padding: 0; margin: -1px;
        overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; border: 0;
      }
    </style>
  </head>
  <body>
    <a href="#main" class="skip-link">Skip to main content</a>

    <div class="wrap">
      <header role="banner">
        <a href="/" aria-label="Go to home">🧭 Logo</a>
        <nav aria-label="Primary">
          <a href="/" aria-current="page">Home</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>

      <main id="main">
        <article class="card">
          <h1>Welcome</h1>
          <p>This is a minimal, semantic page skeleton. Try tabbing: the skip link appears first.</p>
          <h2>Why landmarks?</h2>
          <p>They give screen readers and tools a fast map: header, nav, main, aside, footer.</p>
          <h2>Why a skip link?</h2>
          <p>Keyboard users can jump past repeated nav to the main content.</p>
        </article>

        <aside class="card" aria-labelledby="sidebar-title">
          <h2 id="sidebar-title">Sidebar</h2>
          <ul>
            <li>Profile</li>
            <li>Shortcuts</li>
            <li>Recent posts</li>
          </ul>
        </aside>
      </main>

      <footer role="contentinfo">
        <small>© 2025 Example Co. Built with semantic HTML.</small>
      </footer>
    </div>
  </body>
</html>`;

export default function BasicPageSkeleton() {
    useEffect(() => {
        document.title = "Patterns · Page skeleton + skip link";
    }, []);

    return (
        <Styled.Page>
            <header className="pageHeader" id="top">
                <h1>Page skeleton + <code>Skip to content</code></h1>
                <p className="lede">
                    A compact, semantic layout using core landmarks—<code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>,{" "}
                    <code>&lt;main&gt;</code>, <code>&lt;aside&gt;</code>, and <code>&lt;footer&gt;</code>—plus a keyboard-first
                    “Skip to main content” link.
                </p>
            </header>

            <nav className="toc" aria-label="On this page">
                <a href="#landmarks">Landmarks</a>
                <a href="#skip">Skip link pattern</a>
                <a href="#outline">Heading outline</a>
                <a href="#notes">Notes & tips</a>
                <a href="#mistakes">Common mistakes</a>
                <a href="#play">Playground</a>
            </nav>

            <section id="landmarks">
                <h2>Minimal landmarks</h2>
                <div className="grid2">
                    <div className="card">
                        <h3>Header + Primary nav</h3>
                        <ul className="bullets">
                            <li><strong>Header</strong> is the site banner (logo + brand + top tools).</li>
                            <li><strong>Primary nav</strong> is a <code>&lt;nav aria-label="Primary"&gt;</code> with the main links.</li>
                            <li>Mark current page with <code>aria-current="page"</code>.</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h3>Main + optional aside</h3>
                        <ul className="bullets">
                            <li><strong>Main</strong> holds the primary content per page.</li>
                            <li><strong>Aside</strong> is complementary: related links, profile, ads.</li>
                            <li>Give <code>aside</code> a visible heading or an accessible name.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="skip">
                <h2>Skip link (visible on focus)</h2>
                <Styled.Code role="region" aria-label="Skip link snippet">
                    <pre>{String.raw`<a href="#main" class="skip-link">Skip to main content</a>

<style>
  .skip-link { position:absolute; left:8px; top:-48px; /* hidden */ }
  .skip-link:focus { top:8px; } /* reveal on focus */
</style>`}</pre>
                </Styled.Code>
                <p className="note">
                    Keyboard users tab from the address bar → skip link → main content. Visually it stays out of the way
                    until focused.
                </p>
            </section>

            <section id="outline">
                <h2>Heading outline sanity</h2>
                <div className="card">
                    <ul className="bullets">
                        <li>One <code>h1</code> per page context; sub-sections start at <code>h2</code>.</li>
                        <li>Don’t skip levels for style; use CSS for size, not heading number inflation.</li>
                        <li>Off-screen headings are fine when you need an accessible name (<code>.vh</code> class).</li>
                    </ul>
                </div>
            </section>

            <section id="notes">
                <h2>Notes & tips</h2>
                <div className="grid2">
                    <div className="card">
                        <h3>Multiple navs?</h3>
                        <ul className="bullets">
                            <li>Allowed. Label them: <code>aria-label="Primary"</code>, <code>"Footer"</code>, <code>"Breadcrumb"</code>.</li>
                            <li>Breadcrumbs live in their own <code>nav</code> with <code>aria-label="Breadcrumb"</code>.</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h3>Logos & home</h3>
                        <ul className="bullets">
                            <li>Logo as a link to “/” with an <code>aria-label</code> like “Go to home”.</li>
                            <li>Use real text for the brand next to the logo for better search and a11y.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="mistakes">
                <h2>Common mistakes</h2>
                <ul className="badges">
                    <li><span className="bad">Wrong</span> No skip link on a page with a large, repeated nav.</li>
                    <li><span className="bad">Wrong</span> Using <code>div</code> instead of real landmarks for layout regions.</li>
                    <li><span className="good">Good</span> Minimal landmarks + current page indicated + focus-visible skip link.</li>
                </ul>
            </section>

            {/* LAST: Monaco playground */}
            <section id="play">
                <h2>Try it live</h2>
                <p className="lede">
                    Add the skip link, ensure the main region has an ID, mark the current nav item, and verify the heading outline.
                </p>
                <HtmlPlayground
                    storageKey="core-html:patterns:basic-page-skeleton:v1"
                    initialHtml={STARTER_HTML}
                    height={640}
                />
            </section>

            {/* Prev + Next */}
            <nav className="nextPrev" aria-label="Lesson navigation">
                <NavLink to="/patterns/figure-with-caption" className="prev" aria-label="Go to Figure with caption">
                    ← Figure with caption
                </NavLink>
                {/* <NavLink to="/patterns/button-vs-link-decision" className="next" aria-label="Go to Button vs Link decision">
                    Next: Button vs Link decision →
                </NavLink> */}
            </nav>

            <div className="backTop"><a href="#top">Back to top ↑</a></div>
        </Styled.Page>
    );
}
