import{d as a,r,j as e,N as s}from"./index-CQ_xjxjH.js";import{H as n}from"./index-C8nEF-Cf.js";const i={Page:a.main`
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
    `,Code:a.div`
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
    `},l=String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Page skeleton + skip link — demo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; font: 15px/1.6 system-ui,-apple-system,Segoe UI,Roboto,sans-serif; }
      a { color: inherit; }
      .wrap { display: grid; grid-template-columns: 1fr; min-height: 100dvh; }

      /* ── Skip link (visibly hidden until focus) ─────────────────────────── */
      .skip-link {
        position: absolute;
        left: 8px;
        top: -48px;
        padding: 8px 12px;
        border-radius: 10px;
        background: #111;
        color: #fff;
        text-decoration: none;
        transition: top .2s ease;
      }
      .skip-link:focus { top: 8px; outline: 2px solid Highlight; }

      header[role="banner"] {
        padding: 12px 16px;
        border-bottom: 1px solid #ccc;
        display: flex; gap: 12px; align-items: center; justify-content: space-between;
        position: sticky; top: 0; background: canvas; backdrop-filter: blur(6px);
      }
      nav[aria-label="Primary"] a {
        display: inline-block; padding: 6px 10px; border-radius: 8px; text-decoration: none;
      }
      nav[aria-label="Primary"] a[aria-current="page"] { outline: 2px solid #999; }

      main { display: grid; grid-template-columns: 1fr 280px; gap: 16px; padding: 16px; }
      @media (max-width: 900px) { main { grid-template-columns: 1fr; } }

      .card { border: 1px solid #ccc; border-radius: 12px; padding: 12px; }
      aside[aria-labelledby] { background: color-mix(in oklab, #0ea5e9, transparent 92%); border-color: #9ad7f1; }
      footer { margin-top: auto; border-top: 1px solid #ccc; padding: 16px; text-align: center; }

      /* Visually-hidden helper for off-screen headings when needed */
      .vh {
        position: absolute !important; width: 1px; height: 1px; padding: 0; margin: -1px;
        overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; border: 0;
      }
    </style>
  </head>
  <body>
    <a href="#main" class="skip-link">Skip to main content</a>

    <div class="wrap">
      <header role="banner">
        <a href="/" aria-label="Go to home">🧭 Logo</a>
        <nav aria-label="Primary">
          <a href="/" aria-current="page">Home</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>

      <main id="main">
        <article class="card">
          <h1>Welcome</h1>
          <p>This is a minimal, semantic page skeleton. Try tabbing: the skip link appears first.</p>
          <h2>Why landmarks?</h2>
          <p>They give screen readers and tools a fast map: header, nav, main, aside, footer.</p>
          <h2>Why a skip link?</h2>
          <p>Keyboard users can jump past repeated nav to the main content.</p>
        </article>

        <aside class="card" aria-labelledby="sidebar-title">
          <h2 id="sidebar-title">Sidebar</h2>
          <ul>
            <li>Profile</li>
            <li>Shortcuts</li>
            <li>Recent posts</li>
          </ul>
        </aside>
      </main>

      <footer role="contentinfo">
        <small>© 2025 Example Co. Built with semantic HTML.</small>
      </footer>
    </div>
  </body>
</html>`;function t(){return r.useEffect(()=>{document.title="Patterns · Page skeleton + skip link"},[]),e.jsxs(i.Page,{children:[e.jsxs("header",{className:"pageHeader",id:"top",children:[e.jsxs("h1",{children:["Page skeleton + ",e.jsx("code",{children:"Skip to content"})]}),e.jsxs("p",{className:"lede",children:["A compact, semantic layout using core landmarks—",e.jsx("code",{children:"<header>"}),", ",e.jsx("code",{children:"<nav>"}),","," ",e.jsx("code",{children:"<main>"}),", ",e.jsx("code",{children:"<aside>"}),", and ",e.jsx("code",{children:"<footer>"}),"—plus a keyboard-first “Skip to main content” link."]})]}),e.jsxs("nav",{className:"toc","aria-label":"On this page",children:[e.jsx("a",{href:"#landmarks",children:"Landmarks"}),e.jsx("a",{href:"#skip",children:"Skip link pattern"}),e.jsx("a",{href:"#outline",children:"Heading outline"}),e.jsx("a",{href:"#notes",children:"Notes & tips"}),e.jsx("a",{href:"#mistakes",children:"Common mistakes"}),e.jsx("a",{href:"#play",children:"Playground"})]}),e.jsxs("section",{id:"landmarks",children:[e.jsx("h2",{children:"Minimal landmarks"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Header + Primary nav"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Header"})," is the site banner (logo + brand + top tools)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Primary nav"})," is a ",e.jsx("code",{children:'<nav aria-label="Primary">'})," with the main links."]}),e.jsxs("li",{children:["Mark current page with ",e.jsx("code",{children:'aria-current="page"'}),"."]})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Main + optional aside"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Main"})," holds the primary content per page."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Aside"})," is complementary: related links, profile, ads."]}),e.jsxs("li",{children:["Give ",e.jsx("code",{children:"aside"})," a visible heading or an accessible name."]})]})]})]})]}),e.jsxs("section",{id:"skip",children:[e.jsx("h2",{children:"Skip link (visible on focus)"}),e.jsx(i.Code,{role:"region","aria-label":"Skip link snippet",children:e.jsx("pre",{children:String.raw`<a href="#main" class="skip-link">Skip to main content</a>

<style>
  .skip-link { position:absolute; left:8px; top:-48px; /* hidden */ }
  .skip-link:focus { top:8px; } /* reveal on focus */
</style>`})}),e.jsx("p",{className:"note",children:"Keyboard users tab from the address bar → skip link → main content. Visually it stays out of the way until focused."})]}),e.jsxs("section",{id:"outline",children:[e.jsx("h2",{children:"Heading outline sanity"}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["One ",e.jsx("code",{children:"h1"})," per page context; sub-sections start at ",e.jsx("code",{children:"h2"}),"."]}),e.jsx("li",{children:"Don’t skip levels for style; use CSS for size, not heading number inflation."}),e.jsxs("li",{children:["Off-screen headings are fine when you need an accessible name (",e.jsx("code",{children:".vh"})," class)."]})]})})]}),e.jsxs("section",{id:"notes",children:[e.jsx("h2",{children:"Notes & tips"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Multiple navs?"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["Allowed. Label them: ",e.jsx("code",{children:'aria-label="Primary"'}),", ",e.jsx("code",{children:'"Footer"'}),", ",e.jsx("code",{children:'"Breadcrumb"'}),"."]}),e.jsxs("li",{children:["Breadcrumbs live in their own ",e.jsx("code",{children:"nav"})," with ",e.jsx("code",{children:'aria-label="Breadcrumb"'}),"."]})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Logos & home"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["Logo as a link to “/” with an ",e.jsx("code",{children:"aria-label"})," like “Go to home”."]}),e.jsx("li",{children:"Use real text for the brand next to the logo for better search and a11y."})]})]})]})]}),e.jsxs("section",{id:"mistakes",children:[e.jsx("h2",{children:"Common mistakes"}),e.jsxs("ul",{className:"badges",children:[e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," No skip link on a page with a large, repeated nav."]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Using ",e.jsx("code",{children:"div"})," instead of real landmarks for layout regions."]}),e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Good"})," Minimal landmarks + current page indicated + focus-visible skip link."]})]})]}),e.jsxs("section",{id:"play",children:[e.jsx("h2",{children:"Try it live"}),e.jsx("p",{className:"lede",children:"Add the skip link, ensure the main region has an ID, mark the current nav item, and verify the heading outline."}),e.jsx(n,{storageKey:"core-html:patterns:basic-page-skeleton:v1",initialHtml:l,height:640})]}),e.jsx("nav",{className:"nextPrev","aria-label":"Lesson navigation",children:e.jsx(s,{to:"/patterns/figure-with-caption",className:"prev","aria-label":"Go to Figure with caption",children:"← Figure with caption"})}),e.jsx("div",{className:"backTop",children:e.jsx("a",{href:"#top",children:"Back to top ↑"})})]})}export{t as default};
