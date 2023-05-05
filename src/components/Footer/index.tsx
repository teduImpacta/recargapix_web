import React from "react";
import * as S from "./styles";
import { Icon } from "..";

export const Footer = () => {
    return (
        <S.Wrapper>
            <S.Content>
                <div>
                    <Icon name="pharmacy" />
                </div>
                <div>
                    <S.Text>Fale Conosco</S.Text>
                    <S.InfoContact>
                        <S.Link href="tel:1130033304">
                            <Icon name="phone" />
                        </S.Link>
                        <S.Link href="https://api.whatsapp.com/send?1=pt_br&phone=551130033304">
                            <Icon name="whats" />
                        </S.Link>
                        <S.Text>11 3003 3304</S.Text>
                    </S.InfoContact>
                    <S.Small>
                        Segunda a sexta das 7h às 19h40 <br />
                        Sábado das 8h às 14h20 - Horário de Brasília
                    </S.Small>
                </div>
                <div>
                    <S.Text>Nos siga nas redes sociais</S.Text>
                    <S.InfoContact>
                        <S.Link href="https://www.linkedin.com">
                            <Icon name="linkedin" />
                            Caminho Supermercado
                        </S.Link>
                        <S.Link href="https://www.facebook.com">
                            <Icon name="facebook" />
                            Caminho Supermercado
                        </S.Link>
                        <S.Link href="https://www.instagram.com">
                            <Icon name="instagram" />
                            caminho_supermercado24
                        </S.Link>
                    </S.InfoContact>
                </div>
            </S.Content>
        </S.Wrapper>
    );
};
