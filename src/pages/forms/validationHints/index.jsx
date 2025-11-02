import React, { useEffect } from "react";
import { Styled } from "./styled";
import { NavLink } from "react-router-dom";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";

/**
 * Validation hints (native messages, novalidate)
 * - Native validation messages and when they appear
 * - Useful attributes: required, type, min/max, minlength/maxlength, step, pattern, title
 * - Styling invalid states with :invalid/:valid/:required/:optional and :placeholder-shown
 * - Disabling native UI: <form noValidate> and manual reporting with reportValidity()
 * - Constraint Validation API: checkValidity(), setCustomValidity(), validity state
 * - Accessible hints: label, aria-describedby, role="alert" for error summaries
 * - Patterns and pitfalls
 * - Live playground at the end
 */

const STARTER_HTML = String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Validation hints — demo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui,-apple-system,Segoe UI,Roboto,sans-serif; }
      .grid { display: grid; gap: 14px; }
      .card { border: 1px solid #ccc; border-radius: 12px; padding: 12px; }
      .row { display: grid; gap: 10px; grid-template-columns: 140px 1fr; align-items: center; }
      .row.full { grid-template-columns: 1fr; }
      label { font-weight: 600; }
      input, select, textarea, button {
        font: inherit;
        padding: 8px 10px;
        border-radius: 8px;
        border: 1px solid #bbb;
        background: canvas;
        color: canvastext;
      }
      input:focus, select:focus, textarea:focus { outline: 2px solid #6aa1ff; outline-offset: 1px; }
      .hint { color: #6b7280; font-size: 12px; margin-top: 4px; }
      .error { color: #b91c1c; font-size: 12px; margin-top: 6px; }
      .ok { color: #15803d; font-size: 12px; margin-top: 6px; }

      /* Minimal invalid/valid styling */
      .field:has(input:required):before { content: "• "; color: #888; }
      input:invalid[aria-invalid="true"] { border-color: #b91c1c; }
      input:valid { border-color: #22c55e; }

      /* Placeholder-driven rule: treat empty required fields as neutral (no green) */
      input:required:placeholder-shown { border-color: #bbb; }

      /* State badges */
      .bad { background: color-mix(in oklab, #dc2626, transparent 92%); border-color:#f2a6a6; }
      .good { background: color-mix(in oklab, #16a34a, transparent 92%); border-color:#8ed09b; }

      .cols { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 12px; }
      @media (max-width: 900px) { .cols { grid-template-columns: 1fr; } }

      code { background: #f5f5f5; padding: 0 6px; border-radius: 6px; }
      .muted { color: #6b7280; }
      .ex { border: 1px dashed #aaa; padding: 8px; border-radius: 10px; margin-top: 6px; }

      /* Error summary (announces via role="alert") */
      .errorSummary[hidden] { display: none !important; }
      .errorSummary {
        border: 1px solid #b91c1c; border-radius: 10px; padding: 10px; background: #2b1a1a; color: #ffb4b4;
      }
    </style>
  </head>
  <body>
    <main class="grid">
      <header>
        <h1>Validation hints</h1>
        <p class="muted">Native checks cover most common cases. Add hints using attributes first; use JS to refine or coordinate UI.</p>
      </header>

      <section class="card good">
        <h2>Attributes that do the heavy lifting</h2>
        <div class="cols">
          <div>
            <div class="row field">
              <label for="email">Email (required)</label>
              <div>
                <input id="email" name="email" type="email" required placeholder="you@example.com"
                       aria-describedby="email-hint" />
                <div id="email-hint" class="hint">Type mismatch triggers a native message.</div>
              </div>
            </div>

            <div class="row field">
              <label for="age">Age (18–120)</label>
              <div>
                <input id="age" name="age" type="number" min="18" max="120" step="1" placeholder="e.g. 28"
                       aria-describedby="age-hint" />
                <div id="age-hint" class="hint">min/max and step govern range and increments.</div>
              </div>
            </div>

            <div class="row field">
              <label for="pwd">Password (minlength 8)</label>
              <div>
                <input id="pwd" name="pwd" type="password" minlength="8" required placeholder="••••••••"
                       aria-describedby="pwd-hint" />
                <div id="pwd-hint" class="hint">minlength/maxlength gate character counts.</div>
              </div>
            </div>
          </div>

          <div>
            <div class="row field">
              <label for="zip">Postal code (pattern)</label>
              <div>
                <input id="zip" name="zip" inputmode="numeric" placeholder="e.g. 560001"
                       pattern="\\d{6}" title="Six digits (e.g., 560001)"
                       aria-describedby="zip-hint" />
                <div id="zip-hint" class="hint">pattern + title provides a custom hint for users.</div>
              </div>
            </div>

            <div class="row field">
              <label for="url">Website</label>
              <div>
                <input id="url" name="url" type="url" placeholder="https://example.com"
                       aria-describedby="url-hint" />
                <div id="url-hint" class="hint">Type-specific parsing (http/https schemes).</div>
              </div>
            </div>

            <div class="row field">
              <label for="color">Favorite color</label>
              <div>
                <input id="color" name="color" type="color" value="#3366ff" aria-describedby="color-hint" />
                <div id="color-hint" class="hint">Many inputs come with built-in UI widgets.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="card">
        <h2>Styling invalid states</h2>
        <p>Use CSS pseudo-classes: <code>:invalid</code>, <code>:valid</code>, <code>:required</code>, <code>:optional</code>, and <code>:placeholder-shown</code>.</p>
        <div class="ex">
          <p class="muted">Tip: avoid turning empty required fields green. The rule <code>input:required:placeholder-shown</code> → neutral border is common.</p>
        </div>
      </section>

      <section class="card bad">
        <h2>Disabling the native popup UI</h2>
        <p>If you need full control, add <code>noValidate</code> to the form and call <code>form.reportValidity()</code> or check inputs manually.</p>
        <form id="nojs" novalidate class="grid" onsubmit="return false;">
          <div class="row">
            <label for="nvEmail">Email (required)</label>
            <input id="nvEmail" name="nvEmail" type="email" required placeholder="you@example.com" />
          </div>
          <div class="row">
            <label for="nvName">Name (required)</label>
            <input id="nvName" name="nvName" required placeholder="Your name" />
          </div>
          <div class="row full">
            <button type="button" onclick="manualValidate()">Validate manually</button>
          </div>
          <div id="errors" class="errorSummary" role="alert" hidden></div>
        </form>
      </section>

      <section class="card">
        <h2>Constraint Validation API (quick demo)</h2>
        <ul>
          <li><code>input.checkValidity()</code> → boolean</li>
          <li><code>input.reportValidity()</code> → boolean + shows message</li>
          <li><code>input.setCustomValidity(msg)</code> → sets/clears a message</li>
          <li><code>input.validity</code> → flags like <code>valueMissing</code>, <code>typeMismatch</code>, <code>patternMismatch</code>, etc.</li>
        </ul>
        <div class="ex">
          <label class="row">
            <span>Username (no spaces)</span>
            <input id="u" placeholder="username" oninput="noSpaces(this)" />
          </label>
          <div id="uState" class="hint"></div>
        </div>
      </section>

      <section class="card">
        <h2>Patterns</h2>
        <ul>
          <li>Prefer native types/attributes first; JS last.</li>
          <li>Pair labels with <code>for/id</code> and reference help text via <code>aria-describedby</code>.</li>
          <li>Summarize errors near the submit button in an element with <code>role="alert"</code>.</li>
          <li>Don’t block submission for non-critical hints; show inline guidance.</li>
        </ul>
      </section>

      <section class="card">
        <h2>Pitfalls</h2>
        <ul>
          <li>Overusing <code>pattern</code> for things that have types (email, url, number).</li>
          <li>Forgetting <code>title</code> when using <code>pattern</code> (users need a human hint).</li>
          <li>Marking optional inputs as required via CSS only (must be semantic).</li>
        </ul>
      </section>

      <section class="card">
        <h2>FAQ</h2>
        <details>
          <summary>How to show messages without a submit?</summary>
          <div>Use <code>input.reportValidity()</code> or listen to <code>input</code>/<code>change</code> events and toggle helper text.</div>
        </details>
        <details>
          <summary>How to translate native messages?</summary>
          <div>Use <code>setCustomValidity()</code> to replace them. Clear with an empty string when valid again.</div>
        </details>
      </section>

      <section class="card">
        <h2>Try it live</h2>
        <p class="muted">Tweak attributes, toggle <code>novalidate</code>, and experiment with <code>setCustomValidity()</code>.</p>
        <p class="muted"><strong>Note:</strong> This playground autosaves in localStorage in your app shell.</p>
      </section>

      <footer class="muted">
        Choose attributes first; JS should refine, not reinvent. Good hints feel timely and respectful.
      </footer>
    </main>

    <script>
      function noSpaces(el) {
        const hasSpace = /\\s/.test(el.value);
        el.setCustomValidity(hasSpace ? "No spaces allowed." : "");
        el.toggleAttribute("aria-invalid", !el.checkValidity());
        document.getElementById("uState").textContent =
          el.validationMessage || "Looks good.";
        // optionally show the bubble:
        // el.reportValidity();
      }

      function manualValidate() {
        const form = document.getElementById("nojs");
        const out = document.getElementById("errors");
        out.innerHTML = "";
        out.hidden = true;

        const invalids = [];
        for (const field of form.querySelectorAll("input, select, textarea")) {
          field.setCustomValidity(""); // clear any old
          const label = form.querySelector('label[for="' + field.id + '"]');
          if (!field.checkValidity()) {
            const name = label ? label.textContent.trim() : (field.name || field.id || "Field");
            invalids.push(name + ": " + (field.validationMessage || "Invalid value"));
            field.setAttribute("aria-invalid","true");
          } else {
            field.removeAttribute("aria-invalid");
          }
        }

        if (invalids.length) {
          out.innerHTML = "<strong>Please fix the following:</strong><ul><li>" + invalids.join("</li><li>") + "</li></ul>";
          out.hidden = false;
        } else {
          out.textContent = "All good. Form would submit now.";
          out.hidden = false;
          out.classList.remove("error");
          out.classList.add("ok");
        }
      }
    </script>
  </body>
</html>`;

export default function ValidationHints() {
    useEffect(() => {
        document.title = "Forms · Validation hints (native & novalidate)";
    }, []);

    return (
        <Styled.Page>
            <header className="pageHeader" id="top">
                <h1>Validation hints</h1>
                <p className="lede">
                    Start with semantics: use input types and attributes to get free validation and messages.
                    Add JavaScript when you need to coordinate UI or translate copy.
                </p>
            </header>

            <nav className="toc" aria-label="On this page">
                <a href="#attrs">Useful attributes</a>
                <a href="#styles">Styling invalid states</a>
                <a href="#novalidate">noValidate</a>
                <a href="#api">Constraint Validation API</a>
                <a href="#patterns">Patterns</a>
                <a href="#pitfalls">Pitfalls</a>
                <a href="#faq">FAQ</a>
                <a href="#play">Playground</a>
            </nav>

            <section id="attrs">
                <h2>Useful attributes</h2>
                <div className="card">
                    <ul className="bullets">
                        <li><code>required</code>, <code>type</code>, <code>min</code>/<code>max</code>, <code>minlength</code>/<code>maxlength</code>, <code>step</code>, <code>pattern</code>, <code>title</code></li>
                        <li>Provide hints via <code>aria-describedby</code> and use labels for names.</li>
                        <li>Let the browser parse first; most users benefit from native messages.</li>
                    </ul>
                </div>
            </section>

            <section id="styles">
                <h2>Styling invalid states</h2>
                <div className="card">
                    <p>Use <code>:invalid</code>, <code>:valid</code>, <code>:required</code>, <code>:optional</code>, <code>:placeholder-shown</code> for lightweight styling without JS.</p>
                </div>
            </section>

            <section id="novalidate">
                <h2>noValidate</h2>
                <div className="card">
                    <p>Add <code>noValidate</code> to a form when you need custom UI or aggregated error summaries.</p>
                </div>
            </section>

            <section id="api">
                <h2>Constraint Validation API</h2>
                <Styled.Code role="region" aria-label="Validation API snippet">
                    <pre>{String.raw`const input = document.querySelector('#email');
if (!input.checkValidity()) {
  // Optional: translate or customize
  input.setCustomValidity('Please enter a valid email address.');
  input.reportValidity();
} else {
  input.setCustomValidity(''); // clear custom message
}`}</pre>
                </Styled.Code>
            </section>

            <section id="patterns">
                <h2>Patterns</h2>
                <ul className="badges">
                    <li><span className="good">Prefer attributes</span> Use types and constraints first.</li>
                    <li><span className="good">Describe help</span> Connect hints via <code>aria-describedby</code>.</li>
                    <li><span className="bad">Avoid JS-only</span> Don’t rebuild what the browser gives for free.</li>
                </ul>
            </section>

            <section id="pitfalls">
                <h2>Pitfalls</h2>
                <ul className="bullets">
                    <li>Using <code>pattern</code> where a type exists (email/url/number).</li>
                    <li>Forgetting to clear <code>setCustomValidity('')</code> once valid.</li>
                    <li>Showing green borders for empty required fields.</li>
                </ul>
            </section>

            <section id="faq">
                <h2>FAQ</h2>
                <details>
                    <summary>How do I localize messages?</summary>
                    <div className="ans">Set a custom validity message and display it with <code>reportValidity()</code> or your own UI.</div>
                </details>
                <details>
                    <summary>Is JavaScript validation still useful?</summary>
                    <div className="ans">Yes—for cross-field checks, live hints, and server coordination. Keep it additive.</div>
                </details>
            </section>

            <section id="play">
                <h2>Try it live</h2>
                <p className="lede">Experiment with attributes, try <code>novalidate</code>, and inspect <code>validity</code> flags in DevTools.</p>
                <HtmlPlayground
                    storageKey="core-html:forms:validation-hints:v1"
                    initialHtml={STARTER_HTML}
                    height={700}
                />
            </section>

            {/* Prev + Next */}
            <nav className="nextPrev" aria-label="Lesson navigation">
                <NavLink to="/forms/textarea" className="prev" aria-label="Go to Textarea basics">
                    ← Textarea basics
                </NavLink>
                <NavLink to="/forms/autocomplete-tokens" className="next" aria-label="Go to Autocomplete tokens">
                    Next: Autocomplete tokens →
                </NavLink>
            </nav>

            <div className="backTop"><a href="#top">Back to top ↑</a></div>
        </Styled.Page>
    );
}
