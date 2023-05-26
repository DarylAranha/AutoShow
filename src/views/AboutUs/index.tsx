import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Search from '../../components/Search';
import { TitleText } from '../../components/Text';
import CardContainer from '../../components/CardContainer';

import colors from '../../constants/colors';

import { data } from './data';

export default function AboutUs(props: object) {

    const [aboutUsData, updateaboutUsData] = useState([])

    useEffect(() => {
        updateaboutUsData(data.data)
    }, [])

    function onPressSpecificAboutUs(onPressData) {
        console.log('onSAboutUs')
        console.log(onPressData)
        props.navigation.navigate('SpecificAboutUs', onPressData)
    }

    return (
        <View style={styles.container}> 
            <CardContainer 
                data={aboutUsData}
                onPress={onPressSpecificAboutUs} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.backgroundColor
    }
})
