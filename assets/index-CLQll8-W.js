import{d as s,r as l,j as e,N as d}from"./index-D3QNcmKe.js";import{H as c}from"./index-CAjihRuM.js";const i={Page:s.main`
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
    `};var t=Object.freeze,h=Object.defineProperty,o=(a,b)=>t(h(a,"raw",{value:t(a.slice())})),r,n;const p=String.raw(r||(r=o([`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>hidden • tabindex • contenteditable — playground</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui, -apple-system, Segoe UI, Roboto, sans-serif; }
      .row { display: grid; gap: 10px; grid-template-columns: repeat(3, minmax(0, 1fr)); }
      .card { border: 1px solid #ccc; border-radius: 12px; padding: 12px; }
      .note { color: #6b7280; }
      button { padding: 6px 10px; }
      .kbd { display:inline-block; border:1px solid #bbb; border-radius:999px; padding:2px 8px; font-size:12px; }
      .area { min-height: 68px; border: 1px dashed #aaa; border-radius: 10px; padding: 8px; }
      .grid { display: grid; gap: 12px; }
      .muted { color: #6b7280; }
      .focusable { outline: 2px solid transparent; }
      .focusable:focus { outline-color: #60a5fa; outline-offset: 2px; }
    </style>
  </head>
  <body>
    <main class="grid">
      <header>
        <h1>hidden • tabindex • contenteditable</h1>
        <p class="muted">Experiment with visibility, focus, and live-editable content. Open DevTools → Accessibility tree to observe differences.</p>
      </header>

      <section class="card">
        <h2>hidden vs visibility vs aria-hidden</h2>
        <div class="row">
          <div>
            <h3>display:none (hidden)</h3>
            <p class="muted">Removed from layout, not focusable, not in a11y tree.</p>
            <div class="area">
              <p hidden>This paragraph is hidden via <code>hidden</code>.</p>
              <button id="toggleHidden">Toggle hidden block</button>
              <div id="hiddenTarget" hidden>🔒 I appear/disappear with <code>hidden</code>.</div>
            </div>
          </div>

          <div>
            <h3>visibility:hidden</h3>
            <p class="muted">Takes layout space, not focusable, not visible.</p>
            <div class="area">
              <button id="toggleVis">Toggle visibility</button>
              <p id="visTarget" style="visibility:hidden">👻 Invisible but space is reserved.</p>
            </div>
          </div>

          <div>
            <h3>aria-hidden="true"</h3>
            <p class="muted">Visible, but hidden from assistive tech (screen readers).</p>
            <div class="area">
              <label><input id="ariaChk" type="checkbox"> Apply aria-hidden</label>
              <p id="ariaBox">🪄 I stay visible; SRs ignore me when aria-hidden=true.</p>
              <p class="note">Avoid on interactive elements or labels it controls.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="card">
        <h2>Focus management with <code>tabindex</code></h2>
        <div class="grid">
          <ul>
            <li><code>tabindex="0"</code> puts element in natural tab order.</li>
            <li><code>tabindex="-1"</code> allows programmatic focus only (no Tab stop).</li>
            <li>Avoid positive values (1,2,3…) — they cause confusing orders.</li>
          </ul>
          <div class="area">
            <a href="#" class="focusable">Natural link</a>
            <button class="focusable">Natural button</button>
            <div id="tab0" class="focusable" tabindex="0" role="button" aria-label="Custom button with tabindex 0">Custom focusable (tabindex=0)</div>
            <div id="tabNeg" class="focusable" tabindex="-1">Programmatic only (tabindex=-1)</div>
            <div id="tabPos" class="focusable" tabindex="2" aria-label="Discouraged positive tabindex">Discouraged (tabindex=2)</div>
            <div class="grid" style="grid-template-columns: repeat(3, minmax(0,1fr)); gap: 8px; margin-top:8px;">
              <button id="focusNeg">Focus -1</button>
              <button id="focus0">Focus 0</button>
              <button id="focusPos">Focus 2</button>
            </div>
          </div>
          <p class="note">Try Tab/Shift+Tab through controls. Then click the buttons above to move focus via script.</p>
        </div>
      </section>

      <section class="card">
        <h2>Live editing with <code>contenteditable</code></h2>
        <div class="grid">
          <div class="area" id="ced1" contenteditable="true" role="textbox" aria-multiline="true" aria-label="Editable paragraph">
            Edit this text. Keep it short and sweet. Use Tab to leave (browsers usually keep native tab navigation).
          </div>
          <div class="area" id="ced2" contenteditable="true" role="textbox" aria-multiline="true" aria-label="Editable list">
            <ul><li>Editable list item</li><li>Try typing</li></ul>
          </div>
          <div>
            <p class="muted">
              Tips:
              <br>• Provide a role and accessible name (label) for editing regions.
              <br>• Manage keyboard shortcuts carefully; don't trap focus.
              <br>• Persist changes (e.g., to localStorage) if this were a real app.
            </p>
          </div>
        </div>
      </section>

      <footer class="muted">
        Key idea: Visibility, focus, and accessibility are related but distinct. Test with keyboard and screen reader.
      </footer>
    </main>

    <script>
      const hiddenTarget = document.getElementById('hiddenTarget');
      const toggleHidden = document.getElementById('toggleHidden');
      toggleHidden.addEventListener('click', () => {
        hiddenTarget.hidden = !hiddenTarget.hidden;
      });

      const visTarget = document.getElementById('visTarget');
      const toggleVis = document.getElementById('toggleVis');
      toggleVis.addEventListener('click', () => {
        visTarget.style.visibility = (visTarget.style.visibility === 'hidden') ? 'visible' : 'hidden';
      });

      const ariaBox = document.getElementById('ariaBox');
      const ariaChk = document.getElementById('ariaChk');
      ariaChk.addEventListener('change', () => {
        ariaBox.setAttribute('aria-hidden', ariaChk.checked ? 'true' : 'false');
      });

      /* tabindex demo — programmatic focus */
      const tabNeg = document.getElementById('tabNeg');
      const tab0 = document.getElementById('tab0');
      const tabPos = document.getElementById('tabPos');
      document.getElementById('focusNeg').addEventListener('click', () => tabNeg.focus());
      document.getElementById('focus0').addEventListener('click', () => tab0.focus());
      document.getElementById('focusPos').addEventListener('click', () => tabPos.focus());
    <\/script>
  </body>
</html>`])));function m(){return l.useEffect(()=>{document.title="Globals · hidden, tabindex, contenteditable"},[]),e.jsxs(i.Page,{children:[e.jsxs("header",{className:"pageHeader",id:"top",children:[e.jsxs("h1",{children:["Global attributes: ",e.jsx("code",{children:"hidden"}),", ",e.jsx("code",{children:"tabindex"}),", ",e.jsx("code",{children:"contenteditable"})]}),e.jsx("p",{className:"lede",children:"Visibility, focus, and editing sound simple, but they shape usability. Learn what disappears from the accessibility tree, what still takes focus, and how to make editable regions usable."})]}),e.jsxs("nav",{className:"toc","aria-label":"On this page",children:[e.jsx("a",{href:"#visibility",children:"Visibility primitives"}),e.jsx("a",{href:"#focus",children:"Focus management"}),e.jsx("a",{href:"#editing",children:"Editable content"}),e.jsx("a",{href:"#pitfalls",children:"Pitfalls"}),e.jsx("a",{href:"#faq",children:"FAQ"}),e.jsx("a",{href:"#play",children:"Playground"})]}),e.jsxs("section",{id:"visibility",children:[e.jsx("h2",{children:"Visibility primitives"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsxs("h3",{children:[e.jsx("code",{children:"hidden"})," (or ",e.jsx("code",{children:"display:none"}),")"]}),e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"Removed from layout and from the accessibility tree."}),e.jsx("li",{children:"Not focusable and not read by screen readers."}),e.jsx("li",{children:"Great for toggled UIs like disclosure/menus (with proper buttons)."})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:e.jsx("code",{children:"visibility:hidden"})}),e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"Still occupies space, but not visible or focusable."}),e.jsx("li",{children:"Useful for measuring layout without showing content."}),e.jsx("li",{children:"Don’t use for permanent hiding of interactive controls."})]})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:e.jsx("code",{children:'aria-hidden="true"'})}),e.jsx("p",{className:"note",children:"Hides from assistive tech only. The node remains visible and interactive visually. Avoid using on controls that people must operate or elements that label other controls."}),e.jsx(i.Code,{role:"region","aria-label":"aria-hidden example",children:e.jsx("pre",{children:String.raw`<p aria-hidden="true">Decorative flourish ✨</p>
<!-- Visible to sighted users, hidden from screen readers. -->`})})]}),e.jsxs("div",{className:"card",children:[e.jsxs("h3",{children:[e.jsx("code",{children:"inert"})," (concept)"]}),e.jsxs("p",{className:"note",children:[e.jsx("code",{children:"inert"})," prevents focusing and removes descendants from the a11y tree. Handy for “modal overlay active → make background inert.” Browser support is good in modern browsers; include a small ponyfill if you must support older ones."]}),e.jsx(i.Code,{children:e.jsx("pre",{children:String.raw`<main inert>…background frozen while dialog is open…</main>
<!-- Prefer native <dialog> for real modals; use inert on the rest. -->`})})]})]}),e.jsxs("section",{id:"focus",children:[e.jsxs("h2",{children:["Focus management with ",e.jsx("code",{children:"tabindex"})]}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Rules of thumb"}),e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"Prefer native focusable elements (button, a[href], input…)."}),e.jsxs("li",{children:[e.jsx("code",{children:'tabindex="0"'})," joins the natural order — good for custom widgets."]}),e.jsxs("li",{children:[e.jsx("code",{children:'tabindex="-1"'})," for programmatic focus (e.g., error containers)."]}),e.jsxs("li",{children:["Avoid ",e.jsx("em",{children:"positive"})," values; they create traps and chaos."]})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Programmatic focus"}),e.jsx(i.Code,{children:e.jsx("pre",{children:String.raw(n||(n=o([`<div id="msg" tabindex="-1" role="alert">Form errors here…</div>
<script>
  // After submit fails:
  document.getElementById('msg').focus();
<\/script>`])))})})]})]})]}),e.jsxs("section",{id:"editing",children:[e.jsxs("h2",{children:["Editable content with ",e.jsx("code",{children:"contenteditable"})]}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Do"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["Provide role+name: ",e.jsx("code",{children:'role="textbox"'})," and an accessible label."]}),e.jsx("li",{children:"Handle paste/formatting or sanitize input if rich text is allowed."}),e.jsx("li",{children:"Announce state changes (e.g., “saved”) to screen readers."})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Avoid"}),e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"Trapping Tab inside editing unless you also provide an escape."}),e.jsx("li",{children:"Relying on it for complex editors without keyboard support."}),e.jsx("li",{children:"Removing visible focus styles."})]})]})]}),e.jsx(i.Code,{role:"region","aria-label":"contenteditable example",children:e.jsx("pre",{children:String.raw`<div contenteditable="true" role="textbox" aria-label="Notes">
  Type here and press Escape to blur (if you add a key handler).
</div>`})})]}),e.jsxs("section",{id:"pitfalls",children:[e.jsx("h2",{children:"Pitfalls"}),e.jsxs("ul",{className:"badges",children:[e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Hiding required form help with ",e.jsx("code",{children:"aria-hidden"}),"."]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Using positive ",e.jsx("code",{children:"tabindex"})," values in many places."]}),e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Good"})," Prefer native semantics; sprinkle ",e.jsx("code",{children:"tabindex"})," only where needed."]})]})]}),e.jsxs("section",{id:"faq",children:[e.jsx("h2",{children:"FAQ"}),e.jsxs("details",{children:[e.jsxs("summary",{children:["Is ",e.jsx("code",{children:"hidden"})," the same as ",e.jsx("code",{children:'aria-hidden="true"'}),"?"]}),e.jsxs("div",{className:"ans",children:["No. ",e.jsx("code",{children:"hidden"})," removes the element from layout and a11y tree. ",e.jsx("code",{children:"aria-hidden"})," hides only from assistive tech and keeps it visible."]})]}),e.jsxs("details",{children:[e.jsx("summary",{children:"Can I make any element focusable?"}),e.jsxs("div",{className:"ans",children:["Yes with ",e.jsx("code",{children:'tabindex="0"'}),", but prefer real interactive elements for better semantics and keyboard behavior."]})]}),e.jsxs("details",{children:[e.jsxs("summary",{children:["Is ",e.jsx("code",{children:"contenteditable"})," good for rich text editors?"]}),e.jsx("div",{className:"ans",children:"It’s the foundation, but you’ll need keyboard handling, selection logic, and sanitization. Libraries build on top of it."})]})]}),e.jsxs("section",{id:"play",children:[e.jsx("h2",{children:"Try it live"}),e.jsx("p",{className:"lede",children:"Toggle visibility modes, practice focus movement, and create an accessible editable region. Autosaves to this lesson."}),e.jsx(c,{storageKey:"core-html:globals:hidden-tabindex-contenteditable:v1",initialHtml:p,height:680})]}),e.jsxs("nav",{className:"nextPrev","aria-label":"Lesson navigation",children:[e.jsx(d,{to:"/globals/id-class-style-title",className:"prev","aria-label":"Go to id, class, style, title",children:"← id, class, style, title"}),e.jsx(d,{to:"/globals/data-attributes",className:"next","aria-label":"Go to data-* hooks",children:"Next: data-* hooks →"})]}),e.jsx("div",{className:"backTop",children:e.jsx("a",{href:"#top",children:"Back to top ↑"})})]})}export{m as default};
