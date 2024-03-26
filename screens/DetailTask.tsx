import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import styles from '../public/css/styles'

function DetailTask() {
    const [newNameTask, setNewNameTask] = useState<string>('');
    const [showDropdownH, setShowDropdownH] = useState<boolean>(false);
    const [showDropdownM, setShowDropdownM] = useState<boolean>(false);
    const [selectedHour, setSelectedHour] = useState<string>('');
    const [selectMinute, setSelectMinute] = useState<string>('');
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
        setSelectMinute(time);
        setShowDropdownM(false);
    };
    const onSubmitEditing = () => {
        console.log('change name', newNameTask)
        setNewNameTask('')
    }
    return (
        <View>
            {/* header */}
            <View style={styles.detailTaskHeader}>
                <TextInput
                    style={styles.textInput2}
                    onChangeText={onChangeText}
                    value={newNameTask}
                    placeholder="Input new name..."
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
                    <Text style={{color: 'grey'}}>{selectedHour || 'HH'}</Text>
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
                    <Text style={{color: 'grey'}}>{selectMinute || 'MM'}</Text>
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
