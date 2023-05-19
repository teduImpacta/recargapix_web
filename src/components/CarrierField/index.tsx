import {
    ForwardRefRenderFunction,
    forwardRef,
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";
import * as S from "./styles";
import { useInput } from "../../hooks";
import FaultCarrier from "../../assets/svg/fault_carrier.svg";

export type OperatorItem = {
    name: string;
    icon: string;
    value: string;
};

export type CarrierFieldProps = {
    name: string;
    label?: string;
    onChange?: () => void;
    items?: OperatorItem[];
} & JSX.IntrinsicElements["input"];

const Input: ForwardRefRenderFunction<CarrierFieldProps, CarrierFieldProps> = (
    {
        name,
        label = "Selecione a operadora",
        onChange,
        items,
        ...rest
    }: CarrierFieldProps,
    ref
) => {
    const [selected, setIsSelected] = useState<string>("");

    const { clearError, defaultValue, error, fieldName, inputRef } =
        useInput(name);

    const handleOnClick = useCallback(
        (value: string) => () => {
            inputRef.current!.value = value;

            clearError();
            setIsSelected(value);

            if (onChange) onChange();
        },
        [inputRef, onChange]
    );

    const values = useMemo(
        () =>
            items?.map(({ name, value, icon }, i) => {
                return (
                    <Chip
                        icon={icon}
                        label={name}
                        key={`carrier_item_${value}_${i}`}
                    />
                );
            }),
        [selected, items, onChange, handleOnClick]
    );

    useEffect(() => {
        if (defaultValue) setIsSelected(defaultValue);
    }, [defaultValue]);

    return (
        <S.Wrapper>
            <S.FaultInput
                id={fieldName}
                ref={inputRef}
                defaultValue={defaultValue}
                {...(rest as any)}
            />
            <S.Label htmlFor={fieldName}>{label}</S.Label>
            <S.Content>{values}</S.Content>
            {error && <S.Message>{error}</S.Message>}
        </S.Wrapper>
    );
};

type ChipProps = {
    label: string;
    icon: string;
};

function Chip({ label, icon }: ChipProps) {
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if (imgRef.current) {
            imgRef.current.onerror = () => {
                imgRef.current!.src = FaultCarrier as any;
            };
        }
    }, [imgRef]);

    return (
        <S.Chip>
            <img ref={imgRef} src={icon} alt={label} />
            <S.Label>{label}</S.Label>
        </S.Chip>
    );
}

export const CarrierField = forwardRef(Input);
