import React, { useEffect } from "react";
import { Styled } from "./styled";
import { NavLink } from "react-router-dom";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";

/*
  Topic: <a> anatomy (href, text) — Anchor basics

  Scope for this lesson:
  - What makes a real link?
  - href (required for a "real" navigable anchor)
  - Link text (visible text = accessible name by default)
  - Clickable area and inline content
  - Types of href we commonly see (http(s):, #id, mailto:, tel:)
  - Good vs poor link text; avoid empty or placeholder href
  - Tiny note about target/rel deferred to its own lesson
  - Hands-on playground at the end
*/

const STARTER_HTML = String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>&lt;a&gt; anatomy — href + link text</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui,-apple-system,Segoe UI,Roboto,sans-serif; }
      main { display: grid; gap: 16px; }
      .grid { display: grid; gap: 12px; }
      .card { border: 1px solid #ccc; border-radius: 12px; padding: 12px; }
      .good { background: color-mix(in oklab, #16a34a, transparent 92%); border-color:#8ed09b; }
      .bad  { background: color-mix(in oklab, #dc2626, transparent 92%); border-color:#f2a6a6; }
      .muted { color: #6b7280; }
      .ex { border:1px dashed #aaa; padding:10px; border-radius:10px; margin-top:6px; }
      code { background: #f5f5f5; padding: 0 6px; border-radius: 6px; }
    </style>
  </head>
  <body>
    <main>
      <header>
        <h1>&lt;a&gt; anatomy (href + text)</h1>
        <p class="muted">A real link needs an <code>href</code> and meaningful link text. Without <code>href</code>, it’s just inline text.</p>
      </header>

      <section class="card good">
        <h2>Minimum viable link</h2>
        <p>At minimum, an anchor has <code>href</code> and visible text.</p>
        <div class="ex">
          <a href="https://developer.mozilla.org/">MDN Web Docs</a>
        </div>
      </section>

      <section class="card bad">
        <h2>Not a link (missing href)</h2>
        <p>Without <code>href</code>, it won’t navigate, won’t be tabbable as a link, and won’t announce as a link to screen readers.</p>
        <div class="ex">
          <a>Click here</a> <!-- ⚠ no href -->
        </div>
      </section>

      <section class="card">
        <h2>Common href forms</h2>
        <ul>
          <li><code>https://example.com/docs</code> — absolute URL</li>
          <li><code>/docs/get-started</code> — root-relative URL</li>
          <li><code>getting-started.html</code> — document-relative URL</li>
          <li><code>#features</code> — jump to element with <code>id="features"</code></li>
          <li><code>mailto:hello@example.com</code> — open default mail client</li>
          <li><code>tel:+919999999999</code> — dialer on supported devices</li>
        </ul>
        <div class="ex">
          <p>
            <a href="#details">Jump to details</a> ·
            <a href="/home">Go to site home</a> ·
            <a href="mailto:hi@example.com">Email us</a>
          </p>
        </div>
      </section>

      <section class="card bad">
        <h2>Avoid placeholders</h2>
        <p>These either do nothing or are hostile to users and assistive tech:</p>
        <ul>
          <li><code>&lt;a href="#"&gt;...&lt;/a&gt;</code> (jumps to top; breaks back/scroll)</li>
          <li><code>&lt;a href="javascript:void(0)"&gt;...&lt;/a&gt;</code> (no navigation; smells like a button)</li>
        </ul>
        <div class="ex">
          <a href="#">Fake link</a> ·
          <a href="javascript:void(0)">Another fake link</a>
        </div>
      </section>

      <section class="card">
        <h2>Link text quality (micro-guidance)</h2>
        <p>A link’s visible text becomes its accessible name. Make it specific and self-contained.</p>
        <ul>
          <li class="good"><strong>Good:</strong> <code>&lt;a href="/pricing"&gt;Compare pricing plans&lt;/a&gt;</code></li>
          <li class="bad"><strong>Bad:</strong> <code>&lt;a href="/pricing"&gt;Click here&lt;/a&gt;</code></li>
        </ul>
      </section>

      <section id="details" class="card">
        <h2>Inline content inside a link</h2>
        <p>An anchor can contain phrasing content (text, <code>&lt;em&gt;</code>, <code>&lt;strong&gt;</code>, inline SVG, icons).</p>
        <div class="ex">
          <a href="/docs/get-started">
            <strong>Get started</strong>
            <span class="muted"> — quick guide</span>
          </a>
        </div>
      </section>

      <section class="card">
        <h2>What about <code>target</code> / <code>rel</code>?</h2>
        <p>Opening in a new tab/window (<code>target="_blank"</code>) and safety attributes (<code>rel="noopener"</code>) are covered in a later lesson.</p>
      </section>

      <footer class="muted">
        Tip: If it triggers an in-page action (not navigation), consider a <code>&lt;button&gt;</code> instead.
      </footer>
    </main>
  </body>
</html>`;

export default function MinimalAnatomy() {
    useEffect(() => {
        document.title = "Links · <a> anatomy (href, text)";
    }, []);

    return (
        <Styled.Page>
            <header className="pageHeader" id="top">
                <h1>
                    <code>&lt;a&gt;</code> anatomy (href, text)
                </h1>
                <p className="lede">
                    A real link needs an <code>href</code> and meaningful text. The text you write is also the link’s accessible name—keep it clear and self-contained.
                </p>
            </header>

            <nav className="toc" aria-label="On this page">
                <a href="#what-makes-link">What makes a link</a>
                <a href="#href-basics">href basics</a>
                <a href="#text-quality">Text quality</a>
                <a href="#inline-content">Inline content</a>
                <a href="#play">Playground</a>
            </nav>

            <section id="what-makes-link">
                <h2>What makes a link</h2>
                <div className="card">
                    <ul className="bullets">
                        <li><strong>Needs <code>href</code></strong>: without it, it’s not keyboard-navigable nor announced as a link.</li>
                        <li><strong>Needs text</strong>: visible text (or an accessible name) describes the destination.</li>
                        <li><strong>Inline semantic</strong>: anchors are phrasing content; nest phrasing elements, not block layout containers.</li>
                    </ul>
                </div>
            </section>

            <section id="href-basics">
                <h2>href basics</h2>
                <div className="grid2">
                    <div className="card">
                        <h3>Valid, useful destinations</h3>
                        <ul className="bullets">
                            <li>Absolute or relative URLs (<code>https://…</code>, <code>/path</code>, <code>page.html</code>).</li>
                            <li>Fragment IDs (<code>#faq</code>) to jump within the document.</li>
                            <li><code>mailto:</code> and <code>tel:</code> where appropriate.</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h3>Avoid placeholders</h3>
                        <ul className="bullets">
                            <li><code>href="#"</code> or <code>href="javascript:void(0)"</code>—these are not real destinations.</li>
                            <li>If it triggers UI, use a <code>&lt;button&gt;</code> instead.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="text-quality">
                <h2>Link text quality</h2>
                <Styled.Code>
                    <pre>{String.raw`<!-- Specific, self-contained -->
<a href="/docs/accessibility/skip-link">Add a skip link to jump to main content</a>

<!-- Vague; avoid -->
<a href="/docs/accessibility/skip-link">Click here</a>`}</pre>
                </Styled.Code>
                <p className="note">
                    Screen readers often scan links out of context. Make each link informative on its own.
                </p>
            </section>

            <section id="inline-content">
                <h2>Inline content inside a link</h2>
                <Styled.Code>
                    <pre>{String.raw`<!-- Phrasing content inside is fine -->
<a href="/get-started">
  <strong>Get started</strong> <span aria-hidden="true">→</span>
</a>`}</pre>
                </Styled.Code>
            </section>

            {/* LAST: Monaco playground */}
            <section id="play">
                <h2>Try it live</h2>
                <p className="lede">
                    Fix broken anchors by adding real <code>href</code> values, improve the link text, and convert fake links to buttons where they trigger actions.
                </p>
                <HtmlPlayground
                    storageKey="core-html:links:minimal-anatomy:v1"
                    initialHtml={STARTER_HTML}
                    height={640}
                />
            </section>

            {/* Prev + Next */}
            <nav className="nextPrev" aria-label="Lesson navigation">
                <NavLink to="/headings/h1-h6-hierarchy" className="prev" aria-label="Go to Headings hierarchy">
                    ← Headings hierarchy
                </NavLink>
                <NavLink to="/links/paths-and-fragments" className="next" aria-label="Go to Absolute vs relative, #ids">
                    Next: Absolute vs relative, #ids →
                </NavLink>
            </nav>

            <div className="backTop"><a href="#top">Back to top ↑</a></div>
        </Styled.Page>
    );
}
