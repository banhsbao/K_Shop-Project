import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import React,{useState} from "react";
import SubProduct from "./Components/SubProduct/SubProduct";
import PropTypes from 'prop-types';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));
const Product = (props) => {
  const classes = useStyles();
  const {data} =props;
  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid container item xs={12}  spacing={2} style={{display:'inline-flex',justifyContent:'center'}}>
          { 
             data.map((product) =>  <SubProduct key={product.ProductId} subproduct={product} />)
          }
        </Grid>
      </Grid>
    </div>
  );
};

Product.propTypes = {
    data:PropTypes.array,
};

export default Product;
