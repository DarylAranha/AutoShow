import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Search from '../../components/Search';
import { TitleText } from '../../components/Text';
import CardContainer from '../../components/CardContainer';

import colors from '../../constants/colors';
import { handleLinkPress } from '../../helper'

export default function SpecificAboutUs({ navigation, route }) {
    
    const [aboutUsData, updateAboutUsData] = useState([])
    
    const specificData = route.params

    useEffect(() => {
        route.params.updateTitle && route.params.updateTitle(specificData.title, 'About Us')
        updateAboutUsData(specificData.data)
    }, [])

    function onPressAboutUs(onPressData) {
        // implement navigation
        if (onPressData.imageClicableLink) {
            handleLinkPress(onPressData.imageClicableLink)
        } else {
            navigation.navigate('DetailedAboutUs', onPressData)
        }
    }

    return (
        <View style={styles.container}>
            <CardContainer 
                data={aboutUsData}
                onPress={onPressAboutUs} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
