/**
 * Created by wangxf on 2017/5/8.
 */
import React, { Component } from 'react';
import {
    SectionList,
    View,
    Text
} from 'react-native';
var ViewPagers = require('../../model/viewpager');
var MenuList = require('../../model/MenuList');
var HomeListView = require('../../list/HomeList');
var ProgressBar = require('../../model/ProgressBar');
import Http from '../../utils/http';
var tabDatas = {
    "tabs": [
        {
            "img": require("../../../img/main/center/icon/1108187.png"),
            "title": "语音控制"
        },
        {
            "img": require("../../../img/main/center/icon/1110055.png"),
            "title": "个人信息"
        },
        {
            "img": require("../../../img/main/center/icon/1126308.png"),
            "title": "电话管理"
        },
        {
            "img": require("../../../img/main/center/icon/1126309.png"),
            "title": "语音输入"
        },
        {
            "img": require("../../../img/main/center/icon/1180648.png"),
            "title": "水滴显示"
        },
        {
            "img": require("../../../img/main/center/icon/1185229.png"),
            "title": "通讯录"
        }
    ]
};
var imgs = {
    "cards": [
        {
            "img": require("../../../img/main/center/bg/8b328bb3ac650a7f0e5b5207c4c0679c.jpg"),
        },
        {
            "img": require("../../../img/main/center/bg/9a1583fa83e9ca863efc13f64c91aa7f.jpg"),
        },
        {
            "img": require("../../../img/main/center/bg/9cb2d55e6a563d72e84b0304b13722e9.jpg"),
        },
        {
            "img": require("../../../img/main/center/bg/9e975419fd18e06e58af25fe2f088769.jpg"),
        },
        {
            "img": require("../../../img/main/center/bg/15cff0abcc60b6db36993d9c7c81ff27.jpg"),
        },
        {
            "img": require("../../../img/main/center/bg/5404a72869401b3b3f25e8b1.jpg"),
        }
    ]
};
class Center extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            moviesData: null
        }
    }

    componentDidMount() {
        this.getMovies();
    }

    render() {
        var sections = [];
        var viewPagerCard = <ViewPagers navigator={this.props.navigator} data={imgs.cards} />;
        var menuListCard = <MenuList navigator={this.props.navigator} data={tabDatas.tabs} />;
        var movieList = null;
        if (this.state.isLoading) {
            movieList = <ProgressBar />;
        } else {
            movieList = <HomeListView sourceData={this.state.moviesData} navigator={this.props.navigator} />;
        };

        var cards = [];
        cards.push({
            card: viewPagerCard,
        });
        cards.push({
            card: menuListCard,
        });
        cards.push({
            card: movieList,
        });
        sections.push({ key: 0, data: cards });
        return (
            <View style={{ flex: 1 }}>
                <SectionList
                    renderItem={this._renderItem}
                    keyExtractor={this._extraUniqueKey}
                    sections={sections} />
            </View>
        );
    }

    _extraUniqueKey(item, index) {
        return "index" + index + item;
    }
    _renderItem(info) {
        return info.item.card;
    }
    getMovies() {
        var url = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';
        // this.setState({
        // isLoading: false,
        // moviesData: require('../../../data/movies.json').movies
        // });
        Http.getJson(url, (moviesRes) => {
            this.setState({
                isLoading: false,
                moviesData: moviesRes.movies
            });
        });
    }
};
module.exports = Center;