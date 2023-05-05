import { Outlet, useNavigate } from "react-router-dom";
import { Footer, Header, Icon } from "..";
import * as S from "./styles";
import { useProducts } from "../../providers";
import { Shimmer } from "../../styles";
import { useCallback, useEffect, useMemo } from "react";
import { ProductTypes } from "../../enums";

export function Layout() {
    const navigate = useNavigate();
    const { loading, products, step, navigateStep } = useProducts();

    const getIcon = useCallback((type: ProductTypes) => {
        switch (type) {
            case ProductTypes.cellphone:
                return <Icon name="cellphone" />;
            case ProductTypes.transport:
                return <Icon name="train" />;
            case ProductTypes.store:
            default:
                return <Icon name="fault" />;
        }
    }, []);

    const renderProducts = useMemo(() => {
        return (
            step === "home" && (
                <>
                    {!!loading && (
                        <S.Products>
                            <Shimmer width="9rem" height="9rem" />
                            <Shimmer width="9rem" height="9rem" />
                            <Shimmer width="9rem" height="9rem" />
                        </S.Products>
                    )}
                    {!loading && products && (
                        <S.Products>
                            {products?.map(({ name, type }) => (
                                <S.Product
                                    key={`${name}_${type}`}
                                    onClick={() => {
                                        navigateStep("recharge");
                                        navigate("recharge");
                                    }}
                                >
                                    {getIcon(type)}
                                    <p>{name}</p>
                                </S.Product>
                            ))}
                        </S.Products>
                    )}
                </>
            )
        );
    }, [loading, products, getIcon, navigate, step]);

    useEffect(() => {
        console.log(step);
    }, [step]);

    return (
        <S.Wrapper>
            <Header />
            <S.Main>
                <S.Col>
                    <S.Content>
                        <S.Title>
                            Recarregue agora e <br /> pague com Pix!
                        </S.Title>
                        <S.Text>
                            Recarregue e receba seus créditos na mesma hora.
                        </S.Text>
                    </S.Content>
                    {renderProducts}
                    <Icon name="wave" />
                </S.Col>
                <S.Col>
                    <Outlet />
                </S.Col>
            </S.Main>
            <Footer />
        </S.Wrapper>
    );
}
