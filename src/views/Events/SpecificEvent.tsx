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

    useEffect(() => {
        route.params.updateTitle && route.params.updateTitle(specificData.title, 'Events')
    }, []);

    

    const date = moment(specificData.date).format('dddd, MMMM Do')

    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styles.container}>
                <Image
                    source={specificData.image}
                    style={{
                        aspectRatio: 1,
                        width: '100%',
                        height: undefined, // Remove the fixed height
                        flex: 1,
                    }}
                    resizeMode="contain" // Specify the resize mode to maintain the aspect ratio
                    PlaceholderContent={<ActivityIndicator />} />
                
                <View style={styles.date}>
                    <Text
                        style={{
                            fontWeight: 600,
                            fontSize: 20
                        }}
                    > 
                        {date} 
                    </Text>

                    <Text
                        style={{
                            fontWeight: 600,
                            fontSize: 18
                        }}
                    > 
                        {specificData.start} - {specificData.end} 
                    </Text>
                </View>

                <View style={styles.descriptionContainer}>
                    <Text
                        style={{
                            fontSize: 15
                        }}
                    > 
                        {specificData.description} 
                    </Text>
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
