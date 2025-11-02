import{d as h,r as t,j as e,N as d}from"./index-D3QNcmKe.js";import{H as x}from"./index-CAjihRuM.js";const b={Page:h.main`
        display: grid;
        gap: 16px;
        padding: 16px;
        max-width: 1200px;
        margin: 0 auto;

        .pageHeader {
            display: grid;
            gap: 8px;
        }

        .lede {
            color: var(--text-muted);
            font-size: 15px;
        }

        .presetBar {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            margin: 8px 0 4px;
        }

        .presetBtn {
            appearance: none;
            border: 1px solid var(--border);
            background: var(--card);
            color: var(--text);
            padding: 6px 10px;
            border-radius: var(--radius-xl, 999px);
            font-size: 14px;
            cursor: pointer;
            transition: transform 120ms ease, box-shadow 120ms ease;
        }
        .presetBtn:hover {
            transform: translateY(-1px);
        }
        .presetBtn.isActive {
            border-color: var(--primary);
            box-shadow: 0 0 0 3px
                color-mix(in oklab, var(--primary), transparent 80%);
        }

        .note {
            font-size: 14px;
            color: var(--text-muted);
            border-left: 3px solid var(--primary);
            padding: 8px 12px;
            background: color-mix(in oklab, var(--primary), transparent 92%);
            border-radius: 8px;
        }

        .refs ul {
            padding-left: 18px;
            line-height: 1.8;
        }

        .srOnly {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
        }

        /* Prev + Next */
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
    `},s={basicDir:{title:"dir on <html>",code:`<!doctype html>
<html lang="en" dir="rtl">
  <head>
    <meta charset="utf-8" />
    <title>dir basics — rtl page</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      body { font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif; margin: 24px; line-height: 1.6; }
      .box { border: 1px solid #ccc; padding: 12px; border-radius: 10px; }
      code { background: #f5f5f5; padding: 2px 6px; border-radius: 6px; }
    </style>
  </head>
  <body>
    <h1>Right-to-Left page (dir="rtl")</h1>
    <div class="box">
      <p>Page direction is <code>rtl</code>. Notice the heading and paragraph alignment flip.</p>
      <p>Arabic sample: العربية — Hebrew sample: עִברִית</p>
      <p>Mixed text: Price (USD 120) inside an RTL sentence might look odd without isolation.</p>
    </div>
  </body>
</html>`},bdiDemo:{title:"bdi — isolate inline",code:`<!doctype html>
<html lang="en" dir="rtl">
  <head> … </head>
  <body>
    <h1>BDI (Bi-Directional Isolation)</h1>
    <div class="wrap">
      <div class="card">
        <p>When embedding LTR tokens (like IDs, emails, or numbers) in an RTL sentence, use <code>&lt;bdi&gt;</code> to isolate:</p>
        <p class="hint">Sentence is RTL; the isolated parts keep their own direction.</p>
        <p>
          رقم الطلب: <bdi>INV-2025-1031</bdi> — المبلغ: <bdi>USD 120</bdi> — تواصل: <bdi>support@example.com</bdi>
        </p>
      </div>
      <div class="card">
        <p>Without <code>&lt;bdi&gt;</code>, punctuation and numbers can “jump around” visually in mixed content.</p>
      </div>
    </div>
  </body>
</html>`},bdoDemo:{title:"bdo — force direction",code:`<!doctype html>
<html lang="en" dir="ltr">
  <head> … </head>
  <body>
    <h1>BDO (Bi-Directional Override)</h1>
    <div class="card">
      <p><code>&lt;bdo dir="rtl"&gt;</code> forces RTL even in an LTR page:</p>
      <div class="row">
        <span class="pill">Normal: ABC 123</span>
        <span class="pill"><bdo dir="rtl">ABC 123</bdo></span>
        <span class="pill"><bdo dir="ltr">العربية 123</bdo></span>
      </div>
      <p>Use sparingly. Prefer <code>&lt;bdi&gt;</code> for isolation; <code>&lt;bdo&gt;</code> is a hard override.</p>
    </div>
  </body>
</html>`}};function g(){const[r,n]=t.useState("basicDir"),a=t.useMemo(()=>s[r],[r]);t.useEffect(()=>{document.title="Foundations · dir basics (ltr/rtl/bdi/bdo)"},[]);const l="core-html:dir-basics:v2",o="core-html:dir-basics:v1",c=s.basicDir.code;try{const i=localStorage.getItem(o);i&&(i==="undefined"||i===null||i==="")&&localStorage.removeItem(o)}catch{}return e.jsxs(b.Page,{children:[e.jsxs("header",{className:"pageHeader",children:[e.jsx("h1",{id:"dir-basics",children:"dir basics"}),e.jsxs("p",{className:"lede",children:["Document direction controls how inline content flows and how UI mirrors. Use"," ",e.jsx("code",{children:'dir="ltr|rtl|auto"'})," on root for whole pages. For inline islands, use"," ",e.jsx("code",{children:"<bdi>"}),". Only force with ",e.jsx("code",{children:"<bdo>"})," when necessary."]})]}),e.jsxs("section",{"aria-labelledby":"jump",children:[e.jsx("div",{className:"presetBar",role:"tablist","aria-label":"Examples",children:Object.entries(s).map(([i,{title:p}])=>e.jsx("button",{role:"tab","aria-selected":r===i,className:`presetBtn ${r===i?"isActive":""}`,onClick:()=>n(i),title:"View this preset (editor content won't change)",children:p},i))}),e.jsxs("div",{className:"note",children:[e.jsx("strong",{children:"Editor safety:"})," Preset switch does not touch the editor. Your code stays. Copy from the preview below if you want to try a preset inside the editor."]})]}),e.jsxs("section",{className:"preview","aria-labelledby":"preview",children:[e.jsx("h2",{id:"preview",children:"Preset preview (read-only)"}),e.jsxs("div",{className:"previewCard",children:[e.jsxs("div",{className:"previewHeader",children:[e.jsx("span",{className:"previewTitle",children:a.title}),e.jsx("button",{className:"copyBtn",onClick:async()=>{try{await navigator.clipboard.writeText(a.code)}catch{}},title:"Copy preset code","aria-label":"Copy preset code",children:"Copy"})]}),e.jsx("pre",{className:"codePreview",children:e.jsx("code",{children:a.code})})]})]}),e.jsxs("section",{className:"refs","aria-labelledby":"refs",children:[e.jsx("h2",{id:"refs",children:"Quick notes"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:'dir="auto"'})," lets the browser infer direction from the first strong character."]}),e.jsxs("li",{children:[e.jsx("code",{children:"<bdi>"})," (isolation) is safer than ",e.jsx("code",{children:"<bdo>"})," (override) for mixed inline tokens."]}),e.jsxs("li",{children:["When theming for RTL, also audit icons, arrows, and logical properties (",e.jsx("code",{children:"margin-inline"}),", ",e.jsx("code",{children:"padding-inline"}),")."]})]})]}),e.jsxs("section",{"aria-labelledby":"play",children:[e.jsx("h2",{id:"play",className:"srOnly",children:"Playground"}),e.jsx(x,{storageKey:l,initialHtml:c,height:520})]}),e.jsxs("nav",{className:"nextPrev","aria-label":"Lesson navigation",children:[e.jsx(d,{to:"/foundations/meta-charset-viewport",className:"prev","aria-label":"Go to Meta — charset & viewport",children:"← Meta — charset & viewport"}),e.jsx(d,{to:"/foundations/block-vs-inline",className:"next","aria-label":"Go to Block vs inline",children:"Next: Block vs inline →"})]})]})}export{g as default};
