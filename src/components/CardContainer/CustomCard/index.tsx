import { View, Pressable, ActivityIndicator } from 'react-native'
import { Text, Card, Button, Icon } from '@rneui/themed';
import { Image } from '@rneui/themed';

type CardProperty = {
    imageSource?: string, 
    title?: String, 
    subtitle?: String, 
    startDate?: String, 
    endDate?: String,
    description?: String
}

export default (props: { data: CardProperty, onPress: Function }) => {

    const image = props.data.imageSource ? (
        <Image
            source={{ uri: props.data.imageSource }}
            containerStyle={{
                aspectRatio: 1,
                width: '100%',
                // height: 167,
                flex: 1,
              }}
            PlaceholderContent={<ActivityIndicator />} />
    ) : null;

    const heading = props.data.title ? (
        <Text
            style={{
                fontWeight: 400,
                paddingTop: 10,
                paddingLeft: 10,
                paddingBottom: 5,
                fontSize: 15
            }}
            > 
            {props.data.title} 
        </Text>
    ) : null;

    const subTitle = props.data.subtitle ? (
        <Text
            style={{
                fontWeight: 600,
                paddingLeft: 6,
                paddingBottom: 5,
                fontSize: 20
            }}
        > {props.data.subtitle} </Text>
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
                fontWeight: 400,
                paddingLeft: 6,
                paddingBottom: 5,
                fontSize: 15
            }}
            >{start} - {end}
        </Text>
    ) : null

    return (
        <Pressable onPress={() => props.onPress(props.data)}>
            <Card
                containerStyle={{
                    padding: 0,
                }}
            >
                {image || null}
                {heading || null}
                {subTitle || null}
                {timeLine || null}
            </Card>
        </Pressable>
    );
}