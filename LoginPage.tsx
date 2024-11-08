import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Pressable} from 'react-native';
import { initializeApp } from 'firebase/app';
import { getFirestore, setDoc, doc, getDoc, collection} from 'firebase/firestore';
import HomeSvg from '@/components/HomeSvg';
import LoginSvg from '@/components/LoginSvg';

const LoginPage = ({navigation})=>{
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
    
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

  const login = async ()=> {
    const firestore = getFirestore();
    const data = await getDoc(doc(firestore, 'user', name))
    
    if (data.data().Name == name && data.data().Password == password){
      console.log('login')
      console.log(data.data())
      navigation.navigate('HomePage', {
        name: name,
        Driver_Name: data.data().Driver_Name,
        Truck_No: data.data().Truck_No,
        Driver_Age: data.data().Driver_Age,
        Customers_Name: data.data().Customers_Name,
        Customers_Age: data.data().Customers_Age,
        Customers_Address: data.data().Customers_Address,
        Longitude: data.data().Longitude,
        Latitude: data.data().Latitude,
        Heart_Rate: data.data().Heart_Rate,
        Alcohol_Detector: data.data().Alcohol_Detector,
        Oxygen_Level: data.data().Oxygen_Level,
      })
    }
    else{
      console.warn('login Fail')
    }
  }
  return(
    <View style={styles.main}>
        <View style={styles.top}>
            <Text style={styles.text}>Login</Text>
        </View>

        <View style={styles.box}>
            <TextInput style={styles.inp} onChangeText={text=> setName(text)} value={name}/>
            <TextInput style={styles.inp} onChangeText={text=> setPassword(text)} value={password} secureTextEntry={true}/>
            <Text style={{fontSize: 17, color: 'blue'}} onPress={()=> login()}>Login</Text>
        </View>

        <View style={styles.bottom}>
            <Pressable onPress={()=> navigation.navigate('OtherHomePage')}>
                <View>
                    <HomeSvg />
                    <Text>Home</Text>
                </View>
            </Pressable>

            <View>
                <LoginSvg />
                <Text>Login</Text>
            </View>
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
        paddingTop: '15%',
    },
    text: {
        fontSize: 29,
        fontWeight: 'bold',
    },
    inp: {
        backgroundColor: 'white',
        width: 320,
        height: 40,
        margin: 20,
        borderRadius: 10,
        paddingLeft: 10
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
    }
})

export default LoginPage;