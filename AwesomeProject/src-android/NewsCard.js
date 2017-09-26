import React, { Component } from 'react';
import {
  Stylesheet,
  View,
  Image
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import { Button, Card, CardItem, Left, Body, Text} from 'native-base'

export default class NewsCard extends Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <View>
        <Card style={{ flex: 0 }}>
          <CardItem>
            <Left>
              {/* <Thumbnail source={{uri: 'http://placehold.it/350x350.jpg'}} /> */}
              <Body>
                <Text>{this.props.item.author}</Text>
                <Text note>{Date(this.props.item.publishedAt)}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Body>
              <Image source={{ uri: `${this.props.item.urlToImage}` }} style={{ height: 200, width: '100%', flex: 1 }} />
              <Text>
                {this.props.item.title}
              </Text>
              <Button block onPress={() => this.props.navigation.navigate('Welcome')}>
                <Text>Detail</Text>
              </Button>
            </Body>
          </CardItem>
        </Card>
      </View>
    )
  }
}