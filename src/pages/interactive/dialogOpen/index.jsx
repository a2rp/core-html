import React, { useEffect, useRef } from "react";
import { Styled } from "./styled";
import { NavLink } from "react-router-dom";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";

/**
 * <dialog> (open attr) — Dialog basics (concept)
 * - What <dialog> is and the "open" attribute
 * - show(), showModal(), close(), returnValue
 * - Focus behavior, inert background, and ESC handling
 * - Labeling, initial focus, form[method="dialog"]
 * - Backdrop styling and positioning
 * - Pitfalls and progressive enhancement
 * - Live Monaco playground LAST
 */

const STARTER_HTML = String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>&lt;dialog&gt; basics — demo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark }
      * { box-sizing: border-box }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui, -apple-system, Segoe UI, Roboto, sans-serif }
      .grid { display: grid; gap: 14px; max-width: 960px; margin: 0 auto }
      .card { border: 1px solid #ccc; border-radius: 12px; padding: 12px }
      .muted { color: #6b7280 }
      .row { display: flex; gap: 8px; flex-wrap: wrap }
      button { font: inherit; padding: 8px 12px; border-radius: 10px; border: 1px solid #aaa; background: #f5f5f5; cursor: pointer }
      button:focus-visible { outline: 3px solid #3b82f6 }
      dialog {
        border: 1px solid #aaa;
        border-radius: 12px;
        padding: 0;
        max-width: 520px;
        width: min(520px, 90vw);
      }
      dialog header { padding: 12px; border-bottom: 1px solid #ddd; display:flex; justify-content: space-between; align-items:center }
      dialog header h2 { margin: 0; font-size: 18px }
      dialog .content { padding: 12px }
      dialog .actions { display:flex; justify-content: flex-end; gap: 8px; padding: 12px; border-top: 1px solid #ddd }
      dialog::backdrop {
        background: rgba(0, 0, 0, 0.45);
        backdrop-filter: blur(2px);
      }
      .note {
        font-size: 13px; color: #6b7280;
        border-left: 3px solid #06b6d4;
        padding: 8px 12px; background: rgba(6,182,212,0.08);
        border-radius: 8px; margin-top: 8px;
      }
      .kbd { display:inline-block; border:1px solid #bbb; border-radius:8px; padding:0 8px; font-size:12px }
      .ex { border:1px dashed #aaa; padding:8px; border-radius:10px; margin-top:6px }
    </style>
  </head>
  <body>
    <main class="grid">
      <header>
        <h1>&lt;dialog&gt; basics</h1>
        <p class="muted">Built-in modal/non-modal dialog primitive with <code>open</code>, <code>show()</code>, <code>showModal()</code>, and <code>close()</code>.</p>
      </header>

      <section class="card">
        <h2>Open a modal dialog</h2>
        <div class="row">
          <button id="openModal">Open modal</button>
          <button id="openNonModal">Open non-modal</button>
        </div>
        <div class="note">Modal = background inert + focus trapped. Non-modal = floating panel without inert background.</div>
      </section>

      <section class="card">
        <h2>Form with <code>method="dialog"</code></h2>
        <p>Submitting closes the dialog and sets <code>returnValue</code> to the clicked submit's <code>value</code>.</p>
      </section>

      <!-- DIALOG -->
      <dialog id="demoDialog" aria-labelledby="demoTitle">
        <header>
          <h2 id="demoTitle">Settings</h2>
          <button id="xClose" aria-label="Close dialog" class="kbd">Esc</button>
        </header>
        <form method="dialog">
          <div class="content">
            <label>
              <span>Username</span><br />
              <input name="user" autocomplete="username" placeholder="alex" />
            </label>
            <p class="note">Tip: Provide a sensible initial focus target at the top of the dialog.</p>
          </div>
          <div class="actions">
            <button value="cancel">Cancel</button>
            <button value="save">Save</button>
          </div>
        </form>
      </dialog>

      <section class="card">
        <h2>Result</h2>
        <div id="result" class="ex">Click Save/Cancel to see <code>returnValue</code>.</div>
      </section>

      <footer class="muted">
        Shortcuts: <span class="kbd">Esc</span> closes modal by default. Non-modal dialogs may need custom handling.
      </footer>
    </main>

    <script>
      const dlg = document.getElementById('demoDialog');
      const btnModal = document.getElementById('openModal');
      const btnNonModal = document.getElementById('openNonModal');
      const xClose = document.getElementById('xClose');
      const result = document.getElementById('result');

      // Open as modal: background inert + focus trapped
      btnModal.addEventListener('click', () => {
        try { dlg.showModal(); } catch (e) { alert('showModal() failed: ' + e.message); }
      });

      // Open as non-modal: background interactive
      btnNonModal.addEventListener('click', () => {
        try { dlg.show(); } catch (e) { alert('show() failed: ' + e.message); }
      });

      // Optional explicit close button
      xClose.addEventListener('click', () => dlg.close('x'));

      // After close, check returnValue
      dlg.addEventListener('close', () => {
        result.textContent = 'Dialog closed. returnValue = "' + (dlg.returnValue || '') + '"';
      });

      // Initial focus: place focus on the first field when dialog opens
      dlg.addEventListener('open', () => {
        const first = dlg.querySelector('input, button, [href], [tabindex]:not([tabindex="-1"])');
        first?.focus();
      });
    </script>
  </body>
</html>`;

export default function DialogOpen() {
    const liveDialogRef = useRef(null);

    useEffect(() => {
        document.title = "Interactive · <dialog> (open attr) — basics";
    }, []);

    return (
        <Styled.Page>
            <header className="pageHeader" id="top">
                <h1>
                    <code>&lt;dialog&gt;</code> basics <small className="muted">(open attr)</small>
                </h1>
                <p className="lede">
                    The <code>&lt;dialog&gt;</code> element provides a native way to create modal and non-modal dialogs. The{" "}
                    <code>open</code> attribute reflects visibility. Use <code>show()</code> for non-modal,{" "}
                    <code>showModal()</code> for modal behavior, and <code>close()</code> to dismiss.
                </p>
            </header>

            <nav className="toc" aria-label="On this page">
                <a href="#what">What it is</a>
                <a href="#api">API & lifecycle</a>
                <a href="#focus">Focus & a11y</a>
                <a href="#backdrop">Backdrop & layout</a>
                <a href="#forms">Forms via method=dialog</a>
                <a href="#pitfalls">Pitfalls</a>
                <a href="#play">Playground</a>
            </nav>

            <section id="what">
                <h2>What it is</h2>
                <div className="card">
                    <ul className="bullets">
                        <li>
                            A built-in dialog container that toggles with the boolean{" "}
                            <code>open</code> attribute.
                        </li>
                        <li>
                            <strong>Modal</strong>: <code>showModal()</code> → page behind becomes inert and focus is
                            scoped inside.
                        </li>
                        <li>
                            <strong>Non-modal</strong>: <code>show()</code> → floating panel, background stays interactive.
                        </li>
                    </ul>
                </div>
            </section>

            <section id="api">
                <h2>API & lifecycle</h2>
                <Styled.Code role="region" aria-label="Key API">
                    <pre>{String.raw`const dlg = document.querySelector('dialog');
dlg.show();        // non-modal
dlg.showModal();   // modal (blocks interaction behind)
dlg.close('save'); // sets dlg.returnValue = 'save' and removes [open]`}</pre>
                </Styled.Code>
                <p className="note">
                    Modal dialogs close on <kbd>Esc</kbd> by default unless suppressed with{" "}
                    <code>cancel</code> event <code>preventDefault()</code>.
                </p>
            </section>

            <section id="focus">
                <h2>Focus & accessibility</h2>
                <ul className="bullets">
                    <li>Give the dialog an accessible name via a visible heading and <code>aria-labelledby</code>.</li>
                    <li>Ensure an obvious initial focus target (first field or close button).</li>
                    <li>Modal dialogs trap focus; non-modal ones do not. Don’t fake modals with CSS only.</li>
                </ul>
                <Styled.Code>
                    <pre>{String.raw`<dialog aria-labelledby="title">
  <h2 id="title">Preferences</h2>
  …
</dialog>`}</pre>
                </Styled.Code>
            </section>

            <section id="backdrop">
                <h2>Backdrop & layout</h2>
                <p>
                    Style the scrim using <code>dialog::backdrop</code>. The dialog box itself is top-layer positioned; for custom
                    layout, use internal wrappers.
                </p>
                <Styled.Code>
                    <pre>{String.raw`dialog::backdrop { background: rgba(0,0,0,.4); backdrop-filter: blur(2px); }`}</pre>
                </Styled.Code>
            </section>

            <section id="forms">
                <h2>Forms with <code>method="dialog"</code></h2>
                <p>
                    Submitting a form with <code>method="dialog"</code> auto-closes the dialog and assigns{" "}
                    <code>returnValue</code> from the clicked submit’s <code>value</code>.
                </p>
                <Styled.Code>
                    <pre>{String.raw`<form method="dialog">
  <button value="cancel">Cancel</button>
  <button value="save">Save</button>
</form>`}</pre>
                </Styled.Code>
            </section>

            <section id="pitfalls">
                <h2>Pitfalls</h2>
                <ul className="badges">
                    <li><span className="bad">Wrong</span> Only toggling CSS without using <code>showModal()</code> for modals.</li>
                    <li><span className="bad">Wrong</span> Missing heading/name. Screen readers need an accessible name.</li>
                    <li><span className="good">Good</span> Use <code>close()</code> and handle <code>close</code>/<code>cancel</code> events.</li>
                </ul>
                <p className="note">Progressive enhancement: if <code>&lt;dialog&gt;</code> is unsupported, fall back to a simple inline section or portal-free overlay script.</p>
            </section>

            {/* LAST: Monaco playground */}
            <section id="play">
                <h2>Try it live</h2>
                <p className="lede">
                    Open as modal vs non-modal, test <code>Esc</code>, submit with <code>method="dialog"</code>,
                    and inspect <code>returnValue</code>.
                </p>
                <HtmlPlayground
                    storageKey="core-html:interactive:dialog-open:v1"
                    initialHtml={STARTER_HTML}
                    height={680}
                />
            </section>

            {/* Prev + Next */}
            <nav className="nextPrev" aria-label="Lesson navigation">
                <NavLink to="/interactive/details-summary" className="prev" aria-label="Go to details + summary">
                    ← &lt;details&gt; + &lt;summary&gt;
                </NavLink>
                <NavLink to="/interactive/no-nesting" className="next" aria-label="Go to Don’t nest interactive in interactive">
                    Next: Don’t nest interactive in interactive →
                </NavLink>
            </nav>

            <div className="backTop"><a href="#top">Back to top ↑</a></div>
        </Styled.Page>
    );
}
