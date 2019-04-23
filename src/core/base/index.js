
import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import {
    // createStackNavigator,
    // createBottomTabNavigator,
    createAppContainer,
    createMaterialTopTabNavigator,
} from 'react-navigation'

import HomeTab from '../../project/home/index'
import FindTab from '../../project/find/index'

// 创建导航器
const CreateTab = createMaterialTopTabNavigator({
    Home: {
        screen: HomeTab,
        navigationOptions: () => ({
            tabBarLabel: '首页',
        })
    },
    Find: {
        screen: FindTab,
        navigationOptions: () => ({
        tabBarLabel: '发现',
        })
    }
}, {
    initialRouteName: 'Home',
    tabBarPosition: 'bottom',
    lazy: true,
    swipeEnabled: false,
    tabBarOptions: {
        activeTintColor: 'red',
        inactiveTintColor:'gray',
        style: {
          color:'#333',
          backgroundColor: '#fff',
        },
    }
})

// DrawerNavigator（RouteConfigs，DrawerNavigatorConfig）
//构造引用导航器
const CreaterTab = createAppContainer(CreateTab)

export default class App extends Component{
  render() {
    return (
        <CreaterTab />
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fafafa',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


