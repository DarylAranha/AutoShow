import { Text } from '@rneui/themed'
import { View } from 'react-native'

const titleStyle = {
    fontFamily: "Avenir",
    fontWeight: "bold",
    fontSize: 30,
    // padding: 10,
    marginHorizontal: 10,
    textAlign: 'center'
}

const fontStyle = {
    
}

export const TitleText = (props: { 
    text: string,
    customStyle: {}
}) => {
    return (
        <View>
            <Text
                h1
                h1Style={{...titleStyle, ...props.customStyle}}
            >
                {props.text}
            </Text>
        </View>
    )
}

export default (props: {
    text: string
}) => {
    return (
        <Text
          style={fontStyle}
        >
          {props.text}
        </Text>
      );
}
