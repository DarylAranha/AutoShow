import { Linking } from 'react-native'

export const handleLinkPress = async (url) => {
    // Check if the URL is supported by the device
    const supported = await Linking.canOpenURL(url);
    
    if (supported) {
        // Open the URL in the device's default browser
        await Linking.openURL(url);
    } else {
        // Handle unsupported URLs or show an error message
        console.log("Unsupported URL:", url);
    }
};