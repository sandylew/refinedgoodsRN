import React, { Component } from 'react';
import { Image } from 'react-native';
import Animated from 'react-native-reanimated';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

class ListItem extends Component {
    state= {
        animatePress: new Animated.Value(1)
    }

    animateIn() {
        Animated.timing(this.state.animatePress, {
            toValue: 0.8,
            duration: 200
        }).start()
    }

    animateOut() {
        Animated.timing(this.state.animatePress, {
            toValue: 1,
            duration: 200
        }).start()
    }

    render() {
        const {itemWidth} = this.props
        return (
            <TouchableWithoutFeedback
            onPressIn={() => this.animateIn()}
            onPressOut={() => this.animateOut()}
            >
                <Animated.View style={{
                    margin:5,
                    
                    transform: [
                        {
                            scale: this.state.animatePress
                        }
                    ]
                }}>
                    <Image style={{width:180 , height: 200, borderTopRightRadius: 20, borderColor: "#195640",
          borderWidth: 2,
 }} source={this.props.image}></Image>
                </Animated.View>
            </TouchableWithoutFeedback>
        )
    }
}
export default ListItem;