import * as SecureStore from 'expo-secure-store';

export async function saveInDevice(key: any, value: any) {
    await SecureStore.setItemAsync(key, value);
}

export async function getValueFromDevice(key) {
    let result = await SecureStore.getItemAsync(key);
    return result;
}