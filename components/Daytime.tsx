import React , {useEffect, useState, createContext} from "react";
import { 
    View,
    Text 
} from "react-native";
import styles from '../public/css/styles'
function Daytime(){
    const [time, setTime] = useState(new Date())
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

 
    useEffect( () => {
        setInterval(() => {setTime(new Date())}, 1000)
    })
    return (
        <View style={styles.container}>
          <View>
            <Text style={styles.dateText}>
              {time.getDate()} {months[time.getMonth()]} {time.getFullYear()}
            </Text>
          </View>
          <View>
            <Text style={styles.timeText}>
              {time.getHours().toString().padStart(2, '0')} :{' '}
              {time.getMinutes().toString().padStart(2, '0')} :{' '}
              {time.getSeconds().toString().padStart(2, '0')}
            </Text>
          </View>
      </View>
    )
}


export default Daytime;
