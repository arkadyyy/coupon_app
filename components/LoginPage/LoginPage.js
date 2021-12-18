import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { Entypo } from "@expo/vector-icons";

const LoginPage = () => {
  const userTypes = ["Customer", "Admin", "Company"];

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");

  const onChangeEmail = (val) => {
    setEmail(val);
  };

  const onChangePassword = (val) => {
    setPassword(val);
  };

  const onUserTypeChange = (val) => {
    setUserType(val);
  };

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 17,
          height: 300,
        }}
      >
        <SelectDropdown
          renderDropdownIcon={() => (
            <Entypo name='chevron-thin-down' size={24} color='black' />
          )}
          dropdownIconPosition='left'
          buttonTextStyle={{ fontSize: 12 }}
          buttonStyle={{ backgroundColor: "transparent", width: 130 }}
          defaultButtonText='Client Type'
          data={userTypes}
          onSelect={(selectedItem, index) => {
            onUserTypeChange(selectedItem);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item;
          }}
        />
        <Text style={{ fontSize: 42 }}>Login</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
          placeholder='Email'
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          placeholder='Password'
          secureTextEntry={true}
        />
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginBtnText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  loginBtn: {
    backgroundColor: "#C4C4C4",
    borderRadius: 50,
    height: 50,
    marginTop: 20,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  loginBtnText: {
    fontSize: 20,
  },
  inputContainer: {
    justifyContent: "center",
  },
});

export default LoginPage;
