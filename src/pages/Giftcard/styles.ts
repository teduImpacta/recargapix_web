import styled, { css } from "styled-components";
import { Form as Unform } from "@unform/web";
import media from "styled-media-query";

export const Form = styled(Unform)`
    ${({ theme }) => css`
        margin-top: 1rem;
        width: 100%;

        & > button {
            margin-top: 2.5rem;
        }
    `}
`;

export const Categories = styled.div`
    ${({ theme }) => css`
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fit, 10.2rem);
        gap: 0.7rem;
    `}
`;

type CategoryProps = {
    isOpen?: boolean;
};

export const Category = styled.div<CategoryProps>`
    ${({ theme, isOpen }) => css`
        padding: 0.8rem;
        border: 0.1rem solid #e9ecef;
        border-radius: 0%.4rem;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-size: 1.2rem;
        color: #69737d;
        height: 4.4rem;
        cursor: pointer;

        ${!!isOpen &&
        css`
            border-color: #35dde3;
            color: #35dde3;
        `}
    `}
`;

export const Products = styled.div`
    ${({ theme }) => css`
        margin-top: 2.4rem;
        height: 15rem;
        overflow-y: auto;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fit, 9rem);
        gap: 1rem;

        &::-webkit-scrollbar {
            height: 1rem;
            padding: 0;
        }

        &::-webkit-scrollbar-track {
            background-color: #f1f3f5;
            padding: 0;
        }

        &::-webkit-scrollbar-thumb {
            background-color: #35dde3;
            border-radius: 0.8rem;
            padding: 0;
        }
    `}
`;

export const Product = styled.div`
    ${({ theme }) => css`
        height: 8rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
        padding: 1.45rem 0.95rem;
        border: 0.1rem solid #e9ecef;
        border-radius: 0.4rem;
        gap: 0.5rem;
        cursor: pointer;

        &:hover {
            border-color: #35dde3;
        }

        & > p {
            text-align: center;
            font-size: 1.2rem;
            color: #212529;
            font-weight: bold;
        }

        & > img {
            max-width: 100%;
            width: 2.6rem;
            height: 2.6rem;
            object-fit: contain;
        }
    `}
`;
type ImgProps = {
    url: string
}
