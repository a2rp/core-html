import{d as o,r as l,j as e,N as i}from"./index-CQ_xjxjH.js";import{H as d}from"./index-C8nEF-Cf.js";const t={Page:o.main`
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
    `,Code:o.div`
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
    `};var r=Object.freeze,c=Object.defineProperty,p=(a,s)=>r(c(a,"raw",{value:r(s||a.slice())})),n;const u=String.raw(n||(n=p([`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Why semantics help JS — playground</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui,-apple-system,Segoe UI,Roboto,sans-serif; }
      .grid { display: grid; gap: 16px; }
      .card { border: 1px solid #ccc; border-radius: 12px; padding: 12px; }
      .row { display: flex; gap: 8px; flex-wrap: wrap; }
      .todo { display: grid; gap: 8px; }
      .todo li { display: flex; align-items: center; gap: 8px; }
      .muted { color: #6b7280; }
      .kbd { font: 12px/1 ui-monospace, Menlo, Consolas, monospace; border:1px solid #bbb; border-radius:6px; padding:2px 6px; }
      .hint { background: color-mix(in oklab, #0ea5e9, transparent 92%); border: 1px solid #7dc5ea; padding: 8px; border-radius: 10px; }
      input[type="text"] { padding: 8px 10px; border:1px solid #bbb; border-radius: 10px; }
      button { padding: 8px 12px; border-radius: 10px; border:1px solid #bbb; background:#f7f7f7; }
      button:focus-visible { outline: 3px solid #60a5fa; }
    </style>
  </head>
  <body>
    <main class="grid">
      <header>
        <h1>Why semantics help JS</h1>
        <p class="muted">Use elements that already do the right thing. Then your JS gets simpler, smaller, and sturdier.</p>
      </header>

      <!-- 1) Buttons, not click-divs -->
      <section class="card" id="actions">
        <h2>Actions use <button>, not <code>div</code></h2>
        <div class="row">
          <!-- Good -->
          <button type="button" data-action="like">👍 Like</button>
          <button type="button" data-action="share">🔗 Share</button>

          <!-- Bad (for comparison): click-divs -->
          <div class="fake-button" data-action="like" tabindex="0" role="button" aria-label="Like" style="padding:8px 12px;border:1px dashed #aaa;border-radius:10px;">
            Div pretending to be a button
          </div>
        </div>
        <p class="hint">Native <code>&lt;button&gt;</code> is focusable, keyboard-activatable (Enter/Space), and advertises role/name automatically.</p>
      </section>

      <!-- 2) Event delegation with .closest() and stable hooks -->
      <section class="card" id="delegation">
        <h2>Event delegation with semantic targets</h2>
        <ul class="todo" id="todo">
          <li>
            <input type="checkbox" id="t1" />
            <label for="t1">Read docs</label>
            <button type="button" data-action="remove" aria-label="Remove task">✖</button>
          </li>
          <li>
            <input type="checkbox" id="t2" />
            <label for="t2">Refactor code</label>
            <button type="button" data-action="remove" aria-label="Remove task">✖</button>
          </li>
        </ul>
        <div class="row">
          <input id="newTask" name="newTask" type="text" placeholder="New task" autocomplete="off" />
          <button type="button" id="addBtn" data-action="add">Add</button>
        </div>
        <p class="muted">Try keyboard: <span class="kbd">Tab</span> to the buttons, <span class="kbd">Space</span>/<span class="kbd">Enter</span> to activate.</p>
      </section>

      <!-- 3) Forms: let the browser help you -->
      <section class="card">
        <h2>Let forms do form things</h2>
        <form id="signup" class="row">
          <label>
            Email
            <input type="email" name="email" required autocomplete="email" />
          </label>
          <label>
            Password
            <input type="password" name="password" required minlength="6" autocomplete="new-password" />
          </label>
          <button type="submit">Create account</button>
        </form>
        <p class="hint">Native validation, labels, and input types reduce JS. Use <code>reportValidity()</code> when you need to prompt.</p>
      </section>

      <!-- 4) Data attributes as durable hooks -->
      <section class="card" id="dataHooks">
        <h2>Use <code>data-*</code> for stable hooks</h2>
        <div class="row">
          <button type="button" data-filter="all">All</button>
          <button type="button" data-filter="open">Open</button>
          <button type="button" data-filter="done">Done</button>
        </div>
        <ul class="todo" id="filterList">
          <li data-state="open"><input type="checkbox" id="f1"><label for="f1">Write tests</label></li>
          <li data-state="done"><input type="checkbox" id="f2" checked><label for="f2">Ship patch</label></li>
        </ul>
      </section>

      <footer class="muted">
        Tip: Prefer selectors like <code>button[data-action="remove"]</code> or <code>[data-filter]</code> over brittle <code>:nth-child()</code>.
      </footer>
    </main>

    <script>
      // 1) Single listener, semantic targets, .closest()
      document.addEventListener("click", (e) => {
        const removeBtn = e.target.closest('button[data-action="remove"]');
        if (removeBtn) {
          const li = removeBtn.closest("li");
          if (li) li.remove();
          return;
        }
        const like = e.target.closest('button[data-action="like"], [role="button"][data-action="like"]');
        if (like) {
          alert("Liked!");
          return;
        }
        const share = e.target.closest('button[data-action="share"]');
        if (share) {
          alert("Shared!");
          return;
        }
      });

      // 2) Add task with minimal JS thanks to native form bits
      const ul = document.getElementById("todo");
      const addBtn = document.getElementById("addBtn");
      const input = document.getElementById("newTask");
      addBtn?.addEventListener("click", () => {
        const text = (input.value || "").trim();
        if (!text) return;
        const id = "t" + Math.random().toString(36).slice(2, 7);
        const li = document.createElement("li");
        li.innerHTML = \`
          <input type="checkbox" id="\${id}" />
          <label for="\${id}"></label>
          <button type="button" data-action="remove" aria-label="Remove task">✖</button>
        \`;
        li.querySelector("label").textContent = text;
        ul.appendChild(li);
        input.value = "";
        input.focus();
      });

      // 3) Form submission: use FormData, trust required/types
      document.getElementById("signup")?.addEventListener("submit", (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (!form.reportValidity()) return;
        const data = Object.fromEntries(new FormData(form).entries());
        console.log("Signup payload:", data);
        alert("Pretend signup: " + JSON.stringify(data));
      });

      // 4) Filtering with data attributes
      document.getElementById("dataHooks")?.addEventListener("click", (e) => {
        const btn = e.target.closest("button[data-filter]");
        if (!btn) return;
        const filter = btn.getAttribute("data-filter");
        const items = document.querySelectorAll("#filterList > li");
        items.forEach((li) => {
          const state = li.getAttribute("data-state");
          li.style.display = (filter === "all" || filter === state) ? "" : "none";
        });
      });
    <\/script>
  </body>
</html>`],[`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Why semantics help JS — playground</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui,-apple-system,Segoe UI,Roboto,sans-serif; }
      .grid { display: grid; gap: 16px; }
      .card { border: 1px solid #ccc; border-radius: 12px; padding: 12px; }
      .row { display: flex; gap: 8px; flex-wrap: wrap; }
      .todo { display: grid; gap: 8px; }
      .todo li { display: flex; align-items: center; gap: 8px; }
      .muted { color: #6b7280; }
      .kbd { font: 12px/1 ui-monospace, Menlo, Consolas, monospace; border:1px solid #bbb; border-radius:6px; padding:2px 6px; }
      .hint { background: color-mix(in oklab, #0ea5e9, transparent 92%); border: 1px solid #7dc5ea; padding: 8px; border-radius: 10px; }
      input[type="text"] { padding: 8px 10px; border:1px solid #bbb; border-radius: 10px; }
      button { padding: 8px 12px; border-radius: 10px; border:1px solid #bbb; background:#f7f7f7; }
      button:focus-visible { outline: 3px solid #60a5fa; }
    </style>
  </head>
  <body>
    <main class="grid">
      <header>
        <h1>Why semantics help JS</h1>
        <p class="muted">Use elements that already do the right thing. Then your JS gets simpler, smaller, and sturdier.</p>
      </header>

      <!-- 1) Buttons, not click-divs -->
      <section class="card" id="actions">
        <h2>Actions use <button>, not <code>div</code></h2>
        <div class="row">
          <!-- Good -->
          <button type="button" data-action="like">👍 Like</button>
          <button type="button" data-action="share">🔗 Share</button>

          <!-- Bad (for comparison): click-divs -->
          <div class="fake-button" data-action="like" tabindex="0" role="button" aria-label="Like" style="padding:8px 12px;border:1px dashed #aaa;border-radius:10px;">
            Div pretending to be a button
          </div>
        </div>
        <p class="hint">Native <code>&lt;button&gt;</code> is focusable, keyboard-activatable (Enter/Space), and advertises role/name automatically.</p>
      </section>

      <!-- 2) Event delegation with .closest() and stable hooks -->
      <section class="card" id="delegation">
        <h2>Event delegation with semantic targets</h2>
        <ul class="todo" id="todo">
          <li>
            <input type="checkbox" id="t1" />
            <label for="t1">Read docs</label>
            <button type="button" data-action="remove" aria-label="Remove task">✖</button>
          </li>
          <li>
            <input type="checkbox" id="t2" />
            <label for="t2">Refactor code</label>
            <button type="button" data-action="remove" aria-label="Remove task">✖</button>
          </li>
        </ul>
        <div class="row">
          <input id="newTask" name="newTask" type="text" placeholder="New task" autocomplete="off" />
          <button type="button" id="addBtn" data-action="add">Add</button>
        </div>
        <p class="muted">Try keyboard: <span class="kbd">Tab</span> to the buttons, <span class="kbd">Space</span>/<span class="kbd">Enter</span> to activate.</p>
      </section>

      <!-- 3) Forms: let the browser help you -->
      <section class="card">
        <h2>Let forms do form things</h2>
        <form id="signup" class="row">
          <label>
            Email
            <input type="email" name="email" required autocomplete="email" />
          </label>
          <label>
            Password
            <input type="password" name="password" required minlength="6" autocomplete="new-password" />
          </label>
          <button type="submit">Create account</button>
        </form>
        <p class="hint">Native validation, labels, and input types reduce JS. Use <code>reportValidity()</code> when you need to prompt.</p>
      </section>

      <!-- 4) Data attributes as durable hooks -->
      <section class="card" id="dataHooks">
        <h2>Use <code>data-*</code> for stable hooks</h2>
        <div class="row">
          <button type="button" data-filter="all">All</button>
          <button type="button" data-filter="open">Open</button>
          <button type="button" data-filter="done">Done</button>
        </div>
        <ul class="todo" id="filterList">
          <li data-state="open"><input type="checkbox" id="f1"><label for="f1">Write tests</label></li>
          <li data-state="done"><input type="checkbox" id="f2" checked><label for="f2">Ship patch</label></li>
        </ul>
      </section>

      <footer class="muted">
        Tip: Prefer selectors like <code>button[data-action="remove"]</code> or <code>[data-filter]</code> over brittle <code>:nth-child()</code>.
      </footer>
    </main>

    <script>
      // 1) Single listener, semantic targets, .closest()
      document.addEventListener("click", (e) => {
        const removeBtn = e.target.closest('button[data-action="remove"]');
        if (removeBtn) {
          const li = removeBtn.closest("li");
          if (li) li.remove();
          return;
        }
        const like = e.target.closest('button[data-action="like"], [role="button"][data-action="like"]');
        if (like) {
          alert("Liked!");
          return;
        }
        const share = e.target.closest('button[data-action="share"]');
        if (share) {
          alert("Shared!");
          return;
        }
      });

      // 2) Add task with minimal JS thanks to native form bits
      const ul = document.getElementById("todo");
      const addBtn = document.getElementById("addBtn");
      const input = document.getElementById("newTask");
      addBtn?.addEventListener("click", () => {
        const text = (input.value || "").trim();
        if (!text) return;
        const id = "t" + Math.random().toString(36).slice(2, 7);
        const li = document.createElement("li");
        li.innerHTML = \\\`
          <input type="checkbox" id="\\\${id}" />
          <label for="\\\${id}"></label>
          <button type="button" data-action="remove" aria-label="Remove task">✖</button>
        \\\`;
        li.querySelector("label").textContent = text;
        ul.appendChild(li);
        input.value = "";
        input.focus();
      });

      // 3) Form submission: use FormData, trust required/types
      document.getElementById("signup")?.addEventListener("submit", (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (!form.reportValidity()) return;
        const data = Object.fromEntries(new FormData(form).entries());
        console.log("Signup payload:", data);
        alert("Pretend signup: " + JSON.stringify(data));
      });

      // 4) Filtering with data attributes
      document.getElementById("dataHooks")?.addEventListener("click", (e) => {
        const btn = e.target.closest("button[data-filter]");
        if (!btn) return;
        const filter = btn.getAttribute("data-filter");
        const items = document.querySelectorAll("#filterList > li");
        items.forEach((li) => {
          const state = li.getAttribute("data-state");
          li.style.display = (filter === "all" || filter === state) ? "" : "none";
        });
      });
    <\/script>
  </body>
</html>`])));function m(){return l.useEffect(()=>{document.title="Scripting · Why semantics help JS"},[]),e.jsxs(t.Page,{children:[e.jsxs("header",{className:"pageHeader",id:"top",children:[e.jsx("h1",{children:"Why semantics help JavaScript"}),e.jsx("p",{className:"lede",children:"Semantic HTML gives you stable hooks, built-in behavior, and accessible structures. That means less code, fewer bugs, and happier users."})]}),e.jsxs("nav",{className:"toc","aria-label":"On this page",children:[e.jsx("a",{href:"#stable-hooks",children:"Stable hooks"}),e.jsx("a",{href:"#builtins",children:"Built-in behaviors"}),e.jsx("a",{href:"#delegation",children:"Event delegation"}),e.jsx("a",{href:"#forms",children:"Forms with native power"}),e.jsx("a",{href:"#a11y",children:"A11y for free"}),e.jsx("a",{href:"#pitfalls",children:"Pitfalls"}),e.jsx("a",{href:"#play",children:"Playground"})]}),e.jsxs("section",{id:"stable-hooks",children:[e.jsx("h2",{children:"Stable hooks beat brittle selectors"}),e.jsxs("div",{className:"card",children:[e.jsxs("p",{children:["Prefer selecting by element semantics and explicit ",e.jsx("code",{children:"data-*"})," markers instead of structural hacks like"," ",e.jsx("code",{children:":nth-child()"}),". When the DOM order changes, your JS shouldn’t explode."]}),e.jsx(t.Code,{role:"region","aria-label":"Durable selector examples",children:e.jsx("pre",{children:String.raw`// 👍 Durable
const removeBtn = e.target.closest('button[data-action="remove"]');
const filterBtn = e.target.closest('button[data-filter]');
const item = document.querySelector('[data-item-id="123"]');

// 👎 Brittle
const thirdButton = document.querySelector('.toolbar > :nth-child(3)'); // breaks on DOM tweaks
const maybeButton = document.querySelector('.card div div'); // meaningless`})})]})]}),e.jsxs("section",{id:"builtins",children:[e.jsx("h2",{children:"Use built-ins instead of re-implementing them"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Buttons:"})," Focus, keyboard activation, and ARIA role included."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Inputs:"})," Types (",e.jsx("code",{children:"email"}),", ",e.jsx("code",{children:"url"}),", ",e.jsx("code",{children:"number"}),"), constraints, and validation UI."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Labels:"})," Click label to focus input automatically (",e.jsx("code",{children:"for/id"})," or wrap)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Focus management:"})," Tab order and ",e.jsx("code",{children:":focus-visible"})," styling exist by default."]})]}),e.jsx(t.Code,{role:"region","aria-label":"Native validation example",children:e.jsx("pre",{children:String.raw`const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  if (!form.reportValidity()) { // prompts native messages
    e.preventDefault();
  }
});`})})]}),e.jsxs("section",{id:"delegation",children:[e.jsxs("h2",{children:["Event delegation with ",e.jsx("code",{children:".closest()"})]}),e.jsx("p",{children:"One listener on a stable ancestor can manage many dynamic children. Target semantics make matching easy."}),e.jsx(t.Code,{role:"region","aria-label":"Delegation example",children:e.jsx("pre",{children:String.raw`document.addEventListener('click', (e) => {
  const actionBtn = e.target.closest('button[data-action]');
  if (!actionBtn) return;

  switch (actionBtn.dataset.action) {
    case 'remove':
      actionBtn.closest('li')?.remove();
      break;
    case 'like':
      // ...
      break;
  }
});`})})]}),e.jsxs("section",{id:"forms",children:[e.jsx("h2",{children:"Forms: let the platform carry weight"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"FormData"}),e.jsx(t.Code,{role:"region","aria-label":"FormData",children:e.jsx("pre",{children:String.raw`const data = Object.fromEntries(new FormData(form).entries());`})})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Constraint validation"}),e.jsx(t.Code,{role:"region","aria-label":"Constraint validation",children:e.jsx("pre",{children:String.raw`input.setCustomValidity('');
if (input.validity.typeMismatch) {
  input.setCustomValidity('Please enter a valid value');
}
input.reportValidity();`})})]})]}),e.jsx("p",{className:"note",children:"If native behavior exists, prefer it. JS should enhance, not replace, the basics."})]}),e.jsxs("section",{id:"a11y",children:[e.jsx("h2",{children:"A11y for free (mostly)"}),e.jsxs("ul",{className:"badges",children:[e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Good"})," Use native elements to get role + name + keyboard for free."]}),e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Good"})," Add ",e.jsx("code",{children:"aria-*"})," only when necessary (and valid)."]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Div soup with click handlers and key listeners everywhere."]})]})]}),e.jsxs("section",{id:"pitfalls",children:[e.jsx("h2",{children:"Pitfalls to avoid"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["Click-divs instead of ",e.jsx("code",{children:"<button>"}),"."]}),e.jsxs("li",{children:["Overusing ",e.jsx("code",{children:":nth-child()"})," / deeply nested structural selectors."]}),e.jsx("li",{children:"Inventing roles that disagree with the element’s native role."}),e.jsx("li",{children:"Ignoring labels; hand-rolling focus behaviors."})]})]}),e.jsxs("section",{id:"play",children:[e.jsx("h2",{children:"Try it live"}),e.jsx("p",{className:"lede",children:"Replace click-divs with buttons, swap brittle selectors for data hooks, and lean on native form features. Autosaves to this lesson."}),e.jsx(d,{storageKey:"core-html:scripting:semantics-help-js:v1",initialHtml:u,height:680})]}),e.jsxs("nav",{className:"nextPrev","aria-label":"Lesson navigation",children:[e.jsx(i,{to:"/scripting/progressive-enhancement",className:"prev","aria-label":"Go to Progressive enhancement",children:"← Progressive enhancement"}),e.jsx(i,{to:"/pitfalls/void-elements",className:"next","aria-label":"Go to Void elements not self-closing",children:"Next: Void elements not self-closing →"})]}),e.jsx("div",{className:"backTop",children:e.jsx("a",{href:"#top",children:"Back to top ↑"})})]})}export{m as default};
