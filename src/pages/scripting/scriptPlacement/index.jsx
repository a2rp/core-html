import React, { useEffect } from "react";
import { Styled } from "./styled";
import { NavLink } from "react-router-dom";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";

/*
  Topic: <script> placement — Defer vs blocking (and async, module)

  Goals:
  - Show what “blocking” means (parser stops to execute).
  - Show why <script defer> (and type="module") are preferred.
  - Clarify async vs defer (order, DOMContentLoaded timing).
  - Give small, runnable demos with a visual log.
  - End with practical rules & pitfalls.
*/

const STARTER_HTML = String.raw`<!doctype html>
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
    </script>

    <!-- Example of recommended placement: external script marked defer in <head> -->
    <!-- <script src="/app.js" defer></script> -->
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
</html>`;

export default function ScriptPlacement() {
    useEffect(() => {
        document.title = "Scripting · <script> placement (defer vs blocking)";
    }, []);

    return (
        <Styled.Page>
            <header className="pageHeader" id="top">
                <h1>
                    <code>&lt;script&gt;</code> placement: <em>defer vs blocking</em>
                </h1>
                <p className="lede">
                    Defer lets the browser finish parsing HTML before running your code. Async runs as soon as it’s ready.
                    Blocking scripts stop the parser in its tracks. Use the playground to see the timing.
                </p>
            </header>

            <nav className="toc" aria-label="On this page">
                <a href="#why">Why defer</a>
                <a href="#patterns">Minimal patterns</a>
                <a href="#try">Playground</a>
                <a href="#compare">async vs defer</a>
                <a href="#pitfalls">Pitfalls</a>
                <a href="#faq">FAQ</a>
            </nav>

            <section id="why">
                <h2>Why defer</h2>
                <div className="card">
                    <ul className="bullets">
                        <li>Prevents parser-blocking; your content paints sooner.</li>
                        <li>Preserves script order and runs before <code>DOMContentLoaded</code>.</li>
                        <li>Pairs nicely with <code>type="module"</code> for modern bundler-free setups.</li>
                    </ul>
                </div>
            </section>

            <section id="patterns">
                <h2>Minimal patterns</h2>
                <div className="grid2">
                    <div className="card">
                        <h3>Recommended</h3>
                        <Styled.Code>
                            <pre>{String.raw`<head>
  <script src="/app.js" defer></script>
</head>`}</pre>
                        </Styled.Code>
                        <p className="note">Parses first, executes after. Stable and predictable.</p>
                    </div>
                    <div className="card">
                        <h3>Modern modules</h3>
                        <Styled.Code>
                            <pre>{String.raw`<head>
  <script type="module" src="/main.mjs"></script>
</head>`}</pre>
                        </Styled.Code>
                        <p className="note">Modules are deferred by default; use imports for dependencies.</p>
                    </div>
                </div>
            </section>

            <section id="try">
                <h2>Try it live</h2>
                <p className="lede">
                    The preview logs <code>DOMContentLoaded</code>/<code>load</code> and the execution of scripts you add.
                    Mix async, defer, module, and an inline “blocking” simulation.
                </p>
                <HtmlPlayground
                    storageKey="core-html:scripting:script-placement:v1"
                    initialHtml={STARTER_HTML}
                    height={700}
                />
            </section>

            <section id="compare">
                <h2>async vs defer</h2>
                <div className="grid2">
                    <div className="card">
                        <h3><code>defer</code></h3>
                        <ul className="bullets">
                            <li>Downloads in parallel with HTML.</li>
                            <li>Executes after parsing, in order of appearance.</li>
                            <li>Fires before <code>DOMContentLoaded</code>.</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h3><code>async</code></h3>
                        <ul className="bullets">
                            <li>Downloads in parallel with HTML.</li>
                            <li>Executes ASAP when ready; order is not guaranteed.</li>
                            <li>Best for independent third-party scripts.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="pitfalls">
                <h2>Pitfalls</h2>
                <ul className="badges">
                    <li><span className="bad">Wrong</span> Analytics without <code>async</code> in <code>&lt;head&gt;</code>.</li>
                    <li><span className="bad">Wrong</span> Relying on order with <code>async</code> scripts.</li>
                    <li><span className="good">Good</span> Prefer <code>defer</code> or <code>type="module"</code> for app code.</li>
                </ul>
            </section>

            <section id="faq">
                <h2>FAQ</h2>
                <details>
                    <summary>Can I use both <code>async</code> and <code>defer</code>?</summary>
                    <div>No. If both are present, most browsers treat it as <strong>async</strong>. Pick one.</div>
                </details>
                <details>
                    <summary>Do modules guarantee order?</summary>
                    <div>Modules execute after parsing; imports define dependency order rather than tag order.</div>
                </details>
            </section>

            {/* Prev + Next */}
            <nav className="nextPrev" aria-label="Lesson navigation">
                <NavLink to="/a11y/skip-link-concept" className="prev" aria-label="Go to Skip link (concept)">
                    ← Skip link (concept)
                </NavLink>
                <NavLink to="/scripting/progressive-enhancement" className="next" aria-label="Go to Progressive enhancement">
                    Next: Progressive enhancement →
                </NavLink>
            </nav>

            <div className="backTop"><a href="#top">Back to top ↑</a></div>
        </Styled.Page>
    );
}
