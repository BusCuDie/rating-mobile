import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  LayoutAnimation,
  UIManager,
} from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/AntDesign';
import colors from '../../colors';
if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}
const Item = ({item}) => {
  const [toggle, setToggle] = React.useState(false);
  return (
    <View>
      <View
        style={toggle ? styles.itemContainerOpen : styles.itemContainerClose}>
        <View style={styles.topRow}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: 'red'}}>
            {item.status}
          </Text>
          <Text>{item.createTime.split('T')[0]}</Text>
        </View>
        {toggle || (
          <TouchableOpacity
            onPress={() => {
              LayoutAnimation.configureNext({
                duration: 300,
                create: {
                  type: LayoutAnimation.Types.easeInEaseOut,
                  property: LayoutAnimation.Properties.opacity,
                },
                update: {
                  type: LayoutAnimation.Types.easeInEaseOut,
                },
              });
              setToggle(!toggle);
            }}>
            <Text style={{color: colors.TORY_BLUE}}>Xem chi tiết {'>>>'}</Text>
          </TouchableOpacity>
        )}
      </View>
      {toggle && (
        <View style={styles.detailContainer}>
          <Text style={styles.detailTitle}>
            Tác phong làm việc:{' '}
            <Text style={styles.detailContent}>{item.atitude}</Text>
          </Text>
          <Text style={styles.detailTitle}>
            Khả năng xử lí:{' '}
            <Text style={styles.detailContent}>{item.ability}</Text>
          </Text>

          <Text style={styles.detailTitle}>
            Nhận xét: <Text style={styles.detailContent}>{item.detail}</Text>
          </Text>
          <TouchableOpacity
            onPress={() => {
              LayoutAnimation.configureNext({
                duration: 300,
                create: {
                  type: LayoutAnimation.Types.easeInEaseOut,
                  property: LayoutAnimation.Properties.opacity,
                },
                update: {
                  type: LayoutAnimation.Types.easeInEaseOut,
                },
              });
              setToggle(!toggle);
            }}
            style={{
              position: 'absolute',
              bottom: 5,
              right: 5,
            }}>
            <Text style={{color: colors.ROSE, fontWeight: 'bold'}}>
              {'<<<'} Thu gọn
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default function DetailRatingScreen({route, navigation}) {
  const currentUser = route.params.currentUser;
  const [data, setData] = React.useState([]);
  useEffect(() => {
    axios
      .get(`http://10.0.2.2:5000/api/users/${currentUser._id}/comments`)
      .then(res => {
        setData(res.data);
        console.log(typeof data[0].createTime);
      })
      .catch(err => console.log(err));
  }, [currentUser._id, data]);
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
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
          Đánh giá từ người dân
        </Text>
      </View>
      <ScrollView style={styles.container}>
        {data.map((item, index) => (
          <Item item={item} key={index} />
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
    backgroundColor: 'white',
  },
  itemContainerOpen: {
    marginHorizontal: 30,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: 70,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  detailContainer: {
    marginHorizontal: 30,
    backgroundColor: 'white',
    marginBottom: 8,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    height: 'auto',
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  itemContainerClose: {
    marginHorizontal: 30,
    backgroundColor: 'white',
    marginBottom: 8,
    borderRadius: 10,
    height: 70,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 10,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  detailTitle: {
    color: colors.TORY_BLUE,
    fontSize: 15,
  },
  detailContent: {
    color: 'black',
    fontSize: 14,
  },
});
