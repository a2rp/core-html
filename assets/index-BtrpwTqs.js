import{d as r,r as s,j as e,N as o}from"./index-D3QNcmKe.js";import{H as a}from"./index-CAjihRuM.js";const d={Page:r.main`
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
        code,
        kbd,
        samp {
            font-family: ui-monospace, SFMono-Regular, Menlo, Consolas,
                monospace;
        }
        pre {
            font-size: 0.92rem;
            line-height: 1.55;
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
    `,Code:r.div`
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
    `,Keys:r.p`
        display: inline-flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 4px;

        kbd {
            background: #0f1115;
            color: #fff;
            border-radius: 8px;
            padding: 2px 8px;
            border: 1px solid #2a2f3a;
            box-shadow: inset 0 -1px 0 #0006;
            white-space: nowrap;
            font-size: 0.9rem;
        }

        /* add a plus between adjacent kbd elements */
        kbd + kbd {
            position: relative;
            margin-left: 8px;
        }
        kbd + kbd::before {
            content: "+";
            color: var(--text-muted);
            position: absolute;
            left: -12px;
            top: 0;
            bottom: 0;
            display: grid;
            place-items: center;
            width: 10px;
        }
    `},t=String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>&lt;code&gt;, &lt;pre&gt;, &lt;kbd&gt;, &lt;samp&gt; — live demo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui,-apple-system,Segoe UI,Roboto,sans-serif; }
      main { display: grid; gap: 12px; }

      /* Demo helpers */
      .card { border: 1px solid #ccc; border-radius: 12px; padding: 12px; }
      .muted { color: #6b7280; }

      pre, code, kbd, samp {
        font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
        font-size: 0.95rem;
      }
      code { background: #f6f7f9; padding: 0 6px; border-radius: 6px; }
      kbd {
        background: #111; color: #fff; border-radius: 6px;
        padding: 2px 6px; border: 1px solid #333; box-shadow: inset 0 -1px 0 #0005;
        white-space: nowrap;
      }
      .keys kbd + kbd::before { content: " + "; color: #6b7280; }
      pre {
        margin: 0; padding: 12px; border: 1px solid #ddd; border-radius: 10px; background: #f9fafb;
        overflow: auto;
      }
      .cols { display: grid; gap: 12px; grid-template-columns: repeat(2, minmax(0, 1fr)); }
      @media (max-width: 900px) { .cols { grid-template-columns: 1fr; } }
      .good { background: color-mix(in oklab, #16a34a, transparent 92%); border-color:#8ed09b; }
      .bad  { background: color-mix(in oklab, #dc2626, transparent 92%); border-color:#f2a6a6; }
      .ex { border:1px dashed #aaa; padding:8px; border-radius:10px; margin-top:6px; }

      /* Table */
      table { width: 100%; border-collapse: collapse; }
      th, td { border: 1px solid #ddd; padding: 8px; }
      th { text-align: left; background: #f3f4f6; }
    </style>
  </head>
  <body>
    <main>
      <header>
        <h1>&lt;code&gt;, &lt;pre&gt;, &lt;kbd&gt;, &lt;samp&gt;</h1>
        <p class="muted">Four small tags that do a lot of clarity work for technical text.</p>
      </header>

      <section class="card">
        <h2>Inline vs block</h2>
        <div class="cols">
          <div class="card good">
            <h3>Good</h3>
            <p>Inline <code>&lt;code&gt;</code> inside a paragraph when referring to tokens, e.g. <code>Array.prototype.map</code>.</p>
            <p>Use a block <code>&lt;pre&gt;</code> with nested <code>&lt;code&gt;</code> for multi-line snippets:</p>
            <div class="ex">
              <pre><code>function greet(name) {
  return \`Hello, \${name}\`;
}</code></pre>
            </div>
          </div>
          <div class="card bad">
            <h3>Bad</h3>
            <p>Don’t put long blocks inside plain <code>&lt;code&gt;</code> without <code>&lt;pre&gt;</code>—you’ll lose formatting and wrapping.</p>
            <div class="ex">
              <code>function long() { /* … 20 lines … */ }</code>
            </div>
          </div>
        </div>
      </section>

      <section class="card">
        <h2>Keyboard input with &lt;kbd&gt;</h2>
        <p>Mark the exact keys a user should press:</p>
        <p class="keys"><kbd>Ctrl</kbd><kbd>K</kbd> • <kbd>Cmd</kbd><kbd>Shift</kbd><kbd>P</kbd> • <kbd>Esc</kbd></p>
        <p>Explain alternatives per OS if needed.</p>
      </section>

      <section class="card">
        <h2>Sample output with &lt;samp&gt;</h2>
        <p>Show what the system prints or returns:</p>
        <div class="ex">
          <p>$ <kbd>node</kbd> app.js</p>
          <p>→ <samp>Server listening on http://localhost:3000</samp></p>
          <p>→ <samp>Error: permission denied</samp></p>
        </div>
      </section>

      <section class="card">
        <h2>&lt;pre&gt; + &lt;code&gt; combo</h2>
        <p>Use together for blocks. <code>&lt;pre&gt;</code> preserves whitespace; <code>&lt;code&gt;</code> semantically marks code.</p>
        <div class="ex">
<pre><code>&lt;pre&gt;&lt;code class="language-js"&gt;
const nums = [1,2,3];
console.log(nums.map(n =&gt; n*2));
&lt;/code&gt;&lt;/pre&gt;</code></pre>
        </div>
      </section>

      <section class="card">
        <h2>Quick reference</h2>
        <table>
          <thead>
            <tr><th>Element</th><th>Purpose</th><th>Typical content</th></tr>
          </thead>
          <tbody>
            <tr><td><code>&lt;code&gt;</code></td><td>Inline code fragment</td><td>Identifiers, file names, CLI flags</td></tr>
            <tr><td><code>&lt;pre&gt;</code></td><td>Preformatted block</td><td>Multi-line code, logs</td></tr>
            <tr><td><code>&lt;kbd&gt;</code></td><td>User input (keys)</td><td><kbd>Ctrl</kbd><kbd>C</kbd>, <kbd>⌘</kbd><kbd>K</kbd></td></tr>
            <tr><td><code>&lt;samp&gt;</code></td><td>Program output</td><td><samp>404 Not Found</samp></td></tr>
          </tbody>
        </table>
      </section>

      <section class="card">
        <h2>Escaping angle brackets</h2>
        <p>When you want to show tags literally, escape them: <code>&amp;lt;div&amp;gt;</code> renders as <code>&lt;div&gt;</code>.</p>
      </section>

      <footer class="muted">
        Tip: Keep instructions predictable—“press <kbd>Ctrl</kbd><kbd>/</kbd> to toggle comments.”
      </footer>
    </main>
  </body>
</html>`;function n(){return s.useEffect(()=>{document.title="Text · <code>, <pre>, <kbd>, <samp>"},[]),e.jsxs(d.Page,{children:[e.jsxs("header",{className:"pageHeader",id:"top",children:[e.jsxs("h1",{children:[e.jsx("code",{children:"<code>"}),", ",e.jsx("code",{children:"<pre>"}),", ",e.jsx("code",{children:"<kbd>"}),","," ",e.jsx("code",{children:"<samp>"})]}),e.jsxs("p",{className:"lede",children:["Use these four elements to separate ",e.jsx("em",{children:"what you type"}),", ",e.jsx("em",{children:"what the system prints"}),", and ",e.jsx("em",{children:"how multi-line code keeps its formatting"}),". Clear semantics → clearer docs."]})]}),e.jsxs("nav",{className:"toc","aria-label":"On this page",children:[e.jsx("a",{href:"#inline-block",children:"Inline vs block"}),e.jsx("a",{href:"#kbd",children:"Keyboard input"}),e.jsx("a",{href:"#samp",children:"Sample output"}),e.jsx("a",{href:"#combo",children:"pre + code combo"}),e.jsx("a",{href:"#escape",children:"Escaping"}),e.jsx("a",{href:"#pitfalls",children:"Pitfalls"}),e.jsx("a",{href:"#play",children:"Playground"})]}),e.jsxs("section",{id:"inline-block",children:[e.jsx("h2",{children:"Inline vs block"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsxs("h3",{children:["Inline ",e.jsx("code",{children:"<code>"})]}),e.jsxs("p",{children:["Use inline ",e.jsx("code",{children:"code"})," for short tokens inside sentences:",e.jsx("code",{children:" npm run build"}),", ",e.jsx("code",{children:"fetch(url)"}),", ",e.jsx("code",{children:"style.css"}),"."]})]}),e.jsxs("div",{className:"card",children:[e.jsxs("h3",{children:["Block ",e.jsx("code",{children:"<pre>"})]}),e.jsxs("p",{children:["Use ",e.jsx("code",{children:"pre"})," (often wrapping ",e.jsx("code",{children:"code"}),") for multi-line blocks where whitespace matters—source code, stack traces, log excerpts."]})]})]})]}),e.jsxs("section",{id:"kbd",children:[e.jsxs("h2",{children:["Keyboard input with ",e.jsx("code",{children:"<kbd>"})]}),e.jsxs("div",{className:"card",children:[e.jsxs("p",{children:["Represent key presses with ",e.jsx("code",{children:"kbd"}),". For combos, nest multiple"," ",e.jsx("code",{children:"kbd"})," elements:"]}),e.jsxs(d.Keys,{children:[e.jsx("kbd",{children:"Ctrl"}),e.jsx("kbd",{children:"K"})]}),e.jsxs("p",{className:"note",children:["Label platform differences explicitly: ",e.jsx("code",{children:"Ctrl"})," on Windows/Linux,"," ",e.jsx("code",{children:"Cmd"})," on macOS."]})]})]}),e.jsxs("section",{id:"samp",children:[e.jsxs("h2",{children:["Program output with ",e.jsx("code",{children:"<samp>"})]}),e.jsxs("div",{className:"card",children:[e.jsxs("p",{children:["Wrap terminal or program output in ",e.jsx("code",{children:"samp"})," so readers can tell input from output at a glance."]}),e.jsx(d.Code,{"aria-label":"Sample output",children:e.jsx("pre",{children:`$ curl -I https://example.com
HTTP/2 200
server: Example
content-type: text/html; charset=utf-8
`})})]})]}),e.jsxs("section",{id:"combo",children:[e.jsxs("h2",{children:[e.jsx("code",{children:"<pre>"})," + ",e.jsx("code",{children:"<code>"})," combo"]}),e.jsx(d.Code,{"aria-label":"pre + code example",children:e.jsx("pre",{children:String.raw`<pre><code class="language-js">
const nums = [1,2,3];
console.log(nums.map(n => n * 2));
</code></pre>`})}),e.jsxs("p",{className:"note",children:["The ",e.jsx("code",{children:'class="language-…"'})," hook lets highlighters (Prism, Highlight.js, etc.) do their thing without extra attributes."]})]}),e.jsxs("section",{id:"escape",children:[e.jsx("h2",{children:"Escaping angle brackets"}),e.jsx("div",{className:"card",children:e.jsxs("p",{children:["To display literal tags, escape them: ",e.jsx("code",{children:"&lt;h1&gt;"})," →"," ",e.jsx("code",{children:"<h1>"}),". Inside ",e.jsx("code",{children:"pre"}),", you still need to escape angle brackets when you want to show code ",e.jsx("em",{children:"as text"})," rather than let the browser parse it."]})})]}),e.jsxs("section",{id:"pitfalls",children:[e.jsx("h2",{children:"Pitfalls"}),e.jsxs("ul",{className:"badges",children:[e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Using ",e.jsx("code",{children:"div"})," with monospace font to fake code semantics."]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Long blocks with only ",e.jsx("code",{children:"code"})," (no"," ",e.jsx("code",{children:"pre"}),") → whitespace lost."]}),e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Good"})," ",e.jsx("code",{children:"kbd"})," = user input, ",e.jsx("code",{children:"samp"})," = program output."]})]})]}),e.jsxs("section",{id:"play",children:[e.jsx("h2",{children:"Try it live"}),e.jsxs("p",{className:"lede",children:["Convert long inline snippets to ",e.jsx("code",{children:"pre"})," blocks, mark keys with"," ",e.jsx("code",{children:"kbd"}),", and label output with ",e.jsx("code",{children:"samp"}),". Autosaves to this lesson."]}),e.jsx(a,{storageKey:"core-html:text:code-pre-kbd-samp:v1",initialHtml:t,height:680})]}),e.jsxs("nav",{className:"nextPrev","aria-label":"Lesson navigation",children:[e.jsx(o,{to:"/text/inline-semantics",className:"prev","aria-label":"Go to Inline semantic elements",children:"← Inline semantic elements"}),e.jsx(o,{to:"/links/minimal-anatomy",className:"next","aria-label":"Go to Anchor anatomy",children:"Next: Anchor anatomy →"})]}),e.jsx("div",{className:"backTop",children:e.jsx("a",{href:"#top",children:"Back to top ↑"})})]})}export{n as default};
