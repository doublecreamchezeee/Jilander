import React from "react";
import {getFirestore, collection, query, getDocs} from '@react-native-firebase/firestore'
import { View, TouchableOpacity, Text } from "react-native";
import styles from "../public/css/styles";

const Firestore = () => {
    const database= getFirestore();
    const ref = collection(database, "Task");
    const readData = async () => {
        try {
            const snapshot = await getDocs(query(ref))
            console.log(snapshot)
        } catch(e){
            alert(e)
        }
    }
    return (
        <View>
            <TouchableOpacity onPress={readData} style={styles.addButton}>
                <Text style={styles.buttonText}>
                    Log
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Firestore;