import React from 'react';
import { View, ScrollView, Text, StyleSheet, WebView } from 'react-native';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'グラフ',
  };

  render() {
    return (
      <View style={styles.container}>
        <WebView
          style={{ flex: 1, backgroundColor: 'transparent' }}
          source={require("./graph.html")}
          originWhitelist={['*']}
          javaScriptEnabled
          domStorageEnabled
          scalesPageToFit
          scrollEnabled={false}
          automaticallyAdjustContentInsets
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
