import{d as i,r as s,j as e,N as t}from"./index-D3QNcmKe.js";import{H as r}from"./index-CAjihRuM.js";const a={Page:i.main`
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
    `},n=String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>&lt;a&gt; anatomy — href + link text</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui,-apple-system,Segoe UI,Roboto,sans-serif; }
      main { display: grid; gap: 16px; }
      .grid { display: grid; gap: 12px; }
      .card { border: 1px solid #ccc; border-radius: 12px; padding: 12px; }
      .good { background: color-mix(in oklab, #16a34a, transparent 92%); border-color:#8ed09b; }
      .bad  { background: color-mix(in oklab, #dc2626, transparent 92%); border-color:#f2a6a6; }
      .muted { color: #6b7280; }
      .ex { border:1px dashed #aaa; padding:10px; border-radius:10px; margin-top:6px; }
      code { background: #f5f5f5; padding: 0 6px; border-radius: 6px; }
    </style>
  </head>
  <body>
    <main>
      <header>
        <h1>&lt;a&gt; anatomy (href + text)</h1>
        <p class="muted">A real link needs an <code>href</code> and meaningful link text. Without <code>href</code>, it’s just inline text.</p>
      </header>

      <section class="card good">
        <h2>Minimum viable link</h2>
        <p>At minimum, an anchor has <code>href</code> and visible text.</p>
        <div class="ex">
          <a href="https://developer.mozilla.org/">MDN Web Docs</a>
        </div>
      </section>

      <section class="card bad">
        <h2>Not a link (missing href)</h2>
        <p>Without <code>href</code>, it won’t navigate, won’t be tabbable as a link, and won’t announce as a link to screen readers.</p>
        <div class="ex">
          <a>Click here</a> <!-- ⚠ no href -->
        </div>
      </section>

      <section class="card">
        <h2>Common href forms</h2>
        <ul>
          <li><code>https://example.com/docs</code> — absolute URL</li>
          <li><code>/docs/get-started</code> — root-relative URL</li>
          <li><code>getting-started.html</code> — document-relative URL</li>
          <li><code>#features</code> — jump to element with <code>id="features"</code></li>
          <li><code>mailto:hello@example.com</code> — open default mail client</li>
          <li><code>tel:+919999999999</code> — dialer on supported devices</li>
        </ul>
        <div class="ex">
          <p>
            <a href="#details">Jump to details</a> ·
            <a href="/home">Go to site home</a> ·
            <a href="mailto:hi@example.com">Email us</a>
          </p>
        </div>
      </section>

      <section class="card bad">
        <h2>Avoid placeholders</h2>
        <p>These either do nothing or are hostile to users and assistive tech:</p>
        <ul>
          <li><code>&lt;a href="#"&gt;...&lt;/a&gt;</code> (jumps to top; breaks back/scroll)</li>
          <li><code>&lt;a href="javascript:void(0)"&gt;...&lt;/a&gt;</code> (no navigation; smells like a button)</li>
        </ul>
        <div class="ex">
          <a href="#">Fake link</a> ·
          <a href="javascript:void(0)">Another fake link</a>
        </div>
      </section>

      <section class="card">
        <h2>Link text quality (micro-guidance)</h2>
        <p>A link’s visible text becomes its accessible name. Make it specific and self-contained.</p>
        <ul>
          <li class="good"><strong>Good:</strong> <code>&lt;a href="/pricing"&gt;Compare pricing plans&lt;/a&gt;</code></li>
          <li class="bad"><strong>Bad:</strong> <code>&lt;a href="/pricing"&gt;Click here&lt;/a&gt;</code></li>
        </ul>
      </section>

      <section id="details" class="card">
        <h2>Inline content inside a link</h2>
        <p>An anchor can contain phrasing content (text, <code>&lt;em&gt;</code>, <code>&lt;strong&gt;</code>, inline SVG, icons).</p>
        <div class="ex">
          <a href="/docs/get-started">
            <strong>Get started</strong>
            <span class="muted"> — quick guide</span>
          </a>
        </div>
      </section>

      <section class="card">
        <h2>What about <code>target</code> / <code>rel</code>?</h2>
        <p>Opening in a new tab/window (<code>target="_blank"</code>) and safety attributes (<code>rel="noopener"</code>) are covered in a later lesson.</p>
      </section>

      <footer class="muted">
        Tip: If it triggers an in-page action (not navigation), consider a <code>&lt;button&gt;</code> instead.
      </footer>
    </main>
  </body>
</html>`;function l(){return s.useEffect(()=>{document.title="Links · <a> anatomy (href, text)"},[]),e.jsxs(a.Page,{children:[e.jsxs("header",{className:"pageHeader",id:"top",children:[e.jsxs("h1",{children:[e.jsx("code",{children:"<a>"})," anatomy (href, text)"]}),e.jsxs("p",{className:"lede",children:["A real link needs an ",e.jsx("code",{children:"href"})," and meaningful text. The text you write is also the link’s accessible name—keep it clear and self-contained."]})]}),e.jsxs("nav",{className:"toc","aria-label":"On this page",children:[e.jsx("a",{href:"#what-makes-link",children:"What makes a link"}),e.jsx("a",{href:"#href-basics",children:"href basics"}),e.jsx("a",{href:"#text-quality",children:"Text quality"}),e.jsx("a",{href:"#inline-content",children:"Inline content"}),e.jsx("a",{href:"#play",children:"Playground"})]}),e.jsxs("section",{id:"what-makes-link",children:[e.jsx("h2",{children:"What makes a link"}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsxs("strong",{children:["Needs ",e.jsx("code",{children:"href"})]}),": without it, it’s not keyboard-navigable nor announced as a link."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Needs text"}),": visible text (or an accessible name) describes the destination."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Inline semantic"}),": anchors are phrasing content; nest phrasing elements, not block layout containers."]})]})})]}),e.jsxs("section",{id:"href-basics",children:[e.jsx("h2",{children:"href basics"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Valid, useful destinations"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["Absolute or relative URLs (",e.jsx("code",{children:"https://…"}),", ",e.jsx("code",{children:"/path"}),", ",e.jsx("code",{children:"page.html"}),")."]}),e.jsxs("li",{children:["Fragment IDs (",e.jsx("code",{children:"#faq"}),") to jump within the document."]}),e.jsxs("li",{children:[e.jsx("code",{children:"mailto:"})," and ",e.jsx("code",{children:"tel:"})," where appropriate."]})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Avoid placeholders"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("code",{children:'href="#"'})," or ",e.jsx("code",{children:'href="javascript:void(0)"'}),"—these are not real destinations."]}),e.jsxs("li",{children:["If it triggers UI, use a ",e.jsx("code",{children:"<button>"})," instead."]})]})]})]})]}),e.jsxs("section",{id:"text-quality",children:[e.jsx("h2",{children:"Link text quality"}),e.jsx(a.Code,{children:e.jsx("pre",{children:String.raw`<!-- Specific, self-contained -->
<a href="/docs/accessibility/skip-link">Add a skip link to jump to main content</a>

<!-- Vague; avoid -->
<a href="/docs/accessibility/skip-link">Click here</a>`})}),e.jsx("p",{className:"note",children:"Screen readers often scan links out of context. Make each link informative on its own."})]}),e.jsxs("section",{id:"inline-content",children:[e.jsx("h2",{children:"Inline content inside a link"}),e.jsx(a.Code,{children:e.jsx("pre",{children:String.raw`<!-- Phrasing content inside is fine -->
<a href="/get-started">
  <strong>Get started</strong> <span aria-hidden="true">→</span>
</a>`})})]}),e.jsxs("section",{id:"play",children:[e.jsx("h2",{children:"Try it live"}),e.jsxs("p",{className:"lede",children:["Fix broken anchors by adding real ",e.jsx("code",{children:"href"})," values, improve the link text, and convert fake links to buttons where they trigger actions."]}),e.jsx(r,{storageKey:"core-html:links:minimal-anatomy:v1",initialHtml:n,height:640})]}),e.jsxs("nav",{className:"nextPrev","aria-label":"Lesson navigation",children:[e.jsx(t,{to:"/headings/h1-h6-hierarchy",className:"prev","aria-label":"Go to Headings hierarchy",children:"← Headings hierarchy"}),e.jsx(t,{to:"/links/paths-and-fragments",className:"next","aria-label":"Go to Absolute vs relative, #ids",children:"Next: Absolute vs relative, #ids →"})]}),e.jsx("div",{className:"backTop",children:e.jsx("a",{href:"#top",children:"Back to top ↑"})})]})}export{l as default};
