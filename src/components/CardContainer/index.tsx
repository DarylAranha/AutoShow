import { View, ScrollView, Pressable } from 'react-native'
import { Text, Card, Button, Icon } from '@rneui/themed';
import CustomCard from './CustomCard';

interface CardData {
    image: string,
    title: string,
}

export default (props: {data: Array<Object>, onPress: Function}) => {
    const cardList = props.data.map((obj, i) => {
        return (
            <CustomCard 
                key={i}
                data={{
                    imageSource: obj.image,
                    title: obj.title,
                    subtitle: obj.title,
                    startDate: obj.start,
                    endDate: obj.end,
                }}
                onPress={() => props.onPress(obj)}
            />
        )
    })

    const displayList = cardList.length > 0 ? cardList : (<View><Text>No Entry Found</Text></View>)

    return (
        <ScrollView>
            {displayList}
        </ScrollView>
    )
}
