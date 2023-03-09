import React from 'react'
import {View , Text, TextInput, Button, Pressable} from "react-native"


const Header= (props)=> {
    return (
       <Text> {props.title}</Text>
    )
}
export default Header