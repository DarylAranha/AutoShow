import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Events from '../views/Events';
import SpecificEvent from '../views/Events/SpecificEvent';
import Header from '../components/Header';
import AboutUs from '../views/AboutUs';


const EventStack = createNativeStackNavigator();
const AboutUsStack = createNativeStackNavigator();

export function EventStackNavigation() {

    return (
        <EventStack.Navigator 
            initialRouteName='Events'
            screenOptions={{
                headerShown: false 
            }}
        >
            <EventStack.Screen name="Events" component={Events} />
            <EventStack.Screen name="Event" component={SpecificEvent} />
        </EventStack.Navigator>
    );
}

export function AboutUsStackNavigation() {
    
    return (
        <AboutUsStack.Navigator
            initialRouteName='AboutUs'
            screenOptions={{
                headerShown: false 
            }}
        >
            <AboutUsStack.Screen name="AboutUs" component={AboutUs} />
        </AboutUsStack.Navigator>
    )
}