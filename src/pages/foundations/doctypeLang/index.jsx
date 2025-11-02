import React, { useEffect } from "react";
import { Styled } from "./styled";
import { NavLink } from "react-router-dom";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";

const STARTER_HTML = String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Document</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>body{font:14px/1.5 system-ui,-apple-system,Segoe UI,Roboto,sans-serif;padding:24px}</style>
  </head>
  <body>
    <h1>Hello, semantics!</h1>
    <p>This document starts with a correct HTML5 doctype and declares a language.</p>
  </body>
</html>`;

export default function DoctypeLang() {
    useEffect(() => {
        document.title = "Foundations · Doctype & html lang";
    }, []);

    return (
        <Styled.Wrapper>
            <h1>Doctype &amp; <code>&lt;html lang&gt;</code></h1>
            <p className="lede">
                Start every HTML document with the HTML5 doctype and declare a language on
                the <code>&lt;html&gt;</code> element. It prevents quirks mode and helps a11y/SEO.
            </p>

            <section>
                <h2>Minimal, correct start</h2>
                <Styled.Code role="region" aria-label="Minimal HTML boilerplate">
                    <pre>
                        {String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Document</title>
    <!-- viewport lives here; see: Foundations → Meta: charset & viewport -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
  <body>
    <!-- content -->
  </body>
</html>`}
                    </pre>
                </Styled.Code>
                <div className="note">
                    Want details on <code>&lt;meta charset&gt;</code> and viewport?
                    {" "}
                    <NavLink to="/foundations/meta-charset-viewport" className="inlineLink">
                        Go to Meta: charset & viewport
                    </NavLink>
                    .
                </div>
            </section>

            <section>
                <h2>Why it matters</h2>
                <ul className="bullets">
                    <li><strong>Doctype</strong> forces standards mode—predictable CSS/layout.</li>
                    <li><strong>Language</strong> improves screen readers/translation/search.</li>
                    <li><strong>UTF-8 charset</strong> avoids garbled characters.</li>
                </ul>
            </section>

            <section>
                <h2>Language: picking &amp; overriding</h2>
                <p>
                    Set the document’s primary language on <code>&lt;html lang&gt;</code>.
                    Override on subtrees where content changes.
                </p>
                <Styled.Code role="region" aria-label="Language override example">
                    <pre>
                        {String.raw`<html lang="en">
  <body>
    <p>Primary English text.</p>
    <blockquote lang="hi">यह एक हिन्दी उद्धरण है।</blockquote>
  </body>
</html>`}
                    </pre>
                </Styled.Code>
            </section>

            <section>
                <h2>Common mistakes</h2>
                <ul className="badges">
                    <li><span className="bad">Wrong</span> Missing doctype → quirks mode.</li>
                    <li><span className="bad">Wrong</span> Legacy doctypes for new docs.</li>
                    <li><span className="bad">Wrong</span> No <code>lang</code> → mispronounced content.</li>
                    <li><span className="good">Good</span> Always <code>&lt;!doctype html&gt;</code> + valid <code>lang</code>.</li>
                </ul>
            </section>

            <section className="tryLater">
                <h2>Try it</h2>
                <p>Edit the HTML and preview it safely in the right pane. Your code autosaves.</p>
                <HtmlPlayground
                    storageKey="corehtml:foundations:doctypeLang"
                    initialHtml={STARTER_HTML}
                />
            </section>

            <nav className="nextPrev">
                <NavLink to="/foundations/meta-charset-viewport" className="next">
                    Next: Meta — charset &amp; viewport →
                </NavLink>
            </nav>
        </Styled.Wrapper>
    );
}
