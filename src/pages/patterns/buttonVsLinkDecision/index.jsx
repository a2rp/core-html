// src/pages/patterns/buttonVsLinkDecision/index.jsx
import React, { useEffect } from "react";
import { Styled } from "./styled";
import { NavLink } from "react-router-dom";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";

/**
 * Pattern: Button vs Link — choose the correct element
 * - Mental model: navigation (URL) vs action (behavior)
 * - Native semantics, keyboard defaults, and accessibility
 * - Decision checklist and anti-patterns
 * - Examples: internal nav, external nav, download, JS actions, forms
 * - Monaco playground LAST
 */

const STARTER_HTML = String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Button vs Link — decisions</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 22px; font: 14px/1.6 system-ui,-apple-system,Segoe UI,Roboto,sans-serif; }
      .grid { display: grid; gap: 14px; }
      .card { border: 1px solid #ccc; border-radius: 12px; padding: 12px; background: #fff; }
      .muted { color: #6b7280; }
      code { background: #f5f5f5; padding: 0 6px; border-radius: 6px; }
      .row { display: flex; flex-wrap: wrap; gap: 10px; align-items: center; }
      .btn {
        border: 1px solid #aaa; border-radius: 10px; padding: 8px 12px; background: #f5f5f5; cursor: pointer;
      }
      .linkLikeBtn {
        display: inline-block; text-decoration: none; color: inherit;
        border: 1px solid #aaa; border-radius: 10px; padding: 8px 12px; background: #f5f5f5;
      }
      .good { background: color-mix(in oklab, #16a34a, transparent 92%); border-color:#8ed09b; }
      .bad  { background: color-mix(in oklab, #dc2626, transparent 92%); border-color:#f2a6a6; }
      .ex { border:1px dashed #aaa; padding:8px; border-radius:10px; margin-top:6px; }
    </style>
  </head>
  <body>
    <main class="grid">
      <header>
        <h1>Button vs Link</h1>
        <p class="muted">
          Use <code>&lt;a&gt;</code> to navigate to a URL. Use <code>&lt;button&gt;</code> to perform an action on the current page.
        </p>
      </header>

      <section class="card">
        <h2>Links (navigation)</h2>
        <ul>
          <li>Must have an <code>href</code>. Without it, it’s not a link.</li>
          <li>Left/right click, open in new tab, copy link — all expected behaviors.</li>
          <li>Examples: go to Home, open Docs, jump to a section (#id), download (with <code>download</code>).</li>
        </ul>
        <div class="ex row">
          <a class="linkLikeBtn" href="#pricing">Jump to Pricing</a>
          <a class="linkLikeBtn" href="https://developer.mozilla.org/" target="_blank" rel="noopener">MDN (new tab)</a>
          <a class="linkLikeBtn" href="/files/guide.pdf" download>Download PDF</a>
        </div>
      </section>

      <section class="card">
        <h2>Buttons (actions)</h2>
        <ul>
          <li>Trigger behavior: open dialog, toggle UI, submit/reset forms, async actions.</li>
          <li>Use <code>type="button"</code> for non-submit actions inside forms.</li>
          <li>Examples: open modal, add to cart, play/pause, “Load more”.</li>
        </ul>
        <div class="ex row">
          <button class="btn" type="button" onclick="alert('Toggled!')">Toggle something</button>
          <form onsubmit="event.preventDefault(); alert('Submitted!')">
            <input aria-label="Name" placeholder="Name" />
            <button class="btn" type="submit">Submit form</button>
            <button class="btn" type="reset">Reset</button>
            <button class="btn" type="button" onclick="alert('Just a plain action, not submit')">Action</button>
          </form>
        </div>
      </section>

      <section class="card bad">
        <h2>Anti-patterns</h2>
        <ul>
          <li>Link without <code>href</code> used like a button (breaks keyboard + context menu).</li>
          <li>Button used for navigation with custom JS + <code>location.href</code> (breaks open-in-new-tab expectations).</li>
          <li>Adding <code>role="button"</code> to an anchor instead of using <code>&lt;button&gt;</code> for actions.</li>
        </ul>
        <div class="ex row">
          <a class="linkLikeBtn" onclick="alert('Not a real link'); return false;">Fake link (no href)</a>
          <button class="btn" onclick="location.href='https://example.com'">Navigates (unexpected)</button>
        </div>
      </section>

      <section class="card good">
        <h2>Progressive enhancement tips</h2>
        <ul>
          <li>Navigation that still works without JS → use a real <code>&lt;a href&gt;</code>.</li>
          <li>Action that still works without JS? Prefer native form submit or details/summary when possible.</li>
          <li>When styling, you can make a link look like a button, but keep it a link.</li>
        </ul>
      </section>

      <footer class="muted">
        Rule of thumb: <strong>URL → link</strong>. <strong>Behavior → button</strong>.
      </footer>
    </main>
  </body>
</html>`;

export default function ButtonVsLinkDecision() {
    useEffect(() => {
        document.title = "Patterns · Button vs Link decision";
    }, []);

    return (
        <Styled.Page>
            <header className="pageHeader" id="top">
                <h1>Button vs Link decision</h1>
                <p className="lede">
                    Links navigate to a URL (new resource or location). Buttons perform an action on the current page.
                    Pick the element that matches user expectations, keyboard behavior, and accessibility.
                </p>
            </header>

            <nav className="toc" aria-label="On this page">
                <a href="#model">Mental model</a>
                <a href="#defaults">Native defaults</a>
                <a href="#checklist">Decision checklist</a>
                <a href="#examples">Examples</a>
                <a href="#a11y">Accessibility notes</a>
                <a href="#pitfalls">Anti-patterns</a>
                <a href="#play">Playground</a>
            </nav>

            <section id="model">
                <h2>Mental model</h2>
                <div className="card">
                    <ul className="bullets">
                        <li><strong>Link (<code>&lt;a&gt;</code>)</strong> — takes you somewhere. Must have an <code>href</code>.</li>
                        <li><strong>Button (<code>&lt;button&gt;</code>)</strong> — does something. Triggers behavior in the current context.</li>
                        <li>Don’t style your semantics: choose semantics first, then style to taste.</li>
                    </ul>
                </div>
            </section>

            <section id="defaults">
                <h2>Native defaults</h2>
                <div className="grid2">
                    <div className="card">
                        <h3>Links</h3>
                        <ul className="bullets">
                            <li>Keyboard: <kbd>Tab</kbd> to focus, <kbd>Enter</kbd> to activate.</li>
                            <li>Context menu: open in new tab/window, copy link, bookmark.</li>
                            <li>Attributes: <code>href</code> (required), <code>download</code>, <code>target</code>, <code>rel</code>.</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h3>Buttons</h3>
                        <ul className="bullets">
                            <li>Keyboard: <kbd>Tab</kbd> to focus, <kbd>Space</kbd>/<kbd>Enter</kbd> to activate.</li>
                            <li>Form context: <code>type="submit"</code> (default), <code>type="reset"</code>, <code>type="button"</code>.</li>
                            <li>Behaviors: toggles, dialogs, media controls, async actions.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="checklist">
                <h2>Decision checklist</h2>
                <div className="card">
                    <ol className="bullets">
                        <li>Does this action change the URL or go to a new resource? → <strong>Link</strong>.</li>
                        <li>Should users be able to open in a new tab or bookmark it? → <strong>Link</strong>.</li>
                        <li>Is it a UI toggle, submit/reset, or client-side behavior? → <strong>Button</strong>.</li>
                        <li>Inside a form and not meant to submit? → <strong>Button with <code>type="button"</code></strong>.</li>
                        <li>External site with <code>target="_blank"</code>? Add <code>rel="noopener"</code> for security.</li>
                    </ol>
                </div>
            </section>

            <section id="examples">
                <h2>Examples</h2>

                <Styled.Code aria-label="Good: navigation uses links">
                    <pre>{String.raw`<!-- Good: navigation -->
<nav>
  <a href="/home">Home</a>
  <a href="/docs/getting-started">Docs</a>
  <a href="#faq">Skip to FAQ</a>
</nav>`}</pre>
                </Styled.Code>

                <Styled.Code aria-label="Good: actions use buttons">
                    <pre>{String.raw`<!-- Good: actions -->
<button type="button" data-dialog="signup">Open sign-up dialog</button>
<button type="submit">Save changes</button>
<button type="reset">Reset form</button>`}</pre>
                </Styled.Code>

                <Styled.Code aria-label="Avoid: button used for navigation">
                    <pre>{String.raw`<!-- Avoid: this should be a link -->
<button onclick="location.href='/pricing'">Pricing</button>

<!-- Prefer -->
<a href="/pricing">Pricing</a>`}</pre>
                </Styled.Code>

                <Styled.Code aria-label="Avoid: anchor without href used like a button">
                    <pre>{String.raw`<!-- Avoid: no href + JS click -->
<a onclick="doThing()">Do thing</a>

<!-- Prefer -->
<button type="button" onclick="doThing()">Do thing</button>`}</pre>
                </Styled.Code>
            </section>

            <section id="a11y">
                <h2>Accessibility notes</h2>
                <ul className="badges">
                    <li><span className="good">Good</span> Link has a valid <code>href</code>; Button has a clear label.</li>
                    <li><span className="good">Good</span> Non-submit buttons inside forms use <code>type="button"</code>.</li>
                    <li><span className="bad">Wrong</span> Using <code>role="button"</code> on anchors to fake actions.</li>
                    <li><span className="bad">Wrong</span> Hijacking link click to run heavy JS before navigation.</li>
                </ul>
            </section>

            <section id="pitfalls">
                <h2>Common pitfalls</h2>
                <ul className="bullets">
                    <li>Styling everything as a “button” component and losing semantics.</li>
                    <li>Forgetting <code>rel="noopener"</code> with <code>target="_blank"</code> to external sites.</li>
                    <li>Creating keyboard traps in custom components that should have been plain links/buttons.</li>
                </ul>
            </section>

            {/* LAST: Monaco playground */}
            <section id="play">
                <h2>Try it live</h2>
                <p className="lede">
                    Convert fake links to real buttons, change navigation buttons to real links with <code>href</code>,
                    and fix form buttons to the correct <code>type</code>. Autosaves to this lesson.
                </p>
                <HtmlPlayground
                    storageKey="core-html:patterns:button-vs-link-decision:v1"
                    initialHtml={STARTER_HTML}
                    height={640}
                />
            </section>

            {/* Prev + Next */}
            <nav className="nextPrev" aria-label="Lesson navigation">
                <NavLink to="/pitfalls/button-vs-link" className="prev" aria-label="Go to Pitfall: Button vs Link">
                    ← Pitfall: Button vs Link
                </NavLink>
                <NavLink to="/patterns/labeled-form-row" className="next" aria-label="Go to Pattern: Labeled form row">
                    Next: Labeled form row →
                </NavLink>
            </nav>

            <div className="backTop"><a href="#top">Back to top ↑</a></div>
        </Styled.Page>
    );
}
