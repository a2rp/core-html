import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Styled } from "./styled";
import { MdClear } from "react-icons/md";

const STORAGE_KEY = "navSearch";
const OPEN_KEY = "navOpenCore";

/* ────────────────────────────────────────────────────────────────────────── */
/* Collapsible: measures content height for smooth max-height transitions     */
function Collapsible({ expanded, children }) {
    const innerRef = useRef(null);
    const [h, setH] = useState(0);

    useEffect(() => {
        const el = innerRef.current;
        if (!el) return;
        const ro = new ResizeObserver(() => setH(el.scrollHeight));
        ro.observe(el);
        setH(el.scrollHeight);
        return () => ro.disconnect();
    }, []);

    return (
        <div
            className="collapsible"
            style={{ "--h": `${expanded ? h : 0}px` }}
            aria-hidden={!expanded}
        >
            <div ref={innerRef} className="collapsibleInner">
                {children}
            </div>
        </div>
    );
}
/* ────────────────────────────────────────────────────────────────────────── */

/* Helper: get offsetTop of el relative to ancestor */
function getOffsetTop(el, ancestor) {
    let y = 0;
    let node = el;
    while (node && node !== ancestor) {
        y += node.offsetTop || 0;
        node = node.offsetParent;
    }
    return y;
}

const NavListCore = () => {
    const navRef = useRef(null);
    const wrapperRef = useRef(null);
    const searchInputRef = useRef(null);
    const { pathname } = useLocation();

    const [search, setSearch] = useState(() => {
        try {
            return sessionStorage.getItem(STORAGE_KEY) ?? "";
        } catch {
            return "";
        }
    });
    const [matchCount, setMatchCount] = useState(0);

    // persistent topic expansion state
    const [open, setOpen] = useState(() => {
        try {
            const saved = JSON.parse(localStorage.getItem(OPEN_KEY) || "null");
            if (saved && typeof saved === "object") return saved;
        } catch { }
        return {
            foundations: true, // default on first visit
            documentSkeleton: false,
            landmarks: false,
            headingsText: false,
            links: false,
            lists: false,
            media: false,
            tables: false,
            forms: false,
            interactive: false,
            metadata: false,
            globals: false,
            imagesPerf: false,
            a11y: false,
            scripting: false,
            pitfalls: false,
            patterns: false,
        };
    });

    // sections that have visible matches during search
    const [matchSections, setMatchSections] = useState(() => new Set());

    const saveOpen = (next) => {
        setOpen(next);
        try {
            localStorage.setItem(OPEN_KEY, JSON.stringify(next));
        } catch { }
    };

    const toggle = (key) => saveOpen({ ...open, [key]: !open[key] });

    // Center active link inside the scrollable wrapper
    const centerActive = (smooth = true) => {
        const wrapper = wrapperRef.current;
        if (!wrapper) return;
        const active = wrapper.querySelector("a.active");
        if (!active) return;
        const targetTop =
            getOffsetTop(active, wrapper) -
            (wrapper.clientHeight / 2 - active.offsetHeight / 2);
        const top = Math.max(0, targetTop);
        try {
            wrapper.scrollTo({ top, behavior: smooth ? "smooth" : "auto" });
        } catch {
            wrapper.scrollTop = top;
        }
    };

    // Keep active link centered on route change/refresh, and ensure its parent is open
    useEffect(() => {
        const active = wrapperRef.current?.querySelector("a.active");
        if (!active) return;
        const secKey = active.getAttribute("data-sec");
        if (secKey && !open[secKey]) {
            const next = { ...open, [secKey]: true };
            saveOpen(next);
        }
        // center after any potential open animation
        centerActive(false);
        const t = setTimeout(() => centerActive(true), 260);
        return () => clearTimeout(t);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    // Shortcuts: Ctrl/Cmd+K focus, Esc clear, Enter open first result
    useEffect(() => {
        function onKey(e) {
            const isMetaK = (e.ctrlKey || e.metaKey) && (e.key === "k" || e.key === "K");
            if (isMetaK) {
                e.preventDefault();
                searchInputRef.current?.focus();
                searchInputRef.current?.select();
                return;
            }
            if (e.key === "Escape" && document.activeElement === searchInputRef.current) {
                setSearch("");
                return;
            }
            if (e.key === "Enter" && document.activeElement === searchInputRef.current) {
                const first = wrapperRef.current?.querySelector('a:not([data-hidden="true"])');
                if (first) first.click();
            }
        }
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    const isSearching = search.trim().length > 0;

    // Topic data (ALL sections + subtopics) — foundations links fixed & accurate
    const topics = [
        {
            key: "foundations",
            title: "Foundations",
            items: [
                { to: "/foundations/doctype-lang", label: "HTML5 doctype, <html lang>", title: "Doctype and document language" },
                { to: "/foundations/meta-charset-viewport#charset", label: "<meta charset>", title: "Character encoding basics" },
                { to: "/foundations/meta-charset-viewport#viewport", label: "Viewport basics", title: "Viewport meta and layout scaling" },
                { to: "/foundations/dir-basics", label: 'dir basics (ltr/rtl/bdi/bdo)', title: "Text direction, isolation and override" },
                { to: "/foundations/block-vs-inline", label: "Block vs inline (concept)", title: "Display concepts: block vs inline" },
                { to: "/foundations/content-categories", label: "Content categories", title: "Flow, phrasing, sectioning, interactive" },
            ],
        },
        {
            key: "documentSkeleton",
            title: "Document Skeleton",
            items: [
                { to: "/skeleton/head-vs-body", label: "<head> vs <body>", title: "What belongs in head and body" },
                { to: "/skeleton/boilerplate-order", label: "Boilerplate order", title: "title → meta → links → scripts" },
                { to: "/skeleton/favicons-min", label: "Favicons (16/32 + 180)", title: "Minimal favicon set" },
                { to: "/skeleton/scripts-styles-placement", label: "Scripts/styles placement", title: "Conceptual placement guidance" },
            ],
        },
        {
            key: "landmarks",
            title: "Landmarks & Structure",
            items: [
                { to: "/landmarks/core-landmarks", label: "<main>, <header>, <nav>, <section>, <article>, <aside>, <footer>", title: "Core landmarks and sectioning" },
                { to: "/landmarks/section-vs-div", label: "When to use <section> vs <div>", title: "Choosing semantic sectioning" },
                { to: "/landmarks/nesting-outline", label: "Nesting & heading outline", title: "Outline basics and nesting rules" },
            ],
        },
        {
            key: "headingsText",
            title: "Headings & Text Semantics",
            items: [
                { to: "/headings/h1-h6-hierarchy", label: "<h1>…<h6> hierarchy", title: "Heading levels and structure" },
                { to: "/text/p-br-hr", label: "<p>, <br>, <hr> usage", title: "Paragraphs and thematic breaks" },
                { to: "/text/em-vs-strong", label: "<em> vs <strong>", title: "Emphasis versus importance" },
                { to: "/text/inline-semantics", label: "<span>, <small>, <mark>, <cite>, <q>, <abbr>, <time>", title: "Inline semantic elements" },
                { to: "/text/code-pre-kbd-samp", label: "<code>, <pre>, <kbd>, <samp>", title: "Code and keyboard semantics" },
            ],
        },
        {
            key: "links",
            title: "Links (Navigation Essentials)",
            items: [
                { to: "/links/minimal-anatomy", label: "<a> anatomy (href, text)", title: "Anchor basics" },
                { to: "/links/paths-and-fragments", label: "Absolute vs relative, #ids", title: "Paths and fragment identifiers" },
                { to: "/links/target-rel-safety", label: "target, rel='noopener'", title: "Security and new window behavior" },
                { to: "/links/link-text-quality", label: "Link text quality", title: "Avoid 'click here' and vague labels" },
            ],
        },
        {
            key: "lists",
            title: "Lists",
            items: [
                { to: "/lists/ul-ol-li", label: "<ul>, <ol>, <li> semantics", title: "Unordered and ordered lists" },
                { to: "/lists/nested-and-start-reversed", label: "Nested, start/reversed", title: "Ordered list attributes" },
                { to: "/lists/dl-dt-dd", label: "Definition lists", title: "<dl>, <dt>, <dd> usage" },
            ],
        },
        {
            key: "media",
            title: "Media (Basic)",
            items: [
                { to: "/media/img-basics", label: "<img> src, alt, width/height", title: "Prevent CLS; proper alt text" },
                { to: "/media/decorative-vs-informative", label: 'Decorative vs informative (alt="")', title: "When alt can be empty" },
                { to: "/media/figure-figcaption", label: "<figure> + <figcaption>", title: "Captioning images" },
                { to: "/media/audio-video-simple", label: "Simple <audio>/<video>", title: "Controls only, no advanced sources" },
                { to: "/media/track-basics", label: "<track> basics", title: "Captions/labels for media" },
            ],
        },
        {
            key: "tables",
            title: "Tables (Data, not layout)",
            items: [
                { to: "/tables/structure", label: "<caption>, <thead>, <tbody>, <tfoot>", title: "Table regions and caption" },
                { to: "/tables/th-vs-td-scope", label: "<th> vs <td>, scope", title: "Header cells and scope" },
                { to: "/tables/colgroup-col", label: "<colgroup>/<col>", title: "Column groups identification" },
                { to: "/tables/a11y-dos-donts", label: "Accessibility & no layout tables", title: "Keep tables for data only" },
            ],
        },
        {
            key: "forms",
            title: "Forms (Core)",
            items: [
                { to: "/forms/form-basics", label: "<form> basics", title: "action/method concept" },
                { to: "/forms/label-association", label: "<label> association", title: "for/id vs wrapping" },
                { to: "/forms/inputs-type-matrix", label: "Inputs: type matrix", title: "text, email, number, tel, url, password, checkbox, radio, file, date/time, range, color, hidden, submit/reset/button" },
                { to: "/forms/common-attrs", label: "Common attrs", title: "name, value, required, min/max, pattern, placeholder, disabled, readonly" },
                { to: "/forms/fieldset-legend", label: "Grouping: <fieldset> + <legend>", title: "Group related controls" },
                { to: "/forms/select-optgroup", label: "<select>, <option>, <optgroup>", title: "Select structures" },
                { to: "/forms/textarea", label: "<textarea> basics", title: "Multiline text input" },
                { to: "/forms/validation-hints", label: "Validation hints", title: "Native messages, novalidate" },
                { to: "/forms/autocomplete-tokens", label: "Autocomplete tokens", title: "Email, name, address lines…" },
                { to: "/forms/input-helpers", label: "inputmode, enterkeyhint", title: "Soft keyboard and enter action" },
            ],
        },
        {
            key: "interactive",
            title: "Interactive (Zero-JS primitives)",
            items: [
                { to: "/interactive/button-types", label: "<button> types", title: "button, submit, reset" },
                { to: "/interactive/details-summary", label: "<details> + <summary>", title: "Disclosure widget" },
                { to: "/interactive/dialog-open", label: "<dialog> (open attr)", title: "Dialog basics (concept)" },
                { to: "/interactive/no-nesting", label: "Don’t nest interactive in interactive", title: "Common pitfall to avoid" },
            ],
        },
        {
            key: "metadata",
            title: "Metadata (Head Essentials)",
            items: [
                { to: "/metadata/title-quality", label: "<title> quality", title: "Clear, concise page titles" },
                { to: "/metadata/meta-description", label: '<meta name="description">', title: "Page description basics" },
                { to: "/metadata/charset-viewport-recap", label: "charset & viewport recap", title: "Refresher" },
                { to: "/metadata/robots-basics", label: '<meta name="robots">', title: "index,follow basics" },
                { to: "/metadata/canonical-concept", label: "Canonical link (concept)", title: "Avoid duplicate URLs" },
                { to: "/metadata/links-scripts", label: "<link rel='stylesheet'>, <script defer>", title: "Loading CSS/JS sanely" },
            ],
        },
        {
            key: "globals",
            title: "Global Attributes (Everywhere)",
            items: [
                { to: "/globals/id-class-style-title", label: "id, class, style, title", title: "Common globals; inline style caution" },
                { to: "/globals/hidden-tabindex-contenteditable", label: "hidden, tabindex, contenteditable", title: "Visibility and focus control" },
                { to: "/globals/data-attributes", label: "data-* hooks", title: "Semantics-safe data attributes" },
                { to: "/globals/lang-on-elements", label: "lang (per element)", title: "Inline language changes" },
            ],
        },
        {
            key: "imagesPerf",
            title: "Images & Performance (Core nudges)",
            items: [
                { to: "/images-perf/lazy-decoding", label: 'loading="lazy", decoding="async"', title: "Defer work and decode off main path" },
                { to: "/images-perf/intrinsic-dimensions", label: "Intrinsic dimensions", title: "Avoid layout shift (CLS)" },
                { to: "/images-perf/fetchpriority-note", label: "fetchpriority (concept)", title: "Tiny note on priority hints" },
            ],
        },
        {
            key: "a11y",
            title: "Accessibility (Built-in First)",
            items: [
                { to: "/a11y/language-landmarks", label: "Language & landmarks", title: "Basics of accessible structure" },
                { to: "/a11y/form-labels-errors", label: "Form labels & errors", title: "Association and messaging" },
                { to: "/a11y/name-role-value", label: "Name/Role/Value", title: "Prefer native semantics" },
                { to: "/a11y/focus-order-outline", label: "Focus order & outline", title: "Keyboard visibility" },
                { to: "/a11y/skip-link-concept", label: "Skip link (concept)", title: "Jump to main content" },
            ],
        },
        {
            key: "scripting",
            title: "Scripting Touchpoints (Basic)",
            items: [
                { to: "/scripting/script-placement", label: "<script> placement", title: "Defer vs blocking" },
                { to: "/scripting/progressive-enhancement", label: "Progressive enhancement", title: "HTML-first thinking" },
                { to: "/scripting/semantics-help-js", label: "Why semantics help JS", title: "Stable hooks & a11y out of box" },
            ],
        },
        {
            key: "pitfalls",
            title: "Common Pitfalls",
            items: [
                { to: "/pitfalls/void-elements", label: "Void elements not self-closing", title: "img, br, hr, meta, link, input…" },
                { to: "/pitfalls/multiple-h1", label: "Multiple <h1> per context", title: "Okay in sectioning; keep outline clear" },
                { to: "/pitfalls/button-vs-link", label: "<button> for actions, <a> for nav", title: "Use the right primitive" },
                { to: "/pitfalls/no-div-for-headings", label: "No <div> for headings/lists", title: "Use semantic elements" },
                { to: "/pitfalls/text-inside-images", label: "Avoid text inside images", title: "Prefer real text for a11y/SEO" },
            ],
        },
        {
            key: "patterns",
            title: "Minimal Patterns",
            items: [
                { to: "/patterns/button-vs-link-decision", label: "Button vs Link decision", title: "Choose the correct element" },
                { to: "/patterns/labeled-form-row", label: "Labeled form row", title: "label + input + hint + error" },
                { to: "/patterns/data-table-with-scope", label: "Data table with scope", title: "Headers and relationships" },
                { to: "/patterns/figure-with-caption", label: "Figure with caption", title: "Image + caption pattern" },
                { to: "/patterns/basic-page-skeleton", label: "Page skeleton + skip link", title: "Landmarks and skip link" },
            ],
        },
    ];

    // Filter links + hide empty section headers + collect which sections have matches
    useEffect(() => {
        try {
            sessionStorage.setItem(STORAGE_KEY, search);
        } catch { }

        const root = wrapperRef.current;
        if (!root) return;

        const q = search.trim().toLowerCase();
        const tokens = q.length ? q.split(/\s+/).filter(Boolean) : [];

        const links = Array.from(root.querySelectorAll("a[href]"));
        let visibleCount = 0;
        const matchedSecKeys = new Set();

        links.forEach((a) => {
            const label = (a.textContent || "").toLowerCase();
            const title = (a.getAttribute("title") || "").toLowerCase();
            const hay = `${label} ${title}`;
            const isMatch = tokens.length === 0 || tokens.every((t) => hay.includes(t));
            a.setAttribute("data-hidden", isMatch ? "false" : "true");
            if (isMatch) {
                visibleCount += 1;
                const secKey = a.getAttribute("data-sec");
                if (secKey) matchedSecKeys.add(secKey);
            }
        });

        // For headers, force-show parent title if its section has a match (during search)
        const headers = Array.from(root.querySelectorAll("h3.title"));
        headers.forEach((h) => {
            const headerKey = h.getAttribute("data-key");
            let hasVisible = false;

            if (q.length && headerKey && matchedSecKeys.has(headerKey)) {
                hasVisible = true;
            } else {
                let node = h.nextElementSibling;
                while (node && node.tagName !== "H3") {
                    if (node.tagName === "A" && node.getAttribute("data-hidden") === "false") {
                        hasVisible = true;
                        break;
                    }
                    const a = node.querySelector?.("a");
                    if (a && a.getAttribute("data-hidden") === "false") {
                        hasVisible = true;
                        break;
                    }
                    node = node.nextElementSibling;
                }
            }
            h.setAttribute("data-hidden", hasVisible ? "false" : "true");
        });

        setMatchSections(matchedSecKeys);
        setMatchCount(visibleCount);

        // Center active after search layout changes
        centerActive(false);
        const t = setTimeout(() => centerActive(true), 260);
        return () => clearTimeout(t);
    }, [search]);

    const handleSearchChange = (e) => setSearch(e.target.value);
    const clearSearch = () => setSearch("");

    useEffect(() => {
        searchInputRef.current?.focus();
    }, []);

    return (
        <Styled.Nav ref={navRef} aria-label="Core HTML navigation">
            <div className="searchWraper">
                <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Search demos (Ctrl + K)"
                    value={search}
                    onChange={handleSearchChange}
                    aria-label="Search demos"
                    aria-controls="navlinksWrapper"
                />
                {search.trim().length > 0 && (
                    <div
                        className="clearIconWrapper"
                        onClick={clearSearch}
                        role="button"
                        aria-label="Clear search"
                        title="Clear"
                    >
                        <MdClear size={20} />
                    </div>
                )}
            </div>

            <div className="navlinksWrapper" id="navlinksWrapper" ref={wrapperRef}>
                {/* Core */}
                <NavLink to="/home" title="Home" data-sec="home">
                    Home
                </NavLink>

                {/* Topics with collapsible subtopics */}
                {topics.map((sec) => {
                    const expanded = isSearching ? matchSections.has(sec.key) : !!open[sec.key];
                    return (
                        <div className="section" key={sec.key}>
                            <h3
                                className="title"
                                data-key={sec.key}
                                role="button"
                                tabIndex={0}
                                aria-expanded={expanded}
                                onClick={() => {
                                    // Only toggle expansion; DO NOT center on parent toggle
                                    toggle(sec.key);
                                }}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") {
                                        e.preventDefault();
                                        toggle(sec.key);
                                    }
                                }}
                                title={sec.title}
                            >
                                <span className="caret" data-open={expanded ? "true" : "false"} aria-hidden="true">
                                    ▸
                                </span>
                                {sec.title}
                            </h3>

                            <Collapsible expanded={expanded}>
                                <ul className="subList" role="list">
                                    {sec.items.map((it) => (
                                        <li key={it.to}>
                                            <NavLink
                                                to={it.to}
                                                title={it.title}
                                                data-sec={sec.key}
                                                onClick={() => {
                                                    // Center on actual navigation to a subtopic
                                                    centerActive(true);
                                                    setTimeout(() => centerActive(true), 260);
                                                }}
                                            >
                                                {it.label}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </Collapsible>
                        </div>
                    );
                })}
            </div>

            {/* Hide nodes flagged by filter */}
            <style>{`[data-hidden="true"] { display: none !important; }`}</style>
        </Styled.Nav>
    );
};

export default NavListCore;
