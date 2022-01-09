import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  TouchableNativeFeedback,
  StatusBar,
  FlatList,
  ScrollView,
} from 'react-native';
import colors from '../../colors';
import Card from './shared/Card';

const data = [
  {
    id: 112,
    title: 'Tin tức Covid-19 TPHCM',
    img: 'https://image.thanhnien.vn/w2048/Uploaded/2021/ayhunaa/2021_11_15/vinh-long-5889.jpg',
  },
  {
    id: 113,
    title: 'Giữ gìn sức khỏe 5k',
    img: 'https://sgtvt.thanhhoa.gov.vn/ashx/BaiViet.ashx?IDTinTuc=6289',
  },
  {
    id: 114,
    title: 'Ra mắt tổ an toàn covid',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0wmqNYyoUvpjWKiAq4hwGKYCouEQJvB2e1Q&usqp=CAU',
  },
  {
    id: 115,
    title: 'Dự kiến cho học sinh đi học lại',
    img: 'https://photo-cms-sggp.zadn.vn/w580/Uploaded/2021/bsugpivp/2021_06_02/gd_chkk.jpg',
  },
  {
    id: 116,
    title: 'Tin tức Covid-19 TPHCM',
    img: 'https://image.thanhnien.vn/w2048/Uploaded/2021/ayhunaa/2021_11_15/vinh-long-5889.jpg',
  },
  {
    id: 117,
    title: 'Tin tức Covid-19 TPHCM',
    img: 'https://image.thanhnien.vn/w2048/Uploaded/2021/ayhunaa/2021_11_15/vinh-long-5889.jpg',
  },
  {
    id: 118,
    title: 'Tin tức Covid-19 TPHCM',
    img: 'https://image.thanhnien.vn/w2048/Uploaded/2021/ayhunaa/2021_11_15/vinh-long-5889.jpg',
  },
  {
    id: 119,
    title: 'Tin tức Covid-19 TPHCM',
    img: 'https://image.thanhnien.vn/w2048/Uploaded/2021/ayhunaa/2021_11_15/vinh-long-5889.jpg',
  },
];
export default function HomeScreen({route, navigation}) {
  const currentUser = route.params.currentUser;

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.TORY_BLUE} />

      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.avatarContainer}
          onPress={() =>
            navigation.navigate('Profile', {currentUser: currentUser})
          }>
          <Image source={{uri: currentUser.avatar}} style={styles.avatar} />
        </TouchableOpacity>
        <View style={styles.nameHeaderContainer}>
          <Text style={{fontSize: 16, color: 'white'}}>Xin chào,</Text>
          <Text style={{fontSize: 20, color: 'white'}}>{currentUser.name}</Text>
        </View>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.cardContainer}>
          <Card
            name="star"
            startColor={'#2D85F4'}
            midColor={'#3592FA'}
            endColor={'#F15A67'}
            onPress={() =>
              navigation.navigate('Rating', {
                currentUser: currentUser,
              })
            }
            title="Đánh giá"
          />
          <Card
            name="align-center"
            startColor={'#26CDBA'}
            midColor={'#34D5B5'}
            endColor={'#FFEBEC'}
            onPress={() => Alert.alert('Đã press')}
            onPress={() =>
              navigation.navigate('Rank', {
                currentUser: currentUser,
              })
            }
            title="Xếp hạng"
          />
          <Card
            name="pencil"
            startColor={'#FF6C66'}
            midColor={'#3592FA'}
            endColor={'#5ABEFC'}
            onPress={() =>
              navigation.navigate('RatingYourSeft', {
                currentUser: currentUser,
              })
            }
            title="Tự chấm"
          />
        </View>
        <View style={styles.centalContainer}>
          <TouchableOpacity
            style={styles.faqContainer}
            onPress={() =>
              navigation.navigate('FAQCAD', {
                currentUser: currentUser,
              })
            }>
            <Text style={styles.centalText}>Hỏi đáp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.chatContainer}>
            <Text style={styles.chatText}>Trò chuyện</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text
            style={{
              marginTop: 30,
              marginHorizontal: 30,
              fontSize: 20,
              fontWeight: 'bold',
              color: 'black',
            }}>
            Tin tức hàng ngày
          </Text>
          <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => (
              <ScrollView>
                <View style={styles.flatlistContainer}>
                  <Image source={{uri: item.img}} style={styles.flatlistimg} />
                  <View
                    style={{
                      marginLeft: 15,
                    }}>
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: 'bold',
                        color: 'black',
                      }}>
                      {item.title}
                    </Text>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('CIVStack', {
                          screen: 'DetailNew',
                          params: {
                            item: item,
                          },
                        })
                      }>
                      <Text style={{fontSize: 14, color: 'blue'}}>
                        Xem chi tiết {'>>>'}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </ScrollView>
            )}
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: colors.TORY_BLUE,
    alignItems: 'center',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    paddingHorizontal: 30,
    height: 100,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 30,
  },
  avatar: {
    height: 80,
    width: 80,
    marginRight: 20,
    borderRadius: 40,
  },
  cardContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  centalContainer: {
    flexDirection: 'row',
    height: 140,
    borderRadius: 10,
    marginHorizontal: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  faqContainer: {
    width: '60%',
    backgroundColor: colors.BRIGHT_SUN,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  centalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  chatContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%',
    backgroundColor: colors.TORY_BLUE,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  chatText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
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
