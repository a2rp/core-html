// src/pages/forms/commonAttrs/index.jsx
import React, { useEffect } from "react";
import { Styled } from "./styled";
import { NavLink } from "react-router-dom";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";

/*
  Scope: Common form input attributes
  Covers: name, value, required, min, max, pattern, placeholder, disabled, readonly
  Bonus notes: step, minlength/maxlength, aria-invalid, form/novalidate
*/

const STARTER_HTML = String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Common form attributes — live demo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 22px; font: 14px/1.6 system-ui,-apple-system,Segoe UI,Roboto,sans-serif; }
      .grid { display:grid; gap:14px; }
      fieldset { border:1px solid #bbb; border-radius:10px; padding:12px; }
      legend { padding:0 6px; }
      .row { display:grid; grid-template-columns: 160px 1fr; gap:10px; align-items:center; }
      .hint { color:#6b7280; font-size:12px; }
      input, button, select, textarea { font: inherit; padding:8px 10px; border-radius:8px; border:1px solid #bbb; }
      input[readonly] { background: color-mix(in oklab, #999, transparent 90%); }
      input:invalid { outline: 2px solid #ef4444; }
      .two { display:grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap:12px; }
      @media (max-width: 800px){ .row { grid-template-columns:1fr; } .two { grid-template-columns:1fr; } }
      .muted { color:#6b7280; }
      .k { display:inline-block; border:1px solid #bbb; border-radius:999px; padding:2px 8px; font-size:12px; }
    </style>
  </head>
  <body>
    <main class="grid">
      <header>
        <h1>Common attributes on form controls</h1>
        <p class="muted">Try removing/adding attributes and submit the form to see built-in browser behavior.</p>
      </header>

      <form id="example" class="grid" novalidate>
        <fieldset class="grid">
          <legend>Basics</legend>

          <div class="row">
            <label for="email">Email <span class="k">required</span></label>
            <input id="email" name="email" type="email" required placeholder="you@example.com" />
          </div>

          <div class="row">
            <label for="age">Age <span class="k">min=18 max=120</span></label>
            <input id="age" name="age" type="number" min="18" max="120" placeholder="Enter your age" />
          </div>

          <div class="row">
            <label for="zip">Zip code <span class="k">pattern</span></label>
            <input id="zip" name="zip" inputmode="numeric" pattern="\\d{5}" placeholder="5 digits e.g. 56001" />
          </div>

          <div class="row">
            <label for="readonlyId">User ID <span class="k">readonly</span></label>
            <input id="readonlyId" name="userId" value="USR-00142" readonly />
          </div>

          <div class="row">
            <label for="invite">Invite code <span class="k">disabled</span></label>
            <input id="invite" name="invite" value="INV-LOCKED" disabled />
          </div>
          <p class="hint">Disabled fields are excluded from submission; readonly fields are submitted.</p>
        </fieldset>

        <fieldset class="grid">
          <legend>Extra nudges</legend>
          <div class="two">
            <div class="row">
              <label for="price">Price <span class="k">step=0.01</span></label>
              <input id="price" name="price" type="number" min="0" step="0.01" placeholder="0.00" />
            </div>
            <div class="row">
              <label for="username">Username <span class="k">minlength/maxlength</span></label>
              <input id="username" name="username" minlength="3" maxlength="16" placeholder="3–16 chars" />
            </div>
          </div>
          <p class="hint">These are not in the “core list” but commonly paired with it.</p>
        </fieldset>

        <div class="row">
          <span></span>
          <div>
            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
          </div>
        </div>

        <p class="muted">Open DevTools → Network → Docs/All to see what “name=value” pairs get submitted.</p>
      </form>

      <section>
        <h2>What happens on submit?</h2>
        <ul>
          <li><strong>required</strong> blocks submit until filled (unless <code>novalidate</code> on form or <code>formnovalidate</code> on the submit button).</li>
          <li><strong>pattern</strong> validates text inputs against a regex (entire string must match).</li>
          <li><strong>min/max</strong> gate numeric/date inputs; out-of-range is invalid.</li>
          <li><strong>placeholder</strong> is a hint, not a label; never rely on it as the only label.</li>
          <li><strong>readonly</strong> submits the value; <strong>disabled</strong> does not.</li>
        </ul>
      </section>
    </main>

    <script>
      const form = document.getElementById('example');
      form.addEventListener('submit', (e) => {
        // Remove novalidate to see built-in messages:
        // form.removeAttribute('novalidate');
        if (!form.checkValidity()) {
          e.preventDefault();
          alert('Form is invalid. Fix fields highlighted in red.');
        }
      });
    </script>
  </body>
</html>`;

export default function CommonAttrs() {
    useEffect(() => {
        document.title = "Forms · Common attributes";
    }, []);

    return (
        <Styled.Page>
            <header className="pageHeader" id="top">
                <h1>Common attributes</h1>
                <p className="lede">
                    Everyday, ergonomic attributes for form controls:{" "}
                    <code>name</code>, <code>value</code>, <code>required</code>,{" "}
                    <code>min</code>/<code>max</code>, <code>pattern</code>,{" "}
                    <code>placeholder</code>, <code>disabled</code>, and{" "}
                    <code>readonly</code>. Learn what they do and the gotchas.
                </p>
            </header>

            <nav className="toc" aria-label="On this page">
                <a href="#model">Mental model</a>
                <a href="#table">Attribute quick reference</a>
                <a href="#examples">Examples</a>
                <a href="#pitfalls">Pitfalls</a>
                <a href="#faq">FAQ</a>
                <a href="#play">Playground</a>
            </nav>

            <section id="model">
                <h2>Mental model</h2>
                <div className="card">
                    <ul className="bullets">
                        <li>
                            <strong>name</strong> is the key in the form submission{" "}
                            <em>name=value</em> pair. No <code>name</code> → not submitted.
                        </li>
                        <li>
                            <strong>value</strong> is the default. The user’s input usually
                            overwrites it.
                        </li>
                        <li>
                            <strong>required</strong>, <strong>min</strong>,{" "}
                            <strong>max</strong>, and <strong>pattern</strong> add{" "}
                            <em>constraint validation</em>.
                        </li>
                        <li>
                            <strong>placeholder</strong> is a hint, not a label. Always keep
                            a real <code>&lt;label&gt;</code>.
                        </li>
                        <li>
                            <strong>readonly</strong> submits the value;{" "}
                            <strong>disabled</strong> removes it from the tab order and
                            submission.
                        </li>
                    </ul>
                </div>
            </section>

            <section id="table">
                <h2>Attribute quick reference</h2>
                <div className="tableWrap">
                    <table className="matrix">
                        <thead>
                            <tr>
                                <th>Attribute</th>
                                <th>Purpose</th>
                                <th>Applies to</th>
                                <th>Notes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th><code>name</code></th>
                                <td>Key used when submitting form data.</td>
                                <td>Most controls</td>
                                <td>Without it, value isn’t submitted.</td>
                            </tr>
                            <tr>
                                <th><code>value</code></th>
                                <td>Initial value. Can be edited by user.</td>
                                <td>Most inputs</td>
                                <td>For <code>checkbox</code>/<code>radio</code> it’s the submitted value when checked.</td>
                            </tr>
                            <tr>
                                <th><code>required</code></th>
                                <td>Field must be non-empty/valid.</td>
                                <td>Inputs, selects, textarea</td>
                                <td>Blocked unless valid; form <code>novalidate</code> disables checks.</td>
                            </tr>
                            <tr>
                                <th><code>min</code> / <code>max</code></th>
                                <td>Lower/upper bounds.</td>
                                <td>number, range, date/time types</td>
                                <td>Works with <code>step</code>; out-of-range → invalid.</td>
                            </tr>
                            <tr>
                                <th><code>pattern</code></th>
                                <td>Regex (entire string must match).</td>
                                <td>text-like inputs</td>
                                <td>Use anchors if needed. Pair with <code>title</code> to explain.</td>
                            </tr>
                            <tr>
                                <th><code>placeholder</code></th>
                                <td>Inline hint/example.</td>
                                <td>text-like inputs, textarea</td>
                                <td>Not a label. Don’t rely on contrasty placeholder as sole guidance.</td>
                            </tr>
                            <tr>
                                <th><code>disabled</code></th>
                                <td>Unavailable; skipped by tab; not submitted.</td>
                                <td>Any form control</td>
                                <td>Use when user shouldn’t interact yet (e.g., loading).</td>
                            </tr>
                            <tr>
                                <th><code>readonly</code></th>
                                <td>Locked, but value submitted.</td>
                                <td>text-like inputs</td>
                                <td>Keep for things like IDs; still focusable via mouse in some UAs.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section id="examples">
                <h2>Examples</h2>
                <div className="grid2">
                    <div className="card">
                        <h3>name + value</h3>
                        <Styled.Code>
                            <pre>{String.raw`<input name="email" type="email" value="me@example.com">`}</pre>
                        </Styled.Code>
                        <p className="note">On submit → <code>email=me%40example.com</code>.</p>
                    </div>

                    <div className="card">
                        <h3>required + pattern</h3>
                        <Styled.Code>
                            <pre>{String.raw`<input name="zip" pattern="\\d{5}" required title="5 digits">`}</pre>
                        </Styled.Code>
                        <p className="note">Entire input must match the regex.</p>
                    </div>

                    <div className="card">
                        <h3>min/max (+ step)</h3>
                        <Styled.Code>
                            <pre>{String.raw`<input name="price" type="number" min="0" step="0.01">`}</pre>
                        </Styled.Code>
                        <p className="note">Use <code>step</code> to align increments with your unit.</p>
                    </div>

                    <div className="card">
                        <h3>disabled vs readonly</h3>
                        <Styled.Code>
                            <pre>{String.raw`<input name="id" value="USR-100" readonly>
<input name="coupon" value="NEWUSER" disabled>`}</pre>
                        </Styled.Code>
                        <p className="note">
                            <code>id=USR-100</code> will be submitted; <code>coupon</code> won’t.
                        </p>
                    </div>
                </div>
            </section>

            <section id="pitfalls">
                <h2>Pitfalls</h2>
                <ul className="badges">
                    <li><span className="bad">Wrong</span> Placeholder used instead of a label.</li>
                    <li><span className="bad">Wrong</span> No <code>name</code> on control you expect to submit.</li>
                    <li><span className="bad">Wrong</span> Regex expecting partial match; pattern must match the whole string.</li>
                    <li><span className="good">Good</span> Pair constraints with helpful copy and labels.</li>
                </ul>
            </section>

            <section id="faq">
                <h2>FAQ</h2>
                <details>
                    <summary>How do I show a custom message?</summary>
                    <div className="ans">
                        Use <code>setCustomValidity()</code> in JS or just rely on native messages; for regex, set a helpful{" "}
                        <code>title</code> so built-in UI shows it.
                    </div>
                </details>
                <details>
                    <summary>Should I validate on both client and server?</summary>
                    <div className="ans">Yes. Client-side helps UX; server-side is the source of truth.</div>
                </details>
            </section>

            <section id="play">
                <h2>Try it live</h2>
                <p className="lede">
                    Toggle attributes, change ranges/patterns, and submit to see native behavior. Autosaves to this lesson.
                </p>
                <HtmlPlayground
                    storageKey="core-html:forms:common-attrs:v1"
                    initialHtml={STARTER_HTML}
                    height={680}
                />
            </section>

            <nav className="nextPrev" aria-label="Lesson navigation">
                <NavLink to="/forms/inputs-type-matrix" className="prev" aria-label="Go to Inputs: type matrix">
                    ← Inputs: type matrix
                </NavLink>
                <NavLink to="/forms/fieldset-legend" className="next" aria-label="Go to Grouping: fieldset + legend">
                    Next: Grouping — fieldset + legend →
                </NavLink>
            </nav>

            <div className="backTop"><a href="#top">Back to top ↑</a></div>
        </Styled.Page>
    );
}
