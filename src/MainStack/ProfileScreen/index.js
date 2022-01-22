import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
export default function ProfileScreen({route, navigation}) {
  const currentUser = route.params.currentUser;
  const [avatar, setAvatar ]= useState(currentUser.avatar);
  const navigateToEditProfile = () => {
    navigation.navigate('EditProfile', {currentUser: currentUser});
  };
  const navigateDetailRating = () => {
    navigation.navigate('DetailRating', {currentUser: currentUser});
  };
  const navigateToDetailRatingYs = () => {
    navigation.navigate('DetailRatingYs', {currentUser: currentUser});
  };
  const navigateToRatingYourSelf = () => {
    navigation.navigate('RatingYourSeft', {currentUser: currentUser});
  };
  const logout = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header} />
      <Image source={{uri: avatar}} style={styles.avatar} />
      <View style={styles.content}>
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={navigateToEditProfile}>
          <Icon name="edit" size={20} />
          <Text style={{fontSize: 18, marginLeft: 10}}>Thông tin cá nhân</Text>
        </TouchableOpacity>
        <View style={styles.spacer} />
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={navigateDetailRating}>
          <Icon name="eyeo" size={20} />
          <Text style={{fontSize: 18, marginLeft: 10}}>Xem đánh giá</Text>
        </TouchableOpacity>
        <View style={styles.spacer} />
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={navigateToRatingYourSelf}>
          <Icon name="form" size={20} />
          <Text style={{fontSize: 18, marginLeft: 10}}>Tự đánh giá</Text>
        </TouchableOpacity>
        <View style={styles.spacer} />
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={navigateToDetailRatingYs}>
          <Icon name="staro" size={20} />
          <Text style={{fontSize: 18, marginLeft: 10}}>Các kì đánh giá</Text>
        </TouchableOpacity>
        <View style={styles.spacer} />
        <TouchableOpacity style={styles.itemContainer} onPress={logout}>
          <Icon name="key" size={20} />
          <Text style={{fontSize: 18, marginLeft: 10}}>Đăng xuất</Text>
        </TouchableOpacity>
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
  },
  avatar: {
    height: 150,
    width: 150,
    alignSelf: 'center',
    marginTop: -90,
    borderRadius: 20,
  },
  header: {
    backgroundColor: '#304D95',
    height: 200,
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  content: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginHorizontal: 30,
    borderRadius: 10,
    marginTop: 40,
  },
  itemContainer: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  spacer: {
    height: 1,
    backgroundColor: 'gray',
    marginHorizontal: 8,
  },
});
