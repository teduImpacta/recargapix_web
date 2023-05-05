import styled, { css } from "styled-components";

type ShimmerProps = {
    width: string;
    height: string;
};

export const Shimmer = styled.div<ShimmerProps>`
    ${({ width, height }) => css`
        width: ${width};
        height: ${height};
        border-radius: 0.4rem;
        background-color: #dee2e6;
        background-image: linear-gradient(
            to right,
            #dee2e6 0%,
            #ced4da 20%,
            #dee2e6 40%,
            #dee2e6 100%
        );
        background-size: 80rem 10.4rem;
        background-repeat: no-repeat;
        display: inline-block;
        animation: Shimmer 1s linear infinite forwards;

        @keyframes Shimmer {
            0% {
                background-position: -46.8rem 0;
            }
            100% {
                background-position: 46.8rem 0;
            }
        }
    `}
`;
