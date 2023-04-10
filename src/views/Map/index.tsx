import React, { useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Dimensions } from 'react-native';

import Back from '../../components/Back';

import markers from './markers';

export default function Map ({navigation, route}) {
    const events = markers.dataPoint.events
    const vendors = markers.dataPoint.vendors

    console.log(Object.keys(events).map(marker => events[marker]))

    return (
        <View style={styles.container}>
            <View style={styles.back}>
                {/* <Back 
                    navigation={navigation} 
                    route={route}/> */}
            </View>
            

            <MapView 
                initialRegion={{
                    latitude: 44.412284,
                    longitude: -79.669114,
                    latitudeDelta: 0.0052,
                    longitudeDelta: 0.0051,
                }}
                showsUserLocation={true}
                userInterfaceStyle='light'
                showsMyLocationButton={true}
                style={styles.map} >

                {Object.keys(events).map((key, index) => {
                    let marker = events[key]

                    return (
                        <Marker
                            key={index}
                            coordinate={{latitude: marker.lat, longitude: marker.long}}
                            title={marker.name}
                        />
                    )
                })}

                {Object.keys(vendors).map((key, index) => {
                    let marker = vendors[key]

                    return (
                        <Marker
                            key={index}
                            coordinate={{latitude: marker.lat, longitude: marker.long}}
                            title={marker.name}
                        />
                    )
                })}

            </MapView>
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