// src/pages/forms/inputHelpers/index.jsx
import React, { useEffect } from "react";
import { Styled } from "./styled";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";
import { NavLink } from "react-router-dom";

/*
  input helpers:
  - inputmode: soft keyboard hint (does NOT validate)
  - enterkeyhint: "Enter" key label hint (submit, next, search...)
  - Both are progressive enhancement; safe to add anywhere.
*/

const STARTER_HTML = String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>inputmode + enterkeyhint — live demo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 20px; font: 14px/1.6 system-ui, -apple-system, Segoe UI, Roboto, sans-serif; }
      .grid { display: grid; gap: 16px; }
      .row { display: grid; gap: 10px; grid-template-columns: 160px 1fr; align-items: center; }
      .card { border: 1px solid #ccc; border-radius: 12px; padding: 12px; background: color-mix(in oklab, Canvas, transparent 0%); }
      code { background: #f5f5f5; border-radius: 6px; padding: 0 6px; }
      .muted { color: #6b7280; }
      input, textarea, select, button {
        font: inherit; padding: 8px 10px; border: 1px solid #bbb; border-radius: 8px; background: Canvas; color: CanvasText;
      }
      .two { display: grid; gap: 12px; grid-template-columns: repeat(2, minmax(0,1fr)); }
      @media (max-width: 900px) { .two { grid-template-columns: 1fr; } }
      small.hint { color:#6b7280; display:block; margin-top:6px; }
      .note { border-left: 3px solid #3b82f6; padding: 8px 12px; background: color-mix(in oklab, #3b82f6, transparent 92%); border-radius: 8px; }
    </style>
  </head>
  <body>
    <main class="grid">
      <header>
        <h1>inputmode + enterkeyhint</h1>
        <p class="muted">Hints for soft keyboards and the Enter key label. They don’t validate. They help users type faster.</p>
      </header>

      <section class="card">
        <h2>Keyboard layouts (inputmode)</h2>
        <div class="grid" style="gap:12px">
          <label class="row">
            <span>text (default)</span>
            <input type="text" placeholder="Any text" />
          </label>

          <label class="row">
            <span>numeric</span>
            <input type="text" inputmode="numeric" placeholder="Digits only (hint)" />
          </label>

          <label class="row">
            <span>decimal</span>
            <input type="text" inputmode="decimal" placeholder="12.34 (hint)" />
          </label>

          <label class="row">
            <span>tel</span>
            <input type="tel" inputmode="tel" placeholder="+91 98765 43210" />
          </label>

          <label class="row">
            <span>email</span>
            <input type="email" inputmode="email" placeholder="name@example.com" />
          </label>

          <label class="row">
            <span>url</span>
            <input type="url" inputmode="url" placeholder="https://example.com" />
          </label>

          <label class="row">
            <span>search</span>
            <input type="search" inputmode="search" placeholder="Search…" />
          </label>
        </div>
        <p class="note"><strong>Note:</strong> <code>inputmode</code> only suggests a keyboard; it does not enforce validity. Add proper <code>type</code>, <code>pattern</code>, and validation.</p>
      </section>

      <section class="card">
        <h2>Enter key label (enterkeyhint)</h2>
        <div class="two">
          <label class="row">
            <span>enterkeyhint="next"</span>
            <input type="text" placeholder="Step 1…" enterkeyhint="next" />
          </label>

          <label class="row">
            <span>enterkeyhint="done"</span>
            <input type="text" placeholder="Final field" enterkeyhint="done" />
          </label>

          <label class="row">
            <span>enterkeyhint="search"</span>
            <input type="search" placeholder="Find items" enterkeyhint="search" />
          </label>

          <label class="row">
            <span>enterkeyhint="go"</span>
            <input type="url" placeholder="Go to URL" enterkeyhint="go" />
          </label>

          <label class="row">
            <span>enterkeyhint="send"</span>
            <textarea placeholder="Message…" rows="3" enterkeyhint="send"></textarea>
          </label>

          <label class="row">
            <span>enterkeyhint="previous"</span>
            <input type="text" placeholder="Go back?" enterkeyhint="previous" />
          </label>
        </div>
        <small class="hint">Common values: <code>enter</code> (default), <code>done</code>, <code>go</code>, <code>next</code>, <code>previous</code>, <code>search</code>, <code>send</code>.</small>
      </section>

      <section class="card">
        <h2>Combine both</h2>
        <div class="grid" style="gap:12px">
          <label class="row">
            <span>OTP field</span>
            <input type="text" inputmode="numeric" pattern="[0-9]{6}" placeholder="6-digit OTP" enterkeyhint="done" />
          </label>
          <label class="row">
            <span>Price (₹)</span>
            <input type="text" inputmode="decimal" placeholder="0.00" enterkeyhint="next" />
          </label>
          <label class="row">
            <span>Search products</span>
            <input type="search" inputmode="search" placeholder="Type to search…" enterkeyhint="search" />
          </label>
        </div>
      </section>

      <footer class="muted">
        Tip: Keep <code>type</code> semantic (<code>email</code>, <code>url</code>) and use <code>inputmode</code> only to fine-tune the soft keyboard. <code>enterkeyhint</code> helps guide flow across steps.
      </footer>
    </main>
  </body>
</html>`;

export default function InputHelpers() {
    useEffect(() => {
        document.title = "Forms · inputmode & enterkeyhint";
    }, []);

    return (
        <Styled.Page>
            <header className="pageHeader" id="top">
                <h1>
                    <code>inputmode</code> & <code>enterkeyhint</code>
                </h1>
                <p className="lede">
                    Two lightweight attributes that improve typing speed and flow on touch keyboards. They don’t validate; they
                    only hint the UI.
                </p>
            </header>

            <nav className="toc" aria-label="On this page">
                <a href="#inputmode">What is inputmode</a>
                <a href="#enterkeyhint">What is enterkeyhint</a>
                <a href="#matrix">Quick matrix</a>
                <a href="#patterns">Patterns</a>
                <a href="#pitfalls">Pitfalls</a>
                <a href="#faq">FAQ</a>
                <a href="#play">Playground</a>
            </nav>

            <section id="inputmode">
                <h2>What is <code>inputmode</code>?</h2>
                <div className="card">
                    <p>
                        <code>inputmode</code> is a <em>soft keyboard hint</em>. It suggests which on-screen keys should be most
                        accessible (digits, decimal, email symbols, URL slash/dot, etc.). It does not change input type and does
                        not enforce constraints.
                    </p>
                    <Styled.Code>
                        <pre>{String.raw`<input type="text" inputmode="numeric" placeholder="Digits" />
<input type="text" inputmode="decimal" placeholder="12.34" />
<input type="email" inputmode="email" placeholder="name@example.com" />
<input type="url"   inputmode="url"   placeholder="https://…">`}</pre>
                    </Styled.Code>
                    <p className="note">
                        Keep <code>type</code> semantic. For example, collecting an email? Use <code>type="email"</code>. Only add{" "}
                        <code>inputmode</code> if you need to tweak the keyboard layout.
                    </p>
                </div>
            </section>

            <section id="enterkeyhint">
                <h2>What is <code>enterkeyhint</code>?</h2>
                <div className="card">
                    <p>
                        <code>enterkeyhint</code> changes the label of the virtual <kbd>Enter</kbd> key to hint the action:{" "}
                        <code>next</code>, <code>done</code>, <code>search</code>, <code>go</code>, <code>send</code>,{" "}
                        <code>previous</code>. It’s a UX nudge; behavior still depends on your handlers.
                    </p>
                    <Styled.Code>
                        <pre>{String.raw`<input type="text" enterkeyhint="next" />
<input type="search" enterkeyhint="search" />
<textarea enterkeyhint="send"></textarea>`}</pre>
                    </Styled.Code>
                </div>
            </section>

            <section id="matrix">
                <h2>Quick matrix</h2>
                <div className="card">
                    <div className="tableWrap">
                        <table className="matrix" role="table">
                            <thead>
                                <tr>
                                    <th>Use-case</th>
                                    <th>type</th>
                                    <th>inputmode</th>
                                    <th>enterkeyhint</th>
                                    <th>Notes</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Phone</td>
                                    <td><code>tel</code></td>
                                    <td><code>tel</code></td>
                                    <td><code>next</code></td>
                                    <td>Dial-friendly keypad</td>
                                </tr>
                                <tr>
                                    <td>OTP (6 digits)</td>
                                    <td><code>text</code></td>
                                    <td><code>numeric</code></td>
                                    <td><code>done</code></td>
                                    <td>Add <code>pattern="[0-9]{6}"</code> for validation</td>
                                </tr>
                                <tr>
                                    <td>Price</td>
                                    <td><code>text</code></td>
                                    <td><code>decimal</code></td>
                                    <td><code>next</code></td>
                                    <td>Locale formatting is separate logic</td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td><code>email</code></td>
                                    <td><code>email</code></td>
                                    <td><code>next</code></td>
                                    <td>Native validation + “@” keyboard</td>
                                </tr>
                                <tr>
                                    <td>Search</td>
                                    <td><code>search</code></td>
                                    <td><code>search</code></td>
                                    <td><code>search</code></td>
                                    <td>Shows a “Search” key</td>
                                </tr>
                                <tr>
                                    <td>URL</td>
                                    <td><code>url</code></td>
                                    <td><code>url</code></td>
                                    <td><code>go</code></td>
                                    <td>Keyboard with “/ .” keys</td>
                                </tr>
                                <tr>
                                    <td>Chat box</td>
                                    <td><code>textarea</code></td>
                                    <td>(none)</td>
                                    <td><code>send</code></td>
                                    <td>Enter key shows “Send”</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section id="patterns">
                <h2>Patterns</h2>
                <div className="grid2">
                    <div className="card">
                        <h3>Multi-step form</h3>
                        <ul className="bullets">
                            <li>Use <code>enterkeyhint="next"</code> for all but last field.</li>
                            <li>Switch last field to <code>enterkeyhint="done"</code> or <code>send</code>.</li>
                            <li>Wire <kbd>Enter</kbd> to focus next / submit.</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h3>Mobile numeric data</h3>
                        <ul className="bullets">
                            <li><code>inputmode="numeric"</code> for IDs, OTPs, counters.</li>
                            <li><code>inputmode="decimal"</code> for amounts.</li>
                            <li>Still add real validation and masks.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="pitfalls">
                <h2>Pitfalls</h2>
                <ul className="badges">
                    <li><span className="bad">Wrong</span> Relying on <code>inputmode</code> for validation.</li>
                    <li><span className="bad">Wrong</span> Using text + numeric when <code>type="number"</code> is required for native steppers.</li>
                    <li><span className="good">Good</span> Keep <code>type</code> semantic; use helpers as hints only.</li>
                </ul>
            </section>

            <section id="faq">
                <h2>FAQ</h2>
                <details>
                    <summary>Is <code>inputmode</code> supported on desktop?</summary>
                    <div className="ans">It’s mostly a no-op on hardware keyboards. It shines on mobile/touch.</div>
                </details>
                <details>
                    <summary>Does <code>enterkeyhint</code> submit forms?</summary>
                    <div className="ans">No. It only changes the key label. You still handle submit/focus.</div>
                </details>
            </section>

            <section id="play">
                <h2>Try it live</h2>
                <p className="lede">
                    Toggle <code>inputmode</code> and <code>enterkeyhint</code> combinations, then test on a phone/emulator. This
                    demo autosaves to this lesson.
                </p>
                <HtmlPlayground
                    storageKey="core-html:forms:input-helpers:v1"
                    initialHtml={STARTER_HTML}
                    height={720}
                />
            </section>

            <nav className="nextPrev" aria-label="Lesson navigation">
                <NavLink to="/forms/autocomplete-tokens" className="prev" aria-label="Go to Autocomplete tokens">
                    ← Autocomplete tokens
                </NavLink>
                <NavLink to="/interactive/button-types" className="next" aria-label="Go to Button types">
                    Next: Button types →
                </NavLink>
            </nav>

            <div className="backTop"><a href="#top">Back to top ↑</a></div>
        </Styled.Page>
    );
}
