import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { Divider } from 'react-native-paper';

const Account = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        {/*<View style={styles.account}>
          <TouchableOpacity>
            <FontAwesome name="arrow-left" size={24} color="#00A86B" />
          </TouchableOpacity>
          <View style={styles.accountName}>
            <Text style={{ fontSize: 20 }}>Account</Text>
          </View>
        </View>*/} 

        <Divider />

        <View>
          <TouchableOpacity style={styles.featureBox}>
            <Text style={styles.featureName}>Cash</Text>
            <View style={{}}>
              <Text style={{ color: '#7777' }}> 00.0 VND <span/>
              <FontAwesome name="chevron-right" size={14} color="#00A86B" /></Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  account: {
    alignItems: 'left',
    flexDirection: 'row',
    margin: 16,
  },
  accountName: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  featureBox: {
    flexDirection: 'row',
    margin: 16,
    justifyContent: 'space-between',
  },
  featureName: {
    fontSize: 14,
    fontWeight: 450,
  },
});
