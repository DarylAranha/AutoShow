import { StyleSheet } from 'react-native';
import { createTheme } from '@rneui/themed';

export const theme = createTheme({
    lightColors: {
        primary: '#fff',
      },
    darkColors: {
      primary: '#000',
    },
    mode: 'light'

});

export const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});