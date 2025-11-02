import styled from "styled-components";

export const Styled = {
    Nav: styled.div`
        height: 100%;
        font-family: "Poppins", sans-serif;
        color: var(--text-muted);

        a {
            color: var(--text-muted);
            text-decoration: none;
            display: flex;
            align-items: center;
            padding: 6px 8px;
            border-radius: 8px;
            transition: background 120ms ease, color 120ms ease;
            &:hover {
                text-decoration: none;
                color: var(--text);
                background: var(--surface);
            }
            &.active {
                color: var(--primary);
            }
        }

        .title {
            margin: 14px 0 6px;
            font-size: 0.95rem;
            font-weight: 600;
            line-height: 1;
            color: var(--text);
            display: flex;
            align-items: center;
            gap: 6px;
            cursor: pointer;
            user-select: none;
            outline: none;
            white-space: nowrap;
        }
        .title:focus-visible {
            outline: 2px solid var(--primary);
            outline-offset: 2px;
            border-radius: 8px;
        }

        .caret {
            display: inline-block;
            transform: rotate(0deg);
            transition: transform 160ms ease;
            width: 1em;
        }
        .caret[data-open="true"] {
            transform: rotate(90deg);
        }

        .searchWraper {
            margin-bottom: 15px;
            position: relative;
            height: 40px;

            input {
                width: 100%;
                height: 100%;
                outline: none;
                border: 1px solid #333;
                border-radius: 10px;
                padding: 0 44px 0 14px;
                background-color: transparent;
                color: #aaa;
            }

            .clearIconWrapper {
                position: absolute;
                right: 0;
                top: 0;
                height: 100%;
                width: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                color: var(--text-muted);
            }
            .clearIconWrapper:hover {
                color: var(--text);
            }
        }

        .navlinksWrapper {
            height: calc(100% - 40px);
            overflow: auto;
            padding-left: 6px;
            padding-right: 6px;
            color: #666;
        }

        /* Collapsible measured transition */
        .collapsible {
            max-height: var(--h, 0px);
            overflow: hidden;
            transition: max-height 220ms ease;
            will-change: max-height;
        }
        .collapsibleInner {
            padding: 6px 0 4px 4px;
        }

        .subList {
            list-style: none;
            margin: 0;
            padding: 0;
        }
        .subList li a {
            padding-left: 10px;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            white-space: nowrap;
        }
    `,
};
