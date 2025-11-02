import{d as i,r,j as e,N as a}from"./index-D3QNcmKe.js";import{H as t}from"./index-CAjihRuM.js";const s={Page:i.main`
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
        .muted {
            color: var(--text-muted);
        }
        .small {
            font-size: 13px;
            color: var(--text-muted);
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
    `,Code:i.div`
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
    <title>&lt;track&gt; basics — demo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui, -apple-system, Segoe UI, Roboto, sans-serif; }
      .wrap { display: grid; gap: 16px; max-width: 920px; margin: 0 auto; }
      .row { display: grid; gap: 12px; }
      .card { border: 1px solid #ccc; padding: 12px; border-radius: 12px; }
      code { background: #f5f5f5; padding: 2px 6px; border-radius: 6px; }
      video, audio { width: 100%; max-width: 720px; }
      .small { font-size: 13px; color: #6b7280; }
    </style>
  </head>
  <body>
    <main class="wrap">
      <header>
        <h1>&lt;track&gt; basics</h1>
        <p class="small">Add captions, subtitles, chapters, descriptions, or metadata to your media using WebVTT.</p>
      </header>

      <section class="row card">
        <h2>Video with captions (English) + subtitles (Hindi)</h2>
        <video controls crossorigin="anonymous" preload="metadata" poster="">
          <!-- Use your own small MP4/WEBM sources here -->
          <source src="" type="video/mp4">
          <source src="" type="video/webm">
          <!-- Tracks (replace with your hosted .vtt URLs) -->
          <track kind="captions" src="https://example.com/captions.en.vtt" srclang="en" label="English (CC)" default>
          <track kind="subtitles" src="https://example.com/subtitles.hi.vtt" srclang="hi" label="Hindi">
          <track kind="chapters" src="https://example.com/chapters.en.vtt" srclang="en" label="Chapters">
          Sorry, your browser doesn’t support embedded videos.
        </video>
        <p class="small">Tip: Only one <code>default</code> track is respected per kind.</p>
      </section>

      <section class="row card">
        <h2>Audio with captions</h2>
        <audio controls preload="metadata">
          <source src="" type="audio/mpeg">
          <track kind="captions" src="https://example.com/podcast.en.vtt" srclang="en" label="Transcript (EN)">
        </audio>
      </section>

      <section class="row card">
        <h2>WebVTT sample (minimal)</h2>
        <pre><code>WEBVTT

00:00:00.000 --> 00:00:02.500
Welcome to this demo.

00:00:02.600 --> 00:00:05.300
We are learning about the &lt;track&gt; element.

00:00:05.400 --> 00:00:07.000
Captions improve accessibility.</code></pre>
        <p class="small">Save as <code>captions.en.vtt</code> and host it. Set the <code>src</code> of your <code>&lt;track&gt;</code> to that URL.</p>
      </section>

      <footer class="small">
        Notes:
        <ul>
          <li><strong>captions</strong>: includes dialogue + important non-speech audio (e.g., [door slams]).</li>
          <li><strong>subtitles</strong>: translate dialogue only.</li>
          <li><strong>descriptions</strong>: describes important visuals for non-sighted users (often used by screen readers).</li>
          <li><strong>chapters</strong>: named sections for navigation.</li>
          <li><strong>metadata</strong>: machine-readable cues for scripts; not shown to users.</li>
        </ul>
      </footer>
    </main>
  </body>
</html>`;function l(){return r.useEffect(()=>{document.title="Media · <track> basics (captions, subtitles, WebVTT)"},[]),e.jsxs(s.Page,{children:[e.jsxs("header",{className:"pageHeader",id:"top",children:[e.jsxs("h1",{children:[e.jsx("code",{children:"<track>"})," basics: captions, subtitles, and WebVTT"]}),e.jsxs("p",{className:"lede",children:["Add time-synchronized text to ",e.jsx("code",{children:"<video>"})," and"," ",e.jsx("code",{children:"<audio>"}),". The browser renders captions/subtitles, exposes chapters, and lets JS read metadata cues."]})]}),e.jsxs("nav",{className:"toc","aria-label":"On this page",children:[e.jsx("a",{href:"#why",children:"Why it matters"}),e.jsx("a",{href:"#kinds",children:"Kinds"}),e.jsx("a",{href:"#attrs",children:"Attributes"}),e.jsx("a",{href:"#webvtt",children:"WebVTT quickstart"}),e.jsx("a",{href:"#examples",children:"Examples"}),e.jsx("a",{href:"#troubleshoot",children:"Troubleshooting"}),e.jsx("a",{href:"#play",children:"Playground"})]}),e.jsxs("section",{id:"why",children:[e.jsx("h2",{children:"Why it matters"}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"Accessibility: captions benefit D/deaf and hard-of-hearing users."}),e.jsx("li",{children:"Comprehension: subtitles help across languages or noisy environments."}),e.jsx("li",{children:"Navigation: chapters give fast jumps inside long media."}),e.jsx("li",{children:"Automation: metadata cues trigger UI updates without polling."})]})})]}),e.jsxs("section",{id:"kinds",children:[e.jsx("h2",{children:"Track kinds"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Visible kinds"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("code",{children:"captions"})," — dialogue + non-speech audio"," ",e.jsx("span",{className:"muted",children:"(preferred for accessibility)"})]}),e.jsxs("li",{children:[e.jsx("code",{children:"subtitles"})," — dialogue translation only"]}),e.jsxs("li",{children:[e.jsx("code",{children:"chapters"})," — named sections for navigation UI"]}),e.jsxs("li",{children:[e.jsx("code",{children:"descriptions"})," — descriptions of visuals"]})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Script-only"}),e.jsx("ul",{className:"bullets",children:e.jsxs("li",{children:[e.jsx("code",{children:"metadata"})," — not displayed; available via"," ",e.jsx("code",{children:"HTMLMediaElement.textTracks"})," and cues."]})})]})]})]}),e.jsxs("section",{id:"attrs",children:[e.jsx("h2",{children:"Essential attributes"}),e.jsx(s.Code,{"aria-label":"Track attributes",children:e.jsx("pre",{children:String.raw`<video controls>
  <source src="movie.mp4" type="video/mp4" />
  <track kind="captions" src="/vtt/captions.en.vtt" srclang="en" label="English (CC)" default />
  <track kind="subtitles" src="/vtt/subtitles.hi.vtt" srclang="hi" label="Hindi" />
</video>`})}),e.jsxs("p",{className:"note",children:["Only one ",e.jsx("code",{children:"default"})," track per kind is applied. If multiple are marked"," ",e.jsx("code",{children:"default"}),", the first wins."]})]}),e.jsxs("section",{id:"webvtt",children:[e.jsx("h2",{children:"WebVTT quickstart"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Minimal file"}),e.jsx(s.Code,{children:e.jsx("pre",{children:String.raw`WEBVTT

00:00:00.000 --> 00:00:02.400
Hello!

00:00:02.600 --> 00:00:04.000
This is a caption cue.`})}),e.jsxs("p",{className:"small",children:["Save as ",e.jsx("code",{children:"something.vtt"}),", serve with"," ",e.jsx("code",{children:"text/vtt"})," MIME."]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Cue with note + settings"}),e.jsx(s.Code,{children:e.jsx("pre",{children:String.raw`WEBVTT

NOTE Optional comments aren't shown to users.

00:00:00.000 --> 00:00:03.000 line:90% position:50% align:middle
<b>Intro</b> — Welcome to the demo

00:00:03.200 --> 00:00:06.000
[Music] We will learn track + WebVTT.`})}),e.jsxs("p",{className:"small",children:["Settings like ",e.jsx("code",{children:"line"}),", ",e.jsx("code",{children:"position"}),","," ",e.jsx("code",{children:"align"})," control placement."]})]})]})]}),e.jsxs("section",{id:"examples",children:[e.jsx("h2",{children:"Examples"}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Video + multiple tracks"}),e.jsx(s.Code,{children:e.jsx("pre",{children:String.raw`<video controls preload="metadata">
  <source src="movie.mp4" type="video/mp4" />
  <track kind="captions" src="/vtt/movie.en.vtt" srclang="en" label="English (CC)" default />
  <track kind="subtitles" src="/vtt/movie.es.vtt" srclang="es" label="Español" />
  <track kind="chapters" src="/vtt/movie.chapters.vtt" srclang="en" label="Chapters" />
</video>`})})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Reading metadata cues in JS"}),e.jsx(s.Code,{children:e.jsx("pre",{children:String.raw`const video = document.querySelector("video");
const tracks = Array.from(video.textTracks);
const meta = tracks.find(t => t.kind === "metadata");
if (meta) {
  meta.mode = "hidden"; // or "showing" | "disabled"
  meta.addEventListener("cuechange", () => {
    const active = Array.from(meta.activeCues || []);
    active.forEach(cue => {
      // cue.text is your payload; consider JSON if you need structure
      console.log("metadata cue:", cue.text);
    });
  });
}`})}),e.jsxs("p",{className:"small",children:["For ",e.jsx("code",{children:"metadata"}),", browsers don’t render anything; you react to"," ",e.jsx("code",{children:"cuechange"})," and drive your UI."]})]})]}),e.jsxs("section",{id:"troubleshoot",children:[e.jsx("h2",{children:"Troubleshooting"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"No captions appear?"})," Check the network tab for the ",e.jsx("code",{children:".vtt"})," request. You need correct"," ",e.jsx("code",{children:"Access-Control-Allow-Origin"})," when pulling from another domain and a"," ",e.jsx("code",{children:"text/vtt"})," MIME."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Wrong language menu labels?"})," Ensure ",e.jsx("code",{children:"srclang"})," is a valid BCP-47 tag and"," ",e.jsx("code",{children:"label"})," is human-readable."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Timing drift?"})," Verify the media’s true start, trim silent heads/tails, and re-export timings."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Multiple defaults?"})," Only the first marked ",e.jsx("code",{children:"default"})," is honored per kind."]})]})]}),e.jsxs("section",{id:"play",children:[e.jsx("h2",{children:"Try it live"}),e.jsxs("p",{className:"lede",children:["Point the ",e.jsx("code",{children:"src"})," of ",e.jsx("code",{children:"<track>"})," to your own hosted"," ",e.jsx("code",{children:".vtt"})," files and experiment with kinds, labels, and default selection."]}),e.jsx(t,{storageKey:"core-html:media:track-basics:v1",initialHtml:o,height:680})]}),e.jsxs("nav",{className:"nextPrev","aria-label":"Lesson navigation",children:[e.jsx(a,{to:"/media/audio-video-simple",className:"prev","aria-label":"Go to Simple audio/video",children:"← Simple audio/video"}),e.jsx(a,{to:"/media/figure-figcaption",className:"next","aria-label":"Go to Figure + Figcaption",children:"Next: Figure + Figcaption →"})]}),e.jsx("div",{className:"backTop",children:e.jsx("a",{href:"#top",children:"Back to top ↑"})})]})}export{l as default};
