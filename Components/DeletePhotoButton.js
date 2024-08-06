import React from 'react';
import { DeleteImage } from './DeleteImage';

const DeletePhotoButton = ({ folder, fileName }) => {
  const handleDelete = () => {
    DeleteImage({ folder, fileName })
  };

  return (
    <button onClick={handleDelete}>Delete</button>
  );
};

export default DeletePhotoButton;
