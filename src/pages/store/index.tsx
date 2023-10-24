import useSWR from "swr";
import {
    Button,
    CheckboxField,
    HeaderInfo,
    PhoneField,
    TextField,
    Typography,
} from "../../components";
import { useProducts } from "../../providers";
import * as S from "./styles";
import { Service } from "../../service";
import { useNavigate, useParams } from "react-router-dom";
import { useCallback, useEffect, useRef, useState } from "react";
import { formatCurrency, isArrayFull } from "../../utils";
import { GiftCardValue } from "../../dtos";
import { FormHandles } from "@unform/core";

type Params = {
    id: string;
};

export function StorePage() {
    const formRef = useRef<FormHandles>(null);
    const [isPhone, setIsPhone] = useState(true);
    const [selectedValue, setSelectedValue] = useState({} as GiftCardValue);

    const { id } = useParams<Params>();
    const { giftcard, navigateStep } = useProducts();
    const navigation = useNavigate();

    const { data: values } = useSWR(
        "giftcard-values",
        async () => {
            const { data } = await Service.getGiftCardValue(id!);
            return data.data;
        },
        {
            revalidateOnFocus: false,
            revalidateOnReconnect: false,
        }
    );

    const goBack = useCallback(() => {
        if (!selectedValue.value) {
            navigateStep("giftcard");
            navigation("/giftcard");
            return;
        }
        navigateStep("payment");
        navigation("/payment");
    }, [navigation, navigateStep, selectedValue]);

    return (
        <S.Wrapper
            ref={formRef}
            onSubmit={() => {}}
            initialData={{
                phone: isPhone,
                email: !isPhone,
            }}
        >
            <HeaderInfo
                product={giftcard.name}
                url={giftcard.logo}
                value={selectedValue.value}
            />

            {!selectedValue.value && (
                <S.Values>
                    {isArrayFull(values) &&
                        values?.map((value) => (
                            <S.Chip
                                key={value.id}
                                onClick={() => {
                                    setSelectedValue(value);
                                }}
                            >
                                <Typography bold as="small" color="gray8">
                                    R$
                                </Typography>
                                <Typography color="gray8" as="h3" bold>
                                    {formatCurrency(value.value).replace(
                                        "R$",
                                        ""
                                    )}
                                </Typography>
                                {!!value.description && (
                                    <Typography as="small" color="gray5">
                                        {value.description}
                                    </Typography>
                                )}
                            </S.Chip>
                        ))}
                </S.Values>
            )}
            {!!selectedValue.value && (
                <S.Info>
                    <Typography semibold>
                        Para onde deseja enviar o voucher do produto?
                    </Typography>
                    <S.Options>
                        <CheckboxField
                            name="Por SMS"
                            label="phone"
                            onChange={(ev) => {
                                setIsPhone(ev.target.checked);
                                formRef.current?.setFieldValue(
                                    "email",
                                    !ev.target.checked
                                );
                            }}
                        />
                        <CheckboxField
                            name="E-mail"
                            label="email"
                            onChange={(ev) => {
                                setIsPhone(!ev.target.checked);
                                formRef.current?.setFieldValue(
                                    "phone",
                                    ev.target.checked
                                );
                            }}
                        />
                    </S.Options>
                    {isPhone && (
                        <PhoneField
                            label="Digite o DDD + o número do celular"
                            name="cellphone"
                        />
                    )}
                    {!isPhone && (
                        <TextField name="mail" label="Digite o e-mail" />
                    )}
                </S.Info>
            )}
            <Button outlined large onClick={goBack}>
                {!selectedValue.value ? "Voltar" : "Fazer pagamento"}
            </Button>
        </S.Wrapper>
    );
}
