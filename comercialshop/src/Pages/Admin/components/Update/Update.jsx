import React from "react";
import "./index.css";
import {
  Container,
  Grid,
  TextField,
  Button,
  CardContent,
  Fab,
} from "@material-ui/core";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";

const Update = (props) => {
  const { product } = props;
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
    const value = await convertBase64(file);
  };
  return (
    <Container>
      <CardContent>
        <Grid>
          <TextField
            style={{ margin: "0 50px" }}
            label="ProductName"
            defaultValue={product.ProductName}
            required
            type="text"
          />
        </Grid>
        <Grid>
          <TextField
            style={{ margin: "0 50px" }}
            required
            label="Quantity"
            type="number"
          />
          <TextField required label="Price" type="number" />
        </Grid>
        <Grid
          style={{
            margin: "30px",
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
            <img style={{ width: "25%", margin: "0 50px" }} src={product.Image} />
          </Grid>
        </Grid>
        <Grid>
          <Button
            style={{ margin: "0 300px" }}
            variant="contained"
            color="secondary"
          >
            Update
          </Button>
        </Grid>
      </CardContent>
    </Container>
  );
};
export default Update;
