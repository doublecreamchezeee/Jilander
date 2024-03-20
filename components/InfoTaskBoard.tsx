import React , {useEffect, useState} from "react";
import { 
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from "react-native";
import styles from '../public/css/styles'; 
import Task from './Task'
import database from '@react-native-firebase/database'

function InfoTaskBoard(){
    const [text, setText] = useState<string>('');
    const newTaskRef = database().ref('/task/taskInfo');

    const onSubmitEditing = () => {
      console.log(text)
      newTaskRef.push({
        taskName: text.trim(),
        taskTime: ''
      });
    }

    return (
        <View style={styles.infoTaskBoardContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="What are you doing?"
              onChangeText={setText}
              value={text}
            />
            <TouchableOpacity style={styles.addButton} onPress={onSubmitEditing}>
              <Text style={styles.buttonText}>Add task</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.taskListContainer}>
            <Task/>
          </View>
        </View>
      );
}


export default InfoTaskBoard;
