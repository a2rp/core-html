import React, { useEffect } from "react";
import { Styled } from "./styled";
import { NavLink } from "react-router-dom";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";

/**
 * Progressive Enhancement (PE)
 * Core idea: Start with solid, accessible HTML that works without JS/CSS.
 * Then layer optional CSS and JS to enhance UX without breaking the base.
 *
 * Page structure mirrors previous lessons:
 * - Header + lede
 * - TOC
 * - Sections: Mental model, Principles, Patterns, Examples, Pitfalls, FAQ
 * - Monaco playground (LAST)
 * - Prev/Next at bottom
 */

const STARTER_HTML = String.raw`<!doctype html>
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
    </script>
  </body>
</html>`;

export default function ProgressiveEnhancement() {
    useEffect(() => {
        document.title = "Scripting · Progressive enhancement";
    }, []);

    return (
        <Styled.Page>
            <header className="pageHeader" id="top">
                <h1>Progressive enhancement</h1>
                <p className="lede">
                    Start with robust, semantic HTML that works on its own. Then layer CSS and JavaScript as
                    optional upgrades. If enhancements fail, the baseline must still succeed.
                </p>
            </header>

            <nav className="toc" aria-label="On this page">
                <a href="#model">Mental model</a>
                <a href="#principles">Principles</a>
                <a href="#patterns">Patterns</a>
                <a href="#examples">Examples</a>
                <a href="#pitfalls">Pitfalls</a>
                <a href="#faq">FAQ</a>
                <a href="#play">Playground</a>
            </nav>

            <section id="model">
                <h2>Mental model</h2>
                <div className="card">
                    <ul className="bullets">
                        <li><strong>Baseline first</strong>: ship a complete experience with HTML alone.</li>
                        <li><strong>Enhance</strong>: add CSS/JS to improve speed, comfort, and clarity.</li>
                        <li><strong>Resilience</strong>: networks wobble; features fail. The core must not.</li>
                    </ul>
                </div>
            </section>

            <section id="principles">
                <h2>Core principles</h2>
                <div className="grid2">
                    <div className="card">
                        <h3>HTML is the product</h3>
                        <ul className="bullets">
                            <li>Use native controls and semantics as the default.</li>
                            <li>Prefer URLs and forms that function without JS.</li>
                            <li>Make content reachable with keyboard + readers.</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h3>Enhance, don’t replace</h3>
                        <ul className="bullets">
                            <li>Intercept form submits instead of inventing new protocols.</li>
                            <li>Decorate links with AJAX, but keep the href valid.</li>
                            <li>Let CSS and JS fail without breaking tasks.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="patterns">
                <h2>Common patterns</h2>
                <Styled.Code role="region" aria-label="Link that enhances to AJAX">
                    <pre>{String.raw`<a href="/items?page=2" id="more">More items</a>
<script>
  const a = document.getElementById('more');
  a?.addEventListener('click', async (e) => {
    e.preventDefault();            // enhancement
    const res = await fetch(a.href);
    // Render into the page...
  });
</script>`}</pre>
                </Styled.Code>

                <Styled.Code role="region" aria-label="Form that enhances to fetch()">
                    <pre>{String.raw`<form action="/feedback" method="post" id="fb">
  …
</form>
<script>
  fb?.addEventListener('submit', async (e) => {
    e.preventDefault();            // enhancement
    const res = await fetch(fb.action, { method: 'POST', body: new FormData(fb) });
    // Show success…
  });
</script>`}</pre>
                </Styled.Code>
            </section>

            <section id="examples">
                <h2>Quick examples</h2>
                <ul className="badges">
                    <li><span className="good">Good</span> Link with a real <code>href</code>, then intercept to load inline.</li>
                    <li><span className="good">Good</span> Form with real <code>action</code>, then enhance to async.</li>
                    <li><span className="bad">Bad</span> Div that pretends to be a button without keyboard or semantics.</li>
                    <li><span className="bad">Bad</span> Complex JS routing where plain anchors would do.</li>
                </ul>
            </section>

            <section id="pitfalls">
                <h2>Pitfalls</h2>
                <ul className="bullets">
                    <li>Hiding functioning HTML behind “JS required.”</li>
                    <li>Replacing native inputs with inaccessible custom widgets.</li>
                    <li>Forgetting error states when network requests fail.</li>
                </ul>
            </section>

            <section id="faq">
                <h2>FAQ</h2>
                <details>
                    <summary>Is progressive enhancement the same as graceful degradation?</summary>
                    <div className="ans">No. PE builds from a strong baseline upward. Graceful degradation starts complex and hopes it degrades nicely.</div>
                </details>
                <details>
                    <summary>How do I test the baseline?</summary>
                    <div className="ans">Disable JS in DevTools, throttle network, navigate by keyboard, and run an accessibility audit.</div>
                </details>
            </section>

            {/* LAST: Monaco playground */}
            <section id="play">
                <h2>Try it live</h2>
                <p className="lede">
                    Use the editor to tweak baseline behavior and layer enhancements. Try removing JS to
                    verify the page still works.
                </p>
                <HtmlPlayground
                    storageKey="core-html:scripting:progressive-enhancement:v1"
                    initialHtml={STARTER_HTML}
                    height={720}
                />
            </section>

            {/* Prev + Next */}
            <nav className="nextPrev" aria-label="Lesson navigation">
                <NavLink to="/scripting/script-placement" className="prev" aria-label="Go to Script placement">
                    ← Script placement
                </NavLink>
                <NavLink to="/scripting/semantics-help-js" className="next" aria-label="Go to Why semantics help JS">
                    Next: Why semantics help JS →
                </NavLink>
            </nav>

            <div className="backTop"><a href="#top">Back to top ↑</a></div>
        </Styled.Page>
    );
}
