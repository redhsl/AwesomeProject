import React, { Component } from "react";
import {StyleSheet,Alert,ImageBackground, View, Text, TextInput, TouchableOpacity,ScrollView} from 'react-native';
import {NavigationContext} from '@react-navigation/native';
import Container from '../../components/Container';
import Button from '../../components/Button';
import Label from '../../components/Label';
import Details from '../Detail'
import Forget from '../Forget'

const image = { uri: "https://zh-hans.reactjs.org/logo-og.png" };


class HomeScreen extends Component {
    static contextType = NavigationContext;
    press() {
        this.context.navigate("Details")
    };
    state ={username:"",userpwd:""}
    /**
     * 登录进入主页面
     */
    loginInMainpage() {
        const {username, userpwd}=this.state;
        // 判断账号密码是否为空
        if (this.state.username === '' || this.state.userpwd === '') {
            Alert.alert('账号或密码不能为空');
            return;
        }
        this.context.navigate('Details',{username, userpwd});
    }



    render() {
        return (

            <ScrollView style={styles.scroll}>
                {/*<TouchableOpacity style={styles.button}
                                  onPress={() => {this.context.navigate("Details")}}>
                    <Text style={styles.btnText}>首页</Text>
                </TouchableOpacity>*/}


                <Container>
                    <Label text="用户名" />
                    <TextInput
                        ref="inputLoginName"
                        style={styles.textInput}
                        placeholder="请输入用户名"
                        clearTextOnFocus={true}
                        clearButtonMode="while-editing"
                        onChangeText={(input) => this.setState({username: input})}
                    />
                </Container>
                <Container>
                    <Label text="密码" />
                    <TextInput
                        ref="inputLoginPwd"
                        secureTextEntry={true}
                        style={styles.textInput}
                        placeholder="请输入密码"
                        clearTextOnFocus={true}
                        clearButtonMode="while-editing"
                        onChangeText={(input) => this.setState({userpwd: input})}
                    />
                </Container>
                <Container>
                    <Button
                        label="忘记账号/密码"
                        styles={{button: styles.alignRight, label: styles.label}} onPress={() => {this.context.navigate("Forget")}}
                        /* onPress={this.press.bind(this)}*/ />
                </Container>
                <View style={styles.footer}>
                    <Container>
                        <Button
                            label="登  录"
                            styles={{button: styles.primaryButton, label: styles.buttonWhiteText}}
                            onPress={()=>this.loginInMainpage()} />
                    </Container>
                    <Container>
                        <Button
                            label="取  消"
                            styles={{label: styles.buttonBlackText}}
                            onPress={this.press.bind(this)} />
                    </Container>
                </View>


            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 10
    },
    scroll: {
        //backgroundColor: '#E1D7D8',
        flex:1,
        padding: 30,
        flexDirection: 'column'
    },
    label: {
        color: '#0d8898',
        fontSize: 20
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    alignRight: {
        alignSelf: 'flex-end'
    },
    textInput: {
        height: 80,
        fontSize: 30,
        backgroundColor: '#FFF'
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
    },
    buttonWhiteText: {
        fontSize: 20,
        color: '#FFF',
    },
    buttonBlackText: {
        fontSize: 20,
        color: '#595856'
    },
    primaryButton: {
        backgroundColor: '#34A853'
    },
    footer: {
        marginTop: 30
    },
    btnText:{
        fontSize:18,
        color:'blue'
    }
});


export default HomeScreen;