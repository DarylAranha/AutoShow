import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import { ThemeProvider } from '@rneui/themed'
import { theme, styles } from './styles'

import { EventStackNavigation, AboutUsStackNavigation } from './src/routes/StackNavigation'
import TabNavigation from './src/routes/TabNavigation';


export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <SafeAreaView style={{flex: 1}}>
                <TabNavigation 
                    navigationElements={{
                        events: EventStackNavigation,
                        aboutUs: AboutUsStackNavigation
                    }}/>
            </SafeAreaView>
        </ThemeProvider>
    );
}
