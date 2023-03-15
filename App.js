
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';


import {GestureHandlerRootView} from 'react-native-gesture-handler';
import LogInScreen from './screens/Login';
import Menu from './screens/Menu';
import AddItem from './screens/Add';







const App = () => {
  //const
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const Stack = createStackNavigator();

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator>
          {!user?<Stack.Screen name="Login" component={LogInScreen} />:
          <><Stack.Screen name="Products" component={Menu} />
          <Stack.Screen name="Add Item" component={AddItem} />
          {/* <Stack.Screen name="EditItem" component={EditItem} /> */}
          </>}
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};
export default App;

