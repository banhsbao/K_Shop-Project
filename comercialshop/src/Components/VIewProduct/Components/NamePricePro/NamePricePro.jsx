import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import React from "react";
const NamePricePro = (props) => {
    const {ProductName,Price}=props;
  return (
    <div>
      <Typography
        variant="overline"
        display="block"
        gutterBottom
        style={{ fontSize: "18px", fontWeight: "400" }}
      >
        <Box letterSpacing={4}>{ProductName}</Box>
      </Typography>
      <Box component="fieldset" borderColor="transparent">
        <Rating name="read-only" value={4} readOnly />
      </Box>
      <Typography
        variant="overline"
        display="block"
        gutterBottom
        style={{ fontSize: "20px", fontWeight: "600" }}
      >
        <Box letterSpacing={0}>${Price}</Box>
      </Typography>
    </div>
  );
};

NamePricePro.propTypes = {};

export default NamePricePro;
