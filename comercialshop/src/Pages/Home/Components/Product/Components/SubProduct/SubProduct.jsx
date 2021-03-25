import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Link from "@material-ui/core/Link";
import PropTypes from "prop-types";
import React from "react";
import "../SubProduct/SubProduct.css";
import { Modal, Button } from "antd";
import { useState } from "react";
const SubProduct = (props) => {
  const { img, price, productname, productid } = props;
  const [modalVisible, setmodalVisible] = useState(false);
  const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(1),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  }));
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid item xs={12} md={6} lg={3}>
        <Container maxWidth="sm">
          <Typography
            component="div"
            style={{
              // backgroundColor: "#cfe8fc",
              // width: "400px",
              height: "650px",
            }}
          >
            <div>
              <img  onClick={() => setModalVisible(true)} src={img} id={productid} ></img>
            </div>
            <div>
              <div>
                <Typography
                  variant="overline"
                  display="block"
                  gutterBottom
                  style={{ fontSize: "15px" }}
                >
                  <Link
                    onClick={() => setModalVisible(true)}
                    style={{ color: "#000", textDecorationLine: "none" }}
                  >
                    {productname}
                  </Link>
                  <Modal
                    title="Vertically centered modal dialog"
                    centered
                    visible={modalVisible}
                    footer={null}
                  >
                      <Link
                    style={{ color: "#000", textDecorationLine: "none" }}
                  >
                    {productname}
                  </Link>
                  </Modal>
                </Typography>
                <Typography
                  variant="button"
                  display="block"
                  gutterBottom
                  style={{ fontSize: "15px", fontWeight: "bold" }}
                >
                  ${price}
                </Typography>
                <Tooltip title="Like">
                  <IconButton aria-label="Like">
                    <FavoriteIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Add to Cart">
                  <IconButton aria-label="Add to Cart">
                    <ShoppingCartIcon />
                  </IconButton>
                </Tooltip>
              </div>
            </div>
          </Typography>
        </Container>
      </Grid>
    </React.Fragment>
  );
};

SubProduct.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  img: PropTypes.string,
  price: PropTypes.number,
};

export default SubProduct;
