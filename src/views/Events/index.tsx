import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Search from '../../components/Search';
import { TitleText } from '../../components/Text';
import CardContainer from '../../components/CardContainer';

import colors from '../../constants/colors';

import { data } from './data';

export default function Events(props: object) {

    const [eventData, updateEventData] = useState([])
    const [eventSearchData, updateSearchData] = useState([])

    useEffect(() => {
        updateEventData(data.data)
    }, [])

    const updatedSearchData = (searchData = '') => {
        console.log(Object.values(eventData).filter((obj) => obj.title.includes(searchData)))

        if (searchData.length > 0) {
            const newData = Object.values(eventData).filter((obj) => obj.title.includes(searchData))
            updateSearchData(newData)
        } else {
            updateSearchData([])
        }
    }
    
    function onPressEvent(onPressData: Object) {
        // implement navigation
        props.navigation.navigate('Event', onPressData)
    }

    // sort the data by date and time
    data.data.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

    return (
        <View style={styles.container}>
            <Search updatedSearchData={updatedSearchData}/>
            <CardContainer 
                data={eventSearchData.length > 0 ? eventSearchData : eventData}
                onPress={onPressEvent} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.backgroundColor
    }
})
