import styled from "styled-components";

export const Styled = {
    Playground: styled.div`
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
    `,
};
