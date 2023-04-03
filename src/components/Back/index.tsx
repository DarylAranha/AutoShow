import * as React from "react";
import { Icon } from "@rneui/base";
import colors from '../../constants/colors'
import { View, StyleSheet } from "react-native";


export default (props: {navigation, route}) => {
    const onBackButtonPress = () => {
        props.navigation.goBack()
    }

    return (
        <View style={style.container}>
            <Icon
                color={colors.themeColor}
                name="arrow-back"
                size={40}
                type="MaterialIcons"
                onPress={onBackButtonPress}
            />
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        
    }
})
