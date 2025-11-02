import React, { useEffect } from "react";
import { Styled } from "./styled";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";
import { NavLink } from "react-router-dom";

/*
  Topic: <th> vs <td>, and the scope attribute
  - What is a header cell vs a data cell
  - Why scope matters (assistive tech & cognition)
  - scope="col" | "row" | "colgroup" | "rowgroup"
  - When headers/id is required (irregular/complex tables)
  - Minimal, ideal structure: <caption> + <thead>/<tbody>/<tfoot>
  - Examples, pitfalls, and a live playground
*/

const STARTER_HTML = String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title><th> vs <td>, scope — demo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui,-apple-system,Segoe UI,Roboto,sans-serif; }
      table { border-collapse: collapse; width: 100%; }
      caption { text-align: left; font-weight: 600; margin-bottom: 8px; }
      thead th { background: color-mix(in oklab, #3b82f6, transparent 88%); }
      th, td { border: 1px solid #ccc; padding: 8px 10px; text-align: left; }
      tbody th[scope=row] { background: color-mix(in oklab, #16a34a, transparent 90%); }
      .note { margin-top: 10px; color: #6b7280; }
      .bad { background: color-mix(in oklab, #dc2626, transparent 92%); }
      .good { background: color-mix(in oklab, #16a34a, transparent 92%); }
      code { background: #f5f5f5; padding: 0 6px; border-radius: 6px; }
    </style>
  </head>
  <body>
    <main>
      <!-- Ideal basic data table -->
      <table>
        <caption>Monthly sales by region (Q1)</caption>
        <thead>
          <tr>
            <th scope="col">Region</th>
            <th scope="col">Jan</th>
            <th scope="col">Feb</th>
            <th scope="col">Mar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">North</th>
            <td>12.4k</td>
            <td>13.1k</td>
            <td>14.0k</td>
          </tr>
          <tr>
            <th scope="row">South</th>
            <td>9.8k</td>
            <td>10.2k</td>
            <td>10.7k</td>
          </tr>
          <tr>
            <th scope="row">West</th>
            <td>11.1k</td>
            <td>11.5k</td>
            <td>12.2k</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th scope="row">Total</th>
            <td>33.3k</td>
            <td>34.8k</td>
            <td>36.9k</td>
          </tr>
        </tfoot>
      </table>

      <p class="note">
        Tip: Column headers use <code>scope="col"</code> (usually in <code>&lt;thead&gt;</code>), row headers use
        <code>scope="row"</code> (first cell in each data row).
      </p>

      <!-- A common mistake (bad) -->
      <h2>Common mistake</h2>
      <table class="bad">
        <caption>BAD: Using &lt;td&gt; for headers</caption>
        <thead>
          <tr>
            <td>Region</td>
            <td>Jan</td>
            <td>Feb</td>
            <td>Mar</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>North</td><td>12.4k</td><td>13.1k</td><td>14.0k</td>
          </tr>
        </tbody>
      </table>
      <p class="note">Header cells must be <code>&lt;th&gt;</code>, not <code>&lt;td&gt;</code>. Without proper headers, assistive tech loses context.</p>

      <!-- Grouped headers -->
      <h2>Grouped headers</h2>
      <table>
        <caption>Scores by subject and term</caption>
        <thead>
          <tr>
            <th scope="col">Student</th>
            <th scope="colgroup" colspan="2">Math</th>
            <th scope="colgroup" colspan="2">Science</th>
          </tr>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Term 1</th>
            <th scope="col">Term 2</th>
            <th scope="col">Term 1</th>
            <th scope="col">Term 2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Aditi</th>
            <td>88</td><td>91</td><td>85</td><td>89</td>
          </tr>
          <tr>
            <th scope="row">Rahul</th>
            <td>76</td><td>80</td><td>79</td><td>82</td>
          </tr>
        </tbody>
      </table>

      <!-- Irregular layout that needs headers/id -->
      <h2>Irregular table (use headers/id)</h2>
      <table class="good">
        <caption>Lab results (irregular headings)</caption>
        <thead>
          <tr>
            <th id="t-test">Test</th>
            <th id="t-ref">Reference</th>
            <th id="t-sub">Subject</th>
            <th id="t-notes">Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th id="row1" headers="t-test">Hemoglobin</th>
            <td headers="t-ref row1">13–17 g/dL</td>
            <td headers="t-sub row1">14.2</td>
            <td headers="t-notes row1" rowspan="2">Subject fasting; repeat next week</td>
          </tr>
          <tr>
            <th id="row2" headers="t-test">WBC</th>
            <td headers="t-ref row2">4–11 ×10^9/L</td>
            <td headers="t-sub row2">10.3</td>
          </tr>
        </tbody>
      </table>
      <p class="note">
        When the structure is complex (spans, missing headers, mixed groups), use <code>id</code> on header cells and
        <code>headers</code> on data cells to explicitly map associations.
      </p>
    </main>
  </body>
</html>`;

export default function ThVsTdScope() {
    useEffect(() => {
        document.title = "Tables · <th> vs <td>, and scope";
    }, []);

    return (
        <Styled.Page>
            <header className="pageHeader" id="top">
                <h1>
                    <code>&lt;th&gt;</code> vs <code>&lt;td&gt;</code>, and the{" "}
                    <code>scope</code> attribute
                </h1>
                <p className="lede">
                    <code>&lt;th&gt;</code> marks header cells;{" "}
                    <code>&lt;td&gt;</code> marks data cells. Add{" "}
                    <code>scope</code> so assistive tech can map each data cell to the
                    correct headers—making tables understandable and navigable.
                </p>
            </header>

            <nav className="toc" aria-label="On this page">
                <a href="#anatomy">Header vs data cells</a>
                <a href="#scope">How <code>scope</code> works</a>
                <a href="#groups">Grouped headers</a>
                <a href="#complex">Complex tables (headers/id)</a>
                <a href="#pitfalls">Pitfalls</a>
                <a href="#play">Playground</a>
            </nav>

            <section id="anatomy">
                <h2>Header vs data cells</h2>
                <div className="card">
                    <ul className="bullets">
                        <li>
                            Use <code>&lt;th&gt;</code> for headers that label rows/columns.
                        </li>
                        <li>
                            Use <code>&lt;td&gt;</code> for the values.
                        </li>
                        <li>
                            Provide a brief <code>&lt;caption&gt;</code> and structural
                            regions via <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>
                            , and <code>&lt;tfoot&gt;</code>.
                        </li>
                    </ul>
                </div>
            </section>

            <section id="scope">
                <h2>The <code>scope</code> attribute</h2>
                <Styled.Code role="region" aria-label="Scope examples">
                    <pre>{String.raw`<!-- Column headers (top row) -->
<th scope="col">Price</th>

<!-- Row header (first cell in row) -->
<th scope="row">Plan A</th>

<!-- Header spans a group of columns/rows -->
<th scope="colgroup" colspan="3">Quarter 1</th>
<th scope="rowgroup" rowspan="4">West Zone</th>`}</pre>
                </Styled.Code>
                <p className="note">
                    Screen readers use <code>scope</code> to announce the correct header
                    while moving across the grid. It also helps everyone understand the
                    structure at a glance.
                </p>
            </section>

            <section id="groups">
                <h2>Grouped headers (colgroup/rowgroup)</h2>
                <div className="card">
                    <p>
                        When a header labels a group of columns or rows, keep the visual
                        merge (<code>colspan/rowspan</code>) and declare{" "}
                        <code>scope="colgroup"</code> or <code>scope="rowgroup"</code>.
                    </p>
                </div>
            </section>

            <section id="complex">
                <h2>Complex/irregular tables: use <code>headers</code>/<code>id</code></h2>
                <Styled.Code role="region" aria-label="headers/id mapping">
                    <pre>{String.raw`<table>
  <thead>
    <tr>
      <th id="h-prod">Product</th>
      <th id="h-q1">Q1</th>
      <th id="h-q2">Q2</th>
      <th id="h-remarks">Remarks</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th id="r-a" headers="h-prod">Alpha</th>
      <td headers="h-q1 r-a">120</td>
      <td headers="h-q2 r-a">140</td>
      <td headers="h-remarks r-a" rowspan="2">Promo applied</td>
    </tr>
    <tr>
      <th id="r-b" headers="h-prod">Beta</th>
      <td headers="h-q1 r-b">90</td>
      <td headers="h-q2 r-b">95</td>
      <!-- remark is merged above -->
    </tr>
  </tbody>
</table>`}</pre>
                </Styled.Code>
                <p className="note">
                    Prefer <code>scope</code> for simple rectangles. Switch to explicit{" "}
                    <code>headers/id</code> when spans or missing headers make relations
                    ambiguous.
                </p>
            </section>

            <section id="pitfalls">
                <h2>Pitfalls</h2>
                <ul className="badges">
                    <li>
                        <span className="bad">Wrong</span> Using <code>&lt;td&gt;</code> for
                        header cells.
                    </li>
                    <li>
                        <span className="bad">Wrong</span> Omitting{" "}
                        <code>scope</code> on header cells in simple tables.
                    </li>
                    <li>
                        <span className="good">Good</span> Use{" "}
                        <code>headers/id</code> only when necessary.
                    </li>
                </ul>
            </section>

            <section id="play">
                <h2>Try it live</h2>
                <p className="lede">
                    Fix the “BAD” table by changing header cells to{" "}
                    <code>&lt;th&gt;</code>, adding proper <code>scope</code>, and
                    verifying with a screen reader or by keyboard navigation.
                </p>
                <HtmlPlayground
                    storageKey="core-html:tables:th-vs-td-scope:v1"
                    initialHtml={STARTER_HTML}
                    height={700}
                />
            </section>

            <nav className="nextPrev" aria-label="Lesson navigation">
                <NavLink to="/tables/structure" className="prev" aria-label="Go to Table structure">
                    ← Table structure
                </NavLink>
                <NavLink to="/tables/colgroup-col" className="next" aria-label="Go to colgroup/col">
                    Next: colgroup and col →
                </NavLink>
            </nav>

            <div className="backTop">
                <a href="#top">Back to top ↑</a>
            </div>
        </Styled.Page>
    );
}
