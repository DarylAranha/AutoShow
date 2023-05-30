import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TitleText } from '../../components/Text';
import CardContainer from '../../components/CardContainer';

import colors from '../../constants/colors';
import { handleLinkPress } from '../../helper'

import { data } from './data';

export default function AboutUs({ navigation, route }) {

    React.useEffect(() => {
        const focused = navigation.addListener('focus', () => {
            route.params.updateTitle && route.params.updateTitle('About Us', '')
        });

        // Return the function to unsubscribe from the event so it gets removed on unmount
        return focused;
    }, [navigation]);

    function onPressSpecificAboutUs(onPressData) {
        if (onPressData.clicableLink) {
            handleLinkPress(onPressData.clicableLink)
        } else {
            route.params.updatePrevTitle && route.params.updatePrevTitle('About Us')
            navigation.navigate('SpecificAboutUs', {...onPressData, ...route.params})
        }
    }

    return (
        <View style={styles.container}> 
            <CardContainer 
                data={data.data}
                onPress={onPressSpecificAboutUs} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: colors.backgroundColor
    }
})
