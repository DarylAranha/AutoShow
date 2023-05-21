import { useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet, ScrollView } from 'react-native'
import Search from '../../components/Search';
import { TitleText } from '../../components/Text';
// import { Image, Text } from '@rneui/themed';
import { Text } from '@rneui/themed';
import { Image } from 'react-native';
import moment from 'moment';

// import { specificData } from './data';
import colors from '../../constants/colors';

// import MyImage from '../../../assets/images/auto_one.png';

export default function DetailedAboutUs({ navigation, route }) {
    
    const specificData = route.params

    navigation.setOptions({
        title: specificData.title,
    });

    console.log(specificData.title)

    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styles.container}>
                <Image
                    source={specificData.image}
                    style={{
                        // aspectRatio: 1,
                        width: '100%',
                        height: 350
                    }}
                    PlaceholderContent={<ActivityIndicator />} />

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
        flex: 1,
        backgroundColor: colors.backgroundColor
    },
    descriptionContainer: {
        padding: 10,
        margin: 5
    }
})
