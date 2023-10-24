import { Form } from "@unform/web";
import styled, { css } from "styled-components";
import * as TextStyles from '../../components/Typography/styles'

export const Wrapper = styled<typeof Form>(Form)`
    ${({ theme }) => css`
        margin-top: 1rem;
        width: 100%;
        position: relative;
    `}
`;

export const Values = styled.div`
    ${({ theme }) => css`
        width: 100%;
        margin: 1rem 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
        gap: 1rem;
    `}
`;

export const Chip = styled.div`
    ${({ theme }) => css`
        padding: 1rem;
        border: 0.1rem solid ${theme.colors.gray2};
        border-radius: 0.4rem;
        position: relative;
        min-height: 7rem;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        cursor: pointer;

        & > div:first-child {
            position: absolute;
            top: 1rem;
            left: 1rem;
        }
    `}
`;

export const Info = styled.div`
    ${({ theme }) => css`
        width: 100%;
        margin: 1rem 0 3rem;
    `}
`;

export const Options = styled.div`
    ${({ theme }) => css`
        margin: 2.2rem 0 3rem;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 1rem;

        & > div {
            max-width: 15rem;
            margin: 0;
            justify-content: flex-start;

            ${TextStyles.Text} {
                font-size: 1.4rem;
                font-weight: 600;
                color: ${theme.colors.secondary};
            }
        }
    `}
`
