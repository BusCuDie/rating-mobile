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
import Icon from 'react-native-vector-icons/Fontisto';
import colors from '../../colors';

if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }
 
const Item = ({item}) => {
  const [open, setOpen] = React.useState(false);
  return (
    <View>
      <View style={styles.itemHeadContainer}>
        <Text style={styles.textItem}>
          Kì đánh giá: {item.kdg.split('T')[0]}
        </Text>
        <TouchableOpacity onPress={()=>{
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
            setOpen(!open)}}>
          <Icon name={open ? "angle-up" : "angle-down" } size={20} color="white" />
        </TouchableOpacity>
      </View>
      {open && (
        <View style={styles.itemBottomContainer}>
          <Text style={styles.bottomLabel}>Phẩm chất chính trị</Text>
          <View style={styles.bottomBox}>
            <Text style={styles.bottomContent}>{item.pcct}</Text>
          </View>
          <Text style={styles.bottomLabel}>Đạo đức lối sống</Text>
          <View style={styles.bottomBox}>
            <Text style={styles.bottomContent}>{item.ddls}</Text>
          </View>
          <Text style={styles.bottomLabel}>Năng lực công tác</Text>
          <View style={styles.bottomBox}>
            <Text style={styles.bottomContent}>{item.nlct}</Text>
          </View>
          <Text style={styles.bottomLabel}>Thái độ phục vụ nhân dân</Text>
          <View style={styles.bottomBox}>
            <Text style={styles.bottomContent}>{item.tdpv}</Text>
          </View>
          <Text style={styles.bottomLabel}>Khuyết điểm còn tồn đọng</Text>
          <View style={styles.bottomBox}>
            <Text style={styles.bottomContent}>{item.kdct}</Text>
          </View>
          <Text style={styles.bottomLabel}>Tự xếp loại</Text>
          <View style={styles.bottomBox}>
            <Text style={styles.bottomContent}>{item.txl}</Text>
          </View>
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
      .get(`http://10.0.2.2:5000/api/users/${currentUser._id}/youseftcomments`)
      .then(res => {
        setData(res.data);
      })
      .catch(err => console.log(err));
  }, []);
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
          marginBottom: 30,
        }}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            color: 'white',
          }}>
          Các kì đánh giá trong năm
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
  itemHeadContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    backgroundColor: colors.TORY_BLUE,
    marginBottom: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  textItem: {
    color: colors.WHITE,
    fontSize: 20,
    fontWeight: 'bold',
  },
  itemBottomContainer: {marginHorizontal: 20},
  bottomLabel: {
    fontWeight: '700',
    fontSize: 18,
    color: colors.BLAZE_ORANGE,
  },
  bottomContent: {
    fontSize: 16,
  },
  bottomBox: {
    marginBottom: 20,
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
