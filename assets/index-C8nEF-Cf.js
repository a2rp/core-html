import{d as ye,r as a,W as D,j as h}from"./index-CQ_xjxjH.js";const we={Playground:ye.div`
        border: 1px solid var(--surface-400, #333);
        border-radius: 12px;
        background: var(--surface-200, rgba(255, 255, 255, 0.02));
        overflow: hidden;
        position: relative;

        .toolbar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            padding: 10px 12px;
            border-bottom: 1px solid var(--surface-400, #333);
            background: var(--surface);
            color: var(--text);

            .left {
                display: flex;
                align-items: center;
                gap: 10px;
            }
            .hint {
                color: var(--text-muted);
                font-size: 12px;
            }

            .right {
                display: flex;
                gap: 8px;
            }
            .btn {
                background: var(--card);
                color: var(--text);
                border: 1px solid var(--surface-400, #333);
                border-radius: 8px;
                padding: 6px 10px;
                cursor: pointer;
            }
            .btn:hover {
                background: var(--surface-300, rgba(255, 255, 255, 0.04));
            }
            .btn.danger {
                border-color: #774;
            }
        }

        .grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 0;
        }

        .pane {
            min-height: 420px;
        }

        .editorPane {
            border-right: 1px solid var(--surface-400, #333);
        }

        .previewPane {
            background: var(--bg);
            display: grid;
            place-items: stretch;
        }

        /* ── Modal styles ─────────────────────────────────────────── */
        .modalOverlay {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.5);
            display: grid;
            place-items: center;
            z-index: 9999;
        }
        .modal {
            width: min(520px, 92vw);
            background: var(--surface);
            color: var(--text);
            border: 1px solid var(--surface-400, #333);
            border-radius: 12px;
            box-shadow: var(--shadow-lg, 0 10px 30px rgba(0, 0, 0, 0.35));
            padding: 16px;
        }
        .modal h3 {
            margin: 0 0 8px;
            font-size: 1.05rem;
        }
        .modal p {
            margin: 0 0 14px;
            color: var(--text-muted);
        }
        .modalBtns {
            display: flex;
            gap: 10px;
            justify-content: flex-end;
            margin-top: 6px;
        }
        .modalBtns .btn {
            background: var(--card);
            color: var(--text);
            border: 1px solid var(--surface-400, #333);
            border-radius: 8px;
            padding: 6px 12px;
            cursor: pointer;
        }
        .modalBtns .btn.danger {
            border-color: #a55;
            background: rgba(170, 85, 85, 0.12);
        }
        .modalBtns .btn:hover {
            background: var(--surface-300, rgba(255, 255, 255, 0.04));
        }

        @media (width < 900px) {
            .grid {
                grid-template-columns: 1fr;
            }
            .editorPane {
                border-right: none;
                border-bottom: 1px solid var(--surface-400, #333);
            }
        }
    `};function oe(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function je(e){if(Array.isArray(e))return e}function xe(e,t,r){return(t=Re(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Oe(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,o,i,u,l=[],f=!0,p=!1;try{if(i=(r=r.call(e)).next,t!==0)for(;!(f=(n=i.call(r)).done)&&(l.push(n.value),l.length!==t);f=!0);}catch(x){p=!0,o=x}finally{try{if(!f&&r.return!=null&&(u=r.return(),Object(u)!==u))return}finally{if(p)throw o}}return l}}function Me(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ae(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function ie(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?ae(Object(r),!0).forEach(function(n){xe(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ae(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Ee(e,t){if(e==null)return{};var r,n,o=Se(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function Se(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}function Pe(e,t){return je(e)||Oe(e,t)||Le(e,t)||Me()}function Ce(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Re(e){var t=Ce(e,"string");return typeof t=="symbol"?t:t+""}function Le(e,t){if(e){if(typeof e=="string")return oe(e,t);var r={}.toString.call(e).slice(8,-1);return r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set"?Array.from(e):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?oe(e,t):void 0}}function Te(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ce(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function ue(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?ce(Object(r),!0).forEach(function(n){Te(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ce(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function ke(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(n){return t.reduceRight(function(o,i){return i(o)},n)}}function H(e){return function t(){for(var r=this,n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return o.length>=e.length?e.apply(this,o):function(){for(var u=arguments.length,l=new Array(u),f=0;f<u;f++)l[f]=arguments[f];return t.apply(r,[].concat(o,l))}}}function Z(e){return{}.toString.call(e).includes("Object")}function Ie(e){return!Object.keys(e).length}function G(e){return typeof e=="function"}function Ne(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Ae(e,t){return Z(t)||C("changeType"),Object.keys(t).some(function(r){return!Ne(e,r)})&&C("changeField"),t}function De(e){G(e)||C("selectorType")}function $e(e){G(e)||Z(e)||C("handlerType"),Z(e)&&Object.values(e).some(function(t){return!G(t)})&&C("handlersType")}function Ve(e){e||C("initialIsRequired"),Z(e)||C("initialType"),Ie(e)&&C("initialContent")}function ze(e,t){throw new Error(e[t]||e.default)}var Be={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},C=H(ze)(Be),Q={changes:Ae,selector:De,handler:$e,initial:Ve};function qe(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Q.initial(e),Q.handler(t);var r={current:e},n=H(We)(r,t),o=H(Ue)(r),i=H(Q.changes)(e),u=H(Fe)(r);function l(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(x){return x};return Q.selector(p),p(r.current)}function f(p){ke(n,o,i,u)(p)}return[l,f]}function Fe(e,t){return G(t)?t(e.current):t}function Ue(e,t){return e.current=ue(ue({},e.current),t),t}function We(e,t,r){return G(t)?t(e.current):Object.keys(r).forEach(function(n){var o;return(o=t[n])===null||o===void 0?void 0:o.call(t,e.current[n])}),r}var He={create:qe},_e={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.54.0/min/vs"}};function Ge(e){return function t(){for(var r=this,n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return o.length>=e.length?e.apply(this,o):function(){for(var u=arguments.length,l=new Array(u),f=0;f<u;f++)l[f]=arguments[f];return t.apply(r,[].concat(o,l))}}}function Ke(e){return{}.toString.call(e).includes("Object")}function Ye(e){return e||se("configIsRequired"),Ke(e)||se("configType"),e.urls?(Je(),{paths:{vs:e.urls.monacoBase}}):e}function Je(){console.warn(le.deprecation)}function Qe(e,t){throw new Error(e[t]||e.default)}var le={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},se=Ge(Qe)(le),Xe={config:Ye},Ze=function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return function(o){return r.reduceRight(function(i,u){return u(i)},o)}};function de(e,t){return Object.keys(t).forEach(function(r){t[r]instanceof Object&&e[r]&&Object.assign(t[r],de(e[r],t[r]))}),ie(ie({},e),t)}var et={type:"cancelation",msg:"operation is manually canceled"};function te(e){var t=!1,r=new Promise(function(n,o){e.then(function(i){return t?o(et):n(i)}),e.catch(o)});return r.cancel=function(){return t=!0},r}var tt=["monaco"],rt=He.create({config:_e,isInitialized:!1,resolve:null,reject:null,monaco:null}),fe=Pe(rt,2),K=fe[0],ee=fe[1];function nt(e){var t=Xe.config(e),r=t.monaco,n=Ee(t,tt);ee(function(o){return{config:de(o.config,n),monaco:r}})}function ot(){var e=K(function(t){var r=t.monaco,n=t.isInitialized,o=t.resolve;return{monaco:r,isInitialized:n,resolve:o}});if(!e.isInitialized){if(ee({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),te(re);if(window.monaco&&window.monaco.editor)return pe(window.monaco),e.resolve(window.monaco),te(re);Ze(at,ct)(ut)}return te(re)}function at(e){return document.body.appendChild(e)}function it(e){var t=document.createElement("script");return e&&(t.src=e),t}function ct(e){var t=K(function(n){var o=n.config,i=n.reject;return{config:o,reject:i}}),r=it("".concat(t.config.paths.vs,"/loader.js"));return r.onload=function(){return e()},r.onerror=t.reject,r}function ut(){var e=K(function(r){var n=r.config,o=r.resolve,i=r.reject;return{config:n,resolve:o,reject:i}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(r){var n=r.m;pe(n),e.resolve(n)},function(r){e.reject(r)})}function pe(e){K().monaco||ee({monaco:e})}function st(){return K(function(e){var t=e.monaco;return t})}var re=new Promise(function(e,t){return ee({resolve:e,reject:t})}),ge={config:nt,init:ot,__getMonacoInstance:st},lt={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},ne=lt,dt={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},ft=dt;function pt({children:e}){return D.createElement("div",{style:ft.container},e)}var gt=pt,mt=gt;function ht({width:e,height:t,isEditorReady:r,loading:n,_ref:o,className:i,wrapperProps:u}){return D.createElement("section",{style:{...ne.wrapper,width:e,height:t},...u},!r&&D.createElement(mt,null,n),D.createElement("div",{ref:o,style:{...ne.fullWidth,...!r&&ne.hide},className:i}))}var vt=ht,me=a.memo(vt);function bt(e){a.useEffect(e,[])}var he=bt;function yt(e,t,r=!0){let n=a.useRef(!0);a.useEffect(n.current||!r?()=>{n.current=!1}:e,t)}var E=yt;function _(){}function A(e,t,r,n){return wt(e,n)||jt(e,t,r,n)}function wt(e,t){return e.editor.getModel(ve(e,t))}function jt(e,t,r,n){return e.editor.createModel(t,r,n?ve(e,n):void 0)}function ve(e,t){return e.Uri.parse(t)}function xt({original:e,modified:t,language:r,originalLanguage:n,modifiedLanguage:o,originalModelPath:i,modifiedModelPath:u,keepCurrentOriginalModel:l=!1,keepCurrentModifiedModel:f=!1,theme:p="light",loading:x="Loading...",options:w={},height:R="100%",width:$="100%",className:V,wrapperProps:z={},beforeMount:S=_,onMount:T=_}){let[O,B]=a.useState(!1),[L,b]=a.useState(!0),y=a.useRef(null),v=a.useRef(null),q=a.useRef(null),j=a.useRef(T),d=a.useRef(S),k=a.useRef(!1);he(()=>{let c=ge.init();return c.then(g=>(v.current=g)&&b(!1)).catch(g=>(g==null?void 0:g.type)!=="cancelation"&&console.error("Monaco initialization: error:",g)),()=>y.current?F():c.cancel()}),E(()=>{if(y.current&&v.current){let c=y.current.getOriginalEditor(),g=A(v.current,e||"",n||r||"text",i||"");g!==c.getModel()&&c.setModel(g)}},[i],O),E(()=>{if(y.current&&v.current){let c=y.current.getModifiedEditor(),g=A(v.current,t||"",o||r||"text",u||"");g!==c.getModel()&&c.setModel(g)}},[u],O),E(()=>{let c=y.current.getModifiedEditor();c.getOption(v.current.editor.EditorOption.readOnly)?c.setValue(t||""):t!==c.getValue()&&(c.executeEdits("",[{range:c.getModel().getFullModelRange(),text:t||"",forceMoveMarkers:!0}]),c.pushUndoStop())},[t],O),E(()=>{var c,g;(g=(c=y.current)==null?void 0:c.getModel())==null||g.original.setValue(e||"")},[e],O),E(()=>{let{original:c,modified:g}=y.current.getModel();v.current.editor.setModelLanguage(c,n||r||"text"),v.current.editor.setModelLanguage(g,o||r||"text")},[r,n,o],O),E(()=>{var c;(c=v.current)==null||c.editor.setTheme(p)},[p],O),E(()=>{var c;(c=y.current)==null||c.updateOptions(w)},[w],O);let Y=a.useCallback(()=>{var P;if(!v.current)return;d.current(v.current);let c=A(v.current,e||"",n||r||"text",i||""),g=A(v.current,t||"",o||r||"text",u||"");(P=y.current)==null||P.setModel({original:c,modified:g})},[r,t,o,e,n,i,u]),J=a.useCallback(()=>{var c;!k.current&&q.current&&(y.current=v.current.editor.createDiffEditor(q.current,{automaticLayout:!0,...w}),Y(),(c=v.current)==null||c.editor.setTheme(p),B(!0),k.current=!0)},[w,p,Y]);a.useEffect(()=>{O&&j.current(y.current,v.current)},[O]),a.useEffect(()=>{!L&&!O&&J()},[L,O,J]);function F(){var g,P,I,U;let c=(g=y.current)==null?void 0:g.getModel();l||((P=c==null?void 0:c.original)==null||P.dispose()),f||((I=c==null?void 0:c.modified)==null||I.dispose()),(U=y.current)==null||U.dispose()}return D.createElement(me,{width:$,height:R,isEditorReady:O,loading:x,_ref:q,className:V,wrapperProps:z})}var Ot=xt;a.memo(Ot);function Mt(e){let t=a.useRef();return a.useEffect(()=>{t.current=e},[e]),t.current}var Et=Mt,X=new Map;function St({defaultValue:e,defaultLanguage:t,defaultPath:r,value:n,language:o,path:i,theme:u="light",line:l,loading:f="Loading...",options:p={},overrideServices:x={},saveViewState:w=!0,keepCurrentModel:R=!1,width:$="100%",height:V="100%",className:z,wrapperProps:S={},beforeMount:T=_,onMount:O=_,onChange:B,onValidate:L=_}){let[b,y]=a.useState(!1),[v,q]=a.useState(!0),j=a.useRef(null),d=a.useRef(null),k=a.useRef(null),Y=a.useRef(O),J=a.useRef(T),F=a.useRef(),c=a.useRef(n),g=Et(i),P=a.useRef(!1),I=a.useRef(!1);he(()=>{let s=ge.init();return s.then(m=>(j.current=m)&&q(!1)).catch(m=>(m==null?void 0:m.type)!=="cancelation"&&console.error("Monaco initialization: error:",m)),()=>d.current?be():s.cancel()}),E(()=>{var m,M,W,N;let s=A(j.current,e||n||"",t||o||"",i||r||"");s!==((m=d.current)==null?void 0:m.getModel())&&(w&&X.set(g,(M=d.current)==null?void 0:M.saveViewState()),(W=d.current)==null||W.setModel(s),w&&((N=d.current)==null||N.restoreViewState(X.get(i))))},[i],b),E(()=>{var s;(s=d.current)==null||s.updateOptions(p)},[p],b),E(()=>{!d.current||n===void 0||(d.current.getOption(j.current.editor.EditorOption.readOnly)?d.current.setValue(n):n!==d.current.getValue()&&(I.current=!0,d.current.executeEdits("",[{range:d.current.getModel().getFullModelRange(),text:n,forceMoveMarkers:!0}]),d.current.pushUndoStop(),I.current=!1))},[n],b),E(()=>{var m,M;let s=(m=d.current)==null?void 0:m.getModel();s&&o&&((M=j.current)==null||M.editor.setModelLanguage(s,o))},[o],b),E(()=>{var s;l!==void 0&&((s=d.current)==null||s.revealLine(l))},[l],b),E(()=>{var s;(s=j.current)==null||s.editor.setTheme(u)},[u],b);let U=a.useCallback(()=>{var s;if(!(!k.current||!j.current)&&!P.current){J.current(j.current);let m=i||r,M=A(j.current,n||e||"",t||o||"",m||"");d.current=(s=j.current)==null?void 0:s.editor.create(k.current,{model:M,automaticLayout:!0,...p},x),w&&d.current.restoreViewState(X.get(m)),j.current.editor.setTheme(u),l!==void 0&&d.current.revealLine(l),y(!0),P.current=!0}},[e,t,r,n,o,i,p,x,w,u,l]);a.useEffect(()=>{b&&Y.current(d.current,j.current)},[b]),a.useEffect(()=>{!v&&!b&&U()},[v,b,U]),c.current=n,a.useEffect(()=>{var s,m;b&&B&&((s=F.current)==null||s.dispose(),F.current=(m=d.current)==null?void 0:m.onDidChangeModelContent(M=>{I.current||B(d.current.getValue(),M)}))},[b,B]),a.useEffect(()=>{if(b){let s=j.current.editor.onDidChangeMarkers(m=>{var W;let M=(W=d.current.getModel())==null?void 0:W.uri;if(M&&m.find(N=>N.path===M.path)){let N=j.current.editor.getModelMarkers({resource:M});L==null||L(N)}});return()=>{s==null||s.dispose()}}return()=>{}},[b,L]);function be(){var s,m;(s=F.current)==null||s.dispose(),R?w&&X.set(i,d.current.saveViewState()):(m=d.current.getModel())==null||m.dispose(),d.current.dispose()}return D.createElement(me,{width:$,height:V,isEditorReady:b,loading:f,_ref:k,className:z,wrapperProps:S})}var Pt=St,Ct=a.memo(Pt),Rt=Ct;function Lt(){const e=()=>document.documentElement.getAttribute("data-theme")==="dark"?"vs-dark":"light",[t,r]=a.useState(e);return a.useEffect(()=>{const n=document.documentElement,o=new MutationObserver(()=>r(e()));return o.observe(n,{attributes:!0,attributeFilter:["data-theme"]}),()=>o.disconnect()},[]),t}function Tt({html:e}){const t=a.useRef(null);return a.useEffect(()=>{const r=t.current;r&&(r.srcdoc=e||"<!doctype html><html><body></body></html>")},[e]),h.jsx("iframe",{ref:t,title:"Preview",sandbox:"allow-scripts allow-same-origin",style:{width:"100%",height:"420px",border:"0",background:"var(--bg)"}})}const kt=300;function It({open:e,title:t="Reset",desc:r="Reset to the lesson starter?",onConfirm:n,onCancel:o}){const i=a.useRef(null),u=a.useRef(null);return a.useEffect(()=>{var l,f,p;if(e){u.current=document.activeElement;const x=(l=i.current)==null?void 0:l.querySelector("button.confirm");x==null||x.focus();const w=R=>{R.key==="Escape"&&(o==null||o())};return window.addEventListener("keydown",w),()=>window.removeEventListener("keydown",w)}else u.current&&((p=(f=u.current).focus)==null||p.call(f))},[e,o]),e?h.jsx("div",{className:"modalOverlay",role:"presentation",onClick:o,children:h.jsxs("div",{className:"modal",role:"dialog","aria-modal":"true","aria-labelledby":"confirm-title","aria-describedby":"confirm-desc",ref:i,onClick:l=>l.stopPropagation(),children:[h.jsx("h3",{id:"confirm-title",children:t}),h.jsx("p",{id:"confirm-desc",children:r}),h.jsxs("div",{className:"modalBtns",children:[h.jsx("button",{className:"btn danger confirm",onClick:n,children:"Reset"}),h.jsx("button",{className:"btn",onClick:o,children:"Cancel"})]})]})}):null}function At({storageKey:e,initialHtml:t}){const[r,n]=a.useState(()=>{try{const S=localStorage.getItem(e);if(typeof S=="string"&&S.length)return S}catch{}return t}),[o,i]=a.useState(r),[u,l]=a.useState(!1),f=Lt(),p=a.useRef(null);a.useEffect(()=>{try{localStorage.setItem(e,r)}catch{}},[r,e]),a.useEffect(()=>(clearTimeout(p.current),p.current=setTimeout(()=>i(r),kt),()=>clearTimeout(p.current)),[r]);const x=a.useCallback(()=>i(r),[r]),w=a.useCallback(()=>l(!0),[]),R=a.useCallback(()=>l(!1),[]),$=a.useCallback(()=>{l(!1),n(t),i(t);try{localStorage.setItem(e,t)}catch{}},[t,e]),V=a.useCallback(async()=>{try{await navigator.clipboard.writeText(r)}catch{}},[r]),z=a.useMemo(()=>({minimap:{enabled:!1},fontSize:14,scrollBeyondLastLine:!1,wordWrap:"on",automaticLayout:!0,tabSize:2,insertSpaces:!0}),[]);return h.jsxs(we.Playground,{children:[h.jsxs("div",{className:"toolbar",role:"toolbar","aria-label":"Editor actions",children:[h.jsxs("div",{className:"left",children:[h.jsx("strong",{children:"HTML"}),h.jsx("span",{className:"hint",children:"Autosaves • Ctrl/Cmd+Enter to Run"})]}),h.jsxs("div",{className:"right",children:[h.jsx("button",{onClick:x,className:"btn",children:"Run"}),h.jsx("button",{onClick:V,className:"btn",title:"Copy to clipboard",children:"Copy"}),h.jsx("button",{onClick:w,className:"btn danger",title:"Reset to starter",children:"Reset"})]})]}),h.jsxs("div",{className:"grid",children:[h.jsx("div",{className:"pane editorPane","aria-label":"HTML editor",children:h.jsx(Rt,{height:"420px",defaultLanguage:"html",theme:f,value:r,onChange:S=>n(S??""),options:z,onMount:(S,T)=>{S.addCommand(T.KeyMod.CtrlCmd|T.KeyCode.Enter,()=>{i(S.getValue())})}})}),h.jsx("div",{className:"pane previewPane","aria-label":"Live preview",children:h.jsx(Tt,{html:o})})]}),h.jsx(It,{open:u,title:"Reset editor?",desc:"This will discard your changes and restore the lesson starter.",onConfirm:$,onCancel:R})]})}export{At as H};
