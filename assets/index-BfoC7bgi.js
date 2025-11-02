import{d as s,r as i,j as e,N as r}from"./index-CQ_xjxjH.js";import{H as o}from"./index-C8nEF-Cf.js";const a={Page:s.main`
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
            list-style: none;
        }
        summary::-webkit-details-marker {
            display: none;
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
    `},d=String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title><details> + <summary> — demo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui,-apple-system,Segoe UI,Roboto,sans-serif; }
      .grid { display: grid; gap: 14px; }
      .card { border: 1px solid #ccc; border-radius: 12px; padding: 12px; }
      .muted { color: #6b7280; }
      code { background: #f5f5f5; padding: 0 6px; border-radius: 6px; }

      /* Basic details styling */
      details {
        border: 1px solid #d1d5db;
        border-radius: 10px;
        background: #fafafa;
        padding: 8px 10px;
      }
      details + details { margin-top: 8px; }

      summary {
        cursor: pointer;
        list-style: none; /* Firefox marker removal */
        outline: none;
      }
      /* Hide default marker cross-browser */
      summary::-webkit-details-marker { display: none; }

      /* Custom marker */
      summary .marker {
        display: inline-block;
        inline-size: 1.2em;
        text-align: center;
        margin-right: 8px;
        transition: transform .2s ease;
      }
      details[open] summary .marker { transform: rotate(90deg); }

      /* Content wrapper for simple transition (max-height) */
      .content {
        overflow: clip;
        transition: grid-template-rows .25s ease, opacity .2s ease;
        display: grid;
        grid-template-rows: 0fr; /* collapsed */
        opacity: .9;
      }
      details[open] .content {
        grid-template-rows: 1fr; /* expanded */
        opacity: 1;
      }
      .content > div { min-height: 0; }

      .hint {
        font-size: 13px;
        color: #6b7280;
        border-left: 3px solid #2563eb;
        background: #eff6ff;
        padding: 8px 10px;
        border-radius: 8px;
      }

      .badges { display: grid; gap: 6px; list-style: none; padding: 0; }
      .bad, .good {
        display: inline-block; font-size: 12px; padding: 2px 8px; border-radius: 999px; border: 1px solid #ddd;
      }
      .bad { background: #2b1a1a; color: #ffb4b4; border-color: #553; }
      .good { background: #152417; color: #b6f3c1; border-color: #264a2b; }

      /* Focus styles for summary (important for keyboard users) */
      summary:focus-visible {
        outline: 2px solid #2563eb;
        border-radius: 6px;
      }
    </style>
  </head>
  <body>
    <main class="grid">
      <header>
        <h1>&lt;details&gt; + &lt;summary&gt;</h1>
        <p class="muted">Native disclosure widget for “show more / show less”, FAQ answers, expandable notes, and code reveals.</p>
      </header>

      <section class="card">
        <h2>Basic example</h2>
        <details>
          <summary><span class="marker">▸</span>What is the purpose of <code>&lt;details&gt;</code>?</summary>
          <div class="content"><div>
            <p>It provides a built-in, accessible toggle. The first child <code>&lt;summary&gt;</code> acts as the button. </p>
          </div></div>
        </details>
      </section>

      <section class="card">
        <h2>FAQ group</h2>
        <details>
          <summary><span class="marker">▸</span>Can I open it by default?</summary>
          <div class="content"><div>
            <p>Yes, add the boolean <code>open</code> attribute to <code>&lt;details open&gt;</code>.</p>
          </div></div>
        </details>
        <details open>
          <summary><span class="marker">▸</span>How do keyboard users toggle?</summary>
          <div class="content"><div>
            <p>Focus the <code>&lt;summary&gt;</code> and press <strong>Enter</strong> or <strong>Space</strong>. Screen readers announce expanded/collapsed state.</p>
          </div></div>
        </details>
        <details>
          <summary><span class="marker">▸</span>Can I link into an open panel?</summary>
          <div class="content"><div>
            <p>Give the panel content an <code>id</code> and link to <code>#that-id</code>. Consider opening the appropriate details on load with JS if needed.</p>
          </div></div>
        </details>
      </section>

      <section class="card">
        <h2>Nesting (legal but be thoughtful)</h2>
        <details>
          <summary><span class="marker">▸</span>Release Notes</summary>
          <div class="content"><div>
            <p>Each nested group has its own toggle state.</p>
            <details>
              <summary><span class="marker">▸</span>v1.2.0 — Highlights</summary>
              <div class="content"><div>
                <ul>
                  <li>Improved performance</li>
                  <li>New theming options</li>
                </ul>
              </div></div>
            </details>
          </div></div>
        </details>
      </section>

      <section class="card">
        <h2>Do / Don’t</h2>
        <ul class="badges">
          <li><span class="good">Good</span> Keep a clear, concise <strong>summary</strong> label.</li>
          <li><span class="good">Good</span> Use for optional details that don’t disrupt reading flow.</li>
          <li><span class="bad">Wrong</span> Replacing buttons/menus that have complex states or ARIA menus.</li>
          <li><span class="bad">Wrong</span> Putting <code>&lt;summary&gt;</code> anywhere except as the first child.</li>
        </ul>
      </section>

      <section class="card">
        <h2>Styling the marker</h2>
        <p class="hint">Hiding the default marker must remain accessible. Keep a visible affordance (icon/chevron) and keyboard focus styles.</p>
<pre><code>&lt;details&gt;
  &lt;summary&gt;&lt;span class="marker"&gt;▸&lt;/span&gt; Advanced options&lt;/summary&gt;
  &lt;div class="content"&gt;&lt;div&gt;...&lt;/div&gt;&lt;/div&gt;
&lt;/details&gt;</code></pre>
      </section>

      <footer class="muted">
        Tip: Prefer this native widget over custom JS “accordion” for simple disclosure patterns.
      </footer>
    </main>
  </body>
</html>`;function l(){return i.useEffect(()=>{document.title="Interactive · <details> + <summary>"},[]),e.jsxs(a.Page,{children:[e.jsxs("header",{className:"pageHeader",id:"top",children:[e.jsxs("h1",{children:["Native disclosure: ",e.jsx("code",{children:"<details>"})," + ",e.jsx("code",{children:"<summary>"})]}),e.jsx("p",{className:"lede",children:"Use for simple “show more” sections, FAQs, expandable notes, and code reveals. It’s keyboard-friendly, screen reader–aware, and needs no JavaScript for basic toggling."})]}),e.jsxs("nav",{className:"toc","aria-label":"On this page",children:[e.jsx("a",{href:"#model",children:"What & when"}),e.jsx("a",{href:"#markup",children:"Essential markup"}),e.jsx("a",{href:"#keyboard",children:"Keyboard & a11y"}),e.jsx("a",{href:"#styling",children:"Styling the marker"}),e.jsx("a",{href:"#pitfalls",children:"Pitfalls"}),e.jsx("a",{href:"#play",children:"Playground"})]}),e.jsxs("section",{id:"model",children:[e.jsx("h2",{children:"What & when"}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Disclosure widget:"})," Click or press Enter/Space on ",e.jsx("code",{children:"<summary>"})," to toggle."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Great for:"})," FAQs, “more info”, snippets, expandable tips."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Not for:"})," complex menus, multi-select accordions with advanced ARIA."]})]})})]}),e.jsxs("section",{id:"markup",children:[e.jsx("h2",{children:"Essential markup"}),e.jsx(a.Code,{role:"region","aria-label":"Essential markup",children:e.jsx("pre",{children:String.raw`<details>
  <summary>Why use details?</summary>
  <p>Because it’s native, accessible, and needs no JS for toggling.</p>
</details>`})}),e.jsxs("p",{className:"note",children:[e.jsx("code",{children:"<summary>"})," should be the first child of ",e.jsx("code",{children:"<details>"}),". Add the ",e.jsx("code",{children:"open"})," attribute for expanded by default."]})]}),e.jsxs("section",{id:"keyboard",children:[e.jsx("h2",{children:"Keyboard & accessibility"}),e.jsxs("ul",{className:"badges",children:[e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Good"})," Summary is focusable; Enter/Space toggles."]}),e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Good"})," Screen readers announce expanded/collapsed state."]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Hiding focus rings; always keep ",e.jsx("code",{children:":focus-visible"})," styling."]})]})]}),e.jsxs("section",{id:"styling",children:[e.jsx("h2",{children:"Styling the marker"}),e.jsx(a.Code,{role:"region","aria-label":"Marker CSS",children:e.jsx("pre",{children:String.raw`summary::-webkit-details-marker { display: none; }
summary { list-style: none; } /* Firefox */

summary .marker { inline-size: 1.2em; display: inline-block; transition: transform .2s; }
details[open] summary .marker { transform: rotate(90deg); }`})}),e.jsx("p",{className:"note",children:"If you hide the default triangle, provide your own visible affordance and retain keyboard focus styles."})]}),e.jsxs("section",{id:"pitfalls",children:[e.jsx("h2",{children:"Pitfalls"}),e.jsxs("ul",{className:"badges",children:[e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Putting ",e.jsx("code",{children:"<summary>"})," after other content."]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Using it for navigation menus that need complex ARIA."]}),e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Good"})," Simple expand/collapse content blocks."]})]})]}),e.jsxs("section",{id:"play",children:[e.jsx("h2",{children:"Try it live"}),e.jsxs("p",{className:"lede",children:["Edit the examples, swap markers, or experiment with the ",e.jsx("code",{children:"open"})," attribute. Autosaves to this lesson."]}),e.jsx(o,{storageKey:"core-html:interactive:details-summary:v1",initialHtml:d,height:640})]}),e.jsxs("nav",{className:"nextPrev","aria-label":"Lesson navigation",children:[e.jsx(r,{to:"/interactive/button-types",className:"prev","aria-label":"Go to Button types",children:"← Button types"}),e.jsx(r,{to:"/interactive/dialog-open",className:"next","aria-label":"Go to Dialog basics",children:"Next: Dialog basics →"})]}),e.jsx("div",{className:"backTop",children:e.jsx("a",{href:"#top",children:"Back to top ↑"})})]})}export{l as default};
