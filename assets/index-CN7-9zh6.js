import{d as s,r,j as e,N as a}from"./index-CQ_xjxjH.js";import{H as n}from"./index-C8nEF-Cf.js";const i={Page:s.main`
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
    `,Code:s.div`
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
    `},o=String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Skip link — minimal pattern</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; font: 14px/1.6 system-ui, -apple-system, Segoe UI, Roboto, sans-serif; }

      /* Demo chrome */
      header, nav, main, footer { padding: 16px; border-bottom: 1px solid #ccc; }
      header { position: sticky; top: 0; background: #f7f7f7; }
      nav a { margin-right: 8px; }
      .hero { height: 160px; background: #e5eefc; border: 1px dashed #9ab7ff; display: grid; place-items: center; margin-top: 8px; }

      /* 1) Visually hidden until focused, but still keyboard-focusable */
      .skip {
        position: absolute;
        left: 8px;
        top: 8px;
        transform: translateY(-200%);
        padding: 8px 12px;
        background: #111;
        color: #fff;
        border-radius: 8px;
        text-decoration: none;
        transition: transform .2s ease;
        z-index: 1000;
      }
      .skip:focus {
        transform: translateY(0);
        outline: 2px solid #3b82f6; /* keep visible outline */
        outline-offset: 2px;
      }

      /* 2) Make the target focusable so the browser scrolls there on jump */
      main:focus { outline: 3px solid #22c55e; outline-offset: 4px; }
    </style>
  </head>
  <body>
    <!-- Minimal pattern: the skip link is first focusable element in DOM -->
    <a class="skip" href="#main">Skip to main content</a>

    <header>
      <strong>Site header</strong>
      <nav aria-label="Primary">
        <a href="#">Home</a>
        <a href="#">Docs</a>
        <a href="#">Blog</a>
        <a href="#">Contact</a>
      </nav>
      <div class="hero">Large banner / nav before main</div>
    </header>

    <!-- The target region has id="main" and tabindex="-1" so focus will move here -->
    <main id="main" tabindex="-1">
      <h1>Main content</h1>
      <p>Press Tab once from the top, hit Enter on the skip link, and you'll land here.</p>
      <p>Try removing <code>tabindex="-1"</code> to see why focusing the target matters.</p>
      <p>Then try removing the <code>:focus</code> styles to feel why outlines help.</p>
    </main>

    <footer>
      <small>Footer</small>
    </footer>
  </body>
</html>`;function d(){return r.useEffect(()=>{document.title="Accessibility · Skip link (concept)"},[]),e.jsxs(i.Page,{children:[e.jsxs("header",{className:"pageHeader",id:"top",children:[e.jsxs("h1",{children:["Skip link ",e.jsx("small",{children:"(concept)"})]}),e.jsxs("p",{className:"lede",children:["A “skip link” is a tiny keyboard ramp that lets users jump over repeated UI (like big headers or menus) straight to the main content. It’s an anchor at the top that points to an in-page target, usually ",e.jsx("code",{children:"#main"}),"."]})]}),e.jsxs("nav",{className:"toc","aria-label":"On this page",children:[e.jsx("a",{href:"#why",children:"Why it matters"}),e.jsx("a",{href:"#pattern",children:"Minimal pattern"}),e.jsx("a",{href:"#styling",children:"Styling: hidden until focus"}),e.jsx("a",{href:"#multiple",children:"Multiple skip links"}),e.jsx("a",{href:"#pitfalls",children:"Pitfalls"}),e.jsx("a",{href:"#assistive",children:"Assistive tech notes"}),e.jsx("a",{href:"#play",children:"Playground"})]}),e.jsxs("section",{id:"why",children:[e.jsx("h2",{children:"Why it matters"}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"Keyboard users shouldn’t tab through dozens of links just to reach content."}),e.jsx("li",{children:"Screen reader users benefit from a quick “jump to main content” affordance."}),e.jsx("li",{children:"Meets common accessibility expectations and audits (it’s tiny but mighty)."})]})})]}),e.jsxs("section",{id:"pattern",children:[e.jsx("h2",{children:"Minimal pattern"}),e.jsx(i.Code,{role:"region","aria-label":"Skip link markup",children:e.jsx("pre",{children:String.raw`<!-- 1) Place first focusable thing in DOM -->
<a class="skip-link" href="#main">Skip to main content</a>

<!-- 2) Have a landmark/region with a stable id -->
<main id="main" tabindex="-1">
  <h1>Page title</h1>
  …
</main>`})}),e.jsxs("p",{className:"note",children:["The ",e.jsx("code",{children:'tabindex="-1"'})," on the target allows programmatic focus so the browser scrolls there on activation."]})]}),e.jsxs("section",{id:"styling",children:[e.jsx("h2",{children:"Styling: hidden until focus"}),e.jsxs("p",{children:["Hide visually without removing from the accessibility tree. Use off-screen positioning and reveal on ",e.jsx("code",{children:":focus"}),". Avoid ",e.jsx("code",{children:"display:none"})," or ",e.jsx("code",{children:"visibility:hidden"})," because they remove the link from keyboard flow and AT."]}),e.jsx(i.Code,{"aria-label":"Skip link CSS",children:e.jsx("pre",{children:String.raw`.skip-link {
  position: absolute;
  top: .5rem; left: .5rem;
  transform: translateY(-200%);
  background: #111; color: #fff;
  padding: .5rem .75rem; border-radius: .5rem;
  text-decoration: none; z-index: 1000;
  transition: transform .2s ease;
}
.skip-link:focus {
  transform: translateY(0);
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}`})})]}),e.jsxs("section",{id:"multiple",children:[e.jsx("h2",{children:"Multiple skip links"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Examples"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["Skip to main content → ",e.jsx("code",{children:"#main"})]}),e.jsxs("li",{children:["Skip to search → ",e.jsx("code",{children:"#site-search"})]}),e.jsxs("li",{children:["Skip to navigation → ",e.jsx("code",{children:"#primary-nav"})]}),e.jsxs("li",{children:["Skip to footer → ",e.jsx("code",{children:"#footer"})]})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Guidance"}),e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"Order links by usefulness; don’t overload with options."}),e.jsx("li",{children:"Match stable ids on the target landmarks."}),e.jsxs("li",{children:["Ensure each target is focusable (e.g., ",e.jsx("code",{children:'tabindex="-1"'}),")."]})]})]})]})]}),e.jsxs("section",{id:"pitfalls",children:[e.jsx("h2",{children:"Pitfalls"}),e.jsxs("ul",{className:"badges",children:[e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Using ",e.jsx("code",{children:"display:none"})," on the skip link."]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Linking to ",e.jsx("code",{children:"#content"})," when no element has that id."]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Removing focus outlines “for aesthetics.”"]}),e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Good"})," Off-screen positioning + visible on focus."]}),e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Good"})," Target element accepts focus and has a clear heading."]})]})]}),e.jsxs("section",{id:"assistive",children:[e.jsx("h2",{children:"Assistive tech notes"}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"Many screen readers expose “landmarks” navigation. A skip link complements, rather than replaces, proper landmarks."}),e.jsx("li",{children:"If your header is very tall/sticky, ensure the focused target isn’t obscured behind it (use scroll margin)."}),e.jsxs("li",{children:["Consider ",e.jsx("code",{children:"scroll-margin-top"})," on ",e.jsx("code",{children:"#main"})," to offset sticky headers."]})]})}),e.jsx(i.Code,{"aria-label":"Sticky header offset tip",children:e.jsx("pre",{children:String.raw`/* If header is sticky 64px tall */
#main { scroll-margin-top: 64px; }`})})]}),e.jsxs("section",{id:"play",children:[e.jsx("h2",{children:"Try it live"}),e.jsx("p",{className:"lede",children:"Add a skip link to jump over header/navigation. Make sure the target exists, is focusable, and the skip link becomes visible on focus. Autosaves to this lesson."}),e.jsx(n,{storageKey:"core-html:a11y:skip-link-concept:v1",initialHtml:o,height:640})]}),e.jsxs("nav",{className:"nextPrev","aria-label":"Lesson navigation",children:[e.jsx(a,{to:"/a11y/focus-order-outline",className:"prev","aria-label":"Go to Focus order & outline",children:"← Focus order & outline"}),e.jsx(a,{to:"/scripting/script-placement",className:"next","aria-label":"Go to <script> placement",children:"Next: <script> placement →"})]}),e.jsx("div",{className:"backTop",children:e.jsx("a",{href:"#top",children:"Back to top ↑"})})]})}export{d as default};
