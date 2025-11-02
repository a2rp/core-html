import{d,r as i,j as e,N as s}from"./index-D3QNcmKe.js";import{H as n}from"./index-CAjihRuM.js";const a={Page:d.main`
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
    `};var r=Object.freeze,t=Object.defineProperty,c=(o,x)=>r(t(o,"raw",{value:r(o.slice())})),l;const p=String.raw(l||(l=c([`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>&lt;dialog&gt; basics — demo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark }
      * { box-sizing: border-box }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui, -apple-system, Segoe UI, Roboto, sans-serif }
      .grid { display: grid; gap: 14px; max-width: 960px; margin: 0 auto }
      .card { border: 1px solid #ccc; border-radius: 12px; padding: 12px }
      .muted { color: #6b7280 }
      .row { display: flex; gap: 8px; flex-wrap: wrap }
      button { font: inherit; padding: 8px 12px; border-radius: 10px; border: 1px solid #aaa; background: #f5f5f5; cursor: pointer }
      button:focus-visible { outline: 3px solid #3b82f6 }
      dialog {
        border: 1px solid #aaa;
        border-radius: 12px;
        padding: 0;
        max-width: 520px;
        width: min(520px, 90vw);
      }
      dialog header { padding: 12px; border-bottom: 1px solid #ddd; display:flex; justify-content: space-between; align-items:center }
      dialog header h2 { margin: 0; font-size: 18px }
      dialog .content { padding: 12px }
      dialog .actions { display:flex; justify-content: flex-end; gap: 8px; padding: 12px; border-top: 1px solid #ddd }
      dialog::backdrop {
        background: rgba(0, 0, 0, 0.45);
        backdrop-filter: blur(2px);
      }
      .note {
        font-size: 13px; color: #6b7280;
        border-left: 3px solid #06b6d4;
        padding: 8px 12px; background: rgba(6,182,212,0.08);
        border-radius: 8px; margin-top: 8px;
      }
      .kbd { display:inline-block; border:1px solid #bbb; border-radius:8px; padding:0 8px; font-size:12px }
      .ex { border:1px dashed #aaa; padding:8px; border-radius:10px; margin-top:6px }
    </style>
  </head>
  <body>
    <main class="grid">
      <header>
        <h1>&lt;dialog&gt; basics</h1>
        <p class="muted">Built-in modal/non-modal dialog primitive with <code>open</code>, <code>show()</code>, <code>showModal()</code>, and <code>close()</code>.</p>
      </header>

      <section class="card">
        <h2>Open a modal dialog</h2>
        <div class="row">
          <button id="openModal">Open modal</button>
          <button id="openNonModal">Open non-modal</button>
        </div>
        <div class="note">Modal = background inert + focus trapped. Non-modal = floating panel without inert background.</div>
      </section>

      <section class="card">
        <h2>Form with <code>method="dialog"</code></h2>
        <p>Submitting closes the dialog and sets <code>returnValue</code> to the clicked submit's <code>value</code>.</p>
      </section>

      <!-- DIALOG -->
      <dialog id="demoDialog" aria-labelledby="demoTitle">
        <header>
          <h2 id="demoTitle">Settings</h2>
          <button id="xClose" aria-label="Close dialog" class="kbd">Esc</button>
        </header>
        <form method="dialog">
          <div class="content">
            <label>
              <span>Username</span><br />
              <input name="user" autocomplete="username" placeholder="alex" />
            </label>
            <p class="note">Tip: Provide a sensible initial focus target at the top of the dialog.</p>
          </div>
          <div class="actions">
            <button value="cancel">Cancel</button>
            <button value="save">Save</button>
          </div>
        </form>
      </dialog>

      <section class="card">
        <h2>Result</h2>
        <div id="result" class="ex">Click Save/Cancel to see <code>returnValue</code>.</div>
      </section>

      <footer class="muted">
        Shortcuts: <span class="kbd">Esc</span> closes modal by default. Non-modal dialogs may need custom handling.
      </footer>
    </main>

    <script>
      const dlg = document.getElementById('demoDialog');
      const btnModal = document.getElementById('openModal');
      const btnNonModal = document.getElementById('openNonModal');
      const xClose = document.getElementById('xClose');
      const result = document.getElementById('result');

      // Open as modal: background inert + focus trapped
      btnModal.addEventListener('click', () => {
        try { dlg.showModal(); } catch (e) { alert('showModal() failed: ' + e.message); }
      });

      // Open as non-modal: background interactive
      btnNonModal.addEventListener('click', () => {
        try { dlg.show(); } catch (e) { alert('show() failed: ' + e.message); }
      });

      // Optional explicit close button
      xClose.addEventListener('click', () => dlg.close('x'));

      // After close, check returnValue
      dlg.addEventListener('close', () => {
        result.textContent = 'Dialog closed. returnValue = "' + (dlg.returnValue || '') + '"';
      });

      // Initial focus: place focus on the first field when dialog opens
      dlg.addEventListener('open', () => {
        const first = dlg.querySelector('input, button, [href], [tabindex]:not([tabindex="-1"])');
        first?.focus();
      });
    <\/script>
  </body>
</html>`])));function b(){return i.useRef(null),i.useEffect(()=>{document.title="Interactive · <dialog> (open attr) — basics"},[]),e.jsxs(a.Page,{children:[e.jsxs("header",{className:"pageHeader",id:"top",children:[e.jsxs("h1",{children:[e.jsx("code",{children:"<dialog>"})," basics ",e.jsx("small",{className:"muted",children:"(open attr)"})]}),e.jsxs("p",{className:"lede",children:["The ",e.jsx("code",{children:"<dialog>"})," element provides a native way to create modal and non-modal dialogs. The"," ",e.jsx("code",{children:"open"})," attribute reflects visibility. Use ",e.jsx("code",{children:"show()"})," for non-modal,"," ",e.jsx("code",{children:"showModal()"})," for modal behavior, and ",e.jsx("code",{children:"close()"})," to dismiss."]})]}),e.jsxs("nav",{className:"toc","aria-label":"On this page",children:[e.jsx("a",{href:"#what",children:"What it is"}),e.jsx("a",{href:"#api",children:"API & lifecycle"}),e.jsx("a",{href:"#focus",children:"Focus & a11y"}),e.jsx("a",{href:"#backdrop",children:"Backdrop & layout"}),e.jsx("a",{href:"#forms",children:"Forms via method=dialog"}),e.jsx("a",{href:"#pitfalls",children:"Pitfalls"}),e.jsx("a",{href:"#play",children:"Playground"})]}),e.jsxs("section",{id:"what",children:[e.jsx("h2",{children:"What it is"}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["A built-in dialog container that toggles with the boolean"," ",e.jsx("code",{children:"open"})," attribute."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Modal"}),": ",e.jsx("code",{children:"showModal()"})," → page behind becomes inert and focus is scoped inside."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Non-modal"}),": ",e.jsx("code",{children:"show()"})," → floating panel, background stays interactive."]})]})})]}),e.jsxs("section",{id:"api",children:[e.jsx("h2",{children:"API & lifecycle"}),e.jsx(a.Code,{role:"region","aria-label":"Key API",children:e.jsx("pre",{children:String.raw`const dlg = document.querySelector('dialog');
dlg.show();        // non-modal
dlg.showModal();   // modal (blocks interaction behind)
dlg.close('save'); // sets dlg.returnValue = 'save' and removes [open]`})}),e.jsxs("p",{className:"note",children:["Modal dialogs close on ",e.jsx("kbd",{children:"Esc"})," by default unless suppressed with"," ",e.jsx("code",{children:"cancel"})," event ",e.jsx("code",{children:"preventDefault()"}),"."]})]}),e.jsxs("section",{id:"focus",children:[e.jsx("h2",{children:"Focus & accessibility"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["Give the dialog an accessible name via a visible heading and ",e.jsx("code",{children:"aria-labelledby"}),"."]}),e.jsx("li",{children:"Ensure an obvious initial focus target (first field or close button)."}),e.jsx("li",{children:"Modal dialogs trap focus; non-modal ones do not. Don’t fake modals with CSS only."})]}),e.jsx(a.Code,{children:e.jsx("pre",{children:String.raw`<dialog aria-labelledby="title">
  <h2 id="title">Preferences</h2>
  …
</dialog>`})})]}),e.jsxs("section",{id:"backdrop",children:[e.jsx("h2",{children:"Backdrop & layout"}),e.jsxs("p",{children:["Style the scrim using ",e.jsx("code",{children:"dialog::backdrop"}),". The dialog box itself is top-layer positioned; for custom layout, use internal wrappers."]}),e.jsx(a.Code,{children:e.jsx("pre",{children:String.raw`dialog::backdrop { background: rgba(0,0,0,.4); backdrop-filter: blur(2px); }`})})]}),e.jsxs("section",{id:"forms",children:[e.jsxs("h2",{children:["Forms with ",e.jsx("code",{children:'method="dialog"'})]}),e.jsxs("p",{children:["Submitting a form with ",e.jsx("code",{children:'method="dialog"'})," auto-closes the dialog and assigns"," ",e.jsx("code",{children:"returnValue"})," from the clicked submit’s ",e.jsx("code",{children:"value"}),"."]}),e.jsx(a.Code,{children:e.jsx("pre",{children:String.raw`<form method="dialog">
  <button value="cancel">Cancel</button>
  <button value="save">Save</button>
</form>`})})]}),e.jsxs("section",{id:"pitfalls",children:[e.jsx("h2",{children:"Pitfalls"}),e.jsxs("ul",{className:"badges",children:[e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Only toggling CSS without using ",e.jsx("code",{children:"showModal()"})," for modals."]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Missing heading/name. Screen readers need an accessible name."]}),e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Good"})," Use ",e.jsx("code",{children:"close()"})," and handle ",e.jsx("code",{children:"close"}),"/",e.jsx("code",{children:"cancel"})," events."]})]}),e.jsxs("p",{className:"note",children:["Progressive enhancement: if ",e.jsx("code",{children:"<dialog>"})," is unsupported, fall back to a simple inline section or portal-free overlay script."]})]}),e.jsxs("section",{id:"play",children:[e.jsx("h2",{children:"Try it live"}),e.jsxs("p",{className:"lede",children:["Open as modal vs non-modal, test ",e.jsx("code",{children:"Esc"}),", submit with ",e.jsx("code",{children:'method="dialog"'}),", and inspect ",e.jsx("code",{children:"returnValue"}),"."]}),e.jsx(n,{storageKey:"core-html:interactive:dialog-open:v1",initialHtml:p,height:680})]}),e.jsxs("nav",{className:"nextPrev","aria-label":"Lesson navigation",children:[e.jsx(s,{to:"/interactive/details-summary",className:"prev","aria-label":"Go to details + summary",children:"← <details> + <summary>"}),e.jsx(s,{to:"/interactive/no-nesting",className:"next","aria-label":"Go to Don’t nest interactive in interactive",children:"Next: Don’t nest interactive in interactive →"})]}),e.jsx("div",{className:"backTop",children:e.jsx("a",{href:"#top",children:"Back to top ↑"})})]})}export{b as default};
