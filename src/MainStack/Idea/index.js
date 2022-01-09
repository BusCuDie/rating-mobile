import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
  KeyboardAvoidingView
} from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/AntDesign';
export default function Idea({route, navigation}) {
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [idea, setIdea] = React.useState('');
  const onSend = () => {
    if (!name || !phone || !address || !idea) {
      Alert.alert('Cảnh báo', 'Nhập đầy đủ thông tin');
    } else {
      axios
        .post(`http://10.0.2.2:5000/api/idea/create`, {
          name: name,
          phone: phone,
          address: address,
          idea: idea,
        })
        .then(() =>
          Alert.alert(
            'Cảm ơn bạn đã đóng góp ý kiến',
            'Chúc bạn một ngày mới vui vẻ',
            [{text: 'OK', onPress: () => navigation.navigate('GuestPageScreen')}]
          ),
         
        )
        .catch(err => Alert.alert(err));
    }
  };
  return (
  
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: '#304D95',
          height: 150,
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            color: 'white',
          }}>
          Đóng góp ý kiến
        </Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.boxtitle}>Họ và tên</Text>
        <TextInput
          style={styles.boxinput}
          onChangeText={text => setName(text)}/>
      </View>
      <View style={styles.box}>
        <Text style={styles.boxtitle}>
          {' '}
          Số điện thoại
        </Text>
        <TextInput style={styles.boxinput} onChangeText={text => setPhone(text)}/>
      </View>
      <View style={styles.box}>
        <Text style={styles.boxtitle}>
          {' '}
          Địa chỉ
        </Text>
        <TextInput style={styles.boxinput} onChangeText={text => setAddress(text)}/>
      </View>
      <KeyboardAvoidingView>
      <View style={styles.box}>
        <Text style={styles.boxtitle}>Ý kiến đóng góp</Text>
        <TextInput
          style={[
            styles.boxinput,
            {height: 100, paddingTop: 20, textAlignVertical: 'top'},
          ]}
          multiline
          onChangeText={text => setIdea(text)}/>
      </View>
      </KeyboardAvoidingView>
      <TouchableOpacity style={styles.button} onPress={onSend}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: '#304D95',
            }}>
          Gửi
          </Text>
        </TouchableOpacity>
      <TouchableOpacity
        style={styles.arrowBack}
        onPress={() => navigation.goBack()}>
        <Text style={{color: 'black'}}>❮</Text>
      </TouchableOpacity>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  box: {marginLeft: 30, marginTop: 30, marginRight: 30},
  boxtitle: {fontSize: 16, fontWeight: 'bold'},
  boxinput: {
    borderWidth: 1,
    borderColor: '#304D95',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  boxItemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    marginVertical: 10,
  },

  editable: {
    borderWidth: 1,
    borderColor: '#D3D3D3',
  },
  noedittable: {
    borderWidth: 1,
    borderColor: '#D3D3D3',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#D3D3D3',
    borderRadius: 30,
  },
  arrowBack: {
    position: 'absolute',
    marginTop: 20,
    marginLeft: 20,
    backgroundColor: 'white',
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    elevation: 6,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFD834',
    height: 50,
    marginHorizontal: 30,
    borderRadius: 25,
    marginTop: 20,
  },
});
