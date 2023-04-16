import * as React from 'react';
import { Text, View } from 'react-native';
import { Icon } from "@rneui/base";
import colors from '../constants/colors'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Events from '../views/Events';
import Map from '../views/Map';
import Header from '../components/Header';

const Tab = createBottomTabNavigator();

export default function TabNavigation({navigationElements, AuthenticationElement = null}) {

    const AuthenticationNavigation = AuthenticationElement

    const [isLoggedin, updateLoginStatus] = React.useState(false)

    return (
        <NavigationContainer>
            {false ? (
                    <Tab.Navigator
                    initialRouteName='Events'
                    screenOptions={({route}) => ({
                        header: ({ navigation, route, options, back }) => (
                            <Header 
                                navigation={navigation} 
                                route={route} 
                                options={options} 
                                back={back}
                                showBack={(() => {
                                    // debugger
                                    // if (route.name === 'Events') {
                                    //     return false
                                    // } else if (route.name === 'Overview') {
                                    //     return false
                                    // } else if (route.name === 'About Us') {
                                    //     return false
                                    // }

                                    return true
                                })()} />
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
                    <Tab.Screen name="Events" component={navigationElements.events} />
                    <Tab.Screen options={{headerShown: false}} name="Overview" component={Map} />
                    <Tab.Screen name="About Us" component={navigationElements.aboutUs} />
                </Tab.Navigator>
            ) : (
                <AuthenticationNavigation />
            )}
        </NavigationContainer>
    );
}