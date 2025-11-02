import React, { useEffect } from "react";
import { Styled } from "./styled";
import { NavLink } from "react-router-dom";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";

/**
 * <meta name="robots"> — index/follow basics
 * - Mental model: crawlers get two decisions: can this page be indexed? can its links be followed?
 * - Defaults: index, follow (you usually don't need a meta tag)
 * - Common directives: noindex, nofollow, noarchive, nosnippet, notranslate
 * - Per-bot targeting: <meta name="googlebot"> (or bingbot) if you need different rules
 * - Prefer HTTP header (X-Robots-Tag) for non-HTML or to control crawling at the response level
 * - This page focuses on simple, page-level HTML usage
 */

const STARTER_HTML = String.raw`<!doctype html>
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
</html>`;

export default function RobotsBasics() {
    useEffect(() => {
        document.title = "Metadata · <meta name=\"robots\"> basics (index, follow)";
    }, []);

    return (
        <Styled.Page>
            <header className="pageHeader" id="top">
                <h1>
                    <code>&lt;meta name="robots"&gt;</code> — index/follow basics
                </h1>
                <p className="lede">
                    Crawlers make two decisions: can this page be indexed, and should its links be followed? The default is{" "}
                    <code>index, follow</code>. Add a robots meta tag only when you need to change that.
                </p>
            </header>

            <nav className="toc" aria-label="On this page">
                <a href="#model">Mental model</a>
                <a href="#directives">Common directives</a>
                <a href="#page-vs-bot">Per-page vs per-bot</a>
                <a href="#appearance">Search appearance</a>
                <a href="#faq">FAQ</a>
                <a href="#play">Playground</a>
            </nav>

            <section id="model">
                <h2>Mental model</h2>
                <div className="card">
                    <ul className="bullets">
                        <li><strong>index</strong> means the page can appear in search results.</li>
                        <li><strong>follow</strong> means links on the page can be crawled for discovery.</li>
                        <li>Without any tag, engines assume <code>index, follow</code>.</li>
                        <li>Use <code>noindex</code> for pages like login/thank-you where listing is not useful.</li>
                    </ul>
                </div>
            </section>

            <section id="directives">
                <h2>Common directives</h2>
                <div className="grid2">
                    <div className="card">
                        <h3>Indexing</h3>
                        <ul className="bullets">
                            <li><code>index</code> (default)</li>
                            <li><code>noindex</code> — exclude this page from results</li>
                        </ul>
                        <Styled.Code aria-label="noindex example">
                            <pre>{String.raw`<meta name="robots" content="noindex,follow">`}</pre>
                        </Styled.Code>
                    </div>
                    <div className="card">
                        <h3>Following links</h3>
                        <ul className="bullets">
                            <li><code>follow</code> (default)</li>
                            <li><code>nofollow</code> — don't use page links for discovery/ranking</li>
                        </ul>
                        <Styled.Code aria-label="nofollow example">
                            <pre>{String.raw`<meta name="robots" content="index,nofollow">`}</pre>
                        </Styled.Code>
                    </div>
                </div>

                <div className="grid2">
                    <div className="card">
                        <h3>Snippets & previews</h3>
                        <ul className="bullets">
                            <li><code>nosnippet</code> — hide text snippet</li>
                            <li><code>max-snippet:120</code> — cap snippet length</li>
                            <li><code>max-image-preview:large</code> — allow large image previews</li>
                            <li><code>max-video-preview:0</code> — disable video preview</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h3>Cache & translation</h3>
                        <ul className="bullets">
                            <li><code>noarchive</code> — no cached copy</li>
                            <li><code>notranslate</code> — hide translation UI</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="page-vs-bot">
                <h2>Per-page vs per-bot</h2>
                <p>
                    The generic tag is <code>name="robots"</code>. To target a specific crawler, use its name:
                    <code>googlebot</code>, <code>bingbot</code>, etc.
                </p>
                <Styled.Code role="region" aria-label="Per-bot examples">
                    <pre>{String.raw`<!-- Page-wide default -->
<meta name="robots" content="noindex,follow">

<!-- Override only for Google -->
<meta name="googlebot" content="index,follow,max-image-preview:large">`}</pre>
                </Styled.Code>
                <p className="note">
                    For non-HTML files (PDF, images) or site-wide patterns, configure an HTTP{" "}
                    <code>X-Robots-Tag</code> header on the server.
                </p>
            </section>

            <section id="appearance">
                <h2>Search appearance nudge</h2>
                <p>
                    Directives like <code>nosnippet</code> or <code>max-snippet</code> affect how the result is displayed,
                    not whether it can be indexed. Combine with <code>noindex</code> only when you truly want to hide the page.
                </p>
                <ul className="badges">
                    <li><span className="good">Good</span> Leave defaults unless you have a policy reason.</li>
                    <li><span className="good">Good</span> Use <code>noindex,follow</code> for utility pages.</li>
                    <li><span className="bad">Wrong</span> Blanket <code>nofollow</code> across the site.</li>
                </ul>
            </section>

            <section id="faq">
                <h2>FAQ</h2>
                <details>
                    <summary>Does robots meta override robots.txt?</summary>
                    <div className="ans">
                        They solve different problems. <code>robots.txt</code> gates crawling of paths.
                        The robots meta controls indexing/following for a fetched page.
                    </div>
                </details>
                <details>
                    <summary>Is <code>noindex</code> enough to remove a page?</summary>
                    <div className="ans">
                        Yes, once recrawled. If you need faster removal, use the search engine’s removal tool in addition.
                    </div>
                </details>
                <details>
                    <summary>Do I need both <code>noindex</code> and <code>disallow</code>?</summary>
                    <div className="ans">
                        If crawling is disallowed, engines may never see the page’s <code>noindex</code>. Allow crawl + return <code>noindex</code> for reliable removal.
                    </div>
                </details>
            </section>

            {/* LAST: Monaco playground */}
            <section id="play">
                <h2>Try it live</h2>
                <p className="lede">
                    Toggle between <code>index</code>, <code>noindex</code>, <code>follow</code>, <code>nofollow</code>, and add preview directives.
                    The markup autosaves to this lesson.
                </p>
                <HtmlPlayground
                    storageKey="core-html:metadata:robots-basics:v1"
                    initialHtml={STARTER_HTML}
                    height={640}
                />
            </section>

            {/* Prev + Next */}
            <nav className="nextPrev" aria-label="Lesson navigation">
                <NavLink to="/metadata/meta-description" className="prev" aria-label="Go to Meta description">
                    ← Meta description
                </NavLink>
                <NavLink to="/metadata/charset-viewport-recap" className="next" aria-label="Go to Charset & viewport recap">
                    Next: Charset &amp; viewport recap →
                </NavLink>
            </nav>

            <div className="backTop"><a href="#top">Back to top ↑</a></div>
        </Styled.Page>
    );
}
