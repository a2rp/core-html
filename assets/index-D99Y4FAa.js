import{d as i,r as n,j as e,N as s}from"./index-CQ_xjxjH.js";import{H as d}from"./index-C8nEF-Cf.js";const l={Page:i.main`
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

        .table {
            display: grid;
            border: 1px solid var(--border);
            border-radius: 12px;
            overflow: hidden;
            background: var(--card);
            grid-template-columns: 160px 1fr 1fr 1fr;
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

        #play {
            margin-top: 8px;
        }

        /* Prev + Next (Meta-style, both sides) */
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
    `},c=String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Content Categories — demo map</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <!-- metadata content -->
    <meta name="description" content="Demo for HTML content categories" />
    <link rel="stylesheet" href="data:text/css,body{font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;padding:24px} .box{border:1px solid #aaa;padding:10px;border-radius:8px;margin:8px 0} .hint{color:#777;font-size:12px}" />
  </head>
  <body>
    <h1>Content Categories — quick tour</h1>

    <section class="box">
      <h2>Flow content</h2>
      <p>Most things you can place in <code>&lt;body&gt;</code> belong here.</p>
      <ul>
        <li>Paragraph text (<code>&lt;p&gt;</code>)</li>
        <li>Sections (<code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>)</li>
        <li>Lists (<code>&lt;ul&gt;</code>/<code>&lt;ol&gt;</code>/<code>&lt;li&gt;</code>)</li>
        <li>Media (<code>&lt;figure&gt;</code>, <code>&lt;img&gt;</code>)</li>
      </ul>
    </section>

    <section class="box">
      <h2>Phrasing content</h2>
      <p>Inline text-level semantics: <em>emphasis</em>, <strong>importance</strong>,
         <code>&lt;code&gt;</code>, <abbr title="HyperText Markup Language">HTML</abbr>,
         <a href="#">links</a>, <small>small print</small>.</p>
      <p class="hint">Phrasing is a subset of Flow.</p>
    </section>

    <section class="box">
      <h2>Heading &amp; Sectioning</h2>
      <h3>Sectioning</h3>
      <p><code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;aside&gt;</code>, <code>&lt;nav&gt;</code> define the outline.</p>
      <h3>Heading</h3>
      <p><code>&lt;h1&gt;</code>…<code>&lt;h6&gt;</code> provide headings for the nearest sectioning root.</p>
    </section>

    <section class="box">
      <h2>Embedded &amp; Interactive</h2>
      <p>Embedded: <code>&lt;img&gt;</code>, <code>&lt;video&gt;</code>, <code>&lt;audio&gt;</code>, <code>&lt;svg&gt;</code>, <code>&lt;canvas&gt;</code>.</p>
      <p>Interactive: <button>button</button>, <a href="#">links</a>, <input placeholder="form controls" />.</p>
    </section>

    <section class="box">
      <h2>Form-associated content</h2>
      <form>
        <label>Mail <input type="email" name="mail" autocomplete="email" /></label>
        <button>Send</button>
      </form>
      <p class="hint">Controls like <code>input</code>, <code>select</code>, <code>textarea</code> participate in form submission and constraint validation.</p>
    </section>

    <section class="box">
      <h2>Palpable content</h2>
      <p>Content that is perceivable: headings, paragraphs, images with alt, etc. Some elements (e.g. empty <code>&lt;div&gt;</code>) are not palpable.</p>
    </section>

    <section class="box">
      <h2>Metadata content (in &lt;head&gt;)</h2>
      <p>Examples: <code>&lt;title&gt;</code>, <code>&lt;meta&gt;</code>, <code>&lt;link rel="stylesheet"&gt;</code>, <code>&lt;script&gt;</code> (when in head).</p>
      <p class="hint">Metadata is not Flow; it configures the document.</p>
    </section>

    <footer class="box">
      <p>Try moving elements around to see where they are valid. Keep semantics intact.</p>
    </footer>
  </body>
</html>`;function r(){return n.useEffect(()=>{document.title="Foundations · Content Categories"},[]),e.jsxs(l.Page,{children:[e.jsxs("header",{className:"pageHeader",id:"top",children:[e.jsx("h1",{children:"Content Categories"}),e.jsx("p",{className:"lede",children:"HTML uses overlapping “content categories” to define where elements are allowed and how they behave. Categories are not mutually exclusive: an element can be in several buckets."})]}),e.jsxs("nav",{className:"toc","aria-label":"On this page",children:[e.jsx("a",{href:"#map",children:"Map at a glance"}),e.jsx("a",{href:"#flow",children:"Flow"}),e.jsx("a",{href:"#phrasing",children:"Phrasing"}),e.jsx("a",{href:"#sectioning",children:"Sectioning & Heading"}),e.jsx("a",{href:"#embedded",children:"Embedded"}),e.jsx("a",{href:"#interactive",children:"Interactive"}),e.jsx("a",{href:"#form",children:"Form-associated"}),e.jsx("a",{href:"#palpable",children:"Palpable"}),e.jsx("a",{href:"#metadata",children:"Metadata"}),e.jsx("a",{href:"#dos",children:"Dos / Don’ts"}),e.jsx("a",{href:"#play",children:"Playground"})]}),e.jsxs("section",{id:"map",children:[e.jsx("h2",{children:"Map at a glance"}),e.jsxs("div",{role:"table",className:"table",children:[e.jsxs("div",{role:"row",className:"thead",children:[e.jsx("span",{role:"columnheader",children:"Category"}),e.jsx("span",{role:"columnheader",children:"Meaning"}),e.jsx("span",{role:"columnheader",children:"Typical elements"}),e.jsx("span",{role:"columnheader",children:"Inside allowed"})]}),e.jsxs("div",{role:"row",children:[e.jsx("span",{children:"Flow"}),e.jsx("span",{children:"Most body content"}),e.jsxs("span",{children:[e.jsx("code",{children:"p"}),", ",e.jsx("code",{children:"div"}),", ",e.jsx("code",{children:"ul"}),", ",e.jsx("code",{children:"figure"}),", ",e.jsx("code",{children:"section"})]}),e.jsxs("span",{children:[e.jsx("code",{children:"body"}),", sectioning roots"]})]}),e.jsxs("div",{role:"row",children:[e.jsx("span",{children:"Phrasing"}),e.jsx("span",{children:"Text-level inline"}),e.jsxs("span",{children:[e.jsx("code",{children:"span"}),", ",e.jsx("code",{children:"a"}),", ",e.jsx("code",{children:"em"}),", ",e.jsx("code",{children:"strong"}),", ",e.jsx("code",{children:"img"})]}),e.jsxs("span",{children:["Where phrasing is expected (e.g., ",e.jsx("code",{children:"p"}),")"]})]}),e.jsxs("div",{role:"row",children:[e.jsx("span",{children:"Sectioning"}),e.jsx("span",{children:"Defines outline"}),e.jsxs("span",{children:[e.jsx("code",{children:"section"}),", ",e.jsx("code",{children:"article"}),", ",e.jsx("code",{children:"nav"}),", ",e.jsx("code",{children:"aside"})]}),e.jsx("span",{children:"Within Flow"})]}),e.jsxs("div",{role:"row",children:[e.jsx("span",{children:"Heading"}),e.jsx("span",{children:"Titles for sections"}),e.jsxs("span",{children:[e.jsx("code",{children:"h1"}),"…",e.jsx("code",{children:"h6"}),", ",e.jsx("code",{children:"hgroup"})]}),e.jsx("span",{children:"Where heading is expected"})]}),e.jsxs("div",{role:"row",children:[e.jsx("span",{children:"Embedded"}),e.jsx("span",{children:"External content"}),e.jsxs("span",{children:[e.jsx("code",{children:"img"}),", ",e.jsx("code",{children:"video"}),", ",e.jsx("code",{children:"audio"}),", ",e.jsx("code",{children:"svg"}),", ",e.jsx("code",{children:"canvas"}),", ",e.jsx("code",{children:"iframe"})]}),e.jsx("span",{children:"Flow/Phrasing (varies)"})]}),e.jsxs("div",{role:"row",children:[e.jsx("span",{children:"Interactive"}),e.jsx("span",{children:"User-activated controls"}),e.jsxs("span",{children:[e.jsx("code",{children:"a"}),", ",e.jsx("code",{children:"button"}),", ",e.jsx("code",{children:"input"}),", ",e.jsx("code",{children:"select"}),", ",e.jsx("code",{children:"textarea"}),", ",e.jsx("code",{children:"summary"})]}),e.jsx("span",{children:"Do not nest interactive inside interactive"})]}),e.jsxs("div",{role:"row",children:[e.jsx("span",{children:"Form-associated"}),e.jsx("span",{children:"Participates in form"}),e.jsxs("span",{children:[e.jsx("code",{children:"input"}),", ",e.jsx("code",{children:"button"}),", ",e.jsx("code",{children:"select"}),", ",e.jsx("code",{children:"textarea"}),", ",e.jsx("code",{children:"output"}),", ",e.jsx("code",{children:"label"})]}),e.jsxs("span",{children:["Inside ",e.jsx("code",{children:"form"})," (or associated by attributes)"]})]}),e.jsxs("div",{role:"row",children:[e.jsx("span",{children:"Palpable"}),e.jsx("span",{children:"Perceivable content"}),e.jsxs("span",{children:["Headings, ",e.jsx("code",{children:"p"}),", images with alt, etc."]}),e.jsx("span",{children:"Most Flow contexts"})]}),e.jsxs("div",{role:"row",children:[e.jsx("span",{children:"Metadata"}),e.jsx("span",{children:"Document configuration"}),e.jsxs("span",{children:[e.jsx("code",{children:"title"}),", ",e.jsx("code",{children:"meta"}),", ",e.jsx("code",{children:"link"}),", ",e.jsx("code",{children:"style"}),", ",e.jsx("code",{children:"script"})," (in ",e.jsx("code",{children:"head"}),")"]}),e.jsxs("span",{children:["Inside ",e.jsx("code",{children:"head"})]})]})]}),e.jsxs("p",{className:"note",children:["Categories overlap. For example, ",e.jsx("code",{children:"<a>"})," is phrasing, flow, and interactive."]})]}),e.jsxs("section",{id:"flow",children:[e.jsx("h2",{children:"Flow"}),e.jsxs("p",{children:["Flow is the “default” bucket for elements that can appear in ",e.jsx("code",{children:"<body>"}),". Many elements are both Flow and members of other categories."]}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["Examples: ",e.jsx("code",{children:"div"}),", ",e.jsx("code",{children:"p"}),", ",e.jsx("code",{children:"ul"}),"/",e.jsx("code",{children:"ol"}),"/",e.jsx("code",{children:"li"}),", ",e.jsx("code",{children:"figure"}),", ",e.jsx("code",{children:"table"}),", ",e.jsx("code",{children:"section"}),"."]}),e.jsxs("li",{children:["Not Flow: metadata-only elements like ",e.jsx("code",{children:"title"}),", ",e.jsx("code",{children:"meta"}),", ",e.jsx("code",{children:"link"})," (when in ",e.jsx("code",{children:"head"}),")."]})]})]}),e.jsxs("section",{id:"phrasing",children:[e.jsx("h2",{children:"Phrasing"}),e.jsx("p",{children:"Text-level semantics meant to live inside paragraphs and similar contexts."}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["Examples: ",e.jsx("code",{children:"a"}),", ",e.jsx("code",{children:"em"}),", ",e.jsx("code",{children:"strong"}),", ",e.jsx("code",{children:"span"}),", ",e.jsx("code",{children:"img"}),", ",e.jsx("code",{children:"abbr"}),", ",e.jsx("code",{children:"time"}),"."]}),e.jsxs("li",{children:["Block-only elements (e.g., ",e.jsx("code",{children:"section"}),", ",e.jsx("code",{children:"div"}),") are not phrasing."]})]})]}),e.jsxs("section",{id:"sectioning",children:[e.jsx("h2",{children:"Sectioning & Heading"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Sectioning"}),e.jsx("p",{children:"Defines the document outline and scoping for headings."}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("code",{children:"article"}),", ",e.jsx("code",{children:"section"}),", ",e.jsx("code",{children:"nav"}),", ",e.jsx("code",{children:"aside"})]}),e.jsx("li",{children:"Avoid excessive nesting; prefer meaningful sections."})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Heading"}),e.jsx("p",{children:"Headings label sections. Use a logical hierarchy; avoid skipping levels without reason."}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("code",{children:"h1"}),"…",e.jsx("code",{children:"h6"})," (optionally ",e.jsx("code",{children:"hgroup"}),")"]}),e.jsxs("li",{children:["Multiple ",e.jsx("code",{children:"h1"})," are allowed across different sectioning roots."]})]})]})]})]}),e.jsxs("section",{id:"embedded",children:[e.jsx("h2",{children:"Embedded"}),e.jsx("p",{children:"External or media content that participates in layout via its own behaviors."}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("code",{children:"img"}),", ",e.jsx("code",{children:"video"}),", ",e.jsx("code",{children:"audio"}),", ",e.jsx("code",{children:"svg"}),", ",e.jsx("code",{children:"canvas"}),", ",e.jsx("code",{children:"iframe"})]}),e.jsx("li",{children:"Provide alternative text for images that convey information."})]})]}),e.jsxs("section",{id:"interactive",children:[e.jsx("h2",{children:"Interactive"}),e.jsx("p",{children:"Elements users can activate or focus."}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("code",{children:"a"}),", ",e.jsx("code",{children:"button"}),", ",e.jsx("code",{children:"input"}),", ",e.jsx("code",{children:"select"}),", ",e.jsx("code",{children:"textarea"}),", ",e.jsx("code",{children:"summary"})]}),e.jsx("li",{children:"Do not nest interactive elements inside interactive parents."})]})]}),e.jsxs("section",{id:"form",children:[e.jsx("h2",{children:"Form-associated"}),e.jsx("p",{children:"Elements that submit data or contribute to constraint validation."}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("code",{children:"form"}),", ",e.jsx("code",{children:"label"}),", ",e.jsx("code",{children:"input"}),", ",e.jsx("code",{children:"select"}),", ",e.jsx("code",{children:"textarea"}),", ",e.jsx("code",{children:"button"}),", ",e.jsx("code",{children:"output"})]}),e.jsxs("li",{children:["Associate labels with controls for accessibility; use ",e.jsx("code",{children:"autocomplete"})," tokens."]})]})]}),e.jsxs("section",{id:"palpable",children:[e.jsx("h2",{children:"Palpable"}),e.jsx("p",{children:"Content that conveys information on its own: generally visible and perceivable."}),e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"Examples: headings, paragraphs, figures with captions, images with alt."}),e.jsx("li",{children:"Empty containers or purely styling hooks are not palpable."})]})]}),e.jsxs("section",{id:"metadata",children:[e.jsx("h2",{children:"Metadata"}),e.jsxs("p",{children:["Configuration and relationships for the document; belongs in ",e.jsx("code",{children:"<head>"}),"."]}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("code",{children:"title"}),", ",e.jsx("code",{children:"meta"}),", ",e.jsx("code",{children:"link"}),", ",e.jsx("code",{children:"style"}),", and ",e.jsx("code",{children:"script"})," (when used as metadata)."]}),e.jsxs("li",{children:["Do not place metadata elements in ",e.jsx("code",{children:"<body>"})," (with very few spec-defined exceptions)."]})]})]}),e.jsxs("section",{id:"dos",children:[e.jsx("h2",{children:"Dos / Don’ts"}),e.jsxs("ul",{className:"badges",children:[e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Do"})," Choose the semantic element first; then apply CSS."]}),e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Do"})," Keep headings close to the section they label."]}),e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Do"})," Use interactive elements correctly; avoid role hand-waving."]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Don’t"})," Put metadata in ",e.jsx("code",{children:"<body>"}),"."]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Don’t"})," Nest interactive inside interactive."]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Don’t"})," Replace semantic elements with ",e.jsx("code",{children:"div"}),"/",e.jsx("code",{children:"span"})," without reason."]})]})]}),e.jsxs("section",{id:"play",children:[e.jsx("h2",{children:"Try it live"}),e.jsx("p",{className:"lede",children:"Edit the demo to move elements between contexts and observe what is valid, palpable, or interactive. The code autosaves for this lesson."}),e.jsx(d,{storageKey:"core-html:content-categories:v1",initialHtml:c,height:620})]}),e.jsxs("nav",{className:"nextPrev","aria-label":"Lesson navigation",children:[e.jsx(s,{to:"/foundations/block-vs-inline",className:"prev","aria-label":"Go to Block vs inline",children:"← Block vs inline"}),e.jsx(s,{to:"/skeleton/head-vs-body",className:"next","aria-label":"Go to Document Skeleton — head vs body",children:"Next: Document Skeleton — <head> vs <body> →"})]}),e.jsx("div",{className:"backTop",children:e.jsx("a",{href:"#top",children:"Back to top ↑"})})]})}export{r as default};
