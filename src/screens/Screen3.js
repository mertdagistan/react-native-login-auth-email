import React, { useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import { RemoveItem } from "../helpers/storage";
const Screen3 = ({ navigation }) => {
  const { state, signout } = useContext(AuthContext);
  const SignOut = async () => {
    await RemoveItem("user");
    signout();
  };
  return (
    <View style={styles.master}>
      <Text style={styles.header}>Tab3</Text>
      <Button onPress={SignOut} title="Ready to Sign out?" type="clear" />
    </View>
  );
};

const styles = StyleSheet.create({
  master: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 32,
    marginBottom: 8,
  },
});

export default Screen3;
