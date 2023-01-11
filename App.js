import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';

import {Feather, Entypo, SimpleLineIcons} from "@expo/vector-icons";

import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer} from '@react-navigation/native';

import Home from './src/Pages/Home';
import Transacoes from './src/Pages/Transacoes';
import Planejamento from './src/Pages/Planejamento';
import Premium from './src/SubPages/Premium';
import CreditCard from './src/Pages/CreditCard';
import NoteComp from './src/Componentes/NoteComp';
import Button from './src/Componentes/Button';
import Header from './src/Componentes/Header';
import Profile from './src/Componentes/Profile';
import PlanFree from './src/Pages/PlanFree';
import Questions from './src/SubPages/PlanFree/Questions';
import Points from './src/SubPages/PlanFree/Points';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Anotações
// Adicionar efeito ao realizar a troca de página.
// Adicionar efeito no botão de + para puxar as opções.

function MyTabs() {
  return (
    <Tab.Navigator
      taBarOption={{
        style: {
          backgroundColor: "#fff",
        },
        activeTintColor: "#1C8BEB",
        inactiveTintColor: "#828486"
      }}
    >
      <Tab.Screen name="Main" component={Home} options={{
        headerShown: false,
        title: "Principal",
        tabBarIcon: ({color, size}) => {
          return <Feather name="home" size={size} color={color}/>
        }
      }}/>

      <Tab.Screen name="Transactions" component={Transacoes} options={{
        headerShown: false,
        title: "Transações",
        tabBarIcon: ({color, size}) => {
          return <Entypo name="list" size={size} color={color}/>
        }
      }}/>
      <Tab.Screen name="Add" component={Premium} options={{
        headerShown: false,
        title: "",
        tabBarIcon: ({color, size}) => {
          return <Button/>
        }
      }}/>
      <Tab.Screen name="Plan" component={Planejamento} options={{
        headerShown: false,
        title: "Planejamento",
        tabBarIcon: ({color, size}) => {
          return <SimpleLineIcons name="wallet" size={size} color={color}/>
        }
      }}/>
      <Tab.Screen name="More" component={CreditCard} options={{
        headerShown: false,
        title: "Mais",
        tabBarIcon: ({color, size}) => {
          return <Entypo name="dots-three-horizontal" size={size} color={color}/>
        }
      }}/>
      
    </Tab.Navigator>
  )
}

export default function App() {
  return (

    <NavigationContainer>
        <StatusBar backgroundColor='#38A69D' barStyle="dark-content"/>
        <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
          <Header/> 
          <Stack.Navigator>
            <Stack.Screen name="Tabs" component={MyTabs} options={{headerShown: false}}/>
            <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
            <Stack.Screen name="PlanFree" component={PlanFree} options={{headerShown: false, gestureDirection: 'vertical', gestureEnabled: true, animationDuration: 600}}/>
            <Stack.Screen name="Points" component={Points} options={{headerShown: false, gestureDirection: 'vertical', gestureEnabled: true, animationDuration: 600}}/>
          </Stack.Navigator>
        </SafeAreaView>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  
});
