import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        color: var(--text);
        padding: 20px 18px 40px;
        line-height: 1.6;

        h1 {
            font-size: 1.4rem;
            margin: 0 0 8px;
        }
        h2 {
            font-size: 1.05rem;
            margin: 18px 0 8px;
        }
        .lede {
            color: var(--text-muted);
            margin-bottom: 14px;
        }

        .bullets {
            margin: 8px 0 0;
            padding-left: 18px;
        }

        .note {
            margin-top: 10px;
            color: var(--text-muted);
            font-size: 0.92rem;
        }

        .try {
            margin-top: 16px;
        }

        /* Prev + Next (expanded from next-only) */
        .nextPrev {
            margin-top: 24px;
            display: flex;
            justify-content: space-between; /* prev left, next right */
            gap: 12px;
        }
        .nextPrev a,
        .nextPrev .next {
            /* keep original .next styles intact */
            color: var(--primary);
            text-decoration: none;
            border: 1px solid var(--surface-400, #333);
            padding: 8px 12px;
            border-radius: 10px;
        }
        .nextPrev a:hover,
        .nextPrev .next:hover {
            background: var(--surface);
        }
    `,

    Code: styled.div`
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
    `,
};
