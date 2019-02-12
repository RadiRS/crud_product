import React, { Component } from 'react';
import {
  Container,
  Content,
  Thumbnail,
  Card,
  CardItem,
  Body,
  Text,
  Icon,
  Button
} from 'native-base';

export class ProductDetail extends Component {
  render() {
    const {
      name,
      image,
      shop,
      price,
      description
    } = this.props.navigation.state.params;

    const product = this.props.navigation.state.params;

    return (
      <Container>
        <Content padder>
          <Thumbnail
            style={{
              flex: 1,
              height: 300,
              width: null
            }}
            source={{ uri: image }}
          />
          <Card noShadow style={{ borderTopWidth: 10, borderRadius: 30 }}>
            <Button
              onPress={() =>
                this.props.navigation.navigate('ProductUpdate', product)
              }
              style={{ position: 'relative', alignSelf: 'flex-end' }}
              transparent
            >
              <Icon name="add" />
            </Button>
            <CardItem header>
              <Text style={{ fontSize: 25 }}>{name}</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text style={{ fontSize: 20 }}>{description}</Text>
              </Body>
            </CardItem>
            <CardItem
              footer
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <Text style={{ fontSize: 20 }}>{shop}</Text>
              <Text style={{ fontSize: 20 }}>Rp{price}</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default ProductDetail;
