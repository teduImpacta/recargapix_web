import { useNavigate } from "react-router-dom";
import swr from "swr";

import { Button, CarrierField, Icon, PhoneField } from "../../components";
import { Shimmer } from "../../styles";
import * as S from "./styles";
import { useCallback, useMemo, useState } from "react";
import { useProducts } from "../../providers";
import { useFetch } from "../../hooks";
import { Service } from "../../service";

export function RechargePage() {
    const [ddd, setDddKey] = useState<string | null>(null);

    const { loading, request } = useFetch();
    const { navigateStep } = useProducts();
    const navigation = useNavigate();

    const { data: carriers } = swr(
        ddd ? `carriers_by_ddd_${ddd}` : null,
        async () => {
            const { data } = await request(
                async () => await Service.carriersDdd(ddd!)
            );
            return data;
        }
    );

    const goBack = useCallback(() => {
        navigateStep();
        navigation("/");
    }, [navigation, navigateStep]);

    const shimmer = useMemo(() => {
        return (
            loading && (
                <S.Shimmers>
                    <Shimmer width="14rem" height="1.8rem" />
                    <div>
                        <Shimmer width="8rem" height="8rem" />
                        <Shimmer width="8rem" height="8rem" />
                        <Shimmer width="8rem" height="8rem" />
                    </div>
                </S.Shimmers>
            )
        );
    }, [loading]);

    const renderCarriers = useMemo(() => {
        return (
            Array.isArray(carriers) &&
            carriers.length >= 1 && (
                <CarrierField
                    label="Selecione a operadora"
                    name="carrier"
                    items={carriers.map(({ id, logo, name }) => ({
                        icon: logo,
                        name,
                        value: id,
                    }))}
                />
            )
        );
    }, [carriers]);

    return (
        <S.Form onSubmit={() => {}}>
            <S.Content>
                <PhoneField
                    label="Digite o DDD + o número do celular"
                    name="phone"
                    onDDDChange={setDddKey}
                />
                <Icon name="women" />
            </S.Content>
            {shimmer}
            {renderCarriers}
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
