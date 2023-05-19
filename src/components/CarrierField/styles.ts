import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
    ${() => css`
        width: 100%;
        margin-top: 2.4rem;
        ${media.lessThan("medium")`
        margin-top: 1.6rem;
    `}
    `}
`;

export const Content = styled.div`
    ${() => css`
        width: min(40rem, 100%);
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
        gap: 0.8rem;
        place-items: center;
        cursor: pointer;
        margin-top: 0.8rem;

        ${media.lessThan("medium")`
        grid-template-columns: repeat(3, 10rem);
    `}
    `}
`;

export const FaultInput = styled.input`
    display: none;
`;

export const Label = styled.label`
    font-size: 1.4rem;
    line-height: 1.8rem;
    font-weight: 600;
    color: #69737d;
`;

export const Message = styled.label`
    font-size: 1rem;
    line-height: 1.2rem;
    font-weight: 600;
    color: #cf3e3e;
`;

export const Chip = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    width: 8rem;
    height: 8rem;
    padding: 1.6rem;
    flex-direction: column;
    text-align: center;
    border: 0.15rem solid #ced4da;
    border-radius: 0.4rem;

    ${media.lessThan("medium")`
            width: 10rem;
            height: 10rem;
            padding: 0.8rem;
        `}

    img {
        width: 1.6rem;
        height: 1.6rem;
        object-fit: cover;
    }
`;
