import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {NavigationContainer} from '@react-navigation/native'
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import DemoHomePage from './DemoHomePage';


const Stack = createNativeStackNavigator();

const App = ()=>{
  return(
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="DemoHomePage" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomePage" initialParams={{
          name: '',
          Driver_Name: '',
          Truck_No: '',
          Driver_Age: '',
          Customers_Name: '',
          Customers_Age: '',
          Customers_Address: '',
          Longitude: '',
          Latitude: '',
        }} component={HomePage}/>
        <Stack.Screen name="DemoHomePage" component={DemoHomePage}/>
        <Stack.Screen name="LoginPage" component={LoginPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;