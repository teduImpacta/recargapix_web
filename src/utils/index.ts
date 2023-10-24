export * from "./mask";

export function onlyDigits(value: unknown) {
    return String(value).replace(/\D/g, "");
}

export function createStorage<T>(key: string, str = sessionStorage) {
    const prepareKey = `@recarga_pix:${key}`;

    return {
        set: (value: T): void => {
            str.setItem(
                prepareKey,
                typeof value === "string" ? value : JSON.stringify(value)
            );
        },
        get: (faultValue?: T): T => {
            const item = (str.getItem(prepareKey) as T) ?? faultValue;

            try {
                return JSON.parse(item as any);
            } catch {
                return item!;
            }
        },
        clear: () => {
            str.removeItem(prepareKey);
        },
    };
}

export function formatCurrency(value: unknown) {
    return Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(Number(value))
  }


  export function isArrayFull(value: unknown) {
    return Array.isArray(value) && value.length > 0
  }
