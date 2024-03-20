import React, { useState } from "react";
import { getDatabase, ref, push, onValue, serverTimestamp } from '@react-native-firebase/database'; // Import Realtime Database methods
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";

const RealtimeDatabase = () => {
    const [taskName, setTaskName] = useState('');
    const [taskTime, setTaskTime] = useState('');

    const database = getDatabase(); // Get a reference to the database
    const handleAddTask = () => {
        if (taskName.trim() !== '') {
            console.log(taskName)
            const taskRef = ref(database, '/task/taskInfo');
            
            // Push the task data to the database
            push(taskRef, {
                taskName: taskName.trim(),
                taskTime: taskTime.trim() || '' // Use the provided taskTime or empty string if not provided
            }).then(() => {
                console.log('Task added successfully');
                // Clear input fields after adding task
                setTaskName('');
                setTaskTime('');
            }).catch(error => {
                console.error("Error adding task:", error);
            });
        } else {
            console.log('Task name cannot be empty');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Task Name"
                onChangeText={setTaskName}
                value={taskName}fa
            />
            <TextInput
                style={styles.input}
                placeholder="Task Time"
                onChangeText={setTaskTime}
                value={taskTime}
            />
            <TouchableOpacity onPress={handleAddTask} style={styles.addButton}>
                <Text style={styles.buttonText}>Add Task</Text>
            </TouchableOpacity>
        </View>
    );
};

export default RealtimeDatabase;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '80%',
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    addButton: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
    },
});

