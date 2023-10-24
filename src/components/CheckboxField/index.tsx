import { useInput } from "../../hooks";
import { Checkbox, CheckboxProps } from "../Checkbox";

export type CheckboxFieldProps = {
    label: string;
    name: string;
} & CheckboxProps;

export const CheckboxField = ({ label, name, ...rest }: CheckboxFieldProps) => {
    const { inputRef, fieldName, defaultValue } = useInput(name);

    return (
        <Checkbox
            data-testid={name}
            id={fieldName}
            ref={inputRef}
            defaultValue={defaultValue}
            defaultChecked={defaultValue}
            label={label}
            {...rest as any}
        />
    );
};
