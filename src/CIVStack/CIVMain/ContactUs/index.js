import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import colors from '../../../colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import {set} from 'react-native-reanimated';

export default function ContactUs({route}) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const _onSend = () => {
    if (
      title.length > 0 ||
      content.length > 0 ||
      name.length > 0 ||
      phone.length > 0
    ) {
      axios
        .post('http://10.0.2.2:5000/api/contactus/create', {
          title,
          content,
          name,
          phone,
        })
        .then(() => {
          Alert.alert('Thành công', 'Gửi phản ánh thành công');
          setTitle('');
          setContent('');
          setName('');
          setPhone('');
        })
        .catch(err => Alert.alert(err));
    } else {
      Alert.alert('Cảnh báo', 'Thông tin không được để trống');
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.topText}>Phản ánh</Text>
      </View>

      <ScrollView style={styles.contentContainer}>
        <Text>
          Phản ánh trực tiếp gọi đến số hotline:{' '}
          <Text style={{color: 'red'}}>12233.234.875</Text>
        </Text>
        <Text>Hoặc</Text>
        <Text style={{marginBottom: 10}}>Điền vào phiếu dưới đây</Text>
        <Text style={styles.title}>Tiêu đề</Text>
        <TextInput
          style={styles.input}
          placeholder="Tiêu đề phản ánh"
          onChangeText={text => setTitle(text)}
          value={title}
        />
        <Text style={styles.title}>Nội dung</Text>
        <TextInput
          style={[styles.input, {height: 200, textAlignVertical: 'top'}]}
          multiline
          maxLength={200}
          placeholder="Nội dung phản ánh"
          onChangeText={text => setContent(text)}
          value={content}
        />
        <Text style={styles.title}>Tên người gửi</Text>
        <TextInput
          style={styles.input}
          placeholder="Tên người gửi"
          onChangeText={text => setName(text)}
          value={name}
        />
        <Text style={styles.title}>Số điện thoại</Text>
        <TextInput
          style={styles.input}
          placeholder="Số điện thoại"
          onChangeText={text => setPhone(text)}
          value={phone}
        />
        <TouchableOpacity style={styles.buttonContainer} onPress={_onSend}>
          <Text
            style={{
              fontSize: 18,
              color: colors.WHITE,
              fontWeight: 'bold',
            }}>
            Gửi phản ánh
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  headerContainer: {
    marginHorizontal: 10,
  },
  topContainer: {
    backgroundColor: colors.TORY_BLUE,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    marginBottom: 20,
  },
  topText: {
    color: colors.WHITE,
    fontSize: 25,
    fontWeight: 'bold',
  },
  contentContainer: {
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginLeft: 8,
  },
  input: {
    color: colors.BLACK,
    fontSize: 15,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: colors.WHISKERS,
    borderRadius: 10,
    marginVertical: 8,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: colors.TORY_BLUE,
    marginVertical: 10,
    borderRadius: 25,
  },
});
