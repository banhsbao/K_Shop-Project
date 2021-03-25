import React, { useState } from "react";
import { Grid, Fab } from "@material-ui/core";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import red from "@material-ui/core/colors/red";
import blue from "@material-ui/core/colors/blue";
import { withStyles } from "@material-ui/core/styles";
const styles = (theme) => ({
  icon: {
    margin: theme.spacing.unit * 2,
  },
  inconHover: {
    margin: theme.spacing.unit * 2,
    "&:hover": {
      color: red[800],
    },
  },
  input: {
    display: "none",
  },
  button: {
    color: blue[900],
    margin: 10,
  },
});

const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const [image, setImage] = useState("");

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleUpload = async (event) => {
    var file = event.target.files[0];
    setSelectedFile(file);
    const value = await convertBase64(file);
    setImage(value);
  };

  return (
    <Grid
      style={{
        margin: "30px 50px",
      }}
    >
      <Grid item>
        <input
          accept="image/*"
          id="contained-button-file"
          multiple
          type="file"
          onChange={handleUpload}
        />
        <label htmlFor="contained-button-file">
          <Fab component="span">
            <AddPhotoAlternateIcon />
          </Fab>
        </label>
        <img style={{ width: "50%" ,margin:'0 50px'}} src={image} />
      </Grid>
    </Grid>
  );
};
export default withStyles(styles, { withTheme: true })(ImageUpload);
