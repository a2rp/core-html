import styled from "styled-components";

export const Styled = {
    Page: styled.main`
        display: grid;
        gap: 16px;
        padding: 16px;
        max-width: 1200px;
        margin: 0 auto;

        .pageHeader {
            display: grid;
            gap: 8px;
        }

        .lede {
            color: var(--text-muted);
            font-size: 15px;
        }

        .presetBar {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            margin: 8px 0 4px;
        }

        .presetBtn {
            appearance: none;
            border: 1px solid var(--border);
            background: var(--card);
            color: var(--text);
            padding: 6px 10px;
            border-radius: var(--radius-xl, 999px);
            font-size: 14px;
            cursor: pointer;
            transition: transform 120ms ease, box-shadow 120ms ease;
        }
        .presetBtn:hover {
            transform: translateY(-1px);
        }
        .presetBtn.isActive {
            border-color: var(--primary);
            box-shadow: 0 0 0 3px
                color-mix(in oklab, var(--primary), transparent 80%);
        }

        .note {
            font-size: 14px;
            color: var(--text-muted);
            border-left: 3px solid var(--primary);
            padding: 8px 12px;
            background: color-mix(in oklab, var(--primary), transparent 92%);
            border-radius: 8px;
        }

        .refs ul {
            padding-left: 18px;
            line-height: 1.8;
        }

        .srOnly {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
        }

        /* Prev + Next */
        .nextPrev {
            margin-top: 24px;
            display: flex;
            justify-content: space-between; /* prev left, next right */
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
    `,
};
