import React, { useEffect } from "react";
import { Styled } from "./styled";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";
import { NavLink } from "react-router-dom"; // ← added

/**
 * Content Categories — Foundations (maximum concise reference + Monaco last)
 * Covers: Flow, Metadata, Sectioning, Heading, Phrasing, Embedded, Interactive,
 *         Form-associated, Palpable (and overlaps), plus mini examples.
 */

const STARTER_HTML = String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Content Categories — demo map</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <!-- metadata content -->
    <meta name="description" content="Demo for HTML content categories" />
    <link rel="stylesheet" href="data:text/css,body{font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;padding:24px} .box{border:1px solid #aaa;padding:10px;border-radius:8px;margin:8px 0} .hint{color:#777;font-size:12px}" />
  </head>
  <body>
    <h1>Content Categories — quick tour</h1>

    <section class="box">
      <h2>Flow content</h2>
      <p>Most things you can place in <code>&lt;body&gt;</code> belong here.</p>
      <ul>
        <li>Paragraph text (<code>&lt;p&gt;</code>)</li>
        <li>Sections (<code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>)</li>
        <li>Lists (<code>&lt;ul&gt;</code>/<code>&lt;ol&gt;</code>/<code>&lt;li&gt;</code>)</li>
        <li>Media (<code>&lt;figure&gt;</code>, <code>&lt;img&gt;</code>)</li>
      </ul>
    </section>

    <section class="box">
      <h2>Phrasing content</h2>
      <p>Inline text-level semantics: <em>emphasis</em>, <strong>importance</strong>,
         <code>&lt;code&gt;</code>, <abbr title="HyperText Markup Language">HTML</abbr>,
         <a href="#">links</a>, <small>small print</small>.</p>
      <p class="hint">Phrasing is a subset of Flow.</p>
    </section>

    <section class="box">
      <h2>Heading &amp; Sectioning</h2>
      <h3>Sectioning</h3>
      <p><code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;aside&gt;</code>, <code>&lt;nav&gt;</code> define the outline.</p>
      <h3>Heading</h3>
      <p><code>&lt;h1&gt;</code>…<code>&lt;h6&gt;</code> provide headings for the nearest sectioning root.</p>
    </section>

    <section class="box">
      <h2>Embedded &amp; Interactive</h2>
      <p>Embedded: <code>&lt;img&gt;</code>, <code>&lt;video&gt;</code>, <code>&lt;audio&gt;</code>, <code>&lt;svg&gt;</code>, <code>&lt;canvas&gt;</code>.</p>
      <p>Interactive: <button>button</button>, <a href="#">links</a>, <input placeholder="form controls" />.</p>
    </section>

    <section class="box">
      <h2>Form-associated content</h2>
      <form>
        <label>Mail <input type="email" name="mail" autocomplete="email" /></label>
        <button>Send</button>
      </form>
      <p class="hint">Controls like <code>input</code>, <code>select</code>, <code>textarea</code> participate in form submission and constraint validation.</p>
    </section>

    <section class="box">
      <h2>Palpable content</h2>
      <p>Content that is perceivable: headings, paragraphs, images with alt, etc. Some elements (e.g. empty <code>&lt;div&gt;</code>) are not palpable.</p>
    </section>

    <section class="box">
      <h2>Metadata content (in &lt;head&gt;)</h2>
      <p>Examples: <code>&lt;title&gt;</code>, <code>&lt;meta&gt;</code>, <code>&lt;link rel="stylesheet"&gt;</code>, <code>&lt;script&gt;</code> (when in head).</p>
      <p class="hint">Metadata is not Flow; it configures the document.</p>
    </section>

    <footer class="box">
      <p>Try moving elements around to see where they are valid. Keep semantics intact.</p>
    </footer>
  </body>
</html>`;

export default function ContentCategories() {
    useEffect(() => {
        document.title = "Foundations · Content Categories";
    }, []);

    return (
        <Styled.Page>
            <header className="pageHeader" id="top">
                <h1>Content Categories</h1>
                <p className="lede">
                    HTML uses overlapping “content categories” to define where elements are allowed and how they behave.
                    Categories are not mutually exclusive: an element can be in several buckets.
                </p>
            </header>

            <nav className="toc" aria-label="On this page">
                <a href="#map">Map at a glance</a>
                <a href="#flow">Flow</a>
                <a href="#phrasing">Phrasing</a>
                <a href="#sectioning">Sectioning &amp; Heading</a>
                <a href="#embedded">Embedded</a>
                <a href="#interactive">Interactive</a>
                <a href="#form">Form-associated</a>
                <a href="#palpable">Palpable</a>
                <a href="#metadata">Metadata</a>
                <a href="#dos">Dos / Don’ts</a>
                <a href="#play">Playground</a>
            </nav>

            <section id="map">
                <h2>Map at a glance</h2>
                <div role="table" className="table">
                    <div role="row" className="thead">
                        <span role="columnheader">Category</span>
                        <span role="columnheader">Meaning</span>
                        <span role="columnheader">Typical elements</span>
                        <span role="columnheader">Inside allowed</span>
                    </div>

                    <div role="row">
                        <span>Flow</span>
                        <span>Most body content</span>
                        <span><code>p</code>, <code>div</code>, <code>ul</code>, <code>figure</code>, <code>section</code></span>
                        <span><code>body</code>, sectioning roots</span>
                    </div>

                    <div role="row">
                        <span>Phrasing</span>
                        <span>Text-level inline</span>
                        <span><code>span</code>, <code>a</code>, <code>em</code>, <code>strong</code>, <code>img</code></span>
                        <span>Where phrasing is expected (e.g., <code>p</code>)</span>
                    </div>

                    <div role="row">
                        <span>Sectioning</span>
                        <span>Defines outline</span>
                        <span><code>section</code>, <code>article</code>, <code>nav</code>, <code>aside</code></span>
                        <span>Within Flow</span>
                    </div>

                    <div role="row">
                        <span>Heading</span>
                        <span>Titles for sections</span>
                        <span><code>h1</code>…<code>h6</code>, <code>hgroup</code></span>
                        <span>Where heading is expected</span>
                    </div>

                    <div role="row">
                        <span>Embedded</span>
                        <span>External content</span>
                        <span><code>img</code>, <code>video</code>, <code>audio</code>, <code>svg</code>, <code>canvas</code>, <code>iframe</code></span>
                        <span>Flow/Phrasing (varies)</span>
                    </div>

                    <div role="row">
                        <span>Interactive</span>
                        <span>User-activated controls</span>
                        <span><code>a</code>, <code>button</code>, <code>input</code>, <code>select</code>, <code>textarea</code>, <code>summary</code></span>
                        <span>Do not nest interactive inside interactive</span>
                    </div>

                    <div role="row">
                        <span>Form-associated</span>
                        <span>Participates in form</span>
                        <span><code>input</code>, <code>button</code>, <code>select</code>, <code>textarea</code>, <code>output</code>, <code>label</code></span>
                        <span>Inside <code>form</code> (or associated by attributes)</span>
                    </div>

                    <div role="row">
                        <span>Palpable</span>
                        <span>Perceivable content</span>
                        <span>Headings, <code>p</code>, images with alt, etc.</span>
                        <span>Most Flow contexts</span>
                    </div>

                    <div role="row">
                        <span>Metadata</span>
                        <span>Document configuration</span>
                        <span><code>title</code>, <code>meta</code>, <code>link</code>, <code>style</code>, <code>script</code> (in <code>head</code>)</span>
                        <span>Inside <code>head</code></span>
                    </div>
                </div>
                <p className="note">
                    Categories overlap. For example, <code>&lt;a&gt;</code> is phrasing, flow, and interactive.
                </p>
            </section>

            <section id="flow">
                <h2>Flow</h2>
                <p>
                    Flow is the “default” bucket for elements that can appear in <code>&lt;body&gt;</code>. Many elements are both Flow and
                    members of other categories.
                </p>
                <ul className="bullets">
                    <li>Examples: <code>div</code>, <code>p</code>, <code>ul</code>/<code>ol</code>/<code>li</code>, <code>figure</code>, <code>table</code>, <code>section</code>.</li>
                    <li>Not Flow: metadata-only elements like <code>title</code>, <code>meta</code>, <code>link</code> (when in <code>head</code>).</li>
                </ul>
            </section>

            <section id="phrasing">
                <h2>Phrasing</h2>
                <p>Text-level semantics meant to live inside paragraphs and similar contexts.</p>
                <ul className="bullets">
                    <li>Examples: <code>a</code>, <code>em</code>, <code>strong</code>, <code>span</code>, <code>img</code>, <code>abbr</code>, <code>time</code>.</li>
                    <li>Block-only elements (e.g., <code>section</code>, <code>div</code>) are not phrasing.</li>
                </ul>
            </section>

            <section id="sectioning">
                <h2>Sectioning &amp; Heading</h2>
                <div className="grid2">
                    <div className="card">
                        <h3>Sectioning</h3>
                        <p>Defines the document outline and scoping for headings.</p>
                        <ul className="bullets">
                            <li><code>article</code>, <code>section</code>, <code>nav</code>, <code>aside</code></li>
                            <li>Avoid excessive nesting; prefer meaningful sections.</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h3>Heading</h3>
                        <p>Headings label sections. Use a logical hierarchy; avoid skipping levels without reason.</p>
                        <ul className="bullets">
                            <li><code>h1</code>…<code>h6</code> (optionally <code>hgroup</code>)</li>
                            <li>Multiple <code>h1</code> are allowed across different sectioning roots.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="embedded">
                <h2>Embedded</h2>
                <p>External or media content that participates in layout via its own behaviors.</p>
                <ul className="bullets">
                    <li><code>img</code>, <code>video</code>, <code>audio</code>, <code>svg</code>, <code>canvas</code>, <code>iframe</code></li>
                    <li>Provide alternative text for images that convey information.</li>
                </ul>
            </section>

            <section id="interactive">
                <h2>Interactive</h2>
                <p>Elements users can activate or focus.</p>
                <ul className="bullets">
                    <li><code>a</code>, <code>button</code>, <code>input</code>, <code>select</code>, <code>textarea</code>, <code>summary</code></li>
                    <li>Do not nest interactive elements inside interactive parents.</li>
                </ul>
            </section>

            <section id="form">
                <h2>Form-associated</h2>
                <p>Elements that submit data or contribute to constraint validation.</p>
                <ul className="bullets">
                    <li><code>form</code>, <code>label</code>, <code>input</code>, <code>select</code>, <code>textarea</code>, <code>button</code>, <code>output</code></li>
                    <li>Associate labels with controls for accessibility; use <code>autocomplete</code> tokens.</li>
                </ul>
            </section>

            <section id="palpable">
                <h2>Palpable</h2>
                <p>Content that conveys information on its own: generally visible and perceivable.</p>
                <ul className="bullets">
                    <li>Examples: headings, paragraphs, figures with captions, images with alt.</li>
                    <li>Empty containers or purely styling hooks are not palpable.</li>
                </ul>
            </section>

            <section id="metadata">
                <h2>Metadata</h2>
                <p>Configuration and relationships for the document; belongs in <code>&lt;head&gt;</code>.</p>
                <ul className="bullets">
                    <li><code>title</code>, <code>meta</code>, <code>link</code>, <code>style</code>, and <code>script</code> (when used as metadata).</li>
                    <li>Do not place metadata elements in <code>&lt;body&gt;</code> (with very few spec-defined exceptions).</li>
                </ul>
            </section>

            <section id="dos">
                <h2>Dos / Don’ts</h2>
                <ul className="badges">
                    <li><span className="good">Do</span> Choose the semantic element first; then apply CSS.</li>
                    <li><span className="good">Do</span> Keep headings close to the section they label.</li>
                    <li><span className="good">Do</span> Use interactive elements correctly; avoid role hand-waving.</li>
                    <li><span className="bad">Don’t</span> Put metadata in <code>&lt;body&gt;</code>.</li>
                    <li><span className="bad">Don’t</span> Nest interactive inside interactive.</li>
                    <li><span className="bad">Don’t</span> Replace semantic elements with <code>div</code>/<code>span</code> without reason.</li>
                </ul>
            </section>

            {/* LAST: Monaco playground */}
            <section id="play">
                <h2>Try it live</h2>
                <p className="lede">
                    Edit the demo to move elements between contexts and observe what is valid, palpable, or interactive.
                    The code autosaves for this lesson.
                </p>
                <HtmlPlayground
                    storageKey="core-html:content-categories:v1"
                    initialHtml={STARTER_HTML}
                    height={620}
                />
            </section>

            {/* Prev + Next */}
            <nav className="nextPrev" aria-label="Lesson navigation">
                <NavLink to="/foundations/block-vs-inline" className="prev" aria-label="Go to Block vs inline">
                    ← Block vs inline
                </NavLink>
                <NavLink to="/skeleton/head-vs-body" className="next" aria-label="Go to Document Skeleton — head vs body">
                    Next: Document Skeleton — &lt;head&gt; vs &lt;body&gt; →
                </NavLink>
            </nav>

            <div className="backTop"><a href="#top">Back to top ↑</a></div>
        </Styled.Page>
    );
}
