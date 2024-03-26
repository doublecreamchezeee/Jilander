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

interface TaskInfo {
    taskName: string;
    taskTime: string;
}

const checkTime = () => {
    const currentTime = new Date()

    if (currentTime.getHours() >= 6 && currentTime.getHours() < 15) {
        return 0
    } else if (currentTime.getHours() >= 15 && currentTime.getHours() < 18) {
        return 1
    } else {
        return 2
    }
}

function HomeScreen() {
    const [text, setText] = useState<string>('');
    const [task, setTask] = useState<TaskInfo[]>([]);
    const [bg, setBg] = useState<number>(checkTime());

    const onSubmitEditing = () => {
        const currentTime = new Date()
        const timeSubmit = currentTime.getHours().toString() + ":" + currentTime.getMinutes().toString()
        console.log(text)
        newTaskRef.push({
            taskName: text.trim(),
            taskTime: timeSubmit.trim(),
        });
        setText('')
    }

    const onChangeText = (text: string) => {
        setText(text)
    }

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
    useEffect(() => {
        newTaskRef.once('value', (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const taskArr: TaskInfo[] = Object.keys(data).map((key) => ({
                    id: key,
                    ...data[key]
                }));
                setTask(taskArr);
            }
        }, (error) => {
            console.log(error);
        });
    }, [task]);
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
                    <View style={styles.infoTaskBoardContainer}>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="What are you doing?"
                                onChangeText={onChangeText}
                                value={text}
                            />
                            <TouchableOpacity
                                style={styles.addButton}
                                onPress={onSubmitEditing}>
                                <Text style={styles.buttonText}>Add task</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.taskListContainer}>
                            <View style={styles.detailTaskContainer}>
                                <Text style={{textAlignVertical: 'center'}}>
                                    Moring
                                </Text>
                                <View style={styles.taskContainer}>
                                    {/* Phần sáng */}
                                    {task.filter(task => {
                                        const hour = parseInt(task.taskTime.split(':')[0]);
                                        return hour >= 6 && hour < 12;
                                    }).map(filteredTask => (
                                        <View key={filteredTask.taskName}>
                                            <TouchableOpacity style={styles.task}>
                                                <Text style={styles.buttonText}>{filteredTask.taskTime} | {filteredTask.taskName}</Text>
                                            </TouchableOpacity>
                                        </View>
                                    ))}
                                </View>
                            </View>
                            <View style={styles.detailTaskContainer}>
                                <Text style={{textAlignVertical: 'center'}}>
                                    Afternoon
                                </Text>
                                <View style={styles.taskContainer}>
                                    {/* Phần trưa */}
                                    {task.filter(task => {
                                        const hour = parseInt(task.taskTime.split(':')[0]);
                                        return hour >= 12 && hour < 18;
                                    }).map(filteredTask => (
                                        <View key={filteredTask.taskName}>
                                            <TouchableOpacity style={styles.task}>
                                                <Text style={styles.buttonText}>{filteredTask.taskTime} | {filteredTask.taskName}</Text>
                                            </TouchableOpacity>
                                        </View>
                                    ))}
                                </View>
                            </View>
                            <View style={styles.detailTaskContainer}>
                                <Text style={{textAlignVertical: 'center'}}>
                                    Afternoon
                                </Text>
                                <View style={styles.taskContainer}>
                                    {/* Phần chiều */}
                                    {task.filter(task => {
                                        const hour = parseInt(task.taskTime.split(':')[0]);
                                        return hour >= 18 || hour < 6;
                                    }).map(filteredTask => (
                                        <View key={filteredTask.taskName}>
                                            <TouchableOpacity style={styles.task}>
                                                <Text style={styles.buttonText}>{filteredTask.taskTime} | {filteredTask.taskName}</Text>
                                            </TouchableOpacity>
                                        </View>
                                    ))}
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ImageBackground >
        </View >
    );
}

export default HomeScreen;
