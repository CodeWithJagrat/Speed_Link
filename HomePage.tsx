import React, {useState, useEffect} from 'react';
import MapView, {Marker} from 'react-native-maps';
import {View, Text, StyleSheet, TextInput, Pressable, ScrollView, Button} from 'react-native';
import * as Location from 'expo-location';
import { initializeApp } from 'firebase/app';
import HomeSvg from '@/components/HomeSvg';
import LoginSvg from '@/components/LoginSvg';
import Refresh from '@/components/Refresh';

const HomePage = ({route, navigation})=>{
  const {name} = route.params;
  const {Driver_Name} = route.params;
  const {Truck_No} = route.params;
  const {Driver_Age} = route.params;
  const {Customers_Name} = route.params;
  const {Customers_Age} = route.params;
  const {Customers_Address} = route.params;
  const {Longitude} = route.params;
  const {Latitude} = route.params;
  
  const [FinalLocation, setFinalLocation] = useState({
        latitude: Latitude,
        longitude:  Longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
  })

  const [CurrentLocation, setCurrentLocation] = useState({
        latitude: 22.72160186572479,
        longitude:  75.87770825068992,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
  })
  // console.log(name, Driver_Name, Driver_Age, Truck_No, Customers_Name, Customers_Age, Customers_Address);
  // Initialize Firebase
  const firebaseConfig = {  
    apiKey: "AIzaSyBwOoyWLpr4sZBaRwHPwZ9SAo07kl4Ni5Q",
    authDomain: "toggle-button-4087f.firebaseapp.com",
    databaseURL: "https://toggle-button-4087f-default-rtdb.firebaseio.com",
    projectId: "toggle-button-4087f",
    storageBucket: "toggle-button-4087f.firebasestorage.app",
    messagingSenderId: "441033032973",
    appId: "1:441033032973:web:4f56743144619ab9c55c44",
    measurementId: "G-FYT3KWYBH6"
  };  

  initializeApp(firebaseConfig);

  const driverLocation = async () => {
    let {status} = await Location.requestForegroundPermissionsAsync();
    if (status != 'granted') {
      setErrorMsg('Permission to access location was denied');
    }
    let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
    setCurrentLocation({
        latitude: location.coords.latitude,
        longitude:  location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });
  }

  useEffect(() => {
    driverLocation();
  }, [])

  const FinalLoca = ()=> {
    setFinalLocation({
      latitude: Latitude,
      longitude:  Longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    })
  }
  driverLocation();
  return(
    <View style={styles.main}>
        <View style={styles.top}>
            <Text style={styles.text}>Home</Text>
        </View>

        <ScrollView horizontal={true}>
          <View style={styles.box}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Driver and Customers</Text>
            <View style={styles.innerbox}>
              <Text style={styles.sectext}>ID:- {name}</Text>
              <Text></Text>
              <Text style={styles.sectext}>Driver Name:- {Driver_Name}</Text>
              <Text style={styles.sectext}>Truck No.:- {Truck_No}</Text>
              <Text style={styles.sectext}>Driver Age:- {Driver_Age}</Text>
              <Text></Text>
              <Text style={styles.sectext}>Customers Name:- {Customers_Name}</Text>
              <Text style={styles.sectext}>Customers Age:- {Customers_Age}</Text>
              <Text style={styles.sectext}>Customers Address:- {Customers_Address}</Text>
            </View>
          </View>

          <View style={styles.box}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Driver Current Loction</Text>
            <MapView style={styles.map} region={CurrentLocation}>
              <Marker coordinate={CurrentLocation} title='Driver'/>
            </MapView>
            
            <Pressable style={styles.refresh} onPress={()=> driverLocation()}>
                <Refresh />
            </Pressable>
          </View>
          
          <View style={styles.box}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Driver Final Loction</Text>
            <MapView style={styles.map} region={FinalLocation}>
              <Marker coordinate={FinalLocation} title='Driver'/>
            </MapView>

            <Pressable style={styles.refresh} onPress={()=> FinalLoca()}>
              <Refresh />
            </Pressable>
          </View>
        </ScrollView>

        <View style={styles.bottom}>
            <View>
                <HomeSvg />
                <Text>Home</Text>
            </View>
            
            <Pressable onPress={()=> navigation.navigate('LoginPage')}>
              <View>
                  <LoginSvg />
                  <Text>Login</Text>
              </View>
            </Pressable>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    top: {
        backgroundColor: 'lightgreen',
        height: 50,
        width: 340,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    main: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        marginTop: '5%',
    },
    box: {
        width: 340,
        height: 400,
        backgroundColor: 'lightgreen',
        marginTop: 70,
        borderRadius: 10,
        alignItems: 'center',
        margin: 10,
        paddingTop: 15,
    },
    text: {
        fontSize: 29,
        fontWeight: 'bold',
    },
    inp: {
        backgroundColor: 'white',
        width: 340,
        height: 40,
        margin: 20,
        borderRadius: 10,
        paddingLeft: 10,
    },
    bottom: {
        position: 'absolute',
        height: 50,
        width: 340,
        backgroundColor: 'lightgreen',
        bottom: 23,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    map: {
        width: 330,
        height: 340,
        margin: 10,
    },
    innerbox: {
        width: 340,
        height: 350,
        // paddingTop: 20,
        paddingLeft: 10,
        justifyContent: 'center',
    },
    sectext: {
        fontSize: 18,

    },
    refresh: {
      position: 'absolute',
      top: 0,
      right: 0,
      backgroundColor: 'red',
      padding: 14,
      borderRadius: 10
    }
})

export default HomePage;