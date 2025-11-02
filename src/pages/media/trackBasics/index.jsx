import React, { useEffect } from "react";
import { Styled } from "./styled";
import { NavLink } from "react-router-dom";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";

/*
  <track> basics — captions, subtitles, descriptions, chapters, metadata
  - Why text tracks matter
  - Kinds and when to use which
  - Attributes: kind, src, srclang, label, default
  - WebVTT quickstart (timestamps, cues, notes)
  - Video + Audio examples
  - Troubleshooting (CORS, MIME, timing drift)
  - Playground LAST
*/

const STARTER_HTML = String.raw`<!doctype html>
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
</html>`;

export default function TrackBasics() {
    useEffect(() => {
        document.title = "Media · <track> basics (captions, subtitles, WebVTT)";
    }, []);

    return (
        <Styled.Page>
            <header className="pageHeader" id="top">
                <h1>
                    <code>&lt;track&gt;</code> basics: captions, subtitles, and WebVTT
                </h1>
                <p className="lede">
                    Add time-synchronized text to <code>&lt;video&gt;</code> and{" "}
                    <code>&lt;audio&gt;</code>. The browser renders captions/subtitles,
                    exposes chapters, and lets JS read metadata cues.
                </p>
            </header>

            <nav className="toc" aria-label="On this page">
                <a href="#why">Why it matters</a>
                <a href="#kinds">Kinds</a>
                <a href="#attrs">Attributes</a>
                <a href="#webvtt">WebVTT quickstart</a>
                <a href="#examples">Examples</a>
                <a href="#troubleshoot">Troubleshooting</a>
                <a href="#play">Playground</a>
            </nav>

            <section id="why">
                <h2>Why it matters</h2>
                <div className="card">
                    <ul className="bullets">
                        <li>Accessibility: captions benefit D/deaf and hard-of-hearing users.</li>
                        <li>Comprehension: subtitles help across languages or noisy environments.</li>
                        <li>Navigation: chapters give fast jumps inside long media.</li>
                        <li>Automation: metadata cues trigger UI updates without polling.</li>
                    </ul>
                </div>
            </section>

            <section id="kinds">
                <h2>Track kinds</h2>
                <div className="grid2">
                    <div className="card">
                        <h3>Visible kinds</h3>
                        <ul className="bullets">
                            <li>
                                <code>captions</code> — dialogue + non-speech audio{" "}
                                <span className="muted">(preferred for accessibility)</span>
                            </li>
                            <li>
                                <code>subtitles</code> — dialogue translation only
                            </li>
                            <li>
                                <code>chapters</code> — named sections for navigation UI
                            </li>
                            <li>
                                <code>descriptions</code> — descriptions of visuals
                            </li>
                        </ul>
                    </div>
                    <div className="card">
                        <h3>Script-only</h3>
                        <ul className="bullets">
                            <li>
                                <code>metadata</code> — not displayed; available via{" "}
                                <code>HTMLMediaElement.textTracks</code> and cues.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="attrs">
                <h2>Essential attributes</h2>
                <Styled.Code aria-label="Track attributes">
                    {/*
  Attributes cheat-sheet:
  - kind: captions | subtitles | descriptions | chapters | metadata
  - src: URL to .vtt (same-origin or CORS-allowed)
  - srclang: BCP 47 language tag ("en", "hi", "en-US")
  - label: user-visible name in captions menu ("English (CC)")
  - default: boolean; at most one default per kind is used
*/}
                    <pre>{String.raw`<video controls>
  <source src="movie.mp4" type="video/mp4" />
  <track kind="captions" src="/vtt/captions.en.vtt" srclang="en" label="English (CC)" default />
  <track kind="subtitles" src="/vtt/subtitles.hi.vtt" srclang="hi" label="Hindi" />
</video>`}</pre>
                </Styled.Code>
                <p className="note">
                    Only one <code>default</code> track per kind is applied. If multiple are marked{" "}
                    <code>default</code>, the first wins.
                </p>
            </section>

            <section id="webvtt">
                <h2>WebVTT quickstart</h2>
                <div className="grid2">
                    <div className="card">
                        <h3>Minimal file</h3>
                        <Styled.Code>
                            <pre>{String.raw`WEBVTT

00:00:00.000 --> 00:00:02.400
Hello!

00:00:02.600 --> 00:00:04.000
This is a caption cue.`}</pre>
                        </Styled.Code>
                        <p className="small">
                            Save as <code>something.vtt</code>, serve with{" "}
                            <code>text/vtt</code> MIME.
                        </p>
                    </div>
                    <div className="card">
                        <h3>Cue with note + settings</h3>
                        <Styled.Code>
                            <pre>{String.raw`WEBVTT

NOTE Optional comments aren't shown to users.

00:00:00.000 --> 00:00:03.000 line:90% position:50% align:middle
<b>Intro</b> — Welcome to the demo

00:00:03.200 --> 00:00:06.000
[Music] We will learn track + WebVTT.`}</pre>
                        </Styled.Code>
                        <p className="small">
                            Settings like <code>line</code>, <code>position</code>,{" "}
                            <code>align</code> control placement.
                        </p>
                    </div>
                </div>
            </section>

            <section id="examples">
                <h2>Examples</h2>
                <div className="card">
                    <h3>Video + multiple tracks</h3>
                    <Styled.Code>
                        <pre>{String.raw`<video controls preload="metadata">
  <source src="movie.mp4" type="video/mp4" />
  <track kind="captions" src="/vtt/movie.en.vtt" srclang="en" label="English (CC)" default />
  <track kind="subtitles" src="/vtt/movie.es.vtt" srclang="es" label="Español" />
  <track kind="chapters" src="/vtt/movie.chapters.vtt" srclang="en" label="Chapters" />
</video>`}</pre>
                    </Styled.Code>
                </div>

                <div className="card">
                    <h3>Reading metadata cues in JS</h3>
                    <Styled.Code>
                        <pre>{String.raw`const video = document.querySelector("video");
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
}`}</pre>
                    </Styled.Code>
                    <p className="small">
                        For <code>metadata</code>, browsers don’t render anything; you react to{" "}
                        <code>cuechange</code> and drive your UI.
                    </p>
                </div>
            </section>

            <section id="troubleshoot">
                <h2>Troubleshooting</h2>
                <ul className="bullets">
                    <li>
                        <strong>No captions appear?</strong> Check the network tab for the <code>.vtt</code> request. You need correct{" "}
                        <code>Access-Control-Allow-Origin</code> when pulling from another domain and a{" "}
                        <code>text/vtt</code> MIME.
                    </li>
                    <li>
                        <strong>Wrong language menu labels?</strong> Ensure <code>srclang</code> is a valid BCP-47 tag and{" "}
                        <code>label</code> is human-readable.
                    </li>
                    <li>
                        <strong>Timing drift?</strong> Verify the media’s true start, trim silent heads/tails, and re-export timings.
                    </li>
                    <li>
                        <strong>Multiple defaults?</strong> Only the first marked <code>default</code> is honored per kind.
                    </li>
                </ul>
            </section>

            {/* LAST: Monaco playground */}
            <section id="play">
                <h2>Try it live</h2>
                <p className="lede">
                    Point the <code>src</code> of <code>&lt;track&gt;</code> to your own hosted{" "}
                    <code>.vtt</code> files and experiment with kinds, labels, and default selection.
                </p>
                <HtmlPlayground
                    storageKey="core-html:media:track-basics:v1"
                    initialHtml={STARTER_HTML}
                    height={680}
                />
            </section>

            {/* Prev + Next */}
            <nav className="nextPrev" aria-label="Lesson navigation">
                <NavLink to="/media/audio-video-simple" className="prev" aria-label="Go to Simple audio/video">
                    ← Simple audio/video
                </NavLink>
                <NavLink to="/media/figure-figcaption" className="next" aria-label="Go to Figure + Figcaption">
                    Next: Figure + Figcaption →
                </NavLink>
            </nav>

            <div className="backTop"><a href="#top">Back to top ↑</a></div>
        </Styled.Page>
    );
}
