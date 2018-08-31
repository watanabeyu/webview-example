import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Alert,
  WebView
} from 'react-native';
import { ImagePicker, Constants, Permissions } from 'expo';

import QRdecoder from 'react-native-qrimage-decoder';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "QRイメージデコード",
  };

  constructor(props) {
    super(props);

    this.state = {
      src: null,
      uri: null
    }
  }

  onPress = async () => {
    const permissions = Permissions.CAMERA_ROLL;
    const { status } = await Permissions.askAsync(permissions);

    if (status) {
      const result = await ImagePicker.launchImageLibraryAsync();

      this.setState({ src: result.uri })
    }
  }

  onSuccess = (data) => {
    Alert.alert('成功', data);

    if (data.match(/http(s)?.+/)) {
      this.setState({ src: null, uri: data })
    } else {
      this.setState({ src: null, uri: null })
    }
  }

  onError = (data) => {
    Alert.alert('エラー', data);
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={this.onPress}>
          <Text style={styles.text}>カメラロールから読み込む</Text>
        </TouchableOpacity>

        {this.state.uri && <WebView
          style={{ flex: 1 }}
          source={{ uri: this.state.uri }}
          scrollEnabled={false}
          originWhitelist={["*"]}
          javaScriptEnabled
          domStorageEnabled
          automaticallyAdjustContentInsets
        />}
        <QRdecoder src={this.state.src} onSuccess={this.onSuccess} onError={this.onError} />
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
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#ccc",
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  text: {
    fontSize: 16
  }
});
