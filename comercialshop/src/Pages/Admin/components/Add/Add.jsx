import React, { useState } from "react";
import ImageUpload from "../ImageUpload/ImageUpload";
import {
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
  const { opened, onClose } = props;
  const classes = useStyles();
  const handleCreate = () => {};

  const handleChange = (event) => {};

  const handleClose = () => {
    onClose();
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
            type="text"
          />
        </Grid>
        <Grid>
          <TextField
            style={{ margin: "0 50px" }}
            required
            label="Quantity"
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
          <Grid>
            <ImageUpload />
          </Grid>
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
        <Grid></Grid>
        <Grid>
          <Button
            style={{ margin: "0 200px" }}
            onClick={{ handleCreate }}
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
