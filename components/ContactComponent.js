import React, { Component } from 'react';
import { Card } from 'react-native-elements';
import { ScrollView, Text } from 'react-native';

class Contact extends Component{

    constructor(props) {
        super(props);
    }
    static navigationOptions = {
        title: 'Contact Us'
    }

    render() {
        return (
            <ScrollView>
                <Card 
                    wrapperStyle={{margin: 20}}>
                    <Text>Oregon, Wisconsin</Text>
                    <Text>Phone: 1-608-123-4567</Text> 
                        <br />
                    <Text>Email: refinedgoods@gmail.com</Text>
                </Card>
            </ScrollView>
        );
    }
    
    render() {
        return (
            <ScrollView>
                <Card 
                    title="Send us your Feedback"
                    wrapperStyle={{margin: 20}}>
                    <Text>Insert Contact Form</Text>
                </Card>
            </ScrollView>
        );
    }}

export default Contact;