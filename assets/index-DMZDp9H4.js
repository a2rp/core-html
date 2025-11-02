import{d as a,r as s,j as e,N as i}from"./index-D3QNcmKe.js";import{H as r}from"./index-CAjihRuM.js";const t={Page:a.main`
        display: grid;
        gap: 16px;
        padding: 16px;
        max-width: 1100px;
        margin: 0 auto;

        .pageHeader {
            display: grid;
            gap: 8px;
        }
        .muted {
            color: var(--text-muted);
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

        .grid2 {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
        }
        @media (max-width: 900px) {
            .grid2 {
                grid-template-columns: 1fr;
            }
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
    `};var n=Object.freeze,c=Object.defineProperty,p=(o,d)=>n(c(o,"raw",{value:n(d||o.slice())})),l;const m=String.raw(l||(l=p([`<!doctype html>
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
    <\/script>
  </body>
</html>`],[`<!doctype html>
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
            body = 'multipart/form-data (boundary + binary capable)\\\\n' +
                   Array.from(fd).map(([k,v]) => k + ': ' + (v && v.name ? '(file: ' + v.name + ')' : JSON.stringify(v))).join('\\\\n');
          } else if (enc.includes('text/plain')) {
            body = Array.from(fd).map(([k,v]) => k + '=' + v).join('\\\\n');
          } else {
            // default urlencoded
            body = serializeUrlencoded(fd);
          }
        }

        urlLine.textContent = 'Request: ' + method + ' ' + url + ' | enctype=' + enc;
        payloadEl.textContent = String(body || '(empty)');
        out.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      });
    <\/script>
  </body>
</html>`])));function h(){return s.useEffect(()=>{document.title="Forms · <form> basics (action/method)"},[]),e.jsxs(t.Page,{children:[e.jsxs("header",{className:"pageHeader",id:"top",children:[e.jsxs("h1",{children:["<form> basics ",e.jsx("small",{className:"muted",children:"action & method"})]}),e.jsxs("p",{className:"lede",children:["A form sends ",e.jsx("strong",{children:"name/value"})," pairs. ",e.jsx("code",{children:"action"})," tells the browser where to send them;"," ",e.jsx("code",{children:"method"})," tells how (GET query string vs POST body). If ",e.jsx("code",{children:"action"})," is empty, the current page is used."]})]}),e.jsxs("nav",{className:"toc","aria-label":"On this page",children:[e.jsx("a",{href:"#concept",children:"Concept"}),e.jsx("a",{href:"#action-method",children:"action & method"}),e.jsx("a",{href:"#submitters",children:"Submit controls"}),e.jsx("a",{href:"#payload",children:"What gets sent"}),e.jsx("a",{href:"#briefs",children:"Quick briefs"}),e.jsx("a",{href:"#play",children:"Playground"})]}),e.jsxs("section",{id:"concept",children:[e.jsx("h2",{children:"Concept"}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["Each successful control with a ",e.jsx("code",{children:"name"})," contributes a value to the submission."]}),e.jsxs("li",{children:[e.jsx("code",{children:"action"})," is the target URL. Omitting it uses the current URL."]}),e.jsxs("li",{children:[e.jsx("code",{children:"method"})," is usually ",e.jsx("code",{children:"GET"})," (query string) or ",e.jsx("code",{children:"POST"})," (request body)."]})]})})]}),e.jsxs("section",{id:"action-method",children:[e.jsx("h2",{children:"action & method"}),e.jsx(t.Code,{role:"region","aria-label":"Form with explicit action and method",children:e.jsx("pre",{children:String.raw`<form action="/subscribe" method="POST">
  <label>Email <input name="email" type="email" required></label>
  <button type="submit">Subscribe</button>
</form>`})}),e.jsxs("p",{className:"note",children:[e.jsx("strong",{children:"GET:"})," appends data to URL (",e.jsx("code",{children:"/subscribe?email=..."}),"), good for idempotent fetches/search."," ",e.jsx("strong",{children:"POST:"})," sends a body, good for changes (create/update). Servers should treat GET as read-only."]})]}),e.jsxs("section",{id:"submitters",children:[e.jsx("h2",{children:"Submit controls"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Buttons"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("code",{children:'<button type="submit">'})," triggers submission."]}),e.jsxs("li",{children:[e.jsx("code",{children:'<button type="reset">'})," resets controls to initial values."]}),e.jsxs("li",{children:[e.jsx("code",{children:'<button type="button">'})," does nothing by default (script your own behavior)."]})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Inputs"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("code",{children:'<input type="submit">'})," and ",e.jsx("code",{children:'<input type="image">'})," submit."]}),e.jsx("li",{children:"Only one submit is needed; multiple are fine (the clicked one wins for extra data)."})]})]})]})]}),e.jsxs("section",{id:"payload",children:[e.jsx("h2",{children:"What gets sent"}),e.jsxs("ul",{className:"badges",children:[e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Includes"})," controls with a ",e.jsx("code",{children:"name"})," and not ",e.jsx("code",{children:"disabled"}),"."]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Skips"})," unchecked checkboxes/radios, ",e.jsx("code",{children:"disabled"})," controls, buttons (unless named submitter)."]}),e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Uses"})," control defaults for encoding (urlencoded) unless multipart or text/plain is chosen."]})]}),e.jsx(t.Code,{role:"region","aria-label":"Name/value example",children:e.jsx("pre",{children:String.raw`<form action="/search" method="GET">
  <label>Query <input name="q"></label>
  <button type="submit">Search</button>
</form>
<!-- Would request: /search?q=... -->`})})]}),e.jsxs("section",{id:"briefs",children:[e.jsx("h2",{children:"Quick briefs"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"enctype"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["Default: ",e.jsx("code",{children:"application/x-www-form-urlencoded"})," (key=value&key2=value2)."]}),e.jsxs("li",{children:["Files: set ",e.jsx("code",{children:'enctype="multipart/form-data"'})," and include ",e.jsx("code",{children:'<input type="file">'}),"."]}),e.jsxs("li",{children:["Rare: ",e.jsx("code",{children:"text/plain"})," for legacy/debug."]})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"disabled vs readonly"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("code",{children:"disabled"})," skips control in submission; not focusable."]}),e.jsxs("li",{children:[e.jsx("code",{children:"readonly"})," includes value but prevents editing."]})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"novalidate"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["Add ",e.jsx("code",{children:"novalidate"})," on the form to bypass native validation UI."]}),e.jsxs("li",{children:["Per-control opt-out: ",e.jsx("code",{children:"formnovalidate"})," on the submit button."]})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"autocomplete"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["Use accurate tokens (",e.jsx("code",{children:"name"}),", ",e.jsx("code",{children:"email"}),", ",e.jsx("code",{children:"address-line1"}),"...)."]}),e.jsx("li",{children:"Good autofill improves UX and accuracy."})]})]})]})]}),e.jsxs("section",{id:"play",children:[e.jsx("h2",{children:"Try it live"}),e.jsx("p",{className:"lede",children:"Toggle method, action, and enctype, then submit. The demo shows the URL and the body you’d send."}),e.jsx(r,{storageKey:"core-html:forms:form-basics:v1",initialHtml:m,height:700})]}),e.jsxs("nav",{className:"nextPrev","aria-label":"Lesson navigation",children:[e.jsx(i,{to:"/tables/a11y-dos-donts",className:"prev","aria-label":"Go to Tables a11y",children:"← Tables: accessibility & dos/don’ts"}),e.jsx(i,{to:"/forms/label-association",className:"next","aria-label":"Go to Label association",children:"Next: Label association →"})]}),e.jsx("div",{className:"backTop",children:e.jsx("a",{href:"#top",children:"Back to top ↑"})})]})}export{h as default};
