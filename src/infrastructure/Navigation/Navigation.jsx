import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors } from "../theme/colors";
import { Home } from "../../components/home/Home";
import { Cart } from "../../components/cart/Cart";
import { Favorites } from "../../components/favorites/Favorites";
import { Profile } from "../../components/profile/Profile";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Home: "ios-home",
  Favorites: 'bookmarks',
  Cart: 'ios-cart',
  Profile: 'person-circle',
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];

  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarInactiveTintColor: colors.brand.muted,
    tabBarActiveTintColor: colors.brand.primary,
  };
};

export const Navigation = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={createScreenOptions}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={createScreenOptions}
      />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  </NavigationContainer>
);
