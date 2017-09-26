import React, { Component } from 'react';
import axios from 'axios'
import {
  StyleSheet,
  FlatList,
  View,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, } from 'native-base';

import NewsCard from './NewsCard'

export default class MainScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listNews: []
    }
  }

  static navigationOptions = {
    title: 'Welcome',
    header: null
  };

  getListNews() {
    axios.get('https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=606e524659524a41a1a759ac9dfd08a6')
      .then((response) => {
        let listNewsApi = response.data.articles
        this.setState({
          listNews: listNewsApi
        })
        console.log('list news', this.state.listNews)
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error)
      })
  }

  componentDidMount() {
    console.log('masuk')
    this.getListNews()
  }

  render() {
    const { goBack } = this.props.navigation;
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => goBack()}>
              <Icon name='arrow-back'/>
            </Button>
          </Left>
          <Body>
            <Title>News in Palm</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <FlatList data={this.state.listNews}
            renderItem={({ item }) => (
              <NewsCard item={item} navigation={this.props.navigation}/>
            )} />
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    margin: 20,
    marginBottom: 5,
  },
});