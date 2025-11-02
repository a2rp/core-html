import{d as l,r,j as e,N as a}from"./index-D3QNcmKe.js";import{H as s}from"./index-CAjihRuM.js";const i={Page:l.main`
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

        .badges {
            display: grid;
            gap: 8px;
            list-style: none;
            padding: 0;
        }
        .badges .bad,
        .badges .good {
            display: inline-block;
            font-size: 12px;
            padding: 2px 8px;
            border-radius: 999px;
            border: 1px solid var(--border);
            margin-right: 6px;
        }
        .badges .bad {
            background: #2b1a1a;
            color: #ffb4b4;
            border-color: #553;
        }
        .badges .good {
            background: #152417;
            color: #b6f3c1;
            border-color: #264a2b;
        }

        details {
            border: 1px solid var(--border);
            border-radius: 10px;
            padding: 8px 10px;
            background: var(--card);
        }
        details + details {
            margin-top: 8px;
        }
        summary {
            cursor: pointer;
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
    `},d=String.raw`<!doctype html>
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
</html>`;function o(){return r.useEffect(()=>{document.title="Forms · <fieldset> + <legend> (Group related controls)"},[]),e.jsxs(i.Page,{children:[e.jsxs("header",{className:"pageHeader",id:"top",children:[e.jsxs("h1",{children:["Grouping with ",e.jsx("code",{children:"<fieldset>"})," + ",e.jsx("code",{children:"<legend>"})]}),e.jsxs("p",{className:"lede",children:["Use ",e.jsx("code",{children:"fieldset"})," to group related controls and ",e.jsx("code",{children:"legend"})," to give that group a name. This improves structure, accessibility, and clarity."]})]}),e.jsxs("nav",{className:"toc","aria-label":"On this page",children:[e.jsx("a",{href:"#why",children:"Why group controls"}),e.jsx("a",{href:"#anatomy",children:"Anatomy"}),e.jsx("a",{href:"#patterns",children:"Common patterns"}),e.jsx("a",{href:"#labels",children:"Labeling & visibility"}),e.jsx("a",{href:"#nested",children:"Nested groups"}),e.jsx("a",{href:"#disabled",children:"Disabled groups"}),e.jsx("a",{href:"#aria",children:"ARIA notes"}),e.jsx("a",{href:"#css",children:"Styling tips"}),e.jsx("a",{href:"#play",children:"Playground"})]}),e.jsxs("section",{id:"why",children:[e.jsx("h2",{children:"Why group controls"}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Context & discoverability:"})," users quickly understand what a set of fields is for."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Accessibility:"})," screen readers announce the group name while navigating the fields."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Validation & messaging:"})," errors or hints can be applied to a group."]})]})})]}),e.jsxs("section",{id:"anatomy",children:[e.jsx("h2",{children:"Anatomy"}),e.jsx(i.Code,{role:"region","aria-label":"Basic structure",children:e.jsx("pre",{children:String.raw`<fieldset>
  <legend>Payment method</legend>
  <label><input type="radio" name="pay" value="card"> Card</label>
  <label><input type="radio" name="pay" value="upi"> UPI</label>
</fieldset>`})}),e.jsxs("p",{className:"note",children:["The ",e.jsx("code",{children:"legend"})," must be the ",e.jsx("em",{children:"first child"})," of the ",e.jsx("code",{children:"fieldset"}),". Keep it short and descriptive."]})]}),e.jsxs("section",{id:"patterns",children:[e.jsx("h2",{children:"Common patterns"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Contact details"}),e.jsx(i.Code,{children:e.jsx("pre",{children:String.raw`<fieldset>
  <legend>Contact</legend>
  <label>Email <input type="email" name="email" autocomplete="email"></label>
  <label>Phone <input type="tel" name="tel" autocomplete="tel"></label>
</fieldset>`})})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Shipping vs Billing"}),e.jsx(i.Code,{children:e.jsx("pre",{children:String.raw`<fieldset>
  <legend>Shipping address</legend>
  …
</fieldset>
<fieldset>
  <legend>Billing address</legend>
  <label><input type="checkbox" name="same"> Same as shipping</label>
</fieldset>`})})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Preferences"}),e.jsx(i.Code,{children:e.jsx("pre",{children:String.raw`<fieldset>
  <legend>Notifications</legend>
  <label><input type="checkbox" name="news"> Product updates</label>
  <label><input type="checkbox" name="promo"> Offers</label>
</fieldset>`})})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Radio groups (single choice)"}),e.jsx(i.Code,{children:e.jsx("pre",{children:String.raw`<fieldset>
  <legend>Delivery speed</legend>
  <label><input type="radio" name="speed" value="std"> Standard</label>
  <label><input type="radio" name="speed" value="exp"> Express</label>
</fieldset>`})})]})]})]}),e.jsxs("section",{id:"labels",children:[e.jsx("h2",{children:"Labeling & visibility"}),e.jsx("p",{children:"You can visually hide a legend while keeping it accessible by applying a “visually-hidden” utility class. Do this when the surrounding UI already shows a clear heading."}),e.jsx(i.Code,{children:e.jsx("pre",{children:String.raw`<fieldset>
  <legend class="visually-hidden">Credit card</legend>
  <label>Card number <input name="cc-number" inputmode="numeric" autocomplete="cc-number"></label>
  <label>Expiry <input name="cc-exp" placeholder="MM/YY" autocomplete="cc-exp"></label>
</fieldset>`})}),e.jsxs("p",{className:"note",children:["Prefer ",e.jsx("em",{children:"visible"})," legends. Hide only when there is an equivalent on-screen title that would otherwise duplicate content."]})]}),e.jsxs("section",{id:"nested",children:[e.jsx("h2",{children:"Nested groups"}),e.jsx("p",{children:"Nest fieldsets when a subgroup needs its own name. Keep depth minimal to avoid cognitive overload."}),e.jsx(i.Code,{children:e.jsx("pre",{children:String.raw`<fieldset>
  <legend>Address</legend>

  <label>Line 1 <input name="line1"></label>

  <fieldset>
    <legend>Region</legend>
    <label>City <input name="city"></label>
    <label>State <input name="state"></label>
  </fieldset>
</fieldset>`})})]}),e.jsxs("section",{id:"disabled",children:[e.jsx("h2",{children:"Disabled groups"}),e.jsxs("p",{children:["Add the ",e.jsx("code",{children:"disabled"})," attribute to a ",e.jsx("code",{children:"fieldset"})," to disable all its controls at once."]}),e.jsx(i.Code,{children:e.jsx("pre",{children:String.raw`<fieldset disabled>
  <legend>Gift options</legend>
  <label><input type="checkbox" name="wrap"> Gift wrap</label>
  <label>Message <input name="msg"></label>
</fieldset>`})})]}),e.jsxs("section",{id:"aria",children:[e.jsx("h2",{children:"ARIA notes"}),e.jsxs("ul",{className:"badges",children:[e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Prefer"})," native ",e.jsx("code",{children:"fieldset"})," +"," ",e.jsx("code",{children:"legend"})," over ARIA roles."]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Avoid"})," replacing them with ",e.jsx("code",{children:"div"})," +"," ",e.jsx("code",{children:'role="group"'})," unless absolutely necessary (e.g., custom widgets where",e.jsx("code",{children:"fieldset"})," isn’t suitable)."]}),e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"If needed"})," use ",e.jsx("code",{children:"aria-labelledby"})," to associate a custom group name."]})]}),e.jsx(i.Code,{children:e.jsx("pre",{children:String.raw`<div role="group" aria-labelledby="prefs-title">
  <h3 id="prefs-title">Preferences</h3>
  …
</div>`})})]}),e.jsxs("section",{id:"css",children:[e.jsx("h2",{children:"Styling tips"}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"Remove default borders and re-style to match your design system; keep a clear visual boundary."}),e.jsx("li",{children:"Keep legends short; long legends wrap awkwardly. For longer text, use a heading above and hide the legend visually."}),e.jsx("li",{children:"Ensure sufficient contrast and spacing so the group boundary is obvious."})]})}),e.jsx(i.Code,{children:e.jsx("pre",{children:String.raw`fieldset {
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
}`})})]}),e.jsxs("section",{id:"play",children:[e.jsx("h2",{children:"Try it live"}),e.jsxs("p",{className:"lede",children:["Add or refine ",e.jsx("code",{children:"fieldset"})," groupings, give each a clear ",e.jsx("code",{children:"legend"}),", and test with keyboard navigation. Autosaves to this lesson."]}),e.jsx(s,{storageKey:"core-html:forms:fieldset-legend:v1",initialHtml:d,height:660})]}),e.jsxs("nav",{className:"nextPrev","aria-label":"Lesson navigation",children:[e.jsx(a,{to:"/forms/inputs-type-matrix",className:"prev","aria-label":"Go to Inputs: type matrix",children:"← Inputs: type matrix"}),e.jsx(a,{to:"/forms/select-optgroup",className:"next","aria-label":"Go to Select, option, optgroup",children:"Next: <select>, <option>, <optgroup> →"})]}),e.jsx("div",{className:"backTop",children:e.jsx("a",{href:"#top",children:"Back to top ↑"})})]})}export{o as default};
