import{d as s,r as n,j as e,N as r}from"./index-D3QNcmKe.js";import{H as d}from"./index-CAjihRuM.js";const t={Page:s.main`
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

        .matrix {
            width: 100%;
            border-collapse: collapse;
            font-size: 14px;
        }
        .matrix th,
        .matrix td {
            border: 1px solid var(--border);
            padding: 8px 10px;
            vertical-align: top;
        }
        .matrix thead th {
            background: var(--surface);
            text-align: left;
        }

        .kbd,
        .k {
            display: inline-block;
            font-size: 12px;
            padding: 2px 8px;
            border-radius: 999px;
            border: 1px solid var(--border);
            background: var(--card);
            margin: 0 2px;
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

        .note {
            font-size: 14px;
            color: var(--text-muted);
            border-left: 3px solid var(--primary);
            padding: 8px 12px;
            background: color-mix(in oklab, var(--primary), transparent 92%);
            border-radius: 8px;
            margin-top: 8px;
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
    `,Code:s.div`
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
    `};var i=Object.freeze,l=Object.defineProperty,c=(a,x)=>i(l(a,"raw",{value:i(a.slice())})),o;const p=String.raw(o||(o=c([`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Button vs Link — playground</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui, -apple-system, Segoe UI, Roboto, sans-serif; }
      .grid { display: grid; gap: 14px; }
      .card { border: 1px solid #ccc; border-radius: 12px; padding: 12px; background: #fff; }
      @media (prefers-color-scheme: dark) {
        .card { background: color-mix(in oklab, #fff, #000 92%); border-color: #333; }
      }
      .good { background: color-mix(in oklab, #16a34a, transparent 92%); border-color:#7bc590; }
      .bad  { background: color-mix(in oklab, #dc2626, transparent 92%); border-color:#f2a6a6; }
      .muted { color: #6b7280; }
      .row { display: grid; gap: 8px; grid-template-columns: repeat(2,minmax(0,1fr)); }
      @media (max-width: 840px){ .row { grid-template-columns: 1fr; } }
      .k { display:inline-block; border:1px solid #bbb; border-radius:999px; padding:2px 8px; font-size:12px; background:#f8f8f8; }
      code { background:#f5f5f5; padding:0 6px; border-radius:6px; }
      .ex { border:1px dashed #aaa; padding:10px; border-radius:10px; margin-top:6px; display:grid; gap:8px; }
      button, a { font: inherit; }
      .btn { padding:8px 12px; border-radius:10px; border:1px solid #aaa; background:#eee; cursor:pointer; text-decoration:none; color:inherit; }
      .btn:disabled, [aria-disabled="true"] { opacity: .55; cursor: not-allowed; }
    </style>
  </head>
  <body>
    <main class="grid">
      <header>
        <h1><button> vs <a></a></h1>
        <p class="muted">Rule of thumb: <strong>Use <code>&lt;button&gt;</code> for actions</strong> (submit, open modal, toggle) and <strong>use <code>&lt;a href&gt;</code> for navigation</strong> (go to another URL).</p>
      </header>

      <section class="card good">
        <h2>Good: Action uses <code>&lt;button&gt;</code></h2>
        <div class="ex">
          <dialog id="d">
            <form method="dialog" style="padding:12px">
              <p>Are you sure?</p>
              <button value="no" class="btn">Cancel</button>
              <button value="yes" class="btn">Confirm</button>
            </form>
          </dialog>
          <button class="btn" id="open">Open confirm modal</button>
          <script>
            const d = document.getElementById('d');
            document.getElementById('open').addEventListener('click', () => d.showModal());
          <\/script>
          <!-- Action = open dialog; correct primitive is <button>. -->
        </div>
      </section>

      <section class="card good">
        <h2>Good: Navigation uses <code>&lt;a href&gt;</code></h2>
        <div class="ex">
          <!-- Real URL target means keyboard users can open in new tab (Ctrl/Cmd+Enter), copy link, etc. -->
          <a class="btn" href="https://developer.mozilla.org/" target="_blank" rel="noopener">Read MDN (new tab)</a>
        </div>
      </section>

      <section class="card bad">
        <h2>Bad: <code>&lt;a&gt;</code> with no <code>href</code> used like a button</h2>
        <div class="ex">
          <a class="btn" onclick="alert('Doing an action')">“Link” doing action</a>
          <!-- Problems:
               - Without href, it's not a true link (no right-click open / copy link / visited state).
               - It's missing button behavior for Space key.
               - Screen readers may announce it as link but it doesn't navigate. -->
        </div>
      </section>

      <section class="card bad">
        <h2>Bad: <code>&lt;button&gt;</code> used for navigation</h2>
        <div class="ex">
          <button class="btn" onclick="location.href='https://example.com';">Go to Example</button>
          <!-- Navigation should be an <a href="..."> to preserve browser features, SEO, and semantics. -->
        </div>
      </section>

      <section class="card">
        <h2>Disabled states</h2>
        <div class="row">
          <div>
            <p><strong>Button</strong> supports real <code>disabled</code>:</p>
            <div class="ex">
              <button class="btn" disabled>Submit (disabled)</button>
            </div>
          </div>
          <div>
            <p><strong>Link</strong> has no real disabled. Use <code>aria-disabled="true"</code> + prevent default:</p>
            <div class="ex">
              <a class="btn" href="#nowhere" aria-disabled="true" onclick="event.preventDefault();">Next (disabled)</a>
              <!-- Still focusable; JS must prevent navigation. Consider not rendering link until ready. -->
            </div>
          </div>
        </div>
      </section>

      <section class="card">
        <h2>Form nuance</h2>
        <div class="ex">
          <form onsubmit="event.preventDefault(); alert('Submitted!');">
            <input aria-label="Name" placeholder="Your name" />
            <button class="btn" type="submit">Submit</button>
            <button class="btn" type="button">Just a button</button>
            <button class="btn" type="reset">Reset</button>
          </form>
          <!-- Always set type to avoid implicit submit in nested forms/handlers. -->
        </div>
      </section>

      <section class="card">
        <h2>Download vs navigate</h2>
        <div class="ex">
          <a class="btn" href="/files/report.pdf" download>Download report.pdf</a>
          <!-- <a download> hints a download; don't use button for file download from a URL. -->
        </div>
      </section>

      <footer class="muted">
        Keyboard: Links activate on <span class="k">Enter</span>; Buttons on <span class="k">Space</span> and <span class="k">Enter</span>.
      </footer>
    </main>
  </body>
</html>`])));function u(){return n.useEffect(()=>{document.title="Pitfalls · <button> for actions, <a> for navigation"},[]),e.jsxs(t.Page,{children:[e.jsxs("header",{className:"pageHeader",id:"top",children:[e.jsxs("h1",{children:[e.jsx("code",{children:"<button>"})," for actions, ",e.jsx("code",{children:"<a>"})," for navigation"]}),e.jsxs("p",{className:"lede",children:["If it changes state without changing the URL, it’s an ",e.jsx("strong",{children:"action"})," → use"," ",e.jsx("code",{children:"<button>"}),". If it takes you to a different URL (same tab or new), it’s"," ",e.jsx("strong",{children:"navigation"})," → use ",e.jsx("code",{children:"<a href>"}),"."]})]}),e.jsxs("nav",{className:"toc","aria-label":"On this page",children:[e.jsx("a",{href:"#model",children:"Mental model"}),e.jsx("a",{href:"#matrix",children:"Decision checklist"}),e.jsx("a",{href:"#keyboard",children:"Keyboard & semantics"}),e.jsx("a",{href:"#attrs",children:"Attributes that matter"}),e.jsx("a",{href:"#patterns",children:"Correct patterns"}),e.jsx("a",{href:"#pitfalls",children:"Common mistakes"}),e.jsx("a",{href:"#play",children:"Playground"})]}),e.jsxs("section",{id:"model",children:[e.jsx("h2",{children:"Mental model"}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Action:"})," submit form, open/close dialog, toggle UI, start/stop a process → ",e.jsx("code",{children:"button"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Navigation:"})," move to a URL (internal or external), download a file from a URL → ",e.jsx("code",{children:"a href"}),"."]}),e.jsx("li",{children:"Semantics give you behavior “for free”: keyboard, focus, context menu, history, SEO."})]})})]}),e.jsxs("section",{id:"matrix",children:[e.jsx("h2",{children:"Decision checklist"}),e.jsx("div",{className:"card",children:e.jsxs("table",{className:"matrix",role:"grid",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Question"}),e.jsx("th",{children:"Use"}),e.jsx("th",{children:"Notes"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Does it go to a different URL?"}),e.jsx("td",{children:e.jsx("code",{children:"<a href>"})}),e.jsx("td",{children:"Opens-in-new-tab, copy-link, visited state all work."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Does it trigger a client-side action?"}),e.jsx("td",{children:e.jsx("code",{children:"<button>"})}),e.jsx("td",{children:"Space/Enter activation, disabled state, form types."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Is it submitting a form?"}),e.jsx("td",{children:e.jsx("code",{children:'<button type="submit">'})}),e.jsxs("td",{children:["Avoid accidental submits; set ",e.jsx("code",{children:"type"})," explicitly."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Is it “looks like link” but acts like button?"}),e.jsx("td",{children:e.jsx("code",{children:"<button>"})}),e.jsx("td",{children:"Style can mimic a link; keep semantics correct."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Is it “looks like button” but navigates?"}),e.jsx("td",{children:e.jsx("code",{children:"<a href>"})}),e.jsx("td",{children:"Button styling on an anchor is fine."})]})]})]})})]}),e.jsxs("section",{id:"keyboard",children:[e.jsx("h2",{children:"Keyboard & semantics"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Links"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["Activate with ",e.jsx("span",{className:"kbd",children:"Enter"}),"."]}),e.jsx("li",{children:"Have URL in context menu; support middle-click / new tab."}),e.jsxs("li",{children:["SEO & visited state apply (when ",e.jsx("code",{children:"href"})," exists)."]})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Buttons"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["Activate with ",e.jsx("span",{className:"kbd",children:"Space"})," and ",e.jsx("span",{className:"kbd",children:"Enter"}),"."]}),e.jsxs("li",{children:["Support real ",e.jsx("code",{children:"disabled"})," and form ",e.jsx("code",{children:"type"}),"s."]}),e.jsx("li",{children:"No URL; use for state changes, toggles, dialogs."})]})]})]})]}),e.jsxs("section",{id:"attrs",children:[e.jsx("h2",{children:"Attributes that matter"}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("code",{children:'<button type="button|submit|reset">'})," — set ",e.jsx("code",{children:"type"})," explicitly."]}),e.jsxs("li",{children:[e.jsx("code",{children:"disabled"})," — works on ",e.jsx("code",{children:"button"}),"; for links use ",e.jsx("code",{children:'aria-disabled="true"'})," and prevent default."]}),e.jsxs("li",{children:[e.jsx("code",{children:'<a href target="_blank" rel="noopener">'})," — security for new tabs."]}),e.jsxs("li",{children:[e.jsx("code",{children:"<a download>"})," — hint download instead of navigate."]}),e.jsxs("li",{children:["Avoid ",e.jsx("code",{children:'role="button"'})," on anchors; use the real element instead."]})]})})]}),e.jsxs("section",{id:"patterns",children:[e.jsx("h2",{children:"Correct patterns"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"“Button-styled link”"}),e.jsx(t.Code,{role:"region","aria-label":"Button-styled link",children:e.jsx("pre",{children:String.raw`<a class="btn" href="/pricing">View pricing</a>`})}),e.jsx("p",{className:"note",children:"Style doesn’t change semantics. It’s still a link with all link superpowers."})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"“Link-styled button”"}),e.jsx(t.Code,{role:"region","aria-label":"Link-styled button",children:e.jsx("pre",{children:String.raw`<button class="linkLike" type="button">Show advanced options</button>`})}),e.jsxs("p",{className:"note",children:["Looks like a link, acts like a button. Keep it a ",e.jsx("code",{children:"button"})," because it toggles UI."]})]})]})]}),e.jsxs("section",{id:"pitfalls",children:[e.jsx("h2",{children:"Common mistakes"}),e.jsxs("ul",{className:"badges",children:[e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Anchor with JS click handler but no ",e.jsx("code",{children:"href"}),"."]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Button used to change page location."]}),e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Good"})," Action = ",e.jsx("code",{children:"button"}),"; Navigation/Download = ",e.jsx("code",{children:"a href"}),"."]})]})]}),e.jsxs("section",{id:"play",children:[e.jsx("h2",{children:"Try it live"}),e.jsx("p",{className:"lede",children:"Fix the bad examples: convert navigation buttons to anchors, replace fake links with real buttons, add missing attributes (type, rel, download)."}),e.jsx(d,{storageKey:"core-html:pitfalls:button-vs-link:v1",initialHtml:p,height:680})]}),e.jsxs("nav",{className:"nextPrev","aria-label":"Lesson navigation",children:[e.jsx(r,{to:"/pitfalls/multiple-h1",className:"prev","aria-label":"Go to Multiple H1 per context",children:"← Multiple <h1> per context"}),e.jsx(r,{to:"/pitfalls/no-div-for-headings",className:"next","aria-label":"Go to No div for headings/lists",children:"Next: No <div> for headings/lists →"})]}),e.jsx("div",{className:"backTop",children:e.jsx("a",{href:"#top",children:"Back to top ↑"})})]})}export{u as default};
