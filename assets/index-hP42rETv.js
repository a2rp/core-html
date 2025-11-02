import{d as a,r as d,j as e,N as r}from"./index-CQ_xjxjH.js";import{H as o}from"./index-C8nEF-Cf.js";const i={Page:a.main`
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
    `},l=String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Labeled form row — pattern</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body {
        margin: 0; padding: 24px;
        font: 14px/1.6 system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
      }
      .form {
        display: grid;
        gap: 12px;
        max-width: 720px;
      }
      .row {
        display: grid;
        grid-template-columns: 220px 1fr; /* label | control */
        gap: 12px;
        align-items: start;
        border: 1px solid #ccc;
        border-radius: 12px;
        padding: 12px;
        background: color-mix(in oklab, #999, transparent 96%);
      }
      .row:focus-within {
        outline: 2px solid #2563eb;
        outline-offset: 2px;
      }
      .label {
        display: block;
        font-weight: 600;
        padding-top: 8px;
      }
      .requiredBadge {
        display: inline-block;
        font-size: 12px;
        padding: 2px 8px;
        margin-left: 8px;
        border: 1px solid #aaa;
        border-radius: 999px;
        background: #1f2937;
        color: #e5e7eb;
      }
      .control {
        display: grid;
        gap: 6px;
      }
      .hint {
        color: #6b7280;
        font-size: 13px;
      }
      .error {
        color: #ef4444;
        font-size: 13px;
      }
      input[type="text"], input[type="email"], input[type="password"], input[type="tel"] {
        width: 100%;
        padding: 10px 12px;
        border: 1px solid #bbb;
        border-radius: 10px;
        font: inherit;
        background: #fff;
        color: #111;
      }
      input:focus {
        outline: none;
        border-color: #2563eb;
        box-shadow: 0 0 0 3px color-mix(in oklab, #2563eb, transparent 80%);
      }
      .invalid input {
        border-color: #ef4444;
        background: color-mix(in oklab, #ef4444, #fff 92%);
      }
      /* compact helper for subtle key style */
      kbd {
        font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
        font-size: 12px;
        border: 1px solid #aaa; padding: 1px 6px; border-radius: 6px; background: #f8f8f8;
      }

      /* Mobile: stack label above control */
      @media (max-width: 760px) {
        .row { grid-template-columns: 1fr; }
        .label { padding-top: 0; }
      }
    </style>
  </head>
  <body>
    <main>
      <header>
        <h1>Labeled form row</h1>
        <p class="hint">A11y-first form row: <strong>label</strong> + <strong>control</strong> + <em>hint</em> + <em>error</em>. Use explicit 'for'/'id', and compose <code>aria-describedby</code> to point to hint/error.</p>
      </header>

      <form class="form" novalidate>
        <!-- 1) Required name (valid) -->
        <div class="row" role="group" aria-labelledby="name-label" aria-describedby="name-hint">
          <label id="name-label" class="label" for="name-input">
            Full name <span class="requiredBadge" aria-hidden="true">Required</span>
          </label>
          <div class="control">
            <input id="name-input" name="name" type="text" required
                   autocomplete="name" placeholder="e.g., Ashish Ranjan"
                   aria-describedby="name-hint" />
            <div id="name-hint" class="hint">Your real name as you prefer it to appear on receipts.</div>
          </div>
        </div>

        <!-- 2) Email with error (invalid) -->
        <div class="row invalid" role="group" aria-labelledby="email-label" aria-describedby="email-hint email-err">
          <label id="email-label" class="label" for="email-input">
            Email <span class="requiredBadge" aria-hidden="true">Required</span>
          </label>
          <div class="control">
            <input id="email-input" name="email" type="email" required
                   autocomplete="email" placeholder="you@example.com"
                   aria-invalid="true"
                   aria-describedby="email-hint email-err" />
            <div id="email-hint" class="hint">We’ll send receipts and important alerts here.</div>
            <div id="email-err" class="error">Enter a valid email address.</div>
          </div>
        </div>

        <!-- 3) Optional phone with helper -->
        <div class="row" role="group" aria-labelledby="phone-label" aria-describedby="phone-hint">
          <label id="phone-label" class="label" for="phone-input">Phone</label>
          <div class="control">
            <input id="phone-input" name="tel" type="tel"
                   autocomplete="tel" placeholder="+91 98xx-xx-xxxx"
                   aria-describedby="phone-hint" />
            <div id="phone-hint" class="hint">Optional. Add for delivery updates via SMS.</div>
          </div>
        </div>

        <!-- 4) Password (example of hint that clarifies expectation) -->
        <div class="row" role="group" aria-labelledby="password-label" aria-describedby="password-hint">
          <label id="password-label" class="label" for="password-input">
            Password <span class="requiredBadge" aria-hidden="true">Required</span>
          </label>
          <div class="control">
            <input id="password-input" name="new-password" type="password" required
                   autocomplete="new-password" placeholder="Create a strong password"
                   aria-describedby="password-hint" />
            <div id="password-hint" class="hint">8+ chars, mix of letters, numbers, symbol. Tip: use a passphrase.</div>
          </div>
        </div>

        <p class="hint">Pro tip: Jump to fields with <kbd>Tab</kbd>; reverse with <kbd>Shift</kbd> + <kbd>Tab</kbd>.</p>
      </form>

      <footer class="hint" style="margin-top: 10px;">
        Why this works: explicit label ↔ input mapping; composed description (hint+error) for screen readers; clear invalid affordances; responsive layout.
      </footer>
    </main>
  </body>
</html>`;function t(){return d.useEffect(()=>{document.title="Patterns · Labeled form row"},[]),e.jsxs(i.Page,{children:[e.jsxs("header",{className:"pageHeader",id:"top",children:[e.jsx("h1",{children:"Labeled form row"}),e.jsxs("p",{className:"lede",children:["A compact, accessible form row made of a ",e.jsx("strong",{children:"label"})," tied to an input via"," ",e.jsx("code",{children:"for"}),"/",e.jsx("code",{children:"id"}),", with optional ",e.jsx("em",{children:"hint"})," and ",e.jsx("em",{children:"error"})," texts referenced by ",e.jsx("code",{children:"aria-describedby"}),". Keyboard and screen readers get a complete story; visual users see clear required/invalid states."]})]}),e.jsxs("nav",{className:"toc","aria-label":"On this page",children:[e.jsx("a",{href:"#model",children:"Mental model"}),e.jsx("a",{href:"#anatomy",children:"Anatomy"}),e.jsx("a",{href:"#a11y",children:"A11y details"}),e.jsx("a",{href:"#states",children:"States"}),e.jsx("a",{href:"#layout",children:"Layout"}),e.jsx("a",{href:"#play",children:"Playground"})]}),e.jsxs("section",{id:"model",children:[e.jsx("h2",{children:"Mental model"}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Explicit label"})," maps to the control using matching ",e.jsx("code",{children:"for"}),"/",e.jsx("code",{children:"id"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Descriptions"})," (hint + error) are read by assistive tech via ",e.jsx("code",{children:"aria-describedby"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"States"}),": required vs optional, valid vs invalid, focus ring for keyboard users."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Layout"}),": two-column on desktop, stacked on mobile. No tables for layout."]})]})})]}),e.jsxs("section",{id:"anatomy",children:[e.jsx("h2",{children:"Anatomy"}),e.jsx(i.Code,{"aria-label":"Row anatomy example",children:e.jsx("pre",{children:String.raw`<div class="row" role="group" aria-labelledby="email-label" aria-describedby="email-hint email-err">
  <label id="email-label" class="label" for="email-input">Email</label>
  <div class="control">
    <input id="email-input" name="email" type="email"
           aria-describedby="email-hint email-err" />
    <div id="email-hint" class="hint">We'll only use this for receipts.</div>
    <div id="email-err" class="error">Enter a valid email address.</div>
  </div>
</div>`})})]}),e.jsxs("section",{id:"a11y",children:[e.jsx("h2",{children:"A11y details"}),e.jsxs("ul",{className:"badges",children:[e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Good"})," Explicit ",e.jsx("code",{children:"label"})," with ",e.jsx("code",{children:"for"}),"=",e.jsx("code",{children:"id"}),"."]}),e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Good"})," Compose ",e.jsx("code",{children:"aria-describedby"})," with both hint and error ids."]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Placeholder as label; it disappears and hurts a11y."]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Color-only error state without text."]})]})]}),e.jsxs("section",{id:"states",children:[e.jsx("h2",{children:"States"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Required"}),e.jsxs("p",{children:["Add a visual badge and keep the native ",e.jsx("code",{children:"required"})," attribute on the input."]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Invalid"}),e.jsxs("p",{children:["Apply an ",e.jsx("code",{children:'aria-invalid="true"'})," and surface error text. Avoid only-color cues."]})]})]})]}),e.jsxs("section",{id:"layout",children:[e.jsx("h2",{children:"Layout"}),e.jsx("p",{className:"note",children:"Use CSS grid for 2-column alignment; collapse to a single column under ~760px."})]}),e.jsxs("section",{id:"play",children:[e.jsx("h2",{children:"Try it live"}),e.jsxs("p",{className:"lede",children:["Tweak the ids, wire up ",e.jsx("code",{children:"aria-describedby"}),", flip states, and experiment with mobile widths."]}),e.jsx(o,{storageKey:"core-html:patterns:labeled-form-row:v1",initialHtml:l,height:640})]}),e.jsxs("nav",{className:"nextPrev","aria-label":"Lesson navigation",children:[e.jsx(r,{to:"/patterns/button-vs-link-decision",className:"prev","aria-label":"Go to Button vs Link decision",children:"← Button vs Link decision"}),e.jsx(r,{to:"/patterns/data-table-with-scope",className:"next","aria-label":"Go to Data table with scope",children:"Next: Data table with scope →"})]}),e.jsx("div",{className:"backTop",children:e.jsx("a",{href:"#top",children:"Back to top ↑"})})]})}export{t as default};
