import { useCallback, useEffect, useRef, useState } from "react";
import { useProducts } from "../../providers";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import { Button, HeaderInfo, Icon, Typography } from "../../components";

const pixcode = `00020101021226770014BR.GOV.BCB.PIX2555api.itau/pix/qr/v2/2c1eb2ab-6547-450e-81af-dd70070abd995204000053039865802BR5925GRUPOCARD COMERCIO DE CAR6009SAO PAULO62070503***63047CF9`;

export function PaymentPage() {
    const [expiredIn, setExpiredIn] = useState(180);
    const [isCopy, setIsCopy] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const timeRefInterval = useRef<any>(null);
    const validateRefInterval = useRef<any>(null);
    const { navigateStep, giftcard } = useProducts();
    const navigation = useNavigate();

    const clickCopy = useCallback(async () => {
        const faultInput = document.createElement("textarea");
        faultInput.value = pixcode;

        faultInput.style.position = "absolute";
        faultInput.style.left = "-999999px";

        document.body.prepend(faultInput);

        faultInput.focus();
        faultInput.select();
        faultInput.setSelectionRange(0, 999999);

        if (navigator && "clipboard" in navigator) {
            await navigator.clipboard.writeText(faultInput.value);
        } else {
            document.execCommand("copy");
        }

        faultInput.remove();

        setIsCopy(true);
    }, []);

    const getTime = useCallback((time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;

        const formatTime = (value: unknown) => {
            const strValue = String(value);
            return `${Number(value) < 10 ? `0${strValue}` : strValue}`;
        };

        return `${formatTime(minutes)}:${formatTime(seconds)}`;
    }, []);

    const handleOpen = useCallback(() => {
        navigateStep("statement");
        navigation("/statement");
    }, [navigateStep, navigation]);

    const clearIntervals = useCallback(() => {
        clearInterval(timeRefInterval.current);
        clearInterval(validateRefInterval.current);
    }, [timeRefInterval, validateRefInterval]);

    const handleCancel = useCallback(() => {
        clearIntervals();
        navigateStep("giftcard");
        navigation("/giftcard");
    }, [clearIntervals, navigateStep, navigation]);

    const validateConfirmRecharge = useCallback(() => {
        timeRefInterval.current = setInterval(() => {
            setExpiredIn((time) => time - 1);
        }, 1000);
    }, [timeRefInterval]);

    useEffect(() => {
        if (expiredIn === 150) {
            clearIntervals();
            handleOpen();
        }
    }, [expiredIn, clearIntervals, handleOpen]);

    useEffect(() => {
        return () => {
            clearIntervals();
        };
    }, [clearIntervals]);

    useEffect(() => {
        validateConfirmRecharge();
    }, [validateConfirmRecharge]);

    return (
        <S.Wrapper onSubmit={() => {}}>
            <HeaderInfo
                product={giftcard.name}
                url={giftcard.logo}
                value={giftcard.value}
            />
            <S.Content>
                <Typography as="h5">
                    Escaneie ou copie QR Code para efetuar o pagamento
                </Typography>
                <S.CodeContent>
                    <div>
                        <S.Qrcode
                            alt="Qrcode de pagamento"
                            title="Qrcode de pagamento"
                            src={`data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAjoAAAI6AQAAAAAGM99tAAAERElEQVR4nO3aUW7bQAwEUAI6gI+kq/tIPoCAbUTOkJTlIB8tUAaY/Uhlr/TcD3M14trWvxlPEyRIkCBBggQJEiRI0BUyjI1Hj8PW8+uP7T7/sq+XX7P+Xlyxv3jRLkjQWAjnb+fRESRe8o9rfh4u9/fyWkGCZkIvzFWJvL33VR2nESVy5MQmSNAvgWLJf1v3Ld7zssEdQJCg3wTx+08X6aVqx+vEP0GQoF8ALc7tDOf1HgsDBlPOT/lIkKD/D2FsLaH/+IcXCRI0FmrjGf0VHqFEsO6v89bQuy91mSBBAyHEFdv4fsQaZvVzxA0haiLaLUcmeUGChkLLv/pB+mCJGLL6GWs4UbEGj6eCBM2FznKIwoi3N+KtybJC6xMPQYImQ/jqr8W+yWtjOzwrxrsv/eiIahIkaC6EDopZpvFsgp9v7nGE1b5r7+1DQYKGQWEwtfvin2RvreTJcbu4xRpBgmZBntAZznEbeORFa/WJ2h/KWUGCRkL8/qNzeGmjdLcWf8shSNBc6FIiWNnjKN7LH1SVhi2fT/lIkKApUJ3QXEzUvs/G87gNtG6xRpCgURBLhKl953MmyLYDxJ+i5IaQIEGjIXQE66geO4NcbCni/rC+aR8KEjQHgmEskbySUNbOCymnqug91ggSNArCHwyu9nFW5XfMVsr5mI8ECZoF+eAdoCUaVIxxL2jx5P11X/wFCRoEZTm0uRjtsXPlEUKPY4IEzYW42jOzYHCNj67KWpytgHPrQwoSNAs6z9pXZvUYh1WrEJ3wuCFwG6g1HAUJmgg9syygGTPLJdbEn+fjeoogQVMhtLkfx/Vyy9Z337+vdsu9MS5I0Cho5Q49uiqrP4r6LHB2zAnd9vsFCZoE4dclR3NbiPcrEc6xa8+H13s+EiRoDhRB3Jdy7xwikue9oG3vHO1esD7/kkWQoCkQ5w4s9LFXHw+lhyHOx2f5bDVZ3mONIEGTIEYTnuUjgsuDNdGWfCaae6wRJGgaVA1va6m9dwkrsPMTPsQaQYJmQZcnTszlNj0CDrsquYn/afEXJGgUFC/5PBrBhYmmL/T8wG/7kIIEDYIwuO5bZHXuY5ZW7cOYPScusUaQoFEQfjToD5uPjDA8i4VhaViE+A+xRpCgSVBEGD/V2o4mnz0rplczJrsvggRNhgzfen+FX1Ct6q+41hM6X953RQUJmgOZ8SkUgd2vqPf88rwh+OU5+D8RJGgeVMPqWx9Ppqm1Pnlu3d9jjSBBk6D66rM6zC4NFbxkTSDlIP4IEjQWipp45c47j6zaLc/C2WmhK0jQWIjLu+3ZPKktn4Y/uOmZH3MN7IIEzYRYHZcwk0foMBruCm0IEjQc8hOwmekTtfjnRCQadBO/KxFBgiZA/k/Gmmeu8TtrIMrmyRZMtdJjWpCgkRAGgks8gFqclSmHs6gJ/6xz7IIETYX+fggSJEiQIEGCBAkSJKigP+Zo0hg/19L7AAAAAElFTkSuQmCC`}
                        />
                        <Typography color="primary300">
                            Expira em <span>{getTime(expiredIn)}</span>
                        </Typography>
                    </div>
                    <div>
                        <S.Code>
                            <Typography as="label" color="primary300">
                                {pixcode}
                            </Typography>
                        </S.Code>
                        <Button onClick={clickCopy} outlined success={isCopy}>
                            {!isCopy ? (
                                <>
                                    <Icon name="copy_paste" />
                                    Copiar código
                                </>
                            ) : (
                                <>
                                    Copiado <Icon name="confirm" />
                                </>
                            )}
                        </Button>
                    </div>
                </S.CodeContent>
                <Typography color="gray8" semibold>
                    Este pagamento será efetuado para o revendedor autorizado e
                    homologado a empresa pela GrupoCard Comércio e Serviços de
                    Telefonia Ltda.
                </Typography>
                <S.Actions>
                    <Button outlined large onClick={handleCancel}>
                        Cancelar
                    </Button>
                </S.Actions>
            </S.Content>
        </S.Wrapper>
    );
}
