import React, { Component } from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity, Alert } from 'react-native';
import SharedLink from './SharedLink';
import { styles } from '../assets/styles/styles';
import * as Clipboard from 'expo-clipboard';
import { Ionicons } from '@expo/vector-icons';

class ReturnURL extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shareableURL: null,
      loading: true,
      copied: false,
    };
  }

  componentDidMount() {
    const { currentFolder } = this.props;
    const thisFolder = currentFolder.currentFolder;
    console.log("thisFolder")
    console.log(thisFolder)
    console.log(currentFolder)
    console.log(this.props)

    SharedLink(currentFolder)
      .then((url) => {
        this.setState({ shareableURL: url, loading: false });
      })
      .catch((error) => {
        console.error('Error:', error);
        this.setState({ loading: false });
      });
  }

  copyToClipboard = async () => {
    await Clipboard.setString(this.state.shareableURL);
    this.setState({ copied: true }, () => {
        setTimeout(() => this.setState({ copied: false }), 5000); // Hide alert after 5 seconds
      });
  };

  render() {
    const { titleComponent, rows } = this.props;
    const { shareableURL, loading, copied } = this.state;

    if (loading) {
      return <ActivityIndicator />; // Render loading indicator while fetching the URL
    }

    const shareLinkComponent = (
      <View style={styles.content}>
        <Text style={styles.title}>Sharelink</Text>
        <Text>{shareableURL}</Text>
        <TouchableOpacity style={styles.copybutton} onPress={this.copyToClipboard}>
          <Ionicons name='copy' size={20} color='grey' />
        </TouchableOpacity>

      </View>
    );

    const alert = (
      <View>
        {copied && (
          <View style={styles.rightColumn}>
            <View style={styles.alert}>
              <Text style={styles.alertText}>Link copied to clipboard!</Text>
            </View>
          </View>
        )}
      </View>
    );

    return (
      <View>
        {titleComponent}
        {shareLinkComponent}
        {rows}
        {alert}
      </View>
    );
  }
}

export default ReturnURL;