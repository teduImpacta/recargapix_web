import { useNavigate } from "react-router-dom";
import { Button, Icon, PhoneField } from "../../components";
import { Shimmer } from "../../styles";
import * as S from "./styles";
import { useCallback } from "react";

export function RechargePage() {
    const navigation = useNavigate();

    const goBack = useCallback(() => {
        navigation("/");
    }, [navigation]);

    return (
        <S.Form onSubmit={() => {}}>
            <S.Content>
                <PhoneField
                    label="Digite o DDD + o número do celular"
                    name="phone"
                />
                <Icon name="women" />
            </S.Content>
            <S.Shimmers>
                <Shimmer width="14rem" height="1.8rem" />
                <div>
                    <Shimmer width="8rem" height="8rem" />
                    <Shimmer width="8rem" height="8rem" />
                    <Shimmer width="8rem" height="8rem" />
                </div>
            </S.Shimmers>
            <S.Actions>
                <Button large outlined onClick={goBack}>
                    Voltar
                </Button>
                <Button disabled large>
                    Continuar
                </Button>
            </S.Actions>
        </S.Form>
    );
}
