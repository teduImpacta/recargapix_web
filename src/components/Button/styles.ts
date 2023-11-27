import styled, { css } from "styled-components";
import { type ButtonProps } from ".";

export const buttonModifiers = {
    outlined: () => css`
        background-color: transparent;
    `,
    large: () => css`
        padding: 1.6rem 4rem;
    `,
    disabled: () => css`
        border: 0.1rem solid #ced4da;
        background-color: #ced4da;
        cursor: not-allowed;
    `,
    success: () => css`
        background-color: #3fd65f;
        border-color: #3fd65f;

        span {
            color: #f9fafb;
        }
    `,
    base: (color: string) => css`
        border: 0.1rem solid ${color};
        background-color: ${color};
        padding: 0.8rem 3.2rem;
        border-radius: 0.4rem;
        cursor: pointer;
    `,
    text: () => css`
        background-color: transparent;
        border: none;
        p {
            color: #35dde3;
        }
    `,
};

type WrapperProps = Pick<
    ButtonProps,
    "disabled" | "large" | "outlined" | "success" | "text" | "color" | "loading"
>;

export const Wrapper = styled.button<WrapperProps>`
    ${({ outlined, large, disabled, success, text, color, loading }) => css`
        width: 100%;

        &,
        & > span {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: calc(0.8rem / 2);
            font-size: 1.2rem;
            line-height: 1.6rem;
            color: ${color};
        }

        ${!!loading &&
        css`
            ${Loading} {
                display: inline-block;
            }
            & > span {
                visibility: hidden;
            }
        `}

        ${buttonModifiers.base(color!)};
        ${!!outlined && buttonModifiers.outlined()};
        ${!!large && buttonModifiers.large()};
        ${!!text && buttonModifiers.text()};
        ${!!success && buttonModifiers.success()};
        ${!!disabled && buttonModifiers.disabled()};
    `}
`;

type LoadingProps = {
    color: string;
};

export const Loading = styled.div<LoadingProps>`
    ${({ color }) => css`
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 1.6rem;
        height: 1.6rem;
        border: 0.2rem solid ${color};
        border-bottom-color: transparent;
        border-radius: 50%;
        display: none;
        box-sizing: border-box;
        animation: rotation 1s linear infinite;

        @keyframes rotation {
            0% {
                transform: translate(-50%, -50%) rotate(0deg);
            }
            100% {
                transform: translate(-50%, -50%) rotate(360deg);
            }
        }
    `}
`;
