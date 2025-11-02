import{d as s,r as p,j as e,N as t}from"./index-D3QNcmKe.js";import{H as u}from"./index-CAjihRuM.js";const n={Page:s.main`
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
    `};var a=Object.freeze,g=Object.defineProperty,r=(d,l)=>a(g(d,"raw",{value:a(l||d.slice())})),o,i,c;const m=String.raw(o||(o=r([`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title><script> placement — defer vs blocking</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 20px; font: 14px/1.6 system-ui, -apple-system, Segoe UI, Roboto, sans-serif; }
      .grid { display: grid; gap: 14px; max-width: 1100px; margin: 0 auto; }
      .card { border: 1px solid #ccc; border-radius: 12px; padding: 12px; background: color-mix(in oklab, CanvasText, transparent 96%); }
      .muted { color: #6b7280; }
      code, pre { font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; }
      pre { background: color-mix(in oklab, CanvasText, transparent 96%); padding: 10px; border-radius: 10px; overflow: auto; }
      .badge { display: inline-block; font-size: 12px; padding: 2px 8px; border: 1px solid #aaa; border-radius: 999px; margin-right: 6px; }
      .ok { background: #152417; color: #b6f3c1; border-color: #264a2b; }
      .warn { background: #2b1a1a; color: #ffb4b4; border-color: #553; }
      .row { display: grid; gap: 10px; }
      .row2 { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; }
      @media (max-width: 900px) { .row2 { grid-template-columns: 1fr; } }
      button { padding: 8px 10px; border-radius: 10px; border: 1px solid #aaa; background: transparent; cursor: pointer; }
      .log { border: 1px dashed #aaa; border-radius: 10px; min-height: 120px; padding: 8px; }
      .log p { margin: 0; }
      .tiny { font-size: 12px; }
      .kbd { font: 12px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; background: #0003; border-radius: 6px; padding: 0 6px; }
    </style>

    <!-- Observe DOMContentLoaded timing -->
    <script>
      // Logging helpers
      const log = (msg) => {
        const el = document.getElementById("log");
        if (!el) return;
        const p = document.createElement("p");
        p.textContent = msg;
        el.appendChild(p);
      };

      document.addEventListener("DOMContentLoaded", () => log("📌 DOMContentLoaded"));
      window.addEventListener("load", () => log("✅ window.load (all res loaded)"));

      // Utilities to create external scripts via Blob URLs so async/defer behavior is visible
      function makeBlobScript(label, delayMs = 400) {
        const src = \`
          setTimeout(() => {
            console.log("[\${label}] executed");
            try { parent && parent !== window && parent.postMessage?.({ type: "demo-log", text: "[\${label}] executed" }, "*"); } catch {}
          }, \${delayMs});
        \`;
        return URL.createObjectURL(new Blob([src], { type: "text/javascript" }));
      }

      window.addAsync = function() {
        const s = document.createElement("script");
        s.src = makeBlobScript("async", 300 + Math.random()*700|0);
        s.async = true; // async scripts execute ASAP when fetched, order is not guaranteed
        document.head.appendChild(s);
        log("➡️ appended <script async>");
      };

      window.addDefer = function() {
        const s = document.createElement("script");
        s.src = makeBlobScript("defer", 300 + Math.random()*700|0);
        s.defer = true; // defer scripts execute after parsing, in order of appearance
        document.head.appendChild(s);
        log("➡️ appended <script defer> (will run after parse)");
      };

      window.addModule = function() {
        const code = \`
          setTimeout(() => {
            console.log("[module] executed (modules are deferred by default)");
            try { parent && parent !== window && parent.postMessage?.({ type: "demo-log", text: "[module] executed" }, "*"); } catch {}
          }, 300);
        \`;
        const blob = URL.createObjectURL(new Blob([code], { type: "text/javascript" }));
        const s = document.createElement("script");
        s.type = "module"; // module scripts are deferred by default
        s.src = blob;
        document.head.appendChild(s);
        log("➡️ appended <script type='module'>");
      };

      window.addBlockingInline = function() {
        // This *simulates* a blocking task by busy-waiting.
        // Real blocking happens when the parser hits a non-deferred script during parse.
        const started = performance.now();
        while (performance.now() - started < 350) {} // burn ~350ms
        log("⏱️ inline script ran (simulated blocking work)");
      };

      // Listen to messages from inside preview if needed (for some sandboxes)
      window.addEventListener("message", (e) => {
        if (e?.data?.type === "demo-log") log(e.data.text);
      });
    <\/script>

    <!-- Example of recommended placement: external script marked defer in <head> -->
    <!-- <script src="/app.js" defer><\/script> -->
  </head>
  <body>
    <main class="grid">
      <header>
        <h1><code>&lt;script&gt;</code> placement: defer vs blocking</h1>
        <p class="muted">Defer (and modules) let HTML parse first; blocking scripts stop the parser. Async loads in parallel and executes ASAP — fast, but not ordered.</p>
      </header>

      <section class="card">
        <h2>Quick rules</h2>
        <ul>
          <li><span class="badge ok">Use</span> <code>&lt;script src="..." defer&gt;</code> for your own scripts.</li>
          <li><span class="badge ok">Use</span> <code>type="module"</code> (ES modules) — deferred by default.</li>
          <li><span class="badge warn">Avoid</span> parser-blocking scripts in <code>&lt;head&gt;</code> without <code>defer</code>.</li>
          <li><span class="badge">Note</span> <code>async</code> is great for independent third-party scripts (order not guaranteed).</li>
        </ul>
      </section>

      <section class="card">
        <h2>Minimal patterns</h2>
        <div class="row2">
          <div>
            <h3>Defer (classic)</h3>
            <pre><code>&lt;head&gt;
  &lt;script src="/app.js" defer&gt;&lt;/script&gt;
&lt;/head&gt;</code></pre>
            <p class="tiny">Parses HTML first, then runs in document order before <code>DOMContentLoaded</code>.</p>
          </div>
          <div>
            <h3>Modules (ESM)</h3>
            <pre><code>&lt;head&gt;
  &lt;script type="module" src="/main.mjs"&gt;&lt;/script&gt;
&lt;/head&gt;</code></pre>
            <p class="tiny"><code>type="module"</code> is deferred by default. Use imports instead of globals.</p>
          </div>
        </div>
      </section>

      <section class="card">
        <h2>Try it: see execution order</h2>
        <p class="muted">Add scripts dynamically to visualize how they fire relative to parsing and each other.</p>
        <div class="row">
          <div>
            <button onclick="addDefer()">Add &lt;script defer&gt;</button>
            <button onclick="addAsync()">Add &lt;script async&gt;</button>
            <button onclick="addModule()">Add module</button>
            <button onclick="addBlockingInline()">Run inline (simulate blocking)</button>
          </div>
          <div id="log" class="log" aria-live="polite"></div>
          <p class="tiny">
            Tip: Reload and try different sequences. Defer scripts keep their order and run after parsing; async scripts race.
            <span class="kbd">DOM</span> events are logged for context.
          </p>
        </div>
      </section>

      <section class="card">
        <h2>async vs defer</h2>
        <pre><code>// defer: download in parallel, execute after parse, in order
&lt;script src="/a.js" defer&gt;&lt;/script&gt;
&lt;script src="/b.js" defer&gt;&lt;/script&gt;

// async: download in parallel, execute ASAP, order not guaranteed
&lt;script src="/a.js" async&gt;&lt;/script&gt;
&lt;script src="/b.js" async&gt;&lt;/script&gt;</code></pre>
      </section>

      <section class="card">
        <h2>Pitfalls</h2>
        <ul>
          <li>Manipulating DOM elements that haven’t been parsed yet (use defer/module or wait for <code>DOMContentLoaded</code>).</li>
          <li>Relying on execution order with <code>async</code> (don’t; chain via callbacks or use modules).</li>
          <li>Inline scripts that depend on external globals that haven’t loaded.</li>
          <li>Blocking analytics/ads in <code>&lt;head&gt;</code> without <code>async</code>.</li>
        </ul>
      </section>

      <section class="card">
        <h2>FAQ</h2>
        <details>
          <summary>Is <code>&lt;script defer&gt;</code> still useful if I put scripts right before <code>&lt;/body&gt;</code>?</summary>
          <div>Yes. It guarantees non-blocking behavior and runs before <code>DOMContentLoaded</code>. It also clarifies intent.</div>
        </details>
        <details>
          <summary>Do inline scripts support <code>defer</code>?</summary>
          <div>No. <code>defer</code> works only with external scripts (<code>src</code> set). Prefer external files or modules.</div>
        </details>
        <details>
          <summary>What about <code>type="module"</code>?</summary>
          <div>Module scripts are deferred by default and scoped. Use them for modern code and explicit imports.</div>
        </details>
      </section>

      <footer class="muted">
        Rule of thumb: mark your own scripts <code>defer</code> (or use modules); use <code>async</code> for independent third-party code.
      </footer>
    </main>
  </body>
</html>`],[`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title><script> placement — defer vs blocking</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 20px; font: 14px/1.6 system-ui, -apple-system, Segoe UI, Roboto, sans-serif; }
      .grid { display: grid; gap: 14px; max-width: 1100px; margin: 0 auto; }
      .card { border: 1px solid #ccc; border-radius: 12px; padding: 12px; background: color-mix(in oklab, CanvasText, transparent 96%); }
      .muted { color: #6b7280; }
      code, pre { font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; }
      pre { background: color-mix(in oklab, CanvasText, transparent 96%); padding: 10px; border-radius: 10px; overflow: auto; }
      .badge { display: inline-block; font-size: 12px; padding: 2px 8px; border: 1px solid #aaa; border-radius: 999px; margin-right: 6px; }
      .ok { background: #152417; color: #b6f3c1; border-color: #264a2b; }
      .warn { background: #2b1a1a; color: #ffb4b4; border-color: #553; }
      .row { display: grid; gap: 10px; }
      .row2 { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; }
      @media (max-width: 900px) { .row2 { grid-template-columns: 1fr; } }
      button { padding: 8px 10px; border-radius: 10px; border: 1px solid #aaa; background: transparent; cursor: pointer; }
      .log { border: 1px dashed #aaa; border-radius: 10px; min-height: 120px; padding: 8px; }
      .log p { margin: 0; }
      .tiny { font-size: 12px; }
      .kbd { font: 12px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; background: #0003; border-radius: 6px; padding: 0 6px; }
    </style>

    <!-- Observe DOMContentLoaded timing -->
    <script>
      // Logging helpers
      const log = (msg) => {
        const el = document.getElementById("log");
        if (!el) return;
        const p = document.createElement("p");
        p.textContent = msg;
        el.appendChild(p);
      };

      document.addEventListener("DOMContentLoaded", () => log("📌 DOMContentLoaded"));
      window.addEventListener("load", () => log("✅ window.load (all res loaded)"));

      // Utilities to create external scripts via Blob URLs so async/defer behavior is visible
      function makeBlobScript(label, delayMs = 400) {
        const src = \\\`
          setTimeout(() => {
            console.log("[\\\${label}] executed");
            try { parent && parent !== window && parent.postMessage?.({ type: "demo-log", text: "[\\\${label}] executed" }, "*"); } catch {}
          }, \\\${delayMs});
        \\\`;
        return URL.createObjectURL(new Blob([src], { type: "text/javascript" }));
      }

      window.addAsync = function() {
        const s = document.createElement("script");
        s.src = makeBlobScript("async", 300 + Math.random()*700|0);
        s.async = true; // async scripts execute ASAP when fetched, order is not guaranteed
        document.head.appendChild(s);
        log("➡️ appended <script async>");
      };

      window.addDefer = function() {
        const s = document.createElement("script");
        s.src = makeBlobScript("defer", 300 + Math.random()*700|0);
        s.defer = true; // defer scripts execute after parsing, in order of appearance
        document.head.appendChild(s);
        log("➡️ appended <script defer> (will run after parse)");
      };

      window.addModule = function() {
        const code = \\\`
          setTimeout(() => {
            console.log("[module] executed (modules are deferred by default)");
            try { parent && parent !== window && parent.postMessage?.({ type: "demo-log", text: "[module] executed" }, "*"); } catch {}
          }, 300);
        \\\`;
        const blob = URL.createObjectURL(new Blob([code], { type: "text/javascript" }));
        const s = document.createElement("script");
        s.type = "module"; // module scripts are deferred by default
        s.src = blob;
        document.head.appendChild(s);
        log("➡️ appended <script type='module'>");
      };

      window.addBlockingInline = function() {
        // This *simulates* a blocking task by busy-waiting.
        // Real blocking happens when the parser hits a non-deferred script during parse.
        const started = performance.now();
        while (performance.now() - started < 350) {} // burn ~350ms
        log("⏱️ inline script ran (simulated blocking work)");
      };

      // Listen to messages from inside preview if needed (for some sandboxes)
      window.addEventListener("message", (e) => {
        if (e?.data?.type === "demo-log") log(e.data.text);
      });
    <\/script>

    <!-- Example of recommended placement: external script marked defer in <head> -->
    <!-- <script src="/app.js" defer><\/script> -->
  </head>
  <body>
    <main class="grid">
      <header>
        <h1><code>&lt;script&gt;</code> placement: defer vs blocking</h1>
        <p class="muted">Defer (and modules) let HTML parse first; blocking scripts stop the parser. Async loads in parallel and executes ASAP — fast, but not ordered.</p>
      </header>

      <section class="card">
        <h2>Quick rules</h2>
        <ul>
          <li><span class="badge ok">Use</span> <code>&lt;script src="..." defer&gt;</code> for your own scripts.</li>
          <li><span class="badge ok">Use</span> <code>type="module"</code> (ES modules) — deferred by default.</li>
          <li><span class="badge warn">Avoid</span> parser-blocking scripts in <code>&lt;head&gt;</code> without <code>defer</code>.</li>
          <li><span class="badge">Note</span> <code>async</code> is great for independent third-party scripts (order not guaranteed).</li>
        </ul>
      </section>

      <section class="card">
        <h2>Minimal patterns</h2>
        <div class="row2">
          <div>
            <h3>Defer (classic)</h3>
            <pre><code>&lt;head&gt;
  &lt;script src="/app.js" defer&gt;&lt;/script&gt;
&lt;/head&gt;</code></pre>
            <p class="tiny">Parses HTML first, then runs in document order before <code>DOMContentLoaded</code>.</p>
          </div>
          <div>
            <h3>Modules (ESM)</h3>
            <pre><code>&lt;head&gt;
  &lt;script type="module" src="/main.mjs"&gt;&lt;/script&gt;
&lt;/head&gt;</code></pre>
            <p class="tiny"><code>type="module"</code> is deferred by default. Use imports instead of globals.</p>
          </div>
        </div>
      </section>

      <section class="card">
        <h2>Try it: see execution order</h2>
        <p class="muted">Add scripts dynamically to visualize how they fire relative to parsing and each other.</p>
        <div class="row">
          <div>
            <button onclick="addDefer()">Add &lt;script defer&gt;</button>
            <button onclick="addAsync()">Add &lt;script async&gt;</button>
            <button onclick="addModule()">Add module</button>
            <button onclick="addBlockingInline()">Run inline (simulate blocking)</button>
          </div>
          <div id="log" class="log" aria-live="polite"></div>
          <p class="tiny">
            Tip: Reload and try different sequences. Defer scripts keep their order and run after parsing; async scripts race.
            <span class="kbd">DOM</span> events are logged for context.
          </p>
        </div>
      </section>

      <section class="card">
        <h2>async vs defer</h2>
        <pre><code>// defer: download in parallel, execute after parse, in order
&lt;script src="/a.js" defer&gt;&lt;/script&gt;
&lt;script src="/b.js" defer&gt;&lt;/script&gt;

// async: download in parallel, execute ASAP, order not guaranteed
&lt;script src="/a.js" async&gt;&lt;/script&gt;
&lt;script src="/b.js" async&gt;&lt;/script&gt;</code></pre>
      </section>

      <section class="card">
        <h2>Pitfalls</h2>
        <ul>
          <li>Manipulating DOM elements that haven’t been parsed yet (use defer/module or wait for <code>DOMContentLoaded</code>).</li>
          <li>Relying on execution order with <code>async</code> (don’t; chain via callbacks or use modules).</li>
          <li>Inline scripts that depend on external globals that haven’t loaded.</li>
          <li>Blocking analytics/ads in <code>&lt;head&gt;</code> without <code>async</code>.</li>
        </ul>
      </section>

      <section class="card">
        <h2>FAQ</h2>
        <details>
          <summary>Is <code>&lt;script defer&gt;</code> still useful if I put scripts right before <code>&lt;/body&gt;</code>?</summary>
          <div>Yes. It guarantees non-blocking behavior and runs before <code>DOMContentLoaded</code>. It also clarifies intent.</div>
        </details>
        <details>
          <summary>Do inline scripts support <code>defer</code>?</summary>
          <div>No. <code>defer</code> works only with external scripts (<code>src</code> set). Prefer external files or modules.</div>
        </details>
        <details>
          <summary>What about <code>type="module"</code>?</summary>
          <div>Module scripts are deferred by default and scoped. Use them for modern code and explicit imports.</div>
        </details>
      </section>

      <footer class="muted">
        Rule of thumb: mark your own scripts <code>defer</code> (or use modules); use <code>async</code> for independent third-party code.
      </footer>
    </main>
  </body>
</html>`])));function b(){return p.useEffect(()=>{document.title="Scripting · <script> placement (defer vs blocking)"},[]),e.jsxs(n.Page,{children:[e.jsxs("header",{className:"pageHeader",id:"top",children:[e.jsxs("h1",{children:[e.jsx("code",{children:"<script>"})," placement: ",e.jsx("em",{children:"defer vs blocking"})]}),e.jsx("p",{className:"lede",children:"Defer lets the browser finish parsing HTML before running your code. Async runs as soon as it’s ready. Blocking scripts stop the parser in its tracks. Use the playground to see the timing."})]}),e.jsxs("nav",{className:"toc","aria-label":"On this page",children:[e.jsx("a",{href:"#why",children:"Why defer"}),e.jsx("a",{href:"#patterns",children:"Minimal patterns"}),e.jsx("a",{href:"#try",children:"Playground"}),e.jsx("a",{href:"#compare",children:"async vs defer"}),e.jsx("a",{href:"#pitfalls",children:"Pitfalls"}),e.jsx("a",{href:"#faq",children:"FAQ"})]}),e.jsxs("section",{id:"why",children:[e.jsx("h2",{children:"Why defer"}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"Prevents parser-blocking; your content paints sooner."}),e.jsxs("li",{children:["Preserves script order and runs before ",e.jsx("code",{children:"DOMContentLoaded"}),"."]}),e.jsxs("li",{children:["Pairs nicely with ",e.jsx("code",{children:'type="module"'})," for modern bundler-free setups."]})]})})]}),e.jsxs("section",{id:"patterns",children:[e.jsx("h2",{children:"Minimal patterns"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Recommended"}),e.jsx(n.Code,{children:e.jsx("pre",{children:String.raw(i||(i=r([`<head>
  <script src="/app.js" defer><\/script>
</head>`])))})}),e.jsx("p",{className:"note",children:"Parses first, executes after. Stable and predictable."})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Modern modules"}),e.jsx(n.Code,{children:e.jsx("pre",{children:String.raw(c||(c=r([`<head>
  <script type="module" src="/main.mjs"><\/script>
</head>`])))})}),e.jsx("p",{className:"note",children:"Modules are deferred by default; use imports for dependencies."})]})]})]}),e.jsxs("section",{id:"try",children:[e.jsx("h2",{children:"Try it live"}),e.jsxs("p",{className:"lede",children:["The preview logs ",e.jsx("code",{children:"DOMContentLoaded"}),"/",e.jsx("code",{children:"load"})," and the execution of scripts you add. Mix async, defer, module, and an inline “blocking” simulation."]}),e.jsx(u,{storageKey:"core-html:scripting:script-placement:v1",initialHtml:m,height:700})]}),e.jsxs("section",{id:"compare",children:[e.jsx("h2",{children:"async vs defer"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:e.jsx("code",{children:"defer"})}),e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"Downloads in parallel with HTML."}),e.jsx("li",{children:"Executes after parsing, in order of appearance."}),e.jsxs("li",{children:["Fires before ",e.jsx("code",{children:"DOMContentLoaded"}),"."]})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:e.jsx("code",{children:"async"})}),e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"Downloads in parallel with HTML."}),e.jsx("li",{children:"Executes ASAP when ready; order is not guaranteed."}),e.jsx("li",{children:"Best for independent third-party scripts."})]})]})]})]}),e.jsxs("section",{id:"pitfalls",children:[e.jsx("h2",{children:"Pitfalls"}),e.jsxs("ul",{className:"badges",children:[e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Analytics without ",e.jsx("code",{children:"async"})," in ",e.jsx("code",{children:"<head>"}),"."]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Relying on order with ",e.jsx("code",{children:"async"})," scripts."]}),e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Good"})," Prefer ",e.jsx("code",{children:"defer"})," or ",e.jsx("code",{children:'type="module"'})," for app code."]})]})]}),e.jsxs("section",{id:"faq",children:[e.jsx("h2",{children:"FAQ"}),e.jsxs("details",{children:[e.jsxs("summary",{children:["Can I use both ",e.jsx("code",{children:"async"})," and ",e.jsx("code",{children:"defer"}),"?"]}),e.jsxs("div",{children:["No. If both are present, most browsers treat it as ",e.jsx("strong",{children:"async"}),". Pick one."]})]}),e.jsxs("details",{children:[e.jsx("summary",{children:"Do modules guarantee order?"}),e.jsx("div",{children:"Modules execute after parsing; imports define dependency order rather than tag order."})]})]}),e.jsxs("nav",{className:"nextPrev","aria-label":"Lesson navigation",children:[e.jsx(t,{to:"/a11y/skip-link-concept",className:"prev","aria-label":"Go to Skip link (concept)",children:"← Skip link (concept)"}),e.jsx(t,{to:"/scripting/progressive-enhancement",className:"next","aria-label":"Go to Progressive enhancement",children:"Next: Progressive enhancement →"})]}),e.jsx("div",{className:"backTop",children:e.jsx("a",{href:"#top",children:"Back to top ↑"})})]})}export{b as default};
