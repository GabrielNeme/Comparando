import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { enableScreens } from 'react-native-screens';
import Toast from 'react-native-toast-message';

import TabBarIcon from './src/screens/components/TabBarIcon';
import LoginScreen from './src/screens/login/Login';
import CadastroScreen from './src/screens/cadastro/Cadastro';
import HomeScreen from './src/screens/home/home';
import BuscaScreen from './src/screens/busca/busca';
import PerfilScreen from './src/screens/perfil/Perfil';
import PicanhaScreen from './src/screens/Picanha/picanha';
import AlfaceScreen from './src/screens/Alface/alface';
import LaranjaScreen from './src/screens/Laranja/laranja';
import MacaScreen from './src/screens/maçã/maca';
import ToddyScreen from './src/screens/toddy/toddy';
import MelanciaScreen from './src/screens/melancia/melancia';
import FrutasScreen from './src/screens/frutas/Frutas';
import CarnesScreen from './src/screens/carnes/Carnes';

enableScreens();

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#000',
        tabBarStyle: {
          backgroundColor: '#FFCC00',
          height: 72,
          paddingBottom: 10,
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home'} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Busca"
        component={BuscaScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'search' : 'search-outline'} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={PerfilScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'person' : 'person-outline'} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cadastro"
          component={CadastroScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainTabs"
          component={TabRoutes}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Perfil"
          component={PerfilScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Frutas"
          component={FrutasScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Carnes"
          component={CarnesScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="picanha"
          component={PicanhaScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Alface"
          component={AlfaceScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="laranja"
          component={LaranjaScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="maca"
          component={MacaScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="toddy"
          component={ToddyScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="melancia"
          component={MelanciaScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
  );
}
