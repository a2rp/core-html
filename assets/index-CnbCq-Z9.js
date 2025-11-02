import{d as r,r as o,j as e,N as d}from"./index-D3QNcmKe.js";import{H as t}from"./index-CAjihRuM.js";const a={Page:r.main`
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
    `,Code:r.div`
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
    `};var l=Object.freeze,c=Object.defineProperty,p=(i,n)=>l(c(i,"raw",{value:l(n||i.slice())})),s;const h=String.raw(s||(s=p([`<!doctype html>
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
          <\/script>
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
</html>`],[`<!doctype html>
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
                const ok = /^(?=.*\\\\d).{8,}$/.test(val);
                input.setAttribute('aria-invalid', ok ? 'false' : 'true');
                err.hidden = ok;
              });
            }());
          <\/script>
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
</html>`])));function m(){return o.useEffect(()=>{document.title="Accessibility · Form labels & errors"},[]),e.jsxs(a.Page,{children:[e.jsxs("header",{className:"pageHeader",id:"top",children:[e.jsx("h1",{children:"Form labels & errors"}),e.jsx("p",{className:"lede",children:"Every form control needs a clear programmatic label. Hints and error messages should be attached so assistive tech announces them at the right time."})]}),e.jsxs("nav",{className:"toc","aria-label":"On this page",children:[e.jsx("a",{href:"#model",children:"Why labels matter"}),e.jsx("a",{href:"#ways",children:"Ways to label"}),e.jsx("a",{href:"#hints",children:"Hints & errors"}),e.jsx("a",{href:"#required",children:"Required fields"}),e.jsx("a",{href:"#groups",children:"Grouping controls"}),e.jsx("a",{href:"#pitfalls",children:"Pitfalls"}),e.jsx("a",{href:"#play",children:"Playground"})]}),e.jsxs("section",{id:"model",children:[e.jsx("h2",{children:"Why labels matter"}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["Screen readers build meaning from ",e.jsx("strong",{children:"name"}),", ",e.jsx("strong",{children:"role"}),", and ",e.jsx("strong",{children:"value"}),". Labels provide the ",e.jsx("em",{children:"name"}),"."]}),e.jsx("li",{children:"Placeholders are hints, not labels. They disappear and often aren’t announced consistently."}),e.jsx("li",{children:"Clicking a label should move focus to its control—fast, friendly, accessible."})]})})]}),e.jsxs("section",{id:"ways",children:[e.jsx("h2",{children:"Three reliable ways to label"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsxs("h3",{children:[e.jsx("code",{children:"<label for>"})," + ",e.jsx("code",{children:"id"})]}),e.jsx(a.Code,{children:e.jsx("pre",{children:String.raw`<label for="email">Email</label>
<input id="email" type="email" autocomplete="email">`})}),e.jsx("p",{className:"note",children:"The most common and robust approach."})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Wrap input inside the label"}),e.jsx(a.Code,{children:e.jsx("pre",{children:String.raw`<label>
  <input type="checkbox" name="agree">
  I agree to the terms
</label>`})}),e.jsx("p",{className:"note",children:"Great for checkbox/radio where text should be clickable."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("h3",{children:[e.jsx("code",{children:"aria-labelledby"})," (advanced)"]}),e.jsx(a.Code,{children:e.jsx("pre",{children:String.raw`<span id="city-label">City</span>
<input aria-labelledby="city-label">`})}),e.jsxs("p",{className:"note",children:["Use when the label text is not in a ",e.jsx("code",{children:"<label>"})," element."]})]})]})]}),e.jsxs("section",{id:"hints",children:[e.jsx("h2",{children:"Hints & errors that get announced"}),e.jsxs("p",{children:["Attach helper text and errors using ",e.jsx("code",{children:"aria-describedby"}),". On validation failure:"]}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["Set ",e.jsx("code",{children:'aria-invalid="true"'})," on the control."]}),e.jsxs("li",{children:["Reveal the error element and, ideally, give it ",e.jsx("code",{children:'role="alert"'})," for immediate announcement."]}),e.jsxs("li",{children:["Keep the error text referenced in ",e.jsx("code",{children:"aria-describedby"})," so it’s part of the control context."]})]}),e.jsx(a.Code,{children:e.jsx("pre",{children:String.raw`<input id="pwd" aria-describedby="pwd-hint pwd-err">
<div id="pwd-hint" class="hint">Min 8 chars.</div>
<div id="pwd-err" class="error" role="alert" hidden>Password too short.</div>`})})]}),e.jsxs("section",{id:"required",children:[e.jsx("h2",{children:"Required fields"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["Use native ",e.jsx("code",{children:"required"})," for built-in semantics and UX."]}),e.jsxs("li",{children:[e.jsx("code",{children:'aria-required="true"'})," can supplement custom widgets. Don’t duplicate if native already signals it."]}),e.jsx("li",{children:"Show the requirement visually (e.g., an asterisk) and include text in a hint for clarity."})]})]}),e.jsxs("section",{id:"groups",children:[e.jsx("h2",{children:"Grouping radios/checkboxes"}),e.jsxs("p",{children:["Use ",e.jsx("code",{children:"<fieldset>"})," with a ",e.jsx("code",{children:"<legend>"})," so the group has a name."]}),e.jsx(a.Code,{children:e.jsx("pre",{children:String.raw`<fieldset>
  <legend>Preferred contact</legend>
  <label><input type="radio" name="c" value="email"> Email</label>
  <label><input type="radio" name="c" value="phone"> Phone</label>
</fieldset>`})})]}),e.jsxs("section",{id:"pitfalls",children:[e.jsx("h2",{children:"Pitfalls"}),e.jsxs("ul",{className:"badges",children:[e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Placeholder used as label."]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Error text not connected or announced."]}),e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Good"})," Labels click-focus, hints/errors linked, invalid states signalled."]})]})]}),e.jsxs("section",{id:"play",children:[e.jsx("h2",{children:"Try it live"}),e.jsx("p",{className:"lede",children:"Fix the anti-pattern, add missing labels, connect hints and errors, and wire up validation state changes."}),e.jsx(t,{storageKey:"core-html:a11y:form-labels-errors:v1",initialHtml:h,height:720})]}),e.jsxs("nav",{className:"nextPrev","aria-label":"Lesson navigation",children:[e.jsx(d,{to:"/a11y/language-landmarks",className:"prev","aria-label":"Go to Language & landmarks",children:"← Language & landmarks"}),e.jsx(d,{to:"/a11y/name-role-value",className:"next","aria-label":"Go to Name/Role/Value",children:"Next: Name/Role/Value →"})]}),e.jsx("div",{className:"backTop",children:e.jsx("a",{href:"#top",children:"Back to top ↑"})})]})}export{m as default};
