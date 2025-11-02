import{d as s,r as i,j as e,N as r}from"./index-D3QNcmKe.js";import{H as d}from"./index-CAjihRuM.js";const a={Page:s.main`
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

        .sep {
            opacity: 0.8;
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
    `},n=String.raw`<!doctype html>
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
</html>`;function o(){return i.useEffect(()=>{document.title="Metadata · <title> quality"},[]),e.jsxs(a.Page,{children:[e.jsxs("header",{className:"pageHeader",id:"top",children:[e.jsxs("h1",{children:[e.jsx("code",{children:"<title>"})," quality"]}),e.jsxs("p",{className:"lede",children:["The ",e.jsx("code",{children:"<title>"})," element labels the page. It shows up in the browser tab, bookmarks, and link previews. Strong titles are short, specific, and unique."]})]}),e.jsxs("nav",{className:"toc","aria-label":"On this page",children:[e.jsx("a",{href:"#what",children:"What & where"}),e.jsx("a",{href:"#length",children:"Length"}),e.jsx("a",{href:"#structure",children:"Structure & separators"}),e.jsx("a",{href:"#uniqueness",children:"Uniqueness"}),e.jsx("a",{href:"#badgood",children:"Bad vs good"}),e.jsx("a",{href:"#react",children:"Setting titles in React"}),e.jsx("a",{href:"#faq",children:"FAQ"}),e.jsx("a",{href:"#checklist",children:"Checklist"}),e.jsx("a",{href:"#play",children:"Playground"})]}),e.jsxs("section",{id:"what",children:[e.jsx("h2",{children:"What & where it appears"}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["Defined in ",e.jsx("code",{children:"<head>"}),": ",e.jsx("code",{children:String.raw`<title>Products — Acme</title>`})]}),e.jsx("li",{children:"Displayed in the browser tab and window switchers (Alt+Tab, Mission Control)."}),e.jsx("li",{children:"Used for bookmarks/favorites labels and often in link previews."})]})})]}),e.jsxs("section",{id:"length",children:[e.jsx("h2",{children:"Length guidance"}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"Aim for ~30–60 characters. This range keeps it punchy and scannable."}),e.jsx("li",{children:"Front-load the key words so truncation still leaves meaning."}),e.jsx("li",{children:"Avoid filler like “Welcome to the official homepage of…”."})]})})]}),e.jsxs("section",{id:"structure",children:[e.jsx("h2",{children:"Structure & separators"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Pattern"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Page subject"})," ",e.jsx("span",{className:"sep",children:"—"})," ",e.jsx("strong",{children:"Brand"})]}),e.jsx("p",{className:"note",children:"Em dash/En dash/pipe are all fine. Pick one and stay consistent across the site."})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Examples"}),e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:e.jsx("code",{children:"Documentation — Parcel Pulse"})}),e.jsx("li",{children:e.jsx("code",{children:"Dashboard | Sunsar Logistics"})}),e.jsx("li",{children:e.jsx("code",{children:"HTML Forms Cheatsheet · Core HTML"})})]})]})]})]}),e.jsxs("section",{id:"uniqueness",children:[e.jsx("h2",{children:"Uniqueness matters"}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"Every routable page should have a unique title."}),e.jsx("li",{children:"“Home — Brand” is better than plain “Home”."}),e.jsx("li",{children:"Subpages should reflect their content, not just repeat the brand."})]})})]}),e.jsxs("section",{id:"badgood",children:[e.jsx("h2",{children:"Bad vs good"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Common pitfalls"}),e.jsxs("ul",{className:"badges",children:[e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Bad"})," ",e.jsx("code",{children:"Home"})," (too vague)"]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Bad"})," ",e.jsx("code",{children:"WELCOME TO THE BEST WEBSITE!!!"})," (shouting)"]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Bad"})," ",e.jsx("code",{children:"Buy Shoes, Cheap Shoes, Shoes Online"})," (keyword stuffing)"]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Bad"})," ",e.jsx("code",{children:"Page"})," or ",e.jsx("code",{children:"Untitled"})," (oops)"]})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Better patterns"}),e.jsxs("ul",{className:"badges",children:[e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Good"})," ",e.jsx("code",{children:"Pricing — Acme Analytics"})]}),e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Good"})," ",e.jsx("code",{children:"Track Shipments | Sunsar Logistics"})]}),e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Good"})," ",e.jsx("code",{children:"Core landmarks · Core HTML"})]})]})]})]})]}),e.jsxs("section",{id:"react",children:[e.jsx("h2",{children:"Setting titles in React"}),e.jsxs("div",{className:"card",children:[e.jsx("p",{children:"Two simple approaches:"}),e.jsxs("ol",{className:"bullets",children:[e.jsxs("li",{children:["Imperative: set on mount with ",e.jsx("code",{children:"useEffect"}),":",e.jsx(a.Code,{role:"region","aria-label":"useEffect example",children:e.jsx("pre",{children:String.raw`useEffect(() => {
  document.title = "Products — Acme";
}, []);`})})]}),e.jsxs("li",{children:["Declarative libraries (optional): ",e.jsx("code",{children:"react-helmet-async"})," for SSR/streaming apps."]})]}),e.jsxs("p",{className:"note",children:["Keep titles in sync with route params (e.g., ",e.jsx("code",{children:"Order #123 — Dashboard"}),"). Update on param change."]})]})]}),e.jsxs("section",{id:"faq",children:[e.jsx("h2",{children:"FAQ"}),e.jsxs("details",{children:[e.jsx("summary",{children:"Should the brand go first or last?"}),e.jsx("div",{className:"ans",children:"Either is fine—be consistent. Put the unique page subject first so truncation keeps meaning."})]}),e.jsxs("details",{children:[e.jsx("summary",{children:"Do emojis belong in titles?"}),e.jsx("div",{className:"ans",children:"Use sparingly. They can help scanning, but overuse feels noisy and can get truncated oddly."})]})]}),e.jsxs("section",{id:"checklist",children:[e.jsx("h2",{children:"Quick checklist"}),e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"Is it specific to this page?"}),e.jsx("li",{children:"Is it ~30–60 chars and front-loaded?"}),e.jsx("li",{children:"Consistent separator with a short brand suffix?"}),e.jsx("li",{children:"No shouting, no stuffing, no filler?"})]})]}),e.jsxs("section",{id:"play",children:[e.jsx("h2",{children:"Try it live"}),e.jsxs("p",{className:"lede",children:["Edit the ",e.jsx("code",{children:"<title>"})," in the demo’s ",e.jsx("code",{children:"<head>"}),", then run. Try good vs bad patterns and see how it feels in the tab."]}),e.jsx(d,{storageKey:"core-html:metadata:title-quality:v1",initialHtml:n,height:560})]}),e.jsxs("nav",{className:"nextPrev","aria-label":"Lesson navigation",children:[e.jsx(r,{to:"/metadata/meta-description",className:"prev","aria-label":"Go to Meta description",children:"← Meta description"}),e.jsx(r,{to:"/metadata/charset-viewport-recap",className:"next","aria-label":"Go to Charset & viewport recap",children:"Next: Charset & viewport recap →"})]}),e.jsx("div",{className:"backTop",children:e.jsx("a",{href:"#top",children:"Back to top ↑"})})]})}export{o as default};
