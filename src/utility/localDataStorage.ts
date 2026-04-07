import { createAsyncStorage } from "@react-native-async-storage/async-storage";

// create a storage instance
const storage = createAsyncStorage("appDB");

export function setItem(key: string, value: string) {
    return storage.setItem(key, value);
}

export function getItem(key: string) {
    return storage.getItem(key);
}

export function removeItem(key: string) {
    return storage.removeItem(key);
}