import{d as i,r as l,j as e,N as a}from"./index-D3QNcmKe.js";import{H as d}from"./index-CAjihRuM.js";const s={Page:i.main`
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
    `},t=String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Inputs: type matrix — demo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui,-apple-system,Segoe UI,Roboto,sans-serif; }
      .wrap { max-width: 1100px; margin: 0 auto; display: grid; gap: 18px; }
      fieldset { border: 1px solid #ccc; border-radius: 12px; padding: 12px; }
      legend { padding: 0 6px; opacity: .85; }
      .grid2 { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 12px; }
      @media (max-width: 900px){ .grid2 { grid-template-columns: 1fr; } }
      .row { display: grid; gap: 6px; }
      .row.inline { grid-template-columns: 200px 1fr; align-items: center; }
      label { font-weight: 600; }
      input, select, textarea { font: inherit; padding: 8px 10px; border: 1px solid #bbb; border-radius: 10px; background: canvas; color: canvastext; }
      input[type="checkbox"], input[type="radio"] { width: auto; padding: 0; border: none; }
      .hint { font-size: 12px; color: #6b7280; }
      .err { font-size: 12px; color: #b91c1c; }
      .chips { display: flex; flex-wrap: wrap; gap: 6px; }
      .chip { border:1px solid #bbb; border-radius:999px; padding:2px 8px; font-size:12px; }
      .muted { color: #6b7280; }
      .code { font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: 12px; background: #f3f3f3; padding: 0 6px; border-radius: 6px; }
      .row > .kvs { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 8px; }
      .dash { border:1px dashed #bbb; border-radius: 10px; padding: 10px; }
    </style>
  </head>
  <body>
  <main class="wrap">
    <header>
      <h1>Inputs: type matrix</h1>
      <p class="muted">Minimal patterns for common input types with native validation hints. Each control has a label, optional hint, and example attributes.</p>
    </header>

    <fieldset>
      <legend>Text-like controls</legend>
      <div class="grid2">
        <div class="row">
          <label for="name">Full name</label>
          <input id="name" name="name" type="text" autocomplete="name" placeholder="e.g., Priya Sharma" required />
          <div class="hint">Use <span class="code">text</span> by default for freeform text.</div>
        </div>

        <div class="row">
          <label for="email">Email</label>
          <input id="email" name="email" type="email" autocomplete="email" placeholder="you@example.com" required />
          <div class="hint">Native format validation + email keyboard on mobile.</div>
        </div>

        <div class="row">
          <label for="tel">Phone</label>
          <input id="tel" name="tel" type="tel" inputmode="tel" autocomplete="tel" placeholder="+91 98xx-xx-xxxx" />
          <div class="hint">Use <span class="code">tel</span> and consider a pattern if strict formatting is needed.</div>
        </div>

        <div class="row">
          <label for="url">Website</label>
          <input id="url" name="url" type="url" placeholder="https://example.com" />
          <div class="hint">Native URL validation; include scheme in placeholder.</div>
        </div>

        <div class="row">
          <label for="pwd">Password</label>
          <input id="pwd" name="pwd" type="password" minlength="8" autocomplete="new-password" />
          <div class="hint">Prefer a "show password" toggle via JS for usability.</div>
        </div>

        <div class="row">
          <label for="search">Search</label>
          <input id="search" name="search" type="search" enterkeyhint="search" />
          <div class="hint">May show a clear "x" affordance; <span class="code">enterkeyhint</span> customizes IME action.</div>
        </div>

        <div class="row">
          <label for="age">Age</label>
          <input id="age" name="age" type="number" min="1" max="120" step="1" inputmode="numeric" />
          <div class="hint">Use <span class="code">number</span> when you need numeric operations (min/max/step).</div>
        </div>
      </div>
    </fieldset>

    <fieldset>
      <legend>Choice controls</legend>
      <div class="grid2">
        <div class="row">
          <label>Interests (checkbox)</label>
          <div class="chips">
            <label><input type="checkbox" name="int" value="html" /> HTML</label>
            <label><input type="checkbox" name="int" value="css" /> CSS</label>
            <label><input type="checkbox" name="int" value="js" /> JS</label>
          </div>
          <div class="hint">Multiple selections allowed.</div>
        </div>

        <div class="row">
          <label>Plan (radio)</label>
          <div class="chips">
            <label><input type="radio" name="plan" value="free" /> Free</label>
            <label><input type="radio" name="plan" value="pro" /> Pro</label>
            <label><input type="radio" name="plan" value="team" /> Team</label>
          </div>
          <div class="hint">Same <span class="code">name</span> groups radios; only one value submits.</div>
        </div>
      </div>
    </fieldset>

    <fieldset>
      <legend>Files</legend>
      <div class="grid2">
        <div class="row">
          <label for="avatar">Avatar</label>
          <input id="avatar" name="avatar" type="file" accept="image/*" />
          <div class="hint"><span class="code">accept</span> filters chooser; always validate on server.</div>
        </div>

        <div class="row">
          <label for="docs">Documents (multiple)</label>
          <input id="docs" name="docs" type="file" accept=".pdf,.doc,.docx" multiple />
          <div class="hint">Use <span class="code">multiple</span> to upload several files.</div>
        </div>
      </div>
    </fieldset>

    <fieldset>
      <legend>Date & time</legend>
      <div class="grid2">
        <div class="row">
          <label for="dob">Date</label>
          <input id="dob" name="dob" type="date" />
          <div class="hint">Calendar picker where supported.</div>
        </div>
        <div class="row">
          <label for="t">Time</label>
          <input id="t" name="t" type="time" step="60" />
          <div class="hint">Step controls seconds/minutes granularity.</div>
        </div>
        <div class="row">
          <label for="dt">Local date-time</label>
          <input id="dt" name="dt" type="datetime-local" />
          <div class="hint">No timezone info is included.</div>
        </div>
        <div class="row">
          <label for="m">Month</label>
          <input id="m" name="m" type="month" />
        </div>
        <div class="row">
          <label for="w">Week</label>
          <input id="w" name="w" type="week" />
        </div>
      </div>
    </fieldset>

    <fieldset>
      <legend>Range & color</legend>
      <div class="grid2">
        <div class="row">
          <label for="vol">Volume</label>
          <input id="vol" name="vol" type="range" min="0" max="100" step="10" />
          <div class="hint">Use <span class="code">range</span> for coarse selection + show value via JS if needed.</div>
        </div>
        <div class="row">
          <label for="favc">Favorite color</label>
          <input id="favc" name="favc" type="color" value="#0ea5e9" />
        </div>
      </div>
    </fieldset>

    <fieldset>
      <legend>Hidden & buttons</legend>
      <div class="grid2">
        <div class="row">
          <label for="token">Hidden token</label>
          <input id="token" name="token" type="hidden" value="abc123" />
          <div class="hint">Hidden values submit with the form but are not visible.</div>
        </div>
        <div class="row">
          <label>Buttons</label>
          <div class="chips">
            <input type="submit" value="Submit" />
            <input type="reset" value="Reset" />
            <button type="button">Button</button>
          </div>
        </div>
      </div>
    </fieldset>

    <section class="dash">
      <h2 style="margin:0 0 6px 0;">Common attributes quick grid</h2>
      <div class="row kvs">
        <div>
          <div><strong>name</strong></div>
          <div class="muted">Key used in submission.</div>
        </div>
        <div>
          <div><strong>value</strong></div>
          <div class="muted">Default value / submitted value.</div>
        </div>
        <div>
          <div><strong>required</strong></div>
          <div class="muted">Blocks submit if empty/invalid.</div>
        </div>

        <div>
          <div><strong>min / max</strong></div>
          <div class="muted">number, date, time, range.</div>
        </div>
        <div>
          <div><strong>step</strong></div>
          <div class="muted">Increment granularity.</div>
        </div>
        <div>
          <div><strong>pattern</strong></div>
          <div class="muted">Regex for text-like inputs.</div>
        </div>

        <div>
          <div><strong>multiple</strong></div>
          <div class="muted">file, email (comma separated).</div>
        </div>
        <div>
          <div><strong>accept</strong></div>
          <div class="muted">File MIME/extensions.</div>
        </div>
        <div>
          <div><strong>autocomplete</strong></div>
          <div class="muted">name, email, organization, etc.</div>
        </div>

        <div>
          <div><strong>inputmode</strong></div>
          <div class="muted">numeric, decimal, tel, email, url.</div>
        </div>
        <div>
          <div><strong>enterkeyhint</strong></div>
          <div class="muted">go, search, send, next, done…</div>
        </div>
        <div>
          <div><strong>readonly / disabled</strong></div>
          <div class="muted">Readonly submits; disabled doesn’t.</div>
        </div>
      </div>
    </section>

    <footer class="muted">
      Tip: Prefer native validation and semantics first; enhance progressively with JS where necessary.
    </footer>
  </main>
  </body>
</html>`;function o(){return l.useEffect(()=>{document.title="Forms · Inputs: type matrix"},[]),e.jsxs(s.Page,{children:[e.jsxs("header",{className:"pageHeader",id:"top",children:[e.jsx("h1",{children:"Inputs: type matrix"}),e.jsx("p",{className:"lede",children:"A compact tour of core input types, their intended use, and the attributes that shape behavior and accessibility. Each example shows a minimal, semantic pattern you can adapt."})]}),e.jsxs("nav",{className:"toc","aria-label":"On this page",children:[e.jsx("a",{href:"#text",children:"Text-like"}),e.jsx("a",{href:"#choice",children:"Choice controls"}),e.jsx("a",{href:"#file",children:"Files"}),e.jsx("a",{href:"#time",children:"Date & time"}),e.jsx("a",{href:"#range",children:"Range/Color"}),e.jsx("a",{href:"#hidden",children:"Hidden & Buttons"}),e.jsx("a",{href:"#attrs",children:"Common attributes"}),e.jsx("a",{href:"#play",children:"Playground"})]}),e.jsxs("section",{id:"text",children:[e.jsx("h2",{children:"Text-like inputs"}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("code",{children:"text"})," is the default; layer constraints with ",e.jsx("code",{children:"required"}),", ",e.jsx("code",{children:"minlength"}),", ",e.jsx("code",{children:"maxlength"}),", ",e.jsx("code",{children:"pattern"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"email"}),", ",e.jsx("code",{children:"url"})," apply format checks and better keyboards on mobile."]}),e.jsxs("li",{children:[e.jsx("code",{children:"number"})," supports ",e.jsx("code",{children:"min"}),", ",e.jsx("code",{children:"max"}),", ",e.jsx("code",{children:"step"}),". Use ",e.jsx("code",{children:"inputmode"})," to improve soft-keyboards."]}),e.jsxs("li",{children:[e.jsx("code",{children:"search"})," may provide clear affordances and a semantic hint to UAs."]})]})})]}),e.jsxs("section",{id:"choice",children:[e.jsx("h2",{children:"Choice controls"}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Checkbox"})," allows multiple choices; each checked value is submitted under the same ",e.jsx("code",{children:"name"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Radio"})," shares the same ",e.jsx("code",{children:"name"})," to enforce a single choice."]}),e.jsxs("li",{children:["Label each control; clicking the text should toggle the control (wrap or use ",e.jsx("code",{children:"for"}),"/",e.jsx("code",{children:"id"}),")."]})]})})]}),e.jsxs("section",{id:"file",children:[e.jsx("h2",{children:"Files"}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["Use ",e.jsx("code",{children:"accept"})," for client-side filtering, but always validate on the server."]}),e.jsxs("li",{children:[e.jsx("code",{children:"multiple"})," allows many files; server must handle arrays."]}),e.jsx("li",{children:"Prefer showing selected filenames and size limits in the UI."})]})})]}),e.jsxs("section",{id:"time",children:[e.jsx("h2",{children:"Date & time"}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("code",{children:"datetime-local"})," has no timezone; store/convert deliberately."]}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"step"})," on ",e.jsx("code",{children:"time"})," to restrict granularity (e.g., 60 for minutes)."]}),e.jsx("li",{children:"Fallbacks may render as text inputs on older browsers—validate server-side."})]})})]}),e.jsxs("section",{id:"range",children:[e.jsx("h2",{children:"Range & color"}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("code",{children:"range"})," is great for approximate values; mirror value visibly."]}),e.jsxs("li",{children:[e.jsx("code",{children:"color"})," provides a picker; still store hex or RGB explicitly."]})]})})]}),e.jsxs("section",{id:"hidden",children:[e.jsx("h2",{children:"Hidden & buttons"}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("code",{children:"hidden"})," submits value invisibly; don’t store secrets in it."]}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:'<button type="button">'})," for non-submit actions."]}),e.jsxs("li",{children:[e.jsx("code",{children:"reset"})," clears values to defaults; use sparingly."]})]})})]}),e.jsxs("section",{id:"attrs",children:[e.jsx("h2",{children:"Common attributes quick reference"}),e.jsx(s.Code,{"aria-label":"Common attributes code example",children:`<input
  name="email"
  type="email"
  required
  autocomplete="email"
  inputmode="email"
  enterkeyhint="send"
/>`}),e.jsxs("p",{className:"note",children:["Combine ",e.jsx("code",{children:"autocomplete"})," tokens with proper labels and ",e.jsx("code",{children:"name"})," attributes to unlock browser autofill and accessibility benefits."]})]}),e.jsxs("section",{id:"play",children:[e.jsx("h2",{children:"Try it live"}),e.jsx("p",{className:"lede",children:"Experiment with attributes, add labels, and observe native validation messages. Autosaves to this lesson."}),e.jsx(d,{storageKey:"core-html:forms:inputs-type-matrix:v1",initialHtml:t,height:720})]}),e.jsxs("nav",{className:"nextPrev","aria-label":"Lesson navigation",children:[e.jsx(a,{to:"/forms/common-attrs",className:"prev","aria-label":"Go to Common attributes",children:"← Common attributes"}),e.jsx(a,{to:"/forms/fieldset-legend",className:"next","aria-label":"Go to Grouping: fieldset + legend",children:"Next: Grouping — fieldset + legend →"})]}),e.jsx("div",{className:"backTop",children:e.jsx("a",{href:"#top",children:"Back to top ↑"})})]})}export{o as default};
