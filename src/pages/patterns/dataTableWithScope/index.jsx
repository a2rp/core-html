import React, { useEffect } from "react";
import { Styled } from "./styled";
import { NavLink } from "react-router-dom";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";

/**
 * Pattern: Data table with proper <th> scope
 * - What scope means (col, row, colgroup, rowgroup)
 * - When to use <caption>
 * - Thead / tbody / tfoot & outline
 * - Simple table (single header row)
 * - Multi-level headers (colgroup/rowgroup scope)
 * - Complex association with id/headers
 * - Pitfalls checklist
 * - Monaco playground (last)
 */

const STARTER_HTML = String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Data table with scope — demo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui,-apple-system,Segoe UI,Roboto,sans-serif; }
      table { border-collapse: collapse; width: 100%; }
      caption { text-align: left; padding: 8px 0; font-weight: 600; }
      th, td { border: 1px solid #ccc; padding: 8px 10px; }
      thead th { background: color-mix(in oklab, #0ea5e9, transparent 90%); }
      tfoot th, tfoot td { background: color-mix(in oklab, #10b981, transparent 92%); }
      .k { display:inline-block; border:1px solid #bbb; border-radius:999px; padding:2px 8px; font-size:12px; }
      .muted { color: #6b7280; }
      .grid { display: grid; gap: 16px; }
      .ex { border:1px dashed #aaa; padding:8px; border-radius:10px; }
      .bad { background: color-mix(in oklab, #dc2626, transparent 92%); border:1px solid #f2a6a6; padding:8px; border-radius:10px; }
      code { background: #f5f5f5; padding:0 6px; border-radius:6px; }
    </style>
  </head>
  <body>
    <main class="grid">
      <header>
        <h1>Data table with accessible headers</h1>
        <p class="muted">Use <code>&lt;th&gt;</code> for headers and set <code>scope</code> so assistive tech can map cells correctly.</p>
      </header>

      <section class="ex">
        <h2>1) Simple header row (use <code>scope="col"</code>)</h2>
        <table>
          <caption>Monthly Sales (Units)</caption>
          <thead>
            <tr>
              <th scope="col">Month</th>
              <th scope="col">North</th>
              <th scope="col">South</th>
              <th scope="col">East</th>
              <th scope="col">West</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Jan</th>
              <td>120</td><td>90</td><td>80</td><td>70</td>
            </tr>
            <tr>
              <th scope="row">Feb</th>
              <td>140</td><td>95</td><td>88</td><td>76</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th scope="row">Total</th>
              <td>260</td><td>185</td><td>168</td><td>146</td>
            </tr>
          </tfoot>
        </table>
        <p class="muted">Row headers use <code>scope="row"</code>, column headers use <code>scope="col"</code>.</p>
      </section>

      <section class="ex">
        <h2>2) Grouped headers (<code>colgroup</code> / <code>rowgroup</code>)</h2>
        <p class="muted">When headers span multiple rows/cols, use <code>scope="colgroup"</code> or <code>scope="rowgroup"</code> for the spanning cell plus normal <code>scope</code> on the leaves.</p>

        <table>
          <caption>Quarterly Revenue (₹ lakhs)</caption>
          <thead>
            <tr>
              <th rowspan="2" scope="col">Quarter</th>
              <th colspan="3" scope="colgroup">Product A</th>
              <th colspan="2" scope="colgroup">Product B</th>
            </tr>
            <tr>
              <th scope="col">Online</th>
              <th scope="col">Retail</th>
              <th scope="col">Wholesale</th>
              <th scope="col">Online</th>
              <th scope="col">Retail</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Q1</th>
              <td>12</td><td>9</td><td>7</td>
              <td>10</td><td>8</td>
            </tr>
            <tr>
              <th scope="row">Q2</th>
              <td>13</td><td>10</td><td>8</td>
              <td>11</td><td>9</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section class="ex">
        <h2>3) Very complex tables (use <code>id</code>/<code>headers</code>)</h2>
        <p class="muted">If simple scope isn’t enough, give each <code>&lt;th&gt;</code> an <code>id</code>, and each <code>&lt;td&gt;</code> a <code>headers</code> list of the relevant ids.</p>

        <table>
          <caption>Research Metrics (demo)</caption>
          <thead>
            <tr>
              <th id="m1" scope="col">Metric</th>
              <th id="grpA" colspan="2" scope="colgroup">Group A</th>
              <th id="grpB" colspan="2" scope="colgroup">Group B</th>
            </tr>
            <tr>
              <th id="m2" scope="col">—</th>
              <th id="avgA" scope="col">Avg</th>
              <th id="sdA" scope="col">SD</th>
              <th id="avgB" scope="col">Avg</th>
              <th id="sdB" scope="col">SD</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th id="metric1" scope="row">Latency (ms)</th>
              <td headers="metric1 grpA avgA">23</td>
              <td headers="metric1 grpA sdA">3.1</td>
              <td headers="metric1 grpB avgB">27</td>
              <td headers="metric1 grpB sdB">3.4</td>
            </tr>
            <tr>
              <th id="metric2" scope="row">Throughput (ops/s)</th>
              <td headers="metric2 grpA avgA">115</td>
              <td headers="metric2 grpA sdA">8.2</td>
              <td headers="metric2 grpB avgB">109</td>
              <td headers="metric2 grpB sdB">9.0</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section class="bad">
        <h2>Common mistakes</h2>
        <ul>
          <li>Using <code>&lt;td&gt;</code> for headers instead of <code>&lt;th&gt;</code>.</li>
          <li>Omitting <code>scope</code> on <code>&lt;th&gt;</code> cells.</li>
          <li>Wrapping the whole table in extra divs that break scroll semantics.</li>
          <li>Using tables for page layout (don’t).</li>
        </ul>
      </section>

      <footer class="muted">
        Tip: Start with <span class="k">col</span>/<span class="k">row</span> scope. Only if it gets hairy, switch to precise <code>id</code>/<code>headers</code>.
      </footer>
    </main>
  </body>
</html>`;

export default function DataTableWithScope() {
    useEffect(() => {
        document.title = "Patterns · Data table with scope";
    }, []);

    return (
        <Styled.Page>
            <header className="pageHeader" id="top">
                <h1>Data table with scope</h1>
                <p className="lede">
                    Mark header cells with <code>&lt;th&gt;</code> and set <code>scope</code> so screen readers can compute
                    the right header for each data cell. Use <code>id</code>/<code>headers</code> when the structure is too complex for
                    simple scope values.
                </p>
            </header>

            <nav className="toc" aria-label="On this page">
                <a href="#why-scope">Why scope</a>
                <a href="#anatomy">Table anatomy</a>
                <a href="#simple">Simple headers</a>
                <a href="#grouped">Grouped headers</a>
                <a href="#complex">Complex via id/headers</a>
                <a href="#play">Playground</a>
            </nav>

            <section id="why-scope">
                <h2>Why scope matters</h2>
                <div className="card">
                    <ul className="bullets">
                        <li><strong>Scope</strong> tells assistive tech whether a header applies to a row, a column, or a group.</li>
                        <li>Use <code>scope="row"</code>, <code>scope="col"</code> for basic tables.</li>
                        <li>Use <code>scope="rowgroup"</code>, <code>scope="colgroup"</code> when a header spans multiple rows/columns that form a group.</li>
                        <li>When in doubt, keep it simple and test with a screen reader.</li>
                    </ul>
                </div>
            </section>

            <section id="anatomy">
                <h2>Table anatomy</h2>
                <div className="grid2">
                    <div className="card">
                        <h3>Region elements</h3>
                        <ul className="bullets">
                            <li><code>&lt;caption&gt;</code> — short title for the table.</li>
                            <li><code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, <code>&lt;tfoot&gt;</code> — structure and summary rows.</li>
                            <li><code>&lt;th&gt;</code> — header cells; <code>&lt;td&gt;</code> — data cells.</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h3>Rules</h3>
                        <ul className="bullets">
                            <li>Every header cell should have a meaningful scope or id.</li>
                            <li>Row labels belong in <code>&lt;th scope="row"&gt;</code>, not in <code>&lt;td&gt;</code>.</li>
                            <li>Don’t use tables for page layout.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="simple">
                <h2>Simple table (row/col scope)</h2>
                <Styled.Code role="region" aria-label="Simple scope example">
                    <pre>{String.raw`<table>
  <caption>Attendance</caption>
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Mon</th>
      <th scope="col">Tue</th>
      <th scope="col">Wed</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Ananya</th>
      <td>P</td><td>A</td><td>P</td>
    </tr>
    <tr>
      <th scope="row">Rohit</th>
      <td>P</td><td>P</td><td>P</td>
    </tr>
  </tbody>
</table>`}</pre>
                </Styled.Code>
            </section>

            <section id="grouped">
                <h2>Grouped headers (colgroup/rowgroup)</h2>
                <Styled.Code role="region" aria-label="Grouped scope example">
                    <pre>{String.raw`<table>
  <caption>Results</caption>
  <thead>
    <tr>
      <th rowspan="2" scope="col">Team</th>
      <th colspan="2" scope="colgroup">Round 1</th>
      <th colspan="2" scope="colgroup">Round 2</th>
    </tr>
    <tr>
      <th scope="col">Score</th>
      <th scope="col">Rank</th>
      <th scope="col">Score</th>
      <th scope="col">Rank</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Alpha</th>
      <td>78</td><td>2</td><td>82</td><td>1</td>
    </tr>
    <tr>
      <th scope="row">Beta</th>
      <td>70</td><td>3</td><td>76</td><td>3</td>
    </tr>
  </tbody>
</table>`}</pre>
                </Styled.Code>
            </section>

            <section id="complex">
                <h2>When to switch to id/headers</h2>
                <p className="note">
                    If users can’t reliably infer a cell’s header through scope alone (e.g., deeply nested spans), assign <code>id</code> to each relevant <code>&lt;th&gt;</code> and reference them from the <code>headers</code> attribute on <code>&lt;td&gt;</code>.
                </p>
                <Styled.Code role="region" aria-label="id/headers association">
                    <pre>{String.raw`<table>
  <caption>Benchmarks</caption>
  <thead>
    <tr>
      <th id="h-metric" scope="col">Metric</th>
      <th id="h-a" scope="colgroup" colspan="2">Impl A</th>
      <th id="h-b" scope="colgroup" colspan="2">Impl B</th>
    </tr>
    <tr>
      <th id="h-blank" scope="col">—</th>
      <th id="h-a-avg" scope="col">Avg</th>
      <th id="h-a-p95" scope="col">p95</th>
      <th id="h-b-avg" scope="col">Avg</th>
      <th id="h-b-p95" scope="col">p95</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th id="m-lat" scope="row">Latency</th>
      <td headers="m-lat h-a h-a-avg">21</td>
      <td headers="m-lat h-a h-a-p95">30</td>
      <td headers="m-lat h-b h-b-avg">24</td>
      <td headers="m-lat h-b h-b-p95">34</td>
    </tr>
  </tbody>
</table>`}</pre>
                </Styled.Code>
            </section>

            <section id="play">
                <h2>Try it live</h2>
                <p className="lede">
                    Add missing <code>scope</code> values, convert row labels from <code>&lt;td&gt;</code> to <code>&lt;th scope="row"&gt;</code>,
                    and practice <code>id</code>/<code>headers</code> for complex cases. Autosaves to this lesson.
                </p>
                <HtmlPlayground
                    storageKey="core-html:patterns:data-table-with-scope:v1"
                    initialHtml={STARTER_HTML}
                    height={640}
                />
            </section>

            {/* Prev + Next */}
            <nav className="nextPrev" aria-label="Lesson navigation">
                <NavLink to="/patterns/labeled-form-row" className="prev" aria-label="Go to Labeled form row">
                    ← Labeled form row
                </NavLink>
                <NavLink to="/patterns/figure-with-caption" className="next" aria-label="Go to Figure with caption">
                    Next: Figure with caption →
                </NavLink>
            </nav>

            <div className="backTop"><a href="#top">Back to top ↑</a></div>
        </Styled.Page>
    );
}
