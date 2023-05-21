import { View, Pressable, ActivityIndicator } from 'react-native'
import { Text, Card, Button, Icon } from '@rneui/themed';
import { Image } from '@rneui/themed';
import { Image as RNImage } from 'react-native';

type CardProperty = {
    imageSource?: string, 
    isImageStatic?: boolean,
    title?: String, 
    subtitle?: String, 
    startDate?: String, 
    endDate?: String,
    description?: String,
    data?: Object
}

export default (props: { data: CardProperty, onPress: Function }) => {

    console.log('image ---------')
    console.log(props.data.imageSource)
    const dynamicImage = !props.data.isImageStatic && props.data.imageSource ? (
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

    const staticImage = props.data.isImageStatic && props.data.imageSource ? (
        <RNImage
            source={props.data.imageSource}
            resizeMode="contain"
            style={{
                width: '100%',
                height: 350
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
                {props.data.isImageStatic ? staticImage : dynamicImage}
                {heading || null}
                {subTitle || null}
                {timeLine || null}
            </Card>
        </Pressable>
    );
}