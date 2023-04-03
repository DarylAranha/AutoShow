import { View, Text } from 'react-native'
import Search from '../../components/Search';
import { TitleText } from '../../components/Text';
import CardContainer from '../../components/CardContainer';

import { data } from './data';

export default function Events(props: object) {

    // On click specific event
    function onPressEvent(onPressData: Object) {
        // implement navigation
        props.navigation.navigate('Event', onPressData)
    }

    return (
        <View>
            <Search />
            <CardContainer 
                data={data}
                onPress={onPressEvent} />
        </View>
    );
};
