import React, { useState } from "react";

function ImageUpload({ onUpload }) {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);

  const handleImageUpload = (event, setImage) => {
    const file = event.target.files[0];
    setImage(URL.createObjectURL(file));
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => handleImageUpload(e, setImage1)}
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => handleImageUpload(e, setImage2)}
      />
      <button onClick={() => onUpload(image1, image2)}>Merge Images</button>
    </div>
  );
}

export default ImageUpload;
