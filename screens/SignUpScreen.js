import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";


import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import SocialButton from "../components/SocialButton";


function SignupScreen({ navigation }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create an Account</Text>

      <FormInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholder="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholder="Password"
        iconType="lock"
        secureTextEntry={true}
      />

      <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholder="Confirm Password"
        iconType="lock"
        secureTextEntry={true}
      />

      <FormButton
        buttonTitle="Sign Up"
        onPress={() => alert("Sign Up Clicked!")}
      />

      <View style={styles.textPrivate}>
        <Text style={styles.color_textPrivate}>
          By registering you confirm that you accept our
        </Text>
        <TouchableOpacity onPress={() => alert("Terms clicked")}
        >
          <Text style={[styles.color_textPrivate, { color: "#e88832" }]}> Terms of services </Text>
        </TouchableOpacity>
        <Text style={styles.color_textPrivate} >
          and
        </Text>
        <TouchableOpacity onPress={() => alert("Privacy clicked")}
        >
          <Text style={[styles.color_textPrivate, { color: "#e88832" }]}> Privacy policy </Text>
        </TouchableOpacity>
      </View>

      <SocialButton
        buttonTitle="Sign Up with Facebook"
        btnType="facebook"
        color="#4867aa"
        backgroundColor="#e6eaf4"
        onPress={() => { }}
      />

      <SocialButton
        buttonTitle="Sign Up with Google"
        btnType="google"
        color="#de4d41"
        backgroundColor="#e6eaf4"
        onPress={() => { }}
      />

      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate("Signup")}
      >
        <Text style={styles.navButtonText} onPress={() => { navigation.navigate('Login') }}>
          Already have an account? Sign In
        </Text>
      </TouchableOpacity>
    </View >
  );
}

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f9fafd",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  text: {
    fontSize: 28,
    marginBottom: 10,
    color: "#051d5f",
  },

  navButton: {
    marginTop: 35,
  },

  textPrivate: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 35,
    justifyContent: 'center'
  },

  color_textPrivate: {
    fontSize: 13,
    fontWeight: "400",
    color: "grey"
  },

  navButtonText: {
    padding: 20,
    fontSize: 18,
    fontWeight: "500",
    color: "#2e64e5",
  },
});
