// src/pages/metadata/canonicalConcept/index.jsx
import React, { useEffect } from "react";
import { Styled } from "./styled";
import { NavLink } from "react-router-dom";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";

/*
  Canonical link (concept)
  - Purpose: signal the preferred URL among duplicates/near-duplicates
  - It’s a hint, not a hard directive
  - Typical duplicates: http vs https, www vs non-www, trailing slash, UTM params, sort/filter/query variations, print views
  - Self-referencing canonicals are recommended on most indexable pages
  - Cross-domain canonical is possible when you control both (careful)
  - Don’t canonicalize to a page that’s noindex or blocked by robots
  - Canonical works with, not instead of, redirects and internal linking
*/

const STARTER_HTML = String.raw`<!doctype html>
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
</html>`;

export default function CanonicalConcept() {
    useEffect(() => {
        document.title = "Metadata · Canonical link (concept)";
    }, []);

    return (
        <Styled.Page>
            <header className="pageHeader" id="top">
                <h1>Canonical link (concept)</h1>
                <p className="lede">
                    The canonical link tells search engines which URL is the preferred source when duplicates or near-duplicates exist.
                    It’s a consolidation hint, not a guarantee.
                </p>
            </header>

            <nav className="toc" aria-label="On this page">
                <a href="#why">Why it exists</a>
                <a href="#patterns">When to use</a>
                <a href="#syntax">Syntax</a>
                <a href="#doDont">Do and don’t</a>
                <a href="#relations">How it relates to other tags</a>
                <a href="#faq">FAQ</a>
                <a href="#play">Playground</a>
            </nav>

            <section id="why">
                <h2>Why it exists</h2>
                <div className="card">
                    <ul className="bullets">
                        <li>Consolidates duplicate signals (links, shares, metrics) to one URL.</li>
                        <li>Prevents split indexing caused by tracking params, alternate paths, or print views.</li>
                        <li>Reduces crawl waste on unimportant variants.</li>
                    </ul>
                </div>
            </section>

            <section id="patterns">
                <h2>When to use</h2>
                <div className="grid2">
                    <div className="card">
                        <h3>Typical duplicates</h3>
                        <ul className="bullets">
                            <li>http vs https; www vs non-www.</li>
                            <li>Trailing slash differences (<code>/page</code> vs <code>/page/</code>).</li>
                            <li>Tracking params (UTM), sort/filter params, pagination variants.</li>
                            <li>Same article under category and tag paths.</li>
                            <li>Print or AMP versions that mirror the main content.</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h3>Recommended default</h3>
                        <ul className="bullets">
                            <li>Use a self-referencing canonical on most indexable pages.</li>
                            <li>Pick one normalized URL format (scheme, host, slash) and link to it consistently.</li>
                            <li>For true duplicates, canonicalize variants → the primary URL.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="syntax">
                <h2>Syntax</h2>

                <Styled.Code aria-label="Basic canonical">
                    <pre>{String.raw`<!-- Basic (preferred absolute URL) -->
<link rel="canonical" href="https://example.com/path/to/page">`}</pre>
                </Styled.Code>

                <p className="note">
                    Absolute URLs are reliable for clarity across domains and protocols. Relative can work, but absolute avoids ambiguity.
                </p>

                <Styled.Code aria-label="Self-referencing canonical">
                    <pre>{String.raw`<!-- On the canonical page itself -->
<link rel="canonical" href="https://example.com/path/to/page">`}</pre>
                </Styled.Code>

                <Styled.Code aria-label="Variant canonicalizing to the preferred">
                    <pre>{String.raw`<!-- On /path/to/page?ref=email -->
<link rel="canonical" href="https://example.com/path/to/page">`}</pre>
                </Styled.Code>

                <Styled.Code aria-label="Cross-domain canonical (advanced)">
                    <pre>{String.raw`<!-- Cross-domain canonical (only if you control both) -->
<link rel="canonical" href="https://primary-site.com/article-x">`}</pre>
                </Styled.Code>
            </section>

            <section id="doDont">
                <h2>Do and don’t</h2>
                <ul className="badges">
                    <li><span className="good">Do</span> put one canonical per page.</li>
                    <li><span className="good">Do</span> ensure the canonical target is indexable (no <code>noindex</code>, not blocked).</li>
                    <li><span className="good">Do</span> keep internal links pointing to the canonical URL.</li>
                    <li><span className="bad">Don’t</span> point canonicals at 3xx/4xx/5xx or soft-404 pages.</li>
                    <li><span className="bad">Don’t</span> rotate canonical targets (pick one stable URL).</li>
                    <li><span className="bad">Don’t</span> rely on canonical to replace redirects where a redirect is correct.</li>
                </ul>
            </section>

            <section id="relations">
                <h2>Related tags and settings</h2>
                <div className="grid2">
                    <div className="card">
                        <h3>Canonical vs redirects</h3>
                        <p>
                            Redirects are enforced by the server; canonicals are hints in HTML. If both exist, engines usually prefer the
                            redirect. Use both consistently where appropriate.
                        </p>
                    </div>
                    <div className="card">
                        <h3>Canonical vs hreflang</h3>
                        <p>
                            <code>hreflang</code> points to language/region alternates. Each alternate should still have a self-canonical.
                            Don’t canonicalize English to French or vice-versa; use <code>hreflang</code> between peers.
                        </p>
                    </div>
                    <div className="card">
                        <h3>Robots and canonical</h3>
                        <p>
                            A canonical target should be crawlable and indexable. Avoid pointing to pages that are <code>noindex</code> or disallowed in robots.txt.
                        </p>
                    </div>
                    <div className="card">
                        <h3>Pagination (note)</h3>
                        <p>
                            For paginated series, keep self-canonicals on each page and link pages together (e.g., “Next/Prev” UI). The canonical should generally not collapse the whole series into page 1 unless pages are true duplicates.
                        </p>
                    </div>
                </div>
            </section>

            <section id="faq">
                <h2>FAQ</h2>
                <details>
                    <summary>Is canonical mandatory?</summary>
                    <div className="ans">No, but it’s helpful wherever duplicates are plausible. It’s a hint to consolidate signals.</div>
                </details>
                <details>
                    <summary>Should home page have a canonical?</summary>
                    <div className="ans">Yes—set it to your normalized home URL (scheme/host/slash choice) to unify www/non-www and slash variants.</div>
                </details>
                <details>
                    <summary>Can I canonicalize two different products together?</summary>
                    <div className="ans">Avoid collapsing genuinely different content. Canonical is for duplicates or near-duplicates.</div>
                </details>
            </section>

            <section id="play">
                <h2>Try it live</h2>
                <p className="lede">
                    Normalize the preferred URL and add self-canonicals. Then simulate variant pages by changing the URL in comments and adjust the canonical accordingly.
                </p>
                <HtmlPlayground
                    storageKey="core-html:metadata:canonical-concept:v1"
                    initialHtml={STARTER_HTML}
                    height={640}
                />
            </section>

            <nav className="nextPrev" aria-label="Lesson navigation">
                <NavLink to="/metadata/links-scripts" className="prev" aria-label="Go to Link and Script loading">
                    ← Link & Script loading notes
                </NavLink>
                <NavLink to="/metadata/robots-basics" className="next" aria-label="Go to Robots basics">
                    Next: Robots basics →
                </NavLink>
            </nav>

            <div className="backTop"><a href="#top">Back to top ↑</a></div>
        </Styled.Page>
    );
}
