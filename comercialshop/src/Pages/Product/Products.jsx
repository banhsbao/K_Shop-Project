import { Divider } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import React, { useState } from "react";
import { useEffect } from "react";
import productApi from "../../Api/SubApi/productApi";
// import Product from "../Home/Components/Product/Product";
import Product from "../../Components/Product/Product";
import Paginations from "../Home/Components/Pagination/Pagination";
import Breadcrumb from "./Components/Breadcrumbs/Breadcrumb";
import Filter from "./Components/FIlter/Filter";

const Products = (props) => {
  const [data, setData] = useState([]);
  const [dataTmp, setdataTmp] = useState([]);
  const [dataLength, setDataLength] = useState(1);
  const [max, setMax] = useState(0);
  useEffect(() => {
    const fectProductList = async () => {
      try {
        const response = await productApi.getAll();
        const arrTmp = [...response];
        setdataTmp(arrTmp.splice(0, 12));
        setData(response);
        const datal = Math.ceil(response.length / 12);
        setDataLength(datal);
        let maxTmp = 0;
        for (let index = 0; index < response.length; index++) {
          if (maxTmp <= response[index].Price) {
            maxTmp = response[index].Price;
          }
        }
        setMax(maxTmp);
      } catch (error) {
        console.log("fail: ", error);
      }
    };

    fectProductList();
  }, []);
  const style = {
    homeBody: {
      margin: "0 60px 0 60px",
    },
    title: {
      backgroundColor: "#E5DFCA",
      height: "500px",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    product: { fontSize: "50px", color: "#fff" },
  };

  // Paging
  const changeData = (value) => {
    const newData = [...data];
    if (value * 12 > data.length) {
      setdataTmp(newData.slice(value * 12 - 12, data.length));
    } else {
      setdataTmp(newData.slice(value * 12 - 12, value * 12));
    }
  };
  const searchData = async (txtSearch, minPrice, maxPrice, cate) => {
    if (cate === "All") {
      cate = "";
    }
    //get Api search'
    try {
      const response = await productApi.searchProduct();
      const arrTmp = [...response];
      setdataTmp(arrTmp.splice(0, 12));
      setData(response);
      const datal = Math.ceil(response.length / 12);
      setDataLength(datal);
      let maxTmp = 0;
      for (let index = 0; index < response.length; index++) {
        if (maxTmp <= response[index].Price) {
          maxTmp = response[index].Price;
        }
      }
      setMax(maxTmp);
    } catch (error) {
      console.log("fail: ", error);
    }
  };
  return (
    <div>
      <div style={{ height: "80px" }}></div>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xl">
          {/* Title Page: Product */}
          <Typography component="div" style={style.title}>
            <Typography
              variant="button"
              display="block"
              gutterBottom
              style={style.product}
            >
              PRODUCTS
            </Typography>
          </Typography>
          <Typography component="div" style={style.homeBody}>
            <Breadcrumb />
            <Filter
              datalength={data.length}
              maxPrice={max}
              searchData={searchData}
            ></Filter>
            <Typography
              component="div"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Divider style={{ marginBottom: "30px", width: "70%" }} />
            </Typography>
            <Product data={dataTmp}></Product>
            <Paginations
              changeData={changeData}
              datalength={dataLength}
            ></Paginations>
          </Typography>
        </Container>
      </React.Fragment>
    </div>
  );
};

Products.propTypes = {};

export default Products;
