import React from 'react';
import { Text, View, Alert, Image, FlatList } from "react-native";
import {data} from '../../data';
import { Button } from './styled';





export const Product = () => {

    const renderItem = ({ item }) => (
        <View>

            <Text>{item.name}</Text>
            <Image
            style={{width:200, height:200}}
                source={{ uri: item.image }}
            />
            <Text>{item.description}</Text>
            <Text>{item.price}</Text>
        </View>

    )
    return (
        <View style={{
            flex: 1,
            backgroundColor: "#f9ed69",
            justifyContent: "center",
            alignItems: "center"
        }}>

                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.ID}
                    />
            <Button onPress={() => Alert.alert("Estas en el home")}>
                    <Text>Home</Text>
            </Button>
        </View>
    );
}