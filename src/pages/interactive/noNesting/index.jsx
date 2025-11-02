import React, { useEffect } from "react";
import { Styled } from "./styled";
import { NavLink } from "react-router-dom";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";

/**
 * Don’t nest interactive in interactive
 * - What “interactive” means
 * - Why nesting breaks keyboard + semantics
 * - Common anti-patterns and the correct alternatives
 * - ARIA notes (avoid div[role=button] wrapping real controls)
 * - Live playground with bad vs good patterns
 */

const STARTER_HTML = String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Don’t nest interactive in interactive — demo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui,-apple-system,Segoe UI,Roboto,sans-serif; }
      .grid { display: grid; gap: 14px; }
      .card { border: 1px solid #ccc; border-radius: 12px; padding: 12px; }
      .bad  { background: color-mix(in oklab, #dc2626, transparent 92%); border-color:#f2a6a6; }
      .good { background: color-mix(in oklab, #16a34a, transparent 92%); border-color:#8ed09b; }
      .muted { color: #6b7280; }
      .ex { border:1px dashed #aaa; padding:10px; border-radius:10px; margin-top:8px; }
      code { background: #f5f5f5; padding:0 6px; border-radius:6px; }
      .row { display:flex; gap:10px; flex-wrap:wrap; align-items:center; }
      .btn { padding:.5rem .8rem; border-radius:10px; border:1px solid #bbb; background:#fff; cursor:pointer; }
      .link { color:#2563eb; }
      a, button, summary, input, select, textarea { font: inherit; }
      details { border:1px solid #bbb; border-radius:10px; padding:6px 10px; background:#fff; }
    </style>
  </head>
  <body>
    <main class="grid">
      <header>
        <h1>Don’t nest interactive in interactive</h1>
        <p class="muted">Keep each interactive control separate so focus, activation, and semantics are unambiguous.</p>
      </header>

      <!-- 1) Link inside button (BAD) -->
      <section class="card bad">
        <h2>Anti-pattern: <small>link inside button</small></h2>
        <p>Two click targets collide; keyboard users get conflicting activation.</p>
        <div class="ex">
          <button class="btn">
            <a class="link" href="https://example.com">Open docs</a>
          </button>
        </div>
      </section>

      <!-- Fixed -->
      <section class="card good">
        <h2>Fix</h2>
        <p>Use one control. If navigation is the intent, prefer a link styled like a button.</p>
        <div class="ex row">
          <a class="btn link" href="https://example.com">Open docs</a>
          <!-- or: one button with JS navigation -->
          <button class="btn" onclick="location.href='https://example.com'">Open docs</button>
        </div>
      </section>

      <!-- 2) Button inside link (BAD) -->
      <section class="card bad">
        <h2>Anti-pattern: <small>button inside link</small></h2>
        <div class="ex">
          <a href="https://example.com" class="link">
            <button class="btn">Go</button>
          </a>
        </div>
      </section>

      <!-- Fixed -->
      <section class="card good">
        <h2>Fix</h2>
        <div class="ex row">
          <a class="btn link" href="https://example.com">Go</a>
        </div>
      </section>

      <!-- 3) Interactive inside label (surprise nested control) -->
      <section class="card bad">
        <h2>Anti-pattern: <small>extra control inside a label</small></h2>
        <p>Clicking label should activate its input, not a nested button.</p>
        <div class="ex">
          <label>
            Email
            <input type="email" name="email" />
            <button class="btn">Check</button>
          </label>
        </div>
      </section>

      <!-- Fixed -->
      <section class="card good">
        <h2>Fix</h2>
        <div class="ex">
          <label for="email">Email</label>
          <div class="row">
            <input id="email" type="email" name="email" />
            <button class="btn" type="button">Check</button>
          </div>
        </div>
      </section>

      <!-- 4) Details/summary wrapping controls (BAD) -->
      <section class="card bad">
        <h2>Anti-pattern: <small>nesting buttons inside summary text</small></h2>
        <p>Pressing <code>Enter/Space</code> on a button inside <code>&lt;summary&gt;</code> toggles the disclosure unexpectedly.</p>
        <div class="ex">
          <details>
            <summary>More actions <button class="btn">Danger</button></summary>
            <div>Hidden area…</div>
          </details>
        </div>
      </section>

      <!-- Fixed -->
      <section class="card good">
        <h2>Fix</h2>
        <div class="ex">
          <details>
            <summary>More actions</summary>
            <div class="row">
              <button class="btn">Safe</button>
              <button class="btn">Danger</button>
            </div>
          </details>
        </div>
      </section>

      <!-- 5) Role-based wrapper around real controls (BAD) -->
      <section class="card bad">
        <h2>Anti-pattern: <small>div[role=button] wrapping real buttons/links</small></h2>
        <p>Don’t create nested, conflicting roles.</p>
        <div class="ex">
          <div role="button" tabindex="0" class="btn">
            <button class="btn">Inner button</button>
          </div>
        </div>
      </section>

      <!-- Fixed -->
      <section class="card good">
        <h2>Fix</h2>
        <div class="ex row">
          <button class="btn">Single button</button>
          <a class="btn link" href="#">Single link</a>
        </div>
      </section>

      <footer class="muted">
        Rule: One interactive ancestor per click target. If you need multiple actions, place them as siblings.
      </footer>
    </main>
  </body>
</html>`;

export default function NoNesting() {
    useEffect(() => {
        document.title = "Interactive · Don’t nest interactive in interactive";
    }, []);

    return (
        <Styled.Page>
            <header className="pageHeader" id="top">
                <h1>Don’t nest interactive in interactive</h1>
                <p className="lede">
                    Interactive elements are those users can focus and activate: links, buttons, form controls, <code>&lt;summary&gt;</code>, and more.
                    Nesting one inside another creates ambiguous focus and confusing behavior. Keep each control standalone.
                </p>
            </header>

            <nav className="toc" aria-label="On this page">
                <a href="#what">What counts as interactive</a>
                <a href="#why">Why nesting breaks</a>
                <a href="#patterns">Common anti-patterns</a>
                <a href="#aria">ARIA notes</a>
                <a href="#faq">FAQ</a>
                <a href="#play">Playground</a>
            </nav>

            <section id="what">
                <h2>What counts as interactive</h2>
                <div className="card">
                    <ul className="bullets">
                        <li>Native controls: <code>&lt;button&gt;</code>, <code>&lt;input&gt;</code>, <code>&lt;select&gt;</code>, <code>&lt;textarea&gt;</code>.</li>
                        <li>Links & disclosure: <code>&lt;a href&gt;</code>, <code>&lt;summary&gt;</code> inside <code>&lt;details&gt;</code>.</li>
                        <li>Other interactive elements: <code>&lt;audio controls&gt;</code>, <code>&lt;video controls&gt;</code>.</li>
                        <li>Avoid role-based clones unless absolutely necessary; prefer native elements.</li>
                    </ul>
                </div>
            </section>

            <section id="why">
                <h2>Why nesting breaks</h2>
                <div className="card">
                    <ul className="bullets">
                        <li><strong>Focus ambiguity:</strong> Which element should receive focus and activation?</li>
                        <li><strong>Event conflicts:</strong> Key presses like Space/Enter may trigger both parent and child.</li>
                        <li><strong>Assistive tech confusion:</strong> Screen readers announce contradictory roles/names.</li>
                        <li><strong>Platform invariants:</strong> HTML spec defines interactive content that must not be nested.</li>
                    </ul>
                </div>
            </section>

            <section id="patterns">
                <h2>Common anti-patterns & fixes</h2>
                <div className="grid2">
                    <div className="card">
                        <h3>Link inside Button</h3>
                        <p>Pick one. If the action navigates, style the link like a button.</p>
                    </div>
                    <div className="card">
                        <h3>Button inside Link</h3>
                        <p>Same story — one element should own the click target.</p>
                    </div>
                    <div className="card">
                        <h3>Extra controls inside Label</h3>
                        <p>Labels should activate their control, not unrelated buttons.</p>
                    </div>
                    <div className="card">
                        <h3>Controls inside Summary</h3>
                        <p><code>&lt;summary&gt;</code> toggles the disclosure; keep actions in the revealed content.</p>
                    </div>
                    <div className="card">
                        <h3>role="button" wrappers</h3>
                        <p>Don’t wrap real buttons/links inside another button role.</p>
                    </div>
                </div>
            </section>

            <section id="aria">
                <h2>ARIA notes</h2>
                <Styled.Code role="region" aria-label="Pattern alternatives">
                    <pre>{String.raw`<!-- Use one interactive element per target -->
<!-- Navigation -->
<a class="btn" href="/pricing">View pricing</a>

<!-- Button with JS side-effect -->
<button type="button" class="btn" data-action="save">Save</button>

<!-- Label associates with input via for/id; extra actions placed as siblings -->
<label for="email">Email</label>
<div class="row">
  <input id="email" type="email" />
  <button type="button" class="btn">Check</button>
</div>

<!-- Details with actions inside the panel, not inside summary -->
<details>
  <summary>More actions</summary>
  <button class="btn">One</button>
  <button class="btn">Two</button>
</details>`}</pre>
                </Styled.Code>
                <p className="note">
                    If you must simulate a button with a non-button element, ensure correct <code>role="button"</code>, keyboard handling for <code>Enter</code>/<code>Space</code>, and no nested interactive descendants. But prefer real buttons.
                </p>
            </section>

            <section id="faq">
                <h2>FAQ</h2>
                <details>
                    <summary>Can I put an icon link inside a button?</summary>
                    <div className="ans">Use a single button and handle click in JS, or use a single link. The icon should be decorative or part of the same control, not a separate link.</div>
                </details>
                <details>
                    <summary>What about a menu button containing menu items?</summary>
                    <div className="ans">The button should <em>control</em> a separate popup menu element. Place items as siblings or portal content, not as children of the button.</div>
                </details>
                <details>
                    <summary>Is an anchor wrapping a whole card okay?</summary>
                    <div className="ans">Yes, if the card contains no other interactive elements. If the card needs internal buttons/links, don’t wrap the whole card in a link; instead, make the title a link.</div>
                </details>
            </section>

            {/* LAST: Monaco playground */}
            <section id="play">
                <h2>Try it live</h2>
                <p className="lede">
                    Fix the anti-patterns below by choosing a single control for each action, moving extra actions to siblings, and keeping labels pure.
                </p>
                <HtmlPlayground
                    storageKey="core-html:interactive:no-nesting:v1"
                    initialHtml={STARTER_HTML}
                    height={680}
                />
            </section>

            {/* Prev + Next */}
            <nav className="nextPrev" aria-label="Lesson navigation">
                <NavLink to="/interactive/dialog-open" className="prev" aria-label="Go to Dialog basics">
                    ← Dialog basics
                </NavLink>
                <NavLink to="/metadata/title-quality" className="next" aria-label="Go to Title quality">
                    Next: Title quality →
                </NavLink>
            </nav>

            <div className="backTop"><a href="#top">Back to top ↑</a></div>
        </Styled.Page>
    );
}
