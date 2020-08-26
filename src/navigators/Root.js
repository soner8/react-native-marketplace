import React from "react";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import HeaderButton from "../components/ui/HeaderButton";
import ShopNavigator from "./Shop";
import OrderScreen from "../screens/shop/OrderScreen";
import Theme from "../constants/Theme";

const OrderStack = createStackNavigator();
const MainDrawer = createDrawerNavigator();

const OrderNavigator = () => (
  <OrderStack.Navigator>
    <OrderStack.Screen
      name="Order"
      component={OrderScreen}
      options={({ navigation, route }) => ({
        headerTitle: "My Orders",
        headerTintColor: Platform.OS === "ios" ? Theme.primary : "#fff",
        headerLeft: () => (
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
              title="open menu"
              iconName="menu"
              onPress={() => navigation.openDrawer()}
            />
          </HeaderButtons>
        ),
      })}
    />
  </OrderStack.Navigator>
);

const MainDrawerNavigator = () => (
  <MainDrawer.Navigator
    drawerContentOptions={{
      activeTintColor: Theme.primary,
    }}
  >
    <MainDrawer.Screen
      name="Shop"
      component={ShopNavigator}
      options={{
        drawerIcon: ({ color }) => {
          return <FontAwesome name="list-alt" size={24} color={color} />;
        },
      }}
    />
    <MainDrawer.Screen
      name="Order"
      component={OrderNavigator}
      options={{
        drawerLabel: "My Orders",
        drawerIcon: ({ color }) => (
          <Entypo name="shop" size={24} color={color} />
        ),
      }}
    />
  </MainDrawer.Navigator>
);

const Root = () => {
  return (
    <NavigationContainer>
      <MainDrawerNavigator />
    </NavigationContainer>
  );
};

export default Root;