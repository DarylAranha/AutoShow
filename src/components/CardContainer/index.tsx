import { View, ScrollView, Pressable } from 'react-native'
import { Text, Card, Button, Icon } from '@rneui/themed';
import CustomCard from './CustomCard';

interface CardData {
    image: string,
    title: string,
}

export default (props: {data: Array<Object>, onPress: Function}) => {

    // const data = Object.keys(props.data).length > 0 ? props.data.data

    const cardList = props.data.map(({date, image, title, start, end}, i) => {

        return (
            <CustomCard 
                key={i}
                data={{
                    imageSource: image,
                    title: title,
                    subtitle: title,
                    startDate: start,
                    endDate: end,
                }}
                onPress={(onPressData) => props.onPress(onPressData)}
            />
        )
    })

    return (
        <ScrollView>
            {cardList}
        </ScrollView>
    )
}
