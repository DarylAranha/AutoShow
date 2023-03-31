import { useEffect } from 'react';
import { View, Text } from 'react-native'
import Search from '../../components/Search';
import { TitleText } from '../../components/Text';

export default function SpecificEvent({ navigation }) {


    // TODO: Remove this code once data flow is completed
    useEffect(() => {
        navigation.setOptions({
            title: 'How to get your wheels turning',
        })
    }, []) 

    return (
        <View>
            <TitleText text='hello'/>
        </View>
    );
};
