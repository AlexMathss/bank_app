import React from "react";

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../Pages/Home';
import Transacoes from '../Pages/Transacoes';
import Planejamento from '../Pages/Planejamento';
import CardMore from '../Pages/CardMore';
import Informacoes from "../SubPages/Informacoes";
import Premium from "../SubPages/Premium";
import CreditCard from '../Pages/CreditCard';
import { ScrollView } from "react-native";

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
            />
            <Stack.Screen
                name="Transações"
                component={Transacoes}
            />
            <Stack.Screen
                name="Planejamento"
                component={Planejamento}
            />
            <Stack.Screen
                name="Mais"
                component={CardMore}
            />
            <Stack.Screen
                name="Informações"
                component={Informacoes}
            />
            <Stack.Screen
                name="Premium"
                component={Premium}
            />
            <Stack.Screen
                name="CreditCard"
                component={CreditCard}
            />
            
        </Stack.Navigator>
    )
}