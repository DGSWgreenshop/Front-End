import {FC} from 'react';
import React, {StyleSheet, Text, View} from 'react-native';

const Login: FC = () => {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#000000',
  },
});

export default Login;
