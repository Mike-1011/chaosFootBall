import * as React from 'react';
import { Text, View } from 'react-native';
/*
    It says fun chaos and it is an unchangeable yes - styling on text - to far left and right
    back button
*/
const GamePlan = ({ navigation, route }) => {

    return (
        <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
                <Text style={{ textAlign: 'center', fontSize: 35, color: "orangered", backgroundColor: "lightgreen" }}>Fun Chaos</Text>
            </View>
            <View style={{ flex: 1 }}>
                <Text style={{ textAlign: 'center', fontSize: 35, color: "lightgreen", backgroundColor: "orangered" }}>Yes</Text>
            </View>
        </View>
    );
}


export default GamePlan;