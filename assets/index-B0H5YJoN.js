import{d as t,j as e,F as u,a as f,M as b,T as d,b as v,c as g,e as w,f as y}from"./index-CI_GFZcF.js";const k="1080px",L={Wrapper:t.div`
        padding: var(--space-6);
        max-width: ${k};
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
    `},s=t.div`
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
`,r=t.div`
    flex: 0 0 80px;
    white-space: nowrap;
    color: var(--text-muted);
`,a=t.div`
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
`,H=({width:l=24,height:i=24})=>e.jsxs("svg",{width:l,height:i,viewBox:"0 0 3 2",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M0,0 H3 V2 H0 Z",fill:"#f93"}),e.jsx("path",{d:"M0,0.667 H3 V1.333 H0 Z",fill:"#fff"}),e.jsx("path",{d:"M0,1.333 H3 V2 H0 Z",fill:"#128807"}),e.jsx("circle",{cx:"1.5",cy:"1",r:"0.2",fill:"#008"})]}),N=()=>{function l(h){try{const x=new Date(h),j=new Intl.DateTimeFormat("en-US",{month:"short",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1,timeZone:"Asia/Kolkata"}).formatToParts(x),n=p=>{var o;return((o=j.find(m=>m.type===p))==null?void 0:o.value)||""};return`${n("month")} ${n("day")}, ${n("year")} ${n("hour")}:${n("minute")}:${n("second")} hrs`}catch{return"-"}}const i="2026-09-21T21:58:58+05:30",c=l(i);return e.jsx(e.Fragment,{children:e.jsxs(L.Wrapper,{children:[e.jsxs("h3",{children:["HTML [Hypertext Markup Language] Notes - last updated: ",e.jsx("time",{dateTime:i,children:c})]}),e.jsxs("fieldset",{children:[e.jsx("legend",{children:"About Project"}),e.jsxs("div",{className:"para",children:[e.jsx("h2",{children:"HTML Lab — Core HTML Only"}),e.jsxs("p",{children:["This is an interactive, no-nonsense reference for ",e.jsx("strong",{children:"core HTML"}),"-semantics first, zero fancy frameworks. Every topic stays small and practical so you can learn, try, and move on."]}),e.jsx("p",{children:"What to expect:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Clean explanations of tags, attributes, and patterns you actually use daily."}),e.jsx("li",{children:"Monaco-powered editor (soon) with live preview to experiment safely."}),e.jsx("li",{children:"Built-in a11y and performance nudges (labels, alt text, lazy images, etc.)."}),e.jsx("li",{children:"Copy-ready snippets kept minimal and standards-compliant."})]}),e.jsxs("p",{children:["Philosophy:",e.jsx("em",{children:"Use the right element, keep structure meaningful, enhance progressively."}),"Links are for navigation, buttons are for actions, and tables are for data—simple rules, fewer bugs."]}),e.jsx("p",{children:"Start with the foundations, skim the landmarks, then practice forms and media. Small reps beat big theory. Let's ship solid HTML."})]})]}),e.jsxs("fieldset",{children:[e.jsx("legend",{children:"About Developer"}),e.jsxs("div",{className:"aboutDeveloper",children:[e.jsxs(s,{children:[e.jsx(r,{children:"Name"}),e.jsxs(a,{children:["Ashish Ranjan",e.jsx("div",{className:"icon",children:e.jsx(u,{size:20})})]})]}),e.jsxs(s,{children:[e.jsx(r,{children:"Phone"}),e.jsxs(a,{children:[e.jsx("a",{href:"tel:+918123747965",children:"+91 8123747965"}),e.jsx("div",{className:"icon",children:e.jsx(f,{size:20})})]})]}),e.jsxs(s,{children:[e.jsx(r,{children:"Email"}),e.jsxs(a,{children:[e.jsx("a",{href:"mailto:ash.ranjan09@gmail.com",children:"ash.ranjan09@gmail.com"}),e.jsx("div",{className:"icon",children:e.jsx(b,{size:20})})]})]}),e.jsxs(s,{children:[e.jsx(r,{children:"Nationality"}),e.jsxs(a,{children:["The Republic of India",e.jsx("div",{className:"icon",children:e.jsx(H,{})})]})]}),e.jsxs(s,{children:[e.jsx(r,{children:"Website"}),e.jsxs(a,{children:[e.jsx("a",{href:"https://www.ashishranjan.net/",target:"_blank",rel:"noopener noreferrer",children:"https://www.ashishranjan.net/"}),e.jsx("div",{className:"icon",children:e.jsx(d,{size:20})})]})]}),e.jsxs(s,{children:[e.jsx(r,{children:"Old Website"}),e.jsxs(a,{children:[e.jsx("a",{href:"http://www.ashishranjan.in/",target:"_blank",rel:"noopener noreferrer",children:"http://www.ashishranjan.in/"}),e.jsx("div",{className:"icon",children:e.jsx(d,{size:20})})]})]}),e.jsxs(s,{children:[e.jsx(r,{children:"Facebook"}),e.jsxs(a,{children:[e.jsx("a",{href:"https://www.facebook.com/theash.ashish/",target:"_blank",rel:"noopener noreferrer",children:"facebook.com/theash.ashish/"}),e.jsx("div",{className:"icon",children:e.jsx(v,{size:20})})]})]}),e.jsxs(s,{children:[e.jsx(r,{children:"LinkedIn"}),e.jsxs(a,{children:[e.jsx("a",{href:"https://www.linkedin.com/in/aashishranjan/",target:"_blank",rel:"noopener noreferrer",children:"linkedin.com/in/aashishranjan/"}),e.jsx("div",{className:"icon",children:e.jsx(g,{size:20})})]})]}),e.jsxs(s,{children:[e.jsx(r,{children:"YouTube"}),e.jsxs(a,{children:[e.jsx("a",{href:"https://www.youtube.com/channel/UCLHIBQeFQIxmRveVAjLvlbQ",target:"_blank",rel:"noopener noreferrer",children:"youtube.com/channel/UCLHIBQeFQIxmRveVAjLvlbQ"}),e.jsx("div",{className:"icon",children:e.jsx(w,{size:20})})]})]}),e.jsxs(s,{children:[e.jsx(r,{children:"GitHub"}),e.jsxs(a,{children:[e.jsx("a",{href:"https://github.com/a2rp",target:"_blank",rel:"noopener noreferrer",children:"github.com/a2rp"}),e.jsx("div",{className:"icon",children:e.jsx(y,{size:20})})]})]})]})]})]})})};export{N as default};
