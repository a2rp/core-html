import{d as r,r as a,j as e,N as i}from"./index-CQ_xjxjH.js";import{H as o}from"./index-C8nEF-Cf.js";const s={Page:r.main`
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
    `,Code:r.div`
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
    `},n=String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>&lt;em&gt; vs &lt;strong&gt; — demo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui,-apple-system,Segoe UI,Roboto,sans-serif; }
      main { display: grid; gap: 14px; }
      .card { border: 1px solid #ccc; border-radius: 12px; padding: 12px; }
      .muted { color: #6b7280; }
      .ex { border:1px dashed #aaa; padding:10px; border-radius:10px; margin-top:8px; }
      code { background:#f5f5f5; padding:0 6px; border-radius:6px; }
      .good { background: color-mix(in oklab, #16a34a, transparent 92%); border-color:#8ed09b; }
      .bad  { background: color-mix(in oklab, #dc2626, transparent 92%); border-color:#f2a6a6; }
    </style>
  </head>
  <body>
    <main>
      <header>
        <h1>&lt;em&gt; vs &lt;strong&gt;</h1>
        <p class="muted">Use <code>&lt;em&gt;</code> for stress emphasis (how something is said). Use <code>&lt;strong&gt;</code> for importance/urgency.</p>
      </header>

      <section class="card good">
        <h2>Emphasis (stress) — <code>&lt;em&gt;</code></h2>
        <p>Changing the meaning by stressing a word:</p>
        <div class="ex">
          <p>I <em>did</em> send the email. (contrast on “did”)</p>
          <p>I did send the <em>email</em>. (contrast on “email” vs something else)</p>
        </div>
      </section>

      <section class="card good">
        <h2>Importance (weight) — <code>&lt;strong&gt;</code></h2>
        <p>Flagging priority/seriousness:</p>
        <div class="ex">
          <p><strong>Warning:</strong> Deleting a project is permanent.</p>
          <p><strong>Required:</strong> Provide a billing email.</p>
        </div>
      </section>

      <section class="card">
        <h2>Nesting levels</h2>
        <p>Nesting compounds the effect:</p>
        <div class="ex">
          <p>This is <em>really <em>really</em></em> late. (double stress)</p>
          <p><strong>Important: <strong>Critical:</strong></strong> Rotate credentials now. (double importance)</p>
        </div>
      </section>

      <section class="card bad">
        <h2>Don’t style semantics backward</h2>
        <p>Using <code>&lt;em&gt;</code> just to italicize or <code>&lt;strong&gt;</code> just to bold is backwards. Use CSS for visuals, elements for meaning.</p>
        <div class="ex">
          <p><!-- ❌ wrong -->
            <em class="bad">Product</em> list title (no stress intended)
          </p>
          <p><!-- ✅ ok -->
            <span style="font-style:italic">Product</span> list title (purely visual)
          </p>
        </div>
      </section>

      <section class="card">
        <h2><code>&lt;i&gt;</code>/<code>&lt;b&gt;</code> vs <code>&lt;em&gt;</code>/<code>&lt;strong&gt;</code></h2>
        <p><code>&lt;i&gt;</code>/<code>&lt;b&gt;</code> are presentational (voice, taxonomy, keywords, pull-quotes). Prefer semantic <code>&lt;em&gt;</code>/<code>&lt;strong&gt;</code> when you mean stress/importance.</p>
        <div class="ex">
          <p>Ship name <i>INS Vikrant</i> (a title in a different voice — <i>ok</i>).</p>
          <p><strong>Heads up:</strong> Maintenance tonight. (importance — use <code>&lt;strong&gt;</code>).</p>
        </div>
      </section>

      <footer class="muted">
        Tip: Ask “Am I changing how the sentence is heard?” → <code>&lt;em&gt;</code>. “Am I marking priority?” → <code>&lt;strong&gt;</code>.
      </footer>
    </main>
  </body>
</html>`;function l(){return a.useEffect(()=>{document.title="Text semantics · <em> vs <strong>"},[]),e.jsxs(s.Page,{children:[e.jsxs("header",{className:"pageHeader",id:"top",children:[e.jsxs("h1",{children:[e.jsx("code",{children:"<em>"})," vs ",e.jsx("code",{children:"<strong>"})]}),e.jsxs("p",{className:"lede",children:[e.jsx("code",{children:"<em>"})," adds ",e.jsx("em",{children:"stress"})," to change interpretation;"," ",e.jsx("code",{children:"<strong>"})," marks ",e.jsx("strong",{children:"importance"})," or urgency. Their default italics/bold are just visuals—meaning survives even if styles change."]})]}),e.jsxs("nav",{className:"toc","aria-label":"On this page",children:[e.jsx("a",{href:"#model",children:"Mental model"}),e.jsx("a",{href:"#levels",children:"Nesting levels"}),e.jsx("a",{href:"#ib",children:"i/b vs em/strong"}),e.jsx("a",{href:"#a11y",children:"Accessibility"}),e.jsx("a",{href:"#pitfalls",children:"Pitfalls"}),e.jsx("a",{href:"#play",children:"Playground"})]}),e.jsxs("section",{id:"model",children:[e.jsx("h2",{children:"Mental model"}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Emphasis = stress"})," (how it’s said). Example: ",e.jsxs("code",{children:["I ",e.jsx("em",{children:"did"})," call."]})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Importance = weight"})," (priority/severity). Example: ",e.jsxs("code",{children:[e.jsx("strong",{children:"Warning:"})," High voltage."]})]}),e.jsxs("li",{children:["Use CSS for italics/bold if you only want style; use ",e.jsx("code",{children:"<em>"}),"/",e.jsx("code",{children:"<strong>"})," for meaning."]})]})})]}),e.jsxs("section",{id:"levels",children:[e.jsx("h2",{children:"Nesting levels"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Layered emphasis"}),e.jsx(s.Code,{role:"region","aria-label":"Nested em example",children:e.jsx("pre",{children:String.raw`I am <em>really <em>sorry</em></em>.`})}),e.jsxs("p",{className:"note",children:["Inner ",e.jsx("code",{children:"<em>"})," increases stress further; screen readers may change prosody."]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Layered importance"}),e.jsx(s.Code,{role:"region","aria-label":"Nested strong example",children:e.jsx("pre",{children:String.raw`<strong>Important: <strong>Critical:</strong></strong> Apply patch now.`})}),e.jsx("p",{className:"note",children:"Use sparingly; overuse dulls the signal."})]})]})]}),e.jsxs("section",{id:"ib",children:[e.jsxs("h2",{children:[e.jsx("code",{children:"<i>"}),"/",e.jsx("code",{children:"<b>"})," vs semantics"]}),e.jsx(s.Code,{role:"region","aria-label":"i/b vs em/strong",children:e.jsx("pre",{children:String.raw`<!-- Presentational -->
<i>INS Vikrant</i> departed.   <!-- voice/offset text -->
<b>In short</b>, caching helps. <!-- keyword style only -->

<!-- Semantic -->
<em>I did</em> file the report.  <!-- stress -->
<strong>Required:</strong> Name.  <!-- importance -->`})}),e.jsxs("p",{className:"note",children:["If a screen reader ignores styles, ",e.jsx("code",{children:"<i>"}),"/",e.jsx("code",{children:"<b>"})," may add little;"," ",e.jsx("code",{children:"<em>"}),"/",e.jsx("code",{children:"<strong>"})," still communicate intent."]})]}),e.jsxs("section",{id:"a11y",children:[e.jsx("h2",{children:"Accessibility notes"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["AT (assistive tech) can change prosody for ",e.jsx("code",{children:"<em>"})," and announce importance for ",e.jsx("code",{children:"<strong>"}),"."]}),e.jsx("li",{children:"Don’t stack importance everywhere; prioritize real warnings, errors, deadlines."}),e.jsxs("li",{children:["Avoid using ",e.jsx("code",{children:"<em>"})," for mere italics in navigation or labels."]})]})]}),e.jsxs("section",{id:"pitfalls",children:[e.jsx("h2",{children:"Pitfalls"}),e.jsxs("ul",{className:"badges",children:[e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Using ",e.jsx("code",{children:"<em>"})," to make headings italic."]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Using ",e.jsx("code",{children:"<strong>"})," to bold every keyword."]}),e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Good"})," Keep semantics aligned with intent; use CSS for pure styling."]})]})]}),e.jsxs("section",{id:"play",children:[e.jsx("h2",{children:"Try it live"}),e.jsx("p",{className:"lede",children:"Convert presentational italics/bold to proper semantics where meaning is intended. Reduce overuse. Add nested levels only when justified."}),e.jsx(o,{storageKey:"core-html:text:em-vs-strong:v1",initialHtml:n,height:640})]}),e.jsxs("nav",{className:"nextPrev","aria-label":"Lesson navigation",children:[e.jsx(i,{to:"/text/p-br-hr",className:"prev","aria-label":"Go to Paragraphs, br, hr",children:"← Paragraphs, br, hr"}),e.jsx(i,{to:"/text/inline-semantics",className:"next","aria-label":"Go to Inline semantics",children:"Next: Inline semantics →"})]}),e.jsx("div",{className:"backTop",children:e.jsx("a",{href:"#top",children:"Back to top ↑"})})]})}export{l as default};
