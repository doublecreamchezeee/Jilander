import React , {useEffect, useState, createContext} from "react";
import { 
    View,
    Text 
} from "react-native";

export const DaytimeContext = createContext(0);

function Daytime(){
    const [time, setTime] = useState(new Date())
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const hour = time.getHours();
    var checkHour = 0
    if (time.getHours() >= 6 && time.getHours() < 15){
        checkHour = 1
    }
    else if (time.getHours() >= 15 && time.getHours() < 18){
        checkHour = 2
    }
    else {
        checkHour = 0;
    }
 
    useEffect( () => {
        setInterval(() => {setTime(new Date())}, 1000)
    })
    return (
        <DaytimeContext.Provider value={checkHour}>
            <View style={{
                flexDirection: 'column'
            }}>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center', 
                }}>
                    <Text style={{
                        fontSize: 40,
                        color: 'grey',
                        margin: 15,
                    }}>
                        {time.getDate()} {months[time.getMonth()]} {time.getFullYear()}            
                    </Text>
                </View>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center', 
                }}>
                    <Text style={{
                        fontSize: 20,
                        color: 'grey',
                        margin: 15,
                    }}>
                        {time.getHours()} : {time.getMinutes()} : {time.getSeconds()}            
                    </Text>
                </View>
            </View>
        </DaytimeContext.Provider>
    )
}


export default Daytime;
