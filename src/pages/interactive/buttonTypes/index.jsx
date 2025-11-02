import React, { useEffect } from "react";
import { Styled } from "./styled";
import { NavLink } from "react-router-dom";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";

/**
 * Interactive → <button> types
 * - button, submit, reset — default behaviors
 * - Default type inside/outside forms
 * - Submit buttons and form association (form attribute)
 * - Reset behavior scope (closest form)
 * - Preventing default submit (JS)
 * - Accessibility notes: name/role/state, disabled vs aria-disabled
 * - Common pitfalls & patterns
 * - Monaco playground LAST
 */

const STARTER_HTML = String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>&lt;button&gt; types — demo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui,-apple-system,Segoe UI,Roboto,sans-serif; }
      .grid { display: grid; gap: 14px; max-width: 960px; margin: 0 auto; }
      .card { border: 1px solid #ccc; border-radius: 12px; padding: 12px; }
      .muted { color: #6b7280; }
      .row { display: flex; gap: 10px; flex-wrap: wrap; }
      button { padding: 8px 12px; border-radius: 8px; border: 1px solid #999; background: #f5f5f5; }
      code { background: #f5f5f5; padding: 0 6px; border-radius: 6px; }
      input, select { padding: 6px 8px; border-radius: 6px; border: 1px solid #aaa; }
      form { display: grid; gap: 10px; }
      .log { background: #111; color: #ddd; padding: 8px; border-radius: 8px; min-height: 56px; font-family: ui-monospace,Consolas,monospace; white-space: pre-wrap; }
      .good { background: color-mix(in oklab, #16a34a, transparent 92%); border-color:#8ed09b; }
      .bad  { background: color-mix(in oklab, #dc2626, transparent 92%); border-color:#f2a6a6; }
    </style>
  </head>
  <body>
    <main class="grid">
      <header>
        <h1>&lt;button&gt; types</h1>
        <p class="muted">
          Three native types: <code>button</code>, <code>submit</code>, <code>reset</code>.
          When inside a form and type is omitted, the default is <code>submit</code>.
          Outside forms, the default is <code>button</code>.
        </p>
      </header>

      <section class="card">
        <h2>Inside a form</h2>
        <form id="profile" onsubmit="log('Form submitted (profile)'); event.preventDefault();">
          <label> Name <input name="name" required /> </label>
          <div class="row">
            <button type="submit">Submit (type=submit)</button>
            <button>Implicit submit (no type)</button>
            <button type="reset">Reset (type=reset)</button>
            <button type="button" onclick="log('Clicked plain button (no submit)')">Plain button</button>
          </div>
        </form>
        <div class="log" id="log1" aria-live="polite"></div>
      </section>

      <section class="card">
        <h2>Outside a form (form association)</h2>
        <form id="settings" onsubmit="log2('Form submitted (settings)'); event.preventDefault();">
          <label> Theme
            <select name="theme">
              <option>Light</option>
              <option>Dark</option>
            </select>
          </label>
        </form>
        <p class="muted">Buttons below are outside the form but still submit/reset it using the <code>form</code> attribute.</p>
        <div class="row">
          <button type="submit" form="settings">Submit settings</button>
          <button type="reset" form="settings">Reset settings</button>
          <button type="button" onclick="log2('Standalone button (no submit)')">Standalone</button>
        </div>
        <div class="log" id="log2" aria-live="polite"></div>
      </section>

      <section class="card good">
        <h2>Prevent submit (JS)</h2>
        <form onsubmit="event.preventDefault(); log3('Default prevented; do AJAX here');">
          <label>Email <input type="email" required></label>
          <div class="row">
            <button>Submit (will be prevented)</button>
          </div>
        </form>
        <div class="log" id="log3" aria-live="polite"></div>
      </section>

      <section class="card bad">
        <h2>Common pitfall</h2>
        <p>If you forget <code>type="button"</code> on a button inside a form, clicking it will submit the form accidentally.</p>
        <div class="row">
          <!-- This will submit the surrounding form if present -->
          <button onclick="logPit('Oops: submitted!')">I look harmless but submit</button>
          <!-- This won't submit -->
          <button type="button" onclick="logPit('Safe: no submit')">I am safe</button>
        </div>
        <div class="log" id="pit" aria-live="polite"></div>
      </section>

      <section class="card">
        <h2>Disabled vs aria-disabled</h2>
        <div class="row">
          <button disabled>disabled</button>
          <button aria-disabled="true" onclick="if(this.getAttribute('aria-disabled')==='true'){return false}">aria-disabled</button>
        </div>
        <p class="muted">
          <code>disabled</code> truly disables and removes from focus/submit. <code>aria-disabled="true"</code> is advisory—add JS to block clicks and manage focus if you use it.
        </p>
      </section>

      <footer class="muted">
        Tip: In forms, be explicit with <code>type</code>. Use <code>type="button"</code> for non-submit controls.
      </footer>
    </main>

    <script>
      function log(msg){ document.getElementById('log1').textContent += msg + "\\n"; }
      function log2(msg){ document.getElementById('log2').textContent += msg + "\\n"; }
      function log3(msg){ document.getElementById('log3').textContent += msg + "\\n"; }
      function logPit(msg){ document.getElementById('pit').textContent += msg + "\\n"; }
    </script>
  </body>
</html>`;

export default function ButtonTypes() {
    useEffect(() => {
        document.title = "Interactive · <button> types";
    }, []);

    return (
        <Styled.Page>
            <header className="pageHeader" id="top">
                <h1>
                    <code>&lt;button&gt;</code> types
                </h1>
                <p className="lede">
                    Three native types: <code>button</code>, <code>submit</code>, and <code>reset</code>. Inside forms, the
                    default type is <code>submit</code> unless you set it explicitly. Outside forms, the default is{" "}
                    <code>button</code>. Be explicit to avoid accidental submissions.
                </p>
            </header>

            <nav className="toc" aria-label="On this page">
                <a href="#anatomy">Anatomy & defaults</a>
                <a href="#in-forms">Inside forms</a>
                <a href="#outside">Outside forms</a>
                <a href="#prevent">Prevent submit</a>
                <a href="#a11y">Accessibility notes</a>
                <a href="#pitfalls">Pitfalls</a>
                <a href="#play">Playground</a>
            </nav>

            <section id="anatomy">
                <h2>Anatomy & defaults</h2>
                <div className="card">
                    <ul className="bullets">
                        <li>
                            <strong>button</strong>: generic clickable control. No submit/reset semantics.
                        </li>
                        <li>
                            <strong>submit</strong>: submits the <em>associated</em> form (closest ancestor form or{" "}
                            <code>form=&quot;id&quot;</code>).
                        </li>
                        <li>
                            <strong>reset</strong>: resets controls in the <em>associated</em> form to initial values.
                        </li>
                        <li>
                            Default type: <code>submit</code> when <em>inside</em> a form; <code>button</code> when{" "}
                            <em>outside</em>.
                        </li>
                    </ul>
                </div>
            </section>

            <section id="in-forms">
                <h2>Inside forms</h2>
                <div className="grid2">
                    <div className="card">
                        <h3>Be explicit</h3>
                        <Styled.Code role="region" aria-label="Button types inside a form">
                            <pre>{String.raw`<form>
  <!-- Explicit submit -->
  <button type="submit">Save</button>

  <!-- Explicit neutral -->
  <button type="button">Open dialog</button>

  <!-- Explicit reset -->
  <button type="reset">Reset</button>
</form>`}</pre>
                        </Styled.Code>
                        <p className="note">
                            If you omit <code>type</code>, a button inside a form becomes a submit button and will
                            trigger navigation or a network request by default.
                        </p>
                    </div>
                    <div className="card">
                        <h3>Custom submit target</h3>
                        <Styled.Code role="region" aria-label="Form association via form attribute">
                            <pre>{String.raw`<form id="f1">…</form>
<!-- This button is elsewhere but still submits #f1 -->
<button type="submit" form="f1">Submit #f1</button>`}</pre>
                        </Styled.Code>
                        <p className="note">
                            The <code>form</code> attribute lets a button submit or reset a form it isn’t nested in.
                        </p>
                    </div>
                </div>
            </section>

            <section id="outside">
                <h2>Outside forms</h2>
                <div className="card">
                    <p>
                        When no form is associated, the default is <code>type="button"</code>. Use the{" "}
                        <code>form</code> attribute to connect a button to a specific form by ID.
                    </p>
                </div>
            </section>

            <section id="prevent">
                <h2>Prevent submit (JS)</h2>
                <Styled.Code role="region" aria-label="Prevent default submit">
                    <pre>{String.raw`<form onsubmit="event.preventDefault(); doAsyncSave();">
  <button>Save</button>
</form>`}</pre>
                </Styled.Code>
                <p className="note">
                    Prevent default when you need client-side validation or AJAX. Keep the button a submit button so
                    the intent remains correct for assistive tech and keyboard users.
                </p>
            </section>

            <section id="a11y">
                <h2>Accessibility notes</h2>
                <ul className="badges">
                    <li><span className="good">Good</span> Use real <code>&lt;button&gt;</code>, not clickable <code>&lt;div&gt;</code>s.</li>
                    <li><span className="good">Good</span> Keep concise, descriptive text (“Save”, “Submit order”).</li>
                    <li><span className="good">Good</span> Use <code>disabled</code> for true disabled state; prefer it over only <code>aria-disabled</code>.</li>
                    <li><span className="bad">Wrong</span> Forgetting <code>type="button"</code> for non-submit actions inside forms.</li>
                </ul>
            </section>

            <section id="pitfalls">
                <h2>Pitfalls</h2>
                <div className="card">
                    <ul className="bullets">
                        <li>Accidental form submissions from omitted <code>type</code>.</li>
                        <li>Reset clears the entire associated form — use sparingly.</li>
                        <li>Don’t rely on <code>aria-disabled</code> alone; block clicks and manage focus.</li>
                    </ul>
                </div>
            </section>

            {/* LAST: Monaco playground */}
            <section id="play">
                <h2>Try it live</h2>
                <p className="lede">
                    Explore submit, button, and reset. Try omitting <code>type</code> inside a form, connect a button to
                    a form via <code>form</code> attribute, and add <code>preventDefault()</code>.
                </p>
                <HtmlPlayground
                    storageKey="core-html:interactive:button-types:v1"
                    initialHtml={STARTER_HTML}
                    height={640}
                />
            </section>

            {/* Prev + Next */}
            <nav className="nextPrev" aria-label="Lesson navigation">
                <NavLink to="/forms/input-helpers" className="prev" aria-label="Go to inputmode & enterkeyhint">
                    ← inputmode & enterkeyhint
                </NavLink>
                <NavLink to="/interactive/details-summary" className="next" aria-label="Go to details + summary">
                    Next: details + summary →
                </NavLink>
            </nav>

            <div className="backTop"><a href="#top">Back to top ↑</a></div>
        </Styled.Page>
    );
}
