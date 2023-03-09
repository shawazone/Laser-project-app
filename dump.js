// import {View , Text, TextInput, Button, Pressable} from "react-native"
// //import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import React, { useState } from 'react';
// import Header from "./Header";

// // export default function App() {
// //     return (
// //       <NavigationContainer>{/* Rest of your app code */

// //       <View><Text>hello World</Text></View>

// //       }</NavigationContainer>
// //     );
// //   }
// const App= ()=> {

//     const [userName, setUserName] = useState();
//     const [passWord, setPassWord] = useState("");
//     return (
//         <View>
//             <Header title="shoutout to omar alsaman"></Header>

//         <Text>username</Text>
//         <TextInput style={{  borderWidth: 1,borderColor: "#000000",}} value={userName}
//          onChangeText={nameInput => setUserName(nameInput)} />

// <Text style={{padding: 10, fontSize: 42}}>
//         {userName
//           ?.split(' ') // the "?" is called optional chaining  here i have rhe usestate is empty so the app will crash but using the optional chaining the app will run and when the string is not empty the fucntion will fire
//           .map(word => word && '🍕')
//           .join(' ')}
//       </Text>

//         <Text>password</Text>
//         <TextInput style={{  borderWidth: 1,borderColor: "#000000",}}
//         value={passWord}
//          onChangeText={setPassWord}></TextInput>
//         <Text style={{padding: 10, fontSize: 42}}>
//         {passWord
//           .split(' ')
//           .map(word => word && '🍕')
//           .join(' ')}
//       </Text>

//         <Pressable   style={{  borderWidth: 1,borderColor: "#000000",}}>

//   <Text>I'm pressable!</Text>
// </Pressable>
//         </View>

//     )
// }
// export  default App ;



    {/* <Text>title</Text>
        <Text>description</Text>

        <TouchableOpacity onPress={edit}>
          <Text>edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Text>delete</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={add}>
          <Text>add</Text>
        </TouchableOpacity> */}

        //   const RNfirebaseConfig = {
//     apiKey: "AIzaSyCeOCIDsAuDDcy1o9zaak09wO4ZWyN_vpM",
//   authDomain: "laser-c7594.firebaseapp.com",
//   databaseURL: "https://laser-c7594-default-rtdb.firebaseio.com",
//   projectId: "laser-c7594",
//   storageBucket: "laser-c7594.appspot.com",
//   messagingSenderId: "1098383648381",
//   appId: "1:1098383648381:web:35e8ca897c0f02e4a1b314",
//   measurementId: "G-3994H3J7M8"
//   };
//  if (!firebase.apps.length){
//     firebase.initializeApp(RNfirebaseConfig);
// }