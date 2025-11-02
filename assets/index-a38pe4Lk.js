import{d as l,G as t,j as e,M as v,T as d}from"./index-CQ_xjxjH.js";const f="1080px",g={Wrapper:l.div`
        padding: var(--space-6);
        max-width: ${f};
        margin: 0 auto;
        color: var(--text);

        h1 {
            margin-bottom: 30px;
        }

        fieldset {
            padding: var(--space-4);
            margin: 50px 0;
            border: 1px solid var(--border);
            border-radius: var(--radius-md);
            background: var(--card);
            box-shadow: var(--shadow-sm);

            legend {
                padding: 0 var(--space-4);
                font-size: 16px;
                color: var(--primary);
                background: var(--card);
                border-radius: var(--radius-sm);
            }

            .para {
                display: block;
                margin-bottom: var(--space-4);
                max-width: 900px;
                color: var(--text);

                p {
                    margin-bottom: 15px;
                }
                ul {
                    margin-left: 15px;
                    margin-bottom: 15px;
                }
            }
        }
    `},a=l.div`
    display: flex;
    gap: 15px;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    border-bottom: 1px solid var(--border);
    transition: background 160ms ease;

    &:hover {
        background-color: var(--surface);
    }
`,s=l.div`
    flex: 0 0 80px;
    white-space: nowrap;
    color: var(--text-muted);
`,n=l.div`
    display: flex;
    align-items: center;
    gap: 15px;
    color: var(--text);

    a {
        color: var(--text);
        overflow-wrap: anywhere;
        word-break: break-word;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
        &:focus-visible {
            outline: var(--focus-ring);
            border-radius: var(--radius-sm);
        }
    }

    .icon {
        width: 50px;
        height: 50px;
        display: grid;
        place-items: center;
        color: var(--text-muted);
    }
`;function b(r){return t({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"},child:[]}]})(r)}function w(r){return t({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(r)}function y(r){return t({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(r)}function z(r){return t({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},child:[]}]})(r)}function k(r){return t({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"},child:[]}]})(r)}function M(r){return t({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(r)}const H=({width:r=24,height:c=24})=>e.jsxs("svg",{width:r,height:c,viewBox:"0 0 3 2",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M0,0 H3 V2 H0 Z",fill:"#f93"}),e.jsx("path",{d:"M0,0.667 H3 V1.333 H0 Z",fill:"#fff"}),e.jsx("path",{d:"M0,1.333 H3 V2 H0 Z",fill:"#128807"}),e.jsx("circle",{cx:"1.5",cy:"1",r:"0.2",fill:"#008"})]}),V=()=>{function r(x){try{const p=new Date(x),m=new Intl.DateTimeFormat("en-US",{month:"short",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1,timeZone:"Asia/Kolkata"}).formatToParts(p),i=j=>{var o;return((o=m.find(u=>u.type===j))==null?void 0:o.value)||""};return`${i("month")} ${i("day")}, ${i("year")} ${i("hour")}:${i("minute")}:${i("second")} hrs`}catch{return"-"}}const c="2025-11-02T21:15:15+05:30",h=r(c);return e.jsx(e.Fragment,{children:e.jsxs(g.Wrapper,{children:[e.jsxs("h3",{children:["HTML [Hypertext Markup Language] Notes - last updated: ",e.jsx("time",{dateTime:c,children:h})]}),e.jsxs("fieldset",{children:[e.jsx("legend",{children:"About Project"}),e.jsxs("div",{className:"para",children:[e.jsx("h2",{children:"HTML Lab — Core HTML Only"}),e.jsxs("p",{children:["This is an interactive, no-nonsense reference for ",e.jsx("strong",{children:"core HTML"}),"-semantics first, zero fancy frameworks. Every topic stays small and practical so you can learn, try, and move on."]}),e.jsx("p",{children:"What to expect:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Clean explanations of tags, attributes, and patterns you actually use daily."}),e.jsx("li",{children:"Monaco-powered editor (soon) with live preview to experiment safely."}),e.jsx("li",{children:"Built-in a11y and performance nudges (labels, alt text, lazy images, etc.)."}),e.jsx("li",{children:"Copy-ready snippets kept minimal and standards-compliant."})]}),e.jsxs("p",{children:["Philosophy:",e.jsx("em",{children:"Use the right element, keep structure meaningful, enhance progressively."}),"Links are for navigation, buttons are for actions, and tables are for data—simple rules, fewer bugs."]}),e.jsx("p",{children:"Start with the foundations, skim the landmarks, then practice forms and media. Small reps beat big theory. Let's ship solid HTML."})]})]}),e.jsxs("fieldset",{children:[e.jsx("legend",{children:"About Developer"}),e.jsxs("div",{className:"aboutDeveloper",children:[e.jsxs(a,{children:[e.jsx(s,{children:"Name"}),e.jsxs(n,{children:["Ashish Ranjan",e.jsx("div",{className:"icon",children:e.jsx(M,{size:20})})]})]}),e.jsxs(a,{children:[e.jsx(s,{children:"Phone"}),e.jsxs(n,{children:[e.jsx("a",{href:"tel:+918123747965",children:"+91 8123747965"}),e.jsx("div",{className:"icon",children:e.jsx(k,{size:20})})]})]}),e.jsxs(a,{children:[e.jsx(s,{children:"Email"}),e.jsxs(n,{children:[e.jsx("a",{href:"mailto:ash.ranjan09@gmail.com",children:"ash.ranjan09@gmail.com"}),e.jsx("div",{className:"icon",children:e.jsx(v,{size:20})})]})]}),e.jsxs(a,{children:[e.jsx(s,{children:"Nationality"}),e.jsxs(n,{children:["The Republic of India",e.jsx("div",{className:"icon",children:e.jsx(H,{})})]})]}),e.jsxs(a,{children:[e.jsx(s,{children:"Website"}),e.jsxs(n,{children:[e.jsx("a",{href:"https://www.ashishranjan.net/",target:"_blank",rel:"noopener noreferrer",children:"https://www.ashishranjan.net/"}),e.jsx("div",{className:"icon",children:e.jsx(d,{size:20})})]})]}),e.jsxs(a,{children:[e.jsx(s,{children:"Old Website"}),e.jsxs(n,{children:[e.jsx("a",{href:"http://www.ashishranjan.in/",target:"_blank",rel:"noopener noreferrer",children:"http://www.ashishranjan.in/"}),e.jsx("div",{className:"icon",children:e.jsx(d,{size:20})})]})]}),e.jsxs(a,{children:[e.jsx(s,{children:"Facebook"}),e.jsxs(n,{children:[e.jsx("a",{href:"https://www.facebook.com/theash.ashish/",target:"_blank",rel:"noopener noreferrer",children:"facebook.com/theash.ashish/"}),e.jsx("div",{className:"icon",children:e.jsx(b,{size:20})})]})]}),e.jsxs(a,{children:[e.jsx(s,{children:"LinkedIn"}),e.jsxs(n,{children:[e.jsx("a",{href:"https://www.linkedin.com/in/aashishranjan/",target:"_blank",rel:"noopener noreferrer",children:"linkedin.com/in/aashishranjan/"}),e.jsx("div",{className:"icon",children:e.jsx(y,{size:20})})]})]}),e.jsxs(a,{children:[e.jsx(s,{children:"YouTube"}),e.jsxs(n,{children:[e.jsx("a",{href:"https://www.youtube.com/channel/UCLHIBQeFQIxmRveVAjLvlbQ",target:"_blank",rel:"noopener noreferrer",children:"youtube.com/channel/UCLHIBQeFQIxmRveVAjLvlbQ"}),e.jsx("div",{className:"icon",children:e.jsx(z,{size:20})})]})]}),e.jsxs(a,{children:[e.jsx(s,{children:"GitHub"}),e.jsxs(n,{children:[e.jsx("a",{href:"https://github.com/a2rp",target:"_blank",rel:"noopener noreferrer",children:"github.com/a2rp"}),e.jsx("div",{className:"icon",children:e.jsx(w,{size:20})})]})]})]})]})]})})};export{V as default};
