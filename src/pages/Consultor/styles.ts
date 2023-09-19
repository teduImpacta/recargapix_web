import styled from "styled-components";
import { Form as Unform } from "@unform/web";
import media from "styled-media-query";

export const Form = styled(Unform)`
    width: 100%;
    height: 100%;
    padding: 5rem 0;
    display: flex;
    align-items: start;
    justify-content: space-between;
    flex-direction: column;

    & > div:first-child:not(.isSuccess) {
        width: 100%;
        display: flex;
        align-items: start;
        justify-content: flex-start;
        gap: 1.6rem;
        flex-direction: column;
    }

    & > div.isSuccess {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;

        & > div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;

            & > h2 {
                margin: 2.4rem auto 0.8rem;
                font-size: 2rem;
                font-weight: bold;
                color: #343a40;
            }

            & > p {
                font-size: 1.4rem;
                color: #69737d;
            }
        }
    }
`;

export const Content = styled.div`
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 19rem 12rem;
    column-gap: 3rem;
`;

export const Actions = styled.div`
    position: relative;
    width: 100%;
    margin-top: 5.9rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    flex-direction: column;
    gap: 4rem;

    & > button:first-child:not([data-isDisabled="true"]) {
        background-color: #35dde3;
    }
`;
