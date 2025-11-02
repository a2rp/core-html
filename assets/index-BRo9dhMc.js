import{d as r,r as n,j as e,N as a}from"./index-D3QNcmKe.js";import{H as s}from"./index-CAjihRuM.js";const t={Wrapper:r.div`
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

        .tryLater,
        .try {
            margin-top: 16px;
        }

        /* Prev/Next navigation (Meta page style, but with both buttons) */
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
    `},i=String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Document</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>body{font:14px/1.5 system-ui,-apple-system,Segoe UI,Roboto,sans-serif;padding:24px}</style>
  </head>
  <body>
    <h1>Hello, semantics!</h1>
    <p>This document starts with a correct HTML5 doctype and declares a language.</p>
  </body>
</html>`;function d(){return n.useEffect(()=>{document.title="Foundations · Doctype & html lang"},[]),e.jsxs(t.Wrapper,{children:[e.jsxs("h1",{children:["Doctype & ",e.jsx("code",{children:"<html lang>"})]}),e.jsxs("p",{className:"lede",children:["Start every HTML document with the HTML5 doctype and declare a language on the ",e.jsx("code",{children:"<html>"})," element. It prevents quirks mode and helps a11y/SEO."]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Minimal, correct start"}),e.jsx(t.Code,{role:"region","aria-label":"Minimal HTML boilerplate",children:e.jsx("pre",{children:String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Document</title>
    <!-- viewport lives here; see: Foundations → Meta: charset & viewport -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
  <body>
    <!-- content -->
  </body>
</html>`})}),e.jsxs("div",{className:"note",children:["Want details on ",e.jsx("code",{children:"<meta charset>"})," and viewport?"," ",e.jsx(a,{to:"/foundations/meta-charset-viewport",className:"inlineLink",children:"Go to Meta: charset & viewport"}),"."]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Why it matters"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Doctype"})," forces standards mode—predictable CSS/layout."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Language"})," improves screen readers/translation/search."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"UTF-8 charset"})," avoids garbled characters."]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Language: picking & overriding"}),e.jsxs("p",{children:["Set the document’s primary language on ",e.jsx("code",{children:"<html lang>"}),". Override on subtrees where content changes."]}),e.jsx(t.Code,{role:"region","aria-label":"Language override example",children:e.jsx("pre",{children:String.raw`<html lang="en">
  <body>
    <p>Primary English text.</p>
    <blockquote lang="hi">यह एक हिन्दी उद्धरण है।</blockquote>
  </body>
</html>`})})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Common mistakes"}),e.jsxs("ul",{className:"badges",children:[e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Missing doctype → quirks mode."]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Legacy doctypes for new docs."]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," No ",e.jsx("code",{children:"lang"})," → mispronounced content."]}),e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Good"})," Always ",e.jsx("code",{children:"<!doctype html>"})," + valid ",e.jsx("code",{children:"lang"}),"."]})]})]}),e.jsxs("section",{className:"tryLater",children:[e.jsx("h2",{children:"Try it"}),e.jsx("p",{children:"Edit the HTML and preview it safely in the right pane. Your code autosaves."}),e.jsx(s,{storageKey:"corehtml:foundations:doctypeLang",initialHtml:i})]}),e.jsx("nav",{className:"nextPrev",children:e.jsx(a,{to:"/foundations/meta-charset-viewport",className:"next",children:"Next: Meta — charset & viewport →"})})]})}export{d as default};
