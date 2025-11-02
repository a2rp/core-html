import{d as a,r as i,j as e,N as s}from"./index-D3QNcmKe.js";import{H as r}from"./index-CAjihRuM.js";const o={Page:a.main`
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
    `,Code:a.div`
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
    <title>robots meta — playground</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <!--
      Defaults (no tag): index,follow
      Add directives only when you need to change the default.
    -->
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui,-apple-system,Segoe UI,Roboto,sans-serif; }
      .grid { display: grid; gap: 14px; max-width: 1000px; margin: 0 auto; }
      .card { border: 1px solid #ccc; border-radius: 12px; padding: 12px; background: #fff; }
      .muted { color: #6b7280; }
      code { background: #f5f5f5; padding: 0 6px; border-radius: 6px; }
      .ex { border: 1px dashed #aaa; padding: 8px; border-radius: 10px; margin-top: 6px; }
      .bad { background: #fef2f2; border-color: #fca5a5; }
      .good { background: #f0fdf4; border-color: #86efac; }
    </style>
  </head>
  <body>
    <main class="grid">
      <header>
        <h1>&lt;meta name="robots"&gt;</h1>
        <p class="muted">Control whether a page is indexed and whether its links are followed.</p>
      </header>

      <section class="card good">
        <h2>Default (no tag needed)</h2>
        <p>Search engines assume <code>index,follow</code> when no robots directive is present.</p>
        <div class="ex">
          <p>No tag here → page can be indexed; links can be followed.</p>
        </div>
      </section>

      <section class="card">
        <h2>Block indexing (but still crawl links)</h2>
        <p>Use <code>noindex,follow</code> when the page shouldn't appear in results, but its links should still be discovered.</p>
        <div class="ex">
          <meta name="robots" content="noindex,follow">
        </div>
      </section>

      <section class="card bad">
        <h2>Block both indexing and following</h2>
        <p>Use <code>noindex,nofollow</code> when you don't want the page indexed or its links used for discovery.</p>
        <div class="ex">
          <meta name="robots" content="noindex,nofollow">
        </div>
      </section>

      <section class="card">
        <h2>Other directives (examples)</h2>
        <ul>
          <li><code>noarchive</code> — don't show cached copy</li>
          <li><code>nosnippet</code> — don't show text/preview snippet</li>
          <li><code>max-image-preview:large</code> — allow larger image previews</li>
          <li><code>notranslate</code> — disable automatic translation UI</li>
        </ul>
        <div class="ex">
          <meta name="robots" content="index,follow,noarchive,max-image-preview:large">
        </div>
      </section>

      <section class="card">
        <h2>Per-bot rules</h2>
        <p>Target a specific crawler using its product name as the <code>name</code> value:</p>
        <div class="ex">
          <meta name="googlebot" content="noimageindex">
          <meta name="bingbot" content="max-snippet:-1">
        </div>
      </section>

      <footer class="muted">
        Tip: For PDFs/images or site-wide patterns, consider an HTTP <code>X-Robots-Tag</code> header instead.
      </footer>
    </main>
  </body>
</html>`;function t(){return i.useEffect(()=>{document.title='Metadata · <meta name="robots"> basics (index, follow)'},[]),e.jsxs(o.Page,{children:[e.jsxs("header",{className:"pageHeader",id:"top",children:[e.jsxs("h1",{children:[e.jsx("code",{children:'<meta name="robots">'})," — index/follow basics"]}),e.jsxs("p",{className:"lede",children:["Crawlers make two decisions: can this page be indexed, and should its links be followed? The default is"," ",e.jsx("code",{children:"index, follow"}),". Add a robots meta tag only when you need to change that."]})]}),e.jsxs("nav",{className:"toc","aria-label":"On this page",children:[e.jsx("a",{href:"#model",children:"Mental model"}),e.jsx("a",{href:"#directives",children:"Common directives"}),e.jsx("a",{href:"#page-vs-bot",children:"Per-page vs per-bot"}),e.jsx("a",{href:"#appearance",children:"Search appearance"}),e.jsx("a",{href:"#faq",children:"FAQ"}),e.jsx("a",{href:"#play",children:"Playground"})]}),e.jsxs("section",{id:"model",children:[e.jsx("h2",{children:"Mental model"}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"index"})," means the page can appear in search results."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"follow"})," means links on the page can be crawled for discovery."]}),e.jsxs("li",{children:["Without any tag, engines assume ",e.jsx("code",{children:"index, follow"}),"."]}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"noindex"})," for pages like login/thank-you where listing is not useful."]})]})})]}),e.jsxs("section",{id:"directives",children:[e.jsx("h2",{children:"Common directives"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Indexing"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("code",{children:"index"})," (default)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"noindex"})," — exclude this page from results"]})]}),e.jsx(o.Code,{"aria-label":"noindex example",children:e.jsx("pre",{children:String.raw`<meta name="robots" content="noindex,follow">`})})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Following links"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("code",{children:"follow"})," (default)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"nofollow"})," — don't use page links for discovery/ranking"]})]}),e.jsx(o.Code,{"aria-label":"nofollow example",children:e.jsx("pre",{children:String.raw`<meta name="robots" content="index,nofollow">`})})]})]}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Snippets & previews"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("code",{children:"nosnippet"})," — hide text snippet"]}),e.jsxs("li",{children:[e.jsx("code",{children:"max-snippet:120"})," — cap snippet length"]}),e.jsxs("li",{children:[e.jsx("code",{children:"max-image-preview:large"})," — allow large image previews"]}),e.jsxs("li",{children:[e.jsx("code",{children:"max-video-preview:0"})," — disable video preview"]})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Cache & translation"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("code",{children:"noarchive"})," — no cached copy"]}),e.jsxs("li",{children:[e.jsx("code",{children:"notranslate"})," — hide translation UI"]})]})]})]})]}),e.jsxs("section",{id:"page-vs-bot",children:[e.jsx("h2",{children:"Per-page vs per-bot"}),e.jsxs("p",{children:["The generic tag is ",e.jsx("code",{children:'name="robots"'}),". To target a specific crawler, use its name:",e.jsx("code",{children:"googlebot"}),", ",e.jsx("code",{children:"bingbot"}),", etc."]}),e.jsx(o.Code,{role:"region","aria-label":"Per-bot examples",children:e.jsx("pre",{children:String.raw`<!-- Page-wide default -->
<meta name="robots" content="noindex,follow">

<!-- Override only for Google -->
<meta name="googlebot" content="index,follow,max-image-preview:large">`})}),e.jsxs("p",{className:"note",children:["For non-HTML files (PDF, images) or site-wide patterns, configure an HTTP"," ",e.jsx("code",{children:"X-Robots-Tag"})," header on the server."]})]}),e.jsxs("section",{id:"appearance",children:[e.jsx("h2",{children:"Search appearance nudge"}),e.jsxs("p",{children:["Directives like ",e.jsx("code",{children:"nosnippet"})," or ",e.jsx("code",{children:"max-snippet"})," affect how the result is displayed, not whether it can be indexed. Combine with ",e.jsx("code",{children:"noindex"})," only when you truly want to hide the page."]}),e.jsxs("ul",{className:"badges",children:[e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Good"})," Leave defaults unless you have a policy reason."]}),e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Good"})," Use ",e.jsx("code",{children:"noindex,follow"})," for utility pages."]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Blanket ",e.jsx("code",{children:"nofollow"})," across the site."]})]})]}),e.jsxs("section",{id:"faq",children:[e.jsx("h2",{children:"FAQ"}),e.jsxs("details",{children:[e.jsx("summary",{children:"Does robots meta override robots.txt?"}),e.jsxs("div",{className:"ans",children:["They solve different problems. ",e.jsx("code",{children:"robots.txt"})," gates crawling of paths. The robots meta controls indexing/following for a fetched page."]})]}),e.jsxs("details",{children:[e.jsxs("summary",{children:["Is ",e.jsx("code",{children:"noindex"})," enough to remove a page?"]}),e.jsx("div",{className:"ans",children:"Yes, once recrawled. If you need faster removal, use the search engine’s removal tool in addition."})]}),e.jsxs("details",{children:[e.jsxs("summary",{children:["Do I need both ",e.jsx("code",{children:"noindex"})," and ",e.jsx("code",{children:"disallow"}),"?"]}),e.jsxs("div",{className:"ans",children:["If crawling is disallowed, engines may never see the page’s ",e.jsx("code",{children:"noindex"}),". Allow crawl + return ",e.jsx("code",{children:"noindex"})," for reliable removal."]})]})]}),e.jsxs("section",{id:"play",children:[e.jsx("h2",{children:"Try it live"}),e.jsxs("p",{className:"lede",children:["Toggle between ",e.jsx("code",{children:"index"}),", ",e.jsx("code",{children:"noindex"}),", ",e.jsx("code",{children:"follow"}),", ",e.jsx("code",{children:"nofollow"}),", and add preview directives. The markup autosaves to this lesson."]}),e.jsx(r,{storageKey:"core-html:metadata:robots-basics:v1",initialHtml:d,height:640})]}),e.jsxs("nav",{className:"nextPrev","aria-label":"Lesson navigation",children:[e.jsx(s,{to:"/metadata/meta-description",className:"prev","aria-label":"Go to Meta description",children:"← Meta description"}),e.jsx(s,{to:"/metadata/charset-viewport-recap",className:"next","aria-label":"Go to Charset & viewport recap",children:"Next: Charset & viewport recap →"})]}),e.jsx("div",{className:"backTop",children:e.jsx("a",{href:"#top",children:"Back to top ↑"})})]})}export{t as default};
