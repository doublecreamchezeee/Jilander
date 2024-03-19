import React , {useState} from "react";
import { 
    View,
    Text,
    TextInput,
    Button,
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
            }}>
                <TextInput
                    placeholder="What are you doing?"
                    onChangeText={onChangeText}
                    onSubmitEditing={onSubmitEditing}
                    value={text}
                    />
                <Button title="Submit" onPress={onSubmitEditing} />
            </View>
            <View style={{
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                height: '80%',
                width: '100%',
                borderRadius: 5,
            }}>

            </View>
        </View>

    )
}


export default InfoTaskBoard;
