import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import React, { useEffect, useState } from "react";
import productApi from "../../Api/SubApi/productApi";
import Header from "../../Components/Navbar/Navbar";
// import Product from "./Components/Product/Product";
import Product from "../../Components/Product/Product";
import Carousels from "./Components/Carousel/Caroursel";
import Filter from "./Components/Filter/Filter";
import Paginations from "./Components/Pagination/Pagination";
const Home = (props) => {
  const [data, setData] = useState([]);
  const [dataTmp, setdataTmp] = useState([]);
  const [dataLength, setDataLength] = useState(1);
  useEffect(() => {
    const fectProductList = async () => {
      try {
        const response = await productApi.getAll();
        const arrTmp = [...response];
        setData(response);
        const datal = Math.ceil(response.length / 8);
        setDataLength(datal);
        setdataTmp(arrTmp.splice(0, 8));
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
  };
  const changeData = (value) => {
    const newData = [...data];
    if (value * 8 > data.length) {
      setdataTmp(newData.slice(value * 8 - 8, data.length));
    } else {
      setdataTmp(newData.slice(value * 8 - 8, value * 8));
    }
  };
  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <div style={{ height: "80px" }}></div>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xl">
          <Typography component="div" style={style.homeBody}>
            <Carousels></Carousels>
            <Filter></Filter>
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

Home.propTypes = {};

export default Home;
