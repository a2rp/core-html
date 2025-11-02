import React, { useEffect, useMemo, useState } from "react";
import { Styled } from "./styled";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";
import { NavLink } from "react-router-dom";

const PRESETS = {
    basicDir: {
        title: "dir on <html>", code: `<!doctype html>
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
</html>` },
    bdiDemo: {
        title: "bdi — isolate inline", code: `<!doctype html>
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
</html>` },
    bdoDemo: {
        title: "bdo — force direction", code: `<!doctype html>
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
</html>` }
};

export default function DirBasics() {
    const [tab, setTab] = useState("basicDir");
    const preset = useMemo(() => PRESETS[tab], [tab]);

    useEffect(() => {
        document.title = "Foundations · dir basics (ltr/rtl/bdi/bdo)";
    }, []);

    // 🚑 bump the storage key to escape old "undefined" value
    const STORAGE_KEY = "core-html:dir-basics:v2";
    const OLD_KEY = "core-html:dir-basics:v1";
    const INITIAL_HTML = PRESETS.basicDir.code;

    // Clean old bad value once (before child reads). This runs synchronously on first render.
    try {
        const old = localStorage.getItem(OLD_KEY);
        if (old && (old === "undefined" || old === null || old === "")) {
            localStorage.removeItem(OLD_KEY);
        }
    } catch { }

    return (
        <Styled.Page>
            <header className="pageHeader">
                <h1 id="dir-basics">dir basics</h1>
                <p className="lede">
                    Document direction controls how inline content flows and how UI mirrors. Use{" "}
                    <code>dir="ltr|rtl|auto"</code> on root for whole pages. For inline islands, use{" "}
                    <code>&lt;bdi&gt;</code>. Only force with <code>&lt;bdo&gt;</code> when necessary.
                </p>
            </header>

            <section aria-labelledby="jump">
                <div className="presetBar" role="tablist" aria-label="Examples">
                    {Object.entries(PRESETS).map(([id, { title }]) => (
                        <button
                            key={id}
                            role="tab"
                            aria-selected={tab === id}
                            className={`presetBtn ${tab === id ? "isActive" : ""}`}
                            onClick={() => setTab(id)}
                            title="View this preset (editor content won't change)"
                        >
                            {title}
                        </button>
                    ))}
                </div>
                <div className="note">
                    <strong>Editor safety:</strong> Preset switch does not touch the editor. Your code stays.
                    Copy from the preview below if you want to try a preset inside the editor.
                </div>
            </section>

            <section className="preview" aria-labelledby="preview">
                <h2 id="preview">Preset preview (read-only)</h2>
                <div className="previewCard">
                    <div className="previewHeader">
                        <span className="previewTitle">{preset.title}</span>
                        <button
                            className="copyBtn"
                            onClick={async () => {
                                try { await navigator.clipboard.writeText(preset.code); } catch { }
                            }}
                            title="Copy preset code"
                            aria-label="Copy preset code"
                        >
                            Copy
                        </button>
                    </div>
                    <pre className="codePreview"><code>{preset.code}</code></pre>
                </div>
            </section>

            <section className="refs" aria-labelledby="refs">
                <h2 id="refs">Quick notes</h2>
                <ul>
                    <li><code>dir="auto"</code> lets the browser infer direction from the first strong character.</li>
                    <li><code>&lt;bdi&gt;</code> (isolation) is safer than <code>&lt;bdo&gt;</code> (override) for mixed inline tokens.</li>
                    <li>When theming for RTL, also audit icons, arrows, and logical properties (<code>margin-inline</code>, <code>padding-inline</code>).</li>
                </ul>
            </section>

            {/* LAST: Monaco playground */}
            <section aria-labelledby="play">
                <h2 id="play" className="srOnly">Playground</h2>
                <HtmlPlayground
                    storageKey={STORAGE_KEY}
                    initialHtml={INITIAL_HTML}
                    height={520}
                />
            </section>

            {/* Prev + Next */}
            <nav className="nextPrev" aria-label="Lesson navigation">
                <NavLink to="/foundations/meta-charset-viewport" className="prev" aria-label="Go to Meta — charset & viewport">
                    ← Meta — charset &amp; viewport
                </NavLink>
                <NavLink to="/foundations/block-vs-inline" className="next" aria-label="Go to Block vs inline">
                    Next: Block vs inline →
                </NavLink>
            </nav>
        </Styled.Page>
    );
}
