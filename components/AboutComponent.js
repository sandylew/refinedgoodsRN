import React, { Component } from 'react';
import { Card } from 'react-native-elements';
import { ScrollView, Text } from 'react-native';


// import { NavLink } from 'react-router-dom';

class About extends Component {
    
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: 'About Us'
    }

    render() {
        return (
            <ScrollView>
                <Card 
                    title="About Us"
                    wrapperStyle={{margin: 20}}>
                    <Text>Our Mission</Text>
                    <Text>We find and refinish or repurpose antique or vintage items. We beleive in keeping the integirty of antique items and try to restore them to their former glory. Check back often for new items!</Text>
                </Card>
            </ScrollView>
        );
    }
}

export default About;


