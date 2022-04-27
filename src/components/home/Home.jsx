import React from 'react';
import { Text, View, Alert} from "react-native";
import { Button } from './styled';





export const Home = () => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: "#f9ed69",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <Button onPress={()=> Alert.alert("Estas en el home")}>

            <Text>Home</Text>          
            </Button>
        </View>
      );
}