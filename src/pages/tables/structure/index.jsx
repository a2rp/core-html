import React, { useEffect } from "react";
import { Styled } from "./styled";
import { NavLink } from "react-router-dom";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";

/**
 * Tables → Structure
 * Focus: <caption>, <thead>, <tbody>, <tfoot> — roles, order, and accessible patterns.
 *
 * Big ideas:
 * - caption = table title/label (first child of <table>)
 * - thead/tbody/tfoot = semantic regions; browsers don’t move rows, they group meaningfully
 * - sticky headers/footers are possible with CSS when regions are set
 * - use <th> (header cell) + scope to connect headers & data (detail in the next lesson)
 * - totals/summaries belong to <tfoot> even if visually at the bottom
 * - one table = one idea; avoid layout tables
 */

const STARTER_HTML = String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Table structure — live demo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui, -apple-system, Segoe UI, Roboto, sans-serif; }
      .wrap { max-width: 920px; margin: 0 auto; display: grid; gap: 16px; }
      table { border-collapse: collapse; width: 100%; background: Canvas; color: CanvasText; }
      caption { text-align: left; font-weight: 600; padding: 10px 0; }
      thead th { position: sticky; top: 0; background: color-mix(in oklab, #333, transparent 80%); backdrop-filter: blur(2px); }
      tfoot th, tfoot td { position: sticky; bottom: 0; background: color-mix(in oklab, #333, transparent 85%); }
      th, td { border: 1px solid #ccc; padding: 8px 10px; vertical-align: top; }
      tbody tr:nth-child(odd) td { background: color-mix(in oklab, #999, transparent 92%); }
      .num { text-align: right; font-variant-numeric: tabular-nums; }
      .muted { color: #6b7280; }
      .note { border-left: 3px solid #16a34a; padding: 8px 10px; border-radius: 8px; background: color-mix(in oklab, #16a34a, transparent 92%); }
      .tall { max-height: 280px; overflow: auto; border: 1px solid #ccc; border-radius: 10px; }
    </style>
  </head>
  <body>
    <div class="wrap">
      <p class="muted">Try: scroll the table; header stays at the top and totals stay at the bottom. That’s the benefit of regions.</p>

      <div class="tall">
        <table>
          <caption>Monthly Sales by Region (Q1)</caption>
          <thead>
            <tr>
              <th scope="col">Region</th>
              <th scope="col">Month</th>
              <th scope="col" class="num">Units</th>
              <th scope="col" class="num">Revenue (₹)</th>
            </tr>
          </thead>
          <tbody>
            <tr><th scope="row">North</th><td>Jan</td><td class="num">120</td><td class="num">240,000</td></tr>
            <tr><th scope="row">North</th><td>Feb</td><td class="num">140</td><td class="num">280,000</td></tr>
            <tr><th scope="row">North</th><td>Mar</td><td class="num">130</td><td class="num">260,000</td></tr>

            <tr><th scope="row">South</th><td>Jan</td><td class="num">110</td><td class="num">220,000</td></tr>
            <tr><th scope="row">South</th><td>Feb</td><td class="num">150</td><td class="num">300,000</td></tr>
            <tr><th scope="row">South</th><td>Mar</td><td class="num">160</td><td class="num">320,000</td></tr>

            <tr><th scope="row">East</th><td>Jan</td><td class="num">90</td><td class="num">180,000</td></tr>
            <tr><th scope="row">East</th><td>Feb</td><td class="num">100</td><td class="num">200,000</td></tr>
            <tr><th scope="row">East</th><td>Mar</td><td class="num">95</td><td class="num">190,000</td></tr>

            <tr><th scope="row">West</th><td>Jan</td><td class="num">130</td><td class="num">260,000</td></tr>
            <tr><th scope="row">West</th><td>Feb</td><td class="num">120</td><td class="num">240,000</td></tr>
            <tr><th scope="row">West</th><td>Mar</td><td class="num">125</td><td class="num">250,000</td></tr>
          </tbody>
          <tfoot>
            <tr>
              <th scope="row" colspan="2">Total</th>
              <td class="num"><strong>1,480</strong></td>
              <td class="num"><strong>2,960,000</strong></td>
            </tr>
          </tfoot>
        </table>
      </div>

      <p class="note">
        Put <strong>totals/summary</strong> in <code>&lt;tfoot&gt;</code> even if it appears visually at the bottom. The region is semantic;
        you’re free to style where it lands.
      </p>
    </div>
  </body>
</html>`;

export default function TablesStructure() {
    useEffect(() => {
        document.title = "Tables · Structure: caption, thead, tbody, tfoot";
    }, []);

    return (
        <Styled.Page>
            <header className="pageHeader" id="top">
                <h1>
                    Table structure: <code>&lt;caption&gt;</code>, <code>&lt;thead&gt;</code>,{" "}
                    <code>&lt;tbody&gt;</code>, <code>&lt;tfoot&gt;</code>
                </h1>
                <p className="lede">
                    Tables have a few key regions. Use a <code>caption</code> to title the table, and group rows
                    into <code>thead</code>, <code>tbody</code>, and <code>tfoot</code>. This helps accessibility, printing,
                    sticky headers, and mental clarity.
                </p>
            </header>

            <nav className="toc" aria-label="On this page">
                <a href="#anatomy">Anatomy & order</a>
                <a href="#semantics">Why regions matter</a>
                <a href="#best-practices">Best practices</a>
                <a href="#pitfalls">Pitfalls</a>
                <a href="#play">Playground</a>
            </nav>

            <section id="anatomy">
                <h2>Anatomy & order</h2>
                <div className="card">
                    <Styled.Code>
                        <pre>{String.raw`<table>
  <caption>Describes the table’s purpose</caption>
  <thead>   <!-- column headers go here -->
    <tr>
      <th scope="col">…</th>
      <th scope="col">…</th>
    </tr>
  </thead>
  <tbody>   <!-- the actual data rows -->
    <tr>
      <th scope="row">Row header</th>
      <td>…</td>
      <td>…</td>
    </tr>
  </tbody>
  <tfoot>   <!-- totals / summary -->
    <tr>
      <th scope="row" colspan="2">Total</th>
      <td>…</td>
    </tr>
  </tfoot>
</table>`}</pre>
                    </Styled.Code>
                    <ul className="bullets">
                        <li>
                            <strong>caption</strong> is the first child and acts like a table title. It’s announced by screen readers, and
                            it’s visible text for everyone.
                        </li>
                        <li>
                            <strong>thead</strong> contains header rows (usually <code>&lt;th scope="col"&gt;</code>).
                        </li>
                        <li>
                            <strong>tbody</strong> contains data rows.
                        </li>
                        <li>
                            <strong>tfoot</strong> contains totals/summary. Put totals here semantically even if you style it to appear below.
                        </li>
                    </ul>
                </div>
            </section>

            <section id="semantics">
                <h2>Why regions matter</h2>
                <div className="grid2">
                    <div className="card">
                        <h3>Usability & a11y</h3>
                        <ul className="bullets">
                            <li>Assistive tech can announce table title and navigate regions.</li>
                            <li>Sticky headers/footers are simpler when rows live in <code>thead</code>/<code>tfoot</code>.</li>
                            <li>Print styles can repeat header rows on each page automatically in many UAs.</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h3>Maintenance</h3>
                        <ul className="bullets">
                            <li>Teams know where to add columns (in <code>thead</code>) vs. data (in <code>tbody</code>).</li>
                            <li>Totals logic has a stable home in <code>tfoot</code>.</li>
                            <li>Clear separation reduces layout hacks and fragile selectors.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="best-practices">
                <h2>Best practices</h2>
                <ul className="badges">
                    <li><span className="good">Do</span> Give every data table a concise <code>caption</code>.</li>
                    <li><span className="good">Do</span> Keep header cells inside <code>thead</code>; totals in <code>tfoot</code>.</li>
                    <li><span className="good">Do</span> Use <code>th</code> for headers and <code>td</code> for data.</li>
                    <li><span className="bad">Avoid</span> layout tables. Use CSS Grid/Flexbox for page layout.</li>
                    <li><span className="bad">Avoid</span> mixing unrelated datasets into one mega-table.</li>
                </ul>
            </section>

            <section id="pitfalls">
                <h2>Pitfalls</h2>
                <ul className="bullets">
                    <li>
                        Putting the table title <em>outside</em> the table. Use <code>caption</code>—it’s the right home and gets announced.
                    </li>
                    <li>
                        Using only <code>tbody</code> for everything. Regions are cheap and unlock useful behaviors.
                    </li>
                    <li>
                        Styling totals as the last <code>tbody</code> row. It’s more robust in <code>tfoot</code>.
                    </li>
                </ul>
            </section>

            {/* LAST: Monaco playground */}
            <section id="play">
                <h2>Try it live</h2>
                <p className="lede">
                    Add a <code>caption</code>, split rows into <code>thead</code>/<code>tbody</code>/<code>tfoot</code>, and try sticky headers.
                    Save your version for quick recall later.
                </p>
                <HtmlPlayground
                    storageKey="core-html:tables:structure:v1"
                    initialHtml={STARTER_HTML}
                    height={640}
                />
            </section>

            {/* Prev + Next */}
            <nav className="nextPrev" aria-label="Lesson navigation">
                <NavLink to="/media/track-basics" className="prev" aria-label="Go to Track basics">
                    ← Track basics
                </NavLink>
                <NavLink to="/tables/th-vs-td-scope" className="next" aria-label="Go to th vs td and scope">
                    Next: &lt;th&gt; vs &lt;td&gt; and scope →
                </NavLink>
            </nav>

            <div className="backTop"><a href="#top">Back to top ↑</a></div>
        </Styled.Page>
    );
}
