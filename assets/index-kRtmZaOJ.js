import{d as r,r as n,j as e,N as a}from"./index-D3QNcmKe.js";import{H as o}from"./index-CAjihRuM.js";const i={Page:r.main`
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

        .tableWrap {
            overflow-x: auto;
            border: 1px solid var(--border);
            border-radius: 12px;
        }
        table.matrix {
            width: 100%;
            border-collapse: collapse;
            background: var(--card);
        }
        table.matrix th,
        table.matrix td {
            border-top: 1px solid var(--border);
            padding: 10px 12px;
            vertical-align: top;
            text-align: left;
        }
        table.matrix thead th {
            position: sticky;
            top: 0;
            background: var(--surface);
            z-index: 1;
        }
        table.matrix tbody tr:hover td {
            background: color-mix(in oklab, var(--surface), transparent 92%);
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
    `};var t=Object.freeze,c=Object.defineProperty,p=(s,d)=>t(c(s,"raw",{value:t(d||s.slice())})),l;const m=String.raw(l||(l=p([`<!doctype html>
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
    <\/script>
  </body>
</html>`],[`<!doctype html>
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
            <input id="zip" name="zip" inputmode="numeric" pattern="\\\\d{5}" placeholder="5 digits e.g. 56001" />
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
    <\/script>
  </body>
</html>`])));function u(){return n.useEffect(()=>{document.title="Forms · Common attributes"},[]),e.jsxs(i.Page,{children:[e.jsxs("header",{className:"pageHeader",id:"top",children:[e.jsx("h1",{children:"Common attributes"}),e.jsxs("p",{className:"lede",children:["Everyday, ergonomic attributes for form controls:"," ",e.jsx("code",{children:"name"}),", ",e.jsx("code",{children:"value"}),", ",e.jsx("code",{children:"required"}),","," ",e.jsx("code",{children:"min"}),"/",e.jsx("code",{children:"max"}),", ",e.jsx("code",{children:"pattern"}),","," ",e.jsx("code",{children:"placeholder"}),", ",e.jsx("code",{children:"disabled"}),", and"," ",e.jsx("code",{children:"readonly"}),". Learn what they do and the gotchas."]})]}),e.jsxs("nav",{className:"toc","aria-label":"On this page",children:[e.jsx("a",{href:"#model",children:"Mental model"}),e.jsx("a",{href:"#table",children:"Attribute quick reference"}),e.jsx("a",{href:"#examples",children:"Examples"}),e.jsx("a",{href:"#pitfalls",children:"Pitfalls"}),e.jsx("a",{href:"#faq",children:"FAQ"}),e.jsx("a",{href:"#play",children:"Playground"})]}),e.jsxs("section",{id:"model",children:[e.jsx("h2",{children:"Mental model"}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"name"})," is the key in the form submission"," ",e.jsx("em",{children:"name=value"})," pair. No ",e.jsx("code",{children:"name"})," → not submitted."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"value"})," is the default. The user’s input usually overwrites it."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"required"}),", ",e.jsx("strong",{children:"min"}),","," ",e.jsx("strong",{children:"max"}),", and ",e.jsx("strong",{children:"pattern"})," add"," ",e.jsx("em",{children:"constraint validation"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"placeholder"})," is a hint, not a label. Always keep a real ",e.jsx("code",{children:"<label>"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"readonly"})," submits the value;"," ",e.jsx("strong",{children:"disabled"})," removes it from the tab order and submission."]})]})})]}),e.jsxs("section",{id:"table",children:[e.jsx("h2",{children:"Attribute quick reference"}),e.jsx("div",{className:"tableWrap",children:e.jsxs("table",{className:"matrix",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Attribute"}),e.jsx("th",{children:"Purpose"}),e.jsx("th",{children:"Applies to"}),e.jsx("th",{children:"Notes"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx("code",{children:"name"})}),e.jsx("td",{children:"Key used when submitting form data."}),e.jsx("td",{children:"Most controls"}),e.jsx("td",{children:"Without it, value isn’t submitted."})]}),e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx("code",{children:"value"})}),e.jsx("td",{children:"Initial value. Can be edited by user."}),e.jsx("td",{children:"Most inputs"}),e.jsxs("td",{children:["For ",e.jsx("code",{children:"checkbox"}),"/",e.jsx("code",{children:"radio"})," it’s the submitted value when checked."]})]}),e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx("code",{children:"required"})}),e.jsx("td",{children:"Field must be non-empty/valid."}),e.jsx("td",{children:"Inputs, selects, textarea"}),e.jsxs("td",{children:["Blocked unless valid; form ",e.jsx("code",{children:"novalidate"})," disables checks."]})]}),e.jsxs("tr",{children:[e.jsxs("th",{children:[e.jsx("code",{children:"min"})," / ",e.jsx("code",{children:"max"})]}),e.jsx("td",{children:"Lower/upper bounds."}),e.jsx("td",{children:"number, range, date/time types"}),e.jsxs("td",{children:["Works with ",e.jsx("code",{children:"step"}),"; out-of-range → invalid."]})]}),e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx("code",{children:"pattern"})}),e.jsx("td",{children:"Regex (entire string must match)."}),e.jsx("td",{children:"text-like inputs"}),e.jsxs("td",{children:["Use anchors if needed. Pair with ",e.jsx("code",{children:"title"})," to explain."]})]}),e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx("code",{children:"placeholder"})}),e.jsx("td",{children:"Inline hint/example."}),e.jsx("td",{children:"text-like inputs, textarea"}),e.jsx("td",{children:"Not a label. Don’t rely on contrasty placeholder as sole guidance."})]}),e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx("code",{children:"disabled"})}),e.jsx("td",{children:"Unavailable; skipped by tab; not submitted."}),e.jsx("td",{children:"Any form control"}),e.jsx("td",{children:"Use when user shouldn’t interact yet (e.g., loading)."})]}),e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx("code",{children:"readonly"})}),e.jsx("td",{children:"Locked, but value submitted."}),e.jsx("td",{children:"text-like inputs"}),e.jsx("td",{children:"Keep for things like IDs; still focusable via mouse in some UAs."})]})]})]})})]}),e.jsxs("section",{id:"examples",children:[e.jsx("h2",{children:"Examples"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"name + value"}),e.jsx(i.Code,{children:e.jsx("pre",{children:String.raw`<input name="email" type="email" value="me@example.com">`})}),e.jsxs("p",{className:"note",children:["On submit → ",e.jsx("code",{children:"email=me%40example.com"}),"."]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"required + pattern"}),e.jsx(i.Code,{children:e.jsx("pre",{children:String.raw`<input name="zip" pattern="\\d{5}" required title="5 digits">`})}),e.jsx("p",{className:"note",children:"Entire input must match the regex."})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"min/max (+ step)"}),e.jsx(i.Code,{children:e.jsx("pre",{children:String.raw`<input name="price" type="number" min="0" step="0.01">`})}),e.jsxs("p",{className:"note",children:["Use ",e.jsx("code",{children:"step"})," to align increments with your unit."]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"disabled vs readonly"}),e.jsx(i.Code,{children:e.jsx("pre",{children:String.raw`<input name="id" value="USR-100" readonly>
<input name="coupon" value="NEWUSER" disabled>`})}),e.jsxs("p",{className:"note",children:[e.jsx("code",{children:"id=USR-100"})," will be submitted; ",e.jsx("code",{children:"coupon"})," won’t."]})]})]})]}),e.jsxs("section",{id:"pitfalls",children:[e.jsx("h2",{children:"Pitfalls"}),e.jsxs("ul",{className:"badges",children:[e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Placeholder used instead of a label."]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," No ",e.jsx("code",{children:"name"})," on control you expect to submit."]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Regex expecting partial match; pattern must match the whole string."]}),e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Good"})," Pair constraints with helpful copy and labels."]})]})]}),e.jsxs("section",{id:"faq",children:[e.jsx("h2",{children:"FAQ"}),e.jsxs("details",{children:[e.jsx("summary",{children:"How do I show a custom message?"}),e.jsxs("div",{className:"ans",children:["Use ",e.jsx("code",{children:"setCustomValidity()"})," in JS or just rely on native messages; for regex, set a helpful"," ",e.jsx("code",{children:"title"})," so built-in UI shows it."]})]}),e.jsxs("details",{children:[e.jsx("summary",{children:"Should I validate on both client and server?"}),e.jsx("div",{className:"ans",children:"Yes. Client-side helps UX; server-side is the source of truth."})]})]}),e.jsxs("section",{id:"play",children:[e.jsx("h2",{children:"Try it live"}),e.jsx("p",{className:"lede",children:"Toggle attributes, change ranges/patterns, and submit to see native behavior. Autosaves to this lesson."}),e.jsx(o,{storageKey:"core-html:forms:common-attrs:v1",initialHtml:m,height:680})]}),e.jsxs("nav",{className:"nextPrev","aria-label":"Lesson navigation",children:[e.jsx(a,{to:"/forms/inputs-type-matrix",className:"prev","aria-label":"Go to Inputs: type matrix",children:"← Inputs: type matrix"}),e.jsx(a,{to:"/forms/fieldset-legend",className:"next","aria-label":"Go to Grouping: fieldset + legend",children:"Next: Grouping — fieldset + legend →"})]}),e.jsx("div",{className:"backTop",children:e.jsx("a",{href:"#top",children:"Back to top ↑"})})]})}export{u as default};
