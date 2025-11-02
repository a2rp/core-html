// src/pages/pitfalls/buttonVsLink/index.jsx
import React, { useEffect } from "react";
import { Styled } from "./styled";
import { NavLink } from "react-router-dom";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";

/*
  Pitfalls: <button> for actions, <a> for navigation
  - Mental model & decision checklist
  - Keyboard + semantics differences
  - Attributes that matter (type, disabled, download, rel, target)
  - Progressive enhancement: href-as-source-of-truth
  - Common mistakes and correct patterns
  - Live playground (Monaco) last
*/

const STARTER_HTML = String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Button vs Link — playground</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui, -apple-system, Segoe UI, Roboto, sans-serif; }
      .grid { display: grid; gap: 14px; }
      .card { border: 1px solid #ccc; border-radius: 12px; padding: 12px; background: #fff; }
      @media (prefers-color-scheme: dark) {
        .card { background: color-mix(in oklab, #fff, #000 92%); border-color: #333; }
      }
      .good { background: color-mix(in oklab, #16a34a, transparent 92%); border-color:#7bc590; }
      .bad  { background: color-mix(in oklab, #dc2626, transparent 92%); border-color:#f2a6a6; }
      .muted { color: #6b7280; }
      .row { display: grid; gap: 8px; grid-template-columns: repeat(2,minmax(0,1fr)); }
      @media (max-width: 840px){ .row { grid-template-columns: 1fr; } }
      .k { display:inline-block; border:1px solid #bbb; border-radius:999px; padding:2px 8px; font-size:12px; background:#f8f8f8; }
      code { background:#f5f5f5; padding:0 6px; border-radius:6px; }
      .ex { border:1px dashed #aaa; padding:10px; border-radius:10px; margin-top:6px; display:grid; gap:8px; }
      button, a { font: inherit; }
      .btn { padding:8px 12px; border-radius:10px; border:1px solid #aaa; background:#eee; cursor:pointer; text-decoration:none; color:inherit; }
      .btn:disabled, [aria-disabled="true"] { opacity: .55; cursor: not-allowed; }
    </style>
  </head>
  <body>
    <main class="grid">
      <header>
        <h1><button> vs <a></a></h1>
        <p class="muted">Rule of thumb: <strong>Use <code>&lt;button&gt;</code> for actions</strong> (submit, open modal, toggle) and <strong>use <code>&lt;a href&gt;</code> for navigation</strong> (go to another URL).</p>
      </header>

      <section class="card good">
        <h2>Good: Action uses <code>&lt;button&gt;</code></h2>
        <div class="ex">
          <dialog id="d">
            <form method="dialog" style="padding:12px">
              <p>Are you sure?</p>
              <button value="no" class="btn">Cancel</button>
              <button value="yes" class="btn">Confirm</button>
            </form>
          </dialog>
          <button class="btn" id="open">Open confirm modal</button>
          <script>
            const d = document.getElementById('d');
            document.getElementById('open').addEventListener('click', () => d.showModal());
          </script>
          <!-- Action = open dialog; correct primitive is <button>. -->
        </div>
      </section>

      <section class="card good">
        <h2>Good: Navigation uses <code>&lt;a href&gt;</code></h2>
        <div class="ex">
          <!-- Real URL target means keyboard users can open in new tab (Ctrl/Cmd+Enter), copy link, etc. -->
          <a class="btn" href="https://developer.mozilla.org/" target="_blank" rel="noopener">Read MDN (new tab)</a>
        </div>
      </section>

      <section class="card bad">
        <h2>Bad: <code>&lt;a&gt;</code> with no <code>href</code> used like a button</h2>
        <div class="ex">
          <a class="btn" onclick="alert('Doing an action')">“Link” doing action</a>
          <!-- Problems:
               - Without href, it's not a true link (no right-click open / copy link / visited state).
               - It's missing button behavior for Space key.
               - Screen readers may announce it as link but it doesn't navigate. -->
        </div>
      </section>

      <section class="card bad">
        <h2>Bad: <code>&lt;button&gt;</code> used for navigation</h2>
        <div class="ex">
          <button class="btn" onclick="location.href='https://example.com';">Go to Example</button>
          <!-- Navigation should be an <a href="..."> to preserve browser features, SEO, and semantics. -->
        </div>
      </section>

      <section class="card">
        <h2>Disabled states</h2>
        <div class="row">
          <div>
            <p><strong>Button</strong> supports real <code>disabled</code>:</p>
            <div class="ex">
              <button class="btn" disabled>Submit (disabled)</button>
            </div>
          </div>
          <div>
            <p><strong>Link</strong> has no real disabled. Use <code>aria-disabled="true"</code> + prevent default:</p>
            <div class="ex">
              <a class="btn" href="#nowhere" aria-disabled="true" onclick="event.preventDefault();">Next (disabled)</a>
              <!-- Still focusable; JS must prevent navigation. Consider not rendering link until ready. -->
            </div>
          </div>
        </div>
      </section>

      <section class="card">
        <h2>Form nuance</h2>
        <div class="ex">
          <form onsubmit="event.preventDefault(); alert('Submitted!');">
            <input aria-label="Name" placeholder="Your name" />
            <button class="btn" type="submit">Submit</button>
            <button class="btn" type="button">Just a button</button>
            <button class="btn" type="reset">Reset</button>
          </form>
          <!-- Always set type to avoid implicit submit in nested forms/handlers. -->
        </div>
      </section>

      <section class="card">
        <h2>Download vs navigate</h2>
        <div class="ex">
          <a class="btn" href="/files/report.pdf" download>Download report.pdf</a>
          <!-- <a download> hints a download; don't use button for file download from a URL. -->
        </div>
      </section>

      <footer class="muted">
        Keyboard: Links activate on <span class="k">Enter</span>; Buttons on <span class="k">Space</span> and <span class="k">Enter</span>.
      </footer>
    </main>
  </body>
</html>`;

export default function ButtonVsLink() {
    useEffect(() => {
        document.title = "Pitfalls · <button> for actions, <a> for navigation";
    }, []);

    return (
        <Styled.Page>
            <header className="pageHeader" id="top">
                <h1>
                    <code>&lt;button&gt;</code> for actions, <code>&lt;a&gt;</code> for navigation
                </h1>
                <p className="lede">
                    If it changes state without changing the URL, it’s an <strong>action</strong> → use{" "}
                    <code>&lt;button&gt;</code>. If it takes you to a different URL (same tab or new), it’s{" "}
                    <strong>navigation</strong> → use <code>&lt;a href&gt;</code>.
                </p>
            </header>

            <nav className="toc" aria-label="On this page">
                <a href="#model">Mental model</a>
                <a href="#matrix">Decision checklist</a>
                <a href="#keyboard">Keyboard & semantics</a>
                <a href="#attrs">Attributes that matter</a>
                <a href="#patterns">Correct patterns</a>
                <a href="#pitfalls">Common mistakes</a>
                <a href="#play">Playground</a>
            </nav>

            <section id="model">
                <h2>Mental model</h2>
                <div className="card">
                    <ul className="bullets">
                        <li><strong>Action:</strong> submit form, open/close dialog, toggle UI, start/stop a process → <code>button</code>.</li>
                        <li><strong>Navigation:</strong> move to a URL (internal or external), download a file from a URL → <code>a href</code>.</li>
                        <li>Semantics give you behavior “for free”: keyboard, focus, context menu, history, SEO.</li>
                    </ul>
                </div>
            </section>

            <section id="matrix">
                <h2>Decision checklist</h2>
                <div className="card">
                    <table className="matrix" role="grid">
                        <thead>
                            <tr>
                                <th>Question</th>
                                <th>Use</th>
                                <th>Notes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Does it go to a different URL?</td>
                                <td><code>&lt;a href&gt;</code></td>
                                <td>Opens-in-new-tab, copy-link, visited state all work.</td>
                            </tr>
                            <tr>
                                <td>Does it trigger a client-side action?</td>
                                <td><code>&lt;button&gt;</code></td>
                                <td>Space/Enter activation, disabled state, form types.</td>
                            </tr>
                            <tr>
                                <td>Is it submitting a form?</td>
                                <td><code>&lt;button type="submit"&gt;</code></td>
                                <td>Avoid accidental submits; set <code>type</code> explicitly.</td>
                            </tr>
                            <tr>
                                <td>Is it “looks like link” but acts like button?</td>
                                <td><code>&lt;button&gt;</code></td>
                                <td>Style can mimic a link; keep semantics correct.</td>
                            </tr>
                            <tr>
                                <td>Is it “looks like button” but navigates?</td>
                                <td><code>&lt;a href&gt;</code></td>
                                <td>Button styling on an anchor is fine.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section id="keyboard">
                <h2>Keyboard & semantics</h2>
                <div className="grid2">
                    <div className="card">
                        <h3>Links</h3>
                        <ul className="bullets">
                            <li>Activate with <span className="kbd">Enter</span>.</li>
                            <li>Have URL in context menu; support middle-click / new tab.</li>
                            <li>SEO & visited state apply (when <code>href</code> exists).</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h3>Buttons</h3>
                        <ul className="bullets">
                            <li>Activate with <span className="kbd">Space</span> and <span className="kbd">Enter</span>.</li>
                            <li>Support real <code>disabled</code> and form <code>type</code>s.</li>
                            <li>No URL; use for state changes, toggles, dialogs.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="attrs">
                <h2>Attributes that matter</h2>
                <div className="card">
                    <ul className="bullets">
                        <li><code>&lt;button type="button|submit|reset"&gt;</code> — set <code>type</code> explicitly.</li>
                        <li><code>disabled</code> — works on <code>button</code>; for links use <code>aria-disabled="true"</code> and prevent default.</li>
                        <li><code>&lt;a href target="_blank" rel="noopener"&gt;</code> — security for new tabs.</li>
                        <li><code>&lt;a download&gt;</code> — hint download instead of navigate.</li>
                        <li>Avoid <code>role="button"</code> on anchors; use the real element instead.</li>
                    </ul>
                </div>
            </section>

            <section id="patterns">
                <h2>Correct patterns</h2>
                <div className="grid2">
                    <div className="card">
                        <h3>“Button-styled link”</h3>
                        <Styled.Code role="region" aria-label="Button-styled link">
                            <pre>{String.raw`<a class="btn" href="/pricing">View pricing</a>`}</pre>
                        </Styled.Code>
                        <p className="note">Style doesn’t change semantics. It’s still a link with all link superpowers.</p>
                    </div>
                    <div className="card">
                        <h3>“Link-styled button”</h3>
                        <Styled.Code role="region" aria-label="Link-styled button">
                            <pre>{String.raw`<button class="linkLike" type="button">Show advanced options</button>`}</pre>
                        </Styled.Code>
                        <p className="note">Looks like a link, acts like a button. Keep it a <code>button</code> because it toggles UI.</p>
                    </div>
                </div>
            </section>

            <section id="pitfalls">
                <h2>Common mistakes</h2>
                <ul className="badges">
                    <li><span className="bad">Wrong</span> Anchor with JS click handler but no <code>href</code>.</li>
                    <li><span className="bad">Wrong</span> Button used to change page location.</li>
                    <li><span className="good">Good</span> Action = <code>button</code>; Navigation/Download = <code>a href</code>.</li>
                </ul>
            </section>

            <section id="play">
                <h2>Try it live</h2>
                <p className="lede">
                    Fix the bad examples: convert navigation buttons to anchors, replace fake links with real
                    buttons, add missing attributes (type, rel, download).
                </p>
                <HtmlPlayground
                    storageKey="core-html:pitfalls:button-vs-link:v1"
                    initialHtml={STARTER_HTML}
                    height={680}
                />
            </section>

            {/* Prev + Next */}
            <nav className="nextPrev" aria-label="Lesson navigation">
                <NavLink to="/pitfalls/multiple-h1" className="prev" aria-label="Go to Multiple H1 per context">
                    ← Multiple &lt;h1&gt; per context
                </NavLink>
                <NavLink to="/pitfalls/no-div-for-headings" className="next" aria-label="Go to No div for headings/lists">
                    Next: No &lt;div&gt; for headings/lists →
                </NavLink>
            </nav>

            <div className="backTop"><a href="#top">Back to top ↑</a></div>
        </Styled.Page>
    );
}
