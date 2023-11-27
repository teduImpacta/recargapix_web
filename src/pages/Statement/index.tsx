import { useCallback, useRef, useState } from "react";
import * as S from "./styles";
import { formatCurrency, onlyDigits, phoneWithDDDMask } from "../../utils";
import {
    Button,
    Icon,
    Modal,
    PhoneField,
    TextField,
    Typography,
} from "../../components";
import { useProducts } from "../../providers";
import { useNavigate } from "react-router-dom";

export function StatementPage() {
    const [modalEmail, setModalEmail] = useState(false);
    const [modalWhats, setModalWhats] = useState(false);

    const { giftcard, navigateStep, contact } = useProducts();
    const navigation = useNavigate();

    const handleModalEmail = useCallback(() => {
        setModalEmail((state) => !state);
    }, []);

    const handleModalWhats = useCallback(() => {
        setModalWhats((state) => !state);
    }, []);

    const sendEmail = useCallback(() => {}, []);

    const mountWhatsMessage = useCallback(() => {
        const message = `Olá! Você realizou uma recarga. Para visualizar seu comprovante acesse:\n
         `;
        const link = document.createElement("a");
        link.target = "_blank";
        link.href = `https://api.whatsapp.com/send?1=pt_br&phone=55${onlyDigits(
            ""
        )}&text=${message}`;
        link.click();
    }, []);

    const sendWhats = useCallback(() => {}, []);

    const goBackHome = useCallback(() => {
        navigateStep("home");
        navigation("/");
    }, [navigation, navigateStep]);

    return (
        <S.Wrapper
            onSubmit={() => {}}
            initialData={{
                phone: onlyDigits(""),
            }}
        >
            <S.Content>
                <Typography as="h2" color="gray8" bold>
                    Recarga de{" "}
                    <span>{formatCurrency(giftcard.value ?? 0)}</span>{" "}
                    realizada!
                </Typography>
                <S.Info>
                    <Typography as="h5">Data</Typography>
                    <Typography as="h5">27/11/2023</Typography>
                </S.Info>
                <S.Info>
                    <Typography as="h5">Enviado para {contact.name}</Typography>
                    <Typography as="h5" bold>
                        {contact.value}
                    </Typography>
                </S.Info>
                <S.Info>
                    <Typography as="h5">Produto</Typography>
                    <Typography as="h5" bold>
                        {giftcard.name}
                    </Typography>
                </S.Info>
                <S.Box />
                <Typography as="h5">Pago via PIX</Typography>
                <S.Info>
                    <Typography as="h5">TX ID</Typography>
                    <Typography as="h5">
                        9e1abf33c01647aabb82a9364dca88fc
                    </Typography>
                </S.Info>
                <S.Info>
                    <Typography as="h5">E2E ID</Typography>
                    <Typography as="h5">
                        2416a68e-b42c-4073-b7d1-7c53a0f5165c
                    </Typography>
                </S.Info>
                <S.New>
                    <Button outlined onClick={goBackHome}>
                        Voltar ao início
                        <Icon name="arrow-left" />
                    </Button>
                </S.New>
            </S.Content>
            <Modal
                title="Enviar comprovante"
                label="Digite o DDD + o número do celular que deseja enviar o comprovante"
                isOpen={modalWhats}
                handleOpen={handleModalWhats}
                actionClick={sendWhats}
            >
                <PhoneField
                    name="phone"
                    label=" "
                    defaultValue={""}
                    focus={modalWhats}
                    clearable
                />
            </Modal>
            <Modal
                title="Enviar comprovante"
                label="Digite o e-mail que deseja enviar o comprovante"
                isOpen={modalEmail}
                handleOpen={handleModalEmail}
                actionClick={sendEmail}
            >
                <TextField name="email" type="email" />
            </Modal>
        </S.Wrapper>
    );
}
