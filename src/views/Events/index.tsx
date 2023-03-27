import { View, Text } from 'react-native'
import Search from '../../components/Search';
import { TitleText } from '../../components/Text';
import CardContainer from '../../components/CardContainer';

import { data } from './data';

export default function Events() {
    return (
        <View>
            <TitleText text='Events'/>
            <Search />
            <CardContainer data={data}/>
        </View>
    );
};
