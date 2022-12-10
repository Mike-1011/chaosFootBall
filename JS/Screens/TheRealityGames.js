import React, { useState } from 'react';
import { Alert, Button, ListViewBase, View } from 'react-native';
import { ScrollView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HeroNames } from "../Heroes/HeroNames";
import { TeamNames } from '../Heroes/TeamNames';

const TheRealityGames = ({ navigation, route }) => {
    /*
        Pick Heroes to join teams 
    */

    const Tab = createBottomTabNavigator();

    const list = HeroNames;

    const teams = TeamNames;

    const PlayersTeamName = route.params.TeamName;

    const playersTeam = teams.find(team => team.name == PlayersTeamName);

    function handleRemove(hero) {

        for (let i = 0; i < list.length; i++) {
            if (list[i] == hero) {
                list.splice(i, 1);
                break;
            }
        }

        teams.forEach(team => {
            if (team.name != PlayersTeamName) {
                handleAdd(team.name, list.pop());
            }
        });
    }

    function handleAdd(teamName, hero) {
        if (hero != undefined) {
            teams.find(team => team.name == teamName).players.push(hero);
        }
    }

    function simPicks() {
        while (list.length != 0) {
            handleAdd(PlayersTeamName, list[0]);
            handleRemove(list[0]);
        }
        navigation.navigate("The Reality Games", { TeamName: PlayersTeamName });
    }

    function AvailableHeroes() {
        return (
            <ScrollView>
                {list.map((hero, index) => (
                    <View key={hero.name}>
                        <Button
                            title={hero.name}
                            color={index % 2 == 0 ? "lightgreen" : "orangered"}
                            onPress={() => {
                                handleAdd(PlayersTeamName, hero);
                                handleRemove(hero);
                                navigation.navigate("The Reality Games", { TeamName: PlayersTeamName });
                            }} />
                    </View>
                ))}


                <Button
                    title="Sim Picks"
                    color={"orangered"}
                    onPress={() => {
                        //Ask to mask sure
                        simPicks();
                        navigation.navigate('Season Menu', { Teams: teams, TeamName: route.params.TeamName });
                        /*
                        Alert.alert(
                            "Sim Picks???",
                            "Would You Like To Simulate The Picks",
                            [
                                {
                                    text: "Yes",
                                    onPress: () => {
                                        simPicks();
                                        navigation.navigate('Season Menu', { Teams: teams, TeamName: route.params.TeamName });
                                    }
                                },
                                {
                                    text: "No",
                                    onPress: () => { },
                                    style: "cancel"
                                }
                            ]
                        )*/
                    }}
                />
            </ScrollView>
        )
    };

    function ChosenHeroes() {
        return (
            <ScrollView>
                {playersTeam.players.map((hero, index) => (

                    <View key={hero.name}>
                        <Button
                            title={hero.name}
                            color={index % 2 == 0 ? "lightgreen" : "orangered"}
                            onPress={() => {
                            }} />
                    </View>
                ))}
            </ScrollView>
        )
    };

    return (
        <Tab.Navigator
            screenOptions={{
                headerTitle: PlayersTeamName
            }}
        >
            <Tab.Screen name="Avaialabe" component={AvailableHeroes} />
            <Tab.Screen name="Chosen" component={ChosenHeroes} />
        </Tab.Navigator>
    );
}



export default TheRealityGames;