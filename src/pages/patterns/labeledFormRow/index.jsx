import React, { useEffect } from "react";
import { Styled } from "./styled";
import { NavLink } from "react-router-dom";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";

/**
 * Pattern: Labeled form row
 * — A11y-first row: label (explicit 'for' + unique id) + control
 * — Optional hint (help text) via aria-describedby
 * — Optional error (visible only on error) also in aria-describedby
 * — Required vs optional states, invalid UI nudges, keyboard + screen reader friendliness
 * — Mobile-friendly (stacked) vs desktop (2-column) mental model
 * — Monaco playground last
 */

const STARTER_HTML = String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Labeled form row — pattern</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body {
        margin: 0; padding: 24px;
        font: 14px/1.6 system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
      }
      .form {
        display: grid;
        gap: 12px;
        max-width: 720px;
      }
      .row {
        display: grid;
        grid-template-columns: 220px 1fr; /* label | control */
        gap: 12px;
        align-items: start;
        border: 1px solid #ccc;
        border-radius: 12px;
        padding: 12px;
        background: color-mix(in oklab, #999, transparent 96%);
      }
      .row:focus-within {
        outline: 2px solid #2563eb;
        outline-offset: 2px;
      }
      .label {
        display: block;
        font-weight: 600;
        padding-top: 8px;
      }
      .requiredBadge {
        display: inline-block;
        font-size: 12px;
        padding: 2px 8px;
        margin-left: 8px;
        border: 1px solid #aaa;
        border-radius: 999px;
        background: #1f2937;
        color: #e5e7eb;
      }
      .control {
        display: grid;
        gap: 6px;
      }
      .hint {
        color: #6b7280;
        font-size: 13px;
      }
      .error {
        color: #ef4444;
        font-size: 13px;
      }
      input[type="text"], input[type="email"], input[type="password"], input[type="tel"] {
        width: 100%;
        padding: 10px 12px;
        border: 1px solid #bbb;
        border-radius: 10px;
        font: inherit;
        background: #fff;
        color: #111;
      }
      input:focus {
        outline: none;
        border-color: #2563eb;
        box-shadow: 0 0 0 3px color-mix(in oklab, #2563eb, transparent 80%);
      }
      .invalid input {
        border-color: #ef4444;
        background: color-mix(in oklab, #ef4444, #fff 92%);
      }
      /* compact helper for subtle key style */
      kbd {
        font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
        font-size: 12px;
        border: 1px solid #aaa; padding: 1px 6px; border-radius: 6px; background: #f8f8f8;
      }

      /* Mobile: stack label above control */
      @media (max-width: 760px) {
        .row { grid-template-columns: 1fr; }
        .label { padding-top: 0; }
      }
    </style>
  </head>
  <body>
    <main>
      <header>
        <h1>Labeled form row</h1>
        <p class="hint">A11y-first form row: <strong>label</strong> + <strong>control</strong> + <em>hint</em> + <em>error</em>. Use explicit 'for'/'id', and compose <code>aria-describedby</code> to point to hint/error.</p>
      </header>

      <form class="form" novalidate>
        <!-- 1) Required name (valid) -->
        <div class="row" role="group" aria-labelledby="name-label" aria-describedby="name-hint">
          <label id="name-label" class="label" for="name-input">
            Full name <span class="requiredBadge" aria-hidden="true">Required</span>
          </label>
          <div class="control">
            <input id="name-input" name="name" type="text" required
                   autocomplete="name" placeholder="e.g., Ashish Ranjan"
                   aria-describedby="name-hint" />
            <div id="name-hint" class="hint">Your real name as you prefer it to appear on receipts.</div>
          </div>
        </div>

        <!-- 2) Email with error (invalid) -->
        <div class="row invalid" role="group" aria-labelledby="email-label" aria-describedby="email-hint email-err">
          <label id="email-label" class="label" for="email-input">
            Email <span class="requiredBadge" aria-hidden="true">Required</span>
          </label>
          <div class="control">
            <input id="email-input" name="email" type="email" required
                   autocomplete="email" placeholder="you@example.com"
                   aria-invalid="true"
                   aria-describedby="email-hint email-err" />
            <div id="email-hint" class="hint">We’ll send receipts and important alerts here.</div>
            <div id="email-err" class="error">Enter a valid email address.</div>
          </div>
        </div>

        <!-- 3) Optional phone with helper -->
        <div class="row" role="group" aria-labelledby="phone-label" aria-describedby="phone-hint">
          <label id="phone-label" class="label" for="phone-input">Phone</label>
          <div class="control">
            <input id="phone-input" name="tel" type="tel"
                   autocomplete="tel" placeholder="+91 98xx-xx-xxxx"
                   aria-describedby="phone-hint" />
            <div id="phone-hint" class="hint">Optional. Add for delivery updates via SMS.</div>
          </div>
        </div>

        <!-- 4) Password (example of hint that clarifies expectation) -->
        <div class="row" role="group" aria-labelledby="password-label" aria-describedby="password-hint">
          <label id="password-label" class="label" for="password-input">
            Password <span class="requiredBadge" aria-hidden="true">Required</span>
          </label>
          <div class="control">
            <input id="password-input" name="new-password" type="password" required
                   autocomplete="new-password" placeholder="Create a strong password"
                   aria-describedby="password-hint" />
            <div id="password-hint" class="hint">8+ chars, mix of letters, numbers, symbol. Tip: use a passphrase.</div>
          </div>
        </div>

        <p class="hint">Pro tip: Jump to fields with <kbd>Tab</kbd>; reverse with <kbd>Shift</kbd> + <kbd>Tab</kbd>.</p>
      </form>

      <footer class="hint" style="margin-top: 10px;">
        Why this works: explicit label ↔ input mapping; composed description (hint+error) for screen readers; clear invalid affordances; responsive layout.
      </footer>
    </main>
  </body>
</html>`;

export default function LabeledFormRow() {
    useEffect(() => {
        document.title = "Patterns · Labeled form row";
    }, []);

    return (
        <Styled.Page>
            <header className="pageHeader" id="top">
                <h1>Labeled form row</h1>
                <p className="lede">
                    A compact, accessible form row made of a <strong>label</strong> tied to an input via{" "}
                    <code>for</code>/<code>id</code>, with optional <em>hint</em> and <em>error</em> texts
                    referenced by <code>aria-describedby</code>. Keyboard and screen readers get a complete
                    story; visual users see clear required/invalid states.
                </p>
            </header>

            <nav className="toc" aria-label="On this page">
                <a href="#model">Mental model</a>
                <a href="#anatomy">Anatomy</a>
                <a href="#a11y">A11y details</a>
                <a href="#states">States</a>
                <a href="#layout">Layout</a>
                <a href="#play">Playground</a>
            </nav>

            <section id="model">
                <h2>Mental model</h2>
                <div className="card">
                    <ul className="bullets">
                        <li><strong>Explicit label</strong> maps to the control using matching <code>for</code>/<code>id</code>.</li>
                        <li><strong>Descriptions</strong> (hint + error) are read by assistive tech via <code>aria-describedby</code>.</li>
                        <li><strong>States</strong>: required vs optional, valid vs invalid, focus ring for keyboard users.</li>
                        <li><strong>Layout</strong>: two-column on desktop, stacked on mobile. No tables for layout.</li>
                    </ul>
                </div>
            </section>

            <section id="anatomy">
                <h2>Anatomy</h2>
                <Styled.Code aria-label="Row anatomy example">
                    <pre>{String.raw`<div class="row" role="group" aria-labelledby="email-label" aria-describedby="email-hint email-err">
  <label id="email-label" class="label" for="email-input">Email</label>
  <div class="control">
    <input id="email-input" name="email" type="email"
           aria-describedby="email-hint email-err" />
    <div id="email-hint" class="hint">We'll only use this for receipts.</div>
    <div id="email-err" class="error">Enter a valid email address.</div>
  </div>
</div>`}</pre>
                </Styled.Code>
            </section>

            <section id="a11y">
                <h2>A11y details</h2>
                <ul className="badges">
                    <li><span className="good">Good</span> Explicit <code>label</code> with <code>for</code>=<code>id</code>.</li>
                    <li><span className="good">Good</span> Compose <code>aria-describedby</code> with both hint and error ids.</li>
                    <li><span className="bad">Wrong</span> Placeholder as label; it disappears and hurts a11y.</li>
                    <li><span className="bad">Wrong</span> Color-only error state without text.</li>
                </ul>
            </section>

            <section id="states">
                <h2>States</h2>
                <div className="grid2">
                    <div className="card">
                        <h3>Required</h3>
                        <p>Add a visual badge and keep the native <code>required</code> attribute on the input.</p>
                    </div>
                    <div className="card">
                        <h3>Invalid</h3>
                        <p>Apply an <code>aria-invalid="true"</code> and surface error text. Avoid only-color cues.</p>
                    </div>
                </div>
            </section>

            <section id="layout">
                <h2>Layout</h2>
                <p className="note">Use CSS grid for 2-column alignment; collapse to a single column under ~760px.</p>
            </section>

            {/* LAST: Monaco playground */}
            <section id="play">
                <h2>Try it live</h2>
                <p className="lede">
                    Tweak the ids, wire up <code>aria-describedby</code>, flip states, and experiment with mobile widths.
                </p>
                <HtmlPlayground
                    storageKey="core-html:patterns:labeled-form-row:v1"
                    initialHtml={STARTER_HTML}
                    height={640}
                />
            </section>

            {/* Prev + Next */}
            <nav className="nextPrev" aria-label="Lesson navigation">
                <NavLink to="/patterns/button-vs-link-decision" className="prev" aria-label="Go to Button vs Link decision">
                    ← Button vs Link decision
                </NavLink>
                <NavLink to="/patterns/data-table-with-scope" className="next" aria-label="Go to Data table with scope">
                    Next: Data table with scope →
                </NavLink>
            </nav>

            <div className="backTop"><a href="#top">Back to top ↑</a></div>
        </Styled.Page>
    );
}
