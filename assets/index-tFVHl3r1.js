import{d as s,r as i,j as e,N as r}from"./index-CQ_xjxjH.js";import{H as t}from"./index-C8nEF-Cf.js";const a={Page:s.main`
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

        .muted {
            color: var(--text-muted);
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
    <!-- ✅ Keep charset first inside <head> -->
    <meta charset="utf-8" />

    <title>charset & viewport — recap</title>

    <!-- Minimal, good default viewport -->
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <meta name="description" content="Recap of HTML charset and viewport basics with live examples." />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui, -apple-system, Segoe UI, Roboto, sans-serif; }
      .grid { display: grid; gap: 14px; }
      .card { border: 1px solid #ccc; border-radius: 12px; padding: 12px; background: color-mix(in oklab, canvas, canvasText 3%); }
      .muted { color: #6b7280; }
      code { background: color-mix(in oklab, canvasText, transparent 92%); padding: 0 6px; border-radius: 6px; }
      .ex { border: 1px dashed #aaa; padding: 10px; border-radius: 10px; margin-top: 8px; }
      .bad { background: color-mix(in oklab, #dc2626, transparent 90%); border-color: #ef9a9a; }
      .good { background: color-mix(in oklab, #16a34a, transparent 90%); border-color: #a7f3d0; }
    </style>
  </head>
  <body>
    <main class="grid">
      <header>
        <h1>charset & viewport — recap</h1>
        <p class="muted">Correct encoding avoids mojibake (garbled text). Viewport sets initial layout scale on mobile.</p>
      </header>

      <section class="card good">
        <h2>UTF-8 everywhere</h2>
        <p>Use <code>&lt;meta charset="utf-8"&gt;</code> as the first thing inside <code>&lt;head&gt;</code>. This lets the parser decode bytes correctly from the start.</p>
        <div class="ex">
          Examples to test:
          <ul>
            <li>Emoji: 😀🔥✨</li>
            <li>Hindi: नमस्ते दुनिया</li>
            <li>Bangla: স্বাগতম</li>
            <li>Math: ∑, π, √, ≈</li>
          </ul>
        </div>
      </section>

      <section class="card">
        <h2>Viewport basics</h2>
        <p>Use a simple, inclusive default:</p>
        <pre class="ex"><code>&lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;</code></pre>
        <p class="muted">This maps CSS pixels to device width and sets a sane initial zoom.</p>
      </section>

      <section class="card bad">
        <h2>Common mistakes</h2>
        <ul>
          <li>Placing <code>charset</code> after styles/scripts — parser already guessed by then.</li>
          <li>Forgetting <code>initial-scale=1</code> leading to odd zoom defaults.</li>
          <li>Using <code>user-scalable=no</code> or <code>maximum-scale=1</code> without a real a11y reason.</li>
          <li>Typos like <code>UTF8</code> or bad quotes.</li>
        </ul>
      </section>

      <section class="card">
        <h2>Presets</h2>
        <div class="ex">
          <h3>Minimal (recommended)</h3>
          <pre><code>&lt;meta charset="utf-8"&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;</code></pre>

          <h3>Content-heavy app (allow user zoom)</h3>
          <pre><code>&lt;meta name="viewport" content="width=device-width, initial-scale=1, interactive-widget=resizes-content"&gt;</code></pre>

          <h3>Avoid (hurts accessibility)</h3>
          <pre><code>&lt;meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1"&gt;</code></pre>
        </div>
      </section>

      <footer class="muted">
        Tip: If you ever see garbled characters, check: (1) file is saved as UTF-8; (2) <code>charset</code> is first in <code>&lt;head&gt;</code>; (3) server doesn't override encoding headers incorrectly.
      </footer>
    </main>
  </body>
</html>`;function c(){return i.useEffect(()=>{document.title="Metadata · charset & viewport recap"},[]),e.jsxs(a.Page,{children:[e.jsxs("header",{className:"pageHeader",id:"top",children:[e.jsx("h1",{children:"charset & viewport — recap"}),e.jsxs("p",{className:"lede",children:[e.jsx("code",{children:'<meta charset="utf-8">'})," ensures the HTML parser decodes bytes into the right characters. The viewport meta controls initial scaling and CSS pixel mapping on mobile. Keep both minimal and correct."]})]}),e.jsxs("nav",{className:"toc","aria-label":"On this page",children:[e.jsx("a",{href:"#charset",children:"Charset (UTF-8)"}),e.jsx("a",{href:"#placement",children:"Placement rules"}),e.jsx("a",{href:"#viewport",children:"Viewport basics"}),e.jsx("a",{href:"#presets",children:"Presets"}),e.jsx("a",{href:"#pitfalls",children:"Pitfalls"}),e.jsx("a",{href:"#faq",children:"FAQ"}),e.jsx("a",{href:"#play",children:"Playground"})]}),e.jsxs("section",{id:"charset",children:[e.jsx("h2",{children:"Charset: why UTF-8"}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"Supports virtually all human scripts + symbols (emoji, math, etc.)."}),e.jsx("li",{children:"Consistent across OS/devices; avoids mojibake (garbled text)."}),e.jsxs("li",{children:["Short, modern form is ",e.jsx("code",{children:'<meta charset="utf-8">'})," (not http-equiv)."]})]})})]}),e.jsxs("section",{id:"placement",children:[e.jsx("h2",{children:"Placement rules"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Do"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["Put ",e.jsx("code",{children:"charset"})," as the first child in ",e.jsx("code",{children:"<head>"}),"."]}),e.jsx("li",{children:"Ensure the file is saved as UTF-8 in your editor."}),e.jsx("li",{children:"Keep server headers consistent (don’t override with legacy encodings)."})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Don’t"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["Place ",e.jsx("code",{children:"charset"})," after CSS/JS tags."]}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"user-scalable=no"})," casually—hurts accessibility."]}),e.jsx("li",{children:"Mix different encodings across templates/partials."})]})]})]})]}),e.jsxs("section",{id:"viewport",children:[e.jsx("h2",{children:"Viewport basics"}),e.jsx(a.Code,{"aria-label":"Recommended viewport",children:e.jsx("pre",{children:String.raw`<meta name="viewport" content="width=device-width, initial-scale=1">`})}),e.jsx("p",{className:"note",children:"This lets layouts size to the device width and starts at a sensible zoom. Allow user zoom unless there’s a very strong reason not to."})]}),e.jsxs("section",{id:"presets",children:[e.jsx("h2",{children:"Practical presets"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Minimal (most sites)"}),e.jsx(a.Code,{children:e.jsx("pre",{children:String.raw`<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">`})})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Keyboard-safe (modern UIs)"}),e.jsx(a.Code,{children:e.jsx("pre",{children:String.raw`<meta name="viewport"
      content="width=device-width, initial-scale=1, interactive-widget=resizes-content">`})}),e.jsx("p",{className:"muted",children:"Helps when on-screen keyboards overlap inputs in some browsers."})]})]})]}),e.jsxs("section",{id:"pitfalls",children:[e.jsx("h2",{children:"Pitfalls"}),e.jsxs("ul",{className:"badges",children:[e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," ",e.jsx("code",{children:"UTF8"})," (missing hyphen) or smart quotes."]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Multiple conflicting viewport tags."]}),e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Good"})," One charset first, one viewport, kept simple."]})]})]}),e.jsxs("section",{id:"faq",children:[e.jsx("h2",{children:"FAQ"}),e.jsxs("details",{children:[e.jsx("summary",{children:"Do I still need http-equiv for charset?"}),e.jsxs("div",{className:"ans",children:["No. Use the short form ",e.jsx("code",{children:'meta charset="utf-8"'}),". It’s standard and faster to parse."]})]}),e.jsxs("details",{children:[e.jsx("summary",{children:"What if server sets a different encoding header?"}),e.jsx("div",{className:"ans",children:"Ensure server sends UTF-8 or remove conflicting headers. Server headers can override your meta."})]}),e.jsxs("details",{children:[e.jsx("summary",{children:"Can I block zoom for a web app feel?"}),e.jsx("div",{className:"ans",children:"Avoid blocking zoom. It harms accessibility. Design for zoom instead."})]})]}),e.jsxs("section",{id:"play",children:[e.jsx("h2",{children:"Try it live"}),e.jsx("p",{className:"lede",children:"Edit charset position, tweak viewport values, and test non-ASCII characters below. Autosaves to this lesson’s storage key."}),e.jsx(t,{storageKey:"core-html:metadata:charset-viewport-recap:v1",initialHtml:d,height:640})]}),e.jsxs("nav",{className:"nextPrev","aria-label":"Lesson navigation",children:[e.jsx(r,{to:"/metadata/meta-description",className:"prev","aria-label":"Go to meta description",children:"← meta description"}),e.jsx(r,{to:"/metadata/robots-basics",className:"next","aria-label":"Go to robots basics",children:"Next: robots basics →"})]}),e.jsx("div",{className:"backTop",children:e.jsx("a",{href:"#top",children:"Back to top ↑"})})]})}export{c as default};
