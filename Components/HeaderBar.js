import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../assets/styles/styles';

// export const HeaderBar = () => {
//   return (
//     <View style={styles.headerContainer}>
//       <Text>Header Title</Text>
//     </View>
//   );
// };

class HeaderBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: Dimensions.get('window').width,
    };
  }

  componentDidMount() {
    // Add event listener when the component mounts
    Dimensions.addEventListener('change', this.handleResize);
  }

  componentWillUnmount() {
    // Remove event listener when the component unmounts
    Dimensions.removeEventListener('change', this.handleResize);
  }

  handleResize = () => {
    // Update the state with the new window width
    this.setState({ windowWidth: Dimensions.get('window').width });
  };

  render() {
    const { windowWidth } = this.state;
    return (
      <View style={[styles.headerContainer, { width: windowWidth * 0.3 }]}>
        <Text>Header Title</Text>
      </View>
    );
  }
}

export default HeaderBar;