import { type ReactNode, useCallback, useMemo, useState, useRef } from "react";
import * as S from "./styles";
import { Icon, Modal, PhoneField, Typography } from "..";
import { formatCurrency, onlyDigits, phoneWithDDDMask } from "../../utils";

export type HeaderInfoProps = {
    product: string;
    url: string;
    phone?: string;
    email?: string;
    value?: string | number;
};

export const HeaderInfo = ({
    product,
    url,
    email,
    phone,
    value,
}: HeaderInfoProps) => {
    const [open, setIsOpen] = useState(false);
    const [modalOperator, setModalOperator] = useState(false);
    const operatorRef = useRef<any>(null);

    const renderInfo = useCallback(
        (label: string, content: ReactNode) => (
            <S.Content>
                <Typography as="h5" color="gray9" semibold>
                    {label}
                </Typography>
                <Typography as="h5" color="gray9" semibold>
                    {content}
                </Typography>
            </S.Content>
        ),
        []
    );

    const handleOpen = useCallback(() => {
        setIsOpen((state) => !state);
    }, []);
    const handleModalOperator = useCallback(() => {
        setModalOperator((bool) => !bool);
    }, []);

    const headerInfo = useMemo(() => {
        return (
            <>
                {product && (
                    <S.Content>
                        <Typography as="h5" color="gray9" semibold>
                            Produto
                        </Typography>
                        <S.Edit>
                            <Typography as="h5" color="gray9" bold>
                                <img src={url} alt="" />
                                <span>{product}</span>
                            </Typography>
                            <Typography
                                as="h5"
                                color="gray9"
                                bold
                                onClick={handleModalOperator}
                            >
                                <Icon name="edit" />
                            </Typography>
                        </S.Edit>
                    </S.Content>
                )}
                {!!value && renderInfo("Valor", formatCurrency(Number(value)))}
                {!!(phone || email) &&
                    renderInfo(
                        "Enviar para",
                        phone ? phoneWithDDDMask(onlyDigits(phone)) : email
                    )}
            </>
        );
    }, [product, email, phone, handleModalOperator, url, value, renderInfo]);

    return (
        <S.Wrapper>
            {headerInfo}
            {!!phone && (
                <>
                    <Modal
                        title="Editar número de celular"
                        label="Digite o DDD + o número do celular"
                        isOpen={open}
                        handleOpen={handleOpen}
                        actionClick={() => {}}
                    >
                        <PhoneField
                            name="phone"
                            label=""
                            focus={open}
                            defaultValue={phone}
                            clearable
                        />
                    </Modal>
                    <Modal
                        title="Editar Operadora"
                        label="Selecione a operadora"
                        isOpen={modalOperator}
                        handleOpen={handleModalOperator}
                        actionClick={() => {}}
                    >
                        asdf
                    </Modal>
                </>
            )}
        </S.Wrapper>
    );
};
