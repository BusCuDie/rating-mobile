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
import colors from '../../../colors';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
const SubItem = ({item}) => {
  return (
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
  );
};

const Item = ({item}) => {
  return (
    <View style={styles.itemContainer}>
      <Text>{item.asker}</Text>
      <Text style={styles.titleText}>{item.title}</Text>
      
      {item.answer.map((itemsub, indexsub) => (
        <SubItem item={itemsub} key={indexsub} />
      ))}
    </View>
  );
};
export default function FAQScreen({route}) {
  const [question, setQuestion] = React.useState('');
  const [data, setData] = React.useState([]);
  const currentUser = route.params.currentUser;
  React.useEffect(() => {
    axios
      .get(`http://10.0.2.2:5000/api/faqs/`)
      .then(res => {
        setData(res.data);
      })
      .catch(err => console.log(err));
  }, [data]);

  const onSend = () => {
    axios
      .post(`http://10.0.2.2:5000/api/faqs/create`, {
        title: question,
        asker: currentUser.name,
      })
      .then(() =>{
        Alert.alert('Thành công', 'Đã đặt câu hỏi thành công');
        setQuestion('');
      })
      .catch(err => Alert.alert(err));
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.topText}>Hỏi đáp</Text>
      </View>
      <View style={styles.headerContainer}>
        <TextInput
        value={question}
          multiline
          style={styles.headerInput}
          placeholder="Đặt câu hỏi"
          maxLength={200}
          onChangeText={text => setQuestion(text)}
        />
        <TouchableOpacity style={styles.sendQuestionButton} onPress={onSend}>
          <Text style={styles.sendQuestionText}>Đặt câu hỏi</Text>
        </TouchableOpacity>
        <View
          style={{
            height: 1,
            width: '90%',
            marginHorizontal: 20,
            backgroundColor: 'black',
            marginVertical: 20,
          }}
        />
      </View>
      <View>
        {data.map((item, index) => {
          return <Item item={item} key={index} />;
        })}
      </View>
    </ScrollView>
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
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    marginBottom: 20,
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
    marginBottom:20
  },
  titleText: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 15,
  },
  subItemContainer: {
    backgroundColor: colors.WHISKERS,
    padding: 10,
    marginBottom: 10,
    borderRadius: 20,
  },
});
