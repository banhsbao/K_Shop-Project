import React, { useState } from "react";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import {
  Fab,
  makeStyles,
  FormControl,
  InputLabel,
  Select,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  TextField,
  Grid,
  Button,
} from "@material-ui/core";
import productApi from "../../../../Api/SubApi/productApi";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Add = (props) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(1);
  const [categoryId,setCategoryId]=useState(1);
  const { opened, event, onClose } = props;
  const classes = useStyles();
  const handleCreate = () => {
    const data = new FormData();
    data.append("File", selectedFile);
    data.append('Button',"Create");
    data.append("ProductName",name);
    data.append("Quantity", quantity);
    data.append("Price",price);
    data.append("CategoryId",categoryId);
    data.append("ProductId",112);
    const createProduct= async()=>{
      try{
        const respone = await productApi.addProduct(data);
      }catch(error){
        console.log(error);
      }
    }
    createProduct();
    event();
  };

  const handleChange = (event) => {
    setCategoryId(event.target.value);
  };
  const handleNameChange = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };
  const handleQuantityChange = (event) => {
    console.log(event.target.value);
    setQuantity(event.target.value);
  };
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };
  const handleUpload = async (event) => {
    var file = event.target.files[0];
    setSelectedFile(file);
    const value = await convertBase64(file);
    setImage(value);
  };

  const handleClose = () => {
    onClose();
  };
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
  return (
    <Dialog onClose={handleClose} open={opened}>
      <DialogTitle>
        <div>
          <Typography variant="h6" component="div">
            Add Product
          </Typography>
        </div>
      </DialogTitle>
      <DialogContent dividers>
        <Grid>
          <TextField
            style={{ margin: "0 50px" }}
            label="ProductName"
            required
            onChange={handleNameChange}
            type="text"
          />
        </Grid>
        <Grid>
          <TextField
            style={{ margin: "0 50px" }}
            required
            label="Quantity"
            onChange={handleQuantityChange}
            type="number"
            inputProps={{
              min: 1,
            }}
          />
          <TextField
            required
            label="Price"
            type="number"
            inputProps={{
              min: 1,
            }}
          />
        </Grid>
        <Grid>
          <Grid></Grid>
          <Grid>
            <FormControl
              style={{ margin: "30px 50px" }}
              variant="outlined"
              className={classes.formControl}
            >
              <InputLabel htmlFor="outlined-age-native-simple">
                Category
              </InputLabel>
              <Select
                native
                onChange={handleChange}
                label="Category"
                inputProps={{
                  name: "category",
                  id: "outlined-age-native-simple",
                }}
              >
                <option default value={1}>
                  Áo
                </option>
                <option value={2}>Quần</option>
                <option value={3}>Phụ kiện</option>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid>
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
              <img style={{ width: "50%", margin: "0 50px" }} src={image} />
            </Grid>
          </Grid>
        </Grid>
        <Grid>
          <Button
            style={{ margin: "0 200px" }}
            onClick={ handleCreate }
            variant="contained"
            color="secondary"
          >
            Add
          </Button>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};
export default Add;
