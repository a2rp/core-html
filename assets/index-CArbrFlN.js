import{d as i,r as a,j as e,N as o}from"./index-CQ_xjxjH.js";import{H as r}from"./index-C8nEF-Cf.js";const s={Page:i.main`
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
    `},l=String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>a11y — focus order & outline</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui,-apple-system,Segoe UI,Roboto,sans-serif; }
      .grid { display: grid; gap: 16px; }

      .wrap { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
      @media (max-width: 900px) { .wrap { grid-template-columns: 1fr; } }

      .card { border: 1px solid #ccc; border-radius: 12px; padding: 12px; }
      .good { background: color-mix(in oklab, #16a34a, transparent 92%); border-color:#8ed09b; }
      .bad  { background: color-mix(in oklab, #dc2626, transparent 92%); border-color:#f2a6a6; }

      .row { display: flex; flex-wrap: wrap; gap: 8px; }
      .btn { padding: 8px 12px; border-radius: 10px; border: 1px solid #999; background: #fff; cursor: pointer; }
      .btn:disabled { opacity: 0.5; cursor: not-allowed; }

      /* Good: visible focus with :focus-visible (keyboard-friendly) */
      .btn:focus-visible, a:focus-visible, input:focus-visible, select:focus-visible, textarea:focus-visible {
        outline: 3px solid #2563eb; /* clear, high-contrast ring */
        outline-offset: 2px;
        border-color: #2563eb;
      }

      /* Demo of BAD pattern — DO NOT COPY */
      .kill-outline :is(button,a,input,select,textarea):focus,
      .kill-outline :is(button,a,input,select,textarea):focus-visible {
        outline: none !important;
        box-shadow: none !important;
      }

      .muted { color: #6b7280; }
      .ex { border:1px dashed #aaa; padding:10px; border-radius:10px; margin-top:6px; }

      /* Focus order helpers */
      .two-cols { display:grid; grid-template-columns: 1fr 1fr; gap: 10px; }
      @media (max-width: 900px) { .two-cols { grid-template-columns: 1fr; } }

      /* Avoid positive tabindex — here for stark comparison */
      .posTab :is(a,button,input)[tabindex]:not([tabindex="0"]):not([tabindex="-1"])::after {
        content: " (tabindex=" attr(tabindex) ")"; color:#b91c1c; font-weight:600;
      }
    </style>
  </head>
  <body>
    <main class="grid">

      <header>
        <h1>Focus order & outline</h1>
        <p class="muted">Keyboard users rely on a predictable tab order and a clear focus indicator.</p>
      </header>

      <section class="wrap">
        <div class="card good">
          <h2>Good (DOM order = focus order)</h2>
          <p>Interactive elements appear in logical reading order. No positive <code>tabindex</code>.</p>
          <div class="ex">
            <div class="row">
              <a class="btn" href="#a">Read more</a>
              <button class="btn">Add to cart</button>
              <input class="btn" aria-label="Coupon code" placeholder="Coupon code" />
              <select class="btn" aria-label="Size"><option>Small</option><option>Medium</option><option>Large</option></select>
            </div>
          </div>
          <p class="muted">Press Tab and watch the focus ring follow the visual order.</p>
        </div>

        <div class="card bad posTab">
          <h2>Bad (forced order via positive tabindex)</h2>
          <p>Avoid <code>tabindex="1..n"</code>. It creates fragile, surprising sequences.</p>
          <div class="ex">
            <div class="row">
              <a class="btn" href="#a" tabindex="3">Link</a>
              <button class="btn" tabindex="1">Primary</button>
              <input class="btn" placeholder="Email" tabindex="2" />
            </div>
          </div>
          <p class="muted">Now Tab cycles 1 → 2 → 3 regardless of layout. Any new control breaks it further.</p>
        </div>
      </section>

      <section class="two-cols">
        <div class="card">
          <h2>tabindex rules</h2>
          <ul>
            <li><code>tabindex="0"</code>: Add to natural tab order (e.g., custom card you made focusable).</li>
            <li><code>tabindex="-1"</code>: Programmatic focus only (e.g., focus a container after closing a dialog).</li>
            <li><strong>Never</strong> use positive values: they override native order and rot fast.</li>
          </ul>
        </div>
        <div class="card">
          <h2>:focus vs :focus-visible</h2>
          <ul>
            <li><code>:focus</code> fires for mouse, touch, and keyboard — can cause “blue ring” after clicks.</li>
            <li><code>:focus-visible</code> targets keyboard-like modality — ideal for visible outlines.</li>
            <li>Don’t remove outlines; customize them with <code>:focus-visible</code>.</li>
          </ul>
        </div>
      </section>

      <section class="wrap">
        <div class="card">
          <h2>Common pitfalls</h2>
          <ul>
            <li>Hiding focus with <code>outline: none</code> without replacement.</li>
            <li>Click-only widgets (e.g., <code>div</code> acting like a button) — use real <code>&lt;button&gt;</code>.</li>
            <li>Keyboard traps in modals/menus — no way to escape with Tab/Shift+Tab/Escape.</li>
            <li>Focus jumps on route change with no logical landing (e.g., focus not moved to the main heading).</li>
          </ul>
        </div>
        <div class="card kill-outline">
          <h2>BAD: outline removed</h2>
          <p>Try tabbing inside — you cannot see where you are.</p>
          <div class="ex">
            <div class="row">
              <button class="btn">Hidden focus 1</button>
              <button class="btn">Hidden focus 2</button>
              <a class="btn" href="#nowhere">Hidden focus link</a>
            </div>
          </div>
        </div>
      </section>

      <section class="card">
        <h2>Focusable by default</h2>
        <p>Links with <code>href</code>, buttons, inputs, selects, textareas, summary (inside details), iframes, and controls with <code>contenteditable</code>. Others <em>only</em> when you add <code>tabindex="0"</code>.</p>
      </section>

      <section class="card">
        <h2>Checklist</h2>
        <ul>
          <li>Tab order follows reading order (DOM). No positive <code>tabindex</code>.</li>
          <li>Every interactive control shows a high-contrast <strong>visible focus ring</strong>.</li>
          <li>Custom widgets: manage focus with JS and use semantic roles cautiously.</li>
          <li>On page change, move focus to the main heading or <code>&lt;main&gt;</code>.</li>
        </ul>
      </section>

      <section class="card">
        <h2>FAQ</h2>
        <details>
          <summary>Should I ever use tabindex="-1"?</summary>
          <div>Yes, to make elements focusable programmatically without entering tab sequence (e.g., focus error summary).</div>
        </details>
        <details>
          <summary>Why not remove outlines and rely on hover?</summary>
          <div>Hover doesn’t help keyboard or touch users. Outlines are non-negotiable for discoverability.</div>
        </details>
      </section>

      <section class="card">
        <h2>Try it live</h2>
        <p class="muted">Fix the bad examples: remove positive tabindex, restore focus visibility with <code>:focus-visible</code>, and keep DOM order logical.</p>
      </section>

      <footer class="muted">
        Tip: treat the tab key like a screen reader’s compass; never break its bearings.
      </footer>
    </main>
  </body>
</html>`;function n(){return a.useEffect(()=>{document.title="A11y · Focus order & outline"},[]),e.jsxs(s.Page,{children:[e.jsxs("header",{className:"pageHeader",id:"top",children:[e.jsx("h1",{children:"Focus order & outline"}),e.jsxs("p",{className:"lede",children:["Keyboard users navigate with Tab and Shift+Tab. Keep the focus sequence logical, and never hide the focus ring—customize it using ",e.jsx("code",{children:":focus-visible"}),"."]})]}),e.jsxs("nav",{className:"toc","aria-label":"On this page",children:[e.jsx("a",{href:"#model",children:"Mental model"}),e.jsx("a",{href:"#principles",children:"Principles"}),e.jsx("a",{href:"#tabindex",children:"tabindex"}),e.jsx("a",{href:"#focus-visible",children:":focus vs :focus-visible"}),e.jsx("a",{href:"#pitfalls",children:"Pitfalls"}),e.jsx("a",{href:"#checklist",children:"Checklist"}),e.jsx("a",{href:"#play",children:"Playground"})]}),e.jsxs("section",{id:"model",children:[e.jsx("h2",{children:"Mental model"}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Reading order → focus order."})," If users read top-to-bottom, left-to-right, Tab should follow the same flow."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Native first."})," Use real buttons, links, and inputs; they come with predictable focus behavior."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Visible focus."})," A strong outline is a navigational lighthouse, not a decoration."]})]})})]}),e.jsxs("section",{id:"principles",children:[e.jsx("h2",{children:"Principles"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"DOM order is king"}),e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"Arrange interactive elements in the DOM to match visual order."}),e.jsx("li",{children:"Avoid reordering with CSS alone for interactive items."}),e.jsx("li",{children:"Don’t fight the browser’s natural tab sequence."})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Focus landing"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["On route change, move focus to ",e.jsx("code",{children:"<h1>"})," or ",e.jsx("code",{children:"<main>"}),"."]}),e.jsx("li",{children:"In dialogs/menus, trap focus while open and restore to the invoker on close."}),e.jsx("li",{children:"Keep Escape/close buttons reachable from keyboard."})]})]})]})]}),e.jsxs("section",{id:"tabindex",children:[e.jsx("h2",{children:"tabindex rules"}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("code",{children:'tabindex="0"'})," → opt-in to natural order for custom widgets."]}),e.jsxs("li",{children:[e.jsx("code",{children:'tabindex="-1"'})," → programmatic focus only."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Avoid positive values"})," (1,2,3…) → fragile and surprising."]})]})})]}),e.jsxs("section",{id:"focus-visible",children:[e.jsx("h2",{children:":focus vs :focus-visible"}),e.jsx(s.Code,{role:"region","aria-label":":focus-visible example",children:e.jsx("pre",{children:String.raw`.btn:focus-visible {
  outline: 3px solid var(--primary);
  outline-offset: 2px;
}`})}),e.jsxs("p",{className:"note",children:["Use ",e.jsx("code",{children:":focus-visible"})," to show outlines for keyboard users while avoiding noisy rings after mouse clicks."]})]}),e.jsxs("section",{id:"pitfalls",children:[e.jsx("h2",{children:"Pitfalls"}),e.jsxs("ul",{className:"badges",children:[e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Removing focus outline without a replacement."]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Positive ",e.jsx("code",{children:"tabindex"})," to “fix” order."]}),e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Good"})," DOM order matches visual order; add ",e.jsx("code",{children:'tabindex="0"'})," for custom widgets only."]})]})]}),e.jsxs("section",{id:"checklist",children:[e.jsx("h2",{children:"Checklist"}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"Can you tab through everything important in a sensible order?"}),e.jsx("li",{children:"Is the current focus always visible with a strong outline?"}),e.jsx("li",{children:"Does focus land at a logical place after views open/close or routes change?"}),e.jsx("li",{children:"No keyboard traps; Escape or a close button is reachable."})]})})]}),e.jsxs("section",{id:"play",children:[e.jsx("h2",{children:"Try it live"}),e.jsxs("p",{className:"lede",children:["In the demo, remove positive ",e.jsx("code",{children:"tabindex"}),", ensure visible focus via ",e.jsx("code",{children:":focus-visible"}),", and keep DOM order logical."]}),e.jsx(r,{storageKey:"core-html:a11y:focus-order-outline:v1",initialHtml:l,height:720})]}),e.jsxs("nav",{className:"nextPrev","aria-label":"Lesson navigation",children:[e.jsx(o,{to:"/a11y/name-role-value",className:"prev","aria-label":"Go to Name/Role/Value",children:"← Name/Role/Value"}),e.jsx(o,{to:"/a11y/skip-link-concept",className:"next","aria-label":"Go to Skip link (concept)",children:"Next: Skip link (concept) →"})]}),e.jsx("div",{className:"backTop",children:e.jsx("a",{href:"#top",children:"Back to top ↑"})})]})}export{n as default};
