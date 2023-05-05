import { createGlobalStyle } from "styled-components";
import RegularWoff from "~/assets/fonts/nunito-sans-v12-latin-regular.woff";
import RegularWoff2 from "~/assets/fonts/nunito-sans-v12-latin-regular.woff2";
import SemiWoff from "~/assets/fonts/nunito-sans-v12-latin-600.woff";
import SemiWoff2 from "~/assets/fonts/nunito-sans-v12-latin-600.woff2";
import BoldWoff from "~/assets/fonts/nunito-sans-v12-latin-700.woff";
import BoldWoff2 from "~/assets/fonts/nunito-sans-v12-latin-700.woff2";
import media from "styled-media-query";

export const Global = createGlobalStyle`
    @font-face {
		font-family: 'Nunito Sans';
		font-style: normal;
		font-weight: 400;
		src: local('Nunito Sans'),
				url(${RegularWoff2}) format('woff2'),
				url(${RegularWoff}) format('woff');
	}

	@font-face {
		font-family: 'Nunito Sans';
		font-style: normal;
		font-weight: 600;
		src: local('Nunito Sans'),
				url(${SemiWoff2}) format('woff2'),
				url(${SemiWoff}) format('woff');
	}

	@font-face {
		font-family: 'Nunito Sans';
		font-style: normal;
		font-weight: 700;
		src: local('Nunito Sans'),
				url(${BoldWoff2}) format('woff2'),
				url(${BoldWoff}) format('woff');
	}


    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: antialiased;
    }

    html {
        font-size: 62.5%;
    }

    html, body, .root {
        width: 100%;
        height: 100%;
        font-size: 'Nunito Sans';
        background-color: #f1f3f5;

        ${media.lessThan("medium")`
            background-color: '#F5F5F5';
        `}
    }
`;
