import React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import WelcomeScreen from './screens/WelcomeScreen';
import  AppTabNavigator  from './Components/AppTabNavigator'

export default function App() {
return (
<AppContainer/>
);
}


const switchNavigator = createSwitchNavigator({
WelcomeScreen:{screen: WelcomeScreen},
BottomTab:{screen: AppTabNavigator}
})

const AppContainer =  createAppContainer(switchNavigator);