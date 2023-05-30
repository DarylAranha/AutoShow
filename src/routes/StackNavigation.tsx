import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Events from '../views/Events';
import SpecificEvent from '../views/Events/SpecificEvent';
import Header from '../components/Header';
import AboutUs from '../views/AboutUs';
import SpecificAboutUs  from '../views/AboutUs/SpecificAboutUs';
import DetailedAboutUs from '../views/AboutUs/DetailedAboutUs';


const EventStack = createNativeStackNavigator();
const AboutUsStack = createNativeStackNavigator();

export function EventStackNavigation({navigation, route}) {

    console.log('<<<<<<<<' + route.params)
    console.log('<<<<<<<<' + route.name)
    console.log('<<<<<<<<>>>>>>>>>>>>>>>>')

    return (
        <EventStack.Navigator 
            initialRouteName='Event'
            screenOptions={{
                headerShown: false,
                animationTypeForReplace: 'pop'
            }}
        >
            <EventStack.Screen name="Event" initialParams={{...route.params}} component={Events} />
            <EventStack.Screen name="SpecificEvent" initialParams={{...route.params}} component={SpecificEvent} />
        </EventStack.Navigator>
    );
}

export function AboutUsStackNavigation({navigation, route}) {
    
    return (
        <AboutUsStack.Navigator
            initialRouteName='AboutUs'
            screenOptions={{
                headerShown: false,
                animationTypeForReplace: 'pop'
            }}
        >
            <AboutUsStack.Screen name="AboutUs"  initialParams={{...route.params}} component={AboutUs} />
            <AboutUsStack.Screen name="SpecificAboutUs"  initialParams={{...route.params}} component={SpecificAboutUs} />
            <AboutUsStack.Screen name="DetailedAboutUs"  initialParams={{...route.params}} component={DetailedAboutUs} />
        </AboutUsStack.Navigator>
    )
}