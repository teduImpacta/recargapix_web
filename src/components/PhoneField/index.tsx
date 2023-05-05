import React, {
    type ChangeEvent,
    type KeyboardEvent,
    type RefObject,
    useCallback,
    useRef,
    forwardRef,
    useEffect,
} from "react";
import * as S from "./styles";
import { onlyDigits, phoneMask, phoneWithDDDMask } from "../../utils";
import { InputProps, useInput } from "../../hooks";

export type PhoneFieldProps = InputProps & {
    onDDDChange?: (ddd: string) => void;
    clearable?: boolean;
    focus?: boolean;
} & JSX.IntrinsicElements["input"];

type InputChange = ChangeEvent<HTMLInputElement>;

export const PhoneField = forwardRef<HTMLInputElement, PhoneFieldProps>(
    function Input(
        { name, onDDDChange, focus, label, clearable, ...rest },
        ref
    ) {
        const { fieldName, clearError, defaultValue, error, inputRef } =
            useInput(name);

        const dddRef = useRef<HTMLInputElement>(null);
        const phoneRef = useRef<HTMLInputElement>(null);

        const handleFaultInputValue = useCallback(() => {
            const dddDigits = onlyDigits(dddRef.current?.value);
            const phoneDigits = onlyDigits(phoneRef.current?.value);

            inputRef.current!.value = phoneWithDDDMask(dddDigits + phoneDigits);

            if (dddDigits.length === 2 && phoneDigits.length === 9) {
                phoneRef.current?.blur();
            }
        }, [inputRef, dddRef, phoneRef]);

        const nextFocus = useCallback(() => {
            const cellInput = dddRef.current
                ?.nextElementSibling as HTMLInputElement;
            cellInput?.focus();
        }, [dddRef]);

        const prevFocus = useCallback(() => {
            const dddInput = phoneRef.current
                ?.previousElementSibling as HTMLInputElement;
            dddInput?.focus();
        }, [phoneRef]);

        const handleInputValue = useCallback(
            (ref: RefObject<HTMLInputElement>, value: string) => {
                ref.current!.value = value;
                handleFaultInputValue();
            },
            []
        );

        const handleDddChange = useCallback(
            (ev: InputChange) => {
                const dddValue = onlyDigits(ev.target.value).replace(
                    /(\d{2})\d+?$/,
                    "$1"
                );

                handleInputValue(dddRef, dddValue);

                if (dddValue.length === 2) {
                    if (onDDDChange) onDDDChange(dddValue);
                    nextFocus();
                }
            },
            [dddRef]
        );

        const handlePhoneChange = useCallback(
            (ev: InputChange) => {
                const phone = phoneMask(ev.target.value);

                handleInputValue(phoneRef, phone);

                if (!phone.length) {
                    prevFocus();
                }
            },
            [phoneRef]
        );

        const handleOnClickPhone = useCallback(() => {
            const phoneValue = onlyDigits(phoneRef.current?.value);
            const dddValue = onlyDigits(dddRef.current?.value);

            if (!phoneValue.length && !dddValue.length) {
                prevFocus();
            }
        }, [phoneRef]);

        const handleOnKeyUp = useCallback(
            (ev: KeyboardEvent<HTMLInputElement>) => {
                const value = onlyDigits(phoneRef.current?.value);
                if (ev.code === "Backspace" && !value.length) prevFocus();
            },
            [phoneRef]
        );

        const getDefaultValue = useCallback(
            (...args: Parameters<string[]["slice"]>) => {
                return onlyDigits(defaultValue)
                    .split("")
                    .slice(...args)
                    .join("");
            },
            [defaultValue]
        );

        const clearValue = useCallback(() => {
            inputRef.current!.value = "";
            phoneRef.current!.value = "";
            dddRef.current!.value = "";
            dddRef.current?.focus();
        }, [inputRef, phoneRef, dddRef]);

        useEffect(() => {
            if (focus && !defaultValue) {
                dddRef.current?.focus();
            } else if (focus && defaultValue) {
                phoneRef.current?.focus();
            }
        }, [focus, defaultValue]);

        return (
            <S.Wrapper>
                <S.FaultInput
                    ref={inputRef}
                    id={fieldName}
                    defaultValue={defaultValue}
                    {...(rest as any)}
                />
                <S.Label htmlFor={fieldName}>{label}</S.Label>
                <S.Content>
                    <input
                        ref={dddRef}
                        onChange={handleDddChange}
                        type="tel"
                        placeholder=" "
                        onFocus={clearError}
                        defaultValue={getDefaultValue(0, 2)}
                        {...(rest as any)}
                    />
                    <input
                        ref={phoneRef}
                        onChange={handlePhoneChange}
                        type="tel"
                        placeholder=" "
                        onFocus={clearError}
                        defaultValue={phoneMask(getDefaultValue(2))}
                        onClick={handleOnClickPhone}
                        onKeyUp={handleOnKeyUp}
                        {...(rest as any)}
                    />
                    {clearable && <S.Clear onClick={clearValue} />}
                </S.Content>
                {error && <S.Message>{error}</S.Message>}
            </S.Wrapper>
        );
    }
);
