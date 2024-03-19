import React , {useState} from "react";
import { 
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from "react-native";

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
        <View style={{
            height: '80%',
            width: '80%',
            justifyContent: 'center',
            alignItems: 'center', 
        }}>
            <View style={{
                flexDirection: "row",
                margin: 15,
                justifyContent: 'center',
                alignItems: 'center', 
            }}>
                <TextInput
                    style={{
                        margin: 15,
                        fontSize: 10
                    }}
                    placeholder="What are you doing?"
                    onChangeText={onChangeText}
                    onSubmitEditing={onSubmitEditing}
                    value={text}
                    />
                <TouchableOpacity style={{
                    backgroundColor: 'white',
                    padding: 10,
                    borderRadius: 5,
                    justifyContent: 'center',
                    alignItems: 'center', 
                    height: 35
                }}
                onPress={onSubmitEditing}>
                    <Text style={{
                        color: 'black',
                        fontSize: 12,
                        textAlign: 'center',
                    }}>Add task</Text>
                </TouchableOpacity>
            </View>
            <View style={{
                height: '80%',
                width: '100%',
                borderRadius: 5,
            }}>
            
            </View>
        </View>

    )
}


export default InfoTaskBoard;
