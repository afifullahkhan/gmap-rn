import React, {useState,useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import MapView, { Marker, PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

const initialState={
  latitude:null,
  longitude:null,
  latitudeDelta:0.0922,
  longitudeDelta:0.0421,
}

function App() {

  const [currentPosition,setCurrentPosition]=useState(initialState);
    useEffect(() => {
      Geolocation.getCurrentPosition(info => {
        const {latitude,longitude}=info.coords;
        setCurrentPosition({
          ...currentPosition,
          latitude,
          longitude,
        })
    },
    error=> alert(error.message),
    {timeout:2000,maximumAge:10000} )},[])
  return (
    // <Text>  {JSON.stringify({currentPosition})}</Text>

    // <View style={styles.container}>
        <MapView
        provider={PROVIDER_GOOGLE}
        style={{flex:1}}
        // showsUserLocation={true}
        // showsMyLocationButton={false}
        showsUserLocation
        // zoomEnabled = {true}
        
        initialRegion={currentPosition}
        
        />
        // </View>
        
  );
}

const styles = StyleSheet.create({
  container: {
    height: 500,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
    display:'flex'
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    flex:1
  },
});

export default App;
