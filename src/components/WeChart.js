import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
} from 'react-native';

let data = require('./data.json');

export default class WeChart extends Component {

    render() {
        return (
            <FlatList
                data={data.data}
                numColumns ={3} // 一行3个
                renderItem={({item})=><GoodsList name={item.title} price={item.price} url={item.icon}/>}
                keyExtractor={item => item.key}
            />
        )
    }
}
class GoodsList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.goodsContainer}>
                <Image source={{uri:this.props.url}} style={styles.goodsImg}/>
                <View>
                    <Text>{this.props.name}</Text>
                    <Text style={styles.goodsPrice}>￥{this.props.price}</Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 20,
    },
    goodsContainer: {
        flex:1, // 空间平均分布
        alignItems: 'center',
    },
    goodsImg: {
        width: 80,
        height: 80,
        marginRight: 10
    },
    goodsPrice: {
        color: '#f00'
    }
})
