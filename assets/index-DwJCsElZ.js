import{d as i,r as a,j as e,N as s}from"./index-CQ_xjxjH.js";import{H as n}from"./index-C8nEF-Cf.js";const r={Page:i.main`
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

        .chips {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            padding: 0;
            list-style: none;
            margin: 0 0 6px 0;
        }
        .chips li {
            border: 1px solid var(--border);
            background: var(--card);
            padding: 4px 10px;
            border-radius: 999px;
            font-size: 13px;
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
    `},d=String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Void elements — live notes</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui,-apple-system,Segoe UI,Roboto,sans-serif; }
      .grid { display: grid; gap: 14px; }
      .card { border: 1px solid #ccc; border-radius: 12px; padding: 12px; }
      .bad  { background: color-mix(in oklab, #dc2626, transparent 92%); border-color:#f2a6a6; }
      .good { background: color-mix(in oklab, #16a34a, transparent 92%); border-color:#8ed09b; }
      code { background: #f5f5f5; padding: 0 6px; border-radius: 6px; }
      .ex { border:1px dashed #aaa; padding:8px; border-radius:10px; margin-top:6px; }
      .muted { color:#6b7280; }
    </style>
  </head>
  <body>
    <main class="grid">

      <section class="card">
        <h2>Task</h2>
        <p>Fix the invalid HTML by removing fake closing tags and children from void elements.</p>
      </section>

      <section class="card bad">
        <h2>Broken examples</h2>
        <div class="ex">
          <!-- ❌ void elements with children/closing tags -->
          <img src="photo.jpg" alt="A cat"></img>
          <input type="text">Your name</input>
          <br>line</br>
          <hr>rule</hr>
          <meta charset="utf-8"></meta>
          <link rel="stylesheet" href="x.css"></link>
        </div>
      </section>

      <section class="card good">
        <h2>Fix them</h2>
        <div class="ex">
          <!-- ✅ correct HTML -->
          <img src="photo.jpg" alt="A cat">
          <input type="text" name="username">
          <br>
          <hr>
          <meta charset="utf-8">
          <link rel="stylesheet" href="x.css">
        </div>
      </section>

      <footer class="muted">
        Hint: If an element is void, it never has an end tag and never wraps content—ever.
      </footer>
    </main>
  </body>
</html>`;function t(){return a.useEffect(()=>{document.title="Pitfalls · Void elements not self-closing"},[]),e.jsxs(r.Page,{children:[e.jsxs("header",{className:"pageHeader",id:"top",children:[e.jsxs("h1",{children:["Void elements are ",e.jsx("em",{children:"not"})," self-closing in HTML"]}),e.jsxs("p",{className:"lede",children:["A ",e.jsx("strong",{children:"void element"})," is one that never has content. It has no closing tag and cannot wrap children. Writing a trailing slash (",e.jsx("code",{children:"/>"}),") is an XHTML leftover and is ignored by HTML parsers—skip it."]})]}),e.jsxs("nav",{className:"toc","aria-label":"On this page",children:[e.jsx("a",{href:"#what",children:"What is a void element"}),e.jsx("a",{href:"#list",children:"Complete list"}),e.jsx("a",{href:"#rules",children:"Rules"}),e.jsx("a",{href:"#gotchas",children:"Common gotchas"}),e.jsx("a",{href:"#jsx",children:"Note on JSX/TSX"}),e.jsx("a",{href:"#play",children:"Playground"})]}),e.jsxs("section",{id:"what",children:[e.jsx("h2",{children:"What is a void element"}),e.jsx("div",{className:"card",children:e.jsxs("p",{children:["“Void” means the element’s content model is ",e.jsx("em",{children:"empty"}),". In HTML, these elements end right where they begin. No end tag. No children. Whitespace or text placed inside is still content and therefore invalid."]})})]}),e.jsxs("section",{id:"list",children:[e.jsx("h2",{children:"Complete list"}),e.jsxs("div",{className:"card",children:[e.jsxs("ul",{className:"chips",children:[e.jsx("li",{children:e.jsx("code",{children:"area"})}),e.jsx("li",{children:e.jsx("code",{children:"base"})}),e.jsx("li",{children:e.jsx("code",{children:"br"})}),e.jsx("li",{children:e.jsx("code",{children:"col"})}),e.jsx("li",{children:e.jsx("code",{children:"embed"})}),e.jsx("li",{children:e.jsx("code",{children:"hr"})}),e.jsx("li",{children:e.jsx("code",{children:"img"})}),e.jsx("li",{children:e.jsx("code",{children:"input"})}),e.jsx("li",{children:e.jsx("code",{children:"link"})}),e.jsx("li",{children:e.jsx("code",{children:"meta"})}),e.jsx("li",{children:e.jsx("code",{children:"source"})}),e.jsx("li",{children:e.jsx("code",{children:"track"})}),e.jsx("li",{children:e.jsx("code",{children:"wbr"})})]}),e.jsxs("p",{className:"note",children:["Historical XHTML used a trailing slash (",e.jsx("code",{children:"<img … />"}),") to mark emptiness. HTML doesn’t need this. The slash is treated as stray markup and ignored."]})]})]}),e.jsxs("section",{id:"rules",children:[e.jsx("h2",{children:"Rules"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Do"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["Use ",e.jsx("code",{children:"<img>"}),", ",e.jsx("code",{children:"<input>"}),", ",e.jsx("code",{children:"<br>"}),", ",e.jsx("code",{children:"<hr>"})," without end tags."]}),e.jsxs("li",{children:["Provide ",e.jsx("code",{children:"alt"})," on images; use empty ",e.jsx("code",{children:'alt=""'})," for purely decorative images."]}),e.jsxs("li",{children:["Set intrinsic ",e.jsx("code",{children:"width"}),"/",e.jsx("code",{children:"height"})," on images to avoid layout shift."]})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Don’t"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["Write ",e.jsx("code",{children:"<img>…</img>"})," or put text inside a void element."]}),e.jsxs("li",{children:["Rely on ",e.jsx("code",{children:"/>"})," to mean “self-closing” in HTML—browsers ignore it."]}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"<br>"})," to create vertical spacing; use CSS margins instead."]})]})]})]})]}),e.jsxs("section",{id:"gotchas",children:[e.jsx("h2",{children:"Common gotchas"}),e.jsxs("ul",{className:"badges",children:[e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," ",e.jsx("code",{children:"<input>Your name</input>"})," — inputs can’t wrap labels or hints."]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," ",e.jsx("code",{children:"<br>text</br>"})," — no closing tag for line breaks."]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," ",e.jsx("code",{children:'<img src="x.png">Caption</img>'})," — use ",e.jsx("code",{children:"<figure>"})," + ",e.jsx("code",{children:"<figcaption>"})," for captions."]}),e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Good"})," ",e.jsx("code",{children:'<img src="x.png" alt="…" width="800" height="600">'})," — intrinsic size set."]}),e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Good"})," ",e.jsx("code",{children:"<hr>"})," to mark a thematic break (scene change, topic shift), not as a styling line."]})]})]}),e.jsxs("section",{id:"jsx",children:[e.jsx("h2",{children:"Note on JSX/TSX"}),e.jsx(r.Code,{role:"region","aria-label":"JSX note",children:e.jsx("pre",{children:String.raw`// JSX/TSX requires self-closing syntax for empty tags:
<img src="x.png" alt="" />     // ✅ in JSX
<input type="text" />          // ✅ in JSX

// But this is just JSX grammar. The emitted HTML is <img> and <input> without closing tags.`})}),e.jsx("p",{className:"note",children:"JSX is a compile-time syntax for JavaScript UI libraries. HTML rules at runtime are the same: void elements don’t have closing tags and don’t contain children."})]}),e.jsxs("section",{id:"play",children:[e.jsx("h2",{children:"Try it live"}),e.jsxs("p",{className:"lede",children:["Remove fake closing tags and any children from void elements. Add missing attributes like ",e.jsx("code",{children:"alt"})," and intrinsic sizes where relevant. Autosaves to this lesson."]}),e.jsx(n,{storageKey:"core-html:pitfalls:void-elements:v1",initialHtml:d,height:640})]}),e.jsxs("nav",{className:"nextPrev","aria-label":"Lesson navigation",children:[e.jsx(s,{to:"/landmarks/section-vs-div",className:"prev","aria-label":"Go to When to use section vs div",children:"← When to use <section> vs <div>"}),e.jsx(s,{to:"/pitfalls/multiple-h1",className:"next","aria-label":"Go to Multiple H1 per context",children:"Next: Multiple H1 per context →"})]}),e.jsx("div",{className:"backTop",children:e.jsx("a",{href:"#top",children:"Back to top ↑"})})]})}export{t as default};
