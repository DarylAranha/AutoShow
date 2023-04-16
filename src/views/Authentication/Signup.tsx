import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, Input } from '@rneui/themed';
import { TitleText } from '../../components/Text';
import colors from '../../constants/colors'

import { saveInDevice } from '../../utils/storage';
import strings from '../../constants/strings'

export default function SignUpScreen(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async () => {
        if (email && password) {
            await saveInDevice(strings.emailKey + email, email)
            await saveInDevice(strings.passwordKey + email, password)
            await saveInDevice(strings.currentSigneUp, email)

            const {onSuccess} = props.route.params

            console.log('signup')
            console.log(onSuccess)

            onSuccess()
        }
    };

    const handleLoginNavigation = () => {
        props.navigation.navigate('Login');
    };

  return (
    <View style={styles.container}>
        <TitleText text={"Signup"} />
        <Input
            placeholder='Email'
            value={email}
            onChangeText={setEmail}
            autoCapitalize='none'
            keyboardType='email-address'
            textContentType='emailAddress'
        />
        <Input
            placeholder='Password'
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            textContentType='password'
        />
        <Button
            title="Sign Up"
            loading={false}
            loadingProps={{ size: 'small', color: 'white' }}
            buttonStyle={{
            backgroundColor: colors.themeColor,
            borderRadius: 5,
            }}
            titleStyle={styles.buttonTitleStyle}
            containerStyle={styles.buttonContainerStyle}
            onPress={() => handleSignUp()}
        />
        <Text style={styles.loginText}>
            Already have an account?
            <Text style={styles.loginLink} onPress={handleLoginNavigation}> Log in</Text>
        </Text>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    buttonContainerStyle: {
        marginHorizontal: 50,
        height: 50,
        width: 200,
        marginVertical: 10,
    },
    buttonTitleStyle: {
        fontWeight: 'bold', fontSize: 23
    },
    loginText: {
        marginTop: 20,
        fontSize: 16,
    },
    loginLink: {
        color: colors.secondaryColor,
        fontWeight: 700
    },
});