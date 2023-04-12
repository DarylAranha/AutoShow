import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Search from '../../components/Search';
import { TitleText } from '../../components/Text';
import CardContainer from '../../components/CardContainer';

import colors from '../../constants/colors';

import { data } from './data';

export default function AboutUs(props: object) {

    const [eventData, updateEventData] = useState([])
    const [searchKeyword, updateSearchKeyword] = useState('')

    useEffect(() => {
        updateEventData(data.data)
    }, [])

    const updatedSearchData = (searchData = '') => {
        updateSearchKeyword(searchData)
    }
    
    function onPressEvent(onPressData) {
        // implement navigation
        
    }

    // sort the data by date and time
    data.data.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

    const eventDataList = Object.values(eventData).filter((obj) => obj.title.includes(searchKeyword))
    return (
        <View style={styles.container}>
            <Search updatedSearchData={updatedSearchData}/>
            <CardContainer 
                data={eventDataList}
                onPress={onPressEvent} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.backgroundColor
    }
})
