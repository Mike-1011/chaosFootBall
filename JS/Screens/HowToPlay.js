import * as React from 'react';
import { Button, View, Text } from 'react-native';

/*
    Display message that this is where retired heroes go
*/
const HowToPlay = ({ navigation, route }) => {

    return (
        <View>
            <Text>1. Click start new game</Text>
            <Text>2. Choose a team</Text>
            <Text>3. Pick players or Simulate the picks at any time</Text>
            <Text>4. Win the Championship</Text>
        </View>
    );
}


export default HowToPlay;