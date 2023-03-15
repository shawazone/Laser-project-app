
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';



import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';




const LogInScreen = props => {
 


    const [email, SetEmail] = useState('');
    const [passWord, SetPassWord] = useState('');
    const signIn = () => {
      auth()
        .signInWithEmailAndPassword(email, passWord)
        .then(() => {
          console.log('User account created & signed in!');
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }
  
          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }
  
          console.error(error);
        });
    };

    return (
    
  
      <View style={styles.container}>
   
        <Text style={styles.title}> Login </Text>
  
     
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Email"
            placeholderTextColor="black"
            value={email}
            onChangeText={SetEmail}
          />
        </View>
  
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            secureTextEntry
            placeholder="Password"
            placeholderTextColor="black"
            value={passWord}
            onChangeText={SetPassWord}
          />
        </View>
  
   
  
        <TouchableOpacity onPress={signIn} style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN </Text>
        </TouchableOpacity>
  
  
      </View>
    );
  };
  export default LogInScreen;


  const styles = StyleSheet.create({
 
    container: {
      flex: 1,
      backgroundColor: "#c7b5df",
      alignItems: 'center',
      justifyContent: 'center',
    },
  
   
    title: {
      fontWeight: 'bold',
      fontSize: 40,
      color: "black",
      marginBottom: 40,
    },
  
    
  
    inputView: {
      color: "rgb(14, 27, 55)",
      width: '80%',
      backgroundColor: 'white',

      border:8,
      borderColor:"rgb(205, 231, 236)",

      borderRadius:10,
      height: 50,
      marginBottom: 20,
      justifyContent: 'center',
      padding: 20,
    },
  

    inputText: {
      height: 50,
      color: "rgb(14, 27, 55)",
      
    },
  
  
  
    loginBtn: {
      color: "rgb(14, 27, 55)",
      borderRadius:10,
      border:8,
      borderColor:"rgb(205, 231, 236)",
      width: '80%',
      backgroundColor: 'white',
  
     
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 40,
      marginBottom: 10,
    },
    loginText: {
   color: "black",
    }
  });