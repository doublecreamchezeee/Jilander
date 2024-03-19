import React , {useState} from "react";
import { 
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from "react-native";
import styles from '../public/css/styles'; 

function Task(){
    const [text, setText] = useState<string>(''); // Chỉ định kiểu dữ liệu là string
    
    const onChangeText = (newText: string) => { // Chỉ định kiểu dữ liệu là string
        setText(newText);
    };
  
    const onSubmitEditing = () => {
      console.log('Task input:', text);
      // Xử lý dữ liệu khi người dùng nhấn "Submit" hoặc "Return" trên bàn phím
    };
    return (
        <View style={styles.taskContainer}>
            <TouchableOpacity style={styles.task}>
                <Text style={styles.buttonText}>Hehe</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.task}>
                <Text style={styles.buttonText}>NguyenThanhTri</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.task}>
                <Text style={styles.buttonText}>KhaiHoan</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.task}>
                <Text style={styles.buttonText}>Ngu</Text>
            </TouchableOpacity>            
            <TouchableOpacity style={styles.task}>
                <Text style={styles.buttonText}>Hehe</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.task}>
                <Text style={styles.buttonText}>Kakakaka</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.task}>
                <Text style={styles.buttonText}>Meomeo</Text>
            </TouchableOpacity>            
            <TouchableOpacity style={styles.task}>
                <Text style={styles.buttonText}>Jack</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.task}>
                <Text style={styles.buttonText}>PloPlo</Text>
            </TouchableOpacity>
        </View>
      );
}


export default Task;
