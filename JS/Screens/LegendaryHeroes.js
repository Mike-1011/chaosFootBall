import * as React from 'react';
import { View, Text } from 'react-native';

/*
    Display message that this is where retired heroes go
*/
const LegendaryHeroes = ({ navigation, route }) => {

    return (
        <View style={{ backgroundColor: "lightgreen" }}>
            <Text style={{ fontSize: 24, color: "white" }}>Welcome to a list of Legendary Heroes who have retired!
                This feature is not complete at the moment. Stay Tuned!
            </Text>
        </View>
    );
}


export default LegendaryHeroes;