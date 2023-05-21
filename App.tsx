import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import { ThemeProvider } from '@rneui/themed'
import { styles } from './styles'

import { EventStackNavigation, AboutUsStackNavigation } from './src/routes/StackNavigation'
import TabNavigation from './src/routes/TabNavigation';


const theme = {
    // Set the background color to white
    colors: {
        background: 'white',
    },
};

export default function App() {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <ThemeProvider theme={theme}>
                <SafeAreaView style={{flex: 1}}>
                    <TabNavigation 
                        navigationElements={{
                            events: EventStackNavigation,
                            aboutUs: AboutUsStackNavigation
                        }}/>
                </SafeAreaView>
            </ThemeProvider>
        </View>
    );
}
