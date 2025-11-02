import React, { useEffect } from "react";
import { Styled } from "./styled";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";
import { NavLink } from "react-router-dom";

/**
 * Link Text Quality
 * - Why descriptive link text matters (a11y, SEO, skim-reading)
 * - Avoid "click here", "read more", bare URLs
 * - Put keywords in the link itself (not only around it)
 * - Keep the actionable part of the sentence as the link
 * - Length & scannability: 1–8 words, front-load meaning
 * - Adjacent links, duplicate link text, and context
 * - Icons, external indicators, and hidden text helpers
 * - Monaco playground LAST
 */

const STARTER_HTML = String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Link text quality — demo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui,-apple-system,Segoe UI,Roboto,sans-serif; }
      .grid { display: grid; gap: 14px; }
      .card { border: 1px solid #ccc; border-radius: 12px; padding: 12px; }
      .bad  { background: color-mix(in oklab, #dc2626, transparent 92%); border-color:#f2a6a6; }
      .good { background: color-mix(in oklab, #16a34a, transparent 92%); border-color:#8ed09b; }
      .muted { color: #6b7280; }
      .k { display:inline-block; border:1px solid #bbb; border-radius:999px; padding:2px 8px; font-size:12px; }
      .ex { border:1px dashed #aaa; padding:8px; border-radius:10px; margin-top:6px; }
      .row.two { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:10px; }
      @media (max-width: 860px) { .row.two { grid-template-columns:1fr; } }
      .visually-hidden {
        position:absolute; width:1px; height:1px; padding:0; margin:-1px; overflow:hidden;
        clip:rect(0 0 0 0); white-space:nowrap; border:0;
      }
      a.icon {
        display:inline-flex; align-items:center; gap:6px;
        text-underline-offset: 3px;
      }
      .pill { display:inline-block; padding:2px 8px; font-size:12px; border-radius:999px; border:1px solid #bbb; }
      .list { padding-left: 18px; line-height: 1.8; }
      .small { font-size: 12px; color: #6b7280; }
    </style>
  </head>
  <body>
    <main class="grid">
      <header>
        <h1>Make your link text do the work</h1>
        <p class="muted">Describe the destination or action. Links should stand alone when read out of context.</p>
      </header>

      <section class="card bad">
        <h2>Weak patterns <small class="k">avoid</small></h2>
        <div class="ex list">
          <p>Our pricing is now live — <a href="#">click here</a>.</p>
          <p>Documentation: <a href="https://example.com/docs">https://example.com/docs</a></p>
          <p>To learn more, <a href="#">read more</a>.</p>
        </div>
        <p class="small">Screen reader users often skim links; vague text forces them to guess.</p>
      </section>

      <section class="card good">
        <h2>Stronger patterns <small class="k">do this</small></h2>
        <div class="ex list">
          <p>Explore <a href="#">pricing plans</a>.</p>
          <p>Read the <a href="https://example.com/docs">API documentation</a>.</p>
          <p>Compare <a href="#">Starter vs Pro features</a>.</p>
        </div>
        <p class="small">Front-load meaning: put the unique, descriptive words early.</p>
      </section>

      <section class="card">
        <h2>Keep the action inside the link</h2>
        <div class="row two">
          <div class="ex bad">
            <p>To download the report, <a href="#">click here</a>.</p>
          </div>
          <div class="ex good">
            <p><a href="#">Download the Q4 report</a>.</p>
          </div>
        </div>
      </section>

      <section class="card">
        <h2>Adjacent links & repeated text</h2>
        <div class="row two">
          <div class="ex bad">
            <p><a href="#">Details</a> | <a href="#">Details</a> | <a href="#">Details</a></p>
            <p class="small">Three links with the same text → indistinguishable in a links list.</p>
          </div>
          <div class="ex good">
            <p>
              <a href="#">Product A details</a> |
              <a href="#">Product B details</a> |
              <a href="#">Product C details</a>
            </p>
          </div>
        </div>
      </section>

      <section class="card">
        <h2>Icons & hidden helpers</h2>
        <div class="ex">
          <p>
            <a class="icon" href="https://example.com" target="_blank" rel="noopener">
              <span aria-hidden="true">🌐</span>
              Visit project site
              <span class="visually-hidden">(opens in a new tab)</span>
            </a>
          </p>
          <p class="small">Use an inline note for screen readers instead of stuffing “(new tab)” into visible text everywhere.</p>
        </div>
      </section>

      <section class="card">
        <h2>Don’t rely on surrounding text</h2>
        <div class="row two">
          <div class="ex bad">
            <p>For keyboard shortcuts, see <a href="#">this page</a>.</p>
          </div>
          <div class="ex good">
            <p>See <a href="#">keyboard shortcuts</a>.</p>
          </div>
        </div>
      </section>

      <section class="card">
        <h2>Quick checklist</h2>
        <ul class="list">
          <li>Would the link make sense if read alone? If not, reword.</li>
          <li>Make the most meaningful words part of the link itself.</li>
          <li>Avoid bare URLs; use human-readable text.</li>
          <li>Keep links concise (roughly 1–8 words).</li>
          <li>For <code>_blank</code>, add <code>rel="noopener"</code> and a hidden “opens in new tab” note.</li>
        </ul>
      </section>

      <section class="card">
        <h2>FAQ</h2>
        <details>
          <summary>Is “Read more” ever OK?</summary>
          <div class="ex"><p>Only if you include context in the link, e.g., <a href="#">Read more about performance budgets</a>.</p></div>
        </details>
        <details>
          <summary>Should I add icons to every external link?</summary>
          <div class="ex"><p>No. Use them where it adds clarity; avoid visual noise. Always keep text readable without the icon.</p></div>
        </details>
      </section>

      <footer class="muted">
        Rule of thumb: link text should name the destination or describe the action—without requiring extra context.
      </footer>
    </main>
  </body>
</html>`;

export default function LinkTextQuality() {
    useEffect(() => {
        document.title = "Links · Link text quality";
    }, []);

    return (
        <Styled.Page>
            <header className="pageHeader" id="top">
                <h1>Link text quality</h1>
                <p className="lede">
                    Write link text that stands on its own. Avoid “click here” and bare URLs. Front-load meaning and keep the action inside the link.
                </p>
            </header>

            <nav className="toc" aria-label="On this page">
                <a href="#principles">Principles</a>
                <a href="#patterns">Patterns</a>
                <a href="#pitfalls">Pitfalls</a>
                <a href="#play">Playground</a>
            </nav>

            <section id="principles">
                <h2>Principles</h2>
                <div className="grid2">
                    <div className="card">
                        <h3>Descriptive</h3>
                        <ul className="bullets">
                            <li>Name the destination or action in the link.</li>
                            <li>Front-load keywords; keep scannable.</li>
                            <li>Prefer human text over raw URLs.</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h3>Accessible</h3>
                        <ul className="bullets">
                            <li>Links should make sense out of context.</li>
                            <li>Don’t repeat identical text for different targets.</li>
                            <li>Use hidden helpers for “opens in new tab”.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="patterns">
                <h2>Patterns</h2>
                <div className="card">
                    <Styled.Code aria-label="Good vs poor link text examples">
                        <pre>{String.raw`<!-- Poor -->
<p>For details, <a href="#">click here</a>.</p>

<!-- Better -->
<p>See <a href="#">deployment checklist</a>.</p>

<!-- External with safe new tab -->
<p><a href="https://web.dev/" target="_blank" rel="noopener">
  Performance guidelines <span class="visually-hidden">(opens in a new tab)</span>
</a></p>`}</pre>
                    </Styled.Code>
                </div>
            </section>

            <section id="pitfalls">
                <h2>Pitfalls</h2>
                <ul className="badges">
                    <li><span className="bad">Wrong</span> “Click here”, “More”, “This”, “Link”.</li>
                    <li><span className="bad">Wrong</span> Bare URLs as visible link text.</li>
                    <li><span className="good">Good</span> Keep unique, succinct, action-oriented text.</li>
                </ul>
            </section>

            <section id="play">
                <h2>Try it live</h2>
                <p className="lede">
                    Rewrite weak links into strong, descriptive ones. Add hidden notes for new-tab links. Autosaves to this lesson.
                </p>
                <HtmlPlayground
                    storageKey="core-html:links:link-text-quality:v1"
                    initialHtml={STARTER_HTML}
                    height={680}
                />
            </section>

            <nav className="nextPrev" aria-label="Lesson navigation">
                <NavLink to="/links/target-rel-safety" className="prev" aria-label="Go to target & rel safety">
                    ← target &amp; rel safety
                </NavLink>
                <NavLink to="/lists/ul-ol-li" className="next" aria-label="Go to UL, OL, LI semantics">
                    Next: UL, OL, LI semantics →
                </NavLink>
            </nav>

            <div className="backTop"><a href="#top">Back to top ↑</a></div>
        </Styled.Page>
    );
}
