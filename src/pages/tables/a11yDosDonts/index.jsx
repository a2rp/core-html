// src/pages/tables/a11yDosDonts/index.jsx
import React, { useEffect } from "react";
import { Styled } from "./styled";
import { NavLink } from "react-router-dom";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";

/**
 * Accessibility & “no layout tables”
 * - Data tables only (never for layout)
 * - Core structure: caption, thead/tbody/tfoot
 * - Header cells: <th> + scope OR id/headers (complex)
 * - Responsive strategies (overflow, compact, stacked)
 * - Presentational tables: role="presentation" (rare)
 * - Pitfalls & quick checks
 * - Monaco playground (LAST)
 */

const STARTER_HTML = String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Tables — Accessibility & No-Layout</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui,-apple-system,Segoe UI,Roboto,sans-serif; }
      .wrap { display: grid; gap: 16px; }
      .card { border: 1px solid #ccc; border-radius: 12px; padding: 12px; }
      .muted { color: #6b7280; }
      .good { background: color-mix(in oklab, #16a34a, transparent 92%); border-color:#8ed09b; }
      .bad  { background: color-mix(in oklab, #dc2626, transparent 92%); border-color:#f2a6a6; }
      .sr-only {
        position:absolute !important; width:1px; height:1px; padding:0; margin:-1px; overflow:hidden;
        clip:rect(0,0,0,0); white-space:nowrap; border:0;
      }
      .scroll {
        overflow:auto; -webkit-overflow-scrolling:touch;
        border: 1px solid #ccc; border-radius: 10px;
      }
      table { border-collapse: collapse; width: 100%; min-width: 560px; }
      caption {
        text-align: left; padding: 8px 10px; font-weight: 600;
      }
      th, td { border: 1px solid #ddd; padding: 8px 10px; text-align: left; }
      thead th { background: #f7f7f7; }
      tfoot td { font-weight: 600; }
      code { background: #f5f5f5; padding:0 6px; border-radius:6px; }
      .ex { border:1px dashed #aaa; padding:8px; border-radius:10px; margin-top:6px; }
    </style>
  </head>
  <body>
    <main class="wrap">
      <header>
        <h1>Accessible data tables (and why not for layout)</h1>
        <p class="muted">Use tables only for data with proper headers. Never for page layout.</p>
      </header>

      <section class="card good">
        <h2>Simple data table (use <code>&lt;th scope="col|row"&gt;</code>)</h2>
        <div class="scroll">
          <table>
            <caption>Monthly Sales — Q1 2025</caption>
            <thead>
              <tr>
                <th scope="col">Month</th>
                <th scope="col">Orders</th>
                <th scope="col">Revenue</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Jan</th>
                <td>120</td>
                <td>₹1,80,000</td>
              </tr>
              <tr>
                <th scope="row">Feb</th>
                <td>135</td>
                <td>₹2,10,000</td>
              </tr>
              <tr>
                <th scope="row">Mar</th>
                <td>150</td>
                <td>₹2,40,000</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td class="muted" colspan="3">Numbers are illustrative.</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>

      <section class="card good">
        <h2>Complex table (multi-level headers via <code>id</code>/<code>headers</code>)</h2>
        <p>When column groups exist (e.g., North/South with subcolumns), give <code>id</code> to header cells and point data cells’ <code>headers</code> to all applicable header ids.</p>
        <div class="scroll">
          <table>
            <caption>Regional Metrics — 2025</caption>
            <thead>
              <tr>
                <th id="h-metric" scope="col">Metric</th>
                <th id="h-north" scope="col" colspan="2">North</th>
                <th id="h-south" scope="col" colspan="2">South</th>
              </tr>
              <tr>
                <th id="h-blank" scope="col" aria-hidden="true"></th>
                <th id="h-n-q1" scope="col">Q1</th>
                <th id="h-n-q2" scope="col">Q2</th>
                <th id="h-s-q1" scope="col">Q1</th>
                <th id="h-s-q2" scope="col">Q2</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th id="m-orders" scope="row">Orders</th>
                <td headers="h-north h-n-q1 m-orders">210</td>
                <td headers="h-north h-n-q2 m-orders">240</td>
                <td headers="h-south h-s-q1 m-orders">190</td>
                <td headers="h-south h-s-q2 m-orders">220</td>
              </tr>
              <tr>
                <th id="m-rev" scope="row">Revenue</th>
                <td headers="h-north h-n-q1 m-rev">₹3.1L</td>
                <td headers="h-north h-n-q2 m-rev">₹3.6L</td>
                <td headers="h-south h-s-q1 m-rev">₹2.8L</td>
                <td headers="h-south h-s-q2 m-rev">₹3.3L</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="card bad">
        <h2>Never for layout</h2>
        <p>These are anti-patterns:</p>
        <div class="ex">
          <!-- ❌ layout table used for columns -->
          <table>
            <tr>
              <td style="width:30%">Sidebar</td>
              <td>Main content</td>
            </tr>
          </table>
        </div>
        <p class="muted">Use CSS Grid/Flexbox for page layout, not tables.</p>
      </section>

      <section class="card">
        <h2>Responsive tips</h2>
        <ul>
          <li><strong>Scrollable container</strong> (preferred): wrap table in a div with <code>overflow:auto</code> and a min-width table.</li>
          <li><strong>Compact</strong>: hide non-essential columns at narrow widths (but keep data discoverable).</li>
          <li><strong>Stacked</strong>: for small screens, each row becomes a block and cells show <code>data-label</code> via CSS.</li>
        </ul>
        <div class="ex">
          <table class="stacked" aria-describedby="stackNote">
            <caption>Inventory (stacked demo)</caption>
            <thead>
              <tr>
                <th scope="col">SKU</th>
                <th scope="col">Name</th>
                <th scope="col">Qty</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" data-label="SKU">A-101</th>
                <td data-label="Name">Thermal Printer</td>
                <td data-label="Qty">8</td>
                <td data-label="Status">In stock</td>
              </tr>
              <tr>
                <th scope="row" data-label="SKU">B-220</th>
                <td data-label="Name">Label Rolls</td>
                <td data-label="Qty">42</td>
                <td data-label="Status">Low</td>
              </tr>
            </tbody>
          </table>
          <p id="stackNote" class="sr-only">On narrow screens each cell is labeled using data-label for clarity.</p>
        </div>
        <style>
          @media (max-width: 560px) {
            table.stacked thead { display: none; }
            table.stacked tr { display: grid; padding: 8px; border:1px solid #ddd; border-radius: 10px; margin-block: 8px; }
            table.stacked td, table.stacked th[scope="row"] { display: grid; grid-template-columns: 9ch 1fr; gap: 8px; border:0; }
            table.stacked td::before, table.stacked th[scope="row"]::before { content: attr(data-label); font-weight: 600; }
          }
        </style>
      </section>

      <section class="card">
        <h2>Presentational tables (edge case)</h2>
        <p>If you absolutely must use table markup for visual alignment only, add <code>role="presentation"</code> or <code>role="none"</code> so assistive tech doesn’t treat it as data. Prefer semantic lists, grids, or CSS instead.</p>
        <div class="ex">
          <table role="presentation">
            <tr><td>Icon</td><td>Label</td></tr>
            <tr><td>⭐</td><td>Favorites</td></tr>
          </table>
        </div>
      </section>

      <section class="card">
        <h2>Quick checks</h2>
        <ul>
          <li>Is there a <code>&lt;caption&gt;</code> that summarizes the table?</li>
          <li>Are header cells <code>&lt;th&gt;</code> with correct <code>scope</code> or <code>id/headers</code>?</li>
          <li>Did you use <code>thead</code>, <code>tbody</code>, <code>tfoot</code> appropriately?</li>
          <li>No layout tables anywhere.</li>
          <li>Keyboard: can you navigate cells/headers meaningfully?</li>
        </ul>
      </section>

      <footer class="muted">
        Rule: If it’s not data, don’t use a table. If it is data, wire the headers correctly.
      </footer>
    </main>
  </body>
</html>`;

export default function A11yDosDonts() {
    useEffect(() => {
        document.title = "Tables · Accessibility & no layout tables";
    }, []);

    return (
        <Styled.Page>
            <header className="pageHeader" id="top">
                <h1>Accessibility & no layout tables</h1>
                <p className="lede">
                    Tables are for <em>data</em>—with proper headers, captions, and regions. Page layout belongs to
                    CSS (Grid/Flex). This lesson shows the right patterns and common traps.
                </p>
            </header>

            <nav className="toc" aria-label="On this page">
                <a href="#structure">Structure</a>
                <a href="#headers">Headers</a>
                <a href="#responsive">Responsive</a>
                <a href="#presentational">Presentational</a>
                <a href="#pitfalls">Pitfalls</a>
                <a href="#play">Playground</a>
            </nav>

            <section id="structure">
                <h2>Structure</h2>
                <div className="card">
                    <ul className="bullets">
                        <li>Use <code>&lt;caption&gt;</code> to describe the table’s purpose.</li>
                        <li>Split with <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, and <code>&lt;tfoot&gt;</code> when it adds clarity.</li>
                        <li>Keep column meanings stable; avoid mixing units in one column.</li>
                    </ul>
                </div>
            </section>

            <section id="headers">
                <h2>Headers</h2>
                <div className="grid2">
                    <div className="card">
                        <h3>Simple tables</h3>
                        <ul className="bullets">
                            <li>Mark column headers: <code>&lt;th scope="col"&gt;</code></li>
                            <li>Mark row headers: <code>&lt;th scope="row"&gt;</code></li>
                            <li>One row/column of headers is enough for many cases.</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h3>Complex tables</h3>
                        <ul className="bullets">
                            <li>Give each header an <code>id</code>.</li>
                            <li>Each <code>&lt;td&gt;</code> lists all relevant header ids in <code>headers</code>.</li>
                            <li>Screen readers will announce the full header chain.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="responsive">
                <h2>Responsive strategies</h2>
                <ul className="badges">
                    <li><span className="good">Good</span> Horizontal scroll wrapper</li>
                    <li><span className="good">Good</span> Compact columns</li>
                    <li><span className="good">Good</span> Stacked rows with labels</li>
                    <li><span className="bad">Wrong</span> Convert to a non-table without preserving semantics</li>
                </ul>
            </section>

            <section id="presentational">
                <h2>Presentational tables</h2>
                <p className="note">
                    If it’s not tabular data, use lists, definition lists, or cards. If you inherited a presentational table, add <code>role="presentation"</code> and replace it in a refactor.
                </p>
            </section>

            <section id="pitfalls">
                <h2>Pitfalls</h2>
                <ul className="badges">
                    <li><span className="bad">Wrong</span> Using tables to position sidebars/columns.</li>
                    <li><span className="bad">Wrong</span> Omitting <code>th</code> entirely (only <code>td</code>).</li>
                    <li><span className="bad">Wrong</span> Nesting interactive controls in headers without labels.</li>
                    <li><span className="good">Good</span> Provide a clear <code>caption</code> and consistent header mapping.</li>
                </ul>
            </section>

            {/* LAST: Monaco playground */}
            <section id="play">
                <h2>Try it live</h2>
                <p className="lede">
                    Fix the anti-patterns, add <code>caption</code>, correct header associations, and try the stacked pattern on small screens.
                </p>
                <HtmlPlayground
                    storageKey="core-html:tables:a11y-dos-donts:v1"
                    initialHtml={STARTER_HTML}
                    height={720}
                />
            </section>

            {/* Prev + Next */}
            <nav className="nextPrev" aria-label="Lesson navigation">
                <NavLink to="/tables/colgroup-col" className="prev" aria-label="Go to colgroup/col">
                    ← colgroup &amp; col
                </NavLink>
                <NavLink to="/forms/form-basics" className="next" aria-label="Go to form basics">
                    Next: Form basics →
                </NavLink>
            </nav>

            <div className="backTop"><a href="#top">Back to top ↑</a></div>
        </Styled.Page>
    );
}
