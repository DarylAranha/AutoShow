import { View, Image, Pressable } from 'react-native'
import { Text, Card, Button, Icon } from '@rneui/themed';

type CardProperty = {
    imageSource?: string, 
    title?: String, 
    subtitle?: String, 
    startDate?: String, 
    endDate?: String
}

export default (props: { data: CardProperty, onPress: Function }) => {

    const image = props.data.imageSource ? (
        <Image 
            style={{
                width: 50,
                height: 50,
            }}
            resizeMode="cover"
            source={{
                uri: props.data.imageSource,
            }} />
    ) : null;

    const heading = props.data.title ? (
        <Text
            h4
            h4Style={{
                fontWeight: 500
            }}
            > 
            {props.data.title} 
        </Text>
    ) : null;

    const subTitle = props.data.subtitle ? (
        <Text> {props.data.subtitle} </Text>
    ) : null;

    const start = props.data.startDate ? (
        <Text> {props.data.startDate} </Text>
    ) : null;

    const end = props.data.endDate ? (
        <Text> {props.data.endDate} </Text>
    ) : null;

    const timeLine = start && end ? (
        <Text
            style={{
                fontWeight: 600
            }}
            >{start} - {end}
        </Text>
    ) : null

    return (
        <Pressable onPress={() => props.onPress(props.data)}>
            <Card>
                {image || null}
                {heading || null}
                {subTitle || null}
                {timeLine || null}
            </Card>
        </Pressable>
    );
}