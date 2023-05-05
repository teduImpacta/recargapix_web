import { onlyDigits } from ".";

export function phoneMask(value: unknown) {
    return onlyDigits(value)
        .replace(/(\d{5})(\d)/, "$1-$2")
        .replace(/(-\d{4})\d+?$/, "$1");
}

export function phoneWithDDDMask(value: unknown) {
    return onlyDigits(value)
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2")
        .replace(/(-\d{4})\d+?$/, "$1");
}
