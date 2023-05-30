import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Search from '../../components/Search';
import { TitleText } from '../../components/Text';
import CardContainer from '../../components/CardContainer';
import { Tab, TabView } from '@rneui/themed';

import { useIsFocused } from '@react-navigation/native';

import colors from '../../constants/colors';

import { data } from './events_data';

export default function Events({ navigation, route }) {
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const focused = navigation.addListener('focus', () => {
            route.params.updateTitle && route.params.updateTitle('Events', '')
        });
    
        // Return the function to unsubscribe from the event so it gets removed on unmount
        return focused;
    }, [navigation]);

    function onPressEvent(onPressData) {
        // implement navigation
        navigation.navigate('SpecificEvent', onPressData)
    }

    // sort the data by date and time
    data.one.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

    const eventViewFriday = <CardContainer data={data.one} onPress={onPressEvent} />
    const eventViewSaturday = <CardContainer data={data.two} onPress={onPressEvent} />
    const eventViewSunday = <CardContainer data={data.three} onPress={onPressEvent} />
    return (
        <View style={styles.container}>
            <Tab
                value={index}
                onChange={(e) => setIndex(e)}
                indicatorStyle={{
                    backgroundColor: colors.secondaryColor,
                    height: 3,
                }}
                variant="default" >
            <Tab.Item
                title="Friday"
                titleStyle={{ fontSize: 18 }}
            />
            <Tab.Item
                title="Saturday"
                titleStyle={{ fontSize: 18 }}
            />
            <Tab.Item
                title="Sunday"
                titleStyle={{ fontSize: 18 }}
            />
            </Tab>

            <TabView value={index} onChange={setIndex} animationType="spring">
                <TabView.Item>
                    {eventViewFriday}
                </TabView.Item>
                <TabView.Item>
                    {eventViewSaturday}
                </TabView.Item>
                <TabView.Item>
                    {eventViewSunday}
                </TabView.Item>
            </TabView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.backgroundColor,
        flex: 1,
    }
})
