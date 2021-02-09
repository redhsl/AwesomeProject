import React, { Component } from "react";
import {Platform,View, Text, StyleSheet} from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import WeChart from '../../components/WeChart'


class Page2 extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home2!</Text>
            </View>
        );
    }
};
class Page3 extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home3!</Text>
            </View>
        );
    }
};
class Page4 extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home4!</Text>
            </View>
        );
    }
};

export const BottomTab = createAppContainer(
    createBottomTabNavigator(
        {
            Page1: {
                screen: WeChart,
                navigationOptions: {
                    tabBarLabel: '微信',
                    tabBarIcon: ({ tintColor, focused }) => (
                        <MaterialIcons name={'home'} size={26} style={{ color: tintColor }} />
                    ),
                    tabBarOnPress: (event) => {
                        event.defaultHandler();
                    },
                },
            },
            Page2: {
                screen: Page2,
                navigationOptions: {
                    tabBarLabel: '通讯录',
                    tabBarIcon: ({ tintColor, focused }) => (
                        <MaterialIcons name={'account-box'} size={26} style={{ color: tintColor }} />
                    ),
                    tabBarOnPress: (event) => {
                        event.defaultHandler();
                    },
                },
            },
            Page3: {
                screen: Page3,
                navigationOptions: {
                    tabBarLabel: '发现',
                    tabBarIcon: ({ tintColor, focused }) => (
                        <MaterialIcons name={'location-on'} size={26} style={{ color: tintColor }} />
                    ),
                    tabBarOnPress: (event) => {
                        event.defaultHandler();
                    },
                },
            },
            Page4: {
                screen: Page4,
                navigationOptions: {
                    tabBarLabel: '我',
                    tabBarIcon: ({ tintColor, focused }) => (
                        <MaterialIcons name={'perm-identity'} size={26} style={{ color: tintColor }} />
                    ),
                    tabBarOnPress: (event) => {
                        event.defaultHandler();
                    },
                },
            },
        },
        {
            tabBarOptions: {
                /*设置活动选项卡标签的颜色*/
                activeTintColor: Platform.OS === 'ios' ? '#06C1AE' : '#06C1AE',
                // activeBackgroundColor: 'red',//活动选项卡的背景颜色。
                // inactiveTintColor: 'yellow',//非活动选项卡的标签和图标颜色。
                // inactiveBackgroundColor: 'pink',//非活动选项卡的背景颜色。
                // showLabel: true,//是否为标签显示标签，默认为true。
                showIcon: true,//是否显示选项卡的图标，默认为true。显示icon的话，labelStyle的的行高就要删掉
                // style: {},//标签栏的样式对象。
                labelStyle: {//选项卡标签的样式对象。
                    fontSize: 16,
                    //lineHeight: 46 // style和tabStyle都找不到垂直居中的属性，只能设置行高。
                },
                tabStyle: {},//选项卡的样式对象。
                // allowFontScaling: true,//标签字体是否应缩放以符合“文本大小”辅助功能设置，默认为true。
                // //覆盖forceInset道具 < SafeAreaView >。
                // // 默认为{bottom:'always', top:'never'}。可用键top | bottom | left | right随值提供'always' | 'never'。
                safeAreaInset: {
                    bottom: 'never',
                    top: 'always'
                },
            },
        },
    ),
);

const AppRouter = createStackNavigator({
    Home: {
        screen: BottomTab,
        navigationOptions: {
            header: null, //可以通过将header设为null来禁用StackNavigator的Navigation
        },
    },
});

export const AppCreateNavigator = createAppContainer(
    createSwitchNavigator(
        {
            AppRouter: AppRouter,
        },
        {
            initialRouteName: 'AppRouter',
        },
    ),
);
class DetailsScreen extends Component {
    render() {
        return (
            /*<View style={styles.container}>
                <Text style={styles.textStyle}>欢迎来到主界面</Text>
                <Text style={styles.textStyle}>您当前的用户名是：{this.props.route.params.username}</Text>
                <Text style={styles.textStyle}>您当前的密码是：{this.props.route.params.userpwd}</Text>
            </View>*/
            <AppCreateNavigator />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textStyle: {
        fontSize: 18,
        color: 'black',
        marginRight: 10
    }
});

export default DetailsScreen;
