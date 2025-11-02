import React, { useEffect } from "react";
import { Styled } from "./styled";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";
import { NavLink } from "react-router-dom";

/**
 * target & rel safety for <a>
 * - target basics: _self, _blank, _parent, _top
 * - Why _blank is risky (reverse tabnabbing via window.opener)
 * - rel="noopener" (prevents window.opener)
 * - rel="noreferrer" (also hides referrer; implies noopener in most browsers)
 * - Contextual rel tokens: external, ugc, sponsored
 * - JS equivalents: window.open(url, "_blank", "noopener,noreferrer")
 * - Progressive patterns and audit checklist
 * - Monaco playground LAST
 */

const STARTER_HTML = String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>target & rel safety — demo</title>
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
      code { background: #f5f5f5; padding:0 6px; border-radius:6px; }
      .ex { border:1px dashed #aaa; padding:8px; border-radius:10px; margin-top:6px; }
      .k { display:inline-block; border:1px solid #bbb; border-radius:999px; padding:2px 8px; font-size:12px; }
      .row { display: grid; gap: 8px; }
      .row.two { grid-template-columns: repeat(2, minmax(0,1fr)); }
      @media (max-width: 860px) { .row.two { grid-template-columns: 1fr; } }
      .small { font-size: 12px; color: #6b7280; }
      .btn { display:inline-block; padding:8px 12px; border-radius:10px; border:1px solid #bbb; text-decoration:none; }
    </style>
  </head>
  <body>
    <main class="grid">
      <header>
        <h1>Opening links safely: <code>target</code> & <code>rel</code></h1>
        <p class="muted">Use <code>target="_blank"</code> only when needed—and always pair it with the right <code>rel</code> tokens.</p>
      </header>

      <section class="card bad">
        <h2>Risky pattern <small class="k">reverse tabnabbing</small></h2>
        <p>Opening a new tab without the right <code>rel</code> can give the new page a handle to your page via <code>window.opener</code>.</p>
        <div class="ex">
          <a class="btn" href="https://example.com" target="_blank">Opens new tab (⚠ unsafe)</a>
          <p class="small">Without <code>rel="noopener"</code>, the opened page can try <code>window.opener.location = '...'</code>.</p>
        </div>
      </section>

      <section class="card good">
        <h2>Safe pattern: <code>rel="noopener"</code></h2>
        <p>Prevents the new window from accessing <code>window.opener</code>.</p>
        <div class="ex">
          <a class="btn" href="https://developer.mozilla.org/" target="_blank" rel="noopener">MDN (safe)</a>
        </div>
      </section>

      <section class="card">
        <h2>Privacy add-on: <code>rel="noreferrer"</code></h2>
        <p>Also omits the HTTP <em>Referer</em> header on navigation. Many browsers treat <code>noreferrer</code> as also implying <code>noopener</code>.</p>
        <div class="ex">
          <a class="btn" href="https://web.dev/" target="_blank" rel="noreferrer">web.dev (no referrer)</a>
          <p class="small">Use when you don't want to leak the source page, or your policy requires it.</p>
        </div>
      </section>

      <section class="card">
        <h2>Context tokens: <code>external</code>, <code>ugc</code>, <code>sponsored</code></h2>
        <div class="row two">
          <div>
            <p><code>external</code>: non-essential hint that the link goes off-site.</p>
            <div class="ex"><a class="btn" href="https://example.org" rel="external noopener" target="_blank">External site</a></div>
          </div>
          <div>
            <p><code>ugc</code>: user-generated content. <code>sponsored</code>: paid links/ads.</p>
            <div class="ex">
              <a class="btn" href="https://example.org" rel="ugc noopener" target="_blank">UGC link</a>
              <a class="btn" href="https://example.org" rel="sponsored noopener" target="_blank">Sponsored link</a>
            </div>
          </div>
        </div>
      </section>

      <section class="card">
        <h2>JS equivalent: open safely</h2>
        <div class="ex">
<pre><code>// Prefer rel on &lt;a&gt;, but if you must use JS:
const win = window.open("https://example.com", "_blank", "noopener,noreferrer");
// As a belt-and-suspenders fallback:
if (win) { win.opener = null; }</code></pre>
        </div>
      </section>

      <section class="card">
        <h2>Checklist</h2>
        <ul>
          <li>Only use <code>target="_blank"</code> when it truly helps the user.</li>
          <li>Add <code>rel="noopener"</code> at minimum. Often use <code>rel="noopener noreferrer"</code>.</li>
          <li>Mark context with <code>rel="ugc"</code> and/or <code>rel="sponsored"</code> when applicable.</li>
          <li>Avoid JS <code>window.open</code> unless necessary; prefer semantic anchors.</li>
        </ul>
      </section>

      <section class="card">
        <h2>FAQ</h2>
        <details>
          <summary>Should I always add <code>noreferrer</code>?</summary>
          <div class="ex"><p>Use it when you want to withhold referrer information due to privacy or policy. If you only need opener protection, <code>noopener</code> is sufficient.</p></div>
        </details>
        <details>
          <summary>Does <code>noopener</code> affect analytics?</summary>
          <div class="ex"><p>No; it only cuts the JS <code>window.opener</code> relationship. <code>noreferrer</code> may impact referrer-based analytics.</p></div>
        </details>
        <details>
          <summary>Do I need both <code>noopener</code> and <code>noreferrer</code>?</summary>
          <div class="ex"><p>Many teams standardize on both for simplicity: <code>rel="noopener noreferrer"</code>.</p></div>
        </details>
      </section>

      <section class="card">
        <h2>Try a quick audit</h2>
        <p>Scan your page for <code>target="_blank"</code> and ensure the matching <code>rel</code> tokens are present.</p>
<pre><code>// Console snippet: flag anchors missing rel safety
[...document.querySelectorAll('a[target="_blank"]')].forEach(a => {
  const rel = (a.getAttribute('rel') || '').toLowerCase();
  if (!/noopener/.test(rel) && !/noreferrer/.test(rel)) {
    console.warn('Missing rel safety:', a);
  }
});</code></pre>
      </section>

      <footer class="muted">
        Rule of thumb: If it opens a new tab, protect the opener—and think about privacy.
      </footer>
    </main>
  </body>
</html>`;

export default function TargetRelSafety() {
    useEffect(() => {
        document.title = "Links · target & rel safety";
    }, []);

    return (
        <Styled.Page>
            <header className="pageHeader" id="top">
                <h1>
                    <code>target</code> and <code>rel</code> safety
                </h1>
                <p className="lede">
                    New tabs are convenient, but without the right <code>rel</code> tokens they can be a security and privacy foot-gun.
                    Learn when to use <code>_blank</code>, what each <code>rel</code> token does, and copy-paste safe patterns.
                </p>
            </header>

            <nav className="toc" aria-label="On this page">
                <a href="#target">Target basics</a>
                <a href="#risk">Why it’s risky</a>
                <a href="#rel">rel tokens</a>
                <a href="#js">JS equivalents</a>
                <a href="#audit">Audit & checklist</a>
                <a href="#play">Playground</a>
            </nav>

            <section id="target">
                <h2>Target basics</h2>
                <div className="card">
                    <ul className="bullets">
                        <li><code>_self</code> (default) — open in the same browsing context.</li>
                        <li><code>_blank</code> — open in a new tab/window (user-agent decides).</li>
                        <li><code>_parent</code>, <code>_top</code> — rarely used; interact with frames/iframes.</li>
                    </ul>
                </div>
            </section>

            <section id="risk">
                <h2>Why <code>_blank</code> can be risky</h2>
                <div className="card">
                    <p>
                        When you open a new tab, the new page may receive a reference to your page via <code>window.opener</code>. A hostile page could attempt to navigate your page (reverse tabnabbing).
                    </p>
                    <p className="note">Mitigation: add <code>rel="noopener"</code> or <code>rel="noreferrer"</code> on the link.</p>
                </div>
            </section>

            <section id="rel">
                <h2>What does <code>rel</code> do here?</h2>
                <div className="grid2">
                    <div className="card">
                        <h3>Security & privacy</h3>
                        <ul className="bullets">
                            <li><strong>noopener</strong>: blocks <code>window.opener</code> in the new tab.</li>
                            <li><strong>noreferrer</strong>: don’t send the HTTP referrer (and commonly blocks opener as well).</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h3>Context markers</h3>
                        <ul className="bullets">
                            <li><strong>external</strong>: hints that the link goes off-site.</li>
                            <li><strong>ugc</strong>: user-generated content (comments, forums).</li>
                            <li><strong>sponsored</strong>: paid/affiliate links.</li>
                        </ul>
                    </div>
                </div>
                <Styled.Code aria-label="Common safe pattern">
                    <pre>{String.raw`<a href="https://example.com" target="_blank" rel="noopener noreferrer">
  Visit example
</a>`}</pre>
                </Styled.Code>
            </section>

            <section id="js">
                <h2>JavaScript equivalents</h2>
                <Styled.Code aria-label="JS open safely">
                    <pre>{String.raw`// If you must use JS:
const win = window.open("https://example.com", "_blank", "noopener,noreferrer");
if (win) win.opener = null; // extra hardening`}</pre>
                </Styled.Code>
            </section>

            <section id="audit">
                <h2>Audit quickly</h2>
                <Styled.Code aria-label="Console lint snippet">
                    <pre>{String.raw`// In DevTools console:
[...document.querySelectorAll('a[target="_blank"]')].forEach(a => {
  const rel = (a.getAttribute('rel') || '').toLowerCase();
  if (!/noopener|noreferrer/.test(rel)) console.warn('Needs rel safety:', a);
});`}</pre>
                </Styled.Code>
            </section>

            <section id="play">
                <h2>Try it live</h2>
                <p className="lede">
                    Fix unsafe <code>_blank</code> links, add the right <code>rel</code> tokens, and compare behaviors. Autosaves to this lesson.
                </p>
                <HtmlPlayground
                    storageKey="core-html:links:target-rel-safety:v1"
                    initialHtml={STARTER_HTML}
                    height={680}
                />
            </section>

            <nav className="nextPrev" aria-label="Lesson navigation">
                <NavLink to="/links/paths-and-fragments" className="prev" aria-label="Go to Absolute vs relative, #ids">
                    ← Absolute vs relative, #ids
                </NavLink>
                <NavLink to="/links/link-text-quality" className="next" aria-label="Go to Link text quality">
                    Next: Link text quality →
                </NavLink>
            </nav>

            <div className="backTop"><a href="#top">Back to top ↑</a></div>
        </Styled.Page>
    );
}
