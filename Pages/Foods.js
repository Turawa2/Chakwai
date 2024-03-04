import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Foods() {
  return (
    <View style={styles.container}>
      {/* Profile Picture on the Left */}
      <View style={styles.profileContainer}>
        <Image
          source={require('../assets/tubaba.jpg')}
          style={styles.profileImage}
        />
      </View>

      {/* Menu Icon on the Right */}
      <View style={styles.menuContainer}>
        <TouchableOpacity>
          <Icon name="bars" size={30} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  profileContainer: {
    flex: 1,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  menuContainer: {
    marginLeft: 'auto', // Pushes the menu icon to the right
  },
});
