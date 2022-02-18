import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import colors from '../../colors';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
const SubItem = ({item}) => {
  return (
    <View
      style={{
        alignItems: 'flex-start',
      }}>
      <View style={styles.subItemContainer}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          {item.from}
        </Text>
        <Text>{item.content}</Text>
      </View>
    </View>
  );
};

const Item = ({item, name}) => {
  const [reply, setReply] = React.useState('');
  const onSend = () => {
    if (!reply) {
      Alert.alert('Cảnh báo', 'Vui lòng nhập câu trả lời');
    } else {
      axios.patch(`http://10.0.2.2:5000/api/faqs/${item._id}/answer`, {
        from: name,
        content: reply,
      });
      setReply('');
    }
  };
  return (
    <View style={styles.itemContainer}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
        }}>
        {item.asker}
      </Text>
      <Text style={styles.titleText}>{item.title}</Text>
      {item.answer.reverse().map((itemsub, indexsub) => (
        <SubItem item={itemsub} key={indexsub} />
      ))}
      <View style={styles.replyContainer}>
        <TextInput
          style={styles.replyInput}
          onChangeText={text => setReply(text)}
          placeholder="Nhập câu trả lời"
          multiline
        />
        <TouchableOpacity style={styles.replyButtonContainer} onPress={onSend}>
          <Text style={styles.replyButtonText}>Trả lời</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default function FAQScreen({route, navigation}) {
  const [question, setQuestion] = React.useState('');
  const [data, setData] = React.useState([]);
  const currentUser = route.params.currentUser;
  React.useEffect(() => {
    axios
      .get('http://10.0.2.2:5000/api/faqs/')
      .then(res => {
        setData(res.data);
      })
      .catch(err => console.log(err));
  }, [data]);

  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.topText}>Hỏi đáp</Text>
        </View>
        <ScrollView>
          {data.reverse().map((item, index) => {
            return <Item item={item} key={index} name={currentUser.name} />;
          })}
        </ScrollView>
      </View>
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
  },
  headerContainer: {
    marginHorizontal: 10,
  },
  topContainer: {
    backgroundColor: colors.TORY_BLUE,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topText: {
    color: colors.WHITE,
    fontSize: 25,
    fontWeight: 'bold',
  },
  headerInput: {
    height: 120,
    textAlignVertical: 'top',
    padding: 10,
    backgroundColor: colors.WHISKERS,
    borderRadius: 10,
  },
  sendQuestionButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    alignSelf: 'center',
    backgroundColor: colors.TORY_BLUE,
    borderRadius: 10,
    width: '70%',
    marginTop: 30,
  },
  sendQuestionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  itemContainer: {
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  titleText: {
    fontSize: 16,
    fontWeight: '400',
    color: 'red',
    marginBottom: 15,
  },
  subItemContainer: {
    backgroundColor: colors.WHISKERS,
    marginBottom: 10,
    padding: 10,
    borderRadius: 20,
  },
  replyContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  replyInput: {
    width: '70%',
    paddingHorizontal: 10,
    textAlignVertical: 'top',
    height: 60,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    borderWidth: 1,
  },
  replyButtonContainer: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.TORY_BLUE,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
  replyButtonText: {
    fontWeight: 'bold',
    fontSize: 20,
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
  },
});
