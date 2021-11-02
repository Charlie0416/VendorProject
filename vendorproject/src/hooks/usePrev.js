import {useEffect, useRef} from "react";

export default function usePrev(value) {
    const prevRef = useRef();
    useEffect(() => {
        prevRef.current = value;
    });
    const prev = prevRef.current;
    return [prev];
}