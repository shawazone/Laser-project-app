import database from '@react-native-firebase/database';
import storage from '@react-native-firebase/storage';
import React, {useState, useEffect} from 'react';

import RadioButtonRN from 'radio-buttons-react-native';
import {useRoute} from '@react-navigation/native';

import * as ImagePicker from 'react-native-image-picker';

import {
  StyleSheet,
  Text,ScrollView,
  View,
  TextInput,
  Image, 
  Button,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const AddItem = props => {
  const route = useRoute(); // sessin with coach omar
  const id = route?.params?.id;



 
  const data = [
    {
      label: "women's clothing.",
      value: "women's clothing",
    },
    {
      label: "men's clothing.",
      value: "men's clothing",
    },
    {
      label: 'jewelery.',
      value: 'jewelery',
    },
    {
      label: 'electronics.',
      value: 'electronics',
    },
  ];

  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('0');
  const [title, setTitle] = useState('');


  const [selectedImage, setSelectedImage] = useState(null);
  

    const handleRadioButton = cate => {
    setCategory(cate);
    console.log(category);
  };

  if (id == 0 || id) {
    useEffect(() =>
      {
        database()
          .ref('/products/' + id)
          .once('value')
          .then(snapshot => {
            let data = snapshot.val();
            setTitle(data.title);
            setPrice(data.price+'');
            setDescription(data.description);
            setCategory(data.category);
            setSelectedImage(data.image);
          });
      }, []);
  }

  const updatePost = () => {
    const newReference = database().ref('/products/'+id);

    console.log('Auto generated key: ', newReference.key);

    newReference
      .update({
        category: category,
        title: title,
        price: price,
        description: description,
         image: selectedImage,
      })
      .then(() => console.log('Data updated.'))
      .catch(e => console.log(e));

    setTitle('');
    setDescription('');
    setPrice(0);
  props.navigation.navigate('Products');
  };



  const addPost = async() => {
    let fileName = selectedImage.split('/');
    fileName =fileName[fileName.length-1];
    const refrensee = storage().ref(fileName);
    const storageResponce = await refrensee.putFile(selectedImage);
    const uri = await storage().ref(fileName).getDownloadURL();

    const newReference = database().ref('/products').push();

    console.log('Auto generated key: ', newReference.key);
   
  


    newReference
      .set({
        category: category,
        id: newReference.key,
        title: title,
        price: price,
        description: description,
        image: uri,
      })
      .then(() => console.log('Data updated.'))
      .catch(e => console.log(e));

    setTitle(' ');
    setDescription(' ');
    setPrice(0);
    setSelectedImage(null);
  };



  const options = {
    mediaType: 'photo',
    quality: 1,
    includeBase64: false,
    maxWidth: 500,
    maxHeight: 500,
  };

  const pickImage = () => {
    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response){
        setSelectedImage(response.assets[0].uri);

      }
    });
  };





  return (
    <ScrollView>
     <View  style={styles.container} >

     <TouchableOpacity
          onPress={pickImage}
          style={styles.imgBtn}>
          <Text style={styles.TextImg}>select an image</Text>
        </TouchableOpacity>

      {selectedImage && <Image source={{ uri: selectedImage }} style={styles.image} />}
    </View>

      

        <Text  style={styles.Text} >Enter Title</Text>
        <TextInput
          value={title}
          onChangeText={setTitle}
          style={styles.inputView}
        />
        <Text  style={styles.Text} >Enter Price</Text>
        <TextInput
          value={price}
          onChangeText={setPrice}
          style={styles.inputView}
        />
        <Text   style={styles.Text} >Enter Description</Text>
        <TextInput
          value={description}
          style={styles.inputView}
          onChangeText={setDescription}
        />

<View style={{flex: 1, alignItem: 'center', justifyContent: 'center' , paddingLeft:4, paddingRight:4}}>
        <View style={styles.RadioButtonsStyle}>
          <Text  style={styles.Text} >choose category</Text>
          <RadioButtonRN
          style={styles.btn}
            data={data}
            selectedBtn={e => handleRadioButton(e.value)}
          />
        </View>
        <TouchableOpacity
          onPress={id == 0 || id?updatePost:addPost}
          title={id == 0 || id?"edit item":"add item"}
          style={styles.addBtn}>
          <Text style={styles.Text}>{id == 0 || id?"edit item":"add item"}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default AddItem;

const styles = StyleSheet.create({
 


  container: {
   
    justifyContent:'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },

  btn:{
    fontSize: 220,
    color: "#cdbbe5",
    borderRadius:100,
  },
 Text: {
  fontSize: 20,
  color: "rgb(14, 27, 55)",
  paddingLeft: 11,
 },
  inputView: {
    
    margin: 5,
    padding: 5,
    paddingLeft: 20,
    backgroundColor: 'white',
    color: "rgb(14, 27, 55)",
    borderRadius: 20,
    borderWidth:2,
    borderColor:"#8748df",

  },
  RadioButtonsStyle: {
    margin: 0,
    padding: 0,
    borderRadius:100,
  },

  imgBtn:{
    borderWidth: 1,
    padding:4,
    margin: 10,
    backgroundColor: "#cdbbe5",
    borderColor:"gray",
    marginRight :20,
    borderRadius: 10,},


    TextImg:{
      fontSize: 20,
      color: "rgb(14, 27, 55)",
      paddingLeft:3,
      paddingRight:3,
    },


  addBtn:{ borderWidth: 1,
    padding:3,
    margin: 10,
    backgroundColor: "#cdbbe5",
    borderColor:"gray",
    borderWidth:1,
    marginRight :10,
    borderRadius: 10,
    alignItems:"center",
}  

});
