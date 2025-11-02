import{d as i,r as p,j as e,N as s}from"./index-CQ_xjxjH.js";import{H as h}from"./index-C8nEF-Cf.js";const n={Page:i.main`
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
    `,Code:i.div`
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
    `};var r=Object.freeze,m=Object.defineProperty,t=(a,c)=>r(m(a,"raw",{value:r(c||a.slice())})),o,l,d;const f=String.raw(o||(o=t([`<!doctype html>
<html lang="en" class="no-js">
  <head>
    <meta charset="utf-8" />
    <title>Progressive enhancement — demo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui,-apple-system,Segoe UI,Roboto,sans-serif; }

      .wrap { max-width: 980px; margin: 0 auto; display: grid; gap: 16px; }
      .card { border: 1px solid #ccc; border-radius: 12px; padding: 12px; background: #fff; }
      .muted { color: #6b7280; }
      .good { background: color-mix(in oklab, #16a34a, transparent 92%); border-color:#8ed09b; }
      .note { border-left: 3px solid #2563eb; background: color-mix(in oklab,#2563eb,transparent 92%); padding: 8px 12px; border-radius: 8px; }

      /* Baseline nav works without JS */
      nav ul { display: flex; gap: 12px; padding: 0; list-style: none; }
      nav a { text-decoration: none; border: 1px solid #ddd; padding: 6px 10px; border-radius: 8px; color: inherit; }

      /* Enhance with :has() or JS class — purely optional candy */
      .js .filterBar { display: flex; gap: 8px; align-items: center; }
      .no-js .filterBar { display: none; }

      /* Minimal table styling */
      table { border-collapse: collapse; width: 100%; }
      th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
      th { background: #f7f7f7; }

      /* Accessible loading region (hidden by default) */
      [hidden] { display: none !important; }
      #live { margin-top: 6px; }
    </style>
  </head>
  <body>
    <main class="wrap">
      <header>
        <h1>Progressive enhancement</h1>
        <p class="muted">This page works fully without JavaScript. If JS is available, it adds quality-of-life improvements.</p>
        <noscript><p class="note">JavaScript is off. No problem—everything still works.</p></noscript>
      </header>

      <!-- Baseline navigation -->
      <nav aria-label="Sections">
        <ul>
          <li><a href="#list">Product list</a></li>
          <li><a href="#form">Feedback form</a></li>
          <li><a href="#download">Download</a></li>
        </ul>
      </nav>

      <!-- Baseline list: plain table; enhanced client-side filter -->
      <section id="list" class="card">
        <h2>Product list</h2>
        <div class="filterBar">
          <label for="q">Filter:</label>
          <input id="q" name="q" type="search" placeholder="Type to filter…" />
        </div>

        <table aria-describedby="list-hint">
          <caption class="muted" id="list-hint">Simple table of items. You can filter when JS is available.</caption>
          <thead>
            <tr><th>SKU</th><th>Name</th><th>Price</th></tr>
          </thead>
          <tbody id="rows">
            <tr><td>AX-01</td><td>Axion Widget</td><td>₹ 249</td></tr>
            <tr><td>BX-10</td><td>Borealis Clamp</td><td>₹ 499</td></tr>
            <tr><td>CZ-90</td><td>Cosine Gauge</td><td>₹ 799</td></tr>
            <tr><td>DL-12</td><td>Delta Link</td><td>₹ 149</td></tr>
          </tbody>
        </table>
        <div id="live" class="muted" role="status" aria-live="polite" hidden></div>
      </section>

      <!-- Baseline form: standard POST to server; enhanced with fetch -->
      <section id="form" class="card">
        <h2>Feedback form</h2>
        <p class="muted">Works via normal submit. With JS, it becomes async with inline messages.</p>

        <form method="post" action="/feedback" id="fb">
          <div>
            <label for="name">Name</label><br />
            <input id="name" name="name" required />
          </div>
          <div>
            <label for="msg">Message</label><br />
            <textarea id="msg" name="msg" rows="3" required></textarea>
          </div>
          <button type="submit">Send feedback</button>
        </form>

        <p id="fbStatus" class="muted" role="status" aria-live="polite"></p>
      </section>

      <!-- Baseline download: direct file link; enhanced to choose format -->
      <section id="download" class="card">
        <h2>Download data</h2>
        <p class="muted">Without JS: click to download CSV. With JS: choose CSV/JSON inline.</p>

        <!-- Baseline: direct CSV -->
        <p><a href="data:text/csv;charset=utf-8,sku,name,price%0AAX-01,Axion%20Widget,249" download="items.csv">Download CSV</a></p>

        <!-- Enhanced UI -->
        <div class="js-only" hidden>
          <label for="fmt">Format:</label>
          <select id="fmt">
            <option value="csv">CSV</option>
            <option value="json">JSON</option>
          </select>
          <button id="dlBtn" type="button">Download</button>
        </div>
      </section>

      <footer class="muted">
        Baseline first, enhancements second. If enhancements fail, baseline still works.
      </footer>
    </main>

    <script>
      // Mark JS availability
      document.documentElement.classList.remove("no-js");
      document.documentElement.classList.add("js");

      // 1) Enhanced filter for the table
      const q = document.getElementById("q");
      const rows = document.getElementById("rows");
      const live = document.getElementById("live");

      if (q && rows && live) {
        q.addEventListener("input", () => {
          const terms = q.value.trim().toLowerCase().split(/\\s+/).filter(Boolean);
          let visible = 0;
          [...rows.querySelectorAll("tr")].forEach(tr => {
            const hay = tr.textContent.toLowerCase();
            const hit = terms.length === 0 || terms.every(t => hay.includes(t));
            tr.style.display = hit ? "" : "none";
            if (hit) visible++;
          });
          live.hidden = false;
          live.textContent = visible + " item" + (visible === 1 ? "" : "s") + " shown";
        });
      }

      // 2) Enhanced async form
      const fb = document.getElementById("fb");
      const fbStatus = document.getElementById("fbStatus");
      if (fb) {
        fb.addEventListener("submit", async (e) => {
          // Keep baseline working if fetch fails → remove preventDefault if you want true fallback
          e.preventDefault();

          fbStatus.textContent = "Sending…";
          try {
            const fd = new FormData(fb);
            const res = await fetch(fb.action || "/feedback", {
              method: "POST",
              body: fd
            });
            if (!res.ok) throw new Error("Server error " + res.status);
            fb.reset();
            fbStatus.textContent = "Thanks for the feedback!";
          } catch (err) {
            // Graceful degradation: show message, let user retry or use non-JS path
            fbStatus.textContent = "Could not send right now. You can reload or try again.";
          }
        });
      }

      // 3) Enhanced download chooser
      const fmtSel = document.getElementById("fmt");
      const dlBtn = document.getElementById("dlBtn");
      const jsOnly = document.querySelector(".js-only");
      if (fmtSel && dlBtn && jsOnly) {
        jsOnly.hidden = false;
        dlBtn.addEventListener("click", () => {
          const fmt = fmtSel.value;
          const items = [
            { sku: "AX-01", name: "Axion Widget", price: 249 },
            { sku: "BX-10", name: "Borealis Clamp", price: 499 },
            { sku: "CZ-90", name: "Cosine Gauge", price: 799 },
            { sku: "DL-12", name: "Delta Link", price: 149 }
          ];
          let href = "", filename = "items.";
          if (fmt === "json") {
            href = "data:application/json," + encodeURIComponent(JSON.stringify(items, null, 2));
            filename += "json";
          } else {
            const csv = ["sku,name,price", ...items.map(i => \`\${i.sku},\${i.name},\${i.price}\`)].join("\\n");
            href = "data:text/csv;charset=utf-8," + encodeURIComponent(csv);
            filename += "csv";
          }
          const a = document.createElement("a");
          a.href = href; a.download = filename;
          document.body.appendChild(a);
          a.click();
          a.remove();
        });
      }
    <\/script>
  </body>
</html>`],[`<!doctype html>
<html lang="en" class="no-js">
  <head>
    <meta charset="utf-8" />
    <title>Progressive enhancement — demo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui,-apple-system,Segoe UI,Roboto,sans-serif; }

      .wrap { max-width: 980px; margin: 0 auto; display: grid; gap: 16px; }
      .card { border: 1px solid #ccc; border-radius: 12px; padding: 12px; background: #fff; }
      .muted { color: #6b7280; }
      .good { background: color-mix(in oklab, #16a34a, transparent 92%); border-color:#8ed09b; }
      .note { border-left: 3px solid #2563eb; background: color-mix(in oklab,#2563eb,transparent 92%); padding: 8px 12px; border-radius: 8px; }

      /* Baseline nav works without JS */
      nav ul { display: flex; gap: 12px; padding: 0; list-style: none; }
      nav a { text-decoration: none; border: 1px solid #ddd; padding: 6px 10px; border-radius: 8px; color: inherit; }

      /* Enhance with :has() or JS class — purely optional candy */
      .js .filterBar { display: flex; gap: 8px; align-items: center; }
      .no-js .filterBar { display: none; }

      /* Minimal table styling */
      table { border-collapse: collapse; width: 100%; }
      th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
      th { background: #f7f7f7; }

      /* Accessible loading region (hidden by default) */
      [hidden] { display: none !important; }
      #live { margin-top: 6px; }
    </style>
  </head>
  <body>
    <main class="wrap">
      <header>
        <h1>Progressive enhancement</h1>
        <p class="muted">This page works fully without JavaScript. If JS is available, it adds quality-of-life improvements.</p>
        <noscript><p class="note">JavaScript is off. No problem—everything still works.</p></noscript>
      </header>

      <!-- Baseline navigation -->
      <nav aria-label="Sections">
        <ul>
          <li><a href="#list">Product list</a></li>
          <li><a href="#form">Feedback form</a></li>
          <li><a href="#download">Download</a></li>
        </ul>
      </nav>

      <!-- Baseline list: plain table; enhanced client-side filter -->
      <section id="list" class="card">
        <h2>Product list</h2>
        <div class="filterBar">
          <label for="q">Filter:</label>
          <input id="q" name="q" type="search" placeholder="Type to filter…" />
        </div>

        <table aria-describedby="list-hint">
          <caption class="muted" id="list-hint">Simple table of items. You can filter when JS is available.</caption>
          <thead>
            <tr><th>SKU</th><th>Name</th><th>Price</th></tr>
          </thead>
          <tbody id="rows">
            <tr><td>AX-01</td><td>Axion Widget</td><td>₹ 249</td></tr>
            <tr><td>BX-10</td><td>Borealis Clamp</td><td>₹ 499</td></tr>
            <tr><td>CZ-90</td><td>Cosine Gauge</td><td>₹ 799</td></tr>
            <tr><td>DL-12</td><td>Delta Link</td><td>₹ 149</td></tr>
          </tbody>
        </table>
        <div id="live" class="muted" role="status" aria-live="polite" hidden></div>
      </section>

      <!-- Baseline form: standard POST to server; enhanced with fetch -->
      <section id="form" class="card">
        <h2>Feedback form</h2>
        <p class="muted">Works via normal submit. With JS, it becomes async with inline messages.</p>

        <form method="post" action="/feedback" id="fb">
          <div>
            <label for="name">Name</label><br />
            <input id="name" name="name" required />
          </div>
          <div>
            <label for="msg">Message</label><br />
            <textarea id="msg" name="msg" rows="3" required></textarea>
          </div>
          <button type="submit">Send feedback</button>
        </form>

        <p id="fbStatus" class="muted" role="status" aria-live="polite"></p>
      </section>

      <!-- Baseline download: direct file link; enhanced to choose format -->
      <section id="download" class="card">
        <h2>Download data</h2>
        <p class="muted">Without JS: click to download CSV. With JS: choose CSV/JSON inline.</p>

        <!-- Baseline: direct CSV -->
        <p><a href="data:text/csv;charset=utf-8,sku,name,price%0AAX-01,Axion%20Widget,249" download="items.csv">Download CSV</a></p>

        <!-- Enhanced UI -->
        <div class="js-only" hidden>
          <label for="fmt">Format:</label>
          <select id="fmt">
            <option value="csv">CSV</option>
            <option value="json">JSON</option>
          </select>
          <button id="dlBtn" type="button">Download</button>
        </div>
      </section>

      <footer class="muted">
        Baseline first, enhancements second. If enhancements fail, baseline still works.
      </footer>
    </main>

    <script>
      // Mark JS availability
      document.documentElement.classList.remove("no-js");
      document.documentElement.classList.add("js");

      // 1) Enhanced filter for the table
      const q = document.getElementById("q");
      const rows = document.getElementById("rows");
      const live = document.getElementById("live");

      if (q && rows && live) {
        q.addEventListener("input", () => {
          const terms = q.value.trim().toLowerCase().split(/\\\\s+/).filter(Boolean);
          let visible = 0;
          [...rows.querySelectorAll("tr")].forEach(tr => {
            const hay = tr.textContent.toLowerCase();
            const hit = terms.length === 0 || terms.every(t => hay.includes(t));
            tr.style.display = hit ? "" : "none";
            if (hit) visible++;
          });
          live.hidden = false;
          live.textContent = visible + " item" + (visible === 1 ? "" : "s") + " shown";
        });
      }

      // 2) Enhanced async form
      const fb = document.getElementById("fb");
      const fbStatus = document.getElementById("fbStatus");
      if (fb) {
        fb.addEventListener("submit", async (e) => {
          // Keep baseline working if fetch fails → remove preventDefault if you want true fallback
          e.preventDefault();

          fbStatus.textContent = "Sending…";
          try {
            const fd = new FormData(fb);
            const res = await fetch(fb.action || "/feedback", {
              method: "POST",
              body: fd
            });
            if (!res.ok) throw new Error("Server error " + res.status);
            fb.reset();
            fbStatus.textContent = "Thanks for the feedback!";
          } catch (err) {
            // Graceful degradation: show message, let user retry or use non-JS path
            fbStatus.textContent = "Could not send right now. You can reload or try again.";
          }
        });
      }

      // 3) Enhanced download chooser
      const fmtSel = document.getElementById("fmt");
      const dlBtn = document.getElementById("dlBtn");
      const jsOnly = document.querySelector(".js-only");
      if (fmtSel && dlBtn && jsOnly) {
        jsOnly.hidden = false;
        dlBtn.addEventListener("click", () => {
          const fmt = fmtSel.value;
          const items = [
            { sku: "AX-01", name: "Axion Widget", price: 249 },
            { sku: "BX-10", name: "Borealis Clamp", price: 499 },
            { sku: "CZ-90", name: "Cosine Gauge", price: 799 },
            { sku: "DL-12", name: "Delta Link", price: 149 }
          ];
          let href = "", filename = "items.";
          if (fmt === "json") {
            href = "data:application/json," + encodeURIComponent(JSON.stringify(items, null, 2));
            filename += "json";
          } else {
            const csv = ["sku,name,price", ...items.map(i => \\\`\\\${i.sku},\\\${i.name},\\\${i.price}\\\`)].join("\\\\n");
            href = "data:text/csv;charset=utf-8," + encodeURIComponent(csv);
            filename += "csv";
          }
          const a = document.createElement("a");
          a.href = href; a.download = filename;
          document.body.appendChild(a);
          a.click();
          a.remove();
        });
      }
    <\/script>
  </body>
</html>`])));function x(){return p.useEffect(()=>{document.title="Scripting · Progressive enhancement"},[]),e.jsxs(n.Page,{children:[e.jsxs("header",{className:"pageHeader",id:"top",children:[e.jsx("h1",{children:"Progressive enhancement"}),e.jsx("p",{className:"lede",children:"Start with robust, semantic HTML that works on its own. Then layer CSS and JavaScript as optional upgrades. If enhancements fail, the baseline must still succeed."})]}),e.jsxs("nav",{className:"toc","aria-label":"On this page",children:[e.jsx("a",{href:"#model",children:"Mental model"}),e.jsx("a",{href:"#principles",children:"Principles"}),e.jsx("a",{href:"#patterns",children:"Patterns"}),e.jsx("a",{href:"#examples",children:"Examples"}),e.jsx("a",{href:"#pitfalls",children:"Pitfalls"}),e.jsx("a",{href:"#faq",children:"FAQ"}),e.jsx("a",{href:"#play",children:"Playground"})]}),e.jsxs("section",{id:"model",children:[e.jsx("h2",{children:"Mental model"}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Baseline first"}),": ship a complete experience with HTML alone."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Enhance"}),": add CSS/JS to improve speed, comfort, and clarity."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Resilience"}),": networks wobble; features fail. The core must not."]})]})})]}),e.jsxs("section",{id:"principles",children:[e.jsx("h2",{children:"Core principles"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"HTML is the product"}),e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"Use native controls and semantics as the default."}),e.jsx("li",{children:"Prefer URLs and forms that function without JS."}),e.jsx("li",{children:"Make content reachable with keyboard + readers."})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Enhance, don’t replace"}),e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"Intercept form submits instead of inventing new protocols."}),e.jsx("li",{children:"Decorate links with AJAX, but keep the href valid."}),e.jsx("li",{children:"Let CSS and JS fail without breaking tasks."})]})]})]})]}),e.jsxs("section",{id:"patterns",children:[e.jsx("h2",{children:"Common patterns"}),e.jsx(n.Code,{role:"region","aria-label":"Link that enhances to AJAX",children:e.jsx("pre",{children:String.raw(l||(l=t([`<a href="/items?page=2" id="more">More items</a>
<script>
  const a = document.getElementById('more');
  a?.addEventListener('click', async (e) => {
    e.preventDefault();            // enhancement
    const res = await fetch(a.href);
    // Render into the page...
  });
<\/script>`])))})}),e.jsx(n.Code,{role:"region","aria-label":"Form that enhances to fetch()",children:e.jsx("pre",{children:String.raw(d||(d=t([`<form action="/feedback" method="post" id="fb">
  …
</form>
<script>
  fb?.addEventListener('submit', async (e) => {
    e.preventDefault();            // enhancement
    const res = await fetch(fb.action, { method: 'POST', body: new FormData(fb) });
    // Show success…
  });
<\/script>`])))})})]}),e.jsxs("section",{id:"examples",children:[e.jsx("h2",{children:"Quick examples"}),e.jsxs("ul",{className:"badges",children:[e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Good"})," Link with a real ",e.jsx("code",{children:"href"}),", then intercept to load inline."]}),e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Good"})," Form with real ",e.jsx("code",{children:"action"}),", then enhance to async."]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Bad"})," Div that pretends to be a button without keyboard or semantics."]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Bad"})," Complex JS routing where plain anchors would do."]})]})]}),e.jsxs("section",{id:"pitfalls",children:[e.jsx("h2",{children:"Pitfalls"}),e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"Hiding functioning HTML behind “JS required.”"}),e.jsx("li",{children:"Replacing native inputs with inaccessible custom widgets."}),e.jsx("li",{children:"Forgetting error states when network requests fail."})]})]}),e.jsxs("section",{id:"faq",children:[e.jsx("h2",{children:"FAQ"}),e.jsxs("details",{children:[e.jsx("summary",{children:"Is progressive enhancement the same as graceful degradation?"}),e.jsx("div",{className:"ans",children:"No. PE builds from a strong baseline upward. Graceful degradation starts complex and hopes it degrades nicely."})]}),e.jsxs("details",{children:[e.jsx("summary",{children:"How do I test the baseline?"}),e.jsx("div",{className:"ans",children:"Disable JS in DevTools, throttle network, navigate by keyboard, and run an accessibility audit."})]})]}),e.jsxs("section",{id:"play",children:[e.jsx("h2",{children:"Try it live"}),e.jsx("p",{className:"lede",children:"Use the editor to tweak baseline behavior and layer enhancements. Try removing JS to verify the page still works."}),e.jsx(h,{storageKey:"core-html:scripting:progressive-enhancement:v1",initialHtml:f,height:720})]}),e.jsxs("nav",{className:"nextPrev","aria-label":"Lesson navigation",children:[e.jsx(s,{to:"/scripting/script-placement",className:"prev","aria-label":"Go to Script placement",children:"← Script placement"}),e.jsx(s,{to:"/scripting/semantics-help-js",className:"next","aria-label":"Go to Why semantics help JS",children:"Next: Why semantics help JS →"})]}),e.jsx("div",{className:"backTop",children:e.jsx("a",{href:"#top",children:"Back to top ↑"})})]})}export{x as default};
