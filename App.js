import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  StyleSheet,
} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import { Divider } from 'react-native-paper';

import Welcome from './screens/Welcome';
import Account from './screens/Account';
import EditProfileScreen from './screens/EditProfileScreen';
const Stack = createNativeStackNavigator();

const ProfileScreen = ({ name, userName, profileImage }) => {
  profileImage = require('./assets/J(2).png');
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.inforBox}>
          <TouchableOpacity onPress={() => {}}>
            <View style={{ width: 90 }}>
              <Image
                source={profileImage}
                style={{
                  width: 90,
                  height: 90,
                  borderColor: '#00A86B',
                  borderWidth: 1,
                  borderRadius: '50%',
                }}
              />
            </View>
          </TouchableOpacity>

          <View style={{ marginHorizontal: 15, justifyContent: 'center' }}>
            <Text style={{ fontSize: 14, color: '#7777' }}>@username</Text>
            <Text style={{ fontSize: 20, fontWeight: 700 }}>SaveMoney</Text>
          </View>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate('EditProfileScreen', {
                name: name,
                userName: userName,
                profileImage: profileImage,
              })
            }
            style={{ justifyContent: 'center', alignItems: 'center' }}>
            <View>
              <Feather name="edit" size={25} color="#00A86B" />
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ margin: 20 }}>
          <TouchableOpacity onPress={() => navigation.navigate('Account')}>
            <View style={styles.featureBox}>
              <View
                style={{
                  backgroundColor: '#FFF6E5',
                  padding: 10,
                  borderRadius: 15,
                }}>
                <Icon name="wallet" size={25} color="#00A86B" />
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 10,
                }}>
                <Text style={styles.featureName}>Account</Text>
              </View>
            </View>
          </TouchableOpacity>

          <Divider />

          <TouchableOpacity>
            <View style={styles.featureBox}>
              <View
                style={{
                  backgroundColor: '#FFF6E5',
                  padding: 10,
                  borderRadius: 15,
                }}>
                <Icon name="cog" size={25} color="#00A86B" />
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 10,
                }}>
                <Text style={styles.featureName}>Setting</Text>
              </View>
            </View>
          </TouchableOpacity>

          <Divider />

          <TouchableOpacity>
            <View style={styles.featureBox}>
              <View
                style={{
                  backgroundColor: '#FFF6E5',
                  padding: 10,
                  borderRadius: 15,
                }}>
                <Icon name="question-circle" size={25} color="#00A86B" />
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 10,
                }}>
                <Text style={styles.featureName}>Help</Text>
              </View>
            </View>
          </TouchableOpacity>

          <Divider />

          <TouchableOpacity>
            <View style={styles.featureBox}>
              <View
                style={{
                  backgroundColor: '#FFE2E4',
                  padding: 10,
                  borderRadius: 15,
                }}>
                <Icon name="sign-out-alt" size={25} color="#FD3C4A" />
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 10,
                }}>
                <Text style={styles.featureName}>Logout</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
      <Stack.Screen name="Account" component={Account} />
    </Stack.Navigator>
  );
};

const Profile = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inforBox: {
    flex: 1,
    alignItems: 'left',
    margin: 20,
    flexDirection: 'row',
  },
  image: {
    width: 90,
    height: 90,
  },
  featureBox: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  featureName: {
    fontSize: 14,
    fontWeight: 450,
  },
});
