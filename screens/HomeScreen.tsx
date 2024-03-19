import React, { useContext } from "react";
import { View, ImageBackground } from "react-native";
import InfoTaskBoard from "../components/InfoTaskBoard";
import Daytime from '../components/Daytime'
import { DaytimeContext, DaytimeProvider } from "../context/DaytimeContext";
import styles from '../public/css/styles'; // Import the style object

function HomeScreen() {
    const {type} = useContext(DaytimeContext);
    const backgroundImagePaths: { [key: string]: any } = {
        'night-bg-homescreen.jpg': require('../assets/night-bg-homescreen.jpg'),
        'dawn-bg-homescreen.jpg': require('../assets/dawn-bg-homescreen.jpg'),
        'sunset-bg-homescreen.jpg': require('../assets/sunset-bg-homescreen.jpg'),
    };
    return (
        <View style={styles.container}>
            <ImageBackground
                source={backgroundImagePaths[type]}
                resizeMode="cover"
                style={styles.backgroundImage}>
                <View style={styles.daytimeContainer}>
                    <Daytime/>
                </View>
                <View>
                    <InfoTaskBoard/>
                </View>
            </ImageBackground>
        </View>
    );
}

// Wrap HomeScreen with DaytimeProvider to provide the context
const HomeScreenWithDaytimeProvider = () => (
    <DaytimeProvider>
        <HomeScreen />
    </DaytimeProvider>
);

export default HomeScreenWithDaytimeProvider;
