import React from 'react';
import {
  View,
  Text,
  TextInput,
  Alert,
  StyleSheet,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import colors from '../../colors';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Entypo';
import {color} from 'react-native-reanimated';

const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;

export default function SignUpScreen({navigation}) {
  const [name, setName] = React.useState(null);
  const [username, setUsername] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [retypePass, setRetypePass] = React.useState(null);
  const signup = () => {
    if (!name || !username || !password || !retypePass) {
      Alert.alert('Cảnh báo', 'Vui lòng nhập đầy đủ thông tin');
    } else if (password.length < 5) {
      Alert.alert('Cảnh báo', 'Mật khẩu phải bao gồm 6 chữ số');
    } else if (password != retypePass) {
      Alert.alert('Cảnh báo', 'Mật khẩu xác nhận không khớp');
    } else {
      axios
        .post('http://10.0.2.2:5000/api/users/signup', {
          name: name,
          username: username,
          password: password,
        })
        .then(() =>
          Alert.alert('Thành công', 'Nhấn tiếp tục để đăng nhập', [
            {
              text: 'Hủy',
            },
            {
              text: 'Tiếp tục',
              onPress: () => navigation.navigate('Login'),
            },
          ]),
        );
    }
  };
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={-500}
      behavior="padding"
      style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.topHeaderText}>Đăng kí tài khoản</Text>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Họ và tên</Text>
            <View style={styles.inputBox}>
              <Icon
                name="basecamp"
                size={18}
                color={colors.TORY_BLUE}
                style={styles.icon}
              />
              <TextInput
                placeholder="Họ và tên"
                style={styles.input}
                onChangeText={text => setName(text)}
                maxLength={20}
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Tên đăng nhập</Text>
            <View style={styles.inputBox}>
              <Icon
                name="user"
                size={18}
                color={colors.TORY_BLUE}
                style={styles.icon}
              />
              <TextInput
                placeholder="Tên đăng nhập"
                style={styles.input}
                onChangeText={text => setUsername(text)}
                maxLength={12}
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Mật khẩu</Text>
            <View style={styles.inputBox}>
              <Icon
                name="lock"
                size={18}
                color={colors.TORY_BLUE}
                style={styles.icon}
              />
              <TextInput
                placeholder="Mật khẩu"
                style={styles.input}
                onChangeText={text => setPassword(text)}
                secureTextEntry
                maxLength={20}
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Nhập lại mật khẩu</Text>
            <View style={styles.inputBox}>
              <Icon
                name="lock"
                size={18}
                color={colors.TORY_BLUE}
                style={styles.icon}
              />
              <TextInput
                placeholder="Nhập lại mật khẩu"
                style={styles.input}
                onChangeText={text => setRetypePass(text)}
                secureTextEntry
                maxLength={20}
              />
            </View>
          </View>

          <TouchableOpacity style={styles.button} onPress={signup}>
            <Text style={styles.buttonText}>Đăng kí</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.forgotPasswordContainer}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.forgotPasswordText}>
              Bạn đã có tài khoản? Đăng nhập ngay
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topContainer: {
    backgroundColor: colors.TORY_BLUE,
    height: 200,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  inputContainer: {
    paddingHorizontal: 30,
    paddingVertical: 8,
  },
  inputLabel: {
    color: 'black',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 10,
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.TORY_BLUE,
    borderRadius: 15,
  },
  input: {
    width: '100%',
    paddingHorizontal: 15,
  },
  icon: {
    marginHorizontal: 10,
  },
  button: {
    marginHorizontal: 30,
    backgroundColor: colors.TORY_BLUE,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginTop: 20,
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 20,
    color: colors.WHITE,
    fontWeight: 'bold',
  },
  forgotPasswordContainer: {
    alignSelf: 'center',
  },
  forgotPasswordText: {
    color: 'blue',
    fontSize: 14,
  },
  topHeaderText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.WHITE,
  },
});
