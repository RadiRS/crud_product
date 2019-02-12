import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Textarea,
  Button
} from 'native-base';
import Axios from 'axios';

export class ProductUpdate extends Component {
  state = {
    product: {
      name: '',
      shop: '',
      price: '',
      description: '',
      image: 'http://lorempixel.com/640/480'
    }
  };

  componentDidMount() {
    const {
      name,
      shop,
      price,
      description
    } = this.props.navigation.state.params;

    this.setState(
      Object.assign(this.state.product, {
        name,
        shop,
        price,
        description
      })
    );
  }

  handlePressUpdate = async product => {
    const { id } = this.props.navigation.state.params;
    await Axios.patch(
      `http://192.168.0.9:3333/api/v1/products/${id}`,
      product
    ).then(res => alert(JSON.stringify(res.data.status)));

    this.props.navigation.push('ProductDetail', product);
    // this.props.navigation.goBack();
  };

  render() {
    const { product } = this.state;
    const { name, price, shop, description } = this.state.product;

    return (
      <Container>
        <Content padder>
          <Form>
            <Item style={{ marginBottom: 10 }} rounded>
              <Input
                value={name}
                onChangeText={name =>
                  this.setState(
                    Object.assign(this.state.product, { name: name })
                  )
                }
                style={{ fontSize: 20 }}
                placeholder="Name product"
              />
            </Item>
            <Item style={{ marginBottom: 10 }} rounded>
              <Input
                value={shop}
                style={{ fontSize: 20 }}
                placeholder="Shop"
                onChangeText={shop =>
                  this.setState(
                    Object.assign(this.state.product, { shop: shop })
                  )
                }
              />
            </Item>
            <Item style={{ marginBottom: 10 }} rounded>
              <Input
                value={price.toString()}
                style={{ fontSize: 20 }}
                placeholder="Price"
                onChangeText={price =>
                  this.setState(
                    Object.assign(this.state.product, { price: price })
                  )
                }
              />
            </Item>
            <Item rounded>
              <Textarea
                value={description}
                style={{ flex: 1, fontSize: 20 }}
                rowSpan={10}
                placeholder="Description"
                onChangeText={description =>
                  this.setState(
                    Object.assign(this.state.product, {
                      description: description
                    })
                  )
                }
              />
            </Item>
          </Form>
        </Content>
        <Button
          style={{ marginHorizontal: 10, marginBottom: 10 }}
          block
          rounded
          onPress={() => this.handlePressUpdate(product)}
        >
          <Text style={{ fontSize: 20, color: 'white' }}>Update Product</Text>
        </Button>
      </Container>
    );
  }
}

export default ProductUpdate;
