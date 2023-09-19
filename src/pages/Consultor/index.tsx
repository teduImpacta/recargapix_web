import { useNavigate } from "react-router-dom";
import { Button, Icon, PhoneField, TextField } from "../../components";
import { useProducts } from "../../providers";
import * as S from "./styles";
import { useCallback, useRef, useState } from "react";
import { useFetch } from "../../hooks";
import { FormHandles, SubmitHandler } from "@unform/core";
import { Consultor } from "../../dtos";
import { Service } from "../../service";
import { onlyDigits } from "../../utils";

export function ConsultorPage() {
    const ref = useRef<FormHandles>(null);
    const { navigateStep } = useProducts();
    const navigation = useNavigate();
    const [isDisabled, setDisabled] = useState(true);
    const [isSuccess, setSuccess] = useState(true);

    const { loading, request } = useFetch();

    const goBack = useCallback(() => {
        navigateStep();
        navigation("/");
    }, [navigation, navigateStep]);

    const submit: SubmitHandler<Consultor> = useCallback(
        async ({ number, phone, postalCode }) => {
            await request(
                async () =>
                    await Service.createConsultor({
                        number,
                        phone: `55${onlyDigits(phone)}`,
                        postalCode: onlyDigits(postalCode),
                    })
            );
            setSuccess(true);
        },
        [request]
    );

    const handleDisabled = useCallback(() => {
        const data = ref.current?.getData() || {};
        const isInvalid = Object.keys(data)
            .map((key) => [null, undefined, "", " "].includes(data[key]))
            .some((bool) => bool);

        if (isInvalid && !isDisabled) {
            setDisabled(true);
        } else if (!isInvalid && isDisabled) {
            setDisabled(false);
        }
    }, [ref, setDisabled, isDisabled]);

    return (
        <S.Form ref={ref} onSubmit={submit}>
            {!isSuccess && (
                <>
                    <div>
                        <PhoneField
                            label="Digite seu WhatsApp"
                            name="phone"
                            onBlur={handleDisabled}
                        />
                        <S.Content>
                            <TextField
                                label="CEP"
                                name="postalCode"
                                onChange={handleDisabled}
                            />
                            <TextField
                                label="Número"
                                name="number"
                                onChange={handleDisabled}
                            />
                        </S.Content>
                    </div>
                    <S.Actions>
                        <Button large loading={loading} disabled={isDisabled}>
                            Consultar disponibilidade <Icon name="whats" />
                        </Button>
                        <Button
                            outlined
                            large
                            onClick={goBack}
                            loading={loading}
                        >
                            Voltar
                        </Button>
                    </S.Actions>
                </>
            )}
            {isSuccess && (
                <div className="isSuccess">
                    <div>
                        <Icon name="whats-assistant" />
                        <h2>Vamos continuar pelo WhatsApp</h2>
                        <p>
                            Tudo certo! Em breve a Oi vai entrar em contato com
                            o número do WhatsApp informado.
                        </p>
                    </div>
                    <Button large outlined onClick={() => setSuccess(false)}>
                        Fechar
                    </Button>
                </div>
            )}
        </S.Form>
    );
}
