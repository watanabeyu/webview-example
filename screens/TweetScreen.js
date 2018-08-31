import React from 'react';
import { View, Text, ScrollView, StyleSheet, WebView } from 'react-native';

import MyWebView from 'react-native-webview-autoheight';

export default class TweetScreen extends React.Component {
  static navigationOptions = {
    title: 'ツイート',
  };

  render() {
    const html = `
      <html>

      <head>
        <meta name="viewport" content="width=device-width" />
      </head>
      
      <body>
        <blockquote id="tweet" class="twitter-tweet">
          <a href="https://twitter.com/1000tea/status/${this.props.navigation.getParam("id", "0")}?ref_src=twsrc%5Etfw">August 31, 2018</a>
        </blockquote>
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      </body>
      
      </html>
    `

    return (
      <ScrollView style={styles.container}>
        <MyWebView
          source={{ html: html }}
          scrollEnabled={false}
          originWhitelist={["*"]}
          javaScriptEnabled
          domStorageEnabled
          automaticallyAdjustContentInsets
        />
        <Text>ツイートID：{this.props.navigation.getParam("id", "0")}</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
