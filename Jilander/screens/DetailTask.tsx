import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import styles from '../public/css/styles'
import {RouteProp} from '@react-navigation/native'
import { RootStack } from "./RootStack";
import database from '@react-native-firebase/database'
import { useNavigation } from "@react-navigation/native";
type DetailTaskRouteProp = RouteProp<RootStack,"DetailTask">;
interface DetailTaskProps{
    route: DetailTaskRouteProp;
}
const DetailTask: React.FC<DetailTaskProps> = ({route}) => {
    const navigation = useNavigation();
    const newTaskRef = database().ref('/task/taskInfo');
    const { id, taskName, taskTime } = route.params;
    console.log('id task', id)
    const [newNameTask, setNewNameTask] = useState<string>(taskName);
    const [showDropdownH, setShowDropdownH] = useState<boolean>(false);
    const [showDropdownM, setShowDropdownM] = useState<boolean>(false);
    const [selectedHour, setSelectedHour] = useState<string>(taskTime.split(':')[0]);
    const [selectedMinute, setSelectedMinute] = useState<string>(taskTime.split(':')[1]);
    const onChangeText = (inputText: string) => {
        setNewNameTask(inputText)
    }
    const hourOptions = [
        '00', '01', '02', '03', '04', '05',
        '06', '07', '08', '09', '10', '11',
        '12', '13', '14', '15', '16', '17',
        '18', '19', '20', '21', '22', '23'
    ];
    const minuteOptions = [
        '00', '01', '02', '03', '04', '05',
        '06', '07', '08', '09', '10', '11',
        '12', '13', '14', '15', '16', '17',
        '18', '19', '20', '21', '22', '23',
        '24', '25', '26', '27', '28', '29',
        '30', '31', '32', '33', '34', '35',
        '36', '37', '38', '39', '40', '41',
        '42', '43', '44', '45', '46', '47',
        '48', '49', '50', '51', '52', '53',
        '54', '55', '56', '57', '58', '59'
    ];
    const handleSelectHour = (time: string) => {
        console.log(time)
        setSelectedHour(time);
        setShowDropdownH(false);
    };
    const handleSelectMinute = (time: string) => {
        console.log(time)
        setSelectedMinute(time);
        setShowDropdownM(false);
    };
    const onSubmitEditing = () => {
        const taskTime = `${selectedHour}:${selectedMinute}`; // Combine selectedHour and selectedMinute into a single string
        console.log('change name', newNameTask);
        console.log('taskTime', taskTime);
        
        // Thực hiện cập nhật dữ liệu trên Firebase
        newTaskRef.child(id).update({
            taskName: newNameTask.trim(),
            taskTime: taskTime.trim(),
        }).then(() => {
            console.log('Data updated successfully!');
            navigation.goBack();
            setNewNameTask('');
            setSelectedHour('');
            setSelectedMinute('');
        }).catch((error) => {
            console.error('Error updating data: ', error);
        });
    }
    return (
        <View style={{flex: 1, backgroundColor: 'grey'}}>
            {/* header */}
            <View style={styles.detailTaskHeader}>
                <TextInput
                    style={styles.textInput2}
                    onChangeText={onChangeText}
                    value={newNameTask}
                    placeholder={taskName}
                />
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={onSubmitEditing}>
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', margin: 20}}>
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => setShowDropdownH(!showDropdownH)}
                >
                    <Text style={{color: 'grey'}}>{ selectedHour || taskTime.split(':')[0]}</Text>
                </TouchableOpacity>
                {showDropdownH && (
                    <ScrollView style={styles.dropdown}>
                        {hourOptions.map((time, index) => (
                            <TouchableOpacity
                                key={index}
                                style={styles.option}
                                onPress={() => handleSelectHour(time)}
                            >
                                <Text style={{color: 'grey'}}>{time}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                )}
                                <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => setShowDropdownM(!showDropdownM)}
                >
                    <Text style={{color: 'grey'}}>{selectedMinute || taskTime.split(':')[1]}</Text>
                </TouchableOpacity>
                {showDropdownM && (
                    <ScrollView style={styles.dropdown}>
                        {minuteOptions.map((time, index) => (
                            <TouchableOpacity
                                key={index}
                                style={styles.option}
                                onPress={() => handleSelectMinute(time)}
                            >
                                <Text style={{color: 'grey'}}>{time}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                )}
            </View>

            <View style={{width: '100%',}}>
                <TextInput
                        style={{
                            height: 150,
                            width: '90%',
                            backgroundColor: 'grey',
                            margin: 20,
                            padding: 5,
                            textAlignVertical: 'top'
                        }}
                        onChangeText={onChangeText}
                        value={newNameTask}
                        placeholder="Task description"
                    />
            </View>
        </View>
    )
}


export default DetailTask;
