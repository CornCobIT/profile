import React from 'react';
import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Button() {
  // ...rest of the code remains same
  if (theme === "primary") {
    return (
      <View>
        /* ...rest of the code remains same */
        <Pressable
          style={[styles.button, { backgroundColor: '#fff' }]}
        />
      </View>
    );
  }
}
