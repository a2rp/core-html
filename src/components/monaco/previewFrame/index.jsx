import React, { useEffect, useRef } from "react";

export default function PreviewFrame({ html }) {
    const ref = useRef(null);

    useEffect(() => {
        const iframe = ref.current;
        if (!iframe) return;
        // Keep lesson code in an opaque-origin sandbox, separate from the app.
        iframe.srcdoc = html || "<!doctype html><html><body></body></html>";
    }, [html]);

    return (
        <iframe
            ref={ref}
            title="Preview"
            sandbox="allow-scripts"
            style={{
                width: "100%",
                height: "420px",
                border: "0",
                background: "var(--bg)",
            }}
        />
    );
}
