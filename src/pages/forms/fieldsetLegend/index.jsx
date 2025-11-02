// src/pages/forms/fieldsetLegend/index.jsx
import React, { useEffect } from "react";
import { Styled } from "./styled";
import { NavLink } from "react-router-dom";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";

/*
  Fieldset + Legend — Group related controls with a built-in accessible name.

  What this lesson covers:
  - Why group controls (semantics + accessibility + keyboard nav)
  - Correct structure of <fieldset> and <legend>
  - Practical patterns: contact info, shipping/billing, payment, preferences
  - Labeling: visible vs visually hidden legends
  - Nested groups and name scoping for radios/checkboxes
  - Disabled groups and error/hint messaging
  - ARIA notes: when (not) to use role="group" / aria-labelledby
  - Browser quirks and CSS tips for clean, modern styling
  - Monaco playground (LAST)
*/

const STARTER_HTML = String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>fieldset + legend — playground</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui,-apple-system,Segoe UI,Roboto,sans-serif; }
      form { display: grid; gap: 16px; max-width: 720px; }

      /* Minimal reset */
      fieldset { margin: 0; padding: 12px; border: 1px solid #ccc; border-radius: 10px; }
      legend { padding: 0 6px; font-weight: 600; }
      .row { display: grid; gap: 8px; grid-template-columns: repeat(2,minmax(0,1fr)); }
      .row label { display: grid; gap: 6px; font-size: 13px; }
      input, select { padding: 8px 10px; border-radius: 8px; border: 1px solid #bbb; background: canvas; color: canvastext; }
      .help { font-size: 12px; color: #6b7280; }
      .error { font-size: 12px; color: #dc2626; }

      .visually-hidden {
        position: absolute !important;
        height: 1px; width: 1px;
        overflow: hidden; clip: rect(1px,1px,1px,1px);
        white-space: nowrap; clip-path: inset(50%);
      }
    </style>
  </head>
  <body>
    <form>
      <fieldset>
        <legend>Contact information</legend>
        <div class="row">
          <label>Email
            <input type="email" name="email" autocomplete="email" required>
            <span class="help">We’ll send order updates here.</span>
          </label>
          <label>Phone
            <input type="tel" name="tel" autocomplete="tel">
          </label>
        </div>
      </fieldset>

      <fieldset>
        <legend>Delivery options</legend>
        <label><input type="radio" name="delivery" value="std" checked> Standard (3–5 days)</label>
        <label><input type="radio" name="delivery" value="exp"> Express (1–2 days)</label>
      </fieldset>

      <fieldset disabled>
        <legend>Gift options (temporarily unavailable)</legend>
        <label><input type="checkbox" name="giftwrap"> Gift wrap this order</label>
        <label>Message
          <input type="text" name="giftmsg" maxlength="120" placeholder="Your note">
        </label>
        <div class="help">This group is disabled; controls can’t be focused or submitted.</div>
      </fieldset>

      <button type="submit">Submit</button>
    </form>
  </body>
</html>`;

export default function FieldsetLegend() {
    useEffect(() => {
        document.title = "Forms · <fieldset> + <legend> (Group related controls)";
    }, []);

    return (
        <Styled.Page>
            <header className="pageHeader" id="top">
                <h1>
                    Grouping with <code>&lt;fieldset&gt;</code> + <code>&lt;legend&gt;</code>
                </h1>
                <p className="lede">
                    Use <code>fieldset</code> to group related controls and <code>legend</code> to give that
                    group a name. This improves structure, accessibility, and clarity.
                </p>
            </header>

            <nav className="toc" aria-label="On this page">
                <a href="#why">Why group controls</a>
                <a href="#anatomy">Anatomy</a>
                <a href="#patterns">Common patterns</a>
                <a href="#labels">Labeling & visibility</a>
                <a href="#nested">Nested groups</a>
                <a href="#disabled">Disabled groups</a>
                <a href="#aria">ARIA notes</a>
                <a href="#css">Styling tips</a>
                <a href="#play">Playground</a>
            </nav>

            <section id="why">
                <h2>Why group controls</h2>
                <div className="card">
                    <ul className="bullets">
                        <li>
                            <strong>Context & discoverability:</strong> users quickly understand what a set of
                            fields is for.
                        </li>
                        <li>
                            <strong>Accessibility:</strong> screen readers announce the group name while
                            navigating the fields.
                        </li>
                        <li>
                            <strong>Validation & messaging:</strong> errors or hints can be applied to a group.
                        </li>
                    </ul>
                </div>
            </section>

            <section id="anatomy">
                <h2>Anatomy</h2>

                <Styled.Code role="region" aria-label="Basic structure">
                    <pre>{String.raw`<fieldset>
  <legend>Payment method</legend>
  <label><input type="radio" name="pay" value="card"> Card</label>
  <label><input type="radio" name="pay" value="upi"> UPI</label>
</fieldset>`}</pre>
                </Styled.Code>

                <p className="note">
                    The <code>legend</code> must be the <em>first child</em> of the <code>fieldset</code>.
                    Keep it short and descriptive.
                </p>
            </section>

            <section id="patterns">
                <h2>Common patterns</h2>

                <div className="grid2">
                    <div className="card">
                        <h3>Contact details</h3>
                        <Styled.Code>
                            <pre>{String.raw`<fieldset>
  <legend>Contact</legend>
  <label>Email <input type="email" name="email" autocomplete="email"></label>
  <label>Phone <input type="tel" name="tel" autocomplete="tel"></label>
</fieldset>`}</pre>
                        </Styled.Code>
                    </div>

                    <div className="card">
                        <h3>Shipping vs Billing</h3>
                        <Styled.Code>
                            <pre>{String.raw`<fieldset>
  <legend>Shipping address</legend>
  …
</fieldset>
<fieldset>
  <legend>Billing address</legend>
  <label><input type="checkbox" name="same"> Same as shipping</label>
</fieldset>`}</pre>
                        </Styled.Code>
                    </div>

                    <div className="card">
                        <h3>Preferences</h3>
                        <Styled.Code>
                            <pre>{String.raw`<fieldset>
  <legend>Notifications</legend>
  <label><input type="checkbox" name="news"> Product updates</label>
  <label><input type="checkbox" name="promo"> Offers</label>
</fieldset>`}</pre>
                        </Styled.Code>
                    </div>

                    <div className="card">
                        <h3>Radio groups (single choice)</h3>
                        <Styled.Code>
                            <pre>{String.raw`<fieldset>
  <legend>Delivery speed</legend>
  <label><input type="radio" name="speed" value="std"> Standard</label>
  <label><input type="radio" name="speed" value="exp"> Express</label>
</fieldset>`}</pre>
                        </Styled.Code>
                    </div>
                </div>
            </section>

            <section id="labels">
                <h2>Labeling & visibility</h2>
                <p>
                    You can visually hide a legend while keeping it accessible by applying a
                    “visually-hidden” utility class. Do this when the surrounding UI already shows a clear
                    heading.
                </p>

                <Styled.Code>
                    <pre>{String.raw`<fieldset>
  <legend class="visually-hidden">Credit card</legend>
  <label>Card number <input name="cc-number" inputmode="numeric" autocomplete="cc-number"></label>
  <label>Expiry <input name="cc-exp" placeholder="MM/YY" autocomplete="cc-exp"></label>
</fieldset>`}</pre>
                </Styled.Code>

                <p className="note">
                    Prefer <em>visible</em> legends. Hide only when there is an equivalent on-screen title
                    that would otherwise duplicate content.
                </p>
            </section>

            <section id="nested">
                <h2>Nested groups</h2>
                <p>
                    Nest fieldsets when a subgroup needs its own name. Keep depth minimal to avoid cognitive
                    overload.
                </p>

                <Styled.Code>
                    <pre>{String.raw`<fieldset>
  <legend>Address</legend>

  <label>Line 1 <input name="line1"></label>

  <fieldset>
    <legend>Region</legend>
    <label>City <input name="city"></label>
    <label>State <input name="state"></label>
  </fieldset>
</fieldset>`}</pre>
                </Styled.Code>
            </section>

            <section id="disabled">
                <h2>Disabled groups</h2>
                <p>
                    Add the <code>disabled</code> attribute to a <code>fieldset</code> to disable all its
                    controls at once.
                </p>

                <Styled.Code>
                    <pre>{String.raw`<fieldset disabled>
  <legend>Gift options</legend>
  <label><input type="checkbox" name="wrap"> Gift wrap</label>
  <label>Message <input name="msg"></label>
</fieldset>`}</pre>
                </Styled.Code>
            </section>

            <section id="aria">
                <h2>ARIA notes</h2>
                <ul className="badges">
                    <li>
                        <span className="good">Prefer</span> native <code>fieldset</code> +{" "}
                        <code>legend</code> over ARIA roles.
                    </li>
                    <li>
                        <span className="bad">Avoid</span> replacing them with <code>div</code> +{" "}
                        <code>role="group"</code> unless absolutely necessary (e.g., custom widgets where
                        <code>fieldset</code> isn’t suitable).
                    </li>
                    <li>
                        <span className="good">If needed</span> use <code>aria-labelledby</code> to associate a
                        custom group name.
                    </li>
                </ul>

                <Styled.Code>
                    <pre>{String.raw`<div role="group" aria-labelledby="prefs-title">
  <h3 id="prefs-title">Preferences</h3>
  …
</div>`}</pre>
                </Styled.Code>
            </section>

            <section id="css">
                <h2>Styling tips</h2>
                <div className="card">
                    <ul className="bullets">
                        <li>
                            Remove default borders and re-style to match your design system; keep a clear visual
                            boundary.
                        </li>
                        <li>
                            Keep legends short; long legends wrap awkwardly. For longer text, use a heading above
                            and hide the legend visually.
                        </li>
                        <li>
                            Ensure sufficient contrast and spacing so the group boundary is obvious.
                        </li>
                    </ul>
                </div>

                <Styled.Code>
                    <pre>{String.raw`fieldset {
  margin: 0;
  padding: 12px;
  border-radius: 12px;
  border: 1px solid var(--border, #ccc);
  background: var(--card, #fff);
}
legend {
  font-size: 0.95rem;
  padding: 0 8px;
  font-weight: 600;
}`}</pre>
                </Styled.Code>
            </section>

            {/* LAST: Monaco playground */}
            <section id="play">
                <h2>Try it live</h2>
                <p className="lede">
                    Add or refine <code>fieldset</code> groupings, give each a clear <code>legend</code>, and
                    test with keyboard navigation. Autosaves to this lesson.
                </p>
                <HtmlPlayground
                    storageKey="core-html:forms:fieldset-legend:v1"
                    initialHtml={STARTER_HTML}
                    height={660}
                />
            </section>

            {/* Prev + Next */}
            <nav className="nextPrev" aria-label="Lesson navigation">
                <NavLink to="/forms/inputs-type-matrix" className="prev" aria-label="Go to Inputs: type matrix">
                    ← Inputs: type matrix
                </NavLink>
                <NavLink to="/forms/select-optgroup" className="next" aria-label="Go to Select, option, optgroup">
                    Next: &lt;select&gt;, &lt;option&gt;, &lt;optgroup&gt; →
                </NavLink>
            </nav>

            <div className="backTop"><a href="#top">Back to top ↑</a></div>
        </Styled.Page>
    );
}
