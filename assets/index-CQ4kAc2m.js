import{d as r,r as s,j as e,N as i}from"./index-CQ_xjxjH.js";import{H as a}from"./index-C8nEF-Cf.js";const t={Wrapper:r.div`
        color: var(--text);
        padding: 20px 18px 40px;
        line-height: 1.6;

        h1 {
            font-size: 1.4rem;
            margin: 0 0 8px;
        }
        h2 {
            font-size: 1.05rem;
            margin: 18px 0 8px;
        }
        .lede {
            color: var(--text-muted);
            margin-bottom: 14px;
        }

        .bullets {
            margin: 8px 0 0;
            padding-left: 18px;
        }

        .note {
            margin-top: 10px;
            color: var(--text-muted);
            font-size: 0.92rem;
        }

        .try {
            margin-top: 16px;
        }

        /* Prev + Next (expanded from next-only) */
        .nextPrev {
            margin-top: 24px;
            display: flex;
            justify-content: space-between; /* prev left, next right */
            gap: 12px;
        }
        .nextPrev a,
        .nextPrev .next {
            /* keep original .next styles intact */
            color: var(--primary);
            text-decoration: none;
            border: 1px solid var(--surface-400, #333);
            padding: 8px 12px;
            border-radius: 10px;
        }
        .nextPrev a:hover,
        .nextPrev .next:hover {
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
    `},o=String.raw`<!doctype html>
<html lang="en">
  <head>
    <!-- Put charset early so the parser knows how to decode -->
    <meta charset="utf-8">

    <!-- Title is required; keep it concise and specific -->
    <title>Meta: charset &amp; viewport</title>

    <!-- Viewport: establish a sane mobile baseline -->
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <style>
      :root { color-scheme: light dark; }
      body { font: 14px/1.6 system-ui, -apple-system, Segoe UI, Roboto, sans-serif; padding: 24px; }
      .grid { display: grid; gap: 8px; }
      .card { border: 1px solid #ccc; padding: 12px; border-radius: 8px; }
    </style>
  </head>
  <body>
    <h1>Meta: charset &amp; viewport</h1>
    <div class="grid">
      <div class="card">
        <strong>charset</strong>: Use UTF-8 so all common characters render correctly.
      </div>
      <div class="card">
        <strong>viewport</strong>: Make layouts responsive in mobile browsers by default.
      </div>
    </div>
    <p>Try changing the <code>lang</code>, title, or viewport values and see how it behaves.</p>
  </body>
</html>`;function d(){return s.useEffect(()=>{document.title="Foundations · Meta: charset & viewport"},[]),e.jsxs(t.Wrapper,{children:[e.jsxs("h1",{children:["Meta: ",e.jsx("code",{children:"charset"})," & ",e.jsx("code",{children:"viewport"})]}),e.jsxs("p",{className:"lede",children:["Two tiny tags that prevent big problems. ",e.jsx("code",{children:'<meta charset="utf-8">'})," tells the parser how to read bytes. ",e.jsx("code",{children:'<meta name="viewport" content="width=device-width, initial-scale=1">'}),"sets a sane mobile baseline."]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Recommended order"}),e.jsx(t.Code,{role:"region","aria-label":"Recommended meta order",children:e.jsx("pre",{children:String.raw`<head>
  <meta charset="utf-8">
  <title>Your page title</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- then other meta/links/scripts -->
</head>`})}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"charset"})," goes first so decoding is correct from the start."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"title"})," is required; keep it succinct and page-specific."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"viewport"})," helps responsive CSS behave as intended on phones."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Viewport: common values"}),e.jsx(t.Code,{role:"region","aria-label":"Viewport examples",children:e.jsx("pre",{children:String.raw`<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- Optional tweaks (know why before using) -->
<!-- <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"> -->`})}),e.jsxs("p",{className:"note",children:["Avoid locking zoom (e.g., ",e.jsx("code",{children:"user-scalable=no"}),") unless there’s a very strong accessibility-safe reason."]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Charset: UTF-8"}),e.jsx(t.Code,{role:"region","aria-label":"Charset example",children:e.jsx("pre",{children:String.raw`<meta charset="utf-8">`})}),e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"Handles most languages and symbols without surprises."}),e.jsxs("li",{children:["Place it near the top of ",e.jsx("code",{children:"<head>"})," so the parser uses it immediately."]})]})]}),e.jsxs("section",{className:"try",children:[e.jsx("h2",{children:"Try it"}),e.jsx("p",{children:"Edit the HTML (title, charset position, viewport values) and preview live. Your code autosaves."}),e.jsx(a,{storageKey:"corehtml:foundations:metaCharsetViewport",initialHtml:o})]}),e.jsxs("nav",{className:"nextPrev","aria-label":"Lesson navigation",children:[e.jsx(i,{to:"/foundations/doctype-lang",className:"prev","aria-label":"Go to Doctype & html lang",children:"← Doctype & html lang"}),e.jsx(i,{to:"/foundations/dir-basics",className:"next","aria-label":"Go to dir basics",children:"Next: dir basics (ltr/rtl/bdi/bdo) →"})]})]})}export{d as default};
