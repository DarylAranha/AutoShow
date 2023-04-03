import { useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet, ScrollView } from 'react-native'
import Search from '../../components/Search';
import { TitleText } from '../../components/Text';
import { Image, Text } from '@rneui/themed';
import moment from 'moment';

import { specificData } from './data';

export default function SpecificEvent({ navigation }) {

    // TODO: Implement send data between view using navigation

    const date = moment(specificData.date).format('dddd, MMMM Do')

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: specificData.image }}
                containerStyle={{
                    // aspectRatio: 1,
                    width: '100%',
                    height: 350
                }}
                PlaceholderContent={<ActivityIndicator />} />

            <ScrollView>
                <View style={styles.date}>
                    <Text
                        style={{
                            fontWeight: 600,
                            fontSize: 15
                        }}
                    > 
                        {date} 
                    </Text>

                    <Text
                        style={{
                            fontWeight: 600,
                            fontSize: 15
                        }}
                    > 
                        {specificData.start} - {specificData.end} 
                    </Text>
                </View>

                <View style={styles.descriptionContainer}>
                    <Text
                        style={{
                            
                        }}
                    > 
                        {specificData.description} 
                    </Text>
                </View>

                <View>
                    
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    date: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        margin: 5
    },
    descriptionContainer: {
        padding: 10,
        margin: 5
    }
})
