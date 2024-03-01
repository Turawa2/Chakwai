import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, CheckBox } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { SocialIcon } from "react-native-elements"; // Import SocialIcon from react-native-elements

export default function Login() {
  const navigation = useNavigation();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleButtonClick = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={{ fontSize: 40, fontWeight: 900, color: "#7235ae", marginTop: 30, textAlign: "center" }}>
          Chakwai
        </Text>
        <Text style={{ fontSize: 25, fontWeight: 700, color: "#000", marginTop: 60, textAlign: "center" }}>
          Welcome Back!
        </Text>
      </View>
      <View style={styles.inputContainer}>
        {/* First Input with Email Icon */}
        <View style={styles.inputWrapper}>
          <Icon name="envelope" size={24} color="#aaa" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#aaa" // Set placeholder color
          />
        </View>

        {/* Second Input with Padluck and Eye Icons */}
        <View style={styles.inputWrapper}>
          <Icon name="lock" size={24} color="#aaa" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={!passwordVisible}
            placeholderTextColor="#aaa" // Set placeholder color
          />
          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}
          >
            <Icon
              name={passwordVisible ? "eye-slash" : "eye"}
              size={24}
              color="#aaa"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>

        {/* Remember Me Checkbox and Text */}
        <View style={styles.rememberMeContainer}>
          <CheckBox
            value={rememberMe}
            onValueChange={() => setRememberMe(!rememberMe)}
            style={styles.checkbox}
          />
          <Text style={styles.checkboxText}>Remember me</Text>
          <Text style={styles.forgotPasswordText}>Forgot Password</Text>
        </View>

        {/* Login Button */}
        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleButtonClick}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        {/* Horizontal Line */}
        <View style={styles.horizontalLineContainer}>
          <View style={styles.horizontalLine} />
          <Text style={{ color: "#aaa", marginHorizontal: 10 }}>or</Text>
          <View style={styles.horizontalLine} />
        </View>

        {/* Social Login Buttons */}
        <View style={styles.socialLoginContainer}>
          {/* Google Button */}
          <TouchableOpacity style={styles.socialLoginButton}>
            <SocialIcon type="google" raised={false} iconColor="#fff" style={styles.socialIcon} />
            <Text style={styles.socialLoginText}>Sign in with Google</Text>
          </TouchableOpacity>

          {/* Facebook Button */}
          <TouchableOpacity style={styles.socialLoginButton}>
            <SocialIcon type="facebook" raised={false} iconColor="#fff" style={styles.socialIcon} />
            <Text style={styles.socialLoginText}>Sign in with Facebook</Text>
          </TouchableOpacity>

          {/* Apple Button */}
          <TouchableOpacity style={styles.socialLoginButton}>
            <SocialIcon type="apple" raised={false} iconColor="#fff" style={styles.socialIcon} />
            <Text style={styles.socialLoginText}>Sign in with Apple</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    overflow: "hidden",
  },
  inputContainer: {
    width: "80%",
    marginTop: 50,
    margin: 20,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 4,
    marginBottom: 20,
    overflow: "hidden",
    padding: 5,
    height: 50, // Set the height of the input
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: "#000",
    padding: 5,
    borderWidth: 0, // Remove input outline
  },
  rememberMeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // Align checkbox, text, and 'Forgot Password' on the same line
    marginBottom: 20,
  },
  checkbox: {
    marginRight: 8,
    backgroundColor: "red",
  },
  checkboxText: {
    fontSize: 16,
    color: "#aaa",
  },
  forgotPasswordText: {
    fontSize: 16,
    color: "#aaa",
    textDecorationLine: "underline",
  },
  loginButton: {
    backgroundColor: '#7235ae',
    width: '100%', // Set the width of the button to 100% of the parent container
    padding: 15,
    borderRadius: 4,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  horizontalLineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  horizontalLine: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#aaa',
  },
  socialLoginContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  socialLoginButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderColor: '#aaa',
    borderWidth: 1,
    borderRadius: 4,
    padding: 5, // Adjust the padding to your preference
    marginVertical: 10,
    width: '100%', // Set the width of the button to 100% of the parent container
  },
  socialIcon: {
    marginRight: 10,
    width: 10,
    height: 10
  },
  socialLoginText: {
    color: '#aaa',
    fontSize: 16,
  },
});
