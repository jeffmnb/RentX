import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../pages/Home';
import { CarPage } from '../pages/CarPage';
import { Scheduling } from '../pages/Scheduling';
import { SchedulingDetails } from '../pages/SchedulingDetails';
import { ConfirmCar } from '../pages/ConfirmCar';
import { MySchedulins } from '../pages/MySchedulins';

export const Stack = () => {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='CarPage' component={CarPage} />
            <Stack.Screen name='Scheduling' component={Scheduling} />
            <Stack.Screen name='SchedulingDetails' component={SchedulingDetails} />
            <Stack.Screen name='ConfirmCar' component={ConfirmCar} />
            <Stack.Screen name='MySchedulins' component={MySchedulins} />
        </Stack.Navigator>
    )
}