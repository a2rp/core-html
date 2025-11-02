import{d as r,r as o,j as e,N as a}from"./index-CQ_xjxjH.js";import{H as t}from"./index-C8nEF-Cf.js";const s={Page:r.main`
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
        .mono {
            font-family: ui-monospace, SFMono-Regular, Menlo, Consolas,
                monospace;
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
    `},i=String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>links — paths & #fragments</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui,-apple-system,Segoe UI,Roboto,sans-serif; }
      h2 { margin-top: 24px; }
      code { background: #f5f5f5; padding: 0 6px; border-radius: 6px; }
      .grid { display: grid; gap: 14px; }
      .card { border: 1px solid #ccc; border-radius: 12px; padding: 12px; }
      .muted { color: #6b7280; }
      .good { background: color-mix(in oklab, #16a34a, transparent 92%); border-color:#8ed09b; }
      .bad  { background: color-mix(in oklab, #dc2626, transparent 92%); border-color:#f2a6a6; }
      a { color: #2563eb; }
      .row { display: grid; gap: 8px; grid-template-columns: 1fr 1fr; }
      @media (max-width: 900px) { .row { grid-template-columns: 1fr; } }
      footer { margin-top: 32px; font-size: 13px; color: #6b7280; }
    </style>
  </head>
  <body>
    <main class="grid">
      <header>
        <h1>Paths & Fragments</h1>
        <p class="muted">Learn how browsers resolve <em>relative</em> vs <em>absolute</em> links and how <code>#fragments</code> jump to element ids.</p>
      </header>

      <section class="card">
        <h2>URL anatomy (quick)</h2>
        <p><code>scheme://user:pass@host:port/path?query#fragment</code></p>
        <ul>
          <li><strong>Origin</strong> = scheme + host + port (e.g., <code>https://example.com</code>).</li>
          <li><strong>Path</strong> locates a resource on that origin.</li>
          <li><strong>Fragment</strong> is <em>client-side only</em>; it isn't sent to the server.</li>
        </ul>
      </section>

      <section class="card">
        <h2>Absolute vs relative</h2>
        <div class="row">
          <div class="good">
            <h3 style="margin-top:0">Absolute</h3>
            <ul>
              <li><code>https://example.com/assets/logo.svg</code></li>
              <li><code>//cdn.example.com/lib.js</code> <span class="muted">(protocol-relative; avoids mixed content issues if used carefully)</span></li>
              <li><code>mailto:hello@example.com</code> <span class="muted">(other schemes work too)</span></li>
            </ul>
          </div>
          <div class="card">
            <h3 style="margin-top:0">Relative</h3>
            <ul>
              <li><code>/images/cat.png</code> <span class="muted">(root-relative; from origin root)</span></li>
              <li><code>./about/team.html</code> <span class="muted">(current folder)</span></li>
              <li><code>../shared/reset.css</code> <span class="muted">(parent folder)</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section class="card">
        <h2>Dot segments & directory slashes</h2>
        <ul>
          <li><code>.</code> = current directory; <code>..</code> = parent directory.</li>
          <li>If a URL ends with a trailing slash (e.g., <code>/docs/</code>), the browser treats it like a folder and requests its default index (commonly <code>index.html</code>).</li>
          <li><strong>Gotcha:</strong> <code>/docs</code> and <code>/docs/</code> can be different routes in SPAs/servers. Be consistent.</li>
        </ul>
      </section>

      <section class="card">
        <h2>&lt;base href&gt;</h2>
        <p><code>&lt;base&gt;</code> changes how <em>all relative URLs</em> resolve on the page.</p>
        <pre class="ex"><code>&lt;!-- Try toggling the base below and observe link targets --&gt;
&lt;base href="/guide/"&gt; &lt;!-- comment me out to compare --&gt;

&lt;a href="intro.html"&gt;Intro (relative)&lt;/a&gt; → resolves to <em>/guide/intro.html</em></code></pre>
        <p class="muted">Only one <code>&lt;base&gt;</code> should be used, and it must be inside <code>&lt;head&gt;</code>.</p>
      </section>

      <section class="card">
        <h2>Fragments (#ids)</h2>
        <ul>
          <li>When a link ends with <code>#something</code>, the browser will scroll to the element whose <code>id="something"</code>.</li>
          <li>Fragments never hit the network; they’re resolved on the client.</li>
        </ul>
        <p>
          <a href="#target-a">Jump to target A</a> ·
          <a href="#target-b">Jump to target B</a> ·
          <a href="#target-c">Jump to target C</a>
        </p>
        <div style="height: 200px"></div>
        <div id="target-a" class="card"><strong>Target A</strong> — hello!</div>
        <div style="height: 200px"></div>
        <div id="target-b" class="card"><strong>Target B</strong> — welcome!</div>
        <div style="height: 200px"></div>
        <div id="target-c" class="card"><strong>Target C</strong> — you made it!</div>
      </section>

      <section class="card bad">
        <h2>Common pitfalls</h2>
        <ul>
          <li>Forgetting the leading slash: <code>href="about"</code> from <code>/blog/</code> becomes <code>/blog/about</code>, not <code>/about</code>.</li>
          <li>Using <code>&lt;base&gt;</code> and then wondering why <code>./script.js</code> 404s. The base rewrote it.</li>
          <li>Linking to <code>#id</code> that doesn’t exist (no scrolling will happen).</li>
        </ul>
      </section>

      <footer>
        Tip: For site-internal navigation in SPAs, prefer your router’s link component. For static HTML, pick root-relative paths to avoid nesting surprises.
      </footer>
    </main>
  </body>
</html>`;function n(){return o.useEffect(()=>{document.title="Links · Paths and fragment identifiers"},[]),e.jsxs(s.Page,{children:[e.jsxs("header",{className:"pageHeader",id:"top",children:[e.jsx("h1",{children:"Paths and fragment identifiers"}),e.jsxs("p",{className:"lede",children:["Learn how browsers resolve links: absolute vs relative paths, how"," ",e.jsx("code",{children:"<base href>"})," rewrites relatives, and how"," ",e.jsx("code",{children:"#fragments"})," target elements by id."]})]}),e.jsxs("nav",{className:"toc","aria-label":"On this page",children:[e.jsx("a",{href:"#anatomy",children:"URL anatomy"}),e.jsx("a",{href:"#absolute-relative",children:"Absolute vs relative"}),e.jsx("a",{href:"#dot-segments",children:"Dot segments"}),e.jsx("a",{href:"#base",children:"Base href"}),e.jsx("a",{href:"#fragments",children:"Fragments"}),e.jsx("a",{href:"#pitfalls",children:"Pitfalls"}),e.jsx("a",{href:"#play",children:"Playground"})]}),e.jsxs("section",{id:"anatomy",children:[e.jsx("h2",{children:"URL anatomy"}),e.jsxs("div",{className:"card",children:[e.jsx("p",{className:"mono",children:"scheme://user:pass@host:port/path?query#fragment"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Origin"})," = scheme + host + port. Relative links stay on the same origin."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Path"})," can be absolute (",e.jsx("code",{children:"/docs/intro"}),") or relative (",e.jsx("code",{children:"../intro"}),")."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Fragment"})," is client-side only; the server never sees it."]})]})]})]}),e.jsxs("section",{id:"absolute-relative",children:[e.jsx("h2",{children:"Absolute vs relative"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Absolute"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["Has a scheme and origin, e.g., ",e.jsx("code",{children:"https://example.org/path"}),"."]}),e.jsx("li",{children:"Good for CDNs, cross-origin assets, and canonical links."})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Relative"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["Resolves against the document URL (or ",e.jsx("code",{children:"<base>"})," if present)."]}),e.jsxs("li",{children:["Use root-relative (",e.jsx("code",{children:"/assets/app.css"}),") to avoid nesting surprises."]})]})]})]})]}),e.jsxs("section",{id:"dot-segments",children:[e.jsx("h2",{children:"Dot segments & slashes"}),e.jsx(s.Code,{children:e.jsx("pre",{children:String.raw`/docs/guide/intro.html
./next.html       → /docs/guide/next.html
../shared.css     → /docs/shared.css
/images/logo.svg  → /images/logo.svg (root-relative)
docs              → /docs/guide/docs (relative to current folder)
docs/             → /docs/guide/docs/ (note the folder)`})}),e.jsxs("p",{className:"note",children:["Servers and SPAs may treat ",e.jsx("code",{children:"/page"})," and ",e.jsx("code",{children:"/page/"})," differently. Pick one and stick to it."]})]}),e.jsxs("section",{id:"base",children:[e.jsx("h2",{children:"<base href> changes everything"}),e.jsx(s.Code,{children:e.jsx("pre",{children:String.raw`<head>
  <base href="/guide/">
  <link rel="stylesheet" href="styles.css">   <!-- resolves to /guide/styles.css -->
</head>`})}),e.jsxs("p",{className:"note",children:["Use at most one ",e.jsx("code",{children:"<base>"}),". It must be inside ",e.jsx("code",{children:"<head>"}),"."]})]}),e.jsxs("section",{id:"fragments",children:[e.jsx("h2",{children:"Fragments (#id)"}),e.jsx(s.Code,{role:"region","aria-label":"Fragment example",children:e.jsx("pre",{children:String.raw`<a href="#install">Jump to install</a>

<h2 id="install">Install</h2>
<p>…content…</p>`})}),e.jsxs("p",{className:"note",children:["A fragment that doesn’t match any ",e.jsx("code",{children:"id"})," won’t scroll. In docs, keep ids stable to avoid broken deep links."]})]}),e.jsxs("section",{id:"pitfalls",children:[e.jsx("h2",{children:"Pitfalls"}),e.jsxs("ul",{className:"badges",children:[e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Relying on ",e.jsx("code",{children:"docs"})," to mean ",e.jsx("code",{children:"/docs"}),"."]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Adding ",e.jsx("code",{children:"<base>"})," in body or having multiple bases."]}),e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Good"})," Prefer root-relative for internal links, absolute for external/CDN."]})]})]}),e.jsxs("section",{id:"play",children:[e.jsx("h2",{children:"Try it live"}),e.jsxs("p",{className:"lede",children:["Toggle the ",e.jsx("code",{children:"<base href>"}),", play with ",e.jsx("code",{children:"./"})," and ",e.jsx("code",{children:"../"}),", and add ",e.jsx("code",{children:"#ids"})," to see fragment scrolling. Autosaves to this lesson."]}),e.jsx(t,{storageKey:"core-html:links:paths-and-fragments:v1",initialHtml:i,height:640})]}),e.jsxs("nav",{className:"nextPrev","aria-label":"Lesson navigation",children:[e.jsx(a,{to:"/links/minimal-anatomy",className:"prev","aria-label":"Go to Anchor anatomy",children:"← Anchor anatomy"}),e.jsx(a,{to:"/links/target-rel-safety",className:"next","aria-label":"Go to target and rel safety",children:"Next: target & rel safety →"})]}),e.jsx("div",{className:"backTop",children:e.jsx("a",{href:"#top",children:"Back to top ↑"})})]})}export{n as default};
