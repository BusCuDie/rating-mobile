import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  StatusBar,
  ScrollView,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../colors';
import axios from 'axios';
export default function RatingYourSeftScreen({route, navigation}) {
  const currentUser = route.params.currentUser;
  // const [rateData1, setRateData1] = React.useState('');
  // const [rateData2, setRateData2] = React.useState('');
  // const [rateData3, setRateData3] = React.useState('');
  // const onSend = () => {
  //   if (!rateData1 || !rateData2 || !rateData3) {
  //     Alert.alert('Cảnh báo', 'Vui lòng nhập đầy đủ', [
  //       {text: 'OK', onPress: () => console.log('OK Pressed')},
  //     ]);
  //   } else {
  //     axios
  //       .patch(
  //         `http://10.0.2.2:5000/api/cadres/ratingmyseft/${currentUser._id}`,
  //         {
  //           improve: rateData1,
  //           bad: rateData2,
  //           goal: rateData3,
  //         },
  //       )
  //       .then(res =>
  //         Alert.alert(
  //           'Cảm ơn bạn đã đánh giá',
  //           'Chúc bạn một ngày mới vui vẻ',
  //           [{text: 'OK', onPress: () => navigation.navigate('Profile')}],
  //         ),
  //       )
  //       .catch(err => Alert.alert(err));
  //   }
  // };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.TORY_BLUE} />

      <View style={styles.header}>
        <Text style={styles.headerText}>Cán bộ tự đánh giá</Text>
      </View>
      <ScrollView style={styles.contentContainer}>
        <Text style={styles.titleContent}>Phiếu tự đánh giá</Text>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>

          </Text>
          <TextInput style={styles.inputTag}/>
        </View>
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
    backgroundColor: colors.MERCURY,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
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
});
