import{d as t,r as n,j as e,N as s}from"./index-CQ_xjxjH.js";import{H as d}from"./index-C8nEF-Cf.js";const i={Page:t.main`
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

        .note {
            font-size: 14px;
            color: var(--text-muted);
            border-left: 3px solid var(--primary);
            padding: 8px 12px;
            background: color-mix(in oklab, var(--primary), transparent 92%);
            border-radius: 8px;
            margin-top: 8px;
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
    `,Code:t.div`
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
    `};var r=Object.freeze,c=Object.defineProperty,p=(a,l)=>r(c(a,"raw",{value:r(l||a.slice())})),o;const h=String.raw(o||(o=p([`<!doctype html>
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
      <\/script>
    </main>
  </body>
</html>`],[`<!doctype html>
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
            out.textContent = entries.join('\\\\n');
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
      <\/script>
    </main>
  </body>
</html>`])));function m(){return n.useEffect(()=>{document.title="Forms · <textarea> basics"},[]),e.jsxs(i.Page,{children:[e.jsxs("header",{className:"pageHeader",id:"top",children:[e.jsxs("h1",{children:[e.jsx("code",{children:"<textarea>"})," basics"]}),e.jsx("p",{className:"lede",children:"Multiline plain text input for free-form user text. Use a visible label, set sensible constraints, and prefer simple, progressive enhancements."})]}),e.jsxs("nav",{className:"toc","aria-label":"On this page",children:[e.jsx("a",{href:"#anatomy",children:"Anatomy"}),e.jsx("a",{href:"#attrs",children:"Attributes"}),e.jsx("a",{href:"#a11y",children:"Accessibility"}),e.jsx("a",{href:"#behavior",children:"Behavior"}),e.jsx("a",{href:"#styles",children:"Styling"}),e.jsx("a",{href:"#play",children:"Playground"})]}),e.jsxs("section",{id:"anatomy",children:[e.jsx("h2",{children:"Anatomy"}),e.jsxs("div",{className:"card",children:[e.jsx("pre",{children:String.raw`<label for="msg">Message</label>
<textarea id="msg" name="message" rows="6" placeholder="Write your message here…"></textarea>`}),e.jsxs("p",{className:"note",children:["The initial value is the element’s text content, not a ",e.jsx("code",{children:"value"})," attribute."]})]})]}),e.jsxs("section",{id:"attrs",children:[e.jsx("h2",{children:"Key attributes"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Size & limits"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("code",{children:"rows"}),"/",e.jsx("code",{children:"cols"})," suggest visible size."]}),e.jsxs("li",{children:[e.jsx("code",{children:"maxlength"}),"/",e.jsx("code",{children:"minlength"})," gate submission."]}),e.jsxs("li",{children:[e.jsx("code",{children:"wrap"}),": ",e.jsx("strong",{children:"soft"})," vs ",e.jsx("strong",{children:"hard"}),"."]})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"State & hints"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("code",{children:"required"}),", ",e.jsx("code",{children:"disabled"}),", ",e.jsx("code",{children:"readonly"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"placeholder"})," is a hint; still use a label."]}),e.jsxs("li",{children:[e.jsx("code",{children:"spellcheck"})," and ",e.jsx("code",{children:"autocomplete"})," are allowed."]})]})]})]})]}),e.jsxs("section",{id:"a11y",children:[e.jsx("h2",{children:"Accessibility"}),e.jsxs("ul",{className:"badges",children:[e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Do"})," Provide a programmatic label."]}),e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Do"})," Tie hints/errors via ",e.jsx("code",{children:"aria-describedby"}),"."]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Don’t"})," rely on placeholder as the only label."]})]}),e.jsx(i.Code,{role:"region","aria-label":"Described-by example",children:e.jsx("pre",{children:String.raw`<label for="c">Comment</label>
<textarea id="c" name="comment" aria-describedby="c-hint c-err" maxlength="140"></textarea>
<p id="c-hint" class="hint">Max 140 characters.</p>
<p id="c-err" class="error" hidden>Too short.</p>`})})]}),e.jsxs("section",{id:"behavior",children:[e.jsx("h2",{children:"Submission behavior"}),e.jsxs("p",{className:"lede",children:["On submit, the current text is sent as ",e.jsx("code",{children:"name=value"})," in form data."]}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["Empty + ",e.jsx("code",{children:"required"})," → native browser message."]}),e.jsxs("li",{children:[e.jsx("code",{children:"disabled"})," values aren’t submitted; ",e.jsx("code",{children:"readonly"})," are submitted."]}),e.jsxs("li",{children:["Line breaks are preserved as ",e.jsx("code",{children:"\\n"})," in the value."]})]})]}),e.jsxs("section",{id:"styles",children:[e.jsx("h2",{children:"Styling notes"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["Use ",e.jsx("code",{children:"resize"})," to control handles (",e.jsx("code",{children:"none"}),", ",e.jsx("code",{children:"vertical"}),", ",e.jsx("code",{children:"both"}),")."]}),e.jsxs("li",{children:["Keep a comfortable ",e.jsx("code",{children:"line-height"})," for readability."]}),e.jsx("li",{children:"Respect user ability to resize unless your layout truly requires fixed height."})]})]}),e.jsxs("section",{id:"play",children:[e.jsx("h2",{children:"Try it live"}),e.jsx("p",{className:"lede",children:"Experiment with rows/cols, maxlength, wrap, spellcheck, and small enhancements."}),e.jsx(d,{storageKey:"core-html:forms:textarea:v1",initialHtml:h,height:720})]}),e.jsxs("nav",{className:"nextPrev","aria-label":"Lesson navigation",children:[e.jsx(s,{to:"/forms/select-optgroup",className:"prev","aria-label":"Go to Select structures",children:"← Select, option, optgroup"}),e.jsx(s,{to:"/forms/validation-hints",className:"next","aria-label":"Go to Validation hints",children:"Next: Validation hints →"})]}),e.jsx("div",{className:"backTop",children:e.jsx("a",{href:"#top",children:"Back to top ↑"})})]})}export{m as default};
