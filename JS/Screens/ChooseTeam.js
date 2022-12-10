import React from 'react';
import { View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { TeamNames } from '../Heroes/TeamNames';
import { HeroNames } from '../Heroes/HeroNames';

/*
    Choose Team
    I use magic numbers to list the teams
*/


const ChooseTeam = ({ navigation, route }) => {
    return (
        <View>
            <Picker

                onValueChange={(itemValue, itemIndex) =>
                    navigation.navigate("The Reality Games", { TeamName: TeamNames[itemIndex - 1].name })
                }>

                <Picker.Item label={"They Are All Great!!!"} />
                <Picker.Item label={TeamNames[0].name} value={TeamNames[0].name} />
                <Picker.Item label={TeamNames[1].name} value={TeamNames[1].name} />
                <Picker.Item label={TeamNames[2].name} value={TeamNames[2].name} />
                <Picker.Item label={TeamNames[3].name} value={TeamNames[3].name} />
                <Picker.Item label={TeamNames[4].name} value={TeamNames[4].name} />
                <Picker.Item label={TeamNames[5].name} value={TeamNames[5].name} />
                <Picker.Item label={TeamNames[6].name} value={TeamNames[6].name} />
                <Picker.Item label={TeamNames[7].name} value={TeamNames[7].name} />
                <Picker.Item label={TeamNames[8].name} value={TeamNames[8].name} />
                <Picker.Item label={TeamNames[9].name} value={TeamNames[9].name} />
                <Picker.Item label={TeamNames[10].name} value={TeamNames[10].name} />
                <Picker.Item label={TeamNames[11].name} value={TeamNames[11].name} />
                <Picker.Item label={TeamNames[12].name} value={TeamNames[12].name} />
                <Picker.Item label={TeamNames[13].name} value={TeamNames[13].name} />
                <Picker.Item label={TeamNames[14].name} value={TeamNames[14].name} />
                <Picker.Item label={TeamNames[15].name} value={TeamNames[15].name} />
            </Picker>
        </View >
    );
}



export default ChooseTeam;