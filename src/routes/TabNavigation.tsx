import React, {useState, useEffect} from 'react';
import { Text, View } from 'react-native';
import { Icon } from "@rneui/base";
import colors from '../constants/colors'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Map from '../views/Map';
import Header from '../components/Header';

const Tab = createBottomTabNavigator();

export default function TabNavigation({navigationElements}) {

    const mainTabs = ['Events', 'Overview', 'About Us']
    const initialRouteName = 'Events'
    const [title, updateTitle] = useState(initialRouteName);
    const [previousTitle, updatePreviousTitle] = useState('');
    const [showBack, updateBackButtonStatus] = useState(false)

    const changeHeaderTitle = (routeName) => {
        console.log('----sfasdfasdfasdffasfdafa'+ routeName)
        if (mainTabs.includes(routeName) ) {
            updateTitle(routeName)
            
            updateBackButtonStatus(false)
        } else {
            updateTitle(routeName)
            updateBackButtonStatus(true)
        }
    }

    const updatePrevTitle = (prev) => {
        updatePreviousTitle(prev)
    }

    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={initialRouteName}
                screenOptions={({route}) => ({
                    header: ({ navigation, route, options, back }) => (
                        <Header 
                            initalHomeTabs={mainTabs}
                            navigation={navigation} 
                            route={route} 
                            options={options} 
                            back={back}
                            title={title}
                            showBack={showBack}
                            previousTitle={previousTitle}
                            updateBackButtonStatus={updateBackButtonStatus}
                            changeHeaderTitle={changeHeaderTitle} />
                    ),
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;

                        if (route.name === 'Events') {
                            iconName = 'home'
                        } else if (route.name === 'Overview') {
                            iconName = 'map'
                        } else if (route.name === 'About Us') {
                            iconName = 'info'
                        }
                        return (
                            <Icon 
                                color={color} 
                                name={iconName} 
                                size={30} 
                                type="MaterialIcons" />
                        )
                    },
                    tabBarActiveTintColor: colors.secondaryColor,
                    tabBarInactiveTintColor: colors.themeColor,
                })}
            >
                <Tab.Screen name="Events" component={navigationElements.events} initialParams={{updateTitle: changeHeaderTitle, updatePrevTitle: updatePrevTitle}} />
                <Tab.Screen options={{headerShown: false}} name="Overview" component={Map} />
                <Tab.Screen name="About Us" component={navigationElements.aboutUs} initialParams={{updateTitle: changeHeaderTitle, updatePrevTitle: updatePrevTitle}}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}