import * as React from "react";
import { Icon } from "@rneui/base";
import colors from '../../constants/colors'
import { View, StyleSheet } from "react-native";


export default (props: {navigation, route, updateBackButtonStatus, previousTitle}) => {

    const onBackButtonPress = () => {
        
        // props.navigation.navigate(props.previousTitle) 
        props.updateBackButtonStatus(false)
        console.log(props.previousTitle)

        props.navigation.reset({
            index: 0,
            routes: [{ name: props.previousTitle }],
        });

        
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
