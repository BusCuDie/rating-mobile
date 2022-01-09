import React from 'react';
import {
  View,
  Text,
  TextInput,
  Alert,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import colors from '../../colors';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Entypo';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function LoginScreen({navigation}) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const login = () => {
    if (!username || !password) {
      Alert.alert('Cảnh báo', 'Thông tin không được để trống');
    } else {
      axios
        .post(`http://10.0.2.2:5000/api/users/login`, {
          username: username,
          password: password,
        })
        .then(res => {
          if (!res.data) {
            Alert.alert('Cảnh báo', 'Tên đăng nhập hoặc mật khẩu không chính xác');
          } else {
           res.data.role=='CIV'?
           navigation.navigate('CIVStack',{
            screen: 'CIVMain',
            params: {currentUser: res.data},
          })
           :
            navigation.navigate('MainStack', {
              screen: 'Home',
              params: {currentUser: res.data},
            });
          }
        })
        .catch(err => console.log(err));
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}><Text style={styles.topHeaderText}>
          Đăng nhập</Text></View>
      <View style={styles.bottomContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Tên đăng nhập</Text>
          <View style={styles.inputBox}>
            <Icon
              name="user"
              size={18}
              color={colors.TORY_BLUE}
              style={styles.icon}
            />
            <TextInput placeholder="Tên đăng nhập" 
            style={styles.input}
             onChangeText={text=>setUsername(text)}
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
            <TextInput placeholder="Mật khẩu" 
            style={styles.input} 
            onChangeText={text=>setPassword(text)} 
            secureTextEntry
            maxLength={20}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={login}>
          <Text style={styles.buttonText}>Đăng nhập</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.forgotPasswordContainer} 
        onPress={()=>navigation.navigate('SignUp')}
        >
          <Text style={styles.forgotPasswordText}>
            Bạn chưa có tài khoản? Đăng kí ngay
          </Text>
        </TouchableOpacity>
      </View>
    </View>
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
    justifyContent:'center',
    alignItems:"center"
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
    borderColor:colors.TORY_BLUE,
    borderRadius: 15,
  },
  input: {
    width: '100%',
    paddingHorizontal: 15,
  },
  icon: {
    marginHorizontal: 10,
  },
  button:{
    marginHorizontal:30,
    backgroundColor:colors.TORY_BLUE,
    height: 50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:50,
    marginTop:20,
    marginBottom:15
  },
  buttonText:{
    fontSize:20,
    color: colors.WHITE,
    fontWeight:'bold'
  },
  forgotPasswordContainer:{
    alignSelf:'center'
  },
  forgotPasswordText:{
    color: 'blue',
    fontSize:14
  },
  topHeaderText:{
    fontSize:30,
    fontWeight:'bold',
    color: colors.WHITE
}
});
