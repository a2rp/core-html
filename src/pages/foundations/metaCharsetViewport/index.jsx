import React, { useEffect } from "react";
import { Styled } from "./styled";
import { NavLink } from "react-router-dom";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";

const STARTER_HTML = String.raw`<!doctype html>
<html lang="en">
  <head>
    <!-- Put charset early so the parser knows how to decode -->
    <meta charset="utf-8">

    <!-- Title is required; keep it concise and specific -->
    <title>Meta: charset &amp; viewport</title>

    <!-- Viewport: establish a sane mobile baseline -->
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <style>
      :root { color-scheme: light dark; }
      body { font: 14px/1.6 system-ui, -apple-system, Segoe UI, Roboto, sans-serif; padding: 24px; }
      .grid { display: grid; gap: 8px; }
      .card { border: 1px solid #ccc; padding: 12px; border-radius: 8px; }
    </style>
  </head>
  <body>
    <h1>Meta: charset &amp; viewport</h1>
    <div class="grid">
      <div class="card">
        <strong>charset</strong>: Use UTF-8 so all common characters render correctly.
      </div>
      <div class="card">
        <strong>viewport</strong>: Make layouts responsive in mobile browsers by default.
      </div>
    </div>
    <p>Try changing the <code>lang</code>, title, or viewport values and see how it behaves.</p>
  </body>
</html>`;

export default function MetaCharsetViewport() {
    useEffect(() => {
        document.title = "Foundations · Meta: charset & viewport";
    }, []);

    return (
        <Styled.Wrapper>
            <h1>Meta: <code>charset</code> &amp; <code>viewport</code></h1>
            <p className="lede">
                Two tiny tags that prevent big problems. <code>&lt;meta charset="utf-8"&gt;</code> tells the
                parser how to read bytes. <code>&lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;</code>
                sets a sane mobile baseline.
            </p>

            <section>
                <h2>Recommended order</h2>
                <Styled.Code role="region" aria-label="Recommended meta order">
                    <pre>
                        {String.raw`<head>
  <meta charset="utf-8">
  <title>Your page title</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- then other meta/links/scripts -->
</head>`}
                    </pre>
                </Styled.Code>
                <ul className="bullets">
                    <li><strong>charset</strong> goes first so decoding is correct from the start.</li>
                    <li><strong>title</strong> is required; keep it succinct and page-specific.</li>
                    <li><strong>viewport</strong> helps responsive CSS behave as intended on phones.</li>
                </ul>
            </section>

            <section>
                <h2>Viewport: common values</h2>
                <Styled.Code role="region" aria-label="Viewport examples">
                    <pre>
                        {String.raw`<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- Optional tweaks (know why before using) -->
<!-- <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"> -->`}
                    </pre>
                </Styled.Code>
                <p className="note">
                    Avoid locking zoom (e.g., <code>user-scalable=no</code>) unless there’s a very strong accessibility-safe reason.
                </p>
            </section>

            <section>
                <h2>Charset: UTF-8</h2>
                <Styled.Code role="region" aria-label="Charset example">
                    <pre>
                        {String.raw`<meta charset="utf-8">`}
                    </pre>
                </Styled.Code>
                <ul className="bullets">
                    <li>Handles most languages and symbols without surprises.</li>
                    <li>Place it near the top of <code>&lt;head&gt;</code> so the parser uses it immediately.</li>
                </ul>
            </section>

            <section className="try">
                <h2>Try it</h2>
                <p>Edit the HTML (title, charset position, viewport values) and preview live. Your code autosaves.</p>
                <HtmlPlayground
                    storageKey="corehtml:foundations:metaCharsetViewport"
                    initialHtml={STARTER_HTML}
                />
            </section>

            {/* Prev + Next */}
            <nav className="nextPrev" aria-label="Lesson navigation">
                <NavLink to="/foundations/doctype-lang" className="prev" aria-label="Go to Doctype & html lang">
                    ← Doctype &amp; html lang
                </NavLink>
                <NavLink to="/foundations/dir-basics" className="next" aria-label="Go to dir basics">
                    Next: dir basics (ltr/rtl/bdi/bdo) →
                </NavLink>
            </nav>
        </Styled.Wrapper>
    );
}
