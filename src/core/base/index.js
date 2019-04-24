
import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View,BackHandler ,ToastAndroid} from 'react-native';
import {
    // createStackNavigator,
    // createBottomTabNavigator,
    createAppContainer,
    createMaterialTopTabNavigator,
} from 'react-navigation'
import JPushModule from 'jpush-react-native'
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
  componentDidMount(){
    JPushModule.initPush()
    JPushModule.addReceiveNotificationListener((message) => {})
    this.backHandler = BackHandler.addEventListener('hardwareBackPress',     
    this.onBackButtonPressAndroid);
  }
  onBackButtonPressAndroid = () => {
       if ( this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) { 
        //最近2秒内按过back键，可以退出应用。
        return false; 
       } 
       this.lastBackPressed = Date.now();
       ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT); 
       return true;
  }
  componentWillUnmount() {
    this.backHandler&&this.backHandler.remove();
    JPushModule.removeReceiveNotificationListener();
   }
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


