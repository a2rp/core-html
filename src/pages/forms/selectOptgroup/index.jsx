import React, { useEffect } from "react";
import { Styled } from "./styled";
import { NavLink } from "react-router-dom";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";

/**
 * <select>, <option>, <optgroup>
 * - Labeling and name/value semantics
 * - Option text vs value (submission)
 * - Placeholder pattern (disabled, hidden, value="")
 * - Grouping with <optgroup> (and disabled groups)
 * - size, multiple, required, disabled
 * - Keyboard behavior (arrow, type-to-select)
 * - Common pitfalls and accessibility notes
 * - Monaco playground LAST
 */

const STARTER_HTML = String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>&lt;select&gt;, &lt;option&gt;, &lt;optgroup&gt; — core demo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui,-apple-system,Segoe UI,Roboto,sans-serif; }
      .grid { display: grid; gap: 14px; }
      .row { display: grid; gap: 12px; grid-template-columns: 220px 1fr; align-items: start; }
      @media (max-width: 900px) { .row { grid-template-columns: 1fr; } }
      fieldset { border: 1px solid #ccc; border-radius: 12px; padding: 12px; }
      legend { padding: 0 6px; opacity: .85; }
      label { display: block; font-weight: 600; margin-bottom: 6px; }
      select, button, input { font: inherit; padding: 8px 10px; }
      select { min-width: 260px; }
      .muted { color: #6b7280; }
      .note { border-left: 3px solid #0ea5e9; background: color-mix(in oklab, #0ea5e9, transparent 92%); padding: 8px 12px; border-radius: 8px; }
      .ex { border:1px dashed #aaa; padding:10px; border-radius:10px; }
      code { background: #f5f5f5; padding: 0 6px; border-radius: 6px; }
      .two { display: grid; gap: 12px; grid-template-columns: repeat(2, minmax(0,1fr)); }
      @media (max-width: 900px) { .two { grid-template-columns: 1fr; } }
      .warning { color: #dc2626; }
      .ok { color: #16a34a; }
      .k { display:inline-block; border:1px solid #bbb; border-radius: 999px; padding:2px 8px; font-size:12px; }
      .stack { display: grid; gap: 8px; }
      .w { max-width: 760px; }
    </style>
  </head>
  <body>
    <main class="grid w">
      <header>
        <h1>&lt;select&gt;, &lt;option&gt;, &lt;optgroup&gt;</h1>
        <p class="muted">Native dropdown/chooser for predefined values. Submits the <em>option's value</em> for its <code>name</code>.</p>
      </header>

      <section>
        <h2>Baseline: labeled select</h2>
        <div class="row">
          <div>
            <label for="country">Country</label>
            <select id="country" name="country">
              <option value="" disabled selected hidden>Choose a country</option>
              <option value="in">India</option>
              <option value="us">United States</option>
              <option value="de">Germany</option>
            </select>
            <p class="muted">The placeholder option is <code>disabled</code>, <code>selected</code>, and <code>hidden</code> with <code>value=""</code>.</p>
          </div>
          <div class="ex">
            <p><strong>Submission preview (conceptual):</strong></p>
            <pre>name=country, value=&lt;selected option's value&gt;</pre>
          </div>
        </div>
      </section>

      <section>
        <h2>Grouping choices with &lt;optgroup&gt;</h2>
        <div class="row">
          <div>
            <label for="city">City</label>
            <select id="city" name="city">
              <option value="" disabled selected hidden>Pick a city</option>
              <optgroup label="India">
                <option value="blr">Bengaluru</option>
                <option value="mum">Mumbai</option>
                <option value="del">Delhi</option>
              </optgroup>
              <optgroup label="USA">
                <option value="nyc">New York</option>
                <option value="sf">San Francisco</option>
                <option value="sea">Seattle</option>
              </optgroup>
            </select>
          </div>
          <div class="ex">
            <ul class="stack">
              <li><code>&lt;optgroup label="…"&gt;</code> creates a non-selectable header.</li>
              <li>You can add <code>disabled</code> on the group to gray out its options.</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2>Disabled group and disabled options</h2>
        <div class="row">
          <div>
            <label for="flavor">Ice-cream flavor</label>
            <select id="flavor" name="flavor" required>
              <option value="" disabled selected hidden>Choose one</option>
              <optgroup label="Best Sellers">
                <option value="choc">Chocolate</option>
                <option value="van">Vanilla</option>
              </optgroup>
              <optgroup label="Seasonal" disabled>
                <option value="mango">Mango</option>
                <option value="lychee">Lychee</option>
              </optgroup>
              <optgroup label="Limited">
                <option value="rose" disabled>Rose (sold out)</option>
                <option value="pista">Pistachio</option>
              </optgroup>
            </select>
            <p class="muted">With <code>required</code>, the placeholder's empty value prevents accidental submission.</p>
          </div>
          <div class="ex">
            <p><span class="k">Tip</span> If a group is <code>disabled</code>, all its options are non-interactive.</p>
          </div>
        </div>
      </section>

      <section>
        <h2>size and multiple</h2>
        <div class="two">
          <div>
            <label for="tz">Time zone (listbox style)</label>
            <select id="tz" name="tz" size="5">
              <optgroup label="Asia">
                <option value="IST">India (IST)</option>
                <option value="JST">Japan (JST)</option>
                <option value="CST-CHN">China (CST)</option>
              </optgroup>
              <optgroup label="Europe">
                <option value="CET">Central Europe (CET)</option>
                <option value="EET">Eastern Europe (EET)</option>
              </optgroup>
              <optgroup label="America">
                <option value="PST">Pacific (PST)</option>
                <option value="EST">Eastern (EST)</option>
              </optgroup>
            </select>
            <p class="muted">Setting <code>size</code> ≥ 2 renders a listbox-like UI. still only one value submits.</p>
          </div>
          <div>
            <label for="langs">Spoken languages (choose multiple)</label>
            <select id="langs" name="langs" multiple size="6">
              <optgroup label="Indian">
                <option value="hi">Hindi</option>
                <option value="bn">Bengali</option>
                <option value="ta">Tamil</option>
              </optgroup>
              <optgroup label="Global">
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
              </optgroup>
            </select>
            <p class="muted">With <code>multiple</code>, the control submits <em>many</em> values. Server receives multiple entries for the same <code>name</code>.</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Option text vs value</h2>
        <div class="row">
          <div>
            <label for="fruit">Fruit</label>
            <select id="fruit" name="fruit">
              <option value="" disabled selected hidden>Pick fruit</option>
              <option value="ap">Apple</option>
              <option value="bn">Banana</option>
              <option>Dragonfruit (no value)</option>
            </select>
          </div>
          <div class="ex">
            <p>When <code>value</code> is omitted, the <em>text content</em> is submitted. Prefer compact, stable <code>value</code>s.</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Keyboard behavior</h2>
        <ul class="stack">
          <li>Closed dropdown: <span class="k">Alt/Option + ↓</span> opens it (UA-dependent).</li>
          <li>Open listbox (<code>size</code>≥2): use <span class="k">↑/↓</span>, <span class="k">Home/End</span>, and type-ahead to jump.</li>
          <li>Type-to-select searches by visible text in current group scope.</li>
        </ul>
      </section>

      <section>
        <h2>Common pitfalls</h2>
        <ul class="stack">
          <li><span class="warning">Avoid</span> using a non-empty placeholder value; keep it <code>value=""</code> with <code>disabled hidden selected</code>.</li>
          <li><span class="warning">Avoid</span> placing headings/HRs inside <code>&lt;select&gt;</code>; only <code>&lt;option&gt;</code> and <code>&lt;optgroup&gt;</code> are permitted.</li>
          <li><span class="ok">Do</span> make sure each <code>&lt;select&gt;</code> has a programmatic label via <code>&lt;label for=…&gt;</code> or wrapping.</li>
          <li><span class="ok">Do</span> use <code>name</code>—without it, nothing is submitted.</li>
        </ul>
      </section>

      <section>
        <h2>Recipe: placeholder + required</h2>
<pre class="ex"><code>&lt;label for="color"&gt;Favorite color&lt;/label&gt;
&lt;select id="color" name="color" required&gt;
  &lt;option value="" disabled selected hidden&gt;Select one&lt;/option&gt;
  &lt;option value="r"&gt;Red&lt;/option&gt;
  &lt;option value="g"&gt;Green&lt;/option&gt;
  &lt;option value="b"&gt;Blue&lt;/option&gt;
&lt;/select&gt;</code></pre>
        <p class="muted">The empty value prevents accidental submission and triggers native validation.</p>
      </section>

      <footer class="muted">
        Prefer native selects for simple categorical choices. Use custom UI only when requirements exceed native capabilities.
      </footer>
    </main>
  </body>
</html>`;

export default function SelectOptgroup() {
    useEffect(() => {
        document.title = "Forms · <select>, <option>, <optgroup>";
    }, []);

    return (
        <Styled.Page>
            <header className="pageHeader" id="top">
                <h1>
                    <code>&lt;select&gt;</code>, <code>&lt;option&gt;</code>, <code>&lt;optgroup&gt;</code>
                </h1>
                <p className="lede">
                    A native control for choosing from predefined values. It submits the selected{" "}
                    <code>value</code> under the control’s <code>name</code>. Use{" "}
                    <code>&lt;optgroup&gt;</code> to logically group choices.
                </p>
            </header>

            <nav className="toc" aria-label="On this page">
                <a href="#anatomy">Anatomy</a>
                <a href="#placeholder">Placeholder pattern</a>
                <a href="#grouping">Grouping with optgroup</a>
                <a href="#attrs">Attributes</a>
                <a href="#pitfalls">Pitfalls</a>
                <a href="#play">Playground</a>
            </nav>

            <section id="anatomy">
                <h2>Anatomy</h2>
                <div className="grid2 card">
                    <div>
                        <Styled.Code role="region" aria-label="Select anatomy">
                            <pre>{String.raw`<label for="pet">Pet</label>
<select id="pet" name="pet">
  <option value="" disabled selected hidden>Choose a pet</option>
  <optgroup label="Common">
    <option value="dog">Dog</option>
    <option value="cat">Cat</option>
  </optgroup>
  <optgroup label="Exotic">
    <option value="axolotl">Axolotl</option>
  </optgroup>
</select>`}</pre>
                        </Styled.Code>
                    </div>
                    <ul className="bullets">
                        <li><strong>Labeling:</strong> associate with <code>for</code> or wrap the control.</li>
                        <li><strong>Submission:</strong> server receives <code>name=pet</code> and selected <code>value</code>.</li>
                        <li><strong>Text vs value:</strong> if <code>value</code> is missing, option’s text is submitted.</li>
                    </ul>
                </div>
            </section>

            <section id="placeholder">
                <h2>Placeholder pattern</h2>
                <Styled.Code>
                    <pre>{String.raw`<option value="" disabled selected hidden>Select one</option>`}</pre>
                </Styled.Code>
                <p className="note">
                    Keep the placeholder’s <code>value</code> empty. Combine <code>disabled</code>,{" "}
                    <code>selected</code>, and <code>hidden</code> so it can’t be reselected once a real value is chosen.
                </p>
            </section>

            <section id="grouping">
                <h2>Grouping with <code>&lt;optgroup&gt;</code></h2>
                <div className="card">
                    <ul className="bullets">
                        <li>Use <code>label</code> on <code>&lt;optgroup&gt;</code> for a non-interactive header.</li>
                        <li><code>disabled</code> on the group grays out all contained options.</li>
                        <li>Don’t nest arbitrary elements; only <code>&lt;option&gt;</code> inside groups.</li>
                    </ul>
                </div>
            </section>

            <section id="attrs">
                <h2>Key attributes</h2>
                <div className="grid2">
                    <div className="card">
                        <h3>On <code>&lt;select&gt;</code></h3>
                        <ul className="bullets">
                            <li><code>name</code> (required for form submission)</li>
                            <li><code>required</code>, <code>disabled</code></li>
                            <li><code>multiple</code>, <code>size</code></li>
                            <li><code>autocomplete</code> (token-based; UA support varies)</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h3>On <code>&lt;option&gt;</code></h3>
                        <ul className="bullets">
                            <li><code>value</code>, <code>label</code> (label overrides text content for display only)</li>
                            <li><code>selected</code> (initial state), <code>disabled</code></li>
                            <li>Text content is what type-to-select matches against.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="pitfalls">
                <h2>Pitfalls</h2>
                <ul className="badges">
                    <li><span className="bad">Wrong</span> Putting anything other than <code>option</code>/<code>optgroup</code> inside <code>select</code>.</li>
                    <li><span className="bad">Wrong</span> Placeholder with non-empty value, causing accidental submissions.</li>
                    <li><span className="good">Good</span> Always include a <code>name</code> and a programmatic label.</li>
                    <li><span className="good">Good</span> Use <code>optgroup</code> for long lists to speed up scanning.</li>
                </ul>
            </section>

            {/* LAST: Monaco playground */}
            <section id="play">
                <h2>Try it live</h2>
                <p className="lede">
                    Edit options, move items into <code>&lt;optgroup&gt;</code>s, try <code>multiple</code> and <code>size</code>, and validate the placeholder recipe.
                    Autosaves to this lesson.
                </p>
                <HtmlPlayground
                    storageKey="core-html:forms:select-optgroup:v1"
                    initialHtml={STARTER_HTML}
                    height={720}
                />
            </section>

            {/* Prev + Next */}
            <nav className="nextPrev" aria-label="Lesson navigation">
                <NavLink to="/forms/fieldset-legend" className="prev" aria-label="Go to Fieldset + Legend">
                    ← Fieldset + Legend
                </NavLink>
                <NavLink to="/forms/textarea" className="next" aria-label="Go to Textarea">
                    Next: Textarea →
                </NavLink>
            </nav>

            <div className="backTop"><a href="#top">Back to top ↑</a></div>
        </Styled.Page>
    );
}
