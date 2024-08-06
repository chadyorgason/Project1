import React from 'react';
import { DownloadImage } from './DownloadImage';

const DownloadPhotoButton = ({ folder, fileName, photoID }) => {
  const handleDownload = () => {
    DownloadImage({ folder, fileName, photoID })
  };

  return (
    <button onClick={handleDownload}>Download</button>
  );
};

export default DownloadPhotoButton;
