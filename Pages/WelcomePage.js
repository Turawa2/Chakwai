import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

export default function WelcomePage() {
  const navigation = useNavigation();

  const handleButtonClick = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <Image source={require('../assets/delivery-scooter.png')} style={styles.scooterImage} />
      <View style={{marginTop: 40}} >
        <Text style={{ color: "#fff", fontSize: 45, fontWeight: "700", textAlign: "center", lineHeight: 20 }}>Order</Text>
        <Text style={{ color: "#fff", fontSize: 45, fontWeight: "700" }}>Your Food</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleButtonClick}>
        <Text style={{ color: "black", fontSize: 20, fontWeight: "700", marginLeft: 20  }}>Get Started</Text>
        <View style={styles.arrowContainer}>
          <Icon name="arrow-right" size={20} color="#7235ae" style={styles.arrowIcon} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#7235ae",
    alignItems: 'center',
    overflow: 'hidden',
  },
  scooterImage: {
    width: 280,
    height: 280,
    marginTop: 100,
  },
  button: {
    backgroundColor: '#fff',
    width: '70%',
    marginTop: 40,
    padding: 15,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  arrowContainer: {
    width: 40,
    height: 40,
    borderRadius: 20, // Make it a circle
    backgroundColor: '#7235ae',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10

  },
  arrowIcon: {
    marginRight: 4,
    color: "#fff"
  },
});
