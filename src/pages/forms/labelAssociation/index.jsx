import React, { useEffect } from "react";
import { Styled } from "./styled";
import { NavLink } from "react-router-dom";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";

/**
 * <label> association (for/id vs wrapping)
 * - Explicit label: <label for="id"> + control with matching id
 * - Implicit label: <label> wraps exactly one form control
 * - Radios/checkboxes: both styles work; wrapping is ergonomic
 * - Fieldset/legend: name groups; still label individual fields
 * - Helpers: aria-describedby for hint/error; aria-labelledby when reusing headings
 * - Inputs without visual text: use aria-label (sparingly) or visually hidden text
 * - Pitfalls: duplicate ids, multiple controls inside one label, clickable areas, required marks
 * - Monaco playground LAST
 */

const STARTER_HTML = String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>&lt;label&gt; association — explicit vs implicit</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 20px; font: 14px/1.6 system-ui, -apple-system, Segoe UI, Roboto, sans-serif; }
      .grid { display: grid; gap: 14px; }
      .card { border: 1px solid #ccc; border-radius: 12px; padding: 12px; background: #fff; }
      @media (prefers-color-scheme: dark) { .card { background: #111; border-color: #333; } }
      .two { display: grid; gap: 12px; grid-template-columns: repeat(2, minmax(0,1fr)); }
      @media (max-width: 900px) { .two { grid-template-columns: 1fr; } }
      .row { display: grid; gap: 6px; }
      .h { color: #6b7280; font-size: 12px; }
      input[type="text"], input[type="email"], input[type="number"], input[type="date"] {
        width: 100%; padding: 8px 10px; border: 1px solid #bbb; border-radius: 8px; background: inherit; color: inherit;
      }
      .inline { display: flex; align-items: center; gap: 8px; }
      .sr-only { position:absolute; width:1px; height:1px; padding:0; margin:-1px; overflow:hidden; clip:rect(0,0,0,0); white-space:nowrap; border:0; }
      fieldset { border: 1px solid #bbb; border-radius: 10px; padding: 10px; }
      legend { padding: 0 6px; font-weight: 600; }
      .err { color: #ef4444; font-size: 12px; }
      .help { color: #6b7280; font-size: 12px; }
      .muted { color: #6b7280; }
      code { background: #f5f5f5; padding: 0 6px; border-radius: 6px; }
      @media (prefers-color-scheme: dark) { code { background: #222; } }
      .ex { border: 1px dashed #aaa; padding: 10px; border-radius: 10px; }
      .k { display:inline-block; border:1px solid #bbb; border-radius:999px; padding:2px 8px; font-size:12px; }
      button { padding: 8px 12px; border-radius: 10px; border: 1px solid #888; background: transparent; color: inherit; cursor: pointer; }
    </style>
  </head>
  <body>
    <main class="grid">
      <header>
        <h1>&lt;label&gt; association</h1>
        <p class="muted">Two ways: <code>for/id</code> (explicit) or wrap the control (implicit). Screen readers announce the label; clicks on the label move focus to the control.</p>
      </header>

      <section class="card">
        <h2>Explicit label <small class="h">(<code>for</code> + matching <code>id</code>)</small></h2>
        <div class="ex">
          <div class="row">
            <label for="email">Email address</label>
            <input id="email" type="email" autocomplete="email" placeholder="name@example.com" />
            <div id="email-h" class="help">We'll only use this for important updates.</div>
          </div>
        </div>
        <p class="h">Pros: flexible layout; label and control can be separated. Cons: requires unique <code>id</code>.</p>
      </section>

      <section class="card">
        <h2>Implicit label <small class="h">(wraps the control)</small></h2>
        <div class="ex">
          <label class="row">
            <span>Full name</span>
            <input type="text" name="fullname" placeholder="Ada Lovelace" />
          </label>
        </div>
        <p class="h">Pros: no <code>id</code> needed; label is clickable. Cons: must wrap exactly one control (besides label text).</p>
      </section>

      <section class="card two">
        <div>
          <h2 class="h">Radios/checkboxes</h2>
          <div class="ex">
            <!-- Wrapping style (implicit) -->
            <label class="inline"><input type="checkbox" name="tos" /> I agree to the Terms</label>
            <div class="row">
              <!-- Explicit style (for/id) -->
              <input id="news" type="checkbox" />
              <label for="news" class="inline">Send me product news</label>
            </div>
          </div>
        </div>
        <div>
          <h2 class="h">Group name with <code>&lt;fieldset&gt;</code> + <code>&lt;legend&gt;</code></h2>
          <div class="ex">
            <fieldset>
              <legend>Preferred contact</legend>
              <label class="inline"><input type="radio" name="contact" value="email" /> Email</label>
              <label class="inline"><input type="radio" name="contact" value="phone" /> Phone</label>
              <label class="inline"><input type="radio" name="contact" value="sms" /> SMS</label>
            </fieldset>
            <p class="h">The legend names the group. Individual options still have their own labels.</p>
          </div>
        </div>
      </section>

      <section class="card">
        <h2>Help and error messages <small class="h">(<code>aria-describedby</code>)</small></h2>
        <div class="ex">
          <div class="row">
            <label for="age">Age</label>
            <input id="age" type="number" min="0" aria-describedby="age-h age-e" />
            <div id="age-h" class="help">Enter whole years only.</div>
            <div id="age-e" class="err" hidden>Age must be between 1 and 120.</div>
            <button onclick="
              const el = document.getElementById('age-e');
              el.hidden = !el.hidden;
              document.getElementById('age').focus();
            ">Toggle error</button>
          </div>
        </div>
        <p class="h"><code>aria-describedby</code> lets assistive tech read extra context after the label (e.g., hints and errors).</p>
      </section>

      <section class="card">
        <h2>No visible label? Provide an accessible name</h2>
        <div class="ex two">
          <div>
            <p class="h">Visually hidden text (preferred)</p>
            <label class="sr-only" for="search">Search</label>
            <input id="search" type="text" placeholder="Search…" />
          </div>
          <div>
            <p class="h"><code>aria-label</code> (fallback)</p>
            <input type="text" placeholder="Search…" aria-label="Search site" />
          </div>
        </div>
        <p class="h">Placeholders are not labels. Use a real (possibly hidden) label or <code>aria-label</code>.</p>
      </section>

      <section class="card">
        <h2>Pitfalls</h2>
        <ul>
          <li>Duplicate <code>id</code> breaks explicit labels.</li>
          <li>One <code>&lt;label&gt;</code> should correspond to a single control; avoid wrapping multiple inputs.</li>
          <li>Make the whole label clickable for small checkboxes/radios (wrap or pair with <code>for</code>).</li>
          <li>Mark required in the label text or with <code>aria-required="true"</code> (and validate server-side).</li>
        </ul>
      </section>

      <footer class="muted">
        Tip: If clicking text doesn't move focus to the input, the label isn’t properly associated.
      </footer>
    </main>
  </body>
</html>`;

export default function LabelAssociation() {
    useEffect(() => {
        document.title = "Forms · <label> association (for/id vs wrapping)";
    }, []);

    return (
        <Styled.Page>
            <header className="pageHeader" id="top">
                <h1>
                    <code>&lt;label&gt;</code> association: <code>for/id</code> vs wrapping
                </h1>
                <p className="lede">
                    Every form control needs an accessible name. The simplest way is a proper{" "}
                    <code>&lt;label&gt;</code>. Use explicit labels (<code>for</code>/<code>id</code>) or
                    implicit labels (wrap the control). Add <code>aria-describedby</code> for hints/errors, and
                    use <code>fieldset</code>/<code>legend</code> to name groups like radio sets.
                </p>
            </header>

            <nav className="toc" aria-label="On this page">
                <a href="#explicit">Explicit label</a>
                <a href="#implicit">Implicit label</a>
                <a href="#groups">Groups (fieldset/legend)</a>
                <a href="#describedby">Help & errors</a>
                <a href="#no-visible">No visible label</a>
                <a href="#pitfalls">Pitfalls</a>
                <a href="#play">Playground</a>
            </nav>

            <section id="explicit">
                <h2>Explicit label (<code>for</code>/<code>id</code>)</h2>
                <div className="card">
                    <ul className="bullets">
                        <li>Pairs a label with a control even if they’re not adjacent in the DOM.</li>
                        <li>Requires a unique <code>id</code> on the control and matching <code>for</code> on the label.</li>
                        <li>Great for flexible layout and complex forms.</li>
                    </ul>
                </div>
            </section>

            <section id="implicit">
                <h2>Implicit label (wrapping)</h2>
                <div className="card">
                    <ul className="bullets">
                        <li>The label wraps exactly one form control (besides the label text).</li>
                        <li>Convenient for checkboxes and radios; the whole line becomes the click target.</li>
                        <li>Avoid nesting multiple inputs inside one label.</li>
                    </ul>
                </div>
            </section>

            <section id="groups">
                <h2>Groups: <code>&lt;fieldset&gt;</code> + <code>&lt;legend&gt;</code></h2>
                <p className="note">
                    Use a legend to give a name to a related set of controls (e.g., “Preferred contact”). Each option still has
                    its own label.
                </p>
            </section>

            <section id="describedby">
                <h2>Help & errors with <code>aria-describedby</code></h2>
                <Styled.Code role="region" aria-label="Describedby example">
                    <pre>{String.raw`<label for="email">Email</label>
<input id="email" type="email" aria-describedby="email-h email-e">
<div id="email-h" class="help">We’ll send receipts here.</div>
<div id="email-e" class="err" hidden>Enter a valid email.</div>`}</pre>
                </Styled.Code>
                <p className="note">
                    Multiple ids can be space-separated. Assistive tech will read them after the main label.
                </p>
            </section>

            <section id="no-visible">
                <h2>Controls without visible text</h2>
                <ul className="badges">
                    <li><span className="good">Preferred</span> Visually hidden text label</li>
                    <li><span className="ok">Okay</span> <code>aria-label</code> with concise text</li>
                    <li><span className="bad">Avoid</span> Placeholder-as-label (it disappears and isn’t announced as a label)</li>
                </ul>
            </section>

            {/* LAST: Monaco playground */}
            <section id="play">
                <h2>Try it live</h2>
                <p className="lede">
                    Fix broken associations, add <code>for</code>/<code>id</code> or wrap inputs, wire up help/error with{" "}
                    <code>aria-describedby</code>, and make the entire label clickable for checkboxes/radios.
                </p>
                <HtmlPlayground
                    storageKey="core-html:forms:label-association:v1"
                    initialHtml={STARTER_HTML}
                    height={700}
                />
            </section>

            {/* Prev + Next */}
            <nav className="nextPrev" aria-label="Lesson navigation">
                <NavLink to="/forms/form-basics" className="prev" aria-label="Go to Form basics">
                    ← Form basics
                </NavLink>
                <NavLink to="/forms/inputs-type-matrix" className="next" aria-label="Go to Inputs: type matrix">
                    Next: Inputs — type matrix →
                </NavLink>
            </nav>

            <div className="backTop"><a href="#top">Back to top ↑</a></div>
        </Styled.Page>
    );
}
