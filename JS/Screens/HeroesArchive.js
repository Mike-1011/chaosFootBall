import React, { useState } from 'react';
import { Button, View, Text } from 'react-native';
import { TeamNames } from '../Heroes/TeamNames';

/*
    Which Heroes are on which team - see the different names respect, fair, hope, life, dream, unknown
*/


const HeroesArchive = ({ navigation, route }) => {

    const [counter, setCounter] = useState(startingCounterValue());//find the team the user picked

    //Starts on Chosen Team
    function startingCounterValue() {
        return TeamNames.findIndex(Team => Team.name === route.params.TeamName);
    }

    /*
        Look at team the player is
        shift -1 in array with left arrow and stop at Luck Black Cats
        shift +1 in array with right arrow and stop with the unknown
    */
    function shiftTeam(direction) {
        if ((counter != 0 && direction == -1) || (counter != (TeamNames.length - 1) && direction == 1)) {
            setCounter(counter + direction);
        }
        else if (counter == 0) {//Hits Far Right -> Loops Back to first team
            setCounter(TeamNames.length - 1);
        }
        else {//Loops to End If moving left from first team - Lucky Black Cats
            setCounter(0);
        }
    }

    return (
        <View>

            <Button
                title="Left Arrow"
                onPress={() => {
                    shiftTeam(-1);
                }}

            />
            <Button
                title="Right Arrow"
                onPress={() => {
                    shiftTeam(1);
                }}

            />
            <Text>{TeamNames[counter].name}</Text>
            <Text>{JSON.stringify(TeamNames[counter].players)}</Text>

        </View>
    );
}




export default HeroesArchive;