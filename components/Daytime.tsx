import React , {useEffect, useState, createContext} from "react";
import { 
    View,
    Text 
} from "react-native";

function Daytime(){
    const [time, setTime] = useState(new Date())
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

 
    useEffect( () => {
        setInterval(() => {setTime(new Date())}, 1000)
    })
    return (
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
                        {time.getHours().toString().padStart(2,'0')} : {time.getMinutes().toString().padStart(2,'0')} : {time.getSeconds().toString().padStart(2,'0')}            
                    </Text>
                </View>
            </View>
    )
}


export default Daytime;
