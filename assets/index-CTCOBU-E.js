import{d as i,r as d,j as e,N as s}from"./index-D3QNcmKe.js";import{H as r}from"./index-CAjihRuM.js";const o={Page:i.main`
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
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 12px;
        }
        @media (max-width: 1000px) {
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
    `},a=String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Simple audio & video — demo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui, -apple-system, Segoe UI, Roboto, sans-serif; }
      .grid { display: grid; gap: 16px; }
      .card { border: 1px solid #ccc; border-radius: 12px; padding: 12px; }
      code { background: #f5f5f5; padding: 0 6px; border-radius: 6px; }
      .muted { color: #6b7280; }
      .stack { display: grid; gap: 8px; }
      .row { display: flex; gap: 12px; align-items: center; flex-wrap: wrap; }
      .note { border-left: 4px solid #3b82f6; padding: 8px 12px; background: color-mix(in oklab, #3b82f6, transparent 92%); border-radius: 8px; }
    </style>
  </head>
  <body>
    <main class="grid">
      <header>
        <h1>Simple <code>&lt;audio&gt;</code> and <code>&lt;video&gt;</code></h1>
        <p class="muted">Controls only. No advanced sources, DRM, or custom JS players.</p>
      </header>

      <section class="card">
        <h2>Minimal audio</h2>
        <div class="stack">
          <p>Single file via <code>src</code> and native <code>controls</code>:</p>
          <audio controls src="audio/sample.mp3">
            <!-- Fallback text appears if the browser can't play this -->
            Your browser does not support the <code>audio</code> element.
          </audio>
          <p class="muted">Tip: prefer short, compressed files for quick starts.</p>
        </div>
      </section>

      <section class="card">
        <h2>Multiple sources (let browser pick)</h2>
        <div class="stack">
          <p>Use nested <code>&lt;source&gt;</code> tags. The first supported type wins.</p>
          <audio controls>
            <source src="audio/sample.mp3" type="audio/mpeg" />
            <source src="audio/sample.ogg" type="audio/ogg" />
            Your browser does not support the <code>audio</code> element.
          </audio>
        </div>
      </section>

      <section class="card">
        <h2>preload basics</h2>
        <div class="stack">
          <div class="row">
            <div>
              <p><code>preload="none"</code> → do not fetch media until user interacts.</p>
              <audio controls preload="none" src="audio/sample.mp3"></audio>
            </div>
            <div>
              <p><code>preload="metadata"</code> → fetch only duration/metadata.</p>
              <audio controls preload="metadata" src="audio/sample.mp3"></audio>
            </div>
            <div>
              <p><code>preload="auto"</code> → let the browser decide (may fetch more).</p>
              <audio controls preload="auto" src="audio/sample.mp3"></audio>
            </div>
          </div>
          <p class="muted">Pick the lightest option that fits the use case. <code>none</code> is good for many pages.</p>
        </div>
      </section>

      <section class="card">
        <h2>Loop, muted, autoplay (policy)</h2>
        <div class="stack">
          <p>Autoplay is usually blocked unless the media is muted or the user has interacted.</p>
          <audio controls autoplay muted loop src="audio/loop.mp3"></audio>
          <p class="note">
            Most browsers only allow autoplay when <code>muted</code>. If sound is required,
            request a click first (e.g., “Play” button).
          </p>
        </div>
      </section>

      <section class="card">
        <h2>Minimal video</h2>
        <div class="stack">
          <p>Start simple: <code>controls</code>, a reasonable <code>width</code>, and optional <code>poster</code>.</p>
          <video
            controls
            width="560"
            poster="images/poster.jpg"
          >
            <source src="video/sample.mp4" type="video/mp4" />
            <source src="video/sample.webm" type="video/webm" />
            Your browser does not support the <code>video</code> element.
          </video>
          <ul>
            <li>Set <code>width</code> (and optionally <code>height</code>) to avoid layout shift.</li>
            <li><code>poster</code> shows a placeholder image before playback starts.</li>
            <li>Use short clips or compressed formats for faster startup.</li>
          </ul>
        </div>
      </section>

      <section class="card">
        <h2>Muted inline video</h2>
        <div class="stack">
          <p>On mobile, <code>playsinline</code> avoids forced fullscreen. Combine with muted autoplay for silent loops.</p>
          <video
            controls
            muted
            playsinline
            loop
            width="360"
            poster="images/poster-small.jpg"
          >
            <source src="video/loop.mp4" type="video/mp4" />
            Your browser does not support the <code>video</code> element.
          </video>
        </div>
      </section>

      <section class="card">
        <h2>Fallback text matters</h2>
        <p>If the browser can’t play the file or the URL is wrong, the child text becomes visible. Keep it helpful.</p>
      </section>

      <footer class="muted">
        Keep it native first. Custom players can come later if needed.
      </footer>
    </main>
  </body>
</html>`;function c(){return d.useEffect(()=>{document.title="Media · Simple <audio>/<video>"},[]),e.jsxs(o.Page,{children:[e.jsxs("header",{className:"pageHeader",id:"top",children:[e.jsxs("h1",{children:["Simple ",e.jsx("code",{children:"<audio>"})," / ",e.jsx("code",{children:"<video>"})]}),e.jsxs("p",{className:"lede",children:["Native players with ",e.jsx("code",{children:"controls"}),", sensible sizing, and clear fallbacks. No advanced codecs or libraries here—just the built-ins."]})]}),e.jsxs("nav",{className:"toc","aria-label":"On this page",children:[e.jsx("a",{href:"#audio-min",children:"Minimal audio"}),e.jsx("a",{href:"#multi-src",children:"Multiple sources"}),e.jsx("a",{href:"#preload",children:"preload"}),e.jsx("a",{href:"#autoplay",children:"Autoplay rules"}),e.jsx("a",{href:"#video-min",children:"Minimal video"}),e.jsx("a",{href:"#inline",children:"Inline video"}),e.jsx("a",{href:"#fallbacks",children:"Fallback text"}),e.jsx("a",{href:"#play",children:"Playground"})]}),e.jsxs("section",{id:"audio-min",children:[e.jsx("h2",{children:"Minimal audio"}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["Use ",e.jsx("code",{children:"src"})," with ",e.jsx("code",{children:"controls"})," for the simplest case."]}),e.jsx("li",{children:"Provide short, compressed files. Lower latency feels better."}),e.jsx("li",{children:"Always include fallback text for unsupported browsers."})]})}),e.jsx(o.Code,{children:e.jsx("pre",{children:String.raw`<audio controls src="audio/song.mp3">
  Your browser does not support the audio element.
</audio>`})})]}),e.jsxs("section",{id:"multi-src",children:[e.jsx("h2",{children:"Multiple sources"}),e.jsx("div",{className:"card",children:e.jsxs("p",{children:["Let the browser pick the first supported ",e.jsx("code",{children:"type"}),"."]})}),e.jsx(o.Code,{children:e.jsx("pre",{children:String.raw`<audio controls>
  <source src="audio/song.mp3" type="audio/mpeg">
  <source src="audio/song.ogg" type="audio/ogg">
  Your browser does not support the audio element.
</audio>`})})]}),e.jsxs("section",{id:"preload",children:[e.jsx("h2",{children:"preload"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"none"}),e.jsx("p",{children:"Don’t fetch media until user action. Good default for many pages."}),e.jsx(o.Code,{children:e.jsx("pre",{children:'<audio controls preload="none" src="audio/song.mp3"></audio>'})})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"metadata"}),e.jsx("p",{children:"Fetch duration and minimal info; no full download."}),e.jsx(o.Code,{children:e.jsx("pre",{children:'<audio controls preload="metadata" src="audio/song.mp3"></audio>'})})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"auto"}),e.jsx("p",{children:"Let the browser decide. May download aggressively on fast networks."}),e.jsx(o.Code,{children:e.jsx("pre",{children:'<audio controls preload="auto" src="audio/song.mp3"></audio>'})})]})]})]}),e.jsxs("section",{id:"autoplay",children:[e.jsx("h2",{children:"Autoplay rules"}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"Most browsers block autoplay with sound."}),e.jsxs("li",{children:["Autoplay usually works when ",e.jsx("code",{children:"muted"})," is set."]}),e.jsx("li",{children:"Ask for a click if audio is important."})]})}),e.jsx(o.Code,{children:e.jsx("pre",{children:String.raw`<audio controls autoplay muted loop src="audio/loop.mp3"></audio>`})})]}),e.jsxs("section",{id:"video-min",children:[e.jsx("h2",{children:"Minimal video"}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["Include ",e.jsx("code",{children:"controls"})," and set ",e.jsx("code",{children:"width"})," (and ",e.jsx("code",{children:"height"}),") to prevent layout jump."]}),e.jsxs("li",{children:[e.jsx("code",{children:"poster"})," shows a nice first frame."]})]})}),e.jsx(o.Code,{children:e.jsx("pre",{children:String.raw`<video controls width="640" poster="images/poster.jpg">
  <source src="video/clip.mp4" type="video/mp4">
  <source src="video/clip.webm" type="video/webm">
  Your browser does not support the video element.
</video>`})})]}),e.jsxs("section",{id:"inline",children:[e.jsx("h2",{children:"Inline video on mobile"}),e.jsx("div",{className:"card",children:e.jsxs("p",{children:["Use ",e.jsx("code",{children:"playsinline"})," to avoid forced fullscreen; combine with ",e.jsx("code",{children:"muted"})," for silent loops."]})}),e.jsx(o.Code,{children:e.jsx("pre",{children:String.raw`<video controls muted loop playsinline width="360" poster="images/poster-small.jpg">
  <source src="video/loop.mp4" type="video/mp4">
</video>`})})]}),e.jsxs("section",{id:"fallbacks",children:[e.jsx("h2",{children:"Fallback text"}),e.jsx("div",{className:"card",children:e.jsx("p",{children:"If a format isn’t supported or the URL fails, the child text becomes visible. Keep it helpful."})}),e.jsx(o.Code,{children:e.jsx("pre",{children:String.raw`<video controls width="560">
  <!-- Consider a helpful link here -->
  Sorry, this browser can't play the video. Try a different format.
</video>`})})]}),e.jsxs("section",{id:"play",children:[e.jsx("h2",{children:"Try it live"}),e.jsxs("p",{className:"lede",children:["Paste your own media URLs, tweak ",e.jsx("code",{children:"preload"}),", add ",e.jsx("code",{children:"poster"}),", and experiment with muted autoplay."]}),e.jsx(r,{storageKey:"core-html:media:audio-video-simple:v1",initialHtml:a,height:720})]}),e.jsxs("nav",{className:"nextPrev","aria-label":"Lesson navigation",children:[e.jsx(s,{to:"/media/figure-figcaption",className:"prev","aria-label":"Go to Figure with caption",children:"← Figure with caption"}),e.jsx(s,{to:"/media/track-basics",className:"next","aria-label":"Go to Track basics",children:"Next: Track basics →"})]}),e.jsx("div",{className:"backTop",children:e.jsx("a",{href:"#top",children:"Back to top ↑"})})]})}export{c as default};
