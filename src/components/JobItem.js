// import React, { Component } from 'react';
// import { View, Text, ScrollView, Dimensions } from 'react-native';
// import { Button } from 'react-native-elements';

// const SCREEN_WIDTH = Dimensions.get('window').width;

// const styles = {
//   slideStyle: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: SCREEN_WIDTH,
//   },
//   slideText: {
//     fontSize: 30,
//     textAlign: 'center',
//     color: 'white',
//   },
//   buttonStyle: {
//     backgroundColor: '#0288D1',
//   },
// };

// class Slides extends Component {
//   renderLastSlide(index) {
//     if (index === this.props.data.length - 1) {
//       return (
//         <Button
//           title="Onwards!"
//           raised
//           buttonStyle={styles.buttonStyle}
//           onPress={this.props.onComplete}
//         />
//       );
//     }
//     return null;
//   }

//   renderSlides() {
//     return this.props.data.map((slide, index) => (
//       <View style={[styles.slideStyle, { backgroundColor: slide.color }]} key={slide.text}>
//         <Text style={styles.slideText}>{slide.text}</Text>
//         {this.renderLastSlide(index)}
//       </View>
//     ));
//   }

//   render() {
//     return (
//       <ScrollView horizontal pagingEnabled style={{ flex: 1 }}>
//         {this.renderSlides()}
//       </ScrollView>
//     );
//   }
// }

// export default Slides;
