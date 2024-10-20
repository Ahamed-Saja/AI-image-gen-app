import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";

export default function LoginScreen() {
  return (
    <View>
      <Image
        source={require("../../assets/images/login.jpeg")}
        style={{ width: "100%", height: 600 }}
      />
      <View style={styles.LoginContainer}>
        <Text style={styles.LoginTitle}>Welcome to ImaginAI</Text>
        <Text style={styles.LoginSubtitle}>Create AI Art in Just a Click</Text>
        <View style={styles.LoginButton}>
          <Text style={styles.LoginButtonText}>Continue</Text>
        </View>
        <Text style={styles.LoginByText}>
          By continuing, you agree to our Terms and Conditions
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  LoginContainer: {
    padding: 25,
    marginTop: -50,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: "50%",
  },
  LoginTitle: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  LoginSubtitle: {
    marginTop: 15,
    fontSize: 16,
    textAlign: "center",
    color: Colors.SECONDARY,
  },
  LoginButton: {
    marginTop: 20,
    backgroundColor: Colors.PRIMARY,
    padding: 20,
    borderRadius: 40,
    alignItems: "center",
  },
  LoginButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  LoginByText: {
    marginTop: 20,
    fontSize: 13,
    textAlign: "center",
    color: Colors.SECONDARY,
  },
});
