import { useCallback, useMemo, useState } from "react";
import { GiftCardCategory } from "../../enums";
import { Service } from "../../service";
import * as S from "./styles";
import swr from "swr";
import { Button } from "../../components";
import { useProducts } from "../../providers";
import { useNavigate } from "react-router-dom";

export function GiftCardPage() {
    const [isOpen, setIsOpen] = useState("Todos");

    const { navigateStep } = useProducts();
    const navigation = useNavigate();

    const { data, isLoading } = swr("giftcards", async () => {
        const {
            data: { data },
        } = await Service.getGiftCards();
        return data;
    });

    const goBack = useCallback(() => {
        navigateStep();
        navigation("/");
    }, [navigation, navigateStep]);

    const categories = useMemo(
        () => [
            "Todos",
            ...Object.keys(GiftCardCategory).reduce((items: string[], key) => {
                if (Number.isNaN(Number(key))) {
                    items.push(
                        GiftCardCategory[key as keyof typeof GiftCardCategory]
                    );
                }

                return items;
            }, []),
        ],
        []
    );

    return (
        <S.Form onSubmit={() => {}}>
            <S.Categories>
                {categories.map((category, i) => (
                    <S.Category
                        isOpen={category === isOpen}
                        onClick={() => {
                            if (category !== isOpen) setIsOpen(category);
                        }}
                        key={`${category}-${i}`}
                    >
                        {category}
                    </S.Category>
                ))}
            </S.Categories>
            <S.Products>
                {!isLoading &&
                    data
                        ?.filter((item) => {
                            if (isOpen === "Todos") {
                                return true;
                            }
                            return item.category === isOpen;
                        })
                        .map((item) => (
                            <S.Product>
                                <img src={item.logo} alt={item.name} />
                                <p>{item.name}</p>
                            </S.Product>
                        ))}
            </S.Products>
            <Button outlined large onClick={goBack}>
                Voltar
            </Button>
        </S.Form>
    );
}
