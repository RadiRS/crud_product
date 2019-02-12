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
  render() {
    return (
      <Container>
        <Content padder>
          <Form>
            <Item style={{ marginBottom: 10 }} rounded>
              <Input style={{ fontSize: 20 }} placeholder="Name product" />
            </Item>
            <Item style={{ marginBottom: 10 }} rounded>
              <Input style={{ fontSize: 20 }} placeholder="Image" />
            </Item>
            <Item style={{ marginBottom: 10 }} rounded>
              <Input style={{ fontSize: 20 }} placeholder="Shop" />
            </Item>
            <Item style={{ marginBottom: 10 }} rounded>
              <Input style={{ fontSize: 20 }} placeholder="Price" />
            </Item>
            <Item rounded>
              <Textarea
                style={{ flex: 1, fontSize: 20 }}
                rowSpan={5}
                placeholder="Description"
              />
            </Item>
          </Form>
        </Content>
        <Button
          style={{ marginHorizontal: 10, marginBottom: 10 }}
          block
          rounded
        >
          <Text style={{ fontSize: 20, color: 'white' }}>Add Product</Text>
        </Button>
      </Container>
    );
  }
}

export default ProductAdd;
