import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';

import {
  Container,
  Content,
  List,
  ListItem,
  Text,
  Thumbnail,
  Icon,
  Button,
  Fab
} from 'native-base';

export class ProductList extends Component {
  static navigationOptions = {
    title: 'Product List',
    headerLeft: null
  };

  state = {
    data: []
  };

  async componentDidMount() {
    const result = await axios.get('http://192.168.0.9:3333/api/v1/products');
    this.setState({ data: result.data });
  }

  handlePressDelete = async product => {
    await axios.delete(`http://192.168.0.9:3333/api/v1/products/${product.id}`);

    const result = await axios.get('http://192.168.0.9:3333/api/v1/products');
    this.setState({ data: result.data });
  };

  handlePressAdd = async product => {
    await axios
      .post('http://192.168.0.9:3333/api/v1/products', product)
      .then(res => alert(JSON.stringify(res.data.status)));

    this.props.navigation.push('ProductList');
  };

  render() {
    const { navigate, push } = this.props.navigation;

    return (
      <Container>
        <Content>
          <List>
            {this.state.data.map(product => (
              <ListItem
                onPress={() => navigate('ProductDetail', product)}
                key={product.id}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center'
                  }}
                >
                  <Thumbnail
                    style={{ height: 100, flexBasis: 100 }}
                    source={{ uri: product.image }}
                  />
                  <Text style={{ fontSize: 20, marginLeft: 10 }}>
                    {product.name}
                  </Text>
                </View>
                <Button transparent>
                  <Icon
                    style={{ color: 'red' }}
                    onPress={() => this.handlePressDelete(product)}
                    name="trash"
                  />
                </Button>
              </ListItem>
            ))}
          </List>
        </Content>
        <View style={{ position: 'relative' }}>
          <Fab
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() =>
              push('ProductAdd', {
                onPressAdd: this.handlePressAdd
              })
            }
          >
            <Icon name="md-add" />
          </Fab>
        </View>
      </Container>
    );
  }
}

export default ProductList;
