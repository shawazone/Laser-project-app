import database from '@react-native-firebase/database';
import React, {useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import {useTheme} from 'react-native-paper';
import {
  FlatList,
  Image,
  Text,
  View,
  TouchableOpacity,

} from 'react-native';
import {StyleSheet} from 'react-native';


const Menu = props => {
  
  const [products, setProducts] = useState([]); 
  const [ids, setIds] = useState([]);

  const add = () => {

    props.navigation.navigate('Add Item');
  };


  const edit = id => {
    props.navigation.navigate('AddItem', {id});
  };


  useEffect(() =>
  
    {
      database()
        .ref('/products')
        .on('value', snapshot => {
         
          let data = Object.values(snapshot.val());
          setProducts(data);
        });
    }, []);

  const deleteItem = id => {
    database()
      .ref('/products/' + id)
      .remove();

    console.log('the item with this id:', id, ' will be deleted');
  };

  const logOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
   
  };


  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => {
          return (
            <View style={styles.producstContainer}>


              <View style={styles.imageContainer}>
                <Image
                  source={{uri: item.image}}
                  width={80}
                  height={110}
                  resizeMode="contain"
                  style={styles.image}
                />
                <Text style={styles.imgText}>{item.title}</Text>
              </View>


              <Text
                style={styles.description}>
                {item.description}
              </Text>


              <View
                style={styles.priceContainer}>
                <Text
                  style={styles.price}>
                  {item.price} $
                </Text>
              </View>

              <View style={styles.butttonsContiner}>

                <TouchableOpacity
                  onPress={() => edit(item.id)}
                 style={styles.edit}>

                  <Text
                    style={styles.text}>
                    {' '}
                    edit{' '}
                  </Text>

                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.delete}
                  onPress={() => deleteItem(item.id)}>

                  <Text
                    style={styles.text}>
                    delete
                  </Text>

                </TouchableOpacity>
              </View>


            </View>
          );
        }}
      />
    <View >

      <TouchableOpacity
        onPress={add}
        style={styles.add}>

        <Text
          style={styles.text}>
          add
        </Text>

      </TouchableOpacity>
  
        <TouchableOpacity
          onPress={logOut}
          style={styles.logOut}>
     
          <Text
            style={styles.text}>
              log out
          </Text>

        </TouchableOpacity>

      </View>

    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
 

  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 5,
    backgroundColor: "white",
  },


  producstContainer: {
    overflow: 'hidden',
    borderWidth: 1,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    backgroundColor: 'rgb(255, 255, 255)',
    borderColor: "gray",    
  },


  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft:3,
  },


  image: {
    borderWidth: 5,
    borderRadius: 10,
  },


  imgText: {
    color: "rgb(14, 27, 55)",
    marginRight: 60,
    padding: 6,
    paddingRight:20,
  },

  description: {
    marginRight: 30,
    padding: 6,
    paddingLeft:8,
    color: 'rgb(14, 27, 55)',
  },
 

  priceContainer: {
    flexDirection: 'row',
     alignItems: 'center',
      margin: 3,
      paddingLeft:5,
  },


  price:{
      color: 'rgb(14, 27, 55)',
    },

  butttonsContiner: {
    flexDirection: 'row', 
    alignItems: 'center'
  },


  edit:{
    borderWidth: 1,
    padding: 7,
    margin: 5,
    backgroundColor: "#c7b5df",
    borderColor: "gray",
    borderRadius: 10,
    
  },


  delete:{
    borderWidth: 1,
    padding: 7,
    margin: 5,
    backgroundColor: "#c7b5df",
    borderColor: "gray",
    borderRadius: 10,
    marginLeft:50,
  },

  
  add:{
    borderWidth: 1,
    padding: 3,
    margin: 5,
    backgroundColor: "#c7b5df",
    borderColor:"gray",
    borderRadius: 10,
    alignItems: 'center',
  },

  
  logOut:{
    borderWidth: 1,
    padding: 3,
    margin: 5,
    backgroundColor: 	 "#e60000",
    borderColor: "gray",
    borderRadius: 10,
    marginLeft:250,
 paddingLeft:5,
  },

  text:{
    color: 'rgb(14, 27, 55)',
  }

});
