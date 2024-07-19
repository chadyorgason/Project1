import React from 'react';
import { DownloadImage } from './DownloadImage';

const DownloadPhotoButton = ({ photoUrl, folder, fileName, photoID }) => {
  const handleDownload = () => {
    DownloadImage({ photoUrl, folder, fileName, photoID })
  };

  return (
    <button onClick={handleDownload}>Download</button>
  );
};

export default DownloadPhotoButton;
