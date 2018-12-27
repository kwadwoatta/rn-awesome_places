import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
import {addPlace, deletePlace, selectPlace, unselectPlace} from './src/store/actions/index'


class App extends Component {

  placeNameChangedHandler = val => {
    this.setState({placeName: val});
  };

  placeSubmitHandler = () => {
    if (this.props.placeName.trim() === "") {
      return;
    }
    this.props.onAddPlace(placeName);
  }

  placeSelectedHandler = key => {
    this.props.onSelectPlace(key);
  };

  deletePlaceHandler = () => {
    this.props.onDeletePlace();
  }

  closeModalHandler = () => {
    this.props.onUnSelectPlace();
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.props.selectedPlace}
          placeName={this.props.placeName}
          placeImage={this.props.image}
          onDeleteItem={this.deletePlaceHandler}
          onCloseModal={this.closeModalHandler}
        />
        <PlaceInput 
          placeName={this.props.placeName}
          onChangeText={this.placeNameChangedHandler}
          onPressAction={this.placeSubmitHandler}
          />
        <PlaceList 
          places={this.props.places}
          onItemSelected={this.placeSelectedHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  listContainer: {
    width: "100%",
  }
});

const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (name) => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: (key) => dispatch(selectPlace(key)),
    onUnSelectPlace: () => dispatch(unselectPlace()) 
  } 
}

export default connect(mapStateToProps, mapDispatchToProps)(App);