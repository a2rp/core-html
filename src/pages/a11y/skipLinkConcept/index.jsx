import React, { useEffect } from "react";
import { Styled } from "./styled";
import { NavLink } from "react-router-dom";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";

/**
 * Skip link (concept)
 * - Why skip links exist (keyboard and screen reader ergonomics)
 * - Minimal pattern (anchor to #main)
 * - Visually-hidden but focusable styles
 * - Multi-skip patterns (nav, search, footer)
 * - Pitfalls (display:none; wrong target; outline removal)
 * - Assistive tech notes
 * - Live playground LAST
 */

const STARTER_HTML = String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Skip link — minimal pattern</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; font: 14px/1.6 system-ui, -apple-system, Segoe UI, Roboto, sans-serif; }

      /* Demo chrome */
      header, nav, main, footer { padding: 16px; border-bottom: 1px solid #ccc; }
      header { position: sticky; top: 0; background: #f7f7f7; }
      nav a { margin-right: 8px; }
      .hero { height: 160px; background: #e5eefc; border: 1px dashed #9ab7ff; display: grid; place-items: center; margin-top: 8px; }

      /* 1) Visually hidden until focused, but still keyboard-focusable */
      .skip {
        position: absolute;
        left: 8px;
        top: 8px;
        transform: translateY(-200%);
        padding: 8px 12px;
        background: #111;
        color: #fff;
        border-radius: 8px;
        text-decoration: none;
        transition: transform .2s ease;
        z-index: 1000;
      }
      .skip:focus {
        transform: translateY(0);
        outline: 2px solid #3b82f6; /* keep visible outline */
        outline-offset: 2px;
      }

      /* 2) Make the target focusable so the browser scrolls there on jump */
      main:focus { outline: 3px solid #22c55e; outline-offset: 4px; }
    </style>
  </head>
  <body>
    <!-- Minimal pattern: the skip link is first focusable element in DOM -->
    <a class="skip" href="#main">Skip to main content</a>

    <header>
      <strong>Site header</strong>
      <nav aria-label="Primary">
        <a href="#">Home</a>
        <a href="#">Docs</a>
        <a href="#">Blog</a>
        <a href="#">Contact</a>
      </nav>
      <div class="hero">Large banner / nav before main</div>
    </header>

    <!-- The target region has id="main" and tabindex="-1" so focus will move here -->
    <main id="main" tabindex="-1">
      <h1>Main content</h1>
      <p>Press Tab once from the top, hit Enter on the skip link, and you'll land here.</p>
      <p>Try removing <code>tabindex="-1"</code> to see why focusing the target matters.</p>
      <p>Then try removing the <code>:focus</code> styles to feel why outlines help.</p>
    </main>

    <footer>
      <small>Footer</small>
    </footer>
  </body>
</html>`;

export default function SkipLinkConcept() {
    useEffect(() => {
        document.title = "Accessibility · Skip link (concept)";
    }, []);

    return (
        <Styled.Page>
            <header className="pageHeader" id="top">
                <h1>Skip link <small>(concept)</small></h1>
                <p className="lede">
                    A “skip link” is a tiny keyboard ramp that lets users jump over repeated UI
                    (like big headers or menus) straight to the main content. It’s an anchor at
                    the top that points to an in-page target, usually <code>#main</code>.
                </p>
            </header>

            <nav className="toc" aria-label="On this page">
                <a href="#why">Why it matters</a>
                <a href="#pattern">Minimal pattern</a>
                <a href="#styling">Styling: hidden until focus</a>
                <a href="#multiple">Multiple skip links</a>
                <a href="#pitfalls">Pitfalls</a>
                <a href="#assistive">Assistive tech notes</a>
                <a href="#play">Playground</a>
            </nav>

            <section id="why">
                <h2>Why it matters</h2>
                <div className="card">
                    <ul className="bullets">
                        <li>Keyboard users shouldn’t tab through dozens of links just to reach content.</li>
                        <li>Screen reader users benefit from a quick “jump to main content” affordance.</li>
                        <li>Meets common accessibility expectations and audits (it’s tiny but mighty).</li>
                    </ul>
                </div>
            </section>

            <section id="pattern">
                <h2>Minimal pattern</h2>
                <Styled.Code role="region" aria-label="Skip link markup">
                    <pre>{String.raw`<!-- 1) Place first focusable thing in DOM -->
<a class="skip-link" href="#main">Skip to main content</a>

<!-- 2) Have a landmark/region with a stable id -->
<main id="main" tabindex="-1">
  <h1>Page title</h1>
  …
</main>`}</pre>
                </Styled.Code>
                <p className="note">
                    The <code>tabindex="-1"</code> on the target allows programmatic focus so the browser scrolls there on activation.
                </p>
            </section>

            <section id="styling">
                <h2>Styling: hidden until focus</h2>
                <p>
                    Hide visually without removing from the accessibility tree. Use off-screen positioning and reveal on <code>:focus</code>.
                    Avoid <code>display:none</code> or <code>visibility:hidden</code> because they remove the link from keyboard flow and AT.
                </p>
                <Styled.Code aria-label="Skip link CSS">
                    <pre>{String.raw`.skip-link {
  position: absolute;
  top: .5rem; left: .5rem;
  transform: translateY(-200%);
  background: #111; color: #fff;
  padding: .5rem .75rem; border-radius: .5rem;
  text-decoration: none; z-index: 1000;
  transition: transform .2s ease;
}
.skip-link:focus {
  transform: translateY(0);
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}`}</pre>
                </Styled.Code>
            </section>

            <section id="multiple">
                <h2>Multiple skip links</h2>
                <div className="grid2">
                    <div className="card">
                        <h3>Examples</h3>
                        <ul className="bullets">
                            <li>Skip to main content → <code>#main</code></li>
                            <li>Skip to search → <code>#site-search</code></li>
                            <li>Skip to navigation → <code>#primary-nav</code></li>
                            <li>Skip to footer → <code>#footer</code></li>
                        </ul>
                    </div>
                    <div className="card">
                        <h3>Guidance</h3>
                        <ul className="bullets">
                            <li>Order links by usefulness; don’t overload with options.</li>
                            <li>Match stable ids on the target landmarks.</li>
                            <li>Ensure each target is focusable (e.g., <code>tabindex="-1"</code>).</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="pitfalls">
                <h2>Pitfalls</h2>
                <ul className="badges">
                    <li><span className="bad">Wrong</span> Using <code>display:none</code> on the skip link.</li>
                    <li><span className="bad">Wrong</span> Linking to <code>#content</code> when no element has that id.</li>
                    <li><span className="bad">Wrong</span> Removing focus outlines “for aesthetics.”</li>
                    <li><span className="good">Good</span> Off-screen positioning + visible on focus.</li>
                    <li><span className="good">Good</span> Target element accepts focus and has a clear heading.</li>
                </ul>
            </section>

            <section id="assistive">
                <h2>Assistive tech notes</h2>
                <div className="card">
                    <ul className="bullets">
                        <li>
                            Many screen readers expose “landmarks” navigation. A skip link complements, rather than replaces, proper landmarks.
                        </li>
                        <li>
                            If your header is very tall/sticky, ensure the focused target isn’t obscured behind it (use scroll margin).
                        </li>
                        <li>
                            Consider <code>scroll-margin-top</code> on <code>#main</code> to offset sticky headers.
                        </li>
                    </ul>
                </div>
                <Styled.Code aria-label="Sticky header offset tip">
                    <pre>{String.raw`/* If header is sticky 64px tall */
#main { scroll-margin-top: 64px; }`}</pre>
                </Styled.Code>
            </section>

            {/* LAST: Monaco playground */}
            <section id="play">
                <h2>Try it live</h2>
                <p className="lede">
                    Add a skip link to jump over header/navigation. Make sure the target exists, is focusable,
                    and the skip link becomes visible on focus. Autosaves to this lesson.
                </p>
                <HtmlPlayground
                    storageKey="core-html:a11y:skip-link-concept:v1"
                    initialHtml={STARTER_HTML}
                    height={640}
                />
            </section>

            {/* Prev + Next */}
            <nav className="nextPrev" aria-label="Lesson navigation">
                <NavLink to="/a11y/focus-order-outline" className="prev" aria-label="Go to Focus order & outline">
                    ← Focus order &amp; outline
                </NavLink>
                <NavLink to="/scripting/script-placement" className="next" aria-label="Go to &lt;script&gt; placement">
                    Next: &lt;script&gt; placement →
                </NavLink>
            </nav>

            <div className="backTop"><a href="#top">Back to top ↑</a></div>
        </Styled.Page>
    );
}
