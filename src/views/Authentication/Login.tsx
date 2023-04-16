import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button, Input } from '@rneui/themed';
import { TitleText } from '../../components/Text';

import { getValueFromDevice } from '../../utils/storage';
import strings from '../../constants/strings'
import colors from '../../constants/colors';

export default function Login(props: object) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        const savedPassword = await getValueFromDevice(strings.emailKey + email)

        if (password === savedPassword) {
            const {onSuccess} = props.route.params

            console.log('signup')
            console.log(onSuccess)

            onSuccess()
        } else {

        }
    };

    const handleSignUpNavigation = () => {
        props.navigation.navigate('SignUp');
    };

    return (
        <View style={styles.container}>
            <TitleText text={"Login"} />
            <Input
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                keyboardType="email-address"
            />
            <Input
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button
                title="Log in"
                loading={false}
                loadingProps={{ size: 'small', color: 'white' }}
                buttonStyle={{
                backgroundColor: colors.themeColor,
                borderRadius: 5,
                }}
                titleStyle={styles.buttonTitleStyle}
                containerStyle={styles.buttonContainerStyle}
                onPress={() => handleLogin()}
            />
            <Text style={styles.signUpText}>
                Don't have an account yet?
            <Text style={styles.signUpLink} onPress={handleSignUpNavigation}> Sign up</Text>
      </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#fff'
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
    signUpText: {
        marginTop: 20,
        fontSize: 16,
    },
    signUpLink: {
        color: colors.secondaryColor,
        fontWeight: 700
    },
})
