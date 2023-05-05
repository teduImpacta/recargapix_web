import styled, { css } from "styled-components";

export const Wrapper = styled.header`
    ${() => css`
        width: 100%;
        margin: 0 auto;
        background-color: #ffffff;
        padding: 0.8rem 2.4rem;
        border-radius: 0%.4rem;

        &,
        ${Logo} {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    `}
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.8rem;
`;
