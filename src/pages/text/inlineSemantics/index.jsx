import React, { useEffect } from "react";
import { Styled } from "./styled";
import { NavLink } from "react-router-dom";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";

/**
 * Inline semantics — <span>, <small>, <mark>, <cite>, <q>, <abbr>, <time>
 * - Purpose of each element
 * - Accessibility notes and attributes (title, datetime, cite)
 * - Common pitfalls and replacements
 * - Live playground (Monaco) at the end
 */

const STARTER_HTML = String.raw`<!doctype html>
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
</html>`;

export default function InlineSemantics() {
    useEffect(() => {
        document.title = "Text · Inline semantics: span, small, mark, cite, q, abbr, time";
    }, []);

    return (
        <Styled.Page>
            <header className="pageHeader" id="top">
                <h1>Inline semantics: <code>&lt;span&gt;</code>, <code>&lt;small&gt;</code>, <code>&lt;mark&gt;</code>, <code>&lt;cite&gt;</code>, <code>&lt;q&gt;</code>, <code>&lt;abbr&gt;</code>, <code>&lt;time&gt;</code></h1>
                <p className="lede">
                    Use these elements to add meaning without breaking paragraph flow. Where a specific tag exists,
                    avoid a generic <code>&lt;span&gt;</code>.
                </p>
            </header>

            <nav className="toc" aria-label="On this page">
                <a href="#span">span</a>
                <a href="#small">small</a>
                <a href="#mark">mark</a>
                <a href="#cite-q">cite &amp; q</a>
                <a href="#abbr">abbr</a>
                <a href="#time">time</a>
                <a href="#matrix">Quick matrix</a>
                <a href="#play">Playground</a>
            </nav>

            <section id="span">
                <h2><code>&lt;span&gt;</code> — generic inline wrapper</h2>
                <div className="card">
                    <p>Use for styling hooks and minimal grouping when no semantic element applies.</p>
                    <ul className="bullets">
                        <li>Neutral by design; adds no meaning.</li>
                        <li>Prefer semantic tags when available.</li>
                        <li>Don’t rely on <code>span</code> to convey status/meaning alone.</li>
                    </ul>
                </div>
            </section>

            <section id="small">
                <h2><code>&lt;small&gt;</code> — side comments / fine print</h2>
                <div className="card">
                    <p>For secondary text: disclaimers, notes, copyright lines.</p>
                </div>
            </section>

            <section id="mark">
                <h2><code>&lt;mark&gt;</code> — highlighted text</h2>
                <div className="card">
                    <p>Indicates relevance (e.g., search term matches). Avoid using it just to color text.</p>
                </div>
            </section>

            <section id="cite-q">
                <h2><code>&lt;cite&gt;</code> (work title) and <code>&lt;q&gt;</code> (short quote)</h2>
                <div className="card">
                    <Styled.Code role="region" aria-label="cite and q example">
                        <pre>{String.raw`<p>
  In <cite>Understanding Comics</cite>, McCloud writes
  <q cite="https://example.org/uc">art is a way of seeing</q>.
</p>`}</pre>
                    </Styled.Code>
                    <p className="note">
                        Use the <code>cite</code> attribute on <code>q</code> to link to a source. Don’t wrap names in <code>cite</code>.
                    </p>
                </div>
            </section>

            <section id="abbr">
                <h2><code>&lt;abbr&gt;</code> — abbreviation/initialism</h2>
                <div className="card">
                    <Styled.Code>
                        <pre>{String.raw`<p>
  Learn <abbr title="HyperText Markup Language">HTML</abbr> and
  <abbr title="Cascading Style Sheets">CSS</abbr>.
</p>`}</pre>
                    </Styled.Code>
                    <p className="note">Always provide the expansion via <code>title</code>.</p>
                </div>
            </section>

            <section id="time">
                <h2><code>&lt;time&gt;</code> — machine-readable dates/times</h2>
                <div className="card">
                    <Styled.Code>
                        <pre>{String.raw`<p>
  Updated on <time datetime="2025-11-02">Nov 2, 2025</time>.
</p>`}</pre>
                    </Styled.Code>
                    <p className="note">Use ISO 8601 in <code>datetime</code> so machines can parse the value.</p>
                </div>
            </section>

            <section id="matrix">
                <h2>Quick matrix</h2>
                <div className="card">
                    <ul className="bullets">
                        <li><strong>span</strong>: generic; no meaning.</li>
                        <li><strong>small</strong>: fine print/aside.</li>
                        <li><strong>mark</strong>: highlighted relevance.</li>
                        <li><strong>cite</strong>: title of a work.</li>
                        <li><strong>q</strong>: short inline quote; optional <code>cite</code> attribute for source.</li>
                        <li><strong>abbr</strong>: abbreviation; put full form in <code>title</code>.</li>
                        <li><strong>time</strong>: machine-readable date/time via <code>datetime</code>.</li>
                    </ul>
                </div>
            </section>

            {/* LAST: Monaco playground */}
            <section id="play">
                <h2>Try it live</h2>
                <p className="lede">
                    Replace generic <code>&lt;span&gt;</code> with specific tags where appropriate, add missing
                    attributes (<code>title</code>, <code>datetime</code>), and check how quotes render automatically.
                </p>
                <HtmlPlayground
                    storageKey="core-html:text:inline-semantics:v1"
                    initialHtml={STARTER_HTML}
                    height={640}
                />
            </section>

            {/* Prev + Next */}
            <nav className="nextPrev" aria-label="Lesson navigation">
                <NavLink to="/text/em-vs-strong" className="prev" aria-label="Go to Emphasis vs importance">
                    ← &nbsp;Emphasis vs importance
                </NavLink>
                <NavLink to="/text/code-pre-kbd-samp" className="next" aria-label="Go to Code, pre, kbd, samp">
                    Next: Code, pre, kbd, samp →
                </NavLink>
            </nav>

            <div className="backTop"><a href="#top">Back to top ↑</a></div>
        </Styled.Page>
    );
}
