import { View, Image } from 'react-native'
import { Text, Card, Button, Icon } from '@rneui/themed';

export default (props: { imageSource?: string, title?: String, subtitle?: String }) => {

    const image = props.imageSource ? (
        <Image 
            style={{
                width: 50,
                height: 50,
            }}
            resizeMode="cover"
            source={{
                uri: props.imageSource,
            }} />
    ) : null;

    const heading = props.title ? (
        <Text> {props.title} </Text>
    ) : null;

    const subTitle = props.subtitle ? (
        <Text> {props.subtitle} </Text>
    ) : null;

    return (
        <Card>
            {image || null}
            {heading || null}
            {subTitle || null}
        </Card>
    );
}
