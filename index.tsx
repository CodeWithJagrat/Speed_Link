import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {NavigationContainer} from '@react-navigation/native'
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import DemoHomePage from './DemoHomePage';
import DemoLoginPage from './DemoLoginPage';
import OtherHomePage from './OtherHomePage';

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
          Longitude: 75.87770825068992,
          Latitude: 22.72160186572479,
          Heart_Rate: '',
          Alcohol_Detector: '',
          Oxygen_Level: '',
        }} component={HomePage}/>
        <Stack.Screen name="DemoHomePage" component={DemoHomePage}/>
        <Stack.Screen name="LoginPage" component={LoginPage}/>
        <Stack.Screen name="DemoLoginPage" component={DemoLoginPage}/>
        <Stack.Screen name="OtherHomePage" component={OtherHomePage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;