import{d as a,r as i,j as e,N as s}from"./index-CQ_xjxjH.js";import{H as d}from"./index-C8nEF-Cf.js";const r={Page:a.main`
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
    `},n=String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title><p>, <br>, <hr> — core text semantics</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui,-apple-system,Segoe UI,Roboto,sans-serif; }
      main { display: grid; gap: 16px; }
      .card { border: 1px solid #ccc; border-radius: 12px; padding: 12px; }
      .muted { color: #6b7280; }
      .ex { border:1px dashed #aaa; padding:10px; border-radius:10px; margin-top:8px; }
      code { background:#f5f5f5; padding:0 6px; border-radius:6px; }
      hr { border: none; border-top: 1px solid #bbb; margin-block: 1rem; }
      .bad { background: color-mix(in oklab, #dc2626, transparent 92%); border-color:#f2a6a6; }
      .good { background: color-mix(in oklab, #16a34a, transparent 92%); border-color:#8ed09b; }
      .two { columns: 2; column-gap: 24px; }
      @media (max-width: 900px) { .two { columns: 1; } }
    </style>
  </head>
  <body>
    <main>
      <header>
        <h1>&lt;p&gt;, &lt;br&gt;, &lt;hr&gt;</h1>
        <p class="muted">Paragraphs form the narrative flow. Use <code>&lt;br&gt;</code> for a single logical line break inside the same thought, and <code>&lt;hr&gt;</code> to signal a thematic shift.</p>
      </header>

      <section class="card good">
        <h2>Paragraphs: the default text block</h2>
        <div class="two">
          <div>
            <p>Each paragraph should express one idea. Avoid stacking multiple <code>&lt;br&gt;</code>s to simulate spacing; that’s a CSS job.</p>
            <p>Keep your HTML semantic: structure with elements, style with CSS. Screen readers and search engines rely on this separation.</p>
          </div>
          <div class="ex">
            <p>This is a paragraph.</p>
            <p>This is another paragraph. It’s a separate thought.</p>
          </div>
        </div>
      </section>

      <section class="card">
        <h2>Line breaks with &lt;br&gt;</h2>
        <p>Use <code>&lt;br&gt;</code> only when a real line break is part of the content (poetry, addresses, signatures).</p>
        <div class="ex">
          <p>Address example:<br>
             221B Baker Street<br>
             London NW1 6XE<br>
             United Kingdom
          </p>
        </div>
      </section>

      <section class="card">
        <h2>Thematic break with &lt;hr&gt;</h2>
        <p><code>&lt;hr&gt;</code> indicates a shift in topic or scene. It’s not a decorative line; it carries meaning.</p>
        <div class="ex">
          <p>We wrapped up breakfast and headed out.</p>
          <hr>
          <p>By noon, the storm had cleared and the trail opened up.</p>
        </div>
      </section>

      <section class="card bad">
        <h2>Common mistakes</h2>
        <div class="ex">
          <!-- ❌ Using <br><br><br> for spacing instead of CSS -->
          <p>Don’t stack breaks for vertical space.<br><br><br>
             Use margin/padding in CSS instead.</p>
        </div>
        <div class="ex" style="margin-top:8px">
          <!-- ❌ Using <hr> as a pretty divider with no thematic shift -->
          <p>Here’s a random line just for looks.</p>
          <hr>
          <p>This isn’t a new topic; it’s the same thought.</p>
        </div>
      </section>

      <footer class="muted">
        Tip: If the content would appear on separate lines when printed (address, poem), <code>&lt;br&gt;</code> fits. If the topic shifts, <code>&lt;hr&gt;</code> fits. Otherwise, new paragraph.
      </footer>
    </main>
  </body>
</html>`;function l(){return i.useEffect(()=>{document.title="Text · <p>, <br>, <hr> usage"},[]),e.jsxs(r.Page,{children:[e.jsxs("header",{className:"pageHeader",id:"top",children:[e.jsxs("h1",{children:[e.jsx("code",{children:"<p>"}),", ",e.jsx("code",{children:"<br>"}),", ",e.jsx("code",{children:"<hr>"})," usage"]}),e.jsxs("p",{className:"lede",children:["Paragraphs for ideas, ",e.jsx("code",{children:"<br>"})," for line breaks within that idea, and"," ",e.jsx("code",{children:"<hr>"})," for a meaningful pause between ideas. That’s the mental model."]})]}),e.jsxs("nav",{className:"toc","aria-label":"On this page",children:[e.jsx("a",{href:"#model",children:"Mental model"}),e.jsx("a",{href:"#rules",children:"Rules of thumb"}),e.jsx("a",{href:"#br",children:"When to use <br>"}),e.jsx("a",{href:"#hr",children:"When to use <hr>"}),e.jsx("a",{href:"#pitfalls",children:"Pitfalls"}),e.jsx("a",{href:"#faq",children:"FAQ"}),e.jsx("a",{href:"#play",children:"Playground"})]}),e.jsxs("section",{id:"model",children:[e.jsx("h2",{children:"Mental model"}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Paragraph"}),": one cohesive idea in running text."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Line break"}),": same idea, new line (addresses, poetry)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Thematic break"}),": new scene/topic boundary."]})]})})]}),e.jsxs("section",{id:"rules",children:[e.jsx("h2",{children:"Rules of thumb"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsxs("h3",{children:["Use ",e.jsx("code",{children:"<p>"})," when…"]}),e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"You’re writing prose or explanatory text."}),e.jsx("li",{children:"You want default spacing between text blocks."}),e.jsx("li",{children:"You need a unit of meaning for assistive tech."})]})]}),e.jsxs("div",{className:"card",children:[e.jsxs("h3",{children:["Use ",e.jsx("code",{children:"<br>"})," when…"]}),e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"A single forced break belongs to the content."}),e.jsx("li",{children:"Poetry, addresses, lyrics (public domain), signatures."}),e.jsx("li",{children:"Small labels needing a controlled wrap."})]})]})]})]}),e.jsxs("section",{id:"br",children:[e.jsxs("h2",{children:["Line breaks with ",e.jsx("code",{children:"<br>"})]}),e.jsx(r.Code,{"aria-label":"br examples",children:e.jsx("pre",{children:String.raw`<!-- Address -->
<p>
  Ashish Ranjan<br>
  2nd Floor, Tech Park<br>
  Patna 800001
</p>

<!-- Short label -->
<p>Upload status:<br><strong>Processing</strong></p>

<!-- Poetry -->
<p>
  Two roads diverged in a yellow wood,<br>
  And sorry I could not travel both
</p>`})}),e.jsxs("p",{className:"note",children:["Don’t chain multiple ",e.jsx("code",{children:"<br>"})," for spacing. Use CSS margin utilities or a dedicated class."]})]}),e.jsxs("section",{id:"hr",children:[e.jsxs("h2",{children:["Thematic breaks with ",e.jsx("code",{children:"<hr>"})]}),e.jsx(r.Code,{"aria-label":"hr examples",children:e.jsx("pre",{children:String.raw`<p>Morning stand-up covered blockers and a quick demo.</p>
<hr>
<p>In the afternoon, the team switched to release prep.</p>

<!-- Styling is fine, meaning stays the same -->
<hr class="thin">`})}),e.jsxs("p",{className:"note",children:["You can style ",e.jsx("code",{children:"<hr>"})," via CSS, but keep its semantic meaning: a change in scene or topic."]})]}),e.jsxs("section",{id:"pitfalls",children:[e.jsx("h2",{children:"Pitfalls"}),e.jsxs("ul",{className:"badges",children:[e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Using ",e.jsx("code",{children:"<br>"})," to create vertical spacing."]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Inserting ",e.jsx("code",{children:"<hr>"})," as a decorative line with no topic shift."]}),e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Good"})," One idea per ",e.jsx("code",{children:"<p>"}),", a single ",e.jsx("code",{children:"<br>"})," for intentional line breaks, ",e.jsx("code",{children:"<hr>"})," for thematic boundaries."]})]})]}),e.jsxs("section",{id:"faq",children:[e.jsx("h2",{children:"FAQ"}),e.jsxs("details",{children:[e.jsx("summary",{children:"Can I nest a paragraph inside another paragraph?"}),e.jsx("div",{className:"ans",children:"No. Paragraphs can contain phrasing content, not other block-level paragraphs."})]}),e.jsxs("details",{children:[e.jsx("summary",{children:"Is multiple <br> ever okay?"}),e.jsx("div",{className:"ans",children:"Avoid it. If spacing is the goal, use CSS margins/padding or utility classes."})]}),e.jsxs("details",{children:[e.jsx("summary",{children:"Can I replace <hr> with a styled div?"}),e.jsxs("div",{className:"ans",children:["You can visually, but you’ll lose the semantic meaning. Prefer ",e.jsx("code",{children:"<hr>"})," and style it."]})]})]}),e.jsxs("section",{id:"play",children:[e.jsx("h2",{children:"Try it live"}),e.jsxs("p",{className:"lede",children:["Convert break stacks to margins, change decorative lines to meaningful ",e.jsx("code",{children:"<hr>"}),", and align paragraphs to ideas."]}),e.jsx(d,{storageKey:"core-html:text:p-br-hr:v1",initialHtml:n,height:640})]}),e.jsxs("nav",{className:"nextPrev","aria-label":"Lesson navigation",children:[e.jsx(s,{to:"/headings/h1-h6-hierarchy",className:"prev","aria-label":"Go to H1–H6 hierarchy",children:"← H1–H6 hierarchy"}),e.jsx(s,{to:"/text/em-vs-strong",className:"next","aria-label":"Go to Emphasis vs Strong",children:"Next: Emphasis vs Strong →"})]}),e.jsx("div",{className:"backTop",children:e.jsx("a",{href:"#top",children:"Back to top ↑"})})]})}export{l as default};
