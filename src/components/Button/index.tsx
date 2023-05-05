import { useRef, type ReactNode, useCallback } from "react";
import * as S from "./styles";

export type ButtonProps = {
    children?: ReactNode | JSX.Element;
    large?: boolean;
    outlined?: boolean;
    disabled?: boolean;
    loading?: boolean;
    success?: boolean;
    text?: boolean;
    color?: string;
} & JSX.IntrinsicElements["button"];

export const Button = ({
    children,
    disabled,
    large,
    loading,
    outlined,
    success,
    text,
    color,
    ...rest
}: ButtonProps) => {
    const buttonRef = useRef<HTMLButtonElement>(null);

    const getColorOrFaultByOutlined = useCallback(
        (option?: boolean | string): any => {
            if (option) return option;
            return outlined ? "#35DDE3" : "#F9FAFB";
        },
        [outlined]
    );

    return (
        <S.Wrapper
            ref={buttonRef}
            large={large}
            disabled={disabled}
            outlined={outlined}
            success={success}
            text={text}
            color={getColorOrFaultByOutlined(color)}
            data-testid="button"
            loading={loading}
            {...(rest as any)}
        >
            <span>{children}</span>
            <S.Loading color={getColorOrFaultByOutlined(text)} />
        </S.Wrapper>
    );
};
