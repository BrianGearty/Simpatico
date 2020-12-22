import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import axios from 'axios';


const mapStyles = { 
    margin: "auto",       
    height: "80vh",
    width: "80%"};

export const GoogleMapContainer = () => {

    const [ currentPosition, setCurrentPosition ] = useState({});
//     const [ selected, setSelected ] = useState({});
  
//   const onSelect = item => {
//     setSelected(item);
//   }
  
    const onMarkerDragEnd = (e) => {
        const latitude = e.latLng.lat();
        const longitude = e.latLng.lng();
        setCurrentPosition({ latitude, longitude})
      };
    
    const success = position => {
        const currentPosition = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    }
        setCurrentPosition(currentPosition);
    };
    
    useEffect(() => {
      navigator.geolocation.getCurrentPosition(success);
    }, [])


    const googleApiKey='AIzaSyCeH1mhLsEJFzLUol5eDRmfP8uFHHqltPE';
    
    useEffect(() => {
      console.log(currentPosition)
        axios.get(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=mogo&inputtype=textquery&fields=formatted_address,name,geometry,photos&key=${googleApiKey}`)
        .then((results) => {
            console.log(results.data);
          }, (error) => {
            console.log(error);
          });
      }, [])

    return (
        <LoadScript
        googleMapsApiKey='AIzaSyCeH1mhLsEJFzLUol5eDRmfP8uFHHqltPE'>

    <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={currentPosition}>
          {
            currentPosition.lat ? 
            <Marker
            position={currentPosition}
            onDragEnd={(e) => onMarkerDragEnd(e)}
            draggable={true} /> :
            null
          }</GoogleMap>
        </LoadScript>

    
    
    )

}

export default GoogleMapContainer;