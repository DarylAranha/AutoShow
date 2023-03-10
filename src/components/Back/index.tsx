import * as React from "react";
import { Icon } from "@rneui/base";
import colors from '../../constants/colors'


export default () => {
    const onBackButtonPress = () => {
        // TODO: 
        // Implement back functionality
        // Implement it once navigation feature is implemented
        console.log("Back button pressed")
    }

    return (
        <Icon
            color={colors.themeColor}
            name="arrow-back"
            size={40}
            type="MaterialIcons"
            onPress={onBackButtonPress}
        />
    );
}
