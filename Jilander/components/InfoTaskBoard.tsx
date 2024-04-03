import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import styles from '../public/css/styles';
import database from '@react-native-firebase/database'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import {RootStack} from '../screens/RootStack'
import axios from 'axios'

const serverUrl = 'http://192.168.1.2:3000' 
interface TaskInfo {
  id: string;
  taskName: string;
  taskTime: string;
}
type HomeScreenNavigationProp = NativeStackNavigationProp<RootStack, 'HomeScreen'>;
type Props = {
    navigation: HomeScreenNavigationProp;
  };

const InfoTaskBoard: React.FC<Props> = ({navigation}) => {
  const [text, setText] = useState<string>('');
  const [task, setTask] = useState<TaskInfo[]>([]);
  const [taskFetchTrigger, setTaskFetchTrigger] = useState(false);
  const newTaskRef = database().ref('/task/taskInfo');

  const onSubmitEditing = async () => {
    const currentTime = new Date()
    const timeSubmit = currentTime.getHours().toString() + ":" + currentTime.getMinutes().toString()
    console.log(text)
    await axios.post(`${serverUrl}/api/task`, {
      taskName: text.trim(),
      taskTime: timeSubmit.trim()
    }, 
    {
      headers: {
        'Content-Type': 'application/json', 
      }
    })
    .then( response => {
      console.log(response.data)
      setText('');
    })
    .catch(error => {
      console.error('Error submitting data:', error);
    });
    // newTaskRef.push({
    //   taskName: text.trim(),
    //   taskTime: timeSubmit.trim(),
    // });
  }
  const onTaskPress = (id:string, taskName: string, taskTime: string) => navigation.navigate("DetailTask", { id, taskName, taskTime })
  const onChangeText = (text: string) => {
    setText(text)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const timestamp = new Date().getTime(); // Get current timestamp
        const response = await axios(`${serverUrl}/api/task?timestamp=${timestamp}`);
        const taskArr = Object.keys(response.data).map((key) => ({
          id: key,
          ...response.data[key]
        }));
        setTask(taskArr);
      } catch (error) {
        console.error('Error', error);
      }
    };
    fetchData();
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
                <TouchableOpacity 
                  style={styles.task}
                  onPress={() => onTaskPress(filteredTask.id, filteredTask.taskName, filteredTask.taskTime)}
                >
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
                <TouchableOpacity 
                  style={styles.task}
                  onPress={() => onTaskPress(filteredTask.id, filteredTask.taskName, filteredTask.taskTime)}
                >
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
                <TouchableOpacity 
                  style={styles.task}
                  onPress={() => onTaskPress(filteredTask.id, filteredTask.taskName, filteredTask.taskTime)}
                >
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
