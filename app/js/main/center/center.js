/**
 * Created by wangxf on 2017/5/8.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    Image,
    ListView,
    TouchableHighlight,
    StyleSheet,
    Text,
    Alert,
    ScrollView,
    View,
    TouchableNativeFeedback
} from 'react-native';
import MasonryFirst from './masonry';
import ViewPager  from 'react-native-viewpager';
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
const BANNER_IMGS = [
    {src: require('../../../img/main/home_bg.jpg')},
    {src: require('../../../img/main/person_bg.jpg')},
    {src: require('../../../img/main/app_bg.jpg')}
];
class Center extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        var dataSource = new ViewPager.DataSource({
            pageHasChanged: (p1, p2) => p1 !== p2,
        });
        this.state = {
            dataSource: ds.cloneWithRows(tabDatas.tabs),
            imgs: dataSource.cloneWithPages(imgs.cards)
        };
    }

    render() {
        return (
            <View style={styles.continers}>
                <ViewPager
                    style={styles.viewpager}
                    dataSource={this.state.imgs}
                    renderPage={this._renderPage}
                    isLoop={true}
                    autoPlay={true}/>

                <ListView
                    initialListSize={6}
                    contentContainerStyle={styles.list_tab}
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow.bind(this)}
                />
            </View>

        );
    }

    _renderRow(tab) {
        return (
            <TouchableHighlight underlayColor="white" onPress={this._tabPress.bind(this)}>
                <View>
                    <View style={styles.row}>
                        <Image style={styles.thumb} source={tab.img}/>
                        <Text style={styles.text}>
                            {tab.title}
                        </Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }

    _renderPage(data) {
        return (
            <Image
                source={data.img}
                style={styles.page}/>
        );
    }

    _tabPress() {
        this.props.navigator.push({
            component: MasonryFirst,
        });
    }
}


const styles = StyleSheet.create({
    continers: {
        flex: 1,
    },
    list_hh: {
        flex: 1,
        width: '100%',
    },
    list_tab: {
        marginTop: 5,
        padding: 3,
        backgroundColor: '#e9e9e9',
        justifyContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    row: {
        justifyContent: 'center',
        padding: 5,
        margin: 3,
        width: 85,
        height: 85,
        alignItems: 'center',
    },
    thumb: {
        width: 45,
        height: 45
    },
    text: {
        flex: 1,
        marginTop: 5,
        fontWeight: 'bold'
    },
    page: {
        flex: 1,
        height: 400,
    },
    viewpager: {
        height: 400,
        flex: 1
    }
});
module.exports = Center;