import { View,TextInput,Button,StyleSheet,Modal,Image } from "react-native";
import { useState } from 'react';


function GoalInput(props) {
    const[enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    };

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }
    return(
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style= {styles.image} source={require('../assets/images/img.jpg')} />
                <TextInput 
                    style={styles.textInput} 
                    placeholder="My gym goal!" 
                    onChangeText={goalInputHandler} 
                    value={enteredGoalText}/>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Add Goal" onPress={addGoalHandler} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" color="#ff0000ff" onPress={props.onCancel}/>
                    </View>
                </View>
            </View>
        </Modal>
    );
}
export default GoalInput;
 
const styles = StyleSheet.create({
    inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#0a3d39ff',
  },
  textInput: {
    borderWidth: 2,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    width: '100%',
    padding: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 12,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20, 
  },
    
});