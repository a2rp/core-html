import React, { useEffect } from "react";
import { Styled } from "./styled";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";
import { NavLink } from "react-router-dom";

/*
  <textarea> basics
  - Purpose: multiline plain text input
  - Label association: <label for="..."> or wrap
  - Default value: inner text, NOT value=""
  - Useful attributes: name, rows/cols, minlength/maxlength, placeholder, required,
    disabled, readonly, wrap, spellcheck, autocomplete, dir, lang
  - A11y: label required, aria-describedby for hints/errors
  - Behavior: submits current text as name=value in form data
  - Styling: resizable by default; control via resize CSS
*/

const STARTER_HTML = String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>textarea — basics</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui,-apple-system,Segoe UI,Roboto,sans-serif; }
      form { display: grid; gap: 16px; max-width: 760px; }
      .row { display: grid; gap: 8px; }
      label { font-weight: 600; }
      .hint { color: #6b7280; font-size: 13px; }
      .error { color: #c026d3; font-size: 13px; }
      textarea {
        width: 100%;
        min-height: 120px; /* baseline height if rows isn't set */
        padding: 10px 12px;
        border-radius: 10px;
        border: 1px solid #bbb;
        background: canvas;
        color: CanvasText;
        line-height: 1.5;
        resize: vertical; /* allow vertical resize but not horizontal */
      }
      .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
      .kbd { display:inline-block; border:1px solid #bbb; border-radius:999px; padding:2px 8px; font-size:12px; }
      .card { border:1px solid #bbb; border-radius:12px; padding:12px; background: color-mix(in oklab, canvas, transparent 0%); }
      .muted { color:#6b7280; }
      .stack { display: grid; gap: 6px; }
      .counter { font-size: 12px; color:#6b7280; text-align: right; }
      .demoRow { display:grid; gap:10px; }
      .compact { min-height: 72px; }
      .no-resize { resize: none; }
      .mono { font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; }
      .flex { display:flex; gap:10px; align-items:center; }
      .pill { border:1px solid #bbb; border-radius:999px; padding:2px 8px; font-size:12px; }
      .ex { border:1px dashed #aaa; padding:8px; border-radius:10px; margin-top:6px; }
    </style>
  </head>
  <body>
    <main>
      <h1>&lt;textarea&gt; basics</h1>
      <p class="muted">Multiline plain text input. Pair with a real label. Default value comes from its text content.</p>

      <!-- Label association -->
      <section class="card">
        <h2>Label association</h2>
        <div class="grid-2">
          <div class="stack">
            <label for="bio">Short bio</label>
            <textarea id="bio" name="bio" rows="6" placeholder="Tell us about yourself."></textarea>
            <p id="bio-hint" class="hint">Write 1–3 sentences. Avoid personal secrets.</p>
          </div>

          <div class="stack">
            <label>Feedback (wrapped label)
              <textarea name="feedback" class="compact" placeholder="One thing we could improve…"></textarea>
            </label>
            <p class="muted">Wrapping also works; use one method consistently.</p>
          </div>
        </div>
      </section>

      <!-- Default value vs value=""  -->
      <section class="card">
        <h2>Default value</h2>
        <p>The initial text goes between the opening and closing tags. The <code>value</code> attribute is ignored by browsers.</p>
        <div class="ex mono">
<textarea name="defaultExample">This is the initial value.
You can edit me; the submitted value is whatever is in the box when the form is sent.</textarea>
        </div>
      </section>

      <!-- Common attributes -->
      <section class="card">
        <h2>Common attributes</h2>
        <ul>
          <li><code>name</code>: the key used when the form is submitted.</li>
          <li><code>rows</code>/<code>cols</code>: suggested size (user may resize unless you disable it).</li>
          <li><code>minlength</code>/<code>maxlength</code>: length constraints for validation.</li>
          <li><code>placeholder</code>: hint text (not a label).</li>
          <li><code>required</code>, <code>disabled</code>, <code>readonly</code>: state controls.</li>
          <li><code>wrap</code>: <code>soft</code> (default) vs <code>hard</code> (includes newlines in submitted data per column wraps).</li>
          <li><code>spellcheck</code>: <code>true</code>/<code>false</code> to enable/disable spell checking.</li>
          <li><code>autocomplete</code>: allowed on textarea; use tokens like <code>street-address</code>, <code>organization</code>, etc.</li>
        </ul>
        <div class="demoRow">
          <label class="stack">
            Comment (maxlength 120)
            <textarea name="comment" maxlength="120" aria-describedby="c-ctr c-hint" placeholder="Max 120 characters"></textarea>
            <div id="c-ctr" class="counter">0 / 120</div>
            <div id="c-hint" class="hint">We count characters, not bytes.</div>
          </label>

          <label class="stack">
            Notes (readonly)
            <textarea name="notes" readonly class="no-resize">This text is readonly. You can select and copy, but not edit.</textarea>
            <span class="hint">Use readonly for fixed templates; disabled excludes from submission.</span>
          </label>
        </div>
      </section>

      <!-- Wrap behavior -->
      <section class="card">
        <h2>Wrapping and submission</h2>
        <p><code>wrap="soft"</code> displays soft-wrapped lines but does not insert line breaks into the submitted value; <code>wrap="hard"</code> inserts newlines at the column boundary into the submitted value.</p>
        <div class="grid-2">
          <label class="stack">
            Soft wrap (default)
            <textarea name="soft" cols="24" wrap="soft">This long line will look wrapped but the submitted value will contain a single long line unless you press Enter.</textarea>
          </label>
          <label class="stack">
            Hard wrap
            <textarea name="hard" cols="24" wrap="hard">This long line will be wrapped and newlines will be added in the submitted value even if you didn't press Enter.</textarea>
          </label>
        </div>
      </section>

      <!-- Directionality & language -->
      <section class="card">
        <h2>Language & direction</h2>
        <p>For mixed-language text, you can set <code>lang</code> and <code>dir</code> on the textarea.</p>
        <div class="grid-2">
          <label class="stack">
            Urdu (RTL)
            <textarea name="urdu" lang="ur" dir="rtl" rows="4" placeholder="اردو میں لکھیں"></textarea>
          </label>
          <label class="stack">
            English (LTR)
            <textarea name="english" lang="en" dir="ltr" rows="4" placeholder="Write in English"></textarea>
          </label>
        </div>
      </section>

      <!-- Small enhancement: character counter + autosize -->
      <section class="card">
        <h2>Small enhancements</h2>
        <ul>
          <li>Character counter tied to <code>maxlength</code>.</li>
          <li>Auto-grow height to fit content (no library).</li>
        </ul>
        <label class="stack">
          Bio (autosize)
          <textarea id="auto" name="auto" rows="3" maxlength="200" placeholder="Type to see autosize…"></textarea>
          <div id="auto-ctr" class="counter">0 / 200</div>
        </label>
      </section>

      <!-- Submission demo -->
      <form action="#" onsubmit="return false" class="card">
        <h2>Submission</h2>
        <p class="muted">We capture the current values and show the key/value pairs below.</p>
        <div class="row">
          <label class="stack">
            Message
            <textarea name="message" rows="4" required placeholder="Required field"></textarea>
            <span class="hint">Try submitting empty to see native validation.</span>
          </label>
        </div>
        <div class="flex">
          <button type="submit">Submit</button>
          <span class="pill">Press <span class="kbd">Ctrl</span> + <span class="kbd">Enter</span></span>
        </div>
        <pre id="out" class="mono"></pre>
      </form>

      <script>
        // Character counter (generic: any textarea with a following .counter)
        function bindCounters() {
          document.querySelectorAll('textarea[maxlength]').forEach((ta) => {
            const ctr = ta.parentElement.querySelector('.counter');
            if (!ctr) return;
            const ml = Number(ta.getAttribute('maxlength')) || 0;
            const update = () => (ctr.textContent = ta.value.length + ' / ' + ml);
            ta.addEventListener('input', update);
            update();
          });
        }

        // Auto-grow for #auto
        function bindAutosize() {
          const ta = document.getElementById('auto');
          const ctr = document.getElementById('auto-ctr');
          if (!ta) return;
          function resize() {
            ta.style.height = 'auto';
            ta.style.height = (ta.scrollHeight + 4) + 'px';
            if (ctr && ta.maxLength > 0) ctr.textContent = ta.value.length + ' / ' + ta.maxLength;
          }
          ta.addEventListener('input', resize);
          resize();
        }

        // Simple submission preview
        function bindSubmit() {
          const form = document.querySelector('form');
          const out = document.getElementById('out');
          if (!form || !out) return;
          function dump() {
            const fd = new FormData(form);
            const entries = [];
            for (const [k,v] of fd.entries()) entries.push(k + '=' + JSON.stringify(v));
            out.textContent = entries.join('\\n');
          }
          form.addEventListener('submit', () => dump());
          form.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') { e.preventDefault(); dump(); }
          });
        }

        // Bind all helpers
        bindCounters();
        bindAutosize();
        bindSubmit();
      </script>
    </main>
  </body>
</html>`;

export default function TextareaBasics() {
    useEffect(() => {
        document.title = "Forms · <textarea> basics";
    }, []);

    return (
        <Styled.Page>
            <header className="pageHeader" id="top">
                <h1><code>&lt;textarea&gt;</code> basics</h1>
                <p className="lede">
                    Multiline plain text input for free-form user text. Use a visible label, set sensible
                    constraints, and prefer simple, progressive enhancements.
                </p>
            </header>

            <nav className="toc" aria-label="On this page">
                <a href="#anatomy">Anatomy</a>
                <a href="#attrs">Attributes</a>
                <a href="#a11y">Accessibility</a>
                <a href="#behavior">Behavior</a>
                <a href="#styles">Styling</a>
                <a href="#play">Playground</a>
            </nav>

            <section id="anatomy">
                <h2>Anatomy</h2>
                <div className="card">
                    <pre>{String.raw`<label for="msg">Message</label>
<textarea id="msg" name="message" rows="6" placeholder="Write your message here…"></textarea>`}</pre>
                    <p className="note">
                        The initial value is the element’s text content, not a <code>value</code> attribute.
                    </p>
                </div>
            </section>

            <section id="attrs">
                <h2>Key attributes</h2>
                <div className="grid2">
                    <div className="card">
                        <h3>Size & limits</h3>
                        <ul className="bullets">
                            <li><code>rows</code>/<code>cols</code> suggest visible size.</li>
                            <li><code>maxlength</code>/<code>minlength</code> gate submission.</li>
                            <li><code>wrap</code>: <strong>soft</strong> vs <strong>hard</strong>.</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h3>State & hints</h3>
                        <ul className="bullets">
                            <li><code>required</code>, <code>disabled</code>, <code>readonly</code>.</li>
                            <li><code>placeholder</code> is a hint; still use a label.</li>
                            <li><code>spellcheck</code> and <code>autocomplete</code> are allowed.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="a11y">
                <h2>Accessibility</h2>
                <ul className="badges">
                    <li><span className="good">Do</span> Provide a programmatic label.</li>
                    <li><span className="good">Do</span> Tie hints/errors via <code>aria-describedby</code>.</li>
                    <li><span className="bad">Don’t</span> rely on placeholder as the only label.</li>
                </ul>
                <Styled.Code role="region" aria-label="Described-by example">
                    <pre>{String.raw`<label for="c">Comment</label>
<textarea id="c" name="comment" aria-describedby="c-hint c-err" maxlength="140"></textarea>
<p id="c-hint" class="hint">Max 140 characters.</p>
<p id="c-err" class="error" hidden>Too short.</p>`}</pre>
                </Styled.Code>
            </section>

            <section id="behavior">
                <h2>Submission behavior</h2>
                <p className="lede">On submit, the current text is sent as <code>name=value</code> in form data.</p>
                <ul className="bullets">
                    <li>Empty + <code>required</code> → native browser message.</li>
                    <li><code>disabled</code> values aren’t submitted; <code>readonly</code> are submitted.</li>
                    <li>Line breaks are preserved as <code>\n</code> in the value.</li>
                </ul>
            </section>

            <section id="styles">
                <h2>Styling notes</h2>
                <ul className="bullets">
                    <li>Use <code>resize</code> to control handles (<code>none</code>, <code>vertical</code>, <code>both</code>).</li>
                    <li>Keep a comfortable <code>line-height</code> for readability.</li>
                    <li>Respect user ability to resize unless your layout truly requires fixed height.</li>
                </ul>
            </section>

            {/* LAST: Monaco playground */}
            <section id="play">
                <h2>Try it live</h2>
                <p className="lede">Experiment with rows/cols, maxlength, wrap, spellcheck, and small enhancements.</p>
                <HtmlPlayground
                    storageKey="core-html:forms:textarea:v1"
                    initialHtml={STARTER_HTML}
                    height={720}
                />
            </section>

            {/* Prev + Next */}
            <nav className="nextPrev" aria-label="Lesson navigation">
                <NavLink to="/forms/select-optgroup" className="prev" aria-label="Go to Select structures">
                    ← Select, option, optgroup
                </NavLink>
                <NavLink to="/forms/validation-hints" className="next" aria-label="Go to Validation hints">
                    Next: Validation hints →
                </NavLink>
            </nav>

            <div className="backTop"><a href="#top">Back to top ↑</a></div>
        </Styled.Page>
    );
}
