import { Icon } from "..";
import * as S from "./styles";

export function Header() {
    return (
        <S.Wrapper>
            <S.Logo>
                <Icon name="logo" />
                <Icon name="logo_label" />
            </S.Logo>
        </S.Wrapper>
    );
}
