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
import DateTimePicker from '@react-native-community/datetimepicker';

export default function RatingYourSeftScreen({route, navigation}) {
  const currentUser = route.params.currentUser;
  const [rateData1, setRateData1] = React.useState('');
  const [rateData2, setRateData2] = React.useState('');
  const [rateData3, setRateData3] = React.useState('');
  const [rateData4, setRateData4] = React.useState('');
  const [rateData5, setRateData5] = React.useState('');
  const [rateData6, setRateData6] = React.useState('');
  const [date, setDate] = React.useState(new Date(1598051730000));
  const [show, setShow] = React.useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };
  const onSend = () => {
    if (!rateData1 || !rateData2 || !rateData3 || !rateData4 || !rateData5) {
      Alert.alert('Cảnh báo', 'Vui lòng nhập đầy đủ', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    } else {
      axios
        .patch(
          `http://10.0.2.2:5000/api/users/ratingmyseft/${currentUser._id}`,
          {
            kdg:date,
            pcct: rateData1,
            ddls: rateData2,
            nlct: rateData3,
            tdpv: rateData4,
            kdct: rateData5,
            txl: rateData6,
          },
        )
        .then(res =>
          Alert.alert(
            'Cảm ơn bạn đã đánh giá',
            'Chúc bạn một ngày mới vui vẻ',
            [{text: 'OK', onPress: () => navigation.navigate('Profile')}],
          ),
        )
        .catch(err => Alert.alert(err));
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.TORY_BLUE} />
      <View style={styles.header}>
        <Text style={styles.headerText}>Cán bộ tự đánh giá</Text>
      </View>
      <ScrollView style={styles.contentContainer}>
        <Text style={styles.titleContent}>Phiếu tự đánh giá</Text>
        <View style={styles.dateBox}>
          <Text style={[styles.inputLabel, {marginLeft: 0}]}>Kì đánh giá</Text>
          <TouchableOpacity
            onPress={() => setShow(!show)}
            style={styles.dateContainer}>
            <Icon name="calendar" size={20} />
            <Text
              style={{
                fontSize: 16,
                marginLeft: 10,
                color: 'red',
                fontWeight: '700',
              }}>
              {date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear()}
            </Text>
          </TouchableOpacity>
        </View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={'date'}
            is24Hour={true}
            display="spinner"
            onChange={onChange}
          />
        )}
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>Về phẩm chất chính trị</Text>
          <TextInput
            style={styles.inputTag}
            multiline
            placeholder="Viết ngắn gọn"
            maxLength={200}
            onChangeText={text => {
              setRateData1(text);
            }}
          />
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>Về đạo đức lối sống</Text>
          <TextInput
            style={styles.inputTag}
            multiline
            placeholder="Viết ngắn gọn"
            maxLength={200}
            onChangeText={text => {
              setRateData2(text);
            }}
          />
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>Về năng lực công tác</Text>
          <TextInput
            style={styles.inputTag}
            multiline
            placeholder="Viết ngắn gọn"
            maxLength={200}
            onChangeText={text => {
              setRateData3(text);
            }}
          />
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>Thái độ phục vụ nhân dân</Text>
          <TextInput
            style={styles.inputTag}
            multiline
            placeholder="Viết ngắn gọn"
            maxLength={200}
            onChangeText={text => {
              setRateData4(text);
            }}
          />
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>Những khuyết điểm cần cải thiện</Text>
          <TextInput
            style={styles.inputTag}
            multiline
            placeholder="Viết ngắn gọn"
            maxLength={200}
            onChangeText={text => {
              setRateData5(text);
            }}
          />
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>Tự xếp loại bản thân</Text>
          <TextInput
            style={[styles.inputTag, {height: 80}]}
            multiline
            placeholder="(Tốt-Tạm-Chưa tốt)"
            maxLength={10}
            onChangeText={text => {
              setRateData6(text);
            }}
          />
        </View>
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
  inputBox: {
    marginHorizontal: 20,
    marginBottom: 50,
  },
  inputLabel: {
    fontSize: 16,
    marginLeft: 8,
    marginBottom: 8,
    fontWeight: '700',
  },
  inputTag: {
    height: 190,
    width: '100%',
    backgroundColor: 'white',
    textAlignVertical: 'top',
    padding: 20,
    borderRadius: 20,
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
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
  },
  dateBox: {
    marginHorizontal: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
});
