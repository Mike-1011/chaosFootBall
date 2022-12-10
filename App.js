import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ANeededRest from "./JS/Screens/ANeededRest";
import ChooseTeam from "./JS/Screens/ChooseTeam";
import GamePlan from "./JS/Screens/GamePlan";
import HeroesArchive from "./JS/Screens/HeroesArchive";
import Home from "./JS/Screens/Home";
import HowToPlay from './JS/Screens/HowToPlay';
import LegendaryHeroes from "./JS/Screens/LegendaryHeroes";
import SeasonMenu from './JS/Screens/SeasonMenu';
import SimGames from "./JS/Screens/SimGames";
import TheRealityGames from "./JS/Screens/TheRealityGames";




//<uses-permission android:name="android.permission.BILLING" />

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="A Needed Rest"
          component={ANeededRest}
        />
        <Stack.Screen
          name="Choose Team"
          component={ChooseTeam}
        />
        <Stack.Screen
          name="Game Plan"
          component={GamePlan}
        />
        <Stack.Screen
          name="Heroes Archive"
          component={HeroesArchive}
        />
        <Stack.Screen
          name="How To Play"
          component={HowToPlay}
        />
        <Stack.Screen
          name="Legendary Heroes"
          component={LegendaryHeroes}
        />
        <Stack.Screen
          name="Season Menu"
          component={SeasonMenu}
        />
        <Stack.Screen
          name="Sim Games"
          component={SimGames}
        />
        <Stack.Screen
          name="The Reality Games"
          component={TheRealityGames}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App