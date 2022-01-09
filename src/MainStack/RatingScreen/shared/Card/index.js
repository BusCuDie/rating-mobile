import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
export default function Card(props) {
  const [isYes, setisYes] = React.useState(false);
  const [isNo, setisNo] = React.useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>{props.question}</Text>
      <View style={styles.checkboxContainer}>
        <CheckBox
          disabled={false}
          value={isYes}
          onValueChange={newValue => {
            setisYes(newValue);
            setisNo(!newValue);
            props.onTick(newValue);
          }}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Có</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          disabled={false}
          value={isNo}
          onValueChange={newValue => {
            setisYes(!newValue);
            setisNo(newValue);
            props.onTick(!newValue);
          }}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Không</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    height: 150,
    padding: 10,
    marginBottom: 20,
  },
  questionText: {
    fontSize: 16,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
});
