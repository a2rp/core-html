import React, { useEffect } from "react";
import { Styled } from "./styled";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";
import { NavLink } from "react-router-dom";

/**
 * Inputs: type matrix
 * - Core input types (text, email, number, tel, url, password, search)
 * - Choice controls (checkbox, radio)
 * - Files (file)
 * - Temporal (date, time, datetime-local, month, week)
 * - Ranged/color (range, color)
 * - Hidden and buttons (hidden, submit/reset/button)
 * - Common attributes and a11y notes (name, value, required, min/max/step, pattern, multiple, accept)
 * - Inputmode, enterkeyhint, autocomplete tokens (quick reference)
 * - Live playground LAST
 */

const STARTER_HTML = String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Inputs: type matrix — demo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui,-apple-system,Segoe UI,Roboto,sans-serif; }
      .wrap { max-width: 1100px; margin: 0 auto; display: grid; gap: 18px; }
      fieldset { border: 1px solid #ccc; border-radius: 12px; padding: 12px; }
      legend { padding: 0 6px; opacity: .85; }
      .grid2 { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 12px; }
      @media (max-width: 900px){ .grid2 { grid-template-columns: 1fr; } }
      .row { display: grid; gap: 6px; }
      .row.inline { grid-template-columns: 200px 1fr; align-items: center; }
      label { font-weight: 600; }
      input, select, textarea { font: inherit; padding: 8px 10px; border: 1px solid #bbb; border-radius: 10px; background: canvas; color: canvastext; }
      input[type="checkbox"], input[type="radio"] { width: auto; padding: 0; border: none; }
      .hint { font-size: 12px; color: #6b7280; }
      .err { font-size: 12px; color: #b91c1c; }
      .chips { display: flex; flex-wrap: wrap; gap: 6px; }
      .chip { border:1px solid #bbb; border-radius:999px; padding:2px 8px; font-size:12px; }
      .muted { color: #6b7280; }
      .code { font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: 12px; background: #f3f3f3; padding: 0 6px; border-radius: 6px; }
      .row > .kvs { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 8px; }
      .dash { border:1px dashed #bbb; border-radius: 10px; padding: 10px; }
    </style>
  </head>
  <body>
  <main class="wrap">
    <header>
      <h1>Inputs: type matrix</h1>
      <p class="muted">Minimal patterns for common input types with native validation hints. Each control has a label, optional hint, and example attributes.</p>
    </header>

    <fieldset>
      <legend>Text-like controls</legend>
      <div class="grid2">
        <div class="row">
          <label for="name">Full name</label>
          <input id="name" name="name" type="text" autocomplete="name" placeholder="e.g., Priya Sharma" required />
          <div class="hint">Use <span class="code">text</span> by default for freeform text.</div>
        </div>

        <div class="row">
          <label for="email">Email</label>
          <input id="email" name="email" type="email" autocomplete="email" placeholder="you@example.com" required />
          <div class="hint">Native format validation + email keyboard on mobile.</div>
        </div>

        <div class="row">
          <label for="tel">Phone</label>
          <input id="tel" name="tel" type="tel" inputmode="tel" autocomplete="tel" placeholder="+91 98xx-xx-xxxx" />
          <div class="hint">Use <span class="code">tel</span> and consider a pattern if strict formatting is needed.</div>
        </div>

        <div class="row">
          <label for="url">Website</label>
          <input id="url" name="url" type="url" placeholder="https://example.com" />
          <div class="hint">Native URL validation; include scheme in placeholder.</div>
        </div>

        <div class="row">
          <label for="pwd">Password</label>
          <input id="pwd" name="pwd" type="password" minlength="8" autocomplete="new-password" />
          <div class="hint">Prefer a "show password" toggle via JS for usability.</div>
        </div>

        <div class="row">
          <label for="search">Search</label>
          <input id="search" name="search" type="search" enterkeyhint="search" />
          <div class="hint">May show a clear "x" affordance; <span class="code">enterkeyhint</span> customizes IME action.</div>
        </div>

        <div class="row">
          <label for="age">Age</label>
          <input id="age" name="age" type="number" min="1" max="120" step="1" inputmode="numeric" />
          <div class="hint">Use <span class="code">number</span> when you need numeric operations (min/max/step).</div>
        </div>
      </div>
    </fieldset>

    <fieldset>
      <legend>Choice controls</legend>
      <div class="grid2">
        <div class="row">
          <label>Interests (checkbox)</label>
          <div class="chips">
            <label><input type="checkbox" name="int" value="html" /> HTML</label>
            <label><input type="checkbox" name="int" value="css" /> CSS</label>
            <label><input type="checkbox" name="int" value="js" /> JS</label>
          </div>
          <div class="hint">Multiple selections allowed.</div>
        </div>

        <div class="row">
          <label>Plan (radio)</label>
          <div class="chips">
            <label><input type="radio" name="plan" value="free" /> Free</label>
            <label><input type="radio" name="plan" value="pro" /> Pro</label>
            <label><input type="radio" name="plan" value="team" /> Team</label>
          </div>
          <div class="hint">Same <span class="code">name</span> groups radios; only one value submits.</div>
        </div>
      </div>
    </fieldset>

    <fieldset>
      <legend>Files</legend>
      <div class="grid2">
        <div class="row">
          <label for="avatar">Avatar</label>
          <input id="avatar" name="avatar" type="file" accept="image/*" />
          <div class="hint"><span class="code">accept</span> filters chooser; always validate on server.</div>
        </div>

        <div class="row">
          <label for="docs">Documents (multiple)</label>
          <input id="docs" name="docs" type="file" accept=".pdf,.doc,.docx" multiple />
          <div class="hint">Use <span class="code">multiple</span> to upload several files.</div>
        </div>
      </div>
    </fieldset>

    <fieldset>
      <legend>Date & time</legend>
      <div class="grid2">
        <div class="row">
          <label for="dob">Date</label>
          <input id="dob" name="dob" type="date" />
          <div class="hint">Calendar picker where supported.</div>
        </div>
        <div class="row">
          <label for="t">Time</label>
          <input id="t" name="t" type="time" step="60" />
          <div class="hint">Step controls seconds/minutes granularity.</div>
        </div>
        <div class="row">
          <label for="dt">Local date-time</label>
          <input id="dt" name="dt" type="datetime-local" />
          <div class="hint">No timezone info is included.</div>
        </div>
        <div class="row">
          <label for="m">Month</label>
          <input id="m" name="m" type="month" />
        </div>
        <div class="row">
          <label for="w">Week</label>
          <input id="w" name="w" type="week" />
        </div>
      </div>
    </fieldset>

    <fieldset>
      <legend>Range & color</legend>
      <div class="grid2">
        <div class="row">
          <label for="vol">Volume</label>
          <input id="vol" name="vol" type="range" min="0" max="100" step="10" />
          <div class="hint">Use <span class="code">range</span> for coarse selection + show value via JS if needed.</div>
        </div>
        <div class="row">
          <label for="favc">Favorite color</label>
          <input id="favc" name="favc" type="color" value="#0ea5e9" />
        </div>
      </div>
    </fieldset>

    <fieldset>
      <legend>Hidden & buttons</legend>
      <div class="grid2">
        <div class="row">
          <label for="token">Hidden token</label>
          <input id="token" name="token" type="hidden" value="abc123" />
          <div class="hint">Hidden values submit with the form but are not visible.</div>
        </div>
        <div class="row">
          <label>Buttons</label>
          <div class="chips">
            <input type="submit" value="Submit" />
            <input type="reset" value="Reset" />
            <button type="button">Button</button>
          </div>
        </div>
      </div>
    </fieldset>

    <section class="dash">
      <h2 style="margin:0 0 6px 0;">Common attributes quick grid</h2>
      <div class="row kvs">
        <div>
          <div><strong>name</strong></div>
          <div class="muted">Key used in submission.</div>
        </div>
        <div>
          <div><strong>value</strong></div>
          <div class="muted">Default value / submitted value.</div>
        </div>
        <div>
          <div><strong>required</strong></div>
          <div class="muted">Blocks submit if empty/invalid.</div>
        </div>

        <div>
          <div><strong>min / max</strong></div>
          <div class="muted">number, date, time, range.</div>
        </div>
        <div>
          <div><strong>step</strong></div>
          <div class="muted">Increment granularity.</div>
        </div>
        <div>
          <div><strong>pattern</strong></div>
          <div class="muted">Regex for text-like inputs.</div>
        </div>

        <div>
          <div><strong>multiple</strong></div>
          <div class="muted">file, email (comma separated).</div>
        </div>
        <div>
          <div><strong>accept</strong></div>
          <div class="muted">File MIME/extensions.</div>
        </div>
        <div>
          <div><strong>autocomplete</strong></div>
          <div class="muted">name, email, organization, etc.</div>
        </div>

        <div>
          <div><strong>inputmode</strong></div>
          <div class="muted">numeric, decimal, tel, email, url.</div>
        </div>
        <div>
          <div><strong>enterkeyhint</strong></div>
          <div class="muted">go, search, send, next, done…</div>
        </div>
        <div>
          <div><strong>readonly / disabled</strong></div>
          <div class="muted">Readonly submits; disabled doesn’t.</div>
        </div>
      </div>
    </section>

    <footer class="muted">
      Tip: Prefer native validation and semantics first; enhance progressively with JS where necessary.
    </footer>
  </main>
  </body>
</html>`;

export default function InputsTypeMatrix() {
    useEffect(() => {
        document.title = "Forms · Inputs: type matrix";
    }, []);

    return (
        <Styled.Page>
            <header className="pageHeader" id="top">
                <h1>Inputs: type matrix</h1>
                <p className="lede">
                    A compact tour of core input types, their intended use, and the attributes that shape behavior and accessibility.
                    Each example shows a minimal, semantic pattern you can adapt.
                </p>
            </header>

            <nav className="toc" aria-label="On this page">
                <a href="#text">Text-like</a>
                <a href="#choice">Choice controls</a>
                <a href="#file">Files</a>
                <a href="#time">Date & time</a>
                <a href="#range">Range/Color</a>
                <a href="#hidden">Hidden & Buttons</a>
                <a href="#attrs">Common attributes</a>
                <a href="#play">Playground</a>
            </nav>

            <section id="text">
                <h2>Text-like inputs</h2>
                <div className="card">
                    <ul className="bullets">
                        <li><code>text</code> is the default; layer constraints with <code>required</code>, <code>minlength</code>, <code>maxlength</code>, <code>pattern</code>.</li>
                        <li><code>email</code>, <code>url</code> apply format checks and better keyboards on mobile.</li>
                        <li><code>number</code> supports <code>min</code>, <code>max</code>, <code>step</code>. Use <code>inputmode</code> to improve soft-keyboards.</li>
                        <li><code>search</code> may provide clear affordances and a semantic hint to UAs.</li>
                    </ul>
                </div>
            </section>

            <section id="choice">
                <h2>Choice controls</h2>
                <div className="card">
                    <ul className="bullets">
                        <li><strong>Checkbox</strong> allows multiple choices; each checked value is submitted under the same <code>name</code>.</li>
                        <li><strong>Radio</strong> shares the same <code>name</code> to enforce a single choice.</li>
                        <li>Label each control; clicking the text should toggle the control (wrap or use <code>for</code>/<code>id</code>).</li>
                    </ul>
                </div>
            </section>

            <section id="file">
                <h2>Files</h2>
                <div className="card">
                    <ul className="bullets">
                        <li>Use <code>accept</code> for client-side filtering, but always validate on the server.</li>
                        <li><code>multiple</code> allows many files; server must handle arrays.</li>
                        <li>Prefer showing selected filenames and size limits in the UI.</li>
                    </ul>
                </div>
            </section>

            <section id="time">
                <h2>Date & time</h2>
                <div className="card">
                    <ul className="bullets">
                        <li><code>datetime-local</code> has no timezone; store/convert deliberately.</li>
                        <li>Use <code>step</code> on <code>time</code> to restrict granularity (e.g., 60 for minutes).</li>
                        <li>Fallbacks may render as text inputs on older browsers—validate server-side.</li>
                    </ul>
                </div>
            </section>

            <section id="range">
                <h2>Range & color</h2>
                <div className="card">
                    <ul className="bullets">
                        <li><code>range</code> is great for approximate values; mirror value visibly.</li>
                        <li><code>color</code> provides a picker; still store hex or RGB explicitly.</li>
                    </ul>
                </div>
            </section>

            <section id="hidden">
                <h2>Hidden & buttons</h2>
                <div className="card">
                    <ul className="bullets">
                        <li><code>hidden</code> submits value invisibly; don’t store secrets in it.</li>
                        <li>Use <code>&lt;button type="button"&gt;</code> for non-submit actions.</li>
                        <li><code>reset</code> clears values to defaults; use sparingly.</li>
                    </ul>
                </div>
            </section>

            <section id="attrs">
                <h2>Common attributes quick reference</h2>
                <Styled.Code aria-label="Common attributes code example">
                    {`<input
  name="email"
  type="email"
  required
  autocomplete="email"
  inputmode="email"
  enterkeyhint="send"
/>`}
                </Styled.Code>
                <p className="note">
                    Combine <code>autocomplete</code> tokens with proper labels and <code>name</code> attributes to unlock browser autofill and accessibility benefits.
                </p>
            </section>

            {/* LAST: Monaco playground */}
            <section id="play">
                <h2>Try it live</h2>
                <p className="lede">
                    Experiment with attributes, add labels, and observe native validation messages. Autosaves to this lesson.
                </p>
                <HtmlPlayground
                    storageKey="core-html:forms:inputs-type-matrix:v1"
                    initialHtml={STARTER_HTML}
                    height={720}
                />
            </section>

            {/* Prev + Next */}
            <nav className="nextPrev" aria-label="Lesson navigation">
                <NavLink to="/forms/common-attrs" className="prev" aria-label="Go to Common attributes">
                    ← Common attributes
                </NavLink>
                <NavLink to="/forms/fieldset-legend" className="next" aria-label="Go to Grouping: fieldset + legend">
                    Next: Grouping — fieldset + legend →
                </NavLink>
            </nav>

            <div className="backTop"><a href="#top">Back to top ↑</a></div>
        </Styled.Page>
    );
}
