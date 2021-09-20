import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Image, Dimensions } from 'react-native';
import ListItem from './ListItemComponent';

// const data = [
//     {key: ('../assets/img/00-WhiteSideTable-1.jpg') }, { key: 'B' }, { key: 'C' }, { key: 'E' }, { key: 'F' }, {key: 'G' }
// ];

// const formatData = (data, numColumns) => {
//     const numberOfFullRows = Math.floor(data.length / numColumns);

//     let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
//     while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
//         data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
//         numberOfElementsLastRow = numberOfElementsLastRow + 1;
//     }

//     return data;
// };

// const numColumns = 2;

// export default class Shop extends Component {
//     renderItem = ({ item, index }) => {
//         if (item.empty === true) {
//             return <View style={[styles.item, styles.itemInvisible]} />;
//         }
//         return (
//             <View 
//             style={styles.item}
//             >
//                 <Text style={styles.itemText}>{item.key}</Text>
//                 <Image
//                 style={{ width: 165, height: 165 }}
//                 resizeMode="contain"
//                 alignItems="center"
//                 source={require('../assets/img/00-WhiteSideTable-1.jpg')}
//                 />
//                 <Text style= {{ margin: 10 }}></Text>
//                 <Text style={{ fontSize: 14 }}>{item.text}</Text>
//             </View>
//         );
//     };

const ITEM_WIDTH = Dimensions.get('window').width
class Shop extends Component {
    state= {
        columns: 2
    }

    render () {
        const {columns} = this.state
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>Refined Goods</Text>
                    <Text>Browse our available items!</Text>
                <FlatList
                numColumns={columns}
                    data={[
                        require("../assets/img/00-WhiteSideTable-1.jpg"),
                        require("../assets/img/01dadsGarage-1.jpg"),
                        require("../assets/img/02Cabinet-1.jpg"),
                        require("../assets/img/03joutl-1.jpg"),
                        require("../assets/img/04schwinn-1.jpg"),
                        require("../assets/img/05bench-01.jpg"),
                    ]}
                    renderItem={({item}) => {
                        return <ListItem itemWidth={ITEM_WIDTH/2} image={item}/>
                    }}
                    keyExtractor={
                        (index)=>{return index}
                    }
                />                
            </View>
        )
    }
}
//             <FlatList
//                 data={formatData(data, numColumns)}
//                 style={styles.container}
//                 renderItem={this.renderItem}
//                 numColumns={numColumns}
//             />
//         );
//     }
// };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        marginVertical: 10,
        marginHorizontal: 7,
    },
});

export default Shop;


    // item: {
    //     backgroundColor: '#195640',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     flex: 1,
    //     margin: 1,
    //     height: Dimensions.get('window').width / numColumns
    // },
    // itemInvisible: {
    //     backgroundColor: 'transparent',
    // },
    // itemText: {
    //     color: '#fff',
    // },
    // });


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