import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { AVAILABLEITEMS } from '../shared/availableitems';

class Shop extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Availableitems: AVAILABLEITEMS
        };
    }

    static navigationOptions = {
        title: 'Shop'
    };

    render () {
        const { navigate } = this.props.navigation;
        const renderShopItem = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    onPress={() => navigate('AvailableitemPage', { Id: item.id})}
                    leftAvatar={{ source: require('../assets/img/00-WhiteSideTable-1.jpg')}}
                />
            );
        };

        return (
            <FlatList
                data={this.state.availableitems}
                renderItem={renderShopItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default Shop;

// import React from 'react';
// import { Card, CardText, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';


//     function RenderShopItem({availableitem}) {
    
//         return (
//             <div className= "row row-content">
//                 <div className="container">
//                     <div className="col-md-12 m-1 ">
//                     <Card>
//                         <CardImg src={availableitem.image} alt={availableitem.name} />
//                             <CardImgOverlay>
//                                 <CardTitle>{availableitem.name}</CardTitle>
//                             </CardImgOverlay>
//                                 <CardText className="col-12">{availableitem.description}</CardText>
//                                 <CardTitle><strong>{availableitem.price}</strong></CardTitle>
//                     </Card>
//                     </div>
//                 </div>
//             </div>
//         );
//     }

    
//     function Shop(props) {
    
//         const shop = props..map(availableitem => {
//             return (
//                 <div className= "container col-md m-1">
//                     <div key={availableitem.id} >
//                         <RenderShopItem availableitem={availableitem} />
//                     </div>
//                 </div>
//             );
//         })

//         return (
//             <div className="container">
//                 <div className="row">
//                     {shop}
//                 </div>
//             </div>
//         );
//     }
// export default Shop;