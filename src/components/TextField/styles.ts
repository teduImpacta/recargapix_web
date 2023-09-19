import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    ${() => css`
        width: 100%;
    `}
`;

export const Content = styled.div`
    ${({ theme }) => css`
        width: 100%;
        margin-top: 0.8rem;

        input {
            width: 100%;
            height: 4.8rem;
            appearance: none;
            outline: none;
            border: 0.1rem solid #ced4da;
            padding: 0.8rem 1.6rem;
            border-radius: 0.4rem;
            font-size: 1.8rem;
            line-height: 2.6rem;
            color: #343a40;

            &:focus,
            &:not(:placeholder-shown) {
                border-color: #35dde3;
            }
        }
    `}
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
