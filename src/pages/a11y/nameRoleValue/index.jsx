import React, { useEffect } from "react";
import { Styled } from "./styled";
import { NavLink } from "react-router-dom";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";

/*
  Name/Role/Value (NRV)
  - Name: what assistive tech announces (label/alt/aria-label/aria-labelledby)
  - Role: what kind of widget/region it is (button, link, checkbox, navigation, main…)
  - Value/State/Properties: current value or state (checked, pressed, expanded, required…)
  Prefer native HTML elements because they provide NRV automatically.
*/

const STARTER_HTML = String.raw`<!doctype html>
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
  </script>
</body>
</html>`;

export default function NameRoleValue() {
    useEffect(() => {
        document.title = "A11y · Name / Role / Value";
    }, []);

    return (
        <Styled.Page>
            <header className="pageHeader" id="top">
                <h1>Name / Role / Value</h1>
                <p className="lede">
                    Accessible UI rests on three pillars: a clear <strong>Name</strong>, a truthful{" "}
                    <strong>Role</strong>, and an accurate <strong>Value/State</strong>. Native HTML elements
                    provide these by default; ARIA is for gaps, not for glamour.
                </p>
            </header>

            <nav className="toc" aria-label="On this page">
                <a href="#what">What are Name / Role / Value?</a>
                <a href="#native">Why native wins</a>
                <a href="#aria">When ARIA is appropriate</a>
                <a href="#patterns">Common patterns</a>
                <a href="#pitfalls">Pitfalls</a>
                <a href="#play">Playground</a>
            </nav>

            <section id="what">
                <h2>What are Name / Role / Value?</h2>
                <div className="grid2">
                    <div className="card">
                        <h3>Name</h3>
                        <ul className="bullets">
                            <li>What gets announced: label text, <code>alt</code>, <code>aria-label</code>, or <code>aria-labelledby</code>.</li>
                            <li>Examples: button text, <code>&lt;label for&gt;</code> text, image <code>alt</code>.</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h3>Role</h3>
                        <ul className="bullets">
                            <li>The widget/region type: button, link, checkbox, textbox, navigation, main.</li>
                            <li>Native elements imply roles automatically.</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h3>Value / State / Props</h3>
                        <ul className="bullets">
                            <li>Dynamic info: <code>checked</code>, <code>required</code>, <code>disabled</code>, <code>expanded</code>, <code>pressed</code>.</li>
                            <li>Communicated via attributes, reflected in the accessibility tree.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="native">
                <h2>Why prefer native elements?</h2>
                <ul className="badges">
                    <li><span className="good">Robust</span> Cross-browser, cross-AT consistency out of the box.</li>
                    <li><span className="good">Keyboard-ready</span> Focus, Space/Enter handling is built-in.</li>
                    <li><span className="good">Less code</span> No custom ARIA/state synchronization to maintain.</li>
                </ul>
                <Styled.Code aria-label="Example of native NRV">
                    <pre>{String.raw`<label for="q">Search</label>
<input id="q" type="search" placeholder="Keywords" required />`}</pre>
                </Styled.Code>
            </section>

            <section id="aria">
                <h2>When ARIA makes sense</h2>
                <p className="note">
                    Use ARIA only when you can’t use a native element or need to expose missing state.
                    Keep keyboard support and states in sync with visuals.
                </p>
                <Styled.Code aria-label="ARIA role and state">
                    <pre>{String.raw`<div role="button" tabindex="0" aria-pressed="false" aria-labelledby="save-lbl" id="save">
  <span id="save-lbl">Save</span>
</div>`}</pre>
                </Styled.Code>
            </section>

            <section id="patterns">
                <h2>Common patterns</h2>
                <div className="grid2">
                    <div className="card">
                        <h3>Button that toggles</h3>
                        <pre>{String.raw`<button aria-pressed="false">Mute</button>`}</pre>
                        <p className="muted">Name = “Mute”; Role = button; Value = pressed true/false.</p>
                    </div>
                    <div className="card">
                        <h3>Disclosure + region</h3>
                        <pre>{String.raw`<button aria-expanded="false" aria-controls="faq">FAQ</button>
<div id="faq" hidden>…</div>`}</pre>
                        <p className="muted">Keep <code>aria-expanded</code> and <code>hidden</code> synchronized.</p>
                    </div>
                    <div className="card">
                        <h3>Described-by extra context</h3>
                        <pre>{String.raw`<label for="age">Age</label>
<input id="age" type="number" aria-describedby="ageHint">
<div id="ageHint">You must be 18+.</div>`}</pre>
                        <p className="muted">Name via label; extra help via <code>aria-describedby</code>.</p>
                    </div>
                    <div className="card">
                        <h3>Images</h3>
                        <pre>{String.raw`<img src="team.jpg" alt="Team at hackathon" width="600" height="400">`}</pre>
                        <p className="muted">Informative images need helpful <code>alt</code>; decorative ones can use empty <code>alt=""</code>.</p>
                    </div>
                </div>
            </section>

            <section id="pitfalls">
                <h2>Pitfalls</h2>
                <ul className="badges">
                    <li><span className="bad">Wrong</span> Clickable <code>&lt;div&gt;</code> without role/tabindex/keyboard handlers.</li>
                    <li><span className="bad">Wrong</span> ARIA contradicts reality (e.g., <code>aria-expanded="true"</code> while content is hidden).</li>
                    <li><span className="bad">Wrong</span> Using <code>aria-label</code> when a visible <code>&lt;label&gt;</code> is possible.</li>
                    <li><span className="good">Good</span> Prefer native; use ARIA as a last-mile patch.</li>
                </ul>
            </section>

            {/* LAST: Monaco playground */}
            <section id="play">
                <h2>Try it live</h2>
                <p className="lede">
                    Replace non-semantic controls with native ones, wire proper labels, and synchronize ARIA states.
                    Use keyboard to verify Space/Enter behavior.
                </p>
                <HtmlPlayground
                    storageKey="core-html:a11y:name-role-value:v1"
                    initialHtml={STARTER_HTML}
                    height={680}
                />
            </section>

            {/* Prev + Next */}
            <nav className="nextPrev" aria-label="Lesson navigation">
                <NavLink to="/a11y/form-labels-errors" className="prev" aria-label="Go to Form labels & errors">
                    ← Form labels &amp; errors
                </NavLink>
                <NavLink to="/a11y/focus-order-outline" className="next" aria-label="Go to Focus order & outline">
                    Next: Focus order &amp; outline →
                </NavLink>
            </nav>

            <div className="backTop"><a href="#top">Back to top ↑</a></div>
        </Styled.Page>
    );
}
