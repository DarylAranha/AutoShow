import React, { useEffect } from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, View, Dimensions } from 'react-native';

import Back from '../../components/Back';

export default function Map ({navigation, route}) {

    return (
        <View style={styles.container}>
            <View style={styles.back}>
                <Back 
                    navigation={navigation} 
                    route={route}/>
            </View>
            

            <MapView 
                initialRegion={{
                    latitude: 44.411583,
                    longitude: -79.671410,
                    latitudeDelta: 0.0022,
                    longitudeDelta: 0.0021,
                }}
                style={styles.map} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    back: {
        position: 'absolute',
        top: 30,
        left: 30,
        zIndex: 99
    }
});