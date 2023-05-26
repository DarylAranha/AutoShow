import { useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet, ScrollView } from 'react-native'
import Search from '../../components/Search';
import { TitleText } from '../../components/Text';
import { Image, Text } from '@rneui/themed';
import moment from 'moment';

// import { specificData } from './data';
import colors from '../../constants/colors';

export default function SpecificEvent({ navigation, route }) {
    
    const specificData = route.params

    navigation.setOptions({
        title: specificData.title,
    });

    console.log(specificData.title)

    const date = moment(specificData.date).format('dddd, MMMM Do')

    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styles.container}>
                <Image
                    source={specificData.image}
                    containerStyle={{
                        // aspectRatio: 1,
                        width: '100%',
                        height: 350
                    }}
                    PlaceholderContent={<ActivityIndicator />} />
                
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
                
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.backgroundColor
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
