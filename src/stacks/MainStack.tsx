import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Preload from '../screens/Preload'

import Main from '../screens/Main'

const Stack = createStackNavigator()

const MainStack: React.FC = () => (
    <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Main"
    >
        <Stack.Screen name="Preload" component={Preload}/>
        <Stack.Screen name="Main" component={Main}/>
    </Stack.Navigator>
)

export default MainStack
