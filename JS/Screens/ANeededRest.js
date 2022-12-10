import * as React from 'react';
import { Button, View, Text } from 'react-native';

/*
    Home screen during the offseason - give helpful message to the players
    you deserve a much needed rest - if you want to see new players arrive spread awarness
*/
const ANeededRest = ({ navigation, route }) => {

    return (
        <View style={{ backgroundColor: "lightgreen" }}>
            <Text style={{ fontSize: 24, color: "white" }}>Congragulations Hero!  You desereve a much needed rest!  Thank you for all of your hard work.
                If you want to see new heroes ener the scene support what I am trying to do.
            </Text>
            <Button
                onPress={() => {
                    navigation.navigate('Season Menu')
                }}
                title="New Season"
                color="orangered"
            />
        </View>
    );
}


export default ANeededRest;