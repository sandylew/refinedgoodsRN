import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { AVAILABLEITEMS } from '../shared/availableitems';

function RenderItem(props) {

    const {availableitem} = props;

    if (availableitem) {
        return (
            <Card
                featuredTitle={availableitem.name}
                image={require('../public/1.jpg')}
            >
                <Text style={{margin: 10}}>
                    {availableitem.description}
                </Text>
                <Icon
                    name={props.addtocart ? 'cart' : 'cart-o'}
                    type= 'font-awesome'
                    color='#f50'
                    raised
                    reverse
                    onPress={() => props.addtocart ? 
                        console.log('Item already in cart') : props.markItem() }
                />
            </Card>
        );
    }
    return <View />;
}

function RenderItems({availableitems}) {
    const renderItem = ({item}) => {
        return (
            <View style={{margin: 10}}>
            <Text style={{fontSize: 14}}>{item.text}</Text>
            <Text style={{fontSize: 12}}>{item.rating} Stars</Text>
            <Text style={{fontSize: 12}}>{`-- ${item.author}, ${item.date}`}</Text>
        </View>
    );
};

    return (
        <Card title='Item'>
            <FlatList
            data={availableitems}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            />
        </Card>
    )
}
class ItemInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            availableitems: AVAILABLEITEMS, 
            cart: false
        };
    }

    markCart() {
        this.setState({cart: true});
    }
    static navigationOptions = {
        title: 'Item Information'
    }

    render() {
        const availableitemId = this.props.navigation.getParam('availableitemId');
        const availableitem = this.state.availableitems.filter(availableitem => availableitem.id === availableitemId)[0];

        return (
            <ScrollView>
                <RenderItem availableitem={availableitem} 
                    cart={this.state.cart}
                    markCart={() => this.markCart()}
                    />
                <RenderItems availableitems={availableitems} />
            </ScrollView>
        );
    }
}

export default ItemInfo;


