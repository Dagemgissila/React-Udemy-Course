"use client";
import { useState } from "react";
import { useRef } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";
const ImagePicker = ({ label, name }) => {
  const [pickedImage, setPickedImage] = useState(null);
  const imageRef = useRef();
  function handleClicked() {
    imageRef.current.click();
  }

  function handleImageChange() {
    const file = imageRef.current.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPickedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>

      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && <Image src={pickedImage} alt="Picked" fill />}
        </div>
        <input
          type="file"
          className={classes.input}
          id={name}
          name={name}
          ref={imageRef}
          onChange={handleImageChange}
          accept=".jpg,.jpeg,.png"
        />
        <button
          className={classes.button}
          type="button"
          onClick={handleClicked}
        >
          Picke Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
