import{d as i,r as t,j as e,N as l}from"./index-CQ_xjxjH.js";import{H as a}from"./index-C8nEF-Cf.js";const o={Page:i.main`
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

        details {
            border: 1px solid var(--border);
            border-radius: 10px;
            padding: 8px 10px;
            background: var(--card);
        }
        details + details {
            margin-top: 8px;
        }
        summary {
            cursor: pointer;
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
    `},s=String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>&lt;select&gt;, &lt;option&gt;, &lt;optgroup&gt; — core demo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui,-apple-system,Segoe UI,Roboto,sans-serif; }
      .grid { display: grid; gap: 14px; }
      .row { display: grid; gap: 12px; grid-template-columns: 220px 1fr; align-items: start; }
      @media (max-width: 900px) { .row { grid-template-columns: 1fr; } }
      fieldset { border: 1px solid #ccc; border-radius: 12px; padding: 12px; }
      legend { padding: 0 6px; opacity: .85; }
      label { display: block; font-weight: 600; margin-bottom: 6px; }
      select, button, input { font: inherit; padding: 8px 10px; }
      select { min-width: 260px; }
      .muted { color: #6b7280; }
      .note { border-left: 3px solid #0ea5e9; background: color-mix(in oklab, #0ea5e9, transparent 92%); padding: 8px 12px; border-radius: 8px; }
      .ex { border:1px dashed #aaa; padding:10px; border-radius:10px; }
      code { background: #f5f5f5; padding: 0 6px; border-radius: 6px; }
      .two { display: grid; gap: 12px; grid-template-columns: repeat(2, minmax(0,1fr)); }
      @media (max-width: 900px) { .two { grid-template-columns: 1fr; } }
      .warning { color: #dc2626; }
      .ok { color: #16a34a; }
      .k { display:inline-block; border:1px solid #bbb; border-radius: 999px; padding:2px 8px; font-size:12px; }
      .stack { display: grid; gap: 8px; }
      .w { max-width: 760px; }
    </style>
  </head>
  <body>
    <main class="grid w">
      <header>
        <h1>&lt;select&gt;, &lt;option&gt;, &lt;optgroup&gt;</h1>
        <p class="muted">Native dropdown/chooser for predefined values. Submits the <em>option's value</em> for its <code>name</code>.</p>
      </header>

      <section>
        <h2>Baseline: labeled select</h2>
        <div class="row">
          <div>
            <label for="country">Country</label>
            <select id="country" name="country">
              <option value="" disabled selected hidden>Choose a country</option>
              <option value="in">India</option>
              <option value="us">United States</option>
              <option value="de">Germany</option>
            </select>
            <p class="muted">The placeholder option is <code>disabled</code>, <code>selected</code>, and <code>hidden</code> with <code>value=""</code>.</p>
          </div>
          <div class="ex">
            <p><strong>Submission preview (conceptual):</strong></p>
            <pre>name=country, value=&lt;selected option's value&gt;</pre>
          </div>
        </div>
      </section>

      <section>
        <h2>Grouping choices with &lt;optgroup&gt;</h2>
        <div class="row">
          <div>
            <label for="city">City</label>
            <select id="city" name="city">
              <option value="" disabled selected hidden>Pick a city</option>
              <optgroup label="India">
                <option value="blr">Bengaluru</option>
                <option value="mum">Mumbai</option>
                <option value="del">Delhi</option>
              </optgroup>
              <optgroup label="USA">
                <option value="nyc">New York</option>
                <option value="sf">San Francisco</option>
                <option value="sea">Seattle</option>
              </optgroup>
            </select>
          </div>
          <div class="ex">
            <ul class="stack">
              <li><code>&lt;optgroup label="…"&gt;</code> creates a non-selectable header.</li>
              <li>You can add <code>disabled</code> on the group to gray out its options.</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2>Disabled group and disabled options</h2>
        <div class="row">
          <div>
            <label for="flavor">Ice-cream flavor</label>
            <select id="flavor" name="flavor" required>
              <option value="" disabled selected hidden>Choose one</option>
              <optgroup label="Best Sellers">
                <option value="choc">Chocolate</option>
                <option value="van">Vanilla</option>
              </optgroup>
              <optgroup label="Seasonal" disabled>
                <option value="mango">Mango</option>
                <option value="lychee">Lychee</option>
              </optgroup>
              <optgroup label="Limited">
                <option value="rose" disabled>Rose (sold out)</option>
                <option value="pista">Pistachio</option>
              </optgroup>
            </select>
            <p class="muted">With <code>required</code>, the placeholder's empty value prevents accidental submission.</p>
          </div>
          <div class="ex">
            <p><span class="k">Tip</span> If a group is <code>disabled</code>, all its options are non-interactive.</p>
          </div>
        </div>
      </section>

      <section>
        <h2>size and multiple</h2>
        <div class="two">
          <div>
            <label for="tz">Time zone (listbox style)</label>
            <select id="tz" name="tz" size="5">
              <optgroup label="Asia">
                <option value="IST">India (IST)</option>
                <option value="JST">Japan (JST)</option>
                <option value="CST-CHN">China (CST)</option>
              </optgroup>
              <optgroup label="Europe">
                <option value="CET">Central Europe (CET)</option>
                <option value="EET">Eastern Europe (EET)</option>
              </optgroup>
              <optgroup label="America">
                <option value="PST">Pacific (PST)</option>
                <option value="EST">Eastern (EST)</option>
              </optgroup>
            </select>
            <p class="muted">Setting <code>size</code> ≥ 2 renders a listbox-like UI. still only one value submits.</p>
          </div>
          <div>
            <label for="langs">Spoken languages (choose multiple)</label>
            <select id="langs" name="langs" multiple size="6">
              <optgroup label="Indian">
                <option value="hi">Hindi</option>
                <option value="bn">Bengali</option>
                <option value="ta">Tamil</option>
              </optgroup>
              <optgroup label="Global">
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
              </optgroup>
            </select>
            <p class="muted">With <code>multiple</code>, the control submits <em>many</em> values. Server receives multiple entries for the same <code>name</code>.</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Option text vs value</h2>
        <div class="row">
          <div>
            <label for="fruit">Fruit</label>
            <select id="fruit" name="fruit">
              <option value="" disabled selected hidden>Pick fruit</option>
              <option value="ap">Apple</option>
              <option value="bn">Banana</option>
              <option>Dragonfruit (no value)</option>
            </select>
          </div>
          <div class="ex">
            <p>When <code>value</code> is omitted, the <em>text content</em> is submitted. Prefer compact, stable <code>value</code>s.</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Keyboard behavior</h2>
        <ul class="stack">
          <li>Closed dropdown: <span class="k">Alt/Option + ↓</span> opens it (UA-dependent).</li>
          <li>Open listbox (<code>size</code>≥2): use <span class="k">↑/↓</span>, <span class="k">Home/End</span>, and type-ahead to jump.</li>
          <li>Type-to-select searches by visible text in current group scope.</li>
        </ul>
      </section>

      <section>
        <h2>Common pitfalls</h2>
        <ul class="stack">
          <li><span class="warning">Avoid</span> using a non-empty placeholder value; keep it <code>value=""</code> with <code>disabled hidden selected</code>.</li>
          <li><span class="warning">Avoid</span> placing headings/HRs inside <code>&lt;select&gt;</code>; only <code>&lt;option&gt;</code> and <code>&lt;optgroup&gt;</code> are permitted.</li>
          <li><span class="ok">Do</span> make sure each <code>&lt;select&gt;</code> has a programmatic label via <code>&lt;label for=…&gt;</code> or wrapping.</li>
          <li><span class="ok">Do</span> use <code>name</code>—without it, nothing is submitted.</li>
        </ul>
      </section>

      <section>
        <h2>Recipe: placeholder + required</h2>
<pre class="ex"><code>&lt;label for="color"&gt;Favorite color&lt;/label&gt;
&lt;select id="color" name="color" required&gt;
  &lt;option value="" disabled selected hidden&gt;Select one&lt;/option&gt;
  &lt;option value="r"&gt;Red&lt;/option&gt;
  &lt;option value="g"&gt;Green&lt;/option&gt;
  &lt;option value="b"&gt;Blue&lt;/option&gt;
&lt;/select&gt;</code></pre>
        <p class="muted">The empty value prevents accidental submission and triggers native validation.</p>
      </section>

      <footer class="muted">
        Prefer native selects for simple categorical choices. Use custom UI only when requirements exceed native capabilities.
      </footer>
    </main>
  </body>
</html>`;function r(){return t.useEffect(()=>{document.title="Forms · <select>, <option>, <optgroup>"},[]),e.jsxs(o.Page,{children:[e.jsxs("header",{className:"pageHeader",id:"top",children:[e.jsxs("h1",{children:[e.jsx("code",{children:"<select>"}),", ",e.jsx("code",{children:"<option>"}),", ",e.jsx("code",{children:"<optgroup>"})]}),e.jsxs("p",{className:"lede",children:["A native control for choosing from predefined values. It submits the selected"," ",e.jsx("code",{children:"value"})," under the control’s ",e.jsx("code",{children:"name"}),". Use"," ",e.jsx("code",{children:"<optgroup>"})," to logically group choices."]})]}),e.jsxs("nav",{className:"toc","aria-label":"On this page",children:[e.jsx("a",{href:"#anatomy",children:"Anatomy"}),e.jsx("a",{href:"#placeholder",children:"Placeholder pattern"}),e.jsx("a",{href:"#grouping",children:"Grouping with optgroup"}),e.jsx("a",{href:"#attrs",children:"Attributes"}),e.jsx("a",{href:"#pitfalls",children:"Pitfalls"}),e.jsx("a",{href:"#play",children:"Playground"})]}),e.jsxs("section",{id:"anatomy",children:[e.jsx("h2",{children:"Anatomy"}),e.jsxs("div",{className:"grid2 card",children:[e.jsx("div",{children:e.jsx(o.Code,{role:"region","aria-label":"Select anatomy",children:e.jsx("pre",{children:String.raw`<label for="pet">Pet</label>
<select id="pet" name="pet">
  <option value="" disabled selected hidden>Choose a pet</option>
  <optgroup label="Common">
    <option value="dog">Dog</option>
    <option value="cat">Cat</option>
  </optgroup>
  <optgroup label="Exotic">
    <option value="axolotl">Axolotl</option>
  </optgroup>
</select>`})})}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Labeling:"})," associate with ",e.jsx("code",{children:"for"})," or wrap the control."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Submission:"})," server receives ",e.jsx("code",{children:"name=pet"})," and selected ",e.jsx("code",{children:"value"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Text vs value:"})," if ",e.jsx("code",{children:"value"})," is missing, option’s text is submitted."]})]})]})]}),e.jsxs("section",{id:"placeholder",children:[e.jsx("h2",{children:"Placeholder pattern"}),e.jsx(o.Code,{children:e.jsx("pre",{children:String.raw`<option value="" disabled selected hidden>Select one</option>`})}),e.jsxs("p",{className:"note",children:["Keep the placeholder’s ",e.jsx("code",{children:"value"})," empty. Combine ",e.jsx("code",{children:"disabled"}),","," ",e.jsx("code",{children:"selected"}),", and ",e.jsx("code",{children:"hidden"})," so it can’t be reselected once a real value is chosen."]})]}),e.jsxs("section",{id:"grouping",children:[e.jsxs("h2",{children:["Grouping with ",e.jsx("code",{children:"<optgroup>"})]}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["Use ",e.jsx("code",{children:"label"})," on ",e.jsx("code",{children:"<optgroup>"})," for a non-interactive header."]}),e.jsxs("li",{children:[e.jsx("code",{children:"disabled"})," on the group grays out all contained options."]}),e.jsxs("li",{children:["Don’t nest arbitrary elements; only ",e.jsx("code",{children:"<option>"})," inside groups."]})]})})]}),e.jsxs("section",{id:"attrs",children:[e.jsx("h2",{children:"Key attributes"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsxs("h3",{children:["On ",e.jsx("code",{children:"<select>"})]}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("code",{children:"name"})," (required for form submission)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"required"}),", ",e.jsx("code",{children:"disabled"})]}),e.jsxs("li",{children:[e.jsx("code",{children:"multiple"}),", ",e.jsx("code",{children:"size"})]}),e.jsxs("li",{children:[e.jsx("code",{children:"autocomplete"})," (token-based; UA support varies)"]})]})]}),e.jsxs("div",{className:"card",children:[e.jsxs("h3",{children:["On ",e.jsx("code",{children:"<option>"})]}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("code",{children:"value"}),", ",e.jsx("code",{children:"label"})," (label overrides text content for display only)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"selected"})," (initial state), ",e.jsx("code",{children:"disabled"})]}),e.jsx("li",{children:"Text content is what type-to-select matches against."})]})]})]})]}),e.jsxs("section",{id:"pitfalls",children:[e.jsx("h2",{children:"Pitfalls"}),e.jsxs("ul",{className:"badges",children:[e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Putting anything other than ",e.jsx("code",{children:"option"}),"/",e.jsx("code",{children:"optgroup"})," inside ",e.jsx("code",{children:"select"}),"."]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Placeholder with non-empty value, causing accidental submissions."]}),e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Good"})," Always include a ",e.jsx("code",{children:"name"})," and a programmatic label."]}),e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Good"})," Use ",e.jsx("code",{children:"optgroup"})," for long lists to speed up scanning."]})]})]}),e.jsxs("section",{id:"play",children:[e.jsx("h2",{children:"Try it live"}),e.jsxs("p",{className:"lede",children:["Edit options, move items into ",e.jsx("code",{children:"<optgroup>"}),"s, try ",e.jsx("code",{children:"multiple"})," and ",e.jsx("code",{children:"size"}),", and validate the placeholder recipe. Autosaves to this lesson."]}),e.jsx(a,{storageKey:"core-html:forms:select-optgroup:v1",initialHtml:s,height:720})]}),e.jsxs("nav",{className:"nextPrev","aria-label":"Lesson navigation",children:[e.jsx(l,{to:"/forms/fieldset-legend",className:"prev","aria-label":"Go to Fieldset + Legend",children:"← Fieldset + Legend"}),e.jsx(l,{to:"/forms/textarea",className:"next","aria-label":"Go to Textarea",children:"Next: Textarea →"})]}),e.jsx("div",{className:"backTop",children:e.jsx("a",{href:"#top",children:"Back to top ↑"})})]})}export{r as default};
