import Reactm, {useContext, useEffect, useState} from "react";
import { 
    View,
    Text,
    ImageBackground,
} from "react-native";

import InfoTaskBoard from "../components/InfoTaskBoard";
import Daytime from '../components/Daytime'
import { DaytimeContext, DaytimeProvider } from "../context/DaytimeContext";
function HomeScreen(): React.JSX.Element{
    const {type} = useContext(DaytimeContext)
    const backgroundImagePaths: { [key: string]: any } = {
        'night-bg-homescreen.jpg': require('../assets/night-bg-homescreen.jpg'),
        'dawn-bg-homescreen.jpg': require('../assets/dawn-bg-homescreen.jpg'),
        'sunset-bg-homescreen.jpg': require('../assets/sunset-bg-homescreen.jpg'),
    };
    return (
        <View style={{ flex: 100 }}>
            <ImageBackground
                source={backgroundImagePaths[type]}
                resizeMode="cover"
                style={{
                    flex: 1,
                    justifyContent: "center"
                }}>
                <View style={{ flex: 5 }}></View>
                <View style={{
                    flex: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}>
                    <Daytime/>
                </View>
                
                <View style={{ flex: 50 }}>
                    <View style={{
                        flex: 15,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <InfoTaskBoard/>
                    </View>
                </View>
                <View style={{ flex: 20 }}></View>
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
