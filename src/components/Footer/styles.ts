import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.footer`
    ${() => css`
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        span {
            color: #35dde3;
        }

        ${media.lessThan("medium")`
        display: none;
    `}
    `}
`;

export const Content = styled.div`
    ${() => css`
        padding: 0 4rem;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);

        & > div:last-child > ${InfoContact} {
            flex-direction: column;
            align-items: start;
            justify-content: start;

            ${Link} {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 0.4rem;
                color: #343a40;
            }
        }

        ${media.lessThan("medium")`
            display: none;
        `}

        & ~ p {
            ${media.greaterThan("small")`
            display: none;
        `}
        }
    `}
`;

export const InfoContact = styled.div`
    ${() => css`
        margin: 0.8rem 0;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 0.4rem;
        color: #35dde3;

        & > svg {
            cursor: pointer;
        }
    `}
`;

export const Link = styled.a.attrs({
    rel: "noopener norreferer",
    target: "_blank",
})`
    ${() => css`
        width: max-content;
        height: max-content;
        text-decoration: none;
    `}
`;

export const Text = styled.h5`
    font-size: 1.4rem;
    line-height: 1.8rem;
    color: #343a40;
    font-weight: 600;
`;

export const Small = styled.small`
    font-size: 1rem;
    line-height: 1.2rem;
    color: #69737d;
`;
