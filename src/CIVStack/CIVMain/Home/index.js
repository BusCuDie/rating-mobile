import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  FlatList,
  StatusBar,
  ScrollView,
} from 'react-native';
import colors from '../../../colors';
import Icon from 'react-native-vector-icons/FontAwesome';
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

const horizontaldata = [
  {
    id: 112,
    title: 'THÔNG BÁO TIÊM CHỦNG',
    img: 'https://file1.dangcongsan.vn/data/0/images/2021/08/02/giangkpts/covid-tiem-vaccine.jpg',
  },
  {
    id: 113,
    title: 'GIẢM GIÁ TIỀN ĐIỆN',
    img: 'https://file1.dangcongsan.vn/data/0/images/2020/12/30/nguyenminh/251220khcovid.jpg',
  },
  {
    id: 114,
    title: 'AN TOÀN GIAO THÔNG',
    img: 'https://oto360.net/images/bai-viet/2_1.jpg',
  },
  {
    id: 115,
    title: 'Tin tức Covid-19 TPHCM',
    img: 'https://image.thanhnien.vn/w2048/Uploaded/2021/ayhunaa/2021_11_15/vinh-long-5889.jpg',
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
export default function CIVHome({route, navigation}) {
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
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={{
            position: 'absolute',
            top: 20,
            right: 20,
            elevation: 10,
          }}>
          <Icon name="share" color={colors.WHITE} size={25} />
        </TouchableOpacity>
      </View>

      <View style={styles.contentContainer}>
        <View>
          <Text
            style={{
              marginTop: 30,
              marginHorizontal: 30,
              fontSize: 20,
              fontWeight: 'bold',
              color: 'black',
            }}>
            Thông báo
          </Text>
          <FlatList
            data={horizontaldata}
            keyExtractor={item => item.id}
            horizontal
            renderItem={({item, index}) => (
              <>
                <View style={styles.horizontalflatlist}>
                  <Image
                    source={{uri: item.img}}
                    style={styles.horizontalflatlistimg}
                  />
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
                        navigation.navigate('DetailNew', {item: item})
                      }>
                      <Text style={{fontSize: 14, color: 'blue'}}>
                        Xem thông báo {'>>>'}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </>
            )}
          />
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
                        navigation.navigate('DetailNew', {item: item})
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
  },
  horizontalflatlist: {
    marginHorizontal: 20,
    marginTop: 30,
    paddingBottom: 20,
    overflow: 'hidden',
  },
  horizontalflatlistimg: {
    height: 150,
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
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
