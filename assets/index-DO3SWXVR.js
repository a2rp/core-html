import{d as n,r as s,j as e,N as r}from"./index-D3QNcmKe.js";import{H as i}from"./index-CAjihRuM.js";const a={Page:n.main`
        display: grid;
        gap: 16px;
        padding: 16px;
        max-width: 1100px;
        margin: 0 auto;

        .pageHeader {
            display: grid;
            gap: 8px;
        }
        .lede {
            color: var(--text-muted);
            font-size: 15px;
        }

        .toc {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            padding: 8px;
            border: 1px solid var(--border);
            border-radius: 12px;
            background: var(--surface);
        }
        .toc a {
            border: 1px solid var(--border);
            background: var(--card);
            color: var(--text);
            padding: 6px 10px;
            border-radius: 999px;
            font-size: 13px;
            text-decoration: none;
        }

        .grid2 {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
        }
        @media (max-width: 900px) {
            .grid2 {
                grid-template-columns: 1fr;
            }
        }

        .card {
            border: 1px solid var(--border);
            background: var(--card);
            border-radius: 12px;
            padding: 12px;
        }

        .bullets {
            padding-left: 18px;
            line-height: 1.8;
        }
        .bullets code {
            font-size: 92%;
        }

        .badges {
            display: grid;
            gap: 8px;
            list-style: none;
            padding: 0;
        }
        .badges .bad,
        .badges .good {
            display: inline-block;
            font-size: 12px;
            padding: 2px 8px;
            border-radius: 999px;
            border: 1px solid var(--border);
            margin-right: 6px;
        }
        .badges .bad {
            background: #2b1a1a;
            color: #ffb4b4;
            border-color: #553;
        }
        .badges .good {
            background: #152417;
            color: #b6f3c1;
            border-color: #264a2b;
        }

        details {
            border: 1px solid var(--border);
            border-radius: 10px;
            padding: 8px 10px;
            background: var(--card);
        }
        details + details {
            margin-top: 8px;
        }
        summary {
            cursor: pointer;
        }

        .note {
            font-size: 14px;
            color: var(--text-muted);
            border-left: 3px solid var(--primary);
            padding: 8px 12px;
            background: color-mix(in oklab, var(--primary), transparent 92%);
            border-radius: 8px;
            margin-top: 8px;
        }

        .backTop {
            text-align: right;
            font-size: 13px;
        }
        .backTop a {
            color: var(--text-muted);
            text-decoration: none;
        }

        pre,
        code {
            font-family: ui-monospace, SFMono-Regular, Menlo, Consolas,
                monospace;
        }
        pre {
            font-size: 0.92rem;
            line-height: 1.5;
            margin: 0;
        }

        .nextPrev {
            margin-top: 24px;
            display: flex;
            justify-content: space-between;
            gap: 12px;
        }
        .nextPrev a {
            color: var(--primary);
            text-decoration: none;
            border: 1px solid var(--surface-400, #333);
            padding: 8px 12px;
            border-radius: 10px;
        }
        .nextPrev a:hover {
            background: var(--surface);
        }
    `,Code:n.div`
        position: relative;
        border: 1px solid var(--surface-400, #333);
        background: var(--surface-200, rgba(255, 255, 255, 0.02));
        border-radius: 10px;
        overflow: hidden;

        pre {
            margin: 0;
            padding: 12px 14px;
            font-family: Consolas, Monaco, "SFMono-Regular", Menlo, monospace;
            font-size: 0.9rem;
            line-height: 1.5;
            color: var(--text);
            overflow-x: auto;
            white-space: pre;
            -webkit-overflow-scrolling: touch;
        }
    `},d=String.raw`<!doctype html>
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
</html>`;function t(){return s.useEffect(()=>{document.title="Globals · lang (per element)"},[]),e.jsxs(a.Page,{children:[e.jsxs("header",{className:"pageHeader",id:"top",children:[e.jsxs("h1",{children:[e.jsx("code",{children:"lang"})," on elements (inline language changes)"]}),e.jsxs("p",{className:"lede",children:["The ",e.jsx("code",{children:"lang"})," attribute tells user agents and assistive tech which language to use for a given piece of content. Set it on the smallest meaningful span when your document mixes languages."]})]}),e.jsxs("nav",{className:"toc","aria-label":"On this page",children:[e.jsx("a",{href:"#why",children:"Why it matters"}),e.jsx("a",{href:"#bcp47",children:"BCP 47 tags"}),e.jsx("a",{href:"#inherit",children:"Inheritance"}),e.jsx("a",{href:"#inline",children:"Inline switches"}),e.jsx("a",{href:"#css",children:"CSS :lang() & hyphenation"}),e.jsx("a",{href:"#pitfalls",children:"Pitfalls"}),e.jsx("a",{href:"#play",children:"Playground"})]}),e.jsxs("section",{id:"why",children:[e.jsx("h2",{children:"Why it matters"}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"Screen readers pick the right voice and pronunciation."}),e.jsx("li",{children:"Hyphenation and line-breaking use the correct dictionary."}),e.jsxs("li",{children:["Quotation marks and punctuation can adapt via ",e.jsx("code",{children:":lang()"}),"."]}),e.jsx("li",{children:"Search, spellcheck, and translation tools behave more accurately."})]})})]}),e.jsxs("section",{id:"bcp47",children:[e.jsx("h2",{children:"BCP 47 tags (shape)"}),e.jsx(a.Code,{children:e.jsx("pre",{children:String.raw`language[-Script][-Region][-Variant]
Examples:
- en
- fr-CA
- zh-Hant
- sr-Latn-RS`})}),e.jsx("p",{className:"note",children:"Use real tags from BCP 47. Prefer the shortest accurate tag; don’t invent codes."})]}),e.jsxs("section",{id:"inherit",children:[e.jsx("h2",{children:"Inheritance"}),e.jsxs("p",{children:[e.jsx("code",{children:"lang"})," inherits from ancestors. Set ",e.jsx("code",{children:'<html lang="…">'})," for the default document language, then override individual phrases with ",e.jsx("code",{children:"lang"})," where needed."]}),e.jsx(a.Code,{role:"region","aria-label":"Inheritance example",children:e.jsx("pre",{children:String.raw`<p lang="en">This line is English, but <span lang="it">questo è italiano</span>.</p>`})})]}),e.jsxs("section",{id:"inline",children:[e.jsx("h2",{children:"Inline switches (names, UI, quotes)"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Names"}),e.jsx(a.Code,{children:e.jsx("pre",{children:String.raw`<span lang="ja">村上 春樹</span> (Haruki Murakami)`})})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Borrowed UI strings"}),e.jsx(a.Code,{children:e.jsx("pre",{children:String.raw`<span lang="fr">Enregistrer</span> (Save)`})})]})]})]}),e.jsxs("section",{id:"css",children:[e.jsxs("h2",{children:["CSS ",e.jsx("code",{children:":lang()"})," and hyphenation"]}),e.jsxs("p",{children:["The ",e.jsx("code",{children:":lang()"})," pseudo-class matches elements by language, useful for localized tweaks such as quotes or spacing. Hyphenation relies on dictionaries keyed by ",e.jsx("code",{children:"lang"}),"."]}),e.jsx(a.Code,{children:e.jsx("pre",{children:String.raw`q { quotes: "“" "”" "‘" "’"; }
:lang(fr) q { quotes: "« " " »" "‹ " " ›"; }`})})]}),e.jsxs("section",{id:"pitfalls",children:[e.jsx("h2",{children:"Pitfalls"}),e.jsxs("ul",{className:"badges",children:[e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Omitting ",e.jsx("code",{children:"lang"})," on ",e.jsx("code",{children:"<html>"})," and inline foreign text."]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Using region when script matters (",e.jsx("code",{children:"sr-Latn"})," vs ",e.jsx("code",{children:"sr-Cyrl"}),")."]}),e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Good"})," Small, precise overrides (",e.jsx("code",{children:"lang"})," on names/phrases)."]})]})]}),e.jsxs("section",{id:"play",children:[e.jsx("h2",{children:"Try it live"}),e.jsxs("p",{className:"lede",children:["Add or change ",e.jsx("code",{children:"lang"})," for mixed-language text below. Listen with a screen reader, resize the page to see hyphenation differences, and tweak ",e.jsx("code",{children:":lang()"})," quotes."]}),e.jsx(i,{storageKey:"core-html:globals:lang-on-elements:v1",initialHtml:d,height:640})]}),e.jsxs("nav",{className:"nextPrev","aria-label":"Lesson navigation",children:[e.jsx(r,{to:"/globals/data-attributes",className:"prev","aria-label":"Go to data-* hooks",children:"← data-* hooks"}),e.jsx(r,{to:"/images-perf/lazy-decoding",className:"next","aria-label":"Go to loading=lazy, decoding=async",children:'Next: loading="lazy", decoding="async" →'})]}),e.jsx("div",{className:"backTop",children:e.jsx("a",{href:"#top",children:"Back to top ↑"})})]})}export{t as default};
