// src/pages/globals/langOnElements/index.jsx
import React, { useEffect } from "react";
import { Styled } from "./styled";
import { NavLink } from "react-router-dom";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";

/**
 * lang (per element)
 * - Why lang matters (AT pronunciation, hyphenation, quotes, line-breaking)
 * - BCP 47 tags: language[-Script][-Region][-Variant]
 * - Inheritance + local overrides
 * - Inline switches (names, quotations, UI fragments)
 * - dir interplay, but keep focus on lang
 * - CSS :lang() selectors and hyphenation
 * - Practical examples + pitfalls
 * - Monaco playground (last)
 */

const STARTER_HTML = String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>lang on elements — inline language changes</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui, -apple-system, Segoe UI, Roboto, sans-serif; }
      main { display: grid; gap: 16px; max-width: 900px; margin: 0 auto; }
      .card { border: 1px solid #ccc; border-radius: 12px; padding: 12px; }
      .muted { color: #6b7280; }
      code { background: #f5f5f5; padding: 0 6px; border-radius: 6px; }
      .ex { border:1px dashed #aaa; padding:8px; border-radius:10px; margin-top:6px; }

      /* hyphenation dictionaries key off lang */
      article { max-width: 52ch; hyphens: auto; }

      /* localized quotes via :lang() — demo only */
      q { quotes: "“" "”" "‘" "’"; }
      :lang(fr) q { quotes: "« " " »" "‹ " " ›"; }
      :lang(de) q { quotes: "„" "“" "‚" "‘"; }

      /* tiny flag chips (purely decorative) */
      .chip { display:inline-block; font-size:12px; border:1px solid #bbb; border-radius:999px; padding:2px 8px; margin-left:6px; }
    </style>
  </head>
  <body>
    <main>
      <header>
        <h1>Per-element <code>lang</code> (inline language changes)</h1>
        <p class="muted">Give assistive tech the right dictionary and voice. Local <code>lang</code> overrides help screen readers, hyphenation, quotes, and search.</p>
      </header>

      <section class="card">
        <h2>Inline names and phrases</h2>
        <div class="ex">
          <p>
            English paragraph mentioning <span lang="hi">नमस्ते</span> (Hindi) and a French term
            <span lang="fr">mise en place</span>. Screen readers pick correct pronunciation per span.
          </p>
          <p>
            Proper names: <span lang="ja">村上 春樹</span> (Haruki Murakami),
            <span lang="ar">نجيب محفوظ</span> (Naguib Mahfouz).
          </p>
        </div>
      </section>

      <section class="card">
        <h2>Quotes adapt to locale</h2>
        <div class="ex">
          <p lang="en">In English we say, <q>hello</q>.</p>
          <p lang="fr">En français on dit <q>bonjour</q>.</p>
          <p lang="de">Auf Deutsch sagt man <q>hallo</q>.</p>
          <p class="muted">The <code>:lang()</code> CSS above swaps quotation marks.</p>
        </div>
      </section>

      <section class="card">
        <h2>Hyphenation depends on <code>lang</code></h2>
        <article lang="en">
          Long English text hyphenates differently than French. Try resizing and change this block’s <code>lang</code> to <code>fr</code> to see the effect with <code>hyphens:auto</code>.
        </article>
      </section>

      <section class="card">
        <h2>BCP 47 tagging (syntax)</h2>
        <ul>
          <li><code>en</code> — language only</li>
          <li><code>zh-Hant</code> — language + script (Traditional Chinese)</li>
          <li><code>pt-BR</code> vs <code>pt-PT</code> — region variants</li>
          <li><code>sr-Cyrl</code> vs <code>sr-Latn</code> — Serbian in Cyrillic vs Latin</li>
        </ul>
        <p class="muted">Use the shortest accurate tag. Avoid made-up codes.</p>
      </section>

      <section class="card">
        <h2>Inheritance</h2>
        <div class="ex">
          <p lang="en">This paragraph is English by default,
            but <span lang="es">este fragmento está en español</span> only for the span.</p>
          <p class="muted">Child elements inherit <code>lang</code> unless they specify their own.</p>
        </div>
      </section>

      <section class="card">
        <h2>dir vs lang</h2>
        <div class="ex">
          <p>
            <strong>Direction</strong> (<code>dir</code>) is about text flow: ltr/rtl. 
            <strong>Language</strong> (<code>lang</code>) is about pronunciation and dictionaries.
          </p>
          <p>
            Arabic word with rtl direction:
            <bdi dir="rtl" lang="ar">السلام</bdi>
            <span class="chip">dir=rtl</span>
            <span class="chip">lang=ar</span>
          </p>
        </div>
      </section>

      <footer class="muted">
        Tip: Add <code>lang</code> wherever pronunciation or dictionary matters—names, citations, quoted UI text, mixed-language content.
      </footer>
    </main>
  </body>
</html>`;

export default function LangOnElements() {
    useEffect(() => {
        document.title = "Globals · lang (per element)";
    }, []);

    return (
        <Styled.Page>
            <header className="pageHeader" id="top">
                <h1><code>lang</code> on elements (inline language changes)</h1>
                <p className="lede">
                    The <code>lang</code> attribute tells user agents and assistive tech which language to use for a given piece of content.
                    Set it on the smallest meaningful span when your document mixes languages.
                </p>
            </header>

            <nav className="toc" aria-label="On this page">
                <a href="#why">Why it matters</a>
                <a href="#bcp47">BCP 47 tags</a>
                <a href="#inherit">Inheritance</a>
                <a href="#inline">Inline switches</a>
                <a href="#css">CSS :lang() & hyphenation</a>
                <a href="#pitfalls">Pitfalls</a>
                <a href="#play">Playground</a>
            </nav>

            <section id="why">
                <h2>Why it matters</h2>
                <div className="card">
                    <ul className="bullets">
                        <li>Screen readers pick the right voice and pronunciation.</li>
                        <li>Hyphenation and line-breaking use the correct dictionary.</li>
                        <li>Quotation marks and punctuation can adapt via <code>:lang()</code>.</li>
                        <li>Search, spellcheck, and translation tools behave more accurately.</li>
                    </ul>
                </div>
            </section>

            <section id="bcp47">
                <h2>BCP 47 tags (shape)</h2>
                <Styled.Code>
                    <pre>{String.raw`language[-Script][-Region][-Variant]
Examples:
- en
- fr-CA
- zh-Hant
- sr-Latn-RS`}</pre>
                </Styled.Code>
                <p className="note">
                    Use real tags from BCP 47. Prefer the shortest accurate tag; don’t invent codes.
                </p>
            </section>

            <section id="inherit">
                <h2>Inheritance</h2>
                <p>
                    <code>lang</code> inherits from ancestors. Set <code>&lt;html lang="…"&gt;</code> for the default document
                    language, then override individual phrases with <code>lang</code> where needed.
                </p>
                <Styled.Code role="region" aria-label="Inheritance example">
                    <pre>{String.raw`<p lang="en">This line is English, but <span lang="it">questo è italiano</span>.</p>`}</pre>
                </Styled.Code>
            </section>

            <section id="inline">
                <h2>Inline switches (names, UI, quotes)</h2>
                <div className="grid2">
                    <div className="card">
                        <h3>Names</h3>
                        <Styled.Code>
                            <pre>{String.raw`<span lang="ja">村上 春樹</span> (Haruki Murakami)`}</pre>
                        </Styled.Code>
                    </div>
                    <div className="card">
                        <h3>Borrowed UI strings</h3>
                        <Styled.Code>
                            <pre>{String.raw`<span lang="fr">Enregistrer</span> (Save)`}</pre>
                        </Styled.Code>
                    </div>
                </div>
            </section>

            <section id="css">
                <h2>CSS <code>:lang()</code> and hyphenation</h2>
                <p>
                    The <code>:lang()</code> pseudo-class matches elements by language, useful for localized
                    tweaks such as quotes or spacing. Hyphenation relies on dictionaries keyed by <code>lang</code>.
                </p>
                <Styled.Code>
                    <pre>{String.raw`q { quotes: "“" "”" "‘" "’"; }
:lang(fr) q { quotes: "« " " »" "‹ " " ›"; }`}</pre>
                </Styled.Code>
            </section>

            <section id="pitfalls">
                <h2>Pitfalls</h2>
                <ul className="badges">
                    <li><span className="bad">Wrong</span> Omitting <code>lang</code> on <code>&lt;html&gt;</code> and inline foreign text.</li>
                    <li><span className="bad">Wrong</span> Using region when script matters (<code>sr-Latn</code> vs <code>sr-Cyrl</code>).</li>
                    <li><span className="good">Good</span> Small, precise overrides (<code>lang</code> on names/phrases).</li>
                </ul>
            </section>

            {/* LAST: Monaco playground */}
            <section id="play">
                <h2>Try it live</h2>
                <p className="lede">
                    Add or change <code>lang</code> for mixed-language text below. Listen with a screen reader,
                    resize the page to see hyphenation differences, and tweak <code>:lang()</code> quotes.
                </p>
                <HtmlPlayground
                    storageKey="core-html:globals:lang-on-elements:v1"
                    initialHtml={STARTER_HTML}
                    height={640}
                />
            </section>

            {/* Prev + Next */}
            <nav className="nextPrev" aria-label="Lesson navigation">
                <NavLink to="/globals/data-attributes" className="prev" aria-label="Go to data-* hooks">
                    ← data-* hooks
                </NavLink>
                <NavLink to="/images-perf/lazy-decoding" className="next" aria-label="Go to loading=lazy, decoding=async">
                    Next: loading="lazy", decoding="async" →
                </NavLink>
            </nav>

            <div className="backTop"><a href="#top">Back to top ↑</a></div>
        </Styled.Page>
    );
}
