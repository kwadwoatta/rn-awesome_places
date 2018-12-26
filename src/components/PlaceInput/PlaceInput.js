import React from "react";
import { View, TextInput, Button, StyleSheet} from "react-native";

const inputItems = (props) => {
        return (
            <View style={styles.inputContainer}>
                  <TextInput 
                    placeholder="An awesome place"
                    style={styles.placeInput}
                    value={props.placeName}
                    onChangeText={props.onChangeText}/>
                  <Button
                    style={styles.placeButton}
                    title="Add"
                    onPress={props.onPressAction}
                    />
                </View>
        );
    }; 

const styles = StyleSheet.create({
    inputContainer: {
        // flex: 1,
        width: "100%",
        alignItems: "center",
        flexDirection: 'row',
        justifyContent: "space-between"
      },
      placeInput: {
        width:"70%"
      },
      placeButton: {
        width:"30%"
      }
})

export default inputItems;