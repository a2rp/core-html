import React, { useEffect } from "react";
import { Styled } from "./styled";
import { NavLink } from "react-router-dom";
import HtmlPlayground from "../../../components/monaco/htmlPlayground";

/**
 * Forms · Autocomplete tokens
 * - Why autocomplete matters (UX, a11y, fewer errors)
 * - Token catalog (names, addresses, auth, phone, payment, dates)
 * - Sectioning: shipping vs billing (section-*)
 * - Username & passwords (current-password vs new-password)
 * - One-time codes (OTP)
 * - Country vs country-name, address-level1…4
 * - When NOT to use autocomplete
 * - Live examples + Monaco playground LAST
 */

const STARTER_HTML = String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>autocomplete tokens — live form</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; font: 14px/1.6 system-ui, -apple-system, Segoe UI, Roboto, sans-serif; padding: 22px; }
      .grid { display: grid; gap: 14px; }
      fieldset { border: 1px solid #ccc; border-radius: 12px; padding: 12px; }
      legend { font-weight: 600; padding: 0 6px; }
      .row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
      .row3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; }
      .row > label, .row3 > label, .block > label { display: grid; gap: 6px; }
      input, select { padding: 8px 10px; border: 1px solid #bbb; border-radius: 10px; background: canvas; color: canvastext; }
      small.hint { color: #6b7280; }
      .muted { color: #6b7280; }
      .note { border-left: 3px solid #3b82f6; background: color-mix(in oklab, #3b82f6, transparent 90%); padding: 8px 10px; border-radius: 8px; }
      .actions { display: flex; gap: 10px; }
      button { padding: 9px 14px; border-radius: 10px; border: 1px solid #888; background: #f5f5f5; }
      @media (max-width: 900px) {
        .row, .row3 { grid-template-columns: 1fr; }
      }
    </style>
  </head>
  <body>
    <main class="grid">
      <header>
        <h1>Autocomplete tokens — demo form</h1>
        <p class="muted">Proper tokens help browsers and password managers fill forms safely and correctly.</p>
      </header>

      <!-- ── Account ───────────────────────────────────────────────────────── -->
      <form class="grid" action="#" method="post" autocomplete="on">
        <fieldset>
          <legend>Account</legend>
          <div class="row">
            <label>
              Username
              <input type="text" name="username" autocomplete="username" required />
            </label>
            <label>
              Email
              <input type="email" name="email" autocomplete="email" required />
            </label>
          </div>

          <div class="row">
            <label>
              Current password
              <input type="password" name="current_password" autocomplete="current-password" />
              <small class="hint">Use on sign-in forms or when confirming changes.</small>
            </label>
            <label>
              New password
              <input type="password" name="new_password" autocomplete="new-password" />
              <small class="hint">Use on sign-up or password change flows.</small>
            </label>
          </div>

          <div class="row">
            <label>
              One-time code (OTP)
              <input type="text" inputmode="numeric" pattern="[0-9]*" name="otp" autocomplete="one-time-code" />
              <small class="hint">Lets SMS/email codes auto-fill on supported devices.</small>
            </label>
          </div>
        </fieldset>

        <!-- ── Person ──────────────────────────────────────────────────────── -->
        <fieldset>
          <legend>Personal</legend>
          <div class="row">
            <label>
              Full name
              <input type="text" name="full_name" autocomplete="name" />
            </label>
            <label>
              Given name
              <input type="text" name="first_name" autocomplete="given-name" />
            </label>
          </div>

          <div class="row">
            <label>
              Additional name (middle)
              <input type="text" name="middle_name" autocomplete="additional-name" />
            </label>
            <label>
              Family name (surname)
              <input type="text" name="last_name" autocomplete="family-name" />
            </label>
          </div>

          <div class="row">
            <label>
              Phone (national)
              <input type="tel" name="tel" autocomplete="tel-national" />
            </label>
            <label>
              Phone extension
              <input type="text" name="tel_ext" autocomplete="tel-extension" />
            </label>
          </div>
        </fieldset>

        <!-- ── Address: Shipping (section-shipping) ────────────────────────── -->
        <fieldset>
          <legend>Shipping address</legend>
          <p class="note">Use <code>section-shipping</code> (or <code>section-billing</code>) to separate multiple addresses.</p>

          <div class="block">
            <label>
              Organization (optional)
              <input type="text" name="org_ship" autocomplete="organization section-shipping" />
            </label>
          </div>

          <div class="row">
            <label>
              Country code (ISO 3166-1 alpha-2)
              <input type="text" name="country_ship" maxlength="2" autocomplete="country section-shipping" />
              <small class="hint">Example: IN, US, GB</small>
            </label>
            <label>
              Country name
              <input type="text" name="country_name_ship" autocomplete="country-name section-shipping" />
            </label>
          </div>

          <div class="block">
            <label>
              Street address (single field)
              <input type="text" name="street_ship" autocomplete="street-address section-shipping" />
              <small class="hint">Or split into address-line1/2/3 below.</small>
            </label>
          </div>

          <div class="row3">
            <label>
              Address line 1
              <input type="text" name="addr1_ship" autocomplete="address-line1 section-shipping" />
            </label>
            <label>
              Address line 2
              <input type="text" name="addr2_ship" autocomplete="address-line2 section-shipping" />
            </label>
            <label>
              Address line 3
              <input type="text" name="addr3_ship" autocomplete="address-line3 section-shipping" />
            </label>
          </div>

          <div class="row3">
            <label>
              City
              <input type="text" name="city_ship" autocomplete="address-level2 section-shipping" />
              <small class="hint">Common mapping: level2 = city, level1 = state/region.</small>
            </label>
            <label>
              State/Region
              <input type="text" name="state_ship" autocomplete="address-level1 section-shipping" />
            </label>
            <label>
              Postal code
              <input type="text" name="zip_ship" autocomplete="postal-code section-shipping" />
            </label>
          </div>
        </fieldset>

        <!-- ── Address: Billing (separate section) ─────────────────────────── -->
        <fieldset>
          <legend>Billing address</legend>
          <div class="row3">
            <label>
              City
              <input type="text" name="city_bill" autocomplete="address-level2 section-billing" />
            </label>
            <label>
              State/Region
              <input type="text" name="state_bill" autocomplete="address-level1 section-billing" />
            </label>
            <label>
              Postal code
              <input type="text" name="zip_bill" autocomplete="postal-code section-billing" />
            </label>
          </div>
        </fieldset>

        <!-- ── Payment (minimal) ───────────────────────────────────────────── -->
        <fieldset>
          <legend>Payment</legend>
          <div class="row">
            <label>
              Cardholder name
              <input type="text" name="cc_name" autocomplete="cc-name" />
            </label>
            <label>
              Card number
              <input type="text" inputmode="numeric" name="cc_number" autocomplete="cc-number" />
            </label>
          </div>

          <div class="row3">
            <label>
              Expiry month (MM)
              <input type="text" inputmode="numeric" pattern="[0-9]*" name="cc_exp_month" autocomplete="cc-exp-month" />
            </label>
            <label>
              Expiry year (YYYY)
              <input type="text" inputmode="numeric" pattern="[0-9]*" name="cc_exp_year" autocomplete="cc-exp-year" />
            </label>
            <label>
              Security code (CVC/CVV)
              <input type="text" inputmode="numeric" pattern="[0-9]*" name="cc_csc" autocomplete="cc-csc" />
            </label>
          </div>
        </fieldset>

        <div class="actions">
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        </div>

        <p class="muted">Tip: For public/shared machines, consider <code>autocomplete="off"</code> for sensitive fields.</p>
      </form>
    </main>
  </body>
</html>`;

export default function AutocompleteTokens() {
    useEffect(() => {
        document.title = "Forms · Autocomplete tokens";
    }, []);

    return (
        <Styled.Page>
            <header className="pageHeader" id="top">
                <h1>Autocomplete tokens</h1>
                <p className="lede">
                    Tell the browser what each field means so password managers and autofill can help users.
                    Tokens reduce friction and errors, and they’re privacy-aware when used correctly.
                </p>
            </header>

            <nav className="toc" aria-label="On this page">
                <a href="#why">Why it matters</a>
                <a href="#basics">Basics & syntax</a>
                <a href="#catalog">Token catalog</a>
                <a href="#sections">Shipping vs billing</a>
                <a href="#passwords">Usernames & passwords</a>
                <a href="#otp">One-time code</a>
                <a href="#addresses">Addresses</a>
                <a href="#when-off">When to turn it off</a>
                <a href="#play">Playground</a>
            </nav>

            <section id="why">
                <h2>Why it matters</h2>
                <div className="card">
                    <ul className="bullets">
                        <li>Faster completion, fewer typos, better mobile UX.</li>
                        <li>Assistive tech understands intent: name vs address vs payment.</li>
                        <li>Password managers can propose strong passwords and save them to the right site.</li>
                    </ul>
                </div>
            </section>

            <section id="basics">
                <h2>Basics & syntax</h2>
                <Styled.Code role="region" aria-label="Autocomplete syntax">
                    <pre>{String.raw`<!-- Single token -->
<input autocomplete="email">

<!-- Multiple tokens (order doesn't matter, but keep them readable) -->
<input autocomplete="section-billing address-line1">

<!-- Global switch (form-level): on | off -->
<form autocomplete="on">…</form>`}</pre>
                </Styled.Code>
                <p className="note">
                    Keep <code>name</code> and <code>id</code> meaningful; tokens complement, not replace, good form markup.
                </p>
            </section>

            <section id="catalog">
                <h2>Token catalog (common ones)</h2>
                <div className="grid2">
                    <div className="card">
                        <h3>Identity</h3>
                        <ul className="bullets">
                            <li><code>name</code>, <code>given-name</code>, <code>additional-name</code>, <code>family-name</code></li>
                            <li><code>email</code>, <code>username</code>, <code>nickname</code></li>
                            <li><code>organization</code>, <code>organization-title</code></li>
                            <li><code>sex</code>, <code>language</code>, <code>url</code>, <code>photo</code></li>
                        </ul>
                    </div>
                    <div className="card">
                        <h3>Auth & security</h3>
                        <ul className="bullets">
                            <li><code>current-password</code>, <code>new-password</code></li>
                            <li><code>one-time-code</code></li>
                        </ul>
                    </div>
                    <div className="card">
                        <h3>Phones</h3>
                        <ul className="bullets">
                            <li><code>tel</code>, <code>tel-country-code</code>, <code>tel-national</code></li>
                            <li><code>tel-area-code</code>, <code>tel-local</code>, <code>tel-local-prefix</code>, <code>tel-local-suffix</code>, <code>tel-extension</code></li>
                        </ul>
                    </div>
                    <div className="card">
                        <h3>Addresses</h3>
                        <ul className="bullets">
                            <li><code>street-address</code> or split into <code>address-line1</code>/<code>2</code>/<code>3</code></li>
                            <li><code>address-level4</code> … <code>address-level1</code> (often: 2 = city, 1 = state/region)</li>
                            <li><code>postal-code</code>, <code>country</code> (ISO code), <code>country-name</code></li>
                            <li><code>shipping</code>/<code>billing</code> via <code>section-*</code></li>
                        </ul>
                    </div>
                    <div className="card">
                        <h3>Payment</h3>
                        <ul className="bullets">
                            <li><code>cc-name</code>, <code>cc-number</code></li>
                            <li><code>cc-exp</code>, <code>cc-exp-month</code>, <code>cc-exp-year</code></li>
                            <li><code>cc-csc</code>, <code>cc-type</code>, <code>transaction-amount</code>, <code>currency</code> (if applicable)</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h3>Dates</h3>
                        <ul className="bullets">
                            <li><code>bday</code>, <code>bday-day</code>, <code>bday-month</code>, <code>bday-year</code></li>
                        </ul>
                    </div>
                </div>
                <p className="note">Token support varies slightly by browser, but these are widely implemented.</p>
            </section>

            <section id="sections">
                <h2>Shipping vs billing</h2>
                <p>
                    When a page has multiple addresses, prefix related controls with a <code>section-*</code> token. Common examples:
                    <code>section-shipping</code> and <code>section-billing</code>. This helps user agents keep the two address books separate.
                </p>
                <Styled.Code>
                    <pre>{String.raw`<input autocomplete="section-shipping address-line1">
<input autocomplete="section-billing address-line1">`}</pre>
                </Styled.Code>
            </section>

            <section id="passwords">
                <h2>Usernames & passwords</h2>
                <ul className="bullets">
                    <li>Sign-in forms: <code>username</code> + <code>current-password</code>.</li>
                    <li>Sign-up / change password: <code>username</code> + <code>new-password</code> (twice if confirm).</li>
                    <li>Don’t mask non-password fields; keep labels explicit for managers to detect fields.</li>
                </ul>
            </section>

            <section id="otp">
                <h2>One-time code (OTP)</h2>
                <p>
                    Use <code>autocomplete="one-time-code"</code> on the OTP input. On mobile, SMS messages that include the domain can auto-fill the code.
                </p>
            </section>

            <section id="addresses">
                <h2>Address details</h2>
                <ul className="bullets">
                    <li><code>country</code> expects a two-letter ISO code (e.g., IN, US). <code>country-name</code> is the localized name.</li>
                    <li><code>address-level*</code> is region-agnostic. A common mapping is 1 = state/region, 2 = city.</li>
                    <li>Provide either <code>street-address</code> as a single field, or split into <code>address-line1/2/3</code>, not both unless you need both UX options.</li>
                </ul>
            </section>

            <section id="when-off">
                <h2>When to turn autocomplete off</h2>
                <ul className="bullets">
                    <li>Very sensitive contexts on shared/public devices: use <code>autocomplete="off"</code> on <em>specific</em> fields.</li>
                    <li>Don’t disable autofill globally unless you have a strong reason; it harms usability.</li>
                </ul>
            </section>

            {/* LAST: Monaco playground */}
            <section id="play">
                <h2>Try it live</h2>
                <p className="lede">
                    Tweak tokens, try section-shipping/billing, and check how your browser’s autofill reacts.
                </p>
                <HtmlPlayground
                    storageKey="core-html:forms:autocomplete-tokens:v1"
                    initialHtml={STARTER_HTML}
                    height={760}
                />
            </section>

            {/* Prev + Next */}
            <nav className="nextPrev" aria-label="Lesson navigation">
                <NavLink to="/forms/validation-hints" className="prev" aria-label="Go to Validation hints">
                    ← Validation hints
                </NavLink>
                <NavLink to="/forms/input-helpers" className="next" aria-label="Go to inputmode & enterkeyhint">
                    Next: inputmode &amp; enterkeyhint →
                </NavLink>
            </nav>

            <div className="backTop"><a href="#top">Back to top ↑</a></div>
        </Styled.Page>
    );
}
