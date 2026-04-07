import { createAsyncStorage } from "@react-native-async-storage/async-storage";

const storage = createAsyncStorage("appDB");

const NativeDataStorage = {
    setItem: async (key: string, value: string) => await storage.setItem(key, value),
    getItem: async (key: string) => await storage.getItem(key),
    removeItem: async (key: string) => await storage.removeItem(key),
}

export default NativeDataStorage;