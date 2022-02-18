import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../colors';
import axios from 'axios';
const {width, height} = Dimensions.get('window');
export default function DetailConservationScreen({route, navigation}) {
  const {currentUser, otherUser} = route.params;
  const [message, setMessage] = useState([]);
  const [textMess, setTextMess] = useState('');
  useEffect(() => {
    axios
      .get(
        `http://10.0.2.2:5000/api/conservation/getAllMessage/${currentUser._id}/${otherUser._id}`,
      )
      .then(res => {
        if (res.data) {
          setMessage(res.data.message.reverse());
        } else {
          setMessage([]);
        }
      })
      .catch(err => {
        console.log(err);
        setMessage([]);
      });
  }, [currentUser._id, message, otherUser._id]);

  const _onPress = () => {
    if (textMess && textMess.length > 0) {
      axios
        .put('http://10.0.2.2:5000/api/conservation/insert', {
          userOneId: currentUser._id,
          userSecondId: otherUser._id,
          senderId: currentUser._id,
          content: textMess,
        })
        .then(() => {
          setTextMess('');
        })
        .catch(err => console.log(err));
    } else {
      Alert.alert('Cảnh báo', 'Vui lòng nhập tin nhắn');
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.viewHeader}>
        <Image source={{uri: otherUser.avatar}} style={styles.avatar} />
        <View style={styles.txtHeaderContainer}>
          <Text style={styles.txtHeader}>{otherUser.name}</Text>
          <Text style={styles.textActive}>Đang hoạt động</Text>
        </View>
      </View>
      <FlatList
        inverted
        style={styles.flatList}
        data={message}
        keyExtractor={item => item._id}
        renderItem={({item, index}) => (
          <View
            key={index.toString()}
            style={{
              maxWidth: width / 2,
              marginVertical: 5,
              alignSelf:
                item.senderId === currentUser._id ? 'flex-end' : 'flex-start',
            }}>
            <View
              style={{
                borderRadius: 20,
                backgroundColor:
                  item.senderId === currentUser._id
                    ? colors.TORY_BLUE
                    : colors.SEASHELL,
              }}>
              <Text
                style={{
                  color:
                    item.senderId === currentUser._id
                      ? colors.WHITE
                      : colors.BLACK,
                  fontSize: 16,
                  padding: 10,
                  fontWeight: '500',
                }}>
                {item.content}
              </Text>
            </View>
          </View>
        )}
      />
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Nhập tin nhắn"
          style={styles.input}
          multiline
          value={textMess}
          onChangeText={text => setTextMess(text)}
        />
        <TouchableOpacity style={styles.iconContainer} onPress={_onPress}>
          <Icon name="send" size={23} color={colors.TORY_BLUE} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.goBackContainer}
        onPress={() => navigation.goBack()}>
        <Icon name="arrow-right" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  viewHeader: {
    flexDirection: 'row',
    backgroundColor: colors.TORY_BLUE,
    alignItems: 'center',
    paddingHorizontal: 30,
    height: 100,
  },
  avatar: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  txtHeaderContainer: {
    flex: 1,
    flexDirection: 'column',
    height: 60,
    marginLeft: 15,
  },
  txtHeader: {
    fontWeight: 'bold',
    color: colors.WHITE,
    fontSize: 20,
  },
  textActive: {
    fontWeight: 'bold',
    color: colors.WHITE,
    fontSize: 14,
  },
  goBackContainer: {
    position: 'absolute',
    top: 30,
    right: 30,
  },
  flatList: {
    flex: 1,
    backgroundColor: colors.WHITE,
    paddingHorizontal: 15,
  },
  inputContainer: {
    backgroundColor: colors.ALTO_LIGHT,
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 15,
    marginTop: 5,
  },
  input: {
    flex: 1,
    paddingHorizontal: 12,
    fontSize: 17,
    height: 50,
    paddingVertical: 8,
  },
  iconContainer: {
    width: 50,
    // backgroundColor: colors.DOVE_GRAY,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    marginLeft: 10,
  },
});
