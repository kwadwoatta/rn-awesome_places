import React from "react";
import {Modal, View, Image, Text, Button, StyleSheet} from "react-native";

const placeDetail = props => {
    let modalContent = null;
    if (props.selectedPlace) {
        modalContent = (
            <View>
                <Image source={props.selectedPlace.image} style={styles.placeImage}/>
                <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
            </View>
        )
    }
    return (
        <Modal 
            visible={props.selectedPlace !== null} 
            animationType="slide"
            onRequestClose={props.onCloseModal}
        >
            <View style={styles.modalContainer}>
                {modalContent}
                <View>
                    <Button title="delete" color="red" onPress={props.onDeleteItem}/>
                    <Button title="close" onPress={props.onCloseModal}/>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        margin: 22
    },
    placeImage: {
        width: "100%",
        height: 200
    }, 
    placeName: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 22,
        color: "black",
        fontStyle: "italic"
    }
})


export default placeDetail;