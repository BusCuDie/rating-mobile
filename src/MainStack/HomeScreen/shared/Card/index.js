import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function Card(props) {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <LinearGradient
        start={{x: 0, y: 1}}
        end={{x: 1, y: 0}}
        colors={[props.startColor, props.midColor, props.endColor]}
        style={styles.linearGradient}>
        <View style={styles.iconContainer}>
          <Icon name={props.name} size={30} color={props.startColor} />
        </View>
        <Text style={styles.buttonText}>{props.title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  linearGradient: {
    height: 140,
    width: 120,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 12,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  iconContainer: {
    height: 60,
    width: 60,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign:'center'
  },
});
