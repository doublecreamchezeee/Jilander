import Reactm, {useContext} from "react";
import { 
    View,
    Text,
    ImageBackground,
} from "react-native";

import Daytime, {DaytimeContext} from '../components/Daytime'

function HomeScreen(): React.JSX.Element{
    const themeType = useContext(DaytimeContext)

    const getThemeType = () => {
        switch (themeType) {
            case 0:
                return 'dawn-bg-homescreen.jpg';
            case 1:
                return 'dawn-bg-homescreen.jpg';
            case 2:
                return 'sunset-bg-homescreen.jpg';
            default:
                return 'dawn-bg-homescreen.jpg';
        }
    };


    return (
    <View style={{
        flex: 100
    }}>
        <ImageBackground 
            source={require(`../assets/${getThemeType()}`)}
            resizeMode="cover"
            style={{
                flex:1,
                justifyContent: "center"
            }}>
            <View style={{
                flex: 10,
            }}>
            </View>
            <View style={{
                flex: 20,
                justifyContent: 'center',
                alignItems: 'center', 
                flexDirection: 'column',
            }}>
                <Daytime/>
            </View>
            <View style={{
                flex: 50,
            }}>
            </View>
            <View style={{
                flex: 20,
            }}>
            </View>
        </ImageBackground>
    </View>
    )
}

export default HomeScreen;