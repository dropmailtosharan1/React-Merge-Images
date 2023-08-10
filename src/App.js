import { useState } from "react";
import ImageMerge from "./ImageMerge";
import ImageUpload from "./ImageUpload";
import "./styles.css";

export default function App() {
  const [mergedImage, setMergedImage] = useState(null);

  const mergeImages = async (image1, image2) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const img1 = new Image();
    img1.src = image1;
    await img1.decode();

    const img2 = new Image();
    img2.src = image2;
    await img2.decode();

    canvas.width = Math.max(img1.width, img2.width);
    canvas.height = Math.max(img1.height, img2.height);

    ctx.drawImage(img1, 0, 0);
    ctx.drawImage(img2, 0, 0);

    const mergedImageUrl = canvas.toDataURL("image/png");
    setMergedImage(mergedImageUrl);
  };

  return (
    <div>
      <h1>Image Merge App</h1>
      <ImageUpload onUpload={mergeImages} />
      {mergedImage && <ImageMerge mergedImage={mergedImage} />}
    </div>
  );
}
