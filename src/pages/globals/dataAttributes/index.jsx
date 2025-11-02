import React, { useEffect } from "react";
import { Styled } from "./styled";
import { NavLink } from "react-router-dom";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";

/**
 * data-* hooks (Semantics-safe data attributes)
 * - What they are (custom, standards-compliant attributes)
 * - Naming rules (kebab-case on HTML → camelCase in JS via dataset)
 * - Reading/writing in JS (el.dataset / getAttribute/setAttribute)
 * - CSS attribute selectors & state styling
 * - Accessibility and semantics (don’t replace real attributes/roles)
 * - Security & performance notes (no secrets; mutation and layout)
 * - Patterns: state flags, ids/refs, init options, analytics hooks
 * - Anti-patterns & pitfalls
 * - Monaco playground LAST (autosaves)
 */

const STARTER_HTML = String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>data-* hooks — live demo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui, -apple-system, Segoe UI, Roboto, sans-serif; }
      .grid { display: grid; gap: 14px; }
      .row { display: flex; gap: 8px; flex-wrap: wrap; }

      .card { border: 1px solid #ccc; border-radius: 12px; padding: 12px; }
      .muted { color: #6b7280; }

      button { padding: 8px 12px; border-radius: 10px; border: 1px solid #aaa; background: #f6f6f6; }
      button[data-active="true"] { outline: 2px solid #22c55e; background: #eafff2; }
      [data-theme="dark"] .panel { background: #0f172a; color: #e2e8f0; }
      [data-theme="light"] .panel { background: #f8fafc; color: #0f172a; }

      .panel { border: 1px dashed #aaa; border-radius: 10px; padding: 10px; }
      .k { display:inline-block; border:1px solid #bbb; border-radius:999px; padding:2px 8px; font-size:12px; }

      .log { font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: 13px; white-space: pre-wrap; background: #1118270d; padding: 10px; border-radius: 8px; border: 1px solid #ddd; }
    </style>
  </head>
  <body>
    <main class="grid">
      <header>
        <h1>data-* hooks <small class="muted">custom attributes for your app</small></h1>
        <p class="muted">Use <code>data-*</code> to attach small, semantic-safe hooks—without inventing new semantics or misusing real attributes.</p>
      </header>

      <section class="card">
        <h2>CSS hooks</h2>
        <p>Style by state or config: <span class="k">[data-active="true"]</span>, <span class="k">[data-variant="outline"]</span>, <span class="k">[data-theme]</span>.</p>
        <div class="row">
          <button id="a" data-active="true">A (active)</button>
          <button id="b" data-active="false">B</button>
          <button id="c" data-variant="outline">C (outline)</button>
        </div>
      </section>

      <section class="card" id="app" data-theme="light" data-user-id="42" data-options='{"collapsible":true,"speed":300}'>
        <h2>JS dataset</h2>
        <p>Click to toggle theme and inspect <code>dataset</code> mapping (kebab → camelCase).</p>
        <div class="panel">Panel uses <code>data-theme</code> on parent.</div>
        <div class="row" style="margin-top:8px;">
          <button id="toggleTheme">Toggle theme</button>
          <button id="readData">Read dataset</button>
          <button id="writeData">Write data-action</button>
        </div>
        <div id="out" class="log" aria-live="polite" style="margin-top:10px;"></div>
      </section>

      <footer class="muted">
        Tip: Prefer real attributes for real meaning (<code>aria-*</code>, <code>role</code>, <code>type</code>, <code>disabled</code>). Use <code>data-*</code> for app-specific hints.
      </footer>
    </main>

    <script>
      const el = document.getElementById('app');
      const out = document.getElementById('out');

      function log(obj, title = 'dataset') {
        out.textContent = title + ":\\n" + JSON.stringify(obj, null, 2);
      }

      // dataset mirrors data-* as camelCase keys
      document.getElementById('readData').addEventListener('click', () => {
        // Reading via dataset:
        const info = {
          theme: el.dataset.theme,
          userId: el.dataset.userId,
          optionsRaw: el.dataset.options,
          parsedOptions: (() => { try { return JSON.parse(el.dataset.options || '{}'); } catch { return { error: 'bad JSON'}}; })(),
        };
        log(info, 'read');
      });

      // Writing via dataset sets/updates attributes
      document.getElementById('writeData').addEventListener('click', () => {
        el.dataset.action = 'refresh';
        log({ afterWrite_action: el.dataset.action }, 'write');
      });

      // Toggle theme value and reflect in UI using CSS selectors
      document.getElementById('toggleTheme').addEventListener('click', () => {
        const next = el.dataset.theme === 'light' ? 'dark' : 'light';
        el.dataset.theme = next;
        log({ theme: next }, 'toggle');
      });

      // Bonus: attribute mutation toggles button state
      const btnB = document.getElementById('b');
      btnB.addEventListener('click', () => {
        const prev = btnB.getAttribute('data-active') === 'true';
        btnB.setAttribute('data-active', prev ? 'false' : 'true');
      });

      // Also accessible via getAttribute/setAttribute
      // el.setAttribute('data-user-id', '100');
      // el.getAttribute('data-user-id');
    </script>
  </body>
</html>`;

export default function DataAttributes() {
    useEffect(() => {
        document.title = "Global Attributes · data-* hooks (Semantics-safe)";
    }, []);

    return (
        <Styled.Page>
            <header className="pageHeader" id="top">
                <h1>
                    <code>data-*</code> hooks <small className="muted">Semantics-safe app data</small>
                </h1>
                <p className="lede">
                    <code>data-*</code> lets you attach tiny, custom data to elements—safe for HTML validation and ignored by
                    browsers/assistive tech as “non-semantic.” Read/write them in JS via <code>element.dataset</code>, or style
                    them with CSS attribute selectors.
                </p>
            </header>

            <nav className="toc" aria-label="On this page">
                <a href="#what">What & why</a>
                <a href="#rules">Naming rules</a>
                <a href="#css">CSS hooks</a>
                <a href="#js">JS access (dataset)</a>
                <a href="#a11y">Semantics & a11y</a>
                <a href="#security">Security & perf</a>
                <a href="#patterns">Useful patterns</a>
                <a href="#anti">Anti-patterns</a>
                <a href="#play">Playground</a>
            </nav>

            <section id="what">
                <h2>What & why</h2>
                <div className="card">
                    <ul className="bullets">
                        <li>
                            <strong>Custom attributes</strong> that start with <code>data-</code>. They’re valid HTML and safe for
                            interoperability.
                        </li>
                        <li>
                            <strong>For app hints, not meaning.</strong> Use them to thread small state/config values through the DOM.
                        </li>
                        <li>
                            <strong>Stable hooks.</strong> Unlike classes (which are purely stylistic), data values can be descriptive,
                            typed (JSON), and queryable.
                        </li>
                    </ul>
                </div>
            </section>

            <section id="rules">
                <h2>Naming rules</h2>
                <div className="grid2">
                    <div className="card">
                        <h3>HTML side</h3>
                        <ul className="bullets">
                            <li>Must begin with <code>data-</code>, followed by a name: <code>data-user-id</code>, <code>data-theme</code>.</li>
                            <li>Use <strong>kebab-case</strong> for multiword names: <code>data-panel-state</code>.</li>
                            <li>Values are strings. You can store JSON, but parse carefully.</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h3>JS side (dataset)</h3>
                        <ul className="bullets">
                            <li>
                                <code>element.dataset</code> exposes <strong>camelCase</strong> keys:
                                <br />
                                <code>data-user-id</code> → <code>dataset.userId</code>
                            </li>
                            <li>Setting <code>dataset.userId = "42"</code> updates the attribute in HTML.</li>
                            <li>Avoid uppercase or underscores in attribute names; stick to kebab.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="css">
                <h2>CSS hooks</h2>
                <Styled.Code role="region" aria-label="CSS attribute selector examples">
                    <pre>{String.raw`/* Basic presence/value selectors */
[data-loading] { cursor: progress; }
[data-variant="outline"] { border-style: dashed; }

/* Parent-driven theming */
[data-theme="dark"] .card { background: #0b1220; color: #e5e7eb; }

/* Range-ish values */
[data-size="sm"] { font-size: 12px; }
[data-size="lg"] { font-size: 18px; }`}</pre>
                </Styled.Code>
                <p className="note">
                    Attribute selectors are great for small, declarative state. If state flips frequently per frame, prefer a class
                    toggle to minimize style recalculation churn.
                </p>
            </section>

            <section id="js">
                <h2>JS access</h2>
                <Styled.Code role="region" aria-label="dataset read/write examples">
                    <pre>{String.raw`const el = document.querySelector('[data-user-id]');
/* Read */
const id = el.dataset.userId;          // "42"
/* Write */
el.dataset.state = 'open';             // sets data-state="open"
/* Raw attributes (alternate) */
el.setAttribute('data-json', JSON.stringify({ a: 1 }));
const parsed = JSON.parse(el.getAttribute('data-json') || '{}');`}</pre>
                </Styled.Code>
            </section>

            <section id="a11y">
                <h2>Semantics & accessibility</h2>
                <ul className="badges">
                    <li><span className="good">Do</span> keep <code>data-*</code> invisible to meaning—use them alongside proper tags.</li>
                    <li><span className="good">Do</span> pair with <code>aria-*</code> or real attributes when conveying roles/state.</li>
                    <li><span className="bad">Don’t</span> invent fake meanings (e.g., <code>data-disabled</code> instead of <code>disabled</code>).</li>
                </ul>
            </section>

            <section id="security">
                <h2>Security & performance notes</h2>
                <div className="card">
                    <ul className="bullets">
                        <li><strong>Public data only.</strong> Attributes are readable by anyone—never store secrets.</li>
                        <li><strong>Parsing cost.</strong> JSON in attributes is fine for tiny blobs; don’t ship kilobytes.</li>
                        <li><strong>Mutation ripple.</strong> Attribute changes can trigger style recalculation; batch updates if needed.</li>
                    </ul>
                </div>
            </section>

            <section id="patterns">
                <h2>Useful patterns</h2>
                <div className="grid2">
                    <div className="card">
                        <h3>State flags</h3>
                        <ul className="bullets">
                            <li><code>data-open</code>, <code>data-active</code>, <code>data-loading</code> for simple UI modes.</li>
                            <li>Combine with <code>[data-open="true"]</code> in CSS.</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h3>Init/config</h3>
                        <ul className="bullets">
                            <li><code>data-options='{"{"}"scroll":true{"}"}'</code> to bootstrap widgets without global JS.</li>
                            <li>Prefer small, stable option sets.</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h3>IDs & refs</h3>
                        <ul className="bullets">
                            <li>Store tiny ids: <code>data-user-id</code>, <code>data-post-id</code>.</li>
                            <li>Use for event delegation and analytics.</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h3>Feature flags (static)</h3>
                        <ul className="bullets">
                            <li><code>data-feature="betaX"</code> to gate CSS or opt-in behavior.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="anti">
                <h2>Anti-patterns</h2>
                <ul className="badges">
                    <li><span className="bad">Wrong</span> Replacing native attributes (<code>data-disabled</code> vs <code>disabled</code>).</li>
                    <li><span className="bad">Wrong</span> Huge JSON blobs or user PII in attributes.</li>
                    <li><span className="bad">Wrong</span> Depending on <code>data-*</code> for accessibility names/roles.</li>
                </ul>
            </section>

            {/* LAST: Monaco playground */}
            <section id="play">
                <h2>Try it live</h2>
                <p className="lede">
                    Toggle data attributes, read/write via <code>dataset</code>, and style based on attribute values. Autosaves to this lesson.
                </p>
                <HtmlPlayground
                    storageKey="core-html:globals:data-attributes:v1"
                    initialHtml={STARTER_HTML}
                    height={660}
                />
            </section>

            {/* Prev + Next */}
            <nav className="nextPrev" aria-label="Lesson navigation">
                <NavLink
                    to="/globals/hidden-tabindex-contenteditable"
                    className="prev"
                    aria-label="Go to hidden, tabindex, contenteditable"
                >
                    ← hidden, tabindex, contenteditable
                </NavLink>
                <NavLink
                    to="/globals/lang-on-elements"
                    className="next"
                    aria-label="Go to lang on elements"
                >
                    Next: lang on elements →
                </NavLink>
            </nav>

            <div className="backTop"><a href="#top">Back to top ↑</a></div>
        </Styled.Page>
    );
}
