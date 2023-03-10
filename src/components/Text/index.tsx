import { Text } from '@rneui/themed'
import { View } from 'react-native'

export const titleText = (props: { 
    text: string,
    h1Style: object
}) => {
    return (
        <View>
            <Text
                h1
                h1Style={props.h1Style}
                style={{

                }}
            >
                {props.text}
            </Text>
        </View>
    )
}

// export default (props: {
//     text: string,
//     h2Style = {},
//     h3Style = {},
//     h4Style = {}
// }) => {
//     return (
//         <Text
//           h2Style={props.h2Style}
//           h3Style={props.h3Style}
//           h4Style={props.h4Style}
//           style={{
            
//           }}
//         >
//           {props.text}
//         </Text>
//       );
// }
