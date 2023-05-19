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
`;

export const Content = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 0.8rem;
    padding-right: 4rem;

    & > svg:last-child {
        position: absolute;
        bottom: calc(-0.8rem / 1.7);
        left: calc(12rem * 2.3);
    }

    ${media.lessThan("medium")`
        padding: 0;

        & > svg:last-child {
            display: none;
        }
      `}
`;

export const Shimmers = styled.div`
    margin-top: 2.4rem;
    & > div:last-child {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 0.8rem;
    }
`;

export const Actions = styled.div`
    position: relative;
    width: 100%;
    margin-top: 5.9rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > button {
        max-width: 18rem;
    }
`;
