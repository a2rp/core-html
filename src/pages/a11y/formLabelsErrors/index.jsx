// src/pages/a11y/formLabelsErrors/index.jsx
import React, { useEffect } from "react";
import { Styled } from "./styled";
import { NavLink } from "react-router-dom";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";

/**
 * Forms a11y: Labels & Errors
 * - Why labels matter (name/role/value)
 * - 3 correct ways to associate labels
 * - Hints vs errors: aria-describedby
 * - Error states: aria-invalid + role="alert"
 * - Required vs aria-required
 * - Fieldset + legend for radio/checkbox groups
 * - Pitfalls & quick checks
 * - Live playground at the end
 */

const STARTER_HTML = String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Forms a11y — labels & errors</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui,-apple-system,Segoe UI,Roboto,sans-serif; }
      .grid { display: grid; gap: 16px; }
      .card { border: 1px solid #ccc; border-radius: 12px; padding: 12px; }
      .good { background: color-mix(in oklab, #16a34a, transparent 92%); border-color:#8ed09b; }
      .bad  { background: color-mix(in oklab, #dc2626, transparent 92%); border-color:#f2a6a6; }
      .row  { display: grid; gap: 8px; }
      .field{ display:grid; gap:6px; }
      .inline{ display:flex; align-items:center; gap:8px; }
      .hint { color:#6b7280; font-size: 13px; }
      .error{ color:#b91c1c; font-size:13px; }
      .sr-only{
        position:absolute!important; width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;
        clip:rect(0,0,0,0); white-space:nowrap; border:0;
      }
      input, select { padding:8px 10px; border:1px solid #bbb; border-radius:8px; }
      input[aria-invalid="true"]{ border-color:#e11d48; outline-color:#e11d48; }
      fieldset{ border:1px solid #bbb; border-radius:10px; padding:10px; }
      legend{ padding:0 6px; }
      button{ padding:8px 12px; border-radius:10px; border:1px solid #bbb; background:#f5f5f5; }
      code { background:#f5f5f5; padding:0 6px; border-radius:6px; }
    </style>
  </head>
  <body>
    <main class="grid">
      <header>
        <h1>Form labels & errors</h1>
        <p class="hint">Give every control a programmatic label; connect hints and errors so assistive tech announces them.</p>
      </header>

      <section class="card bad">
        <h2>Anti-pattern: placeholder ≠ label</h2>
        <div class="row">
          <div class="field">
            <!-- ❌ No label; placeholder vanishes and isn't announced reliably -->
            <input type="text" placeholder="Email">
          </div>
        </div>
      </section>

      <section class="card good">
        <h2>Label association (for/id)</h2>
        <div class="row">
          <div class="field">
            <label for="email">Email</label>
            <input id="email" name="email" type="email" autocomplete="email" />
            <div id="email-hint" class="hint">We’ll send a confirmation.</div>
          </div>
        </div>
      </section>

      <section class="card good">
        <h2>Label by wrapping</h2>
        <div class="row">
          <label class="inline">
            <input type="checkbox" name="news" />
            Subscribe to newsletter
          </label>
        </div>
      </section>

      <section class="card good">
        <h2>aria-labelledby (advanced)</h2>
        <div class="row">
          <div class="field">
            <span id="city-label">City</span>
            <input aria-labelledby="city-label" name="city" type="text" />
          </div>
        </div>
      </section>

      <section class="card good">
        <h2>Hints & errors via aria-describedby</h2>
        <form class="row" onsubmit="return false" id="demoForm">
          <div class="field">
            <label for="pwd">Password</label>
            <input id="pwd" name="pwd" type="password" aria-describedby="pwd-hint pwd-err" />
            <div id="pwd-hint" class="hint">Min 8 chars, include a number.</div>
            <div id="pwd-err" class="error" role="alert" hidden>Enter at least 8 chars with a number.</div>
          </div>
          <button id="validate">Validate</button>
          <script>
            (function(){
              const btn = document.getElementById('validate');
              const input = document.getElementById('pwd');
              const err = document.getElementById('pwd-err');
              btn.addEventListener('click', () => {
                const val = input.value || "";
                const ok = /^(?=.*\\d).{8,}$/.test(val);
                input.setAttribute('aria-invalid', ok ? 'false' : 'true');
                err.hidden = ok;
              });
            }());
          </script>
        </form>
      </section>

      <section class="card good">
        <h2>Groups: fieldset + legend (radio)</h2>
        <fieldset>
          <legend>Contact method</legend>
          <label class="inline"><input type="radio" name="contact" value="email"> Email</label>
          <label class="inline"><input type="radio" name="contact" value="phone"> Phone</label>
        </fieldset>
      </section>

      <section class="card good">
        <h2>Required: native + a11y</h2>
        <div class="row">
          <div class="field">
            <label for="name">Full name <span aria-hidden="true">*</span></label>
            <input id="name" name="name" required aria-describedby="name-hint" />
            <div id="name-hint" class="hint">This field is required.</div>
          </div>
        </div>
      </section>

      <footer class="hint">
        Quick check: Can you click the words to focus the input? Can a screen reader find the error text after validation?
      </footer>
    </main>
  </body>
</html>`;

export default function FormLabelsErrors() {
    useEffect(() => {
        document.title = "Accessibility · Form labels & errors";
    }, []);

    return (
        <Styled.Page>
            <header className="pageHeader" id="top">
                <h1>Form labels &amp; errors</h1>
                <p className="lede">
                    Every form control needs a clear programmatic label. Hints and error messages should be attached so assistive
                    tech announces them at the right time.
                </p>
            </header>

            <nav className="toc" aria-label="On this page">
                <a href="#model">Why labels matter</a>
                <a href="#ways">Ways to label</a>
                <a href="#hints">Hints &amp; errors</a>
                <a href="#required">Required fields</a>
                <a href="#groups">Grouping controls</a>
                <a href="#pitfalls">Pitfalls</a>
                <a href="#play">Playground</a>
            </nav>

            <section id="model">
                <h2>Why labels matter</h2>
                <div className="card">
                    <ul className="bullets">
                        <li>
                            Screen readers build meaning from <strong>name</strong>, <strong>role</strong>, and <strong>value</strong>. Labels provide the <em>name</em>.
                        </li>
                        <li>
                            Placeholders are hints, not labels. They disappear and often aren’t announced consistently.
                        </li>
                        <li>
                            Clicking a label should move focus to its control—fast, friendly, accessible.
                        </li>
                    </ul>
                </div>
            </section>

            <section id="ways">
                <h2>Three reliable ways to label</h2>

                <div className="grid2">
                    <div className="card">
                        <h3><code>&lt;label for&gt;</code> + <code>id</code></h3>
                        <Styled.Code>
                            <pre>{String.raw`<label for="email">Email</label>
<input id="email" type="email" autocomplete="email">`}</pre>
                        </Styled.Code>
                        <p className="note">The most common and robust approach.</p>
                    </div>

                    <div className="card">
                        <h3>Wrap input inside the label</h3>
                        <Styled.Code>
                            <pre>{String.raw`<label>
  <input type="checkbox" name="agree">
  I agree to the terms
</label>`}</pre>
                        </Styled.Code>
                        <p className="note">Great for checkbox/radio where text should be clickable.</p>
                    </div>

                    <div className="card">
                        <h3><code>aria-labelledby</code> (advanced)</h3>
                        <Styled.Code>
                            <pre>{String.raw`<span id="city-label">City</span>
<input aria-labelledby="city-label">`}</pre>
                        </Styled.Code>
                        <p className="note">Use when the label text is not in a <code>&lt;label&gt;</code> element.</p>
                    </div>
                </div>
            </section>

            <section id="hints">
                <h2>Hints &amp; errors that get announced</h2>
                <p>Attach helper text and errors using <code>aria-describedby</code>. On validation failure:</p>
                <ul className="bullets">
                    <li>Set <code>aria-invalid="true"</code> on the control.</li>
                    <li>Reveal the error element and, ideally, give it <code>role="alert"</code> for immediate announcement.</li>
                    <li>Keep the error text referenced in <code>aria-describedby</code> so it’s part of the control context.</li>
                </ul>

                <Styled.Code>
                    <pre>{String.raw`<input id="pwd" aria-describedby="pwd-hint pwd-err">
<div id="pwd-hint" class="hint">Min 8 chars.</div>
<div id="pwd-err" class="error" role="alert" hidden>Password too short.</div>`}</pre>
                </Styled.Code>
            </section>

            <section id="required">
                <h2>Required fields</h2>
                <ul className="bullets">
                    <li>Use native <code>required</code> for built-in semantics and UX.</li>
                    <li><code>aria-required="true"</code> can supplement custom widgets. Don’t duplicate if native already signals it.</li>
                    <li>Show the requirement visually (e.g., an asterisk) and include text in a hint for clarity.</li>
                </ul>
            </section>

            <section id="groups">
                <h2>Grouping radios/checkboxes</h2>
                <p>Use <code>&lt;fieldset&gt;</code> with a <code>&lt;legend&gt;</code> so the group has a name.</p>
                <Styled.Code>
                    <pre>{String.raw`<fieldset>
  <legend>Preferred contact</legend>
  <label><input type="radio" name="c" value="email"> Email</label>
  <label><input type="radio" name="c" value="phone"> Phone</label>
</fieldset>`}</pre>
                </Styled.Code>
            </section>

            <section id="pitfalls">
                <h2>Pitfalls</h2>
                <ul className="badges">
                    <li><span className="bad">Wrong</span> Placeholder used as label.</li>
                    <li><span className="bad">Wrong</span> Error text not connected or announced.</li>
                    <li><span className="good">Good</span> Labels click-focus, hints/errors linked, invalid states signalled.</li>
                </ul>
            </section>

            <section id="play">
                <h2>Try it live</h2>
                <p className="lede">
                    Fix the anti-pattern, add missing labels, connect hints and errors, and wire up validation state changes.
                </p>
                <HtmlPlayground
                    storageKey="core-html:a11y:form-labels-errors:v1"
                    initialHtml={STARTER_HTML}
                    height={720}
                />
            </section>

            {/* Prev + Next */}
            <nav className="nextPrev" aria-label="Lesson navigation">
                <NavLink to="/a11y/language-landmarks" className="prev" aria-label="Go to Language & landmarks">
                    ← Language &amp; landmarks
                </NavLink>
                <NavLink to="/a11y/name-role-value" className="next" aria-label="Go to Name/Role/Value">
                    Next: Name/Role/Value →
                </NavLink>
            </nav>

            <div className="backTop"><a href="#top">Back to top ↑</a></div>
        </Styled.Page>
    );
}
