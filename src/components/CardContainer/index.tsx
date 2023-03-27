import { View, ScrollView } from 'react-native'
import { Text, Card, Button, Icon } from '@rneui/themed';
import CustomCard from './CustomCard';

interface CardData {
    image: string,
    title: string,
}

export default (props: {data: Array<Object>}) => {

    const cardList = props.data.data.map(({date, image, title, start, end}) => {
        console.log(date)
        return (
            <CustomCard 
                imageSource={image}
                title={title}
                subtitle={title}
                startDate={start}
                endDate={end}
            />
        )
    })

    return (
        <ScrollView>
            {cardList}
        </ScrollView>
    )
}
