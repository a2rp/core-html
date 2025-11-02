// src/pages/a11y/focusOrderOutline/index.jsx
import React, { useEffect } from "react";
import { Styled } from "./styled";
import { NavLink } from "react-router-dom";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";

/**
 * A11y: Focus order & outline (Keyboard visibility)
 * - Mental model: reading order → focus order
 * - Native focusable elements & how to test
 * - Tab sequence rules (DOM order, visibility, disabled)
 * - :focus vs :focus-visible and custom outlines
 * - tabindex usage: 0, -1, and avoid positive values
 * - Managing focus on route/page updates (concepts)
 * - Common pitfalls (keyboard traps, outline: none)
 * - Playground with good vs bad examples
 */

const STARTER_HTML = String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>a11y — focus order & outline</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui,-apple-system,Segoe UI,Roboto,sans-serif; }
      .grid { display: grid; gap: 16px; }

      .wrap { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
      @media (max-width: 900px) { .wrap { grid-template-columns: 1fr; } }

      .card { border: 1px solid #ccc; border-radius: 12px; padding: 12px; }
      .good { background: color-mix(in oklab, #16a34a, transparent 92%); border-color:#8ed09b; }
      .bad  { background: color-mix(in oklab, #dc2626, transparent 92%); border-color:#f2a6a6; }

      .row { display: flex; flex-wrap: wrap; gap: 8px; }
      .btn { padding: 8px 12px; border-radius: 10px; border: 1px solid #999; background: #fff; cursor: pointer; }
      .btn:disabled { opacity: 0.5; cursor: not-allowed; }

      /* Good: visible focus with :focus-visible (keyboard-friendly) */
      .btn:focus-visible, a:focus-visible, input:focus-visible, select:focus-visible, textarea:focus-visible {
        outline: 3px solid #2563eb; /* clear, high-contrast ring */
        outline-offset: 2px;
        border-color: #2563eb;
      }

      /* Demo of BAD pattern — DO NOT COPY */
      .kill-outline :is(button,a,input,select,textarea):focus,
      .kill-outline :is(button,a,input,select,textarea):focus-visible {
        outline: none !important;
        box-shadow: none !important;
      }

      .muted { color: #6b7280; }
      .ex { border:1px dashed #aaa; padding:10px; border-radius:10px; margin-top:6px; }

      /* Focus order helpers */
      .two-cols { display:grid; grid-template-columns: 1fr 1fr; gap: 10px; }
      @media (max-width: 900px) { .two-cols { grid-template-columns: 1fr; } }

      /* Avoid positive tabindex — here for stark comparison */
      .posTab :is(a,button,input)[tabindex]:not([tabindex="0"]):not([tabindex="-1"])::after {
        content: " (tabindex=" attr(tabindex) ")"; color:#b91c1c; font-weight:600;
      }
    </style>
  </head>
  <body>
    <main class="grid">

      <header>
        <h1>Focus order & outline</h1>
        <p class="muted">Keyboard users rely on a predictable tab order and a clear focus indicator.</p>
      </header>

      <section class="wrap">
        <div class="card good">
          <h2>Good (DOM order = focus order)</h2>
          <p>Interactive elements appear in logical reading order. No positive <code>tabindex</code>.</p>
          <div class="ex">
            <div class="row">
              <a class="btn" href="#a">Read more</a>
              <button class="btn">Add to cart</button>
              <input class="btn" aria-label="Coupon code" placeholder="Coupon code" />
              <select class="btn" aria-label="Size"><option>Small</option><option>Medium</option><option>Large</option></select>
            </div>
          </div>
          <p class="muted">Press Tab and watch the focus ring follow the visual order.</p>
        </div>

        <div class="card bad posTab">
          <h2>Bad (forced order via positive tabindex)</h2>
          <p>Avoid <code>tabindex="1..n"</code>. It creates fragile, surprising sequences.</p>
          <div class="ex">
            <div class="row">
              <a class="btn" href="#a" tabindex="3">Link</a>
              <button class="btn" tabindex="1">Primary</button>
              <input class="btn" placeholder="Email" tabindex="2" />
            </div>
          </div>
          <p class="muted">Now Tab cycles 1 → 2 → 3 regardless of layout. Any new control breaks it further.</p>
        </div>
      </section>

      <section class="two-cols">
        <div class="card">
          <h2>tabindex rules</h2>
          <ul>
            <li><code>tabindex="0"</code>: Add to natural tab order (e.g., custom card you made focusable).</li>
            <li><code>tabindex="-1"</code>: Programmatic focus only (e.g., focus a container after closing a dialog).</li>
            <li><strong>Never</strong> use positive values: they override native order and rot fast.</li>
          </ul>
        </div>
        <div class="card">
          <h2>:focus vs :focus-visible</h2>
          <ul>
            <li><code>:focus</code> fires for mouse, touch, and keyboard — can cause “blue ring” after clicks.</li>
            <li><code>:focus-visible</code> targets keyboard-like modality — ideal for visible outlines.</li>
            <li>Don’t remove outlines; customize them with <code>:focus-visible</code>.</li>
          </ul>
        </div>
      </section>

      <section class="wrap">
        <div class="card">
          <h2>Common pitfalls</h2>
          <ul>
            <li>Hiding focus with <code>outline: none</code> without replacement.</li>
            <li>Click-only widgets (e.g., <code>div</code> acting like a button) — use real <code>&lt;button&gt;</code>.</li>
            <li>Keyboard traps in modals/menus — no way to escape with Tab/Shift+Tab/Escape.</li>
            <li>Focus jumps on route change with no logical landing (e.g., focus not moved to the main heading).</li>
          </ul>
        </div>
        <div class="card kill-outline">
          <h2>BAD: outline removed</h2>
          <p>Try tabbing inside — you cannot see where you are.</p>
          <div class="ex">
            <div class="row">
              <button class="btn">Hidden focus 1</button>
              <button class="btn">Hidden focus 2</button>
              <a class="btn" href="#nowhere">Hidden focus link</a>
            </div>
          </div>
        </div>
      </section>

      <section class="card">
        <h2>Focusable by default</h2>
        <p>Links with <code>href</code>, buttons, inputs, selects, textareas, summary (inside details), iframes, and controls with <code>contenteditable</code>. Others <em>only</em> when you add <code>tabindex="0"</code>.</p>
      </section>

      <section class="card">
        <h2>Checklist</h2>
        <ul>
          <li>Tab order follows reading order (DOM). No positive <code>tabindex</code>.</li>
          <li>Every interactive control shows a high-contrast <strong>visible focus ring</strong>.</li>
          <li>Custom widgets: manage focus with JS and use semantic roles cautiously.</li>
          <li>On page change, move focus to the main heading or <code>&lt;main&gt;</code>.</li>
        </ul>
      </section>

      <section class="card">
        <h2>FAQ</h2>
        <details>
          <summary>Should I ever use tabindex="-1"?</summary>
          <div>Yes, to make elements focusable programmatically without entering tab sequence (e.g., focus error summary).</div>
        </details>
        <details>
          <summary>Why not remove outlines and rely on hover?</summary>
          <div>Hover doesn’t help keyboard or touch users. Outlines are non-negotiable for discoverability.</div>
        </details>
      </section>

      <section class="card">
        <h2>Try it live</h2>
        <p class="muted">Fix the bad examples: remove positive tabindex, restore focus visibility with <code>:focus-visible</code>, and keep DOM order logical.</p>
      </section>

      <footer class="muted">
        Tip: treat the tab key like a screen reader’s compass; never break its bearings.
      </footer>
    </main>
  </body>
</html>`;

export default function FocusOrderOutline() {
    useEffect(() => {
        document.title = "A11y · Focus order & outline";
    }, []);

    return (
        <Styled.Page>
            <header className="pageHeader" id="top">
                <h1>Focus order & outline</h1>
                <p className="lede">
                    Keyboard users navigate with Tab and Shift+Tab. Keep the focus sequence logical, and never hide the focus ring—customize it using <code>:focus-visible</code>.
                </p>
            </header>

            <nav className="toc" aria-label="On this page">
                <a href="#model">Mental model</a>
                <a href="#principles">Principles</a>
                <a href="#tabindex">tabindex</a>
                <a href="#focus-visible">:focus vs :focus-visible</a>
                <a href="#pitfalls">Pitfalls</a>
                <a href="#checklist">Checklist</a>
                <a href="#play">Playground</a>
            </nav>

            <section id="model">
                <h2>Mental model</h2>
                <div className="card">
                    <ul className="bullets">
                        <li><strong>Reading order → focus order.</strong> If users read top-to-bottom, left-to-right, Tab should follow the same flow.</li>
                        <li><strong>Native first.</strong> Use real buttons, links, and inputs; they come with predictable focus behavior.</li>
                        <li><strong>Visible focus.</strong> A strong outline is a navigational lighthouse, not a decoration.</li>
                    </ul>
                </div>
            </section>

            <section id="principles">
                <h2>Principles</h2>
                <div className="grid2">
                    <div className="card">
                        <h3>DOM order is king</h3>
                        <ul className="bullets">
                            <li>Arrange interactive elements in the DOM to match visual order.</li>
                            <li>Avoid reordering with CSS alone for interactive items.</li>
                            <li>Don’t fight the browser’s natural tab sequence.</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h3>Focus landing</h3>
                        <ul className="bullets">
                            <li>On route change, move focus to <code>&lt;h1&gt;</code> or <code>&lt;main&gt;</code>.</li>
                            <li>In dialogs/menus, trap focus while open and restore to the invoker on close.</li>
                            <li>Keep Escape/close buttons reachable from keyboard.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="tabindex">
                <h2>tabindex rules</h2>
                <div className="card">
                    <ul className="bullets">
                        <li><code>tabindex="0"</code> → opt-in to natural order for custom widgets.</li>
                        <li><code>tabindex="-1"</code> → programmatic focus only.</li>
                        <li><strong>Avoid positive values</strong> (1,2,3…) → fragile and surprising.</li>
                    </ul>
                </div>
            </section>

            <section id="focus-visible">
                <h2>:focus vs :focus-visible</h2>
                <Styled.Code role="region" aria-label=":focus-visible example">
                    <pre>{String.raw`.btn:focus-visible {
  outline: 3px solid var(--primary);
  outline-offset: 2px;
}`}</pre>
                </Styled.Code>
                <p className="note">
                    Use <code>:focus-visible</code> to show outlines for keyboard users while avoiding noisy rings after mouse clicks.
                </p>
            </section>

            <section id="pitfalls">
                <h2>Pitfalls</h2>
                <ul className="badges">
                    <li><span className="bad">Wrong</span> Removing focus outline without a replacement.</li>
                    <li><span className="bad">Wrong</span> Positive <code>tabindex</code> to “fix” order.</li>
                    <li><span className="good">Good</span> DOM order matches visual order; add <code>tabindex="0"</code> for custom widgets only.</li>
                </ul>
            </section>

            <section id="checklist">
                <h2>Checklist</h2>
                <div className="card">
                    <ul className="bullets">
                        <li>Can you tab through everything important in a sensible order?</li>
                        <li>Is the current focus always visible with a strong outline?</li>
                        <li>Does focus land at a logical place after views open/close or routes change?</li>
                        <li>No keyboard traps; Escape or a close button is reachable.</li>
                    </ul>
                </div>
            </section>

            {/* LAST: Monaco playground */}
            <section id="play">
                <h2>Try it live</h2>
                <p className="lede">
                    In the demo, remove positive <code>tabindex</code>, ensure visible focus via <code>:focus-visible</code>, and keep DOM order logical.
                </p>
                <HtmlPlayground
                    storageKey="core-html:a11y:focus-order-outline:v1"
                    initialHtml={STARTER_HTML}
                    height={720}
                />
            </section>

            {/* Prev + Next */}
            <nav className="nextPrev" aria-label="Lesson navigation">
                <NavLink to="/a11y/name-role-value" className="prev" aria-label="Go to Name/Role/Value">
                    ← Name/Role/Value
                </NavLink>
                <NavLink to="/a11y/skip-link-concept" className="next" aria-label="Go to Skip link (concept)">
                    Next: Skip link (concept) →
                </NavLink>
            </nav>

            <div className="backTop"><a href="#top">Back to top ↑</a></div>
        </Styled.Page>
    );
}
