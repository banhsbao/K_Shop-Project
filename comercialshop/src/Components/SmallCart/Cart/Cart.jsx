import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import DescriptionPro from "./Components/DescriptionPro/DescriptionPro";
import FooterViewProduct from "./Components/FooterViewProduct/FooterViewProduct";
import ImagePro from "./Components/ImagePro/ImagePro";
import NamePricePro from "./Components/NamePricePro/NamePricePro";
const VirewProduct = (props) => {
    const { product } = props;
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(0),
            textAlign: "center",
            color: theme.palette.text.secondary,
        },
    }));

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={4} style={{ display: "flex", alignItems: "center" }}>
                    <Paper className={classes.paper}>
                        <ImagePro Image={product.Image}></ImagePro>
                    </Paper>
                </Grid>
                <Grid item xs={8}>
                    <Typography component="div" style={{ marginLeft: "100px" }}>
                        <Typography component="div">
                            {/* Name - price */}
                            <NamePricePro
                                ProductName={product.ProductName}
                                Price={product.Price}
                            ></NamePricePro>
                            {/* Description Product */}
                            <DescriptionPro></DescriptionPro>
                            {/* Footer View Product : Quanity - Increase/Decrease Quanity - Amount */}
                            <FooterViewProduct
                                Quanity={product.Quanity}
                                Price={product.Price}
                            ></FooterViewProduct>
                        </Typography>
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
};

VirewProduct.propTypes = {};

export default VirewProduct;
