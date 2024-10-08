import AsyncStorage from "@react-native-async-storage/async-storage"
import { Item } from "@/types/Stock"

export async function setStoreData(data: Item[], key: string): Promise<void>;

export async function setStoreData(data: string, key: string): Promise<void>;

export async function setStoreData(data: Item[] | string, key: string) {
    const value = JSON.stringify(data);
    try {
        AsyncStorage.setItem(key, value);
    } catch (error) {
        throw new Error(
            error instanceof Error ? error.message : 'Something went wrong'
        )
    }
}

export async function getStoreData(key: 'user'): Promise<string | undefined>;

export async function getStoreData(key: string): Promise<string | Item[] | undefined> {
    try {
        const value = await AsyncStorage.getItem(key);

        if (!value) return;

        return JSON.parse(value);
    } catch (error) {
        throw new Error(
            error instanceof Error ? error.message : 'Something went wrong'
        )
    }
}

export function clearStoreData(key: string) {
    AsyncStorage.removeItem(key)
}