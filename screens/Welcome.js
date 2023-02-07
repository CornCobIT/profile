import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

const Welcome = ({navigation}) => {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.paragraph}>Welcome to</Text>
          <Image style={styles.logo} source={require('../assets/J.gif')} />
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}
            style={{
              padding: 5,
              backgroundColor: '#008037',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ fontSize: 18, color: '#FFF6E5', fontWeight: 500 }}>
              Get Started <FontAwesome name="chevron-right" size={15} />
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF6E5',
    color: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    fontSize: 30,
    textAlign: 'center',
    color: '#008037',
    fontFamily: 'Glacial Indifference',
    textTransform: 'uppercase',
  },
  logo: {
    width: 300,
    height: 400,
  },
});
