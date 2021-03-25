import React from "react";

const ImagePro = (props) => {
  const { Image } = props;
  return (
    <div>
      <img
        alt=""
        style={{
          maxHeight: "700px",
          width: "100%",
          objectFit: "cover",
        }}
        src={Image}
      ></img>
    </div>
  );
};

ImagePro.propTypes = {};

export default ImagePro;
