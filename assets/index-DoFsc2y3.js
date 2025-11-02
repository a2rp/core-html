import{d as i,r as d,j as e,N as s}from"./index-CQ_xjxjH.js";import{H as l}from"./index-C8nEF-Cf.js";const t={Page:i.main`
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
    `,Code:i.div`
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
    `};var r=Object.freeze,c=Object.defineProperty,u=(o,n)=>r(c(o,"raw",{value:r(n||o.slice())})),a;const p=String.raw(a||(a=u([`<!doctype html>
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
    <\/script>
  </body>
</html>`],[`<!doctype html>
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
      function log(msg){ document.getElementById('log1').textContent += msg + "\\\\n"; }
      function log2(msg){ document.getElementById('log2').textContent += msg + "\\\\n"; }
      function log3(msg){ document.getElementById('log3').textContent += msg + "\\\\n"; }
      function logPit(msg){ document.getElementById('pit').textContent += msg + "\\\\n"; }
    <\/script>
  </body>
</html>`])));function x(){return d.useEffect(()=>{document.title="Interactive · <button> types"},[]),e.jsxs(t.Page,{children:[e.jsxs("header",{className:"pageHeader",id:"top",children:[e.jsxs("h1",{children:[e.jsx("code",{children:"<button>"})," types"]}),e.jsxs("p",{className:"lede",children:["Three native types: ",e.jsx("code",{children:"button"}),", ",e.jsx("code",{children:"submit"}),", and ",e.jsx("code",{children:"reset"}),". Inside forms, the default type is ",e.jsx("code",{children:"submit"})," unless you set it explicitly. Outside forms, the default is"," ",e.jsx("code",{children:"button"}),". Be explicit to avoid accidental submissions."]})]}),e.jsxs("nav",{className:"toc","aria-label":"On this page",children:[e.jsx("a",{href:"#anatomy",children:"Anatomy & defaults"}),e.jsx("a",{href:"#in-forms",children:"Inside forms"}),e.jsx("a",{href:"#outside",children:"Outside forms"}),e.jsx("a",{href:"#prevent",children:"Prevent submit"}),e.jsx("a",{href:"#a11y",children:"Accessibility notes"}),e.jsx("a",{href:"#pitfalls",children:"Pitfalls"}),e.jsx("a",{href:"#play",children:"Playground"})]}),e.jsxs("section",{id:"anatomy",children:[e.jsx("h2",{children:"Anatomy & defaults"}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"button"}),": generic clickable control. No submit/reset semantics."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"submit"}),": submits the ",e.jsx("em",{children:"associated"})," form (closest ancestor form or"," ",e.jsx("code",{children:'form="id"'}),")."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"reset"}),": resets controls in the ",e.jsx("em",{children:"associated"})," form to initial values."]}),e.jsxs("li",{children:["Default type: ",e.jsx("code",{children:"submit"})," when ",e.jsx("em",{children:"inside"})," a form; ",e.jsx("code",{children:"button"})," when"," ",e.jsx("em",{children:"outside"}),"."]})]})})]}),e.jsxs("section",{id:"in-forms",children:[e.jsx("h2",{children:"Inside forms"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Be explicit"}),e.jsx(t.Code,{role:"region","aria-label":"Button types inside a form",children:e.jsx("pre",{children:String.raw`<form>
  <!-- Explicit submit -->
  <button type="submit">Save</button>

  <!-- Explicit neutral -->
  <button type="button">Open dialog</button>

  <!-- Explicit reset -->
  <button type="reset">Reset</button>
</form>`})}),e.jsxs("p",{className:"note",children:["If you omit ",e.jsx("code",{children:"type"}),", a button inside a form becomes a submit button and will trigger navigation or a network request by default."]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Custom submit target"}),e.jsx(t.Code,{role:"region","aria-label":"Form association via form attribute",children:e.jsx("pre",{children:String.raw`<form id="f1">…</form>
<!-- This button is elsewhere but still submits #f1 -->
<button type="submit" form="f1">Submit #f1</button>`})}),e.jsxs("p",{className:"note",children:["The ",e.jsx("code",{children:"form"})," attribute lets a button submit or reset a form it isn’t nested in."]})]})]})]}),e.jsxs("section",{id:"outside",children:[e.jsx("h2",{children:"Outside forms"}),e.jsx("div",{className:"card",children:e.jsxs("p",{children:["When no form is associated, the default is ",e.jsx("code",{children:'type="button"'}),". Use the"," ",e.jsx("code",{children:"form"})," attribute to connect a button to a specific form by ID."]})})]}),e.jsxs("section",{id:"prevent",children:[e.jsx("h2",{children:"Prevent submit (JS)"}),e.jsx(t.Code,{role:"region","aria-label":"Prevent default submit",children:e.jsx("pre",{children:String.raw`<form onsubmit="event.preventDefault(); doAsyncSave();">
  <button>Save</button>
</form>`})}),e.jsx("p",{className:"note",children:"Prevent default when you need client-side validation or AJAX. Keep the button a submit button so the intent remains correct for assistive tech and keyboard users."})]}),e.jsxs("section",{id:"a11y",children:[e.jsx("h2",{children:"Accessibility notes"}),e.jsxs("ul",{className:"badges",children:[e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Good"})," Use real ",e.jsx("code",{children:"<button>"}),", not clickable ",e.jsx("code",{children:"<div>"}),"s."]}),e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Good"})," Keep concise, descriptive text (“Save”, “Submit order”)."]}),e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Good"})," Use ",e.jsx("code",{children:"disabled"})," for true disabled state; prefer it over only ",e.jsx("code",{children:"aria-disabled"}),"."]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Forgetting ",e.jsx("code",{children:'type="button"'})," for non-submit actions inside forms."]})]})]}),e.jsxs("section",{id:"pitfalls",children:[e.jsx("h2",{children:"Pitfalls"}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["Accidental form submissions from omitted ",e.jsx("code",{children:"type"}),"."]}),e.jsx("li",{children:"Reset clears the entire associated form — use sparingly."}),e.jsxs("li",{children:["Don’t rely on ",e.jsx("code",{children:"aria-disabled"})," alone; block clicks and manage focus."]})]})})]}),e.jsxs("section",{id:"play",children:[e.jsx("h2",{children:"Try it live"}),e.jsxs("p",{className:"lede",children:["Explore submit, button, and reset. Try omitting ",e.jsx("code",{children:"type"})," inside a form, connect a button to a form via ",e.jsx("code",{children:"form"})," attribute, and add ",e.jsx("code",{children:"preventDefault()"}),"."]}),e.jsx(l,{storageKey:"core-html:interactive:button-types:v1",initialHtml:p,height:640})]}),e.jsxs("nav",{className:"nextPrev","aria-label":"Lesson navigation",children:[e.jsx(s,{to:"/forms/input-helpers",className:"prev","aria-label":"Go to inputmode & enterkeyhint",children:"← inputmode & enterkeyhint"}),e.jsx(s,{to:"/interactive/details-summary",className:"next","aria-label":"Go to details + summary",children:"Next: details + summary →"})]}),e.jsx("div",{className:"backTop",children:e.jsx("a",{href:"#top",children:"Back to top ↑"})})]})}export{x as default};
