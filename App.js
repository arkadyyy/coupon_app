import * as React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import VacationPage from "./components/VacationPage/VacationPage";
import FoodPage from "./components/FoodPage/FoodPage";
import ElectricityPage from "./components/ElectricityPage/ElectricityPage";
import LoginPage from "./components/LoginPage/LoginPage";
import CouponPage from "./components/CouponPage/CouponPage";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import RestaurantPage from "./components/RestaurantPage/RestaurantPage";

import { AntDesign, Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const headerRight = () => <Text style={{ marginRight: 10 }}>Coupon App</Text>;
const headerLeft = (navigation) => (
  <TouchableOpacity
    style={styles.loginBtn}
    onPress={() => navigation.navigate("Login")}
    color='#c4c4c4'
  >
    <Text>Login</Text>
  </TouchableOpacity>
);

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        backBehavior='history'
        initialRouteName='Home'
        screenOptions={({ route }) => ({
          tabBarButton: ["Login", "CouponPage"].includes(route.name)
            ? () => {
                return null;
              }
            : undefined,
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          options={({ navigation }) => ({
            headerTitle: "",
            headerRight: () => headerRight(),
            headerLeft: () => headerLeft(navigation),
          })}
          name='Login'
          component={LoginPage}
        />
        <Tab.Screen
          options={({ navigation }) => ({
            headerTitle: "",
            headerRight: () => headerRight(),
            headerLeft: () => headerLeft(navigation),
          })}
          name='CouponPage'
          component={CouponPage}
        />
        <Tab.Screen
          options={({ navigation }) => ({
            headerTitle: "",
            tabBarIcon: () => (
              <Ionicons name='airplane-outline' size={24} color='black' />
            ),
            headerRight: () => headerRight(),
            headerLeft: () => headerLeft(navigation),
          })}
          name='Vacation'
          component={VacationPage}
        />
        <Tab.Screen
          options={({ navigation }) => ({
            headerTitle: "",
            tabBarIcon: () => (
              <Ionicons name='logo-electron' size={24} color='black' />
            ),
            headerRight: () => headerRight(),
            headerLeft: () => headerLeft(navigation),
          })}
          name='Electricity'
          component={ElectricityPage}
        />
        <Tab.Screen
          options={({ navigation }) => ({
            headerTitle: "",
            tabBarIcon: () => <AntDesign name='home' size={24} color='black' />,
            headerRight: () => headerRight(),
            headerLeft: () => headerLeft(navigation),
          })}
          name='Home'
          component={HomeScreen}
        />
        <Tab.Screen
          options={({ navigation }) => ({
            headerTitle: "",
            tabBarIcon: () => (
              <Ionicons name='fast-food-outline' size={24} color='black' />
            ),
            headerRight: () => headerRight(),
            headerLeft: () => headerLeft(navigation),
          })}
          name='Food'
          component={FoodPage}
        />
        <Tab.Screen
          options={({ navigation }) => ({
            headerTitle: "",
            tabBarIcon: () => (
              <Ionicons name='restaurant-outline' size={24} color='black' />
            ),
            headerRight: () => headerRight(),
            headerLeft: () => headerLeft(navigation),
          })}
          name='Restaurant'
          component={RestaurantPage}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  loginBtn: {
    backgroundColor: "#c4c4c4",
    marginLeft: 10,
    padding: 10,
    borderRadius: 10,
  },
});

export default App;
