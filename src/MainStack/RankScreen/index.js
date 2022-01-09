import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  StatusBar,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../colors';
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';
export default function RatingYourSeftScreen({route, navigation}) {
  const currentUser = route.params.currentUser;
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    axios
      .get(`http://10.0.2.2:5000/api/users/`)
      .then(res => {
        res.data.sort((a, b) => Number(b.ratepoint) - Number(a.ratepoint));
        setData(res.data);
        console.log(data);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.TORY_BLUE} />
      <View style={styles.header}>
        <Text style={styles.headerText}>Xếp hạng thi đua tháng</Text>
      </View>

      <View style={styles.contentContainer}>
        <ScrollView style={styles.listContainer}>
          {data.map((item, index) => {

            return (
              <React.Fragment key={index} >
              <View
                style={[styles.itemContainer]}
                >
                <Image
                  source={{uri: item.avatar}}
                  style={styles.itemImg}
                  resizeMode="contain"
                />
                <View style={styles.itemLeftContainer}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: '700',
                      color: item._id == currentUser._id ?"green" :"black"
                    }}>
                    {item._id == currentUser._id ?"Bạn" :item.name}
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '700',
                      color:  item._id == currentUser._id ?"green" :"black"
                    }}>
                    Điểm: {item.ratepoint}
                  </Text>
                </View>
                <View style={styles.rankContainer}>
                  <Text style={styles.rankText}>{index + 1}</Text>
                </View>
              </View>
              <View style={{
                  height: 1,
                  width: '90%',
                  alignSelf:'center',
                  backgroundColor:colors.BLACK
                }}/>
           </React.Fragment>
            );
          })}
        </ScrollView>
      </View>
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
    backgroundColor: colors.TORY_BLUE,
  },
  header: {
    height: 70,
    backgroundColor: colors.TORY_BLUE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: colors.TORY_BLUE,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 50,
  },
  headerText: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
  },
  goBackContainer: {
    position: 'absolute',
    top: 25,
    left: 30,
  },
  titleContent: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginVertical: 30,
  },
  img: {
    height: 80,
    width: 80,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 20,
    marginHorizontal: 10,
    borderRadius: 10,
    paddingVertical: 10,
  },
  listContainer: {
  backgroundColor:'white',
    //  marginHorizontal: 8,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    flex: 1,
    paddingTop: 20,

  },
  itemImg: {
    height: 60,
    width: 60,
    borderRadius: 40,
  },
  itemLeftContainer: {
    marginLeft: 10,
  },
  rankContainer: {
    position: 'absolute',
    top: 5,
    right: 5,
    padding: 10,
    height: 40,
    width: 40,
    backgroundColor: colors.BRIGHT_SUN,
    borderRadius: 20,
    justifyContent:'center',
    alignItems:'center'
  },
  rankText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
});
