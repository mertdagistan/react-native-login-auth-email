import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Pressable,
} from "react-native";
import { SetItem } from "../../helpers/storage";

import { Context as AuthContext } from "../../context/AuthContext";
import { TouchableOpacity } from "react-native-gesture-handler";

const Signin = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { state, signin } = useContext(AuthContext);

  const Login = async () => {
    var userJSONString = JSON.stringify({ email: email, password: password });
    await SetItem("user", userJSONString);
    signin({ email: email, password: password });
  };

  return (
    <View style={styles.master}>
      <Text style={styles.header}>Auth</Text>
      <TextInput
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
        style={styles.input}
      />
      <TouchableOpacity
        style={{
          alignItems: "center",
          backgroundColor: "black",
          paddingVertical: 10,
          margin: 12,
        }}
        onPress={() => {
          Login();
        }}
      >
        <Text style={{ color: "white", fontSize: 16 }}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  master: {
    padding: 16,
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
  },
  header: {
    fontSize: 32,
    marginBottom: 18,
    alignSelf: "center",
  },
  text: {
    fontSize: 16,
    marginTop: 16,
  },
  link: {
    flexDirection: "row",
    justifyContent: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    padding: 10,
  },
});

export default Signin;
