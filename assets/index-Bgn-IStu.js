import{d as l,r as d,j as e,N as s}from"./index-CQ_xjxjH.js";import{H as r}from"./index-C8nEF-Cf.js";const o={Page:l.main`
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

        h2 {
            margin-top: 8px;
        }

        .card {
            border: 1px solid var(--border);
            background: var(--card);
            border-radius: 12px;
            padding: 12px;
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

        .bullets {
            padding-left: 18px;
            line-height: 1.8;
        }
        .bullets code {
            font-size: 92%;
        }

        .table {
            display: grid;
            border: 1px solid var(--border);
            border-radius: 12px;
            overflow: hidden;
            background: var(--card);
            grid-template-columns: 180px 1fr 160px 1fr;
        }
        .table > div[role="row"] {
            display: contents;
        }
        .table .thead > span {
            background: var(--surface);
            font-weight: 600;
            padding: 10px;
            border-bottom: 1px solid var(--border);
        }
        .table span {
            padding: 10px;
            border-bottom: 1px solid var(--border);
            border-right: 1px solid var(--border);
        }
        .table span:last-child {
            border-right: 0;
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

        .badges {
            display: grid;
            gap: 8px;
            padding-left: 0;
            list-style: none;
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

        #play {
            margin-top: 8px;
        }

        /* Prev + Next (Meta-style, but both sides) */
        .nextPrev {
            margin-top: 24px;
            display: flex;
            justify-content: space-between; /* prev left, next right */
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

        .backTop {
            text-align: right;
            font-size: 13px;
        }
        .backTop a {
            color: var(--text-muted);
            text-decoration: none;
        }
    `};var n=Object.freeze,c=Object.defineProperty,t=(i,x)=>n(c(i,"raw",{value:n(i.slice())})),a;const p=String.raw(a||(a=t([`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Block vs Inline — mini playground</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root {
        --bg: #0b0d12;
        --card: #12151c;
        --ink: #e6e9ef;
        --muted: #9aa3b2;
        --accent: #5aa2ff;
        --border: #2a2f3a;
        --chip: #1a1f29;
        --accent-2: #ffd166;
      }
      html, body { height: 100%; }
      body {
        margin: 0; padding: 24px; color: var(--ink); background: var(--bg);
        font: 14px/1.6 system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
      }
      h1 { font-size: 20px; margin: 0 0 12px; }
      .lede { color: var(--muted); margin-bottom: 16px; }

      .panel {
        background: var(--card); border: 1px solid var(--border);
        border-radius: 12px; padding: 16px; margin: 16px 0; 
      }
      .row { display: flex; gap: 12px; flex-wrap: wrap; align-items: center; }
      .btn {
        appearance: none; border: 1px solid var(--border); background: #0e121a;
        color: var(--ink); padding: 6px 10px; border-radius: 999px; cursor: pointer;
      }
      .btn[aria-pressed="true"] { border-color: var(--accent); box-shadow: 0 0 0 3px rgba(90,162,255,.2); }
      .hint { color: var(--muted); font-size: 12px; margin-left: 6px; }

      /* Demo blocks */
      .demo { display: grid; gap: 12px; }
      .zoneTitle { color: var(--muted); font-size: 12px; text-transform: uppercase; letter-spacing: .05em; }

      /* Block examples visually boxed */
      .blockExample > * {
        border: 1px dashed var(--border);
        background: #0c1017;
        padding: 8px;
        border-radius: 8px;
      }

      /* Inline chips */
      .chips { border: 1px dashed var(--border); padding: 8px; border-radius: 8px; }
      .chip {
        background: var(--chip);
        padding: 4px 8px;
        border: 1px solid var(--border);
        border-radius: 999px;
        /* default inline */
        display: inline;
      }

      /* Mode flips for inline showcase */
      .mode-inline .chip { display: inline; }
      .mode-inline-block .chip { display: inline-block; }
      .mode-block .chip { display: block; width: max-content; }

      /* Helper visuals for inline layout */
      .chip::after { content: "·"; color: #333; margin-left: 2px; }

      /* Baseline demo */
      .baselineRow { display: flex; align-items: baseline; gap: 8px; border: 1px dashed var(--border); padding: 8px; border-radius: 8px; }
      .baselineRow .big { font-size: 28px; background: #0c1017; padding: 4px 8px; border-radius: 6px; }
      .baselineRow .small { font-size: 12px; background: #0c1017; padding: 4px 8px; border-radius: 6px; }
      .baselineRow img.icon { width: 28px; height: 28px; vertical-align: baseline; outline: 1px dashed var(--border); }

      /* vertical-align showcase */
      .vaBox { border: 1px dashed var(--border); padding: 8px; border-radius: 8px; }
      .vaBox .tag { background: #0c1017; border: 1px solid var(--border); border-radius: 6px; padding: 2px 6px; }
      .vaBox img.icon { width: 28px; height: 28px; outline: 1px dashed var(--border); }
      .vaBox .middle img { vertical-align: middle; }
      .vaBox .top img { vertical-align: text-top; }
      .vaBox .bottom img { vertical-align: text-bottom; }

      /* whitespace + inline formatting context note */
      .codeish { font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: 12px; }
    </style>
  </head>
  <body>
    <h1>Block vs Inline — Live mini playground</h1>
    <p class="lede">
      Block elements create a new row (take available width by default). Inline elements
      flow within a line (respect surrounding text). Toggle modes below to see how
      <code>display</code> affects layout.
    </p>

    <div class="panel">
      <div class="row" role="group" aria-label="Inline display modes">
        <button class="btn" id="modeInline" aria-pressed="true">inline</button>
        <button class="btn" id="modeInlineBlock" aria-pressed="false">inline-block</button>
        <button class="btn" id="modeBlock" aria-pressed="false">block</button>
        <span class="hint">These toggle a class on the container.</span>
      </div>
    </div>

    <div class="demo">
      <div class="panel blockExample">
        <div class="zoneTitle">Block samples (stack)</div>
        <h2>Heading is block</h2>
        <p>Paragraph is block — it spans width and pushes next element to a new line.</p>
        <div>Div is block — notice vertical stacking.</div>
      </div>

      <div class="panel">
        <div class="zoneTitle">Inline samples (flow)</div>
        <p>
          Text contains <em>emphasis</em>, <strong>importance</strong>, and an
          <a href="#">anchor</a>. These are inline by default; they sit within the line box.
        </p>
      </div>

      <div class="panel" id="chipsBox" class="mode-inline">
        <div class="zoneTitle">Change display of these inline chips</div>
        <div class="chips">
          <span class="chip">alpha</span>
          <span class="chip">beta</span>
          <span class="chip">gamma</span>
          <span class="chip">delta</span>
          <span class="chip">epsilon</span>
        </div>
      </div>

      <div class="panel">
        <div class="zoneTitle">Baseline alignment (inline formatting context)</div>
        <div class="baselineRow">
          <span class="big">Baseline</span>
          <img class="icon" src="https://dummyimage.com/28x28/5aa2ff/ffffff.png&text=★" alt="" />
          <span class="small">aligns here</span>
        </div>
        <div class="vaBox">
          <p><span class="tag">vertical-align: baseline (default)</span></p>
          <p class="baseline"><img class="icon" src="https://dummyimage.com/28x28/5aa2ff/ffffff.png&text=A" alt="" /> baseline</p>
          <p class="middle"><span class="tag">middle</span> <img class="icon" src="https://dummyimage.com/28x28/ffd166/000.png&text=M" alt="" /> middle</p>
          <p class="top"><span class="tag">text-top</span> <img class="icon" src="https://dummyimage.com/28x28/ffd166/000.png&text=T" alt="" /> text-top</p>
          <p class="bottom"><span class="tag">text-bottom</span> <img class="icon" src="https://dummyimage.com/28x28/ffd166/000.png&text=B" alt="" /> text-bottom</p>
        </div>
        <p class="codeish">
          Tip: <code>vertical-align</code> only applies to inline/inline-block/table-cell boxes.
        </p>
      </div>

      <div class="panel">
        <div class="zoneTitle">Whitespace and inline flow</div>
        <p>
          Inline content creates <em>line boxes</em>. Whitespace collapses: multiple spaces collapse into one,
          and line breaks can create anonymous blocks or wrap points depending on context.
        </p>
        <p class="codeish">
          Try adding <code>white-space: pre</code> on a container to see raw spacing; or experiment with long words and <code>overflow-wrap</code>.
        </p>
      </div>
    </div>

    <script>
      const box = document.getElementById('chipsBox');
      const btnInline = document.getElementById('modeInline');
      const btnInlineBlock = document.getElementById('modeInlineBlock');
      const btnBlock = document.getElementById('modeBlock');

      function setMode(mode) {
        box.classList.remove('mode-inline','mode-inline-block','mode-block');
        box.classList.add(mode);

        // update aria
        [btnInline, btnInlineBlock, btnBlock].forEach(b => b.setAttribute('aria-pressed','false'));
        if (mode === 'mode-inline') btnInline.setAttribute('aria-pressed','true');
        if (mode === 'mode-inline-block') btnInlineBlock.setAttribute('aria-pressed','true');
        if (mode === 'mode-block') btnBlock.setAttribute('aria-pressed','true');
      }

      // init
      setMode('mode-inline');

      btnInline.addEventListener('click', () => setMode('mode-inline'));
      btnInlineBlock.addEventListener('click', () => setMode('mode-inline-block'));
      btnBlock.addEventListener('click', () => setMode('mode-block'));
    <\/script>
  </body>
</html>`])));function b(){return d.useEffect(()=>{document.title="Foundations · Block vs Inline"},[]),e.jsxs(o.Page,{children:[e.jsxs("header",{className:"pageHeader",id:"top",children:[e.jsx("h1",{children:"Block vs inline"}),e.jsxs("p",{className:"lede",children:["Semantics define ",e.jsx("em",{children:"what"})," an element means; ",e.jsx("code",{children:"display"})," defines",e.jsx("em",{children:"how"})," it participates in layout. Here’s the practical map."]})]}),e.jsxs("nav",{className:"toc","aria-label":"On this page",children:[e.jsx("a",{href:"#mental-model",children:"Mental model"}),e.jsx("a",{href:"#common-elements",children:"Common elements"}),e.jsx("a",{href:"#display-matrix",children:"Display matrix"}),e.jsx("a",{href:"#inline-details",children:"Inline formatting context"}),e.jsx("a",{href:"#pitfalls",children:"Common pitfalls"}),e.jsx("a",{href:"#faq",children:"FAQ"}),e.jsx("a",{href:"#play",children:"Playground"})]}),e.jsxs("section",{id:"mental-model",children:[e.jsx("h2",{children:"Mental model"}),e.jsxs("div",{className:"card",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Block"})," elements create a new row and typically expand to fill their parent’s inline size. Think paragraphs, sections, list items."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Inline"})," elements sit inside a line box like words and icons. They do not accept width/height directly (use padding/border/line-height)."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Inline-block"})," is a hybrid: participates in inline flow but accepts width/height and honors box model like a mini block."]})]})]}),e.jsxs("section",{id:"common-elements",children:[e.jsx("h2",{children:"Common elements"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Block by default"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("code",{children:"div"}),", ",e.jsx("code",{children:"p"}),", ",e.jsx("code",{children:"section"}),", ",e.jsx("code",{children:"article"}),", ",e.jsx("code",{children:"aside"}),", ",e.jsx("code",{children:"header"}),", ",e.jsx("code",{children:"footer"}),", ",e.jsx("code",{children:"nav"})]}),e.jsxs("li",{children:[e.jsx("code",{children:"h1"}),"–",e.jsx("code",{children:"h6"}),", ",e.jsx("code",{children:"ul"}),"/",e.jsx("code",{children:"ol"}),"/",e.jsx("code",{children:"li"}),", ",e.jsx("code",{children:"table"}),", ",e.jsx("code",{children:"figure"}),", ",e.jsx("code",{children:"blockquote"})]}),e.jsxs("li",{children:[e.jsx("code",{children:"form"}),", ",e.jsx("code",{children:"fieldset"}),", ",e.jsx("code",{children:"hr"})]})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Inline by default"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("code",{children:"a"}),", ",e.jsx("code",{children:"em"}),", ",e.jsx("code",{children:"strong"}),", ",e.jsx("code",{children:"span"}),", ",e.jsx("code",{children:"abbr"}),", ",e.jsx("code",{children:"q"}),", ",e.jsx("code",{children:"cite"}),", ",e.jsx("code",{children:"code"}),", ",e.jsx("code",{children:"kbd"}),", ",e.jsx("code",{children:"samp"})]}),e.jsxs("li",{children:[e.jsx("code",{children:"img"})," (replaced inline), ",e.jsx("code",{children:"svg"}),", ",e.jsx("code",{children:"label"}),", ",e.jsx("code",{children:"small"}),", ",e.jsx("code",{children:"mark"}),", ",e.jsx("code",{children:"time"})]}),e.jsxs("li",{children:["Form controls vary (often ",e.jsx("em",{children:"inline-block"}),"/replaced)"]})]})]})]})]}),e.jsxs("section",{id:"display-matrix",children:[e.jsx("h2",{children:"Display matrix (cheat-sheet)"}),e.jsxs("div",{role:"table",className:"table",children:[e.jsxs("div",{role:"row",className:"thead",children:[e.jsx("span",{role:"columnheader",children:"Display"}),e.jsx("span",{role:"columnheader",children:"Layout behavior"}),e.jsx("span",{role:"columnheader",children:"Accepts width/height?"}),e.jsx("span",{role:"columnheader",children:"Typical use"})]}),e.jsxs("div",{role:"row",children:[e.jsx("span",{children:e.jsx("code",{children:"block"})}),e.jsx("span",{children:"Starts on new line; fills inline-size"}),e.jsx("span",{children:"Yes"}),e.jsx("span",{children:"Sections, paragraphs, containers"})]}),e.jsxs("div",{role:"row",children:[e.jsx("span",{children:e.jsx("code",{children:"inline"})}),e.jsx("span",{children:"Flows with text; within line boxes"}),e.jsx("span",{children:"No (padding/border OK)"}),e.jsx("span",{children:"Text-level semantics, icons"})]}),e.jsxs("div",{role:"row",children:[e.jsx("span",{children:e.jsx("code",{children:"inline-block"})}),e.jsx("span",{children:"Flows inline; behaves like a small block"}),e.jsx("span",{children:"Yes"}),e.jsx("span",{children:"Badges, chips, nav items, buttons"})]}),e.jsxs("div",{role:"row",children:[e.jsx("span",{children:e.jsx("code",{children:"list-item"})}),e.jsx("span",{children:"Block + marker (list-style)"}),e.jsx("span",{children:"Yes"}),e.jsxs("span",{children:[e.jsx("code",{children:"li"}),", be careful changing it"]})]}),e.jsxs("div",{role:"row",children:[e.jsxs("span",{children:[e.jsx("code",{children:"table"}),"/",e.jsx("code",{children:"table-*"})]}),e.jsx("span",{children:"Table formatting context"}),e.jsx("span",{children:"Depends"}),e.jsx("span",{children:"Data tables only (not layout)"})]}),e.jsxs("div",{role:"row",children:[e.jsx("span",{children:e.jsx("code",{children:"contents"})}),e.jsx("span",{children:"Box disappears; children participate"}),e.jsx("span",{children:"n/a"}),e.jsx("span",{children:"Rare: wrapper without box (watch a11y)"})]})]}),e.jsxs("p",{className:"note",children:["Changing ",e.jsx("code",{children:"display"})," does ",e.jsx("em",{children:"not"})," change meaning. A ",e.jsx("code",{children:"span"})," with ",e.jsx("code",{children:"display:block"})," is still a",e.jsx("code",{children:"span"})," semantically. Prefer semantic elements first; then style."]})]}),e.jsxs("section",{id:"inline-details",children:[e.jsx("h2",{children:"Inline formatting context (details that bite)"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Line boxes"})," are formed from inline content; height depends on font metrics and line-height."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Baseline alignment"})," dictates how text and images share a line; tweak with ",e.jsx("code",{children:"vertical-align"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Replaced elements"})," (",e.jsx("code",{children:"img"}),", ",e.jsx("code",{children:"video"}),", some inputs) behave differently: intrinsic size, baseline rules vary."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Whitespace collapsing"}),": multiple spaces collapse; newlines may become spaces. Use ",e.jsx("code",{children:"white-space"})," to control."]})]})]}),e.jsxs("section",{id:"pitfalls",children:[e.jsx("h2",{children:"Common pitfalls"}),e.jsxs("ul",{className:"badges",children:[e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Using ",e.jsx("code",{children:"<div>"})," for list items. Use ",e.jsx("code",{children:"<li>"}),"."]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Forcing everything to ",e.jsx("code",{children:"display:inline-block"})," and fighting wrapping."]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Relying on ",e.jsx("code",{children:"vertical-align"})," for centering entire components."]}),e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Good"})," Use inline for text-level semantics; switch to inline-block when you need width/height."]})]})]}),e.jsxs("section",{id:"faq",children:[e.jsx("h2",{children:"FAQ"}),e.jsxs("details",{children:[e.jsx("summary",{children:"Can I put block inside inline?"}),e.jsxs("div",{className:"ans",children:["Historically no, but many browsers tolerate it. Prefer not to — it breaks semantics. Wrap with a block container or switch the parent to ",e.jsx("code",{children:"display:block"}),"/",e.jsx("code",{children:"inline-block"}),"."]})]}),e.jsxs("details",{children:[e.jsx("summary",{children:"Why does my icon sit lower than text?"}),e.jsxs("div",{className:"ans",children:["Baseline alignment. Set ",e.jsx("code",{children:"vertical-align: middle"})," on the icon or adjust line-height."]})]}),e.jsxs("details",{children:[e.jsxs("summary",{children:["When to use ",e.jsx("code",{children:"inline-block"})," vs ",e.jsx("code",{children:"flex"}),"?"]}),e.jsx("div",{className:"ans",children:"For tiny pills/badges where you just need intrinsic-size boxes inline, use inline-block. For multi-axis alignment and gap control, use flex/grid."})]})]}),e.jsxs("section",{id:"play",children:[e.jsx("h2",{children:"Try it live"}),e.jsxs("p",{className:"lede",children:["Edit the HTML/CSS/JS below. Buttons inside the preview switch ",e.jsx("code",{children:"display"})," modes of the chips. Your code autosaves to this lesson only."]}),e.jsx(r,{storageKey:"core-html:block-vs-inline:v2",initialHtml:p,height:600})]}),e.jsxs("nav",{className:"nextPrev","aria-label":"Lesson navigation",children:[e.jsx(s,{to:"/foundations/dir-basics",className:"prev","aria-label":"Go to dir basics",children:"← dir basics"}),e.jsx(s,{to:"/foundations/content-categories",className:"next","aria-label":"Go to Content categories",children:"Next: Content categories →"})]}),e.jsx("div",{className:"backTop",children:e.jsx("a",{href:"#top",children:"Back to top ↑"})})]})}export{b as default};
