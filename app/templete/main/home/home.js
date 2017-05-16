/**
 * Created by wangxf on 2017/5/8.
 */
import React, {Component} from 'react';
import {
    Alert,
    Text,
} from 'react-native';
import Http from '../../utils/http';
import HomeListView from '../../list/HomeList';
import ProgressBar from '../../model/ProgressBar';
class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            /*1设置初始值*/
            isLoading: true,
            moviesData: null
        }
    }

    componentDidMount() {
        this.getMovies();
    }

    render() {
        if (this.state.isLoading) {
            return (<ProgressBar />);
        }
        return (
            <HomeListView sourceData={this.state.moviesData} navigator={this.props.navigator}/>
        );
    }

    getMovies() {
        var url = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';
        // this.setState({
        //     isLoading: false,
        //     moviesData: require('../../../data/movies.json').movies
        // });
        Http.getJson(url, (moviesRes) => {
            this.setState({
                isLoading: false,
                moviesData: moviesRes.movies
            });
        });
    }
}
module.exports = Home;