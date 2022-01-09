import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import colors from '../../colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import Card from './shared/Card';
import axios from 'axios';
export default function RatingScreen({route, navigation}) {
  const currentUser = route.params.currentUser;
  const [thaido, setThaido] = React.useState(null);
  const [khanang, setKhanang] = React.useState(null);
  const [hailong, setHailong] = React.useState(null);
  const [detail, setDetail] = React.useState('');
  const [point, setPoint] = React.useState(0);
  const isThaido = t => {
    setThaido(t);
  };

  const isKhanang = k => {
    setKhanang(k);
  };

  const isHailong = h => {
    setHailong(h);
  };

  const onSend = () => {
    setPoint(0);
    if (thaido == null || khanang == null || hailong == null) {
      Alert.alert('Cảnh báo', 'Vui lòng tick chọn đầy đủ vào ô đánh giá');
    } else {
      thaido ? setPoint(point => point) : setPoint(point => point + 1);
      hailong ? setPoint(point => point) : setPoint(point => point + 1);
      khanang ? setPoint(point => point) : setPoint(point => point + 1);
      console.log(point);
      axios
        .patch(`http://10.0.2.2:5000/api/users/rating/${currentUser._id}`, {
          point: point,
          status: hailong ? 'Hài lòng' : 'Chưa hài lòng',
          ability: khanang ? 'Tốt' : 'Chưa tốt',
          atitude: thaido ? 'Tốt' : 'Chưa tốt',
          detail: detail,
        })
        .then(() => {
          Alert.alert(
            'Cảm ơn bạn đã đánh giá',
            'Mỗi đóng góp của bạn là động lực để chúng tôi hoàn thiện',
          ),
            setDetail('');
          console.log(point);
        })
        .catch(err => Alert.alert(err));
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.TORY_BLUE} />

      <View style={styles.header}>
        <Text style={styles.headerText}>Đánh giá cán bộ</Text>
      </View>

      <ScrollView style={styles.contentContainer}>
        <Text style={styles.titleContent}>Bảng đánh giá cán bộ</Text>
        <Card
          question="Bạn cảm thấy tác phong làm việc của cán bộ có tốt không ?"
          onTick={isThaido}
        />
        <Card
          question="Khả năng xử lí công việc đã đạt yêu cầu ?"
          onTick={isKhanang}
        />
        <Card question="Bạn có hài lòng về cán bộ không?" onTick={isHailong} />
        <TextInput
          placeholder="Nhận xét chi tiết(không bắt buộc)"
          multiline
          value={detail}
          style={styles.textInput}
          maxLength={150}
          onChangeText={text => setDetail(text)}
        />
        <TouchableOpacity style={styles.buttonContainer} onPress={onSend}>
          <Text style={styles.buttonText}>Gửi</Text>
        </TouchableOpacity>
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
  buttonContainer: {
    backgroundColor: colors.TORY_BLUE,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    height: 50,
    borderRadius: 25,
    marginVertical: 20,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  textInput: {
    height: 200,
    marginHorizontal: 20,
    backgroundColor: 'white',
    padding: 20,
    textAlignVertical: 'top',
    borderRadius: 10,
  },
});
