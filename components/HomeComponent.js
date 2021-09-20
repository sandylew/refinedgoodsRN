import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';

import FadingSlides from 'react-native-fading-slides';

const { width, height } = Dimensions.get('window');

const slides = [
  {
    image: require('../public/1.jpg'),
    imageWidth: width - width * 0.2,
    imageHeight: width - width * 0.2,
    title: 'Refinished Side Table',
    subtitle: "Antiqued Side Table with teal drawer pulls.",
    price: "$79",
    titleColor: '#000',
    subtitleColor: 'brown',
  },
  {
    image: require('../public/2.jpg'),
    imageWidth: width - width * 0.2,
    imageHeight: width - width * 0.2,
    title: "Dad's Garage Sign",
    subtitle: "Unique metal sign for Dad's garage.",
    price: "$49",
    titleColor: '#000',
    subtitleColor: 'brown',
  },
  {
    image: require('../public/3.jpg'),
    imageWidth: width - width * 0.2,
    imageHeight: width - width * 0.2,
    title: "Vintage Spool Cabinet",
    subtitle: "Vintage commercial spool cabinet.",
    price: "$179",
    titleColor: '#000',
    subtitleColor: 'brown',
  },
];

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FadingSlides slides={slides} fadeDuration={200} stillDuration={2000} height={height} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: .75,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  image: {
    borderWidth: 3,
    borderColor: "#20232a",
    borderRadius: 6,
  }
});
