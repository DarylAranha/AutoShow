import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Events from './src/views/Events';

import { ThemeProvider } from '@rneui/themed'
import { theme, styles } from './styles'

import Back from './src/components/Back';

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <View style={styles.container}>
            <Back />
            <StatusBar style="auto" />
            </View>
        </ThemeProvider>
    );
}
