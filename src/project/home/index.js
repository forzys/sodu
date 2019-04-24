/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
 
  showDialog=()=>{
    Alert.alert('联系',`声明：作品api来源网络，仅做练习使用\nEmail：irom@sina.cn `)
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>某度网盘搜索-说明：</Text>
        <Text style={styles.welcome}>1：数据来源 52sopan</Text>
        <Text style={styles.welcome}>2：输入关键词或网盘分享URL搜索</Text>
        <Text style={styles.welcome}>3：点击获取密码可查看加密密码</Text>
        <Text style={styles.welcome}>4：经测试输入URL获取密码概率很低</Text>
        <Text style={styles.welcome}>5：<Text style={{color:'#0078ff'}} onPress={this.showDialog}>交流反馈</Text></Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'80%',
    justifyContent: 'center',
    backgroundColor: '#fafafa',
    marginTop:-30,
    marginLeft:'auto',
    marginRight:'auto',
  },
  welcome: {
    fontSize: 13,
    margin: 10,
  },
});
