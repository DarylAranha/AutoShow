import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import { useState } from 'react';

import { ThemeProvider } from '@rneui/themed'
import { theme, styles } from './styles'

import { EventStackNavigation, AboutUsStackNavigation, AuthenticationNavigation } from './src/routes/StackNavigation'
import TabNavigation from './src/routes/TabNavigation';


export default function App() {

    // fetch login value from local storage
    const [isLoggedin, updateAuthState] = useState(false)

    return (
        <ThemeProvider theme={theme}>
            <SafeAreaView style={{flex: 1}}>
                <TabNavigation 
                    AuthenticationElement={AuthenticationNavigation}
                    navigationElements={{
                        events: EventStackNavigation,
                        aboutUs: AboutUsStackNavigation
                    }}/>
            </SafeAreaView>
        </ThemeProvider>
    );
}
