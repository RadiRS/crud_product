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

export class ProductAdd extends Component {
  static navigationOptions = {
    title: 'Form Add Product'
  };

  state = {
    product: {
      name: '',
      shop: '',
      price: '',
      description: '',
      image: 'http://lorempixel.com/640/480'
    }
  };

  // handleChange = event => {
  //   const { name, value } = event.target;
  //   alert(name);
  //   // this.setState({ [this.state.product[name]]: value });
  //   // this.setState(Object.assign(this.state.product, { [name]: value }));
  // };

  render() {
    const { onPressAdd } = this.props.navigation.state.params;
    const { name } = this.state.product;
    const { product } = this.state;

    return (
      <Container>
        <Content padder>
          <Form>
            <Item style={{ marginBottom: 10 }} rounded>
              <Input
                onChangeText={name =>
                  this.setState(
                    Object.assign(this.state.product, { name: name })
                  )
                }
                style={{ fontSize: 20 }}
                placeholder="Name product"
              />
            </Item>
            {/* <Item style={{ marginBottom: 10 }} rounded>
              <Input
                style={{ fontSize: 20 }}
                placeholder="Image"
                onChangeText={image =>
                  this.setState(
                    Object.assign(this.state.product, { image: image })
                  )
                }
              />
            </Item> */}
            <Item style={{ marginBottom: 10 }} rounded>
              <Input
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
          onPress={() => onPressAdd(product)}
        >
          <Text style={{ fontSize: 20, color: 'white' }}>Add Product</Text>
        </Button>
      </Container>
    );
  }
}

export default ProductAdd;
