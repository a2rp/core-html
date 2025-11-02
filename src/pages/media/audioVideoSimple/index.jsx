import React, { useEffect } from "react";
import { Styled } from "./styled";
import { NavLink } from "react-router-dom";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";

/*
  Scope of this lesson
  --------------------
  - Minimal <audio> / <video> with controls
  - Basic attributes: controls, src, preload, loop, muted, autoplay (policy note)
  - Sizing video (width/height), poster preview, fallback text
  - Multiple <source> pattern (no advanced codecs talk here)
  - Track mention only as a pointer; full details live in "track-basics"
  - Monaco playground at the end
*/

const STARTER_HTML = String.raw`<!doctype html>
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
</html>`;

export default function AudioVideoSimple() {
    useEffect(() => {
        document.title = "Media · Simple <audio>/<video>";
    }, []);

    return (
        <Styled.Page>
            <header className="pageHeader" id="top">
                <h1>Simple <code>&lt;audio&gt;</code> / <code>&lt;video&gt;</code></h1>
                <p className="lede">
                    Native players with <code>controls</code>, sensible sizing, and clear fallbacks.
                    No advanced codecs or libraries here—just the built-ins.
                </p>
            </header>

            <nav className="toc" aria-label="On this page">
                <a href="#audio-min">Minimal audio</a>
                <a href="#multi-src">Multiple sources</a>
                <a href="#preload">preload</a>
                <a href="#autoplay">Autoplay rules</a>
                <a href="#video-min">Minimal video</a>
                <a href="#inline">Inline video</a>
                <a href="#fallbacks">Fallback text</a>
                <a href="#play">Playground</a>
            </nav>

            <section id="audio-min">
                <h2>Minimal audio</h2>
                <div className="card">
                    <ul className="bullets">
                        <li>Use <code>src</code> with <code>controls</code> for the simplest case.</li>
                        <li>Provide short, compressed files. Lower latency feels better.</li>
                        <li>Always include fallback text for unsupported browsers.</li>
                    </ul>
                </div>
                <Styled.Code>
                    <pre>{String.raw`<audio controls src="audio/song.mp3">
  Your browser does not support the audio element.
</audio>`}</pre>
                </Styled.Code>
            </section>

            <section id="multi-src">
                <h2>Multiple sources</h2>
                <div className="card">
                    <p>Let the browser pick the first supported <code>type</code>.</p>
                </div>
                <Styled.Code>
                    <pre>{String.raw`<audio controls>
  <source src="audio/song.mp3" type="audio/mpeg">
  <source src="audio/song.ogg" type="audio/ogg">
  Your browser does not support the audio element.
</audio>`}</pre>
                </Styled.Code>
            </section>

            <section id="preload">
                <h2>preload</h2>
                <div className="grid2">
                    <div className="card">
                        <h3>none</h3>
                        <p>Don’t fetch media until user action. Good default for many pages.</p>
                        <Styled.Code><pre>{`<audio controls preload="none" src="audio/song.mp3"></audio>`}</pre></Styled.Code>
                    </div>
                    <div className="card">
                        <h3>metadata</h3>
                        <p>Fetch duration and minimal info; no full download.</p>
                        <Styled.Code><pre>{`<audio controls preload="metadata" src="audio/song.mp3"></audio>`}</pre></Styled.Code>
                    </div>
                    <div className="card">
                        <h3>auto</h3>
                        <p>Let the browser decide. May download aggressively on fast networks.</p>
                        <Styled.Code><pre>{`<audio controls preload="auto" src="audio/song.mp3"></audio>`}</pre></Styled.Code>
                    </div>
                </div>
            </section>

            <section id="autoplay">
                <h2>Autoplay rules</h2>
                <div className="card">
                    <ul className="bullets">
                        <li>Most browsers block autoplay with sound.</li>
                        <li>Autoplay usually works when <code>muted</code> is set.</li>
                        <li>Ask for a click if audio is important.</li>
                    </ul>
                </div>
                <Styled.Code>
                    <pre>{String.raw`<audio controls autoplay muted loop src="audio/loop.mp3"></audio>`}</pre>
                </Styled.Code>
            </section>

            <section id="video-min">
                <h2>Minimal video</h2>
                <div className="card">
                    <ul className="bullets">
                        <li>Include <code>controls</code> and set <code>width</code> (and <code>height</code>) to prevent layout jump.</li>
                        <li><code>poster</code> shows a nice first frame.</li>
                    </ul>
                </div>
                <Styled.Code>
                    <pre>{String.raw`<video controls width="640" poster="images/poster.jpg">
  <source src="video/clip.mp4" type="video/mp4">
  <source src="video/clip.webm" type="video/webm">
  Your browser does not support the video element.
</video>`}</pre>
                </Styled.Code>
            </section>

            <section id="inline">
                <h2>Inline video on mobile</h2>
                <div className="card">
                    <p>Use <code>playsinline</code> to avoid forced fullscreen; combine with <code>muted</code> for silent loops.</p>
                </div>
                <Styled.Code>
                    <pre>{String.raw`<video controls muted loop playsinline width="360" poster="images/poster-small.jpg">
  <source src="video/loop.mp4" type="video/mp4">
</video>`}</pre>
                </Styled.Code>
            </section>

            <section id="fallbacks">
                <h2>Fallback text</h2>
                <div className="card">
                    <p>If a format isn’t supported or the URL fails, the child text becomes visible. Keep it helpful.</p>
                </div>
                <Styled.Code>
                    <pre>{String.raw`<video controls width="560">
  <!-- Consider a helpful link here -->
  Sorry, this browser can't play the video. Try a different format.
</video>`}</pre>
                </Styled.Code>
            </section>

            {/* LAST: Monaco playground */}
            <section id="play">
                <h2>Try it live</h2>
                <p className="lede">
                    Paste your own media URLs, tweak <code>preload</code>, add <code>poster</code>, and experiment with muted autoplay.
                </p>
                <HtmlPlayground
                    storageKey="core-html:media:audio-video-simple:v1"
                    initialHtml={STARTER_HTML}
                    height={720}
                />
            </section>

            {/* Prev + Next */}
            <nav className="nextPrev" aria-label="Lesson navigation">
                <NavLink to="/media/figure-figcaption" className="prev" aria-label="Go to Figure with caption">
                    ← Figure with caption
                </NavLink>
                <NavLink to="/media/track-basics" className="next" aria-label="Go to Track basics">
                    Next: Track basics →
                </NavLink>
            </nav>

            <div className="backTop"><a href="#top">Back to top ↑</a></div>
        </Styled.Page>
    );
}
