import{d as a,r,j as e,N as i}from"./index-D3QNcmKe.js";import{H as s}from"./index-CAjihRuM.js";const l={Page:a.main`
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
        .badges .good,
        .badges .ok {
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
        .badges .ok {
            background: #1a2130;
            color: #b9d4ff;
            border-color: #2a3a55;
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
    `},d=String.raw`<!doctype html>
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
</html>`;function c(){return r.useEffect(()=>{document.title="Forms · <label> association (for/id vs wrapping)"},[]),e.jsxs(l.Page,{children:[e.jsxs("header",{className:"pageHeader",id:"top",children:[e.jsxs("h1",{children:[e.jsx("code",{children:"<label>"})," association: ",e.jsx("code",{children:"for/id"})," vs wrapping"]}),e.jsxs("p",{className:"lede",children:["Every form control needs an accessible name. The simplest way is a proper"," ",e.jsx("code",{children:"<label>"}),". Use explicit labels (",e.jsx("code",{children:"for"}),"/",e.jsx("code",{children:"id"}),") or implicit labels (wrap the control). Add ",e.jsx("code",{children:"aria-describedby"})," for hints/errors, and use ",e.jsx("code",{children:"fieldset"}),"/",e.jsx("code",{children:"legend"})," to name groups like radio sets."]})]}),e.jsxs("nav",{className:"toc","aria-label":"On this page",children:[e.jsx("a",{href:"#explicit",children:"Explicit label"}),e.jsx("a",{href:"#implicit",children:"Implicit label"}),e.jsx("a",{href:"#groups",children:"Groups (fieldset/legend)"}),e.jsx("a",{href:"#describedby",children:"Help & errors"}),e.jsx("a",{href:"#no-visible",children:"No visible label"}),e.jsx("a",{href:"#pitfalls",children:"Pitfalls"}),e.jsx("a",{href:"#play",children:"Playground"})]}),e.jsxs("section",{id:"explicit",children:[e.jsxs("h2",{children:["Explicit label (",e.jsx("code",{children:"for"}),"/",e.jsx("code",{children:"id"}),")"]}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"Pairs a label with a control even if they’re not adjacent in the DOM."}),e.jsxs("li",{children:["Requires a unique ",e.jsx("code",{children:"id"})," on the control and matching ",e.jsx("code",{children:"for"})," on the label."]}),e.jsx("li",{children:"Great for flexible layout and complex forms."})]})})]}),e.jsxs("section",{id:"implicit",children:[e.jsx("h2",{children:"Implicit label (wrapping)"}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"The label wraps exactly one form control (besides the label text)."}),e.jsx("li",{children:"Convenient for checkboxes and radios; the whole line becomes the click target."}),e.jsx("li",{children:"Avoid nesting multiple inputs inside one label."})]})})]}),e.jsxs("section",{id:"groups",children:[e.jsxs("h2",{children:["Groups: ",e.jsx("code",{children:"<fieldset>"})," + ",e.jsx("code",{children:"<legend>"})]}),e.jsx("p",{className:"note",children:"Use a legend to give a name to a related set of controls (e.g., “Preferred contact”). Each option still has its own label."})]}),e.jsxs("section",{id:"describedby",children:[e.jsxs("h2",{children:["Help & errors with ",e.jsx("code",{children:"aria-describedby"})]}),e.jsx(l.Code,{role:"region","aria-label":"Describedby example",children:e.jsx("pre",{children:String.raw`<label for="email">Email</label>
<input id="email" type="email" aria-describedby="email-h email-e">
<div id="email-h" class="help">We’ll send receipts here.</div>
<div id="email-e" class="err" hidden>Enter a valid email.</div>`})}),e.jsx("p",{className:"note",children:"Multiple ids can be space-separated. Assistive tech will read them after the main label."})]}),e.jsxs("section",{id:"no-visible",children:[e.jsx("h2",{children:"Controls without visible text"}),e.jsxs("ul",{className:"badges",children:[e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Preferred"})," Visually hidden text label"]}),e.jsxs("li",{children:[e.jsx("span",{className:"ok",children:"Okay"})," ",e.jsx("code",{children:"aria-label"})," with concise text"]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Avoid"})," Placeholder-as-label (it disappears and isn’t announced as a label)"]})]})]}),e.jsxs("section",{id:"play",children:[e.jsx("h2",{children:"Try it live"}),e.jsxs("p",{className:"lede",children:["Fix broken associations, add ",e.jsx("code",{children:"for"}),"/",e.jsx("code",{children:"id"})," or wrap inputs, wire up help/error with"," ",e.jsx("code",{children:"aria-describedby"}),", and make the entire label clickable for checkboxes/radios."]}),e.jsx(s,{storageKey:"core-html:forms:label-association:v1",initialHtml:d,height:700})]}),e.jsxs("nav",{className:"nextPrev","aria-label":"Lesson navigation",children:[e.jsx(i,{to:"/forms/form-basics",className:"prev","aria-label":"Go to Form basics",children:"← Form basics"}),e.jsx(i,{to:"/forms/inputs-type-matrix",className:"next","aria-label":"Go to Inputs: type matrix",children:"Next: Inputs — type matrix →"})]}),e.jsx("div",{className:"backTop",children:e.jsx("a",{href:"#top",children:"Back to top ↑"})})]})}export{c as default};
