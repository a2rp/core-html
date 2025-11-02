import{d,r as s,j as e,N as t}from"./index-D3QNcmKe.js";import{H as n}from"./index-CAjihRuM.js";const r={Page:d.main`
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

        /* table */
        .tableWrap {
            overflow-x: auto;
        }
        table.matrix {
            width: 100%;
            border-collapse: collapse;
            font-size: 14px;
            border: 1px solid var(--border);
            border-radius: 10px;
            overflow: hidden;
        }
        table.matrix th,
        table.matrix td {
            border-bottom: 1px solid var(--border);
            padding: 10px;
            text-align: left;
            vertical-align: top;
        }
        table.matrix thead th {
            background: var(--surface);
            position: sticky;
            top: 0;
            z-index: 1;
        }
        table.matrix tbody tr:hover td {
            background: color-mix(in oklab, var(--primary), transparent 94%);
        }
    `,Code:d.div`
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
    `},a=String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>inputmode + enterkeyhint — live demo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 20px; font: 14px/1.6 system-ui, -apple-system, Segoe UI, Roboto, sans-serif; }
      .grid { display: grid; gap: 16px; }
      .row { display: grid; gap: 10px; grid-template-columns: 160px 1fr; align-items: center; }
      .card { border: 1px solid #ccc; border-radius: 12px; padding: 12px; background: color-mix(in oklab, Canvas, transparent 0%); }
      code { background: #f5f5f5; border-radius: 6px; padding: 0 6px; }
      .muted { color: #6b7280; }
      input, textarea, select, button {
        font: inherit; padding: 8px 10px; border: 1px solid #bbb; border-radius: 8px; background: Canvas; color: CanvasText;
      }
      .two { display: grid; gap: 12px; grid-template-columns: repeat(2, minmax(0,1fr)); }
      @media (max-width: 900px) { .two { grid-template-columns: 1fr; } }
      small.hint { color:#6b7280; display:block; margin-top:6px; }
      .note { border-left: 3px solid #3b82f6; padding: 8px 12px; background: color-mix(in oklab, #3b82f6, transparent 92%); border-radius: 8px; }
    </style>
  </head>
  <body>
    <main class="grid">
      <header>
        <h1>inputmode + enterkeyhint</h1>
        <p class="muted">Hints for soft keyboards and the Enter key label. They don’t validate. They help users type faster.</p>
      </header>

      <section class="card">
        <h2>Keyboard layouts (inputmode)</h2>
        <div class="grid" style="gap:12px">
          <label class="row">
            <span>text (default)</span>
            <input type="text" placeholder="Any text" />
          </label>

          <label class="row">
            <span>numeric</span>
            <input type="text" inputmode="numeric" placeholder="Digits only (hint)" />
          </label>

          <label class="row">
            <span>decimal</span>
            <input type="text" inputmode="decimal" placeholder="12.34 (hint)" />
          </label>

          <label class="row">
            <span>tel</span>
            <input type="tel" inputmode="tel" placeholder="+91 98765 43210" />
          </label>

          <label class="row">
            <span>email</span>
            <input type="email" inputmode="email" placeholder="name@example.com" />
          </label>

          <label class="row">
            <span>url</span>
            <input type="url" inputmode="url" placeholder="https://example.com" />
          </label>

          <label class="row">
            <span>search</span>
            <input type="search" inputmode="search" placeholder="Search…" />
          </label>
        </div>
        <p class="note"><strong>Note:</strong> <code>inputmode</code> only suggests a keyboard; it does not enforce validity. Add proper <code>type</code>, <code>pattern</code>, and validation.</p>
      </section>

      <section class="card">
        <h2>Enter key label (enterkeyhint)</h2>
        <div class="two">
          <label class="row">
            <span>enterkeyhint="next"</span>
            <input type="text" placeholder="Step 1…" enterkeyhint="next" />
          </label>

          <label class="row">
            <span>enterkeyhint="done"</span>
            <input type="text" placeholder="Final field" enterkeyhint="done" />
          </label>

          <label class="row">
            <span>enterkeyhint="search"</span>
            <input type="search" placeholder="Find items" enterkeyhint="search" />
          </label>

          <label class="row">
            <span>enterkeyhint="go"</span>
            <input type="url" placeholder="Go to URL" enterkeyhint="go" />
          </label>

          <label class="row">
            <span>enterkeyhint="send"</span>
            <textarea placeholder="Message…" rows="3" enterkeyhint="send"></textarea>
          </label>

          <label class="row">
            <span>enterkeyhint="previous"</span>
            <input type="text" placeholder="Go back?" enterkeyhint="previous" />
          </label>
        </div>
        <small class="hint">Common values: <code>enter</code> (default), <code>done</code>, <code>go</code>, <code>next</code>, <code>previous</code>, <code>search</code>, <code>send</code>.</small>
      </section>

      <section class="card">
        <h2>Combine both</h2>
        <div class="grid" style="gap:12px">
          <label class="row">
            <span>OTP field</span>
            <input type="text" inputmode="numeric" pattern="[0-9]{6}" placeholder="6-digit OTP" enterkeyhint="done" />
          </label>
          <label class="row">
            <span>Price (₹)</span>
            <input type="text" inputmode="decimal" placeholder="0.00" enterkeyhint="next" />
          </label>
          <label class="row">
            <span>Search products</span>
            <input type="search" inputmode="search" placeholder="Type to search…" enterkeyhint="search" />
          </label>
        </div>
      </section>

      <footer class="muted">
        Tip: Keep <code>type</code> semantic (<code>email</code>, <code>url</code>) and use <code>inputmode</code> only to fine-tune the soft keyboard. <code>enterkeyhint</code> helps guide flow across steps.
      </footer>
    </main>
  </body>
</html>`;function o(){return s.useEffect(()=>{document.title="Forms · inputmode & enterkeyhint"},[]),e.jsxs(r.Page,{children:[e.jsxs("header",{className:"pageHeader",id:"top",children:[e.jsxs("h1",{children:[e.jsx("code",{children:"inputmode"})," & ",e.jsx("code",{children:"enterkeyhint"})]}),e.jsx("p",{className:"lede",children:"Two lightweight attributes that improve typing speed and flow on touch keyboards. They don’t validate; they only hint the UI."})]}),e.jsxs("nav",{className:"toc","aria-label":"On this page",children:[e.jsx("a",{href:"#inputmode",children:"What is inputmode"}),e.jsx("a",{href:"#enterkeyhint",children:"What is enterkeyhint"}),e.jsx("a",{href:"#matrix",children:"Quick matrix"}),e.jsx("a",{href:"#patterns",children:"Patterns"}),e.jsx("a",{href:"#pitfalls",children:"Pitfalls"}),e.jsx("a",{href:"#faq",children:"FAQ"}),e.jsx("a",{href:"#play",children:"Playground"})]}),e.jsxs("section",{id:"inputmode",children:[e.jsxs("h2",{children:["What is ",e.jsx("code",{children:"inputmode"}),"?"]}),e.jsxs("div",{className:"card",children:[e.jsxs("p",{children:[e.jsx("code",{children:"inputmode"})," is a ",e.jsx("em",{children:"soft keyboard hint"}),". It suggests which on-screen keys should be most accessible (digits, decimal, email symbols, URL slash/dot, etc.). It does not change input type and does not enforce constraints."]}),e.jsx(r.Code,{children:e.jsx("pre",{children:String.raw`<input type="text" inputmode="numeric" placeholder="Digits" />
<input type="text" inputmode="decimal" placeholder="12.34" />
<input type="email" inputmode="email" placeholder="name@example.com" />
<input type="url"   inputmode="url"   placeholder="https://…">`})}),e.jsxs("p",{className:"note",children:["Keep ",e.jsx("code",{children:"type"})," semantic. For example, collecting an email? Use ",e.jsx("code",{children:'type="email"'}),". Only add"," ",e.jsx("code",{children:"inputmode"})," if you need to tweak the keyboard layout."]})]})]}),e.jsxs("section",{id:"enterkeyhint",children:[e.jsxs("h2",{children:["What is ",e.jsx("code",{children:"enterkeyhint"}),"?"]}),e.jsxs("div",{className:"card",children:[e.jsxs("p",{children:[e.jsx("code",{children:"enterkeyhint"})," changes the label of the virtual ",e.jsx("kbd",{children:"Enter"})," key to hint the action:"," ",e.jsx("code",{children:"next"}),", ",e.jsx("code",{children:"done"}),", ",e.jsx("code",{children:"search"}),", ",e.jsx("code",{children:"go"}),", ",e.jsx("code",{children:"send"}),","," ",e.jsx("code",{children:"previous"}),". It’s a UX nudge; behavior still depends on your handlers."]}),e.jsx(r.Code,{children:e.jsx("pre",{children:String.raw`<input type="text" enterkeyhint="next" />
<input type="search" enterkeyhint="search" />
<textarea enterkeyhint="send"></textarea>`})})]})]}),e.jsxs("section",{id:"matrix",children:[e.jsx("h2",{children:"Quick matrix"}),e.jsx("div",{className:"card",children:e.jsx("div",{className:"tableWrap",children:e.jsxs("table",{className:"matrix",role:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Use-case"}),e.jsx("th",{children:"type"}),e.jsx("th",{children:"inputmode"}),e.jsx("th",{children:"enterkeyhint"}),e.jsx("th",{children:"Notes"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Phone"}),e.jsx("td",{children:e.jsx("code",{children:"tel"})}),e.jsx("td",{children:e.jsx("code",{children:"tel"})}),e.jsx("td",{children:e.jsx("code",{children:"next"})}),e.jsx("td",{children:"Dial-friendly keypad"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"OTP (6 digits)"}),e.jsx("td",{children:e.jsx("code",{children:"text"})}),e.jsx("td",{children:e.jsx("code",{children:"numeric"})}),e.jsx("td",{children:e.jsx("code",{children:"done"})}),e.jsxs("td",{children:["Add ",e.jsxs("code",{children:['pattern="[0-9]',6,'"']})," for validation"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Price"}),e.jsx("td",{children:e.jsx("code",{children:"text"})}),e.jsx("td",{children:e.jsx("code",{children:"decimal"})}),e.jsx("td",{children:e.jsx("code",{children:"next"})}),e.jsx("td",{children:"Locale formatting is separate logic"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Email"}),e.jsx("td",{children:e.jsx("code",{children:"email"})}),e.jsx("td",{children:e.jsx("code",{children:"email"})}),e.jsx("td",{children:e.jsx("code",{children:"next"})}),e.jsx("td",{children:"Native validation + “@” keyboard"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Search"}),e.jsx("td",{children:e.jsx("code",{children:"search"})}),e.jsx("td",{children:e.jsx("code",{children:"search"})}),e.jsx("td",{children:e.jsx("code",{children:"search"})}),e.jsx("td",{children:"Shows a “Search” key"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"URL"}),e.jsx("td",{children:e.jsx("code",{children:"url"})}),e.jsx("td",{children:e.jsx("code",{children:"url"})}),e.jsx("td",{children:e.jsx("code",{children:"go"})}),e.jsx("td",{children:"Keyboard with “/ .” keys"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Chat box"}),e.jsx("td",{children:e.jsx("code",{children:"textarea"})}),e.jsx("td",{children:"(none)"}),e.jsx("td",{children:e.jsx("code",{children:"send"})}),e.jsx("td",{children:"Enter key shows “Send”"})]})]})]})})})]}),e.jsxs("section",{id:"patterns",children:[e.jsx("h2",{children:"Patterns"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Multi-step form"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["Use ",e.jsx("code",{children:'enterkeyhint="next"'})," for all but last field."]}),e.jsxs("li",{children:["Switch last field to ",e.jsx("code",{children:'enterkeyhint="done"'})," or ",e.jsx("code",{children:"send"}),"."]}),e.jsxs("li",{children:["Wire ",e.jsx("kbd",{children:"Enter"})," to focus next / submit."]})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Mobile numeric data"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("code",{children:'inputmode="numeric"'})," for IDs, OTPs, counters."]}),e.jsxs("li",{children:[e.jsx("code",{children:'inputmode="decimal"'})," for amounts."]}),e.jsx("li",{children:"Still add real validation and masks."})]})]})]})]}),e.jsxs("section",{id:"pitfalls",children:[e.jsx("h2",{children:"Pitfalls"}),e.jsxs("ul",{className:"badges",children:[e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Relying on ",e.jsx("code",{children:"inputmode"})," for validation."]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Using text + numeric when ",e.jsx("code",{children:'type="number"'})," is required for native steppers."]}),e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Good"})," Keep ",e.jsx("code",{children:"type"})," semantic; use helpers as hints only."]})]})]}),e.jsxs("section",{id:"faq",children:[e.jsx("h2",{children:"FAQ"}),e.jsxs("details",{children:[e.jsxs("summary",{children:["Is ",e.jsx("code",{children:"inputmode"})," supported on desktop?"]}),e.jsx("div",{className:"ans",children:"It’s mostly a no-op on hardware keyboards. It shines on mobile/touch."})]}),e.jsxs("details",{children:[e.jsxs("summary",{children:["Does ",e.jsx("code",{children:"enterkeyhint"})," submit forms?"]}),e.jsx("div",{className:"ans",children:"No. It only changes the key label. You still handle submit/focus."})]})]}),e.jsxs("section",{id:"play",children:[e.jsx("h2",{children:"Try it live"}),e.jsxs("p",{className:"lede",children:["Toggle ",e.jsx("code",{children:"inputmode"})," and ",e.jsx("code",{children:"enterkeyhint"})," combinations, then test on a phone/emulator. This demo autosaves to this lesson."]}),e.jsx(n,{storageKey:"core-html:forms:input-helpers:v1",initialHtml:a,height:720})]}),e.jsxs("nav",{className:"nextPrev","aria-label":"Lesson navigation",children:[e.jsx(t,{to:"/forms/autocomplete-tokens",className:"prev","aria-label":"Go to Autocomplete tokens",children:"← Autocomplete tokens"}),e.jsx(t,{to:"/interactive/button-types",className:"next","aria-label":"Go to Button types",children:"Next: Button types →"})]}),e.jsx("div",{className:"backTop",children:e.jsx("a",{href:"#top",children:"Back to top ↑"})})]})}export{o as default};
