import * as Keychain from 'react-native-keychain';

const secureStorageKeys = {
    refreshToken: "APP_REFRESH_TOKEN"
}

export function setSecret(key: string, value: string) {
    return Keychain.setGenericPassword(key, value, { service: key });
}

export function getSecret(key: string) {
    return Keychain.getGenericPassword({ service: key });
}

export function resetSecret(key: string) {
    return Keychain.resetGenericPassword({ service: key });
}
