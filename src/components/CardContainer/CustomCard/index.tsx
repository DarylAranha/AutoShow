import { View, Image } from 'react-native'
import { Text, Card, Button, Icon } from '@rneui/themed';

export default (props: { imageSource?: string, title?: String, subtitle?: String, startDate?: String, endDate?: String }) => {

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
        <Text
            h4
            h4Style={{
                fontWeight: 500
            }}
            > 
            {props.title} 
        </Text>
    ) : null;

    const subTitle = props.subtitle ? (
        <Text> {props.subtitle} </Text>
    ) : null;

    const start = props.startDate ? (
        <Text> {props.startDate} </Text>
    ) : null;

    const end = props.endDate ? (
        <Text> {props.endDate} </Text>
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
        <Card>
            {image || null}
            {heading || null}
            {subTitle || null}
            {timeLine || null}
        </Card>
    );
}