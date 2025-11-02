import React, { useEffect } from "react";
import { Styled } from "./styled";
import { NavLink } from "react-router-dom";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";

/**
 * Why semantics help JS
 * - Stable hooks: use native elements and data-* instead of brittle selectors
 * - Built-ins: focus, keyboard, form validation, labels, inputs, buttons
 * - Event delegation & .closest() with semantic targets
 * - A11y: Name/Role/Value already present → fewer ARIA band-aids
 * - Progressive enhancement: HTML works without JS; JS enhances
 * - Pitfalls: div soup, role misuse, nth-child selectors, click-divs
 * - Playground at the end
 */

const STARTER_HTML = String.raw`<!doctype html>
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
    </script>
  </body>
</html>`;

export default function SemanticsHelpJs() {
    useEffect(() => {
        document.title = "Scripting · Why semantics help JS";
    }, []);

    return (
        <Styled.Page>
            <header className="pageHeader" id="top">
                <h1>Why semantics help JavaScript</h1>
                <p className="lede">
                    Semantic HTML gives you stable hooks, built-in behavior, and accessible structures. That means less code,
                    fewer bugs, and happier users.
                </p>
            </header>

            <nav className="toc" aria-label="On this page">
                <a href="#stable-hooks">Stable hooks</a>
                <a href="#builtins">Built-in behaviors</a>
                <a href="#delegation">Event delegation</a>
                <a href="#forms">Forms with native power</a>
                <a href="#a11y">A11y for free</a>
                <a href="#pitfalls">Pitfalls</a>
                <a href="#play">Playground</a>
            </nav>

            <section id="stable-hooks">
                <h2>Stable hooks beat brittle selectors</h2>
                <div className="card">
                    <p>
                        Prefer selecting by element semantics and explicit <code>data-*</code> markers instead of structural hacks like{" "}
                        <code>:nth-child()</code>. When the DOM order changes, your JS shouldn’t explode.
                    </p>
                    <Styled.Code role="region" aria-label="Durable selector examples">
                        <pre>{String.raw`// 👍 Durable
const removeBtn = e.target.closest('button[data-action="remove"]');
const filterBtn = e.target.closest('button[data-filter]');
const item = document.querySelector('[data-item-id="123"]');

// 👎 Brittle
const thirdButton = document.querySelector('.toolbar > :nth-child(3)'); // breaks on DOM tweaks
const maybeButton = document.querySelector('.card div div'); // meaningless`}</pre>
                    </Styled.Code>
                </div>
            </section>

            <section id="builtins">
                <h2>Use built-ins instead of re-implementing them</h2>
                <ul className="bullets">
                    <li><strong>Buttons:</strong> Focus, keyboard activation, and ARIA role included.</li>
                    <li><strong>Inputs:</strong> Types (<code>email</code>, <code>url</code>, <code>number</code>), constraints, and validation UI.</li>
                    <li><strong>Labels:</strong> Click label to focus input automatically (<code>for/id</code> or wrap).</li>
                    <li><strong>Focus management:</strong> Tab order and <code>:focus-visible</code> styling exist by default.</li>
                </ul>
                <Styled.Code role="region" aria-label="Native validation example">
                    <pre>{String.raw`const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  if (!form.reportValidity()) { // prompts native messages
    e.preventDefault();
  }
});`}</pre>
                </Styled.Code>
            </section>

            <section id="delegation">
                <h2>Event delegation with <code>.closest()</code></h2>
                <p>
                    One listener on a stable ancestor can manage many dynamic children. Target semantics make matching easy.
                </p>
                <Styled.Code role="region" aria-label="Delegation example">
                    <pre>{String.raw`document.addEventListener('click', (e) => {
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
});`}</pre>
                </Styled.Code>
            </section>

            <section id="forms">
                <h2>Forms: let the platform carry weight</h2>
                <div className="grid2">
                    <div className="card">
                        <h3>FormData</h3>
                        <Styled.Code role="region" aria-label="FormData">
                            <pre>{String.raw`const data = Object.fromEntries(new FormData(form).entries());`}</pre>
                        </Styled.Code>
                    </div>
                    <div className="card">
                        <h3>Constraint validation</h3>
                        <Styled.Code role="region" aria-label="Constraint validation">
                            <pre>{String.raw`input.setCustomValidity('');
if (input.validity.typeMismatch) {
  input.setCustomValidity('Please enter a valid value');
}
input.reportValidity();`}</pre>
                        </Styled.Code>
                    </div>
                </div>
                <p className="note">If native behavior exists, prefer it. JS should enhance, not replace, the basics.</p>
            </section>

            <section id="a11y">
                <h2>A11y for free (mostly)</h2>
                <ul className="badges">
                    <li><span className="good">Good</span> Use native elements to get role + name + keyboard for free.</li>
                    <li><span className="good">Good</span> Add <code>aria-*</code> only when necessary (and valid).</li>
                    <li><span className="bad">Wrong</span> Div soup with click handlers and key listeners everywhere.</li>
                </ul>
            </section>

            <section id="pitfalls">
                <h2>Pitfalls to avoid</h2>
                <ul className="bullets">
                    <li>Click-divs instead of <code>&lt;button&gt;</code>.</li>
                    <li>Overusing <code>:nth-child()</code> / deeply nested structural selectors.</li>
                    <li>Inventing roles that disagree with the element’s native role.</li>
                    <li>Ignoring labels; hand-rolling focus behaviors.</li>
                </ul>
            </section>

            {/* LAST: Monaco playground */}
            <section id="play">
                <h2>Try it live</h2>
                <p className="lede">
                    Replace click-divs with buttons, swap brittle selectors for data hooks, and lean on native form features. Autosaves to this lesson.
                </p>
                <HtmlPlayground
                    storageKey="core-html:scripting:semantics-help-js:v1"
                    initialHtml={STARTER_HTML}
                    height={680}
                />
            </section>

            {/* Prev + Next */}
            <nav className="nextPrev" aria-label="Lesson navigation">
                <NavLink to="/scripting/progressive-enhancement" className="prev" aria-label="Go to Progressive enhancement">
                    ← Progressive enhancement
                </NavLink>
                <NavLink to="/pitfalls/void-elements" className="next" aria-label="Go to Void elements not self-closing">
                    Next: Void elements not self-closing →
                </NavLink>
            </nav>

            <div className="backTop"><a href="#top">Back to top ↑</a></div>
        </Styled.Page>
    );
}
