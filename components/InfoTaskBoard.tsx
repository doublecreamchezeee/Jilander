import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import styles from '../public/css/styles';
import database from '@react-native-firebase/database'
import {useNavigation} from '@react-navigation/native'
interface TaskInfo {
  taskName: string;
  taskTime: string;
}

function InfoTaskBoard() {
  const navigation = useNavigation();
  const [text, setText] = useState<string>('');
  const [task, setTask] = useState<TaskInfo[]>([]);
  const newTaskRef = database().ref('/task/taskInfo');

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
          <Text style={{ textAlignVertical: 'center', width: 70}}>
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
          <Text style={{ textAlignVertical: 'center', width: 70, }}>
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
          <Text style={{ textAlignVertical: 'center',width: 70 }}>
            Evening
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
  );
}


export default InfoTaskBoard;
