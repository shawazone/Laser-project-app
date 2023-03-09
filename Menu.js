import database from '@react-native-firebase/database';

import React, {useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import { useTheme } from 'react-native-paper';
import {
  FlatList,
  Image,
  Text,
  View,
  TouchableOpacity,
  Button,
} from 'react-native';







//Screen Two
const Menu = props => {
  const theme = useTheme();

    const [products, setProducts] = useState([]); // session with omar
    const [ids,setIds]= useState([]);
    const add = () => {
      props.navigation.navigate('AddItem');
    };
    const edit = (id) => {
      props.navigation.navigate('AddItem', {id});
    };
  
  
    useEffect(() =>
      // session with omar
      {
        database()
          .ref('/products')
          .on('value', snapshot => {
            // console.log('User data: ', snapshot.val());
            let data = Object.values(snapshot.val())
            setProducts(data);
          });
      }, []);
      
      const deleteItem = (id) => {
        database().ref('/products/'+id).remove();
  
          console.log("the item with this id:",id," will be deleted");
      }
  
  
    const logOut = () => {
      auth()
        .signOut()
        .then(() => console.log('User signed out!'));
      // props.navigation.navigate('Login');
    
    
      // backgroundColor: theme.colors.primary 
    };
    return (
     
      <View style={{flex: 1, justifyContent: 'center', margin:5, }}>
        <FlatList
        style={{flex:1}}
          data={products}
          keyExtractor={((item,index)=>index.toString())}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  overflow:'hidden',
                  borderWidth: 3,
                  padding: 10,
                  margin: 10,
                  borderRadius: 10,
                  backgroundColor: "rgb(255, 255, 255)",
                  borderColor:"rgb(205, 231, 236)",
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    source={{uri: item.image}}
                    width={80}
                    height={110}
                    resizeMode="contain"
                    style={{                
                      borderWidth: 5,
                      
                      borderRadius: 10,
                  
                    }}
                   />
                  <Text 
                  
                  style={{
                    color: "rgb(14, 27, 55)",
                    marginRight:55,
                    padding:6}}>
                    
                    
                    
                    {item.title}</Text>
                </View>
                <Text style={{
                  marginRight:30,
                  padding:10,
                  color: "rgb(14, 27, 55)",
                  }} >
                  
                  {item.description}</Text>
                  <View style={{flexDirection: 'row', alignItems: 'center', margin:3}}>
                  <Text
                  style={{
                    color: "rgb(14, 27, 55)",
                    }}>{item.price} $</Text>   
                  </View>
                 <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity 
                 onPress={ ()=> edit(item.id)}
                style={{
                  borderWidth: 1,
                  padding:3,
                  margin: 5,
                  backgroundColor: "rgb(205, 231, 236)",
                  borderColor:"rgb(205, 231, 236)",
                  borderRadius: 10,
          
                }}
                ><Text style={{
                  color: "rgb(14, 27, 55)",
                }}> edit </Text></TouchableOpacity>
                 
                 
                   <TouchableOpacity style={{
                  borderWidth: 1,
                  padding:3,
                  margin: 5,
                  backgroundColor: "rgb(205, 231, 236)",
                  borderColor:"rgb(205, 231, 236)",
                  marginLeft:30,
                  borderRadius: 10,
                }}
                onPress={ ()=> deleteItem(item.id)}
               >
              
                <Text style={{
                    color: "rgb(14, 27, 55)",
                  }}>delete</Text>
                </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />

        
        <TouchableOpacity onPress={add}
         style={{
          borderWidth: 1,
          padding:3,
          margin: 5,
          backgroundColor: "rgb(205, 231, 236)",
          borderColor:"rgb(205, 231, 236)",
          borderRadius: 10,
           alignItems:'center',
        }}
        >
          <Text style={{
                    color: "rgb(14, 27, 55)",
                  }}>add</Text>
        </TouchableOpacity>
        <View>
      
  
          <TouchableOpacity onPress={logOut}
            style={{
              borderWidth: 1,
              padding:3,
              margin: 5,
              backgroundColor: "rgb(205, 231, 236)",
              borderColor:"rgb(205, 231, 236)",
              borderRadius: 10,
               alignItems:'center',
            }}
          >
            
            <Text
            style={{
              color: "rgb(14, 27, 55)",
            }}>log out</Text>
          </TouchableOpacity>
          {/* <Image
         
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}/> */}
        </View>
      </View>
    );
  }; 
  export default Menu

 
  