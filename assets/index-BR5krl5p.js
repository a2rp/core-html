import{d as l,r as a,j as e,N as i}from"./index-D3QNcmKe.js";import{H as n}from"./index-CAjihRuM.js";const s={Page:l.main`
        display: grid;
        gap: 16px;
        padding: 16px;
        max-width: 1100px;
        margin: 0 auto;

        .pageHeader {
            display: grid;
            gap: 8px;
        }
        .lede {
            color: var(--text-muted);
            font-size: 15px;
        }

        .toc {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            padding: 8px;
            border: 1px solid var(--border);
            border-radius: 12px;
            background: var(--surface);
        }
        .toc a {
            border: 1px solid var(--border);
            background: var(--card);
            color: var(--text);
            padding: 6px 10px;
            border-radius: 999px;
            font-size: 13px;
            text-decoration: none;
        }

        .grid2 {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
        }
        @media (max-width: 900px) {
            .grid2 {
                grid-template-columns: 1fr;
            }
        }

        .card {
            border: 1px solid var(--border);
            background: var(--card);
            border-radius: 12px;
            padding: 12px;
        }

        .bullets {
            padding-left: 18px;
            line-height: 1.8;
        }
        .bullets code {
            font-size: 92%;
        }

        .note {
            font-size: 14px;
            color: var(--text-muted);
            border-left: 3px solid var(--primary);
            padding: 8px 12px;
            background: color-mix(in oklab, var(--primary), transparent 92%);
            border-radius: 8px;
            margin-top: 8px;
        }

        .backTop {
            text-align: right;
            font-size: 13px;
        }
        .backTop a {
            color: var(--text-muted);
            text-decoration: none;
        }

        pre,
        code {
            font-family: ui-monospace, SFMono-Regular, Menlo, Consolas,
                monospace;
        }
        pre {
            font-size: 0.92rem;
            line-height: 1.5;
            margin: 0;
        }

        .nextPrev {
            margin-top: 24px;
            display: flex;
            justify-content: space-between;
            gap: 12px;
        }
        .nextPrev a {
            color: var(--primary);
            text-decoration: none;
            border: 1px solid var(--surface-400, #333);
            padding: 8px 12px;
            border-radius: 10px;
        }
        .nextPrev a:hover {
            background: var(--surface);
        }
    `,Code:l.div`
        position: relative;
        border: 1px solid var(--surface-400, #333);
        background: var(--surface-200, rgba(255, 255, 255, 0.02));
        border-radius: 10px;
        overflow: hidden;

        pre {
            margin: 0;
            padding: 12px 14px;
            font-family: Consolas, Monaco, "SFMono-Regular", Menlo, monospace;
            font-size: 0.9rem;
            line-height: 1.5;
            color: var(--text);
            overflow-x: auto;
            white-space: pre;
            -webkit-overflow-scrolling: touch;
        }
    `},t=String.raw`<!doctype html>
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
</html>`;function r(){return a.useEffect(()=>{document.title="Forms · Autocomplete tokens"},[]),e.jsxs(s.Page,{children:[e.jsxs("header",{className:"pageHeader",id:"top",children:[e.jsx("h1",{children:"Autocomplete tokens"}),e.jsx("p",{className:"lede",children:"Tell the browser what each field means so password managers and autofill can help users. Tokens reduce friction and errors, and they’re privacy-aware when used correctly."})]}),e.jsxs("nav",{className:"toc","aria-label":"On this page",children:[e.jsx("a",{href:"#why",children:"Why it matters"}),e.jsx("a",{href:"#basics",children:"Basics & syntax"}),e.jsx("a",{href:"#catalog",children:"Token catalog"}),e.jsx("a",{href:"#sections",children:"Shipping vs billing"}),e.jsx("a",{href:"#passwords",children:"Usernames & passwords"}),e.jsx("a",{href:"#otp",children:"One-time code"}),e.jsx("a",{href:"#addresses",children:"Addresses"}),e.jsx("a",{href:"#when-off",children:"When to turn it off"}),e.jsx("a",{href:"#play",children:"Playground"})]}),e.jsxs("section",{id:"why",children:[e.jsx("h2",{children:"Why it matters"}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"Faster completion, fewer typos, better mobile UX."}),e.jsx("li",{children:"Assistive tech understands intent: name vs address vs payment."}),e.jsx("li",{children:"Password managers can propose strong passwords and save them to the right site."})]})})]}),e.jsxs("section",{id:"basics",children:[e.jsx("h2",{children:"Basics & syntax"}),e.jsx(s.Code,{role:"region","aria-label":"Autocomplete syntax",children:e.jsx("pre",{children:String.raw`<!-- Single token -->
<input autocomplete="email">

<!-- Multiple tokens (order doesn't matter, but keep them readable) -->
<input autocomplete="section-billing address-line1">

<!-- Global switch (form-level): on | off -->
<form autocomplete="on">…</form>`})}),e.jsxs("p",{className:"note",children:["Keep ",e.jsx("code",{children:"name"})," and ",e.jsx("code",{children:"id"})," meaningful; tokens complement, not replace, good form markup."]})]}),e.jsxs("section",{id:"catalog",children:[e.jsx("h2",{children:"Token catalog (common ones)"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Identity"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("code",{children:"name"}),", ",e.jsx("code",{children:"given-name"}),", ",e.jsx("code",{children:"additional-name"}),", ",e.jsx("code",{children:"family-name"})]}),e.jsxs("li",{children:[e.jsx("code",{children:"email"}),", ",e.jsx("code",{children:"username"}),", ",e.jsx("code",{children:"nickname"})]}),e.jsxs("li",{children:[e.jsx("code",{children:"organization"}),", ",e.jsx("code",{children:"organization-title"})]}),e.jsxs("li",{children:[e.jsx("code",{children:"sex"}),", ",e.jsx("code",{children:"language"}),", ",e.jsx("code",{children:"url"}),", ",e.jsx("code",{children:"photo"})]})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Auth & security"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("code",{children:"current-password"}),", ",e.jsx("code",{children:"new-password"})]}),e.jsx("li",{children:e.jsx("code",{children:"one-time-code"})})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Phones"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("code",{children:"tel"}),", ",e.jsx("code",{children:"tel-country-code"}),", ",e.jsx("code",{children:"tel-national"})]}),e.jsxs("li",{children:[e.jsx("code",{children:"tel-area-code"}),", ",e.jsx("code",{children:"tel-local"}),", ",e.jsx("code",{children:"tel-local-prefix"}),", ",e.jsx("code",{children:"tel-local-suffix"}),", ",e.jsx("code",{children:"tel-extension"})]})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Addresses"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("code",{children:"street-address"})," or split into ",e.jsx("code",{children:"address-line1"}),"/",e.jsx("code",{children:"2"}),"/",e.jsx("code",{children:"3"})]}),e.jsxs("li",{children:[e.jsx("code",{children:"address-level4"})," … ",e.jsx("code",{children:"address-level1"})," (often: 2 = city, 1 = state/region)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"postal-code"}),", ",e.jsx("code",{children:"country"})," (ISO code), ",e.jsx("code",{children:"country-name"})]}),e.jsxs("li",{children:[e.jsx("code",{children:"shipping"}),"/",e.jsx("code",{children:"billing"})," via ",e.jsx("code",{children:"section-*"})]})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Payment"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("code",{children:"cc-name"}),", ",e.jsx("code",{children:"cc-number"})]}),e.jsxs("li",{children:[e.jsx("code",{children:"cc-exp"}),", ",e.jsx("code",{children:"cc-exp-month"}),", ",e.jsx("code",{children:"cc-exp-year"})]}),e.jsxs("li",{children:[e.jsx("code",{children:"cc-csc"}),", ",e.jsx("code",{children:"cc-type"}),", ",e.jsx("code",{children:"transaction-amount"}),", ",e.jsx("code",{children:"currency"})," (if applicable)"]})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Dates"}),e.jsx("ul",{className:"bullets",children:e.jsxs("li",{children:[e.jsx("code",{children:"bday"}),", ",e.jsx("code",{children:"bday-day"}),", ",e.jsx("code",{children:"bday-month"}),", ",e.jsx("code",{children:"bday-year"})]})})]})]}),e.jsx("p",{className:"note",children:"Token support varies slightly by browser, but these are widely implemented."})]}),e.jsxs("section",{id:"sections",children:[e.jsx("h2",{children:"Shipping vs billing"}),e.jsxs("p",{children:["When a page has multiple addresses, prefix related controls with a ",e.jsx("code",{children:"section-*"})," token. Common examples:",e.jsx("code",{children:"section-shipping"})," and ",e.jsx("code",{children:"section-billing"}),". This helps user agents keep the two address books separate."]}),e.jsx(s.Code,{children:e.jsx("pre",{children:String.raw`<input autocomplete="section-shipping address-line1">
<input autocomplete="section-billing address-line1">`})})]}),e.jsxs("section",{id:"passwords",children:[e.jsx("h2",{children:"Usernames & passwords"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["Sign-in forms: ",e.jsx("code",{children:"username"})," + ",e.jsx("code",{children:"current-password"}),"."]}),e.jsxs("li",{children:["Sign-up / change password: ",e.jsx("code",{children:"username"})," + ",e.jsx("code",{children:"new-password"})," (twice if confirm)."]}),e.jsx("li",{children:"Don’t mask non-password fields; keep labels explicit for managers to detect fields."})]})]}),e.jsxs("section",{id:"otp",children:[e.jsx("h2",{children:"One-time code (OTP)"}),e.jsxs("p",{children:["Use ",e.jsx("code",{children:'autocomplete="one-time-code"'})," on the OTP input. On mobile, SMS messages that include the domain can auto-fill the code."]})]}),e.jsxs("section",{id:"addresses",children:[e.jsx("h2",{children:"Address details"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("code",{children:"country"})," expects a two-letter ISO code (e.g., IN, US). ",e.jsx("code",{children:"country-name"})," is the localized name."]}),e.jsxs("li",{children:[e.jsx("code",{children:"address-level*"})," is region-agnostic. A common mapping is 1 = state/region, 2 = city."]}),e.jsxs("li",{children:["Provide either ",e.jsx("code",{children:"street-address"})," as a single field, or split into ",e.jsx("code",{children:"address-line1/2/3"}),", not both unless you need both UX options."]})]})]}),e.jsxs("section",{id:"when-off",children:[e.jsx("h2",{children:"When to turn autocomplete off"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["Very sensitive contexts on shared/public devices: use ",e.jsx("code",{children:'autocomplete="off"'})," on ",e.jsx("em",{children:"specific"})," fields."]}),e.jsx("li",{children:"Don’t disable autofill globally unless you have a strong reason; it harms usability."})]})]}),e.jsxs("section",{id:"play",children:[e.jsx("h2",{children:"Try it live"}),e.jsx("p",{className:"lede",children:"Tweak tokens, try section-shipping/billing, and check how your browser’s autofill reacts."}),e.jsx(n,{storageKey:"core-html:forms:autocomplete-tokens:v1",initialHtml:t,height:760})]}),e.jsxs("nav",{className:"nextPrev","aria-label":"Lesson navigation",children:[e.jsx(i,{to:"/forms/validation-hints",className:"prev","aria-label":"Go to Validation hints",children:"← Validation hints"}),e.jsx(i,{to:"/forms/input-helpers",className:"next","aria-label":"Go to inputmode & enterkeyhint",children:"Next: inputmode & enterkeyhint →"})]}),e.jsx("div",{className:"backTop",children:e.jsx("a",{href:"#top",children:"Back to top ↑"})})]})}export{r as default};
