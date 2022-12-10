import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

/*
    Simulate games and have scored shown to the user
*/
const SimGames = ({ navigation, route }) => {

    return (
        <View>
            <Text style={styles.text}>
                You Win The Campionship!!!
            </Text>
            <Button
                onPress={() => {
                    navigation.navigate('A Needed Rest')
                }}
                title="Next"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center'
    },
});

export default SimGames;