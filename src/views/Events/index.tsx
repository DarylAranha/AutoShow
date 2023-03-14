import { View, Text } from 'react-native'
import Search from '../../components/Search';

import { TitleText } from '../../components/Text';

export default function Events() {
    return (
        <View>
            <TitleText text='Events'/>
            <Search />
        </View>
    );
};
