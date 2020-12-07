import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import SocialButton from "../components/SocialButton";

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.text}>Login Screen</Text>
      <FormInput labelValue={email} onChangeText={(userEmail) => setEmail(userEmail)} placeholder="Email" iconType="user" keyboardType="email-address" autoCapitalize="none" autoCorrect={false} />

      <FormInput labelValue={password} onChangeText={(userPassword) => setPassword(userPassword)} placeholder="Password" iconType="lock" secureTextEntry={true} />

      <FormButton buttonTitle="Sign In" onPress={() => alert('Sign In Clicked!')} />

      <TouchableOpacity style={styles.forgotButton} >
        <Text style={styles.navButtonText}>Forgot password</Text>
      </TouchableOpacity>

      <SocialButton buttonTitle="Sign In with Facebook" btnType="facebook" color="#4867aa" backgroundColor="#e6eaf4" onPress={() => { }} />

      <SocialButton buttonTitle="Sign In with Google" btnType="google" color="#de4d41" backgroundColor="#e6eaf4" onPress={() => { }} />

      <TouchableOpacity style={styles.forgotButton} onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.navButtonText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f9fafd",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  logo: {
    height: 150,
    width: 150,
    resizeMode: "cover"
  },

  text: {

    fontSize: 28,
    marginBottom: 10,
    color: "#051d5f"
  },

  navButton: {
    marginTop: 35,
  },

  forgotButton: {
    marginVertical: 35,
  },

  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: "#2e64e5",

  }
})