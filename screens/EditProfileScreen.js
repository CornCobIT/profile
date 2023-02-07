import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ToastAndroid,
  TextInput,
  StyleSheet,
  Button,
  SafeAreaView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

export default function EditProfileScreen({ route, navigation }) {
  const { name, accountName, profileImage } = route.params;
  const ToastMessenger = () => {
    ToastAndroid.show("Edit Successfully", ToastAndroid.SHORT);
  };
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.top}>
        {/*<TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="x" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{fontsize: 16, fontWeight: 'bold'}}>Edit Profile</Text>
        <TouchableOpacity onPress={() => {
          ToastMessenger();
          navigation.goBack()}}>
          <MaterialIcons name="done" size={24} color="green" />
        </TouchableOpacity>*/}
        <View style={{ padding: 20, alignItems: "center" }}>
          <Image
            source={profileImage}
            style={{ width: 80, height: 80, borderRadius: '50%' }}
          />
          <View style={{ paddingTop: 10 }}>
            <Text onPress={pickImage} style={{ color: "#00A86B" }}>
              Change profile photo
            </Text>
            {image && (
              <Image
                source={{ uri: image }}
                style={{ width: 200, height: 200 }}
              />
            )}
          </View>
        </View>
        <View style={{ paddingHorizontal: 20 }}>
          <View style={{ padding: 10 }}>
            <Text
              style={{
                opacity: 0.5,
              }}
            >
              Name
            </Text>
            <TextInput
              placeholder="name"
              defaultValue={name}
              style={{
                fontSize: 16,
                borderBottomWidth: 1,
                borderColor: "#CDCDCD",
                paddingTop: 5,
              }}
            />
          </View>

          <View style={{ padding: 10 }}>
            <Text
              style={{
                opacity: 0.5,
              }}
            >
              Username
            </Text>
            <TextInput
              placeholder="accountname"
              defaultValue={accountName}
              style={{
                fontSize: 16,
                borderBottomWidth: 1,
                borderColor: "#CDCDCD",
                paddingTop: 5,
              }}
            />
          </View>

          <View style={{ padding: 10 }}>
            <Text
              style={{
                opacity: 0.5,
              }}
            >
              Phone Number
            </Text>
            <TextInput
              placeholder="phonenumber"
              style={{
                fontSize: 16,
                borderBottomWidth: 1,
                borderColor: "#CDCDCD",
                paddingTop: 5,
              }}
            />
          </View>
        </View>
        <View style={{ flex: 1, justifyContent: "flex-end", paddingTop: 20 }}>
          <Button
            title="Done"
            onPress={() => {
              {/** ToastMessenger(); */}
              navigation.goBack();
            }}
            color="#00A86B"
          />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  // top: {
  //   alignItems: 'center',
  //   justifyContent: 'space-between',
  //   padding: 10,
  // }
});
