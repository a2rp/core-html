import{d as n,r,j as e,N as i}from"./index-D3QNcmKe.js";import{H as s}from"./index-CAjihRuM.js";const a={Page:n.main`
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
    `,Code:n.div`
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
    <meta charset="utf-8" />
    <title>Canonical link — playground</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <!--
      Scenario:
      Same article is accessible via multiple URLs:
        1) https://example.com/blog/canonical-guide
        2) https://example.com/blog/canonical-guide?utm_source=newsletter
        3) http://example.com/blog/canonical-guide    (http)
        4) https://www.example.com/blog/canonical-guide (www)
      Preferred version: https://example.com/blog/canonical-guide
    -->

    <!-- GOOD: self-referencing canonical on the preferred URL -->
    <link rel="canonical" href="https://example.com/blog/canonical-guide">

    <style>
      :root { color-scheme: light dark; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui, -apple-system, Segoe UI, Roboto, sans-serif; }
      .grid { display: grid; gap: 14px; }
      .card { border: 1px solid #ccc; border-radius: 12px; padding: 12px; }
      .good { background: color-mix(in oklab, #16a34a, transparent 92%); border-color:#8ed09b; }
      .bad  { background: color-mix(in oklab, #dc2626, transparent 92%); border-color:#f2a6a6; }
      code  { background: #f5f5f5; padding: 0 6px; border-radius: 6px; }
      .ex   { border: 1px dashed #aaa; padding: 8px; border-radius: 10px; margin-top: 6px; }
    </style>
  </head>
  <body>
    <main class="grid">
      <header>
        <h1>Canonical link playground</h1>
        <p>Use <code>&lt;link rel="canonical"&gt;</code> to declare the preferred (canonical) URL for this content.</p>
      </header>

      <section class="card good">
        <h2>Self-referencing canonical</h2>
        <p>Most indexable pages should point canonical to themselves.</p>
        <div class="ex">
<pre><code>&lt;link rel="canonical" href="https://example.com/blog/canonical-guide"&gt;</code></pre>
        </div>
      </section>

      <section class="card">
        <h2>Query params (UTM, sort, filter)</h2>
        <p>Variants with tracking or minor sort changes should consolidate signals to the main URL.</p>
        <div class="ex">
<pre><code>&lt;!-- On /blog/canonical-guide?utm_source=newsletter --&gt;
&lt;link rel="canonical" href="https://example.com/blog/canonical-guide"&gt;</code></pre>
        </div>
      </section>

      <section class="card bad">
        <h2>Common mistake: pointing to a noindex/blocked page</h2>
        <p>A canonical target should be indexable and not blocked by robots.</p>
        <div class="ex">
<pre><code>&lt;!-- Avoid: canonical to a page with noindex or robots disallow --&gt;
&lt;link rel="canonical" href="https://example.com/print/canonical-guide"&gt;</code></pre>
        </div>
      </section>

      <footer>
        Tip: Canonical is a hint. Consistent internal links and redirects help search engines respect it.
      </footer>
    </main>
  </body>
</html>`;function c(){return r.useEffect(()=>{document.title="Metadata · Canonical link (concept)"},[]),e.jsxs(a.Page,{children:[e.jsxs("header",{className:"pageHeader",id:"top",children:[e.jsx("h1",{children:"Canonical link (concept)"}),e.jsx("p",{className:"lede",children:"The canonical link tells search engines which URL is the preferred source when duplicates or near-duplicates exist. It’s a consolidation hint, not a guarantee."})]}),e.jsxs("nav",{className:"toc","aria-label":"On this page",children:[e.jsx("a",{href:"#why",children:"Why it exists"}),e.jsx("a",{href:"#patterns",children:"When to use"}),e.jsx("a",{href:"#syntax",children:"Syntax"}),e.jsx("a",{href:"#doDont",children:"Do and don’t"}),e.jsx("a",{href:"#relations",children:"How it relates to other tags"}),e.jsx("a",{href:"#faq",children:"FAQ"}),e.jsx("a",{href:"#play",children:"Playground"})]}),e.jsxs("section",{id:"why",children:[e.jsx("h2",{children:"Why it exists"}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"Consolidates duplicate signals (links, shares, metrics) to one URL."}),e.jsx("li",{children:"Prevents split indexing caused by tracking params, alternate paths, or print views."}),e.jsx("li",{children:"Reduces crawl waste on unimportant variants."})]})})]}),e.jsxs("section",{id:"patterns",children:[e.jsx("h2",{children:"When to use"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Typical duplicates"}),e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"http vs https; www vs non-www."}),e.jsxs("li",{children:["Trailing slash differences (",e.jsx("code",{children:"/page"})," vs ",e.jsx("code",{children:"/page/"}),")."]}),e.jsx("li",{children:"Tracking params (UTM), sort/filter params, pagination variants."}),e.jsx("li",{children:"Same article under category and tag paths."}),e.jsx("li",{children:"Print or AMP versions that mirror the main content."})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Recommended default"}),e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"Use a self-referencing canonical on most indexable pages."}),e.jsx("li",{children:"Pick one normalized URL format (scheme, host, slash) and link to it consistently."}),e.jsx("li",{children:"For true duplicates, canonicalize variants → the primary URL."})]})]})]})]}),e.jsxs("section",{id:"syntax",children:[e.jsx("h2",{children:"Syntax"}),e.jsx(a.Code,{"aria-label":"Basic canonical",children:e.jsx("pre",{children:String.raw`<!-- Basic (preferred absolute URL) -->
<link rel="canonical" href="https://example.com/path/to/page">`})}),e.jsx("p",{className:"note",children:"Absolute URLs are reliable for clarity across domains and protocols. Relative can work, but absolute avoids ambiguity."}),e.jsx(a.Code,{"aria-label":"Self-referencing canonical",children:e.jsx("pre",{children:String.raw`<!-- On the canonical page itself -->
<link rel="canonical" href="https://example.com/path/to/page">`})}),e.jsx(a.Code,{"aria-label":"Variant canonicalizing to the preferred",children:e.jsx("pre",{children:String.raw`<!-- On /path/to/page?ref=email -->
<link rel="canonical" href="https://example.com/path/to/page">`})}),e.jsx(a.Code,{"aria-label":"Cross-domain canonical (advanced)",children:e.jsx("pre",{children:String.raw`<!-- Cross-domain canonical (only if you control both) -->
<link rel="canonical" href="https://primary-site.com/article-x">`})})]}),e.jsxs("section",{id:"doDont",children:[e.jsx("h2",{children:"Do and don’t"}),e.jsxs("ul",{className:"badges",children:[e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Do"})," put one canonical per page."]}),e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Do"})," ensure the canonical target is indexable (no ",e.jsx("code",{children:"noindex"}),", not blocked)."]}),e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Do"})," keep internal links pointing to the canonical URL."]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Don’t"})," point canonicals at 3xx/4xx/5xx or soft-404 pages."]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Don’t"})," rotate canonical targets (pick one stable URL)."]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Don’t"})," rely on canonical to replace redirects where a redirect is correct."]})]})]}),e.jsxs("section",{id:"relations",children:[e.jsx("h2",{children:"Related tags and settings"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Canonical vs redirects"}),e.jsx("p",{children:"Redirects are enforced by the server; canonicals are hints in HTML. If both exist, engines usually prefer the redirect. Use both consistently where appropriate."})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Canonical vs hreflang"}),e.jsxs("p",{children:[e.jsx("code",{children:"hreflang"})," points to language/region alternates. Each alternate should still have a self-canonical. Don’t canonicalize English to French or vice-versa; use ",e.jsx("code",{children:"hreflang"})," between peers."]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Robots and canonical"}),e.jsxs("p",{children:["A canonical target should be crawlable and indexable. Avoid pointing to pages that are ",e.jsx("code",{children:"noindex"})," or disallowed in robots.txt."]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Pagination (note)"}),e.jsx("p",{children:"For paginated series, keep self-canonicals on each page and link pages together (e.g., “Next/Prev” UI). The canonical should generally not collapse the whole series into page 1 unless pages are true duplicates."})]})]})]}),e.jsxs("section",{id:"faq",children:[e.jsx("h2",{children:"FAQ"}),e.jsxs("details",{children:[e.jsx("summary",{children:"Is canonical mandatory?"}),e.jsx("div",{className:"ans",children:"No, but it’s helpful wherever duplicates are plausible. It’s a hint to consolidate signals."})]}),e.jsxs("details",{children:[e.jsx("summary",{children:"Should home page have a canonical?"}),e.jsx("div",{className:"ans",children:"Yes—set it to your normalized home URL (scheme/host/slash choice) to unify www/non-www and slash variants."})]}),e.jsxs("details",{children:[e.jsx("summary",{children:"Can I canonicalize two different products together?"}),e.jsx("div",{className:"ans",children:"Avoid collapsing genuinely different content. Canonical is for duplicates or near-duplicates."})]})]}),e.jsxs("section",{id:"play",children:[e.jsx("h2",{children:"Try it live"}),e.jsx("p",{className:"lede",children:"Normalize the preferred URL and add self-canonicals. Then simulate variant pages by changing the URL in comments and adjust the canonical accordingly."}),e.jsx(s,{storageKey:"core-html:metadata:canonical-concept:v1",initialHtml:o,height:640})]}),e.jsxs("nav",{className:"nextPrev","aria-label":"Lesson navigation",children:[e.jsx(i,{to:"/metadata/links-scripts",className:"prev","aria-label":"Go to Link and Script loading",children:"← Link & Script loading notes"}),e.jsx(i,{to:"/metadata/robots-basics",className:"next","aria-label":"Go to Robots basics",children:"Next: Robots basics →"})]}),e.jsx("div",{className:"backTop",children:e.jsx("a",{href:"#top",children:"Back to top ↑"})})]})}export{c as default};
