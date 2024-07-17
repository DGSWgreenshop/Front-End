import {FC} from 'react';
import React, {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import * as wasi from 'node:wasi';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from 'react-native-screens/native-stack';

type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  LoginTo: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

const Login: FC = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <View style={styles.textBox}>
        <Text style={styles.textBoxMain}>Green</Text>
        <Text style={styles.textBoxSub}>Shop</Text>
      </View>
      <Image
        source={require('../assets/Images/while.png')}
        style={styles.image}
      />
      <Text style={styles.textMain}>친환경을 소비하다. ♻️</Text>
      <Text style={styles.textSub}>플라스틱은 줄이Go! 해양환경은 살리Go!</Text>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => navigation.navigate('LoginTo')}>
          <Text style={{color: '#000000', fontSize: 25, fontWeight: '500'}}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#000000',
    paddingHorizontal: 40,
  },

  textBox: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },

  textBoxMain: {
    fontSize: 100,
    fontFamily: 'Modak-Regular',
    color: '#13D45D',
    opacity: 0.8,
    height: 110,
    textAlignVertical: 'center',
  },

  textBoxSub: {
    fontSize: 60,
    fontFamily: 'Modak-Regular',
    color: '#13D45D',
    opacity: 0.8,
    height: 70,
  },

  image: {
    width: 400,
    height: 560,
    bottom: 175,
    transform: [{rotate: '-5deg'}, {translateX: -50}],
  },

  textMain: {
    fontSize: 24,
    fontWeight: '500',
    bottom: 150,
  },

  textSub: {
    fontSize: 18,
    fontWeight: '500',
    bottom: 140,
  },

  loginBtn: {
    display: 'flex',
    alignItems: 'center',
    width: 280,
    height: 60,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    bottom: 120,
    justifyContent: 'center',
  },
});

export default Login;
