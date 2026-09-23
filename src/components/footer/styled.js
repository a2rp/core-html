import styled from "styled-components";

const Wrapper = styled.footer`
    background: var(--surface);
    color: var(--text-muted);
    margin-top: 50px;
    overflow: hidden;
    padding: var(--space-4);
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--space-4);
    border-top: 1px solid var(--border);

    .links {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex-wrap: wrap;
        gap: 7px;
    }

    .links a {
        display: inline-grid;
        place-items: center;
        width: 30px;
        height: 30px;
        border: 1px solid var(--border);
        border-radius: var(--radius-sm);
        color: var(--text-muted);
        text-decoration: none;
        transition:
            color 160ms ease,
            border-color 160ms ease,
            box-shadow 160ms ease;
    }

    .links a:hover {
        color: var(--primary);
        border-color: var(--primary);
        box-shadow: var(--focus-ring);
    }

    .links svg {
        width: 15px;
        height: 15px;
    }

    @media (width < 900px) {
        padding: var(--space-4);
        flex-direction: column;
        align-items: flex-start;
        gap: var(--space-3);

        .links {
            justify-content: flex-start;
        }
    }
`;

const Col = styled.div`
    line-height: 1.6;

    a {
        color: var(--text);
        font-weight: 600;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
            text-underline-offset: 3px;
        }

        &:focus-visible {
            outline: var(--focus-ring);
            border-radius: var(--radius-sm);
        }
    }
`;

export const Styled = { Wrapper, Col };
