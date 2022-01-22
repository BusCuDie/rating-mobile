import React, {useEffect, useState} from 'react';
import axios from 'axios';
import colors from '../../colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  View,
  TouchableOpacity,
  ScrollView,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
export default function ConservationScreen({route, navigation}) {
  const currentUser = route.params.currentUser;
  const [listCad, setListCad] = useState([]);
  useEffect(() => {
    axios
      .get('http://10.0.2.2:5000/api/users/')
      .then(res => {
        setListCad(res.data.filter(item => item._id != currentUser._id));
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={{uri: currentUser.avatar}} style={styles.avatar} />
        <Text style={styles.textHeader}>Cuộc trò chuyện</Text>
      </View>
      <ScrollView>
        {listCad.map(item => (
          <React.Fragment key={item._id.toString()}>
            <TouchableOpacity
              style={styles.itemList}
              onPress={() =>
                navigation.navigate('DetailConservationScreen', {
                  currentUser: currentUser,
                  otherUser: item,
                })
              }>
              <Image source={{uri: item.avatar}} style={styles.avatar} />
              <View style={styles.txtNameContainer}>
                <Text style={styles.txtName}>{item.name}</Text>
                <Text>{item.position}</Text>
              </View>
              <Icon name="twitch" size={30} style={styles.iconMess} />
            </TouchableOpacity>
            <View style={styles.spacer} />
          </React.Fragment>
        ))}
      </ScrollView>
      <TouchableOpacity
        style={styles.goBackContainer}
        onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
  
    backgroundColor: colors.TORY_BLUE,
    alignItems: 'center',
    paddingHorizontal: 30,
    height: 120,
  },
  avatar: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  textHeader: {
    color: colors.WHITE,
    fontSize: 20,
    fontWeight: 'bold',
  },
  goBackContainer: {
    position: 'absolute',
    top: 25,
    left: 30,
  },
  itemList: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: colors.WHITE,
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  spacer: {
    height: 1,
    backgroundColor: colors.TORY_BLUE,
  },
  txtNameContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
  },
  txtName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  iconMess: {
    marginRight: 10,
  },
});
