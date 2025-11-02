import{d as s,r as d,j as e,N as r}from"./index-D3QNcmKe.js";import{H as n}from"./index-CAjihRuM.js";const a={Page:s.main`
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
    `};var t=Object.freeze,o=Object.defineProperty,c=(i,h)=>t(o(i,"raw",{value:t(i.slice())})),l;const p=String.raw(l||(l=c([`<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Name/Role/Value — playground</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style>
    :root { color-scheme: light dark; }
    * { box-sizing: border-box; }
    body { margin: 0; padding: 24px; font: 14px/1.6 system-ui,-apple-system,Segoe UI,Roboto,sans-serif; }
    .grid { display: grid; gap: 16px; }
    .card { border: 1px solid #ccc; border-radius: 12px; padding: 12px; }
    .good { background: color-mix(in oklab, #16a34a, transparent 92%); border-color:#8ed09b; }
    .bad  { background: color-mix(in oklab, #dc2626, transparent 92%); border-color:#f2a6a6; }
    .muted { color: #6b7280; }
    .row { display: flex; gap: 12px; align-items: center; flex-wrap: wrap; }
    .pill { display:inline-block; border:1px solid #bbb; border-radius:999px; padding:2px 8px; font-size:12px; }
    button, input, a { font: inherit; }
    .spacer { height: 1px; background: #ddd; margin: 8px 0; opacity: .4; }
  </style>
</head>
<body>
  <main class="grid">
    <header>
      <h1>Name / Role / Value</h1>
      <p class="muted">Explore how native elements expose accessible name, role, and state/value. Compare with ARIA-shaped DIVs.</p>
    </header>

    <section class="card good">
      <h2>Native controls (recommended)</h2>
      <div class="row">
        <button id="likeBtn" aria-pressed="false">Like</button>
        <label class="pill" for="email">Label ties name →</label>
        <input id="email" type="email" placeholder="name@example.com" required />
        <a href="#target">Go to target</a>
      </div>
      <p class="muted">Screen readers get name (label/placeholder fallback), role (button/link/textbox), and state (<code>required</code>, <code>aria-pressed</code>) for free.</p>
    </section>

    <section class="card bad">
      <h2>DIVs with missing NRV (avoid)</h2>
      <div class="row">
        <div class="fakeBtn">Like</div>
        <div class="inputLike" contenteditable="true"></div>
        <div onclick="location.href='#target'">Go (no role)</div>
      </div>
      <p class="muted">These have no semantic role; assistive tech may just announce “group” or nothing meaningful.</p>
    </section>

    <section class="card">
      <h2>Fixing non-native (if you must)</h2>
      <div class="row">
        <div role="button" tabindex="0" aria-pressed="false" aria-labelledby="likeLbl" id="likeDiv"></div>
        <span id="likeLbl">Like</span>

        <div class="spacer" style="width:100%"></div>

        <div role="link" tabindex="0" aria-label="Go to target section" onclick="location.href='#target'">Go</div>
      </div>
      <p class="muted">If non-native is unavoidable, add role, focusability, keyboard handlers, and states via ARIA. Still worse than using real elements.</p>
    </section>

    <section class="card">
      <h2>Checkbox vs ARIA switch</h2>
      <div class="row">
        <label><input id="newsCheck" type="checkbox" /> Email me news</label>
        <div id="switch" role="switch" aria-checked="false" tabindex="0" class="pill">Switch: off</div>
      </div>
      <p class="muted">Both expose binary state. Native checkbox is simpler and robust; a custom switch must manage keyboard and state.</p>
    </section>

    <section class="card">
      <h2 id="target">Try toggling with keyboard</h2>
      <ul>
        <li><span class="pill">Space/Enter</span> should activate buttons, links (Enter), checkboxes (Space).</li>
        <li>Custom roles must implement the same keys to be accessible.</li>
      </ul>
    </section>
  </main>

  <script>
    // Native button toggles pressed state
    document.getElementById('likeBtn')?.addEventListener('click', (e) => {
      const b = e.currentTarget;
      const next = b.getAttribute('aria-pressed') !== 'true';
      b.setAttribute('aria-pressed', String(next));
      b.textContent = next ? 'Liked' : 'Like';
    });

    // Custom "button"
    const likeDiv = document.getElementById('likeDiv');
    function toggleLikeDiv() {
      const next = likeDiv.getAttribute('aria-pressed') !== 'true';
      likeDiv.setAttribute('aria-pressed', String(next));
      likeDiv.textContent = next ? 'Liked' : '';
    }
    likeDiv?.addEventListener('click', toggleLikeDiv);
    likeDiv?.addEventListener('keydown', (e) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        toggleLikeDiv();
      }
    });

    // ARIA switch
    const sw = document.getElementById('switch');
    function toggleSwitch() {
      const next = sw.getAttribute('aria-checked') !== 'true';
      sw.setAttribute('aria-checked', String(next));
      sw.textContent = 'Switch: ' + (next ? 'on' : 'off');
    }
    sw?.addEventListener('click', toggleSwitch);
    sw?.addEventListener('keydown', (e) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        toggleSwitch();
      }
    });
  <\/script>
</body>
</html>`])));function m(){return d.useEffect(()=>{document.title="A11y · Name / Role / Value"},[]),e.jsxs(a.Page,{children:[e.jsxs("header",{className:"pageHeader",id:"top",children:[e.jsx("h1",{children:"Name / Role / Value"}),e.jsxs("p",{className:"lede",children:["Accessible UI rests on three pillars: a clear ",e.jsx("strong",{children:"Name"}),", a truthful"," ",e.jsx("strong",{children:"Role"}),", and an accurate ",e.jsx("strong",{children:"Value/State"}),". Native HTML elements provide these by default; ARIA is for gaps, not for glamour."]})]}),e.jsxs("nav",{className:"toc","aria-label":"On this page",children:[e.jsx("a",{href:"#what",children:"What are Name / Role / Value?"}),e.jsx("a",{href:"#native",children:"Why native wins"}),e.jsx("a",{href:"#aria",children:"When ARIA is appropriate"}),e.jsx("a",{href:"#patterns",children:"Common patterns"}),e.jsx("a",{href:"#pitfalls",children:"Pitfalls"}),e.jsx("a",{href:"#play",children:"Playground"})]}),e.jsxs("section",{id:"what",children:[e.jsx("h2",{children:"What are Name / Role / Value?"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Name"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["What gets announced: label text, ",e.jsx("code",{children:"alt"}),", ",e.jsx("code",{children:"aria-label"}),", or ",e.jsx("code",{children:"aria-labelledby"}),"."]}),e.jsxs("li",{children:["Examples: button text, ",e.jsx("code",{children:"<label for>"})," text, image ",e.jsx("code",{children:"alt"}),"."]})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Role"}),e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"The widget/region type: button, link, checkbox, textbox, navigation, main."}),e.jsx("li",{children:"Native elements imply roles automatically."})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Value / State / Props"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["Dynamic info: ",e.jsx("code",{children:"checked"}),", ",e.jsx("code",{children:"required"}),", ",e.jsx("code",{children:"disabled"}),", ",e.jsx("code",{children:"expanded"}),", ",e.jsx("code",{children:"pressed"}),"."]}),e.jsx("li",{children:"Communicated via attributes, reflected in the accessibility tree."})]})]})]})]}),e.jsxs("section",{id:"native",children:[e.jsx("h2",{children:"Why prefer native elements?"}),e.jsxs("ul",{className:"badges",children:[e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Robust"})," Cross-browser, cross-AT consistency out of the box."]}),e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Keyboard-ready"})," Focus, Space/Enter handling is built-in."]}),e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Less code"})," No custom ARIA/state synchronization to maintain."]})]}),e.jsx(a.Code,{"aria-label":"Example of native NRV",children:e.jsx("pre",{children:String.raw`<label for="q">Search</label>
<input id="q" type="search" placeholder="Keywords" required />`})})]}),e.jsxs("section",{id:"aria",children:[e.jsx("h2",{children:"When ARIA makes sense"}),e.jsx("p",{className:"note",children:"Use ARIA only when you can’t use a native element or need to expose missing state. Keep keyboard support and states in sync with visuals."}),e.jsx(a.Code,{"aria-label":"ARIA role and state",children:e.jsx("pre",{children:String.raw`<div role="button" tabindex="0" aria-pressed="false" aria-labelledby="save-lbl" id="save">
  <span id="save-lbl">Save</span>
</div>`})})]}),e.jsxs("section",{id:"patterns",children:[e.jsx("h2",{children:"Common patterns"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Button that toggles"}),e.jsx("pre",{children:String.raw`<button aria-pressed="false">Mute</button>`}),e.jsx("p",{className:"muted",children:"Name = “Mute”; Role = button; Value = pressed true/false."})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Disclosure + region"}),e.jsx("pre",{children:String.raw`<button aria-expanded="false" aria-controls="faq">FAQ</button>
<div id="faq" hidden>…</div>`}),e.jsxs("p",{className:"muted",children:["Keep ",e.jsx("code",{children:"aria-expanded"})," and ",e.jsx("code",{children:"hidden"})," synchronized."]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Described-by extra context"}),e.jsx("pre",{children:String.raw`<label for="age">Age</label>
<input id="age" type="number" aria-describedby="ageHint">
<div id="ageHint">You must be 18+.</div>`}),e.jsxs("p",{className:"muted",children:["Name via label; extra help via ",e.jsx("code",{children:"aria-describedby"}),"."]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Images"}),e.jsx("pre",{children:String.raw`<img src="team.jpg" alt="Team at hackathon" width="600" height="400">`}),e.jsxs("p",{className:"muted",children:["Informative images need helpful ",e.jsx("code",{children:"alt"}),"; decorative ones can use empty ",e.jsx("code",{children:'alt=""'}),"."]})]})]})]}),e.jsxs("section",{id:"pitfalls",children:[e.jsx("h2",{children:"Pitfalls"}),e.jsxs("ul",{className:"badges",children:[e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Clickable ",e.jsx("code",{children:"<div>"})," without role/tabindex/keyboard handlers."]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," ARIA contradicts reality (e.g., ",e.jsx("code",{children:'aria-expanded="true"'})," while content is hidden)."]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Using ",e.jsx("code",{children:"aria-label"})," when a visible ",e.jsx("code",{children:"<label>"})," is possible."]}),e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Good"})," Prefer native; use ARIA as a last-mile patch."]})]})]}),e.jsxs("section",{id:"play",children:[e.jsx("h2",{children:"Try it live"}),e.jsx("p",{className:"lede",children:"Replace non-semantic controls with native ones, wire proper labels, and synchronize ARIA states. Use keyboard to verify Space/Enter behavior."}),e.jsx(n,{storageKey:"core-html:a11y:name-role-value:v1",initialHtml:p,height:680})]}),e.jsxs("nav",{className:"nextPrev","aria-label":"Lesson navigation",children:[e.jsx(r,{to:"/a11y/form-labels-errors",className:"prev","aria-label":"Go to Form labels & errors",children:"← Form labels & errors"}),e.jsx(r,{to:"/a11y/focus-order-outline",className:"next","aria-label":"Go to Focus order & outline",children:"Next: Focus order & outline →"})]}),e.jsx("div",{className:"backTop",children:e.jsx("a",{href:"#top",children:"Back to top ↑"})})]})}export{m as default};
