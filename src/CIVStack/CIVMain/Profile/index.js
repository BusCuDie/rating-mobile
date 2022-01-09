import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,

  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import colors from '../../../colors';
import axios from 'axios';
export default function EditProfile({route, navigation}) {
  const currentUser = route.params.currentUser;
  const [name, setName] = React.useState(currentUser.name);
  const [gender, setGender] = React.useState(currentUser.gender);
  const [kinda, setKinda] = React.useState(currentUser.kinda);
  const [phone, setPhone] = React.useState(currentUser.phone);
  const [cmnd, setCmnd] = React.useState(currentUser.cmnd);

  const onSend = () => {
    if (!name || !gender || !kinda || !phone || !cmnd) {
      Alert.alert('Cảnh báo', 'Thông tin không được để trống');
    } else {
      axios
        .patch(`http://10.0.2.2:5000/api/users/edit/${currentUser._id}`, {
          name: name,
          gender: gender,
          kinda: kinda,
          phone: phone,
          cmnd: cmnd,
        })
        .then(() => Alert.alert('Thành công', 'Cập nhật thành công'))
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
          Thông tin cá nhân
        </Text>
      </View>
      <ScrollView>
        <View style={styles.boxItemContainer}>
          <Text style={{color: 'black', fontWeight: '400', fontSize: 18}}>
            Họ và tên
          </Text>
          <TextInput
            style={styles.noedittable}
            value={currentUser.name}
            onChangeText={text => setName(text)}
          />
        </View>
        <View style={styles.boxItemContainer}>
          <Text style={{color: 'black', fontWeight: '400', fontSize: 18}}>
            Giới tính
          </Text>
          <TextInput
            style={styles.noedittable}
            value={currentUser.gender}
            onChangeText={text => setGender(text)}
          />
        </View>
        <View style={styles.boxItemContainer}>
          <Text style={{color: 'black', fontWeight: '400', fontSize: 18}}>
            Dân tộc
          </Text>
          <TextInput
            style={styles.noedittable}
            value={currentUser.kinda}
            onChangeText={text => setKinda(text)}
          />
        </View>
        <View style={styles.boxItemContainer}>
          <Text style={{color: 'black', fontWeight: '400', fontSize: 18}}>
            Thẻ căn cước
          </Text>
          <TextInput
            style={styles.noedittable}
            value={currentUser.cmnd}
            onChangeText={text => setCmnd(text)}
          />
        </View>
        <View style={styles.boxItemContainer}>
          <Text style={{color: 'black', fontWeight: '400', fontSize: 18}}>
            Số điện thoại
          </Text>
          <TextInput
            style={styles.noedittable}
            value={currentUser.phone}
            onChangeText={text => setPhone(text)}
          />
        </View>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.TORY_BLUE,
            marginHorizontal: 30,
            marginBottom: 30,
            height: 50,
            borderRadius: 20,
            marginTop: 20,
          }}
          onPress={onSend}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
            Cập nhật
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  boxItemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    marginVertical: 10,
  },
  noedittable: {
    borderWidth: 1,
    borderColor: '#D3D3D3',
    width: '100%',
    textAlign: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#D3D3D3',
    borderRadius: 10,
    fontSize: 16,
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
  flatlistContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  flatlistimg: {
    height: 100,
    width: 100,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
});
