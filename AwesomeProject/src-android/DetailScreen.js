import React, { Component } from 'react';
import axios from 'axios'
import {
  StyleSheet,
  FlatList,
  View,
  Image,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Card, CardItem, Text} from 'native-base';

import NewsCard from './NewsCard'

export default class DetailScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
    console.log('masuk')
  }

  render() {
    console.log(this.props.navigation.state.params.data)
    const { goBack } = this.props.navigation;
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => goBack()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Detail News</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Body>
                  <Text>
                    {this.props.navigation.state.params.data.title}
                  </Text>
                  <Text>By {this.props.navigation.state.params.data.author}</Text>
                  <Text note>{Date(this.props.navigation.state.params.data.publishedAt)}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{ uri: `${this.props.navigation.state.params.data.urlToImage}` }} style={{ height: 200, width: '100%', flex: 1 }} />
                <Text>
                  Description:
                </Text>
                <Text>
                  {this.props.navigation.state.params.data.description}
                </Text>
              </Body>
            </CardItem>
          </Card>
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