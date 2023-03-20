import { Text } from '@rneui/themed'
import { View } from 'react-native'

const titleStyle = {
    fontFamily: "Avenir",
    fontWeight: "bold",
    fontSize: 30,
    padding: 10,
    marginHorizontal: 10
}

const fontStyle = {
    
}

export const TitleText = (props: { 
    text: string
}) => {
    return (
        <View>
            <Text
                h1
                h1Style={titleStyle}
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
