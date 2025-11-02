import React, { useEffect } from "react";
import { Styled } from "./styled";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";
import { NavLink } from "react-router-dom"; // ← added

/**
 * Block vs Inline — Foundations (max content + Monaco at the end)
 * - Clear mental model (flow vs line)
 * - Lists of common elements
 * - Display matrix + pitfalls
 * - Replaced elements note
 * - Inline formatting context details (line boxes, baseline, vertical-align)
 * - Mini FAQ
 * - Monaco playground LAST (per requirement)
 */

const STARTER_HTML = String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Block vs Inline — mini playground</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root {
        --bg: #0b0d12;
        --card: #12151c;
        --ink: #e6e9ef;
        --muted: #9aa3b2;
        --accent: #5aa2ff;
        --border: #2a2f3a;
        --chip: #1a1f29;
        --accent-2: #ffd166;
      }
      html, body { height: 100%; }
      body {
        margin: 0; padding: 24px; color: var(--ink); background: var(--bg);
        font: 14px/1.6 system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
      }
      h1 { font-size: 20px; margin: 0 0 12px; }
      .lede { color: var(--muted); margin-bottom: 16px; }

      .panel {
        background: var(--card); border: 1px solid var(--border);
        border-radius: 12px; padding: 16px; margin: 16px 0; 
      }
      .row { display: flex; gap: 12px; flex-wrap: wrap; align-items: center; }
      .btn {
        appearance: none; border: 1px solid var(--border); background: #0e121a;
        color: var(--ink); padding: 6px 10px; border-radius: 999px; cursor: pointer;
      }
      .btn[aria-pressed="true"] { border-color: var(--accent); box-shadow: 0 0 0 3px rgba(90,162,255,.2); }
      .hint { color: var(--muted); font-size: 12px; margin-left: 6px; }

      /* Demo blocks */
      .demo { display: grid; gap: 12px; }
      .zoneTitle { color: var(--muted); font-size: 12px; text-transform: uppercase; letter-spacing: .05em; }

      /* Block examples visually boxed */
      .blockExample > * {
        border: 1px dashed var(--border);
        background: #0c1017;
        padding: 8px;
        border-radius: 8px;
      }

      /* Inline chips */
      .chips { border: 1px dashed var(--border); padding: 8px; border-radius: 8px; }
      .chip {
        background: var(--chip);
        padding: 4px 8px;
        border: 1px solid var(--border);
        border-radius: 999px;
        /* default inline */
        display: inline;
      }

      /* Mode flips for inline showcase */
      .mode-inline .chip { display: inline; }
      .mode-inline-block .chip { display: inline-block; }
      .mode-block .chip { display: block; width: max-content; }

      /* Helper visuals for inline layout */
      .chip::after { content: "·"; color: #333; margin-left: 2px; }

      /* Baseline demo */
      .baselineRow { display: flex; align-items: baseline; gap: 8px; border: 1px dashed var(--border); padding: 8px; border-radius: 8px; }
      .baselineRow .big { font-size: 28px; background: #0c1017; padding: 4px 8px; border-radius: 6px; }
      .baselineRow .small { font-size: 12px; background: #0c1017; padding: 4px 8px; border-radius: 6px; }
      .baselineRow img.icon { width: 28px; height: 28px; vertical-align: baseline; outline: 1px dashed var(--border); }

      /* vertical-align showcase */
      .vaBox { border: 1px dashed var(--border); padding: 8px; border-radius: 8px; }
      .vaBox .tag { background: #0c1017; border: 1px solid var(--border); border-radius: 6px; padding: 2px 6px; }
      .vaBox img.icon { width: 28px; height: 28px; outline: 1px dashed var(--border); }
      .vaBox .middle img { vertical-align: middle; }
      .vaBox .top img { vertical-align: text-top; }
      .vaBox .bottom img { vertical-align: text-bottom; }

      /* whitespace + inline formatting context note */
      .codeish { font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: 12px; }
    </style>
  </head>
  <body>
    <h1>Block vs Inline — Live mini playground</h1>
    <p class="lede">
      Block elements create a new row (take available width by default). Inline elements
      flow within a line (respect surrounding text). Toggle modes below to see how
      <code>display</code> affects layout.
    </p>

    <div class="panel">
      <div class="row" role="group" aria-label="Inline display modes">
        <button class="btn" id="modeInline" aria-pressed="true">inline</button>
        <button class="btn" id="modeInlineBlock" aria-pressed="false">inline-block</button>
        <button class="btn" id="modeBlock" aria-pressed="false">block</button>
        <span class="hint">These toggle a class on the container.</span>
      </div>
    </div>

    <div class="demo">
      <div class="panel blockExample">
        <div class="zoneTitle">Block samples (stack)</div>
        <h2>Heading is block</h2>
        <p>Paragraph is block — it spans width and pushes next element to a new line.</p>
        <div>Div is block — notice vertical stacking.</div>
      </div>

      <div class="panel">
        <div class="zoneTitle">Inline samples (flow)</div>
        <p>
          Text contains <em>emphasis</em>, <strong>importance</strong>, and an
          <a href="#">anchor</a>. These are inline by default; they sit within the line box.
        </p>
      </div>

      <div class="panel" id="chipsBox" class="mode-inline">
        <div class="zoneTitle">Change display of these inline chips</div>
        <div class="chips">
          <span class="chip">alpha</span>
          <span class="chip">beta</span>
          <span class="chip">gamma</span>
          <span class="chip">delta</span>
          <span class="chip">epsilon</span>
        </div>
      </div>

      <div class="panel">
        <div class="zoneTitle">Baseline alignment (inline formatting context)</div>
        <div class="baselineRow">
          <span class="big">Baseline</span>
          <img class="icon" src="https://dummyimage.com/28x28/5aa2ff/ffffff.png&text=★" alt="" />
          <span class="small">aligns here</span>
        </div>
        <div class="vaBox">
          <p><span class="tag">vertical-align: baseline (default)</span></p>
          <p class="baseline"><img class="icon" src="https://dummyimage.com/28x28/5aa2ff/ffffff.png&text=A" alt="" /> baseline</p>
          <p class="middle"><span class="tag">middle</span> <img class="icon" src="https://dummyimage.com/28x28/ffd166/000.png&text=M" alt="" /> middle</p>
          <p class="top"><span class="tag">text-top</span> <img class="icon" src="https://dummyimage.com/28x28/ffd166/000.png&text=T" alt="" /> text-top</p>
          <p class="bottom"><span class="tag">text-bottom</span> <img class="icon" src="https://dummyimage.com/28x28/ffd166/000.png&text=B" alt="" /> text-bottom</p>
        </div>
        <p class="codeish">
          Tip: <code>vertical-align</code> only applies to inline/inline-block/table-cell boxes.
        </p>
      </div>

      <div class="panel">
        <div class="zoneTitle">Whitespace and inline flow</div>
        <p>
          Inline content creates <em>line boxes</em>. Whitespace collapses: multiple spaces collapse into one,
          and line breaks can create anonymous blocks or wrap points depending on context.
        </p>
        <p class="codeish">
          Try adding <code>white-space: pre</code> on a container to see raw spacing; or experiment with long words and <code>overflow-wrap</code>.
        </p>
      </div>
    </div>

    <script>
      const box = document.getElementById('chipsBox');
      const btnInline = document.getElementById('modeInline');
      const btnInlineBlock = document.getElementById('modeInlineBlock');
      const btnBlock = document.getElementById('modeBlock');

      function setMode(mode) {
        box.classList.remove('mode-inline','mode-inline-block','mode-block');
        box.classList.add(mode);

        // update aria
        [btnInline, btnInlineBlock, btnBlock].forEach(b => b.setAttribute('aria-pressed','false'));
        if (mode === 'mode-inline') btnInline.setAttribute('aria-pressed','true');
        if (mode === 'mode-inline-block') btnInlineBlock.setAttribute('aria-pressed','true');
        if (mode === 'mode-block') btnBlock.setAttribute('aria-pressed','true');
      }

      // init
      setMode('mode-inline');

      btnInline.addEventListener('click', () => setMode('mode-inline'));
      btnInlineBlock.addEventListener('click', () => setMode('mode-inline-block'));
      btnBlock.addEventListener('click', () => setMode('mode-block'));
    </script>
  </body>
</html>`;

export default function BlockVsInline() {
    useEffect(() => {
        document.title = "Foundations · Block vs Inline";
    }, []);

    return (
        <Styled.Page>
            <header className="pageHeader" id="top">
                <h1>Block vs inline</h1>
                <p className="lede">
                    Semantics define <em>what</em> an element means; <code>display</code> defines
                    <em>how</em> it participates in layout. Here’s the practical map.
                </p>
            </header>

            <nav className="toc" aria-label="On this page">
                <a href="#mental-model">Mental model</a>
                <a href="#common-elements">Common elements</a>
                <a href="#display-matrix">Display matrix</a>
                <a href="#inline-details">Inline formatting context</a>
                <a href="#pitfalls">Common pitfalls</a>
                <a href="#faq">FAQ</a>
                <a href="#play">Playground</a>
            </nav>

            <section id="mental-model">
                <h2>Mental model</h2>
                <div className="card">
                    <p>
                        <strong>Block</strong> elements create a new row and typically expand to fill
                        their parent’s inline size. Think paragraphs, sections, list items.
                    </p>
                    <p>
                        <strong>Inline</strong> elements sit inside a line box like words and icons.
                        They do not accept width/height directly (use padding/border/line-height).
                    </p>
                    <p>
                        <strong>Inline-block</strong> is a hybrid: participates in inline flow but
                        accepts width/height and honors box model like a mini block.
                    </p>
                </div>
            </section>

            <section id="common-elements">
                <h2>Common elements</h2>
                <div className="grid2">
                    <div className="card">
                        <h3>Block by default</h3>
                        <ul className="bullets">
                            <li><code>div</code>, <code>p</code>, <code>section</code>, <code>article</code>, <code>aside</code>, <code>header</code>, <code>footer</code>, <code>nav</code></li>
                            <li><code>h1</code>–<code>h6</code>, <code>ul</code>/<code>ol</code>/<code>li</code>, <code>table</code>, <code>figure</code>, <code>blockquote</code></li>
                            <li><code>form</code>, <code>fieldset</code>, <code>hr</code></li>
                        </ul>
                    </div>
                    <div className="card">
                        <h3>Inline by default</h3>
                        <ul className="bullets">
                            <li><code>a</code>, <code>em</code>, <code>strong</code>, <code>span</code>, <code>abbr</code>, <code>q</code>, <code>cite</code>, <code>code</code>, <code>kbd</code>, <code>samp</code></li>
                            <li><code>img</code> (replaced inline), <code>svg</code>, <code>label</code>, <code>small</code>, <code>mark</code>, <code>time</code></li>
                            <li>Form controls vary (often <em>inline-block</em>/replaced)</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="display-matrix">
                <h2>Display matrix (cheat-sheet)</h2>
                <div role="table" className="table">
                    <div role="row" className="thead">
                        <span role="columnheader">Display</span>
                        <span role="columnheader">Layout behavior</span>
                        <span role="columnheader">Accepts width/height?</span>
                        <span role="columnheader">Typical use</span>
                    </div>
                    <div role="row">
                        <span><code>block</code></span>
                        <span>Starts on new line; fills inline-size</span>
                        <span>Yes</span>
                        <span>Sections, paragraphs, containers</span>
                    </div>
                    <div role="row">
                        <span><code>inline</code></span>
                        <span>Flows with text; within line boxes</span>
                        <span>No (padding/border OK)</span>
                        <span>Text-level semantics, icons</span>
                    </div>
                    <div role="row">
                        <span><code>inline-block</code></span>
                        <span>Flows inline; behaves like a small block</span>
                        <span>Yes</span>
                        <span>Badges, chips, nav items, buttons</span>
                    </div>
                    <div role="row">
                        <span><code>list-item</code></span>
                        <span>Block + marker (list-style)</span>
                        <span>Yes</span>
                        <span><code>li</code>, be careful changing it</span>
                    </div>
                    <div role="row">
                        <span><code>table</code>/<code>table-*</code></span>
                        <span>Table formatting context</span>
                        <span>Depends</span>
                        <span>Data tables only (not layout)</span>
                    </div>
                    <div role="row">
                        <span><code>contents</code></span>
                        <span>Box disappears; children participate</span>
                        <span>n/a</span>
                        <span>Rare: wrapper without box (watch a11y)</span>
                    </div>
                </div>
                <p className="note">
                    Changing <code>display</code> does <em>not</em> change meaning. A <code>span</code> with <code>display:block</code> is still a
                    <code>span</code> semantically. Prefer semantic elements first; then style.
                </p>
            </section>

            <section id="inline-details">
                <h2>Inline formatting context (details that bite)</h2>
                <ul className="bullets">
                    <li><strong>Line boxes</strong> are formed from inline content; height depends on font metrics and line-height.</li>
                    <li><strong>Baseline alignment</strong> dictates how text and images share a line; tweak with <code>vertical-align</code>.</li>
                    <li><strong>Replaced elements</strong> (<code>img</code>, <code>video</code>, some inputs) behave differently: intrinsic size, baseline rules vary.</li>
                    <li><strong>Whitespace collapsing</strong>: multiple spaces collapse; newlines may become spaces. Use <code>white-space</code> to control.</li>
                </ul>
            </section>

            <section id="pitfalls">
                <h2>Common pitfalls</h2>
                <ul className="badges">
                    <li><span className="bad">Wrong</span> Using <code>&lt;div&gt;</code> for list items. Use <code>&lt;li&gt;</code>.</li>
                    <li><span className="bad">Wrong</span> Forcing everything to <code>display:inline-block</code> and fighting wrapping.</li>
                    <li><span className="bad">Wrong</span> Relying on <code>vertical-align</code> for centering entire components.</li>
                    <li><span className="good">Good</span> Use inline for text-level semantics; switch to inline-block when you need width/height.</li>
                </ul>
            </section>

            <section id="faq">
                <h2>FAQ</h2>
                <details>
                    <summary>Can I put block inside inline?</summary>
                    <div className="ans">
                        Historically no, but many browsers tolerate it. Prefer not to — it breaks semantics.
                        Wrap with a block container or switch the parent to <code>display:block</code>/<code>inline-block</code>.
                    </div>
                </details>
                <details>
                    <summary>Why does my icon sit lower than text?</summary>
                    <div className="ans">
                        Baseline alignment. Set <code>vertical-align: middle</code> on the icon or adjust line-height.
                    </div>
                </details>
                <details>
                    <summary>When to use <code>inline-block</code> vs <code>flex</code>?</summary>
                    <div className="ans">
                        For tiny pills/badges where you just need intrinsic-size boxes inline, use inline-block.
                        For multi-axis alignment and gap control, use flex/grid.
                    </div>
                </details>
            </section>

            {/* LAST: Monaco playground (autosave + live toggles inside iframe) */}
            <section id="play">
                <h2>Try it live</h2>
                <p className="lede">
                    Edit the HTML/CSS/JS below. Buttons inside the preview switch <code>display</code> modes of the chips.
                    Your code autosaves to this lesson only.
                </p>
                <HtmlPlayground
                    storageKey="core-html:block-vs-inline:v2"
                    initialHtml={STARTER_HTML}
                    height={600}
                />
            </section>

            {/* Prev + Next */}
            <nav className="nextPrev" aria-label="Lesson navigation">
                <NavLink to="/foundations/dir-basics" className="prev" aria-label="Go to dir basics">
                    ← dir basics
                </NavLink>
                <NavLink to="/foundations/content-categories" className="next" aria-label="Go to Content categories">
                    Next: Content categories →
                </NavLink>
            </nav>

            <div className="backTop"><a href="#top">Back to top ↑</a></div>
        </Styled.Page>
    );
}
