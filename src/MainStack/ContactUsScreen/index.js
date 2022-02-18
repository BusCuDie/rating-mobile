import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import colors from '../../colors';
import axios from 'axios';
export default function ContactUsScreen({route, navigation}) {
  const [contactUs, setContactUs] = useState([]);
  useEffect(() => {
    axios
      .get('http://10.0.2.2:5000/api/contactus/')
      .then(res => {
        setContactUs(res.data);
      })
      .catch(err => console.log(err));
  }, [contactUs]);
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.txtHeader}>Tiếp nhận phản ánh</Text>
      </View>
      <ScrollView style={{marginTop: 10, backgroundColor: colors.WHITE}}>
        {contactUs.map(item => (
          <View key={item._id} style={styles.itemContactUs}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: 'bold',
                color: colors.TORY_BLUE,
              }}>
              {item.title}
            </Text>
            <Text>{item.content}</Text>
            <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 20}}>
              Thông tin người gửi
            </Text>
            <View>
              <Text style={{fontSize: 15, color: 'red'}}>
                Họ tên: {item.name}
              </Text>
              <Text style={{fontSize: 15, color: 'red'}}>
                Liên lạc: {item.phone}
              </Text>
            </View>
            <View
              style={{
                height: 1,
                backgroundColor: colors.BLACK,
                width: '80%',
                alignSelf: 'center',
                marginTop: 20,
              }}
            />
          </View>
        ))}
      </ScrollView>
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
    backgroundColor: colors.WHITE,
  },
  headerContainer: {
    backgroundColor: '#304D95',
    height: 150,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
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
  itemContactUs: {
    marginHorizontal: 15,
    padding: 8,
    shadowColor: '#000',
    marginBottom: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
  },
});
