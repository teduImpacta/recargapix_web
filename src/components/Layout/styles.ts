import styled, { ThemeConsumer, css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
    ${() => css`
        width: min(120rem, 100%);
        margin-inline: auto;
        height: 100vh;
        overflow: hidden;
        display: grid;
        grid-template-rows: 6rem minmax(41rem, max-content) 20rem;
        row-gap: 0.4rem;
        padding: 0 2.4rem;

        ${media.lessThan("medium")`
            grid-template-rows: 6rem calc(100vh - 6.4rem);

            & > footer:last-child {
                display: none;
            }
        `}
    `}
`;

export const Main = styled.main`
    ${() => css`
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        background-color: #fff;
        border-radius: 0.4rem;
    `}
`;

export const Col = styled.div`
    ${() => css`
        position: relative;
        display: flex;
        align-items: start;
        justify-content: flex-start;
        flex-direction: column;
        padding: 0 7.3rem;

        &:first-child {
            & > svg:last-child {
                position: absolute;
                bottom: 0;
                left: 0;
            }
        }
        &:last-child {
            border-right: 0.1 solid #f1f3f5;
        }

        ${media.lessThan("medium")`
            padding: 0;
            &:last-child {

            }
        `}
    `}
`;

export const Content = styled.div`
    ${() => css`
        margin-top: 9.6rem;
        z-index: 10;

        ${Title}, ${Text} {
            white-space: nowrap;
            color: #365c7d;
            width: 100%;
        }
    `}
`;

export const Title = styled.h1`
    font-size: 2.8rem;
    line-height: 4rem;
    font-weight: 700;
`;

export const Text = styled.p`
    font-size: 1.4rem;
    line-height: 2rem;
    font-weight: 600;
`;

export const Products = styled.div`
    width: 100%;
    margin-top: 5rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.8rem;
    z-index: 10;
`;

export const Product = styled.div`
    padding: 1.3rem 0.8rem;
    border-radius: 0.4rem;
    border: 0.1rem solid #e9ecef;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    width: 9rem;
    height: 9rem;
    cursor: pointer;
    color: #343a40;

    & > p {
        text-align: center;
        font-size: 1.2rem;
        line-height: 1.6rem;
        color: #343a40;
        font-weight: 700;
    }

    &:hover {
        border-color: #35dde3;
        & > p, & > svg {
            color: #35dde3;
        }
    }
`;
