import React from 'react';
import {  View} from "react-native";
import { Product } from '../product/Product';






export const Home = () => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: "#f9ed69",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <Product/>
        </View>
      );
}