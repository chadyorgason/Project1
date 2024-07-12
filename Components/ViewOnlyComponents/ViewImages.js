// // ViewImages.js
// import React, { Component } from 'react';
// import { View, Text, ActivityIndicator } from 'react-native';
// import { fetchImages } from './FetchImages';
// import { styles } from '../../assets/styles/styles';
// import { ViewRender } from './ViewRender';

// class ViewImages extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             imageUrls: [],
//             loading: true,
//         };
//     }

//     async loadImages(galleryName) {
//         try {
//             const urls = await fetchImages(galleryName);
//             this.setState({ imageUrls: urls, loading: false });
//         } catch (error) {
//             this.setState({ loading: false });
//         }
//     }

//     componentDidMount() {
//         const { galleryName } = this.props;
//         this.loadImages(galleryName);
//     }

//     componentDidUpdate(prevProps) {
//         if (prevProps.galleryName !== this.props.galleryName) {
//             this.setState({ loading: true });
//             this.loadImages(this.props.galleryName);
//         }
//     }

//     render() {
//         const { imageUrls, loading } = this.state;

//         if (loading) {
//             return <Text>Loading...</Text>;
//         }

//         return (
//             <View>
//                 {imageUrls.length > 0 ? (
//                     ViewRender(imageUrls, styles)
//                 ) : (
//                     <Text>No images found</Text>
//                 )}
//             </View>
//         );
//     }
// }

// export default ViewImages;