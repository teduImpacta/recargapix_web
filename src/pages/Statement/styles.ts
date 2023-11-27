import { Form } from "@unform/web";
import styled, { css } from "styled-components";
import media from "styled-media-query";
import { buttonModifiers } from "../../components/Button/styles";

export const Wrapper = styled(Form)`
    ${({ theme }) => css`
        width: min(60rem, 100%);
        position: relative;
        background-color: ${theme.colors.gray0};
        height: 100%;

        ${media.lessThan("medium")`
        width: 100%;
    `}
    `}
`;

export const Content = styled.div`
    ${({ theme }) => css`
        padding: ${theme.spacings[3]} ${theme.spacings[2]} 0;
        width: 100%;
        position: relative;

        & > div:first-child {
            & > h2 {
                span {
                    color: ${theme.colors.success};
                }
            }

            ${media.lessThan("medium")`
            padding-bottom: ${theme.spacings[3]};
            margin-bottom: ${theme.spacings[2]};
            border-bottom: 0.1rem solid ${theme.colors.gray2};
        `}
        }

        & > h2 ~ h4 {
            margin-top: ${theme.spacings[3]};
        }
    `}
`;

export const Info = styled.div`
    ${({ theme }) => css`
        margin-top: calc(${theme.spacings[1]} / 2);
        display: flex;
        align-items: center;
        justify-content: space-between;

        & > h5:last-child {
            width: min(21rem, 100%);
            overflow-wrap: break-word;
            text-align: right;
        }
    `}
`;

export const Box = styled.div`
    ${({ theme }) => css`
        width: 100%;
        margin: ${theme.spacings[1]} 0;
        border-top: 0.1rem solid ${theme.colors.gray2};
    `}
`;

export const Actions = styled.div`
    ${({ theme }) => css`
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: ${theme.spacings[3]} ${theme.spacings[2]};

        button {
            width: min(20rem, 100%);
        }

        ${media.lessThan("medium")`
        position: absolute;
        bottom: ${theme.spacings[11]};

        padding: 0 ${theme.spacings[2]};
        flex-direction: column;

        button {
            width: 100%;
        }

        button ~ button {
            margin-top: ${theme.spacings[1]};
        }

        button:first-child {
            ${buttonModifiers.base("#35dde3")};
            ${buttonModifiers.large()};

            p {
                font-size: 1.2rem;
                color: #69737d;
                font-weight: 700;
            }
        }

        button:last-child {
            ${buttonModifiers.outlined()};

            p {
                font-size: 1.2rem;
                color: #35dde3;
                font-weight: 700;
            }
        }
    `}
    `}
`;

export const New = styled.div`
    ${({ theme }) => css`
        width: 100%;
        margin: ${theme.spacings[3]} 0;
        display: flex;
        align-items: center;
        justify-content: end;

        /* & > button {
            padding: 0;
            &,
            & > div {
                width: max-content;
            }

            & > div > h4 {
                gap: ${theme.spacings[2]};
            }
        } */
    `}
`;
