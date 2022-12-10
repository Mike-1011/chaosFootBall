import * as React from 'react';
import { Button, View } from 'react-native';
/*
    Season Menu - choose sim games and look at options
*/
const SeasonMenu = ({ navigation, route }) => {

    return (
        <View>
            <Button
                title="Legendary Heroes"
                color={"lightgreen"}
                onPress={() => {
                    navigation.navigate('Legendary Heroes')
                }}
            />

            <Button
                title="Heroes Archive"
                color={"orangered"}
                onPress={() => {
                    navigation.navigate('Heroes Archive', { TeamName: route.params.TeamName })
                }}
            />

            <Button
                title="Game Plan"
                color={"lightgreen"}
                onPress={() => {
                    navigation.navigate('Game Plan')
                }}
            />

            <Button
                title="Sim Games"
                color={"orangered"}
                onPress={() => {
                    navigation.navigate('Sim Games')
                }}
            />
        </View>
    );
}


export default SeasonMenu;