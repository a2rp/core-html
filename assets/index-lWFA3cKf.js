import{d as r,r as i,j as e,N as s}from"./index-CQ_xjxjH.js";import{H as n}from"./index-C8nEF-Cf.js";const a={Page:r.main`
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

        .table {
            display: grid;
            border: 1px solid var(--border);
            border-radius: 12px;
            overflow: hidden;
            background: var(--card);
            grid-template-columns: 140px 1fr 100px 1fr;
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
    `},d=String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Core Landmarks — demo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; font: 14px/1.6 system-ui,-apple-system,Segoe UI,Roboto,sans-serif; }
      a { color: #0ea5e9; }
      .skip { position:absolute; left:-9999px; top:auto; width:1px; height:1px; overflow:hidden; }
      .skip:focus { position:static; width:auto; height:auto; padding:8px 12px; display:inline-block; background:#0ea5e9; color:#fff; border-radius:8px; margin:8px; }
      header.site { display:flex; gap:12px; align-items:center; padding:12px 16px; border-bottom:1px solid #ddd; }
      nav.primary a { margin-right:10px; text-decoration:none; }
      main { padding:16px; display:grid; gap:16px; grid-template-columns: 1fr 280px; }
      @media (max-width: 900px){ main { grid-template-columns: 1fr; } }
      .card { border:1px solid #ccc; border-radius:10px; padding:12px; }
      aside { background: color-mix(in oklab, #0ea5e9, transparent 92%); border:1px solid #9ccff3; border-radius:10px; padding:12px; }
      footer.site { margin-top:20px; padding:12px 16px; border-top:1px solid #ddd; font-size:12px; color:#6b7280; }
      .articleHead { font-size:13px; color:#6b7280; margin:0 0 6px; }
    </style>
  </head>
  <body>
    <a class="skip" href="#main">Skip to main content</a>

    <header class="site">
      <strong>Brand</strong>
      <nav class="primary" aria-label="Primary">
        <a href="#">Home</a>
        <a href="#">Docs</a>
        <a href="#">Blog</a>
      </nav>
      <!-- search could be here -->
    </header>

    <main id="main">
      <article class="card">
        <header>
          <p class="articleHead">Article header (local)</p>
          <h1>Landmarks keep structure discoverable</h1>
        </header>

        <section class="card">
          <h2>Section inside the article</h2>
          <p>Use <code>&lt;section&gt;</code> for thematic grouping with a heading.</p>
        </section>

        <footer>
          <p class="articleHead">Article footer (meta)</p>
        </footer>
      </article>

      <aside aria-label="On this page">
        <h2>On this page</h2>
        <ul>
          <li><a href="#">Intro</a></li>
          <li><a href="#">Section</a></li>
          <li><a href="#">FAQ</a></li>
        </ul>
      </aside>
    </main>

    <footer class="site">
      <p>© 2025 Brand — global footer at the end of the document</p>
    </footer>
  </body>
</html>`;function c(){return i.useEffect(()=>{document.title="Landmarks · Core landmarks & structure"},[]),e.jsxs(a.Page,{children:[e.jsxs("header",{className:"pageHeader",id:"top",children:[e.jsx("h1",{children:"Core landmarks"}),e.jsxs("p",{className:"lede",children:["Use semantic landmarks to make structure obvious to users, screen readers, and tools:",e.jsx("code",{children:"<main>"}),", ",e.jsx("code",{children:"<header>"}),", ",e.jsx("code",{children:"<nav>"}),",",e.jsx("code",{children:"<section>"}),", ",e.jsx("code",{children:"<article>"}),", ",e.jsx("code",{children:"<aside>"}),", ",e.jsx("code",{children:"<footer>"}),"."]})]}),e.jsxs("nav",{className:"toc","aria-label":"On this page",children:[e.jsx("a",{href:"#map",children:"Landmark map"}),e.jsx("a",{href:"#usage",children:"Usage rules"}),e.jsx("a",{href:"#roles",children:"ARIA roles"}),e.jsx("a",{href:"#skip",children:"Skip link"}),e.jsx("a",{href:"#pitfalls",children:"Pitfalls"}),e.jsx("a",{href:"#faq",children:"FAQ"}),e.jsx("a",{href:"#play",children:"Playground"})]}),e.jsxs("section",{id:"map",children:[e.jsx("h2",{children:"Landmark map (quick reference)"}),e.jsxs("div",{role:"table",className:"table",children:[e.jsxs("div",{role:"row",className:"thead",children:[e.jsx("span",{role:"columnheader",children:"Element"}),e.jsx("span",{role:"columnheader",children:"Meaning"}),e.jsx("span",{role:"columnheader",children:"Count"}),e.jsx("span",{role:"columnheader",children:"Notes"})]}),e.jsxs("div",{role:"row",children:[e.jsx("span",{children:e.jsx("code",{children:"header"})}),e.jsx("span",{children:"Introductory content for page or section"}),e.jsx("span",{children:"Many"}),e.jsxs("span",{children:["Allowed inside ",e.jsx("em",{children:"most"})," sectioning content; not inside ",e.jsx("code",{children:"footer"})," or ",e.jsx("code",{children:"address"}),"."]})]}),e.jsxs("div",{role:"row",children:[e.jsx("span",{children:e.jsx("code",{children:"nav"})}),e.jsx("span",{children:"Major navigation links"}),e.jsx("span",{children:"Few"}),e.jsxs("span",{children:["Prefer one “Primary” nav; label others with ",e.jsx("code",{children:"aria-label"}),"."]})]}),e.jsxs("div",{role:"row",children:[e.jsx("span",{children:e.jsx("code",{children:"main"})}),e.jsx("span",{children:"Main content unique to page"}),e.jsx("span",{children:"One"}),e.jsx("span",{children:"Exactly one per page; do not nest inside article/section."})]}),e.jsxs("div",{role:"row",children:[e.jsx("span",{children:e.jsx("code",{children:"section"})}),e.jsx("span",{children:"Thematic grouping with heading"}),e.jsx("span",{children:"Many"}),e.jsx("span",{children:"Needs an accessible name (usually a heading)."})]}),e.jsxs("div",{role:"row",children:[e.jsx("span",{children:e.jsx("code",{children:"article"})}),e.jsx("span",{children:"Self-contained composition (can be syndicated)"}),e.jsx("span",{children:"Many"}),e.jsx("span",{children:"Comments, cards, posts, docs; can nest articles."})]}),e.jsxs("div",{role:"row",children:[e.jsx("span",{children:e.jsx("code",{children:"aside"})}),e.jsx("span",{children:"Tangential content"}),e.jsx("span",{children:"Few"}),e.jsx("span",{children:"Use for sidebars, callouts, related links."})]}),e.jsxs("div",{role:"row",children:[e.jsx("span",{children:e.jsx("code",{children:"footer"})}),e.jsx("span",{children:"End matter for page or section"}),e.jsx("span",{children:"Many"}),e.jsx("span",{children:"Legal, author, related links. Allowed in sections and articles too."})]})]}),e.jsx("p",{className:"note",children:"Landmarks are about structure and navigation — they don’t dictate visual layout."})]}),e.jsxs("section",{id:"usage",children:[e.jsx("h2",{children:"Usage rules & patterns"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsxs("h3",{children:["One ",e.jsx("code",{children:"main"})]}),e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"Exactly one per document; unique to the page."}),e.jsx("li",{children:"Place a “Skip to main” link that targets it."})]})]}),e.jsxs("div",{className:"card",children:[e.jsxs("h3",{children:[e.jsx("code",{children:"header"}),"/",e.jsx("code",{children:"footer"})]}),e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"Can be global or local (inside section/article)."}),e.jsx("li",{children:"Use local headers/footers for per-section intros/meta."})]})]}),e.jsxs("div",{className:"card",children:[e.jsxs("h3",{children:[e.jsx("code",{children:"nav"})," landmarks"]}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["Label non-primary navigations: ",e.jsx("code",{children:'aria-label="Breadcrumb"'}),"."]}),e.jsxs("li",{children:["Don’t wrap every list in ",e.jsx("code",{children:"nav"}),"; only major navigation blocks."]})]})]}),e.jsxs("div",{className:"card",children:[e.jsxs("h3",{children:[e.jsx("code",{children:"section"})," vs grouping"]}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["Use ",e.jsx("code",{children:"section"})," if you’d name it in a TOC; otherwise ",e.jsx("code",{children:"div"})," is fine."]}),e.jsxs("li",{children:["Every ",e.jsx("code",{children:"section"})," needs a heading (visible or off-screen)."]})]})]})]})]}),e.jsxs("section",{id:"roles",children:[e.jsx("h2",{children:"ARIA roles (mapping)"}),e.jsx(a.Code,{role:"region","aria-label":"Role mapping",children:e.jsx("pre",{children:String.raw`header (page-level) → banner
nav → navigation
main → main
footer (page-level) → contentinfo
aside → complementary
form (top-level) → form
search landmark → role="search"`})}),e.jsxs("p",{className:"note",children:["Native landmarks already expose roles. ",e.jsx("strong",{children:"Do not add redundant roles"})," unless needed to disambiguate."]})]}),e.jsxs("section",{id:"skip",children:[e.jsx("h2",{children:"Skip link pattern"}),e.jsx(a.Code,{role:"region","aria-label":"Skip link",children:e.jsx("pre",{children:String.raw`<a class="skip" href="#main">Skip to main content</a>
<main id="main">…</main>`})}),e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"Place as the first focusable item in the document."}),e.jsx("li",{children:"Reveal on focus via CSS; keep it keyboard-discoverable."})]})]}),e.jsxs("section",{id:"pitfalls",children:[e.jsx("h2",{children:"Pitfalls"}),e.jsxs("ul",{className:"badges",children:[e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Multiple ",e.jsx("code",{children:"main"})," elements."]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Using ",e.jsx("code",{children:"nav"})," for any list of links."]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," ",e.jsx("code",{children:"section"})," with no heading."]}),e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Good"})," Clear, labeled structure + skip link."]})]})]}),e.jsxs("section",{id:"faq",children:[e.jsx("h2",{children:"FAQ"}),e.jsxs("details",{children:[e.jsxs("summary",{children:["Can a page have multiple ",e.jsx("code",{children:"header"}),"s?"]}),e.jsx("div",{className:"ans",children:"Yes — one global site header and local headers inside sections/articles."})]}),e.jsxs("details",{children:[e.jsx("summary",{children:"Should I add roles to every landmark?"}),e.jsx("div",{className:"ans",children:"No. Native semantics are enough. Add roles only to clarify scope/labels."})]})]}),e.jsxs("section",{id:"play",children:[e.jsx("h2",{children:"Try it live"}),e.jsx("p",{className:"lede",children:"Edit the landmarks, add local headers/footers, label navigations, and try a working skip link. Your code autosaves for this lesson."}),e.jsx(n,{storageKey:"core-html:landmarks:core-landmarks:v1",initialHtml:d,height:650})]}),e.jsxs("nav",{className:"nextPrev","aria-label":"Lesson navigation",children:[e.jsx(s,{to:"/skeleton/scripts-styles-placement",className:"prev","aria-label":"Go to Scripts/styles placement",children:"← Scripts/styles placement"}),e.jsx(s,{to:"/landmarks/section-vs-div",className:"next","aria-label":"Go to When to use section vs div",children:"Next: When to use <section> vs <div> →"})]}),e.jsx("div",{className:"backTop",children:e.jsx("a",{href:"#top",children:"Back to top ↑"})})]})}export{c as default};
