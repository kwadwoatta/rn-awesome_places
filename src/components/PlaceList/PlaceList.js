import React from "react";
import { FlatList, StyleSheet } from "react-native";

import ListItem from '../ListItem/ListItem';

const placeList = props => {
//    const placesOutput = props.places.map((place, index) => 
    
return (
    <FlatList style={styles.listContainer}
        data={props.places}
        renderItem={({item}) => (
        <ListItem  
            text={item.name}
            placeImage={item.image}
            pressedOnItem = { () => props.onItemSelected(item.key)}>
        </ListItem> 
        )}
    />   
)
}

const styles = StyleSheet.create({
    listContainer: {
        width: "100%"
      }
})


export default placeList;