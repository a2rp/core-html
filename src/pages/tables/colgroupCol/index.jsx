import React, { useEffect } from "react";
import { Styled } from "./styled";
import { NavLink } from "react-router-dom";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";

/**
 * <colgroup>/<col> — Column groups identification
 * What, why, and how:
 * - Purpose: identify columns (or groups) to set shared width/align/appearance
 * - Where it lives: directly inside <table>, before thead/tbody/tfoot
 * - How to use: <colgroup> wraps one or more <col>; span=N to cover N columns
 * - Styling: width, background, text-align via CSS on <col> or <colgroup>
 * - Layout: auto vs table-layout: fixed — how column widths resolve
 * - Accessibility: semantic grouping; doesn’t replace <th scope="col">
 * - Pitfalls: no content in <col>, span math must match real columns
 * - Live playground last
 */

const STARTER_HTML = String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title><colgroup>/<col> — demo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui,-apple-system,Segoe UI,Roboto,sans-serif; }
      table { border-collapse: collapse; width: 100%; }
      caption { text-align: left; font-weight: 600; margin-bottom: 8px; }
      th, td { border: 1px solid #999; padding: 8px 10px; }
      thead th { background: color-mix(in oklab, #2563eb, transparent 85%); }
      tfoot td { background: color-mix(in oklab, #16a34a, transparent 90%); font-weight: 600; }

      /* Column identities via <col> classes */
      col.idx  { width: 56px; background: color-mix(in oklab, #64748b, transparent 92%); }
      col.name { width: 30%; }
      col.num  { text-align: right; }
      col.total{ background: color-mix(in oklab, #f59e0b, transparent 90%); font-weight: 600; }

      /* Text alignment applied by column */
      td, th { text-align: inherit; } /* inherit from column if set */

      /* Toggle this to see how column width behavior changes */
      /* table { table-layout: fixed; } */
    </style>
  </head>
  <body>
    <main>
      <header>
        <h1>&lt;colgroup&gt;/&lt;col&gt; — identify columns for styling/width</h1>
        <p class="muted">
          Use <code>&lt;colgroup&gt;</code> and <code>&lt;col&gt;</code> to set widths or styles for a whole column at once.
          These elements contain no content; they just describe columns.
        </p>
      </header>

      <section class="card">
        <h2>Example table</h2>

        <table>
          <!-- Identify columns BEFORE thead/tbody/tfoot -->
          <colgroup>
            <col class="idx">
            <col class="name" span="1">
            <col class="num">
            <col class="num">
            <col class="total">
          </colgroup>

          <caption>Quarterly Sales (Demo)</caption>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product</th>
              <th scope="col">Q1</th>
              <th scope="col">Q2</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Widget A</td>
              <td>1,250</td>
              <td>1,600</td>
              <td>2,850</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Widget B</td>
              <td>980</td>
              <td>1,120</td>
              <td>2,100</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Widget C</td>
              <td>1,640</td>
              <td>1,320</td>
              <td>2,960</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="4" style="text-align:right">Grand total</td>
              <td>7,910</td>
            </tr>
          </tfoot>
        </table>

        <p class="muted">
          Try adding <code>table { table-layout: fixed; }</code> above; widths from <code>&lt;col&gt;</code> are taken
          strictly in fixed layout and as hints in auto layout.
        </p>
      </section>

      <section class="card">
        <h2>Grouping multiple columns</h2>
        <p>
          A single <code>&lt;col&gt;</code> can cover multiple adjacent columns with <code>span</code>. You can also
          use multiple <code>&lt;colgroup&gt;</code> blocks to segment the table.
        </p>

        <table>
          <colgroup>
            <col class="idx">
            <col class="name">
          </colgroup>
          <colgroup>
            <col class="num" span="2">
            <col class="total">
          </colgroup>

          <caption>Same table split into groups</caption>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product</th>
              <th scope="col">Q1</th>
              <th scope="col">Q2</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr><th scope="row">1</th><td>Widget A</td><td>1,250</td><td>1,600</td><td>2,850</td></tr>
            <tr><th scope="row">2</th><td>Widget B</td><td>980</td><td>1,120</td><td>2,100</td></tr>
            <tr><th scope="row">3</th><td>Widget C</td><td>1,640</td><td>1,320</td><td>2,960</td></tr>
          </tbody>
        </table>
      </section>

      <section class="card">
        <h2>What columns can/can't do</h2>
        <ul class="bullets">
          <li><strong>Good for:</strong> default <code>width</code>, alignment (<code>text-align</code>), background, filters.</li>
          <li><strong>Not for content:</strong> <code>&lt;col&gt;</code> can’t contain text or headers.</li>
          <li><strong>Accessibility:</strong> Still use <code>&lt;th scope="col"</code> for headers and relationships.</li>
          <li><strong>Math matters:</strong> Total columns defined by your header/data must match the number covered by your
              <code>&lt;col&gt;</code> definitions (including <code>span</code>).</li>
        </ul>
      </section>

      <footer class="muted">Tip: Set alignment on the column and inherit in cells to keep markup clean.</footer>
    </main>
  </body>
</html>`;

export default function ColgroupCol() {
    useEffect(() => {
        document.title = "Tables · <colgroup>/<col> — Column groups";
    }, []);

    return (
        <Styled.Page>
            <header className="pageHeader" id="top">
                <h1>
                    <code>&lt;colgroup&gt;</code>/<code>&lt;col&gt;</code> — Column groups
                </h1>
                <p className="lede">
                    Identify and style table columns as a unit. Perfect for setting widths, alignment, and
                    visual grouping without sprinkling classes on every cell.
                </p>
            </header>

            <nav className="toc" aria-label="On this page">
                <a href="#model">Mental model</a>
                <a href="#syntax">Syntax & placement</a>
                <a href="#layout">Layout behavior</a>
                <a href="#styling">Styling patterns</a>
                <a href="#pitfalls">Pitfalls</a>
                <a href="#play">Playground</a>
            </nav>

            <section id="model">
                <h2>Mental model</h2>
                <div className="card">
                    <ul className="bullets">
                        <li>
                            <strong>Column identity:</strong> <code>&lt;colgroup&gt;</code> wraps one or more{" "}
                            <code>&lt;col&gt;</code> elements. Each <code>&lt;col&gt;</code> maps to one or more
                            physical columns.
                        </li>
                        <li>
                            <strong>Separation of concerns:</strong> data stays in <code>thead/tbody/tfoot</code>;
                            structure/width/alignment live in column definitions.
                        </li>
                        <li>
                            <strong>Semantics assist styling:</strong> you get one place to change a column’s
                            presentation.
                        </li>
                    </ul>
                </div>
            </section>

            <section id="syntax">
                <h2>Syntax & placement</h2>
                <Styled.Code role="region" aria-label="Basic colgroup syntax">
                    <pre>{String.raw`<table>
  <colgroup>
    <col class="idx">
    <col class="name">
    <col class="num" span="2">
  </colgroup>
  <thead>…</thead>
  <tbody>…</tbody>
</table>`}</pre>
                </Styled.Code>
                <p className="note">
                    Place <code>&lt;colgroup&gt;</code> right after <code>&lt;caption&gt;</code> (if any) and
                    before <code>&lt;thead/&gt;&lt;tbody/&gt;&lt;tfoot&gt;</code>. Use <code>span</code> on{" "}
                    <code>&lt;col&gt;</code> to cover multiple adjacent columns.
                </p>
            </section>

            <section id="layout">
                <h2>Layout behavior</h2>
                <div className="grid2">
                    <div className="card">
                        <h3>Auto layout (default)</h3>
                        <ul className="bullets">
                            <li>Content drives width; <code>&lt;col&gt;</code> widths act as hints.</li>
                            <li>Very wide content can override your hints to avoid overflow.</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h3><code>table-layout: fixed</code></h3>
                        <ul className="bullets">
                            <li>Column widths from <code>&lt;col&gt;</code> are honored up-front.</li>
                            <li>Layout is faster/predictable; text may truncate/wrap instead.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="styling">
                <h2>Styling patterns</h2>
                <Styled.Code role="region" aria-label="Styling columns">
                    <pre>{String.raw`/* Align numbers without touching every <td> */
col.num { text-align: right; }
td, th { text-align: inherit; }

/* Set a narrow index column */
col.idx { width: 56px; }

/* Group with multiple colgroups */
<table>
  <colgroup><col class="idx"><col class="name"></colgroup>
  <colgroup><col class="num" span="2"><col class="total"></colgroup>
  …
</table>`}</pre>
                </Styled.Code>
                <p className="note">
                    You can target <code>col</code> or <code>colgroup</code> in CSS. Remember: columns don’t
                    hold content—think of them like “column selectors.”
                </p>
            </section>

            <section id="pitfalls">
                <h2>Pitfalls</h2>
                <ul className="badges">
                    <li><span className="bad">Wrong</span> More columns in data than covered by your <code>col</code>s.</li>
                    <li><span className="bad">Wrong</span> Expecting <code>&lt;col&gt;</code> to add headers or text.</li>
                    <li><span className="good">Good</span> Keep <code>th scope="col"</code> for header semantics.</li>
                    <li><span className="good">Good</span> Use <code>table-layout: fixed</code> for strict width control.</li>
                </ul>
            </section>

            <section id="play">
                <h2>Try it live</h2>
                <p className="lede">
                    Adjust spans, add a second <code>&lt;colgroup&gt;</code>, or flip to{" "}
                    <code>table-layout: fixed</code> to feel how widths resolve. Autosaves to this lesson.
                </p>
                <HtmlPlayground
                    storageKey="core-html:tables:colgroup-col:v1"
                    initialHtml={STARTER_HTML}
                    height={680}
                />
            </section>

            {/* Prev + Next */}
            <nav className="nextPrev" aria-label="Lesson navigation">
                <NavLink to="/tables/th-vs-td-scope" className="prev" aria-label="Go to <th> vs <td>, scope">
                    ← &lt;th&gt; vs &lt;td&gt;, scope
                </NavLink>
                <NavLink to="/tables/a11y-dos-donts" className="next" aria-label="Go to Table a11y do's and don'ts">
                    Next: Table a11y do’s & don’ts →
                </NavLink>
            </nav>

            <div className="backTop"><a href="#top">Back to top ↑</a></div>
        </Styled.Page>
    );
}
