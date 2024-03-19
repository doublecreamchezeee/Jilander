import React , {useState} from "react";
import { 
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from "react-native";
import styles from '../public/css/styles'; 
import Task from './Task'
function InfoTaskBoard(){
    const [text, setText] = useState<string>(''); // Chỉ định kiểu dữ liệu là string
    
    const onChangeText = (newText: string) => { // Chỉ định kiểu dữ liệu là string
        setText(newText);
    };
  
    const onSubmitEditing = () => {
      console.log('Task input:', text);
      // Xử lý dữ liệu khi người dùng nhấn "Submit" hoặc "Return" trên bàn phím
    };
    return (
        <View style={styles.infoTaskBoardContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="What are you doing?"
              onChangeText={onChangeText}
              onSubmitEditing={onSubmitEditing}
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
