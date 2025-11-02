import React, { useEffect } from "react";
import { Styled } from "./styled";
import { NavLink } from "react-router-dom";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";

/*
  Topic: <form> basics — action/method concept
  Scope: 
  - What a form does (name/value submission)
  - action (target URL) and method (GET/POST)
  - GET vs POST behavior (query string vs request body)
  - Default target when action is omitted
  - Submit controls: <button type>, <input type="submit/reset">
  - Disabled vs readonly (brief), enctype (brief), novalidate (brief)
  - The "name" attribute, successful controls, and the payload
  - Small pitfalls and best practices
  - Live playground (serializes data and shows would-be URL for GET)
*/

const STARTER_HTML = String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>form basics — action/method</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 20px; font: 14px/1.6 system-ui, -apple-system, Segoe UI, Roboto, sans-serif; }
      .grid { display: grid; gap: 12px; }
      fieldset { border: 1px solid #bbb; border-radius: 10px; padding: 10px 12px; }
      legend { padding: 0 6px; font-weight: 600; }
      .row { display: grid; grid-template-columns: 160px 1fr; gap: 8px; align-items: center; }
      .row + .row { margin-top: 8px; }
      label { font-weight: 500; }
      input, select, textarea, button { font: inherit; padding: 6px 8px; }
      .note { color: #6b7280; font-size: 0.92rem; }
      .out { border: 1px dashed #888; border-radius: 10px; padding: 10px; background: color-mix(in oklab, #888, transparent 92%); }
      code { background: #f5f5f5; padding: 0 6px; border-radius: 6px; }
      .toolbar { display: flex; gap: 8px; align-items: center; }
      .toolbar select, .toolbar input[type="text"] { padding: 6px 8px; }
      .stack { display: grid; gap: 12px; }
    </style>
  </head>
  <body>
    <main class="grid">
      <header>
        <h1>&lt;form&gt; basics — action/method</h1>
        <p class="note">Forms submit <em>named</em> values. <code>action</code> decides <em>where</em> to send; <code>method</code> decides <em>how</em> (GET query vs POST body).</p>
      </header>

      <!-- Demo form with instrumented submission -->
      <section class="stack">
        <div class="toolbar">
          <label for="method">method:</label>
          <select id="method">
            <option>GET</option>
            <option>POST</option>
          </select>

          <label for="action">action:</label>
          <input id="action" type="text" size="32" placeholder="(empty = current URL)" />

          <label for="enctype">enctype:</label>
          <select id="enctype" title="Only used with POST">
            <option value="application/x-www-form-urlencoded">application/x-www-form-urlencoded</option>
            <option value="multipart/form-data">multipart/form-data</option>
            <option value="text/plain">text/plain</option>
          </select>
        </div>

        <form id="demo" action="" method="GET" class="grid">
          <fieldset>
            <legend>Account</legend>
            <div class="row">
              <label for="name">Name</label>
              <input id="name" name="name" autocomplete="name" required />
            </div>
            <div class="row">
              <label for="email">Email</label>
              <input id="email" name="email" type="email" autocomplete="email" required />
            </div>
            <div class="row">
              <label for="plan">Plan</label>
              <select id="plan" name="plan">
                <option value="free">Free</option>
                <option value="pro">Pro</option>
                <option value="team">Team</option>
              </select>
            </div>
          </fieldset>

          <fieldset>
            <legend>Preferences</legend>
            <div class="row">
              <label>Newsletter</label>
              <div>
                <label><input type="radio" name="newsletter" value="daily" /> Daily</label>
                <label><input type="radio" name="newsletter" value="weekly" /> Weekly</label>
                <label><input type="radio" name="newsletter" value="off" checked /> Off</label>
              </div>
            </div>
            <div class="row">
              <label for="terms">Agree to terms</label>
              <input id="terms" name="terms" type="checkbox" value="yes" />
            </div>
          </fieldset>

          <div class="row">
            <span></span>
            <div>
              <button type="submit">Submit</button>
              <button type="reset">Reset</button>
              <button type="button" onclick="alert('Custom client action')">Button (no submit)</button>
            </div>
          </div>
        </form>

        <div class="out" id="out">
          <strong>Result:</strong>
          <div id="urlLine" class="note" style="margin-top:6px"></div>
          <pre id="payload" style="white-space:pre-wrap"></pre>
        </div>

        <p class="note">
          Tip: When <code>method="GET"</code>, the browser would navigate to <code>action + ?query</code>.
          When <code>method="POST"</code>, it would send a request body (enctype decides how).
          This demo intercepts submit to display both.
        </p>
      </section>
    </main>

    <script>
      const f = document.getElementById('demo');
      const out = document.getElementById('out');
      const payloadEl = document.getElementById('payload');
      const urlLine = document.getElementById('urlLine');
      const selMethod = document.getElementById('method');
      const inpAction = document.getElementById('action');
      const selEnc = document.getElementById('enctype');

      function applyToolbar() {
        f.method = selMethod.value;
        f.action = inpAction.value.trim();
        f.enctype = selEnc.value;
      }
      selMethod.addEventListener('change', applyToolbar);
      inpAction.addEventListener('input', applyToolbar);
      selEnc.addEventListener('change', applyToolbar);
      applyToolbar();

      function serializeUrlencoded(fd) {
        const params = new URLSearchParams();
        for (const [k,v] of fd) params.append(k, v);
        return params.toString();
      }

      f.addEventListener('submit', (e) => {
        e.preventDefault();
        const fd = new FormData(f);

        // Build "would-be" request
        const method = (f.method || 'GET').toUpperCase();
        const action = f.action || location.href;
        const enc = (f.enctype || 'application/x-www-form-urlencoded').toLowerCase();

        let url = action;
        let body = '';
        if (method === 'GET') {
          const qs = serializeUrlencoded(fd);
          const joiner = action.includes('?') ? '&' : '?';
          url = action + (qs ? (joiner + qs) : '');
          body = '(no body; query string used)';
        } else {
          if (enc.includes('multipart/form-data')) {
            body = 'multipart/form-data (boundary + binary capable)\\n' +
                   Array.from(fd).map(([k,v]) => k + ': ' + (v && v.name ? '(file: ' + v.name + ')' : JSON.stringify(v))).join('\\n');
          } else if (enc.includes('text/plain')) {
            body = Array.from(fd).map(([k,v]) => k + '=' + v).join('\\n');
          } else {
            // default urlencoded
            body = serializeUrlencoded(fd);
          }
        }

        urlLine.textContent = 'Request: ' + method + ' ' + url + ' | enctype=' + enc;
        payloadEl.textContent = String(body || '(empty)');
        out.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      });
    </script>
  </body>
</html>`;

export default function FormBasics() {
    useEffect(() => {
        document.title = "Forms · <form> basics (action/method)";
    }, []);

    return (
        <Styled.Page>
            <header className="pageHeader" id="top">
                <h1>
                    &lt;form&gt; basics <small className="muted">action &amp; method</small>
                </h1>
                <p className="lede">
                    A form sends <strong>name/value</strong> pairs. <code>action</code> tells the browser where to send them;{" "}
                    <code>method</code> tells how (GET query string vs POST body). If <code>action</code> is empty, the current
                    page is used.
                </p>
            </header>

            <nav className="toc" aria-label="On this page">
                <a href="#concept">Concept</a>
                <a href="#action-method">action &amp; method</a>
                <a href="#submitters">Submit controls</a>
                <a href="#payload">What gets sent</a>
                <a href="#briefs">Quick briefs</a>
                <a href="#play">Playground</a>
            </nav>

            <section id="concept">
                <h2>Concept</h2>
                <div className="card">
                    <ul className="bullets">
                        <li>Each successful control with a <code>name</code> contributes a value to the submission.</li>
                        <li><code>action</code> is the target URL. Omitting it uses the current URL.</li>
                        <li><code>method</code> is usually <code>GET</code> (query string) or <code>POST</code> (request body).</li>
                    </ul>
                </div>
            </section>

            <section id="action-method">
                <h2>action &amp; method</h2>
                <Styled.Code role="region" aria-label="Form with explicit action and method">
                    <pre>{String.raw`<form action="/subscribe" method="POST">
  <label>Email <input name="email" type="email" required></label>
  <button type="submit">Subscribe</button>
</form>`}</pre>
                </Styled.Code>
                <p className="note">
                    <strong>GET:</strong> appends data to URL (<code>/subscribe?email=...</code>), good for idempotent fetches/search.{" "}
                    <strong>POST:</strong> sends a body, good for changes (create/update). Servers should treat GET as read-only.
                </p>
            </section>

            <section id="submitters">
                <h2>Submit controls</h2>
                <div className="grid2">
                    <div className="card">
                        <h3>Buttons</h3>
                        <ul className="bullets">
                            <li><code>&lt;button type="submit"&gt;</code> triggers submission.</li>
                            <li><code>&lt;button type="reset"&gt;</code> resets controls to initial values.</li>
                            <li><code>&lt;button type="button"&gt;</code> does nothing by default (script your own behavior).</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h3>Inputs</h3>
                        <ul className="bullets">
                            <li><code>&lt;input type="submit"&gt;</code> and <code>&lt;input type="image"&gt;</code> submit.</li>
                            <li>Only one submit is needed; multiple are fine (the clicked one wins for extra data).</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="payload">
                <h2>What gets sent</h2>
                <ul className="badges">
                    <li><span className="good">Includes</span> controls with a <code>name</code> and not <code>disabled</code>.</li>
                    <li><span className="bad">Skips</span> unchecked checkboxes/radios, <code>disabled</code> controls, buttons (unless named submitter).</li>
                    <li><span className="good">Uses</span> control defaults for encoding (urlencoded) unless multipart or text/plain is chosen.</li>
                </ul>
                <Styled.Code role="region" aria-label="Name/value example">
                    <pre>{String.raw`<form action="/search" method="GET">
  <label>Query <input name="q"></label>
  <button type="submit">Search</button>
</form>
<!-- Would request: /search?q=... -->`}</pre>
                </Styled.Code>
            </section>

            <section id="briefs">
                <h2>Quick briefs</h2>
                <div className="grid2">
                    <div className="card">
                        <h3>enctype</h3>
                        <ul className="bullets">
                            <li>Default: <code>application/x-www-form-urlencoded</code> (key=value&amp;key2=value2).</li>
                            <li>Files: set <code>enctype="multipart/form-data"</code> and include <code>&lt;input type="file"&gt;</code>.</li>
                            <li>Rare: <code>text/plain</code> for legacy/debug.</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h3>disabled vs readonly</h3>
                        <ul className="bullets">
                            <li><code>disabled</code> skips control in submission; not focusable.</li>
                            <li><code>readonly</code> includes value but prevents editing.</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h3>novalidate</h3>
                        <ul className="bullets">
                            <li>Add <code>novalidate</code> on the form to bypass native validation UI.</li>
                            <li>Per-control opt-out: <code>formnovalidate</code> on the submit button.</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h3>autocomplete</h3>
                        <ul className="bullets">
                            <li>Use accurate tokens (<code>name</code>, <code>email</code>, <code>address-line1</code>...).</li>
                            <li>Good autofill improves UX and accuracy.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="play">
                <h2>Try it live</h2>
                <p className="lede">
                    Toggle method, action, and enctype, then submit. The demo shows the URL and the body you’d send.
                </p>
                <HtmlPlayground
                    storageKey="core-html:forms:form-basics:v1"
                    initialHtml={STARTER_HTML}
                    height={700}
                />
            </section>

            {/* Prev + Next */}
            <nav className="nextPrev" aria-label="Lesson navigation">
                <NavLink to="/tables/a11y-dos-donts" className="prev" aria-label="Go to Tables a11y">
                    ← Tables: accessibility & dos/don’ts
                </NavLink>
                <NavLink to="/forms/label-association" className="next" aria-label="Go to Label association">
                    Next: Label association →
                </NavLink>
            </nav>

            <div className="backTop"><a href="#top">Back to top ↑</a></div>
        </Styled.Page>
    );
}
