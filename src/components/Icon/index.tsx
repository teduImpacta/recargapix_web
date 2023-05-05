import {
    ReactSVGElement,
    useCallback,
    useEffect,
    useRef,
    useState,
} from "react";

type IconProps = {
    name: string;
};

export function Icon({ name }: IconProps) {
    const [loading, setLoading] = useState(false);
    const ref = useRef<ReactSVGElement>();

    const load = useCallback(async () => {
        try {
            setLoading(true);
            ref.current = (
                await import(`../../assets/svg/${name}.svg`)
            ).ReactComponent;
        } catch {
            ref.current = undefined;
        } finally {
            setLoading(false);
        }
    }, [name]);

    useEffect(() => {
        void load();
    }, [load, name]);

    const Item = ref.current as any;

    return <>{Item && !loading && <Item />}</>;
}
