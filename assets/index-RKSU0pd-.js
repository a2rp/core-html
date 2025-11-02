import{d as t,r as a,j as e,N as s}from"./index-CQ_xjxjH.js";import{H as d}from"./index-C8nEF-Cf.js";const i={Page:t.main`
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
    `,Code:t.div`
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
    `},r=String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Inline semantics — demo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui,-apple-system,Segoe UI,Roboto,sans-serif; }
      .grid { display: grid; gap: 14px; }
      .card { border: 1px solid #ccc; border-radius: 12px; padding: 12px; }
      .muted { color: #6b7280; }
      .k { display:inline-block; border:1px solid #bbb; border-radius:999px; padding:2px 8px; font-size:12px; }
      .ex { border:1px dashed #aaa; padding:8px; border-radius:10px; margin-top:6px; }
      code { background:#f5f5f5; padding:0 6px; border-radius:6px; }
      mark { padding:0 4px; border-radius:4px; }
      table { border-collapse: collapse; width: 100%; }
      th, td { border: 1px solid #ddd; padding: 6px 8px; text-align: left; }
      th { background: #f3f4f6; }
    </style>
  </head>
  <body>
    <main class="grid">
      <header>
        <h1>Inline semantics</h1>
        <p class="muted">Use inline elements to add meaning without breaking paragraph flow.</p>
      </header>

      <section class="card">
        <h2><code>&lt;span&gt;</code> (generic inline box)</h2>
        <p>Use for styling hooks or grouping text with no extra meaning.</p>
        <div class="ex">
          <p>Price: <span class="k">$</span><span class="price">499</span></p>
        </div>
        <p class="muted">Avoid using <code>span</code> when a semantic tag exists (<code>abbr</code>, <code>time</code>, <code>q</code>, …).</p>
      </section>

      <section class="card">
        <h2><code>&lt;small&gt;</code> (side comments, fine print)</h2>
        <p>Less prominent text like legal notes, disclaimers, asides.</p>
        <div class="ex">
          <p>All plans auto-renew.<small> Cancel anytime before renewal to avoid charges.</small></p>
        </div>
      </section>

      <section class="card">
        <h2><code>&lt;mark&gt;</code> (highlighted passage)</h2>
        <p>Highlights relevant text, often search results or reviewer notes.</p>
        <div class="ex">
          <p>Searching for “<mark>semantic</mark> HTML” returned 12 results.</p>
        </div>
      </section>

      <section class="card">
        <h2><code>&lt;cite&gt;</code> (work title) and <code>&lt;q&gt;</code> (inline quotation)</h2>
        <p><code>cite</code> is for titles of works; <code>q</code> is for a short inline quote (browsers add quotes automatically).</p>
        <div class="ex">
          <p>In <cite>Don’t Make Me Think</cite>, Krug says <q cite="https://example.com/dmmt">usability is common sense</q>.</p>
        </div>
        <p class="muted">Use the <code>cite</code> attribute on <code>q</code> to point to a source URL.</p>
      </section>

      <section class="card">
        <h2><code>&lt;abbr&gt;</code> (abbreviation/initialism)</h2>
        <p>Provide the full form via <code>title</code> for better comprehension and hints.</p>
        <div class="ex">
          <p><abbr title="Search Engine Optimization">SEO</abbr> basics for 2025.</p>
        </div>
      </section>

      <section class="card">
        <h2><code>&lt;time&gt;</code> (machine-readable dates/times)</h2>
        <p>Use the <code>datetime</code> attribute in ISO 8601 so machines can parse the value.</p>
        <div class="ex">
          <p>Event on <time datetime="2025-11-15">Nov 15, 2025</time> at <time datetime="2025-11-15T19:30+05:30">7:30 pm IST</time>.</p>
        </div>
      </section>

      <section class="card">
        <h2>Quick matrix</h2>
        <table>
          <thead><tr><th>Element</th><th>Adds meaning</th><th>Key attribute</th><th>Typical use</th></tr></thead>
          <tbody>
            <tr><td><code>span</code></td><td>No</td><td>—</td><td>Generic inline wrapper</td></tr>
            <tr><td><code>small</code></td><td>Yes</td><td>—</td><td>Fine print/side note</td></tr>
            <tr><td><code>mark</code></td><td>Yes</td><td>—</td><td>Highlighted text (search/result)</td></tr>
            <tr><td><code>cite</code></td><td>Yes</td><td>—</td><td>Title of a work</td></tr>
            <tr><td><code>q</code></td><td>Yes</td><td><code>cite</code> (URL)</td><td>Short quotation</td></tr>
            <tr><td><code>abbr</code></td><td>Yes</td><td><code>title</code></td><td>Abbreviation expansion</td></tr>
            <tr><td><code>time</code></td><td>Yes</td><td><code>datetime</code></td><td>Dates/times in ISO</td></tr>
          </tbody>
        </table>
      </section>

      <section class="card">
        <h2>Pitfalls</h2>
        <ul>
          <li>Using <code>span</code> instead of a semantic element.</li>
          <li>Missing <code>title</code> on <code>abbr</code> or <code>datetime</code> on <code>time</code>.</li>
          <li>Writing manual quotes around <code>q</code> (browsers add them).</li>
          <li>Using <code>cite</code> for a person’s name; it’s for works, not authors.</li>
        </ul>
      </section>

      <footer class="muted">
        Tip: Prefer a dedicated semantic element when it exists; drop to <code>span</code> only when none fits.
      </footer>
    </main>
  </body>
</html>`;function c(){return a.useEffect(()=>{document.title="Text · Inline semantics: span, small, mark, cite, q, abbr, time"},[]),e.jsxs(i.Page,{children:[e.jsxs("header",{className:"pageHeader",id:"top",children:[e.jsxs("h1",{children:["Inline semantics: ",e.jsx("code",{children:"<span>"}),", ",e.jsx("code",{children:"<small>"}),", ",e.jsx("code",{children:"<mark>"}),", ",e.jsx("code",{children:"<cite>"}),", ",e.jsx("code",{children:"<q>"}),", ",e.jsx("code",{children:"<abbr>"}),", ",e.jsx("code",{children:"<time>"})]}),e.jsxs("p",{className:"lede",children:["Use these elements to add meaning without breaking paragraph flow. Where a specific tag exists, avoid a generic ",e.jsx("code",{children:"<span>"}),"."]})]}),e.jsxs("nav",{className:"toc","aria-label":"On this page",children:[e.jsx("a",{href:"#span",children:"span"}),e.jsx("a",{href:"#small",children:"small"}),e.jsx("a",{href:"#mark",children:"mark"}),e.jsx("a",{href:"#cite-q",children:"cite & q"}),e.jsx("a",{href:"#abbr",children:"abbr"}),e.jsx("a",{href:"#time",children:"time"}),e.jsx("a",{href:"#matrix",children:"Quick matrix"}),e.jsx("a",{href:"#play",children:"Playground"})]}),e.jsxs("section",{id:"span",children:[e.jsxs("h2",{children:[e.jsx("code",{children:"<span>"})," — generic inline wrapper"]}),e.jsxs("div",{className:"card",children:[e.jsx("p",{children:"Use for styling hooks and minimal grouping when no semantic element applies."}),e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"Neutral by design; adds no meaning."}),e.jsx("li",{children:"Prefer semantic tags when available."}),e.jsxs("li",{children:["Don’t rely on ",e.jsx("code",{children:"span"})," to convey status/meaning alone."]})]})]})]}),e.jsxs("section",{id:"small",children:[e.jsxs("h2",{children:[e.jsx("code",{children:"<small>"})," — side comments / fine print"]}),e.jsx("div",{className:"card",children:e.jsx("p",{children:"For secondary text: disclaimers, notes, copyright lines."})})]}),e.jsxs("section",{id:"mark",children:[e.jsxs("h2",{children:[e.jsx("code",{children:"<mark>"})," — highlighted text"]}),e.jsx("div",{className:"card",children:e.jsx("p",{children:"Indicates relevance (e.g., search term matches). Avoid using it just to color text."})})]}),e.jsxs("section",{id:"cite-q",children:[e.jsxs("h2",{children:[e.jsx("code",{children:"<cite>"})," (work title) and ",e.jsx("code",{children:"<q>"})," (short quote)"]}),e.jsxs("div",{className:"card",children:[e.jsx(i.Code,{role:"region","aria-label":"cite and q example",children:e.jsx("pre",{children:String.raw`<p>
  In <cite>Understanding Comics</cite>, McCloud writes
  <q cite="https://example.org/uc">art is a way of seeing</q>.
</p>`})}),e.jsxs("p",{className:"note",children:["Use the ",e.jsx("code",{children:"cite"})," attribute on ",e.jsx("code",{children:"q"})," to link to a source. Don’t wrap names in ",e.jsx("code",{children:"cite"}),"."]})]})]}),e.jsxs("section",{id:"abbr",children:[e.jsxs("h2",{children:[e.jsx("code",{children:"<abbr>"})," — abbreviation/initialism"]}),e.jsxs("div",{className:"card",children:[e.jsx(i.Code,{children:e.jsx("pre",{children:String.raw`<p>
  Learn <abbr title="HyperText Markup Language">HTML</abbr> and
  <abbr title="Cascading Style Sheets">CSS</abbr>.
</p>`})}),e.jsxs("p",{className:"note",children:["Always provide the expansion via ",e.jsx("code",{children:"title"}),"."]})]})]}),e.jsxs("section",{id:"time",children:[e.jsxs("h2",{children:[e.jsx("code",{children:"<time>"})," — machine-readable dates/times"]}),e.jsxs("div",{className:"card",children:[e.jsx(i.Code,{children:e.jsx("pre",{children:String.raw`<p>
  Updated on <time datetime="2025-11-02">Nov 2, 2025</time>.
</p>`})}),e.jsxs("p",{className:"note",children:["Use ISO 8601 in ",e.jsx("code",{children:"datetime"})," so machines can parse the value."]})]})]}),e.jsxs("section",{id:"matrix",children:[e.jsx("h2",{children:"Quick matrix"}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"span"}),": generic; no meaning."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"small"}),": fine print/aside."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"mark"}),": highlighted relevance."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"cite"}),": title of a work."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"q"}),": short inline quote; optional ",e.jsx("code",{children:"cite"})," attribute for source."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"abbr"}),": abbreviation; put full form in ",e.jsx("code",{children:"title"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"time"}),": machine-readable date/time via ",e.jsx("code",{children:"datetime"}),"."]})]})})]}),e.jsxs("section",{id:"play",children:[e.jsx("h2",{children:"Try it live"}),e.jsxs("p",{className:"lede",children:["Replace generic ",e.jsx("code",{children:"<span>"})," with specific tags where appropriate, add missing attributes (",e.jsx("code",{children:"title"}),", ",e.jsx("code",{children:"datetime"}),"), and check how quotes render automatically."]}),e.jsx(d,{storageKey:"core-html:text:inline-semantics:v1",initialHtml:r,height:640})]}),e.jsxs("nav",{className:"nextPrev","aria-label":"Lesson navigation",children:[e.jsx(s,{to:"/text/em-vs-strong",className:"prev","aria-label":"Go to Emphasis vs importance",children:"←  Emphasis vs importance"}),e.jsx(s,{to:"/text/code-pre-kbd-samp",className:"next","aria-label":"Go to Code, pre, kbd, samp",children:"Next: Code, pre, kbd, samp →"})]}),e.jsx("div",{className:"backTop",children:e.jsx("a",{href:"#top",children:"Back to top ↑"})})]})}export{c as default};
