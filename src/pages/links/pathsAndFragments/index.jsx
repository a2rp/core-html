import React, { useEffect } from "react";
import { Styled } from "./styled";
import { NavLink } from "react-router-dom";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";

/**
 * Absolute vs relative paths, and fragment identifiers (#ids)
 * - URL anatomy quick tour
 * - Absolute URLs (scheme + origin) vs root-relative vs document-relative
 * - Dot segments: . and ..
 * - Trailing slash gotchas and directory index resolution
 * - <base href> and how it rewrites relative links
 * - Fragments: targeting element ids, text fragments, and scrolling
 * - Pitfalls + FAQ
 * - Monaco playground LAST
 */

const STARTER_HTML = String.raw`<!doctype html>
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
</html>`;

export default function PathsAndFragments() {
    useEffect(() => {
        document.title = "Links · Paths and fragment identifiers";
    }, []);

    return (
        <Styled.Page>
            <header className="pageHeader" id="top">
                <h1>Paths and fragment identifiers</h1>
                <p className="lede">
                    Learn how browsers resolve links: absolute vs relative paths, how{" "}
                    <code>&lt;base href&gt;</code> rewrites relatives, and how{" "}
                    <code>#fragments</code> target elements by id.
                </p>
            </header>

            <nav className="toc" aria-label="On this page">
                <a href="#anatomy">URL anatomy</a>
                <a href="#absolute-relative">Absolute vs relative</a>
                <a href="#dot-segments">Dot segments</a>
                <a href="#base">Base href</a>
                <a href="#fragments">Fragments</a>
                <a href="#pitfalls">Pitfalls</a>
                <a href="#play">Playground</a>
            </nav>

            <section id="anatomy">
                <h2>URL anatomy</h2>
                <div className="card">
                    <p className="mono">scheme://user:pass@host:port/path?query#fragment</p>
                    <ul className="bullets">
                        <li><strong>Origin</strong> = scheme + host + port. Relative links stay on the same origin.</li>
                        <li><strong>Path</strong> can be absolute (<code>/docs/intro</code>) or relative (<code>../intro</code>).</li>
                        <li><strong>Fragment</strong> is client-side only; the server never sees it.</li>
                    </ul>
                </div>
            </section>

            <section id="absolute-relative">
                <h2>Absolute vs relative</h2>
                <div className="grid2">
                    <div className="card">
                        <h3>Absolute</h3>
                        <ul className="bullets">
                            <li>Has a scheme and origin, e.g., <code>https://example.org/path</code>.</li>
                            <li>Good for CDNs, cross-origin assets, and canonical links.</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h3>Relative</h3>
                        <ul className="bullets">
                            <li>Resolves against the document URL (or <code>&lt;base&gt;</code> if present).</li>
                            <li>Use root-relative (<code>/assets/app.css</code>) to avoid nesting surprises.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="dot-segments">
                <h2>Dot segments & slashes</h2>
                <Styled.Code>
                    <pre>{String.raw`/docs/guide/intro.html
./next.html       → /docs/guide/next.html
../shared.css     → /docs/shared.css
/images/logo.svg  → /images/logo.svg (root-relative)
docs              → /docs/guide/docs (relative to current folder)
docs/             → /docs/guide/docs/ (note the folder)`}
                    </pre>
                </Styled.Code>
                <p className="note">
                    Servers and SPAs may treat <code>/page</code> and <code>/page/</code> differently. Pick one and stick to it.
                </p>
            </section>

            <section id="base">
                <h2>&lt;base href&gt; changes everything</h2>
                <Styled.Code>
                    <pre>{String.raw`<head>
  <base href="/guide/">
  <link rel="stylesheet" href="styles.css">   <!-- resolves to /guide/styles.css -->
</head>`}</pre>
                </Styled.Code>
                <p className="note">Use at most one <code>&lt;base&gt;</code>. It must be inside <code>&lt;head&gt;</code>.</p>
            </section>

            <section id="fragments">
                <h2>Fragments (#id)</h2>
                <Styled.Code role="region" aria-label="Fragment example">
                    <pre>{String.raw`<a href="#install">Jump to install</a>

<h2 id="install">Install</h2>
<p>…content…</p>`}</pre>
                </Styled.Code>
                <p className="note">
                    A fragment that doesn’t match any <code>id</code> won’t scroll. In docs, keep ids stable to avoid broken deep links.
                </p>
            </section>

            <section id="pitfalls">
                <h2>Pitfalls</h2>
                <ul className="badges">
                    <li><span className="bad">Wrong</span> Relying on <code>docs</code> to mean <code>/docs</code>.</li>
                    <li><span className="bad">Wrong</span> Adding <code>&lt;base&gt;</code> in body or having multiple bases.</li>
                    <li><span className="good">Good</span> Prefer root-relative for internal links, absolute for external/CDN.</li>
                </ul>
            </section>

            {/* LAST: Monaco playground */}
            <section id="play">
                <h2>Try it live</h2>
                <p className="lede">
                    Toggle the <code>&lt;base href&gt;</code>, play with <code>./</code> and <code>../</code>,
                    and add <code>#ids</code> to see fragment scrolling. Autosaves to this lesson.
                </p>
                <HtmlPlayground
                    storageKey="core-html:links:paths-and-fragments:v1"
                    initialHtml={STARTER_HTML}
                    height={640}
                />
            </section>

            {/* Prev + Next */}
            <nav className="nextPrev" aria-label="Lesson navigation">
                <NavLink to="/links/minimal-anatomy" className="prev" aria-label="Go to Anchor anatomy">
                    ← Anchor anatomy
                </NavLink>
                <NavLink to="/links/target-rel-safety" className="next" aria-label="Go to target and rel safety">
                    Next: target & rel safety →
                </NavLink>
            </nav>

            <div className="backTop"><a href="#top">Back to top ↑</a></div>
        </Styled.Page>
    );
}
