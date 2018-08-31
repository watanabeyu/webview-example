import React from 'react';
import { View, ScrollView, StyleSheet, TouchableHighlight, Text } from 'react-native';

export default class TwitterScreen extends React.Component {
  static navigationOptions = {
    title: 'ツイート一覧',
  };

  onPress = (id = "0") => {
    this.props.navigation.push("Tweet", { id })
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.button} underlayColor="rgba(0,0,0,0.1)" onPress={() => this.onPress("1035323862181769217")}>
          <Text style={styles.text}>よおし今日のReact Native LT回の豪華LTメンバーを紹介するぜ…</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} underlayColor="rgba(0,0,0,0.1)" onPress={() => this.onPress("1035310789207289856")}>
          <Text style={styles.text}>うおー！今日はRN LT会だぞ！！皆雲霞のごとく押し寄せよ！</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} underlayColor="rgba(0,0,0,0.1)" onPress={() => this.onPress("1035025872112123904")}>
          <Text style={styles.text}>YouTubeが急にアナリティクス見せてくれたんだけど、先週26時間も…</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  button: {
    padding: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#ccc"
  },
  text: {
    fontSize: 16
  }
});
