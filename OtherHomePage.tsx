import {View, Text, StyleSheet, TextInput, Pressable, ScrollView, Button} from 'react-native';
import HomeSvg from '@/components/HomeSvg';
import LoginSvg from '@/components/LoginSvg';
import Refresh from '@/components/Refresh';

const OtherHomePage = ({navigation})=>{
  return(
    <View style={styles.main}>
        <View style={styles.top}>
            <Text style={styles.text}>Home</Text>
        </View>

        <ScrollView horizontal={true}>
          <View style={styles.box}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Driver and Customers</Text>
            <View style={styles.innerbox}>
                <Text style={styles.thirdtext}>Login Again With Your Account</Text>
            </View>
          </View>

          <View style={styles.box}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Driver Current Loction</Text>
            <View style={styles.innerbox}>
                <Text style={styles.thirdtext}>Login Again With Your Account</Text>
            </View>
            <Pressable style={styles.refresh}>
                <Refresh />
            </Pressable>
          </View>
          
          <View style={styles.box}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Driver Final Loction</Text>
            <View style={styles.innerbox}>
                <Text style={styles.thirdtext}>Login Again With Your Account</Text>
            </View>
            <Pressable style={styles.refresh}>
              <Refresh />
            </Pressable>
          </View>

          <View style={styles.box}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Driver Health</Text>
            <View style={styles.innerbox}>
                <Text style={styles.thirdtext}>Login Again With Your Account</Text>
            </View>
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
        height: 300,
        // paddingTop: 20,
        paddingLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
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
    },
    thirdtext: {
        color: 'red',
        fontSize: 17,
        fontWeight: 'bold'
    }
})

export default OtherHomePage;