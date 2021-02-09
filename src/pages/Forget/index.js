import React, { Component } from "react";
import {View, Text,TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import {NavigationContext} from '@react-navigation/native';
import Button from "../../components/Button";

class ForgetScreen extends Component {
    static contextType = NavigationContext;


    render() {

        return (
            <View style={styles.container}>
                <TextInput clearButtonMode="always" keyboardType="number-pad" maxLength={20}  placeholder="请输入手机号码"
                           style={styles.textInput} />
                <View style={{flexDirection: 'row'}}>
                    <TextInput keyboardType="number-pad" placeholder="请输入短信验证码" style={styles.textInputVail} />
                    <Button label="获取验证码" styles={{flex:1,button: styles.primaryButton, label: styles.buttonWhiteText}} />
                </View>
                <TextInput secureTextEntry={true} placeholder="请输入新密码"  style={styles.textInput} />
                <Button label="确认重置" styles={{button: styles.resetButton, label: styles.buttonWhiteText}} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
    },
    textInput:{
        height: 60,
        fontSize: 18,
        backgroundColor: '#FFF',
        marginBottom:10
    },
    textInputVail:{
        flex:2,
        height: 60,
        fontSize: 18,
        backgroundColor: '#FFF',
        marginBottom:10,
        marginRight: 10
    },
    textStyle: {
        fontSize: 18,
        color: 'black',
        marginRight: 10
    },
    buttonBlackText: {
        fontSize: 20,
        color: '#595856'
    },
    buttonWhiteText: {
        fontSize: 20,
        color: '#FFF',
    },
    primaryButton: {
        backgroundColor: '#34A853',
        height:60
    },
    resetButton: {
        backgroundColor: '#34A853',
        height:60,
        marginTop:40
    }
});

export default ForgetScreen;