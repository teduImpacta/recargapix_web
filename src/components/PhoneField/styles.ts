import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    ${() => css``}
`;

export const Content = styled.div`
    ${() => css`
        width: 100%;
        margin-top: 0.8rem;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        position: relative;

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
        input:first-child {
            max-width: 6rem;
            margin-right: 0.4rem;
        }
    `}
`;

export const FaultInput = styled.input`
    display: none;
`;

export const Clear = styled.div`
    ${() => css`
        width: 1.6rem;
        height: 1.6rem;
        position: relative;
        z-index: 30;
        cursor: pointer;

        &:after,
        &:before {
            position: absolute;
            top: 50%;
            left: calc(50% - 1.2rem);
            content: "";
            width: 0.1rem;
            height: 1.6rem;
            background-color: #35dde3;
        }

        &:before {
            transform: translate(calc(-50% - 1.2rem), -50%) rotate(45deg);
        }

        &:after {
            transform: translate(calc(-50% - 1.2rem), -50%) rotate(-45deg);
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
