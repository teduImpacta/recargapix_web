import { useField } from "@unform/core";
import { useEffect, useRef } from "react";

export type InputProps = {
    name: string;
    label?: string;
    message?: string;
};

export function useInput(name: string) {
    const inputRef = useRef<HTMLInputElement>(null);
    const { registerField, fieldName, ...rest } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef,
            getValue: (ref) => ref.current.value,
            clearValue(ref) {
                ref.current.value = "";
            },
            setValue(ref, value) {
                ref.current.value = value;
            },
        });
    }, [fieldName, registerField]);

    return {
        ...rest,
        fieldName: `input:${fieldName}`,
        inputRef,
    };
}
