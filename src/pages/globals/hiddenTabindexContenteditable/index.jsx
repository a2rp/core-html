// src/pages/globals/hiddenTabindexContenteditable/index.jsx
import React, { useEffect } from "react";
import { Styled } from "./styled";
import { NavLink } from "react-router-dom";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";

/**
 * Globals: hidden, tabindex, contenteditable
 * - Visibility vs accessibility: display:none, visibility:hidden, inert (concept), aria-hidden
 * - Focus management: tabindex -1, 0, >0, natural order, pitfalls
 * - Content editing: contenteditable (basic), keyboard + a11y notes, do/avoid
 * - Live examples + Monaco playground (last)
 */

const STARTER_HTML = String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>hidden • tabindex • contenteditable — playground</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui, -apple-system, Segoe UI, Roboto, sans-serif; }
      .row { display: grid; gap: 10px; grid-template-columns: repeat(3, minmax(0, 1fr)); }
      .card { border: 1px solid #ccc; border-radius: 12px; padding: 12px; }
      .note { color: #6b7280; }
      button { padding: 6px 10px; }
      .kbd { display:inline-block; border:1px solid #bbb; border-radius:999px; padding:2px 8px; font-size:12px; }
      .area { min-height: 68px; border: 1px dashed #aaa; border-radius: 10px; padding: 8px; }
      .grid { display: grid; gap: 12px; }
      .muted { color: #6b7280; }
      .focusable { outline: 2px solid transparent; }
      .focusable:focus { outline-color: #60a5fa; outline-offset: 2px; }
    </style>
  </head>
  <body>
    <main class="grid">
      <header>
        <h1>hidden • tabindex • contenteditable</h1>
        <p class="muted">Experiment with visibility, focus, and live-editable content. Open DevTools → Accessibility tree to observe differences.</p>
      </header>

      <section class="card">
        <h2>hidden vs visibility vs aria-hidden</h2>
        <div class="row">
          <div>
            <h3>display:none (hidden)</h3>
            <p class="muted">Removed from layout, not focusable, not in a11y tree.</p>
            <div class="area">
              <p hidden>This paragraph is hidden via <code>hidden</code>.</p>
              <button id="toggleHidden">Toggle hidden block</button>
              <div id="hiddenTarget" hidden>🔒 I appear/disappear with <code>hidden</code>.</div>
            </div>
          </div>

          <div>
            <h3>visibility:hidden</h3>
            <p class="muted">Takes layout space, not focusable, not visible.</p>
            <div class="area">
              <button id="toggleVis">Toggle visibility</button>
              <p id="visTarget" style="visibility:hidden">👻 Invisible but space is reserved.</p>
            </div>
          </div>

          <div>
            <h3>aria-hidden="true"</h3>
            <p class="muted">Visible, but hidden from assistive tech (screen readers).</p>
            <div class="area">
              <label><input id="ariaChk" type="checkbox"> Apply aria-hidden</label>
              <p id="ariaBox">🪄 I stay visible; SRs ignore me when aria-hidden=true.</p>
              <p class="note">Avoid on interactive elements or labels it controls.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="card">
        <h2>Focus management with <code>tabindex</code></h2>
        <div class="grid">
          <ul>
            <li><code>tabindex="0"</code> puts element in natural tab order.</li>
            <li><code>tabindex="-1"</code> allows programmatic focus only (no Tab stop).</li>
            <li>Avoid positive values (1,2,3…) — they cause confusing orders.</li>
          </ul>
          <div class="area">
            <a href="#" class="focusable">Natural link</a>
            <button class="focusable">Natural button</button>
            <div id="tab0" class="focusable" tabindex="0" role="button" aria-label="Custom button with tabindex 0">Custom focusable (tabindex=0)</div>
            <div id="tabNeg" class="focusable" tabindex="-1">Programmatic only (tabindex=-1)</div>
            <div id="tabPos" class="focusable" tabindex="2" aria-label="Discouraged positive tabindex">Discouraged (tabindex=2)</div>
            <div class="grid" style="grid-template-columns: repeat(3, minmax(0,1fr)); gap: 8px; margin-top:8px;">
              <button id="focusNeg">Focus -1</button>
              <button id="focus0">Focus 0</button>
              <button id="focusPos">Focus 2</button>
            </div>
          </div>
          <p class="note">Try Tab/Shift+Tab through controls. Then click the buttons above to move focus via script.</p>
        </div>
      </section>

      <section class="card">
        <h2>Live editing with <code>contenteditable</code></h2>
        <div class="grid">
          <div class="area" id="ced1" contenteditable="true" role="textbox" aria-multiline="true" aria-label="Editable paragraph">
            Edit this text. Keep it short and sweet. Use Tab to leave (browsers usually keep native tab navigation).
          </div>
          <div class="area" id="ced2" contenteditable="true" role="textbox" aria-multiline="true" aria-label="Editable list">
            <ul><li>Editable list item</li><li>Try typing</li></ul>
          </div>
          <div>
            <p class="muted">
              Tips:
              <br>• Provide a role and accessible name (label) for editing regions.
              <br>• Manage keyboard shortcuts carefully; don't trap focus.
              <br>• Persist changes (e.g., to localStorage) if this were a real app.
            </p>
          </div>
        </div>
      </section>

      <footer class="muted">
        Key idea: Visibility, focus, and accessibility are related but distinct. Test with keyboard and screen reader.
      </footer>
    </main>

    <script>
      const hiddenTarget = document.getElementById('hiddenTarget');
      const toggleHidden = document.getElementById('toggleHidden');
      toggleHidden.addEventListener('click', () => {
        hiddenTarget.hidden = !hiddenTarget.hidden;
      });

      const visTarget = document.getElementById('visTarget');
      const toggleVis = document.getElementById('toggleVis');
      toggleVis.addEventListener('click', () => {
        visTarget.style.visibility = (visTarget.style.visibility === 'hidden') ? 'visible' : 'hidden';
      });

      const ariaBox = document.getElementById('ariaBox');
      const ariaChk = document.getElementById('ariaChk');
      ariaChk.addEventListener('change', () => {
        ariaBox.setAttribute('aria-hidden', ariaChk.checked ? 'true' : 'false');
      });

      /* tabindex demo — programmatic focus */
      const tabNeg = document.getElementById('tabNeg');
      const tab0 = document.getElementById('tab0');
      const tabPos = document.getElementById('tabPos');
      document.getElementById('focusNeg').addEventListener('click', () => tabNeg.focus());
      document.getElementById('focus0').addEventListener('click', () => tab0.focus());
      document.getElementById('focusPos').addEventListener('click', () => tabPos.focus());
    </script>
  </body>
</html>`;

export default function HiddenTabindexContenteditable() {
    useEffect(() => {
        document.title = "Globals · hidden, tabindex, contenteditable";
    }, []);

    return (
        <Styled.Page>
            <header className="pageHeader" id="top">
                <h1>
                    Global attributes: <code>hidden</code>, <code>tabindex</code>, <code>contenteditable</code>
                </h1>
                <p className="lede">
                    Visibility, focus, and editing sound simple, but they shape usability. Learn what disappears from the
                    accessibility tree, what still takes focus, and how to make editable regions usable.
                </p>
            </header>

            <nav className="toc" aria-label="On this page">
                <a href="#visibility">Visibility primitives</a>
                <a href="#focus">Focus management</a>
                <a href="#editing">Editable content</a>
                <a href="#pitfalls">Pitfalls</a>
                <a href="#faq">FAQ</a>
                <a href="#play">Playground</a>
            </nav>

            <section id="visibility">
                <h2>Visibility primitives</h2>
                <div className="grid2">
                    <div className="card">
                        <h3><code>hidden</code> (or <code>display:none</code>)</h3>
                        <ul className="bullets">
                            <li>Removed from layout and from the accessibility tree.</li>
                            <li>Not focusable and not read by screen readers.</li>
                            <li>Great for toggled UIs like disclosure/menus (with proper buttons).</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h3><code>visibility:hidden</code></h3>
                        <ul className="bullets">
                            <li>Still occupies space, but not visible or focusable.</li>
                            <li>Useful for measuring layout without showing content.</li>
                            <li>Don’t use for permanent hiding of interactive controls.</li>
                        </ul>
                    </div>
                </div>

                <div className="card">
                    <h3><code>aria-hidden="true"</code></h3>
                    <p className="note">
                        Hides from assistive tech only. The node remains visible and interactive visually. Avoid using on
                        controls that people must operate or elements that label other controls.
                    </p>
                    <Styled.Code role="region" aria-label="aria-hidden example">
                        <pre>{String.raw`<p aria-hidden="true">Decorative flourish ✨</p>
<!-- Visible to sighted users, hidden from screen readers. -->`}</pre>
                    </Styled.Code>
                </div>

                <div className="card">
                    <h3><code>inert</code> (concept)</h3>
                    <p className="note">
                        <code>inert</code> prevents focusing and removes descendants from the a11y tree. Handy for “modal overlay
                        active → make background inert.” Browser support is good in modern browsers; include a small ponyfill if
                        you must support older ones.
                    </p>
                    <Styled.Code>
                        <pre>{String.raw`<main inert>…background frozen while dialog is open…</main>
<!-- Prefer native <dialog> for real modals; use inert on the rest. -->`}</pre>
                    </Styled.Code>
                </div>
            </section>

            <section id="focus">
                <h2>Focus management with <code>tabindex</code></h2>
                <div className="grid2">
                    <div className="card">
                        <h3>Rules of thumb</h3>
                        <ul className="bullets">
                            <li>Prefer native focusable elements (button, a[href], input…).</li>
                            <li><code>tabindex="0"</code> joins the natural order — good for custom widgets.</li>
                            <li><code>tabindex="-1"</code> for programmatic focus (e.g., error containers).</li>
                            <li>Avoid <em>positive</em> values; they create traps and chaos.</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h3>Programmatic focus</h3>
                        <Styled.Code>
                            <pre>{String.raw`<div id="msg" tabindex="-1" role="alert">Form errors here…</div>
<script>
  // After submit fails:
  document.getElementById('msg').focus();
</script>`}</pre>
                        </Styled.Code>
                    </div>
                </div>
            </section>

            <section id="editing">
                <h2>Editable content with <code>contenteditable</code></h2>
                <div className="grid2">
                    <div className="card">
                        <h3>Do</h3>
                        <ul className="bullets">
                            <li>Provide role+name: <code>role="textbox"</code> and an accessible label.</li>
                            <li>Handle paste/formatting or sanitize input if rich text is allowed.</li>
                            <li>Announce state changes (e.g., “saved”) to screen readers.</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h3>Avoid</h3>
                        <ul className="bullets">
                            <li>Trapping Tab inside editing unless you also provide an escape.</li>
                            <li>Relying on it for complex editors without keyboard support.</li>
                            <li>Removing visible focus styles.</li>
                        </ul>
                    </div>
                </div>

                <Styled.Code role="region" aria-label="contenteditable example">
                    <pre>{String.raw`<div contenteditable="true" role="textbox" aria-label="Notes">
  Type here and press Escape to blur (if you add a key handler).
</div>`}</pre>
                </Styled.Code>
            </section>

            <section id="pitfalls">
                <h2>Pitfalls</h2>
                <ul className="badges">
                    <li><span className="bad">Wrong</span> Hiding required form help with <code>aria-hidden</code>.</li>
                    <li><span className="bad">Wrong</span> Using positive <code>tabindex</code> values in many places.</li>
                    <li><span className="good">Good</span> Prefer native semantics; sprinkle <code>tabindex</code> only where needed.</li>
                </ul>
            </section>

            <section id="faq">
                <h2>FAQ</h2>
                <details>
                    <summary>Is <code>hidden</code> the same as <code>aria-hidden="true"</code>?</summary>
                    <div className="ans">No. <code>hidden</code> removes the element from layout and a11y tree. <code>aria-hidden</code> hides only from assistive tech and keeps it visible.</div>
                </details>
                <details>
                    <summary>Can I make any element focusable?</summary>
                    <div className="ans">Yes with <code>tabindex="0"</code>, but prefer real interactive elements for better semantics and keyboard behavior.</div>
                </details>
                <details>
                    <summary>Is <code>contenteditable</code> good for rich text editors?</summary>
                    <div className="ans">It’s the foundation, but you’ll need keyboard handling, selection logic, and sanitization. Libraries build on top of it.</div>
                </details>
            </section>

            {/* LAST: Monaco playground */}
            <section id="play">
                <h2>Try it live</h2>
                <p className="lede">
                    Toggle visibility modes, practice focus movement, and create an accessible editable region. Autosaves to this lesson.
                </p>
                <HtmlPlayground
                    storageKey="core-html:globals:hidden-tabindex-contenteditable:v1"
                    initialHtml={STARTER_HTML}
                    height={680}
                />
            </section>

            {/* Prev + Next */}
            <nav className="nextPrev" aria-label="Lesson navigation">
                <NavLink to="/globals/id-class-style-title" className="prev" aria-label="Go to id, class, style, title">
                    ← id, class, style, title
                </NavLink>
                <NavLink to="/globals/data-attributes" className="next" aria-label="Go to data-* hooks">
                    Next: data-* hooks →
                </NavLink>
            </nav>

            <div className="backTop"><a href="#top">Back to top ↑</a></div>
        </Styled.Page>
    );
}
