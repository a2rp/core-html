import React, { useEffect, useMemo, useState } from "react";
import { Styled } from "./styled";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";
import { NavLink } from "react-router-dom";

/**
 * <meta name="description">
 * - Purpose: short page summary used for search snippets and previews
 * - What it is NOT: a ranking cheat code; not visible in the page body
 * - Good patterns: unique, specific, plain language, front-loaded value
 * - Length heuristics: write 50–160 characters (aim to fit typical snippet widths)
 * - Edge cases: pagination, home pages, canonical clusters
 * - Related but separate: og:description, twitter:description
 * - Monaco playground at the end
 */

const STARTER_HTML = String.raw`<!doctype html>
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
</html>`;

function countChars(s) {
    return [...String(s || "")].length;
}

export default function MetaDescription() {
    const [draft, setDraft] = useState(
        "Write a short, concrete summary that helps users choose your result."
    );

    const charCount = useMemo(() => countChars(draft), [draft]);
    const hint = useMemo(() => {
        if (charCount < 50) return "A bit short; consider adding concrete benefits.";
        if (charCount > 170) return "Likely to truncate in many views; tighten the phrasing.";
        return "Nice length for typical snippets.";
    }, [charCount]);

    useEffect(() => {
        document.title = 'Metadata · <meta name="description">';
    }, []);

    return (
        <Styled.Page>
            <header className="pageHeader" id="top">
                <h1>
                    <code>&lt;meta name="description"&gt;</code>
                </h1>
                <p className="lede">
                    A short, human-readable summary of the page. It often appears as the search snippet,
                    so write for humans first: clear purpose, who it’s for, what they’ll get.
                </p>
            </header>

            <nav className="toc" aria-label="On this page">
                <a href="#model">Mental model</a>
                <a href="#writing">How to write one</a>
                <a href="#length">Length & duplication</a>
                <a href="#social">Social previews</a>
                <a href="#faq">FAQ</a>
                <a href="#play">Playground</a>
            </nav>

            <section id="model">
                <h2>Mental model</h2>
                <div className="card">
                    <ul className="bullets">
                        <li>
                            It’s <strong>a promise</strong> of what this page delivers, not a keyword bucket.
                        </li>
                        <li>
                            Think of it as <strong>micro-copy</strong> for the search results page.
                        </li>
                        <li>One per canonical page. Keep it specific, useful, and true.</li>
                    </ul>
                </div>
            </section>

            <section id="writing">
                <h2>How to write one</h2>
                <div className="grid2">
                    <div className="card">
                        <h3>Do</h3>
                        <ul className="bullets">
                            <li>Front-load the value or outcome.</li>
                            <li>Use plain language and active voice.</li>
                            <li>Consider audience and page type (home, product, doc page, blog).</li>
                            <li>Keep it unique per page.</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h3>Don’t</h3>
                        <ul className="bullets">
                            <li>Don’t stuff keywords or exaggerate.</li>
                            <li>Don’t copy the same line across the whole site.</li>
                            <li>Don’t write headlines; write summaries.</li>
                        </ul>
                    </div>
                </div>

                <Styled.EditorAid>
                    <label htmlFor="md-draft">Draft a description (live length hint)</label>
                    <textarea
                        id="md-draft"
                        value={draft}
                        onChange={(e) => setDraft(e.target.value)}
                        rows={3}
                        spellCheck="false"
                        placeholder="Describe this page in 1–2 clear sentences…"
                    />
                    <div className="meterRow" role="status" aria-live="polite">
                        <span className="char">{charCount} chars</span>
                        <span className="hint">{hint}</span>
                    </div>
                    <Styled.Code>
                        <pre>{String.raw`<meta name="description" content="${draft.replace(/"/g, '&quot;')}" />`}</pre>
                    </Styled.Code>
                </Styled.EditorAid>
            </section>

            <section id="length">
                <h2>Length & duplication</h2>
                <div className="card">
                    <ul className="bullets">
                        <li>
                            Heuristic: write <strong>~50–160 characters</strong>. Shorter can look thin; longer may truncate.
                        </li>
                        <li>
                            Avoid duplicating the same description across many URLs. Summarize what’s different on each page.
                        </li>
                        <li>
                            For paginated lists, consider including the range or context (e.g., “Page 2 of tutorials on …”).
                        </li>
                    </ul>
                </div>
            </section>

            <section id="social">
                <h2>Social previews (separate tags)</h2>
                <Styled.Code>
                    <pre>{String.raw`<!-- Search snippet candidate -->
<meta name="description" content="Compare block vs inline elements with visuals and a live editor." />

<!-- Social cards -->
<meta property="og:title" content="Block vs inline — visual guide" />
<meta property="og:description" content="Clear rules, side-by-side examples, and a live editor to practice." />
<meta name="twitter:card" content="summary_large_image" />`}</pre>
                </Styled.Code>
                <p className="note">
                    Social tags help when links are shared. They don’t replace the HTML description and may be
                    shown in different contexts.
                </p>
            </section>

            <section id="faq">
                <h2>FAQ</h2>
                <details>
                    <summary>Does this affect ranking directly?</summary>
                    <div className="ans">
                        It’s primarily for snippets and click-through. Good summaries can improve user decisions, which indirectly helps.
                    </div>
                </details>
                <details>
                    <summary>What if search engines ignore my description?</summary>
                    <div className="ans">
                        They sometimes rewrite snippets to match a query. Keep your copy accurate; provide good on-page content so the rewrite still represents you well.
                    </div>
                </details>
            </section>

            {/* LAST: Monaco playground */}
            <section id="play">
                <h2>Try it live</h2>
                <p className="lede">
                    Edit the <code>&lt;meta name="description"&gt;</code> content and observe the patterns. The editor autosaves to this lesson.
                </p>
                <HtmlPlayground
                    storageKey="core-html:metadata:meta-description:v1"
                    initialHtml={STARTER_HTML}
                    height={640}
                />
            </section>

            {/* Prev + Next */}
            <nav className="nextPrev" aria-label="Lesson navigation">
                <NavLink to="/metadata/title-quality" className="prev" aria-label="Go to &lt;title&gt; quality">
                    ← &lt;title&gt; quality
                </NavLink>
                <NavLink to="/metadata/charset-viewport-recap" className="next" aria-label="Go to charset & viewport recap">
                    Next: charset &amp; viewport recap →
                </NavLink>
            </nav>

            <div className="backTop"><a href="#top">Back to top ↑</a></div>
        </Styled.Page>
    );
}
