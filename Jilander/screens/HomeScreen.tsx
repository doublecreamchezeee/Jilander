import React, { useContext, useState, useEffect } from 'react';
import { View, ImageBackground, TextInput, TouchableOpacity, Text } from 'react-native';
import InfoTaskBoard from '../components/InfoTaskBoard';
import styles from '../public/css/styles'; // Import the style object
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import {RootStack} from '../screens/RootStack'

const backgroundImagePaths: { [key: number]: any } = {
    0: require('../assets/dawn-bg-homescreen.jpg'),
    1: require('../assets/sunset-bg-homescreen.jpg'),
    2: require('../assets/night-bg-homescreen.jpg'),
};


const checkTime = () => {
    const currentTime = new Date()

    if (currentTime.getHours() >= 6 && currentTime.getHours() < 15) {
        return 0
    } else if (currentTime.getHours() >= 14 && currentTime.getHours() < 18) {
        return 1
    } else {
        return 2
    }
}
type HomeScreenNavigationProp = NativeStackNavigationProp<RootStack, 'HomeScreen'>;
type Props = {
    navigation: HomeScreenNavigationProp;
  };
const HomeScreen: React.FC<Props> = ({navigation}) => {
    const [bg, setBg] = useState<number>(checkTime());
    const onTimeCheck = () => {
        console.log('on check time')
        const moreCurrent = checkTime();
        if (moreCurrent != bg) {
            setBg(moreCurrent)
        }
    }
    useEffect(() => {
        setInterval(() => { onTimeCheck }, 1000 * 60)
    })
    return (
        <View style={styles.container}>
            <ImageBackground
                source={backgroundImagePaths[bg]}
                resizeMode="cover"
                style={styles.backgroundImage}>
                <View style={styles.daytimeContainer}>
                    {/* <Daytime /> */}
                </View>
                <View>
                    <InfoTaskBoard navigation={navigation}/>
                </View>
            </ImageBackground >
        </View >
    );
}

export default HomeScreen;
