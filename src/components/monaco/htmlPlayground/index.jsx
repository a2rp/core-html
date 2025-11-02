import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Styled } from "./styled";
import Editor from "@monaco-editor/react";
import useMonacoThemeSync from "../useMonacoThemeSync";
import PreviewFrame from "../previewFrame";

const DEBOUNCE_MS = 300;

/* Lightweight, accessible confirm dialog */
function ConfirmDialog({ open, title = "Reset", desc = "Reset to the lesson starter?", onConfirm, onCancel }) {
    const dialogRef = useRef(null);
    const lastActiveRef = useRef(null);

    useEffect(() => {
        if (open) {
            lastActiveRef.current = document.activeElement;
            // Focus first focusable (Confirm)
            const btn = dialogRef.current?.querySelector("button.confirm");
            btn?.focus();
            const onKey = (e) => {
                if (e.key === "Escape") onCancel?.();
            };
            window.addEventListener("keydown", onKey);
            return () => window.removeEventListener("keydown", onKey);
        } else {
            // restore focus
            lastActiveRef.current && lastActiveRef.current.focus?.();
        }
    }, [open, onCancel]);

    if (!open) return null;

    return (
        <div className="modalOverlay" role="presentation" onClick={onCancel}>
            <div
                className="modal"
                role="dialog"
                aria-modal="true"
                aria-labelledby="confirm-title"
                aria-describedby="confirm-desc"
                ref={dialogRef}
                onClick={(e) => e.stopPropagation()}
            >
                <h3 id="confirm-title">{title}</h3>
                <p id="confirm-desc">{desc}</p>
                <div className="modalBtns">
                    <button className="btn danger confirm" onClick={onConfirm}>
                        Reset
                    </button>
                    <button className="btn" onClick={onCancel}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}

export default function HtmlPlayground({ storageKey, initialHtml }) {
    const [code, setCode] = useState(() => {
        try {
            const saved = localStorage.getItem(storageKey);
            if (typeof saved === "string" && saved.length) return saved;
        } catch { }
        return initialHtml;
    });

    const [html, setHtml] = useState(code);
    const [confirmOpen, setConfirmOpen] = useState(false);
    const theme = useMonacoThemeSync(); // "vs-dark" | "light"
    const timerRef = useRef(null);

    // Persist on change
    useEffect(() => {
        try { localStorage.setItem(storageKey, code); } catch { }
    }, [code, storageKey]);

    // Debounced preview
    useEffect(() => {
        clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => setHtml(code), DEBOUNCE_MS);
        return () => clearTimeout(timerRef.current);
    }, [code]);

    const handleRun = useCallback(() => setHtml(code), [code]);

    const openConfirm = useCallback(() => setConfirmOpen(true), []);
    const closeConfirm = useCallback(() => setConfirmOpen(false), []);

    const confirmReset = useCallback(() => {
        setConfirmOpen(false);
        setCode(initialHtml);
        setHtml(initialHtml);
        try { localStorage.setItem(storageKey, initialHtml); } catch { }
    }, [initialHtml, storageKey]);

    const handleCopy = useCallback(async () => {
        try {
            await navigator.clipboard.writeText(code);
        } catch {
            /* no-op */
        }
    }, [code]);

    const options = useMemo(() => ({
        minimap: { enabled: false },
        fontSize: 14,
        scrollBeyondLastLine: false,
        wordWrap: "on",
        automaticLayout: true,
        tabSize: 2,
        insertSpaces: true,
    }), []);

    return (
        <Styled.Playground>
            <div className="toolbar" role="toolbar" aria-label="Editor actions">
                <div className="left">
                    <strong>HTML</strong>
                    <span className="hint">Autosaves • Ctrl/Cmd+Enter to Run</span>
                </div>
                <div className="right">
                    <button onClick={handleRun} className="btn">Run</button>
                    <button onClick={handleCopy} className="btn" title="Copy to clipboard">Copy</button>
                    <button onClick={openConfirm} className="btn danger" title="Reset to starter">
                        Reset
                    </button>
                </div>
            </div>

            <div className="grid">
                <div className="pane editorPane" aria-label="HTML editor">
                    <Editor
                        height="420px"
                        defaultLanguage="html"
                        theme={theme}
                        value={code}
                        onChange={(v) => setCode(v ?? "")}
                        options={options}
                        onMount={(editor, monaco) => {
                            editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, () => {
                                setHtml(editor.getValue());
                            });
                        }}
                    />
                </div>

                <div className="pane previewPane" aria-label="Live preview">
                    <PreviewFrame html={html} />
                </div>
            </div>

            {/* Custom confirm dialog */}
            <ConfirmDialog
                open={confirmOpen}
                title="Reset editor?"
                desc="This will discard your changes and restore the lesson starter."
                onConfirm={confirmReset}
                onCancel={closeConfirm}
            />
        </Styled.Playground>
    );
}
