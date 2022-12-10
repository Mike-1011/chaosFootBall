import * as React from 'react';
import { View, Button } from 'react-native';
/*
    Home Screen
*/

const Home = ({ navigation, route }) => {

    return (
        <View >
            <Button
                title="How To Play"
                color={"lightgreen"}
                onPress={() => {
                    navigation.navigate('How To Play')
                }}
            />

            <Button
                title="Start New Game"
                color={"orangered"}
                onPress={() => {
                    navigation.navigate('Choose Team')
                }}
            />

            <Button
                title="Support What I Am Trying To Do!!!"
                color={"lightgreen"}
                onPress={() => {
                    navigation.navigate('Pay Me')
                }}
            />

        </View>
    )
}

export default Home;