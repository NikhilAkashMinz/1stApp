import { StyleSheet,View,Text,Pressable } from "react-native";


function GoalItem(props) {

    return (
        <View style={styles.goalItem}>
            <Pressable android_ripple={{color: '#ffffffff'}} 
                onPress={props.OnDeleteItem.bind(this, props.id)}>
                <Text style={styles.goalText}>{props.text}</Text>
                </Pressable>
            </View>
    );
};

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    goalText: {
        padding: 8,
        opacity: 0.5,
        color: '#fff',
    },
}); 