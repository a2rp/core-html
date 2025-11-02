import React, { useEffect } from "react";
import { Styled } from "./styled";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";
import { NavLink } from "react-router-dom";

/**
 * <title> quality — clear, concise page titles
 * - What <title> is and where it appears
 * - Length & structure guidance
 * - Branding and separators
 * - Uniqueness & duplication traps
 * - Bad vs good examples
 * - FAQ + quick checklist
 * - Live HTML playground (Monaco)
 */

const STARTER_HTML = String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Getting Started with HTML: Page Titles That Don’t Suck</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui, -apple-system, Segoe UI, Roboto, sans-serif; }
      .grid { display: grid; gap: 14px; }
      .card { border: 1px solid #ccc; border-radius: 12px; padding: 12px; }
      .muted { color: #6b7280; }
      code { background: #f5f5f5; padding: 0 6px; border-radius: 6px; }
      .ex { border: 1px dashed #aaa; padding: 8px; border-radius: 10px; margin-top: 6px; }
      ul { padding-left: 18px; }
    </style>
  </head>
  <body>
    <main class="grid">
      <header>
        <h1>Try changing the &lt;title&gt; in &lt;head&gt;</h1>
        <p class="muted">Open your browser tab title to see updates after you run.</p>
      </header>

      <section class="card">
        <h2>Examples</h2>
        <div class="ex">
          <p><strong>Good:</strong> <code>Pricing — Acme Analytics</code> (clear subject + short brand)</p>
          <p><strong>Okay:</strong> <code>About us | Acme</code> (generic but serviceable)</p>
          <p><strong>Bad:</strong> <code>Home</code> (ambiguous); <code>WELCOME TO OUR WEBSITE BEST DEALS!!!</code> (shouting/keyword stuffing)</p>
        </div>
      </section>

      <section class="card">
        <h2>Length tip</h2>
        <p>Aim for ~30–60 characters. Don’t panic if it’s a bit longer; just front-load the most important words.</p>
      </section>
    </main>

    <footer class="muted">This playground only controls the demo document, not your real app.</footer>
  </body>
</html>`;

export default function TitleQuality() {
    // Keep the document title specific to this lesson page in the app shell.
    useEffect(() => {
        document.title = "Metadata · <title> quality";
    }, []);

    return (
        <Styled.Page>
            <header className="pageHeader" id="top">
                <h1>
                    <code>&lt;title&gt;</code> quality
                </h1>
                <p className="lede">
                    The <code>&lt;title&gt;</code> element labels the page. It shows up in the browser tab, bookmarks, and link
                    previews. Strong titles are short, specific, and unique.
                </p>
            </header>

            <nav className="toc" aria-label="On this page">
                <a href="#what">What & where</a>
                <a href="#length">Length</a>
                <a href="#structure">Structure & separators</a>
                <a href="#uniqueness">Uniqueness</a>
                <a href="#badgood">Bad vs good</a>
                <a href="#react">Setting titles in React</a>
                <a href="#faq">FAQ</a>
                <a href="#checklist">Checklist</a>
                <a href="#play">Playground</a>
            </nav>

            <section id="what">
                <h2>What & where it appears</h2>
                <div className="card">
                    <ul className="bullets">
                        <li>
                            Defined in <code>&lt;head&gt;</code>: <code>{String.raw`<title>Products — Acme</title>`}</code>
                        </li>
                        <li>Displayed in the browser tab and window switchers (Alt+Tab, Mission Control).</li>
                        <li>Used for bookmarks/favorites labels and often in link previews.</li>
                    </ul>
                </div>
            </section>

            <section id="length">
                <h2>Length guidance</h2>
                <div className="card">
                    <ul className="bullets">
                        <li>Aim for ~30–60 characters. This range keeps it punchy and scannable.</li>
                        <li>Front-load the key words so truncation still leaves meaning.</li>
                        <li>Avoid filler like “Welcome to the official homepage of…”.</li>
                    </ul>
                </div>
            </section>

            <section id="structure">
                <h2>Structure & separators</h2>
                <div className="grid2">
                    <div className="card">
                        <h3>Pattern</h3>
                        <p>
                            <strong>Page subject</strong> <span className="sep">—</span> <strong>Brand</strong>
                        </p>
                        <p className="note">
                            Em dash/En dash/pipe are all fine. Pick one and stay consistent across the site.
                        </p>
                    </div>
                    <div className="card">
                        <h3>Examples</h3>
                        <ul className="bullets">
                            <li>
                                <code>Documentation — Parcel Pulse</code>
                            </li>
                            <li>
                                <code>Dashboard | Sunsar Logistics</code>
                            </li>
                            <li>
                                <code>HTML Forms Cheatsheet · Core HTML</code>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="uniqueness">
                <h2>Uniqueness matters</h2>
                <div className="card">
                    <ul className="bullets">
                        <li>Every routable page should have a unique title.</li>
                        <li>“Home — Brand” is better than plain “Home”.</li>
                        <li>Subpages should reflect their content, not just repeat the brand.</li>
                    </ul>
                </div>
            </section>

            <section id="badgood">
                <h2>Bad vs good</h2>
                <div className="grid2">
                    <div className="card">
                        <h3>Common pitfalls</h3>
                        <ul className="badges">
                            <li>
                                <span className="bad">Bad</span> <code>Home</code> (too vague)
                            </li>
                            <li>
                                <span className="bad">Bad</span> <code>WELCOME TO THE BEST WEBSITE!!!</code> (shouting)
                            </li>
                            <li>
                                <span className="bad">Bad</span> <code>Buy Shoes, Cheap Shoes, Shoes Online</code> (keyword stuffing)
                            </li>
                            <li>
                                <span className="bad">Bad</span> <code>Page</code> or <code>Untitled</code> (oops)
                            </li>
                        </ul>
                    </div>
                    <div className="card">
                        <h3>Better patterns</h3>
                        <ul className="badges">
                            <li>
                                <span className="good">Good</span> <code>Pricing — Acme Analytics</code>
                            </li>
                            <li>
                                <span className="good">Good</span> <code>Track Shipments | Sunsar Logistics</code>
                            </li>
                            <li>
                                <span className="good">Good</span> <code>Core landmarks · Core HTML</code>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="react">
                <h2>Setting titles in React</h2>
                <div className="card">
                    <p>Two simple approaches:</p>
                    <ol className="bullets">
                        <li>
                            Imperative: set on mount with <code>useEffect</code>:
                            <Styled.Code role="region" aria-label="useEffect example">
                                <pre>{String.raw`useEffect(() => {
  document.title = "Products — Acme";
}, []);`}</pre>
                            </Styled.Code>
                        </li>
                        <li>
                            Declarative libraries (optional): <code>react-helmet-async</code> for SSR/streaming apps.
                        </li>
                    </ol>
                    <p className="note">
                        Keep titles in sync with route params (e.g., <code>Order #123 — Dashboard</code>). Update on param change.
                    </p>
                </div>
            </section>

            <section id="faq">
                <h2>FAQ</h2>
                <details>
                    <summary>Should the brand go first or last?</summary>
                    <div className="ans">
                        Either is fine—be consistent. Put the unique page subject first so truncation keeps meaning.
                    </div>
                </details>
                <details>
                    <summary>Do emojis belong in titles?</summary>
                    <div className="ans">
                        Use sparingly. They can help scanning, but overuse feels noisy and can get truncated oddly.
                    </div>
                </details>
            </section>

            <section id="checklist">
                <h2>Quick checklist</h2>
                <ul className="bullets">
                    <li>Is it specific to this page?</li>
                    <li>Is it ~30–60 chars and front-loaded?</li>
                    <li>Consistent separator with a short brand suffix?</li>
                    <li>No shouting, no stuffing, no filler?</li>
                </ul>
            </section>

            {/* LAST: Monaco playground */}
            <section id="play">
                <h2>Try it live</h2>
                <p className="lede">
                    Edit the <code>&lt;title&gt;</code> in the demo’s <code>&lt;head&gt;</code>, then run. Try good vs bad patterns and
                    see how it feels in the tab.
                </p>
                <HtmlPlayground
                    storageKey="core-html:metadata:title-quality:v1"
                    initialHtml={STARTER_HTML}
                    height={560}
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

            <div className="backTop">
                <a href="#top">Back to top ↑</a>
            </div>
        </Styled.Page>
    );
}
