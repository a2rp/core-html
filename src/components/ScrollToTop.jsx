import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // prefer your main content scroller
        const root = document.querySelector("[data-scroll-root]");

        // if navigating to an in-page anchor, let the browser handle it
        if (hash) return;

        if (root) {
            try {
                root.scrollTo({ top: 0, behavior: "instant" }); // snap first
                // slight defer to catch late layout shifts, then smooth confirm
                setTimeout(() => root.scrollTo({ top: 0, behavior: "smooth" }), 0);
            } catch {
                root.scrollTop = 0;
            }
        } else {
            // fallback to window if no container
            window.scrollTo({ top: 0, behavior: "instant" });
            setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 0);
        }
    }, [pathname, hash]);

    return null;
}
