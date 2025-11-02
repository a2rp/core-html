import{d as a,r as s,j as e,N as t}from"./index-CQ_xjxjH.js";import{H as n}from"./index-C8nEF-Cf.js";const o={Page:a.main`
        display: grid;
        gap: 16px;
        padding: 16px;
        max-width: 1100px;
        margin: 0 auto;

        .pageHeader {
            display: grid;
            gap: 8px;
        }
        .lede {
            color: var(--text-muted);
            font-size: 15px;
        }

        .toc {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            padding: 8px;
            border: 1px solid var(--border);
            border-radius: 12px;
            background: var(--surface);
        }
        .toc a {
            border: 1px solid var(--border);
            background: var(--card);
            color: var(--text);
            padding: 6px 10px;
            border-radius: 999px;
            font-size: 13px;
            text-decoration: none;
        }

        .card {
            border: 1px solid var(--border);
            background: var(--card);
            border-radius: 12px;
            padding: 12px;
        }

        .bullets {
            padding-left: 18px;
            line-height: 1.8;
        }
        .bullets code {
            font-size: 92%;
        }

        .badges {
            display: grid;
            gap: 8px;
            list-style: none;
            padding: 0;
        }
        .badges .bad,
        .badges .good {
            display: inline-block;
            font-size: 12px;
            padding: 2px 8px;
            border-radius: 999px;
            border: 1px solid var(--border);
            margin-right: 6px;
        }
        .badges .bad {
            background: #2b1a1a;
            color: #ffb4b4;
            border-color: #553;
        }
        .badges .good {
            background: #152417;
            color: #b6f3c1;
            border-color: #264a2b;
        }

        details {
            border: 1px solid var(--border);
            border-radius: 10px;
            padding: 8px 10px;
            background: var(--card);
        }
        details + details {
            margin-top: 8px;
        }
        summary {
            cursor: pointer;
        }

        .note {
            font-size: 14px;
            color: var(--text-muted);
            border-left: 3px solid var(--primary);
            padding: 8px 12px;
            background: color-mix(in oklab, var(--primary), transparent 92%);
            border-radius: 8px;
            margin-top: 8px;
        }

        .backTop {
            text-align: right;
            font-size: 13px;
        }
        .backTop a {
            color: var(--text-muted);
            text-decoration: none;
        }

        pre,
        code {
            font-family: ui-monospace, SFMono-Regular, Menlo, Consolas,
                monospace;
        }
        pre {
            font-size: 0.92rem;
            line-height: 1.5;
            margin: 0;
        }

        .nextPrev {
            margin-top: 24px;
            display: flex;
            justify-content: space-between;
            gap: 12px;
        }
        .nextPrev a {
            color: var(--primary);
            text-decoration: none;
            border: 1px solid var(--surface-400, #333);
            padding: 8px 12px;
            border-radius: 10px;
        }
        .nextPrev a:hover {
            background: var(--surface);
        }
    `,Code:a.div`
        position: relative;
        border: 1px solid var(--surface-400, #333);
        background: var(--surface-200, rgba(255, 255, 255, 0.02));
        border-radius: 10px;
        overflow: hidden;

        pre {
            margin: 0;
            padding: 12px 14px;
            font-family: Consolas, Monaco, "SFMono-Regular", Menlo, monospace;
            font-size: 0.9rem;
            line-height: 1.5;
            color: var(--text);
            overflow-x: auto;
            white-space: pre;
            -webkit-overflow-scrolling: touch;
        }
    `};var d=Object.freeze,c=Object.defineProperty,p=(i,l)=>d(c(i,"raw",{value:d(l||i.slice())})),r;const u=String.raw(r||(r=p([`<!doctype html>
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
    <\/script>
  </body>
</html>`],[`<!doctype html>
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
                       pattern="\\\\d{6}" title="Six digits (e.g., 560001)"
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
        const hasSpace = /\\\\s/.test(el.value);
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
    <\/script>
  </body>
</html>`])));function b(){return s.useEffect(()=>{document.title="Forms · Validation hints (native & novalidate)"},[]),e.jsxs(o.Page,{children:[e.jsxs("header",{className:"pageHeader",id:"top",children:[e.jsx("h1",{children:"Validation hints"}),e.jsx("p",{className:"lede",children:"Start with semantics: use input types and attributes to get free validation and messages. Add JavaScript when you need to coordinate UI or translate copy."})]}),e.jsxs("nav",{className:"toc","aria-label":"On this page",children:[e.jsx("a",{href:"#attrs",children:"Useful attributes"}),e.jsx("a",{href:"#styles",children:"Styling invalid states"}),e.jsx("a",{href:"#novalidate",children:"noValidate"}),e.jsx("a",{href:"#api",children:"Constraint Validation API"}),e.jsx("a",{href:"#patterns",children:"Patterns"}),e.jsx("a",{href:"#pitfalls",children:"Pitfalls"}),e.jsx("a",{href:"#faq",children:"FAQ"}),e.jsx("a",{href:"#play",children:"Playground"})]}),e.jsxs("section",{id:"attrs",children:[e.jsx("h2",{children:"Useful attributes"}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("code",{children:"required"}),", ",e.jsx("code",{children:"type"}),", ",e.jsx("code",{children:"min"}),"/",e.jsx("code",{children:"max"}),", ",e.jsx("code",{children:"minlength"}),"/",e.jsx("code",{children:"maxlength"}),", ",e.jsx("code",{children:"step"}),", ",e.jsx("code",{children:"pattern"}),", ",e.jsx("code",{children:"title"})]}),e.jsxs("li",{children:["Provide hints via ",e.jsx("code",{children:"aria-describedby"})," and use labels for names."]}),e.jsx("li",{children:"Let the browser parse first; most users benefit from native messages."})]})})]}),e.jsxs("section",{id:"styles",children:[e.jsx("h2",{children:"Styling invalid states"}),e.jsx("div",{className:"card",children:e.jsxs("p",{children:["Use ",e.jsx("code",{children:":invalid"}),", ",e.jsx("code",{children:":valid"}),", ",e.jsx("code",{children:":required"}),", ",e.jsx("code",{children:":optional"}),", ",e.jsx("code",{children:":placeholder-shown"})," for lightweight styling without JS."]})})]}),e.jsxs("section",{id:"novalidate",children:[e.jsx("h2",{children:"noValidate"}),e.jsx("div",{className:"card",children:e.jsxs("p",{children:["Add ",e.jsx("code",{children:"noValidate"})," to a form when you need custom UI or aggregated error summaries."]})})]}),e.jsxs("section",{id:"api",children:[e.jsx("h2",{children:"Constraint Validation API"}),e.jsx(o.Code,{role:"region","aria-label":"Validation API snippet",children:e.jsx("pre",{children:String.raw`const input = document.querySelector('#email');
if (!input.checkValidity()) {
  // Optional: translate or customize
  input.setCustomValidity('Please enter a valid email address.');
  input.reportValidity();
} else {
  input.setCustomValidity(''); // clear custom message
}`})})]}),e.jsxs("section",{id:"patterns",children:[e.jsx("h2",{children:"Patterns"}),e.jsxs("ul",{className:"badges",children:[e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Prefer attributes"})," Use types and constraints first."]}),e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Describe help"})," Connect hints via ",e.jsx("code",{children:"aria-describedby"}),"."]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Avoid JS-only"})," Don’t rebuild what the browser gives for free."]})]})]}),e.jsxs("section",{id:"pitfalls",children:[e.jsx("h2",{children:"Pitfalls"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["Using ",e.jsx("code",{children:"pattern"})," where a type exists (email/url/number)."]}),e.jsxs("li",{children:["Forgetting to clear ",e.jsx("code",{children:"setCustomValidity('')"})," once valid."]}),e.jsx("li",{children:"Showing green borders for empty required fields."})]})]}),e.jsxs("section",{id:"faq",children:[e.jsx("h2",{children:"FAQ"}),e.jsxs("details",{children:[e.jsx("summary",{children:"How do I localize messages?"}),e.jsxs("div",{className:"ans",children:["Set a custom validity message and display it with ",e.jsx("code",{children:"reportValidity()"})," or your own UI."]})]}),e.jsxs("details",{children:[e.jsx("summary",{children:"Is JavaScript validation still useful?"}),e.jsx("div",{className:"ans",children:"Yes—for cross-field checks, live hints, and server coordination. Keep it additive."})]})]}),e.jsxs("section",{id:"play",children:[e.jsx("h2",{children:"Try it live"}),e.jsxs("p",{className:"lede",children:["Experiment with attributes, try ",e.jsx("code",{children:"novalidate"}),", and inspect ",e.jsx("code",{children:"validity"})," flags in DevTools."]}),e.jsx(n,{storageKey:"core-html:forms:validation-hints:v1",initialHtml:u,height:700})]}),e.jsxs("nav",{className:"nextPrev","aria-label":"Lesson navigation",children:[e.jsx(t,{to:"/forms/textarea",className:"prev","aria-label":"Go to Textarea basics",children:"← Textarea basics"}),e.jsx(t,{to:"/forms/autocomplete-tokens",className:"next","aria-label":"Go to Autocomplete tokens",children:"Next: Autocomplete tokens →"})]}),e.jsx("div",{className:"backTop",children:e.jsx("a",{href:"#top",children:"Back to top ↑"})})]})}export{b as default};
