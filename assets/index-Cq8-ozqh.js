import{d as s,r as o,j as e,N as i}from"./index-CQ_xjxjH.js";import{H as r}from"./index-C8nEF-Cf.js";const a={Page:s.main`
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

        h2 {
            margin-top: 8px;
        }

        .card {
            border: 1px solid var(--border);
            background: var(--card);
            border-radius: 12px;
            padding: 12px;
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

        .bullets {
            padding-left: 18px;
            line-height: 1.8;
        }
        .bullets code {
            font-size: 92%;
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

        .small {
            font-size: 12px;
        }
        .muted {
            color: var(--text-muted);
        }

        .nextPrev {
            margin-top: 24px;
            display: flex;
            justify-content: space-between; /* prev left, next right */
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

        .backTop {
            text-align: right;
            font-size: 13px;
        }
        .backTop a {
            color: var(--text-muted);
            text-decoration: none;
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
    <title>Favicons — minimal set demo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <!-- ─────────────────────────────────────────────────────────────────────
      ✅ Minimal pragmatic set:
      1) .ico that contains 16x16 and 32x32 (most legacy + desktop browsers)
      2) 180x180 PNG for iOS "Add to Home Screen"
      Optional: 48/192/512 via manifest for PWA, mask-icon for Safari pinned
    ──────────────────────────────────────────────────────────────────────── -->

    <!-- Favicon (.ico). Use a real .ico in production; data URL here for demo -->
    <link rel="icon" href="data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAGAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A
////AP///wD///8A////AP///wD///8A////AP///wD///8A" sizes="16x16 32x32" />

    <!-- Apple touch icon (180x180). Real PNG recommended; data URL for demo -->
    <link rel="apple-touch-icon" sizes="180x180"
          href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAC0CAYAAAB4k5r2AAA..." />

    <!-- Optional (nice): Safari pinned tab monochrome SVG + color -->
    <link rel="mask-icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cpath fill='%23000' d='M8 8h48v48H8z'/%3E%3C/svg%3E" color="#0EA5E9">

    <!-- Optional (PWA): manifest gives 48/192/512 etc. -->
    <link rel="manifest" href="data:application/manifest+json,%7B%22name%22%3A%22Demo%22%2C%22icons%22%3A%5B%7B%22src%22%3A%22icon-192.png%22%2C%22sizes%22%3A%22192x192%22%2C%22type%22%3A%22image%2Fpng%22%7D%2C%7B%22src%22%3A%22icon-512.png%22%2C%22sizes%22%3A%22512x512%22%2C%22type%22%3A%22image%2Fpng%22%7D%5D%7D" />

    <!-- Optional: tint browser UI on some platforms -->
    <meta name="theme-color" content="#0ea5e9">

    <style>
      :root { color-scheme: light dark; }
      body { font: 14px/1.6 system-ui, -apple-system, Segoe UI, Roboto, sans-serif; padding: 24px; }
      .grid { display: grid; gap: 12px; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); }
      .card { border: 1px solid #bbb; padding: 12px; border-radius: 10px; }
      .row { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
      .swatch { width: 36px; height: 36px; border-radius: 8px; border: 1px solid #aaa; }
      .muted { color: #777; }
      .demoIcon { width: 48px; height: 48px; border-radius: 12px; display: inline-grid; place-items: center; font-weight: 700; }
      .darkBg { background: #0b1220; color: white; padding: 12px; border-radius: 10px; }
      .small { font-size: 12px; }
    </style>
  </head>
  <body>
    <h1>Favicons — minimal, pragmatic set</h1>
    <p class="muted">This page includes a tiny data-URL favicon, a 180x180 iOS icon, an optional mask icon, and a manifest.</p>

    <div class="grid">
      <section class="card">
        <h2>Minimal set</h2>
        <ul>
          <li><strong>favicon.ico</strong> with 16x16 and 32x32 (Windows/desktop/legacy support).</li>
          <li><strong>apple-touch-icon 180x180</strong> (iOS home screen).</li>
        </ul>
        <p class="small muted">Keep filenames predictable and at web root to avoid path issues.</p>
      </section>

      <section class="card">
        <h2>Optional</h2>
        <ul>
          <li><strong>mask-icon</strong> (Safari pinned tab) — monochrome SVG + <code>color</code>.</li>
          <li><strong>manifest</strong> (PWA) — include 48/192/512 icons.</li>
          <li><strong>theme-color</strong> for browser UI tinting where supported.</li>
        </ul>
      </section>

      <section class="card">
        <h2>Background test</h2>
        <div class="row">
          <span class="demoIcon" style="background:#0ea5e9;color:white">A</span>
          <span class="demoIcon" style="background:#ffd166;color:black">B</span>
          <span class="demoIcon" style="background:#111827;color:white">C</span>
        </div>
        <p class="small muted">Test your icon on light and dark surfaces. Avoid text-heavy icons; prefer bold shapes.</p>
      </section>

      <section class="card">
        <h2>Caching &amp; updates</h2>
        <p class="small muted">
          Browsers cache favicons aggressively. When updating, change filenames or use query strings (e.g., <code>favicon.ico?v=2</code>).
        </p>
      </section>

      <section class="card">
        <h2>Dark surface preview</h2>
        <div class="darkBg">
          <span class="demoIcon" style="background:white;color:#111827">W</span>
          <span class="demoIcon" style="background:#0ea5e9;color:white">E</span>
          <span class="demoIcon" style="background:#111827;color:white;border:1px solid #334155">D</span>
        </div>
      </section>
    </div>
  </body>
</html>`;function c(){return o.useEffect(()=>{document.title="Document Skeleton · Favicons (minimal set)"},[]),e.jsxs(a.Page,{children:[e.jsxs("header",{className:"pageHeader",id:"top",children:[e.jsx("h1",{children:"Favicons (16/32 + 180)"}),e.jsxs("p",{className:"lede",children:["Ship a pragmatic favicon set that works everywhere without bloat: a multi-size"," ",e.jsx("code",{children:".ico"})," and a 180×180 Apple touch icon. Add optional pieces only when you need them."]})]}),e.jsxs("nav",{className:"toc","aria-label":"On this page",children:[e.jsx("a",{href:"#why",children:"Why these sizes"}),e.jsx("a",{href:"#minimal",children:"Minimal set"}),e.jsx("a",{href:"#optional",children:"Optional extras"}),e.jsx("a",{href:"#paths-cache",children:"Paths & caching"}),e.jsx("a",{href:"#design",children:"Design notes"}),e.jsx("a",{href:"#play",children:"Playground"})]}),e.jsxs("section",{id:"why",children:[e.jsx("h2",{children:"Why these sizes"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"16x16"})," and ",e.jsx("strong",{children:"32x32"})," cover most desktop UI affordances and legacy pickers."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"180x180"})," is used by iOS for “Add to Home Screen”."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"192/512"})," live in the manifest for PWA installs (optional if you’re not a PWA)."]})]})]}),e.jsxs("section",{id:"minimal",children:[e.jsx("h2",{children:"Minimal HTML"}),e.jsx(a.Code,{role:"region","aria-label":"Minimal favicon markup",children:e.jsx("pre",{children:String.raw`<link rel="icon" href="/favicon.ico" sizes="16x16 32x32">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">`})}),e.jsxs("p",{className:"note",children:["Place these at the site root to dodge path surprises, or update ",e.jsx("code",{children:"href"})," accordingly."]})]}),e.jsxs("section",{id:"optional",children:[e.jsx("h2",{children:"Optional extras"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Safari pinned tab"}),e.jsx(a.Code,{role:"region","aria-label":"Mask icon example",children:e.jsx("pre",{children:String.raw`<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0ea5e9">`})}),e.jsxs("p",{className:"small muted",children:["SVG must be single-color (monochrome). Safari tints it using ",e.jsx("code",{children:"color"}),"."]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"PWA manifest"}),e.jsx(a.Code,{role:"region","aria-label":"Manifest example",children:e.jsx("pre",{children:String.raw`<link rel="manifest" href="/site.webmanifest">`})}),e.jsx("p",{className:"small muted",children:"Put 48/72/96/128/192/256/384/512 in the manifest as needed."})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Theme color"}),e.jsx(a.Code,{role:"region","aria-label":"Theme-color example",children:e.jsx("pre",{children:String.raw`<meta name="theme-color" content="#0ea5e9">`})}),e.jsx("p",{className:"small muted",children:"Tints browser UI on some platforms; choose a contrast-safe color."})]})]})]}),e.jsxs("section",{id:"paths-cache",children:[e.jsx("h2",{children:"Paths & caching"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["Keep icons at ",e.jsx("code",{children:"/"})," or set a consistent ",e.jsx("code",{children:"<base>"})," URL."]}),e.jsxs("li",{children:["Version updated files: ",e.jsx("code",{children:"favicon.ico?v=2"})," to bust stale caches."]}),e.jsx("li",{children:"CDN headers may extend cache TTLs — plan for rollouts."})]})]}),e.jsxs("section",{id:"design",children:[e.jsx("h2",{children:"Design notes"}),e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"Prefer bold shapes; minimize small text and thin strokes."}),e.jsx("li",{children:"Test on light/dark backgrounds and at 16px — it must still read."}),e.jsx("li",{children:"Consider simple negative-space shapes for mask icons."})]})]}),e.jsxs("section",{id:"play",children:[e.jsx("h2",{children:"Try it live"}),e.jsx("p",{className:"lede",children:"Edit the link tags, swap colors, and simulate different backgrounds. The data-URL icons are only for this demo; use real files in production. Your changes autosave for this lesson."}),e.jsx(r,{storageKey:"core-html:skeleton:favicons-min:v1",initialHtml:n,height:640})]}),e.jsxs("nav",{className:"nextPrev","aria-label":"Lesson navigation",children:[e.jsx(i,{to:"/skeleton/boilerplate-order",className:"prev","aria-label":"Go to Boilerplate order",children:"← Boilerplate order"}),e.jsx(i,{to:"/skeleton/scripts-styles-placement",className:"next","aria-label":"Go to Scripts/styles placement",children:"Next: Scripts/styles placement →"})]}),e.jsx("div",{className:"backTop",children:e.jsx("a",{href:"#top",children:"Back to top ↑"})})]})}export{c as default};
