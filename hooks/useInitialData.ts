import { setInitialCart } from "@/store";
import { useDispatch, UseDispatch } from "react-redux";
import { getStoreData } from '@/helper'
import { useEffect } from "react";

export default function useInitialData() {
    const dispatch = useDispatch();

    useEffect(() => {
        const getInitialData = async () => {
            const [cart] = await Promise.all([
                getStoreData('cart')
            ])
            if (Array.isArray(cart)) dispatch(setInitialCart(cart));
        }
        getInitialData();
    }, []);
}