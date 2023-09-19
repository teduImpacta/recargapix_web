import { forwardRef } from "react";
import * as S from "./styles";
import { InputProps, useInput } from "../../hooks";

export type TextFieldProps = InputProps & {
    name: string;
    label?: string;
} & JSX.IntrinsicElements["input"];

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
    ({ name, label, ...rest }, ref) => {
        const { clearError, defaultValue, error, fieldName, inputRef } =
            useInput(name);

        return (
            <S.Wrapper ref={ref}>
                {label && <S.Label>{label}</S.Label>}
                <S.Content>
                    <input
                        ref={inputRef}
                        defaultValue={defaultValue}
                        id={fieldName}
                        onFocus={clearError}
                        {...(rest as any)}
                    />
                </S.Content>
                {error && <S.Message>{error}</S.Message>}
            </S.Wrapper>
        );
    }
);
