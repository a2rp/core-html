import{d as i,r as n,j as e,N as t}from"./index-D3QNcmKe.js";import{H as a}from"./index-CAjihRuM.js";const o={Page:i.main`
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
    `},s=String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Button vs Link — decisions</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 22px; font: 14px/1.6 system-ui,-apple-system,Segoe UI,Roboto,sans-serif; }
      .grid { display: grid; gap: 14px; }
      .card { border: 1px solid #ccc; border-radius: 12px; padding: 12px; background: #fff; }
      .muted { color: #6b7280; }
      code { background: #f5f5f5; padding: 0 6px; border-radius: 6px; }
      .row { display: flex; flex-wrap: wrap; gap: 10px; align-items: center; }
      .btn {
        border: 1px solid #aaa; border-radius: 10px; padding: 8px 12px; background: #f5f5f5; cursor: pointer;
      }
      .linkLikeBtn {
        display: inline-block; text-decoration: none; color: inherit;
        border: 1px solid #aaa; border-radius: 10px; padding: 8px 12px; background: #f5f5f5;
      }
      .good { background: color-mix(in oklab, #16a34a, transparent 92%); border-color:#8ed09b; }
      .bad  { background: color-mix(in oklab, #dc2626, transparent 92%); border-color:#f2a6a6; }
      .ex { border:1px dashed #aaa; padding:8px; border-radius:10px; margin-top:6px; }
    </style>
  </head>
  <body>
    <main class="grid">
      <header>
        <h1>Button vs Link</h1>
        <p class="muted">
          Use <code>&lt;a&gt;</code> to navigate to a URL. Use <code>&lt;button&gt;</code> to perform an action on the current page.
        </p>
      </header>

      <section class="card">
        <h2>Links (navigation)</h2>
        <ul>
          <li>Must have an <code>href</code>. Without it, it’s not a link.</li>
          <li>Left/right click, open in new tab, copy link — all expected behaviors.</li>
          <li>Examples: go to Home, open Docs, jump to a section (#id), download (with <code>download</code>).</li>
        </ul>
        <div class="ex row">
          <a class="linkLikeBtn" href="#pricing">Jump to Pricing</a>
          <a class="linkLikeBtn" href="https://developer.mozilla.org/" target="_blank" rel="noopener">MDN (new tab)</a>
          <a class="linkLikeBtn" href="/files/guide.pdf" download>Download PDF</a>
        </div>
      </section>

      <section class="card">
        <h2>Buttons (actions)</h2>
        <ul>
          <li>Trigger behavior: open dialog, toggle UI, submit/reset forms, async actions.</li>
          <li>Use <code>type="button"</code> for non-submit actions inside forms.</li>
          <li>Examples: open modal, add to cart, play/pause, “Load more”.</li>
        </ul>
        <div class="ex row">
          <button class="btn" type="button" onclick="alert('Toggled!')">Toggle something</button>
          <form onsubmit="event.preventDefault(); alert('Submitted!')">
            <input aria-label="Name" placeholder="Name" />
            <button class="btn" type="submit">Submit form</button>
            <button class="btn" type="reset">Reset</button>
            <button class="btn" type="button" onclick="alert('Just a plain action, not submit')">Action</button>
          </form>
        </div>
      </section>

      <section class="card bad">
        <h2>Anti-patterns</h2>
        <ul>
          <li>Link without <code>href</code> used like a button (breaks keyboard + context menu).</li>
          <li>Button used for navigation with custom JS + <code>location.href</code> (breaks open-in-new-tab expectations).</li>
          <li>Adding <code>role="button"</code> to an anchor instead of using <code>&lt;button&gt;</code> for actions.</li>
        </ul>
        <div class="ex row">
          <a class="linkLikeBtn" onclick="alert('Not a real link'); return false;">Fake link (no href)</a>
          <button class="btn" onclick="location.href='https://example.com'">Navigates (unexpected)</button>
        </div>
      </section>

      <section class="card good">
        <h2>Progressive enhancement tips</h2>
        <ul>
          <li>Navigation that still works without JS → use a real <code>&lt;a href&gt;</code>.</li>
          <li>Action that still works without JS? Prefer native form submit or details/summary when possible.</li>
          <li>When styling, you can make a link look like a button, but keep it a link.</li>
        </ul>
      </section>

      <footer class="muted">
        Rule of thumb: <strong>URL → link</strong>. <strong>Behavior → button</strong>.
      </footer>
    </main>
  </body>
</html>`;function d(){return n.useEffect(()=>{document.title="Patterns · Button vs Link decision"},[]),e.jsxs(o.Page,{children:[e.jsxs("header",{className:"pageHeader",id:"top",children:[e.jsx("h1",{children:"Button vs Link decision"}),e.jsx("p",{className:"lede",children:"Links navigate to a URL (new resource or location). Buttons perform an action on the current page. Pick the element that matches user expectations, keyboard behavior, and accessibility."})]}),e.jsxs("nav",{className:"toc","aria-label":"On this page",children:[e.jsx("a",{href:"#model",children:"Mental model"}),e.jsx("a",{href:"#defaults",children:"Native defaults"}),e.jsx("a",{href:"#checklist",children:"Decision checklist"}),e.jsx("a",{href:"#examples",children:"Examples"}),e.jsx("a",{href:"#a11y",children:"Accessibility notes"}),e.jsx("a",{href:"#pitfalls",children:"Anti-patterns"}),e.jsx("a",{href:"#play",children:"Playground"})]}),e.jsxs("section",{id:"model",children:[e.jsx("h2",{children:"Mental model"}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsxs("strong",{children:["Link (",e.jsx("code",{children:"<a>"}),")"]})," — takes you somewhere. Must have an ",e.jsx("code",{children:"href"}),"."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Button (",e.jsx("code",{children:"<button>"}),")"]})," — does something. Triggers behavior in the current context."]}),e.jsx("li",{children:"Don’t style your semantics: choose semantics first, then style to taste."})]})})]}),e.jsxs("section",{id:"defaults",children:[e.jsx("h2",{children:"Native defaults"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Links"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["Keyboard: ",e.jsx("kbd",{children:"Tab"})," to focus, ",e.jsx("kbd",{children:"Enter"})," to activate."]}),e.jsx("li",{children:"Context menu: open in new tab/window, copy link, bookmark."}),e.jsxs("li",{children:["Attributes: ",e.jsx("code",{children:"href"})," (required), ",e.jsx("code",{children:"download"}),", ",e.jsx("code",{children:"target"}),", ",e.jsx("code",{children:"rel"}),"."]})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Buttons"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["Keyboard: ",e.jsx("kbd",{children:"Tab"})," to focus, ",e.jsx("kbd",{children:"Space"}),"/",e.jsx("kbd",{children:"Enter"})," to activate."]}),e.jsxs("li",{children:["Form context: ",e.jsx("code",{children:'type="submit"'})," (default), ",e.jsx("code",{children:'type="reset"'}),", ",e.jsx("code",{children:'type="button"'}),"."]}),e.jsx("li",{children:"Behaviors: toggles, dialogs, media controls, async actions."})]})]})]})]}),e.jsxs("section",{id:"checklist",children:[e.jsx("h2",{children:"Decision checklist"}),e.jsx("div",{className:"card",children:e.jsxs("ol",{className:"bullets",children:[e.jsxs("li",{children:["Does this action change the URL or go to a new resource? → ",e.jsx("strong",{children:"Link"}),"."]}),e.jsxs("li",{children:["Should users be able to open in a new tab or bookmark it? → ",e.jsx("strong",{children:"Link"}),"."]}),e.jsxs("li",{children:["Is it a UI toggle, submit/reset, or client-side behavior? → ",e.jsx("strong",{children:"Button"}),"."]}),e.jsxs("li",{children:["Inside a form and not meant to submit? → ",e.jsxs("strong",{children:["Button with ",e.jsx("code",{children:'type="button"'})]}),"."]}),e.jsxs("li",{children:["External site with ",e.jsx("code",{children:'target="_blank"'}),"? Add ",e.jsx("code",{children:'rel="noopener"'})," for security."]})]})})]}),e.jsxs("section",{id:"examples",children:[e.jsx("h2",{children:"Examples"}),e.jsx(o.Code,{"aria-label":"Good: navigation uses links",children:e.jsx("pre",{children:String.raw`<!-- Good: navigation -->
<nav>
  <a href="/home">Home</a>
  <a href="/docs/getting-started">Docs</a>
  <a href="#faq">Skip to FAQ</a>
</nav>`})}),e.jsx(o.Code,{"aria-label":"Good: actions use buttons",children:e.jsx("pre",{children:String.raw`<!-- Good: actions -->
<button type="button" data-dialog="signup">Open sign-up dialog</button>
<button type="submit">Save changes</button>
<button type="reset">Reset form</button>`})}),e.jsx(o.Code,{"aria-label":"Avoid: button used for navigation",children:e.jsx("pre",{children:String.raw`<!-- Avoid: this should be a link -->
<button onclick="location.href='/pricing'">Pricing</button>

<!-- Prefer -->
<a href="/pricing">Pricing</a>`})}),e.jsx(o.Code,{"aria-label":"Avoid: anchor without href used like a button",children:e.jsx("pre",{children:String.raw`<!-- Avoid: no href + JS click -->
<a onclick="doThing()">Do thing</a>

<!-- Prefer -->
<button type="button" onclick="doThing()">Do thing</button>`})})]}),e.jsxs("section",{id:"a11y",children:[e.jsx("h2",{children:"Accessibility notes"}),e.jsxs("ul",{className:"badges",children:[e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Good"})," Link has a valid ",e.jsx("code",{children:"href"}),"; Button has a clear label."]}),e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Good"})," Non-submit buttons inside forms use ",e.jsx("code",{children:'type="button"'}),"."]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Using ",e.jsx("code",{children:'role="button"'})," on anchors to fake actions."]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Hijacking link click to run heavy JS before navigation."]})]})]}),e.jsxs("section",{id:"pitfalls",children:[e.jsx("h2",{children:"Common pitfalls"}),e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"Styling everything as a “button” component and losing semantics."}),e.jsxs("li",{children:["Forgetting ",e.jsx("code",{children:'rel="noopener"'})," with ",e.jsx("code",{children:'target="_blank"'})," to external sites."]}),e.jsx("li",{children:"Creating keyboard traps in custom components that should have been plain links/buttons."})]})]}),e.jsxs("section",{id:"play",children:[e.jsx("h2",{children:"Try it live"}),e.jsxs("p",{className:"lede",children:["Convert fake links to real buttons, change navigation buttons to real links with ",e.jsx("code",{children:"href"}),", and fix form buttons to the correct ",e.jsx("code",{children:"type"}),". Autosaves to this lesson."]}),e.jsx(a,{storageKey:"core-html:patterns:button-vs-link-decision:v1",initialHtml:s,height:640})]}),e.jsxs("nav",{className:"nextPrev","aria-label":"Lesson navigation",children:[e.jsx(t,{to:"/pitfalls/button-vs-link",className:"prev","aria-label":"Go to Pitfall: Button vs Link",children:"← Pitfall: Button vs Link"}),e.jsx(t,{to:"/patterns/labeled-form-row",className:"next","aria-label":"Go to Pattern: Labeled form row",children:"Next: Labeled form row →"})]}),e.jsx("div",{className:"backTop",children:e.jsx("a",{href:"#top",children:"Back to top ↑"})})]})}export{d as default};
