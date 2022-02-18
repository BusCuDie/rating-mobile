import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
export default function EditProfile({route, navigation}) {
  const currentUser = route.params.currentUser;
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
      <View style={styles.boxItemContainer}>
        <Text style={{color: 'black', fontWeight: '400', fontSize: 18}}>
          Họ và tên
        </Text>
        <View style={styles.noedittable}>
          <Text style={{color: 'black', fontWeight: '500', fontSize: 16}}>
            {currentUser.name}
          </Text>
        </View>
      </View>
      <View style={styles.boxItemContainer}>
        <Text style={{color: 'black', fontWeight: '400', fontSize: 18}}>
          Giới tính
        </Text>
        <View style={styles.noedittable}>
          <Text style={{color: 'black', fontWeight: '500', fontSize: 16}}>
            {currentUser.gender}
          </Text>
        </View>
      </View>
      <View style={styles.boxItemContainer}>
        <Text style={{color: 'black', fontWeight: '400', fontSize: 18}}>
          Dân tộc
        </Text>
        <View style={styles.noedittable}>
          <Text style={{color: 'black', fontWeight: '500', fontSize: 16}}>
            {currentUser.kinda}
          </Text>
        </View>
      </View>
      <View style={styles.boxItemContainer}>
        <Text style={{color: 'black', fontWeight: '400', fontSize: 18}}>
          Phòng ban
        </Text>
        <View style={styles.noedittable}>
          <Text style={{color: 'black', fontWeight: '500', fontSize: 16}}>
            {currentUser.department}
          </Text>
        </View>
      </View>
      <View style={styles.boxItemContainer}>
        <Text style={{color: 'black', fontWeight: '400', fontSize: 18}}>
          Chức vụ
        </Text>
        <View style={styles.noedittable}>
          <Text style={{color: 'black', fontWeight: '500', fontSize: 16}}>
            {currentUser.position}
          </Text>
        </View>
      </View>
      <View style={styles.boxItemContainer}>
        <Text style={{color: 'black', fontWeight: '400', fontSize: 18}}>
          Số điện thoại
        </Text>
        <View style={styles.noedittable}>
          <Text style={{color: 'black', fontWeight: '500', fontSize: 16}}>
            {currentUser.phone}
          </Text>
        </View>
      </View>
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
});
