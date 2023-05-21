import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Search from '../../components/Search';
import { TitleText } from '../../components/Text';
import CardContainer from '../../components/CardContainer';

import colors from '../../constants/colors';

import { data } from './data';

export default function AboutUs(props: object) {

    const [aboutUsData, updateaboutUsData] = useState([])
    const [searchKeyword, updateSearchKeyword] = useState('')

    useEffect(() => {
        updateaboutUsData(data.data)
    }, [])

    const updatedSearchData = (searchData = '') => {
        updateSearchKeyword(searchData)
    }
    
    function onPressSpecificAboutUs(onPressData) {
        console.log('onSAboutUs')
        console.log(onPressData)
        props.navigation.navigate('SpecificAboutUs', onPressData)
    }

    const aboutUsDataList = Object.values(aboutUsData).filter((obj) => obj.title.includes(searchKeyword))
    return (
        <View style={styles.container}> 
            <Search updatedSearchData={updatedSearchData}/>
            <CardContainer 
                data={aboutUsDataList}
                onPress={onPressSpecificAboutUs} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.backgroundColor
    }
})
