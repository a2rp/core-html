import{d as s,r as t,j as e,N as o}from"./index-D3QNcmKe.js";import{H as c}from"./index-CAjihRuM.js";const i={Page:s.main`
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
    `,Code:s.div`
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
    `,EditorAid:s.section`
        display: grid;
        gap: 8px;
        margin-top: 8px;

        label {
            font-size: 13px;
            color: var(--text-muted);
        }

        textarea {
            width: 100%;
            border: 1px solid var(--border);
            background: var(--card);
            color: var(--text);
            border-radius: 10px;
            padding: 10px 12px;
            resize: vertical;
            min-height: 70px;
            font: 14px/1.6 system-ui, -apple-system, Segoe UI, Roboto,
                sans-serif;
        }

        .meterRow {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 8px;
            font-size: 13px;
            color: var(--text-muted);
        }
        .meterRow .char {
            font-variant-numeric: tabular-nums;
        }
        .meterRow .hint {
            opacity: 0.9;
        }
    `},p=String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Meta description — demo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <!-- Try editing the description below and rerun the preview -->
    <meta name="description" content="A crisp, human-readable summary of this page in about one or two sentences.">

    <!-- Social previews are separate (not a replacement) -->
    <meta property="og:title" content="Meta description — demo">
    <meta property="og:description" content="Social cards often use this. Keep it friendly and informative.">
    <meta name="twitter:card" content="summary_large_image">

    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin:0; padding:24px; font: 14px/1.6 system-ui,-apple-system,Segoe UI,Roboto,sans-serif; }
      .grid { display: grid; gap: 14px; }
      .card { border: 1px solid #ccc; border-radius: 12px; padding: 12px; }
      .muted { color: #6b7280; }
      .ex { border:1px dashed #aaa; padding:8px; border-radius:10px; margin-top:6px; }
      code { background: #f5f5f5; padding:0 6px; border-radius:6px; }
      ul { margin: 8px 0 0 18px; }
      .bad  { background: color-mix(in oklab, #dc2626, transparent 92%); border-color:#f2a6a6; }
      .good { background: color-mix(in oklab, #16a34a, transparent 92%); border-color:#8ed09b; }
    </style>
  </head>
  <body>
    <main class="grid">
      <header>
        <h1>&lt;meta name="description"&gt;</h1>
        <p class="muted">Write a short, concrete summary that helps users choose your result.</p>
      </header>

      <section class="card good">
        <h2>Good examples</h2>
        <div class="ex">
          <p><code>&lt;meta name="description" content="Compare block vs inline elements with visuals and a live editor. Learn when to use each with simple rules of thumb."&gt;</code></p>
          <p><code>&lt;meta name="description" content="Free invoice generator for India: GST, UPI QR, PDF export. No signup required."&gt;</code></p>
        </div>
        <ul>
          <li>Front-load purpose and outcomes.</li>
          <li>Use everyday language; avoid fluff.</li>
          <li>Write uniquely for each page type.</li>
        </ul>
      </section>

      <section class="card bad">
        <h2>Weak examples</h2>
        <div class="ex">
          <p><code>&lt;meta name="description" content="Best website ever. Click now. Amazing amazing amazing."&gt;</code></p>
          <p><code>&lt;meta name="description" content="Home page."&gt;</code></p>
        </div>
        <ul>
          <li>Vague, repetitive, or generic language.</li>
          <li>Keyword stuffing and buzzword salad.</li>
          <li>Same description reused across many pages.</li>
        </ul>
      </section>

      <section class="card">
        <h2>Notes</h2>
        <ul>
          <li>Search engines may rewrite snippets if they can craft a better match to the query.</li>
          <li>Write ~50–160 characters so typical snippets don’t truncate awkwardly.</li>
          <li>Use one description per canonical page; keep variants consistent.</li>
          <li><code>og:description</code> and <code>twitter:description</code> are for social previews (not SEO ranking).</li>
        </ul>
      </section>

      <footer class="muted">
        Tip: Treat this like micro-copy on a button—clear promise, who it’s for, what they get.
      </footer>
    </main>
  </body>
</html>`;function h(r){return[...String(r||"")].length}function g(){const[r,n]=t.useState("Write a short, concrete summary that helps users choose your result."),a=t.useMemo(()=>h(r),[r]),d=t.useMemo(()=>a<50?"A bit short; consider adding concrete benefits.":a>170?"Likely to truncate in many views; tighten the phrasing.":"Nice length for typical snippets.",[a]);return t.useEffect(()=>{document.title='Metadata · <meta name="description">'},[]),e.jsxs(i.Page,{children:[e.jsxs("header",{className:"pageHeader",id:"top",children:[e.jsx("h1",{children:e.jsx("code",{children:'<meta name="description">'})}),e.jsx("p",{className:"lede",children:"A short, human-readable summary of the page. It often appears as the search snippet, so write for humans first: clear purpose, who it’s for, what they’ll get."})]}),e.jsxs("nav",{className:"toc","aria-label":"On this page",children:[e.jsx("a",{href:"#model",children:"Mental model"}),e.jsx("a",{href:"#writing",children:"How to write one"}),e.jsx("a",{href:"#length",children:"Length & duplication"}),e.jsx("a",{href:"#social",children:"Social previews"}),e.jsx("a",{href:"#faq",children:"FAQ"}),e.jsx("a",{href:"#play",children:"Playground"})]}),e.jsxs("section",{id:"model",children:[e.jsx("h2",{children:"Mental model"}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["It’s ",e.jsx("strong",{children:"a promise"})," of what this page delivers, not a keyword bucket."]}),e.jsxs("li",{children:["Think of it as ",e.jsx("strong",{children:"micro-copy"})," for the search results page."]}),e.jsx("li",{children:"One per canonical page. Keep it specific, useful, and true."})]})})]}),e.jsxs("section",{id:"writing",children:[e.jsx("h2",{children:"How to write one"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Do"}),e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"Front-load the value or outcome."}),e.jsx("li",{children:"Use plain language and active voice."}),e.jsx("li",{children:"Consider audience and page type (home, product, doc page, blog)."}),e.jsx("li",{children:"Keep it unique per page."})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Don’t"}),e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"Don’t stuff keywords or exaggerate."}),e.jsx("li",{children:"Don’t copy the same line across the whole site."}),e.jsx("li",{children:"Don’t write headlines; write summaries."})]})]})]}),e.jsxs(i.EditorAid,{children:[e.jsx("label",{htmlFor:"md-draft",children:"Draft a description (live length hint)"}),e.jsx("textarea",{id:"md-draft",value:r,onChange:l=>n(l.target.value),rows:3,spellCheck:"false",placeholder:"Describe this page in 1–2 clear sentences…"}),e.jsxs("div",{className:"meterRow",role:"status","aria-live":"polite",children:[e.jsxs("span",{className:"char",children:[a," chars"]}),e.jsx("span",{className:"hint",children:d})]}),e.jsx(i.Code,{children:e.jsx("pre",{children:String.raw`<meta name="description" content="${r.replace(/"/g,"&quot;")}" />`})})]})]}),e.jsxs("section",{id:"length",children:[e.jsx("h2",{children:"Length & duplication"}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["Heuristic: write ",e.jsx("strong",{children:"~50–160 characters"}),". Shorter can look thin; longer may truncate."]}),e.jsx("li",{children:"Avoid duplicating the same description across many URLs. Summarize what’s different on each page."}),e.jsx("li",{children:"For paginated lists, consider including the range or context (e.g., “Page 2 of tutorials on …”)."})]})})]}),e.jsxs("section",{id:"social",children:[e.jsx("h2",{children:"Social previews (separate tags)"}),e.jsx(i.Code,{children:e.jsx("pre",{children:String.raw`<!-- Search snippet candidate -->
<meta name="description" content="Compare block vs inline elements with visuals and a live editor." />

<!-- Social cards -->
<meta property="og:title" content="Block vs inline — visual guide" />
<meta property="og:description" content="Clear rules, side-by-side examples, and a live editor to practice." />
<meta name="twitter:card" content="summary_large_image" />`})}),e.jsx("p",{className:"note",children:"Social tags help when links are shared. They don’t replace the HTML description and may be shown in different contexts."})]}),e.jsxs("section",{id:"faq",children:[e.jsx("h2",{children:"FAQ"}),e.jsxs("details",{children:[e.jsx("summary",{children:"Does this affect ranking directly?"}),e.jsx("div",{className:"ans",children:"It’s primarily for snippets and click-through. Good summaries can improve user decisions, which indirectly helps."})]}),e.jsxs("details",{children:[e.jsx("summary",{children:"What if search engines ignore my description?"}),e.jsx("div",{className:"ans",children:"They sometimes rewrite snippets to match a query. Keep your copy accurate; provide good on-page content so the rewrite still represents you well."})]})]}),e.jsxs("section",{id:"play",children:[e.jsx("h2",{children:"Try it live"}),e.jsxs("p",{className:"lede",children:["Edit the ",e.jsx("code",{children:'<meta name="description">'})," content and observe the patterns. The editor autosaves to this lesson."]}),e.jsx(c,{storageKey:"core-html:metadata:meta-description:v1",initialHtml:p,height:640})]}),e.jsxs("nav",{className:"nextPrev","aria-label":"Lesson navigation",children:[e.jsx(o,{to:"/metadata/title-quality",className:"prev","aria-label":"Go to <title> quality",children:"← <title> quality"}),e.jsx(o,{to:"/metadata/charset-viewport-recap",className:"next","aria-label":"Go to charset & viewport recap",children:"Next: charset & viewport recap →"})]}),e.jsx("div",{className:"backTop",children:e.jsx("a",{href:"#top",children:"Back to top ↑"})})]})}export{g as default};
