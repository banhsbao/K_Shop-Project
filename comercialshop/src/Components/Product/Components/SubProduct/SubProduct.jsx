import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Modal } from "antd";
import PropTypes from "prop-types";
import React, { useState } from "react";
import VirewProduct from "../../../VIewProduct/VirewProduct";
import "../SubProduct/SubProduct.css";
const SubProduct = (props) => {
  const { subproduct } = props;
  const [modalVisible, setmodalVisible] = useState(false);

  const setModalVisible = (modalVisible) => {
    setmodalVisible(modalVisible);
  };
  
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
              <img alt="" style={{cursor:'pointer'}} onClick={() => setModalVisible(true)} src={subproduct.Image} id={subproduct.ProductId}></img>
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
                    {subproduct.ProductName}
                  </Link>
                  <Modal
                    centered
                    visible={modalVisible}
                    onCancel={() => setModalVisible(false)}
                    footer={null}
                    width={1100}
                    maskStyle={{backgroundColor:'rgba(180, 180, 180,0.6)'}}
                  >
                      <VirewProduct product={subproduct}></VirewProduct>
                  </Modal>
                </Typography>
                <Typography
                  variant="button"
                  display="block"
                  gutterBottom
                  style={{ fontSize: "15px", fontWeight: "bold" }}
                >
                  ${subproduct.Price}
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
  subproduct:PropTypes.object,
};

export default SubProduct;
