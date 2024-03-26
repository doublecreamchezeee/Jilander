import React, { useContext, useState, useEffect } from 'react';
import { View, ImageBackground, TextInput, TouchableOpacity, Text } from 'react-native';
import InfoTaskBoard from '../components/InfoTaskBoard';
import Daytime from '../components/Daytime';
import { DaytimeContext, DaytimeProvider } from '../context/DaytimeContext';
import styles from '../public/css/styles'; // Import the style object
import database from '@react-native-firebase/database'

const backgroundImagePaths: { [key: number]: any } = {
    0: require('../assets/dawn-bg-homescreen.jpg'),
    1: require('../assets/sunset-bg-homescreen.jpg'),
    2: require('../assets/night-bg-homescreen.jpg'),
};
const newTaskRef = database().ref('/task/taskInfo');


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

function HomeScreen() {
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
                    <InfoTaskBoard/>
                </View>
            </ImageBackground >
        </View >
    );
}

export default HomeScreen;
